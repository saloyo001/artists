;!function(){try { var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof global?global:"undefined"!=typeof window?window:"undefined"!=typeof self?self:{},n=(new e.Error).stack;n&&((e._debugIds|| (e._debugIds={}))[n]="d0de1ab7-2316-8fcc-6fcf-17f38a526b08")}catch(e){}}();
(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,930528,e=>{"use strict";var t=e.i(416340),a=e.i(686792),r=e.i(313345);async function s({projectRef:e,id:t,reveal:n},o){if(void 0===e)throw Error("projectRef is required");if(void 0===t)throw Error("Content ID is required");let{data:i,error:l}=await (0,a.get)("/v1/projects/{ref}/api-keys/{id}",{params:{path:{ref:e,id:t},query:{reveal:n?"true":"false"}},signal:o,grant:r.unguarded.migrating});return l&&(0,a.handleError)(l),i}e.s(["useRevealedSecret",0,function({projectRef:e,id:a}){let[r,n]=(0,t.useState)(),[o,i]=(0,t.useState)(!1),l=(0,t.useRef)(0);return{data:r,isLoading:o,reveal:(0,t.useCallback)(async()=>{if(!e||!a)return;let t=++l.current;i(!0);try{let r=await s({projectRef:e,id:a,reveal:!0});if(t!==l.current)return;return n(r.api_key),r.api_key}catch(e){if(t!==l.current)return;throw console.error("Failed to reveal secret key:",e),e}finally{t===l.current&&i(!1)}},[e,a]),clear:(0,t.useCallback)(()=>{l.current++,n(void 0)},[])}}],930528)},743371,e=>{"use strict";var t=e.i(10429);e.s(["billingPartnerLabel",0,e=>{if(!e)return e;switch(e){case"aws":return"AWS";case"vercel_marketplace":return"Vercel";default:return e}},"getAddons",0,e=>{let t=e.find(e=>"compute_instance"===e.type),a=e.find(e=>"pitr"===e.type);return{computeInstance:t,pitr:a,customDomain:e.find(e=>"custom_domain"===e.type),ipv4:e.find(e=>"ipv4"===e.type)}},"getPlanChangeType",0,(e,t)=>e&&t?({free:{free:"none",pro:"upgrade",team:"upgrade",enterprise:"upgrade",platform:"upgrade"},pro:{free:"downgrade",pro:"none",team:"upgrade",enterprise:"upgrade",platform:"upgrade"},team:{free:"downgrade",pro:"downgrade",team:"none",enterprise:"upgrade",platform:"upgrade"},enterprise:{free:"downgrade",pro:"downgrade",team:"downgrade",enterprise:"none",platform:"upgrade"},platform:{free:"downgrade",pro:"downgrade",team:"downgrade",enterprise:"downgrade",platform:"none"}})[e]?.[t]??"none":"none","subscriptionHasHipaaAddon",0,e=>!!t.IS_PLATFORM&&(e?.addons??[]).some(e=>"addon_security_hipaa"===e.supabase_prod_id)])},785065,e=>{"use strict";var t=e.i(10429);let a=[{key:"nextjs",label:"Next.js",icon:"nextjs",guideLink:`${t.DOCS_URL}/guides/getting-started/quickstarts/nextjs`,children:[{key:"app",label:"App Router",icon:"",children:[{key:"supabasejs",label:"supabase-js",icon:"supabase",children:[]}]},{key:"pages",label:"Pages Router",icon:"",children:[{key:"supabasejs",label:"Supabase-js",children:[],icon:"supabase"}]}]},{key:"remix",label:"React Router",icon:"remix",guideLink:`${t.DOCS_URL}/guides/auth/server-side/creating-a-client?framework=remix&environment=remix-loader`,children:[{key:"supabasejs",label:"Supabase-js",children:[],icon:"supabase"}]},{key:"react",label:"React",icon:"react",guideLink:`${t.DOCS_URL}/guides/getting-started/quickstarts/reactjs`,children:[{key:"vite",label:"Vite",icon:"vite",children:[{key:"supabasejs",label:"Supabase-js",children:[],icon:"supabase"}]},{key:"create-react-app",label:"Create React App",icon:"react",children:[{key:"supabasejs",label:"supabase-js",icon:"supabase",children:[]}]}]},{key:"nuxt",label:"Nuxt",icon:"nuxt",guideLink:`${t.DOCS_URL}/guides/getting-started/quickstarts/nuxtjs`,children:[{key:"supabasejs",label:"Supabase-js",children:[],icon:"supabase"}]},{key:"vuejs",label:"Vue.JS",icon:"vuejs",guideLink:`${t.DOCS_URL}/guides/getting-started/quickstarts/vue`,children:[{key:"supabasejs",label:"Supabase-js",children:[],icon:"supabase"}]},{key:"sveltekit",label:"SvelteKit",icon:"sveltekit",guideLink:`${t.DOCS_URL}/guides/getting-started/quickstarts/sveltekit`,children:[{key:"supabasejs",label:"Supabase-js",children:[],icon:"supabase"}]},{key:"solidjs",label:"Solid.js",icon:"solidjs",guideLink:`${t.DOCS_URL}/guides/getting-started/quickstarts/solidjs`,children:[{key:"supabasejs",label:"Supabase-js",children:[],icon:"supabase"}]},{key:"astro",label:"Astro",icon:"astro",guideLink:"https://docs.astro.build/en/guides/backend/supabase/",children:[{key:"supabasejs",label:"Supabase-js",children:[],icon:"supabase"}]},{key:"refine",label:"Refine",icon:"refine",guideLink:`${t.DOCS_URL}/guides/getting-started/quickstarts/refine`,children:[{key:"supabasejs",label:"Supabase-js",children:[],icon:"supabase"}]},{key:"tanstack",label:"TanStack Start",icon:"tanstack",guideLink:`${t.DOCS_URL}/guides/getting-started/quickstarts/tanstack`,children:[{key:"supabasejs",label:"Supabase-js",children:[],icon:"supabase"}]},{key:"flask",label:"Flask (Python)",icon:"python",guideLink:`${t.DOCS_URL}/guides/getting-started/quickstarts/flask`,children:[{key:"supabasepy",label:"supabase-py",children:[],icon:"supabase"}]},{key:"dotnet",label:".NET",icon:"dotnet",guideLink:`${t.DOCS_URL}/reference/csharp/introduction`,children:[{key:"aspnetcore",label:"ASP.NET Core & Blazor",icon:"",children:[{key:"supabasedotnet",label:"supabase-dotnet",icon:"supabase",children:[]}]},{key:"console",label:"Console / desktop",icon:"",children:[{key:"supabasedotnet",label:"supabase-dotnet",icon:"supabase",children:[]}]},{key:"unity",label:"Unity",icon:"",children:[{key:"supabasedotnet",label:"supabase-dotnet",icon:"supabase",children:[]}]}]}],r=[{key:"exporeactnative",label:"Expo React Native",icon:"expo",guideLink:`${t.DOCS_URL}/guides/getting-started/quickstarts/expo-react-native`,children:[{key:"supabasejs",label:"Supabase-js",children:[],icon:"supabase"}]},{key:"flutter",label:"Flutter",icon:"flutter",guideLink:`${t.DOCS_URL}/guides/getting-started/tutorials/with-flutter`,children:[{key:"supabaseflutter",label:"supabase-flutter",children:[],icon:"supabase"}]},{key:"ionicreact",label:"Ionic React",icon:"react",guideLink:`${t.DOCS_URL}/guides/getting-started/tutorials/with-ionic-react`,children:[{key:"supabasejs",label:"Supabase-js",children:[],icon:"supabase"}]},{key:"swift",label:"Swift",icon:"swift",guideLink:`${t.DOCS_URL}/guides/getting-started/tutorials/with-swift`,children:[{key:"supabaseswift",label:"supabase-swift",children:[],icon:"supabase"}]},{key:"androidkotlin",label:"Android Kotlin",icon:"kotlin",guideLink:`${t.DOCS_URL}/guides/getting-started/tutorials/with-kotlin`,children:[{key:"supabasekt",label:"supabase-kt",children:[],icon:"supabase"}]},{key:"ionicangular",label:"Ionic Angular",icon:"ionic-angular",guideLink:`${t.DOCS_URL}/guides/getting-started/tutorials/with-ionic-angular`,children:[{key:"supabasejs",label:"Supabase-js",children:[],icon:"supabase"}]}],s=[{key:"prisma",label:"Prisma",icon:"prisma",guideLink:"https://supabase.com/partners/integrations/prisma",children:[]},{key:"drizzle",label:"Drizzle",icon:"drizzle",guideLink:`${t.DOCS_URL}/guides/database/drizzle`,children:[]}];e.s(["CONNECTION_SOURCE_LOAD_BALANCER",0,"load-balancer","DATABASE_CONNECTION_TYPES",0,[{id:"uri",label:"URI",contentType:"input",lang:"bash",fileTitle:void 0},{id:"psql",label:"PSQL",contentType:"code",lang:"bash",fileTitle:void 0},{id:"golang",label:"Golang",contentType:"code",lang:"go",fileTitle:".env"},{id:"jdbc",label:"JDBC",contentType:"input",lang:"bash",fileTitle:void 0},{id:"dotnet",label:".NET",contentType:"code",lang:"csharp",fileTitle:"appsettings.json"},{id:"nodejs",label:"Node.js",contentType:"code",lang:"js",fileTitle:".env"},{id:"php",label:"PHP",contentType:"code",lang:"php",fileTitle:".env"},{id:"python",label:"Python",contentType:"code",lang:"python",fileTitle:".env"},{id:"sqlalchemy",label:"SQLAlchemy",contentType:"code",lang:"python",fileTitle:".env"}],"FRAMEWORKS",0,a,"MOBILES",0,r,"ORMS",0,s,"connectionStringMethodOptions",0,{direct:{value:"direct",label:"Direct connection",description:"Ideal for applications with persistent and long-lived connections such as those running on virtual machines or long-standing containers."},transaction:{value:"transaction",label:"Transaction pooler",description:"Ideal for stateless applications like serverless functions where each interaction with Postgres is brief and isolated."},session:{value:"session",label:"Session pooler",description:"Only recommended as an alternative to direct connection when connecting via an IPv4 network."}}])},889230,e=>{"use strict";var t=e.i(785065);e.s(["resolveFrameworkLibraryKey",0,function(e){let{framework:a,frameworkVariant:r,library:s}=e;if(!a)return null;if(s)return String(s);let n=[...t.FRAMEWORKS,...t.MOBILES].find(e=>e.key===a);if(!n?.children?.length)return null;if(r){let e=n.children.find(e=>e.key===r);if(e?.children?.length)return e.children[0].key}let o=n.children[0];return o?.children?.length?o.children[0].key:o?.key??null}])},157179,818079,654205,e=>{"use strict";var t=e.i(221628),a=e.i(223600);e.s(["ConnectionParameters",0,({parameters:e,onCopy:r})=>{let s=e.map(e=>`${e.key}=${e.value}`).join("\n");return(0,t.jsxs)("div",{className:"overflow-hidden rounded-lg border bg-surface-75",children:[(0,t.jsxs)("div",{className:"flex items-center justify-between border-b bg-surface-100 py-2 pl-4 pr-2",children:[(0,t.jsx)("span",{className:"text-xs text-foreground-light",children:"Connection parameters"}),(0,t.jsx)(a.default,{variant:"default",size:"tiny",copyLabel:"Copy all",text:s,"aria-label":"Copy all connection parameters",onClick:()=>r?.("all")})]}),(0,t.jsx)("div",{className:"divide-y",children:e.map(e=>(0,t.jsxs)("div",{className:"flex items-center gap-x-2 py-2.5 pl-4 pr-2 font-mono text-sm",children:[(0,t.jsxs)("span",{className:"shrink-0 text-foreground-lighter",children:[e.key,":"]}),(0,t.jsx)("span",{className:"flex-1 truncate text-foreground",title:e.value,children:e.value}),(0,t.jsx)(a.default,{variant:"default",size:"tiny",iconOnly:!0,text:e.value,"aria-label":`Copy ${e.key}`,onClick:()=>r?.(e.key)})]},e.key))})]})}],157179);var r=e.i(937942),s=e.i(10429);e.s(["PasswordEncodingNote",0,()=>(0,t.jsxs)("p",{className:"text-sm text-foreground-lighter mb-1",children:["If your database password contains special characters,"," ",(0,t.jsx)(r.InlineLink,{href:s.SPECIAL_SYMBOLS_IN_PASSWORDS_DOCS_URL,children:"percent-encode"})," them in the connection string."]})],818079),e.i(128328);var n=e.i(158639),o=e.i(416340),i=e.i(785065),l=e.i(78133),c=e.i(743371),d=e.i(83006),u=e.i(578152),p=e.i(150671),m=e.i(144676),f=e.i(280590),g=e.i(635494),h=e.i(48189);e.s(["useConnectionStringDatabases",0,e=>{let{ref:t}=(0,n.useParams)(),{hasAccess:a}=(0,f.useCheckEntitlements)("dedicated_pooler"),r=(0,g.useIsHighAvailability)(),{data:s=[]}=(0,p.useReadReplicasQuery)({projectRef:t}),{data:b}=(0,d.usePgbouncerConfigQuery)({projectRef:t},{enabled:!r}),{data:v}=(0,u.useSupavisorConfigurationQuery)({projectRef:t},{enabled:!r}),{data:y}=(0,m.useProjectAddonsQuery)({projectRef:t}),{ipv4:S}=(0,c.getAddons)(y?.selected_addons??[]);return(0,o.useMemo)(()=>{let n=["db_host","db_name","db_port","db_user","inserted_at"],o={db_user:"",db_host:"",db_port:"",db_name:""},c=Object.fromEntries(s.map(s=>{let i=(0,h.pluckObjectFields)(s||o,n),c=v?.find(e=>e.identifier===s.identifier),d=a?b:void 0,u=(0,l.getConnectionStrings)({connectionInfo:i,poolingInfo:{connectionString:c?.connection_string??"",db_host:c?.db_host??"",db_name:c?.db_name??"",db_port:c?.db_port??0,db_user:c?.db_user??""},metadata:{projectRef:s.identifier}}),p=void 0!==d?(0,l.getConnectionStrings)({connectionInfo:i,poolingInfo:{connectionString:d.connection_string.replace(t??"_",s.identifier),db_host:d.db_host,db_name:d.db_name,db_port:d.db_port,db_user:d.db_user},metadata:{projectRef:s.identifier}}):void 0;return[s.identifier,(0,l.buildConnectionStringPooler)({deploymentMode:e,connectionInfo:i,connectionStringsShared:u,connectionStringsDedicated:p,ipv4Addon:!!S,isHighAvailability:r})]})),d=r?s.find(e=>e.identifier===t):void 0;if(d){let a=(0,l.getHighAvailabilityLoadBalancerConnectionInfo)((0,h.pluckObjectFields)(d,n));c[i.CONNECTION_SOURCE_LOAD_BALANCER]=(0,l.buildConnectionStringPooler)({deploymentMode:e,connectionInfo:a,connectionStringsShared:(0,l.getConnectionStrings)({connectionInfo:a,metadata:{projectRef:t}}),ipv4Addon:!1,isHighAvailability:r})}return c},[s,b,v,a,S,t,e,r])}],654205)},78133,e=>{"use strict";var t=e.i(604512);let a=e=>e.includes("sslnegotiation=")?e:(0,t.appendConnectionStringParams)(e,"sslmode=require&sslnegotiation=direct"),r=(e,t,a="postgres")=>{let r="postgres.[POOLER_TENANT_ID]",s="[YOUR-PASSWORD]",n=`postgresql://${r}:${s}@${e}:${t}/${a}`,o=`psql 'postgresql://${r}:${s}@${e}:${t}/${a}'`,i=`user=${r}
password=${s}
host=${e}
port=${t}
dbname=${a}`,l=`DATABASE_URL=${n}`;return{psql:o,uri:n,golang:i,jdbc:`jdbc:postgresql://${e}:${t}/${a}?user=${r}&password=${s}`,dotnet:`{
  "ConnectionStrings": {
    "DefaultConnection": "User Id=${r};Password=${s};Server=${e};Port=${t};Database=${a}"
  }
}`,nodejs:l,php:i,python:i,sqlalchemy:i}};e.s(["appendHighAvailabilitySslParams",0,a,"buildConnectionStringPooler",0,({deploymentMode:e,connectionInfo:t,connectionStringsShared:s,connectionStringsDedicated:n,ipv4Addon:o,isHighAvailability:i})=>{if(e.isSelfHosted){let e=t.db_host,a=t.db_port||5432,s=r(e,a),n=r(e,6543),o=((e,t,a="postgres")=>{let r="postgres",s="[YOUR-PASSWORD]",n=`postgresql://${r}:${s}@${e}:${t}/${a}`,o=`psql 'postgresql://${r}:${s}@${e}:${t}/${a}'`,i=`user=${r}
password=${s}
host=${e}
port=${t}
dbname=${a}`,l=`DATABASE_URL=${n}`;return{psql:o,uri:n,golang:i,jdbc:`jdbc:postgresql://${e}:${t}/${a}?user=${r}&password=${s}`,dotnet:`{
  "ConnectionStrings": {
    "DefaultConnection": "User Id=${r};Password=${s};Server=${e};Port=${t};Database=${a}"
  }
}`,nodejs:l,php:i,python:i,sqlalchemy:i}})(e,a);return{transactionShared:n.uri,sessionShared:s.uri,transactionDedicated:void 0,sessionDedicated:void 0,ipv4SupportedForDedicatedPooler:!1,direct:o.uri}}if(e.isCli){let e=s.direct.uri;return{transactionShared:e,sessionShared:e,transactionDedicated:void 0,sessionDedicated:void 0,ipv4SupportedForDedicatedPooler:!1,direct:e}}if(i){let e=a(s.direct.uri);return{transactionShared:e,sessionShared:e,transactionDedicated:void 0,sessionDedicated:void 0,ipv4SupportedForDedicatedPooler:!1,direct:e}}return{transactionShared:s.pooler.uri,sessionShared:s.pooler.uri.replace("6543","5432"),transactionDedicated:n?.pooler.uri,sessionDedicated:n?.pooler.uri.replace("6543","5432"),ipv4SupportedForDedicatedPooler:o,direct:s.direct.uri}},"getConnectionStrings",0,({connectionInfo:e,poolingInfo:t,metadata:a})=>{let r=t?.connectionString.includes("options=reference"),{projectRef:s}=a,n="[YOUR-PASSWORD]",o=e.db_user,i=e.db_port,l=e.db_host,c=e.db_name,d=t?.db_user,u=t?.db_port,p=t?.db_host,m=t?.db_name,f=r?`psql "postgresql://${o}:${n}@${l}:${i}/${c}"`:`psql -h ${l} -p ${i} -d ${c} -U ${o}`,g=`postgresql://${o}:${n}@${l}:${i}/${c}`,h=`DATABASE_URL=${g}`,b=`jdbc:postgresql://${l}:${i}/${c}?user=${o}&password=${n}`,v=`{
  "ConnectionStrings": {
    "DefaultConnection": "Host=${l};Database=${c};Username=${o};Password=${n};SSL Mode=Require;Trust Server Certificate=true"
  }
}`,y=`{
  "ConnectionStrings": {
    "DefaultConnection": "User Id=${d};Password=${n};Server=${p};Port=${u};Database=${m}${r?`;Options='reference=${s}'`:""}"
  }
}`,S=`DATABASE_URL=${g}`,x=r?`psql "postgresql://${d}:${n}@${p}:${u}/${m}?options=reference%3D${s}"`:`psql -h ${p} -p ${u} -d ${m} -U ${d}`,_=t?.connectionString??"",E=`DATABASE_URL=${t?.connectionString??""}`,A=`user=${d} 
password=${n} 
host=${p}
port=${u}
dbname=${m}${r?`options=reference=${s}`:""}`,C=`jdbc:postgresql://${p}:${u}/${m}?user=${d}${r?`&options=reference%3D${s}`:""}&password=${n}`;return{direct:{psql:f,uri:g,golang:h,jdbc:b,dotnet:v,nodejs:S,php:h,python:h,sqlalchemy:`user=${o} 
password=${n} 
host=${l} 
port=${i} 
dbname=${c}`},pooler:{psql:x,uri:_,golang:A,jdbc:C,dotnet:y,nodejs:E,php:A,python:A,sqlalchemy:`user=${d} 
password=${n} 
host=${p} 
port=${u} 
dbname=${m}`}}},"getHighAvailabilityLoadBalancerConnectionInfo",0,e=>({...e,db_port:5433})])},611062,e=>{"use strict";e.s(["resolveOrmConnectionScenario",0,({connectionStringPooler:e,deploymentMode:t,isHighAvailability:a})=>t.isCli?"cli":t.isSelfHosted?"self-hosted":a?"high-availability":e.transactionDedicated?e.ipv4SupportedForDedicatedPooler?"dedicated-pooler":"shared-pooler-with-dedicated-alternative":"shared-pooler"])},265770,e=>{"use strict";var t=e.i(536374);let a=t.FEATURE_GROUPS_PLATFORM.filter(e=>"storage"!==e.id).map(e=>e.id),r=new Set(t.FEATURE_GROUPS_NON_PLATFORM.map(e=>e.id)),s={id:"install",title:"Install package",description:"Run this command to install the required dependencies.",content:"steps/install"},n={id:"install",title:"Install packages",description:"Run this command to install the required dependencies.",content:"steps/install"},o={id:"configure",title:"Add files",description:"Copy the following code into your project.",content:"{{framework}}/{{frameworkVariant}}/{{library}}"},i={id:"configure-nextjs",title:"Add files",description:"Add env variables, create Supabase client helpers, and set up middleware to keep sessions refreshed.",content:"{{framework}}/{{frameworkVariant}}/{{library}}"},l={id:"shadcn-add",title:"Add Supabase Library blocks",description:"Install Supabase Library blocks via the shadcn registry.",content:"steps/shadcn/command"},c={id:"shadcn-env",title:"Set env variables",description:"Add the following values to your env file.",content:"steps/shadcn/env"},d={id:"direct-install",title:"Install dependencies",description:"Install the required dependencies.",content:"steps/direct-install"},u={id:"direct-files",title:"Add files",description:"Add the following files to your project.",content:"steps/direct-files"},p={id:"install-skills",title:"Install Agent Skills",optional:!0,description:"Agent Skills give AI coding tools ready-made instructions, scripts, and resources for working with Supabase more accurately and efficiently.",content:"steps/skills-install"},m={modes:[{id:"framework",label:"Framework",description:"Use a client library",fields:["framework","frameworkVariant","library","frameworkUi"]},{id:"server",label:"Server",description:"Build APIs",fields:[],prompt:`Set up the @supabase/server SDK in this project.

Install it:
npm install @supabase/server

It reads these environment variables (copy the real values from the Supabase dashboard's Connect dialog — never commit the secret key):
- SUPABASE_URL
- SUPABASE_PUBLISHABLE_KEY
- SUPABASE_SECRET_KEY
- SUPABASE_JWKS_URL (used to verify user JWTs)

Create request handlers with \`withSupabase\` from "@supabase/server". It validates auth and provides an RLS-scoped client (\`ctx.supabase\`) and an admin client that bypasses RLS (\`ctx.supabaseAdmin\`). Example:

import { withSupabase } from "@supabase/server"

export default {
  fetch: withSupabase({ auth: "user" }, async (_req, ctx) => {
    const { data } = await ctx.supabase.from("todos").select()
    return Response.json(data)
  }),
}

Auth modes: "user" (valid JWT), "publishable" (publishable key), "secret" (secret key), "none". On Supabase Edge Functions these env vars are injected automatically; for non-"user" auth modes, set \`verify_jwt = false\` for the function in supabase/config.toml.`},{id:"direct",label:"Direct",description:"Connection string",fields:["connectionSource","connectionMethod","useSharedPooler","connectionType"]},{id:"orm",label:"ORM",description:"Third-party library",fields:["orm"]},{id:"mcp",label:"MCP",description:"Connect your agent",fields:["mcpClient","mcpReadonly","mcpFeatures"]},{id:"warehouse",label:"Warehouse",description:"Analytical endpoint",fields:[]}],fields:{framework:{id:"framework",type:"combobox",label:"Framework",combobox:{placeholder:"Select framework",searchPlaceholder:"Search frameworks...",emptyMessage:"No frameworks found"},options:{source:"frameworks"},defaultValue:"nextjs"},frameworkVariant:{id:"frameworkVariant",type:"select",label:"Variant",options:{source:"frameworkVariants"},defaultValue:"app",dependsOn:{framework:["nextjs","react","dotnet"]}},library:{id:"library",type:"select",label:"Library",options:{source:"libraries"},defaultValue:"supabasejs"},frameworkUi:{id:"frameworkUi",type:"switch",label:"Shadcn",description:"Install Supabase Library blocks with shadcn.",defaultValue:!1,dependsOn:{framework:["nextjs","react"]}},connectionSource:{id:"connectionSource",type:"select",label:"Source",options:{source:"connectionSources"},defaultValue:void 0},connectionMethod:{id:"connectionMethod",type:"radio-list",label:"Connection Method",options:{source:"connectionMethods"}},useSharedPooler:{id:"useSharedPooler",type:"switch",label:"Use IPv4 connection",description:"Uses the shared pooler. Recommended on networks that do not support IPv6.",defaultValue:!1,dependsOn:{connectionMethod:["transaction"]}},connectionType:{id:"connectionType",type:"select",label:"Type",options:{source:"connectionTypes"},defaultValue:"uri"},orm:{id:"orm",type:"radio-list",label:"ORM",options:{source:"orms"},defaultValue:"prisma"},mcpClient:{id:"mcpClient",type:"combobox",label:"Client",description:"The MCP client you are using.",combobox:{placeholder:"Select client",searchPlaceholder:"Search clients...",emptyMessage:"No clients found"},options:{source:"mcpClients"},defaultValue:"claude-code"},mcpReadonly:{id:"mcpReadonly",type:"switch",label:"Read-only",description:"Only allow read operations on your database.",defaultValue:!1},mcpFeatures:{id:"mcpFeatures",type:"multi-select",label:"Feature groups",description:"Which MCP tools to include. Storage is off by default to keep tool counts manageable.",options:{source:"mcpFeatures"},defaultValue:a}},steps:{mode:{framework:{framework:{nextjs:{frameworkVariant:{app:{frameworkUi:{true:[n,l,c,p],DEFAULT:[n,i,p]}},DEFAULT:{frameworkUi:{true:[s,l,c,p],DEFAULT:[s,i,p]}}}},react:{frameworkUi:{true:[s,l,c,p],DEFAULT:[s,{id:"configure-react",title:"Add files",description:"Add env variables, create a Supabase client, and use it in your app to query data.",content:"{{framework}}/{{frameworkVariant}}/{{library}}"},p]}},remix:[n,o,p],dotnet:{frameworkVariant:{aspnetcore:[{id:"install",title:"Install packages",description:"Run these commands to install the required dependencies.",content:"dotnet/aspnetcore/install"},o,p],unity:[{id:"install",title:"Install package",description:"Add the Supabase SDK to your Unity project.",content:"dotnet/unity/install"},o,p],DEFAULT:[s,o,p]}},DEFAULT:[s,o,p]}},direct:{connectionType:{nodejs:[d,u,p],golang:[d,u,p],dotnet:[d,u,p],python:[d,u,p],sqlalchemy:[d,u,p],DEFAULT:[{id:"connection",title:"Connection string",description:"Copy the connection details for your database.",content:"steps/direct-connection"},p]}},orm:[{id:"install",title:"Install ORM",description:"Add the ORM to your project.",content:"steps/orm-install"},{id:"configure",title:"Configure ORM",description:"Set up your ORM configuration.",content:"{{orm}}"},p],mcp:{mcpClient:{codex:[{id:"codex-add-server",title:"Add the Supabase MCP server to Codex",description:"Run this command to add the server.",content:"steps/mcp/codex/add-server"},{id:"codex-authenticate",title:"Authenticate",description:"Run the authentication command.",content:"steps/mcp/codex/authenticate"},{id:"codex-verify",title:"Verify authentication",description:"Confirm the MCP server is authenticated.",content:"steps/mcp/codex/verify"},p],"claude-code":[{id:"claude-add-server",title:"Add MCP server",description:"Add the MCP server to your project config using the command line.",content:"steps/mcp/claude-code/add-server"},{id:"claude-authenticate",title:"Authenticate",description:"After configuring the MCP server, you need to authenticate. Run this in a regular terminal, not an IDE extension.",content:"steps/mcp/claude-code/authenticate"},p],DEFAULT:[{id:"configure-mcp",title:"Configure MCP",description:"Set up your MCP client.",content:"steps/mcp/cursor"},p]}},server:[{id:"server-install",title:"Install package",description:"Add @supabase/server to your backend.",content:"server/install"},{id:"server-env",title:"Set environment variables",description:"Copy these into your environment so your handler can verify users and use supabase-js.",content:"server/env"},{id:"install-skills",title:"Install the Supabase Server skill",optional:!0,description:"Give AI coding tools instructions for building APIs with @supabase/server.",content:"steps/skills-install"}],warehouse:[],DEFAULT:[p]}}};e.s(["EXTRA_PACKAGES",0,{supabasejs:{"nextjs/app":["@supabase/ssr"],remix:["@supabase/ssr"]}},"INSTALL_COMMANDS",0,{supabasejs:"npm install @supabase/supabase-js",supabasepy:"pip install supabase",supabaseflutter:"flutter pub add supabase_flutter",supabaseswift:"swift package add-dependency https://github.com/supabase/supabase-swift",supabasekt:'implementation("io.github.jan-tennert.supabase:supabase-kt:VERSION")',supabasedotnet:"dotnet add package Supabase"},"connectSchema",0,m,"getDefaultMcpFeatures",0,function(e){return e?a:a.filter(e=>r.has(e))},"getSupportedMcpFeatureGroups",0,function(e){return e?t.FEATURE_GROUPS_PLATFORM:t.FEATURE_GROUPS_NON_PLATFORM},"normalizeMcpFeatures",0,function(e,t){return t?e:e.filter(e=>r.has(e))}])},245201,e=>{"use strict";var t=e.i(221628),a=e.i(486240);e.s(["default",0,({projectKeys:e})=>{let r=[{name:"MainActivity.kt",language:"kotlin",code:`
val supabase = createSupabaseClient(
    supabaseUrl = "${e.apiUrl??"your-project-url"}",
    supabaseKey = "${e.publishableKey??"your-publishable-key"}"
  ) {
    install(Postgrest)
}

class MainActivity : ComponentActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContent {
            MaterialTheme {
                // A surface container using the 'background' color from the theme
                Surface(
                    modifier = Modifier.fillMaxSize(),
                    color = MaterialTheme.colorScheme.background
                ) {
                    TodoList()
                }
            }
        }
    }
}

@Composable
fun TodoList() {
    var items by remember { mutableStateOf<List<TodoItem>>(listOf()) }
    LaunchedEffect(Unit) {
        withContext(Dispatchers.IO) {
            items = supabase.from("todos")
                              .select().decodeList<TodoItem>()
        }
    }
    LazyColumn {
        items(
            items,
            key = { item -> item.id },
        ) { item ->
            Text(
                item.name,
                modifier = Modifier.padding(8.dp),
            )
        }
    }
}
`},{name:"TodoItem.kt",language:"kotlin",code:`
@Serializable
data class TodoItem(val id: Int, val name: String)
        `}];return(0,t.jsx)(a.MultipleCodeBlock,{files:r})}])},331248,e=>{"use strict";var t=e.i(221628),a=e.i(486240);e.s(["default",0,({projectKeys:e})=>{let r=[{name:".env.local",language:"bash",code:`
SUPABASE_URL=${e.apiUrl??"your-project-url"}
SUPABASE_KEY=${e.publishableKey??e.anonKey??"your-publishable-key"}
        `},{name:"src/db/supabase.js",language:"js",code:`
import { createClient } from "@supabase/supabase-js";

const supabaseUrl = import.meta.env.SUPABASE_URL;
const supabaseKey = import.meta.env.SUPABASE_KEY;

export const supabase = createClient(supabaseUrl, supabaseKey);
        `},{name:"src/pages/index.astro",language:"html",code:`
---
import { supabase } from '../db/supabase';

const { data, error } = await supabase.from("todos").select('*');
---

{
  (
    <ul>
      {data.map((entry) => (
        <li>{entry.name}</li>
      ))}
    </ul>
  )
}
`}];return(0,t.jsx)(a.MultipleCodeBlock,{files:r})}])},766598,e=>{"use strict";var t=e.i(221628),a=e.i(331162);let r=[e.i(265770).INSTALL_COMMANDS.supabasedotnet,"dotnet add package Supabase.Extensions.DependencyInjection"].join("\n");e.s(["default",0,()=>(0,t.jsx)(a.CodeBlock,{className:"[&_code]:text-foreground",value:r,hideLineNumbers:!0,language:"bash",children:r})])},675729,e=>{"use strict";var t=e.i(221628),a=e.i(486240);e.s(["default",0,({projectKeys:e})=>{let r=e.apiUrl??"your-project-url",s=e.publishableKey??e.anonKey??"your-publishable-key",n=[{name:"appsettings.json",language:"json",code:`
{
  "Supabase": {
    "Url": "${r}",
    "Key": "${s}"
  }
}
`},{name:"Program.cs",language:"csharp",code:`
using Supabase.Extensions.DependencyInjection;

var builder = WebApplication.CreateBuilder(args);

// Registers Supabase.Client and each of its sub-clients (Auth, Postgrest,
// Storage, Functions, Realtime) in the DI container, backed by pooled
// HttpClients from IHttpClientFactory.
//
// Blazor registers the client the same way: use this in your Blazor Server /
// Web App Program.cs, or WebAssemblyHostBuilder.CreateDefault(args) for a
// Blazor WebAssembly client.
builder.Services.AddSupabase(
    builder.Configuration["Supabase:Url"]!,
    builder.Configuration["Supabase:Key"]!
);

var app = builder.Build();

// Inject Supabase.Client (or a single sub-client) wherever you need it — a
// minimal API endpoint here, or a @inject in a Blazor component.
app.MapGet("/todos", async (Supabase.Client supabase) =>
{
    await supabase.InitializeAsync();
    var response = await supabase.From<Todo>().Get();
    return response.Models;
});

app.Run();
`},{name:"Models/Todo.cs",language:"csharp",code:`
using Supabase.Postgrest.Attributes;
using Supabase.Postgrest.Models;

[Table("todos")]
public class Todo : BaseModel
{
    [PrimaryKey("id")]
    public long Id { get; set; }

    [Column("name")]
    public string Name { get; set; } = string.Empty;
}
`}];return(0,t.jsx)(a.MultipleCodeBlock,{files:n})}])},240228,e=>{"use strict";var t=e.i(221628),a=e.i(486240);e.s(["default",0,({projectKeys:e})=>{let r=e.apiUrl??"your-project-url",s=e.publishableKey??e.anonKey??"your-publishable-key",n=[{name:"Program.cs",language:"csharp",code:`
using Supabase;

var url = "${r}";
var key = "${s}";

var supabase = new Client(url, key, new SupabaseOptions
{
    AutoConnectRealtime = true
});
await supabase.InitializeAsync();

var response = await supabase.From<Todo>().Get();
foreach (var todo in response.Models)
{
    Console.WriteLine(todo.Name);
}
`},{name:"Todo.cs",language:"csharp",code:`
using Supabase.Postgrest.Attributes;
using Supabase.Postgrest.Models;

[Table("todos")]
public class Todo : BaseModel
{
    [PrimaryKey("id")]
    public long Id { get; set; }

    [Column("name")]
    public string Name { get; set; } = string.Empty;
}
`}];return(0,t.jsx)(a.MultipleCodeBlock,{files:n})}])},199302,e=>{"use strict";var t=e.i(221628),a=e.i(331162);let r="https://github.com/GlitchEnzo/NuGetForUnity.git?path=/src/NuGetForUnity";e.s(["default",0,()=>(0,t.jsxs)("div",{className:"flex flex-col gap-y-4",children:[(0,t.jsxs)("div",{className:"flex flex-col gap-y-2",children:[(0,t.jsxs)("p",{className:"text-sm text-foreground-light",children:["Unity resolves NuGet packages through NuGetForUnity. Install it from the Package Manager via ",(0,t.jsx)("span",{className:"text-foreground",children:"Add package from git URL"}),":"]}),(0,t.jsx)(a.CodeBlock,{className:"[&_code]:text-foreground",value:r,hideLineNumbers:!0,language:"bash",children:r})]}),(0,t.jsxs)("p",{className:"text-sm text-foreground-light",children:["Then open ",(0,t.jsx)("span",{className:"text-foreground",children:"Window → NuGet → Manage NuGet Packages"}),", search for ",(0,t.jsx)("span",{className:"text-foreground",children:"Supabase"}),", and install it. If you build with IL2CPP, preserve your model types from managed code stripping with a"," ",(0,t.jsx)("span",{className:"text-foreground",children:"link.xml"}),"."]})]})])},818818,e=>{"use strict";var t=e.i(221628),a=e.i(486240);e.s(["default",0,({projectKeys:e})=>{let r=e.apiUrl??"your-project-url",s=e.publishableKey??e.anonKey??"your-publishable-key",n=[{name:"SupabaseManager.cs",language:"csharp",code:`
using System.Threading.Tasks;
using Supabase;
using UnityEngine;

// Keep a single client alive for the whole game and expose it through a
// MonoBehaviour singleton that survives scene loads.
public class SupabaseManager : MonoBehaviour
{
    public static SupabaseManager Instance { get; private set; }
    public Client Supabase { get; private set; }

    // Await this before using the client. Awake returns at the first await, so
    // other scripts could run before InitializeAsync() finishes without it.
    public Task InitializationTask { get; private set; }

    private const string Url = "${r}";
    private const string Key = "${s}";

    private void Awake()
    {
        if (Instance != null)
        {
            Destroy(gameObject);
            return;
        }

        Instance = this;
        DontDestroyOnLoad(gameObject);
        InitializationTask = InitializeAsync();
    }

    private async Task InitializeAsync()
    {
        Supabase = new Client(Url, Key, new SupabaseOptions
        {
            AutoConnectRealtime = true
        });
        await Supabase.InitializeAsync();
    }
}
`},{name:"TodoList.cs",language:"csharp",code:`
using System.Threading.Tasks;
using UnityEngine;

public class TodoList : MonoBehaviour
{
    // Start() can't be awaited, so kick off the async work from a Task method.
    private void Start()
    {
        _ = LoadTodosAsync();
    }

    private async Task LoadTodosAsync()
    {
        var manager = SupabaseManager.Instance;
        await manager.InitializationTask;

        var response = await manager.Supabase.From<Todo>().Get();
        foreach (var todo in response.Models)
        {
            Debug.Log(todo.Name);
        }
    }
}
`},{name:"Todo.cs",language:"csharp",code:`
using Supabase.Postgrest.Attributes;
using Supabase.Postgrest.Models;

[Table("todos")]
public class Todo : BaseModel
{
    [PrimaryKey("id")]
    public long Id { get; set; }

    [Column("name")]
    public string Name { get; set; } = string.Empty;
}
`}];return(0,t.jsxs)("div",{className:"flex flex-col gap-y-4",children:[(0,t.jsxs)("p",{className:"text-sm text-foreground-light",children:["Before running the sample, attach ",(0,t.jsx)("code",{children:"SupabaseManager"})," to an active GameObject and attach ",(0,t.jsx)("code",{children:"TodoList"})," to an active GameObject in the scene."]}),(0,t.jsx)(a.MultipleCodeBlock,{files:n})]})}])},700224,e=>{"use strict";var t=e.i(221628),a=e.i(486240),r=e.i(611062),s=e.i(635494);e.s(["default",0,({connectionStringPooler:e,deploymentMode:n})=>{let o=[{name:".env",language:"bash",code:function({connectionStringPooler:e,deploymentMode:t,isHighAvailability:a}){switch((0,r.resolveOrmConnectionScenario)({connectionStringPooler:e,deploymentMode:t,isHighAvailability:a})){case"cli":return`
# Connect to Postgres via the direct connection
DATABASE_URL="${e.direct}"
`;case"self-hosted":return`
# Connect to Postgres via the self-hosted transaction-mode pooler
DATABASE_URL="${e.transactionShared}"
`;case"high-availability":return`
# Multigres does not support connection pooling — connect to Postgres directly
DATABASE_URL="${e.direct}"
`;case"dedicated-pooler":return`
# Connect to Postgres via the dedicated transaction-mode pooler (IPv4-only)
DATABASE_URL="${e.transactionDedicated}"
        `;case"shared-pooler-with-dedicated-alternative":return`
# Connect to Postgres via the shared transaction-mode pooler (IPv4-only)
DATABASE_URL="${e.transactionShared}"

# For paid projects, if your network supports IPv6, or you purchased the IPv4 add-on, use the dedicated transaction-mode pooler as an alternative
# DATABASE_URL="${e.transactionDedicated}"
        `;case"shared-pooler":return`
# Connect to Postgres via the shared transaction-mode pooler (IPv4-only)
DATABASE_URL="${e.transactionShared}"
`}}({connectionStringPooler:e,deploymentMode:n,isHighAvailability:(0,s.useIsHighAvailability)()})},{name:"drizzle/schema.ts",language:"tsx",code:`
import { pgTable, serial, text, varchar } from "drizzle-orm/pg-core";

export const users = pgTable('users', {
  id: serial('id').primaryKey(),
  fullName: text('full_name'),
  phone: varchar('phone', { length: 256 }),
});
        `},{name:"index.tsx",language:"tsx",code:`
import { drizzle } from 'drizzle-orm/postgres-js'
import postgres from 'postgres'
import { users } from './drizzle/schema'

const connectionString = process.env.DATABASE_URL

// Disable prefetch as it is not supported for "Transaction" pool mode
const client = postgres(connectionString, { prepare: false })
const db = drizzle(client);

const allUsers = await db.select().from(users);
        `}];return(0,t.jsx)(a.MultipleCodeBlock,{files:o})}])},48216,e=>{"use strict";var t=e.i(221628),a=e.i(486240);e.s(["default",0,({projectKeys:e})=>{let r=[{name:".env.local",language:"bash",code:`
EXPO_PUBLIC_SUPABASE_URL=${e.apiUrl??"your-project-url"}
EXPO_PUBLIC_SUPABASE_KEY=${e.publishableKey??"your-publishable-key"}
        `},{name:"utils/supabase.ts",language:"ts",code:`
import AsyncStorage from '@react-native-async-storage/async-storage'
import { createClient } from '@supabase/supabase-js'

export const supabase = createClient(
  process.env.EXPO_PUBLIC_SUPABASE_URL!,
  process.env.EXPO_PUBLIC_SUPABASE_KEY!,
  {
    auth: {
      storage: AsyncStorage,
      autoRefreshToken: true,
      persistSession: true,
      detectSessionInUrl: false,
    },
  })
        `},{name:"App.tsx",language:"tsx",code:`
import React, { useState, useEffect } from 'react';
import { View, Text, FlatList } from 'react-native';
import { supabase } from '../utils/supabase';

export default function App() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const getTodos = async () => {
      try {
        const { data: todos, error } = await supabase.from('todos').select();

        if (error) {
          console.error('Error fetching todos:', error.message);
          return;
        }

        if (todos && todos.length > 0) {
          setTodos(todos);
        }
      } catch (error) {
        console.error('Error fetching todos:', error.message);
      }
    };

    getTodos();
  }, []);

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Todo List</Text>
      <FlatList
        data={todos}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => <Text key={item.id}>{item.name}</Text>}
      />
    </View>
  );
};

`}];return(0,t.jsx)(a.MultipleCodeBlock,{files:r})}])},780795,e=>{"use strict";var t=e.i(221628),a=e.i(486240);e.s(["default",0,({projectKeys:e})=>{let r=[{name:".env",language:"bash",code:`
SUPABASE_URL=${e.apiUrl??"your-project-url"}
SUPABASE_KEY=${e.publishableKey??e.anonKey??"your-publishable-key"}
        `},{name:"app.py",language:"python",code:`
import os
from flask import Flask
from supabase import create_client, Client
from dotenv import load_dotenv

load_dotenv()

app = Flask(__name__)

supabase: Client = create_client(
    os.environ.get("SUPABASE_URL"),
    os.environ.get("SUPABASE_KEY")
)

@app.route('/')
def index():
    response = supabase.table('todos').select("*").execute()
    todos = response.data

    html = '<h1>Todos</h1><ul>'
    for todo in todos:
        html += f'<li>{todo["name"]}</li>'
    html += '</ul>'

    return html

if __name__ == '__main__':
    app.run(debug=True)
`}];return(0,t.jsx)(a.MultipleCodeBlock,{files:r})}])},84223,e=>{"use strict";var t=e.i(221628),a=e.i(486240);e.s(["default",0,({projectKeys:e})=>{let r=[{name:"lib/main.dart",language:"dart",code:`
import 'package:flutter/material.dart';
import 'package:supabase_flutter/supabase_flutter.dart';

Future<void> main() async {
  await Supabase.initialize(
    url: '${e.apiUrl??"your-project-url"}',
    publishableKey: '${e.publishableKey??"your-publishable-key"}',
  );
  runApp(MyApp());
}
        `},{name:"lib/main.dart (app)",language:"dart",code:`
class MyApp extends StatelessWidget {
  const MyApp({super.key});

  @override
  Widget build(BuildContext context) {
    return const MaterialApp(
      title: 'Todos',
      home: HomePage(),
    );
  }
}

class HomePage extends StatefulWidget {
  const HomePage({super.key});

  @override
  State<HomePage> createState() => _HomePageState();
}

class _HomePageState extends State<HomePage> {
  final _future = Supabase.instance.client
      .from('todos')
      .select();

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: FutureBuilder(
        future: _future,
        builder: (context, snapshot) {
          if (!snapshot.hasData) {
            return const Center(child: CircularProgressIndicator());
          }
          final todos = snapshot.data!;
          return ListView.builder(
            itemCount: todos.length,
            itemBuilder: ((context, index) {
              final todo = todos[index];
              return ListTile(
                title: Text(todo['name']),
              );
            }),
          );
        },
      ),
    );
  }
}
`}];return(0,t.jsx)(a.MultipleCodeBlock,{files:r})}])},190529,e=>{"use strict";var t=e.i(221628),a=e.i(486240);e.s(["default",0,({projectKeys:e})=>{let r=[{name:"environments/environment.ts",language:"ts",code:`
export const environment = {
  supabaseUrl: '${e.apiUrl??"your-project-url"}',
  supabaseKey: '${e.publishableKey??"your-publishable-key"}',
};
`},{name:"src/app/supabase.service.ts",language:"ts",code:`
import { Injectable } from '@angular/core';
import { createClient, SupabaseClient } from '@supabase/supabase-js';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class SupabaseService {
  private supabase: SupabaseClient;
  constructor() {
    this.supabase = createClient(
      environment.supabaseUrl,
      environment.supabaseKey
    );
  }

  getTodos() {
    return this.supabase.from('todos').select('*');
  }
}
`},{name:"src/app/app.component.ts",language:"ts",code:`
import { Component, OnInit } from '@angular/core';
import { SupabaseService } from './supabase.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit {
  todos: any[] = [];

  constructor(private supabaseService: SupabaseService) {}

  async ngOnInit() {
    await this.loadTodos();
  }

  async loadTodos() {
    const { data, error } = await this.supabaseService.getTodos();
    if (error) {
      console.error('Error fetching todos:', error);
    } else {
      this.todos = data;
    }
  }
}
`},{name:"src/app/app.component.html",language:"html",code:`
<ion-header>
<ion-toolbar>
  <ion-title>Todo List</ion-title>
</ion-toolbar>
</ion-header>

<ion-content>
<ion-list>
  <ion-item *ngFor="let todo of todos">
    <ion-label>{{ todo.name }}</ion-label>
  </ion-item>
</ion-list>
</ion-content>
`},{name:"src/app/app.module.ts",language:"ts",code:`
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { AppComponent } from './app.component';
import { SupabaseService } from './supabase.service';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([]),
    IonicModule.forRoot({ mode: 'ios' }),
  ],
  declarations: [AppComponent],
  providers: [SupabaseService],
  bootstrap: [AppComponent],
})
export class AppModule {}
`}];return(0,t.jsx)(a.MultipleCodeBlock,{files:r})}])},411609,e=>{"use strict";var t=e.i(221628),a=e.i(486240);e.s(["default",0,({projectKeys:e})=>{let r=[{name:".env",language:"bash",code:`
REACT_APP_SUPABASE_URL=${e.apiUrl??"your-project-url"}
REACT_APP_SUPABASE_KEY=${e.publishableKey??"your-publishable-key"}
        `},{name:"src/supabaseClient.tsx",language:"ts",code:`
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.REACT_APP_SUPABASE_URL
const supabaseKey = process.env.REACT_APP_SUPABASE_KEY

export const supabase = createClient(supabaseUrl, supabaseKey)
`},{name:"src/App.tsx",language:"ts",code:`
import React, { useEffect, useState } from 'react';
import { setupIonicReact, IonApp } from '@ionic/react';
import {
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar,
  IonList,
  IonItem,
} from '@ionic/react';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Theme variables */
import './theme/variables.css';

import { supabase } from './supabaseClient';

setupIonicReact();

export default function App() {
  const [todos, setTodos] = useState([]);
  useEffect(() => {
    getTodos();
  }, []);

  const getTodos = async () => {
    try {
      const { data, error } = await supabase.from('todos').select();

      if (error) {
        console.error('Error fetching todos:', error.message);
        return;
      }

      if (data) {
        setTodos(data);
      }
    } catch (error) {
      console.error('Error fetching todos:', error.message);
    }
  };

  return (
    <IonApp>
      <>
        <IonHeader>
          <IonToolbar>
            <IonTitle>Todos</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent>
          <IonList>
            {todos.map((todo) => (
              <IonItem key={todo.id}>{todo.name}</IonItem>
            ))}
          </IonList>
        </IonContent>
      </>
    </IonApp>
  );
}
`}];return(0,t.jsx)(a.MultipleCodeBlock,{files:r})}])},550910,e=>{"use strict";var t=e.i(221628),a=e.i(486240);e.s(["default",0,({projectKeys:e})=>{let r=[{name:".env.local",language:"bash",code:[`NEXT_PUBLIC_SUPABASE_URL=${e.apiUrl??"your-project-url"}`,e?.publishableKey?`NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY=${e.publishableKey}`:`NEXT_PUBLIC_SUPABASE_ANON_KEY=${e.anonKey??"your-anon-key"}`,""].join("\n")},{name:"page.tsx",language:"tsx",code:`
import { createClient } from '@/utils/supabase/server'
import { cookies } from 'next/headers'

export default async function Page() {
  const cookieStore = await cookies()
  const supabase = createClient(cookieStore)

  const { data: todos } = await supabase.from('todos').select()

  return (
    <ul>
      {todos?.map((todo) => (
        <li key={todo.id}>{todo.name}</li>
      ))}
    </ul>
  )
}
`},{name:"utils/supabase/server.ts",language:"ts",code:`
import { createServerClient } from "@supabase/ssr";
import { cookies } from "next/headers";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.${e?.publishableKey?"NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY":"NEXT_PUBLIC_SUPABASE_ANON_KEY"};

export const createClient = (cookieStore: Awaited<ReturnType<typeof cookies>>) => {
  return createServerClient(
    supabaseUrl!,
    supabaseKey!,
    {
      cookies: {
        getAll() {
          return cookieStore.getAll()
        },
        setAll(cookiesToSet) {
          try {
            cookiesToSet.forEach(({ name, value, options }) => cookieStore.set(name, value, options))
          } catch {
            // The \`setAll\` method was called from a Server Component.
            // This can be ignored if you have middleware refreshing
            // user sessions.
          }
        },
      },
    },
  );
};
`},{name:"utils/supabase/client.ts",language:"ts",code:`
import { createBrowserClient } from "@supabase/ssr";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.${e?.publishableKey?"NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY":"NEXT_PUBLIC_SUPABASE_ANON_KEY"};

export const createClient = () =>
  createBrowserClient(
    supabaseUrl!,
    supabaseKey!,
  );
`},{name:"utils/supabase/middleware.ts",language:"ts",code:`
import { createServerClient } from "@supabase/ssr";
import { type NextRequest, NextResponse } from "next/server";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.${e?.publishableKey?"NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY":"NEXT_PUBLIC_SUPABASE_ANON_KEY"};

export const createClient = (request: NextRequest) => {
  // Create an unmodified response
  let supabaseResponse = NextResponse.next({
    request: {
      headers: request.headers,
    },
  });

  const supabase = createServerClient(
    supabaseUrl!,
    supabaseKey!,
    {
      cookies: {
        getAll() {
          return request.cookies.getAll()
        },
        setAll(cookiesToSet) {
          cookiesToSet.forEach(({ name, value, options }) => request.cookies.set(name, value))
          supabaseResponse = NextResponse.next({
            request,
          })
          cookiesToSet.forEach(({ name, value, options }) =>
            supabaseResponse.cookies.set(name, value, options)
          )
        },
      },
    },
  );

  return supabaseResponse
};
`}];return(0,t.jsx)(a.MultipleCodeBlock,{files:r})}])},956403,e=>{"use strict";var t=e.i(221628),a=e.i(486240);e.s(["default",0,({projectKeys:e})=>{let r=[{name:".env.local",language:"bash",code:[`NEXT_PUBLIC_SUPABASE_URL=${e.apiUrl??"your-project-url"}`,e?.publishableKey?`NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY=${e.publishableKey}`:`NEXT_PUBLIC_SUPABASE_ANON_KEY=${e.anonKey??"your-anon-key"}`,""].join("\n")},{name:"utils/supabase.ts",language:"ts",code:`
import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseKey = process.env.${e?.publishableKey?"NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY":"NEXT_PUBLIC_SUPABASE_ANON_KEY"}!;

export const supabase = createClient(supabaseUrl, supabaseKey);
`},{name:"pages/index.tsx",language:"tsx",code:`
import { useState, useEffect } from 'react'
import { supabase } from '../utils/supabase'

export default function Page() {
  const [todos, setTodos] = useState([])

  useEffect(() => {
    async function getTodos() {
      const { data: todos } = await supabase.from('todos').select()

      if (todos) {
        setTodos(todos)
      }
    }

    getTodos()
  }, [])

  return (
    <ul>
      {todos.map((todo) => (
        <li key={todo.id}>{todo.name}</li>
      ))}
    </ul>
  )
}
`}];return(0,t.jsx)(a.MultipleCodeBlock,{files:r})}])},523047,e=>{"use strict";var t=e.i(221628),a=e.i(486240);e.s(["default",0,({projectKeys:e})=>{let r=[{name:".env.local",language:"bash",code:`SUPABASE_URL=${e.apiUrl??"your-project-url"}
SUPABASE_KEY=${e.publishableKey??e.anonKey??"your-publishable-key"}
`},{name:"nuxt.config.ts",language:"ts",code:`
export default defineNuxtConfig({
  runtimeConfig: {
    public: {
      supabaseUrl: process.env.SUPABASE_URL,
      supabaseKey: process.env.SUPABASE_KEY,
    },
  },
})
`},{name:"app.vue",language:"html",code:`
<script setup>
import { ref, onMounted } from 'vue'
import { createClient } from '@supabase/supabase-js'

const config = useRuntimeConfig()
const supabase = createClient(config.public.supabaseUrl, config.public.supabaseKey)

const todos = ref([])

async function getTodos() {
  const { data } = await supabase.from('todos').select()
  todos.value = data
}

onMounted(() => {
  getTodos()
})
</script>

<template>
  <ul>
    <li v-for="todo in todos" :key="todo.id">{{ todo.name }}</li>
  </ul>
</template>
`}];return(0,t.jsx)(a.MultipleCodeBlock,{files:r})}])},306141,e=>{"use strict";var t=e.i(221628),a=e.i(486240),r=e.i(604512),s=e.i(611062),n=e.i(635494);let o=e=>(0,r.appendConnectionStringParams)(e??"","pgbouncer=true");e.s(["default",0,({connectionStringPooler:e,deploymentMode:r})=>{let i=[{name:".env.local",language:"bash",code:function({connectionStringPooler:e,deploymentMode:t,isHighAvailability:a}){switch((0,s.resolveOrmConnectionScenario)({connectionStringPooler:e,deploymentMode:t,isHighAvailability:a})){case"cli":return`
# Connect to Postgres via the direct connection
DATABASE_URL="${e.direct}"

# Used for migrations
DIRECT_URL="${e.direct}"
`;case"self-hosted":return`
# Connect to Postgres via the self-hosted transaction-mode pooler
DATABASE_URL="${o(e.transactionShared)}"

# Connect to Postgres via the self-hosted session-mode pooler (used for migrations)
DIRECT_URL="${e.sessionShared}"
`;case"high-availability":return`
# Multigres does not support connection pooling — connect to Postgres directly
DATABASE_URL="${e.direct}"

# Used for migrations
DIRECT_URL="${e.direct}"
`;case"dedicated-pooler":return`
# Connect to Postgres via the dedicated transaction-mode pooler (IPv4-only)
DATABASE_URL="${o(e.transactionDedicated)}"

# Connect to Postgres directly (used for migrations)
DIRECT_URL="${e.sessionDedicated}"
        `;case"shared-pooler-with-dedicated-alternative":return`
# Connect to Postgres via the shared transaction-mode pooler (IPv4-only)
DATABASE_URL="${o(e.transactionShared)}"

# Connect to Postgres via the shared session-mode pooler (used for migrations)
DIRECT_URL="${e.sessionShared}"

# For paid projects, if your network supports IPv6, or you purchased the IPv4 add-on, use the dedicated transaction-mode pooler with a direct connection to Postgres for migrations as an alternative
# DATABASE_URL="${o(e.transactionDedicated)}"
# DIRECT_URL="${e.sessionDedicated}"
 `;case"shared-pooler":return`
# Connect to Postgres via the shared transaction-mode pooler (IPv4-only)
DATABASE_URL="${o(e.transactionShared)}"

# Connect to Postgres via the shared session-mode pooler (used for migrations)
DIRECT_URL="${e.sessionShared}"
`}}({connectionStringPooler:e,deploymentMode:r,isHighAvailability:(0,n.useIsHighAvailability)()})},{name:"prisma/schema.prisma",language:"bash",code:`
generator client {
  provider = "prisma-client-js"
}

datasource db {
  provider  = "postgresql"
  url       = env("DATABASE_URL")
  directUrl = env("DIRECT_URL")
}
        `}];return(0,t.jsx)(a.MultipleCodeBlock,{files:i})}])},84181,e=>{"use strict";var t=e.i(221628),a=e.i(486240);e.s(["default",0,({projectKeys:e})=>{let r=[{name:".env.local",language:"bash",code:[`REACT_APP_SUPABASE_URL=${e.apiUrl??"your-project-url"}`,e?.publishableKey?`REACT_APP_SUPABASE_PUBLISHABLE_KEY=${e.publishableKey}`:`REACT_APP_SUPABASE_ANON_KEY=${e.anonKey??"your-anon-key"}`,""].join("\n")},{name:"utils/supabase.ts",language:"ts",code:`
import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.REACT_APP_SUPABASE_URL;
const supabaseKey = process.env.${e.publishableKey?"REACT_APP_SUPABASE_PUBLISHABLE_KEY":"REACT_APP_SUPABASE_ANON_KEY"};

export const supabase = createClient(supabaseUrl, supabaseKey);
        `},{name:"App.tsx",language:"tsx",code:`
import { useState, useEffect } from 'react'
import { supabase } from './utils/supabase'

export default function App() {
  const [todos, setTodos] = useState([])

  useEffect(() => {
    async function getTodos() {
      const { data: todos } = await supabase.from('todos').select()

      if (todos) {
        setTodos(todos)
      }
    }

    getTodos()
  }, [])

  return (
    <ul>
      {todos.map((todo) => (
        <li key={todo.id}>{todo.name}</li>
      ))}
    </ul>
  )
}
`}];return(0,t.jsx)(a.MultipleCodeBlock,{files:r})}])},585967,e=>{"use strict";var t=e.i(221628),a=e.i(486240);e.s(["default",0,({projectKeys:e})=>{let r=[{name:".env",language:"bash",code:[`VITE_SUPABASE_URL=${e.apiUrl??"your-project-url"}`,e?.publishableKey?`VITE_SUPABASE_PUBLISHABLE_KEY=${e.publishableKey}`:`VITE_SUPABASE_ANON_KEY=${e.anonKey??"your-anon-key"}`,""].join("\n")},{name:"utils/supabase.ts",language:"ts",code:`
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseKey = import.meta.env.${e.publishableKey?"VITE_SUPABASE_PUBLISHABLE_KEY":"VITE_SUPABASE_ANON_KEY"};

export const supabase = createClient(supabaseUrl, supabaseKey);
`},{name:"App.tsx",language:"tsx",code:`
import { useState, useEffect } from 'react'
import { supabase } from './utils/supabase'

export default function App() {
  const [todos, setTodos] = useState([])

  useEffect(() => {
    async function getTodos() {
      const { data: todos } = await supabase.from('todos').select()

      if (todos) {
        setTodos(todos)
      }
    }

    getTodos()
  }, [])

  return (
    <ul>
      {todos.map((todo) => (
        <li key={todo.id}>{todo.name}</li>
      ))}
    </ul>
  )
}
`}];return(0,t.jsx)(a.MultipleCodeBlock,{files:r})}])},659864,e=>{"use strict";var t=e.i(221628),a=e.i(486240);e.s(["default",0,({projectKeys:e})=>{let r=[{name:".env.local",language:"bash",code:`SUPABASE_URL=${e.apiUrl??"your-project-url"}
SUPABASE_KEY=${e?.publishableKey??e?.anonKey??"your-publishable-key"}
`},{name:"src/utility/supabaseClient.ts",language:"ts",code:`
import { createClient } from "@refinedev/supabase";

const SUPABASE_URL = process.env.SUPABASE_URL;
const SUPABASE_KEY = process.env.SUPABASE_KEY;

export const supabaseClient = createClient(SUPABASE_URL, SUPABASE_KEY, {
  db: {
    schema: "public",
  },
  auth: {
    persistSession: true,
  },
});
        `},{name:"src/App.tsx",language:"tsx",code:`
import { Refine } from "@refinedev/core";
import { RefineKbar, RefineKbarProvider } from "@refinedev/kbar";
import routerProvider, {
  DocumentTitleHandler,
  NavigateToResource,
  UnsavedChangesNotifier,
} from "@refinedev/react-router";
import { dataProvider, liveProvider } from "@refinedev/supabase";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import "./App.css";
import authProvider from "./authProvider";
import { supabaseClient } from "./utility";
import { CountriesCreate, CountriesEdit, CountriesList, CountriesShow } from "./pages/countries";

function App() {
  return (
    <BrowserRouter>
      <RefineKbarProvider>
        <Refine
          dataProvider={dataProvider(supabaseClient)}
          liveProvider={liveProvider(supabaseClient)}
          authProvider={authProvider}
          routerProvider={routerProvider}
          options={{
            syncWithLocation: true,
            warnWhenUnsavedChanges: true,
          }}
          resources={[{
            name: "countries",
            list: "/countries",
            create: "/countries/create",
            edit: "/countries/edit/:id",
            show: "/countries/show/:id"
          }]}>
          <Routes>
            <Route index
              element={<NavigateToResource resource="countries" />}
            />
            <Route path="/countries">
              <Route index element={<CountriesList />} />
              <Route path="create" element={<CountriesCreate />} />
              <Route path="edit/:id" element={<CountriesEdit />} />
              <Route path="show/:id" element={<CountriesShow />} />
            </Route>
          </Routes>
          <RefineKbar />
          <UnsavedChangesNotifier />
          <DocumentTitleHandler />
        </Refine>
      </RefineKbarProvider>
    </BrowserRouter>
  );
}

export default App;
`}];return(0,t.jsx)(a.MultipleCodeBlock,{files:r})}])},532683,e=>{"use strict";var t=e.i(221628),a=e.i(486240);e.s(["default",0,({projectKeys:e})=>{let r=[{name:".env",language:"bash",code:[`VITE_SUPABASE_URL=${e.apiUrl??"your-project-url"}`,e?.publishableKey?`VITE_SUPABASE_PUBLISHABLE_KEY=${e.publishableKey}`:`VITE_SUPABASE_ANON_KEY=${e.anonKey??"your-anon-key"}`,""].join("\n")},{name:"app/utils/supabase.server.ts",language:"ts",code:`
import {
  createServerClient,
  parseCookieHeader,
  serializeCookieHeader,
} from "@supabase/ssr";

export function createClient(request: Request) {
  const headers = new Headers();

  const supabase = createServerClient(
    process.env.VITE_SUPABASE_URL!,
    process.env.VITE_${e.publishableKey?"SUPABASE_PUBLISHABLE_KEY":"SUPABASE_ANON_KEY"}!,
    {
      cookies: {
        getAll() {
          return parseCookieHeader(request.headers.get("Cookie") ?? "") as {
            name: string;
            value: string;
          }[];
        },
        setAll(cookiesToSet) {
          cookiesToSet.forEach(({ name, value, options }) =>
            headers.append(
              "Set-Cookie",
              serializeCookieHeader(name, value, options)
            )
          );
        },
      },
    }
  );

  return { supabase, headers };
}
`},{name:"app/routes/_index.tsx",language:"tsx",code:`
import type { Route } from "./+types/home";
import { createClient } from "~/utils/supabase.server";

export async function loader({ request }: Route.LoaderArgs) {
  const { supabase } = createClient(request);
  const { data: todos } = await supabase.from("todos").select();

  return { todos };
}

export default function Home({ loaderData }: Route.ComponentProps) {
  return (
    <>
      <ul>
        {loaderData.todos?.map((todo) => (
          <li key={todo.id}>{todo.name}</li>
        ))}
      </ul>
    </>
  );
}

`}];return(0,t.jsx)(a.MultipleCodeBlock,{files:r})}])},946844,e=>{"use strict";var t=e.i(221628);e.i(128328);var a=e.i(158639),r=e.i(591201),s=e.i(327507),n=e.i(915318),o=e.i(980630),i=e.i(837710),l=e.i(843778),c=e.i(613580),d=e.i(416340),u=e.i(930528),p=e.i(108892),m=e.i(480683),f=e.i(442678),g=e.i(323796);let h="SUPABASE_URL",b="SUPABASE_PUBLISHABLE_KEY",v="SUPABASE_SECRET_KEY",y="SUPABASE_JWKS_URL",S="/auth/v1/.well-known/jwks.json";var x=e.i(223600);function _({secret:e}){let a=!e.exists||!e.canReveal,d=async()=>{try{return await e.getValue()}catch{return o.toast.error("Failed to copy secret API key"),""}},u=e.exists?e.canReveal?e.isRevealed?"Hide secret key":"Reveal secret key":"You need additional permissions to reveal secret API keys":"No secret key found for this project";return(0,t.jsxs)(r.EnvRow,{name:v,value:e.displayValue,children:[(0,t.jsxs)(c.Tooltip,{children:[(0,t.jsx)(c.TooltipTrigger,{asChild:!0,children:(0,t.jsx)(i.Button,{size:"tiny",className:(0,l.cn)("px-1.5",a&&"opacity-50"),"aria-label":e.isRevealed?"Hide secret key":"Reveal secret key",loading:e.isRevealed&&e.isRevealing,icon:e.isRevealed?(0,t.jsx)(n.EyeOffIcon,{strokeWidth:2}):(0,t.jsx)(s.EyeIcon,{strokeWidth:2}),onClick:()=>{e.toggle().catch(()=>o.toast.error("Failed to reveal secret API key"))},disabled:a})}),(0,t.jsx)(c.TooltipContent,{side:"bottom",children:u})]}),(0,t.jsx)(x.default,{variant:"default",size:"tiny",iconOnly:!0,"aria-label":"Copy secret key",asyncText:d,disabled:a})]})}var E=e.i(937942);e.s(["default",0,function(){let{ref:e}=(0,a.useParams)(),{apiUrl:s,publishableKey:n,jwksUrl:o,secret:i,buildEnv:l,canReadAPIKeys:c}=function(){let{ref:e}=(0,a.useParams)(),{can:t,isLoading:r}=(0,f.useAsyncCheckPermissionsV2)(f.FGA_PERMISSIONS.PROJECT.API_GATEWAY_KEYS_READ),[s,n]=(0,d.useState)(!1),o=(0,g.useLatest)(s),{data:i,isPending:l}=(0,m.useProjectApiUrl)({projectRef:e}),c=i||"your-project-url",x=i?new URL(S,i).href:`your-project-url${S}`,{data:_,isLoading:E}=(0,p.useAPIKeys)({projectRef:e},{enabled:t}),A=_?.publishableKey?.api_key??_?.anonKey?.api_key??"",C=_?.secretKey??_?.serviceKey,T=C?.api_key?`${C.api_key.slice(0,15)}••••••••••••••••••••`:"your-secret-key",{data:R,isLoading:w,reveal:I,clear:j}=(0,u.useRevealedSecret)({projectRef:e,id:C?.id??void 0}),k=(0,d.useRef)(null),P=(0,d.useCallback)(()=>(k.current||(k.current=I().finally(()=>{k.current=null})),k.current),[I]),N=(0,d.useCallback)(()=>{k.current=null,j()},[j]),L=(0,d.useCallback)(async()=>{if(C&&t)if(s)n(!1),N();else{n(!0);try{await P()}catch(e){throw n(!1),Error("Failed to reveal secret API key",{cause:e})}}},[C,t,s,N,P]),U=(0,d.useCallback)(async()=>{if(!C||!t)return"your-secret-key";if(R)return R;let e=await P();return o.current||N(),e??"your-secret-key"},[C,t,R,P,N]),D=(0,d.useCallback)(async()=>{let e=await U();return`${h}=${c}
${b}=${A||"your-publishable-key"}
${v}=${e}
${y}=${x}`},[c,A,x,U]);return(0,d.useEffect)(()=>{if(!s||!R)return;let e=setTimeout(()=>{n(!1),N()},1e4);return()=>clearTimeout(e)},[s,R,N]),{isLoading:l||E||r,canReadAPIKeys:t,apiUrl:c,publishableKey:A||"your-publishable-key",jwksUrl:x,secret:{exists:!!C,canReveal:t,isRevealed:s,isRevealing:w,maskedValue:T,displayValue:s&&R?R:T,toggle:L,getValue:U},buildEnv:D}}();return(0,t.jsxs)("div",{className:"flex flex-col gap-y-2",children:[(0,t.jsxs)("div",{className:"overflow-hidden rounded-lg border bg-surface-75",children:[(0,t.jsxs)("div",{className:"flex items-center justify-between border-b bg-surface-100 py-2 pl-4 pr-2",children:[(0,t.jsx)("span",{className:"font-mono text-xs text-foreground-light",children:".env"}),(0,t.jsx)(x.default,{variant:"default",size:"tiny",copyLabel:"Copy all",asyncText:l,"aria-label":"Copy all variables",disabled:!c})]}),(0,t.jsxs)("div",{className:"divide-y",children:[(0,t.jsx)(r.EnvRow,{name:h,value:s,children:(0,t.jsx)(x.default,{variant:"default",size:"tiny",iconOnly:!0,"aria-label":"Copy project URL",text:s})}),(0,t.jsx)(r.EnvRow,{name:b,value:n,children:(0,t.jsx)(x.default,{variant:"default",size:"tiny",iconOnly:!0,"aria-label":"Copy publishable key",text:n,disabled:!c})}),(0,t.jsx)(_,{secret:i}),(0,t.jsx)(r.EnvRow,{name:y,value:o,children:(0,t.jsx)(x.default,{variant:"default",size:"tiny",iconOnly:!0,"aria-label":"Copy JWKS URL",text:o})})]})]}),(0,t.jsxs)("p",{className:"text-sm text-foreground-lighter",children:["On Edge Functions these are injected automatically. For other runtimes, copy the values above",e?(0,t.jsxs)(t.Fragment,{children:[". Manage keys in"," ",(0,t.jsx)(E.InlineLink,{href:`/project/${e}/settings/api-keys`,children:"API Keys settings"}),"."]}):"."]})]})}],946844)},37032,e=>{"use strict";var t=e.i(221628),a=e.i(412442),r=e.i(223600);let s=[{name:"npm",command:"npm install @supabase/server"},{name:"pnpm",command:"pnpm add @supabase/server"},{name:"bun",command:"bun add @supabase/server"},{name:"Deno",command:'import { withSupabase } from "npm:@supabase/server"'}];e.s(["default",0,function(){return(0,t.jsxs)("div",{className:"flex flex-col gap-y-2",children:[(0,t.jsxs)(a.Tabs,{defaultValue:"npm",className:"overflow-hidden rounded-lg border",children:[(0,t.jsx)(a.TabsList,{className:"gap-5 border-0 border-b bg-surface-75 px-4",children:s.map(e=>(0,t.jsx)(a.TabsTrigger,{value:e.name,className:"px-0 py-2.5 text-xs data-[state=active]:bg-transparent",children:e.name},e.name))}),s.map(e=>(0,t.jsx)(a.TabsContent,{value:e.name,className:"m-0 data-[state=inactive]:hidden",children:(0,t.jsxs)("div",{className:"flex items-center gap-x-2 bg-surface-75 py-3 pl-4 pr-2",children:[(0,t.jsx)("code",{"data-code-style":"plain",className:"flex-1 overflow-x-auto whitespace-nowrap font-mono text-sm text-foreground",children:e.command}),(0,t.jsx)(r.default,{variant:"default",size:"tiny",iconOnly:!0,text:e.command,"aria-label":`Copy ${e.name} command`})]})},e.name))]}),(0,t.jsx)("p",{className:"text-sm text-foreground-lighter",children:"On Edge Functions you can import it directly, no install needed."})]})}])},221183,e=>{"use strict";var t=e.i(221628),a=e.i(486240);e.s(["default",0,({projectKeys:e})=>{let r=[{name:".env.local",language:"bash",code:[`VITE_SUPABASE_URL=${e.apiUrl??"your-project-url"}`,e?.publishableKey?`VITE_SUPABASE_PUBLISHABLE_KEY=${e.publishableKey}`:`VITE_SUPABASE_ANON_KEY=${e.anonKey??"your-anon-key"}`,""].join("\n")},{name:"utils/supabase.ts",language:"ts",code:`
import { createClient } from "@supabase/supabase-js";

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseKey = import.meta.env.${e.publishableKey?"VITE_SUPABASE_PUBLISHABLE_KEY":"VITE_SUPABASE_ANON_KEY"};

export const supabase = createClient(supabaseUrl, supabaseKey);
`},{name:"src/App.tsx",language:"tsx",code:`
import { supabase } from '../utils/supabase'
import { createResource, For } from "solid-js";

async function getTodos() {
  const { data: todos } = await supabase.from("todos").select();
  return todos;
}

function App() {
  const [todos] = createResource(getTodos);

  return (
    <ul>
      <For each={todos()}>{(todo) => <li>{todo.name}</li>}</For>
    </ul>
  );
}

export default App;
`}];return(0,t.jsx)(a.MultipleCodeBlock,{files:r})}])},79472,e=>{"use strict";var t=e.i(221628),a=e.i(490579),r=e.i(826831),s=e.i(416340),n=e.i(843778),o=e.i(331162),i=e.i(108151),l=e.i(785065),c=e.i(157179),d=e.i(604512),u=e.i(818079),p=e.i(654205),m=e.i(168848),f=e.i(937942),g=e.i(280590),h=e.i(635494),b=e.i(10429),v=e.i(967052);let y={direct:"direct",transaction:"transaction_pooler",session:"session_pooler"};e.s(["default",0,function({state:e,deploymentMode:S}){let x=(0,v.useTrack)(),{hasAccess:_}=(0,g.useCheckEntitlements)("dedicated_pooler"),E=(0,h.useIsHighAvailability)(),[A,C]=(0,s.useState)(""),T=e.connectionSource,R=E&&T===l.CONNECTION_SOURCE_LOAD_BALANCER,w=e.connectionType??"uri",I=e.connectionMethod??"direct",j=!!e.useSharedPooler,k=(0,p.useConnectionStringDatabases)(S)[T],P=(0,s.useMemo)(()=>(0,d.resolveConnectionString)({connectionMethod:I,useSharedPooler:j,connectionStringPooler:k}),[I,j,k]),N=(0,s.useMemo)(()=>(0,d.parseConnectionParams)(P),[P]),L=(0,s.useMemo)(()=>(0,d.buildSafeConnectionString)(P,N),[P,N]),U=(0,s.useMemo)(()=>{switch(w){case"psql":return(0,d.buildPsqlCommand)(N);case"jdbc":return(0,d.buildJdbcString)(N);case"php":return`DATABASE_URL=${L}`;default:return L}},[w,N,L]),D=(0,s.useMemo)(()=>A&&"psql"!==w?(0,d.buildConnectionStringWithPassword)(U,A):U,[w,U,A]),O=()=>{let e=l.DATABASE_CONNECTION_TYPES.find(e=>e.id===w);x("connection_string_copied",{connectionType:e?.label??w,lang:e?.lang??"bash",connectionMethod:y[I],connectionTab:"Connection String",source:"studio"})};if(!P)return(0,t.jsx)("div",{className:"p-4",children:(0,t.jsx)(i.GenericSkeletonLoader,{})});let B="transaction"===I?j||!_?"Shared pooler":"Dedicated pooler":"session"===I?"Shared pooler":null,$=D.includes(d.PASSWORD_PLACEHOLDER),M=S.isSelfHosted&&"direct"===I,F=S.isPlatform&&!!B&&!E,q=R||F,K=S.isPlatform&&$&&!A,z=q||K;return(0,t.jsxs)("div",{className:"flex flex-col gap-3",children:[(0,t.jsxs)("div",{className:"overflow-hidden rounded-lg border bg-surface-75",children:[z&&(0,t.jsxs)("div",{className:"flex items-center justify-between gap-2 border-b bg-surface-100 py-2 pl-4 pr-2",children:[q?(0,t.jsx)("span",{className:"text-xs text-foreground-light",children:R?"Read-only":B}):(0,t.jsx)("span",{}),K&&(0,t.jsx)(m.ResetDbPasswordDialog,{triggerLabel:"Reset database password",triggerIcon:(0,t.jsx)(r.KeyRoundIcon,{}),onPasswordReset:C})]}),(0,t.jsx)("div",{"data-connect-copy-value":U,children:(0,t.jsx)(o.CodeBlock,{className:"rounded-none border-0 [&_code]:text-foreground",wrapperClassName:"lg:col-span-2",value:D,hideLineNumbers:!0,language:"bash",onCopyCallback:O,children:D})}),S.isPlatform&&A&&(0,t.jsxs)("div",{className:"flex items-center gap-2 border-t px-4 py-3 text-sm text-foreground-light",children:[(0,t.jsx)(a.CheckIcon,{size:16,className:"text-primary shrink-0"}),(0,t.jsx)("span",{children:"New password shown until refresh."})]})]}),$&&(0,t.jsx)(u.PasswordEncodingNote,{}),(0,t.jsx)("p",{role:"status",className:(0,n.cn)("text-sm text-foreground-lighter",!R&&"sr-only"),children:R&&"Replica connections are read-only. Connect to the primary database for writes."}),M&&(0,t.jsxs)("p",{className:"text-sm text-foreground-lighter",children:["Manually"," ",(0,t.jsx)(f.InlineLink,{href:`${b.DOCS_URL}/guides/self-hosting/accessing-postgres#expose-postgres-for-direct-connections`,children:"configurable"})," ","for self-hosted Supabase."]}),(0,t.jsx)(c.ConnectionParameters,{parameters:(0,d.buildConnectionParameters)(N),onCopy:O})]})}])},980791,e=>{"use strict";var t=e.i(221628),a=e.i(416340),r=e.i(843778),s=e.i(486240),n=e.i(108151),o=e.i(785065),i=e.i(157179),l=e.i(604512),c=e.i(818079),d=e.i(654205),u=e.i(635494);e.s(["default",0,function({state:e,deploymentMode:p}){let m=(0,u.useIsHighAvailability)(),f=e.connectionSource,g=m&&f===o.CONNECTION_SOURCE_LOAD_BALANCER,h=e.connectionType??"uri",b=e.connectionMethod??"direct",v=!!e.useSharedPooler,y=(0,d.useConnectionStringDatabases)(p)[f],S=(0,a.useMemo)(()=>(0,l.resolveConnectionString)({connectionMethod:b,useSharedPooler:v,connectionStringPooler:y}),[b,v,y]),x=(0,a.useMemo)(()=>(0,l.parseConnectionParams)(S),[S]),_=(0,a.useMemo)(()=>(0,l.buildSafeConnectionString)(S,x),[S,x]),E=(0,a.useMemo)(()=>{let e={name:".env",language:"bash",code:`DATABASE_URL=${_}`};switch(h){case"nodejs":return{files:[{name:"db.js",language:"js",code:`import postgres from 'postgres'

const connectionString = process.env.DATABASE_URL
const sql = postgres(connectionString)

export default sql`},e],connectionStringFile:e.name,passwordInUrl:!0};case"golang":return{files:[{name:"main.go",language:"go",code:`package main

import (
	"context"
	"log"
	"os"
	"github.com/jackc/pgx/v5"
)

func main() {
	conn, err := pgx.Connect(context.Background(), os.Getenv("DATABASE_URL"))
	if err != nil {
		log.Fatalf("Failed to connect to the database: %v", err)
	}
	defer conn.Close(context.Background())

	// Example query to test connection
	var version string
	if err := conn.QueryRow(context.Background(), "SELECT version()").Scan(&version); err != nil {
		log.Fatalf("Query failed: %v", err)
	}

	log.Println("Connected to:", version)
}`},e],connectionStringFile:e.name,passwordInUrl:!0};case"dotnet":return{files:[{name:"appsettings.json",language:"json",code:`{
  "ConnectionStrings": {
    "DefaultConnection": "${(0,l.buildDotnetConnectionString)(x)}"
  }
}`}],connectionStringFile:"appsettings.json"};case"python":return{files:[{name:"main.py",language:"python",code:`import psycopg2
from dotenv import load_dotenv
import os

# Load environment variables from .env
load_dotenv()

# Fetch variables
DATABASE_URL = os.getenv("DATABASE_URL")

# Connect to the database
connection = psycopg2.connect(DATABASE_URL)`},e],connectionStringFile:e.name,passwordInUrl:!0};case"sqlalchemy":return{files:[{name:"main.py",language:"python",code:`from sqlalchemy import create_engine
# from sqlalchemy.pool import NullPool
from dotenv import load_dotenv
import os

# Load environment variables from .env
load_dotenv()

# Fetch variables
USER = os.getenv("user")
PASSWORD = os.getenv("password")
HOST = os.getenv("host")
PORT = os.getenv("port")
DBNAME = os.getenv("dbname")

# Construct the SQLAlchemy connection string
DATABASE_URL = f"postgresql+psycopg2://{USER}:{PASSWORD}@{HOST}:{PORT}/{DBNAME}${(0,l.withRequiredSslmode)(x.search)}"

# Create the SQLAlchemy engine
engine = create_engine(DATABASE_URL)
# If using Transaction Pooler or Session Pooler, we want to ensure we disable SQLAlchemy client side pooling -
# https://docs.sqlalchemy.org/en/20/core/pooling.html#switching-pool-implementations
# engine = create_engine(DATABASE_URL, poolclass=NullPool)

# Test the connection
try:
    with engine.connect() as connection:
        print("Connection successful!")
except Exception as e:
    print(f"Failed to connect: {e}")`},{name:".env",language:"bash",code:`user=${x.user}
password=${l.PASSWORD_PLACEHOLDER}
host=${x.host}
port=${x.port}
dbname=${x.database}`}],connectionStringFile:".env",passwordInUrl:!0};default:return null}},[h,_,x]),A=E?.files[0]?.name??"",[C,T]=(0,a.useState)(A);if((0,a.useEffect)(()=>{T(A)},[h,A]),!S)return(0,t.jsx)("div",{className:"p-4",children:(0,t.jsx)(n.GenericSkeletonLoader,{})});if(!E?.files.length)return null;let R=(0,t.jsx)(s.MultipleCodeBlock,{files:E.files,value:C,onValueChange:T,className:g?"rounded-none border-0":void 0});return(0,t.jsxs)("div",{className:"flex flex-col gap-3",children:[g?(0,t.jsxs)("div",{className:"overflow-hidden rounded-lg border",children:[(0,t.jsx)("div",{className:"flex items-center border-b bg-surface-100 py-2 pl-4 pr-2",children:(0,t.jsx)("span",{className:"text-xs text-foreground-light",children:"Read-only"})}),R]}):R,E.passwordInUrl&&(0,t.jsx)(c.PasswordEncodingNote,{}),(0,t.jsx)("p",{role:"status",className:(0,r.cn)("text-sm text-foreground-lighter",!g&&"sr-only"),children:g&&"Replica connections are read-only. Connect to the primary database for writes."}),(0,t.jsx)(i.ConnectionParameters,{parameters:(0,l.buildConnectionParameters)(x)})]})}])},620893,e=>{"use strict";var t=e.i(221628),a=e.i(331162);let r={nodejs:{installCommands:["npm install postgres"],files:[{name:"db.js",content:`import postgres from 'postgres'

const connectionString = process.env.DATABASE_URL
const sql = postgres(connectionString)

export default sql`}]},golang:{installCommands:["go get github.com/jackc/pgx/v5"],files:[{name:"main.go",content:`package main

import (
	"context"
	"log"
	"os"
	"github.com/jackc/pgx/v5"
)

func main() {
	conn, err := pgx.Connect(context.Background(), os.Getenv("DATABASE_URL"))
	if err != nil {
		log.Fatalf("Failed to connect to the database: %v", err)
	}
	defer conn.Close(context.Background())

	// Example query to test connection
	var version string
	if err := conn.QueryRow(context.Background(), "SELECT version()").Scan(&version); err != nil {
		log.Fatalf("Query failed: %v", err)
	}

	log.Println("Connected to:", version)
}`}]},dotnet:{installCommands:["dotnet add package Npgsql --version 9.0.5","dotnet add package Microsoft.Extensions.Configuration.Json --version YOUR_DOTNET_VERSION"]},python:{installCommands:["pip install python-dotenv psycopg2"],files:[{name:"main.py",content:`import psycopg2
from dotenv import load_dotenv
import os

# Load environment variables from .env
load_dotenv()

# Fetch variables
USER = os.getenv("user")
PASSWORD = os.getenv("password")
HOST = os.getenv("host")
PORT = os.getenv("port")
DBNAME = os.getenv("dbname")

# Connect to the database
try:
    connection = psycopg2.connect(
        user=USER,
        password=PASSWORD,
        host=HOST,
        port=PORT,
        dbname=DBNAME
    )
    print("Connection successful!")
    
    # Create a cursor to execute SQL queries
    cursor = connection.cursor()
    
    # Example query
    cursor.execute("SELECT NOW();")
    result = cursor.fetchone()
    print("Current Time:", result)

    # Close the cursor and connection
    cursor.close()
    connection.close()
    print("Connection closed.")

except Exception as e:
    print(f"Failed to connect: {e}")`}]},sqlalchemy:{installCommands:["pip install python-dotenv sqlalchemy psycopg2"],files:[{name:"main.py",content:`from sqlalchemy import create_engine
# from sqlalchemy.pool import NullPool
from dotenv import load_dotenv
import os

# Load environment variables from .env
load_dotenv()

# Fetch variables
USER = os.getenv("user")
PASSWORD = os.getenv("password")
HOST = os.getenv("host")
PORT = os.getenv("port")
DBNAME = os.getenv("dbname")

# Construct the SQLAlchemy connection string
DATABASE_URL = f"postgresql+psycopg2://{USER}:{PASSWORD}@{HOST}:{PORT}/{DBNAME}?sslmode=require"

# Create the SQLAlchemy engine
engine = create_engine(DATABASE_URL)
# If using Transaction Pooler or Session Pooler, we want to ensure we disable SQLAlchemy client side pooling -
# https://docs.sqlalchemy.org/en/20/core/pooling.html#switching-pool-implementations
# engine = create_engine(DATABASE_URL, poolclass=NullPool)

# Test the connection
try:
    with engine.connect() as connection:
        print("Connection successful!")
except Exception as e:
    print(f"Failed to connect: {e}")`}]}};e.s(["default",0,function({state:e}){let s=r[e.connectionType??"uri"],n=s?.installCommands??[];return 0===n.length?null:(0,t.jsx)("div",{className:"flex flex-col gap-2",children:n.map(e=>(0,t.jsx)(a.CodeBlock,{className:"[&_code]:text-foreground",wrapperClassName:"lg:col-span-2",value:e,hideLineNumbers:!0,language:"bash",children:e},`example-install-command-${e}`))})}],620893)},194742,e=>{"use strict";var t=e.i(221628),a=e.i(416340),r=e.i(331162),s=e.i(265770),n=e.i(889230);e.s(["default",0,function({state:e}){let o=(0,a.useMemo)(()=>(function(e){let t=(0,n.resolveFrameworkLibraryKey)(e);if(!t||!s.INSTALL_COMMANDS[t])return null;let a=s.INSTALL_COMMANDS[t],{framework:r,frameworkVariant:o}=e;if(r){let e=s.EXTRA_PACKAGES[t],n=o&&e?.[`${r}/${o}`]||e?.[String(r)];n?.length&&(a+=" "+n.join(" "))}return a})(e),[e]);return o?(0,t.jsx)(r.CodeBlock,{className:"[&_code]:text-foreground",wrapperClassName:"lg:col-span-2",value:o,hideLineNumbers:!0,language:"bash",children:o}):null}])},85809,e=>{"use strict";var t=e.i(221628),a=e.i(331162),r=e.i(958203);e.s(["default",0,function({state:e,projectKeys:s}){let n=(0,r.useMcpUrl)(e,s),o=`claude mcp add --scope project --transport http supabase "${n}"`;return(0,t.jsx)(a.CodeBlock,{className:"[&_code]:text-foreground",value:o,hideLineNumbers:!0,language:"bash"})}])},846526,e=>{"use strict";var t=e.i(221628),a=e.i(331162);e.s(["default",0,function(e){return(0,t.jsxs)("div",{className:"space-y-2",children:[(0,t.jsx)(a.CodeBlock,{className:"[&_code]:text-foreground",value:"claude /mcp",hideLineNumbers:!0,language:"bash"}),(0,t.jsxs)("p",{className:"text-sm text-foreground-lighter",children:["Select the ",(0,t.jsx)("code",{children:"supabase"})," server, then ",(0,t.jsx)("code",{children:"Authenticate"})," to begin the flow."]})]})}])},399358,e=>{"use strict";var t=e.i(221628),a=e.i(331162),r=e.i(958203);e.s(["default",0,function({state:e,projectKeys:s}){let n=(0,r.useMcpUrl)(e,s),o=`codex mcp add supabase --url ${n}`;return(0,t.jsx)(a.CodeBlock,{className:"[&_code]:text-foreground",value:o,hideLineNumbers:!0,language:"bash"})}])},270671,e=>{"use strict";var t=e.i(221628),a=e.i(331162);e.s(["default",0,function(e){return(0,t.jsx)(a.CodeBlock,{className:"[&_code]:text-foreground",value:"codex mcp login supabase",hideLineNumbers:!0,language:"bash"})}])},191809,e=>{"use strict";var t=e.i(221628),a=e.i(331162);e.s(["default",0,function(e){return(0,t.jsxs)("div",{className:"space-y-2",children:[(0,t.jsx)(a.CodeBlock,{className:"[&_code]:text-foreground",value:"/mcp",hideLineNumbers:!0,language:"bash"}),(0,t.jsx)("p",{className:"text-sm text-foreground-lighter",children:"Run this inside Codex to verify authentication."})]})}])},463955,e=>{"use strict";var t=e.i(221628),a=e.i(331162);let r={prisma:["npm install prisma --save-dev","npx prisma init"],drizzle:["npm install drizzle-orm","npm install drizzle-kit --save-dev"]};e.s(["default",0,function({state:e}){let s=r[String(e.orm??"")];return s?.length?(0,t.jsx)("div",{className:"flex flex-col gap-2",children:s.map((e,r)=>(0,t.jsx)(a.CodeBlock,{className:"[&_code]:text-foreground",wrapperClassName:"lg:col-span-2",value:e,hideLineNumbers:!0,language:"bash",children:e},r))}):null}])},147575,e=>{"use strict";var t=e.i(221628),a=e.i(416340),r=e.i(331162),s=e.i(937942);e.s(["default",0,function({state:e}){let n=(0,a.useMemo)(()=>"nextjs"===e.framework?"npx shadcn@latest add @supabase/supabase-client-nextjs":"react"===e.framework?"npx shadcn@latest add @supabase/supabase-client-react-router":null,[e]);return n?(0,t.jsxs)("div",{className:"flex flex-col gap-2",children:[(0,t.jsx)(r.CodeBlock,{className:"[&_code]:text-foreground",wrapperClassName:"lg:col-span-2",value:n,hideLineNumbers:!0,language:"bash",children:n}),(0,t.jsxs)("p",{className:"text-sm text-foreground-lighter",children:["Add UI components for auth, realtime, storage, and more at"," ",(0,t.jsx)(s.InlineLink,{href:"https://supabase.com/library",children:"supabase.com/library"}),"."]})]}):null}])},604919,e=>{"use strict";var t=e.i(221628),a=e.i(486240);e.s(["default",0,function({state:e,projectKeys:r}){let s=function(e,t){if("nextjs"===e.framework)return{name:".env.local",language:"bash",code:[`NEXT_PUBLIC_SUPABASE_URL=${t.apiUrl??"your-project-url"}`,t.publishableKey?`NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY=${t.publishableKey}`:`NEXT_PUBLIC_SUPABASE_ANON_KEY=${t.anonKey??"your-anon-key"}`,""].join("\n")};if("react"===e.framework){let a="create-react-app"===e.frameworkVariant,r=a?"REACT_APP":"VITE";return{name:a?".env.local":".env",language:"bash",code:[`${r}_SUPABASE_URL=${t.apiUrl??"your-project-url"}`,t.publishableKey?`${r}_SUPABASE_PUBLISHABLE_KEY=${t.publishableKey}`:`${r}_SUPABASE_ANON_KEY=${t.anonKey??"your-anon-key"}`,""].join("\n")}}return null}(e,r);return s?(0,t.jsx)(a.MultipleCodeBlock,{files:[s]}):null}])},846161,e=>{"use strict";var t=e.i(221628),a=e.i(331162);e.s(["default",0,function({state:e}){let r="server"===e.mode?"npx skills add supabase/server":"npx skills add supabase/agent-skills";return(0,t.jsx)(a.CodeBlock,{className:"[&_code]:text-foreground",wrapperClassName:"lg:col-span-2",value:r,hideLineNumbers:!0,language:"bash",children:r})}])},834473,e=>{"use strict";var t=e.i(221628),a=e.i(486240);e.s(["default",0,({projectKeys:e})=>{let r=[{name:".env.local",language:"bash",code:[`PUBLIC_SUPABASE_URL=${e.apiUrl??"your-project-url"}`,e?.publishableKey?`PUBLIC_SUPABASE_PUBLISHABLE_KEY=${e.publishableKey}`:`PUBLIC_SUPABASE_ANON_KEY=${e.anonKey??"your-anon-key"}`,""].join("\n")},{name:"src/lib/supabaseClient.js",language:"js",code:`
import { createClient } from "@supabase/supabase-js";
import { PUBLIC_SUPABASE_URL, ${e.publishableKey?"PUBLIC_SUPABASE_PUBLISHABLE_KEY":"PUBLIC_SUPABASE_ANON_KEY"} } from "$env/static/public"

const supabaseUrl = PUBLIC_SUPABASE_URL;
const supabaseKey = ${e.publishableKey?"PUBLIC_SUPABASE_PUBLISHABLE_KEY":"PUBLIC_SUPABASE_ANON_KEY"};

export const supabase = createClient(supabaseUrl, supabaseKey);
        `},{name:"src/routes/+page.server.js",language:"js",code:`
import { supabase } from "$lib/supabaseClient";

export async function load() {
  const { data } = await supabase.from("countries").select();
  return {
    countries: data ?? [],
  };
}
`},{name:"src/routes/+page.svelte",language:"html",code:`
<script>
  export let data;
</script>

<ul>
  {#each data.countries as country}
    <li>{country.name}</li>
  {/each}
</ul>
`}];return(0,t.jsx)(a.MultipleCodeBlock,{files:r})}])},417897,e=>{"use strict";var t=e.i(221628),a=e.i(486240);e.s(["default",0,({projectKeys:e})=>{let r=[{name:"Supabase.swift",language:"swift",code:`
import Foundation
import Supabase

let supabase = SupabaseClient(
  supabaseURL: URL(string: "${e.apiUrl??"your-project-url"}")!,
  supabaseKey: "${e.publishableKey??"your-publishable-key"}"
)
        `},{name:"Todo.swift",language:"swift",code:`
import Foundation

struct Todo: Identifiable, Decodable {
  var id: Int
  var name: String
}
`},{name:"ContentView.swift",language:"swift",code:`
import Supabase
import SwiftUI

struct ContentView: View {
  @State var todos: [Todo] = []

  var body: some View {
    NavigationStack {
      List(todos) { todo in
        Text(todo.name)
      }
      .navigationTitle("Todos")
      .task {
        do {
          todos = try await supabase.from("todos").select().execute().value
        } catch {
          debugPrint(error)
        }
      }
    }
  }
}

#Preview {
  ContentView()
}

`}];return(0,t.jsx)(a.MultipleCodeBlock,{files:r})}])},898187,e=>{"use strict";var t=e.i(221628),a=e.i(486240);e.s(["default",0,({projectKeys:e})=>{let r=[{name:".env",language:"bash",code:`
VITE_SUPABASE_URL=${e.apiUrl??"your-project-url"}
VITE_SUPABASE_KEY=${e.publishableKey??e.anonKey??"your-publishable-key"}
        `},{name:"src/utils/supabase.ts",language:"ts",code:`
import { createClient } from "@supabase/supabase-js";

export const supabase = createClient(
  import.meta.env.VITE_SUPABASE_URL,
  import.meta.env.VITE_SUPABASE_KEY
);
        `},{name:"src/routes/index.tsx",language:"tsx",code:`
import { createFileRoute } from '@tanstack/react-router'
import { supabase } from '../utils/supabase'

export const Route = createFileRoute('/')({
  loader: async () => {
    const { data: todos } = await supabase.from('todos').select()
    return { todos }
  },
  component: Home,
})

function Home() {
  const { todos } = Route.useLoaderData()

  return (
    <ul>
      {todos?.map((todo) => (
        <li key={todo.id}>{todo.name}</li>
      ))}
    </ul>
  )
}
`}];return(0,t.jsx)(a.MultipleCodeBlock,{files:r})}])},391060,e=>{"use strict";var t=e.i(221628),a=e.i(486240);e.s(["default",0,({projectKeys:e})=>{let r=[{name:".env.local",language:"bash",code:[`VITE_SUPABASE_URL=${e.apiUrl??"your-project-url"}`,e?.publishableKey?`VITE_SUPABASE_PUBLISHABLE_KEY=${e.publishableKey}`:`VITE_SUPABASE_ANON_KEY=${e.anonKey??"your-anon-key"}`,""].join("\n")},{name:"utils/supabase.ts",language:"ts",code:`
import { createClient } from "@supabase/supabase-js";

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseKey = import.meta.env.${e.publishableKey?"VITE_SUPABASE_PUBLISHABLE_KEY":"VITE_SUPABASE_ANON_KEY"};

export const supabase = createClient(supabaseUrl, supabaseKey);
        `},{name:"App.vue",language:"html",code:`
<script setup>
  import { ref, onMounted } from 'vue'
  import { supabase } from '../utils/supabase'
  
  const todos = ref([])

  async function getTodos() {
    const { data } = await supabase.from('todos').select()
    todos.value = data
  }

  onMounted(() => {
    getTodos()
  })

</script>

<template>
  <ul>
    <li v-for="todo in todos" :key="todo.id">{{ todo.name }}</li>
  </ul>
</template>
`}];return(0,t.jsx)(a.MultipleCodeBlock,{files:r})}])},958203,e=>{"use strict";e.i(128328);var t=e.i(158639),a=e.i(416340),r=e.i(536374),s=e.i(669894),n=e.i(10429);e.s(["useMcpUrl",0,function(e,o){let{ref:i}=(0,t.useParams)(),l=!!e.mcpReadonly;return(0,a.useMemo)(()=>{let t=Array.isArray(e.mcpFeatures)?e.mcpFeatures:[],a=n.IS_PLATFORM?r.FEATURE_GROUPS_PLATFORM:r.FEATURE_GROUPS_NON_PLATFORM,c=t.filter(e=>a.some(t=>t.id===e));return(0,s.getMcpUrl)({projectRef:i,isPlatform:n.IS_PLATFORM,apiUrl:o.apiUrl??void 0,readonly:l,features:c}).mcpUrl},[o.apiUrl,i,l,e.mcpFeatures])}])},168848,e=>{"use strict";var t=e.i(221628);e.i(128328);var a=e.i(158639),r=e.i(416340),s=e.i(980630),n=e.i(837710),o=e.i(253214),i=e.i(911735),l=e.i(746301),c=e.i(538482),d=e.i(215312),u=e.i(900943),p=e.i(874715),m=e.i(236914),f=e.i(686792),g=e.i(47302);async function h({ref:e,password:t}){if(!e)return console.error("Project ref is required");let{data:a,error:r}=await (0,f.patch)("/platform/projects/{ref}/db-password",{params:{path:{ref:e}},body:{password:t}});return r&&(0,f.handleError)(r),a}var b=e.i(442678),v=e.i(635494);e.i(10429);var y=e.i(837508),S=e.i(727060),x=e.i(379606);e.s(["ResetDbPasswordDialog",0,({disabled:e=!1,onPasswordReset:f,triggerClassName:_,triggerIcon:E,triggerLabel:A="Reset password",triggerVariant:C="default"})=>{let{ref:T}=(0,a.useParams)(),R=(0,v.useIsProjectActive)(),{can:w}=(0,b.useAsyncCheckPermissionsV2)(b.FGA_PERMISSIONS.PROJECT.DATABASE_CONFIG_WRITE),[I,j]=(0,r.useState)(!1),[k,P]=(0,r.useState)(""),[N,L]=(0,r.useState)(""),[U,D]=(0,r.useState)(""),[O,B]=(0,r.useState)(0),$=(0,r.useRef)(""),M=(0,r.useRef)(""),{mutate:F,isPending:q}=(({onSuccess:e,onError:t,...a}={})=>{let r=(0,m.useQueryClient)();return(0,p.useMutation)({mutationFn:e=>h(e),async onSuccess(t,a,s){await r.invalidateQueries({queryKey:g.projectKeys.detail(a.ref)}),await e?.(t,a,s)},async onError(e,a,r){void 0===t?s.toast.error(`Failed to reset database password: ${e.message}`):t(e,a,r)},...a})})({onSuccess:async(e,t)=>{s.toast.success("Successfully updated database password"),f?.(t.password),j(!1)}});async function K(e){$.current=e;let{message:t,warning:a,strength:r}=await (0,S.passwordStrength)(e);$.current===e&&(M.current=e,B(r),D(a),L(t))}(0,r.useEffect)(()=>{I&&(P(""),L(""),D(""),B(0),$.current="",M.current="")},[I]);let z=async()=>{if(!T)return console.error("Project ref is required");M.current===k&&O>=y.DEFAULT_MINIMUM_PASSWORD_STRENGTH&&F({ref:T,password:k})};return(0,t.jsxs)(o.Dialog,{open:I,onOpenChange:e=>j(e),children:[(0,t.jsx)(o.DialogTrigger,{asChild:!0,children:(0,t.jsx)(d.ButtonTooltip,{variant:C,className:_,icon:E,disabled:!w||!R||e,tooltip:{content:{side:"bottom",text:w?R?void 0:"Unable to reset database password as project is not active":"You need additional permissions to reset the database password"}},children:A})}),(0,t.jsxs)(o.DialogContent,{size:"medium",children:[(0,t.jsx)(o.DialogHeader,{children:(0,t.jsx)(o.DialogTitle,{children:"Reset database password"})}),(0,t.jsx)(o.DialogSectionSeparator,{}),(0,t.jsxs)(o.DialogSection,{className:"w-full space-y-8",children:[(0,t.jsx)(i.Admonition,{type:"warning",title:"This password is shared across every connection method",children:"Resetting it will disconnect the pooler, read replicas, and any app, ORM, or tool still using the old password. Update it everywhere before switching over."}),(0,t.jsx)(c.FormItemLayout,{layout:"vertical",isReactForm:!1,error:U,description:(0,t.jsx)(u.PasswordStrengthBar,{passwordStrengthScore:O,passwordStrengthMessage:N,password:k,generateStrongPassword:function(){let e=(0,x.generateStrongPassword)();P(e),K(e)}}),children:(0,t.jsx)(l.Input,{copy:k.length>0,"aria-invalid":!!U,type:"password",placeholder:"Type in a strong password",value:k,autoComplete:"off",onChange:e=>{let t=e.target.value;P(t),""==t?($.current=t,M.current=t,B(-1),L(""),D("")):K(t)}})})]}),(0,t.jsxs)(o.DialogFooter,{children:[(0,t.jsx)(n.Button,{disabled:q,onClick:()=>j(!1),children:"Cancel"}),(0,t.jsx)(n.Button,{variant:"primary",loading:q,disabled:q,onClick:()=>z(),children:"Reset password"})]})]})]})}],168848)},72187,e=>{"use strict";var t=e.i(465913);e.i(427138);var a=e.i(434934);let r={SOUTHEAST_ASIA:[103.8,1.37],NORTHEAST_ASIA:[139.42,35.41],NORTHEAST_ASIA_2:[126.98,37.56],CENTRAL_CANADA:[-73.6,45.5],WEST_US:[-121.96,37.35],WEST_US_2:[-122.67,45.51],EAST_US:[-78.45,38.13],WEST_EU:[-8,53],WEST_EU_2:[-.1,51],CENTRAL_EU:[8,50],SOUTH_ASIA:[72.88,19.08],OCEANIA:[151.2,-33.86],SOUTH_AMERICA:[-46.38,-23.34],CENTRAL_EU_2:[8.54,47.45],EAST_US_2:[-83,39.96],NORTH_EU:[17.91,59.65],WEST_EU_3:[2.35,48.86]},s=Object.keys(a.AWS_REGIONS).map(e=>({key:e,name:a.AWS_REGIONS?.[e].displayName,region:a.AWS_REGIONS?.[e].code,coordinates:r[e]})).filter(e=>void 0!==e.coordinates),n={[t.ReadReplicaSetupProgress.Requested]:"Requesting replica instance",[t.ReadReplicaSetupProgress.Started]:"Launching replica instance",[t.ReadReplicaSetupProgress.LaunchedReadReplicaInstance]:"Initiating replica setup",[t.ReadReplicaSetupProgress.InitiatedReadReplicaSetup]:"Downloading base backup",[t.ReadReplicaSetupProgress.DownloadedBaseBackup]:"Replaying WAL archives",[t.ReadReplicaSetupProgress.ReplayedWalArchives]:"Completing set up",[t.ReadReplicaSetupProgress.CompletedReadReplicaSetup]:"Completed"},o={[t.ReadReplicaSetupError.ReadReplicaInstanceLaunchFailed]:"Failed to launch replica",[t.ReadReplicaSetupError.InitiateReadReplicaSetupFailed]:"Failed to initiate replica",[t.ReadReplicaSetupError.DownloadBaseBackupFailed]:"Failed to download backup",[t.ReadReplicaSetupError.ReplayWalArchivesFailed]:"Failed to replay WAL archives",[t.ReadReplicaSetupError.CompleteReadReplicaSetupFailed]:"Failed to set up replica"};e.s(["AVAILABLE_REPLICA_REGIONS",0,s,"AWS_REGIONS_COORDINATES",0,r,"ERROR_STATES",0,o,"HA_RANKSEP",0,96,"INIT_PROGRESS",0,n,"NODE_CARD_WIDTH",0,320,"NODE_HEIGHT_FALLBACKS",0,{LOAD_BALANCER:64,PRIMARY:140,READ_REPLICA:140,REGION:162,HA_GATEWAY:64,HA_PRIMARY:150,HA_REPLICA:90},"NODE_SEP",0,20,"NODE_WIDTH",0,660,"REGION_NODE_HEIGHT",0,162,"SHARD_HEADER_HEIGHT",0,42,"SHARD_NODE_PADDING",0,16])},891067,e=>{"use strict";var t=e.i(221628),a=e.i(373702),r=e.i(555498),s=e.i(391141),n=e.i(416340),o=e.i(837710),i=e.i(843778),l=e.i(767073);let c=(0,n.forwardRef)(({className:e,...a},s)=>(0,t.jsx)(o.Button,{ref:s,size:"tiny",className:(0,i.cn)("px-1.5 py-4 [&_svg]:w-5 [&_svg]:h-5 ml-1",e),iconRight:(0,t.jsx)(r.ChevronsUpDownIcon,{strokeWidth:1.5}),...a,variant:"text"}));c.displayName="AppLayoutDropdownTriggerButton",e.s(["AppLayoutDropdownError",0,function({message:e}){return(0,t.jsxs)("div",{className:"flex items-center space-x-2 text-amber-900",children:[(0,t.jsx)(a.AlertCircleIcon,{size:16,strokeWidth:1.5}),(0,t.jsx)("p",{className:"text-sm",children:e})]})},"AppLayoutDropdownTriggerButton",0,c,"AppLayoutDropdownWithPopover",0,function({linkHref:e,linkContent:a,linkClassName:r="flex items-center gap-2 shrink-0 text-sm",commandContent:n,open:o,onOpenChange:i,triggerButton:c}){return(0,t.jsxs)(l.Popover,{open:o,onOpenChange:i,modal:!1,children:[(0,t.jsxs)("div",{className:"flex items-center shrink-0",children:[(0,t.jsx)(s.default,{href:e,className:r,children:a}),(0,t.jsx)(l.PopoverTrigger,{asChild:!0,children:c})]}),(0,t.jsx)(l.PopoverContent,{className:"p-0",side:"bottom",align:"start",children:n})]})}])},273753,e=>{"use strict";var t=e.i(221628);e.i(128328);var a=e.i(158639),r=e.i(402144),s=e.i(592577),n=e.i(416340),o=e.i(587433),i=e.i(843778),l=e.i(108151),c=e.i(891067),d=e.i(872846),u=e.i(324544),p=e.i(912971),m=e.i(811025),f=e.i(912793),g=e.i(265735),h=e.i(967052);e.s(["OrganizationDropdown",0,({embedded:e=!1,className:b,onClose:v}={})=>{let y=(0,s.useRouter)(),{slug:S}=(0,a.useParams)(),{data:x}=(0,g.useSelectedOrganizationQuery)(),{data:_,isPending:E,isError:A}=(0,m.useOrganizationsQuery)(),C=(0,f.useIsFeatureEnabled)("organizations:create"),T=x?.slug,R=x?.name,[w,I]=(0,n.useState)(!1),j=(0,u.useEmbeddedCloseHandler)(e,v,I),k=(0,h.useTrack)();if(E&&!e)return(0,t.jsx)(l.ShimmeringLoader,{className:"p-2 md:mr-2 w-[90px]"});if(A)return(0,t.jsx)(c.AppLayoutDropdownError,{message:"Failed to load organizations"});let P=(0,t.jsx)(d.OrganizationDropdownCommandContent,{embedded:e,className:b,organizations:_??[],selectedSlug:T,routePathname:y.pathname,hasRouteSlug:!!S,organizationCreationEnabled:C,onClose:j});return e?E?(0,t.jsx)(l.GenericSkeletonLoader,{className:"p-2"}):P:(0,t.jsx)(c.AppLayoutDropdownWithPopover,{linkHref:T?`/org/${T}`:"/organizations",linkContent:(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(r.BoxesIcon,{size:14,strokeWidth:1.5,className:"text-foreground-lighter"}),(0,t.jsx)("span",{className:(0,i.cn)("md:max-w-32 lg:max-w-none truncate hidden md:block",x?"text-foreground":"text-foreground-lighter"),children:R??"Select an organization"}),!!x&&(0,t.jsx)(p.default,{organization:x}),!!x&&(0,t.jsx)(o.Badge,{variant:"default",children:x?.plan.name})]}),commandContent:P,open:w,onOpenChange:e=>{e&&k("header_organization_dropdown_opened"),I(e)},triggerButton:(0,t.jsx)(c.AppLayoutDropdownTriggerButton,{"aria-label":"Show organizations"})})}])},872846,729058,e=>{"use strict";var t=e.i(221628),a=e.i(71606),r=e.i(391141),s=e.i(837710),n=e.i(843778),o=e.i(339434),i=e.i(396831),l=e.i(490579),c=e.i(60733),d=e.i(912971);function u({org:e,selectedSlug:a,routePathname:r,hasRouteSlug:s,onClose:o,compactPadding:i=!1}){let p=s?r.replace("[slug]",e.slug):`/org/${e.slug}`;return(0,t.jsxs)(c.CommandItemLink,{href:p,value:`${e.name.replaceAll('"',"")} - ${e.slug}`,className:(0,n.cn)("cursor-pointer w-full flex items-center justify-between text-sm md:text-xs",!i&&"p-0.5"),onSelect:o,children:[(0,t.jsxs)("div",{className:"flex items-center gap-2",children:[(0,t.jsx)("span",{children:e.name}),(0,t.jsx)(d.default,{organization:e})]}),e.slug===a&&(0,t.jsx)(l.CheckIcon,{size:16})]},e.slug)}e.s(["OrgCommandItem",0,u],729058),e.s(["OrganizationDropdownCommandContent",0,function({embedded:e,className:l,organizations:d,selectedSlug:p,routePathname:m,hasRouteSlug:f,organizationCreationEnabled:g,onClose:h}){let b=(0,t.jsx)(t.Fragment,{children:d?.map(a=>(0,t.jsx)(u,{org:a,selectedSlug:p,routePathname:m,hasRouteSlug:f,onClose:h,compactPadding:!e},a.slug))});return e?(0,t.jsxs)(o.Command,{className:(0,n.cn)(l,"flex flex-col flex-1 min-h-0 overflow-hidden"),children:[(0,t.jsxs)("div",{className:"flex items-center gap-2 shrink-0 border-b p-2",children:[(0,t.jsx)(s.Button,{variant:"text",block:!0,size:"small",asChild:!0,children:(0,t.jsx)(r.default,{href:"/organizations",className:"text-xs text-foreground-light hover:text-foreground",onClick:h,children:"All Organizations"})}),g&&(0,t.jsx)(s.Button,{block:!0,size:"small",asChild:!0,icon:(0,t.jsx)(a.PlusIcon,{size:14,strokeWidth:1.5}),children:(0,t.jsx)(r.default,{href:"/new",className:"text-xs text-foreground-light hover:text-foreground",onClick:h,children:"New organization"})})]}),(0,t.jsx)(o.CommandInput,{placeholder:"Find organization...",wrapperClassName:"shrink-0",className:"text-base sm:text-sm"}),(0,t.jsxs)(o.CommandList,{className:"flex flex-col flex-1 min-h-0 overflow-y-auto p-1 max-h-none!",children:[(0,t.jsx)(o.CommandEmpty,{children:"No organizations found"}),(0,t.jsx)(o.CommandGroup,{className:"min-h-0",children:b})]})]}):(0,t.jsxs)(o.Command,{className:l,children:[(0,t.jsx)(o.CommandInput,{placeholder:"Find organization..."}),(0,t.jsxs)(o.CommandList,{children:[(0,t.jsx)(o.CommandEmpty,{children:"No organizations found"}),(0,t.jsx)(o.CommandGroup,{children:(0,t.jsx)(i.ScrollArea,{className:(d||[]).length>7?"md:h-[210px]":"",children:b})}),(0,t.jsx)(o.CommandSeparator,{}),(0,t.jsx)(o.CommandGroup,{children:(0,t.jsx)(c.CommandItemLink,{href:"/organizations",className:"cursor-pointer w-full gap-2",onSelect:h,children:"All Organizations"})}),g&&(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(o.CommandSeparator,{}),(0,t.jsx)(o.CommandGroup,{children:(0,t.jsxs)(c.CommandItemLink,{href:"/new",className:"cursor-pointer w-full gap-2",onSelect:h,children:[(0,t.jsx)(a.PlusIcon,{size:14,strokeWidth:1.5}),(0,t.jsx)("p",{children:"New organization"})]})})]})]})]})}],872846)},165995,e=>{"use strict";var t=e.i(221628);e.i(128328);var a=e.i(158639),r=e.i(769817),s=e.i(71606),n=e.i(391141),o=e.i(592577),i=e.i(416340),l=e.i(837710),c=e.i(339434),d=e.i(108151),u=e.i(891067),p=e.i(185454),m=e.i(490579),f=e.i(587433),g=e.i(843778),h=e.i(912971),b=e.i(507314);function v({project:e,selectedRef:a}){let r=e.ref===a,s="INACTIVE"===e.status,n=(0,b.getManagedByFromOrganizationPartner)(void 0,e.integration_source);return(0,t.jsxs)("div",{className:"w-full flex items-center justify-between p-0.5 md:p-0 text-sm md:text-xs",children:[(0,t.jsxs)("span",{className:(0,g.cn)("flex items-center gap-2 min-w-0",r?"md:max-w-60":"md:max-w-64"),children:[(0,t.jsx)("span",{className:"truncate",children:e.name}),s&&(0,t.jsx)(f.Badge,{className:"ml-2",children:"Paused"}),(0,t.jsx)(h.default,{organization:{managed_by:n}})]}),r&&(0,t.jsx)(m.CheckIcon,{size:16})]})}var y=e.i(324544),S=e.i(60733),x=e.i(726398),_=e.i(164045),E=e.i(912793),A=e.i(265735),C=e.i(635494),T=e.i(10429),R=e.i(967052);function w({organizationSlug:e,embedded:a,onClose:r}){let o=`/new/${e}`;return a?(0,t.jsx)(l.Button,{block:!0,size:"small",asChild:!0,icon:(0,t.jsx)(s.PlusIcon,{size:14,strokeWidth:1.5}),children:(0,t.jsx)(n.default,{href:o,onClick:r,className:"text-xs text-foreground-light hover:text-foreground",children:"New project"})}):(0,t.jsx)(c.CommandGroup,{children:(0,t.jsxs)(S.CommandItemLink,{href:o,className:"cursor-pointer w-full gap-2",onSelect:r,children:[(0,t.jsx)(s.PlusIcon,{size:14,strokeWidth:1.5}),(0,t.jsx)("p",{children:"New project"})]})})}let I=({projectName:e})=>(0,t.jsx)("div",{className:"text-sm px-3 py-1",children:e});function j({projectRef:e,projectName:a,projectManagedBy:s,selectorProps:o}){return(0,t.jsxs)("div",{className:"flex items-center shrink-0",children:[(0,t.jsxs)(n.default,{href:`/project/${e}`,className:"flex items-center gap-2 shrink-0 text-sm",children:[(0,t.jsx)(r.BoxIcon,{size:14,strokeWidth:1.5,className:"text-foreground-lighter"}),(0,t.jsx)("span",{title:a,className:"text-foreground max-w-32 lg:max-w-64 truncate",children:a}),s&&(0,t.jsx)(h.default,{organization:{managed_by:s}})]}),(0,t.jsx)(x.OrganizationProjectSelector,{...o,renderTrigger:()=>(0,t.jsx)(u.AppLayoutDropdownTriggerButton,{className:"shrink-0","aria-label":"Show organization projects"})})]})}e.s(["ProjectDropdown",0,({embedded:e=!1,className:r,onClose:s}={})=>{let n=(0,o.useRouter)(),{ref:l}=(0,a.useParams)(),{data:c,isPending:u}=(0,C.useSelectedProjectQuery)(),{data:m}=(0,A.useSelectedOrganizationQuery)(),f=c?.parentRef!==c?.ref,{data:g,isPending:h}=(0,_.useProjectDetailQuery)({ref:c?.parent_project_ref},{enabled:f}),S=g??c,k=(0,E.useIsFeatureEnabled)("projects:create"),P=(0,R.useTrack)(),[N,L]=(0,i.useState)(!1),U=(0,y.useEmbeddedCloseHandler)(e,s,L),D=S?.integration_source?(0,b.getManagedByFromOrganizationPartner)(void 0,S.integration_source):m?.billing_partner?m.managed_by:void 0;if((u||f&&h||!S)&&!e)return(0,t.jsx)(d.ShimmeringLoader,{className:"p-2 md:mr-2 md:w-[90px]"});let O={open:N,setOpen:e?e=>s?.():e=>{e&&P("header_project_dropdown_opened"),L(e)},selectedRef:l,getItemHref:e=>{let t=(0,p.sanitizeRoute)(n.route,n.query);return t?.replace("[ref]",e.ref)??`/project/${e.ref}`},renderRow:e=>(0,t.jsx)(v,{project:e,selectedRef:l}),renderActions:(e,a)=>k?(0,t.jsx)(w,{organizationSlug:m?.slug,embedded:a?.embedded??!1,onClose:U}):null};return e?(0,t.jsx)(x.OrganizationProjectSelector,{...O,embedded:!0,className:r,fetchOnMount:!0}):T.IS_PLATFORM?(0,t.jsx)(j,{projectRef:c?.ref,projectName:S?.name??"",projectManagedBy:D,selectorProps:O}):(0,t.jsx)(I,{projectName:S?.name??""})}],165995)},185454,e=>{"use strict";e.s(["sanitizeRoute",0,function(e,t){let a=e.split("/"),r=a.includes("[bucketId]"),s=a.includes("[preset]"),n=a.some(e=>e.startsWith("[")&&e.endsWith("]")&&"[ref]"!==e);return r||s||n?a.slice(0,r||s?5:4).join("/"):e}])},324544,e=>{"use strict";var t=e.i(416340);e.s(["useEmbeddedCloseHandler",0,function(e,a,r){return(0,t.useCallback)(()=>{e?a?.():r?.(!1)},[e,a,r])}])},266682,e=>{"use strict";var t=e.i(221628),a=e.i(391141),r=e.i(592577),s=e.i(843778),n=e.i(613580),o=e.i(811025),i=e.i(912793),l=e.i(389391),c=e.i(265735),d=e.i(10429),u=e.i(967052);e.s(["HomeIcon",0,({className:e})=>{let{data:p}=(0,c.useSelectedOrganizationQuery)(),{data:m}=(0,o.useOrganizationsQuery)(),f=(0,u.useTrack)(),g=(0,i.useIsFeatureEnabled)("branding:large_logo"),h=(0,r.useRouter)(),{lastVisitedOrganization:b}=(0,l.useLastVisitedOrganization)(),v=d.IS_PLATFORM?b?`/org/${b}`:p?.slug?`/org/${p.slug}`:m&&m.length>0?`/org/${m[0].slug}`:"/organizations":"/project/default";return(0,t.jsxs)(n.Tooltip,{children:[(0,t.jsx)(n.TooltipTrigger,{asChild:!0,children:(0,t.jsxs)(a.default,{href:v,onClick:()=>f("header_home_logo_clicked"),className:(0,s.cn)("items-center justify-center shrink-0 flex",e),tabIndex:0,children:[(0,t.jsx)("img",{alt:"Supabase",src:`${h.basePath}/img/supabase-logo.svg`,className:g?"h-[20px]":"h-[18px]"}),(0,t.jsx)("span",{className:"sr-only",children:"Back to organization home"})]})}),(0,t.jsx)(n.TooltipContent,{"aria-hidden":!0,children:"Back to organization home"})]})}])},555894,e=>{"use strict";var t=e.i(221628),a=e.i(843778);e.s(["LayoutHeaderDivider",0,({className:e,...r})=>(0,t.jsx)("span",{className:(0,a.cn)("text-border-stronger pr-2",e),...r,children:(0,t.jsx)("svg",{viewBox:"0 0 24 24",width:"16",height:"16",stroke:"currentColor",strokeWidth:"1",strokeLinecap:"round",strokeLinejoin:"round",fill:"none",shapeRendering:"geometricPrecision","aria-hidden":!0,children:(0,t.jsx)("path",{d:"M16 3.549L7.12 20.600"})})})])},825615,985142,e=>{"use strict";var t=e.i(221628);e.i(128328);var a=e.i(232107),r=e.i(158639),s=e.i(402144),n=e.i(555498),o=e.i(71606),i=e.i(592577),l=e.i(416340),c=e.i(339434),d=e.i(767073),u=e.i(396831),p=e.i(915178),m=e.i(108151),f=e.i(725137),g=e.i(412442),h=e.i(509882),b=e.i(617395),v=e.i(843778);let y=({children:e,open:a=!1,onOpenChange:r,className:s,shouldCloseOnRouteChange:n=!0,shouldCloseOnViewportResize:o=!0,onPointerDownOutside:d})=>{let u=(0,i.useRouter)(),{width:p}=(0,b.useWindowSize)(),m=u?.asPath??"";return(0,l.useEffect)(()=>{n&&r(!1)},[m]),(0,l.useEffect)(()=>{o&&r(!1)},[p]),(0,t.jsx)(f.Sheet,{open:a,onOpenChange:r,children:(0,t.jsx)(f.SheetContent,{id:"mobile-sheet-content","aria-describedby":void 0,showClose:!1,size:"full",side:"bottom",onPointerDownOutside:d,className:(0,v.cn)("rounded-t-lg bg-background overflow-hidden overflow-y-scroll h-[85dvh] md:max-h-[500px]",s),children:(0,t.jsx)(h.ErrorBoundary,{FallbackComponent:()=>(0,t.jsx)(c.CommandEmpty,{}),children:e})})})};e.s(["default",0,y],985142);var S=e.i(273753);function x({open:e,onOpenChange:a,onClose:r,selectedOrganization:n,selectedOrganizationName:o}){let i=o??n?.name??"Select organization";return(0,t.jsx)(y,{open:e,onOpenChange:a,className:"flex flex-col overflow-hidden h-[85dvh] md:max-h-[500px]",children:(0,t.jsxs)(g.Tabs,{defaultValue:"organization",className:"flex flex-col flex-1 min-h-0 overflow-hidden p-0",children:[(0,t.jsxs)(f.SheetHeader,{className:"border-0 border-default p-0 shrink-0",children:[(0,t.jsx)(f.SheetTitle,{className:"sr-only",children:"Switch organization"}),(0,t.jsx)(g.TabsList,{className:"w-full grid grid-cols-1 shrink-0",children:(0,t.jsxs)(g.TabsTrigger,{value:"organization",className:"text-xs flex flex-col items-center gap-1.5 px-4 py-3 data-[state=active]:border-0",children:[(0,t.jsx)(s.BoxesIcon,{className:"shrink-0",size:16,strokeWidth:1.5}),(0,t.jsx)("span",{className:"truncate max-w-full text-xs leading-tight",title:i,children:i})]})})]}),(0,t.jsx)(g.TabsContent,{value:"organization",className:"flex-1 min-h-0 overflow-hidden flex flex-col mt-0 p-0 data-[state=inactive]:hidden",children:(0,t.jsx)(S.OrganizationDropdown,{embedded:!0,className:"bg-transparent border-0 shadow-none min-h-0 flex-1 flex flex-col overflow-hidden rounded-none",onClose:r})})]})})}var _=e.i(729058),E=e.i(60733),A=e.i(811025),C=e.i(722740),T=e.i(912793),R=e.i(265735);e.s(["OrgSelector",0,function(){let e=(0,i.useRouter)(),{slug:f}=(0,r.useParams)(),{data:g}=(0,R.useSelectedOrganizationQuery)(),{data:h,isPending:b}=(0,A.useOrganizationsQuery)(),v=(0,T.useIsFeatureEnabled)("organizations:create"),[y,S]=(0,l.useState)(!1),w=g?.slug,I=g?.plan?.id==="platform",j=g?.name?.trim().charAt(0).toUpperCase()||"O",{data:k}=(0,C.useOrgProjectsInfiniteQuery)({slug:w},{enabled:!!w&&!I}),P=k?.pages[0]?.pagination.count,N=I?"Platform":"number"==typeof P?`${P} project${1===P?"":"s"}`:"No projects",L=(0,a.useBreakpoint)("md");if(b)return(0,t.jsx)(m.ShimmeringLoader,{className:"ml-1 w-[120px]"});let U=(0,t.jsxs)(p.SidebarMenuButton,{size:"lg",className:"data-open:bg-sidebar-accent data-open:text-sidebar-accent-foreground gap-2 h-auto text-left group px-1.5 py-1 touch-manipulation",onClick:L?()=>S(!0):void 0,children:[(0,t.jsx)("span",{className:"flex w-8 aspect-square shrink-0 items-center justify-center rounded-sm border bg-surface-100 text-xs font-medium text-foreground-lighter",children:j}),(0,t.jsxs)("div",{className:"flex min-w-0 flex-1 flex-col text-left -mb-0.5",children:[(0,t.jsx)("div",{className:"truncate text-foreground font-medium leading-tight min-w-[100px] max-w-[250px]",children:g?.name??"Select organization"}),g&&(0,t.jsxs)("div",{className:"flex items-center gap-1 truncate text-foreground-light leading-tight text-xs",children:[(0,t.jsx)(s.BoxesIcon,{className:"shrink-0 size-3",strokeWidth:1.5}),(0,t.jsx)("span",{children:N})]})]}),(0,t.jsx)(n.ChevronsUpDownIcon,{strokeWidth:1,className:"ml-auto text-foreground-light md:hidden md:group-hover:block w-4! h-4!"})]});return L?(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(p.SidebarMenu,{className:"shrink",children:(0,t.jsx)(p.SidebarMenuItem,{children:b?(0,t.jsx)(m.ShimmeringLoader,{className:"p-2 w-[90px]"}):U})}),(0,t.jsx)(x,{open:y,onOpenChange:S,onClose:()=>S(!1),selectedOrganization:g??null})]}):(0,t.jsx)(p.SidebarMenu,{children:(0,t.jsx)(p.SidebarMenuItem,{children:(0,t.jsxs)(d.Popover,{open:y,onOpenChange:S,modal:!1,children:[(0,t.jsx)(d.PopoverTrigger,{asChild:!0,children:U}),(0,t.jsx)(d.PopoverContent,{className:"p-0",side:"bottom",align:"start",children:(0,t.jsxs)(c.Command,{children:[(0,t.jsx)(c.CommandInput,{placeholder:"Find organization..."}),(0,t.jsxs)(c.CommandList,{children:[(0,t.jsx)(c.CommandEmpty,{children:"No organizations found"}),(0,t.jsx)(c.CommandGroup,{children:(0,t.jsx)(u.ScrollArea,{className:(h||[]).length>7?"h-full md:h-[210px]":"",children:h?.map(a=>(0,t.jsx)(_.OrgCommandItem,{org:a,selectedSlug:w,routePathname:e.pathname,hasRouteSlug:!!f,onClose:()=>S(!1)},a.slug))})}),(0,t.jsx)(c.CommandSeparator,{}),(0,t.jsx)(c.CommandGroup,{children:(0,t.jsx)(E.CommandItemLink,{href:"/organizations",className:"cursor-pointer w-full gap-2",onSelect:()=>S(!1),children:(0,t.jsx)("p",{children:"All Organizations"})})}),v&&(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(c.CommandSeparator,{}),(0,t.jsx)(c.CommandGroup,{children:(0,t.jsxs)(E.CommandItemLink,{href:"/new",className:"cursor-pointer w-full gap-2",onSelect:()=>S(!1),children:[(0,t.jsx)(o.PlusIcon,{size:14,strokeWidth:1.5}),(0,t.jsx)("p",{children:"New organization"})]})})]})]})]})})]})})})}],825615)},843429,290975,369368,e=>{"use strict";var t=e.i(416340),a=e.i(915190),r=e.i(211024);e.i(128328);var s=e.i(86086);let n={list:e=>["projects",e,"banned-ips"]};e.s(["BannedIPKeys",0,n],290975);var o=e.i(686792),i=e.i(313345),l=e.i(164045);e.i(10429);var c=e.i(837508);async function d({projectRef:e},t){if(!e)throw Error("projectRef is required");let{data:a,error:r}=await (0,o.post)("/v1/projects/{ref}/network-bans/retrieve",{params:{path:{ref:e}},signal:t,grant:i.unguarded.migrating});return r&&(0,o.handleError)(r),a}let u=({projectRef:e},{enabled:t=!0,...o}={})=>{let{data:i}=(0,l.useProjectDetailQuery)({ref:e},{enabled:t&&s.IS_PLATFORM}),u=!!i&&!i.high_availability&&i.cloud_provider!==c.PROVIDERS.AWS_K8S.id;return(0,r.useQuery)({queryKey:n.list(e),queryFn:u?({signal:t})=>d({projectRef:e},t):a.skipToken,enabled:t&&s.IS_PLATFORM&&void 0!==e&&u,retry:!1,refetchOnWindowFocus:!1,staleTime:6e4,...o})};e.s(["useBannedIPsQuery",0,u],369368);var p=e.i(789425);let m=e=>`signal:banned-ip:${e}:v1`;e.s(["useAdvisorSignals",0,({projectRef:e,enabled:a=!0})=>{let{data:r,isPending:s,isError:n}=u({projectRef:e},{enabled:a}),o=e?`advisor-signal-dismissals:${e}`:"advisor-signal-dismissals:unknown-project",[i,l]=(0,p.useLocalStorageQuery)(o,[]),c=(0,t.useMemo)(()=>new Set(i),[i]),d=(0,t.useCallback)(e=>{l(t=>t.includes(e)?t:[...t,e])},[l]),f=(0,t.useMemo)(()=>(({projectRef:e,bannedIPsData:t})=>e?(t?.banned_ipv4_addresses??[]).map(t=>({id:m(t),dismissalKey:m(t),source:"signal",type:"banned-ip",severity:"warning",category:"security",title:"Banned IP address",summary:`The IP address \`${t}\` is temporarily blocked because of suspicious traffic or repeated failed password attempts.`,description:"This IP address is temporarily blocked because of suspicious traffic or repeated failed password attempts. If this block is expected, you can dismiss this signal or remove the ban.",docsUrl:"https://supabase.com/docs/reference/cli/supabase-network-bans",actions:[{label:"Edit network bans",href:`/project/${e}/database/settings#banned-ips`}],sourceData:{type:"banned-ip",ip:t}})):[])({projectRef:e,bannedIPsData:r}),[e,r]);return(0,t.useEffect)(()=>{if(!r||!i.some(e=>e.startsWith("signal:banned-ip:")&&!f.some(t=>t.dismissalKey===e)))return;let e=new Set(f.map(e=>e.dismissalKey));l(t=>t.filter(t=>!t.startsWith("signal:banned-ip:")||e.has(t)))},[r,f,i,l]),{data:(0,t.useMemo)(()=>f.filter(e=>!c.has(e.dismissalKey)),[f,c]),dismissSignal:d,isPending:s,isError:n}}],843429)},984396,e=>{"use strict";e.i(850036);var t=e.i(479084),a=e.i(977264),r=e.i(562616);function s(e){return"sql"===e||"log_sql"===e}function n(e){return"notebook"===e}function o(e){if(n(e.type)){if(!("content"in e))return e;let t=a.notebookDomainSchema.parse(e.content);return{...e,content:t}}if(!s(e.type)||!("content"in e))return e;let o=e.content;if(!("sql"in o))return e;let{sql:i,...l}=o,c="log_sql"===e.type?(0,r.untrustedLogSql)(i):(0,t.untrustedSql)(i);return{...e,content:{...l,unchecked_sql:c}}}e.s(["remapSqlContentField",0,o,"remapSqlContentFields",0,function(e){return e.map(o)},"remapWireSnippet",0,function(e,t){return{...o(e),status:t}},"unmapSqlContentField",0,function(e){if(n(e.type)){if(!("content"in e))return e;let t=(0,a.toWireWritableNotebook)(e.content);return{...e,content:t}}if(!s(e.type)||!("content"in e))return e;let t=e.content;if(!("unchecked_sql"in t))return e;let{unchecked_sql:r,...o}=t;return{...e,content:{...o,sql:r}}}])},420985,e=>{"use strict";var t=e.i(874715),a=e.i(236914),r=e.i(980630),s=e.i(984396),n=e.i(718727),o=e.i(686792);async function i({projectRef:e,payload:t},a,r){let n=new Headers(r);n.set("Version","2");let{data:l,error:c}=await (0,o.put)("/platform/projects/{ref}/content",{params:{path:{ref:e}},body:(0,s.unmapSqlContentField)(t),headers:n,signal:a});return(c&&(0,o.handleError)(c),l)?(0,s.remapWireSnippet)(l,"saved"):null}e.s(["upsertContent",0,i,"useContentUpsertMutation",0,({onError:e,onSuccess:s,invalidateQueriesOnSuccess:o=!0,...l}={})=>{let c=(0,a.useQueryClient)();return(0,t.useMutation)({mutationFn:e=>i(e),async onSuccess(e,t,a){let{projectRef:r}=t;o&&await Promise.all([c.invalidateQueries({queryKey:n.contentKeys.allContentLists(r)}),c.invalidateQueries({queryKey:n.contentKeys.infiniteList(r)})]),await s?.(e,t,a)},async onError(t,a,s){void 0===e?r.toast.error(`Failed to insert content: ${t.message}`):e(t,a,s)},...l})}])},83006,578152,e=>{"use strict";var t=e.i(211024),a=e.i(246230),r=e.i(686792),s=e.i(10429);async function n({projectRef:e},t){if(!e)throw Error("projectRef is required");let{data:a,error:s}=await (0,r.get)("/platform/projects/{ref}/config/pgbouncer",{params:{path:{ref:e}},signal:t});return s&&(0,r.handleError)(s),a}async function o({projectRef:e},t){if(!e)throw Error("Project ref is required");let{data:a,error:s}=await (0,r.get)("/platform/projects/{ref}/config/supavisor",{params:{path:{ref:e}},signal:t});return s&&(0,r.handleError)(s),a}e.s(["usePgbouncerConfigQuery",0,({projectRef:e},{enabled:r=!0,...o}={})=>(0,t.useQuery)({queryKey:a.databaseKeys.pgbouncerConfig(e),queryFn:({signal:t})=>n({projectRef:e},t),enabled:r&&void 0!==e&&s.IS_PLATFORM,...o})],83006),e.s(["useSupavisorConfigurationQuery",0,({projectRef:e},{enabled:r=!0,...n}={})=>(0,t.useQuery)({queryKey:a.databaseKeys.poolingConfiguration(e),queryFn:({signal:t})=>o({projectRef:e},t),enabled:r&&void 0!==e&&s.IS_PLATFORM,...n})],578152)},390473,195998,e=>{"use strict";var t=e.i(211024);e.i(128328);var a=e.i(704206);let r={overdueInvoices:()=>["invoices","overdue"],invoice:e=>["invoice",e],list:(e,t)=>["invoices",e,t],count:e=>["invoices",e,"count"],listAndCount:e=>["invoices",e],projectInvoices:(e,t)=>["invoices",e,t],projectInvoicesCount:e=>["invoices",e,"count"],orgUpcomingPreview:e=>["invoices",e,"upcoming-preview"]};e.s(["invoicesKeys",0,r],195998);var s=e.i(686792),n=e.i(10429);async function o(e){let{data:t,error:a}=await (0,s.get)("/platform/stripe/invoices/overdue",{signal:e});return a&&(0,s.handleError)(a),t}e.s(["useOverdueInvoicesQuery",0,({enabled:e=!0,...s}={})=>{let i=(0,a.useIsLoggedIn)();return(0,t.useQuery)({queryKey:r.overdueInvoices(),queryFn:({signal:e})=>o(e),enabled:e&&i&&n.IS_PLATFORM,staleTime:18e5,...s})}],390473)},915094,e=>{"use strict";var t=e.i(226821),a=e.i(686792);let r=10;async function s(e,t){let{status:s,filters:n,page:o=0,limit:i=r}=e,{priority:l=[],organizations:c=[],projects:d=[]}=n,{data:u,error:p}=await (0,a.get)("/platform/notifications",{params:{query:{offset:o*i,limit:i,...void 0!==s?{status:s}:{status:"new,seen"},...l.length>0?{priority:l.join(",")}:{},...c.length>0?{org_slug:c.join(",")}:{},...d.length>0?{project_ref:d.join(",")}:{}}},headers:{Version:"2"},signal:t});return p&&(0,a.handleError)(p),u}e.s(["useNotificationsV2Query",0,({status:e,filters:a,limit:n=r},{enabled:o,...i}={})=>(0,t.useInfiniteQuery)({queryKey:["notifications",{status:e,filters:a,limit:n}],queryFn:({signal:t,pageParam:r})=>s({status:e,filters:a,limit:n,page:r},t),enabled:o,initialPageParam:0,getNextPageParam(e,t){let a=t.length;if(!((e??[]).length<n))return a},...i})],915094)},150671,e=>{"use strict";var t=e.i(211024);e.i(128328);var a=e.i(947748),r=e.i(657588),s=e.i(158639),n=e.i(346691),o=e.i(686792),i=e.i(789425),l=e.i(635494),c=e.i(681328);let d={ci_pico:0,ci_nano:0,ci_micro:0,ci_small:4,ci_medium:4,ci_large:4};async function u({projectRef:e},t,a){if(!e)throw Error("Project ref is required");let{data:r,error:s}=await (0,o.get)("/platform/projects/{ref}/databases",{params:{path:{ref:e}},headers:a,signal:t});return s&&(0,o.handleError)(s),Array.isArray(r)?r:c.EMPTY_ARR}let p=({projectRef:e},{enabled:a=!0,...r}={})=>(0,t.useQuery)({queryKey:n.replicaKeys.list(e),queryFn:({signal:t})=>u({projectRef:e},t),enabled:a&&void 0!==e,...r});e.s(["READ_REPLICAS_MAX_COUNT",0,5,"READ_REPLICA_COMPUTE_CAPS",0,d,"getMaxReplicas",0,function(e){return d[`${e}`]??5},"useConnectionStringForReadOps",0,()=>{let{ref:e}=(0,s.useParams)(),{hasLoaded:t}=(0,r.useFeatureFlags)(),n=(0,r.useFlag)("dashboardPreferences"),[o,,{isLoading:c}]=(0,i.useLocalStorageQuery)(a.LOCAL_STORAGE_KEYS.DASHBOARD_PREFERENCES(e??"_"),{}),{data:d,isSuccess:u}=(0,l.useSelectedProjectQuery)(),{data:m=[],isLoading:f}=p({projectRef:d?.ref});if(!u||f||!t||c)return{connectionString:void 0,type:void 0,identifier:void 0};if(!n)return{type:"primary",identifier:d.ref,connectionString:d.connectionString};let g=m.filter(e=>e.identifier!==d?.ref&&"ACTIVE_HEALTHY"===e.status).find(e=>e.identifier===o.defaultDatabase);return{type:g?"replica":"primary",identifier:g?g.identifier:d.ref,connectionString:g?g.connectionString:d.connectionString}},"usePrimaryDatabase",0,({projectRef:e})=>{let{data:t=[],error:a,isPending:r,isError:s,isSuccess:n}=p({projectRef:e});return{database:t.find(t=>t.identifier===e),error:a,isLoading:r,isError:s,isSuccess:n}},"useReadReplicasQuery",0,p])},940009,e=>{"use strict";var t=e.i(632850),a=e.i(72187);e.s(["formatDatabaseID",0,e=>(0,t.default)(e.split("-")??[]),"formatDatabaseRegion",0,e=>(0,t.default)(a.AVAILABLE_REPLICA_REGIONS.find(t=>t.region===e)?.name.split("("))?.split(")")[0]])},973601,e=>{"use strict";var t=e.i(211024),a=e.i(686792),r=e.i(10429);async function s(){let e=await (0,a.fetchHandler)(`${r.BASE_PATH}/api/get-deployment-commit`);return await e.json()}e.s(["useDeploymentCommitQuery",0,({enabled:e=!0,...a}={})=>(0,t.useQuery)({queryKey:["deployment-commit"],queryFn:()=>s(),...a})])},17051,e=>{"use strict";var t=e.i(416340),a=e.i(782933),r=e.i(635494);function s(){let e=(0,r.useIsHighAvailability)(),{isPending:t}=(0,r.useSelectedProjectQuery)();return{isHighAvailability:e,isHighAvailabilityDisabled:!e,isPending:t}}e.s(["useHighAvailability",0,s,"useSchemasFilteredForHighAvailability",0,function(e){let{isHighAvailability:r}=s();return(0,t.useMemo)(()=>{var t;return t=e??[],r?t.filter(e=>e.name!==a.MULTIGRES_SCHEMA_NAME):t},[e,r])}])},247413,e=>{"use strict";var t=e.i(462142);e.s(["useIsDataApiEnabled",0,({projectRef:e,enabled:a=!0})=>{let{data:r,...s}=(0,t.useProjectPostgrestConfigQuery)({projectRef:e},{enabled:a}),n=!!r?.db_schema?.trim();return{...s,data:n,isEnabled:n}}])},719081,939105,42017,e=>{"use strict";var t=e.i(221628),a=e.i(236914);e.i(128328);var r=e.i(947748),s=e.i(416340),n=e.i(980630),o=e.i(966555),i=e.i(533066),l=e.i(323338);function c({visibility:e,folderId:t}){return"project"===e&&t?{ok:!1,error:"Shared snippet cannot be within a folder"}:{ok:!0}}function d(e){return null!=e.content}function u(e,t){let{name:a,description:r,visibility:s,project_id:n,owner_id:o,folder_id:i,content:l,favorite:c}=e;return{id:t,type:e.type,name:a??"Untitled",description:r??"",visibility:s??"user",project_id:n??0,owner_id:o,folder_id:i??void 0,favorite:c??!1,content:{...l,content_id:t}}}e.s(["buildUpsertPayload",0,u,"canEditSnippet",0,function(e,t){return"project"!==e.visibility||e.owner_id===t},"isLoadedSnippet",0,d,"isSnippetOwner",0,function(e,t){return t===e.owner_id},"validateMoveToFolder",0,c],939105);var p=e.i(329736);let m="an unexpected error occurred";var f=e.i(801026),g=e.i(382165),h=e.i(463333);function b(e){return e.metadata?.sqlId??e.id.replace(/^sql-/,"")}let v=({tab:e})=>{let a=(0,g.useSqlEditorV2StateSnapshot)(),r=(0,h.useIsSqlEditorManualSaveEnabled)(),s=a.snippets[b(e)]?.snippet.status;return r&&(0,o.hasUnsavedChanges)(s)?(0,t.jsx)("span",{role:"img","aria-label":"Unsaved changes",className:"block size-2 shrink-0 rounded-full bg-warning"}):null};var y=e.i(420985),S=e.i(718727),x=e.i(874715),_=e.i(686792);async function E({projectRef:e,name:t,parentId:a},r){let s={name:t};a&&(s.parentId=a);let{data:n,error:o}=await (0,_.post)("/platform/projects/{ref}/content/folders",{params:{path:{ref:e}},body:s,signal:r});if(o)throw(0,_.handleError)(o);return n}async function A({projectRef:e,id:t,name:a,parentId:r},s){let n={name:a};r&&(n.parentId=r);let{data:o,error:i}=await (0,_.patch)("/platform/projects/{ref}/content/folders/{id}",{params:{path:{ref:e,id:t}},body:n,signal:s});if(i)throw(0,_.handleError)(i);return o}e.s(["createSQLSnippetFolder",0,E,"useSQLSnippetFolderCreateMutation",0,({onError:e,onSuccess:t,invalidateQueriesOnSuccess:r=!0,...s}={})=>{let o=(0,a.useQueryClient)();return(0,x.useMutation)({mutationFn:e=>E(e),async onSuccess(e,a,s){let{projectRef:n}=a;r&&await o.invalidateQueries({queryKey:S.contentKeys.folders(n)}),await t?.(e,a,s)},async onError(t,a,r){void 0===e?n.toast.error(`Failed to create folder: ${t.message}`):e(t,a,r)},...s})}],42017);var C=e.i(789425),T=e.i(63519);let R=(0,s.createContext)(null);e.s(["SqlEditorSaveCoordinatorProvider",0,function({children:e}){let x=(0,a.useQueryClient)(),_=(0,h.useIsSqlEditorManualSaveEnabled)(),w=(0,s.useRef)("auto");(0,s.useEffect)(()=>{w.current=_?"manual":"auto"},[_]);let[I,j]=(0,C.useLocalStorageQuery)(r.LOCAL_STORAGE_KEYS.SQL_EDITOR_CONFIRM_UNSAVED_CHANGES,!0),k=(0,s.useRef)(I);(0,s.useEffect)(()=>{k.current=I},[I]);let P=(0,s.useMemo)(()=>{let e=function(e){let{state:t,upsertContent:a,createSQLSnippetFolder:r,updateSQLSnippetFolder:s,invalidate:n,notify:c,buildPayload:f=u,debounceMs:g=1e3}=e;async function h(e,r){let s=t.snippets[e]?.snippet;if(void 0===s||!d(s))return{status:"skipped"};let n=f(s,e);try{return s.status=(0,o.statusOnSaveStart)(s.status),await a({projectRef:r,payload:n}),s.status=(0,o.statusOnSaveSuccess)(),{status:"success"}}catch(e){return s.status=(0,o.statusOnSaveError)(s.status),{status:"error",error:e}}}async function b({id:e,projectRef:t,shouldInvalidate:a}){"success"===(await h(e,t)).status&&a&&await n(t)}let v=(0,l.default)(e=>(0,i.default)(b,g));return{saveSnippet:function(e){v(e.id)(e)},saveFavorite:async function({id:e,projectRef:a,previousFavorite:r}){v(e).cancel();let s=await h(e,a);if("success"===s.status)await n(a);else if("error"===s.status){c.error(`Failed to update favorite: ${(0,p.getErrorMessage)(s.error)??m}`);let a=t.snippets[e]?.snippet;a&&(a.favorite=r)}},createFolder:async function({projectRef:e,name:a,placeholderId:s}){try{let n=await r({projectRef:e,name:a});c.success("Successfully created folder"),t.removeFolder(s),t.folders[n.id]={projectRef:e,status:"idle",folder:n}}catch(e){c.error(`Failed to save folder: ${(0,p.getErrorMessage)(e)??m}`),t.removeFolder(s)}},updateFolder:async function({id:e,projectRef:a,name:r}){let n=t.folders[e];if(n)try{await s({projectRef:a,id:e,name:r}),c.success("Successfully updated folder")}catch(e){c.error(`Failed to save folder: ${(0,p.getErrorMessage)(e)??m}`),void 0!==n.previousName&&(n.folder.name=n.previousName)}finally{n.status="idle",n.previousName=void 0}}}}({state:g.sqlEditorState,upsertContent:y.upsertContent,createSQLSnippetFolder:E,updateSQLSnippetFolder:A,notify:n.toast,invalidate:async e=>{await Promise.all([x.invalidateQueries({queryKey:S.contentKeys.count(e,"sql")}),x.invalidateQueries({queryKey:S.contentKeys.sqlSnippets(e)}),x.invalidateQueries({queryKey:S.contentKeys.folders(e)})])}});return{...function({state:e,saveMechanism:t,notify:a,getSaveMode:r=()=>"auto"}){function s(r,s){let n=e.snippets[r];if(void 0===n)return;let{visibility:o,folder_id:i}=n.snippet,l=c({visibility:o,folderId:i});l.ok?t.saveSnippet({id:r,projectRef:n.projectRef,shouldInvalidate:s}):a.error(l.error)}return{start:function(){let a=(0,f.subscribe)(e.needsSaving,()=>{if("auto"===r())for(let[t,a]of Array.from(e.needsSaving.entries()))e.needsSaving.delete(t),s(t,a)}),n=(0,f.subscribe)(e.pendingFolderSaves,()=>{for(let[a]of Array.from(e.pendingFolderSaves.entries()))e.pendingFolderSaves.delete(a),function(a){let r=e.folders[a];if(void 0===r)return;let{projectRef:s,folder:n,status:i}=r;(0,o.isNewFolder)(i)?t.createFolder({projectRef:s,name:n.name,placeholderId:a}):t.updateFolder({id:a,projectRef:s,name:n.name})}(a)});return()=>{a(),n()}},requestSave:function(t){e.needsSaving.delete(t),s(t,!0)}}}({state:g.sqlEditorState,saveMechanism:e,notify:n.toast,getSaveMode:()=>w.current}),saveFavorite:(t,a)=>{let r=g.sqlEditorState.snippets[t];if(!r)return;let s=r.snippet.favorite;a?g.sqlEditorState.addFavorite(t):g.sqlEditorState.removeFavorite(t),e.saveFavorite({id:t,projectRef:r.projectRef,previousFavorite:s})}}},[x]);(0,s.useEffect)(()=>P.start(),[P]);let N=(0,s.useContext)(T.TabsStateContext);return(0,s.useEffect)(()=>{let e=e=>"manual"===w.current&&(0,o.hasUnsavedChanges)(g.sqlEditorState.snippets[b(e)]?.snippet.status);return N.registerTabTypeHandler("sql",{StatusIndicator:v,onClose:t=>{if(!e(t))return;let a=b(t),r=g.sqlEditorState.snippets[a]?.projectRef;g.sqlEditorState.clearSnippetContent(a),x.removeQueries({queryKey:S.contentKeys.resource(r,a)})},confirmClose:t=>{if(!k.current)return null;let a=t.filter(e).length;return 0===a?null:{title:"Unsaved changes",description:1===a?"You have unsaved changes in this SQL snippet. Closing it will discard them.":`You have unsaved changes in ${a} SQL snippets. Closing them will discard those changes.`,optOut:{label:"Don't ask again",onOptOut:()=>j(!1)}}}})},[N,x,j]),(0,s.useEffect)(()=>{let e=e=>{Object.values(g.sqlEditorState.snippets).some(e=>(0,o.hasUnsavedChanges)(e.snippet.status))&&(e.preventDefault(),e.returnValue=!0)};return window.addEventListener("beforeunload",e),()=>window.removeEventListener("beforeunload",e)},[]),(0,t.jsx)(R.Provider,{value:P,children:e})},"useSqlEditorSaveCoordinator",0,function(){let e=(0,s.useContext)(R);if(null===e)throw Error("useSqlEditorSaveCoordinator must be used within a SqlEditorSaveCoordinatorProvider");return e}],719081)},636047,453589,3694,859791,623705,e=>{"use strict";var t,a=e.i(221628),r=e.i(988829),s=e.i(934806),n=e.i(827157),o=e.i(246463),i=e.i(821795),l=e.i(363644);function c(e,t){let a,c;return(a=i.default.env.NEXT_PHASE===l.PHASE_PRODUCTION_BUILD,(c=!!t&&function(e){if(e.$$typeof!==Symbol.for("react.server.reference"))return!1;let{type:t}=function(e){let t=parseInt(e.slice(0,2),16),a=t>>1&63,r=Array(6);for(let e=0;e<6;e++){let t=a>>5-e&1;r[e]=1===t}return{type:1==(t>>7&1)?"use-cache":"server-action",usedArgs:r,hasRestArgs:1==(1&t)}}(e.$$id);return"use-cache"===t}(t))&&o.DEBUG_BUILD&&s.debug.log("Skipping span creation in Cache Components context"),a||c)?t(new n.SentryNonRecordingSpan({traceId:"00000000000000000000000000000000",spanId:"0000000000000000"})):(0,r.startSpan)(e,t)}e.s(["startSpan",0,c],453589),e.i(128328);var d=e.i(298650),u=e.i(416340),p=e.i(801026),m=e.i(813663),f=((t={}).EDIT_CELL_CONTENT="edit_cell_content",t.ADD_ROW="add_row",t.DELETE_ROW="delete_row",t);function g(e){return"delete_row"===e.type}function h(e){return"edit_cell_content"===e.type}e.s(["QueuedOperationType",()=>f,"isAddRowOperation",0,function(e){return"add_row"===e.type},"isDeleteRowOperation",0,g,"isEditCellContentOperation",0,h],3694);var b=e.i(824183);function v(e){return"__tempId"in e&&"string"==typeof e.__tempId}e.s(["isPendingAddRow",0,v,"isPendingDeleteRow",0,function(e){return"__isDeleted"in e&&!0===e.__isDeleted}],859791);var y=e.i(962217),S=e.i(48189);let x="__originalRowIdentifiers";function _(e,t){let a=e[x];return{...(0,S.isObject)(a)?a:t}}function E(e,t){return{...e,[x]:{...t}}}function A(e){if(e.type===f.EDIT_CELL_CONTENT){let{columnName:t,rowIdentifiers:a}=e.payload,r=Object.entries(a).sort(([e],[t])=>e.localeCompare(t)).map(([e,t])=>`${e}:${t}`).join("|");return`${e.type}:${e.tableId}:${t}:${r}`}if(e.type===f.ADD_ROW)return`${e.type}:${e.tableId}:${e.payload.tempId}`;if(e.type===f.DELETE_ROW){let{rowIdentifiers:t}=e.payload,a=Object.entries(t).sort(([e],[t])=>e.localeCompare(t)).map(([e,t])=>`${e}:${t}`).join("|");return`${e.type}:${e.tableId}:${a}`}throw Error(`Unknown operation type: ${e.type}`)}function C(e,t){let a=Object.entries(t);return 0!==a.length&&a.every(([t,a])=>e[t]===a)}function T(e,t){let a=e[x];return C((0,S.isObject)(a)?a:e,t)}e.s(["formatGridDataWithOperationValues",0,({operations:e,rows:t})=>{let a=t.slice();return e.forEach(e=>{if(e.type===f.EDIT_CELL_CONTENT){let{rowIdentifiers:t,columnName:r,newValue:s}=e.payload,n=a.findIndex(e=>T(e,t));-1!==n&&(a[n]=E({...a[n],[r]:s},t))}else if(e.type===f.ADD_ROW){let{tempId:t,rowData:r}=e.payload,s=Number(t),n=a.findIndex(e=>v(e)&&e.__tempId===t);if(n>=0)a[n]={...a[n],...r,__tempId:t};else{let e={...r,idx:s,__tempId:t};a.unshift(e)}}else if(e.type===f.DELETE_ROW){let{rowIdentifiers:t}=e.payload,r=a.findIndex(e=>T(e,t));-1!==r&&(a[r]=E({...a[r],__isDeleted:!0},t))}}),a},"generateTableChangeKey",0,A,"getStableRowIdentifiers",0,_,"queueCellEditWithOptimisticUpdate",0,function({queueOperation:e,tableId:t,table:a,row:r,rowIdentifiers:s,columnName:n,oldValue:o,newValue:i,enumArrayColumns:l}){let c=_(r,s);v(r)&&(c.__tempId=r.__tempId),e({type:f.EDIT_CELL_CONTENT,tableId:t,payload:{rowIdentifiers:c,columnName:n,oldValue:o,newValue:i,table:a,enumArrayColumns:l}})},"queueRowAddWithOptimisticUpdate",0,function({queueOperation:e,tableId:t,table:a,rowData:r,enumArrayColumns:s}){let n=String(-Date.now());e({type:f.ADD_ROW,tableId:t,payload:{tempId:n,rowData:r,table:a,enumArrayColumns:s}})},"queueRowDeletesWithOptimisticUpdate",0,function({rows:e,table:t,queueOperation:a,projectRef:r}){if(!r)return void console.error("Cannot queue row deletes: projectRef is required");if(!(0,y.isTableLike)(t))return void console.error("Cannot queue row deletes: table must be a TableLike entity");if(0===t.primary_keys.length)return void console.error("Cannot queue row deletes: table has no primary keys");for(let r of e){let e={};t.primary_keys.forEach(t=>{e[t.name]=r[t.name]});let s=_(r,e);v(r)&&(s.__tempId=r.__tempId),a({type:f.DELETE_ROW,tableId:t.id,payload:{rowIdentifiers:s,originalRow:r,table:t}})}},"rowMatchesIdentifiers",0,C],623705);let R=()=>{let e=(0,p.proxy)({rowsPerPage:100,setRowsPerPage:t=>{e.rowsPerPage=t},ui:{open:"none"},get sidePanel(){return"side-panel"===e.ui.open?e.ui.sidePanel:void 0},get confirmationDialog(){return"confirmation-dialog"===e.ui.open?e.ui.confirmationDialog:void 0},closeSidePanel:()=>{e.ui={open:"none"}},closeConfirmationDialog:()=>{e.ui={open:"none"}},onAddSchema:()=>{e.ui={open:"side-panel",sidePanel:{type:"schema",mode:"new"}}},onAddTable:t=>{c({name:"table_creator.opened",op:"ui.action"},e=>{e.setAttribute("table_creator.opened",1)}),e.ui={open:"side-panel",sidePanel:{type:"table",mode:"new",templateData:t}}},onEditTable:()=>{e.ui={open:"side-panel",sidePanel:{type:"table",mode:"edit"}}},onDuplicateTable:()=>{e.ui={open:"side-panel",sidePanel:{type:"table",mode:"duplicate"}}},onDeleteTable:()=>{e.ui={open:"confirmation-dialog",confirmationDialog:{type:"table",isDeleteWithCascade:!1}}},onDeleteView:()=>{e.ui={open:"confirmation-dialog",confirmationDialog:{type:"view",isDeleteWithCascade:!1}}},onDeleteMaterializedView:()=>{e.ui={open:"confirmation-dialog",confirmationDialog:{type:"materialized-view",isDeleteWithCascade:!1}}},onAddColumn:()=>{e.ui={open:"side-panel",sidePanel:{type:"column"}}},onEditColumn:t=>{e.ui={open:"side-panel",sidePanel:{type:"column",column:t}}},onDeleteColumn:t=>{e.ui={open:"confirmation-dialog",confirmationDialog:{type:"column",column:t,isDeleteWithCascade:!1}}},onAddRow:()=>{e.ui={open:"side-panel",sidePanel:{type:"row"}}},onEditRow:t=>{e.ui={open:"side-panel",sidePanel:{type:"row",row:t}}},onDeleteRows:(t,a={numRows:0,allRowsSelected:!1,callback:()=>{}})=>{let{numRows:r,allRowsSelected:s,callback:n}=a;e.ui={open:"confirmation-dialog",confirmationDialog:{type:"row",rows:t,numRows:r,allRowsSelected:s,callback:n}}},onExpandJSONEditor:t=>{e.ui={open:"side-panel",sidePanel:{type:"json",jsonValue:t}}},onExpandTextEditor:(t,a)=>{e.ui={open:"side-panel",sidePanel:{type:"cell",value:{column:t,row:a}}}},onEditForeignKeyColumnValue:t=>{e.ui={open:"side-panel",sidePanel:{type:"foreign-row-selector",foreignKey:t}}},onImportData:t=>{e.ui={open:"side-panel",sidePanel:{type:"csv-import",file:t}}},toggleViewOperationQueue:()=>{"side-panel"===e.ui.open&&"operation-queue"===e.ui.sidePanel.type?e.closeSidePanel():e.ui={open:"side-panel",sidePanel:{type:"operation-queue"}}},toggleConfirmationIsWithCascade:t=>{"confirmation-dialog"===e.ui.open&&("column"===e.ui.confirmationDialog.type||"table"===e.ui.confirmationDialog.type||"view"===e.ui.confirmationDialog.type||"materialized-view"===e.ui.confirmationDialog.type)&&(e.ui.confirmationDialog.isDeleteWithCascade=t??!e.ui.confirmationDialog.isDeleteWithCascade)},operationQueue:{operations:[],status:"idle"},queueOperation:t=>{let a=()=>{0===e.operationQueue.operations.length?e.operationQueue.status="idle":"idle"===e.operationQueue.status&&(e.operationQueue.status="pending")};if(t.type===f.DELETE_ROW){let r=function(e,t){let a=t.payload.rowIdentifiers,r=t.payload.originalRow;if(v(r)){let a=r.__tempId,s=A({type:f.ADD_ROW,tableId:t.tableId,payload:{tempId:a,rowData:r,table:t.payload.table}});return{action:"skip",filteredOperations:e.filter(e=>e.id!==s).filter(e=>!h(e)||e.payload.rowIdentifiers.__tempId!==a)}}return{action:"add",filteredOperations:e.filter(e=>{var r;return r=t.tableId,!(e.tableId===r&&(e.type===f.EDIT_CELL_CONTENT||e.type===f.DELETE_ROW)&&C(e.payload.rowIdentifiers,a))})}}(e.operationQueue.operations,t);if(e.operationQueue.operations=r.filteredOperations,"skip"===r.action)return void a()}if(t.type===f.EDIT_CELL_CONTENT){let r=function(e,t){let a=t.payload.rowIdentifiers;if(e.filter(g).some(e=>e.tableId===t.tableId&&Object.entries(e.payload.rowIdentifiers).every(([e,t])=>a[e]===t)))return{action:"reject",reason:"Cannot edit a cell on a row that is pending deletion. Remove the delete operation first."};let r=a.__tempId;if(r){let a=e.findIndex(e=>e.type===f.ADD_ROW&&e.tableId===t.tableId&&e.payload.tempId===r);if(a>=0){let r=[...e],s=r[a];if(s.type===f.ADD_ROW){let e={...s.payload};e.rowData={...e.rowData,[t.payload.columnName]:t.payload.newValue},r[a]={...s,payload:e,timestamp:Date.now()}}return{action:"merge",updatedOperations:r}}}return{action:"add"}}(e.operationQueue.operations,t);if("reject"===r.action)return void console.warn(r.reason);if("merge"===r.action){e.operationQueue.operations=r.updatedOperations,a();return}}let{operations:r}=function(e,t){let a=A(t),r=e.findIndex(e=>e.id===a),s={...t,id:a,timestamp:Date.now()};if(r>=0){let t=[...e],a=e[r];if(s.type===f.EDIT_CELL_CONTENT&&a.type===f.EDIT_CELL_CONTENT){s.payload.oldValue=a.payload.oldValue;let{oldValue:e,newValue:n}=s.payload;if("number"==typeof e&&Number(e)===Number(n)||"object"==typeof n&&(0,b.default)((0,S.tryParseJson)(e),n)||e===n)return t.splice(r,1),{operations:t}}return t[r]=s,{operations:t}}return{operations:[...e,s]}}(e.operationQueue.operations,t);e.operationQueue.operations=r,a()},clearQueue:()=>{e.operationQueue.operations=[],e.operationQueue.status="idle"},removeOperation:t=>{e.operationQueue.operations=e.operationQueue.operations.filter(e=>e.id!==t),0===e.operationQueue.operations.length&&(e.operationQueue.status="idle")},undoLatestOperation:()=>{e.operationQueue.operations=e.operationQueue.operations.slice(0,-1),0===e.operationQueue.operations.length&&(e.operationQueue.status="idle")},setQueueStatus:t=>{e.operationQueue.status=t},get hasPendingOperations(){return e.operationQueue.operations.length>0},hasPendingCellChange:(t,a,r)=>{let s=A({type:f.EDIT_CELL_CONTENT,tableId:t,payload:{columnName:r,rowIdentifiers:a}});return e.operationQueue.operations.some(e=>e.id===s)},tablesToIgnorePreflightCheck:[],setTableToIgnorePreflightCheck:t=>{let a=new Set(e.tablesToIgnorePreflightCheck);a.add(t),e.tablesToIgnorePreflightCheck=[...a]}});return e},w=(0,u.createContext)(R());e.s(["TABLE_EDITOR_DEFAULT_ROWS_PER_PAGE",0,100,"TableEditorStateContext",0,w,"TableEditorStateContextProvider",0,({children:e})=>{let t=(0,d.useConstant)(R);return(0,a.jsx)(w.Provider,{value:t,children:e})},"useTableEditorStateSnapshot",0,e=>{let t=(0,u.useContext)(w);return(0,m.useSnapshot)(t,e)}],636047)},63519,e=>{"use strict";var t=e.i(221628);e.i(128328);var a=e.i(524906),r=e.i(158639),s=e.i(572617),n=e.i(416340),o=e.i(801026),i=e.i(813663),l=e.i(19583);let c={table:["r","v","m","f","p"],sql:["sql"],explorer:["notebook","query","chat"]},d="explorer-home",u=e=>`supabase_recent_items_${e}`,p=()=>({activeTab:null,openTabs:[],tabsMap:{},previewTabId:void 0,recentItems:[]}),m=e=>`supabase_studio_tabs_${e}`,f=e=>e.label||e.metadata?.name||"Untitled",g=(e,t)=>{let a=f(t);e.label=a,e.metadata={...e.metadata,...t.metadata,name:a}};function h(e){let t=function(e){if(!e)return[];let t=a.safeLocalStorage.getItem(u(e));try{return JSON.parse(t??'{"items": []}').items}catch(e){return[]}}(e),{openTabs:r,activeTab:n,tabsMap:i,previewTabId:d}=function(e){if(!e)return p();let t=a.safeLocalStorage.getItem(m(e));if(!t)return p();try{let e=JSON.parse(t??JSON.stringify(p()));if(!e.openTabs||!Array.isArray(e.openTabs)||!e.tabsMap||"object"!=typeof e.tabsMap)return p();return e}catch(e){return p()}}(e),h=new Map,b=(0,o.proxy)({recentItems:t,addRecentItem:e=>{let t=b.recentItems.find(t=>t.id===e.id);if(t){t.timestamp=Date.now(),g(t,e);return}let a={id:e.id,type:e.type,label:f(e),timestamp:Date.now(),metadata:e.metadata};b.recentItems.unshift(a);let[r,n]=(0,s.default)(b.recentItems,e=>{if(c.table.includes(e.type))return e});b.recentItems=[...r.slice(0,8),...n]},clearRecentItems:()=>{b.recentItems=[]},removeRecentItem:e=>{b.recentItems=b.recentItems.filter(t=>t.id!==e)},removeRecentItems:e=>{b.recentItems=b.recentItems.filter(t=>!e.includes(t.id))},removeRecentItemsByType:e=>{b.recentItems=b.recentItems.filter(t=>t.type!==e)},getRecentItemsByType:e=>b.recentItems.filter(t=>t.type===e),activeTab:n,openTabs:r,tabsMap:i,previewTabId:d,hasTab:e=>!!b.tabsMap[e],addTab:e=>{if(!b.tabsMap[e.id]||b.activeTab!==e.id){if(b.tabsMap[e.id]){b.activeTab=e.id,e.isPreview||b.addRecentItem(e);return}if(!1===e.isPreview){b.openTabs=[...b.openTabs,e.id],b.tabsMap[e.id]=e,b.activeTab=e.id,b.addRecentItem(e);return}b.previewTabId&&(b.openTabs=b.openTabs.filter(e=>e!==b.previewTabId),delete b.tabsMap[b.previewTabId]),b.tabsMap[e.id]={...e,isPreview:!0},b.openTabs=[...b.openTabs,e.id],b.previewTabId=e.id,b.activeTab=e.id}},ensurePinnedTab:e=>{b.tabsMap[e.id]||(b.tabsMap[e.id]=e,b.openTabs=[e.id,...b.openTabs])},activatePinnedTab:e=>{b.ensurePinnedTab(e),b.activeTab=e.id},updateTab:(e,t)=>{let a=b.tabsMap[e];if(a){if("label"in t){a.label=t.label,"string"==typeof t.label&&a.metadata&&(a.metadata.name=t.label);let r=b.recentItems.find(t=>t.id===e);r&&g(r,a)}if("scrollTop"in t&&a.metadata&&(a.metadata.scrollTop=t.scrollTop),void 0!==t.sqlSource){a.metadata?a.metadata.sqlSource=t.sqlSource:a.metadata={sqlSource:t.sqlSource};let r=b.recentItems.find(t=>t.id===e);r&&g(r,a)}}},removeTab:e=>{if(b.tabsMap[e]?.closable===!1)return;let t=b.openTabs.indexOf(e);b.openTabs=b.openTabs.filter(t=>t!==e),delete b.tabsMap[e],b.previewTabId===e&&(b.previewTabId=void 0),e===b.activeTab&&(b.activeTab=b.openTabs[t-1]||b.openTabs[t+1]||null)},removeTabs:e=>{e.length&&e.forEach(e=>b.removeTab(e))},reorderTabs:(e,t)=>{let a=[...b.openTabs],[r]=a.splice(e,1);a.splice(t,0,r),b.openTabs=a},makeTabActive:e=>{let t=b.tabsMap[e];t&&(b.activeTab=t.id)},makeTabPermanent:e=>{let t=b.tabsMap[e];t?.isPreview&&(t.isPreview=!1,b.previewTabId=void 0,b.addRecentItem(t))},makeActiveTabPermanent:()=>!!(b.activeTab&&b.tabsMap[b.activeTab]?.isPreview)&&(b.makeTabPermanent(b.activeTab),!0),handleTabNavigation:(e,t)=>{let a=b.tabsMap[e];if(a)switch(b.activeTab=e,!a.isPreview&&!1!==a.closable&&b.addRecentItem(a),a.type){case"sql":let r=t.query.schema||"public";t.push(`/project/${t.query.ref}/sql/${a.metadata?.sqlId}?schema=${r}`);break;case"notebook":t.push(`/project/${t.query.ref}/explorer/notebook/${a.metadata?.notebookId}`);break;case"query":t.push(`/project/${t.query.ref}/explorer/query/${a.metadata?.queryId}`);break;case"chat":t.push(`/project/${t.query.ref}/explorer/chat/${a.metadata?.chatId}`);break;case"explorer-home":t.push(`/project/${t.query.ref}/explorer`);break;case"r":case"v":case"m":case"f":case"p":t.push((0,l.buildTableEditorUrl)({projectRef:t.query.ref,tableId:a.metadata?.tableId,schema:a.metadata?.schema}))}},handlerRegistrationVersion:0,registerTabTypeHandler:(e,t)=>(h.set(e,t),b.handlerRegistrationVersion++,()=>{h.get(e)===t&&(h.delete(e),b.handlerRegistrationVersion++)}),getTabStatusIndicator:e=>h.get(e)?.StatusIndicator,getCloseConfirmation:e=>{let t=new Map;for(let a of e){let e=b.tabsMap[a];if(!e)continue;let r=t.get(e.type);r?r.push(e):t.set(e.type,[e])}for(let[e,a]of t){let t=h.get(e)?.confirmClose?.(a);if(t)return t}return null},closeTabs:e=>{let t=e.map(e=>b.tabsMap[e]).filter(e=>void 0!==e&&!1!==e.closable);b.removeTabs(t.map(e=>e.id)),t.forEach(e=>h.get(e.type)?.onClose?.(e))},handleTabClose:({id:e,router:t,editor:a,onClose:r,onClearDashboardHistory:s})=>{let n=b.tabsMap[e],o=(a?Object.values(b.tabsMap).filter(e=>c[a]?.includes(e.type)):[]).map(e=>e.id),i=o.indexOf(e),l=i===o.length-1,d=1===o.length?void 0:l?o[i-1]:o[i+1],{[e]:u,...p}=b.tabsMap;if(b.tabsMap=p,n){let t=[...b.openTabs].filter(t=>t!==e);b.openTabs=t}if(b.previewTabId===e&&(b.previewTabId=void 0),b.activeTab===e||"new"===e)if(d)b.activeTab=d,b.handleTabNavigation(d,t);else switch(s(),n?.type){case"sql":t.push(`/project/${t.query.ref}/sql`);break;case"notebook":case"query":case"chat":t.push(`/project/${t.query.ref}/explorer`);break;case"r":case"v":case"m":case"f":case"p":t.push(`/project/${t.query.ref}/editor`);break;default:t.push(`/project/${t.query.ref}/${"table"===a?"editor":"sql"}`)}r?.(e),n&&h.get(n.type)?.onClose?.(n)},handleTabCloseAll:({editor:e,router:t,onClearDashboardHistory:a})=>{let r=b.openTabs.filter(t=>{let a=b.tabsMap[t];return void 0!==a&&c[e].includes(a.type)});b.closeTabs(r),a(),t.push(`/project/${t.query.ref}/${"table"===e?"editor":e}`)},handleTabDragEnd:(e,t,a,r)=>{let s=b.tabsMap[a];s?.isPreview&&b.makeTabPermanent(a);let n=[...b.openTabs];n.splice(e,1),n.splice(t,0,a),b.openTabs=n,b.activeTab=a,b.handleTabNavigation(a,r)}});return b}let b=(0,n.createContext)(h(""));e.s(["EXPLORER_HOME_TAB",0,{id:d,type:"explorer-home",label:"Home",isPreview:!1,closable:!1},"EXPLORER_HOME_TAB_ID",0,d,"TabsStateContext",0,b,"TabsStateContextProvider",0,({children:e})=>{let{ref:s}=(0,r.useParams)(),[i,l]=(0,n.useState)(h(s??""));return(0,n.useEffect)(()=>{s&&l(h(s??""))},[s]),(0,n.useEffect)(()=>{if(s)return(0,o.subscribe)(i,()=>{a.safeLocalStorage.setItem(m(s),JSON.stringify({activeTab:i.activeTab,openTabs:i.openTabs,tabsMap:i.tabsMap,previewTabId:i.previewTabId})),a.safeLocalStorage.setItem(u(s),JSON.stringify({items:i.recentItems}))})},[s,i]),(0,t.jsx)(b.Provider,{value:i,children:e})},"createTabId",0,function(e,t){switch(e){case"r":return`r-${t.id}`;case"v":return`v-${t.id}`;case"m":return`m-${t.id}`;case"f":return`f-${t.id}`;case"p":return`p-${t.id}`;case"sql":return`sql-${t.id}`;case"notebook":return`notebook-${t.id}`;case"query":return`query-${t.id}`;case"chat":return`chat-${t.id}`;default:return""}},"editorEntityTypes",0,c,"useTabsStateSnapshot",0,e=>{let t=(0,n.useContext)(b);return(0,i.useSnapshot)(t,e)}])},611017,e=>{"use strict";function t(e){return(t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}e.s(["default",()=>t])},588264,e=>{"use strict";var t=e.i(416340),a=e.i(174617),r=e.i(78892),s=e.i(608652),n=e.i(600317),o=e.i(142953),i=e.i(199786),l=e.i(974539),c=e.i(692166),d=e.i(300792),u=e.i(169525),p=e.i(221628),m="Radio",[f,g]=(0,s.createContextScope)(m),[h,b]=f(m),v=t.forwardRef((e,s)=>{let{__scopeRadio:o,name:i,checked:l=!1,required:c,disabled:d,value:u="on",onCheck:m,form:f,...g}=e,[b,v]=t.useState(null),y=(0,r.useComposedRefs)(s,e=>v(e)),S=t.useRef(!1),E=!b||f||!!b.closest("form");return(0,p.jsxs)(h,{scope:o,checked:l,disabled:d,children:[(0,p.jsx)(n.Primitive.button,{type:"button",role:"radio","aria-checked":l,"data-state":_(l),"data-disabled":d?"":void 0,disabled:d,value:u,...g,ref:y,onClick:(0,a.composeEventHandlers)(e.onClick,e=>{l||m?.(),E&&(S.current=e.isPropagationStopped(),S.current||e.stopPropagation())})}),E&&(0,p.jsx)(x,{control:b,bubbles:!S.current,name:i,value:u,checked:l,required:c,disabled:d,form:f,style:{transform:"translateX(-100%)"}})]})});v.displayName=m;var y="RadioIndicator",S=t.forwardRef((e,t)=>{let{__scopeRadio:a,forceMount:r,...s}=e,o=b(y,a);return(0,p.jsx)(u.Presence,{present:r||o.checked,children:(0,p.jsx)(n.Primitive.span,{"data-state":_(o.checked),"data-disabled":o.disabled?"":void 0,...s,ref:t})})});S.displayName=y;var x=t.forwardRef(({__scopeRadio:e,control:a,checked:s,bubbles:o=!0,...i},l)=>{let u=t.useRef(null),m=(0,r.useComposedRefs)(u,l),f=(0,d.usePrevious)(s),g=(0,c.useSize)(a);return t.useEffect(()=>{let e=u.current;if(!e)return;let t=Object.getOwnPropertyDescriptor(window.HTMLInputElement.prototype,"checked").set;if(f!==s&&t){let a=new Event("click",{bubbles:o});t.call(e,s),e.dispatchEvent(a)}},[f,s,o]),(0,p.jsx)(n.Primitive.input,{type:"radio","aria-hidden":!0,defaultChecked:s,...i,tabIndex:-1,ref:m,style:{...i.style,...g,position:"absolute",pointerEvents:"none",opacity:0,margin:0}})});function _(e){return e?"checked":"unchecked"}x.displayName="RadioBubbleInput";var E=["ArrowUp","ArrowDown","ArrowLeft","ArrowRight"],A="RadioGroup",[C,T]=(0,s.createContextScope)(A,[o.createRovingFocusGroupScope,g]),R=(0,o.createRovingFocusGroupScope)(),w=g(),[I,j]=C(A),k=t.forwardRef((e,t)=>{let{__scopeRadioGroup:a,name:r,defaultValue:s,value:c,required:d=!1,disabled:u=!1,orientation:m,dir:f,loop:g=!0,onValueChange:h,...b}=e,v=R(a),y=(0,l.useDirection)(f),[S,x]=(0,i.useControllableState)({prop:c,defaultProp:s??null,onChange:h,caller:A});return(0,p.jsx)(I,{scope:a,name:r,required:d,disabled:u,value:S,onValueChange:x,children:(0,p.jsx)(o.Root,{asChild:!0,...v,orientation:m,dir:y,loop:g,children:(0,p.jsx)(n.Primitive.div,{role:"radiogroup","aria-required":d,"aria-orientation":m,"data-disabled":u?"":void 0,dir:y,...b,ref:t})})})});k.displayName=A;var P="RadioGroupItem",N=t.forwardRef((e,s)=>{let{__scopeRadioGroup:n,disabled:i,...l}=e,c=j(P,n),d=c.disabled||i,u=R(n),m=w(n),f=t.useRef(null),g=(0,r.useComposedRefs)(s,f),h=c.value===l.value,b=t.useRef(!1);return t.useEffect(()=>{let e=e=>{E.includes(e.key)&&(b.current=!0)},t=()=>b.current=!1;return document.addEventListener("keydown",e),document.addEventListener("keyup",t),()=>{document.removeEventListener("keydown",e),document.removeEventListener("keyup",t)}},[]),(0,p.jsx)(o.Item,{asChild:!0,...u,focusable:!d,active:h,children:(0,p.jsx)(v,{disabled:d,required:c.required,checked:h,...m,...l,name:c.name,ref:g,onCheck:()=>c.onValueChange(l.value),onKeyDown:(0,a.composeEventHandlers)(e=>{"Enter"===e.key&&e.preventDefault()}),onFocus:(0,a.composeEventHandlers)(l.onFocus,()=>{b.current&&f.current?.click()})})})});N.displayName=P;var L=t.forwardRef((e,t)=>{let{__scopeRadioGroup:a,...r}=e,s=w(a);return(0,p.jsx)(S,{...s,...r,ref:t})});L.displayName="RadioGroupIndicator",e.s(["Indicator",0,L,"Item",0,N,"RadioGroup",0,k,"RadioGroupIndicator",0,L,"RadioGroupItem",0,N,"Root",0,k,"createRadioGroupScope",0,T],757432);var U=e.i(757432);e.s(["RadioGroup",0,U],588264)},142953,e=>{"use strict";var t=e.i(416340),a=e.i(174617),r=e.i(508785),s=e.i(78892),n=e.i(608652),o=e.i(40266),i=e.i(600317),l=e.i(886449),c=e.i(199786),d=e.i(974539),u=e.i(221628),p="rovingFocusGroup.onEntryFocus",m={bubbles:!1,cancelable:!0},f="RovingFocusGroup",[g,h,b]=(0,r.createCollection)(f),[v,y]=(0,n.createContextScope)(f,[b]),[S,x]=v(f),_=t.forwardRef((e,t)=>(0,u.jsx)(g.Provider,{scope:e.__scopeRovingFocusGroup,children:(0,u.jsx)(g.Slot,{scope:e.__scopeRovingFocusGroup,children:(0,u.jsx)(E,{...e,ref:t})})}));_.displayName=f;var E=t.forwardRef((e,r)=>{let{__scopeRovingFocusGroup:n,orientation:o,loop:g=!1,dir:b,currentTabStopId:v,defaultCurrentTabStopId:y,onCurrentTabStopIdChange:x,onEntryFocus:_,preventScrollOnEntryFocus:E=!1,...A}=e,C=t.useRef(null),T=(0,s.useComposedRefs)(r,C),w=(0,d.useDirection)(b),[I,j]=(0,c.useControllableState)({prop:v,defaultProp:y??null,onChange:x,caller:f}),[k,P]=t.useState(!1),N=(0,l.useCallbackRef)(_),L=h(n),U=t.useRef(!1),[D,O]=t.useState(0);return t.useEffect(()=>{let e=C.current;if(e)return e.addEventListener(p,N),()=>e.removeEventListener(p,N)},[N]),(0,u.jsx)(S,{scope:n,orientation:o,dir:w,loop:g,currentTabStopId:I,onItemFocus:t.useCallback(e=>j(e),[j]),onItemShiftTab:t.useCallback(()=>P(!0),[]),onFocusableItemAdd:t.useCallback(()=>O(e=>e+1),[]),onFocusableItemRemove:t.useCallback(()=>O(e=>e-1),[]),children:(0,u.jsx)(i.Primitive.div,{tabIndex:k||0===D?-1:0,"data-orientation":o,...A,ref:T,style:{outline:"none",...e.style},onMouseDown:(0,a.composeEventHandlers)(e.onMouseDown,()=>{U.current=!0}),onFocus:(0,a.composeEventHandlers)(e.onFocus,e=>{let t=!U.current;if(e.target===e.currentTarget&&t&&!k){let t=new CustomEvent(p,m);if(e.currentTarget.dispatchEvent(t),!t.defaultPrevented){let e=L().filter(e=>e.focusable);R([e.find(e=>e.active),e.find(e=>e.id===I),...e].filter(Boolean).map(e=>e.ref.current),E)}}U.current=!1}),onBlur:(0,a.composeEventHandlers)(e.onBlur,()=>P(!1))})})}),A="RovingFocusGroupItem",C=t.forwardRef((e,r)=>{let{__scopeRovingFocusGroup:s,focusable:n=!0,active:l=!1,tabStopId:c,children:d,...p}=e,m=(0,o.useId)(),f=c||m,b=x(A,s),v=b.currentTabStopId===f,y=h(s),{onFocusableItemAdd:S,onFocusableItemRemove:_,currentTabStopId:E}=b;return t.useEffect(()=>{if(n)return S(),()=>_()},[n,S,_]),(0,u.jsx)(g.ItemSlot,{scope:s,id:f,focusable:n,active:l,children:(0,u.jsx)(i.Primitive.span,{tabIndex:v?0:-1,"data-orientation":b.orientation,...p,ref:r,onMouseDown:(0,a.composeEventHandlers)(e.onMouseDown,e=>{n?b.onItemFocus(f):e.preventDefault()}),onFocus:(0,a.composeEventHandlers)(e.onFocus,()=>b.onItemFocus(f)),onKeyDown:(0,a.composeEventHandlers)(e.onKeyDown,e=>{if("Tab"===e.key&&e.shiftKey)return void b.onItemShiftTab();if(e.target!==e.currentTarget)return;let t=function(e,t,a){var r;let s=(r=e.key,"rtl"!==a?r:"ArrowLeft"===r?"ArrowRight":"ArrowRight"===r?"ArrowLeft":r);if(!("vertical"===t&&["ArrowLeft","ArrowRight"].includes(s))&&!("horizontal"===t&&["ArrowUp","ArrowDown"].includes(s)))return T[s]}(e,b.orientation,b.dir);if(void 0!==t){if(e.metaKey||e.ctrlKey||e.altKey||e.shiftKey)return;e.preventDefault();let s=y().filter(e=>e.focusable).map(e=>e.ref.current);if("last"===t)s.reverse();else if("prev"===t||"next"===t){var a,r;"prev"===t&&s.reverse();let n=s.indexOf(e.currentTarget);s=b.loop?(a=s,r=n+1,a.map((e,t)=>a[(r+t)%a.length])):s.slice(n+1)}setTimeout(()=>R(s))}}),children:"function"==typeof d?d({isCurrentTabStop:v,hasTabStop:null!=E}):d})})});C.displayName=A;var T={ArrowLeft:"prev",ArrowUp:"prev",ArrowRight:"next",ArrowDown:"next",PageUp:"first",Home:"first",PageDown:"last",End:"last"};function R(e,t=!1){let a=document.activeElement;for(let r of e)if(r===a||(r.focus({preventScroll:t}),document.activeElement!==a))return}e.s(["Item",0,C,"Root",0,_,"createRovingFocusGroupScope",0,y])},246463,e=>{"use strict";let t="u"<typeof __SENTRY_DEBUG__||__SENTRY_DEBUG__;e.s(["DEBUG_BUILD",0,t])},356102,(e,t,a)=>{"u">typeof window&&(window.global=window.global||window);var r,s,n={randomBytes:e.r(565534)},o=t.exports,i=function(){(void 0===r||r>=s.length)&&(r=0,s=n.randomBytes(256));var e=s[r];return r+=1,e},l=function(e){for(var t=i();t>=256-256%e;)t=i();return t%e},c=/[ilLI|`oO0]/g,d=[{name:"lowercase",rule:/[a-z]/},{name:"uppercase",rule:/[A-Z]/},{name:"numbers",rule:/[0-9]/},{name:"symbols",rule:/[!@#$%^&*()+_\-=}{[\]|:;"/?.><,`~]/}],u=function(e,t){for(var a="",r=e.length,s=t.length,n=0;n<r;n++)a+=t[l(s)];return e.strict&&!d.every(function(t){return!1==e[t.name]||("symbols"===t.name&&"string"==typeof e[t.name]?RegExp("["+e[t.name]+"]").test(a):t.rule.test(a))})?u(e,t):a};o.generate=function(e){if(e=e||{},Object.prototype.hasOwnProperty.call(e,"length")||(e.length=10),Object.prototype.hasOwnProperty.call(e,"numbers")||(e.numbers=!1),Object.prototype.hasOwnProperty.call(e,"symbols")||(e.symbols=!1),Object.prototype.hasOwnProperty.call(e,"exclude")||(e.exclude=""),Object.prototype.hasOwnProperty.call(e,"uppercase")||(e.uppercase=!0),Object.prototype.hasOwnProperty.call(e,"lowercase")||(e.lowercase=!0),Object.prototype.hasOwnProperty.call(e,"excludeSimilarCharacters")||(e.excludeSimilarCharacters=!1),Object.prototype.hasOwnProperty.call(e,"strict")||(e.strict=!1),e.strict&&1+ +!!e.numbers+ +!!e.symbols+ +!!e.uppercase>e.length)throw TypeError("Length must correlate with strict guidelines");var t="";if(e.lowercase&&(t+="abcdefghijklmnopqrstuvwxyz"),e.uppercase&&(t+="ABCDEFGHIJKLMNOPQRSTUVWXYZ"),e.numbers&&(t+="0123456789"),e.symbols&&("string"==typeof e.symbols?t+=e.symbols:t+='!@#$%^&*()+_-=}{[]|:;"/?.><,`~'),!t)throw TypeError("At least one rule for pools must be true");e.excludeSimilarCharacters&&(t=t.replace(c,""));for(var a=e.exclude.length;a--;)t=t.replace(e.exclude[a],"");return u(e,t)},o.generateMultiple=function(e,t){for(var a=[],r=0;r<e;r++)a[r]=o.generate(t);return a}},836110,(e,t,a)=>{t.exports=e.r(356102)},900943,727060,379606,e=>{"use strict";var t=e.i(221628),a=e.i(937942),r=e.i(10429);let s=()=>(0,t.jsxs)("p",{className:"mb-2 text-warning",children:["Note: If using the Postgres connection string, you will need to"," ",(0,t.jsx)(a.InlineLink,{href:r.SPECIAL_SYMBOLS_IN_PASSWORDS_DOCS_URL,children:"percent-encode"})," the password"]});var n=e.i(837508);function o(e){try{return e!==encodeURIComponent(e)}catch{return!0}}async function i(t){let a=await e.A(232472).then(e=>e.default),r="",s="",o=0;if(t&&""!==t)if(t.length>99)r=`${n.PASSWORD_STRENGTH[0]} Maximum length of password exceeded`,s="Password should be less than 100 characters";else{let e=a(t),i=e?.score??0,l=n.PASSWORD_STRENGTH[i],c=e.feedback?.suggestions?.join(" ")??"";r=`${l} ${c}`,o=i,i<n.DEFAULT_MINIMUM_PASSWORD_STRENGTH&&(s=`${e?.feedback?.warning?e?.feedback?.warning+".":""} You need a stronger password.`)}return{message:r,warning:s,strength:o}}e.s(["passwordNeedsPercentEncoding",0,o,"passwordStrength",0,i],727060),e.s(["PasswordStrengthBar",0,({passwordStrengthScore:e=0,passwordStrengthMessage:r="",password:i="",generateStrongPassword:l})=>(0,t.jsxs)(t.Fragment,{children:[o(i)&&(0,t.jsx)(s,{}),i&&(0,t.jsx)("div",{"aria-valuemax":100,"aria-valuemin":0,"aria-valuenow":n.PASSWORD_STRENGTH_PERCENTAGE[e],"aria-valuetext":`${n.PASSWORD_STRENGTH_PERCENTAGE[e]}%`,role:"progressbar",className:"mb-2 overflow-hidden transition-all border rounded-sm bg-200 w-full",children:(0,t.jsx)("div",{style:{width:`${n.PASSWORD_STRENGTH_PERCENTAGE[e]}%`},className:`relative h-1 w-full ${n.PASSWORD_STRENGTH_COLOR[e]} transition-all duration-500 ease-out shadow-inner`})}),(0,t.jsxs)("p",{children:[(r||"This is the password to your Postgres database, so it must be strong and hard to guess.")+" ",(0,t.jsx)("button",{type:"button",tabIndex:0,className:a.InlineLinkClassName,onClick:l,children:"Generate a password"}),"."]})]})],900943);var l=e.i(836110);e.s(["generateStrongPassword",0,()=>l.default.generate({length:16,numbers:!0,uppercase:!0})],379606)},291996,(e,t,a)=>{t.exports=function(e,t,a){var r=-1,s=e.length;t<0&&(t=-t>s?0:s+t),(a=a>s?s:a)<0&&(a+=s),s=t>a?0:a-t>>>0,t>>>=0;for(var n=Array(s);++r<s;)n[r]=e[r+t];return n}},8755,(e,t,a)=>{var r=e.r(291996);t.exports=function(e,t,a){var s=e.length;return a=void 0===a?s:a,!t&&a>=s?e:r(e,t,a)}},364927,(e,t,a)=>{var r=RegExp("[\\u200d\\ud800-\\udfff\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff\\ufe0e\\ufe0f]");t.exports=function(e){return r.test(e)}},256779,(e,t,a)=>{t.exports=function(e){return e.split("")}},19728,(e,t,a)=>{var r="\\ud800-\\udfff",s="[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]",n="\\ud83c[\\udffb-\\udfff]",o="[^"+r+"]",i="(?:\\ud83c[\\udde6-\\uddff]){2}",l="[\\ud800-\\udbff][\\udc00-\\udfff]",c="(?:"+s+"|"+n+")?",d="[\\ufe0e\\ufe0f]?",u="(?:\\u200d(?:"+[o,i,l].join("|")+")"+d+c+")*",p=RegExp(n+"(?="+n+")|"+("(?:"+[o+s+"?",s,i,l,"["+r+"]"].join("|"))+")"+(d+c+u),"g");t.exports=function(e){return e.match(p)||[]}},136144,(e,t,a)=>{var r=e.r(256779),s=e.r(364927),n=e.r(19728);t.exports=function(e){return s(e)?n(e):r(e)}},504442,(e,t,a)=>{var r=e.r(8755),s=e.r(364927),n=e.r(136144),o=e.r(213296);t.exports=function(e){return function(t){var a=s(t=o(t))?n(t):void 0,i=a?a[0]:t.charAt(0),l=a?r(a,1).join(""):t.slice(1);return i[e]()+l}}},970818,(e,t,a)=>{t.exports=e.r(947453)(Object.getPrototypeOf,Object)},764001,(e,t,a)=>{var r=e.r(924519),s=e.r(970818),n=e.r(460779),o=Object.prototype,i=Function.prototype.toString,l=o.hasOwnProperty,c=i.call(Object);t.exports=function(e){if(!n(e)||"[object Object]"!=r(e))return!1;var t=s(e);if(null===t)return!0;var a=l.call(t,"constructor")&&t.constructor;return"function"==typeof a&&a instanceof a&&i.call(a)==c}},632850,(e,t,a)=>{t.exports=function(e){var t=null==e?0:e.length;return t?e[t-1]:void 0}},769817,e=>{"use strict";var t=e.i(771535);let a={name:"box",size:24,node:[["path",{d:"M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z",key:"hh9hay"}],["path",{d:"m3.3 7 8.7 5 8.7-5",key:"g66t2b"}],["path",{d:"M12 22V12",key:"d0xqtd"}]]};a.node;let r=(0,t.default)(a);e.s(["BoxIcon",0,r],769817)},905255,e=>{"use strict";var t=e.i(771535);let a={name:"check",size:24,node:[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]]};a.node;let r=(0,t.default)(a);e.s(["default",0,r])},311770,e=>{"use strict";var t=e.i(905255);e.s(["Check",()=>t.default])},555498,e=>{"use strict";var t=e.i(144626);e.s(["ChevronsUpDownIcon",()=>t.default])},970244,e=>{"use strict";var t=e.i(771535);let a={name:"circle-check",size:24,node:[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m16 9-5.5 5.5L8 12",key:"xofnsj"}]],aliases:["check-circle-2"]};a.node;let r=(0,t.default)(a);e.s(["default",0,r])},573491,e=>{"use strict";var t=e.i(970244);e.s(["CircleCheckIcon",()=>t.default])},282183,e=>{"use strict";var t=e.i(771535);let a={name:"circle-question-mark",size:24,node:[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3",key:"1u773s"}],["path",{d:"M12 17h.01",key:"p32p05"}]],aliases:["help-circle","circle-help"]};a.node;let r=(0,t.default)(a);e.s(["default",0,r])},249664,e=>{"use strict";var t=e.i(282183);e.s(["HelpCircleIcon",()=>t.default])},300136,e=>{"use strict";var t=e.i(771535);let a={name:"copy",size:24,node:[["rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2",key:"17jyea"}],["path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",key:"zix9uf"}]]};a.node;let r=(0,t.default)(a);e.s(["default",0,r])},964963,e=>{"use strict";var t=e.i(300136);e.s(["Copy",()=>t.default])},837535,e=>{"use strict";var t=e.i(771535);let a={name:"hash",size:24,node:[["line",{x1:"4",x2:"20",y1:"9",y2:"9",key:"4lhtct"}],["line",{x1:"4",x2:"20",y1:"15",y2:"15",key:"vyu0kd"}],["line",{x1:"10",x2:"8",y1:"3",y2:"21",key:"1ggp8o"}],["line",{x1:"16",x2:"14",y1:"3",y2:"21",key:"weycgp"}]]};a.node;let r=(0,t.default)(a);e.s(["default",0,r])},249134,e=>{"use strict";var t=e.i(771535);let a={name:"menu",size:24,node:[["path",{d:"M4 5h16",key:"1tepv9"}],["path",{d:"M4 12h16",key:"1lakjw"}],["path",{d:"M4 19h16",key:"1djgab"}]]};a.node;let r=(0,t.default)(a);e.s(["MenuIcon",0,r],249134)},21464,e=>{"use strict";var t=e.i(771535);let a={name:"scroll-text",size:24,node:[["path",{d:"M15 12h-5",key:"r7krc0"}],["path",{d:"M15 8h-5",key:"1khuty"}],["path",{d:"M19 17V5a2 2 0 0 0-2-2H4",key:"zz82l3"}],["path",{d:"M8 21h12a2 2 0 0 0 2-2v-1a1 1 0 0 0-1-1H11a1 1 0 0 0-1 1v1a2 2 0 1 1-4 0V5a2 2 0 1 0-4 0v2a1 1 0 0 0 1 1h3",key:"1ph1d7"}]]};a.node;let r=(0,t.default)(a);e.s(["ScrollTextIcon",0,r],21464)},963874,e=>{"use strict";var t=e.i(910955);e.s(["SearchIcon",()=>t.default])},636800,e=>{"use strict";var t=e.i(771535);let a={name:"shield",size:24,node:[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}]]};a.node;let r=(0,t.default)(a);e.s(["ShieldIcon",0,r],636800)},623626,e=>{"use strict";var t=e.i(771535);let a={name:"table-2",size:24,node:[["path",{d:"M3 9h18",key:"1pudct"}],["path",{d:"M9 3v18",key:"fh3hqa"}],["rect",{x:"3",y:"3",width:"18",height:"18",rx:"2",key:"h1oib"}]]};a.node;let r=(0,t.default)(a);e.s(["Table2Icon",0,r],623626)},327511,e=>{"use strict";var t=e.i(771535);let a={name:"upload",size:24,node:[["path",{d:"M12 3v12",key:"1x0j5s"}],["path",{d:"m17 8-5-5-5 5",key:"7q97r8"}],["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}]]};a.node;let r=(0,t.default)(a);e.s(["UploadIcon",0,r],327511)},363644,(e,t,a)=>{t.exports=e.r(366091)},652446,(e,t,a)=>{"use strict";t.exports=["chrome 111","edge 111","firefox 111","safari 16.4"]},991672,(e,t,a)=>{"use strict";Object.defineProperty(a,"__esModule",{value:!0});var r={UNDERSCORE_GLOBAL_ERROR_ROUTE:function(){return i},UNDERSCORE_GLOBAL_ERROR_ROUTE_ENTRY:function(){return l},UNDERSCORE_NOT_FOUND_ROUTE:function(){return n},UNDERSCORE_NOT_FOUND_ROUTE_ENTRY:function(){return o}};for(var s in r)Object.defineProperty(a,s,{enumerable:!0,get:r[s]});let n="/_not-found",o=`${n}/page`,i="/_global-error",l=`${i}/page`},366091,(e,t,a)=>{"use strict";var r,s=e.i(821795);Object.defineProperty(a,"__esModule",{value:!0});var n={APP_CLIENT_INTERNALS:function(){return er},APP_PATHS_MANIFEST:function(){return S},APP_PATH_ROUTES_MANIFEST:function(){return x},AdapterOutputType:function(){return u},BARREL_OPTIMIZATION_PREFIX:function(){return G},BLOCKED_PAGES:function(){return K},BUILD_ID_FILE:function(){return q},BUILD_MANIFEST:function(){return _},CLIENT_PUBLIC_FILES_PATH:function(){return z},CLIENT_REFERENCE_MANIFEST:function(){return Y},CLIENT_STATIC_FILES_PATH:function(){return H},CLIENT_STATIC_FILES_RUNTIME_MAIN:function(){return et},CLIENT_STATIC_FILES_RUNTIME_MAIN_APP:function(){return ea},CLIENT_STATIC_FILES_RUNTIME_POLYFILLS:function(){return eo},CLIENT_STATIC_FILES_RUNTIME_POLYFILLS_SYMBOL:function(){return ei},CLIENT_STATIC_FILES_RUNTIME_REACT_REFRESH:function(){return es},CLIENT_STATIC_FILES_RUNTIME_WEBPACK:function(){return en},COMPILER_INDEXES:function(){return d},COMPILER_NAMES:function(){return c},CONFIG_FILES:function(){return F},DEFAULT_RUNTIME_WEBPACK:function(){return el},DEFAULT_SANS_SERIF_FONT:function(){return em},DEFAULT_SERIF_FONT:function(){return ep},DEV_CLIENT_MIDDLEWARE_MANIFEST:function(){return B},DEV_CLIENT_PAGES_MANIFEST:function(){return N},DYNAMIC_CSS_MANIFEST:function(){return ee},EDGE_RUNTIME_WEBPACK:function(){return ec},EDGE_UNSUPPORTED_NODE_APIS:function(){return ev},EXPORT_DETAIL:function(){return R},EXPORT_MARKER:function(){return T},FUNCTIONS_CONFIG_MANIFEST:function(){return E},IMAGES_MANIFEST:function(){return k},INTERCEPTION_ROUTE_REWRITE_MANIFEST:function(){return J},MIDDLEWARE_BUILD_MANIFEST:function(){return X},MIDDLEWARE_MANIFEST:function(){return U},MIDDLEWARE_REACT_LOADABLE_MANIFEST:function(){return Z},MODERN_BROWSERSLIST_TARGET:function(){return i.default},NEXT_BUILTIN_DOCUMENT:function(){return V},NEXT_FONT_MANIFEST:function(){return C},PAGES_MANIFEST:function(){return y},PHASE_ANALYZE:function(){return m},PHASE_DEVELOPMENT_SERVER:function(){return h},PHASE_EXPORT:function(){return p},PHASE_INFO:function(){return v},PHASE_PRODUCTION_BUILD:function(){return f},PHASE_PRODUCTION_SERVER:function(){return g},PHASE_TEST:function(){return b},PREFETCH_HINTS:function(){return I},PRERENDER_MANIFEST:function(){return w},REACT_LOADABLE_MANIFEST:function(){return $},REQUEST_INSIGHTS_DEV_ENDPOINT:function(){return L},ROUTES_MANIFEST:function(){return j},RSC_MODULE_TYPES:function(){return eb},SERVER_DIRECTORY:function(){return M},SERVER_FILES_MANIFEST:function(){return P},SERVER_PROPS_ID:function(){return eu},SERVER_REFERENCE_MANIFEST:function(){return Q},STATIC_PROPS_ID:function(){return ed},STATIC_STATUS_PAGES:function(){return ef},STRING_LITERAL_DROP_BUNDLE:function(){return W},SUBRESOURCE_INTEGRITY_MANIFEST:function(){return A},SYSTEM_ENTRYPOINTS:function(){return ey},TRACE_OUTPUT_VERSION:function(){return eg},TURBOPACK_CLIENT_BUILD_MANIFEST:function(){return O},TURBOPACK_CLIENT_MIDDLEWARE_MANIFEST:function(){return D},TURBO_TRACE_DEFAULT_MEMORY_LIMIT:function(){return eh},UNDERSCORE_GLOBAL_ERROR_ROUTE:function(){return l.UNDERSCORE_GLOBAL_ERROR_ROUTE},UNDERSCORE_GLOBAL_ERROR_ROUTE_ENTRY:function(){return l.UNDERSCORE_GLOBAL_ERROR_ROUTE_ENTRY},UNDERSCORE_NOT_FOUND_ROUTE:function(){return l.UNDERSCORE_NOT_FOUND_ROUTE},UNDERSCORE_NOT_FOUND_ROUTE_ENTRY:function(){return l.UNDERSCORE_NOT_FOUND_ROUTE_ENTRY}};for(var o in n)Object.defineProperty(a,o,{enumerable:!0,get:n[o]});let i=e.r(380763)._(e.r(652446)),l=e.r(991672),c={client:"client",server:"server",edgeServer:"edge-server"},d={[c.client]:0,[c.server]:1,[c.edgeServer]:2};var u=((r={}).PAGES="PAGES",r.PAGES_API="PAGES_API",r.APP_PAGE="APP_PAGE",r.APP_ROUTE="APP_ROUTE",r.PRERENDER="PRERENDER",r.STATIC_FILE="STATIC_FILE",r.MIDDLEWARE="MIDDLEWARE",r);let p="phase-export",m="phase-analyze",f="phase-production-build",g="phase-production-server",h="phase-development-server",b="phase-test",v="phase-info",y="pages-manifest.json",S="app-paths-manifest.json",x="app-path-routes-manifest.json",_="build-manifest.json",E="functions-config-manifest.json",A="subresource-integrity-manifest",C="next-font-manifest",T="export-marker.json",R="export-detail.json",w="prerender-manifest.json",I="prefetch-hints.json",j="routes-manifest.json",k="images-manifest.json",P="required-server-files",N="_devPagesManifest.json",L="/_next/development/request-insights",U="middleware-manifest.json",D="_clientMiddlewareManifest.js",O="client-build-manifest.json",B="_devMiddlewareManifest.json",$="react-loadable-manifest.json",M="server",F=["next.config.js","next.config.mjs","next.config.ts",...s.default?.features?.typescript?["next.config.mts"]:[]],q="BUILD_ID",K=["/_document","/_app","/_error"],z="public",H="static",W="__NEXT_DROP_CLIENT_FILE__",V="__NEXT_BUILTIN_DOCUMENT__",G="__barrel_optimize__",Y="client-reference-manifest",Q="server-reference-manifest",X="middleware-build-manifest",Z="middleware-react-loadable-manifest",J="interception-route-rewrite-manifest",ee="dynamic-css-manifest",et="main",ea=`${et}-app`,er="app-pages-internals",es="react-refresh",en="webpack",eo="polyfills",ei=Symbol(eo),el="webpack-runtime",ec="edge-runtime-webpack",ed="__N_SSG",eu="__N_SSP",ep={name:"Times New Roman",xAvgCharWidth:821,azAvgWidth:854.3953488372093,unitsPerEm:2048},em={name:"Arial",xAvgCharWidth:904,azAvgWidth:934.5116279069767,unitsPerEm:2048},ef=["/500"],eg=1,eh=6e3,eb={client:"client",server:"server"},ev=["clearImmediate","setImmediate","BroadcastChannel","ByteLengthQueuingStrategy","CompressionStream","CountQueuingStrategy","DecompressionStream","DomException","MessageChannel","MessageEvent","MessagePort","ReadableByteStreamController","ReadableStreamBYOBRequest","ReadableStreamDefaultController","TransformStreamDefaultController","WritableStreamDefaultController"],ey=new Set([et,es,ea]);("function"==typeof a.default||"object"==typeof a.default&&null!==a.default)&&void 0===a.default.__esModule&&(Object.defineProperty(a.default,"__esModule",{value:!0}),Object.assign(a.default,a),t.exports=a.default)},697138,(e,t,a)=>{var r=e.r(738254),s=r.Buffer;function n(e,t){for(var a in e)t[a]=e[a]}function o(e,t,a){return s(e,t,a)}s.from&&s.alloc&&s.allocUnsafe&&s.allocUnsafeSlow?t.exports=r:(n(r,a),a.Buffer=o),o.prototype=Object.create(s.prototype),n(s,o),o.from=function(e,t,a){if("number"==typeof e)throw TypeError("Argument must not be a number");return s(e,t,a)},o.alloc=function(e,t,a){if("number"!=typeof e)throw TypeError("Argument must be a number");var r=s(e);return void 0!==t?"string"==typeof a?r.fill(t,a):r.fill(t):r.fill(0),r},o.allocUnsafe=function(e){if("number"!=typeof e)throw TypeError("Argument must be a number");return s(e)},o.allocUnsafeSlow=function(e){if("number"!=typeof e)throw TypeError("Argument must be a number");return r.SlowBuffer(e)}},565534,(e,t,a)=>{"use strict";var r=e.i(821795),s=e.r(697138).Buffer,n=e.g.crypto||e.g.msCrypto;n&&n.getRandomValues?t.exports=function(e,t){if(e>0xffffffff)throw RangeError("requested too many random bytes");var a=s.allocUnsafe(e);if(e>0)if(e>65536)for(var o=0;o<e;o+=65536)n.getRandomValues(a.slice(o,o+65536));else n.getRandomValues(a);return"function"==typeof t?r.default.nextTick(function(){t(null,a)}):a}:t.exports=function(){throw Error("Secure random number generation is not supported by this browser.\nUse Chrome, Firefox or Internet Explorer 11")}},914905,e=>{"use strict";let t={isAvailable:!1,isEnabled:!1,isOpen:!1,setIsOpen:()=>{},enableToolbar:()=>{},events:[],setEvents:()=>{},dismissToolbar:()=>{}};e.s(["DevToolbar",0,e=>null,"DevToolbarProvider",0,({children:e})=>e,"DevToolbarTrigger",0,()=>null,"useDevToolbar",0,()=>t])},384041,e=>{e.q("https://frontend-assets.supabase.com/studio/d98c27779076/_next/static/media/antigravity-authenticate-screenshot.32g9f_su4f541.png")},782700,e=>{e.q("https://frontend-assets.supabase.com/studio/d98c27779076/_next/static/media/antigravity-icon.30sz-6j22om64.svg")},157753,e=>{e.q("https://frontend-assets.supabase.com/studio/d98c27779076/_next/static/media/claude-icon.1lfhvztgbms3z.svg")},373741,e=>{e.q("https://frontend-assets.supabase.com/studio/d98c27779076/_next/static/media/copilot-icon-dark.44gcho6t34_gw.svg")},335677,e=>{e.q("https://frontend-assets.supabase.com/studio/d98c27779076/_next/static/media/copilot-icon.2j_gn7uk9a38d.svg")},799282,e=>{e.q("https://frontend-assets.supabase.com/studio/d98c27779076/_next/static/media/cursor-icon-dark.2e1b1b6m1s3cv.svg")},707390,e=>{e.q("https://frontend-assets.supabase.com/studio/d98c27779076/_next/static/media/cursor-icon.40c4a9_r0xkx3.svg")},381244,e=>{e.q("https://frontend-assets.supabase.com/studio/d98c27779076/_next/static/media/devin-icon-dark.3bb1_-406e_dl.svg")},480808,e=>{e.q("https://frontend-assets.supabase.com/studio/d98c27779076/_next/static/media/devin-icon.1rosm_t5z7yr4.svg")},433951,e=>{e.q("https://frontend-assets.supabase.com/studio/d98c27779076/_next/static/media/factory-icon-dark.2bev32qiki8u3.svg")},347052,e=>{e.q("https://frontend-assets.supabase.com/studio/d98c27779076/_next/static/media/factory-icon.2bodwpwyccpyn.svg")},193998,e=>{e.q("https://frontend-assets.supabase.com/studio/d98c27779076/_next/static/media/fx-icon-dark.18d8g6ewa4j-3.svg")},964525,e=>{e.q("https://frontend-assets.supabase.com/studio/d98c27779076/_next/static/media/fx-icon.3mw-et23716fh.svg")},614915,e=>{e.q("https://frontend-assets.supabase.com/studio/d98c27779076/_next/static/media/gemini-cli-icon.0-442oo6z259l.svg")},982872,e=>{e.q("https://frontend-assets.supabase.com/studio/d98c27779076/_next/static/media/goose-icon-dark.0ncbkfug65z3v.svg")},558202,e=>{e.q("https://frontend-assets.supabase.com/studio/d98c27779076/_next/static/media/goose-icon.0vncf5kau9ou0.svg")},43617,e=>{e.q("https://frontend-assets.supabase.com/studio/d98c27779076/_next/static/media/grok-icon-dark.1--0jtbq9bgy_.svg")},849062,e=>{e.q("https://frontend-assets.supabase.com/studio/d98c27779076/_next/static/media/grok-icon.3if19yqbxcw7k.svg")},500084,e=>{e.q("https://frontend-assets.supabase.com/studio/d98c27779076/_next/static/media/kimi-icon-dark.0gdk4f4bzwkxx.svg")},28229,e=>{e.q("https://frontend-assets.supabase.com/studio/d98c27779076/_next/static/media/kimi-icon.25anxg4ec92da.svg")},522846,e=>{e.q("https://frontend-assets.supabase.com/studio/d98c27779076/_next/static/media/kiro-icon.2ked-mw1s34-g.svg")},442749,e=>{e.q("https://frontend-assets.supabase.com/studio/d98c27779076/_next/static/media/omp-icon.1spbpuad1bmgt.svg")},317052,e=>{e.q("https://frontend-assets.supabase.com/studio/d98c27779076/_next/static/media/openai-icon-dark.1v3ad6jsa4gi-.svg")},866485,e=>{e.q("https://frontend-assets.supabase.com/studio/d98c27779076/_next/static/media/openai-icon.451-tznwi2js0.svg")},313364,e=>{e.q("https://frontend-assets.supabase.com/studio/d98c27779076/_next/static/media/opencode-icon-dark.0fz6xtgu5sbmp.svg")},149751,e=>{e.q("https://frontend-assets.supabase.com/studio/d98c27779076/_next/static/media/opencode-icon.314c1fpekzdj_.svg")},303041,e=>{e.q("https://frontend-assets.supabase.com/studio/d98c27779076/_next/static/media/perplexity-icon-dark.2zjtoen1s85_k.svg")},345662,e=>{e.q("https://frontend-assets.supabase.com/studio/d98c27779076/_next/static/media/perplexity-icon.2hna_hvgfkjf2.svg")},916510,e=>{e.q("https://frontend-assets.supabase.com/studio/d98c27779076/_next/static/media/vscode-icon.2doi40nko33a6.svg")},594041,e=>{e.q("https://frontend-assets.supabase.com/studio/d98c27779076/_next/static/media/warp-icon-dark.0zbjh766qec5g.svg")},733850,e=>{e.q("https://frontend-assets.supabase.com/studio/d98c27779076/_next/static/media/warp-icon.0cl1qqgtm6ibm.svg")},757058,e=>{e.q("https://frontend-assets.supabase.com/studio/d98c27779076/_next/static/media/windsurf-icon-dark.2-4m-bm7bxm6z.svg")},283824,e=>{e.q("https://frontend-assets.supabase.com/studio/d98c27779076/_next/static/media/windsurf-icon.1xibipl_acoor.svg")},536374,27006,e=>{"use strict";function t(e){if("servers"in e&&"supabase"in e.servers)return e.servers.supabase.url;if("extensions"in e&&"supabase"in e.extensions)return e.extensions.supabase.uri;if("mcp_servers"in e&&"supabase"in e.mcp_servers)return e.mcp_servers.supabase.url;if("mcpServers"in e&&"supabase"in e.mcpServers&&"httpUrl"in e.mcpServers.supabase)return e.mcpServers.supabase.httpUrl;if("$schema"in e&&"mcp"in e&&"supabase"in e.mcp||"mcp"in e&&"supabase"in e.mcp&&"http"===e.mcp.supabase.type)return e.mcp.supabase.url;if("mcpServers"in e&&"supabase"in e.mcpServers&&"serverUrl"in e.mcpServers.supabase)return e.mcpServers.supabase.serverUrl;if("mcpServers"in e&&"supabase"in e.mcpServers)return e.mcpServers.supabase.url;throw Error("Invalid MCP config type")}e.s(["getMcpUrl",0,t],27006);let a=[{id:"docs",name:"Documentation",description:"Access Supabase documentation and guides"},{id:"account",name:"Account",description:"Manage account settings and preferences"},{id:"database",name:"Database",description:"Query and manage database schema and data"},{id:"debugging",name:"Debugging",description:"Debug and troubleshoot issues"},{id:"development",name:"Development",description:"Development tools and utilities"},{id:"functions",name:"Functions",description:"Manage and deploy Edge Functions"},{id:"branching",name:"Branching",description:"Manage database branches"},{id:"storage",name:"Storage",description:"Manage files and storage buckets"}],r=a.filter(e=>["docs","database","development","debugging"].includes(e.id)),s=[{key:"claude-code",label:"Claude Code",icon:"claude",configFile:".mcp.json",externalDocsUrl:"https://code.claude.com/docs/en/mcp",transformConfig:e=>({mcpServers:{supabase:{type:"http",url:e.mcpServers.supabase.url}}})},{key:"cursor",label:"Cursor",icon:"cursor",hasDistinctDarkIcon:!0,configFile:".cursor/mcp.json",externalDocsUrl:"https://cursor.com/docs/mcp",generateDeepLink:e=>{let a=btoa(JSON.stringify({url:t(e)}));return`cursor://anysphere.cursor-deeplink/mcp/install?name=supabase&config=${encodeURIComponent(a)}`}},{key:"vscode",label:"VS Code",icon:"vscode",configFile:".vscode/mcp.json",externalDocsUrl:"https://code.visualstudio.com/docs/copilot/chat/mcp-servers",transformConfig:e=>({servers:{supabase:{type:"http",url:e.mcpServers.supabase.url}}}),generateDeepLink:e=>{let t={name:"supabase",...e.servers.supabase};return`vscode:mcp/install?${encodeURIComponent(JSON.stringify(t))}`}},{key:"codex",label:"Codex",icon:"openai",hasDistinctDarkIcon:!0,configFile:"~/.codex/config.toml",externalDocsUrl:"https://developers.openai.com/codex/mcp/",transformConfig:e=>({mcp_servers:{supabase:{url:e.mcpServers.supabase.url}}})},{key:"grok",label:"Grok",icon:"grok",hasDistinctDarkIcon:!0,configFile:"~/.grok/config.toml",externalDocsUrl:"https://docs.x.ai/build/features/mcp-servers",transformConfig:e=>({mcp_servers:{supabase:{url:e.mcpServers.supabase.url}}})},{key:"kimi",label:"Kimi Code",icon:"kimi",hasDistinctDarkIcon:!0,configFile:".kimi-code/mcp.json",externalDocsUrl:"https://www.kimi.com/code/docs/en/kimi-code-cli/customization/mcp.html",transformConfig:e=>({mcpServers:{supabase:{transport:"http",url:e.mcpServers.supabase.url}}})},{key:"gemini-cli",label:"Gemini CLI",icon:"gemini-cli",configFile:".gemini/settings.json",externalDocsUrl:"https://geminicli.com/docs/tools/mcp-server/",transformConfig:e=>({mcpServers:{supabase:{httpUrl:e.mcpServers.supabase.url}}})},{key:"copilot-cli",label:"GitHub Copilot",icon:"copilot",hasDistinctDarkIcon:!0,configFile:"~/.copilot/mcp-config.json",externalDocsUrl:"https://docs.github.com/en/copilot/how-tos/copilot-cli/customize-copilot/add-mcp-servers",transformConfig:e=>({mcpServers:{supabase:{type:"http",url:e.mcpServers.supabase.url}}})},{key:"antigravity",label:"Antigravity",icon:"antigravity",configFile:"~/.gemini/antigravity/mcp_config.json",externalDocsUrl:"https://antigravity.google/docs/mcp",transformConfig:e=>({mcpServers:{supabase:{serverUrl:e.mcpServers.supabase.url}}})},{key:"windsurf",label:"Devin Desktop",icon:"devin",hasDistinctDarkIcon:!0,configFile:"~/.config/devin/mcp_config.json",externalDocsUrl:"https://docs.devin.ai/cli/extensibility/mcp/configuration"},{key:"warp",label:"Warp",icon:"warp",hasDistinctDarkIcon:!0,configFile:"~/.warp/.mcp.json",externalDocsUrl:"https://docs.warp.dev/agents/capabilities/mcp"},{key:"goose",label:"Goose",icon:"goose",hasDistinctDarkIcon:!0,configFile:"~/.config/goose/config.yaml",externalDocsUrl:"https://block.github.io/goose/docs/category/getting-started",transformConfig:e=>({extensions:{supabase:{available_tools:[],bundled:null,description:"Connect your Supabase projects to AI assistants. Manage tables, query data, deploy Edge Functions, and interact with your Supabase backend directly from your MCP client.",enabled:!0,env_keys:[],envs:{},headers:{},name:"Supabase",timeout:300,type:"streamable_http",uri:e.mcpServers.supabase.url}}}),generateDeepLink:e=>{let a=t(e);return`goose://extension?type=streamable_http&url=${encodeURIComponent(a)}&id=supabase&name=supabase&description=${encodeURIComponent("Connect your Supabase projects to AI assistants. Manage tables, query data, deploy Edge Functions, and interact with your Supabase backend directly from your MCP client.")}`}},{key:"factory",label:"Factory",icon:"factory",hasDistinctDarkIcon:!0,configFile:"~/.factory/mcp.json",externalDocsUrl:"https://docs.factory.ai/cli/configuration/mcp.md",transformConfig:e=>({mcpServers:{supabase:{type:"http",url:e.mcpServers.supabase.url}}})},{key:"opencode",label:"OpenCode",icon:"opencode",hasDistinctDarkIcon:!0,configFile:"~/.config/opencode/opencode.json",externalDocsUrl:"https://opencode.ai/docs/mcp-servers/",transformConfig:e=>({$schema:"https://opencode.ai/config.json",mcp:{supabase:{type:"remote",url:t(e),enabled:!0}}})},{key:"fx",label:"fx",icon:"fx",hasDistinctDarkIcon:!0,configFile:"~/.fx/mcp.json",externalDocsUrl:"https://fx.sh/docs/capabilities/mcp",transformConfig:e=>({mcp:{supabase:{type:"http",url:e.mcpServers.supabase.url}}})},{key:"omp",label:"omp",icon:"omp",configFile:".omp/mcp.json",externalDocsUrl:"https://github.com/can1357/oh-my-pi/blob/main/docs/mcp-config.md",transformConfig:e=>({mcpServers:{supabase:{type:"http",url:e.mcpServers.supabase.url}}})},{key:"kiro",label:"Kiro",icon:"kiro",configFile:"~/.kiro/settings/mcp.json",externalDocsUrl:"https://kiro.dev/docs/mcp/",generateDeepLink:(e,t)=>{let a=t?.isPlatform?"supabase-hosted":"supabase-local";return`https://kiro.dev/launch/powers/${a}`}},{key:"claude-ai",label:"Claude.ai",icon:"claude",externalDocsUrl:"https://claude.com/docs/connectors/overview",generateDeepLink:()=>"https://claude.ai/directory/connectors/11ca66fc-1e98-49d5-ab9b-7cb4672a8f10"},{key:"chatgpt",label:"ChatGPT",icon:"openai",hasDistinctDarkIcon:!0,externalDocsUrl:"https://chatgpt.com/features/apps/",generateDeepLink:()=>"https://chatgpt.com/apps/supabase/asdk_app_69d3e5ee6a708191baa733f7b8931995"}];e.s(["DEFAULT_MCP_URL_NON_PLATFORM",0,"http://localhost:54321/mcp","DEFAULT_MCP_URL_PLATFORM",0,"http://localhost:8080/mcp","FEATURE_GROUPS_NON_PLATFORM",0,r,"FEATURE_GROUPS_PLATFORM",0,a,"MCP_CLIENT_DATA",0,s,"MCP_CLI_COMMANDS",0,{"claude-code":{install:e=>`claude mcp add --scope project --transport http supabase "${e}"`,authenticate:"claude /mcp"},codex:{install:e=>`codex mcp add supabase --url "${e}"`,authenticate:"codex mcp login supabase"},grok:{install:e=>`grok mcp add supabase "${e}" --transport http`},"gemini-cli":{install:e=>`gemini mcp add -t http supabase "${e}"`,authenticate:"/mcp auth supabase"},"copilot-cli":{install:e=>`copilot mcp add --transport http supabase "${e}"`,authenticate:"copilot -i /mcp"},windsurf:{install:e=>`devin mcp add -s user supabase "${e}"`,authenticate:"devin mcp login supabase"},goose:{install:e=>`goose session --with-streamable-http-extension "${e}"`},factory:{install:e=>`droid mcp add supabase "${e}" --type http`},opencode:{authenticate:"opencode mcp auth supabase"},fx:{authenticate:"/mcp auth supabase --open"},cursor:{authenticate:"agent mcp login supabase"}}],536374)},156255,e=>{"use strict";let t={src:e.i(782700).default,width:180,height:180,blurWidth:0,blurHeight:0},a={src:e.i(157753).default,width:24,height:24,blurWidth:0,blurHeight:0},r={src:e.i(373741).default,width:96,height:96,blurWidth:0,blurHeight:0},s={src:e.i(335677).default,width:96,height:96,blurWidth:0,blurHeight:0},n={src:e.i(799282).default,width:467,height:533,blurWidth:0,blurHeight:0},o={src:e.i(707390).default,width:467,height:533,blurWidth:0,blurHeight:0},i={src:e.i(381244).default,width:82,height:93,blurWidth:0,blurHeight:0},l={src:e.i(480808).default,width:82,height:93,blurWidth:0,blurHeight:0},c={src:e.i(433951).default,width:508,height:508,blurWidth:0,blurHeight:0},d={src:e.i(347052).default,width:200,height:200,blurWidth:0,blurHeight:0},u={src:e.i(193998).default,width:156,height:156,blurWidth:0,blurHeight:0},p={src:e.i(964525).default,width:156,height:156,blurWidth:0,blurHeight:0},m={src:e.i(614915).default,width:1645,height:1645,blurWidth:0,blurHeight:0},f={src:e.i(982872).default,width:3370,height:3370,blurWidth:0,blurHeight:0},g={src:e.i(558202).default,width:3370,height:3370,blurWidth:0,blurHeight:0},h={src:e.i(43617).default,width:24,height:24,blurWidth:0,blurHeight:0},b={src:e.i(849062).default,width:24,height:24,blurWidth:0,blurHeight:0},v={src:e.i(500084).default,width:24,height:25,blurWidth:0,blurHeight:0},y={src:e.i(28229).default,width:24,height:25,blurWidth:0,blurHeight:0},S={src:e.i(522846).default,width:200,height:200,blurWidth:0,blurHeight:0},x={src:e.i(442749).default,width:64,height:64,blurWidth:0,blurHeight:0},_={src:e.i(317052).default,width:484,height:480,blurWidth:0,blurHeight:0},E={src:e.i(866485).default,width:484,height:480,blurWidth:0,blurHeight:0},A={src:e.i(313364).default,width:240,height:300,blurWidth:0,blurHeight:0},C={src:e.i(149751).default,width:240,height:300,blurWidth:0,blurHeight:0},T={src:e.i(303041).default,width:256,height:256,blurWidth:0,blurHeight:0},R={src:e.i(345662).default,width:256,height:256,blurWidth:0,blurHeight:0},w={src:e.i(916510).default,width:100,height:100,blurWidth:0,blurHeight:0},I={src:e.i(594041).default,width:24,height:24,blurWidth:0,blurHeight:0},j={src:e.i(733850).default,width:24,height:24,blurWidth:0,blurHeight:0},k={src:e.i(757058).default,width:1024,height:1024,blurWidth:0,blurHeight:0},P={antigravity:{light:t,dark:t},claude:{light:a,dark:a},copilot:{light:s,dark:r},cursor:{light:o,dark:n},devin:{light:l,dark:i},factory:{light:d,dark:c},fx:{light:p,dark:u},"gemini-cli":{light:m,dark:m},goose:{light:g,dark:f},grok:{light:b,dark:h},kimi:{light:y,dark:v},kiro:{light:S,dark:S},omp:{light:x,dark:x},openai:{light:E,dark:_},opencode:{light:C,dark:A},perplexity:{light:R,dark:T},vscode:{light:w,dark:w},warp:{light:j,dark:I},windsurf:{light:{src:e.i(283824).default,width:1024,height:1024,blurWidth:0,blurHeight:0},dark:k}};e.s(["getMcpClientIconSrc",0,function({icon:e,useDarkVariant:t,hasDistinctDarkIcon:a}){var r;let s=P[e.toLowerCase()];return s?"string"==typeof(r=t&&a?s.dark:s.light)?r:r.src:""}],156255)},669894,e=>{"use strict";var t=e.i(536374);e.s(["getMcpUrl",0,function({projectRef:e,isPlatform:a,apiUrl:r,platformUrl:s,nonPlatformUrl:n,readonly:o=!1,features:i=[],skipElicitations:l=[],selectedClient:c}){let d,u=new URL(function({isPlatform:e,apiUrl:a,platformUrl:r,nonPlatformUrl:s}){return e?r??"https://mcp.supabase.com/mcp"??t.DEFAULT_MCP_URL_PLATFORM:a?`${a}/mcp`:s??t.DEFAULT_MCP_URL_NON_PLATFORM}({isPlatform:a,apiUrl:r,platformUrl:s,nonPlatformUrl:n}));e&&a&&u.searchParams.set("project_ref",e),o&&u.searchParams.set("read_only","true"),i.length>0&&u.searchParams.set("features",i.join(",")),a&&l.length>0&&u.searchParams.set("skip_elicitations",l.join(","));let p=u.toString();return{mcpUrl:p,clientConfig:(d={mcpServers:{supabase:{url:p}}},c?.transformConfig?c.transformConfig(d):d)}}])},486240,e=>{"use strict";var t=e.i(221628),a=e.i(416340),r=e.i(843778),s=e.i(412442),n=e.i(331162);let o={bash:"bash",csharp:"csharp",cs:"csharp",curl:"curl",dart:"dart",go:"go",http:"http",javascript:"js",js:"js",json:"json",jsx:"jsx",kotlin:"kotlin",pgsql:"pgsql",php:"php",py:"python",python:"python",sh:"bash",shell:"bash",sql:"sql",swift:"swift",ts:"ts",typescript:"ts",yaml:"yaml",yml:"yaml"},i={astro:"html",bash:"bash",cjs:"js",dart:"dart",go:"go",js:"js",json:"json",jsx:"jsx",kt:"kotlin",mjs:"js",php:"php",pgsql:"pgsql",py:"python",sh:"bash",sql:"sql",swift:"swift",svelte:"html",ts:"ts",vue:"html",yaml:"yaml",yml:"yaml"};e.s(["MultipleCodeBlock",0,({files:e,value:l,onValueChange:c,className:d})=>{if(!e?.length)return null;let u=e[0]?.name??"",p=void 0!==l,[m,f]=(0,a.useState)(u),g=e.map(e=>({...e,code:"string"==typeof e.code?e.code.trim():e.code}));return(0,a.useEffect)(()=>{p||f(t=>e.some(e=>e.name===t)?t:u)},[u,e,p]),(0,t.jsxs)(s.Tabs,{value:p?l:m,onValueChange:e=>{p||f(e),c?.(e)},className:(0,r.cn)("border rounded-lg gap-0 space-y-0 overflow-hidden",d),children:[(0,t.jsx)(s.TabsList,{className:"bg-surface-75 px-5 gap-5 overflow-x-auto border-0 border-b",children:e.map(e=>(0,t.jsx)(s.TabsTrigger,{value:e.name,className:"flex items-center gap-1 text-xs px-0 data-[state=active]:bg-transparent py-2.5",children:e.name},e.name))}),g.map(e=>(0,t.jsx)(s.TabsContent,{value:e.name,forceMount:!0,className:"p-0 max-h-72 overflow-y-auto data-[state=inactive]:hidden","data-connect-tab-content":!0,"data-tab-label":e.name,children:(0,t.jsx)(n.CodeBlock,{value:"string"==typeof e.code?e.code.trim():e.code,language:((e,t)=>{if(e){let t=o[e.toLowerCase()];if(t)return t}return(e=>{let t=e.toLowerCase();if(t.startsWith(".env"))return"bash";let a=t.split(".").pop();if(a&&a!==t)return i[a]})(t)??"js"})(e.language,e.name),className:"min-h-72 !bg-surface-75 rounded-none border-0"})},e.name))]})}])},884860,779932,e=>{"use strict";var t=e.i(221628),a=e.i(766181),r=e.i(311770),s=e.i(462996),n=e.i(404507),o=e.i(416340),i=e.i(587433),l=e.i(843778),c=e.i(339434),d=e.i(774035),u=e.i(767073),p=e.i(282410),m=e.i(108151);let f=({className:e,emptyLabel:a="No options available",errorLabel:r="Unable to load options",isEmpty:s=!1,isError:n=!1,isLoading:o=!1,skeletonVariant:i="select"})=>{let c;return o?c="Loading options":n?c=r:s&&(c=a),(0,t.jsxs)(t.Fragment,{children:[o&&(0,t.jsx)(m.GenericSelectionSkeletonLoader,{className:(0,l.cn)("w-full",e),variant:i}),(0,t.jsx)("div",{"aria-live":"polite",className:(0,l.cn)("px-2 py-3 text-xs text-foreground-lighter",(o||void 0===c)&&"sr-only",e),children:c})]})};e.s(["SelectionListState",0,f],779932);let g=o.default.createContext(null),h=(0,l.cn)("relative text-foreground-light text-left px-2 py-1.5 rounded-item","hover:text-foreground hover:!bg-overlay-hover w-full flex items-center space-x-2","peer-data-[value=true]:bg-overlay-hover");function b(){let e=o.default.useContext(g);if(!e)throw Error("useMultiSelect must be used within a MultiSelectProvider");return e}function v({values:e=[],onValuesChange:a,onOpenChange:r,disabled:s,dir:n,size:i,className:d,children:p,id:m,...f}){let h=o.default.useRef(null),[b,y]=o.default.useState(!1),[S,x]=o.default.useState(""),[_,E]=o.default.useState(-1),[A,C]=o.default.useState(300),T=o.default.useRef(!1),R=o.default.useId(),w=m??R,I=o.default.useCallback(e=>{T.current!==e&&(T.current=e,y(e),r?.(e))},[r]),j=o.default.useCallback(t=>{e.includes(t)?a(e.filter(e=>e!==t)||[]):a([...e,t])},[a,e]);(0,o.useEffect)(()=>{if(!b)return;let e=new AbortController,{signal:t}=e,a=()=>{let e=h.current;if(!e)return;let t=e.getBoundingClientRect(),a=window.innerHeight-t.bottom-8,r=t.top-8,s=Math.max("top"==(a<300&&r>a?"top":"bottom")?r:a,0);C(s>0?Math.min(300,s):300)};return a(),window.addEventListener("resize",a,{signal:t}),window.addEventListener("scroll",a,{capture:!0,passive:!0,signal:t}),()=>e.abort()},[b]);let k=o.default.useCallback(t=>{switch(t.key){case"Backspace":case"Delete":e.length>0&&0===S.length&&(-1!==_&&_<e.length?(a(e.filter(t=>t!==e[_])),E(_-1<0?0:_-1)):a(e.filter(t=>t!==e[e.length-1])));break;case"Escape":if(-1!==_?E(-1):I(!1),h.current){let e=h.current.querySelector('button[role="combobox"]');e&&e.focus()}break;case"Enter":I(!0)}},[e,S,_,I]);return(0,t.jsx)(g.Provider,{value:{id:w,values:e,toggleValue:j,onValuesChange:a,open:b,setOpen:I,inputValue:S,setInputValue:x,activeIndex:_,setActiveIndex:E,size:i||"small",disabled:s,dropdownMaxHeight:A},children:(0,t.jsx)(u.Popover,{open:b,onOpenChange:I,children:(0,t.jsx)(c.Command,{id:w,ref:h,onKeyDown:k,className:(0,l.cn)("relative w-auto overflow-visible bg-transparent flex flex-col",d),dir:n,...f,children:p})})})}(0,a.cva)("",{variants:{size:{...p.SIZE_VARIANTS}},defaultVariants:{size:p.SIZE_VARIANTS_DEFAULT}});let y=(0,a.cva)("",{variants:{size:{tiny:`${p.SIZE.text.tiny} ${p.SIZE.height.tiny} pl-0.5 pr-2.5 py-0.5 items-stretch ${d.controlRadiusBySize.tiny}`,small:`${p.SIZE.text.small} ${p.SIZE.minHeight.small} pl-1.5 pr-3 py-1.5 items-center ${d.controlRadiusBySize.small}`,medium:`${p.SIZE.text.medium} ${p.SIZE.minHeight.medium} ${p.SIZE.padding.medium} items-center ${d.controlRadiusBySize.medium}`,large:`${p.SIZE.text.large} ${p.SIZE.minHeight.large} ${p.SIZE.padding.large} items-center ${d.controlRadiusBySize.large}`,xlarge:`${p.SIZE.text.xlarge} ${p.SIZE.minHeight.xlarge} ${p.SIZE.padding.xlarge} items-center ${d.controlRadiusBySize.xlarge}`}},defaultVariants:{size:p.SIZE_VARIANTS_DEFAULT}}),S=(0,a.cva)("flex overflow-hidden flex-1 min-w-0",{variants:{size:{tiny:"h-full min-h-0 items-center gap-0.5",small:"gap-1",medium:"gap-1",large:"gap-1",xlarge:"gap-1"}},defaultVariants:{size:p.SIZE_VARIANTS_DEFAULT}}),x=(0,a.cva)("rounded-sm shrink-0 px-1.5 bg-surface-75 dark:bg-white/5 normal-case tracking-normal text-xs/none",{variants:{size:{tiny:"h-full py-0",small:"py-px",medium:"py-px",large:"",xlarge:""}},defaultVariants:{size:p.SIZE_VARIANTS_DEFAULT}}),_=(0,a.cva)("text-foreground-muted whitespace-nowrap opacity-0 transition-opacity hidden",{variants:{size:{tiny:"leading-none",small:"leading-5",medium:"leading-5",large:"leading-5",xlarge:"leading-5"}},defaultVariants:{size:p.SIZE_VARIANTS_DEFAULT}}),E=(0,a.cva)("-ml-1 px-0 flex-1 border-none truncate min-w-0",{variants:{size:{tiny:"h-full",small:"",medium:"",large:"",xlarge:""}},defaultVariants:{size:p.SIZE_VARIANTS_DEFAULT}}),A=o.default.forwardRef(({label:e,persistLabel:a=!1,className:r,deletableBadge:c=!0,badgeLimit:d=9999,wrapBadges:p=!1,showIcon:m=!0,mode:f="combobox",renderValue:g,children:h,...v},A)=>{let{activeIndex:C,values:T,setInputValue:w,toggleValue:I,disabled:j,open:k,setOpen:P,size:N}=b(),L=o.default.useRef(null);o.default.useImperativeHandle(A,()=>L.current);let U=o.default.useRef(null),D=o.default.useRef(null),[O,B]=o.default.useState([]),[$,M]=o.default.useState(0),[F,q]=o.default.useState(!1),K=p||"wrap"===d,z="number"==typeof d,H="inline-combobox"===f;o.default.useEffect(()=>{L?.current&&D.current&&(z?(B(T.slice(0,d)),M(Math.max(0,T.length-d))):(B(T),M(0)))},[T,d]);let W=x({size:N}),V=o.default.useCallback(e=>{if(H){e.stopPropagation(),e.preventDefault(),k||w(""),setTimeout(()=>{U.current?.focus()},100);return}let t=!k;P(t),t&&w("")},[k,P,w,H]);return(0,t.jsx)(u.PopoverAnchor,{asChild:!0,children:(0,t.jsxs)("button",{ref:L,onClick:e=>!F&&V(e),disabled:j,type:"button",role:"combobox","aria-expanded":k,"data-state":k?"open":"closed",className:(0,l.cn)("flex w-full min-w-50 justify-between",T.length>0?"border border-strong bg-field hover:border-control-hover":"border-0 control-surface-shadows raised-control-surface","placeholder:text-muted-foreground","ring-border-control focus-ring","disabled:cursor-not-allowed disabled:opacity-50","transition-colors duration-200",k&&T.length>0&&"border-control-hover",y({size:N}),0===T.length&&("tiny"===N?"pl-2.5":"small"===N&&"pl-3"),r),...v,children:[(0,t.jsxs)("div",{ref:D,className:(0,l.cn)(S({size:N}),K&&"flex-wrap",!K&&"overflow-x-auto scrollbar-thin scrollbar-track-transparent transition-colors scrollbar-thumb-muted-foreground dark:scrollbar-thumb-muted scrollbar-thumb-rounded-lg"),children:[O.map(e=>(0,t.jsxs)(i.Badge,{className:(0,l.cn)(W,c&&("tiny"===N?"pr-px":"pr-0.5")),children:[g?.(e)??e,c&&(0,t.jsx)("div",{onMouseEnter:()=>q(!0),onMouseLeave:()=>q(!1),onClick:t=>{t.stopPropagation(),I(e),q(!1)},className:"ml-1 p-0.5 rounded-xs cursor-pointer text-foreground-lighter hover:text-foreground-light hover:bg-surface-400 transition-colors pointer-events-auto",children:(0,t.jsx)(n.X,{size:12})})]},e)),$>0&&(0,t.jsx)(i.Badge,{className:W,children:z&&d<1?`${$} item${$>1?"s":""} selected`:`+${$}`}),(0,t.jsx)("span",{className:(0,l.cn)(_({size:N}),!H&&(a||0===T.length)&&"opacity-100 visible inline"),children:e}),H&&(0,t.jsx)(R,{ref:U,showSearchIcon:!1,onValueChange:-1===C?w:void 0,placeholder:0===T.length?e:void 0,autoFocus:!1,wrapperClassName:(0,l.cn)(E({size:N}),K&&"min-w-21.25"),className:"py-0 px-1 truncate"})]}),m&&(0,t.jsx)(s.ChevronDown,{"aria-hidden":"true",size:16,strokeWidth:1.5,className:(0,l.cn)("text-foreground-lighter shrink-0 ml-1.5 self-center",T.length>0&&"translate-x-px")})]})})});A.displayName="MultiSelectorTrigger",v.Trigger=A;let C=(0,a.cva)("",{variants:{size:{...p.SIZE_VARIANTS}},defaultVariants:{size:p.SIZE_VARIANTS_DEFAULT}}),T=e=>`${e}-input`,R=o.default.forwardRef(({className:e,wrapperClassName:a,showResetIcon:r,showSearchIcon:s,...n},i)=>{let{id:d,open:u,setOpen:p,inputValue:m,setInputValue:f,activeIndex:g,setActiveIndex:h,size:v,disabled:y}=b(),S=o.default.useRef(null);o.default.useImperativeHandle(i,()=>S.current);let x=()=>{setTimeout(()=>{S?.current&&u&&S.current.focus()},100)};return(0,o.useEffect)(()=>{x(),u||S.current?.blur()},[u]),(0,t.jsx)(c.CommandInput,{ref:S,value:m,onValueChange:-1===g?f:void 0,onFocus:()=>!u&&p(!0),onClick:()=>h(-1),tabIndex:u?0:-1,disabled:y,showSearchIcon:s,showResetIcon:r,handleReset:()=>{f(""),x()},wrapperClassName:a,className:(0,l.cn)(C({size:v}),"bg-transparent h-full grow border-none outline-hidden placeholder:text-foreground-muted flex-1",-1!==g&&"caret-transparent",e),"data-id":T(d),...n})});R.displayName="MultiSelectorInput",v.Input=R;let w=o.default.forwardRef(({className:e,children:a,...r},s)=>{let{id:n}=b();return(0,t.jsx)(u.PopoverContent,{align:"start",collisionPadding:8,ref:s,sideOffset:8,className:(0,l.cn)("bg-overlay shadow-md z-50 border rounded-md p-0","w-(--radix-popper-anchor-width)",e),onFocusOutside:e=>{e.target instanceof HTMLElement&&e.target.dataset.id===T(n)&&(e.preventDefault(),e.stopPropagation())},sameWidthAsTrigger:!0,...r,children:a})});w.displayName="MultiSelectorContent",v.Content=w;let I=o.default.forwardRef(({className:e,children:a,creatable:r=!1,emptyLabel:s="No results found",error:n=!1,errorLabel:i,loading:d=!1,...u},p)=>{let{open:m,inputValue:g,setInputValue:v,toggleValue:y,dropdownMaxHeight:S}=b(),x=o.Children.toArray(a),_=x.filter(e=>!!e.props.value).map(e=>e.props.value.toLowerCase()).some(e=>e===g.toLowerCase());return(0,t.jsxs)(c.CommandList,{ref:p,className:(0,l.cn)("p-1 flex flex-col scrollbar-thin scrollbar-track-transparent transition-colors","scrollbar-thumb-muted-foreground dark:scrollbar-thumb-muted","scrollbar-thumb-rounded-lg w-full overflow-y-auto",e),style:{maxHeight:`min(${S}px, calc(var(--radix-popover-content-available-height) - 2px))`},...u,children:[(0,t.jsx)(f,{isLoading:d,isError:n,isEmpty:!d&&!n&&0===x.length&&!r,emptyLabel:s,errorLabel:i,skeletonVariant:"multi-select"}),!d&&!n&&(x.length>0||r)&&(0,t.jsxs)(t.Fragment,{children:[a,r&&g.length>0&&!_?(0,t.jsxs)(c.CommandItem,{role:"option",onSelect:()=>{m&&y(g),v("")},className:h,children:['Create "',g,'"']}):r&&0===x.length?(0,t.jsx)("div",{className:"p-2 py-1.5 text-xs text-foreground-lighter font-italic",children:"Type to add a value"}):(0,t.jsx)(c.CommandEmpty,{children:(0,t.jsx)("span",{className:"text-foreground-muted",children:s})})]})]})});I.displayName="MultiSelectorList",v.List=I;let j=o.default.forwardRef(({className:e,value:a,children:s,...n},o)=>{let{values:i,setInputValue:d,toggleValue:u,open:p}=b(),m=i.includes(a);return(0,t.jsxs)(c.CommandItem,{ref:o,tabIndex:p?0:-1,role:"option",onSelect:()=>{p&&u(a),d("")},className:(0,l.cn)(h,e),...n,children:[(0,t.jsx)("div",{className:(0,l.cn)("flex items-center justify-center","peer h-4 w-4 shrink-0 rounded-sm border border-control bg-control/25 ring-offset-background","transition-colors duration-150 ease-in-out","hover:border-strong","focus-ring","disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-foreground data-[state=checked]:text-background-overlay",m?"bg-foreground text-background-overlay":"[&_svg]:invisible"),children:(0,t.jsx)(r.Check,{className:"h-3 w-3",strokeWidth:4})}),(0,t.jsx)("div",{className:"text-sm grow leading-none pointer-events-none cursor-pointer peer-disabled:cursor-not-allowed peer-disabled:pointer-events-none peer-disabled:opacity-50",children:s})]})});j.displayName="MultiSelectorItem",v.Item=j,e.s(["MultiSelector",0,v,"MultiSelectorContent",0,w,"MultiSelectorInput",0,R,"MultiSelectorItem",0,j,"MultiSelectorList",0,I,"MultiSelectorTrigger",0,A],884860)},588912,e=>{"use strict";var t=e.i(221628),a=e.i(843778);let r={md:"rounded-md",lg:"rounded-lg",full:"rounded-full"};e.s(["FloatingPlate",0,function({children:e,className:s,rounded:n="lg",...o}){return(0,t.jsx)("div",{className:(0,a.cn)("inline-flex bg-popover",r[n],s),...o,children:e})}])},418348,e=>{"use strict";var t=e.i(221628),a=e.i(726313),r=e.i(588264),s=e.i(416340),n=e.i(843778);let o=s.forwardRef(({className:e,...a},s)=>(0,t.jsx)(r.RadioGroup.Root,{className:(0,n.cn)("relative flex flex-col -space-y-px w-full",e),...a,ref:s}));o.displayName="RadioGroupStacked";let i=s.forwardRef(({id:e,image:o,label:i,showIndicator:l=!0,...c},d)=>{let u=s.useId(),p=e||u;return(0,t.jsx)(r.RadioGroup.Item,{ref:d,id:p,"aria-labelledby":`${p}-label`,...c,className:(0,n.cn)("flex flex-col gap-2 w-full","bg-overlay/50 border shadow-xs","first-of-type:rounded-t-lg last-of-type:rounded-b-lg","disabled:opacity-50 disabled:cursor-not-allowed","enabled:cursor-pointer enabled:hover:bg-surface-300 enabled:hover:border-control-hover","focus-ring enabled:focus-visible:border-control-hover","hover:z-1 focus-visible:z-1 data-[state=checked]:z-1","data-[state=checked]:bg-surface-300 data-[state=checked]:border-control-hover","transition-colors group",c.className),children:(0,t.jsxs)("div",{className:"flex gap-3 w-full px-[21px] py-3",children:[l&&(0,t.jsx)("div",{className:(0,n.cn)("aspect-square h-4 w-4 min-w-4 min-h-4 rounded-full border relative","flex items-center justify-center","group-data-[state=checked]:border-control-hover","group-focus-visible:border-control-hover","group-focus-visible:ring-2 group-focus-visible:ring-ring group-focus-visible:ring-offset-2 group-focus-visible:ring-offset-background","group-hover:border-control-hover transition-colors"),children:(0,t.jsx)(r.RadioGroup.Indicator,{className:"absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2",children:(0,t.jsx)(a.Circle,{size:10,strokeWidth:0,className:"fill-current text-current"})})}),(0,t.jsxs)("div",{className:"flex flex-col gap-0.25 items-start",children:[(0,t.jsx)("div",{id:`${p}-label`,className:(0,n.cn)("block mt-[-0.15rem] text-sm text-left text-light","transition-colors","enabled:group-hover:text-foreground group-data-[state=checked]:text-foreground"),children:i}),c.description&&(0,t.jsx)("p",{className:"text-left text-sm text-foreground-lighter text-balance",children:c.description}),c.children]})]})})});i.displayName="RadioGroupStackedItem",e.s(["RadioGroupStacked",0,o,"RadioGroupStackedItem",0,i])},412442,e=>{"use strict";var t=e.i(221628),a=e.i(416340),r=e.i(174617),s=e.i(608652),n=e.i(142953),o=e.i(169525),i=e.i(600317),l=e.i(974539),c=e.i(199786),d=e.i(40266),u="Tabs",[p,m]=(0,s.createContextScope)(u,[n.createRovingFocusGroupScope]),f=(0,n.createRovingFocusGroupScope)(),[g,h]=p(u),b=a.forwardRef((e,a)=>{let{__scopeTabs:r,value:s,onValueChange:n,defaultValue:o,orientation:p="horizontal",dir:m,activationMode:f="automatic",...h}=e,b=(0,l.useDirection)(m),[v,y]=(0,c.useControllableState)({prop:s,onChange:n,defaultProp:o??"",caller:u});return(0,t.jsx)(g,{scope:r,baseId:(0,d.useId)(),value:v,onValueChange:y,orientation:p,dir:b,activationMode:f,children:(0,t.jsx)(i.Primitive.div,{dir:b,"data-orientation":p,...h,ref:a})})});b.displayName=u;var v="TabsList",y=a.forwardRef((e,a)=>{let{__scopeTabs:r,loop:s=!0,...o}=e,l=h(v,r),c=f(r);return(0,t.jsx)(n.Root,{asChild:!0,...c,orientation:l.orientation,dir:l.dir,loop:s,children:(0,t.jsx)(i.Primitive.div,{role:"tablist","aria-orientation":l.orientation,...o,ref:a})})});y.displayName=v;var S="TabsTrigger",x=a.forwardRef((e,a)=>{let{__scopeTabs:s,value:o,disabled:l=!1,...c}=e,d=h(S,s),u=f(s),p=A(d.baseId,o),m=C(d.baseId,o),g=o===d.value;return(0,t.jsx)(n.Item,{asChild:!0,...u,focusable:!l,active:g,children:(0,t.jsx)(i.Primitive.button,{type:"button",role:"tab","aria-selected":g,"aria-controls":m,"data-state":g?"active":"inactive","data-disabled":l?"":void 0,disabled:l,id:p,...c,ref:a,onMouseDown:(0,r.composeEventHandlers)(e.onMouseDown,e=>{l||0!==e.button||!1!==e.ctrlKey?e.preventDefault():d.onValueChange(o)}),onKeyDown:(0,r.composeEventHandlers)(e.onKeyDown,e=>{[" ","Enter"].includes(e.key)&&d.onValueChange(o)}),onFocus:(0,r.composeEventHandlers)(e.onFocus,()=>{let e="manual"!==d.activationMode;g||l||!e||d.onValueChange(o)})})})});x.displayName=S;var _="TabsContent",E=a.forwardRef((e,r)=>{let{__scopeTabs:s,value:n,forceMount:l,children:c,...d}=e,u=h(_,s),p=A(u.baseId,n),m=C(u.baseId,n),f=n===u.value,g=a.useRef(f);return a.useEffect(()=>{let e=requestAnimationFrame(()=>g.current=!1);return()=>cancelAnimationFrame(e)},[]),(0,t.jsx)(o.Presence,{present:l||f,children:({present:a})=>(0,t.jsx)(i.Primitive.div,{"data-state":f?"active":"inactive","data-orientation":u.orientation,role:"tabpanel","aria-labelledby":p,hidden:!a,id:m,tabIndex:0,...d,ref:r,style:{...e.style,animationDuration:g.current?"0s":void 0},children:a&&c})})});function A(e,t){return`${e}-trigger-${t}`}function C(e,t){return`${e}-content-${t}`}E.displayName=_,e.s(["Content",0,E,"List",0,y,"Root",0,b,"Tabs",0,b,"TabsContent",0,E,"TabsList",0,y,"TabsTrigger",0,x,"Trigger",0,x,"createTabsScope",0,m],170702);var T=e.i(170702),T=T,R=e.i(843778),w=e.i(737659);let I=T.Root,j=(0,R.cn)("has-[[data-tab-indicator]]:border-b-0","has-[[data-tab-indicator]]:after:pointer-events-none has-[[data-tab-indicator]]:after:absolute","has-[[data-tab-indicator]]:after:bottom-0 has-[[data-tab-indicator]]:after:h-px","has-[[data-tab-indicator]]:after:left-[var(--tab-track-inset,0px)]","has-[[data-tab-indicator]]:after:right-0","has-[[data-tab-indicator]]:after:bg-[var(--tab-track,var(--border-default))]");e.s(["Tabs",0,I,"TabsContent",0,({className:e,...a})=>(0,t.jsx)(T.Content,{className:(0,R.cn)("mt-4 focus-ring",e),...a}),"TabsIndicator",0,({className:e,...a})=>(0,t.jsx)("span",{"aria-hidden":!0,"data-tab-indicator":!0,className:(0,R.cn)("pointer-events-none absolute bottom-0 left-0 h-px bg-foreground","w-[var(--active-tab-width,0)] translate-x-[var(--active-tab-left,0)]","transition-none opacity-0","group-data-[tab-indicator-ready]/list:opacity-100","group-data-[tab-indicator-ready]/list:transition-[translate,width]","group-data-[tab-indicator-ready]/list:duration-[250ms]","group-data-[tab-indicator-ready]/list:ease-move","motion-reduce:transition-none",e),...a}),"TabsList",0,({className:e,children:r,ref:s,...n})=>{let o=(0,a.useRef)(null);return(0,w.useTabIndicator)(o),(0,t.jsx)(T.List,{ref:e=>{o.current=e,"function"==typeof s?s(e):s&&(s.current=e)},className:(0,R.cn)("group/list relative flex items-center border-b",j,e),...n,children:r})},"TabsTrigger",0,({className:e,...a})=>(0,t.jsx)(T.Trigger,{className:(0,R.cn)("inline-flex cursor-pointer items-center justify-center whitespace-nowrap py-1.5 text-sm transition-colors disabled:pointer-events-none disabled:opacity-50 data-[state=active]:text-foreground data-[state=active]:shadow-xs text-foreground-lighter hover:text-foreground","focus-inset","border-b-2 border-b-transparent data-[state=active]:border-b-foreground","group-has-[[data-tab-indicator]]/list:border-b-0","group",e),...a})],412442)},737659,e=>{"use strict";var t=e.i(416340);let a={activeItemSelector:'[role="tab"][data-state="active"]',indicatorSelector:"[data-tab-indicator]",readyFlag:"tabIndicatorReady",leftProperty:"--active-tab-left",widthProperty:"--active-tab-width",insetByPadding:!0};e.s(["useTabIndicator",0,(e,r={})=>{let{activeItemSelector:s,indicatorSelector:n,readyFlag:o,leftProperty:i,widthProperty:l,insetByPadding:c}={...a,...r};(0,t.useLayoutEffect)(()=>{let t=e.current;if(!t||!t.querySelector(`:scope > ${n}`))return;let a=!1,r=()=>{let e=t.querySelector(`:scope > ${s}`);if(a)return;if(!e)return void delete t.dataset[o];let r=getComputedStyle(e),n=c&&parseFloat(r.paddingLeft)||0,d=c&&parseFloat(r.paddingRight)||0;t.style.setProperty(i,`${e.offsetLeft+n}px`),t.style.setProperty(l,`${e.offsetWidth-n-d}px`),void 0===t.dataset[o]&&requestAnimationFrame(()=>{a||(t.dataset[o]="")})},d="u"<typeof ResizeObserver?void 0:new ResizeObserver(r),u=()=>{d?.disconnect(),d?.observe(t),Array.from(t.children).forEach(e=>d?.observe(e)),r()};u();let p="u"<typeof MutationObserver?void 0:new MutationObserver(u);return p?.observe(t,{attributes:!0,attributeFilter:["data-state"],subtree:!0,childList:!0}),document.fonts?.ready.then(r).catch(()=>{}),()=>{a=!0,p?.disconnect(),d?.disconnect(),delete t.dataset[o]}},[e,s,n,o,i,l,c])}])},375761,e=>{"use strict";var t=e.i(802715),a=e.i(980630);let r=async(e,r=t.default)=>{if(!window.document.hasFocus())return void a.toast.error("Unable to copy to clipboard");try{if("u">typeof ClipboardItem&&navigator.clipboard?.write){let t=!1;try{let a=new ClipboardItem({"text/plain":Promise.resolve(e).then(e=>new Blob([e],{type:"text/plain"}))});await navigator.clipboard.write([a]),t=!0}catch{}if(t)return void r()}if(!navigator.clipboard)throw Error("Clipboard API unavailable");await Promise.resolve(e).then(e=>navigator.clipboard.writeText(e)),r()}catch{a.toast.error("Unable to copy to clipboard")}};e.s(["copyToClipboard",0,r])}]);

//# debugId=d0de1ab7-2316-8fcc-6fcf-17f38a526b08