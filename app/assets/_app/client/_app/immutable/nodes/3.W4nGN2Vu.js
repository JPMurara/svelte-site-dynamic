import{s as z,a as T,e as p,t as S,H as C,c as V,b as _,j as h,f as c,k as L,l as P,d as f,m as k,i as E,o as d,p as q}from"../chunks/scheduler.dbZF-59q.js";import{S as R,i as U,c as A,a as B,m as F,t as G,b as J,d as K}from"../chunks/index.BSEiThIP.js";import{a as M}from"../chunks/env.BJCrm-CR.js";import{H as N}from"../chunks/Head.B7VCmF3a.js";function O(r){let a,l=r[0].metaTitle+"",s;return{c(){a=p("title"),s=S(l)},l(e){a=_(e,"TITLE",{});var o=h(a);s=L(o,l),o.forEach(c)},m(e,o){E(e,a,o),d(a,s)},p(e,o){o&1&&l!==(l=e[0].metaTitle+"")&&q(s,l)},d(e){e&&c(a)}}}function Q(r){let a,l,s,e,o,u,v,n,m,I,H,b,g,y,x;return a=new N({props:{data:r[0],$$slots:{default:[O]},$$scope:{ctx:r}}}),{c(){A(a.$$.fragment),l=T(),s=p("div"),e=p("div"),o=T(),u=p("div"),v=T(),n=p("div"),m=p("h1"),I=S(r[2]),H=T(),b=p("div"),g=p("div"),y=new C(!1),this.h()},l(t){B(a.$$.fragment,t),l=V(t),s=_(t,"DIV",{class:!0});var i=h(s);e=_(i,"DIV",{class:!0,style:!0,"aria-label":!0}),h(e).forEach(c),o=V(i),u=_(i,"DIV",{class:!0}),h(u).forEach(c),v=V(i),n=_(i,"DIV",{class:!0});var D=h(n);m=_(D,"H1",{class:!0,style:!0});var w=h(m);I=L(w,r[2]),w.forEach(c),D.forEach(c),i.forEach(c),H=V(t),b=_(t,"DIV",{class:!0});var $=h(b);g=_($,"DIV",{class:!0});var j=h(g);y=P(j,!1),j.forEach(c),$.forEach(c),this.h()},h(){f(e,"class","absolute inset-0 bg-no-repeat bg-cover"),k(e,"background-image","url('"+M+"/images/jerome-about.webp')"),k(e,"background-position","center 45%"),f(e,"aria-label","Service banner image"),f(u,"class","absolute inset-0 bg-black opacity-60"),f(m,"class","!text-5xl lg:!text-7xl mb-6 !text-gray-200 !tracking-tight z-40"),k(m,"text-shadow","2px 2px 4px rgba(0, 0, 0, 0.5)"),f(n,"class","absolute inset-0 flex items-center justify-center"),f(s,"class","relative mt-40 md:mt-28 h-96 xl:h-[30rem] 2xl:h-[35rem]"),y.a=null,f(g,"class","prose max-w-none !font-thin"),f(b,"class","container mx-auto px-4 mb-20 mt-12")},m(t,i){F(a,t,i),E(t,l,i),E(t,s,i),d(s,e),d(s,o),d(s,u),d(s,v),d(s,n),d(n,m),d(m,I),E(t,H,i),E(t,b,i),d(b,g),y.m(r[1],g),x=!0},p(t,[i]){const D={};i&1&&(D.data=t[0]),i&65&&(D.$$scope={dirty:i,ctx:t}),a.$set(D),(!x||i&4)&&q(I,t[2]),(!x||i&2)&&y.p(t[1])},i(t){x||(G(a.$$.fragment,t),x=!0)},o(t){J(a.$$.fragment,t),x=!1},d(t){t&&(c(l),c(s),c(H),c(b)),K(a,t)}}}function W(r,a,l){let s,e,o,u,v,{data:n}=a;return r.$$set=m=>{"data"in m&&l(3,n=m.data)},r.$$.update=()=>{r.$$.dirty&8&&l(2,s=n.aboutData.title),r.$$.dirty&8&&l(5,e=n.aboutData.meta_title),r.$$.dirty&8&&l(4,o=n.aboutData.meta_desc),r.$$.dirty&8&&l(1,u=n.aboutData.content),r.$$.dirty&48&&l(0,v={metaTitle:e,metaDescription:o})},[v,u,s,n,o,e]}class et extends R{constructor(a){super(),U(this,a,W,Q,z,{data:3})}}export{et as component};
