"use strict";(function a(){function b(a){let b=RegExp(/<([a-z]+)>/),c=RegExp(/<\/[a-z]+>/g);for(;b.test(a);)a=a.replace(b,"<span class=\"result-$1\">");return a=a.replace(c,"</span>"),a}if(chrome.runtime.lastError)return console.error(chrome.runtime.lastError.message),void setTimeout(a,100);Array.from(document.getElementsByClassName("btn-close-window")).forEach(a=>{a.addEventListener("click",a=>{a.preventDefault(),window.close("","_parent","")})});const c=document.getElementsByClassName("option-theme");for(let a=0;a<c.length;++a)c[a].addEventListener("change",a=>{Config.save("theme",a.target.value,a=>{applyTheme(null,a)})});Config.load("theme",a=>{c["light"==a?0:1].checked=!0,applyTheme(null,a)});const d=document.getElementsByClassName("option-wide");for(let a=0;a<d.length;++a)d[a].addEventListener("change",a=>{Config.save("wide",!!parseInt(a.target.value),a=>{applyWide(null,a)})});Config.load("wide",a=>{d[a?1:0].checked=!0,applyWide(null,a)});const e=document.getElementsByClassName("option-status-pid");for(let a=0;a<e.length;++a)e[a].addEventListener("change",a=>{Config.save("show-status-pid",!!parseInt(a.target.value))});Config.load("show-status-pid",a=>{e[a?0:1].checked=!0});const f=document.getElementsByClassName("msg-code");for(let a=0;a<f.length;++a)Config.load(f[a].getAttribute("name")+"-code",c=>{c&&(f[a].value=c,document.getElementById(f[a].getAttribute("data-preview")).innerHTML=b(c))}),f[a].addEventListener("input",a=>{const c=a.target.getAttribute("name"),d=a.target.value||a.target.getAttribute("placeholder"),e=a.target.getAttribute("data-preview"),f=b(d);document.getElementById(e).innerHTML=f,Config.save(c,f),Config.save(c+"-code",d)})})();