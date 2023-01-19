"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[6349],{3905:(e,t,i)=>{i.d(t,{Zo:()=>p,kt:()=>f});var n=i(7294);function r(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function o(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,n)}return i}function l(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?o(Object(i),!0).forEach((function(t){r(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):o(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function s(e,t){if(null==e)return{};var i,n,r=function(e,t){if(null==e)return{};var i,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)i=o[n],t.indexOf(i)>=0||(r[i]=e[i]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)i=o[n],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(r[i]=e[i])}return r}var c=n.createContext({}),a=function(e){var t=n.useContext(c),i=t;return e&&(i="function"==typeof e?e(t):l(l({},t),e)),i},p=function(e){var t=a(e.components);return n.createElement(c.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var i=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=a(i),m=r,f=d["".concat(c,".").concat(m)]||d[m]||u[m]||o;return i?n.createElement(f,l(l({ref:t},p),{},{components:i})):n.createElement(f,l({ref:t},p))}));function f(e,t){var i=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=i.length,l=new Array(o);l[0]=m;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[d]="string"==typeof e?e:r,l[1]=s;for(var a=2;a<o;a++)l[a]=i[a];return n.createElement.apply(null,l)}return n.createElement.apply(null,i)}m.displayName="MDXCreateElement"},3353:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>a});var n=i(7462),r=(i(7294),i(3905));const o={id:"list",title:"list",hide_title:!0,hide_table_of_contents:!0,sidebar_label:"list",description:"Dump info about USB connected iDevices",last_update:{date:new Date("2023-01-17T06:32:27.000Z"),author:"blacktop"}},l=void 0,s={unversionedId:"cli/ipsw/idev/list",id:"cli/ipsw/idev/list",title:"list",description:"Dump info about USB connected iDevices",source:"@site/docs/cli/ipsw/idev/list.md",sourceDirName:"cli/ipsw/idev",slug:"/cli/ipsw/idev/list",permalink:"/ipsw/docs/cli/ipsw/idev/list",draft:!1,editUrl:"https://github.com/blacktop/ipsw/tree/master/www/docs/cli/ipsw/idev/list.md",tags:[],version:"current",frontMatter:{id:"list",title:"list",hide_title:!0,hide_table_of_contents:!0,sidebar_label:"list",description:"Dump info about USB connected iDevices",last_update:{date:"2023-01-17T06:32:27.000Z",author:"blacktop"}},sidebar:"cli",previous:{title:"unmount",permalink:"/ipsw/docs/cli/ipsw/idev/img/unmount"},next:{title:"loc",permalink:"/ipsw/docs/cli/ipsw/idev/loc/"}},c={},a=[{value:"ipsw idev list",id:"ipsw-idev-list",level:2},{value:"Options",id:"options",level:3},{value:"Options inherited from parent commands",id:"options-inherited-from-parent-commands",level:3},{value:"SEE ALSO",id:"see-also",level:3}],p={toc:a};function d(e){let{components:t,...i}=e;return(0,r.kt)("wrapper",(0,n.Z)({},p,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"ipsw-idev-list"},"ipsw idev list"),(0,r.kt)("p",null,"Dump info about USB connected iDevices"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"ipsw idev list [flags]\n")),(0,r.kt)("h3",{id:"options"},"Options"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"  -h, --help   help for list\n  -i, --ipsw   Display devices as ipsw spec names\n  -j, --json   Display devices as JSON\n")),(0,r.kt)("h3",{id:"options-inherited-from-parent-commands"},"Options inherited from parent commands"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"      --color           colorize output\n      --config string   config file (default is $HOME/.ipsw/config.yaml)\n  -u, --udid string     Device UniqueDeviceID to connect to\n  -V, --verbose         verbose output\n")),(0,r.kt)("h3",{id:"see-also"},"SEE ALSO"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/cli/ipsw/idev"},"ipsw idev"),"\t - USB connected device commands")))}d.isMDXComponent=!0}}]);