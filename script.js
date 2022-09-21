// View More Posts
// Button Open Side Menu
// Area Press To Hide For Side Menu And Search
var ArrowIcon = "<svg aria-hidden='true' focusable='false' role='img' viewBox='0 0 256 512' xmlns='http://www.w3.org/2000/svg'><path d='M119.5 326.9L3.5 209.1c-4.7-4.7-4.7-12.3 0-17l7.1-7.1c4.7-4.7 12.3-4.7 17 0L128 287.3l100.4-102.2c4.7-4.7 12.3-4.7 17 0l7.1 7.1c4.7 4.7 4.7 12.3 0 17L136.5 327c-4.7 4.6-12.3 4.6-17-.1z' fill='currentColor'/></svg>",BlogID = String(7701759513117874599);

var _0x1ec6 = ['YS5vcC1vbmU=', 'Lm1vcC1saW5rcw==', 'Ym9keSAq', 'aGlkZQ==', 'LnllbWVuIHNwYW4=', 'bG9hZA==', 'cGFyZW50RWxlbWVudA==', 'aW5pdGlhbA==', 'c2V0QXR0cmlidXRl', 'c2Nyb2xsVG9w', 'eXRpbWcuY29t', 'cmVhZHk=', 'Y3Nz', 'Lm5vTW9yZVBvc3Rz', 'aW1nWw==', 'ZGF0YS1zcmM=', 'cGx1c2VsaW5r', 'ZmFkZU91dA==', 'ZmxleA==', 'dmlzaWJsZQ==', 'dGV4dA==', 'dG9nZ2xl', 'aHRtbA==', 'I1N0b3BTaXRreUhlYWRhcg==', 'Y2VpbA==', 'Zm9udC13ZWlnaHQ6IDcwMDtjb2xvcjogIzM1NjBhYjtmb250LXNpemU6MjFweA==', 'aW5uZXJIZWlnaHQ=', 'PGEgaHJlZj0iaHR0cHM6Ly93d3cuc2VvcGx1cy10ZW1wbGF0ZS5jb20iIHJlbD0ibm9mb2xsb3cgbm9vcGVuZXIiIHRhcmdldD0iX2JsYW5rIiB0aXRsZT0iU2VvUGx1cyBUZW1wbGF0ZSIgc3R5bGU9ImRpc3BsYXk6IGJsb2NrOyB2aXNpYmlsaXR5OiB2aXNpYmxlOyB3aWR0aDogMjdweDsgaGVpZ2h0OiAyN3B4OyBvcGFjaXR5OiAxOyB0cmFuc2Zvcm06IGluaXRpYWw7Ij48aW1nIGFsdD0iU2VvUGx1cyBUZW1wbGF0ZSIgc3JjPSIvLzMuYnAuYmxvZ3Nwb3QuY29tLy1ULVYtUEpPVTR2MC9YWll6SGZxMWRZSS9BQUFBQUFBQUJPdy9vYno4ck1jd0tnRXZQa0hQMWFoTTJ0eUFxbThmUllaWXdDSzRCR0FZWUN3L3cyNy1oMjctcC1rLW51LzI1Ni0yNTYucG5nIiBzdHlsZT0iZGlzcGxheTogYmxvY2s7IHZpc2liaWxpdHk6IHZpc2libGU7IHdpZHRoOiAyN3B4OyBoZWlnaHQ6IDI3cHg7IG9wYWNpdHk6IDE7IHRyYW5zZm9ybTogaW5pdGlhbDsiPjwvYT4=', 'Lm5hdi1wYXI=', 'I3RvcC1zb2NpYWwtTA==', 'LlBvc3RzLWJ5Q2F0ZWdvcnksLnBhZ2UtbmF2aWdhdGlvbiwuUGFnZVByYWtlZGl2', 'cmVwbGFjZQ==', 'LmJsb2ctcGFnZXItb2xkZXItbGluaw==', 'LnN0YXR1cy1tc2ctd3JhcA==', 'LnllbWVuIGltZ1thbHQ9IlNlb1BsdXMgVGVtcGxhdGUiXSwgLnllbWVuIGFbdGl0bGU9IlNlb1BsdXMgVGVtcGxhdGUiXQ==', 'YW5pbWF0ZQ==', 'YWN0aXZl', 'b2Zmc2V0V2lkdGg=', 'LnNlYXJjaC1zdWJtaXQyLCAuc3R4aw==', 'cHJldg==', 'Y2hpbGRyZW4=', 'cGFnZVlPZmZzZXQ=', 'aHJlZg==', 'LmxvYWRNb3JlUG9zdHMgYQ==', 'dG9w', 'L2RlZmF1bHQ=', 'YWRkQ2xhc3M=', 'Z2V0QXR0cmlidXRl', 'LmJvdHRvbS1mb290ZXIgLnllbWVuOmVxKDAp', 'LmxvYWRNb3JlID4gI2xvYWRlcg==', 'ZmFkZUlu', 'LnBhci10cCwgLmhlYWQtcHosIC5wYXItYm90dG0=', 'L21xZGVmYXVsdA==', 'LnNpZGVuYXY=', 'PHN0eWxlPmJvZHkuUkUge2JhY2tncm91bmQ6IHVybChodHRwczovLzQuYnAuYmxvZ3Nwb3QuY29tLy1OX0hGa29DTTBQWS9YYlg5TnNudUE4SS9BQUFBQUFBQUJXTS9qQXNsU2hkLWFQSUNBRHZPQW4zRHZPSVhKQThWaTdzQndDSzRCR0FZWUN3L3MxNjAwL3BfMTM5NWt5cmJtMS5wbmcpIG5vLXJlcGVhdCBjZW50ZXIgI2VlZTtiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXIgY2VudGVyO2hlaWdodDogOTh2aDt9PC9zdHlsZT4=', 'YWRkRXZlbnRMaXN0ZW5lcg==', 'c2hvdw==', 'cmVtb3ZlQ2xhc3M=', 'cXVlcnlTZWxlY3Rvcg==', 'PHVsLz4=', 'QmxvZ2dlciBUZW1wbGF0ZQotLS0tLS0tLS0tLS0tLS0tLS0KPj4gUHJvZ3JhbW1lZCBieSA6IFNlb3BsdXMgZGV2ZWxvcGVycwo+PiBJbmZvcm1hdGlvbiAgIDogaHR0cHM6Ly93d3cuc2VvcGx1cy10ZW1wbGF0ZS5jb20K', 'c2Nyb2xs', 'MjdweA==', 'LnN0eGs=', 'Z2V0Qm91bmRpbmdDbGllbnRSZWN0', 'ZWFjaA==', 'bm90LXBs', 'cHJldmVudERlZmF1bHQ=', 'Lm1vcC1wYWdlcw==', 'bGVuZ3Ro', 'YXBwZW5k', 'JWNTZW9wbHVzIHY1LjMK', 'b3Blbg==', 'I0xpbmtMaXN0MjIgbGk=', 'cmVtb3ZlQXR0cmlidXRl', 'I0xpbmtMaXN0MjI=', 'LnNlYXJjaC1ib3g=', 'Lm1vcC1pY29u', 'Ym9keQ==', 'Y2xhc3NMaXN0', 'YWpheA==', 'LmJsb2ctcG9zdHM=', 'LnBvcy10LXQsIGEuY2xvc2VidG4=', 'LnllbWVu', 'LnNlYXJjaCBh', 'UExIb2xkZXI=', 'YXR0cg==', 'LmxvYWRNb3JlUG9zdHM=', 'PC9zcGFuPg==', 'YmxvY2s=', 'ZmluZA==', 'cmVtb3Zl', 'Y2xpY2s=', 'aW5kZXhPZg=='];
(function(_0x52cd66, _0x1ec60b) {
    var _0x33fee0 = function(_0x34e3fb) { while (--_0x34e3fb) { _0x52cd66['push'](_0x52cd66['shift']()); } };
    _0x33fee0(++_0x1ec60b);
}(_0x1ec6, 0x1c0));
var _0x33fe = function(_0x52cd66, _0x1ec60b) {
    _0x52cd66 = _0x52cd66 - 0x0;
    var _0x33fee0 = _0x1ec6[_0x52cd66];
    if (_0x33fe['HLNfaJ'] === undefined) {
        (function() {
            var _0x508efb = function() { var _0xe6e902; try { _0xe6e902 = Function('return\x20(function()\x20' + '{}.constructor(\x22return\x20this\x22)(\x20)' + ');')(); } catch (_0x43b11a) { _0xe6e902 = window; } return _0xe6e902; };
            var _0x2987a5 = _0x508efb();
            var _0xf2aae3 = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';
            _0x2987a5['atob'] || (_0x2987a5['atob'] = function(_0x4e2903) { var _0x3b87d8 = String(_0x4e2903)['replace'](/=+$/, ''); var _0x189152 = ''; for (var _0x23cf15 = 0x0, _0x20a1bb, _0xb83f0a, _0xa4af48 = 0x0; _0xb83f0a = _0x3b87d8['charAt'](_0xa4af48++); ~_0xb83f0a && (_0x20a1bb = _0x23cf15 % 0x4 ? _0x20a1bb * 0x40 + _0xb83f0a : _0xb83f0a, _0x23cf15++ % 0x4) ? _0x189152 += String['fromCharCode'](0xff & _0x20a1bb >> (-0x2 * _0x23cf15 & 0x6)) : 0x0) { _0xb83f0a = _0xf2aae3['indexOf'](_0xb83f0a); } return _0x189152; });
        }());
        _0x33fe['WYJNUy'] = function(_0x549b8e) { var _0x4be9ce = atob(_0x549b8e); var _0x42c1f0 = []; for (var _0x4061ed = 0x0, _0x8a924e = _0x4be9ce['length']; _0x4061ed < _0x8a924e; _0x4061ed++) { _0x42c1f0 += '%' + ('00' + _0x4be9ce['charCodeAt'](_0x4061ed)['toString'](0x10))['slice'](-0x2); } return decodeURIComponent(_0x42c1f0); };
        _0x33fe['wwBovW'] = {};
        _0x33fe['HLNfaJ'] = !![];
    }
    var _0x34e3fb = _0x33fe['wwBovW'][_0x52cd66];
    if (_0x34e3fb === undefined) {
        _0x33fee0 = _0x33fe['WYJNUy'](_0x33fee0);
        _0x33fe['wwBovW'][_0x52cd66] = _0x33fee0;
    } else { _0x33fee0 = _0x34e3fb; }
    return _0x33fee0;
};
var olderLink;
$(_0x33fe('0x34'))['length'] ? ($(_0x33fe('0x18'))[_0x33fe('0x13')](), $(_0x33fe('0x6'))[_0x33fe('0x44')]('RE')['append'](_0x33fe('0x4c'))) : ($(_0x33fe('0x1'))[_0x33fe('0x57')](function() { var _0x5a2c07; - 0x1 == $(this)[_0x33fe('0x2a')]()[_0x33fe('0x15')]('+') ? $(this)[_0x33fe('0x44')]('ma')['append'](_0x33fe('0x51')) : (_0x5a2c07 = $(this)[_0x33fe('0x12')]('a')[_0x33fe('0x2a')]()[_0x33fe('0x35')]('+', ''), $(this)[_0x33fe('0x12')]('a')[_0x33fe('0x2a')](_0x5a2c07), $(this)[_0x33fe('0x3d')]('.ma')['addClass'](_0x33fe('0x26'))[_0x33fe('0x12')]('ul')[_0x33fe('0x5c')]($(this))), $(_0x33fe('0x3'))[_0x33fe('0x48')](0x0); }), $($('<span\x20class=\x27icon\x27>' + ArrowIcon + _0x33fe('0x10')))['insertAfter']('li.ma.pluselink\x20ul:not(.ma2ul),\x20.pluselink2\x20ul'), $(_0x33fe('0xc'))[_0x33fe('0x14')](function() { $(_0x33fe('0x4'))[_0x33fe('0x48')](0x0), $(_0x33fe('0x55'))[_0x33fe('0x48')](0xc8); }), $(_0x33fe('0x3c'))['click'](function() { $(_0x33fe('0x4'))[_0x33fe('0x27')](0x0), $(_0x33fe('0x55'))[_0x33fe('0x27')](0x64); }), $(_0x33fe('0x16'))[_0x33fe('0x14')](function() { $(_0x33fe('0x4b'))[_0x33fe('0x44')](_0x33fe('0x0')), $('.pos-t-t')['fadeIn'](0x12c); }), $(_0x33fe('0xa'))[_0x33fe('0x14')](function() { $(_0x33fe('0x4b'))[_0x33fe('0x4f')]('open'), $('.pos-t-t')['fadeOut'](0xc8); }), $my_menu = $(_0x33fe('0x32'))['html'](), $(_0x33fe('0x17'))[_0x33fe('0x2c')]($my_menu), $my_icon = $(_0x33fe('0x33'))[_0x33fe('0x2c')](), $(_0x33fe('0x5'))[_0x33fe('0x2c')]($my_icon), $('.mop-links')[_0x33fe('0x2c')]($my_menu), $my_tre = $('#pages')[_0x33fe('0x2c')](), $(_0x33fe('0x5a'))[_0x33fe('0x2c')]($my_tre), $(_0x33fe('0x17'))['html']($my_menu), function(_0x33e9c4) {
    function _0x2955ce() {
        $(_0x33fe('0x24') + _0x33e9c4 + ']')[_0x33fe('0x57')](function(_0x448f37) {
            var _0x255703, _0x5ba4c6, _0x47fdb6 = this[_0x33fe('0x56')]()[_0x33fe('0x42')] - document[_0x33fe('0x50')](_0x33fe('0x6'))[_0x33fe('0x56')]()[_0x33fe('0x42')];
            window[_0x33fe('0x3f')] + window[_0x33fe('0x30')] > _0x47fdb6 && (_0x255703 = Math[_0x33fe('0x2e')](this['parentNode'][_0x33fe('0x3b')]) + 0x32, _0x5ba4c6 = function(_0x244a87) { try { _0x244a87 = -0x1 !== _0x244a87[_0x33fe('0x15')]('img.youtube.com') || -0x1 !== _0x244a87['indexOf'](_0x33fe('0x20')) ? _0x244a87[_0x33fe('0x35')](_0x33fe('0x43'), _0x33fe('0x4a')) : _0x244a87['replace'](/\/(s72\-c|s40\-c|s1600\-c|s72\-rc|s220|s640|s113|s0-rw-e90|s1600-rw-e90|w1600)\//, '/s' + parseInt(_0x255703) + '/'); } finally { return _0x244a87; } }(this[_0x33fe('0x45')](_0x33e9c4)), this[_0x33fe('0x1e')]('src', _0x5ba4c6), this[_0x33fe('0x2')](_0x33e9c4), this['parentElement'][_0x33fe('0x7')]['toggle'](_0x33fe('0xd'), !0x1), this[_0x33fe('0x1c')]['classList'][_0x33fe('0x2b')](_0x33fe('0x58'), !0x0));
        });
    }
    window[_0x33fe('0x4d')](_0x33fe('0x1b'), _0x2955ce), document[_0x33fe('0x4d')]('scroll', _0x2955ce);

}, (olderLink = $(_0x33fe('0x36'))[_0x33fe('0xe')](_0x33fe('0x40'))) && $(_0x33fe('0xf'))['show'](), $(_0x33fe('0x41'))['on'](_0x33fe('0x14'), function(_0x57ce3a) {

    $('.loadMorePosts')['hide'](), $[_0x33fe('0x8')]({
        'url': olderLink,
        'success': function(_0x49584a) {
            var _0x4403fa = $(_0x49584a)[_0x33fe('0x12')](_0x33fe('0x9'));
            _0x4403fa[_0x33fe('0x3e')](_0x33fe('0x37'))[_0x33fe('0x13')](), $(_0x33fe('0x9'))[_0x33fe('0x5c')](_0x4403fa[_0x33fe('0x2c')]()), (olderLink = $(_0x49584a)[_0x33fe('0x12')](_0x33fe('0x36'))[_0x33fe('0xe')](_0x33fe('0x40'))) ? $(_0x33fe('0xf'))[_0x33fe('0x4e')]() : $(_0x33fe('0x23'))[_0x33fe('0x4e')]();
        },
        'beforeSend': function() { $(_0x33fe('0x47'))['show'](); },
        'complete': function() { $(_0x33fe('0x47'))[_0x33fe('0x19')](); }
    }), _0x57ce3a[_0x33fe('0x59')]();
}), $(_0x33fe('0x2d'))[_0x33fe('0x5b')] || jQuery(document)[_0x33fe('0x21')](function(_0x3a0190) {
    var _0x4c870e = _0x3a0190(_0x33fe('0x49'));
    _0x3a0190(window)[_0x33fe('0x53')](function() { 0x63 <= _0x3a0190(this)[_0x33fe('0x1f')]() ? _0x4c870e[_0x33fe('0x4e')](0xa)[_0x33fe('0x39')](_0x33fe('0x49'))[_0x33fe('0x44')](_0x33fe('0x3a')) : _0x4c870e[_0x33fe('0x39')](_0x33fe('0x49'))['removeClass'](_0x33fe('0x3a')); });
}), $(_0x33fe('0x46'))[_0x33fe('0x5b')] && ($(_0x33fe('0xb'))[_0x33fe('0x22')]({ 'display': _0x33fe('0x28'), 'visibility': _0x33fe('0x29'), 'width': 'auto', 'height': 'auto', 'opacity': '1', 'transform': _0x33fe('0x1d') }), $(_0x33fe('0x38'))[_0x33fe('0x22')]({ 'display': _0x33fe('0x11'), 'visibility': 'visible', 'width': _0x33fe('0x54'), 'height': _0x33fe('0x54'), 'opacity': '1', 'transform': _0x33fe('0x1d') })), $($(_0x33fe('0x31')))['insertBefore'](_0x33fe('0x1a')));
// View More Posts
// Button Open Side Menu
// Area Press To Hide For Side Menu And Search













// Scroll To Top
  var scrollToTop = $(".scroll-to-top");
  $(window).on("scroll", function () {
    if ($(window).scrollTop() >= 500) {
      if (!scrollToTop.is(":visible")) {
        scrollToTop.fadeIn(300);
      }
    } else {
      if (scrollToTop.is(":visible")) {
        scrollToTop.fadeOut(300);
      }
    }
  });
  $(".scroll-to-top span").on("click", function () {
    $("html, body").animate(
      {
        scrollTop: 0,
      },
      1000
    );
  });

  $(window).on("load", function () {
    "use strict";
    $(".tutorial-demo style").detach().appendTo("head");
  });
// Scroll To Top















// Cookie Message
// Cookie Source Code
!function(e){if(!e.hasInitialised){var t={escapeRegExp:function(e){return e.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g,"\\$&")},hasClass:function(e,t){var i=" ";return 1===e.nodeType&&(i+e.className+i).replace(/[\n\t]/g,i).indexOf(i+t+i)>=0},addClass:function(e,t){e.className+=" "+t},removeClass:function(e,t){var i=new RegExp("\\b"+this.escapeRegExp(t)+"\\b");e.className=e.className.replace(i,"")},interpolateString:function(e,t){return e.replace(/{{([a-z][a-z0-9\-_]*)}}/gi,function(e){return t(arguments[1])||""})},getCookie:function(e){var t=("; "+document.cookie).split("; "+e+"=");return t.length<2?void 0:t.pop().split(";").shift()},setCookie:function(e,t,i,n,o,s){var r=new Date;r.setHours(r.getHours()+24*(i||365));var a=[e+"="+t,"expires="+r.toUTCString(),"path="+(o||"/")];n&&a.push("domain="+n),s&&a.push("secure"),document.cookie=a.join(";")},deepExtend:function(e,t){for(var i in t)t.hasOwnProperty(i)&&(i in e&&this.isPlainObject(e[i])&&this.isPlainObject(t[i])?this.deepExtend(e[i],t[i]):e[i]=t[i]);return e},throttle:function(e,t){var i=!1;return function(){i||(e.apply(this,arguments),i=!0,setTimeout(function(){i=!1},t))}},hash:function(e){var t,i,n=0;if(0===e.length)return n;for(t=0,i=e.length;t<i;++t)n=(n<<5)-n+e.charCodeAt(t),n|=0;return n},normaliseHex:function(e){return"#"==e[0]&&(e=e.substr(1)),3==e.length&&(e=e[0]+e[0]+e[1]+e[1]+e[2]+e[2]),e},getContrast:function(e){return e=this.normaliseHex(e),(299*parseInt(e.substr(0,2),16)+587*parseInt(e.substr(2,2),16)+114*parseInt(e.substr(4,2),16))/1e3>=128?"#000":"#fff"},getLuminance:function(e){var t=parseInt(this.normaliseHex(e),16),i=38+(t>>16),n=38+(t>>8&255),o=38+(255&t);return"#"+(16777216+65536*(i<255?i<1?0:i:255)+256*(n<255?n<1?0:n:255)+(o<255?o<1?0:o:255)).toString(16).slice(1)},isMobile:function(){return/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)},isPlainObject:function(e){return"object"==typeof e&&null!==e&&e.constructor==Object},traverseDOMPath:function(e,i){return e&&e.parentNode?t.hasClass(e,i)?e:this.traverseDOMPath(e.parentNode,i):null}};e.status={deny:"deny",allow:"allow",dismiss:"dismiss"},e.transitionEnd=function(){var e=document.createElement("div"),t={t:"transitionend",OT:"oTransitionEnd",msT:"MSTransitionEnd",MozT:"transitionend",WebkitT:"webkitTransitionEnd"};for(var i in t)if(t.hasOwnProperty(i)&&void 0!==e.style[i+"ransition"])return t[i];return""}(),e.hasTransition=!!e.transitionEnd;var i=Object.keys(e.status).map(t.escapeRegExp);e.customStyles={},e.Popup=function(){var n={enabled:!0,container:null,cookie:{name:"cookieconsent_status",path:"/",domain:"",expiryDays:365,secure:!1},onPopupOpen:function(){},onPopupClose:function(){},onInitialise:function(e){},onStatusChange:function(e,t){},onRevokeChoice:function(){},onNoCookieLaw:function(e,t){},content:{header:"Cookies used on the website!",message:"This website uses cookies to ensure you get the best experience on our website.",dismiss:"Got it!",allow:"Allow cookies",deny:"Decline",link:"Learn more",href:"https://www.cookiesandyou.com",close:"&#x274c;",target:"_blank",policy:"Cookie Policy"},elements:{header:'<span class="cc-header">{{header}}</span>&nbsp;',message:'<span id="cookieconsent:desc" class="cc-message">{{message}}</span>',messagelink:'<span id="cookieconsent:desc" class="cc-message">{{message}} <a aria-label="learn more about cookies" role=button tabindex="0" class="cc-link" href="{{href}}" rel="noopener noreferrer nofollow" target="{{target}}">{{link}}</a></span>',dismiss:'<a aria-label="dismiss cookie message" role=button tabindex="0" class="cc-btn cc-dismiss">{{dismiss}}</a>',allow:'<a aria-label="allow cookies" role=button tabindex="0"  class="cc-btn cc-allow">{{allow}}</a>',deny:'<a aria-label="deny cookies" role=button tabindex="0" class="cc-btn cc-deny">{{deny}}</a>',link:'<a aria-label="learn more about cookies" role=button tabindex="0" class="cc-link" href="{{href}}" rel="noopener noreferrer nofollow" target="{{target}}">{{link}}</a>',close:'<span aria-label="dismiss cookie message" role=button tabindex="0" class="cc-close">{{close}}</span>'},window:'<div role="dialog" aria-live="polite" aria-label="cookieconsent" aria-describedby="cookieconsent:desc" class="cc-window {{classes}}">\x3c!--googleoff: all--\x3e{{children}}\x3c!--googleon: all--\x3e</div>',revokeBtn:'<div class="cc-revoke {{classes}}">{{policy}}</div>',compliance:{info:'<div class="cc-compliance">{{dismiss}}</div>',"opt-in":'<div class="cc-compliance cc-highlight">{{deny}}{{allow}}</div>',"opt-out":'<div class="cc-compliance cc-highlight">{{deny}}{{allow}}</div>'},type:"info",layouts:{basic:"{{messagelink}}{{compliance}}","basic-close":"{{messagelink}}{{compliance}}{{close}}","basic-header":"{{header}}{{message}}{{link}}{{compliance}}"},layout:"basic",position:"bottom",theme:"block",static:!1,palette:null,revokable:!1,animateRevokable:!0,showLink:!0,dismissOnScroll:!1,dismissOnTimeout:!1,dismissOnWindowClick:!1,ignoreClicksFrom:["cc-revoke","cc-btn"],autoOpen:!0,autoAttach:!0,whitelistPage:[],blacklistPage:[],overrideHTML:null};function o(){this.initialise.apply(this,arguments)}function s(e){this.openingTimeout=null,t.removeClass(e,"cc-invisible")}function r(t){t.style.display="none",t.removeEventListener(e.transitionEnd,this.afterTransition),this.afterTransition=null}function a(){var e=this.options.position.split("-"),t=[];return e.forEach(function(e){t.push("cc-"+e)}),t}function c(n){var o=this.options,s=document.createElement("div"),r=o.container&&1===o.container.nodeType?o.container:document.body;s.innerHTML=n;var a=s.children[0];return a.style.display="none",t.hasClass(a,"cc-window")&&e.hasTransition&&t.addClass(a,"cc-invisible"),this.onButtonClick=function(n){var o=t.traverseDOMPath(n.target,"cc-btn")||n.target;if(t.hasClass(o,"cc-btn")){var s=o.className.match(new RegExp("\\bcc-("+i.join("|")+")\\b")),r=s&&s[1]||!1;r&&(this.setStatus(r),this.close(!0))}t.hasClass(o,"cc-close")&&(this.setStatus(e.status.dismiss),this.close(!0));t.hasClass(o,"cc-revoke")&&this.revokeChoice()}.bind(this),a.addEventListener("click",this.onButtonClick),o.autoAttach&&(r.firstChild?r.insertBefore(a,r.firstChild):r.appendChild(a)),a}function l(e){return"000000"==(e=t.normaliseHex(e))?"#222":t.getLuminance(e)}function u(e,t){for(var i=0,n=e.length;i<n;++i){var o=e[i];if(o instanceof RegExp&&o.test(t)||"string"==typeof o&&o.length&&o===t)return!0}return!1}return o.prototype.initialise=function(i){this.options&&this.destroy(),t.deepExtend(this.options={},n),t.isPlainObject(i)&&t.deepExtend(this.options,i),function(){var t=this.options.onInitialise.bind(this);if(!window.navigator.cookieEnabled)return t(e.status.deny),!0;if(window.CookiesOK||window.navigator.CookiesOK)return t(e.status.allow),!0;var i=Object.keys(e.status),n=this.getStatus(),o=i.indexOf(n)>=0;o&&t(n);return o}.call(this)&&(this.options.enabled=!1),u(this.options.blacklistPage,location.pathname)&&(this.options.enabled=!1),u(this.options.whitelistPage,location.pathname)&&(this.options.enabled=!0);var o=this.options.window.replace("{{classes}}",function(){var i=this.options,n="top"==i.position||"bottom"==i.position?"banner":"floating";t.isMobile()&&(n="floating");var o=["cc-"+n,"cc-type-"+i.type,"cc-theme-"+i.theme];i.static&&o.push("cc-static");o.push.apply(o,a.call(this));(function(i){var n=t.hash(JSON.stringify(i)),o="cc-color-override-"+n,s=t.isPlainObject(i);this.customStyleSelector=s?o:null,s&&function(i,n,o){if(e.customStyles[i])return void++e.customStyles[i].references;var s={},r=n.popup,a=n.button,c=n.highlight;r&&(r.text=r.text?r.text:t.getContrast(r.background),r.link=r.link?r.link:r.text,s[o+".cc-window"]=["color: "+r.text,"background-color: "+r.background],s[o+".cc-revoke"]=["color: "+r.text,"background-color: "+r.background],s[o+" .cc-link,"+o+" .cc-link:active,"+o+" .cc-link:visited"]=["color: "+r.link],a&&(a.text=a.text?a.text:t.getContrast(a.background),a.border=a.border?a.border:"transparent",s[o+" .cc-btn"]=["color: "+a.text,"border-color: "+a.border,"background-color: "+a.background],a.padding&&s[o+" .cc-btn"].push("padding: "+a.padding),"transparent"!=a.background&&(s[o+" .cc-btn:hover, "+o+" .cc-btn:focus"]=["background-color: "+(a.hover||l(a.background))]),c?(c.text=c.text?c.text:t.getContrast(c.background),c.border=c.border?c.border:"transparent",s[o+" .cc-highlight .cc-btn:first-child"]=["color: "+c.text,"border-color: "+c.border,"background-color: "+c.background]):s[o+" .cc-highlight .cc-btn:first-child"]=["color: "+r.text]));var u=document.createElement("style");document.head.appendChild(u),e.customStyles[i]={references:1,element:u.sheet};var h=-1;for(var p in s)s.hasOwnProperty(p)&&u.sheet.insertRule(p+"{"+s[p].join(";")+"}",++h)}(n,i,"."+o);return s}).call(this,this.options.palette);this.customStyleSelector&&o.push(this.customStyleSelector);return o}.call(this).join(" ")).replace("{{children}}",function(){var e={},i=this.options;i.showLink||(i.elements.link="",i.elements.messagelink=i.elements.message);Object.keys(i.elements).forEach(function(n){e[n]=t.interpolateString(i.elements[n],function(e){var t=i.content[e];return e&&"string"==typeof t&&t.length?t:""})});var n=i.compliance[i.type];n||(n=i.compliance.info);e.compliance=t.interpolateString(n,function(t){return e[t]});var o=i.layouts[i.layout];o||(o=i.layouts.basic);return t.interpolateString(o,function(t){return e[t]})}.call(this)),s=this.options.overrideHTML;if("string"==typeof s&&s.length&&(o=s),this.options.static){var r=c.call(this,'<div class="cc-grower">'+o+"</div>");r.style.display="",this.element=r.firstChild,this.element.style.display="none",t.addClass(this.element,"cc-invisible")}else this.element=c.call(this,o);(function(){var i=this.setStatus.bind(this),n=this.close.bind(this),o=this.options.dismissOnTimeout;"number"==typeof o&&o>=0&&(this.dismissTimeout=window.setTimeout(function(){i(e.status.dismiss),n(!0)},Math.floor(o)));var s=this.options.dismissOnScroll;if("number"==typeof s&&s>=0){var r=function(t){window.pageYOffset>Math.floor(s)&&(i(e.status.dismiss),n(!0),window.removeEventListener("scroll",r),this.onWindowScroll=null)};this.options.enabled&&(this.onWindowScroll=r,window.addEventListener("scroll",r))}var a=this.options.dismissOnWindowClick,c=this.options.ignoreClicksFrom;if(a){var l=function(o){for(var s=!1,r=o.path.length,a=c.length,u=0;u<r;u++)if(!s)for(var h=0;h<a;h++)s||(s=t.hasClass(o.path[u],c[h]));s||(i(e.status.dismiss),n(!0),window.removeEventListener("click",l),window.removeEventListener("touchend",l),this.onWindowClick=null)}.bind(this);this.options.enabled&&(this.onWindowClick=l,window.addEventListener("click",l),window.addEventListener("touchend",l))}}).call(this),function(){"info"!=this.options.type&&(this.options.revokable=!0);t.isMobile()&&(this.options.animateRevokable=!1);if(this.options.revokable){var e=a.call(this);this.options.animateRevokable&&e.push("cc-animate"),this.customStyleSelector&&e.push(this.customStyleSelector);var i=this.options.revokeBtn.replace("{{classes}}",e.join(" ")).replace("{{policy}}",this.options.content.policy);this.revokeBtn=c.call(this,i);var n=this.revokeBtn;if(this.options.animateRevokable){var o=t.throttle(function(e){var i=!1,o=window.innerHeight-20;t.hasClass(n,"cc-top")&&e.clientY<20&&(i=!0),t.hasClass(n,"cc-bottom")&&e.clientY>o&&(i=!0),i?t.hasClass(n,"cc-active")||t.addClass(n,"cc-active"):t.hasClass(n,"cc-active")&&t.removeClass(n,"cc-active")},200);this.onMouseMove=o,window.addEventListener("mousemove",o)}}}.call(this),this.options.autoOpen&&this.autoOpen()},o.prototype.destroy=function(){this.onButtonClick&&this.element&&(this.element.removeEventListener("click",this.onButtonClick),this.onButtonClick=null),this.dismissTimeout&&(clearTimeout(this.dismissTimeout),this.dismissTimeout=null),this.onWindowScroll&&(window.removeEventListener("scroll",this.onWindowScroll),this.onWindowScroll=null),this.onWindowClick&&(window.removeEventListener("click",this.onWindowClick),this.onWindowClick=null),this.onMouseMove&&(window.removeEventListener("mousemove",this.onMouseMove),this.onMouseMove=null),this.element&&this.element.parentNode&&this.element.parentNode.removeChild(this.element),this.element=null,this.revokeBtn&&this.revokeBtn.parentNode&&this.revokeBtn.parentNode.removeChild(this.revokeBtn),this.revokeBtn=null,function(i){if(t.isPlainObject(i)){var n=t.hash(JSON.stringify(i)),o=e.customStyles[n];if(o&&!--o.references){var s=o.element.ownerNode;s&&s.parentNode&&s.parentNode.removeChild(s),e.customStyles[n]=null}}}(this.options.palette),this.options=null},o.prototype.open=function(t){if(this.element)return this.isOpen()||(e.hasTransition?this.fadeIn():this.element.style.display="",this.options.revokable&&this.toggleRevokeButton(),this.options.onPopupOpen.call(this)),this},o.prototype.close=function(t){if(this.element)return this.isOpen()&&(e.hasTransition?this.fadeOut():this.element.style.display="none",t&&this.options.revokable&&this.toggleRevokeButton(!0),this.options.onPopupClose.call(this)),this},o.prototype.fadeIn=function(){var i=this.element;if(e.hasTransition&&i&&(this.afterTransition&&r.call(this,i),t.hasClass(i,"cc-invisible"))){if(i.style.display="",this.options.static){var n=this.element.clientHeight;this.element.parentNode.style.maxHeight=n+"px"}this.openingTimeout=setTimeout(s.bind(this,i),20)}},o.prototype.fadeOut=function(){var i=this.element;e.hasTransition&&i&&(this.openingTimeout&&(clearTimeout(this.openingTimeout),s.bind(this,i)),t.hasClass(i,"cc-invisible")||(this.options.static&&(this.element.parentNode.style.maxHeight=""),this.afterTransition=r.bind(this,i),i.addEventListener(e.transitionEnd,this.afterTransition),t.addClass(i,"cc-invisible")))},o.prototype.isOpen=function(){return this.element&&""==this.element.style.display&&(!e.hasTransition||!t.hasClass(this.element,"cc-invisible"))},o.prototype.toggleRevokeButton=function(e){this.revokeBtn&&(this.revokeBtn.style.display=e?"":"none")},o.prototype.revokeChoice=function(e){this.options.enabled=!0,this.clearStatus(),this.options.onRevokeChoice.call(this),e||this.autoOpen()},o.prototype.hasAnswered=function(t){return Object.keys(e.status).indexOf(this.getStatus())>=0},o.prototype.hasConsented=function(t){var i=this.getStatus();return i==e.status.allow||i==e.status.dismiss},o.prototype.autoOpen=function(e){!this.hasAnswered()&&this.options.enabled?this.open():this.hasAnswered()&&this.options.revokable&&this.toggleRevokeButton(!0)},o.prototype.setStatus=function(i){var n=this.options.cookie,o=t.getCookie(n.name),s=Object.keys(e.status).indexOf(o)>=0;Object.keys(e.status).indexOf(i)>=0?(t.setCookie(n.name,i,n.expiryDays,n.domain,n.path,n.secure),this.options.onStatusChange.call(this,i,s)):this.clearStatus()},o.prototype.getStatus=function(){return t.getCookie(this.options.cookie.name)},o.prototype.clearStatus=function(){var e=this.options.cookie;t.setCookie(e.name,"",-1,e.domain,e.path)},o}(),e.Location=function(){var e={timeout:5e3,services:["ipinfo"],serviceDefinitions:{ipinfo:function(){return{url:"//ipinfo.io",headers:["Accept: application/json"],callback:function(e,t){try{var i=JSON.parse(t);return i.error?s(i):{code:i.country}}catch(e){return s({error:"Invalid response ("+e+")"})}}}},ipinfodb:function(e){return{url:"//api.ipinfodb.com/v3/ip-country/?key={api_key}&format=json&callback={callback}",isScript:!0,callback:function(e,t){try{var i=JSON.parse(t);return"ERROR"==i.statusCode?s({error:i.statusMessage}):{code:i.countryCode}}catch(e){return s({error:"Invalid response ("+e+")"})}}}},maxmind:function(){return{url:"//js.maxmind.com/js/apis/geoip2/v2.1/geoip2.js",isScript:!0,callback:function(e){window.geoip2?geoip2.country(function(t){try{e({code:t.country.iso_code})}catch(t){e(s(t))}},function(t){e(s(t))}):e(new Error("Unexpected response format. The downloaded script should have exported `geoip2` to the global scope"))}}}}};function i(i){t.deepExtend(this.options={},e),t.isPlainObject(i)&&t.deepExtend(this.options,i),this.currentServiceIndex=-1}function n(e,t,i){var n,o=document.createElement("script");o.type="text/"+(e.type||"javascript"),o.src=e.src||e,o.async=!1,o.onreadystatechange=o.onload=function(){var e=o.readyState;clearTimeout(n),t.done||e&&!/loaded|complete/.test(e)||(t.done=!0,t(),o.onreadystatechange=o.onload=null)},document.body.appendChild(o),n=setTimeout(function(){t.done=!0,t(),o.onreadystatechange=o.onload=null},i)}function o(e,t,i,n,o){var s=new(window.XMLHttpRequest||window.ActiveXObject)("MSXML2.XMLHTTP.3.0");if(s.open(n?"POST":"GET",e,1),s.setRequestHeader("Content-type","application/x-www-form-urlencoded"),Array.isArray(o))for(var r=0,a=o.length;r<a;++r){var c=o[r].split(":",2);s.setRequestHeader(c[0].replace(/^\s+|\s+$/g,""),c[1].replace(/^\s+|\s+$/g,""))}"function"==typeof t&&(s.onreadystatechange=function(){s.readyState>3&&t(s)}),s.send(n)}function s(e){return new Error("Error ["+(e.code||"UNKNOWN")+"]: "+e.error)}return i.prototype.getNextService=function(){var e;do{e=this.getServiceByIdx(++this.currentServiceIndex)}while(this.currentServiceIndex<this.options.services.length&&!e);return e},i.prototype.getServiceByIdx=function(e){var i=this.options.services[e];if("function"==typeof i){var n=i();return n.name&&t.deepExtend(n,this.options.serviceDefinitions[n.name](n)),n}return"string"==typeof i?this.options.serviceDefinitions[i]():t.isPlainObject(i)?this.options.serviceDefinitions[i.name](i):null},i.prototype.locate=function(e,t){var i=this.getNextService();i?(this.callbackComplete=e,this.callbackError=t,this.runService(i,this.runNextServiceOnError.bind(this))):t(new Error("No services to run"))},i.prototype.setupUrl=function(e){var t=this.getCurrentServiceOpts();return e.url.replace(/\{(.*?)\}/g,function(i,n){if("callback"===n){var o="callback"+Date.now();return window[o]=function(t){e.__JSONP_DATA=JSON.stringify(t)},o}if(n in t.interpolateUrl)return t.interpolateUrl[n]})},i.prototype.runService=function(e,t){var i=this;e&&e.url&&e.callback&&(e.isScript?n:o)(this.setupUrl(e),function(n){var o=n?n.responseText:"";e.__JSONP_DATA&&(o=e.__JSONP_DATA,delete e.__JSONP_DATA),i.runServiceCallback.call(i,t,e,o)},this.options.timeout,e.data,e.headers)},i.prototype.runServiceCallback=function(e,t,i){var n=this,o=t.callback(function(t){o||n.onServiceResult.call(n,e,t)},i);o&&this.onServiceResult.call(this,e,o)},i.prototype.onServiceResult=function(e,t){t instanceof Error||t&&t.error?e.call(this,t,null):e.call(this,null,t)},i.prototype.runNextServiceOnError=function(e,t){if(e){this.logError(e);var i=this.getNextService();i?this.runService(i,this.runNextServiceOnError.bind(this)):this.completeService.call(this,this.callbackError,new Error("All services failed"))}else this.completeService.call(this,this.callbackComplete,t)},i.prototype.getCurrentServiceOpts=function(){var e=this.options.services[this.currentServiceIndex];return"string"==typeof e?{name:e}:"function"==typeof e?e():t.isPlainObject(e)?e:{}},i.prototype.completeService=function(e,t){this.currentServiceIndex=-1,e&&e(t)},i.prototype.logError=function(e){var t=this.currentServiceIndex,i=this.getServiceByIdx(t);console.warn("The service["+t+"] ("+i.url+") responded with the following error",e)},i}(),e.Law=function(){var e={regionalLaw:!0,hasLaw:["AT","BE","BG","HR","CZ","CY","DK","EE","FI","FR","DE","EL","HU","IE","IT","LV","LT","LU","MT","NL","PL","PT","SK","ES","SE","GB","UK","GR","EU"],revokable:["HR","CY","DK","EE","FR","DE","LV","LT","NL","PT","ES"],explicitAction:["HR","IT","ES"]};function i(e){this.initialise.apply(this,arguments)}return i.prototype.initialise=function(i){t.deepExtend(this.options={},e),t.isPlainObject(i)&&t.deepExtend(this.options,i)},i.prototype.get=function(e){var t=this.options;return{hasLaw:t.hasLaw.indexOf(e)>=0,revokable:t.revokable.indexOf(e)>=0,explicitAction:t.explicitAction.indexOf(e)>=0}},i.prototype.applyLaw=function(e,t){var i=this.get(t);return i.hasLaw||(e.enabled=!1,"function"==typeof e.onNoCookieLaw&&e.onNoCookieLaw(t,i)),this.options.regionalLaw&&(i.revokable&&(e.revokable=!0),i.explicitAction&&(e.dismissOnScroll=!1,e.dismissOnTimeout=!1)),e},i}(),e.initialise=function(i,n,o){var s=new e.Law(i.law);n||(n=function(){}),o||(o=function(){});var r=Object.keys(e.status),a=t.getCookie("cookieconsent_status");r.indexOf(a)>=0?n(new e.Popup(i)):e.getCountryCode(i,function(t){delete i.law,delete i.location,t.code&&(i=s.applyLaw(i,t.code)),n(new e.Popup(i))},function(t){delete i.law,delete i.location,o(t,new e.Popup(i))})},e.getCountryCode=function(t,i,n){t.law&&t.law.countryCode?i({code:t.law.countryCode}):t.location?new e.Location(t.location).locate(function(e){i(e||{})},n):i({})},e.utils=t,e.hasInitialised=!0,window.cookieconsent=e}}(window.cookieconsent||{});
// Cookie Message On Your Site
window.cookieconsent.initialise({
  "palette": {
    "popup": {
      "background": "#000"
    },
    "button": {
      "background": "#f1d600"
    }
  },
  "theme": "classic",
  "position": "bottom-left",
  "content": {
    "message": "يستخدم موقعنا ملفات تعريف الإرتباط لضمان حصولك على أفضل تجربة فى موقعنا ",
    "dismiss": "موافق",
    "link": "إقرأ المزيد",
    "href": "https://arab-hasry.blogspot.com/p/privacy-policy.html"
  }
});
// Cookie Message

















// Dark Mode
// check for saved 'darkMode' in localStorage
let darkMode = localStorage.getItem('darkMode'); 

const darkModeToggle = document.querySelector('#chk');

const enableDarkMode = () => {
  // 1. Add the class to the body
  document.body.classList.add('darkmode');
  // 2. Update darkMode in localStorage
  localStorage.setItem('darkMode', 'enabled');
}

const disableDarkMode = () => {
  // 1. Remove the class from the body
  document.body.classList.remove('darkmode');
  // 2. Update darkMode in localStorage 
  localStorage.setItem('darkMode', null);
}
 
// If the user already visited and enabled darkMode
// start things off with it on
if (darkMode === 'enabled') {
  enableDarkMode();
}

// When someone clicks the button
darkModeToggle.addEventListener('click', () => {
  // get their darkMode setting
  darkMode = localStorage.getItem('darkMode'); 
  
  // if it not current enabled, enable it
  if (darkMode !== 'enabled') {
    enableDarkMode();
  // if it has been enabled, turn it off  
  } else {  
    disableDarkMode(); 
  }
});
// Dark Mode

















// Sticky The Sidebar When The User Scrolling Up Or Down
 !function(i) {
    i.fn.theiaStickySidebar=function(t) {
        var e,
        o,
        a,
        s,
        n,
        d;

        function r(t, e) {
            return !0===t.initialized|| !(i("body").width()<t.minWidth)&&(function(t, e) {
                t.initialized= !0, 0===i("#theia-sticky-sidebar-stylesheet-"+t.namespace).length&&i("head").append(i('<style id="theia-sticky-sidebar-stylesheet-'+t.namespace+'">.theiaStickySidebar:after {content: ""; display: table; clear: both;}</style>'));

                e.each(function() {
                    var e= {}

                    ;

                    if(e.sidebar=i(this), e.options=t|| {}

                    , e.container=i(e.options.containerSelector), 0==e.container.length&&(e.container=e.sidebar.parent()), e.sidebar.parents().css("-webkit-transform", "none"), e.sidebar.css( {
                        position: e.options.defaultPosition, overflow:"visible", "-webkit-box-sizing":"border-box", "-moz-box-sizing":"border-box", "box-sizing":"border-box"
                    }

                    ), e.stickySidebar=e.sidebar.find(".theiaStickySidebar"), 0==e.stickySidebar.length) {
                        var o=/(?: text|application)\/(?:x-)?(?:javascript|ecmascript)/i;

                        e.sidebar.find("script").filter(function(i, t) {
                            return 0===t.type.length||t.type.match(o)
                        }

                        ).remove(), e.stickySidebar=i("<div>").addClass("theiaStickySidebar").append(e.sidebar.children()), e.sidebar.append(e.stickySidebar)
                    }

                    e.marginBottom=parseInt(e.sidebar.css("margin-bottom")), e.paddingTop=parseInt(e.sidebar.css("padding-top")), e.paddingBottom=parseInt(e.sidebar.css("padding-bottom"));
                    var a, s, n, d=e.stickySidebar.offset().top, r=e.stickySidebar.outerHeight();

                    function p() {
                        e.fixedScrollTop=0, e.sidebar.css( {
                            "min-height": "1px"
                        }

                        ), e.stickySidebar.css( {
                            position: "static", width:"", transform:"none"
                        }

                        )
                    }

                    e.stickySidebar.css("padding-top", 1), e.stickySidebar.css("padding-bottom", 1), d-=e.stickySidebar.offset().top, r=e.stickySidebar.outerHeight()-r-d, 0==d?(e.stickySidebar.css("padding-top", 0), e.stickySidebarPaddingTop=0):e.stickySidebarPaddingTop=1, 0==r?(e.stickySidebar.css("padding-bottom", 0), e.stickySidebarPaddingBottom=0):e.stickySidebarPaddingBottom=1, e.previousScrollTop=null, e.fixedScrollTop=0, p(), e.onScroll=function(e) {
                        if(e.stickySidebar.is(":visible"))if(i("body").width()<e.options.minWidth)p();

                        else {
                            if(e.options.disableOnResponsiveLayouts) {
                                var o=e.sidebar.outerWidth("none"==e.sidebar.css("float"));
                                if(o+50>e.container.width())return void p()
                            }

                            var a, s, n=i(document).scrollTop(), d="static";

                            if(n>=e.sidebar.offset().top+(e.paddingTop-e.options.additionalMarginTop)) {
                                var r, b=e.paddingTop+t.additionalMarginTop, l=e.paddingBottom+e.marginBottom+t.additionalMarginBottom, h=e.sidebar.offset().top, f=e.sidebar.offset().top+(a=e.container, s=a.height(), a.children().each(function() {
                                    s=Math.max(s, i(this).height())
                                }

                                ), s), g=0+t.additionalMarginTop, S=e.stickySidebar.outerHeight()+b+l<i(window).height();
                                r=S?g+e.stickySidebar.outerHeight():i(window).height()-e.marginBottom-e.paddingBottom-t.additionalMarginBottom;
                                var m=h-n+e.paddingTop, y=f-n-e.paddingBottom-e.marginBottom, u=e.stickySidebar.offset().top-n, k=e.previousScrollTop-n;
                                "fixed"==e.stickySidebar.css("position")&&"modern"==e.options.sidebarBehavior&&(u+=k), "stick-to-top"==e.options.sidebarBehavior&&(u=t.additionalMarginTop), "stick-to-bottom"==e.options.sidebarBehavior&&(u=r-e.stickySidebar.outerHeight()), u=k>0?Math.min(u, g):Math.max(u, r-e.stickySidebar.outerHeight()), u=Math.max(u, m), u=Math.min(u, y-e.stickySidebar.outerHeight());
                                var v=e.container.height()==e.stickySidebar.outerHeight();
                                d=(v||u !=g)&&(v||u !=r-e.stickySidebar.outerHeight())?n+u-e.sidebar.offset().top-e.paddingTop<=t.additionalMarginTop?"static":"absolute":"fixed"
                            }

                            if("fixed"==d) {
                                var x=i(document).scrollLeft();

                                e.stickySidebar.css( {
                                    position: "fixed", width:c(e.stickySidebar)+"px", transform:"translateY("+u+"px)", left:e.sidebar.offset().left+parseInt(e.sidebar.css("padding-left"))-x+"px", top:"0px"
                                }

                                )
                            }

                            else if("absolute"==d) {
                                var T= {}

                                ;
                                "absolute" !=e.stickySidebar.css("position")&&(T.position="absolute", T.transform="translateY("+(n+u-e.sidebar.offset().top-e.stickySidebarPaddingTop-e.stickySidebarPaddingBottom)+"px)", T.top="0px"), T.width=c(e.stickySidebar)+"px", T.left="", e.stickySidebar.css(T)
                            }

                            else"static"==d&&p();

                            "static" !=d&&1==e.options.updateSidebarHeight&&e.sidebar.css( {
                                "min-height": e.stickySidebar.outerHeight()+e.stickySidebar.offset().top-e.sidebar.offset().top+e.paddingBottom
                            }

                            ), e.previousScrollTop=n
                        }
                    }

                    , e.onScroll(e), i(document).on("scroll."+e.options.namespace, (a=e, function() {
                        a.onScroll(a)
                    }

                    )), i(window).on("resize."+e.options.namespace, (s=e, function() {
                        s.stickySidebar.css( {
                            position: "static"
                        }

                        ), s.onScroll(s)
                    }

                    )), "undefined" !=typeof ResizeSensor&&new ResizeSensor(e.stickySidebar[0], (n=e, function() {
                        n.onScroll(n)
                    }

                    ))
                }

                )
            }

            (t, e),  !0)
        }

        function c(i) {
            var t;

            try {
                t=i[0].getBoundingClientRect().width
            }

            catch(i) {}

            return void 0===t&&(t=i.width()),
            t
        }

        return(t=i.extend( {
            containerSelector: "", additionalMarginTop:0, additionalMarginBottom:0, updateSidebarHeight: !0, minWidth:0, disableOnResponsiveLayouts: !0, sidebarBehavior:"modern", defaultPosition:"relative", namespace:"TSS"
        }

        , t)).additionalMarginTop=parseInt(t.additionalMarginTop)||0,
        t.additionalMarginBottom=parseInt(t.additionalMarginBottom)||0,
        r(e=t, o=this)||(console.log("TSS: Body width smaller than options.minWidth. Init is delayed."), i(document).on("scroll."+e.namespace, (n=e, d=o, function(t) {
            var e=r(n, d);
            e&&i(this).unbind(t)
        }

        )), i(window).on("resize."+e.namespace, (a=e, s=o, function(t) {
            var e=r(a, s);
            e&&i(this).unbind(t)
        }

        ))),
        this
    }
}
(jQuery);

// Sticky Sidebar
var $StickySidebar = jQuery.noConflict();
$StickySidebar(document).ready(function(){
    "use strict";

    $StickySidebar(".sidebar").theiaStickySidebar({
        additionalMarginTop: 90,
         additionalMarginBottom: -15,
    });

}); // End $StickySidebar(document).ready(function(){
// Sticky The Sidebar When The User Scrolling Up Or Down
