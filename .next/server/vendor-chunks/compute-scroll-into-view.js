"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/compute-scroll-into-view";
exports.ids = ["vendor-chunks/compute-scroll-into-view"];
exports.modules = {

/***/ "(ssr)/./node_modules/compute-scroll-into-view/dist/index.js":
/*!*************************************************************!*\
  !*** ./node_modules/compute-scroll-into-view/dist/index.js ***!
  \*************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   compute: () => (/* binding */ r)\n/* harmony export */ });\nconst t=t=>\"object\"==typeof t&&null!=t&&1===t.nodeType,e=(t,e)=>(!e||\"hidden\"!==t)&&(\"visible\"!==t&&\"clip\"!==t),n=(t,n)=>{if(t.clientHeight<t.scrollHeight||t.clientWidth<t.scrollWidth){const o=getComputedStyle(t,null);return e(o.overflowY,n)||e(o.overflowX,n)||(t=>{const e=(t=>{if(!t.ownerDocument||!t.ownerDocument.defaultView)return null;try{return t.ownerDocument.defaultView.frameElement}catch(t){return null}})(t);return!!e&&(e.clientHeight<t.scrollHeight||e.clientWidth<t.scrollWidth)})(t)}return!1},o=(t,e,n,o,l,r,i,s)=>r<t&&i>e||r>t&&i<e?0:r<=t&&s<=n||i>=e&&s>=n?r-t-o:i>e&&s<n||r<t&&s>n?i-e+l:0,l=t=>{const e=t.parentElement;return null==e?t.getRootNode().host||null:e},r=(e,r)=>{var i,s,d,h;if(\"undefined\"==typeof document)return[];const{scrollMode:c,block:f,inline:u,boundary:a,skipOverflowHiddenElements:g}=r,p=\"function\"==typeof a?a:t=>t!==a;if(!t(e))throw new TypeError(\"Invalid target\");const m=document.scrollingElement||document.documentElement,w=[];let W=e;for(;t(W)&&p(W);){if(W=l(W),W===m){w.push(W);break}null!=W&&W===document.body&&n(W)&&!n(document.documentElement)||null!=W&&n(W,g)&&w.push(W)}const b=null!=(s=null==(i=window.visualViewport)?void 0:i.width)?s:innerWidth,H=null!=(h=null==(d=window.visualViewport)?void 0:d.height)?h:innerHeight,{scrollX:y,scrollY:M}=window,{height:v,width:E,top:x,right:C,bottom:I,left:R}=e.getBoundingClientRect(),{top:T,right:B,bottom:F,left:V}=(t=>{const e=window.getComputedStyle(t);return{top:parseFloat(e.scrollMarginTop)||0,right:parseFloat(e.scrollMarginRight)||0,bottom:parseFloat(e.scrollMarginBottom)||0,left:parseFloat(e.scrollMarginLeft)||0}})(e);let k=\"start\"===f||\"nearest\"===f?x-T:\"end\"===f?I+F:x+v/2-T+F,D=\"center\"===u?R+E/2-V+B:\"end\"===u?C+B:R-V;const L=[];for(let t=0;t<w.length;t++){const e=w[t],{height:n,width:l,top:r,right:i,bottom:s,left:d}=e.getBoundingClientRect();if(\"if-needed\"===c&&x>=0&&R>=0&&I<=H&&C<=b&&x>=r&&I<=s&&R>=d&&C<=i)return L;const h=getComputedStyle(e),a=parseInt(h.borderLeftWidth,10),g=parseInt(h.borderTopWidth,10),p=parseInt(h.borderRightWidth,10),W=parseInt(h.borderBottomWidth,10);let T=0,B=0;const F=\"offsetWidth\"in e?e.offsetWidth-e.clientWidth-a-p:0,V=\"offsetHeight\"in e?e.offsetHeight-e.clientHeight-g-W:0,S=\"offsetWidth\"in e?0===e.offsetWidth?0:l/e.offsetWidth:0,X=\"offsetHeight\"in e?0===e.offsetHeight?0:n/e.offsetHeight:0;if(m===e)T=\"start\"===f?k:\"end\"===f?k-H:\"nearest\"===f?o(M,M+H,H,g,W,M+k,M+k+v,v):k-H/2,B=\"start\"===u?D:\"center\"===u?D-b/2:\"end\"===u?D-b:o(y,y+b,b,a,p,y+D,y+D+E,E),T=Math.max(0,T+M),B=Math.max(0,B+y);else{T=\"start\"===f?k-r-g:\"end\"===f?k-s+W+V:\"nearest\"===f?o(r,s,n,g,W+V,k,k+v,v):k-(r+n/2)+V/2,B=\"start\"===u?D-d-a:\"center\"===u?D-(d+l/2)+F/2:\"end\"===u?D-i+p+F:o(d,i,l,a,p+F,D,D+E,E);const{scrollLeft:t,scrollTop:h}=e;T=0===X?0:Math.max(0,Math.min(h+T/X,e.scrollHeight-n/X+V)),B=0===S?0:Math.max(0,Math.min(t+B/S,e.scrollWidth-l/S+F)),k+=h-T,D+=t-B}L.push({el:e,top:T,left:B})}return L};//# sourceMappingURL=index.js.map\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvY29tcHV0ZS1zY3JvbGwtaW50by12aWV3L2Rpc3QvaW5kZXguanMiLCJtYXBwaW5ncyI6Ijs7OztBQUFBLDBIQUEwSCwrREFBK0QsaUNBQWlDLGdEQUFnRCxhQUFhLDhEQUE4RCxJQUFJLGdEQUFnRCxTQUFTLGFBQWEsS0FBSyx3RUFBd0UsS0FBSyxTQUFTLHlHQUF5Ryx3QkFBd0IsNENBQTRDLFdBQVcsWUFBWSx5Q0FBeUMsTUFBTSxzRUFBc0UscUNBQXFDLCtDQUErQyxpRUFBaUUsUUFBUSxLQUFLLFdBQVcsRUFBRSxpQkFBaUIsVUFBVSxNQUFNLDJGQUEyRix5SkFBeUosb0JBQW9CLFNBQVMsK0NBQStDLDRCQUE0Qiw4QkFBOEIsTUFBTSxtQ0FBbUMsT0FBTyxpS0FBaUssS0FBSyx3R0FBd0csV0FBVyxZQUFZLFdBQVcsS0FBSyxjQUFjLCtDQUErQywyQkFBMkIsNEVBQTRFLGtLQUFrSyxZQUFZLDRPQUE0TyxzTUFBc00sS0FBSyxpTEFBaUwsTUFBTSx5QkFBeUIsR0FBRyxtSUFBbUksUUFBUSxrQkFBa0IsRUFBRSxVQUErQiIsInNvdXJjZXMiOlsid2VicGFjazovL2FwcC8uL25vZGVfbW9kdWxlcy9jb21wdXRlLXNjcm9sbC1pbnRvLXZpZXcvZGlzdC9pbmRleC5qcz9mMmQ1Il0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHQ9dD0+XCJvYmplY3RcIj09dHlwZW9mIHQmJm51bGwhPXQmJjE9PT10Lm5vZGVUeXBlLGU9KHQsZSk9PighZXx8XCJoaWRkZW5cIiE9PXQpJiYoXCJ2aXNpYmxlXCIhPT10JiZcImNsaXBcIiE9PXQpLG49KHQsbik9PntpZih0LmNsaWVudEhlaWdodDx0LnNjcm9sbEhlaWdodHx8dC5jbGllbnRXaWR0aDx0LnNjcm9sbFdpZHRoKXtjb25zdCBvPWdldENvbXB1dGVkU3R5bGUodCxudWxsKTtyZXR1cm4gZShvLm92ZXJmbG93WSxuKXx8ZShvLm92ZXJmbG93WCxuKXx8KHQ9Pntjb25zdCBlPSh0PT57aWYoIXQub3duZXJEb2N1bWVudHx8IXQub3duZXJEb2N1bWVudC5kZWZhdWx0VmlldylyZXR1cm4gbnVsbDt0cnl7cmV0dXJuIHQub3duZXJEb2N1bWVudC5kZWZhdWx0Vmlldy5mcmFtZUVsZW1lbnR9Y2F0Y2godCl7cmV0dXJuIG51bGx9fSkodCk7cmV0dXJuISFlJiYoZS5jbGllbnRIZWlnaHQ8dC5zY3JvbGxIZWlnaHR8fGUuY2xpZW50V2lkdGg8dC5zY3JvbGxXaWR0aCl9KSh0KX1yZXR1cm4hMX0sbz0odCxlLG4sbyxsLHIsaSxzKT0+cjx0JiZpPmV8fHI+dCYmaTxlPzA6cjw9dCYmczw9bnx8aT49ZSYmcz49bj9yLXQtbzppPmUmJnM8bnx8cjx0JiZzPm4/aS1lK2w6MCxsPXQ9Pntjb25zdCBlPXQucGFyZW50RWxlbWVudDtyZXR1cm4gbnVsbD09ZT90LmdldFJvb3ROb2RlKCkuaG9zdHx8bnVsbDplfSxyPShlLHIpPT57dmFyIGkscyxkLGg7aWYoXCJ1bmRlZmluZWRcIj09dHlwZW9mIGRvY3VtZW50KXJldHVybltdO2NvbnN0e3Njcm9sbE1vZGU6YyxibG9jazpmLGlubGluZTp1LGJvdW5kYXJ5OmEsc2tpcE92ZXJmbG93SGlkZGVuRWxlbWVudHM6Z309cixwPVwiZnVuY3Rpb25cIj09dHlwZW9mIGE/YTp0PT50IT09YTtpZighdChlKSl0aHJvdyBuZXcgVHlwZUVycm9yKFwiSW52YWxpZCB0YXJnZXRcIik7Y29uc3QgbT1kb2N1bWVudC5zY3JvbGxpbmdFbGVtZW50fHxkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQsdz1bXTtsZXQgVz1lO2Zvcig7dChXKSYmcChXKTspe2lmKFc9bChXKSxXPT09bSl7dy5wdXNoKFcpO2JyZWFrfW51bGwhPVcmJlc9PT1kb2N1bWVudC5ib2R5JiZuKFcpJiYhbihkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQpfHxudWxsIT1XJiZuKFcsZykmJncucHVzaChXKX1jb25zdCBiPW51bGwhPShzPW51bGw9PShpPXdpbmRvdy52aXN1YWxWaWV3cG9ydCk/dm9pZCAwOmkud2lkdGgpP3M6aW5uZXJXaWR0aCxIPW51bGwhPShoPW51bGw9PShkPXdpbmRvdy52aXN1YWxWaWV3cG9ydCk/dm9pZCAwOmQuaGVpZ2h0KT9oOmlubmVySGVpZ2h0LHtzY3JvbGxYOnksc2Nyb2xsWTpNfT13aW5kb3cse2hlaWdodDp2LHdpZHRoOkUsdG9wOngscmlnaHQ6Qyxib3R0b206SSxsZWZ0OlJ9PWUuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkse3RvcDpULHJpZ2h0OkIsYm90dG9tOkYsbGVmdDpWfT0odD0+e2NvbnN0IGU9d2luZG93LmdldENvbXB1dGVkU3R5bGUodCk7cmV0dXJue3RvcDpwYXJzZUZsb2F0KGUuc2Nyb2xsTWFyZ2luVG9wKXx8MCxyaWdodDpwYXJzZUZsb2F0KGUuc2Nyb2xsTWFyZ2luUmlnaHQpfHwwLGJvdHRvbTpwYXJzZUZsb2F0KGUuc2Nyb2xsTWFyZ2luQm90dG9tKXx8MCxsZWZ0OnBhcnNlRmxvYXQoZS5zY3JvbGxNYXJnaW5MZWZ0KXx8MH19KShlKTtsZXQgaz1cInN0YXJ0XCI9PT1mfHxcIm5lYXJlc3RcIj09PWY/eC1UOlwiZW5kXCI9PT1mP0krRjp4K3YvMi1UK0YsRD1cImNlbnRlclwiPT09dT9SK0UvMi1WK0I6XCJlbmRcIj09PXU/QytCOlItVjtjb25zdCBMPVtdO2ZvcihsZXQgdD0wO3Q8dy5sZW5ndGg7dCsrKXtjb25zdCBlPXdbdF0se2hlaWdodDpuLHdpZHRoOmwsdG9wOnIscmlnaHQ6aSxib3R0b206cyxsZWZ0OmR9PWUuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7aWYoXCJpZi1uZWVkZWRcIj09PWMmJng+PTAmJlI+PTAmJkk8PUgmJkM8PWImJng+PXImJkk8PXMmJlI+PWQmJkM8PWkpcmV0dXJuIEw7Y29uc3QgaD1nZXRDb21wdXRlZFN0eWxlKGUpLGE9cGFyc2VJbnQoaC5ib3JkZXJMZWZ0V2lkdGgsMTApLGc9cGFyc2VJbnQoaC5ib3JkZXJUb3BXaWR0aCwxMCkscD1wYXJzZUludChoLmJvcmRlclJpZ2h0V2lkdGgsMTApLFc9cGFyc2VJbnQoaC5ib3JkZXJCb3R0b21XaWR0aCwxMCk7bGV0IFQ9MCxCPTA7Y29uc3QgRj1cIm9mZnNldFdpZHRoXCJpbiBlP2Uub2Zmc2V0V2lkdGgtZS5jbGllbnRXaWR0aC1hLXA6MCxWPVwib2Zmc2V0SGVpZ2h0XCJpbiBlP2Uub2Zmc2V0SGVpZ2h0LWUuY2xpZW50SGVpZ2h0LWctVzowLFM9XCJvZmZzZXRXaWR0aFwiaW4gZT8wPT09ZS5vZmZzZXRXaWR0aD8wOmwvZS5vZmZzZXRXaWR0aDowLFg9XCJvZmZzZXRIZWlnaHRcImluIGU/MD09PWUub2Zmc2V0SGVpZ2h0PzA6bi9lLm9mZnNldEhlaWdodDowO2lmKG09PT1lKVQ9XCJzdGFydFwiPT09Zj9rOlwiZW5kXCI9PT1mP2stSDpcIm5lYXJlc3RcIj09PWY/byhNLE0rSCxILGcsVyxNK2ssTStrK3Ysdik6ay1ILzIsQj1cInN0YXJ0XCI9PT11P0Q6XCJjZW50ZXJcIj09PXU/RC1iLzI6XCJlbmRcIj09PXU/RC1iOm8oeSx5K2IsYixhLHAseStELHkrRCtFLEUpLFQ9TWF0aC5tYXgoMCxUK00pLEI9TWF0aC5tYXgoMCxCK3kpO2Vsc2V7VD1cInN0YXJ0XCI9PT1mP2stci1nOlwiZW5kXCI9PT1mP2stcytXK1Y6XCJuZWFyZXN0XCI9PT1mP28ocixzLG4sZyxXK1YsayxrK3Ysdik6ay0ocituLzIpK1YvMixCPVwic3RhcnRcIj09PXU/RC1kLWE6XCJjZW50ZXJcIj09PXU/RC0oZCtsLzIpK0YvMjpcImVuZFwiPT09dT9ELWkrcCtGOm8oZCxpLGwsYSxwK0YsRCxEK0UsRSk7Y29uc3R7c2Nyb2xsTGVmdDp0LHNjcm9sbFRvcDpofT1lO1Q9MD09PVg/MDpNYXRoLm1heCgwLE1hdGgubWluKGgrVC9YLGUuc2Nyb2xsSGVpZ2h0LW4vWCtWKSksQj0wPT09Uz8wOk1hdGgubWF4KDAsTWF0aC5taW4odCtCL1MsZS5zY3JvbGxXaWR0aC1sL1MrRikpLGsrPWgtVCxEKz10LUJ9TC5wdXNoKHtlbDplLHRvcDpULGxlZnQ6Qn0pfXJldHVybiBMfTtleHBvcnR7ciBhcyBjb21wdXRlfTsvLyMgc291cmNlTWFwcGluZ1VSTD1pbmRleC5qcy5tYXBcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/compute-scroll-into-view/dist/index.js\n");

/***/ })

};
;