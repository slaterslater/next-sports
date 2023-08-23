/* eslint-disable @next/next/no-img-element */
import { Story } from "./data";

export default function PlayerNews({stories} : {stories: Story[]}) {
  return (
    <main className="bg-slate-50">
      <ol className="max-w-screen-sm min-w-min mx-auto px-6"> 
        {stories.map((story, i) => <Story key={i} story={story} />)}
      </ol>
    </main>
  )  
}

function Story({story} : {story : Story}){
  return (
    <li className="border-t-2 mb-6">
    <div className="grid grid-cols-[64px_1fr_64px]">
      <img src={story.playerImg} alt="" width={64} height={64} />
      <div className="m-2">
        <h2 className="text-lg">{story.playerName}</h2>
        <span className="text-xs">{story.playerInfo}</span>
      </div>
      <img src={story.teamLogo} alt="" width={64} height={64} />
    </div>
    <p className="text-xs font-bold my-2">{story.headline}</p>
    <p className="text-xs">{story.analysis}</p>
  </li>
  )
}