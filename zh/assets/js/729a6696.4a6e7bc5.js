"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[840],{5052:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>s,default:()=>h,frontMatter:()=>n,metadata:()=>l,toc:()=>a});var d=r(7624),o=r(2172);const n={sidebar_position:1},s="Palworld Directory",l={id:"advanced/palworld-directory",title:"Palworld Directory",description:"Everything related to the Palworld data is inside the /palworld folder inside the container",source:"@site/docs/advanced/palworld-directory.md",sourceDirName:"advanced",slug:"/advanced/palworld-directory",permalink:"/zh/advanced/palworld-directory",draft:!1,unlisted:!1,editUrl:"https://github.com/thijsvanloef/palworld-server-docker/docs/advanced/palworld-directory.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Kubernetes",permalink:"/zh/advanced/kubernetes"},next:{title:"Known Issues",permalink:"/zh/known-issues/"}},i={},a=[{value:"Folder structure",id:"folder-structure",level:2},{value:"Attaching data directory to host filesystem",id:"attaching-data-directory-to-host-filesystem",level:2}];function c(e){const t={code:"code",h1:"h1",h2:"h2",img:"img",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,o.M)(),...e.components};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(t.h1,{id:"palworld-directory",children:"Palworld Directory"}),"\n",(0,d.jsxs)(t.p,{children:["Everything related to the Palworld data is inside the ",(0,d.jsx)(t.code,{children:"/palworld"})," folder inside the container"]}),"\n",(0,d.jsx)(t.h2,{id:"folder-structure",children:"Folder structure"}),"\n",(0,d.jsx)(t.p,{children:(0,d.jsx)(t.img,{alt:"Folder Structure",src:r(6476).c+"",width:"3750",height:"2590"})}),"\n",(0,d.jsxs)(t.table,{children:[(0,d.jsx)(t.thead,{children:(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.th,{children:"Folder"}),(0,d.jsx)(t.th,{children:"Use"})]})}),(0,d.jsxs)(t.tbody,{children:[(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"palworld"}),(0,d.jsx)(t.td,{children:"Root folder with all the Palworld Server files"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"backups"}),(0,d.jsxs)(t.td,{children:["Folder where all the backups from the ",(0,d.jsx)(t.code,{children:"backup"})," command are stored"]})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"Pal/Saved/Config/LinuxServer"}),(0,d.jsx)(t.td,{children:"Folder with all the .ini configuration files for manual config"})]})]})]}),"\n",(0,d.jsx)(t.h2,{id:"attaching-data-directory-to-host-filesystem",children:"Attaching data directory to host filesystem"}),"\n",(0,d.jsx)(t.p,{children:"The simplest way of attaching the palworld folder to your host system is\nto use the example given in the docker-compose.yml file:"}),"\n",(0,d.jsx)(t.pre,{children:(0,d.jsx)(t.code,{className:"language-yml",children:"      volumes:\n         - ./palworld:/palworld/\n"})}),"\n",(0,d.jsxs)(t.p,{children:["This creates a ",(0,d.jsx)(t.code,{children:"palworld"})," folder in the current working directory and mounts the ",(0,d.jsx)(t.code,{children:"/palworld"})," folder."]})]})}function h(e={}){const{wrapper:t}={...(0,o.M)(),...e.components};return t?(0,d.jsx)(t,{...e,children:(0,d.jsx)(c,{...e})}):c(e)}},6476:(e,t,r)=>{r.d(t,{c:()=>d});const d=r.p+"assets/images/folder_structure-a4e25f49ff034943cb2a234a70d5c2a8.jpg"},2172:(e,t,r)=>{r.d(t,{I:()=>l,M:()=>s});var d=r(1504);const o={},n=d.createContext(o);function s(e){const t=d.useContext(n);return d.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:s(e.components),d.createElement(n.Provider,{value:t},e.children)}}}]);