// const jsdom = require("jsdom");
// const {JSDOM} = jsdom
import {JSDOM} from 'jsdom'

export interface Player {
  face: HTMLImageElement;
  logo: HTMLImageElement;
  headline: string;
  analysis: string;
  name: string;
  team: string;
}

export async function getData(url: string) {

  const getPlayerListFromPage = async (n: number) => {
    const page = `${url}?p=${n}`
    const res = await fetch(page, { next: { revalidate: 3600 } })
    const txt = await res.text()
    const dom = new JSDOM(txt)
    const list = dom.window.document.getElementsByClassName("PlayerNewsModuleList-item")
    const items = [...list].forEach(item => {
      const face = item.querySelector(".PlayerNewsPost img")
      const logo = item.querySelector(".PlayerNewsPost-team-logo img")
      const headline = item.querySelector(".PlayerNewsPost-headline").textContent.replace(/\s+/g, ' ').trim()
      const analysis = item.querySelector(".PlayerNewsPost-analysis")?.textContent
      const name = item.querySelector(".PlayerNewsPost-name").textContent
      const team = item.querySelector(".PlayerNewsPost-team").textContent.replace(/\s+/g, ' ').trim()
      const player = {
        headline,
        analysis,
        face,
        logo,
        name,
        team,
      }
      players.push(player)
    })
  }

  const players : Player[] = [];

  // each page has 10 items
  await Promise.all([
    getPlayerListFromPage(1),
    getPlayerListFromPage(2)
  ])
  
  // await getPlayerListFromPage(1)
  // await getPlayerListFromPage(2)

  return players
}