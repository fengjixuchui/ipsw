"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[8224],{3905:(e,t,o)=>{o.d(t,{Zo:()=>p,kt:()=>u});var n=o(7294);function a(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function r(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function i(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?r(Object(o),!0).forEach((function(t){a(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):r(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function l(e,t){if(null==e)return{};var o,n,a=function(e,t){if(null==e)return{};var o,n,a={},r=Object.keys(e);for(n=0;n<r.length;n++)o=r[n],t.indexOf(o)>=0||(a[o]=e[o]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)o=r[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(a[o]=e[o])}return a}var d=n.createContext({}),s=function(e){var t=n.useContext(d),o=t;return e&&(o="function"==typeof e?e(t):i(i({},t),e)),o},p=function(e){var t=s(e.components);return n.createElement(d.Provider,{value:t},e.children)},c="mdxType",w={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var o=e.components,a=e.mdxType,r=e.originalType,d=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),c=s(o),m=a,u=c["".concat(d,".").concat(m)]||c[m]||w[m]||r;return o?n.createElement(u,i(i({ref:t},p),{},{components:o})):n.createElement(u,i({ref:t},p))}));function u(e,t){var o=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=o.length,i=new Array(r);i[0]=m;var l={};for(var d in t)hasOwnProperty.call(t,d)&&(l[d]=t[d]);l.originalType=e,l[c]="string"==typeof e?e:a,i[1]=l;for(var s=2;s<r;s++)i[s]=o[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,o)}m.displayName="MDXCreateElement"},9350:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>d,contentTitle:()=>i,default:()=>c,frontMatter:()=>r,metadata:()=>l,toc:()=>s});var n=o(7462),a=(o(7294),o(3905));const r={id:"download",title:"download",hide_title:!0,hide_table_of_contents:!0,sidebar_label:"download",description:"Download Apple Firmware files (and more)",last_update:{date:new Date("2023-01-17T06:32:27.000Z"),author:"blacktop"}},i=void 0,l={unversionedId:"cli/ipsw/download/download",id:"cli/ipsw/download/download",title:"download",description:"Download Apple Firmware files (and more)",source:"@site/docs/cli/ipsw/download/download.md",sourceDirName:"cli/ipsw/download",slug:"/cli/ipsw/download/",permalink:"/ipsw/docs/cli/ipsw/download/",draft:!1,editUrl:"https://github.com/blacktop/ipsw/tree/master/www/docs/cli/ipsw/download/download.md",tags:[],version:"current",frontMatter:{id:"download",title:"download",hide_title:!0,hide_table_of_contents:!0,sidebar_label:"download",description:"Download Apple Firmware files (and more)",last_update:{date:"2023-01-17T06:32:27.000Z",author:"blacktop"}},sidebar:"cli",previous:{title:"device-list",permalink:"/ipsw/docs/cli/ipsw/device-list"},next:{title:"dev",permalink:"/ipsw/docs/cli/ipsw/download/dev"}},d={},s=[{value:"ipsw download",id:"ipsw-download",level:2},{value:"Options",id:"options",level:3},{value:"Options inherited from parent commands",id:"options-inherited-from-parent-commands",level:3},{value:"SEE ALSO",id:"see-also",level:3}],p={toc:s};function c(e){let{components:t,...o}=e;return(0,a.kt)("wrapper",(0,n.Z)({},p,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"ipsw-download"},"ipsw download"),(0,a.kt)("p",null,"Download Apple Firmware files (and more)"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"ipsw download [flags]\n")),(0,a.kt)("h3",{id:"options"},"Options"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"      --black-list stringArray   iOS device black list\n  -b, --build string             iOS BuildID (i.e. 16F203)\n  -y, --confirm                  do not prompt user for confirmation\n  -d, --device string            iOS Device (i.e. iPhone11,2)\n  -h, --help                     help for download\n      --insecure                 do not verify ssl certs\n  -m, --model string             iOS Model (i.e. D321AP)\n      --proxy string             HTTP/HTTPS proxy\n  -_, --remove-commas            replace commas in IPSW filename with underscores\n      --restart-all              always restart resumable IPSWs\n      --resume-all               always resume resumable IPSWs\n      --skip-all                 always skip resumable IPSWs\n  -v, --version string           iOS Version (i.e. 12.3.1)\n      --white-list stringArray   iOS device white list\n")),(0,a.kt)("h3",{id:"options-inherited-from-parent-commands"},"Options inherited from parent commands"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"      --color           colorize output\n      --config string   config file (default is $HOME/.ipsw/config.yaml)\n  -V, --verbose         verbose output\n")),(0,a.kt)("h3",{id:"see-also"},"SEE ALSO"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/cli/ipsw"},"ipsw"),"\t - Download and Parse IPSWs (and SO much more)"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/cli/ipsw/download/dev"},"ipsw download dev"),"\t - Download IPSWs (and more) from ",(0,a.kt)("a",{parentName:"li",href:"https://developer.apple.com/download"},"https://developer.apple.com/download")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/cli/ipsw/download/git"},"ipsw download git"),"\t - Download github.com/orgs/apple-oss-distributions tarballs"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/cli/ipsw/download/ipa"},"ipsw download ipa"),"\t - Download App Packages from the iOS App Store"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/cli/ipsw/download/ipsw"},"ipsw download ipsw"),"\t - Download and parse IPSW(s) from the internets"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/cli/ipsw/download/macos"},"ipsw download macos"),"\t - Download macOS installers"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/cli/ipsw/download/ota"},"ipsw download ota"),"\t - Download OTAs"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/cli/ipsw/download/rss"},"ipsw download rss"),"\t - Read Releases - Apple Developer RSS Feed"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/cli/ipsw/download/tss"},"ipsw download tss"),"\t - \ud83d\udea7 Download SHSH Blobs"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/cli/ipsw/download/wiki"},"ipsw download wiki"),"\t - Download old(er) IPSWs from theiphonewiki.com")))}c.isMDXComponent=!0}}]);