"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[314],{3905:(e,t,i)=>{i.d(t,{Zo:()=>p,kt:()=>g});var a=i(7294);function r(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function n(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,a)}return i}function o(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?n(Object(i),!0).forEach((function(t){r(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):n(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function d(e,t){if(null==e)return{};var i,a,r=function(e,t){if(null==e)return{};var i,a,r={},n=Object.keys(e);for(a=0;a<n.length;a++)i=n[a],t.indexOf(i)>=0||(r[i]=e[i]);return r}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(a=0;a<n.length;a++)i=n[a],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(r[i]=e[i])}return r}var l=a.createContext({}),s=function(e){var t=a.useContext(l),i=t;return e&&(i="function"==typeof e?e(t):o(o({},t),e)),i},p=function(e){var t=s(e.components);return a.createElement(l.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var i=e.components,r=e.mdxType,n=e.originalType,l=e.parentName,p=d(e,["components","mdxType","originalType","parentName"]),c=s(i),m=r,g=c["".concat(l,".").concat(m)]||c[m]||u[m]||n;return i?a.createElement(g,o(o({ref:t},p),{},{components:i})):a.createElement(g,o({ref:t},p))}));function g(e,t){var i=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var n=i.length,o=new Array(n);o[0]=m;var d={};for(var l in t)hasOwnProperty.call(t,l)&&(d[l]=t[l]);d.originalType=e,d[c]="string"==typeof e?e:r,o[1]=d;for(var s=2;s<n;s++)o[s]=i[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,i)}m.displayName="MDXCreateElement"},8030:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>c,frontMatter:()=>n,metadata:()=>d,toc:()=>s});var a=i(7462),r=(i(7294),i(3905));const n={id:"diag",title:"diag",hide_title:!0,hide_table_of_contents:!0,sidebar_label:"diag",description:"Diagnostics commands",last_update:{date:new Date("2023-01-17T06:32:27.000Z"),author:"blacktop"}},o=void 0,d={unversionedId:"cli/ipsw/idev/diag/diag",id:"cli/ipsw/idev/diag/diag",title:"diag",description:"Diagnostics commands",source:"@site/docs/cli/ipsw/idev/diag/diag.md",sourceDirName:"cli/ipsw/idev/diag",slug:"/cli/ipsw/idev/diag/",permalink:"/ipsw/docs/cli/ipsw/idev/diag/",draft:!1,editUrl:"https://github.com/blacktop/ipsw/tree/master/www/docs/cli/ipsw/idev/diag/diag.md",tags:[],version:"current",frontMatter:{id:"diag",title:"diag",hide_title:!0,hide_table_of_contents:!0,sidebar_label:"diag",description:"Diagnostics commands",last_update:{date:"2023-01-17T06:32:27.000Z",author:"blacktop"}},sidebar:"cli",previous:{title:"pull",permalink:"/ipsw/docs/cli/ipsw/idev/crash/pull"},next:{title:"bat",permalink:"/ipsw/docs/cli/ipsw/idev/diag/bat"}},l={},s=[{value:"ipsw idev diag",id:"ipsw-idev-diag",level:2},{value:"Options",id:"options",level:3},{value:"Options inherited from parent commands",id:"options-inherited-from-parent-commands",level:3},{value:"SEE ALSO",id:"see-also",level:3}],p={toc:s};function c(e){let{components:t,...i}=e;return(0,r.kt)("wrapper",(0,a.Z)({},p,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"ipsw-idev-diag"},"ipsw idev diag"),(0,r.kt)("p",null,"Diagnostics commands"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"ipsw idev diag [flags]\n")),(0,r.kt)("h3",{id:"options"},"Options"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"  -h, --help   help for diag\n")),(0,r.kt)("h3",{id:"options-inherited-from-parent-commands"},"Options inherited from parent commands"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"      --color           colorize output\n      --config string   config file (default is $HOME/.ipsw/config.yaml)\n  -u, --udid string     Device UniqueDeviceID to connect to\n  -V, --verbose         verbose output\n")),(0,r.kt)("h3",{id:"see-also"},"SEE ALSO"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/cli/ipsw/idev"},"ipsw idev"),"\t - USB connected device commands"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/cli/ipsw/idev/diag/bat"},"ipsw idev diag bat"),"\t - Get snapshot of battery data"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/cli/ipsw/idev/diag/info"},"ipsw idev diag info"),"\t - Diagnostics info"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/cli/ipsw/idev/diag/ioreg"},"ipsw idev diag ioreg"),"\t - Query IORegistry"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/cli/ipsw/idev/diag/mg"},"ipsw idev diag mg"),"\t - Query MobileGestalt"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/cli/ipsw/idev/diag/restart"},"ipsw idev diag restart"),"\t - Restart the device"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/cli/ipsw/idev/diag/shutdown"},"ipsw idev diag shutdown"),"\t - Shutdown the device"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/cli/ipsw/idev/diag/sleep"},"ipsw idev diag sleep"),"\t - Put device to sleep")))}c.isMDXComponent=!0}}]);