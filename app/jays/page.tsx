
import PlayerNews from "../PlayerNews"
import { getData } from "../data"

export default async function Page() {
  const data = await getData('https://www.nbcsports.com/mlb/toronto-blue-jays/player-news')
  return <PlayerNews data={data} />
}

