"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[7236],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>f});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function a(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),p=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},c=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,c=a(e,["components","mdxType","originalType","parentName"]),d=p(r),m=o,f=d["".concat(l,".").concat(m)]||d[m]||u[m]||i;return r?n.createElement(f,s(s({ref:t},c),{},{components:r})):n.createElement(f,s({ref:t},c))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,s=new Array(i);s[0]=m;var a={};for(var l in t)hasOwnProperty.call(t,l)&&(a[l]=t[l]);a.originalType=e,a[d]="string"==typeof e?e:o,s[1]=a;for(var p=2;p<i;p++)s[p]=r[p];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},2885:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>d,frontMatter:()=>i,metadata:()=>a,toc:()=>p});var n=r(7462),o=(r(7294),r(3905));const i={id:"rss",title:"rss",hide_title:!0,hide_table_of_contents:!0,sidebar_label:"rss",description:"Read Releases - Apple Developer RSS Feed",last_update:{date:new Date("2023-01-17T06:32:27.000Z"),author:"blacktop"}},s=void 0,a={unversionedId:"cli/ipsw/download/rss",id:"cli/ipsw/download/rss",title:"rss",description:"Read Releases - Apple Developer RSS Feed",source:"@site/docs/cli/ipsw/download/rss.md",sourceDirName:"cli/ipsw/download",slug:"/cli/ipsw/download/rss",permalink:"/ipsw/docs/cli/ipsw/download/rss",draft:!1,editUrl:"https://github.com/blacktop/ipsw/tree/master/www/docs/cli/ipsw/download/rss.md",tags:[],version:"current",frontMatter:{id:"rss",title:"rss",hide_title:!0,hide_table_of_contents:!0,sidebar_label:"rss",description:"Read Releases - Apple Developer RSS Feed",last_update:{date:"2023-01-17T06:32:27.000Z",author:"blacktop"}},sidebar:"cli",previous:{title:"ota",permalink:"/ipsw/docs/cli/ipsw/download/ota"},next:{title:"tss",permalink:"/ipsw/docs/cli/ipsw/download/tss"}},l={},p=[{value:"ipsw download rss",id:"ipsw-download-rss",level:2},{value:"Options",id:"options",level:3},{value:"Options inherited from parent commands",id:"options-inherited-from-parent-commands",level:3},{value:"SEE ALSO",id:"see-also",level:3}],c={toc:p};function d(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"ipsw-download-rss"},"ipsw download rss"),(0,o.kt)("p",null,"Read Releases - Apple Developer RSS Feed"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"ipsw download rss [flags]\n")),(0,o.kt)("h3",{id:"options"},"Options"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"  -h, --help    help for rss\n  -j, --json    Output as JSON\n  -w, --watch   Watch for NEW releases\n")),(0,o.kt)("h3",{id:"options-inherited-from-parent-commands"},"Options inherited from parent commands"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"      --black-list stringArray   iOS device black list\n  -b, --build string             iOS BuildID (i.e. 16F203)\n      --color                    colorize output\n      --config string            config file (default is $HOME/.ipsw/config.yaml)\n  -y, --confirm                  do not prompt user for confirmation\n  -d, --device string            iOS Device (i.e. iPhone11,2)\n      --insecure                 do not verify ssl certs\n  -m, --model string             iOS Model (i.e. D321AP)\n      --proxy string             HTTP/HTTPS proxy\n  -_, --remove-commas            replace commas in IPSW filename with underscores\n      --restart-all              always restart resumable IPSWs\n      --resume-all               always resume resumable IPSWs\n      --skip-all                 always skip resumable IPSWs\n  -V, --verbose                  verbose output\n  -v, --version string           iOS Version (i.e. 12.3.1)\n      --white-list stringArray   iOS device white list\n")),(0,o.kt)("h3",{id:"see-also"},"SEE ALSO"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/cli/ipsw/download"},"ipsw download"),"\t - Download Apple Firmware files (and more)")))}d.isMDXComponent=!0}}]);