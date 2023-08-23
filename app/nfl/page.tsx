import PlayerNews from "../PlayerNews"
import { getData } from "../data"

export default async function Page() {
  // const data = await getData('https://www.nbcsports.com/fantasy/football/player-news?f0=Headline')
  return <PlayerNews data={[]} />
}