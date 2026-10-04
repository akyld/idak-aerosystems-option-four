"use client";import {useState} from "react";
export default function C(){const [s,setS]=useState("idle");
async function go(e){e.preventDefault();setS("sending");const d=Object.fromEntries(new FormData(e.target));
try{const r=await fetch("/api/contact",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(d)});setS(r.ok?"ok":"err")}catch{setS("err")}}
return(<section><div className="wrap narrow"><h1>Discuss a project</h1>
{s==="ok"?<p role="status">Thank you. Your message was sent. We will reply soon.</p>:
<form onSubmit={go}><label>Name<input name="name" required/></label><label>Company<input name="company"/></label><label>Email<input name="email" type="email" required/></label>
<label>Message<textarea name="message" rows={6} required/></label><input name="website" tabIndex={-1} autoComplete="off" style={{display:"none"}}/>
<button className="btn" disabled={s==="sending"}>{s==="sending"?"Sending…":"Send message"}</button>
{s==="err"&&<p role="alert" className="red">Message could not be sent. Please write to info@idak.com.tr.</p>}</form>}</div></section>)}
