"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[844],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},d="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,c=a(e,["components","mdxType","originalType","parentName"]),d=p(n),u=i,m=d["".concat(l,".").concat(u)]||d[u]||f[u]||o;return n?r.createElement(m,s(s({ref:t},c),{},{components:n})):r.createElement(m,s({ref:t},c))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,s=new Array(o);s[0]=u;var a={};for(var l in t)hasOwnProperty.call(t,l)&&(a[l]=t[l]);a.originalType=e,a[d]="string"==typeof e?e:i,s[1]=a;for(var p=2;p<o;p++)s[p]=n[p];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},3892:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>d,frontMatter:()=>o,metadata:()=>a,toc:()=>p});var r=n(7462),i=(n(7294),n(3905));const o={id:"swift",title:"swift",hide_title:!0,hide_table_of_contents:!0,sidebar_label:"swift",description:"Dump Swift Optimizations Info"},s=void 0,a={unversionedId:"cli/ipsw/dyld/swift",id:"cli/ipsw/dyld/swift",title:"swift",description:"Dump Swift Optimizations Info",source:"@site/docs/cli/ipsw/dyld/swift.md",sourceDirName:"cli/ipsw/dyld",slug:"/cli/ipsw/dyld/swift",permalink:"/ipsw/docs/cli/ipsw/dyld/swift",draft:!1,editUrl:"https://github.com/blacktop/ipsw/tree/master/www/docs/cli/ipsw/dyld/swift.md",tags:[],version:"current",frontMatter:{id:"swift",title:"swift",hide_title:!0,hide_table_of_contents:!0,sidebar_label:"swift",description:"Dump Swift Optimizations Info"},sidebar:"cli",previous:{title:"stubs",permalink:"/ipsw/docs/cli/ipsw/dyld/stubs"},next:{title:"symaddr",permalink:"/ipsw/docs/cli/ipsw/dyld/symaddr"}},l={},p=[{value:"ipsw dyld swift",id:"ipsw-dyld-swift",level:2},{value:"Options",id:"options",level:3},{value:"Options inherited from parent commands",id:"options-inherited-from-parent-commands",level:3},{value:"SEE ALSO",id:"see-also",level:3}],c={toc:p};function d(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"ipsw-dyld-swift"},"ipsw dyld swift"),(0,i.kt)("p",null,"Dump Swift Optimizations Info"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"ipsw dyld swift [flags]\n")),(0,i.kt)("h3",{id:"options"},"Options"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"      --cache string   Path to .a2s addr to sym cache file (speeds up analysis)\n  -d, --demangle       Demangle the Swift symbols\n  -f, --foreign        Print the foreign type conformances\n  -h, --help           help for swift\n  -m, --metadata       Print the metadata conformances\n  -t, --types          Print the type conformances\n")),(0,i.kt)("h3",{id:"options-inherited-from-parent-commands"},"Options inherited from parent commands"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"      --color           colorize output\n      --config string   config file (default is $HOME/.ipsw/config.yaml)\n  -V, --verbose         verbose output\n")),(0,i.kt)("h3",{id:"see-also"},"SEE ALSO"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/cli/ipsw/dyld"},"ipsw dyld"),"\t - Parse dyld_shared_cache")))}d.isMDXComponent=!0}}]);