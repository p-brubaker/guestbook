import { client, parseData } from './client';

export async function getGuests() {
  const request = await client.from('guests').select().order('created_at');
  return parseData(request);
}

export async function addGuest({ name, entry }) {
  const request = await client.from('guests').insert({ name, entry });
  return parseData(request);
}

export async function deleteGuestById(id) {
  const request = await client.from('guests').delete().match({ id });
  return parseData(request);
}
