var _isWinTopRestrictedFrame=function(){try{window.top.location.href}catch(a){return!0}return!1}();
function ut_ccpa(a){try{if(window.ut&&window.ut.ccpa&&-1===window.ut.ccpa.indexOf("REPLACE"))return a(window.ut.ccpa);window.ut&&(window.ut.ccpa&&-1!==window.ut.ccpa.indexOf("REPLACE"))&&(window.ut.ccpa="");var b=function(a){b="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(a){return typeof a}:function(a){return a&&"function"===typeof Symbol&&a.constructor===Symbol&&a!==Symbol.prototype?"symbol":typeof a};return b(a)},c=1,d="iab",e,f,l={},m={iab:g},g=function(a,b,d){function e(a,
b,n){function d(a){if((a=a&&a.data&&a.data.__uspapiReturn)&&a.callId&&"undefined"!==typeof g[a.callId])g[a.callId](a.returnValue,a.success),delete g[a.callId]}window.__uspapi=function(a,n,d){var c=Math.random()+"";a={__uspapiCall:{command:a,version:n,callId:c}};g[c]=d;b.postMessage(a,"*")};window.addEventListener("message",d,!1);window.__uspapi(a,c,function(a,b){window.removeEventListener("message",d,!1);n(a,b)})}for(var f=function(){var c={};return{consentDataCallback:function(e,f){f&&e.uspString&&
(c.usPrivacy=e.uspString);c.usPrivacy?a(c,d):b("Unable to get USP consent string.",d)}}}(),g={},h=window,k;!k;){try{if(h.frames.__uspapiLocator||h.frames.__uspapi)k=h}catch(l){}if(h===window.top)break;h=h.parent}if(!k)if(window._isWinTopRestrictedFrame)k=window.top;else return b("USP CMP not found.",d);try{k.__uspapi("getUSPData",c,f.consentDataCallback)}catch(m){e("getUSPData",k,f.consentDataCallback)}},g=function(a,b){var c={context:this,args:[b],nextFn:a,bidsBackHandler:b.bidsBackHandler,haveExited:!1,
timer:null};if(f)return p(null,c);if(!m[d])return c.nextFn.apply(c.context,c.args);m[d].call(this,q,r,c);c.haveExited||(0===e?q(void 0,c):c.timer=setTimeout(s.bind(null,c),e))},q=function(a,b){!a||!a.usPrivacy?r("UPSAPI returned unexpected value during lookup process.",b,a):(clearTimeout(b.timer),a&&a.usPrivacy&&(f=a.usPrivacy),p(null,b))},s=function(a){r("USPAPI workflow exceeded timeout threshold.",a)},r=function(a,b,c){clearTimeout(b.timer);p(a,b,c)},p=function(a,b,c){!1===b.haveExited&&(b.haveExited=
!0,b.nextFn.apply(b.context,b.args))};(function(a){a&&"object"===b(a)&&(d="[object String]"===Object.prototype.toString.call(a.cmpApi)?a.cmpApi:"iab",e="[object Number]"===Object.prototype.toString.call(a.timeout)?a.timeout:50,l=a)})({cmp:"iab",timeout:50})}catch(t){a(f);return}g(function(){didHookReturn=!0;a(f)},l)}
function ut_pos(a){var b=a,c=0,d=0;if(a){c=a.offsetLeft;for(d=a.offsetTop;a=a.offsetParent;c+=a.offsetLeft,d+=a.offsetTop);try{if(top.location!=location&&parent&&parent.document){var e=parent.document.getElementsByTagName("iframe");for(i in e)if((a=e[i]).contentWindow==window){c+=a.offsetLeft;for(d+=a.offsetTop;a=a.offsetParent;c+=a.offsetLeft,d+=a.offsetTop);break}}}catch(f){}b.innerHTML="";b.style.display="none"}return[c,d]}
function ut_cheight(){return"undefined"!=typeof ut_win.innerHeight?ut_win.innerHeight:"undefined"!=typeof ut_doc.documentElement&&"undefined"!=typeof ut_doc.documentElement.clientWidth&&0!=ut_doc.documentElement.clientWidth?ut_doc.documentElement.clientHeight:ut_doc.getElementsByTagName("body")[0].clientHeight}
function ut_cwidth(){return"undefined"!=typeof ut_win.innerWidth?ut_win.innerWidth:"undefined"!=typeof ut_doc.documentElement&&"undefined"!=typeof ut_doc.documentElement.clientWidth&&0!=ut_doc.documentElement.clientWidth?ut_doc.documentElement.clientWidth:ut_doc.getElementsByTagName("body")[0].clientWidth}function ut_val(a,b,c){a=a?a:0;if(0>=a||b&&0<b)a=b;return 0>=a||c&&0<c?c:a}
function ut_ap(a,b){if("undefined"!=typeof b&&(!b||!(b.indexOf&&-1!==b.indexOf("REPLACE"))))ut_ju+="&"+a+"="+escape(b)}
function ut_fv(){var a=0,b=-1!=navigator.appVersion.indexOf("MSIE")?!0:!1,c=-1!=navigator.appVersion.toLowerCase().indexOf("win")?!0:!1,d=-1!=navigator.userAgent.indexOf("Opera")?!0:!1;if(null!=navigator.plugins&&0<navigator.plugins.length){if(navigator.plugins["Shockwave Flash 2.0"]||navigator.plugins["Shockwave Flash"])a=navigator.plugins["Shockwave Flash"+(navigator.plugins["Shockwave Flash 2.0"]?" 2.0":"")].description.split(" ").slice(2).join(".")}else if(-1!=navigator.userAgent.toLowerCase().indexOf("webtv/2.6"))a=
4;else if(-1!=navigator.userAgent.toLowerCase().indexOf("webtv/2.5"))a=3;else if(-1!=navigator.userAgent.toLowerCase().indexOf("webtv"))a=2;else if(b&&c&&!d){var e;try{e=new ActiveXObject("ShockwaveFlash.ShockwaveFlash.7"),a=e.GetVariable("$version")}catch(f){}if(!a)try{e=new ActiveXObject("ShockwaveFlash.ShockwaveFlash.6"),a=6,e.AllowScriptAccess="always",a=e.GetVariable("$version")}catch(l){}if(!a)try{e=new ActiveXObject("ShockwaveFlash.ShockwaveFlash.3"),a=e.GetVariable("$version")}catch(m){}if(!a)try{new ActiveXObject("ShockwaveFlash.ShockwaveFlash.3"),
a=3}catch(g){}if(!a)try{new ActiveXObject("ShockwaveFlash.ShockwaveFlash"),a=2}catch(q){a=0}"string"==typeof a&&(a=a.split(" ")[1].split(",").join("."))}return a}function ut_ad_script(){ut_ju=ut_ju.replace(/^http:\/\//i,"https://");"//"===ut_ju.substring(0,2)&&(ut_ju="https:"+ut_ju);document.writeln('\n<script type="text/javascript" src="'+ut_ju+'">\x3c/script>\n')}
function ut_get_environment(){function a(a){return"undefined"===typeof a}var b=0;if(0!=b)return b;try{!a(window.mraid)&&!a(mraid.addEventListener)?(b=401,!a(mraid.getVersion)&&"2.0"==mraid.getVersion()?b=402:!a(mraid.getVersion)&&"3.0"==mraid.getVersion()&&(b=403)):b=!a(window.ormma)&&!a(ormma.addEventListener)?300:!a(window.sfAPI)||!a(window.$sf)&&!a($sf.ext)?200:a(window.inDapIF)?a(window.getVPAIDAd)?_isWinTopRestrictedFrame?202:100:500:201}catch(c){}return b}var ut_doc,ut_win;
try{ut_doc="undefined"!=typeof parent.document?parent.document:document,ut_win=window.top,ut_operatest=ut_doc.ut_synched}catch(e$$25){ut_doc=document,ut_win=window}ut_doc==document&&("undefined"!=typeof ut.ifurl&&top.location!=location&&-1==navigator.userAgent.indexOf("Opera"))&&(ut.ajurl=ut_ju,ut_ju=ut.ifurl);ut_ju+="?";for(var i in ut)"ifurl"!=i&&ut_ap(i,ut[i]);
if(ut_doc==document&&"undefined"!=typeof ut.ifurl&&top.location!=location&&-1==navigator.userAgent.indexOf("Opera"))ut_ap("fb","1"),location.href=ut_ju;else{ut_doc!=document&&ut_ap("fb","1");ut_ap("cb",ut_cb=Math.floor(99999999999*Math.random()));ut_ap("t",(new Date).getTime()/1E3-60*(new Date).getTimezoneOffset());try{ut_ap("fv",ut_fv())}catch(e$$26){}document.writeln('\n<span id="ut'+ut_cb+'" style="width:0px;height:0px;visibility:hidden;position:absolute;"></span>\n');try{var ut_p=ut_pos(document.getElementById("ut"+
ut_cb));ut_ap("x",ut_p[0]);ut_ap("y",ut_p[1])}catch(e$$27){}try{ut_ap("sw",ut_win.screen.availWidth),ut_ap("sh",ut_win.screen.availHeight)}catch(e$$28){}try{ut_ap("cw",ut_cwidth())}catch(e$$29){}try{ut_ap("ch",ut_cheight())}catch(e$$30){}document.mmm_fo&&ut_ap("fl","1");"undefined"!=typeof ut_doc&&"undefined"!=typeof ut_doc.ut_synched&&ut_ap("cid",ut_doc.ut_synched);try{var canonicalLoc=ut_win.document.querySelector("link[rel='canonical']")?ut_win.document.querySelector("link[rel='canonical']").href:
null;top.location==location?ut_ap("loc",canonicalLoc||location):(ut_doc!=document?ut_ap("loc",canonicalLoc||top.location):ut_ap("loc",document.referrer),ut_ap("fr","1"))}catch(e$$31){}ut_ap("env",ut_get_environment());"undefined"!=typeof document.MAX_ct0&&"http"==document.MAX_ct0.substring(0,4)&&ut_ap("ct0",document.MAX_ct0);ut_ccpa(function(a){ut_ap("ccpa",a);ut_ad_script()})};