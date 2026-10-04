"use client";
/** @param {{ src: string, alt: string, cap?: string, h?: number }} props */
export default function Slot({src,alt,cap,h=320}){return(<figure className="slot" style={{minHeight:h}}><img src={src} alt={alt} onError={e=>{e.currentTarget.style.display="none"}}/>{cap&&<figcaption>{cap}</figcaption>}</figure>)}
