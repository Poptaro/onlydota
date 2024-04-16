import type { PageServerLoad } from './$types';
import { fail } from '@sveltejs/kit'
import { toast } from 'svelte-sonner';

const Rokusho: number = 93936408


const reviews = [
    {
        username: "Rokusho",
        comment: "I hated this guy. doesnt know how to play at ALLLLLLLLLLL",
        date: "JUL-16-2023",
        attitude: 3,
        skill: 1,
        impact: 5,
    },
    {
        username: "Rykuno",
        comment: "Biggest Ego player. Should be perma banned",
        date: "MAR-29-2024",
        attitude: 1,
        skill: 5,
        impact: 5,
    },
    {
        username: "Joshussy",
        comment: "very cute man. would recommend 5/5",
        date: "APR-01-2024",
        attitude: 2,
        skill: 4,
        impact: 3,
    },
]

const hero = [
    {
        name: "Ursa",
        wins: 300,
        losses: 100,
        total: 400,
    },
    {
        name: "Anti-Mage",
        wins: 50000,
        losses: 2344,
        total: 50344,
    },
    {
        name: "Drow-Ranger",
        wins: 542,
        losses: 74,
        total: 616,
    },
]

const matches = [
    {
        matchid: 128274,
        hero: "Ursa",
        heroimg: "urssy",
        kills: 49,
        deaths: 5,
        assists: 3,
        damage: 289127,
        networth: 40235,
        items:[
            "Battle-Fury",
            "Phase Boots",
            "Blink-Dagger",
            "Black King Bar",
            "Satanic", 
            "Aghanim's Scepter"
        ],
        lh: 593,
        dn: 42,
    },
    {
        matchid: 289374,
        hero: "Anti-Mage",
        heroimg: "anti",
        kills: 42,
        deaths: 9,
        assists: 19,
        damage: 90192,
        networth: 52321,
        items:[
            "Battle-Fury",
            "Phase Boots",
            "Eye of Skadi",
            "Manta Style",
            "Butterfly", 
            "Aghanim's Scepter"
        ],
        lh: 900,
        dn: 87,
    },
    {
        matchid: 998347,
        hero: "Terror Blade",
        heroimg: "TB",
        kills: 90,
        deaths: 2,
        assists: 4,
        damage: 102494,
        networth: 87623,
        items:[
            "Hurricane Pike",
            "Boots",
            "Eye of Skadi",
            "Manta Style",
            "Butterfly", 
            "Aghanim's Scepter"
        ],
        lh: 1200,
        dn: 109,
    }
]
// const test = [

// ]
// function rating() {

// }

export const load = (async () => {


    // const userWinLossResponse = await fetch(`https://api.opendota.com/api/players/${Rokusho}/wl`)
    // const userWinLossData = await userWinLossResponse.json()
    
    // const userHeroesResponse = await fetch(`https://api.opendota.com/api/players/${Rokusho}/heroes`)
    // const userHeroesData = await userHeroesResponse.json()
    return { reviews, hero, matches};
}) satisfies PageServerLoad;


export const actions = {
    review: async (event) => {
        const currentDate = new Date().toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'short',
            day: '2-digit'
        }).toUpperCase().replace(/,/g, '').replace(/ /g, "-")
        const form = await event.request.formData()
        const username = form.get('username')
        const comment = form.get('comment')
        //@ts-ignore
        if(username.length < 2){
            return fail(418, {username, missingUsername:true})
        //@ts-ignore
        } else {
            reviews.push({
                //@ts-ignore
                username: username,
                //@ts-ignore
                comment: comment,
                date: currentDate
            })
        }
        return { success: true}
    }

}