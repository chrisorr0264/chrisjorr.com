/*! Wowchemy v5.3.0 | https://wowchemy.com/ */
/*! Copyright 2016-present George Cushen (https://georgecushen.com/) */
/*! License: https://github.com/wowchemy/wowchemy-hugo-modules/blob/main/LICENSE.md */

;(()=>{
    (()=>{
        var a = Object.assign || function(d) {
            for (var a = 1, b, c; a < arguments.length; a++) {
                b = arguments[a];
                for (c in b)
                    Object.prototype.hasOwnProperty.call(b, c) && (d[c] = b[c])
            }
            return d
        }
        , e = function(a) {
            return a.tagName === "IMG"
        }, V = function(a) {
            return NodeList.prototype.isPrototypeOf(a)
        }, f = function(a) {
            return a && a.nodeType === 1
        }, B = function(a) {
            var b = a.currentSrc || a.src;
            return b.substr(-4).toLowerCase() === ".svg"
        }, A = function(a) {
            try {
                return Array.isArray(a) ? a.filter(e) : V(a) ? [].slice.call(a).filter(e) : f(a) ? [a].filter(e) : typeof a == "string" ? [].slice.call(document.querySelectorAll(a)).filter(e) : []
            } catch (a) {
                throw new TypeError("The provided selector is invalid.\nExpects a CSS selector, a Node element, a NodeList or an array.\nSee: https://github.com/francoischalifour/medium-zoom")
            }
        }, X = function(b) {
            var a = document.createElement("div");
            return a.classList.add("medium-zoom-overlay"),
            a.style.background = b,
            a
        }, U = function(c) {
            var b = c.getBoundingClientRect()
              , e = b.top
              , f = b.left
              , g = b.width
              , d = b.height
              , a = c.cloneNode()
              , h = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0
              , i = window.pageXOffset || document.documentElement.scrollLeft || document.body.scrollLeft || 0;
            return a.removeAttribute("id"),
            a.style.position = "absolute",
            a.style.top = e + h + "px",
            a.style.left = f + i + "px",
            a.style.width = g + "px",
            a.style.height = d + "px",
            a.style.transform = "",
            a
        }, c = function(c, e) {
            var b = a({
                bubbles: !1,
                cancelable: !1,
                detail: void 0
            }, e), d;
            return typeof window.CustomEvent == "function" ? new CustomEvent(c,b) : (d = document.createEvent("CustomEvent"),
            d.initCustomEvent(c, b.bubbles, b.cancelable, b.detail),
            d)
        }, x = function(j) {
            var F = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, m = window.Promise || function(b) {
                function a() {}
                b(a, a)
            }
            , E = function(b) {
                var a = b.target;
                if (a === k) {
                    h();
                    return
                }
                if (g.indexOf(a) === -1)
                    return;
                o({
                    target: a
                })
            }, D = function() {
                if (i || !b.original)
                    return;
                var a = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
                Math.abs(p - a) > d.scrollOffset && setTimeout(h, 150)
            }, C = function(b) {
                var a = b.key || b.keyCode;
                (a === "Escape" || a === "Esc" || a === 27) && h()
            }, z = function() {
                var b = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, h = b, i;
                return b.background && (k.style.background = b.background),
                b.container && b.container instanceof Object && (h.container = a({}, d.container, b.container)),
                b.template && (i = f(b.template) ? b.template : document.querySelector(b.template),
                h.template = i),
                d = a({}, d, h),
                g.forEach(function(a) {
                    a.dispatchEvent(c("medium-zoom:update", {
                        detail: {
                            zoom: e
                        }
                    }))
                }),
                e
            }, y = function() {
                var b = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
                return x(a({}, d, b))
            }, n = function() {
                for (var b = arguments.length, c = Array(b), a = 0, d; a < b; a++)
                    c[a] = arguments[a];
                return d = c.reduce(function(a, b) {
                    return [].concat(a, A(b))
                }, []),
                d.filter(function(a) {
                    return g.indexOf(a) === -1
                }).forEach(function(a) {
                    g.push(a),
                    a.classList.add("medium-zoom-image")
                }),
                l.forEach(function(a) {
                    var b = a.type
                      , c = a.listener
                      , e = a.options;
                    d.forEach(function(a) {
                        a.addEventListener(b, c, e)
                    })
                }),
                e
            }, w = function() {
                for (var f = arguments.length, d = Array(f), a = 0, i; a < f; a++)
                    d[a] = arguments[a];
                return b.zoomed && h(),
                i = d.length > 0 ? d.reduce(function(a, b) {
                    return [].concat(a, A(b))
                }, []) : g,
                i.forEach(function(a) {
                    a.classList.remove("medium-zoom-image"),
                    a.dispatchEvent(c("medium-zoom:detach", {
                        detail: {
                            zoom: e
                        }
                    }))
                }),
                g = g.filter(function(a) {
                    return i.indexOf(a) === -1
                }),
                e
            }, s = function(a, b) {
                var c = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
                return g.forEach(function(d) {
                    d.addEventListener("medium-zoom:" + a, b, c)
                }),
                l.push({
                    type: "medium-zoom:" + a,
                    listener: b,
                    options: c
                }),
                e
            }, r = function(a, b) {
                var c = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
                return g.forEach(function(d) {
                    d.removeEventListener("medium-zoom:" + a, b, c)
                }),
                l = l.filter(function(c) {
                    return !(c.type === "medium-zoom:" + a && c.listener.toString() === b.toString())
                }),
                e
            }, q = function() {
                var n = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}
                  , j = n.target
                  , l = function() {
                    var c = {
                        width: document.documentElement.clientWidth,
                        height: document.documentElement.clientHeight,
                        left: 0,
                        top: 0,
                        right: 0,
                        bottom: 0
                    }, e = void 0, g = void 0, y, i, v, u, r, q, h, p, o, j, s, t, m, l, w, x, k, z, A, n;
                    d.container && (d.container instanceof Object ? (c = a({}, c, d.container),
                    e = c.width - c.left - c.right - d.margin * 2,
                    g = c.height - c.top - c.bottom - d.margin * 2) : (y = f(d.container) ? d.container : document.querySelector(d.container),
                    i = y.getBoundingClientRect(),
                    v = i.width,
                    u = i.height,
                    r = i.left,
                    q = i.top,
                    c = a({}, c, {
                        width: v,
                        height: u,
                        left: r,
                        top: q
                    }))),
                    e = e || c.width - d.margin * 2,
                    g = g || c.height - d.margin * 2,
                    h = b.zoomedHd || b.original,
                    p = B(h) ? e : h.naturalWidth || e,
                    o = B(h) ? g : h.naturalHeight || g,
                    j = h.getBoundingClientRect(),
                    s = j.top,
                    t = j.left,
                    m = j.width,
                    l = j.height,
                    w = Math.min(p, e) / m,
                    x = Math.min(o, g) / l,
                    k = Math.min(w, x),
                    z = (-t + (e - m) / 2 + d.margin + c.left) / k,
                    A = (-s + (g - l) / 2 + d.margin + c.top) / k,
                    n = "scale(" + k + ") translate3d(" + z + "px, " + A + "px, 0)",
                    b.zoomed.style.transform = n,
                    b.zoomedHd && (b.zoomedHd.style.transform = n)
                };
                return new m(function(a) {
                    var n, o, q, m, r;
                    if (j && g.indexOf(j) === -1) {
                        a(e);
                        return
                    }
                    if (n = function d() {
                        i = !1,
                        b.zoomed.removeEventListener("transitionend", d),
                        b.original.dispatchEvent(c("medium-zoom:opened", {
                            detail: {
                                zoom: e
                            }
                        })),
                        a(e)
                    }
                    ,
                    b.zoomed) {
                        a(e);
                        return
                    }
                    if (j)
                        b.original = j;
                    else if (g.length > 0)
                        o = g,
                        b.original = o[0];
                    else {
                        a(e);
                        return
                    }
                    b.original.dispatchEvent(c("medium-zoom:open", {
                        detail: {
                            zoom: e
                        }
                    })),
                    p = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0,
                    i = !0,
                    b.zoomed = U(b.original),
                    document.body.appendChild(k),
                    d.template && (q = f(d.template) ? d.template : document.querySelector(d.template),
                    b.template = document.createElement("div"),
                    b.template.appendChild(q.content.cloneNode(!0)),
                    document.body.appendChild(b.template)),
                    document.body.appendChild(b.zoomed),
                    window.requestAnimationFrame(function() {
                        document.body.classList.add("medium-zoom--opened")
                    }),
                    b.original.classList.add("medium-zoom-image--hidden"),
                    b.zoomed.classList.add("medium-zoom-image--opened"),
                    b.zoomed.addEventListener("click", h),
                    b.zoomed.addEventListener("transitionend", n),
                    b.original.getAttribute("data-zoom-src") ? (b.zoomedHd = b.zoomed.cloneNode(),
                    b.zoomedHd.removeAttribute("srcset"),
                    b.zoomedHd.removeAttribute("sizes"),
                    b.zoomedHd.src = b.zoomed.getAttribute("data-zoom-src"),
                    b.zoomedHd.onerror = function() {
                        clearInterval(m),
                        console.warn("Unable to reach the zoom image target " + b.zoomedHd.src),
                        b.zoomedHd = null,
                        l()
                    }
                    ,
                    m = setInterval(function() {
                        b.zoomedHd.complete && (clearInterval(m),
                        b.zoomedHd.classList.add("medium-zoom-image--opened"),
                        b.zoomedHd.addEventListener("click", h),
                        document.body.appendChild(b.zoomedHd),
                        l())
                    }, 10)) : b.original.hasAttribute("srcset") ? (b.zoomedHd = b.zoomed.cloneNode(),
                    b.zoomedHd.removeAttribute("sizes"),
                    b.zoomedHd.removeAttribute("loading"),
                    r = b.zoomedHd.addEventListener("load", function() {
                        b.zoomedHd.removeEventListener("load", r),
                        b.zoomedHd.classList.add("medium-zoom-image--opened"),
                        b.zoomedHd.addEventListener("click", h),
                        document.body.appendChild(b.zoomedHd),
                        l()
                    })) : l()
                }
                )
            }, h = function() {
                return new m(function(a) {
                    if (i || !b.original) {
                        a(e);
                        return
                    }
                    var d = function d() {
                        b.original.classList.remove("medium-zoom-image--hidden"),
                        document.body.removeChild(b.zoomed),
                        b.zoomedHd && document.body.removeChild(b.zoomedHd),
                        document.body.removeChild(k),
                        b.zoomed.classList.remove("medium-zoom-image--opened"),
                        b.template && document.body.removeChild(b.template),
                        i = !1,
                        b.zoomed.removeEventListener("transitionend", d),
                        b.original.dispatchEvent(c("medium-zoom:closed", {
                            detail: {
                                zoom: e
                            }
                        })),
                        b.original = null,
                        b.zoomed = null,
                        b.zoomedHd = null,
                        b.template = null,
                        a(e)
                    };
                    i = !0,
                    document.body.classList.remove("medium-zoom--opened"),
                    b.zoomed.style.transform = "",
                    b.zoomedHd && (b.zoomedHd.style.transform = ""),
                    b.template && (b.template.style.transition = "opacity 150ms",
                    b.template.style.opacity = 0),
                    b.original.dispatchEvent(c("medium-zoom:close", {
                        detail: {
                            zoom: e
                        }
                    })),
                    b.zoomed.addEventListener("transitionend", d)
                }
                )
            }, o = function() {
                var a = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}
                  , c = a.target;
                return b.original ? h() : q({
                    target: c
                })
            }, t = function() {
                return d
            }, u = function() {
                return g
            }, v = function() {
                return b.original
            }, g = [], l = [], i = !1, p = 0, d = F, b = {
                original: null,
                zoomed: null,
                zoomedHd: null,
                template: null
            }, k, e;
            return Object.prototype.toString.call(j) === "[object Object]" ? d = j : (j || typeof j == "string") && n(j),
            d = a({
                margin: 0,
                background: "#fff",
                scrollOffset: 40,
                container: null,
                template: null
            }, d),
            k = X(d.background),
            document.addEventListener("click", E),
            document.addEventListener("keyup", C),
            document.addEventListener("scroll", D),
            window.addEventListener("resize", h),
            e = {
                open: q,
                close: h,
                toggle: o,
                update: z,
                clone: y,
                attach: n,
                detach: w,
                on: s,
                off: r,
                getOptions: t,
                getImages: u,
                getZoomedImage: v
            },
            e
        }, R, Q, P, t, E, d, h, p, g, b, w, z, C, W, v;
        function T(c, d) {
            var e, b, a;
            if (d === void 0 && (d = {}),
            e = d.insertAt,
            !c || typeof document == "undefined")
                return;
            b = document.head || document.getElementsByTagName("head")[0],
            a = document.createElement("style"),
            a.type = "text/css",
            e === "top" ? b.firstChild ? b.insertBefore(a, b.firstChild) : b.appendChild(a) : b.appendChild(a),
            a.styleSheet ? a.styleSheet.cssText = c : a.appendChild(document.createTextNode(c))
        }
        R = ".medium-zoom-overlay{position:fixed;top:0;right:0;bottom:0;left:0;opacity:0;transition:opacity .3s;will-change:opacity}.medium-zoom--opened .medium-zoom-overlay{cursor:pointer;cursor:zoom-out;opacity:1}.medium-zoom-image{cursor:pointer;cursor:zoom-in;transition:transform .3s cubic-bezier(.2,0,.2,1)!important}.medium-zoom-image--hidden{visibility:hidden}.medium-zoom-image--opened{position:relative;cursor:pointer;cursor:zoom-out;will-change:transform}",
        T(R),
        Q = x,
        P = !1,
        t = "production",
        E = !1;
        function q(b=!1) {
            let a = [];
            [].push.apply(a, document.getElementsByClassName("language-mermaid"));
            for (let d = 0; d < a.length; d++) {
                let e = a[d]
                  , c = document.createElement("div");
                c.innerHTML = e.innerHTML,
                c.classList.add("mermaid"),
                b && window.mermaid.mermaidAPI.render(`mermaid-${d}`, c.textContent, function(a) {
                    c.innerHTML = a
                }),
                e.parentNode.replaceWith(c)
            }
            console.debug(`Processed ${a.length} Mermaid code blocks`)
        }
        function r(a, d) {
            const b = a.getBoundingClientRect()
              , e = {
                height: a.clientHeight,
                width: a.clientWidth
            }
              , c = d.getBoundingClientRect()
              , f = c.top >= b.top && c.bottom <= b.top + e.height;
            f || (a.scrollTop = c.top + a.scrollTop - b.top)
        }
        function s(a, d=600) {
            a.style.display = "",
            a.style.opacity = "0";
            let c = +new Date
              , b = function() {
                a.style.opacity = (+a.style.opacity + (new Date - c) / d).toString(),
                c = +new Date,
                +a.style.opacity < 1 && (window.requestAnimationFrame && requestAnimationFrame(b) || setTimeout(b, 16))
            };
            b()
        }
        d = document.body;
        function u() {
            return parseInt(localStorage.getItem("wcTheme") || 2)
        }
        function l() {
            return Boolean(window.wc.darkLightEnabled)
        }
        function I() {
            if (!l())
                return console.debug("User theming disabled."),
                {
                    isDarkTheme: window.wc.isSiteThemeDark,
                    themeMode: window.wc.isSiteThemeDark ? 1 : 0
                };
            console.debug("User theming enabled.");
            let a, b = u();
            switch (console.debug(`User's theme variation: ${b}`),
            b) {
            case 0:
                a = !1;
                break;
            case 1:
                a = !0;
                break;
            default:
                window.matchMedia("(prefers-color-scheme: dark)").matches ? a = !0 : window.matchMedia("(prefers-color-scheme: light)").matches ? a = !1 : a = window.wc.isSiteThemeDark;
                break
            }
            return a && !d.classList.contains("dark") ? (console.debug("Applying Wowchemy dark theme"),
            document.body.classList.add("dark")) : !a && d.classList.contains("dark") && (console.debug("Applying Wowchemy light theme"),
            document.body.classList.remove("dark")),
            {
                isDarkTheme: a,
                themeMode: b
            }
        }
        function j(b) {
            if (!l()) {
                console.debug("Cannot change theme - user theming disabled.");
                return
            }
            let a;
            switch (b) {
            case 0:
                localStorage.setItem("wcTheme", "0"),
                a = !1,
                console.debug("User changed theme variation to Light.");
                break;
            case 1:
                localStorage.setItem("wcTheme", "1"),
                a = !0,
                console.debug("User changed theme variation to Dark.");
                break;
            default:
                localStorage.setItem("wcTheme", "2"),
                window.matchMedia("(prefers-color-scheme: dark)").matches ? a = !0 : window.matchMedia("(prefers-color-scheme: light)").matches ? a = !1 : a = window.wc.isSiteThemeDark,
                console.debug("User changed theme variation to Auto.");
                break
            }
            o(a, b)
        }
        function F(d) {
            let a = document.querySelector(".js-set-theme-light")
              , b = document.querySelector(".js-set-theme-dark")
              , c = document.querySelector(".js-set-theme-auto");
            if (a === null)
                return;
            switch (d) {
            case 0:
                a.classList.add("dropdown-item-active"),
                b.classList.remove("dropdown-item-active"),
                c.classList.remove("dropdown-item-active");
                break;
            case 1:
                a.classList.remove("dropdown-item-active"),
                b.classList.add("dropdown-item-active"),
                c.classList.remove("dropdown-item-active");
                break;
            default:
                a.classList.remove("dropdown-item-active"),
                b.classList.remove("dropdown-item-active"),
                c.classList.add("dropdown-item-active");
                break
            }
        }
        function o(a, h=2, b=!1) {
            const c = document.querySelector("link[title=hl-light]")
              , e = document.querySelector("link[title=hl-dark]")
              , f = c !== null || e !== null
              , g = document.querySelector("script[title=mermaid]") !== null;
            F(h);
            const i = new CustomEvent("wcThemeChange",{
                detail: {
                    isDarkTheme: ()=>a
                }
            });
            if (document.dispatchEvent(i),
            !b)
                if (a === !1 && !d.classList.contains("dark") || a === !0 && d.classList.contains("dark"))
                    return;
            a === !1 ? (b || (Object.assign(document.body.style, {
                opacity: 0,
                visibility: "visible"
            }),
            s(document.body, 600)),
            d.classList.remove("dark"),
            f && (console.debug("Setting HLJS theme to light"),
            c && (c.disabled = !1),
            e && (e.disabled = !0)),
            g && (console.debug("Initializing Mermaid with light theme"),
            b ? (window.mermaid.initialize({
                startOnLoad: !1,
                theme: "default",
                securityLevel: "loose"
            }),
            q(!0)) : location.reload())) : a === !0 && (b || (Object.assign(document.body.style, {
                opacity: 0,
                visibility: "visible"
            }),
            s(document.body, 600)),
            d.classList.add("dark"),
            f && (console.debug("Setting HLJS theme to dark"),
            c && (c.disabled = !0),
            e && (e.disabled = !1)),
            g && (console.debug("Initializing Mermaid with dark theme"),
            b ? (window.mermaid.initialize({
                startOnLoad: !1,
                theme: "dark",
                securityLevel: "loose"
            }),
            q(!0)) : location.reload()))
        }
        function H(c) {
            if (!l())
                return;
            const d = c.matches;
            console.debug(`OS dark mode preference changed to ${d ? "\u{1F312} on" : "\u2600\uFE0F off"}.`);
            let b = u(), a;
            b === 2 && (window.matchMedia("(prefers-color-scheme: dark)").matches ? a = !0 : window.matchMedia("(prefers-color-scheme: light)").matches ? a = !1 : a = window.wc.isSiteThemeDark,
            o(a, b))
        }
        console.debug(`Environment: ${t}`);
        function i() {
            let a = document.getElementById("navbar-main")
              , b = a ? a.getBoundingClientRect().height : 0;
            return console.debug("Navbar height: " + b),
            b
        }
        function k(a, b=0) {
            if (a = typeof a == "undefined" || typeof a == "object" ? decodeURIComponent(window.location.hash) : a,
            $(a).length) {
                a = "#" + $.escapeSelector(a.substring(1));
                let c = Math.ceil($(a).offset().top - i());
                $("body").addClass("scrolling"),
                $("html, body").animate({
                    scrollTop: c
                }, b, function() {
                    $("body").removeClass("scrolling")
                })
            } else
                console.debug("Cannot scroll to target `#" + a + "`. ID not found!")
        }
        function D() {
            let a = $("body")
              , b = a.data("bs.scrollspy");
            b && (b._config.offset = i(),
            a.data("bs.scrollspy", b),
            a.scrollspy("refresh"))
        }
        function G() {
            if (window.history.replaceState) {
                let a = window.location.protocol + "//" + window.location.host + window.location.pathname + window.location.hash;
                window.history.replaceState({
                    path: a
                }, "", a)
            }
        }
        if (window.addEventListener("hashchange", k),
        $(".nav li.nav-item a.nav-link, .js-scroll").on("click", function(b) {
            let a = this.hash;
            if (this.pathname === window.location.pathname && a && $(a).length && $(".js-widget-page").length > 0) {
                b.preventDefault();
                let c = Math.ceil($(a).offset().top - i());
                $("html, body").animate({
                    scrollTop: c
                }, 800)
            }
        }),
        $(document).on("click", ".navbar-collapse.show", function(a) {
            let b = $(a.target).is("a") ? $(a.target) : $(a.target).parent();
            b.is("a") && b.attr("class") != "dropdown-toggle" && $(this).collapse("hide")
        }),
        h = {},
        b = $("#container-publications"),
        b.length) {
            b.isotope({
                itemSelector: ".isotope-item",
                percentPosition: !0,
                masonry: {
                    columnWidth: ".grid-sizer"
                },
                filter: function() {
                    let a = $(this)
                      , b = !p || a.text().match(p)
                      , c = !g || a.is(g);
                    return b && c
                }
            });
            let a = $(".filter-search").keyup(J(function() {
                p = new RegExp(a.val(),"gi"),
                b.isotope()
            }));
            $(".pub-filters").on("change", function() {
                let c = $(this)
                  , a = c[0].getAttribute("data-filter-group");
                if (h[a] = this.value,
                g = y(h),
                b.isotope(),
                a === "pubtype") {
                    let a = $(this).val();
                    a.substr(0, 9) === ".pubtype-" ? window.location.hash = a.substr(9) : window.location.hash = ""
                }
            })
        }
        function J(c, a) {
            let b;
            return a = a || 100,
            function() {
                clearTimeout(b);
                let d = arguments
                  , e = this;
                function f() {
                    c.apply(e, d)
                }
                b = setTimeout(f, a)
            }
        }
        function y(a) {
            let b = "";
            for (let c in a)
                b += a[c];
            return b
        }
        function M() {
            if (!b.length)
                return;
            let a = window.location.hash.replace("#", "")
              , c = "*";
            a != "" && !isNaN(a) && (c = ".pubtype-" + a);
            let d = "pubtype";
            h[d] = c,
            g = y(h),
            b.isotope(),
            $(".pubtype-select").val(c)
        }
        function N() {
            if ($("#map").length) {
                let e = $("#map-provider").val()
                  , a = $("#map-lat").val()
                  , b = $("#map-lng").val()
                  , c = parseInt($("#map-zoom").val())
                  , d = $("#map-dir").val()
                  , f = $("#map-api-key").val();
                if (e === "google") {
                    let e = new GMaps({
                        div: "#map",
                        lat: a,
                        lng: b,
                        zoom: c,
                        zoomControl: !0,
                        zoomControlOpt: {
                            style: "SMALL",
                            position: "TOP_LEFT"
                        },
                        streetViewControl: !1,
                        mapTypeControl: !1,
                        gestureHandling: "cooperative"
                    });
                    e.addMarker({
                        lat: a,
                        lng: b,
                        click: function() {
                            let c = "https://www.google.com/maps/place/" + encodeURIComponent(d) + "/@" + a + "," + b + "/";
                            window.open(c, "_blank")
                        },
                        title: d
                    })
                } else {
                    let g = new L.map("map").setView([a, b], c);
                    e === "mapbox" && f.length ? L.tileLayer("https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}", {
                        attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery \xA9 <a href="http://mapbox.com">Mapbox</a>',
                        tileSize: 512,
                        maxZoom: 18,
                        zoomOffset: -1,
                        id: "mapbox/streets-v11",
                        accessToken: f
                    }).addTo(g) : L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
                        maxZoom: 19,
                        attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
                    }).addTo(g);
                    let h = L.marker([a, b]).addTo(g)
                      , i = a + "," + b + "#map=" + c + "/" + a + "/" + b + "&layers=N";
                    h.bindPopup(d + '<p><a href="https://www.openstreetmap.org/directions?engine=osrm_car&route=' + i + '">Routing via OpenStreetMap</a></p>')
                }
            }
        }
        function O(a, b) {
            t === "production" && $.getJSON("https://api.github.com/repos/" + b + "/tags").done(function(b) {
                let c = b[0];
                $(a).append(" " + c.name)
            }).fail(function(d, a, b) {
                let c = a + ", " + b;
                console.log("Request Failed: " + c)
            })
        }
        function n() {
            $("body").hasClass("searching") ? ($("[id=search-query]").blur(),
            $("body").removeClass("searching compensate-for-scrollbar"),
            G(),
            $("#fancybox-style-noscroll").remove()) : (!$("#fancybox-style-noscroll").length && document.body.scrollHeight > window.innerHeight && ($("head").append('<style id="fancybox-style-noscroll">.compensate-for-scrollbar{margin-right:' + (window.innerWidth - document.documentElement.clientWidth) + "px;}</style>"),
            $("body").addClass("compensate-for-scrollbar")),
            $("body").addClass("searching"),
            $(".search-results").css({
                opacity: 0,
                visibility: "visible"
            }).animate({
                opacity: 1
            }, 200),
            $("#search-query").focus())
        }
        function m() {
            $(".carousel").each(function() {
                let a = $(".carousel-item", this);
                a.css("min-height", 0);
                let b = Math.max.apply(null, a.map(function() {
                    return $(this).outerHeight()
                }).get());
                a.css("min-height", b + "px")
            })
        }
        function K() {
            $("#TableOfContents").addClass("nav flex-column"),
            $("#TableOfContents li").addClass("nav-item"),
            $("#TableOfContents li a").addClass("nav-link"),
            $("input[type='checkbox'][disabled]").parents("ul").addClass("task-list")
        }
        function S(a) {
            return Array.prototype.filter.call(a.parentNode.children, function(b) {
                return b !== a
            })
        }
        $(document).ready(function() {
            K();
            let {isDarkTheme: c, themeMode: d} = I();
            o(c, d, !0),
            P && hljs.initHighlighting();
            let a = document.querySelector(".docs-links .active")
              , b = document.querySelector(".docs-links");
            a && b && r(b, a)
        }),
        $(window).on("load", function() {
            D();
            let c = document.querySelectorAll(".projects-container")
              , g = c.length;
            window.location.hash && g === 0 && k(decodeURIComponent(window.location.hash), 0);
            let d = document.querySelector(".docs-toc .nav-link.active")
              , e = document.querySelector(".docs-toc");
            d && e && r(e, d);
            let b = {};
            document.body.classList.contains("dark") ? b.background = "rgba(0,0,0,0.9)" : b.background = "rgba(255,255,255,0.9)",
            Q("[data-zoomable]", b);
            let f = 0;
            c.forEach(function(a, g) {
                console.debug(`Loading Isotope instance ${g}`);
                let e, b = a.closest("section"), c = "";
                b.querySelector(".isotope").classList.contains("js-layout-row") ? c = "fitRows" : c = "masonry";
                let f = b.querySelector(".default-project-filter")
                  , d = "*";
                f !== null && (d = f.textContent),
                console.debug(`Default Isotope filter: ${d}`),
                imagesLoaded(a, function() {
                    e = new Isotope(a,{
                        itemSelector: ".isotope-item",
                        layoutMode: c,
                        masonry: {
                            gutter: 20
                        },
                        filter: d
                    });
                    let f = b.querySelectorAll(".project-filters a");
                    f.forEach(a=>a.addEventListener("click", c=>{
                        c.preventDefault();
                        let b = a.getAttribute("data-filter");
                        console.debug(`Updating Isotope filter to ${b}`),
                        e.arrange({
                            filter: b
                        }),
                        a.classList.remove("active"),
                        a.classList.add("active");
                        let d = S(a);
                        d.forEach(a=>{
                            a.classList.remove("active"),
                            a.classList.remove("all")
                        }
                        )
                    }
                    )),
                    h()
                })
            });
            function h() {
                f++,
                f === g && (console.debug(`All Portfolio Isotope instances loaded.`),
                window.location.hash && k(decodeURIComponent(window.location.hash), 0))
            }
            $(".pub-filters-select") && M(),
            $(".js-cite-modal").click(function(c) {
                c.preventDefault();
                let a = $(this).attr("data-filename")
                  , b = $("#modal");
                b.find(".modal-body code").load(a, function(d, c, b) {
                    if (c == "error") {
                        let a = "Error: ";
                        $("#modal-error").html(a + b.status + " " + b.statusText)
                    } else
                        $(".js-download-cite").attr("href", a)
                }),
                b.modal("show")
            }),
            $(".js-copy-cite").click(function(b) {
                b.preventDefault();
                let a = document.createRange()
                  , c = document.querySelector("#modal .modal-body");
                a.selectNode(c),
                window.getSelection().addRange(a);
                try {
                    document.execCommand("copy")
                } catch (a) {
                    console.log("Error: citation copy failed.")
                }
                window.getSelection().removeRange(a)
            }),
            N();
            let a = ".js-github-release";
            $(a).length > 0 && O(a, $(a).data("repo")),
            document.addEventListener("keyup", a=>{
                if (a.code === "Escape") {
                    const a = document.body;
                    a.classList.contains("searching") && n()
                }
                if (a.key === "/") {
                    let b = document.hasFocus() && document.activeElement !== document.body && document.activeElement !== document.documentElement && document.activeElement || null
                      , c = b instanceof HTMLInputElement || b instanceof HTMLTextAreaElement;
                    E && !c && (a.preventDefault(),
                    n())
                }
            }
            ),
            E && $(".js-search").click(function(a) {
                a.preventDefault(),
                n()
            }),
            $('[data-toggle="tooltip"]').tooltip()
        }),
        w = document.querySelector(".js-set-theme-light"),
        z = document.querySelector(".js-set-theme-dark"),
        C = document.querySelector(".js-set-theme-auto"),
        w && z && C && (w.addEventListener("click", a=>{
            a.preventDefault(),
            j(0)
        }
        ),
        z.addEventListener("click", a=>{
            a.preventDefault(),
            j(1)
        }
        ),
        C.addEventListener("click", a=>{
            a.preventDefault(),
            j(2)
        }
        )),
        W = window.matchMedia("(prefers-color-scheme: dark)"),
        W.addEventListener("change", a=>{
            H(a)
        }
        ),
        window.addEventListener("load", m),
        window.addEventListener("resize", m),
        window.addEventListener("orientationchange", m),
        $("body").on("mouseenter mouseleave", ".dropdown", function(c) {
            var a = $(c.target).closest(".dropdown")
              , b = $(".dropdown-menu", a);
            a.addClass("show"),
            b.addClass("show"),
            setTimeout(function() {
                a[a.is(":hover") ? "addClass" : "removeClass"]("show"),
                b[a.is(":hover") ? "addClass" : "removeClass"]("show")
            }, 300)
        }),
        $(window).resize(function() {
            clearTimeout(v),
            v = setTimeout(D, 200)
        })
    }
    )()
}
)()
