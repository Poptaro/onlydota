// @ts-nocheck

export async function handle({ event, resolve }) {
  const Rokusho: number = 93936408;
  const donny: number = 38690498;
  const temper: number = 58142473;

  const users = { Rokusho, donny, temper };
  event.locals.users = users;
  const response = await resolve(event);
  return response;
}
