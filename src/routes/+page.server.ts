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
        losses: 100
    },
    {
        name: "Anti-Mage",
        wins: 50000,
        losses: 2344
    },
    {
        name: "Drow-Ranger",
        wins: 542,
        losses: 74
    },
]

// const test = [

// ]
// function rating() {

// }

export const load = (async () => {
    const userProfileResponse = await fetch(`https://api.opendota.com/api/players/${Rokusho}`)
    const userProfileData = await userProfileResponse.json()

    const userWinLossResponse = await fetch(`https://api.opendota.com/api/players/${Rokusho}/wl`)
    const userWinLossData = await userWinLossResponse.json()
    
    const userHeroesResponse = await fetch(`https://api.opendota.com/api/players/${Rokusho}/heroes`)
    const userHeroesData = await userHeroesResponse.json()

    return {userProfileData, userWinLossData, reviews, hero};
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