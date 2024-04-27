// @ts-nocheck

import type { PageServerLoad } from "./$types";
import { fail } from "@sveltejs/kit";
import * as ids from "$lib/database/items.json";
import { OpenDota } from "$lib/use-cases/open-dota";
import { rokusho } from "$lib/constants";

const reviews = [
  {
    username: "Rokusho",
    comment: "I hated this guy. doesnt know how to play at ALLLLLLLLLLL",
    date: "JUL-16-2023",
    attitude: 3,
    skill: 1,
    impact: 5
  },
  {
    username: "Rykuno",
    comment: "Biggest Ego player. Should be perma banned",
    date: "MAR-29-2024",
    attitude: 1,
    skill: 5,
    impact: 5
  },
  {
    username: "Joshussy",
    comment: "very cute man. would recommend 5/5",
    date: "APR-01-2024",
    attitude: 2,
    skill: 4,
    impact: 3
  }
];

const itemsArray = ids.default;


function getItemsInfo(item) {
    return{
        name: item,
        
    }
}
function getItemNameById(itemId) {
    if(itemId !== 0){
        return {
            name: itemsArray[itemId.toString()],
            image: `https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/${itemsArray[itemId.toString()]}.png`
        };
    } else {
        return {
            name: null,
        }
    }
}



function sortHeroes(usersHeroes, allHeroes) {
  const arr = usersHeroes.map(userHero => {
    const matchingHero = allHeroes.find(
      (hero: any) => hero.id === userHero.hero_id
    );

    return {
      id: matchingHero.id,
      name: matchingHero.localized_name,
      img: matchingHero.img,
      wins: userHero.win,
      total: userHero.games
    };
  });
  return arr;
}

function decipherWin(value) {
    if(value === 1){
        return "bg-green-200"
    } else {
        return "bg-red-200"
    }
}


//This finds alll the information for the recent matches tab
const findRokushoMatchInfo = async (match) => {
    const matchData = await OpenDota.getMatchById(match.match_id)
    const heroData = await OpenDota.getHeroStats()

    const players = matchData.players
    const roki = players.find(acc => acc.account_id === rokusho)
    const matchingHero = heroData.find(name => name.id === roki.hero_id)
    return {
        match_id: match.match_id,
        win: decipherWin(roki.win),
        hero_name: matchingHero.localized_name,
        hero_image: matchingHero.img,
        hero_id: roki.hero_id,
        kills: roki.kills,
        deaths: roki.deaths,
        assists: roki.assists,
        damage: roki.hero_damage,
        last_hits: roki.last_hits,
        denies: roki.denies,
        items: {
            item_0: getItemNameById(roki.item_0),
            item_1: getItemNameById(roki.item_1),
            item_2: getItemNameById(roki.item_2),
            item_3: getItemNameById(roki.item_3),
            item_4: getItemNameById(roki.item_4),
            item_5: getItemNameById(roki.item_5),
        },
        backpack: {
            backpack_0: getItemNameById(roki.backpack_0),
            backpack_1: getItemNameById(roki.backpack_1),
            backpack_2: getItemNameById(roki.backpack_2),
        },
        item_neutral: getItemNameById(roki.item_neutral),

        net_worth: roki.net_worth,
    }
}

const conglomerateMatches = async (matchArray) => {
    const first = findRokushoMatchInfo(matchArray[0])
    const second = findRokushoMatchInfo(matchArray[1])
    const third = findRokushoMatchInfo(matchArray[2])
    const fourth = findRokushoMatchInfo(matchArray[3])
    // const fifth = findRokushoMatchInfo(matchArray[4])
    // const sixth = findRokushoMatchInfo(matchArray[5])

    return await Promise.all([
        first, 
        second, 
        third, 
        fourth, 
        // fifth, 
        // sixth
    ])
}

export const load = (async () => {
  const userHeroesData = await OpenDota.getHeroesByAccountId(rokusho);
  const myThree = userHeroesData.slice(0, 3);

  const allHeroesData = await OpenDota.getAllHeroesData();

  const allHeroesStatsData = await OpenDota.getHeroStats();

  const awaitFoundMatches = await OpenDota.getRecentMatchesById(rokusho);
  const foundMatches = awaitFoundMatches.slice(0, 6);


  return {
    reviews,
    userWinLossData: await OpenDota.getWinLoss(rokusho),
    topThree: sortHeroes(myThree, allHeroesStatsData),
    foundMatches,
    userHeroesData,
    recentMatches: await conglomerateMatches(foundMatches)
  };
}) satisfies PageServerLoad;

export const actions = {
  review: async event => {
    const currentDate = new Date()
      .toLocaleDateString("en-US", {
        year: "numeric",
        month: "short",
        day: "2-digit"
      })
      .toUpperCase()
      .replace(/,/g, "")
      .replace(/ /g, "-");
    const form = await event.request.formData();
    const username = form.get("username");
    const comment = form.get("comment");
    //@ts-ignore
    if (username.length < 2) {
      return fail(418, { username, missingUsername: true });
      //@ts-ignore
    } else {
      reviews.push({
        //@ts-ignore
        username: username,
        //@ts-ignore
        comment: comment,
        date: currentDate
      });
    }
    return { success: true };
  }
};
