const fs=require('fs'),sharp=require('sharp');
const doc='<path d="M22 12H48L62 26V68H22Z" fill="#fff"/><path d="M48 12V26H62Z" fill="#ffd0cf"/><rect x="14" y="42" width="52" height="18" rx="4" fill="#b71c1c"/><g transform="translate(-5 0)" fill="none" stroke="#fff" stroke-width="2.6" stroke-linejoin="round" stroke-linecap="round"><path d="M29 56.5V46.5H33.5Q37 46.5 37 49.5Q37 52.5 33.5 52.5H29"/><path d="M41 46.5V56.5H44Q50 56.5 50 51.5Q50 46.5 44 46.5Z"/><path d="M54 56.5V46.5H61M54 51.5H60"/></g>';
const X='xmlns="http://www.w3.org/2000/svg"';
const sq=`<svg ${X} viewBox="0 0 80 80"><rect width="80" height="80" rx="18" fill="#ef5350"/>${doc}</svg>`;
const rd=`<svg ${X} viewBox="0 0 80 80"><circle cx="40" cy="40" r="40" fill="#ef5350"/>${doc}</svg>`;
const fg=`<svg ${X} viewBox="0 0 108 108"><g transform="translate(20.5 20.5) scale(.837)">${doc}</g></svg>`;
const D={mdpi:1,hdpi:1.5,xhdpi:2,xxhdpi:3,xxxhdpi:4},R='android/app/src/main/res/';
(async()=>{for(const k in D){const m=D[k],p=`${R}mipmap-${k}/`;fs.mkdirSync(p,{recursive:true});
 await sharp(Buffer.from(sq)).resize(48*m).png().toFile(p+'ic_launcher.png');
 await sharp(Buffer.from(rd)).resize(48*m).png().toFile(p+'ic_launcher_round.png');
 await sharp(Buffer.from(fg)).resize(108*m).png().toFile(p+'ic_launcher_foreground.png')}
 fs.writeFileSync(R+'values/ic_launcher_background.xml','<?xml version="1.0" encoding="utf-8"?><resources><color name="ic_launcher_background">#EF5350</color></resources>')})();
