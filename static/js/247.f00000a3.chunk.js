"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[247],{247:function(e,t,n){n.r(t);var r=n(861),c=n(439),a=n(757),i=n.n(a),o=n(791),s=n(689),u=n(184);t.default=function(){var e=(0,s.UO)().movieId,t=(0,o.useState)(),n=(0,c.Z)(t,2),a=n[0],h=n[1];return(0,o.useEffect)((function(){var t=function(){var t=(0,r.Z)(i().mark((function t(){var n,r,c,a;return i().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n={method:"GET",headers:{accept:"application/json",Authorization:"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyNzhiMWJkMjk1YWUyZGI4YWYzMjhjNWE5ZDQzMGE3NyIsInN1YiI6IjY0N2IxYmE1ZTMyM2YzMDEwNjE1MDc1MCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.vxLHfnX6-9KADyJ-ltI_WHyCFtNAuDJ1qUjAWK6Nndc"}},t.prev=1,t.next=4,fetch("https://api.themoviedb.org/3/movie/".concat(e,"/credits?language=en-US"),n);case 4:return r=t.sent,t.next=7,r.json();case 7:c=t.sent,a=c.cast,h(a),t.next=15;break;case 12:t.prev=12,t.t0=t.catch(1),console.error("Couldnt fetch the credits",t.t0.message);case 15:case"end":return t.stop()}}),t,null,[[1,12]])})));return function(){return t.apply(this,arguments)}}();t()}),[e]),(0,u.jsx)("ul",{children:a&&a.length>0?a.map((function(e){var t=e.id,n=e.profile_path,r=e.name,c=e.character;return(0,u.jsxs)("li",{children:[(0,u.jsx)("img",{src:n?"https://image.tmdb.org/t/p/w200/".concat(n):"https://placehold.co/200x300/blue/yellow?text=No+Image",alt:r}),(0,u.jsxs)("p",{children:["Name: ",r]}),(0,u.jsxs)("p",{children:["Character: ",c]})]},t)})):(0,u.jsx)("p",{children:"The cast list is not available for this movie"})})}},861:function(e,t,n){function r(e,t,n,r,c,a,i){try{var o=e[a](i),s=o.value}catch(u){return void n(u)}o.done?t(s):Promise.resolve(s).then(r,c)}function c(e){return function(){var t=this,n=arguments;return new Promise((function(c,a){var i=e.apply(t,n);function o(e){r(i,c,a,o,s,"next",e)}function s(e){r(i,c,a,o,s,"throw",e)}o(void 0)}))}}n.d(t,{Z:function(){return c}})}}]);
//# sourceMappingURL=247.f00000a3.chunk.js.map