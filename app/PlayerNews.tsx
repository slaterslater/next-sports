/* eslint-disable @next/next/no-img-element */
import { Player } from "./data";

export default async function PlayerNews({data} : {data: Player[]}) {
  return (
    <main className="bg-slate-50">
      <ol className="max-w-screen-sm min-w-min mx-auto px-2"> 
        {data.map((player, i) => 
          <li key={i} className="border-t-2 mb-6">
          <div className="grid grid-cols-[80px_1fr_80px]">
            <img src={player.face.src} alt={player.face.alt} />
            <div className="m-2">
              <h2 className="text-xl">{player.name}</h2>
              <span className="text-xs">{player.team}</span>
            </div>
            <img src={player.logo.src} alt={player.logo.alt} width={80} height={80} />
          </div>
          <p className="font-bold my-2">{player.headline}</p>
          <p className="text-sm">{player.analysis}</p>
        </li>
        )}
      </ol>
    </main>
  )  
}