import Link from "next/link";import {notFound} from "next/navigation";import {news} from "../../../lib/content";
export function generateStaticParams(){return news.map(n=>({slug:n.slug}))}
export async function generateMetadata({params}){const {slug}=await params;const n=news.find(x=>x.slug===slug);return {title:n?n.title+" | IDAK":"News"}}
export default async function P({params}){const {slug}=await params;const n=news.find(x=>x.slug===slug);if(!n)notFound();
return(<section><div className="wrap narrow"><small className="red">{n.tag}</small><h1>{n.title}</h1>{n.body.map((p,i)=><p key={i}>{p}</p>)}<Link className="btn" href="/news">All news</Link></div></section>)}
