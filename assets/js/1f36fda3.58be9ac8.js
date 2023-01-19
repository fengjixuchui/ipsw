"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[2743],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>m});var i=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,i)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function a(e,t){if(null==e)return{};var r,i,n=function(e,t){if(null==e)return{};var r,i,n={},l=Object.keys(e);for(i=0;i<l.length;i++)r=l[i],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(i=0;i<l.length;i++)r=l[i],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=i.createContext({}),p=function(e){var t=i.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},c=function(e){var t=p(e.components);return i.createElement(s.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},f=i.forwardRef((function(e,t){var r=e.components,n=e.mdxType,l=e.originalType,s=e.parentName,c=a(e,["components","mdxType","originalType","parentName"]),d=p(r),f=n,m=d["".concat(s,".").concat(f)]||d[f]||u[f]||l;return r?i.createElement(m,o(o({ref:t},c),{},{components:r})):i.createElement(m,o({ref:t},c))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=r.length,o=new Array(l);o[0]=f;var a={};for(var s in t)hasOwnProperty.call(t,s)&&(a[s]=t[s]);a.originalType=e,a[d]="string"==typeof e?e:n,o[1]=a;for(var p=2;p<l;p++)o[p]=r[p];return i.createElement.apply(null,o)}return i.createElement.apply(null,r)}f.displayName="MDXCreateElement"},7495:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>d,frontMatter:()=>l,metadata:()=>a,toc:()=>p});var i=r(7462),n=(r(7294),r(3905));const l={id:"split",title:"split",hide_title:!0,hide_table_of_contents:!0,sidebar_label:"split",description:"Extracts all the dyld_shared_cache libraries",last_update:{date:new Date("2023-01-17T06:32:27.000Z"),author:"blacktop"}},o=void 0,a={unversionedId:"cli/ipsw/dyld/split",id:"cli/ipsw/dyld/split",title:"split",description:"Extracts all the dyld_shared_cache libraries",source:"@site/docs/cli/ipsw/dyld/split.md",sourceDirName:"cli/ipsw/dyld",slug:"/cli/ipsw/dyld/split",permalink:"/ipsw/docs/cli/ipsw/dyld/split",draft:!1,editUrl:"https://github.com/blacktop/ipsw/tree/master/www/docs/cli/ipsw/dyld/split.md",tags:[],version:"current",frontMatter:{id:"split",title:"split",hide_title:!0,hide_table_of_contents:!0,sidebar_label:"split",description:"Extracts all the dyld_shared_cache libraries",last_update:{date:"2023-01-17T06:32:27.000Z",author:"blacktop"}},sidebar:"cli",previous:{title:"slide",permalink:"/ipsw/docs/cli/ipsw/dyld/slide"},next:{title:"str",permalink:"/ipsw/docs/cli/ipsw/dyld/str"}},s={},p=[{value:"ipsw dyld split",id:"ipsw-dyld-split",level:2},{value:"Options",id:"options",level:3},{value:"Options inherited from parent commands",id:"options-inherited-from-parent-commands",level:3},{value:"SEE ALSO",id:"see-also",level:3}],c={toc:p};function d(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,i.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"ipsw-dyld-split"},"ipsw dyld split"),(0,n.kt)("p",null,"Extracts all the dyld_shared_cache libraries"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"ipsw dyld split <dyld_shared_cache> <optional_output_path> [flags]\n")),(0,n.kt)("h3",{id:"options"},"Options"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"  -b, --build string     Cache build\n  -c, --cache            Build XCode device support cache\n  -h, --help             help for split\n  -v, --version string   Cache version\n  -x, --xcode string     Path to Xcode.app\n")),(0,n.kt)("h3",{id:"options-inherited-from-parent-commands"},"Options inherited from parent commands"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"      --color           colorize output\n      --config string   config file (default is $HOME/.ipsw/config.yaml)\n  -V, --verbose         verbose output\n")),(0,n.kt)("h3",{id:"see-also"},"SEE ALSO"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/cli/ipsw/dyld"},"ipsw dyld"),"\t - Parse dyld_shared_cache")))}d.isMDXComponent=!0}}]);