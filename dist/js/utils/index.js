const Utils={loadCSS:function(a){const b=chrome.runtime.getURL(a),c=document.createElement("link");c.setAttribute("rel","stylesheet"),c.setAttribute("type","text/css"),c.setAttribute("href",b),document.getElementsByTagName("head")[0].appendChild(c)},loadScript:function(a){const b=chrome.runtime.getURL(a),c=document.createElement("script");c.setAttribute("type","text/javascript"),c.setAttribute("src",b),document.getElementsByTagName("body")[0].appendChild(c)},createElement:function(a,b){const c=Object.keys(b||{}),d=document.createElement(a||"div");for(const e of c){const a=b[e];if("children"==e){const b=Array.isArray(a)?a:[a];for(const a of b)d.appendChild(a)}else d.setAttribute(e,a)}return d},createRadioElement:function(a,b,c){const d=Math.random().toString(36).substr(2),e=Utils.createElement("div",{class:"form-check form-check-inline",style:"display: inline; margin-right: 1em;"}),f=Utils.createElement("input",{class:"form-check-input",type:"radio",id:d,name:"radio-extended"});f.addEventListener("change",b),f.checked=!!c;const g=Utils.createElement("label",{class:"form-check-label",for:d,style:"margin-left: 5px;"});return g.innerText=a,e.appendChild(f),e.appendChild(g),e},isElement:function(a){try{return a instanceof HTMLElement}catch(b){return"object"==typeof a&&1===a.nodeType&&"object"==typeof a.style&&"object"==typeof a.ownerDocument}}};