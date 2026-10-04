import Link from "next/link";import {news} from "../../lib/content";
export const metadata={title:"News | IDAK Aerosystems"};
export default function N(){return(<section><div className="wrap"><h1>News and perspectives.</h1><div className="g3 cards">{news.map(n=><Link key={n.slug} href={"/news/"+n.slug}><small>{n.tag}</small><h3>{n.title}</h3><p>{n.summary}</p></Link>)}</div></div></section>)}
