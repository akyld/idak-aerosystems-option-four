"use client";
export default function Apply(){function go(e){e.preventDefault();const d=Object.fromEntries(new FormData(e.target));
const body=Object.entries(d).map(([k,v])=>k+": "+v).join("\n");
window.location.href="mailto:info@idak.com.tr?subject="+encodeURIComponent("General application")+"&body="+encodeURIComponent(body)}
return(<form onSubmit={go}>{["Name and surname","Email address","Telephone","Education","Current job / profession","Experience"].map(l=>
<label key={l}>{l}{l==="Experience"?<textarea name={l} rows={4}/>:<input name={l} type={l==="Email address"?"email":"text"} required={l!=="Telephone"}/>}</label>)}
<button className="btn">Prepare application</button>
<p className="sub">Submitting opens your email application. No application is sent until you review and send the message. CV attachments can be added in your email application.</p></form>)}
