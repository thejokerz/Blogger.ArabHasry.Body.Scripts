// Start Blogger arab-hasry.blogspot.com Body Scripts

// Start News Ticker and Slider Show
jQuery("abbr.timeago")["timeago"]();
var globals = {
        sidebar: $("aside")["offset"]()
        , main: $("#main")["offset"]()
};
$(function () {
                "use strict";
                $(function () {
                        $(window)["scroll"](function () {
                                if ($(window)["width"]() > 900) {
                                        var _0x9652x1 = globals["sidebar"]
                                                , _0x9652x2 = globals["main"]
                                                , _0x9652x3 = $("aside")["height"]()
                                                , _0x9652x4 = $("#main")["height"]()
                                                , _0x9652x5 = _0x9652x1 + _0x9652x3
                                                , _0x9652x6 = _0x9652x2 + _0x9652x4
                                                , _0x9652x7 = $(window)["scrollTop"]()
                                                , _0x9652x8 = $(window)["height"]()
                                                , _0x9652x9 = _0x9652x7 + _0x9652x8
                                                , _0x9652xa = _0x9652x9 - _0x9652x5
                                                , _0x9652xb = _0x9652x9 - _0x9652x6;
                                        if (_0x9652x3 > _0x9652x4) {
                                                if (_0x9652x9 >= _0x9652x6 && _0x9652x9 < _0x9652x5 && _0x9652x4 >
                                                        _0x9652x8) {
                                                        $("#main")["css"]("margin-top", _0x9652xb)
                                                } else {
                                                        if (_0x9652x9 < _0x9652x6) {
                                                                $("#main")["css"]("margin-top", "0")
                                                        }
                                                }
                                        } else {
                                                if (_0x9652x4 > _0x9652x3) {
                                                        if (_0x9652x9 >= _0x9652x5 && _0x9652x9 < _0x9652x6 &&
                                                                _0x9652x3 > _0x9652x8) {
                                                                $("aside")["css"]("margin-top", _0x9652xa)
                                                        } else {
                                                                if (_0x9652x9 < _0x9652x5) {
                                                                        $("aside")["css"]("margin-top", "0")
                                                                }
                                                        }
                                                }
                                        }
                                } else {
                                        $("#main , aside")["css"]("margin-top", "0")
                                }
                        })
                });
                $(".widget-item-control")["remove"]();
                $("aside a, footer a, #PageList1 li a, #LinkList100 li a, #LinkList101 li a,.blog-pager a,#HTML110 a,.ibtn,.LabLink")["removeAttr"](
                        "title");

                $("#int-two,.slideshow-wrapper , .slideshow-wrapper *")["addClass"]("notr");
                $(".owl-item")["parent"]()["addClass"]("notr");
                var _0x9652xd = $("#int-two")["height"]();
                $(".I-toggle")["click"](function () {
                        $("#int-two")["slideToggle"](400, function () {
                                if ($("#int-two")["is"](":hidden")) {
                                        globals["sidebar"] = globals["sidebar"] - _0x9652xd;
                                        globals["main"] = globals["main"] - _0x9652xd
                                } else {
                                        globals["sidebar"] = globals["sidebar"] + _0x9652xd;
                                        globals["main"] = globals["main"] + _0x9652xd
                                }
                        });
                        $(this)["find"]("i")["toggleClass"]("fa-angle-double-up")["toggleClass"]("fa-angle-double-down")
                });
                $(".flat .archivedate")["each"](function () {
                        var _0x9652xe = $(this)["contents"]()["last"]();
                        _0x9652xe["wrap"]("<span class=\'flat-count\'/>")
                });
                $("#ContactForm1")["addClass"]("notr");
                $(".fa-microphone")["click"](function () {
                        $(this)["toggleClass"]("cont-open");
                        $("#ContactForm1")["fadeToggle"]()
                });
                $(".ShareIndex")["click"](function () {
                        $(this)["next"]()["fadeToggle"]();
                        $(this)["toggleClass"]("fa-heart-o")["toggleClass"]("fa-heart")
                });
                $(".label-count,.Label li span")["each"](function () {
                        $(this)["text"]($(this)["text"]()["replace"]("(", "")["replace"](")", ""))
                });
                $("aside .Label a, footer .Label a, .post-labels a[rel]")["each"](function () {
                        $(this)["attr"]("href", $(this)["attr"]("href") + "?&max-results=" + m_res)
                });
                $(".label-size a:only-child")["each"](function () {
                        $(this)["parent"]()["addClass"]("no-nums")
                });
                $(".fa-arrow-up")["click"](function () {
                        $("html,body")["animate"]({
                                scrollTop: 0
                        }, 2000)
                });
                $("#HTML101 .widget-content, #HTML102 .widget-content")["each"](function () {
                        var _0x9652x11 = $(this);
                        var _0x9652x12 = _0x9652x11["text"]();
                        if (_0x9652x12["length"] > 1 && !_0x9652x12["match"]("no")) {
                                $["ajax"]({
                                        url: "/feeds/posts/summary?alt=json-in-script"
                                        , method: "GET"
                                        , dataType: "jsonp"
                                        , success: function (_0x9652x13) {
                                                var _0x9652x14 = Math["floor"](Math["random"]() * _0x9652x13[
                                                        "feed"]["entry"]["length"]) + 1;
                                                if (_0x9652x12["match"]("recent")) {
                                                        var _0x9652x15 =
                                                                "/feeds/posts/summary?alt=json-in-script&max-results=10"
                                                } else {
                                                        if (_0x9652x12["match"]("random")) {
                                                                var _0x9652x15 =
                                                                        "/feeds/posts/summary?alt=json-in-script&start-index=" +
                                                                        _0x9652x14 + "&max-results=10"
                                                        } else {
                                                                var _0x9652x15 = "/feeds/posts/summary/-/" +
                                                                        _0x9652x12 +
                                                                        "?alt=json-in-script&max-results=10"
                                                        }
                                                };
                                                $["ajax"]({
                                                        url: _0x9652x15
                                                        , type: "GET"
                                                        , dataType: "jsonp"
                                                        , success: function (_0x9652x13) {
                                                                _0x9652x11["html"]("");
                                                                var _0x9652x16 = "";
                                                                for (var _0x9652x17 = 0; _0x9652x17 <
                                                                        _0x9652x13[
                                                                                "feed"]
                                                                        ["entry"][
                                                                                "length"
                                                                                ]; _0x9652x17++
                                                                ) {
                                                                        for (var
                                                                                        _0x9652x18 =
                                                                                        0; _0x9652x18 <
                                                                                _0x9652x13[
                                                                                        "feed"
                                                                                        ]
                                                                                [
                                                                                        "entry"
                                                                                        ]
                                                                                [
                                                                                        _0x9652x17
                                                                                        ]
                                                                                ["link"]
                                                                                [
                                                                                        "length"
                                                                                        ]; _0x9652x18++
                                                                        ) {
                                                                                var
                                                                                        _0x9652x19 =
                                                                                        _0x9652x13[
                                                                                                "feed"
                                                                                                ]
                                                                                        [
                                                                                                "entry"
                                                                                                ]
                                                                                        [
                                                                                                _0x9652x17
                                                                                                ]
                                                                                        [
                                                                                                "link"
                                                                                                ]
                                                                                        [
                                                                                                _0x9652x18
                                                                                                ];
                                                                                if (
                                                                                        _0x9652x19[
                                                                                                "rel"
                                                                                                ] ==
                                                                                        "alternate"
                                                                                ) {
                                                                                        var
                                                                                                _0x9652x1a =
                                                                                                _0x9652x19[
                                                                                                        "href"
                                                                                                        ];
                                                                                        break
                                                                                }
                                                                        };
                                                                        var _0x9652x1b =
                                                                                _0x9652x13[
                                                                                        "feed"
                                                                                        ]
                                                                                [
                                                                                        "entry"
                                                                                        ]
                                                                                [
                                                                                        _0x9652x17
                                                                                        ]
                                                                                [
                                                                                        "title"
                                                                                        ]
                                                                                ["$t"];
                                                                        var _0x9652x1c =
                                                                                _0x9652x13[
                                                                                        "feed"
                                                                                        ]
                                                                                [
                                                                                        "entry"
                                                                                        ]
                                                                                [
                                                                                        _0x9652x17
                                                                                        ]
                                                                                [
                                                                                        "published"
                                                                                        ]
                                                                                ["$t"][
                                                                                        "substring"
                                                                                        ]
                                                                                (0, 10);
                                                                        var _0x9652x1d =
                                                                                "/" +
                                                                                _0x9652x13[
                                                                                        "feed"
                                                                                        ]
                                                                                [
                                                                                        "entry"
                                                                                        ]
                                                                                [
                                                                                        _0x9652x17
                                                                                        ]
                                                                                [
                                                                                        "published"
                                                                                        ]
                                                                                ["$t"][
                                                                                        "substr"
                                                                                        ]
                                                                                (0, 10)[
                                                                                        "replace"
                                                                                        ]
                                                                                (/\-/g
                                                                                        , "_"
                                                                                ) +
                                                                                "_archive.html";
                                                                        if ($(
                                                                                        "#b-author"
                                                                                )[
                                                                                        "length"
                                                                                        ] >
                                                                                0 && $(
                                                                                        "#b-author"
                                                                                )[
                                                                                        "text"
                                                                                        ]
                                                                                ()[
                                                                                        "match"
                                                                                        ]
                                                                                (
                                                                                        "false"
                                                                                )) {
                                                                                var
                                                                                        _0x9652x1e =
                                                                                        ""
                                                                        } else {
                                                                                if ($(
                                                                                                "#b-author-link"
                                                                                        )[
                                                                                                "length"
                                                                                                ] >
                                                                                        0 &&
                                                                                        $(
                                                                                                "#b-author-link"
                                                                                        )[
                                                                                                "text"
                                                                                                ]
                                                                                        ()[
                                                                                                "match"
                                                                                                ]
                                                                                        (
                                                                                                "false"
                                                                                        )
                                                                                ) {
                                                                                        var
                                                                                                _0x9652x1e =
                                                                                                "<span class=\'Intro-Author\'>" +
                                                                                                _0x9652x13[
                                                                                                        "feed"
                                                                                                        ]
                                                                                                [
                                                                                                        "entry"
                                                                                                        ]
                                                                                                [
                                                                                                        _0x9652x17
                                                                                                        ]
                                                                                                [
                                                                                                        "author"
                                                                                                        ]
                                                                                                [
                                                                                                        0
                                                                                                        ]
                                                                                                [
                                                                                                        "name"
                                                                                                        ]
                                                                                                [
                                                                                                        "$t"
                                                                                                        ] +
                                                                                                "</span>"
                                                                                } else {
                                                                                        if (
                                                                                                _0x9652x13[
                                                                                                        "feed"
                                                                                                        ]
                                                                                                [
                                                                                                        "entry"
                                                                                                        ]
                                                                                                [
                                                                                                        _0x9652x17
                                                                                                        ]
                                                                                                [
                                                                                                        "author"
                                                                                                        ]
                                                                                                [
                                                                                                        0
                                                                                                        ]
                                                                                                [
                                                                                                        "uri"
                                                                                                        ] !==
                                                                                                undefined
                                                                                        ) {
                                                                                                var
                                                                                                        _0x9652x1e =
                                                                                                        "<a href=\'" +
                                                                                                        _0x9652x13[
                                                                                                                "feed"
                                                                                                                ]
                                                                                                        [
                                                                                                                "entry"
                                                                                                                ]
                                                                                                        [
                                                                                                                _0x9652x17
                                                                                                                ]
                                                                                                        [
                                                                                                                "author"
                                                                                                                ]
                                                                                                        [
                                                                                                                0
                                                                                                                ]
                                                                                                        [
                                                                                                                "uri"
                                                                                                                ]
                                                                                                        [
                                                                                                                "$t"
                                                                                                                ] +
                                                                                                        "\' class=\'Intro-Author\' target=\'_blank\'>" +
                                                                                                        _0x9652x13[
                                                                                                                "feed"
                                                                                                                ]
                                                                                                        [
                                                                                                                "entry"
                                                                                                                ]
                                                                                                        [
                                                                                                                _0x9652x17
                                                                                                                ]
                                                                                                        [
                                                                                                                "author"
                                                                                                                ]
                                                                                                        [
                                                                                                                0
                                                                                                                ]
                                                                                                        [
                                                                                                                "name"
                                                                                                                ]
                                                                                                        [
                                                                                                                "$t"
                                                                                                                ] +
                                                                                                        "</a>"
                                                                                        } else {
                                                                                                var
                                                                                                        _0x9652x1e =
                                                                                                        "<span class=\'Intro-Author\'>" +
                                                                                                        _0x9652x13[
                                                                                                                "feed"
                                                                                                                ]
                                                                                                        [
                                                                                                                "entry"
                                                                                                                ]
                                                                                                        [
                                                                                                                _0x9652x17
                                                                                                                ]
                                                                                                        [
                                                                                                                "author"
                                                                                                                ]
                                                                                                        [
                                                                                                                0
                                                                                                                ]
                                                                                                        [
                                                                                                                "name"
                                                                                                                ]
                                                                                                        [
                                                                                                                "$t"
                                                                                                                ] +
                                                                                                        "</span>"
                                                                                        }
                                                                                }
                                                                        };
                                                                        var _0x9652x1f =
                                                                                $(
                                                                                        _0x9652x13[
                                                                                                "feed"
                                                                                                ]
                                                                                        [
                                                                                                "entry"
                                                                                                ]
                                                                                        [
                                                                                                _0x9652x17
                                                                                                ]
                                                                                        [
                                                                                                "media$thumbnail"
                                                                                                ]
                                                                                )[
                                                                                        "length"
                                                                                        ] >
                                                                                0 ?
                                                                                _0x9652x13[
                                                                                        "feed"
                                                                                        ]
                                                                                [
                                                                                        "entry"
                                                                                        ]
                                                                                [
                                                                                        _0x9652x17
                                                                                        ]
                                                                                [
                                                                                        "media$thumbnail"
                                                                                        ]
                                                                                ["url"]
                                                                                [
                                                                                        "replace"
                                                                                        ]
                                                                                (
                                                                                        "s72-c"
                                                                                        , "s300"
                                                                                ) : (
                                                                                        alt_Img[
                                                                                                "indexOf"
                                                                                                ]
                                                                                        (
                                                                                                "s1600-r"
                                                                                        ) !=
                                                                                        -
                                                                                        1 ?
                                                                                        alt_Img[
                                                                                                "replace"
                                                                                                ]
                                                                                        (
                                                                                                "s1600-r"
                                                                                                , "s300"
                                                                                        ) :
                                                                                        alt_Img
                                                                                );
                                                                        var _0x9652x20 =
                                                                                $(
                                                                                        _0x9652x13[
                                                                                                "feed"
                                                                                                ]
                                                                                        [
                                                                                                "entry"
                                                                                                ]
                                                                                        [
                                                                                                _0x9652x17
                                                                                                ]
                                                                                        [
                                                                                                "category"
                                                                                                ]
                                                                                )[
                                                                                        "length"
                                                                                        ] >
                                                                                0 ?
                                                                                _0x9652x13[
                                                                                        "feed"
                                                                                        ]
                                                                                [
                                                                                        "entry"
                                                                                        ]
                                                                                [
                                                                                        _0x9652x17
                                                                                        ]
                                                                                [
                                                                                        "category"
                                                                                        ]
                                                                                [0][
                                                                                        "term"
                                                                                        ] :
                                                                                "بلا قسم";
                                                                        if (_0x9652x11[
                                                                                        "hasClass"
                                                                                        ]
                                                                                (
                                                                                        "scroll"
                                                                                )) {
                                                                                _0x9652x16
                                                                                        +=
                                                                                        "<a class=\'Scroll-Title\' href=\'" +
                                                                                        _0x9652x1a +
                                                                                        "\'>" +
                                                                                        _0x9652x1b +
                                                                                        "</a>"
                                                                        } else {
                                                                                if (
                                                                                        _0x9652x11[
                                                                                                "hasClass"
                                                                                                ]
                                                                                        (
                                                                                                "intro"
                                                                                        )
                                                                                ) {
                                                                                        _0x9652x16
                                                                                                +=
                                                                                                "<div class=\'Intro-Label\'><span class=\'Intro-Cate\'>" +
                                                                                                _0x9652x20 +
                                                                                                "</span><img data-src=\'" +
                                                                                                _0x9652x1f +
                                                                                                "\' class=\'Intro-Thumb\' alt=\'" +
                                                                                                _0x9652x1b +
                                                                                                "\'/><a href=\'" +
                                                                                                _0x9652x1a +
                                                                                                "\' class=\'Intro-Title\'>" +
                                                                                                _0x9652x1b +
                                                                                                "</a><div class=\'Intro-Details\'><a class=\'Intro-Date\' href=\'" +
                                                                                                _0x9652x1d +
                                                                                                "\'>" +
                                                                                                _0x9652x1c +
                                                                                                "</a>" +
                                                                                                _0x9652x1e +
                                                                                                "</div><a href=\'" +
                                                                                                _0x9652x1a +
                                                                                                "\' class=\'ReadMore\'>شاهد الموضوع</a></div>"
                                                                                }
                                                                        }
                                                                };
                                                                _0x9652x11["html"](
                                                                        _0x9652x16
                                                                )
                                                        }
                                                        , complete: function () {
                                                                $(".intro img")["each"]
                                                                        (function () {
                                                                                var
                                                                                        _0x9652x21 =
                                                                                        $(
                                                                                                this
                                                                                        )[
                                                                                                "attr"
                                                                                                ]
                                                                                        (
                                                                                                "data-src"
                                                                                        );
                                                                                $
                                                                                        (
                                                                                                this
                                                                                        )[
                                                                                                "removeAttr"
                                                                                                ]
                                                                                        (
                                                                                                "data-src"
                                                                                        )[
                                                                                                "attr"
                                                                                                ]
                                                                                        (
                                                                                                "src"
                                                                                                , _0x9652x21
                                                                                        )
                                                                        });
                                                                $(".r-loading")[
                                                                        "fadeOut"
                                                                        ](400
                                                                        , function () {
                                                                                $
                                                                                        (
                                                                                                this
                                                                                        )[
                                                                                                "remove"
                                                                                                ]
                                                                                        ()
                                                                        })
                                                        }
                                                })
                                        }
                                })
                        }
                });
                function _0x9652x14(_0x9652x35) {
                        if ($(".intro-ch")["text"]()["match"]("random")) {
                                _0x9652x35["children"]()["sort"](function () {
                                        return Math["round"](Math["random"]()) - 0.5
                                })["each"](function () {
                                        $(this)["appendTo"](_0x9652x35)
                                })
                        } else {
                                _0x9652x35["fadeIn"](0)
                        }
                }
                if (int_items == "1" || int_items == "3" || int_items == "4") {
                        $(".intro")["attr"]("data-slides", int_items)
                } else {
                        $(".intro")["attr"]("data-slides", "3");
                        int_items = "3"
                };
                $(document)["one"]("ajaxStop", function () {
                        if (!$(".intro-ch")["text"]()["match"]("no") && $(".intro-ch")["text"]()["length"] > 0) {
                                $(".intro")["owlCarousel"]({
                                        autoPlay: int_autoplay
                                        , itemsDesktop: !int_items["match"]("1") ? [5000, int_items] : false
                                        , singleItem: int_items["match"]("1") ? true : false
                                        , responsive: true
                                        , navigation: true
                                        , pagination: false
                                        , stopOnHover: true
                                        , navigationText: ["◁", "▷"]
                                        , beforeInit: function (_0x9652x36) {
                                                _0x9652x14(_0x9652x36)
                                        }
                                })
                        };
                        if (!$(".ticker-ch")["text"]()["match"]("no") && $(".ticker-ch")["text"]()["length"] > 0) {
                                $(".marquee")["marquee"]({
                                        pauseOnHover: true
                                        , duration: 15000
                                        , duplicated: true
                                        , direction: "right"
                                })["delay"](1000)["fadeTo"](400, 1)
                        }
                });
                $(window)["one"]("scroll", _0x9652x37);

                function _0x9652x37() {
                        $("aside .HTML, footer .HTML")["each"](function () {
                                var _0x9652x38 = $(this)["find"]("h2.title");
                                var _0x9652x39 = $(this)["find"](".widget-content");
                                if (_0x9652x38["text"]()["indexOf"]("[insta]") != -1) {
                                        var _0x9652x3a = _0x9652x38["text"]()["indexOf"]("[insta]");
                                        _0x9652x38["text"](_0x9652x38["text"]()["substr"](0, _0x9652x3a));
                                        $["ajax"]({
                                                type: "GET"
                                                , dataType: "jsonp"
                                                , cache: false
                                                , url: "https://api.instagram.com/v1/tags/" + _0x9652x39["text"]() +
                                                        "/media/recent?client_id=c1302f417cda4e09968eaec958fe0ae2"
                                                , success: function (_0x9652x3b) {
                                                        var _0x9652x3c = "<div class=\'insta-photos\'>";
                                                        for (var _0x9652x3d = 0; _0x9652x3d < imags_n; _0x9652x3d =
                                                                _0x9652x3d + 1) {
                                                                _0x9652x3c += "<a href=\'" + _0x9652x3b["data"]
                                                                        [_0x9652x3d]["link"] +
                                                                        "\' target=\'_blank\'>";
                                                                _0x9652x3c += "<img src=\'" + _0x9652x3b["data"]
                                                                        [_0x9652x3d]["images"]["thumbnail"][
                                                                                "url"] + "\'/></a>";
                                                                _0x9652x3c += "</a>"
                                                        };
                                                        _0x9652x3c += "</div>";
                                                        $(_0x9652x39)["html"](_0x9652x3c)
                                                }
                                        })
                                };
                                if (_0x9652x38["text"]()["indexOf"]("[flickr]") != -1) {
                                        var _0x9652x3e = _0x9652x38["text"]()["indexOf"]("[flickr]");
                                        _0x9652x38["text"](_0x9652x38["text"]()["substr"](0, _0x9652x3e));
                                        $["getJSON"](
                                                "https://api.flickr.com/services/rest/?method=flickr.people.getPublicPhotos&api_key=96e8c9145d76895a4ed3b770befb1945&user_id=" +
                                                _0x9652x39["text"]() + "&per_page=" + imags_n + "&format=json&nojsoncallback=1"
                                                , function (_0x9652x3f) {
                                                        var _0x9652x40 = "<div class=\"flickr-photos\">";
                                                        $["each"](_0x9652x3f["photos"]["photo"], function (_0x9652x17
                                                                , _0x9652x41) {
                                                                var _0x9652x42 = "https://farm" + _0x9652x41[
                                                                                "farm"] + ".staticflickr.com/" +
                                                                        _0x9652x41["server"] + "/" + _0x9652x41[
                                                                                "id"] + "_" + _0x9652x41[
                                                                                "secret"] + "_q.jpg";
                                                                var _0x9652x1b = _0x9652x41["title"];
                                                                var _0x9652x1a =
                                                                        "https://www.flickr.com/photos/" +
                                                                        _0x9652x39["text"]() + "/" + _0x9652x41[
                                                                                "id"] + "/";
                                                                _0x9652x40 += "<a href=\"" + _0x9652x1a +
                                                                        "\" title=\"" + _0x9652x1b +
                                                                        "\" target=\"_blank\"><img src=\"" +
                                                                        _0x9652x42 + "\"/></a>"
                                                        });
                                                        _0x9652x40 += "</div>";
                                                        $(_0x9652x39)["html"](_0x9652x40)
                                                })
                                }
                        })
                }
                if ($(".f-cols .widget")["length"] === 0) {
                        $(".f-cols")["addClass"]("no-vp")
                }
        })
// End News Ticker And Slider Show

// End Blogger arab-hasry.blogspot.com Body Scripts
