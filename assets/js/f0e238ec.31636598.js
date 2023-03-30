"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[9043],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>b});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function d(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var o=n.createContext({}),i=function(e){var t=n.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},c=function(e){var t=i(e.components);return n.createElement(o.Provider,{value:t},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,o=e.parentName,c=d(e,["components","mdxType","originalType","parentName"]),u=i(a),m=r,b=u["".concat(o,".").concat(m)]||u[m]||p[m]||l;return a?n.createElement(b,s(s({ref:t},c),{},{components:a})):n.createElement(b,s({ref:t},c))}));function b(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,s=new Array(l);s[0]=m;var d={};for(var o in t)hasOwnProperty.call(t,o)&&(d[o]=t[o]);d.originalType=e,d[u]="string"==typeof e?e:r,s[1]=d;for(var i=2;i<l;i++)s[i]=a[i];return n.createElement.apply(null,s)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},6829:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>o,contentTitle:()=>s,default:()=>p,frontMatter:()=>l,metadata:()=>d,toc:()=>i});var n=a(7462),r=(a(7294),a(3905));const l={description:"How to find stub island xrefs"},s="Stub Islands",d={unversionedId:"guides/stub_islands",id:"guides/stub_islands",title:"Stub Islands",description:"How to find stub island xrefs",source:"@site/docs/guides/stub_islands.md",sourceDirName:"guides",slug:"/guides/stub_islands",permalink:"/ipsw/docs/guides/stub_islands",draft:!1,editUrl:"https://github.com/blacktop/ipsw/tree/master/www/docs/guides/stub_islands.md",tags:[],version:"current",frontMatter:{description:"How to find stub island xrefs"},sidebar:"docs",previous:{title:"Parse Img4",permalink:"/ipsw/docs/guides/img4"},next:{title:"Gadget Search",permalink:"/ipsw/docs/guides/gadget_search"}},o={},i=[{value:"We&#39;ve introduced a <code>ipsw dyld stubs</code> command to dump them all out and the symbol they <em>stub</em> to",id:"weve-introduced-a-ipsw-dyld-stubs-command-to-dump-them-all-out-and-the-symbol-they-stub-to",level:3},{value:"Disassemble the <em>stub</em>",id:"disassemble-the-stub",level:3},{value:"Lookup the address",id:"lookup-the-address",level:3},{value:"MAPPING",id:"mapping",level:2},{value:"Locate any <code>xrefs</code>",id:"locate-any-xrefs",level:3}],c={toc:i},u="wrapper";function p(e){let{components:t,...a}=e;return(0,r.kt)(u,(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"stub-islands"},"Stub Islands"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"iOS16 added a NEW concept to dyld4 and the ",(0,r.kt)("inlineCode",{parentName:"p"},"dyld_shared_cache")," sub-caches called ",(0,r.kt)("strong",{parentName:"p"},"Stub Islands"),".  ")),(0,r.kt)("h3",{id:"weve-introduced-a-ipsw-dyld-stubs-command-to-dump-them-all-out-and-the-symbol-they-stub-to"},"We've introduced a ",(0,r.kt)("inlineCode",{parentName:"h3"},"ipsw dyld stubs")," command to dump them all out and the symbol they ",(0,r.kt)("em",{parentName:"h3"},"stub")," to"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'\u276f ipsw dyld stubs 20B5050f__iPhone15,2/dyld_shared_cache_arm64e | head\n   \u2022 Loading symbol cache file...\n0x199ce7640: _CMPhotoJPEGWriteMPFWithJPEG\n0x1ad5d5970: _objc_autorelease\n0x1c8d0f350: _$ss10_HashTableV12previousHole6beforeAB6BucketVAF_tF\n0x1cf7eba00: _$s5TeaUI14KeyCommandItemVMa\n0x1bb1f8a40: _swift_task_switch\n0x1c1f5edc0: _$s4GRDB3RowC19fastDecodeIfPresent_16atUncheckedIndexxSgxm_SitKAA24DatabaseValueConvertibleRzAA015StatementColumnL0RzlF\n0x1ec2127d0: _CGColorGetColorSpace\n0x207434db0: __swift_stdlib_strtod_clocale\n0x1a0622e00: _objc_retain_x20\n0x1c1f87d30: _swift_getTupleTypeLayout3\n"0x1bb220d70: _fcntl"\n')),(0,r.kt)("h3",{id:"disassemble-the-stub"},"Disassemble the ",(0,r.kt)("em",{parentName:"h3"},"stub")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'\u276f ipsw dyld disass 20B5050f__iPhone15,2/dyld_shared_cache_arm64e -a "0x1bb220d70" --count 5\n   \u2022 Loading symbol cache file...\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-armasm"},"j__fcntl\n0x1bb220d70:  30 7b 04 b0   adrp     x16, 0x1c4185000\n0x1bb220d74:  10 32 1b 91   add      x16, x16, #0x6cc ; _fcntl\n0x1bb220d78:  00 02 1f d6   br       x16\n0x1bb220d7c:  20 00 20 d4   brk      #0x1\n")),(0,r.kt)("h3",{id:"lookup-the-address"},"Lookup the address"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'\u276f ipsw dyld a2s 20B5050f__iPhone15,2/dyld_shared_cache_arm64e "0x1bb220d70" --mapping --image\n   \u2022 Loading symbol cache file...\n')),(0,r.kt)("h2",{id:"mapping"},"MAPPING"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"STUB Island ",(0,r.kt)("em",{parentName:"p"},"(dsc.18)")," UUID: ",(0,r.kt)("inlineCode",{parentName:"p"},"7623C890-8F05-3DFD-AADF-CE765217C572"))),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"SEG"),(0,r.kt)("th",{parentName:"tr",align:null},"INITPROT"),(0,r.kt)("th",{parentName:"tr",align:null},"MAXPROT"),(0,r.kt)("th",{parentName:"tr",align:null},"SIZE"),(0,r.kt)("th",{parentName:"tr",align:null},"ADDRESS"),(0,r.kt)("th",{parentName:"tr",align:null},"FILE OFFSET"),(0,r.kt)("th",{parentName:"tr",align:null},"SLIDE INFO OFFSET"),(0,r.kt)("th",{parentName:"tr",align:null},"FLAGS"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"__TEXT_STUBS"),(0,r.kt)("td",{parentName:"tr",align:null},"r-x"),(0,r.kt)("td",{parentName:"tr",align:null},"r-x"),(0,r.kt)("td",{parentName:"tr",align:null},"0x00080000 (524 kB)"),(0,r.kt)("td",{parentName:"tr",align:null},"0x1bb1b4000"),(0,r.kt)("td",{parentName:"tr",align:null},"0x00000000"),(0,r.kt)("td",{parentName:"tr",align:null},"0x00000000"),(0,r.kt)("td",{parentName:"tr",align:null},"8")))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'   \u2a2f address 0x1bb220d70 not in any dylib\n\n0x1bb220d70: "j__fcntl"\n')),(0,r.kt)("h3",{id:"locate-any-xrefs"},"Locate any ",(0,r.kt)("inlineCode",{parentName:"h3"},"xrefs")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'\u276f ipsw dyld xref 20B5050f__iPhone15,2/dyld_shared_cache_arm64e 0x1bb220d70 --all\n   \u2022 Loading symbol cache file...\n   \u2022 No XREFS found            dylib=/usr/lib/libobjc.A.dylib sym=j__fcntl xrefs=0\n   <SNIP>\n   \u2022 XREFS                     dylib=/System/Library/PrivateFrameworks/CloudKitDaemon.framework/CloudKitDaemon sym=j__fcntl xrefs=1\n0x1b9f577ec: "openFdForDownloadPath:error: + 128"   \n')))}p.isMDXComponent=!0}}]);