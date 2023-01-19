"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[1716],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>m});var n=r(7294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function p(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var c=n.createContext({}),a=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):p(p({},t),e)),r},s=function(e){var t=a(e.components);return n.createElement(c.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,o=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=a(r),f=i,m=u["".concat(c,".").concat(f)]||u[f]||d[f]||o;return r?n.createElement(m,p(p({ref:t},s),{},{components:r})):n.createElement(m,p({ref:t},s))}));function m(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=r.length,p=new Array(o);p[0]=f;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[u]="string"==typeof e?e:i,p[1]=l;for(var a=2;a<o;a++)p[a]=r[a];return n.createElement.apply(null,p)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},7821:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>p,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>a});var n=r(7462),i=(r(7294),r(3905));const o={id:"ctfdump",title:"ctfdump",hide_title:!0,hide_table_of_contents:!0,sidebar_label:"ctfdump",description:"Dump CTF info",last_update:{date:new Date("2023-01-17T06:32:27.000Z"),author:"blacktop"}},p=void 0,l={unversionedId:"cli/ipsw/kernel/ctfdump",id:"cli/ipsw/kernel/ctfdump",title:"ctfdump",description:"Dump CTF info",source:"@site/docs/cli/ipsw/kernel/ctfdump.md",sourceDirName:"cli/ipsw/kernel",slug:"/cli/ipsw/kernel/ctfdump",permalink:"/ipsw/docs/cli/ipsw/kernel/ctfdump",draft:!1,editUrl:"https://github.com/blacktop/ipsw/tree/master/www/docs/cli/ipsw/kernel/ctfdump.md",tags:[],version:"current",frontMatter:{id:"ctfdump",title:"ctfdump",hide_title:!0,hide_table_of_contents:!0,sidebar_label:"ctfdump",description:"Dump CTF info",last_update:{date:"2023-01-17T06:32:27.000Z",author:"blacktop"}},sidebar:"cli",previous:{title:"kernel",permalink:"/ipsw/docs/cli/ipsw/kernel/"},next:{title:"dec",permalink:"/ipsw/docs/cli/ipsw/kernel/dec"}},c={},a=[{value:"ipsw kernel ctfdump",id:"ipsw-kernel-ctfdump",level:2},{value:"Options",id:"options",level:3},{value:"Options inherited from parent commands",id:"options-inherited-from-parent-commands",level:3},{value:"SEE ALSO",id:"see-also",level:3}],s={toc:a};function u(e){let{components:t,...r}=e;return(0,i.kt)("wrapper",(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"ipsw-kernel-ctfdump"},"ipsw kernel ctfdump"),(0,i.kt)("p",null,"Dump CTF info"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"ipsw kernel ctfdump [flags]\n")),(0,i.kt)("h3",{id:"options"},"Options"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"  -a, --arch string   Which architecture to use for fat/universal MachO\n  -d, --diff          Diff two structs\n  -h, --help          help for ctfdump\n  -j, --json          Output as JSON\n      --pretty        Pretty print JSON\n")),(0,i.kt)("h3",{id:"options-inherited-from-parent-commands"},"Options inherited from parent commands"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"      --color           colorize output\n      --config string   config file (default is $HOME/.ipsw/config.yaml)\n  -V, --verbose         verbose output\n")),(0,i.kt)("h3",{id:"see-also"},"SEE ALSO"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/cli/ipsw/kernel"},"ipsw kernel"),"\t - Parse kernelcache")))}u.isMDXComponent=!0}}]);