import type { PageServerLoad } from './$types';
import { fail } from '@sveltejs/kit'

const Rokusho: number = 76561198054202136

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

const test = [

]
function rating() {

}

export const load = (async () => {




    return {reviews};
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
        if(username.length < 2){
            return fail(418, {username, missing:true})
        } else if(comment.length < 2){
            return fail(418, {username, missing2:true})
        } else {
            reviews.push({
                username: username,
                comment: comment,
                date: currentDate
            })
        }
        // console.log(leUser.className)
    }

}