import{S as B,i as D,s as E,e as f,p as N,a as $,d as l,b as S,f as s,g as F,l as P,q as R,h as V,c as G,m as H,t as J,j as K,k as L,u as M,n as O}from"./vendor.b5b71693.js";import{I as Q,m as T,f as U}from"./store.eb533cad.js";function z(m,e,n){const i=m.slice();return i[1]=e[n],i}function A(m){let e,n,i=m[1].description+"",_,x,r,p=m[1].title+"",u,C,h,b,v,g,j;return{c(){e=f("a"),n=f("div"),_=N(i),x=$(),r=f("div"),u=N(p),C=$(),l(n,"class","flex items-center justify-center new-form-card"),l(r,"class","my-2 text-center"),l(e,"class","relative flex flex-col w-full form-card"),l(e,"href",h="/form/edit/"+m[1].id),l(e,"title",b=m[1].title)},m(o,d){S(o,e,d),s(e,n),s(n,_),s(e,x),s(e,r),s(r,u),s(e,C),g||(j=F(v=P.call(null,e)),g=!0)},p(o,d){d&1&&i!==(i=o[1].description+"")&&R(_,i),d&1&&p!==(p=o[1].title+"")&&R(u,p),d&1&&h!==(h="/form/edit/"+o[1].id)&&l(e,"href",h),d&1&&b!==(b=o[1].title)&&l(e,"title",b)},d(o){o&&V(e),g=!1,j()}}}function W(m){let e,n,i,_,x,r,p,u,C,h,b,v,g,j,o,d,y,q;u=new Q({props:{path:T}});let w=m[0],c=[];for(let t=0;t<w.length;t+=1)c[t]=A(z(m,w,t));return{c(){e=f("main"),n=f("div"),i=f("h3"),i.textContent="New",_=$(),x=f("div"),r=f("a"),p=f("div"),G(u.$$.fragment),C=$(),h=f("div"),h.textContent="New form",b=$(),v=f("div"),g=f("h3"),g.textContent="Recent Forms",j=$(),o=f("div");for(let t=0;t<c.length;t+=1)c[t].c();l(i,"class","p-2 font-bold h3"),l(p,"class","flex items-center justify-center new-form-card"),l(h,"class","my-2 text-center"),l(r,"class","flex flex-col form-card"),l(r,"href","/form/edit/new"),l(r,"title","Create new form"),l(x,"class","m-3"),l(n,"class","mt-4"),l(g,"class","p-2 font-bold h3"),l(o,"class","flex flex-col gap-2 m-3 md:flex-row"),l(v,"class","mt-4"),l(e,"class","margin-page")},m(t,k){S(t,e,k),s(e,n),s(n,i),s(n,_),s(n,x),s(x,r),s(r,p),H(u,p,null),s(r,C),s(r,h),s(e,b),s(e,v),s(v,g),s(v,j),s(v,o);for(let a=0;a<c.length;a+=1)c[a].m(o,null);d=!0,y||(q=F(P.call(null,r)),y=!0)},p(t,[k]){if(k&1){w=t[0];let a;for(a=0;a<w.length;a+=1){const I=z(t,w,a);c[a]?c[a].p(I,k):(c[a]=A(I),c[a].c(),c[a].m(o,null))}for(;a<c.length;a+=1)c[a].d(1);c.length=w.length}},i(t){d||(J(u.$$.fragment,t),d=!0)},o(t){K(u.$$.fragment,t),d=!1},d(t){t&&V(e),L(u),M(c,t),y=!1,q()}}}function X(m,e,n){let i;return O(m,U,_=>n(0,i=_)),[i]}class ee extends B{constructor(e){super();D(this,e,X,W,E,{})}}export{ee as default};
