function t(t){return t&&t.__esModule?t.default:t}var e,n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r=/^\s+|\s+$/g,o=/^[-+]0x[0-9a-f]+$/i,i=/^0b[01]+$/i,u=/^0o[0-7]+$/i,a=parseInt,f="object"==typeof n&&n&&n.Object===Object&&n,c="object"==typeof self&&self&&self.Object===Object&&self,l=f||c||Function("return this")(),s=Object.prototype.toString,d=Math.max,m=Math.min,p=function(){return l.Date.now()};function v(t,e,n){var r,o,i,u,a,f,c=0,l=!1,s=!1,v=!0;if("function"!=typeof t)throw new TypeError("Expected a function");function y(e){var n=r,i=o;return r=o=void 0,c=e,u=t.apply(i,n)}function S(t){return c=t,a=setTimeout(x,e),l?y(t):u}function j(t){var n=t-f;return void 0===f||n>=e||n<0||s&&t-c>=i}function x(){var t=p();if(j(t))return T(t);a=setTimeout(x,function(t){var n=e-(t-f);return s?m(n,i-(t-c)):n}(t))}function T(t){return a=void 0,v&&r?y(t):(r=o=void 0,u)}function h(){var t=p(),n=j(t);if(r=arguments,o=this,f=t,n){if(void 0===a)return S(f);if(s)return a=setTimeout(x,e),y(f)}return void 0===a&&(a=setTimeout(x,e)),u}return e=b(e)||0,g(n)&&(l=!!n.leading,i=(s="maxWait"in n)?d(b(n.maxWait)||0,e):i,v="trailing"in n?!!n.trailing:v),h.cancel=function(){void 0!==a&&clearTimeout(a),c=0,r=f=o=a=void 0},h.flush=function(){return void 0===a?u:T(p())},h}function g(t){var e=typeof t;return!!t&&("object"==e||"function"==e)}function b(t){if("number"==typeof t)return t;if(function(t){return"symbol"==typeof t||function(t){return!!t&&"object"==typeof t}(t)&&"[object Symbol]"==s.call(t)}(t))return NaN;if(g(t)){var e="function"==typeof t.valueOf?t.valueOf():t;t=g(e)?e+"":e}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(r,"");var n=i.test(t);return n||u.test(t)?a(t.slice(2),n?2:8):o.test(t)?NaN:+t}e=function(t,e,n){var r=!0,o=!0;if("function"!=typeof t)throw new TypeError("Expected a function");return g(n)&&(r="leading"in n?!!n.leading:r,o="trailing"in n?!!n.trailing:o),v(t,e,{leading:r,maxWait:e,trailing:o})};const y={form:document.querySelector(".feedback-form"),input:document.querySelector("input"),textarea:document.querySelector("textarea"),submitBtn:document.querySelector("button")},S={};form.addEventListener("input",t(e)((function(t){S[t.target.name]=t.target.value;const e=JSON.stringify(S);localStorage.setItem("feedback-form-state",e)}),500)),form.addEventListener("submit",(function(t){t.preventDefault(),t.currentTarget.reset();JSON.parse(localStorage.getItem("feedback-form-state"))})),function(){const t=localStorage.getItem("feedback-form-state");if(null===t)return;y.input.value=t.email||"",y.textarea.value=t.message||""}();
//# sourceMappingURL=03-feedback.abc4c4b7.js.map
