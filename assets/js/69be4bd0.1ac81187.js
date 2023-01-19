"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[7635],{3905:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>f});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),s=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},d=function(e){var t=s(e.components);return n.createElement(c.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),p=s(r),m=o,f=p["".concat(c,".").concat(m)]||p[m]||u[m]||i;return r?n.createElement(f,a(a({ref:t},d),{},{components:r})):n.createElement(f,a({ref:t},d))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[p]="string"==typeof e?e:o,a[1]=l;for(var s=2;s<i;s++)a[s]=r[s];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},2945:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>p,frontMatter:()=>i,metadata:()=>l,toc:()=>s});var n=r(7462),o=(r(7294),r(3905));const i={id:"macho",title:"macho",hide_title:!0,hide_table_of_contents:!0,sidebar_label:"macho",description:"Parse a dylib file",last_update:{date:new Date("2023-01-17T06:32:27.000Z"),author:"blacktop"}},a=void 0,l={unversionedId:"cli/ipsw/dyld/macho",id:"cli/ipsw/dyld/macho",title:"macho",description:"Parse a dylib file",source:"@site/docs/cli/ipsw/dyld/macho.md",sourceDirName:"cli/ipsw/dyld",slug:"/cli/ipsw/dyld/macho",permalink:"/ipsw/docs/cli/ipsw/dyld/macho",draft:!1,editUrl:"https://github.com/blacktop/ipsw/tree/master/www/docs/cli/ipsw/dyld/macho.md",tags:[],version:"current",frontMatter:{id:"macho",title:"macho",hide_title:!0,hide_table_of_contents:!0,sidebar_label:"macho",description:"Parse a dylib file",last_update:{date:"2023-01-17T06:32:27.000Z",author:"blacktop"}},sidebar:"cli",previous:{title:"info",permalink:"/ipsw/docs/cli/ipsw/dyld/info"},next:{title:"o2a",permalink:"/ipsw/docs/cli/ipsw/dyld/o2a"}},c={},s=[{value:"ipsw dyld macho",id:"ipsw-dyld-macho",level:2},{value:"Options",id:"options",level:3},{value:"Options inherited from parent commands",id:"options-inherited-from-parent-commands",level:3},{value:"SEE ALSO",id:"see-also",level:3}],d={toc:s};function p(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"ipsw-dyld-macho"},"ipsw dyld macho"),(0,o.kt)("p",null,"Parse a dylib file"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"ipsw dyld macho <dyld_shared_cache> <dylib> [flags]\n")),(0,o.kt)("h3",{id:"options"},"Options"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"  -a, --all             Parse ALL dylibs\n  -x, --extract         \ud83d\udea7 Extract the dylib\n      --force           Overwrite existing extracted dylib(s)\n  -h, --help            help for macho\n  -j, --json            Print the TOC as JSON\n  -l, --loads           Print the load commands\n  -o, --objc            Print ObjC info\n  -r, --objc-refs       Print ObjC references\n      --output string   Directory to extract the dylib(s)\n      --search string   Search for byte pattern\n  -f, --starts          Print function starts\n  -s, --strings         Print cstrings\n  -b, --stubs           Print stubs\n  -n, --symbols         Print symbols\n")),(0,o.kt)("h3",{id:"options-inherited-from-parent-commands"},"Options inherited from parent commands"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"      --color           colorize output\n      --config string   config file (default is $HOME/.ipsw/config.yaml)\n  -V, --verbose         verbose output\n")),(0,o.kt)("h3",{id:"see-also"},"SEE ALSO"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/cli/ipsw/dyld"},"ipsw dyld"),"\t - Parse dyld_shared_cache")))}p.isMDXComponent=!0}}]);