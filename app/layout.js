import "./globals.css";import Link from "next/link";import {nav,site} from "../lib/content";
export const metadata={title:"IDAK Aerosystems | Aerospace Engineering & Aircraft Systems",description:"IDAK Aerosystems delivers aerospace engineering, hydraulic and actuation systems, structural design, avionics, aircraft harness design and program support."};
export default function L({children}){return(<html lang="en"><body>
<header><div className="wrap bar"><Link className="logo" href="/">IDAK<small>AEROSYSTEMS</small></Link>
<nav>{nav.map(([t,h])=><Link key={t} href={h}>{t}</Link>)}</nav><details className="mm"><summary>Menu</summary><div>{nav.map(([t,h])=><Link key={t} href={h}>{t}</Link>)}</div></details><Link className="btn sm" href="/contact">Contact</Link></div></header>
<main>{children}</main>
<footer><div className="wrap cols"><div><h3>{site.name}</h3><p>Aerospace engineering and aircraft systems for demanding programs.</p></div>
{site.offices.map(o=><div key={o.c}><p><b>{o.c.toUpperCase()}</b></p><p><a href={"mailto:"+o.mail}>{o.mail}</a><br/><a href={"tel:"+o.tel2}>{o.tel}</a></p><p>{o.addr}</p></div>)}</div>
<div className="wrap legal">© 2026 IDAK Aerosystems · EN 9100:2018 / ISO 9001:2015</div></footer></body></html>)}
