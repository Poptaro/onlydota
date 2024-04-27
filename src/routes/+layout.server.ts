import { OpenDota } from "$lib/use-cases/open-dota";
import type { LayoutServerLoad } from "./$types";

const Rokusho: number = 93936408;

export const load = (async () => {
  return {
    userProfileData: await OpenDota.getPlayerById(Rokusho)
  };
}) satisfies LayoutServerLoad;
