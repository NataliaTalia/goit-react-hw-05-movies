"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[186],{186:function(e,n,t){t.r(n);var r=t(861),c=t(439),i=t(757),o=t.n(i),a=t(791),s=t(689),u=t(184);n.default=function(){var e=(0,a.useState)([]),n=(0,c.Z)(e,2),t=n[0],i=n[1],h=(0,s.UO)().movieId;return(0,a.useEffect)((function(){var e=function(){var e=(0,r.Z)(o().mark((function e(){var n,t,r,c;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n={method:"GET",headers:{accept:"application/json",Authorization:"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyNzhiMWJkMjk1YWUyZGI4YWYzMjhjNWE5ZDQzMGE3NyIsInN1YiI6IjY0N2IxYmE1ZTMyM2YzMDEwNjE1MDc1MCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.vxLHfnX6-9KADyJ-ltI_WHyCFtNAuDJ1qUjAWK6Nndc"}},e.prev=1,e.next=4,fetch("https://api.themoviedb.org/3/movie/".concat(h,"/reviews?language=en-US&page=1"),n);case 4:return t=e.sent,e.next=7,t.json();case 7:r=e.sent,c=r.results,console.log("here are saved reviews from the fetch",c),i(c),e.next=16;break;case 13:e.prev=13,e.t0=e.catch(1),console.error("Error while fetching reviews",e.t0);case 16:case"end":return e.stop()}}),e,null,[[1,13]])})));return function(){return e.apply(this,arguments)}}();e()}),[h]),(0,u.jsx)("ul",{children:t.length>0?t.map((function(e){var n,t=e.id,r=e.author_details,c=e.content,i=e.created_at;return(0,u.jsxs)("li",{children:[(0,u.jsxs)("h5",{children:["Username: ",r.username]}),(0,u.jsx)("p",{children:c}),(0,u.jsx)("p",{children:(n=i,new Date(n).toLocaleString())})]},t)})):(0,u.jsx)("p",{children:"We don't have reviews for this movie"})})}},861:function(e,n,t){function r(e,n,t,r,c,i,o){try{var a=e[i](o),s=a.value}catch(u){return void t(u)}a.done?n(s):Promise.resolve(s).then(r,c)}function c(e){return function(){var n=this,t=arguments;return new Promise((function(c,i){var o=e.apply(n,t);function a(e){r(o,c,i,a,s,"next",e)}function s(e){r(o,c,i,a,s,"throw",e)}a(void 0)}))}}t.d(n,{Z:function(){return c}})}}]);
//# sourceMappingURL=186.1c498e17.chunk.js.map