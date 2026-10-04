export async function POST(req){const d=await req.json();
if(d.website)return Response.json({ok:true}); // bot tuzağı
if(!d.name||!d.email||!d.message)return Response.json({ok:false},{status:400});
const key=process.env.RESEND_API_KEY;if(!key){console.log("CONTACT",d);return Response.json({ok:true})}
const r=await fetch("https://api.resend.com/emails",{method:"POST",headers:{Authorization:"Bearer "+key,"Content-Type":"application/json"},
body:JSON.stringify({from:process.env.CONTACT_FROM||"IDAK Web <onboarding@resend.dev>",to:[process.env.CONTACT_TO||"info@idak.com.tr"],reply_to:d.email,subject:"Web contact: "+d.name,text:`${d.name} (${d.company||"-"}) <${d.email}>\n\n${d.message}`})});
return Response.json({ok:r.ok},{status:r.ok?200:502})}
