import{a as b}from"./index.0235ccf1.js";import{r,o as c,f as i,a as n,w as s,b as a,d as t,F as k,j as v,m as d,t as h,h as w,_ as y}from"./index.837b2231.js";const x="/wave-ui/assets/divriots.2aecac64.svg",$={class:"text-center"},B=t("div",{class:"mb12"},[t("h2",null,"A big THANK YOU to all the backers!"),t("p",null,"Thank you to all of you, you make this happen, you are part of this library!")],-1),N=["href"],T=["src"],A={class:"backer plus ma1"},C=t("p",{class:"mt10"},[a("If you would like to support Wave UI, you can"),t("a",{class:"mx1",href:"https://github.com/sponsors/antoniandre",target:"_blank"},"become a sponsor"),a("or"),t("a",{class:"ml1",href:"https://www.paypal.me/antoniandre1",target:"_blank"},"make a donation"),a(". Thank you! \u{1F64F}\u{1F64F}")],-1),D=t("h2",{class:"gold"},"Gold Sponsors \u{1F525}",-1),L={class:"gold-sponsors"},S={href:"https://divriots.com/",target:"_blank"},V=["src"];function j(e,l,_,G,H,I){const p=r("title-link"),u=r("w-tooltip"),m=r("w-icon"),f=r("w-flex");return c(),i("main",null,[n(p,{class:"mt4",h1:""},{default:s(()=>[a("Backers")]),_:1}),t("div",$,[B,n(f,{class:"align-center wrap justify-center backers"},{default:s(()=>[(c(!0),i(k,null,v(e.backers,o=>(c(),i("div",{class:"backer ma1",key:o.username},[n(u,null,{activator:s(({on:g})=>[t("a",d({href:o.url,target:"_blank"},h(g,!0)),[t("img",{class:"avatar",src:o.avatar,alt:""},null,8,T)],16,N)]),default:s(()=>[a(w(o.username),1)]),_:2},1024)]))),128)),n(u,null,{activator:s(({on:o})=>[t("div",A,[t("a",d({class:"mx1",href:"https://github.com/sponsors/antoniandre",target:"_blank"},h(o,!0)),[n(m,{class:"white",xl:""},{default:s(()=>[a("wi-plus")]),_:1})],16)])]),default:s(()=>[a("Add yourself!")]),_:1})]),_:1}),C,D,t("div",L,[t("a",S,[t("img",{src:e.DivRiotsLogo},null,8,V)])])])])}const E=["divriots","nmauersberg","KleinSamuel","chris-deep","crbast","CoolGoose","bohdaq","consuman","bastien09","micksp","orefalo","helenetran","antoniandre"],F={data:()=>({backers:[],DivRiotsLogo:x}),created(){E.forEach((e,l)=>{this.backers[l]={username:e,avatar:"",url:`https://github.com/${e}`},b.get(`https://api.github.com/users/${e}`).then(_=>{this.backers[l].avatar=_.data.avatar_url})})}},U=y(F,[["render",j]]);export{U as default};
