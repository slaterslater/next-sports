const {JSDOM} = require("jsdom");

export interface Story {
  playerImg: string;
  teamLogo: string
  headline: string;
  analysis: string;
  playerName: string;
  playerInfo: string;
}

export async function getData(url: string) {

  const getStoriesFromPage = async (n: number) => {
    const page = `${url}?p=${n}`
    // const res = await fetch(page, { next: { revalidate: 60 } })
    const res = await fetch(page)

    if (!res.ok) throw new Error(`Failed to fetch page ${n+1}`)

    const txt = await res.text()
    const dom = new JSDOM(txt)
    const list = dom.window.document.getElementsByClassName("PlayerNewsModuleList-item")
    
    const items = [...list].forEach(item => {
      const playerImg = item.querySelector(".PlayerNewsPost img").src
      const teamLogo = item.querySelector(".PlayerNewsPost-team-logo img").src
      const headline = item.querySelector(".PlayerNewsPost-headline").textContent.replace(/\s+/g, ' ').trim()
      const analysis = item.querySelector(".PlayerNewsPost-analysis")?.textContent
      const playerName = item.querySelector(".PlayerNewsPost-name").textContent
      const playerInfo = item.querySelector(".PlayerNewsPost-team").textContent.replace(/\s+/g, ' ').trim()
      const player = {
        headline,
        analysis,
        playerImg,
        teamLogo,
        playerName,
        playerInfo,
      }
      data.push(player)
    })
  }

  const data : Story[] = [];
  
  // each page has 10 items 
  await getStoriesFromPage(1)
  await getStoriesFromPage(2)
  
  return data
}