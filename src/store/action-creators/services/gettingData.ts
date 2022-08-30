import { SwapiUrl } from "../enum/SwapiUrl";

export async function gettingData(url: string) {
  const response = await fetch(`${SwapiUrl.BASE_URL}${url}`);
  return await response.json();
}
