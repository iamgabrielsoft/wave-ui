import{r as t,o as i,f as _,a as e,w as c,b as r,_ as m,d as $,V as x}from"./index.837b2231.js";function h(s,n,d,u,f,p){const o=t("title-link"),l=t("example");return i(),_("div",null,[e(o,{h2:""},{default:c(()=>[r("Default")]),_:1}),e(l,null,{pug:c(()=>[]),_:1})])}const v={},k=m(v,[["render",h]]),w=$("div",{class:"w-divider my12"},null,-1);function g(s,n,d,u,f,p){const o=t("title-link"),l=t("alert"),a=t("component-api");return i(),_("div",null,[w,e(o,{class:"title1",h2:""},{default:c(()=>[r("API")]),_:1}),e(l,{class:"mb6",info:""},{default:c(()=>[r("The missing props descriptions will be added shortly (all the props are already listed).")]),_:1}),e(a,{class:"mt0",items:p.props,descriptions:s.propsDescs,title:"Props"},null,8,["items","descriptions"]),e(a,{items:s.slots,title:"Slots"},null,8,["items"]),e(a,{items:p.events,title:"Events"},null,8,["items"])])}const V={},y={},B={},D={data:()=>({propsDescs:V,slots:y}),computed:{props(){return x.props},events(){return x.emits.reduce((s,n)=>(s[n]=B[n]||{})&&s,{})}}},E=m(D,[["render",g]]);function N(s,n,d,u,f,p){const o=t("ui-component-title"),l=t("examples"),a=t("api");return i(),_("main",null,[e(o,{slug:"w-parallax","in-progress":""},{default:c(()=>[r("w-parallax")]),_:1}),e(l),e(a)])}const P={components:{Examples:k,Api:E}},C=m(P,[["render",N]]);export{C as default};
