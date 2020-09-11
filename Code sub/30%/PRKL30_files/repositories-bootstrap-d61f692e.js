System.register(["./vendor.js","./frameworks.js"],(function(){"use strict";var e,t,n,a,s,r,o,i,l,c,u,d,f,m,p,j,h,g,v,y,b,w,L;return{setters:[function(m){e=m.o,t=m.a,n=m.r,a=m.c,s=m.b,r=m.K,o=m.R,i=m.g,l=m.q,c=m.f,u=m.j,d=m.a7,f=m.a8},function(e){m=e.a,p=e.r,j=e.b,h=e.q,g=e.R,v=e.d,y=e.k,b=e.aF,w=e.p,L=e.L}],execute:function(){async function T(e){const t=e.form;s(t,"#release_draft",HTMLInputElement).value="1",k(e,"saving");try{const n=await(await v(t.action,{method:t.method,body:new FormData(t),headers:{Accept:"application/json"}})).json();return k(e,"saved"),setTimeout(k,5e3,e,"default"),c(t,"release:saved",{release:n}),n}catch(n){throw k(e,"failed"),n}}function _(e){const t=a(e,".js-releases-marketplace-publish-container"),n=s(t,".js-releases-marketplace-publish-preview");e.checked?n.classList.remove("d-none"):n.classList.add("d-none")}function k(e,t){for(const n of e.querySelectorAll(".js-save-draft-button-state"))n.hidden=n.getAttribute("data-state")!==t;e.disabled="saving"===t}function E(e){const t=document.querySelector(".js-release-target-wrapper");if(null!=t){switch(e){case"valid":t.classList.add("d-none");break;case"loading":break;default:t.classList.remove("d-none")}for(const t of document.querySelectorAll(".js-tag-status-message"))t.hidden=t.getAttribute("data-state")!==e}}e(".repository-import",{subscribe:e=>m(e,"socket:message",(function(e){const t=e.detail.data;t.redirect_to&&(document.location.href=t.redirect_to,e.stopImmediatePropagation())}))}),t("change","input.js-repository-import-lfs-opt",(function({currentTarget:e}){const t=parseInt(e.getAttribute("data-percent-used")||""),n=a(e,".js-repository-import-lfs-container"),r=e.getAttribute("data-used")||"";s(n,".js-repository-import-lfs-warn").classList.toggle("d-none",!(t>100)),s(n,".js-usage-bar").classList.toggle("exceeded",t>=100),s(n,".js-usage-bar").setAttribute("aria-label",`${t}%`),s(n,".js-repository-import-lfs-progress").style.width=`${t}%`,s(n,"span.js-usage-text").textContent=r})),n(".js-repository-import-author-form",(async function(e,t){const n=await t.html();a(e,".js-repository-import-author").replaceWith(n.html)})),t("click",".js-repository-import-projects-cancel-button",(function(){const e=s(document,".js-repository-import-projects-cancel-form",HTMLFormElement);p(e)})),t("tab-container-changed",".js-branches-tags-tabs",(async function(e){const t=e.detail.relatedTarget,n=e.currentTarget;if(!n)return;let a,s;for(const c of n.querySelectorAll("[data-controls-ref-menu-id]")){if(!(c instanceof r||c instanceof o))return;const e=i(c,"data-controls-ref-menu-id"),n=t.id===e;c.hidden=!n,n?s=c:a||(a=c.input?c.input.value:"")}const l=s&&s.input;l&&(s&&void 0!==a&&(l.value=a),l.focus())})),e(".js-pulse-contribution-data",e=>{!async function(e){const t=e.getAttribute("data-pulse-diffstat-summary-url");let n;try{t&&(n=await async function(e){return j(document,e)}(t),function(e,t){t.innerHTML="",t.appendChild(e)}(n,e))}catch(a){const t=s(e,".js-blankslate-loading"),n=s(e,".js-blankslate-error");t.classList.add("d-none"),n.classList.remove("d-none")}}(e)}),t("change",".js-releases-marketplace-publish-field",(function(e){_(e.currentTarget)})),e(".js-releases-marketplace-publish-field",(function(e){_(e)})),t("click",".js-save-draft",(function(e){T(e.currentTarget),e.preventDefault()})),t("click",".js-timeline-tags-expander",(function(e){const t=e.currentTarget;a(t,".js-timeline-tags").classList.remove("is-collapsed")})),t("release:saved",".js-release-form",(function(e){const t=e.detail.release,n=e.currentTarget,a=n.getAttribute("data-repo-url"),r=t.update_url||S("tag",a,t.tag_name);if(n.setAttribute("action",r),t.update_authenticity_token){n.querySelector("input[name=authenticity_token]").value=t.update_authenticity_token}const o=t.edit_url||S("edit",a,t.tag_name);h(g(),document.title,o);const i=document.querySelector("#delete_release_confirm form");if(i){const e=t.delete_url||S("tag",a,t.tag_name);if(i.setAttribute("action",e),t.delete_authenticity_token){s(i,"input[name=authenticity_token]",HTMLInputElement).value=t.delete_authenticity_token}}const l=n.querySelector("#release_id");if(!l.value){l.value=t.id;const e=document.createElement("input");e.type="hidden",e.name="_method",e.value="put",n.appendChild(e)}})),t("click",".js-publish-release",(function(){s(document,"#release_draft",HTMLInputElement).value="0"}));const M=new WeakMap;async function A(e){if(!e.value)return;if(e.value===M.get(e))return;E("loading"),M.set(e,e.value);const t=i(e,"data-url"),n=new URL(t,window.location.origin),a=new URLSearchParams(n.search.slice(1));a.append("tag_name",e.value),n.search=a.toString();try{const t=await(await v(n.toString(),{headers:{Accept:"application/json"}})).json();"duplicate"===t.status&&parseInt(e.getAttribute("data-existing-id"))===parseInt(t.release_id)?E("valid"):(s(document,".js-release-tag .js-edit-release-link").setAttribute("href",t.url),E(t.status))}catch(r){E("invalid")}}function S(e,t,n){return`${t}/releases/${e}/${n}`}function x(e){const t=a(e,"form",HTMLFormElement).querySelector(".js-previewable-comment-form");if(!t)return;let n=t.getAttribute("data-base-preview-url");n||(n=String(t.getAttribute("data-preview-url")),t.setAttribute("data-base-preview-url",n));const s=l(e,'input[name="release[tag_name]"], input[name="release[target_commitish]"]:checked',HTMLInputElement),r=new URL(n,window.location.origin),o=new URLSearchParams(r.search.slice(1));for(const a of s)a.value&&o.append(a.name,a.value);r.search=o.toString(),t.setAttribute("data-preview-url",r.toString())}e("input.js-release-tag-field",{constructor:HTMLInputElement,initialize(e){A(e),e.addEventListener("blur",(function(){A(e)}))}}),t("change",".js-release-tag",(function(e){x(e.currentTarget)})),e(".js-release-form .js-previewable-comment-form",(function(e){x(s(a(e,"form"),".js-release-tag"))})),t("auto-check-message-updated",".js-rename-branch-input",(function(e){!function(e){const t=a(e,".js-rename-branch-form"),n=l(t,".js-rename-branch-new-name");let s=e.value;if(s!==e.defaultValue&&""!==s){const e=t.querySelector(".js-rename-branch-autocheck-message");e&&e.hasAttribute("data-normalized-name")&&(s=i(e,"data-normalized-name"));for(const t of n)t.textContent=s}}(e.currentTarget)})),y("keydown",".js-tree-finder-field",e=>{"Escape"===e.key&&(e.preventDefault(),history.back())});e(".js-tree-finder",e=>{const t=s(e,".js-tree-finder-field",HTMLInputElement),n=s(e,".js-tree-browser-results");if(n.childElementCount>0)return;(async e=>{if(!(e instanceof b))return;const t=i(e,"data-url"),n=s(e,".js-tree-browser-result-template",HTMLTemplateElement),{paths:a}=await(await v(t)).json();e.addLazyItems(a,e=>{const t=n.content.cloneNode(!0).firstElementChild,a=s(t,".js-tree-browser-result-anchor",HTMLAnchorElement),r=s(a,".js-tree-browser-result-path"),o=new URL(a.href,window.location.origin);return o.pathname=`${o.pathname}/${encodeURI(e)}`,a.href=String(o),a.id=`entry-${Math.random().toString().substr(2,5)}`,r.textContent=e,t}),e.sort()})(e);const a=new u(t,n);a.start(),e.addEventListener("fuzzy-list-will-sort",()=>{a.stop()}),e.addEventListener("fuzzy-list-sorted",()=>{a.start(),a.navigate()})});let H=null;e(".js-pjax-files",e=>{if(!H)return void(H=window.location.pathname);const t=e.querySelector(`a[href='${H}']`);t&&setTimeout((function(){document.activeElement&&document.activeElement!==document.body||t.focus()}),200),H=window.location.pathname});let I=null;const C=new WeakMap;function q(e){e.classList.remove("is-progress-bar");const t=a(e,".js-upload-manifest-file-container");s(t,".js-upload-progress").hidden=!0,s(t,".js-upload-meter-text .js-upload-meter-filename").textContent=""}function z(e){q(e.currentTarget)}function $(e){const t=a(e,"form",HTMLFormElement);return s(t,"#release_id",HTMLInputElement).value}t("file-attachment-accept",".js-upload-manifest-file",(function(e){const{attachments:t}=e.detail,n=parseInt(e.currentTarget.getAttribute("data-directory-upload-max-files")||"",10);t.length>n&&(e.preventDefault(),e.currentTarget.classList.add("is-too-many"))})),t("document:drop",".js-upload-manifest-tree-view",(async function(e){const{transfer:t}=e.detail,n=e.currentTarget,a=await d.traverse(t,!0),r=s(document,"#js-repo-pjax-container");r.addEventListener("pjax:success",()=>{s(r,".js-upload-manifest-file",f).attach(a)},{once:!0});const o=i(n,"data-drop-url");w({url:o,container:r})})),t("upload:setup",".js-upload-manifest-file",(async function(e){const{batch:t,form:n,preprocess:r}=e.detail,o=e.currentTarget;function i(){n.append("upload_manifest_id",C.get(o))}if(function(e,t){const n=a(e,".js-upload-manifest-file-container"),r=s(n,".js-upload-progress");r.hidden=!1,e.classList.add("is-progress-bar");const o=s(r,".js-upload-meter-text");s(o,".js-upload-meter-range-start").textContent=String(t.uploaded()+1),s(o,".js-upload-meter-range-end").textContent=String(t.size)}(o,t),C.get(o))return void i();if(I)return void r.push(I.then(i));const l=a(o,".js-upload-manifest-file-container").querySelector(".js-upload-manifest-form");I=fetch(l.action,{method:l.method,body:new FormData(l),headers:{Accept:"application/json"}});const[c,u]=function(){let e;return[new Promise(t=>{e=t}),e]}();r.push(c.then(i));const d=await I;if(!d.ok)return;const f=await d.json();s(document,".js-manifest-commit-form",HTMLFormElement).elements.namedItem("manifest_id").value=f.upload_manifest.id,C.set(o,f.upload_manifest.id),I=null,u()})),t("upload:start",".js-upload-manifest-file",(function(e){const{attachment:t,batch:n}=e.detail,r=a(e.currentTarget,".js-upload-manifest-file-container"),o=s(r,".js-upload-progress"),i=s(o,".js-upload-meter-text");s(i,".js-upload-meter-range-start").textContent=n.uploaded()+1,s(i,".js-upload-meter-filename").textContent=t.fullPath})),t("upload:complete",".js-upload-manifest-file",(function(e){const{attachment:t,batch:n}=e.detail,a=s(document,".js-manifest-commit-file-template",HTMLElement),r=s(a,".js-manifest-file-entry").cloneNode(!0);s(r,".js-filename").textContent=t.fullPath;const o=t.id;s(r,".js-remove-manifest-file-form",HTMLFormElement).elements.namedItem("file_id").value=o;const i=s(document,".js-manifest-file-list");i.hidden=!1,e.currentTarget.classList.add("is-file-list"),s(i,".js-manifest-file-list-root").appendChild(r),n.isFinished()&&q(e.currentTarget)})),t("upload:progress",".js-upload-manifest-file",(function(e){const{batch:t}=e.detail,n=a(e.currentTarget,".js-upload-manifest-file-container");s(n,".js-upload-meter").style.width=`${t.percent()}%`})),t("upload:error",".js-upload-manifest-file",z),t("upload:invalid",".js-upload-manifest-file",z),n(".js-remove-manifest-file-form",(async function(e,t){await t.html();const n=a(e,".js-manifest-file-list-root");if(a(e,".js-manifest-file-entry").remove(),!n.hasChildNodes()){a(n,".js-manifest-file-list").hidden=!0,s(document,".js-upload-manifest-file").classList.remove("is-file-list")}})),e(".js-manifest-ready-check",{initialize(e){!async function(e){const t=i(e,"data-redirect-url");try{await L(i(e,"data-poll-url")),window.location.href=t}catch(n){s(document,".js-manifest-ready-check").hidden=!0,s(document,".js-manifest-ready-check-failed").hidden=!1}}(e)}}),t("click",".js-release-remove-file",(function(e){const t=a(e.currentTarget,".js-release-file");t.classList.add("delete"),s(t,"input.destroy",HTMLInputElement).value="true"})),t("click",".js-release-undo-remove-file",(function(e){const t=a(e.currentTarget,".js-release-file");t.classList.remove("delete"),s(t,"input.destroy",HTMLInputElement).value=""}));let F=null;function R(e,t){t.append("release_id",$(e));const n=l(document,".js-releases-field .js-release-file.delete .id",HTMLInputElement);if(n.length){const e=n.map(e=>e.value);t.append("deletion_candidates",e.join(","))}}t("release:saved",".js-release-form",(function(e){const t=e.currentTarget;F=null;let n=!1;for(const s of t.querySelectorAll(".js-releases-field .js-release-file"))s.classList.contains("delete")?s.remove():s.classList.contains("js-template")||(n=!0);const a=s(t,".js-releases-field");a.classList.toggle("not-populated",!n),a.classList.toggle("is-populated",n)})),t("upload:setup",".js-upload-release-file",(function(e){const{form:t,preprocess:n}=e.detail,a=e.currentTarget;if($(a))return void R(a,t);if(!F){const e=s(document,".js-save-draft",HTMLButtonElement);F=T(e)}const r=R.bind(null,a,t);n.push(F.then(r))})),t("upload:start",".js-upload-release-file",(function(e){const t=e.detail.policy;s(e.currentTarget,".js-upload-meter").classList.remove("d-none");const n=t.asset.replaced_asset;if(n)for(const s of l(document,".js-releases-field .js-release-file .id",HTMLInputElement))Number(s.value)===n&&a(s,".js-release-file").remove()})),t("upload:complete",".js-upload-release-file",(function(e){const{attachment:t}=e.detail,n=s(document,".js-releases-field"),a=s(n,".js-template").cloneNode(!0);a.classList.remove("d-none","js-template"),s(a,"input.id",HTMLInputElement).value=t.id;const r=t.name||t.href.split("/").pop();for(const s of a.querySelectorAll(".js-release-asset-filename"))s instanceof HTMLInputElement?s.value=r:s.textContent=r;const o=`(${(t.file.size/1048576).toFixed(2)} MB)`;s(a,".js-release-asset-filesize").textContent=o,n.appendChild(a),n.classList.remove("not-populated"),n.classList.add("is-populated"),s(e.currentTarget,".js-upload-meter").classList.add("d-none")})),t("upload:progress",".js-upload-release-file",(function(e){const{attachment:t}=e.detail;s(e.currentTarget,".js-upload-meter").style.width=`${t.percent}%`}))}}}));
//# sourceMappingURL=repositories-bootstrap-56c3f545.js.map