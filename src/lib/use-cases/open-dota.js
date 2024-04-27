// @ts-nocheck

async function getHeroesByAccountId(accountId) {
  const response = await fetch(
    `https://api.opendota.com/api/players/${accountId}/heroes`
  );
  return response.json();
}

async function getMatchById(matchId) {
  const response = await fetch(
    `https://api.opendota.com/api/matches/${matchId}`
  );
  return response.json();
}

async function getPlayerById(accountId) {
  const response = await fetch(
    `https://api.opendota.com/api/players/${accountId}`
  );
  return response.json();
}

async function getRecentMatchesById(accountId) {
  const response = await fetch(
    `https://api.opendota.com/api/players/${accountId}/recentMatches`
  );
  return response.json();
}

async function getHeroStats() {
  const response = await fetch(`https://api.opendota.com/api/heroStats`, {
    cache: "force-cache",
  });
  return response.json();
}

async function getWinLoss(accountId) {
  const response = await fetch(`https://api.opendota.com/api/players/${accountId}/wl`);
  return response.json();
}

async function getAllHeroesData() {
  const response = await fetch(`https://api.opendota.com/api/heroes`, {
    cache: "force-cache",
  });
  return response.json()
}

export const OpenDota = {
  getMatchById,
  getHeroesByAccountId,
  getPlayerById,
  getRecentMatchesById,
  getHeroStats,
  getWinLoss,
  getAllHeroesData,
};
