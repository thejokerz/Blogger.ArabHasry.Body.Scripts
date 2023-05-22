// Start Body Scripts

// Start Cookie Message
// Cookie Message
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
// End Cookie Message

// Start NewsTicker
// NewsTicker
$(function() {
    $(".widget-item-control")["remove"]();
    $("#HTML101 .widget-content, #HTML102 .widget-content")["each"](function() {
        var _0x9652x11 = $(this);
        var _0x9652x12 = _0x9652x11["text"]();
        if (_0x9652x12["length"] > 1 && !_0x9652x12["match"]("no")) {
            $["ajax"]({
                url: "/feeds/posts/summary?alt=json-in-script",
                method: "GET",
                dataType: "jsonp",
                success: function(_0x9652x13) {
                    var _0x9652x14 = Math["floor"](Math["random"]() * _0x9652x13 ["feed"]["entry"]["length"]) + 1;
                    if (_0x9652x12["match"]("recent")) {
                        var _0x9652x15 = "/feeds/posts/summary?alt=json-in-script&max-results=10"
                    } else {
                        if (_0x9652x12["match"]("random")) {
                            var _0x9652x15 = "/feeds/posts/summary?alt=json-in-script&start-index=" + _0x9652x14 + "&max-results=10"
                        } else {
                            var _0x9652x15 = "/feeds/posts/summary/-/" + _0x9652x12 + "?alt=json-in-script&max-results=10"
                        }
                    };

                    $["ajax"]({
                        url: _0x9652x15,
                        type: "GET",
                        dataType: "jsonp",
                        success: function(_0x9652x13) { 
							_0x9652x11 ["html"] ("");

                            var _0x9652x16 = "";
                            for (var _0x9652x17 = 0; _0x9652x17 < _0x9652x13[ "feed"] ["entry"][ "length" ]; _0x9652x17++) {
                                for (var _0x9652x18 = 0;
									_0x9652x18 < _0x9652x13 ["feed"] ["entry"] [_0x9652x17] ["link"] ["length"]; _0x9652x18++) {
                                    	var _0x9652x19 = _0x9652x13 ["feed"] ["entry"] [_0x9652x17] ["link"] [_0x9652x18];
                                    if (_0x9652x19 ["rel"] == "alternate") {
                                        var _0x9652x1a = _0x9652x19 ["href"]; break
                                    }
                                };

                                var _0x9652x1b = _0x9652x13 ["feed"] ["entry"] [_0x9652x17] ["title"] ["$t"];

                                if (_0x9652x11 ["hasClass"] ("scroll")) { _0x9652x16 += "<a class=\'Scroll-Title\' href=\'" + _0x9652x1a + "\'>" + _0x9652x1b + "</a>"
                                }
                            };

                            _0x9652x11["html"](
                                _0x9652x16
                            )

                        },

                    })
                }
            })
        }
    });

    $(document)["one"]("ajaxStop", function() {
        if (!$(".ticker-ch")["text"]()["match"]("no") && $(".ticker-ch")["text"]()["length"] > 0) {
            var $j = jQuery.noConflict();
            $j(".marquee")["marquee"]({
                pauseOnHover: true,
                duration: 15000,
                duplicated: true,
                direction: "right"
            })["delay"](1000)["fadeTo"](400, 1)
        }
    });

})
// NewsTicker
// End NewsTicker

// Start View More Posts
// Start Button Open Side Menu
// Start Area Press To Hide For Side Menu And Search
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
// End View More Posts
// End Button Open Side Menu
// End Area Press To Hide For Side Menu And Search

// Start Scroll To Top
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
// End Scroll To Top

// Start Dark Mode
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
// End Dark Mode

// Start Sticky The Sidebar When The User Scrolling Up Or Down
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
// End Sticky The Sidebar When The User Scrolling Up Or Down

// Start Hide And Show Top Main Menu When The User Scrolling Up Or Down
(function(){
    var doc = document.documentElement;
    var w   = window;
    var curScroll;
    var prevScroll = w.scrollY || doc.scrollTop;
    var curDirection = 0;
    var prevDirection = 0;
    var header = document.getElementById('site-header');
    var toggled;
    var threshold = 0;
    var checkScroll = function() {
        curScroll = w.scrollY || doc.scrollTop;
        if(curScroll > prevScroll) {
            // scrolled down
            curDirection = 2;
        }
        else {
            //scrolled up
            curDirection = 1;
        }
        if(curDirection !== prevDirection) {
            toggled = toggleHeader();
        }
        prevScroll = curScroll;
        if(toggled) {
            prevDirection = curDirection;
        }
    };
    var toggleHeader = function() { 
        toggled = true;
        if(curDirection === 2 && curScroll > threshold) {
            header.classList.add('hide');
        }
        else if (curDirection === 1) {
            header.classList.remove('hide');
        }
        else {
            toggled = false;
        }
        return toggled;
    };
    window.addEventListener('scroll', checkScroll);
})();
// End Hide And Show Top Main Menu When The User Scrolling Up Or Down
  
// Start Add And Remove Active Class Based On URL
jQuery(function($) {
	var path = window.location.href;
		$('ul li a').each(function() {
          if (this.href === path) {
           $(this).addClass('active');
		}
	});
});
// End Add And Remove Active Class Based On URL

// Start Dropdown Inside Top Main Menu
// Get all the dropdown from document
document.querySelectorAll('.dropdown-toggle').forEach(dropDownFunc);
document.querySelectorAll('.submenu').forEach(submenuFunc);
// Dropdown Open and Close function
function dropDownFunc(dropDown) {
    if (dropDown.classList.contains('click-dropdown') === true) {
        dropDown.addEventListener('click', function (e) {
            e.preventDefault();
            if (this.nextElementSibling.classList.contains('dropdown-active') === true) {
                // Close the clicked dropdown
                this.parentElement.classList.remove('dropdown-open');
                this.nextElementSibling.classList.remove('dropdown-active');
            } else {
                // Close the opend dropdown
                closeDropdown();

                // add the open and active class(Opening the DropDown)
                this.parentElement.classList.add('dropdown-open');
                this.nextElementSibling.classList.add('dropdown-active');
            }
        });
    }
    if (dropDown.classList.contains('hover-dropdown') === true) {
        dropDown.onmouseover = dropDown.onmouseout = dropdownHover;
        function dropdownHover(e) {
            if (e.type == 'mouseover') {
                // Close the opend dropdown
                closeDropdown();
                // add the open and active class(Opening the DropDown)
                this.parentElement.classList.add('dropdown-open');
                this.nextElementSibling.classList.add('dropdown-active');
            }
        }
    }
};
// Listen to the doc click
window.addEventListener('click', function (e) {
    // Close the menu if click happen outside menu
    if (e.target.closest('.dropdown-container') === null) {
        // Close the opend dropdown
        closeDropdown();
    }
});
// Close the openend Dropdowns
function closeDropdown() {
    // remove the open and active class from other opened Dropdown (Closing the opend DropDown)
    document.querySelectorAll('.dropdown-container').forEach(function (container) {
        container.classList.remove('dropdown-open');
    });
    document.querySelectorAll('.dropdown-menu').forEach(function (menu) {
        menu.classList.remove('dropdown-active');
    });
}
// close the dropdown on mouse out from the dropdown list
document.querySelectorAll('.dropdown-menu').forEach(function (dropDownList) {
    // close the dropdown after user leave the list
    dropDownList.onmouseleave = function () { 
        // onmouseleave check if submenu is open or not
        dropDownList.querySelectorAll('li.submenu').forEach(function (li) {
            if(li.classList.contains(submenu-open) == false){
                closeDropdown();
            }
        });
    };
});
/*---- Submenu Logic ----*/
// submenu
function submenuFunc(submenuHover) {
    // checking submenu mouse hover and mouse leave event
    submenuHover.onmouseover = submenuHover.onmouseout = submenu;
};
// submenu 
function submenu(e) {
    // if mouse hover
    if (e.type == 'mouseover') {
        if (this.classList.contains('submenu') == true) {
            // closing other open submenu classes
            submenuClose();
            // adding class to submenu li
            this.classList.add('submenu-open');
        }
    }
    // if mouse leave
    if (e.type == 'mouseout') {
        // closing the submenu
        submenuClose();
    }
}
// close other submenu
function submenuClose() {
    // performing close function for all the open submenus
    document.querySelectorAll('.submenu').forEach(function (subMenu) {
        subMenu.classList.remove('submenu-open');
    });
}
// End Dropdown Inside Top Main Menu

// End Body Scripts
