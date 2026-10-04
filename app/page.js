import Link from "next/link";import Slot from "../components/Slot";import Tabs from "../components/Tabs";import {stats,caps,news} from "../lib/content";
const tags=["Hydraulic pumps","Reservoirs","Valves","Accumulators","Manifolds","Actuators","Hydraulic power packages","Actuation systems"];
export default function Home(){return(<>
<section className="hero"><div className="wrap two"><div><p className="mute">The next program starts here · Türkiye / United States / United Kingdom</p>
<h1>Make it <em>move.</em></h1><p className="mute">Aerospace engineering and aircraft systems for demanding programs.</p><Link className="btn" href="/contact">Discuss a project</Link></div>
<Slot src="/aircraft/atlas-poster.svg" alt="Concept aircraft visualization" cap="IDAK / 001 · Concept aircraft visualization" h={340}/></div></section>
<section className="stats"><div className="wrap g3">{stats.map(([n,l])=><div key={l}><b>{n}</b><span>{l}</span></div>)}</div></section>
<section><div className="wrap"><p className="kick">A complete platform</p><h2>Engineered as one.</h2><p className="sub">Structure, motion and electrical definition work together. IDAK engineers for the complete aircraft.</p>
<Tabs/><p><Link className="btn" href="/capabilities">Explore our capabilities</Link></p></div></section>
<section className="alt"><div className="wrap two"><div><p className="kick">The IDAK approach</p><h2>The strongest aircraft is built through connected thinking.</h2>
<p className="sub">IDAK brings structural, hydraulic, electrical and program disciplines into the same engineering conversation. Our work follows the needs of the complete platform, from definition to delivery.</p><Link className="lnk" href="/about">Discover IDAK</Link></div>
<Slot src="/images/editorial/airframe-interior.jpg" alt="Exposed aircraft fuselage structure during assembly" cap="01 / Airframe — Structure is understood from the inside out."/></div></section>
<section><div className="wrap"><Slot src="/images/editorial/engine-detail.jpg" alt="Close view of aircraft engine components and connections" cap="02 / Detail — Precision at every interface." h={360}/>
<h2 style={{marginTop:72}}>Disciplines that meet at the aircraft.</h2><p className="sub">Integrated capability for complex aerospace work.</p>
<div className="rows">{caps.map(([t,d,tg],i)=><div className="row" key={t}><i>0{i+1}</i><h3>{t}</h3><p>{d}</p><ul>{tg.map(x=><li key={x}>{x}</li>)}</ul></div>)}</div></div></section>
<section className="alt"><div className="wrap"><div className="two"><div><div className="big">29</div><p className="kick">System in focus / ATA 29</p><h2>Control in every movement.</h2>
<p className="sub">Hydraulic power and actuation systems designed for the requirements of aircraft, helicopter and engine manufacturers.</p><Link className="lnk" href="/capabilities">Explore aircraft systems</Link></div>
<Slot src="/images/editorial/hydraulic-components.jpg" alt="Aircraft hydraulic components arranged for inspection" cap="Fluid-control hardware / IDAK archive" h={380}/></div>
<p className="kick" style={{marginTop:48}}>From component to qualified system</p><ul>{tags.map(t=><li key={t}>{t}</li>)}</ul><p className="sub">Engineering / Analysis / Manufacturing / Assembly / Testing / Qualification</p></div></section>
<section id="moog-partnership"><div className="wrap"><p className="kick">Featured partnership / Aerospace actuation</p><h2>Moog Wolverhampton × IDAK Aerosystems.</h2>
<p className="sub">Moog Wolverhampton appointed IDAK as its official regional representative for flight control actuation, utility actuation and related components in three aerospace markets.</p>
<div className="two" style={{marginTop:32}}><Slot src="/images/editorial/moog-idak-collaboration.jpg" alt="Moog and IDAK representatives together at an aerospace event" cap="Moog × IDAK / Partnership announcement" h={340}/>
<div><h3>Connecting expertise with opportunity.</h3><p className="sub">IDAK identifies opportunities to collaborate with aerospace organizations on new aircraft platforms across the region.</p>
<dl><div><dt>Technology</dt><dd>Flight control and utility actuation</dd></div><div><dt>Regions</dt><dd>Türkiye / United Arab Emirates / Saudi Arabia</dd></div><div><dt>Role</dt><dd>Official regional representative of Moog Wolverhampton Ltd.</dd></div></dl>
<blockquote>“İDAK brings significant depth and working knowledge of both Moog’s capabilities and the expanding aerospace industry in this region.”<small>Ajoy Khubchandani, General Manager, Moog’s Military Aircraft business in Europe</small></blockquote>
<Link className="btn" href="/news/moog-regional-representative">Explore the partnership</Link> <a className="btn ghost" href="https://www.moog.com/news/operating-group-news/2025/moog-wolverhampton-names-idak-aerosystems-as-regional-represenatative-for-flight-control-and-utility-actuation.html">Moog announcement</a></div></div></div></section>
<section className="alt"><div className="wrap two" style={{alignItems:"start"}}><div><p className="kick">Experience and assurance</p><h2>Substance behind the engineering.</h2><p className="sub">Documented capability and experience across demanding aviation programs.</p></div>
<div><p className="kick">Program experience / Türkiye</p><div className="prog"><span>KAAN</span><span>HÜRJET</span><span>HÜRKUŞ</span></div>
<p className="sub">Domestic aircraft engine programs. IDAK has contributed to localization efforts involving national aviation platforms and domestic aircraft engine programs.</p>
<p className="kick" style={{marginTop:28}}>Independent credentials</p><div className="prog"><span>EN 9100:2018</span><span>ISO 9001:2015</span><span>Facility Security Clearance</span></div><Link className="lnk" href="/certificates">View certifications</Link></div></div></section>
<section><div className="wrap"><p className="kick">From IDAK</p><h2>News and perspectives.</h2><div className="g3 cards">{news.map((n,i)=><Link key={n.slug} href={"/news/"+n.slug}><small>0{i+1} / {n.tag}</small><h3>{n.title}</h3><p>{n.summary}</p></Link>)}</div><p><Link className="lnk" href="/news">All news</Link></p></div></section></>)}
