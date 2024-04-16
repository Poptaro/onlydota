import type { LayoutServerLoad } from './$types';

const Rokusho: number = 93936408

export const load = (async () => {

    // const userProfileResponse = await fetch(`https://api.opendota.com/api/players/${Rokusho}`)
    // const userProfileData = await userProfileResponse.json()
    let userProfileData = "chungus"

    return {userProfileData};
}) satisfies LayoutServerLoad;