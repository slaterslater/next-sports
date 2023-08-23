import Link from "next/link";

export default function NewsNav(){
  return (
    <nav className="max-w-sm mx-auto flex justify-evenly py-2">
      <Link href='/nfl'>NFL</Link>
      <Link href='/jays'>JAYS</Link>
    </nav>
  )
}