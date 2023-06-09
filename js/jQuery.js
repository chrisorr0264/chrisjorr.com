/*! jQuery v3.6.0 | (c) OpenJS Foundation and other contributors | jquery.org/license */
!function(a, b) {
    "use strict";
    "object" == typeof module && "object" == typeof module.exports ? module.exports = a.document ? b(a, !0) : function(a) {
        if (!a.document)
            throw new Error("jQuery requires a window with a document");
        return b(a)
    }
    : b(a)
}("undefined" != typeof window ? window : this, function(d, bU) {
    "use strict";
    var q = [], bg = Object.getPrototypeOf, r = q.slice, be = q.flat ? function(a) {
        return q.flat.call(a)
    }
    : function(a) {
        return q.concat.apply([], a)
    }
    , ak = q.push, S = q.indexOf, R = {}, bc = R.toString, X = R.hasOwnProperty, bb = X.toString, bT = bb.call(Object), f = {}, c = function(a) {
        return "function" == typeof a && "number" != typeof a.nodeType && "function" != typeof a.item
    }, C = function(a) {
        return null != a && a === a.window
    }, e = d.document, bS = {
        type: !0,
        src: !0,
        nonce: !0,
        noModule: !0
    }, aW, a, v, y, aU, aT, aS, aO, bR, bP, bO, m, bN, ab, o, bM, bL, P, b, h, bJ, bE, ax, O, p, t, G, bq, _, at, u, U, J, ar, aq, j, bC, av, bx, bw, bv, ac, Z, aM, br, aQ, aR, bi, bp, aV, bm, aX, H, Q, B, bd, bk, bj, aA, I, bn, bo, bs, aG, aF, M, aC, ao, by, ay, bA, bB, bD, bX, bF, bG, bH, bI, aB, ag, aD, ap, bQ, L, a$, ba, am, bV, bW, bl;
    function aZ(g, a, d) {
        var b, f, c = (d = d || e).createElement("script");
        if (c.text = g,
        a)
            for (b in bS)
                (f = a[b] || a.getAttribute && a.getAttribute(b)) && c.setAttribute(b, f);
        d.head.appendChild(c).parentNode.removeChild(c)
    }
    function z(a) {
        return null == a ? a + "" : "object" == typeof a || "function" == typeof a ? R[bc.call(a)] || "object" : typeof a
    }
    aW = "3.6.0",
    a = function(b, c) {
        return new a.fn.init(b,c)
    }
    ;
    function ah(a) {
        var b = !!a && "length"in a && a.length
          , d = z(a);
        return !c(a) && !C(a) && ("array" === d || 0 === b || "number" == typeof b && 0 < b && b - 1 in a)
    }
    a.fn = a.prototype = {
        jquery: aW,
        constructor: a,
        length: 0,
        toArray: function() {
            return r.call(this)
        },
        get: function(a) {
            return null == a ? r.call(this) : a < 0 ? this[a + this.length] : this[a]
        },
        pushStack: function(c) {
            var b = a.merge(this.constructor(), c);
            return b.prevObject = this,
            b
        },
        each: function(b) {
            return a.each(this, b)
        },
        map: function(b) {
            return this.pushStack(a.map(this, function(a, c) {
                return b.call(a, c, a)
            }))
        },
        slice: function() {
            return this.pushStack(r.apply(this, arguments))
        },
        first: function() {
            return this.eq(0)
        },
        last: function() {
            return this.eq(-1)
        },
        even: function() {
            return this.pushStack(a.grep(this, function(b, a) {
                return (a + 1) % 2
            }))
        },
        odd: function() {
            return this.pushStack(a.grep(this, function(b, a) {
                return a % 2
            }))
        },
        eq: function(b) {
            var c = this.length
              , a = +b + (b < 0 ? c : 0);
            return this.pushStack(0 <= a && a < c ? [this[a]] : [])
        },
        end: function() {
            return this.prevObject || this.constructor()
        },
        push: ak,
        sort: q.sort,
        splice: q.splice
    },
    a.extend = a.fn.extend = function() {
        var i, f, g, d, h, k, b = arguments[0] || {}, e = 1, l = arguments.length, j = !1;
        for ("boolean" == typeof b && (j = b,
        b = arguments[e] || {},
        e++),
        "object" == typeof b || c(b) || (b = {}),
        e === l && (b = this,
        e--); e < l; e++)
            if (null != (i = arguments[e]))
                for (f in i)
                    d = i[f],
                    "__proto__" !== f && b !== d && (j && d && (a.isPlainObject(d) || (h = Array.isArray(d))) ? (g = b[f],
                    k = h && !Array.isArray(g) ? [] : h || a.isPlainObject(g) ? g : {},
                    h = !1,
                    b[f] = a.extend(j, k, d)) : void 0 !== d && (b[f] = d));
        return b
    }
    ,
    a.extend({
        expando: "jQuery" + (aW + Math.random()).replace(/\D/g, ""),
        isReady: !0,
        error: function(a) {
            throw new Error(a)
        },
        noop: function() {},
        isPlainObject: function(a) {
            var b, c;
            return !(!a || "[object Object]" !== bc.call(a)) && (!(b = bg(a)) || "function" == typeof (c = X.call(b, "constructor") && b.constructor) && bb.call(c) === bT)
        },
        isEmptyObject: function(a) {
            var b;
            for (b in a)
                return !1;
            return !0
        },
        globalEval: function(b, a, c) {
            aZ(b, {
                nonce: a && a.nonce
            }, c)
        },
        each: function(b, c) {
            var d, a = 0;
            if (ah(b)) {
                for (d = b.length; a < d; a++)
                    if (!1 === c.call(b[a], a, b[a]))
                        break
            } else
                for (a in b)
                    if (!1 === c.call(b[a], a, b[a]))
                        break;
            return b
        },
        makeArray: function(b, d) {
            var c = d || [];
            return null != b && (ah(Object(b)) ? a.merge(c, "string" == typeof b ? [b] : b) : ak.call(c, b)),
            c
        },
        inArray: function(b, a, c) {
            return null == a ? -1 : S.call(a, b, c)
        },
        merge: function(a, c) {
            for (var e = +c.length, b = 0, d = a.length; b < e; b++)
                a[d++] = c[b];
            return a.length = d,
            a
        },
        grep: function(b, d, e) {
            for (var c = [], a = 0, f = b.length, g = !e; a < f; a++)
                !d(b[a], a) !== g && c.push(b[a]);
            return c
        },
        map: function(b, e, f) {
            var g, c, a = 0, d = [];
            if (ah(b))
                for (g = b.length; a < g; a++)
                    null != (c = e(b[a], a, f)) && d.push(c);
            else
                for (a in b)
                    null != (c = e(b[a], a, f)) && d.push(c);
            return be(d)
        },
        guid: 1,
        support: f
    }),
    "function" == typeof Symbol && (a.fn[Symbol.iterator] = q[Symbol.iterator]),
    a.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function(b, a) {
        R["[object " + a + "]"] = a.toLowerCase()
    }),
    v = function(W) {
        var y, e, a, H, ab, A, U, Z, J, r, x, p, c, h, i, g, t, L, B, f = "sizzle" + 1 * new Date, l = W.document, o = 0, ak = 0, ae = F(), ag = F(), X = F(), C = F(), N = function(a, b) {
            return a === b && (x = !0),
            0
        }, al = {}.hasOwnProperty, s = [], am = s.pop, ax = s.push, q = s.push, ac = s.slice, u = function(b, c) {
            for (var a = 0, d = b.length; a < d; a++)
                if (b[a] === c)
                    return a;
            return -1
        }, R = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped", b = "[\\x20\\t\\r\\n\\f]", w = "(?:\\\\[\\da-fA-F]{1,6}" + b + "?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+", ah = "\\[" + b + "*(" + w + ")(?:" + b + "*([*^$|!~]?=)" + b + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + w + "))|)" + b + "*\\]", O = ":(" + w + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + ah + ")*)|.*)\\)|)", ay = new RegExp(b + "+","g"), G = new RegExp("^" + b + "+|((?:^|[^\\\\])(?:\\\\.)*)" + b + "+$","g"), at = new RegExp("^" + b + "*," + b + "*"), aa = new RegExp("^" + b + "*([>+~]|" + b + ")" + b + "*"), aw = new RegExp(b + "|>"), av = new RegExp(O), au = new RegExp("^" + w + "$"), I = {
            ID: new RegExp("^#(" + w + ")"),
            CLASS: new RegExp("^\\.(" + w + ")"),
            TAG: new RegExp("^(" + w + "|[*])"),
            ATTR: new RegExp("^" + ah),
            PSEUDO: new RegExp("^" + O),
            CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + b + "*(even|odd|(([+-]|)(\\d*)n|)" + b + "*(?:([+-]|)" + b + "*(\\d+)|))" + b + "*\\)|)","i"),
            bool: new RegExp("^(?:" + R + ")$","i"),
            needsContext: new RegExp("^" + b + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + b + "*((?:-\\d)?\\d*)" + b + "*\\)|)(?=[^-]|$)","i")
        }, ar = /HTML$/i, aj = /^(?:input|select|textarea|button)$/i, ap = /^h\d$/i, z = /^[^{]+\{\s*\[native \w/, aq = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, S = /[+~]/, n = new RegExp("\\\\[\\da-fA-F]{1,6}" + b + "?|\\\\([^\\r\\n\\f])","g"), m = function(b, c) {
            var a = "0x" + b.slice(1) - 65536;
            return c || (a < 0 ? String.fromCharCode(a + 65536) : String.fromCharCode(a >> 10 | 55296, 1023 & a | 56320))
        }, ad = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g, $ = function(a, b) {
            return b ? "\0" === a ? "\ufffd" : a.slice(0, -1) + "\\" + a.charCodeAt(a.length - 1).toString(16) + " " : "\\" + a
        }, af = function() {
            p()
        }, az = D(function(a) {
            return !0 === a.disabled && "fieldset" === a.nodeName.toLowerCase()
        }, {
            dir: "parentNode",
            next: "legend"
        });
        try {
            q.apply(s = ac.call(l.childNodes), l.childNodes),
            s[l.childNodes.length].nodeType
        } catch (a) {
            q = {
                apply: s.length ? function(a, b) {
                    ax.apply(a, ac.call(b))
                }
                : function(a, c) {
                    for (var b = a.length, d = 0; a[b++] = c[d++]; )
                        ;
                    a.length = b - 1
                }
            }
        }
        function d(d, a, b, t) {
            var j, r, k, h, n, o, s, m = a && a.ownerDocument, l = a ? a.nodeType : 9;
            if (b = b || [],
            "string" != typeof d || !d || 1 !== l && 9 !== l && 11 !== l)
                return b;
            if (!t && (p(a),
            a = a || c,
            i)) {
                if (11 !== l && (n = aq.exec(d)))
                    if (j = n[1]) {
                        if (9 === l) {
                            {
                                if (!(k = a.getElementById(j)))
                                    return b;
                                if (k.id === j)
                                    return b.push(k),
                                    b
                            }
                        } else if (m && (k = m.getElementById(j)) && B(a, k) && k.id === j)
                            return b.push(k),
                            b
                    } else {
                        if (n[2])
                            return q.apply(b, a.getElementsByTagName(d)),
                            b;
                        if ((j = n[3]) && e.getElementsByClassName && a.getElementsByClassName)
                            return q.apply(b, a.getElementsByClassName(j)),
                            b
                    }
                if (e.qsa && !C[d + " "] && (!g || !g.test(d)) && (1 !== l || "object" !== a.nodeName.toLowerCase())) {
                    if (s = d,
                    m = a,
                    1 === l && (aw.test(d) || aa.test(d))) {
                        for ((m = S.test(d) && M(a.parentNode) || a) === a && e.scope || ((h = a.getAttribute("id")) ? h = h.replace(ad, $) : a.setAttribute("id", h = f)),
                        r = (o = A(d)).length; r--; )
                            o[r] = (h ? "#" + h : ":scope") + " " + E(o[r]);
                        s = o.join(",")
                    }
                    try {
                        return q.apply(b, m.querySelectorAll(s)),
                        b
                    } catch (a) {
                        C(d, !0)
                    } finally {
                        h === f && a.removeAttribute("id")
                    }
                }
            }
            return Z(d.replace(G, "$1"), a, b, t)
        }
        function F() {
            var b = [];
            return function c(d, e) {
                return b.push(d + " ") > a.cacheLength && delete c[b.shift()],
                c[d + " "] = e
            }
        }
        function k(a) {
            return a[f] = !0,
            a
        }
        function j(b) {
            var a = c.createElement("fieldset");
            try {
                return !!b(a)
            } catch (a) {
                return !1
            } finally {
                a.parentNode && a.parentNode.removeChild(a),
                a = null
            }
        }
        function Q(d, e) {
            for (var b = d.split("|"), c = b.length; c--; )
                a.attrHandle[b[c]] = e
        }
        function _(b, c) {
            var a = c && b
              , d = a && 1 === b.nodeType && 1 === c.nodeType && b.sourceIndex - c.sourceIndex;
            if (d)
                return d;
            if (a)
                while (a = a.nextSibling)
                    if (a === c)
                        return -1;
            return b ? 1 : -1
        }
        function an(a) {
            return function(b) {
                return "input" === b.nodeName.toLowerCase() && b.type === a
            }
        }
        function ao(a) {
            return function(b) {
                var c = b.nodeName.toLowerCase();
                return ("input" === c || "button" === c) && b.type === a
            }
        }
        function ai(a) {
            return function(b) {
                return "form"in b ? b.parentNode && !1 === b.disabled ? "label"in b ? "label"in b.parentNode ? b.parentNode.disabled === a : b.disabled === a : b.isDisabled === a || b.isDisabled !== !a && az(b) === a : b.disabled === a : "label"in b && b.disabled === a
            }
        }
        function v(a) {
            return k(function(b) {
                return b = +b,
                k(function(c, g) {
                    for (var d, e = a([], c.length, b), f = e.length; f--; )
                        c[d = e[f]] && (c[d] = !(g[d] = c[d]))
                })
            })
        }
        function M(a) {
            return a && "undefined" != typeof a.getElementsByTagName && a
        }
        for (y in e = d.support = {},
        ab = d.isXML = function(a) {
            var c = a && a.namespaceURI
              , b = a && (a.ownerDocument || a).documentElement;
            return !ar.test(c || b && b.nodeName || "HTML")
        }
        ,
        p = d.setDocument = function(o) {
            var p, d, k = o ? o.ownerDocument || o : l;
            return k != c && 9 === k.nodeType && k.documentElement && (h = (c = k).documentElement,
            i = !ab(c),
            l != c && (d = c.defaultView) && d.top !== d && (d.addEventListener ? d.addEventListener("unload", af, !1) : d.attachEvent && d.attachEvent("onunload", af)),
            e.scope = j(function(a) {
                return h.appendChild(a).appendChild(c.createElement("div")),
                "undefined" != typeof a.querySelectorAll && !a.querySelectorAll(":scope fieldset div").length
            }),
            e.attributes = j(function(a) {
                return a.className = "i",
                !a.getAttribute("className")
            }),
            e.getElementsByTagName = j(function(a) {
                return a.appendChild(c.createComment("")),
                !a.getElementsByTagName("*").length
            }),
            e.getElementsByClassName = z.test(c.getElementsByClassName),
            e.getById = j(function(a) {
                return h.appendChild(a).id = f,
                !c.getElementsByName || !c.getElementsByName(f).length
            }),
            e.getById ? (a.filter.ID = function(a) {
                var b = a.replace(n, m);
                return function(a) {
                    return a.getAttribute("id") === b
                }
            }
            ,
            a.find.ID = function(c, a) {
                if ("undefined" != typeof a.getElementById && i) {
                    var b = a.getElementById(c);
                    return b ? [b] : []
                }
            }
            ) : (a.filter.ID = function(a) {
                var b = a.replace(n, m);
                return function(a) {
                    var c = "undefined" != typeof a.getAttributeNode && a.getAttributeNode("id");
                    return c && c.value === b
                }
            }
            ,
            a.find.ID = function(b, d) {
                if ("undefined" != typeof d.getElementById && i) {
                    var c, e, f, a = d.getElementById(b);
                    if (a) {
                        if ((c = a.getAttributeNode("id")) && c.value === b)
                            return [a];
                        for (f = d.getElementsByName(b),
                        e = 0; a = f[e++]; )
                            if ((c = a.getAttributeNode("id")) && c.value === b)
                                return [a]
                    }
                    return []
                }
            }
            ),
            a.find.TAG = e.getElementsByTagName ? function(b, a) {
                return "undefined" != typeof a.getElementsByTagName ? a.getElementsByTagName(b) : e.qsa ? a.querySelectorAll(b) : void 0
            }
            : function(b, e) {
                var a, c = [], f = 0, d = e.getElementsByTagName(b);
                if ("*" === b) {
                    while (a = d[f++])
                        1 === a.nodeType && c.push(a);
                    return c
                }
                return d
            }
            ,
            a.find.CLASS = e.getElementsByClassName && function(b, a) {
                if ("undefined" != typeof a.getElementsByClassName && i)
                    return a.getElementsByClassName(b)
            }
            ,
            t = [],
            g = [],
            (e.qsa = z.test(c.querySelectorAll)) && (j(function(a) {
                var d;
                h.appendChild(a).innerHTML = "<a id='" + f + "'></a><select id='" + f + "-\r\\' msallowcapture=''><option selected=''></option></select>",
                a.querySelectorAll("[msallowcapture^='']").length && g.push("[*^$]=" + b + "*(?:''|\"\")"),
                a.querySelectorAll("[selected]").length || g.push("\\[" + b + "*(?:value|" + R + ")"),
                a.querySelectorAll("[id~=" + f + "-]").length || g.push("~="),
                (d = c.createElement("input")).setAttribute("name", ""),
                a.appendChild(d),
                a.querySelectorAll("[name='']").length || g.push("\\[" + b + "*name" + b + "*=" + b + "*(?:''|\"\")"),
                a.querySelectorAll(":checked").length || g.push(":checked"),
                a.querySelectorAll("a#" + f + "+*").length || g.push(".#.+[+~]"),
                a.querySelectorAll("\\"),
                g.push("[\\r\\n\\f]")
            }),
            j(function(a) {
                a.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                var d = c.createElement("input");
                d.setAttribute("type", "hidden"),
                a.appendChild(d).setAttribute("name", "D"),
                a.querySelectorAll("[name=d]").length && g.push("name" + b + "*[*^$|!~]?="),
                2 !== a.querySelectorAll(":enabled").length && g.push(":enabled", ":disabled"),
                h.appendChild(a).disabled = !0,
                2 !== a.querySelectorAll(":disabled").length && g.push(":enabled", ":disabled"),
                a.querySelectorAll("*,:x"),
                g.push(",.*:")
            })),
            (e.matchesSelector = z.test(L = h.matches || h.webkitMatchesSelector || h.mozMatchesSelector || h.oMatchesSelector || h.msMatchesSelector)) && j(function(a) {
                e.disconnectedMatch = L.call(a, "*"),
                L.call(a, "[s!='']:x"),
                t.push("!=", O)
            }),
            g = g.length && new RegExp(g.join("|")),
            t = t.length && new RegExp(t.join("|")),
            p = z.test(h.compareDocumentPosition),
            B = p || z.test(h.contains) ? function(a, c) {
                var d = 9 === a.nodeType ? a.documentElement : a
                  , b = c && c.parentNode;
                return a === b || !(!b || 1 !== b.nodeType || !(d.contains ? d.contains(b) : a.compareDocumentPosition && 16 & a.compareDocumentPosition(b)))
            }
            : function(b, a) {
                if (a)
                    while (a = a.parentNode)
                        if (a === b)
                            return !0;
                return !1
            }
            ,
            N = p ? function(a, b) {
                if (a === b)
                    return x = !0,
                    0;
                var d = !a.compareDocumentPosition - !b.compareDocumentPosition;
                return d || (1 & (d = (a.ownerDocument || a) == (b.ownerDocument || b) ? a.compareDocumentPosition(b) : 1) || !e.sortDetached && b.compareDocumentPosition(a) === d ? a == c || a.ownerDocument == l && B(l, a) ? -1 : b == c || b.ownerDocument == l && B(l, b) ? 1 : r ? u(r, a) - u(r, b) : 0 : 4 & d ? -1 : 1)
            }
            : function(d, e) {
                if (d === e)
                    return x = !0,
                    0;
                var a, b = 0, h = d.parentNode, i = e.parentNode, f = [d], g = [e];
                if (!h || !i)
                    return d == c ? -1 : e == c ? 1 : h ? -1 : i ? 1 : r ? u(r, d) - u(r, e) : 0;
                if (h === i)
                    return _(d, e);
                for (a = d; a = a.parentNode; )
                    f.unshift(a);
                for (a = e; a = a.parentNode; )
                    g.unshift(a);
                while (f[b] === g[b])
                    b++;
                return b ? _(f[b], g[b]) : f[b] == l ? -1 : g[b] == l ? 1 : 0
            }
            ),
            c
        }
        ,
        d.matches = function(a, b) {
            return d(a, null, null, b)
        }
        ,
        d.matchesSelector = function(b, a) {
            if (p(b),
            e.matchesSelector && i && !C[a + " "] && (!t || !t.test(a)) && (!g || !g.test(a)))
                try {
                    var f = L.call(b, a);
                    if (f || e.disconnectedMatch || b.document && 11 !== b.document.nodeType)
                        return f
                } catch (b) {
                    C(a, !0)
                }
            return 0 < d(a, c, null, [b]).length
        }
        ,
        d.contains = function(a, b) {
            return (a.ownerDocument || a) != c && p(a),
            B(a, b)
        }
        ,
        d.attr = function(b, d) {
            (b.ownerDocument || b) != c && p(b);
            var g = a.attrHandle[d.toLowerCase()]
              , f = g && al.call(a.attrHandle, d.toLowerCase()) ? g(b, d, !i) : void 0;
            return void 0 !== f ? f : e.attributes || !i ? b.getAttribute(d) : (f = b.getAttributeNode(d)) && f.specified ? f.value : null
        }
        ,
        d.escape = function(a) {
            return (a + "").replace(ad, $)
        }
        ,
        d.error = function(a) {
            throw new Error("Syntax error, unrecognized expression: " + a)
        }
        ,
        d.uniqueSort = function(a) {
            var d, f = [], b = 0, c = 0;
            if (x = !e.detectDuplicates,
            r = !e.sortStable && a.slice(0),
            a.sort(N),
            x) {
                while (d = a[c++])
                    d === a[c] && (b = f.push(c));
                while (b--)
                    a.splice(f[b], 1)
            }
            return r = null,
            a
        }
        ,
        H = d.getText = function(a) {
            var d, c = "", e = 0, b = a.nodeType;
            if (b) {
                if (1 === b || 9 === b || 11 === b) {
                    if ("string" == typeof a.textContent)
                        return a.textContent;
                    for (a = a.firstChild; a; a = a.nextSibling)
                        c += H(a)
                } else if (3 === b || 4 === b)
                    return a.nodeValue
            } else
                while (d = a[e++])
                    c += H(d);
            return c
        }
        ,
        (a = d.selectors = {
            cacheLength: 50,
            createPseudo: k,
            match: I,
            attrHandle: {},
            find: {},
            relative: {
                ">": {
                    dir: "parentNode",
                    first: !0
                },
                " ": {
                    dir: "parentNode"
                },
                "+": {
                    dir: "previousSibling",
                    first: !0
                },
                "~": {
                    dir: "previousSibling"
                }
            },
            preFilter: {
                ATTR: function(a) {
                    return a[1] = a[1].replace(n, m),
                    a[3] = (a[3] || a[4] || a[5] || "").replace(n, m),
                    "~=" === a[2] && (a[3] = " " + a[3] + " "),
                    a.slice(0, 4)
                },
                CHILD: function(a) {
                    return a[1] = a[1].toLowerCase(),
                    "nth" === a[1].slice(0, 3) ? (a[3] || d.error(a[0]),
                    a[4] = +(a[4] ? a[5] + (a[6] || 1) : 2 * ("even" === a[3] || "odd" === a[3])),
                    a[5] = +(a[7] + a[8] || "odd" === a[3])) : a[3] && d.error(a[0]),
                    a
                },
                PSEUDO: function(a) {
                    var c, b = !a[6] && a[2];
                    return I.CHILD.test(a[0]) ? null : (a[3] ? a[2] = a[4] || a[5] || "" : b && av.test(b) && (c = A(b, !0)) && (c = b.indexOf(")", b.length - c) - b.length) && (a[0] = a[0].slice(0, c),
                    a[2] = b.slice(0, c)),
                    a.slice(0, 3))
                }
            },
            filter: {
                TAG: function(a) {
                    var b = a.replace(n, m).toLowerCase();
                    return "*" === a ? function() {
                        return !0
                    }
                    : function(a) {
                        return a.nodeName && a.nodeName.toLowerCase() === b
                    }
                },
                CLASS: function(a) {
                    var c = ae[a + " "];
                    return c || (c = new RegExp("(^|" + b + ")" + a + "(" + b + "|$)")) && ae(a, function(a) {
                        return c.test("string" == typeof a.className && a.className || "undefined" != typeof a.getAttribute && a.getAttribute("class") || "")
                    })
                },
                ATTR: function(c, b, a) {
                    return function(f) {
                        var e = d.attr(f, c);
                        return null == e ? "!=" === b : !b || (e += "",
                        "=" === b ? e === a : "!=" === b ? e !== a : "^=" === b ? a && 0 === e.indexOf(a) : "*=" === b ? a && -1 < e.indexOf(a) : "$=" === b ? a && e.slice(-a.length) === a : "~=" === b ? -1 < (" " + e.replace(ay, " ") + " ").indexOf(a) : "|=" === b && (e === a || e.slice(0, a.length + 1) === a + "-"))
                    }
                },
                CHILD: function(a, h, i, c, e) {
                    var g = "nth" !== a.slice(0, 3)
                      , d = "last" !== a.slice(-4)
                      , b = "of-type" === h;
                    return 1 === c && 0 === e ? function(a) {
                        return !!a.parentNode
                    }
                    : function(l, v, u) {
                        var m, r, k, h, j, p, q = g !== d ? "nextSibling" : "previousSibling", n = l.parentNode, t = b && l.nodeName.toLowerCase(), s = !u && !b, i = !1;
                        if (n) {
                            if (g) {
                                while (q) {
                                    for (h = l; h = h[q]; )
                                        if (b ? h.nodeName.toLowerCase() === t : 1 === h.nodeType)
                                            return !1;
                                    p = q = "only" === a && !p && "nextSibling"
                                }
                                return !0
                            }
                            if (p = [d ? n.firstChild : n.lastChild],
                            d && s) {
                                for (i = (j = (m = (r = (k = (h = n)[f] || (h[f] = {}))[h.uniqueID] || (k[h.uniqueID] = {}))[a] || [])[0] === o && m[1]) && m[2],
                                h = j && n.childNodes[j]; h = ++j && h && h[q] || (i = j = 0) || p.pop(); )
                                    if (1 === h.nodeType && ++i && h === l) {
                                        r[a] = [o, j, i];
                                        break
                                    }
                            } else if (s && (i = j = (m = (r = (k = (h = l)[f] || (h[f] = {}))[h.uniqueID] || (k[h.uniqueID] = {}))[a] || [])[0] === o && m[1]),
                            !1 === i)
                                while (h = ++j && h && h[q] || (i = j = 0) || p.pop())
                                    if ((b ? h.nodeName.toLowerCase() === t : 1 === h.nodeType) && ++i && (s && ((r = (k = h[f] || (h[f] = {}))[h.uniqueID] || (k[h.uniqueID] = {}))[a] = [o, i]),
                                    h === l))
                                        break;
                            return (i -= e) === c || i % c == 0 && 0 <= i / c
                        }
                    }
                },
                PSEUDO: function(b, e) {
                    var g, c = a.pseudos[b] || a.setFilters[b.toLowerCase()] || d.error("unsupported pseudo: " + b);
                    return c[f] ? c(e) : 1 < c.length ? (g = [b, b, "", e],
                    a.setFilters.hasOwnProperty(b.toLowerCase()) ? k(function(a, g) {
                        for (var f, b = c(a, e), d = b.length; d--; )
                            a[f = u(a, b[d])] = !(g[f] = b[d])
                    }) : function(a) {
                        return c(a, 0, g)
                    }
                    ) : c
                }
            },
            pseudos: {
                not: k(function(d) {
                    var a = []
                      , c = []
                      , b = U(d.replace(G, "$1"));
                    return b[f] ? k(function(c, e, h, f) {
                        for (var d, g = b(c, null, f, []), a = c.length; a--; )
                            (d = g[a]) && (c[a] = !(e[a] = d))
                    }) : function(d, f, e) {
                        return a[0] = d,
                        b(a, null, e, c),
                        a[0] = null,
                        !c.pop()
                    }
                }),
                has: k(function(a) {
                    return function(b) {
                        return 0 < d(a, b).length
                    }
                }),
                contains: k(function(a) {
                    return a = a.replace(n, m),
                    function(b) {
                        return -1 < (b.textContent || H(b)).indexOf(a)
                    }
                }),
                lang: k(function(a) {
                    return au.test(a || "") || d.error("unsupported lang: " + a),
                    a = a.replace(n, m).toLowerCase(),
                    function(b) {
                        var c;
                        do
                            if (c = i ? b.lang : b.getAttribute("xml:lang") || b.getAttribute("lang"))
                                return (c = c.toLowerCase()) === a || 0 === c.indexOf(a + "-");
                        while ((b = b.parentNode) && 1 === b.nodeType)return !1
                    }
                }),
                target: function(b) {
                    var a = W.location && W.location.hash;
                    return a && a.slice(1) === b.id
                },
                root: function(a) {
                    return a === h
                },
                focus: function(a) {
                    return a === c.activeElement && (!c.hasFocus || c.hasFocus()) && !!(a.type || a.href || ~a.tabIndex)
                },
                enabled: ai(!1),
                disabled: ai(!0),
                checked: function(a) {
                    var b = a.nodeName.toLowerCase();
                    return "input" === b && !!a.checked || "option" === b && !!a.selected
                },
                selected: function(a) {
                    return a.parentNode && a.parentNode.selectedIndex,
                    !0 === a.selected
                },
                empty: function(a) {
                    for (a = a.firstChild; a; a = a.nextSibling)
                        if (a.nodeType < 6)
                            return !1;
                    return !0
                },
                parent: function(b) {
                    return !a.pseudos.empty(b)
                },
                header: function(a) {
                    return ap.test(a.nodeName)
                },
                input: function(a) {
                    return aj.test(a.nodeName)
                },
                button: function(a) {
                    var b = a.nodeName.toLowerCase();
                    return "input" === b && "button" === a.type || "button" === b
                },
                text: function(a) {
                    var b;
                    return "input" === a.nodeName.toLowerCase() && "text" === a.type && (null == (b = a.getAttribute("type")) || "text" === b.toLowerCase())
                },
                first: v(function() {
                    return [0]
                }),
                last: v(function(b, a) {
                    return [a - 1]
                }),
                eq: v(function(c, b, a) {
                    return [a < 0 ? a + b : a]
                }),
                even: v(function(b, c) {
                    for (var a = 0; a < c; a += 2)
                        b.push(a);
                    return b
                }),
                odd: v(function(b, c) {
                    for (var a = 1; a < c; a += 2)
                        b.push(a);
                    return b
                }),
                lt: v(function(c, b, a) {
                    for (var d = a < 0 ? a + b : b < a ? b : a; 0 <= --d; )
                        c.push(d);
                    return c
                }),
                gt: v(function(b, c, a) {
                    for (var d = a < 0 ? a + c : a; ++d < c; )
                        b.push(d);
                    return b
                })
            }
        }).pseudos.nth = a.pseudos.eq,
        {
            radio: !0,
            checkbox: !0,
            file: !0,
            password: !0,
            image: !0
        })
            a.pseudos[y] = an(y);
        for (y in {
            submit: !0,
            reset: !0
        })
            a.pseudos[y] = ao(y);
        function Y() {}
        function E(b) {
            for (var a = 0, d = b.length, c = ""; a < d; a++)
                c += b[a].value;
            return c
        }
        function D(b, c, i) {
            var a = c.dir
              , d = c.next
              , e = d || a
              , g = i && "parentNode" === e
              , h = ak++;
            return c.first ? function(c, d, e) {
                while (c = c[a])
                    if (1 === c.nodeType || g)
                        return b(c, d, e);
                return !1
            }
            : function(c, l, j) {
                var i, k, m, n = [o, h];
                if (j) {
                    while (c = c[a])
                        if ((1 === c.nodeType || g) && b(c, l, j))
                            return !0
                } else
                    while (c = c[a])
                        if (1 === c.nodeType || g)
                            if (k = (m = c[f] || (c[f] = {}))[c.uniqueID] || (m[c.uniqueID] = {}),
                            d && d === c.nodeName.toLowerCase())
                                c = c[a] || c;
                            else {
                                if ((i = k[e]) && i[0] === o && i[1] === h)
                                    return n[2] = i[2];
                                if ((k[e] = n)[2] = b(c, l, j))
                                    return !0
                            }
                return !1
            }
        }
        function T(a) {
            return 1 < a.length ? function(c, d, e) {
                for (var b = a.length; b--; )
                    if (!a[b](c, d, e))
                        return !1;
                return !0
            }
            : a[0]
        }
        function K(c, f, d, g, h) {
            for (var b, e = [], a = 0, i = c.length, j = null != f; a < i; a++)
                (b = c[a]) && (d && !d(b, g, h) || (e.push(b),
                j && f.push(a)));
            return e
        }
        function P(c, g, e, b, a, h) {
            return b && !b[f] && (b = P(b)),
            a && !a[f] && (a = P(a, h)),
            k(function(m, l, k, n) {
                var i, h, j, r = [], p = [], s = l.length, t = m || function(e, b, c) {
                    for (var a = 0, f = b.length; a < f; a++)
                        d(e, b[a], c);
                    return c
                }(g || "*", k.nodeType ? [k] : k, []), o = !c || !m && g ? t : K(t, r, c, k, n), f = e ? a || (m ? c : s || b) ? [] : l : o;
                if (e && e(o, f, k, n),
                b)
                    for (i = K(f, p),
                    b(i, [], k, n),
                    h = i.length; h--; )
                        (j = i[h]) && (f[p[h]] = !(o[p[h]] = j));
                if (m) {
                    if (a || c) {
                        if (a) {
                            for (i = [],
                            h = f.length; h--; )
                                (j = f[h]) && i.push(o[h] = j);
                            a(null, f = [], i, n)
                        }
                        for (h = f.length; h--; )
                            (j = f[h]) && -1 < (i = a ? u(m, j) : r[h]) && (m[i] = !(l[i] = j))
                    }
                } else
                    f = K(f === l ? f.splice(s, f.length) : f),
                    a ? a(null, l, f, n) : q.apply(l, f)
            })
        }
        function V(b) {
            for (var h, e, d, i = b.length, j = a.relative[b[0].type], k = j || a.relative[" "], c = j ? 1 : 0, l = D(function(a) {
                return a === h
            }, k, !0), m = D(function(a) {
                return -1 < u(h, a)
            }, k, !0), g = [function(c, a, b) {
                var d = !j && (b || a !== J) || ((h = a).nodeType ? l(c, a, b) : m(c, a, b));
                return h = null,
                d
            }
            ]; c < i; c++)
                if (e = a.relative[b[c].type])
                    g = [D(T(g), e)];
                else {
                    if ((e = a.filter[b[c].type].apply(null, b[c].matches))[f]) {
                        for (d = ++c; d < i; d++)
                            if (a.relative[b[d].type])
                                break;
                        return P(1 < c && T(g), 1 < c && E(b.slice(0, c - 1).concat({
                            value: " " === b[c - 2].type ? "*" : ""
                        })).replace(G, "$1"), e, c < d && V(b.slice(c, d)), d < i && V(b = b.slice(d)), d < i && E(b))
                    }
                    g.push(e)
                }
            return T(g)
        }
        return Y.prototype = a.filters = a.pseudos,
        a.setFilters = new Y,
        A = d.tokenize = function(g, k) {
            var e, c, i, f, b, h, j, l = ag[g + " "];
            if (l)
                return k ? 0 : l.slice(0);
            for (b = g,
            h = [],
            j = a.preFilter; b; ) {
                for (f in e && !(c = at.exec(b)) || (c && (b = b.slice(c[0].length) || b),
                h.push(i = [])),
                e = !1,
                (c = aa.exec(b)) && (e = c.shift(),
                i.push({
                    value: e,
                    type: c[0].replace(G, " ")
                }),
                b = b.slice(e.length)),
                a.filter)
                    !(c = I[f].exec(b)) || j[f] && !(c = j[f](c)) || (e = c.shift(),
                    i.push({
                        value: e,
                        type: f,
                        matches: c
                    }),
                    b = b.slice(e.length));
                if (!e)
                    break
            }
            return k ? b.length : b ? d.error(g) : ag(g, h).slice(0)
        }
        ,
        U = d.compile = function(e, g) {
            var j, l, r, h, m, n, s = [], t = [], b = X[e + " "];
            if (!b) {
                for (g || (g = A(e)),
                j = g.length; j--; )
                    (b = V(g[j]))[f] ? s.push(b) : t.push(b);
                (b = X(e, (l = t,
                h = 0 < (r = s).length,
                m = 0 < l.length,
                n = function(s, k, w, u, g) {
                    var e, t, j, n = 0, b = "0", v = s && [], f = [], x = J, y = s || m && a.find.TAG("*", g), z = o += null == x ? 1 : Math.random() || .1, A = y.length;
                    for (g && (J = k == c || k || g); b !== A && null != (e = y[b]); b++) {
                        if (m && e) {
                            for (t = 0,
                            k || e.ownerDocument == c || (p(e),
                            w = !i); j = l[t++]; )
                                if (j(e, k || c, w)) {
                                    u.push(e);
                                    break
                                }
                            g && (o = z)
                        }
                        h && ((e = !j && e) && n--,
                        s && v.push(e))
                    }
                    if (n += b,
                    h && b !== n) {
                        for (t = 0; j = r[t++]; )
                            j(v, f, k, w);
                        if (s) {
                            if (0 < n)
                                while (b--)
                                    v[b] || f[b] || (f[b] = am.call(u));
                            f = K(f)
                        }
                        q.apply(u, f),
                        g && !s && 0 < f.length && 1 < n + r.length && d.uniqueSort(u)
                    }
                    return g && (o = z,
                    J = x),
                    v
                }
                ,
                h ? k(n) : n))).selector = e
            }
            return b
        }
        ,
        Z = d.select = function(c, b, e, f) {
            var h, d, g, l, o, k = "function" == typeof c && c, j = !f && A(c = k.selector || c);
            if (e = e || [],
            1 === j.length) {
                if (2 < (d = j[0] = j[0].slice(0)).length && "ID" === (g = d[0]).type && 9 === b.nodeType && i && a.relative[d[1].type]) {
                    if (!(b = (a.find.ID(g.matches[0].replace(n, m), b) || [])[0]))
                        return e;
                    k && (b = b.parentNode),
                    c = c.slice(d.shift().value.length)
                }
                for (h = I.needsContext.test(c) ? 0 : d.length; h--; ) {
                    if (g = d[h],
                    a.relative[l = g.type])
                        break;
                    if ((o = a.find[l]) && (f = o(g.matches[0].replace(n, m), S.test(d[0].type) && M(b.parentNode) || b))) {
                        if (d.splice(h, 1),
                        !(c = f.length && E(d)))
                            return q.apply(e, f),
                            e;
                        break
                    }
                }
            }
            return (k || U(c, j))(f, b, !i, e, !b || S.test(c) && M(b.parentNode) || b),
            e
        }
        ,
        e.sortStable = f.split("").sort(N).join("") === f,
        e.detectDuplicates = !!x,
        p(),
        e.sortDetached = j(function(a) {
            return 1 & a.compareDocumentPosition(c.createElement("fieldset"))
        }),
        j(function(a) {
            return a.innerHTML = "<a href='#'></a>",
            "#" === a.firstChild.getAttribute("href")
        }) || Q("type|href|height|width", function(b, a, c) {
            if (!c)
                return b.getAttribute(a, "type" === a.toLowerCase() ? 1 : 2)
        }),
        e.attributes && j(function(a) {
            return a.innerHTML = "<input/>",
            a.firstChild.setAttribute("value", ""),
            "" === a.firstChild.getAttribute("value")
        }) || Q("value", function(a, c, b) {
            if (!b && "input" === a.nodeName.toLowerCase())
                return a.defaultValue
        }),
        j(function(a) {
            return null == a.getAttribute("disabled")
        }) || Q(R, function(c, a, d) {
            var b;
            if (!d)
                return !0 === c[a] ? a.toLowerCase() : (b = c.getAttributeNode(a)) && b.specified ? b.value : null
        }),
        d
    }(d),
    a.find = v,
    a.expr = v.selectors,
    a.expr[":"] = a.expr.pseudos,
    a.uniqueSort = a.unique = v.uniqueSort,
    a.text = v.getText,
    a.isXMLDoc = v.isXML,
    a.contains = v.contains,
    a.escapeSelector = v.escape,
    y = function(b, e, c) {
        for (var d = [], f = void 0 !== c; (b = b[e]) && 9 !== b.nodeType; )
            if (1 === b.nodeType) {
                if (f && a(b).is(c))
                    break;
                d.push(b)
            }
        return d
    }
    ,
    aU = function(a, c) {
        for (var b = []; a; a = a.nextSibling)
            1 === a.nodeType && a !== c && b.push(a);
        return b
    }
    ,
    aT = a.expr.match.needsContext;
    function i(a, b) {
        return a.nodeName && a.nodeName.toLowerCase() === b.toLowerCase()
    }
    aS = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;
    function $(d, b, e) {
        return c(b) ? a.grep(d, function(a, c) {
            return !!b.call(a, c, a) !== e
        }) : b.nodeType ? a.grep(d, function(a) {
            return a === b !== e
        }) : "string" != typeof b ? a.grep(d, function(a) {
            return -1 < S.call(b, a) !== e
        }) : a.filter(b, d, e)
    }
    a.filter = function(b, c, e) {
        var d = c[0];
        return e && (b = ":not(" + b + ")"),
        1 === c.length && 1 === d.nodeType ? a.find.matchesSelector(d, b) ? [d] : [] : a.find.matches(b, a.grep(c, function(a) {
            return 1 === a.nodeType
        }))
    }
    ,
    a.fn.extend({
        find: function(d) {
            var b, c, e = this.length, f = this;
            if ("string" != typeof d)
                return this.pushStack(a(d).filter(function() {
                    for (b = 0; b < e; b++)
                        if (a.contains(f[b], this))
                            return !0
                }));
            for (c = this.pushStack([]),
            b = 0; b < e; b++)
                a.find(d, f[b], c);
            return 1 < e ? a.uniqueSort(c) : c
        },
        filter: function(a) {
            return this.pushStack($(this, a || [], !1))
        },
        not: function(a) {
            return this.pushStack($(this, a || [], !0))
        },
        is: function(b) {
            return !!$(this, "string" == typeof b && aT.test(b) ? a(b) : b || [], !1).length
        }
    }),
    bR = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/,
    (a.fn.init = function(d, b, g) {
        var f, h;
        if (!d)
            return this;
        if (g = g || aO,
        "string" == typeof d) {
            if (!(f = "<" === d[0] && ">" === d[d.length - 1] && 3 <= d.length ? [null, d, null] : bR.exec(d)) || !f[1] && b)
                return !b || b.jquery ? (b || g).find(d) : this.constructor(b).find(d);
            if (f[1]) {
                if (b = b instanceof a ? b[0] : b,
                a.merge(this, a.parseHTML(f[1], b && b.nodeType ? b.ownerDocument || b : e, !0)),
                aS.test(f[1]) && a.isPlainObject(b))
                    for (f in b)
                        c(this[f]) ? this[f](b[f]) : this.attr(f, b[f]);
                return this
            }
            return (h = e.getElementById(f[2])) && (this[0] = h,
            this.length = 1),
            this
        }
        return d.nodeType ? (this[0] = d,
        this.length = 1,
        this) : c(d) ? void 0 !== g.ready ? g.ready(d) : d(a) : a.makeArray(d, this)
    }
    ).prototype = a.fn,
    aO = a(e),
    bP = /^(?:parents|prev(?:Until|All))/,
    bO = {
        children: !0,
        contents: !0,
        next: !0,
        prev: !0
    };
    function aL(a, b) {
        while ((a = a[b]) && 1 !== a.nodeType)
            ;
        return a
    }
    a.fn.extend({
        has: function(c) {
            var b = a(c, this)
              , d = b.length;
            return this.filter(function() {
                for (var c = 0; c < d; c++)
                    if (a.contains(this, b[c]))
                        return !0
            })
        },
        closest: function(c, g) {
            var b, e = 0, h = this.length, d = [], f = "string" != typeof c && a(c);
            if (!aT.test(c))
                for (; e < h; e++)
                    for (b = this[e]; b && b !== g; b = b.parentNode)
                        if (b.nodeType < 11 && (f ? -1 < f.index(b) : 1 === b.nodeType && a.find.matchesSelector(b, c))) {
                            d.push(b);
                            break
                        }
            return this.pushStack(1 < d.length ? a.uniqueSort(d) : d)
        },
        index: function(b) {
            return b ? "string" == typeof b ? S.call(a(b), this[0]) : S.call(this, b.jquery ? b[0] : b) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
        },
        add: function(b, c) {
            return this.pushStack(a.uniqueSort(a.merge(this.get(), a(b, c))))
        },
        addBack: function(a) {
            return this.add(null == a ? this.prevObject : this.prevObject.filter(a))
        }
    }),
    a.each({
        parent: function(b) {
            var a = b.parentNode;
            return a && 11 !== a.nodeType ? a : null
        },
        parents: function(a) {
            return y(a, "parentNode")
        },
        parentsUntil: function(a, c, b) {
            return y(a, "parentNode", b)
        },
        next: function(a) {
            return aL(a, "nextSibling")
        },
        prev: function(a) {
            return aL(a, "previousSibling")
        },
        nextAll: function(a) {
            return y(a, "nextSibling")
        },
        prevAll: function(a) {
            return y(a, "previousSibling")
        },
        nextUntil: function(a, c, b) {
            return y(a, "nextSibling", b)
        },
        prevUntil: function(a, c, b) {
            return y(a, "previousSibling", b)
        },
        siblings: function(a) {
            return aU((a.parentNode || {}).firstChild, a)
        },
        children: function(a) {
            return aU(a.firstChild)
        },
        contents: function(b) {
            return null != b.contentDocument && bg(b.contentDocument) ? b.contentDocument : (i(b, "template") && (b = b.content || b),
            a.merge([], b.childNodes))
        }
    }, function(b, c) {
        a.fn[b] = function(f, e) {
            var d = a.map(this, c, f);
            return "Until" !== b.slice(-5) && (e = f),
            e && "string" == typeof e && (d = a.filter(e, d)),
            1 < this.length && (bO[b] || a.uniqueSort(d),
            bP.test(b) && d.reverse()),
            this.pushStack(d)
        }
    }),
    m = /[^\x20\t\r\n\f]+/g;
    function x(a) {
        return a
    }
    function Y(a) {
        throw a
    }
    function aK(a, d, e, f) {
        var b;
        try {
            a && c(b = a.promise) ? b.call(a).done(d).fail(e) : a && c(b = a.then) ? b.call(a, d, e) : d.apply(void 0, [a].slice(f))
        } catch (a) {
            e.apply(void 0, [a])
        }
    }
    a.Callbacks = function(e) {
        var l, k, i, d, o, g, b, h, f, n, j;
        return e = "string" == typeof e ? (l = e,
        k = {},
        a.each(l.match(m) || [], function(b, a) {
            k[a] = !0
        }),
        k) : a.extend({}, e),
        b = [],
        h = [],
        f = -1,
        n = function() {
            for (g = g || e.once,
            o = i = !0; h.length; f = -1)
                for (d = h.shift(); ++f < b.length; )
                    !1 === b[f].apply(d[0], d[1]) && e.stopOnFalse && (f = b.length,
                    d = !1);
            e.memory || (d = !1),
            i = !1,
            g && (b = d ? [] : "")
        }
        ,
        j = {
            add: function() {
                return b && (d && !i && (f = b.length - 1,
                h.push(d)),
                function d(f) {
                    a.each(f, function(f, a) {
                        c(a) ? e.unique && j.has(a) || b.push(a) : a && a.length && "string" !== z(a) && d(a)
                    })
                }(arguments),
                d && !i && n()),
                this
            },
            remove: function() {
                return a.each(arguments, function(e, d) {
                    for (var c; -1 < (c = a.inArray(d, b, c)); )
                        b.splice(c, 1),
                        c <= f && f--
                }),
                this
            },
            has: function(c) {
                return c ? -1 < a.inArray(c, b) : 0 < b.length
            },
            empty: function() {
                return b && (b = []),
                this
            },
            disable: function() {
                return g = h = [],
                b = d = "",
                this
            },
            disabled: function() {
                return !b
            },
            lock: function() {
                return g = h = [],
                d || i || (b = d = ""),
                this
            },
            locked: function() {
                return !!g
            },
            fireWith: function(b, a) {
                return g || (a = [b, (a = a || []).slice ? a.slice() : a],
                h.push(a),
                i || n()),
                this
            },
            fire: function() {
                return j.fireWith(this, arguments),
                this
            },
            fired: function() {
                return !!o
            }
        },
        j
    }
    ,
    a.extend({
        Deferred: function(g) {
            var e = [["notify", "progress", a.Callbacks("memory"), a.Callbacks("memory"), 2], ["resolve", "done", a.Callbacks("once memory"), a.Callbacks("once memory"), 0, "resolved"], ["reject", "fail", a.Callbacks("once memory"), a.Callbacks("once memory"), 1, "rejected"]]
              , h = "pending"
              , f = {
                state: function() {
                    return h
                },
                always: function() {
                    return b.done(arguments).fail(arguments),
                    this
                },
                catch: function(a) {
                    return f.then(null, a)
                },
                pipe: function() {
                    var d = arguments;
                    return a.Deferred(function(f) {
                        a.each(e, function(g, a) {
                            var e = c(d[a[4]]) && d[a[4]];
                            b[a[1]](function() {
                                var b = e && e.apply(this, arguments);
                                b && c(b.promise) ? b.promise().progress(f.notify).done(f.resolve).fail(f.reject) : f[a[0] + "With"](this, e ? [b] : arguments)
                            })
                        }),
                        d = null
                    }).promise()
                },
                then: function(g, h, i) {
                    var b = 0;
                    function f(h, e, i, g) {
                        return function() {
                            var j = this
                              , k = arguments
                              , m = function() {
                                var a, d;
                                if (!(h < b)) {
                                    if ((a = i.apply(j, k)) === e.promise())
                                        throw new TypeError("Thenable self-resolution");
                                    d = a && ("object" == typeof a || "function" == typeof a) && a.then,
                                    c(d) ? g ? d.call(a, f(b, e, x, g), f(b, e, Y, g)) : (b++,
                                    d.call(a, f(b, e, x, g), f(b, e, Y, g), f(b, e, x, e.notifyWith))) : (i !== x && (j = void 0,
                                    k = [a]),
                                    (g || e.resolveWith)(j, k))
                                }
                            }
                              , l = g ? m : function() {
                                try {
                                    m()
                                } catch (c) {
                                    a.Deferred.exceptionHook && a.Deferred.exceptionHook(c, l.stackTrace),
                                    b <= h + 1 && (i !== Y && (j = void 0,
                                    k = [c]),
                                    e.rejectWith(j, k))
                                }
                            }
                            ;
                            h ? l() : (a.Deferred.getStackHook && (l.stackTrace = a.Deferred.getStackHook()),
                            d.setTimeout(l))
                        }
                    }
                    return a.Deferred(function(a) {
                        e[0][3].add(f(0, a, c(i) ? i : x, a.notifyWith)),
                        e[1][3].add(f(0, a, c(g) ? g : x)),
                        e[2][3].add(f(0, a, c(h) ? h : Y))
                    }).promise()
                },
                promise: function(b) {
                    return null != b ? a.extend(b, f) : f
                }
            }
              , b = {};
            return a.each(e, function(d, a) {
                var c = a[2]
                  , g = a[5];
                f[a[1]] = c.add,
                g && c.add(function() {
                    h = g
                }, e[3 - d][2].disable, e[3 - d][3].disable, e[0][2].lock, e[0][3].lock),
                c.add(a[3].fire),
                b[a[0]] = function() {
                    return b[a[0] + "With"](this === b ? void 0 : this, arguments),
                    this
                }
                ,
                b[a[0] + "With"] = c.fireWith
            }),
            f.promise(b),
            g && g.call(b, b),
            b
        },
        when: function(i) {
            var f = arguments.length
              , b = f
              , h = Array(b)
              , e = r.call(arguments)
              , d = a.Deferred()
              , g = function(a) {
                return function(b) {
                    h[a] = this,
                    e[a] = 1 < arguments.length ? r.call(arguments) : b,
                    --f || d.resolveWith(h, e)
                }
            };
            if (f <= 1 && (aK(i, d.done(g(b)).resolve, d.reject, !f),
            "pending" === d.state() || c(e[b] && e[b].then)))
                return d.then();
            while (b--)
                aK(e[b], g(b), d.reject);
            return d.promise()
        }
    }),
    bN = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/,
    a.Deferred.exceptionHook = function(a, b) {
        d.console && d.console.warn && a && bN.test(a.name) && d.console.warn("jQuery.Deferred exception: " + a.message, a.stack, b)
    }
    ,
    a.readyException = function(a) {
        d.setTimeout(function() {
            throw a
        })
    }
    ,
    ab = a.Deferred();
    function V() {
        e.removeEventListener("DOMContentLoaded", V),
        d.removeEventListener("load", V),
        a.ready()
    }
    a.fn.ready = function(b) {
        return ab.then(b).catch(function(b) {
            a.readyException(b)
        }),
        this
    }
    ,
    a.extend({
        isReady: !1,
        readyWait: 1,
        ready: function(b) {
            (!0 === b ? --a.readyWait : a.isReady) || (a.isReady = !0) !== b && 0 < --a.readyWait || ab.resolveWith(e, [a])
        }
    }),
    a.ready.then = ab.then,
    "complete" === e.readyState || "loading" !== e.readyState && !e.documentElement.doScroll ? d.setTimeout(a.ready) : (e.addEventListener("DOMContentLoaded", V),
    d.addEventListener("load", V)),
    o = function(d, b, f, g, j, k, h) {
        var e = 0
          , l = d.length
          , i = null == f;
        if ("object" === z(f))
            for (e in j = !0,
            f)
                o(d, b, e, f[e], !0, k, h);
        else if (void 0 !== g && (j = !0,
        c(g) || (h = !0),
        i && (h ? (b.call(d, g),
        b = null) : (i = b,
        b = function(b, d, c) {
            return i.call(a(b), c)
        }
        )),
        b))
            for (; e < l; e++)
                b(d[e], f, h ? g : g.call(d[e], e, b(d[e], f)));
        return j ? d : i ? b.call(d) : l ? b(d[0], f) : k
    }
    ,
    bM = /^-ms-/,
    bL = /-([a-z])/g;
    function bK(b, a) {
        return a.toUpperCase()
    }
    function n(a) {
        return a.replace(bM, "ms-").replace(bL, bK)
    }
    P = function(a) {
        return 1 === a.nodeType || 9 === a.nodeType || !+a.nodeType
    }
    ;
    function K() {
        this.expando = a.expando + K.uid++
    }
    K.uid = 1,
    K.prototype = {
        cache: function(a) {
            var b = a[this.expando];
            return b || (b = {},
            P(a) && (a.nodeType ? a[this.expando] = b : Object.defineProperty(a, this.expando, {
                value: b,
                configurable: !0
            }))),
            b
        },
        set: function(d, a, e) {
            var b, c = this.cache(d);
            if ("string" == typeof a)
                c[n(a)] = e;
            else
                for (b in a)
                    c[n(b)] = a[b];
            return c
        },
        get: function(a, b) {
            return void 0 === b ? this.cache(a) : a[this.expando] && a[this.expando][n(b)]
        },
        access: function(c, a, b) {
            return void 0 === a || a && "string" == typeof a && void 0 === b ? this.get(c, a) : (this.set(c, a, b),
            void 0 !== b ? b : a)
        },
        remove: function(c, b) {
            var e, d = c[this.expando];
            if (void 0 !== d) {
                if (void 0 !== b)
                    for (e = (b = Array.isArray(b) ? b.map(n) : (b = n(b))in d ? [b] : b.match(m) || []).length; e--; )
                        delete d[b[e]];
                (void 0 === b || a.isEmptyObject(d)) && (c.nodeType ? c[this.expando] = void 0 : delete c[this.expando])
            }
        },
        hasData: function(c) {
            var b = c[this.expando];
            return void 0 !== b && !a.isEmptyObject(b)
        }
    },
    b = new K,
    h = new K,
    bJ = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
    bE = /[A-Z]/g;
    function az(c, d, b) {
        var e, a;
        if (void 0 === b && 1 === c.nodeType)
            if (e = "data-" + d.replace(bE, "-$&").toLowerCase(),
            "string" == typeof (b = c.getAttribute(e))) {
                try {
                    b = "true" === (a = b) || "false" !== a && ("null" === a ? null : a === +a + "" ? +a : bJ.test(a) ? JSON.parse(a) : a)
                } catch (a) {}
                h.set(c, d, b)
            } else
                b = void 0;
        return b
    }
    a.extend({
        hasData: function(a) {
            return h.hasData(a) || b.hasData(a)
        },
        data: function(a, b, c) {
            return h.access(a, b, c)
        },
        removeData: function(a, b) {
            h.remove(a, b)
        },
        _data: function(a, c, d) {
            return b.access(a, c, d)
        },
        _removeData: function(a, c) {
            b.remove(a, c)
        }
    }),
    a.fn.extend({
        data: function(c, i) {
            var e, d, f, a = this[0], g = a && a.attributes;
            if (void 0 === c) {
                if (this.length && (f = h.get(a),
                1 === a.nodeType && !b.get(a, "hasDataAttrs"))) {
                    for (e = g.length; e--; )
                        g[e] && 0 === (d = g[e].name).indexOf("data-") && (d = n(d.slice(5)),
                        az(a, d, f[d]));
                    b.set(a, "hasDataAttrs", !0)
                }
                return f
            }
            return "object" == typeof c ? this.each(function() {
                h.set(this, c)
            }) : o(this, function(d) {
                var b;
                if (a && void 0 === d)
                    return void 0 !== (b = h.get(a, c)) ? b : void 0 !== (b = az(a, c)) ? b : void 0;
                this.each(function() {
                    h.set(this, c, d)
                })
            }, null, i, 1 < arguments.length, null, !0)
        },
        removeData: function(a) {
            return this.each(function() {
                h.remove(this, a)
            })
        }
    }),
    a.extend({
        queue: function(f, d, e) {
            var c;
            if (f)
                return d = (d || "fx") + "queue",
                c = b.get(f, d),
                e && (!c || Array.isArray(e) ? c = b.access(f, d, a.makeArray(e)) : c.push(e)),
                c || []
        },
        dequeue: function(c, b) {
            b = b || "fx";
            var d = a.queue(c, b)
              , g = d.length
              , e = d.shift()
              , f = a._queueHooks(c, b);
            "inprogress" === e && (e = d.shift(),
            g--),
            e && ("fx" === b && d.unshift("inprogress"),
            delete f.stop,
            e.call(c, function() {
                a.dequeue(c, b)
            }, f)),
            !g && f && f.empty.fire()
        },
        _queueHooks: function(c, e) {
            var d = e + "queueHooks";
            return b.get(c, d) || b.access(c, d, {
                empty: a.Callbacks("once memory").add(function() {
                    b.remove(c, [e + "queue", d])
                })
            })
        }
    }),
    a.fn.extend({
        queue: function(b, c) {
            var d = 2;
            return "string" != typeof b && (c = b,
            b = "fx",
            d--),
            arguments.length < d ? a.queue(this[0], b) : void 0 === c ? this : this.each(function() {
                var d = a.queue(this, b, c);
                a._queueHooks(this, b),
                "fx" === b && "inprogress" !== d[0] && a.dequeue(this, b)
            })
        },
        dequeue: function(b) {
            return this.each(function() {
                a.dequeue(this, b)
            })
        },
        clearQueue: function(a) {
            return this.queue(a || "fx", [])
        },
        promise: function(c, f) {
            var d, g = 1, h = a.Deferred(), e = this, i = this.length, j = function() {
                --g || h.resolveWith(e, [e])
            };
            for ("string" != typeof c && (f = c,
            c = void 0),
            c = c || "fx"; i--; )
                (d = b.get(e[i], c + "queueHooks")) && d.empty && (g++,
                d.empty.add(j));
            return j(),
            h.promise(f)
        }
    }),
    ax = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
    O = new RegExp("^(?:([+-])=|)(" + ax + ")([a-z%]*)$","i"),
    p = ["Top", "Right", "Bottom", "Left"],
    t = e.documentElement,
    G = function(b) {
        return a.contains(b.ownerDocument, b)
    }
    ,
    bq = {
        composed: !0
    },
    t.getRootNode && (G = function(b) {
        return a.contains(b.ownerDocument, b) || b.getRootNode(bq) === b.ownerDocument
    }
    ),
    _ = function(b, c) {
        return "none" === (b = c || b).style.display || "" === b.style.display && G(b) && "none" === a.css(b, "display")
    }
    ;
    function aw(g, e, c, f) {
        var j, i, k = 20, l = f ? function() {
            return f.cur()
        }
        : function() {
            return a.css(g, e, "")
        }
        , h = l(), d = c && c[3] || (a.cssNumber[e] ? "" : "px"), b = g.nodeType && (a.cssNumber[e] || "px" !== d && +h) && O.exec(a.css(g, e));
        if (b && b[3] !== d) {
            for (h /= 2,
            d = d || b[3],
            b = +h || 1; k--; )
                a.style(g, e, b + d),
                (1 - i) * (1 - (i = l() / h || .5)) <= 0 && (k = 0),
                b /= i;
            b *= 2,
            a.style(g, e, b + d),
            c = c || []
        }
        return c && (b = +b || +h || 0,
        j = c[1] ? b + (c[1] + 1) * c[2] : +c[2],
        f && (f.unit = d,
        f.start = b,
        f.end = j)),
        j
    }
    at = {};
    function A(h, n) {
        for (var k, d, l, g, j, i, e, f = [], c = 0, m = h.length; c < m; c++)
            (d = h[c]).style && (k = d.style.display,
            n ? ("none" === k && (f[c] = b.get(d, "display") || null,
            f[c] || (d.style.display = "")),
            "" === d.style.display && _(d) && (f[c] = (e = j = g = void 0,
            j = (l = d).ownerDocument,
            i = l.nodeName,
            (e = at[i]) || (g = j.body.appendChild(j.createElement(i)),
            e = a.css(g, "display"),
            g.parentNode.removeChild(g),
            "none" === e && (e = "block"),
            at[i] = e)))) : "none" !== k && (f[c] = "none",
            b.set(d, "display", k)));
        for (c = 0; c < m; c++)
            null != f[c] && (h[c].style.display = f[c]);
        return h
    }
    a.fn.extend({
        show: function() {
            return A(this, !0)
        },
        hide: function() {
            return A(this)
        },
        toggle: function(b) {
            return "boolean" == typeof b ? b ? this.show() : this.hide() : this.each(function() {
                _(this) ? a(this).show() : a(this).hide()
            })
        }
    }),
    J = /^(?:checkbox|radio)$/i,
    ar = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i,
    aq = /^$|^module$|\/(?:java|ecma)script/i,
    u = e.createDocumentFragment().appendChild(e.createElement("div")),
    (U = e.createElement("input")).setAttribute("type", "radio"),
    U.setAttribute("checked", "checked"),
    U.setAttribute("name", "t"),
    u.appendChild(U),
    f.checkClone = u.cloneNode(!0).cloneNode(!0).lastChild.checked,
    u.innerHTML = "<textarea>x</textarea>",
    f.noCloneChecked = !!u.cloneNode(!0).lastChild.defaultValue,
    u.innerHTML = "<option></option>",
    f.option = !!u.lastChild,
    j = {
        thead: [1, "<table>", "</table>"],
        col: [2, "<table><colgroup>", "</colgroup></table>"],
        tr: [2, "<table><tbody>", "</tbody></table>"],
        td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
        _default: [0, "", ""]
    };
    function g(b, c) {
        var d;
        return d = "undefined" != typeof b.getElementsByTagName ? b.getElementsByTagName(c || "*") : "undefined" != typeof b.querySelectorAll ? b.querySelectorAll(c || "*") : [],
        void 0 === c || c && i(b, c) ? a.merge([b], d) : d
    }
    function an(c, d) {
        for (var a = 0, e = c.length; a < e; a++)
            b.set(c[a], "globalEval", !d || b.get(d[a], "globalEval"))
    }
    j.tbody = j.tfoot = j.colgroup = j.caption = j.thead,
    j.th = j.td,
    f.option || (j.optgroup = j.option = [1, "<select multiple='multiple'>", "</select>"]),
    bC = /<|&#?\w+;/;
    function au(l, k, q, p, o) {
        for (var b, c, n, i, m, f, e = k.createDocumentFragment(), h = [], d = 0, r = l.length; d < r; d++)
            if ((b = l[d]) || 0 === b)
                if ("object" === z(b))
                    a.merge(h, b.nodeType ? [b] : b);
                else if (bC.test(b)) {
                    for (c = c || e.appendChild(k.createElement("div")),
                    n = (ar.exec(b) || ["", ""])[1].toLowerCase(),
                    i = j[n] || j._default,
                    c.innerHTML = i[1] + a.htmlPrefilter(b) + i[2],
                    f = i[0]; f--; )
                        c = c.lastChild;
                    a.merge(h, c.childNodes),
                    (c = e.firstChild).textContent = ""
                } else
                    h.push(k.createTextNode(b));
        for (e.textContent = "",
        d = 0; b = h[d++]; )
            if (p && -1 < a.inArray(b, p))
                o && o.push(b);
            else if (m = G(b),
            c = g(e.appendChild(b), "script"),
            m && an(c),
            q)
                for (f = 0; b = c[f++]; )
                    aq.test(b.type || "") && q.push(b);
        return e
    }
    av = /^([^.]*)(?:\.(.+)|)/;
    function F() {
        return !0
    }
    function D() {
        return !1
    }
    function bz(a, b) {
        return a === function() {
            try {
                return e.activeElement
            } catch (a) {}
        }() == ("focus" === b)
    }
    function af(e, f, c, d, b, i) {
        var g, h;
        if ("object" == typeof f) {
            for (h in "string" != typeof c && (d = d || c,
            c = void 0),
            f)
                af(e, h, c, d, f[h], i);
            return e
        }
        if (null == d && null == b ? (b = c,
        d = c = void 0) : null == b && ("string" == typeof c ? (b = d,
        d = void 0) : (b = d,
        d = c,
        c = void 0)),
        !1 === b)
            b = D;
        else if (!b)
            return e;
        return 1 === i && (g = b,
        (b = function(b) {
            return a().off(b),
            g.apply(this, arguments)
        }
        ).guid = g.guid || (g.guid = a.guid++)),
        e.each(function() {
            a.event.add(this, f, b, d, c)
        })
    }
    function T(d, c, e) {
        e ? (b.set(d, c, !1),
        a.event.add(d, c, {
            namespace: !1,
            handler: function(f) {
                var h, g, d = b.get(this, c);
                if (1 & f.isTrigger && this[c]) {
                    if (d.length)
                        (a.event.special[c] || {}).delegateType && f.stopPropagation();
                    else if (d = r.call(arguments),
                    b.set(this, c, d),
                    h = e(this, c),
                    this[c](),
                    d !== (g = b.get(this, c)) || h ? b.set(this, c, !1) : g = {},
                    d !== g)
                        return f.stopImmediatePropagation(),
                        f.preventDefault(),
                        g && g.value
                } else
                    d.length && (b.set(this, c, {
                        value: a.event.trigger(a.extend(d[0], a.Event.prototype), d.slice(1), this)
                    }),
                    f.stopImmediatePropagation())
            }
        })) : void 0 === b.get(d, c) && a.event.add(d, c, F)
    }
    a.event = {
        global: {},
        add: function(g, p, d, r, e) {
            var o, j, u, k, n, h, f, i, c, q, s, l = b.get(g);
            if (P(g))
                for (d.handler && (d = (o = d).handler,
                e = o.selector),
                e && a.find.matchesSelector(t, e),
                d.guid || (d.guid = a.guid++),
                (k = l.events) || (k = l.events = Object.create(null)),
                (j = l.handle) || (j = l.handle = function(b) {
                    return "undefined" != typeof a && a.event.triggered !== b.type ? a.event.dispatch.apply(g, arguments) : void 0
                }
                ),
                n = (p = (p || "").match(m) || [""]).length; n--; )
                    c = s = (u = av.exec(p[n]) || [])[1],
                    q = (u[2] || "").split(".").sort(),
                    c && (f = a.event.special[c] || {},
                    c = (e ? f.delegateType : f.bindType) || c,
                    f = a.event.special[c] || {},
                    h = a.extend({
                        type: c,
                        origType: s,
                        data: r,
                        handler: d,
                        guid: d.guid,
                        selector: e,
                        needsContext: e && a.expr.match.needsContext.test(e),
                        namespace: q.join(".")
                    }, o),
                    (i = k[c]) || ((i = k[c] = []).delegateCount = 0,
                    f.setup && !1 !== f.setup.call(g, r, q, j) || g.addEventListener && g.addEventListener(c, j)),
                    f.add && (f.add.call(g, h),
                    h.handler.guid || (h.handler.guid = d.guid)),
                    e ? i.splice(i.delegateCount++, 0, h) : i.push(h),
                    a.event.global[c] = !0)
        },
        remove: function(e, n, q, i, t) {
            var l, r, h, j, k, d, f, g, c, p, s, o = b.hasData(e) && b.get(e);
            if (o && (j = o.events)) {
                for (k = (n = (n || "").match(m) || [""]).length; k--; )
                    if (c = s = (h = av.exec(n[k]) || [])[1],
                    p = (h[2] || "").split(".").sort(),
                    c) {
                        for (f = a.event.special[c] || {},
                        g = j[c = (i ? f.delegateType : f.bindType) || c] || [],
                        h = h[2] && new RegExp("(^|\\.)" + p.join("\\.(?:.*\\.|)") + "(\\.|$)"),
                        r = l = g.length; l--; )
                            d = g[l],
                            !t && s !== d.origType || q && q.guid !== d.guid || h && !h.test(d.namespace) || i && i !== d.selector && ("**" !== i || !d.selector) || (g.splice(l, 1),
                            d.selector && g.delegateCount--,
                            f.remove && f.remove.call(e, d));
                        r && !g.length && (f.teardown && !1 !== f.teardown.call(e, p, o.handle) || a.removeEvent(e, c, o.handle),
                        delete j[c])
                    } else
                        for (c in j)
                            a.event.remove(e, c + n[k], q, i, !0);
                a.isEmptyObject(j) && b.remove(e, "handle events")
            }
        },
        dispatch: function(l) {
            var d, k, j, f, e, i, h = new Array(arguments.length), c = a.event.fix(l), m = (b.get(this, "events") || Object.create(null))[c.type] || [], g = a.event.special[c.type] || {};
            for (h[0] = c,
            d = 1; d < arguments.length; d++)
                h[d] = arguments[d];
            if (c.delegateTarget = this,
            !g.preDispatch || !1 !== g.preDispatch.call(this, c)) {
                for (i = a.event.handlers.call(this, c, m),
                d = 0; (f = i[d++]) && !c.isPropagationStopped(); )
                    for (c.currentTarget = f.elem,
                    k = 0; (e = f.handlers[k++]) && !c.isImmediatePropagationStopped(); )
                        c.rnamespace && !1 !== e.namespace && !c.rnamespace.test(e.namespace) || (c.handleObj = e,
                        c.data = e.data,
                        void 0 !== (j = ((a.event.special[e.origType] || {}).handle || e.handler).apply(f.elem, h)) && !1 === (c.result = j) && (c.preventDefault(),
                        c.stopPropagation()));
                return g.postDispatch && g.postDispatch.call(this, c),
                c.result
            }
        },
        handlers: function(d, e) {
            var f, k, c, g, h, j = [], i = e.delegateCount, b = d.target;
            if (i && b.nodeType && !("click" === d.type && 1 <= d.button))
                for (; b !== this; b = b.parentNode || this)
                    if (1 === b.nodeType && ("click" !== d.type || !0 !== b.disabled)) {
                        for (g = [],
                        h = {},
                        f = 0; f < i; f++)
                            void 0 === h[c = (k = e[f]).selector + " "] && (h[c] = k.needsContext ? -1 < a(c, this).index(b) : a.find(c, this, null, [b]).length),
                            h[c] && g.push(k);
                        g.length && j.push({
                            elem: b,
                            handlers: g
                        })
                    }
            return b = this,
            i < e.length && j.push({
                elem: b,
                handlers: e.slice(i)
            }),
            j
        },
        addProp: function(b, d) {
            Object.defineProperty(a.Event.prototype, b, {
                enumerable: !0,
                configurable: !0,
                get: c(d) ? function() {
                    if (this.originalEvent)
                        return d(this.originalEvent)
                }
                : function() {
                    if (this.originalEvent)
                        return this.originalEvent[b]
                }
                ,
                set: function(a) {
                    Object.defineProperty(this, b, {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: a
                    })
                }
            })
        },
        fix: function(b) {
            return b[a.expando] ? b : new a.Event(b)
        },
        special: {
            load: {
                noBubble: !0
            },
            click: {
                setup: function(b) {
                    var a = this || b;
                    return J.test(a.type) && a.click && i(a, "input") && T(a, "click", F),
                    !1
                },
                trigger: function(b) {
                    var a = this || b;
                    return J.test(a.type) && a.click && i(a, "input") && T(a, "click"),
                    !0
                },
                _default: function(c) {
                    var a = c.target;
                    return J.test(a.type) && a.click && i(a, "input") && b.get(a, "click") || i(a, "a")
                }
            },
            beforeunload: {
                postDispatch: function(a) {
                    void 0 !== a.result && a.originalEvent && (a.originalEvent.returnValue = a.result)
                }
            }
        }
    },
    a.removeEvent = function(a, b, c) {
        a.removeEventListener && a.removeEventListener(b, c)
    }
    ,
    a.Event = function(b, c) {
        if (!(this instanceof a.Event))
            return new a.Event(b,c);
        b && b.type ? (this.originalEvent = b,
        this.type = b.type,
        this.isDefaultPrevented = b.defaultPrevented || void 0 === b.defaultPrevented && !1 === b.returnValue ? F : D,
        this.target = b.target && 3 === b.target.nodeType ? b.target.parentNode : b.target,
        this.currentTarget = b.currentTarget,
        this.relatedTarget = b.relatedTarget) : this.type = b,
        c && a.extend(this, c),
        this.timeStamp = b && b.timeStamp || Date.now(),
        this[a.expando] = !0
    }
    ,
    a.Event.prototype = {
        constructor: a.Event,
        isDefaultPrevented: D,
        isPropagationStopped: D,
        isImmediatePropagationStopped: D,
        isSimulated: !1,
        preventDefault: function() {
            var a = this.originalEvent;
            this.isDefaultPrevented = F,
            a && !this.isSimulated && a.preventDefault()
        },
        stopPropagation: function() {
            var a = this.originalEvent;
            this.isPropagationStopped = F,
            a && !this.isSimulated && a.stopPropagation()
        },
        stopImmediatePropagation: function() {
            var a = this.originalEvent;
            this.isImmediatePropagationStopped = F,
            a && !this.isSimulated && a.stopImmediatePropagation(),
            this.stopPropagation()
        }
    },
    a.each({
        altKey: !0,
        bubbles: !0,
        cancelable: !0,
        changedTouches: !0,
        ctrlKey: !0,
        detail: !0,
        eventPhase: !0,
        metaKey: !0,
        pageX: !0,
        pageY: !0,
        shiftKey: !0,
        view: !0,
        char: !0,
        code: !0,
        charCode: !0,
        key: !0,
        keyCode: !0,
        button: !0,
        buttons: !0,
        clientX: !0,
        clientY: !0,
        offsetX: !0,
        offsetY: !0,
        pointerId: !0,
        pointerType: !0,
        screenX: !0,
        screenY: !0,
        targetTouches: !0,
        toElement: !0,
        touches: !0,
        which: !0
    }, a.event.addProp),
    a.each({
        focus: "focusin",
        blur: "focusout"
    }, function(b, c) {
        a.event.special[b] = {
            setup: function() {
                return T(this, b, bz),
                !1
            },
            trigger: function() {
                return T(this, b),
                !0
            },
            _default: function() {
                return !0
            },
            delegateType: c
        }
    }),
    a.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout"
    }, function(c, b) {
        a.event.special[c] = {
            delegateType: b,
            bindType: b,
            handle: function(c) {
                var e, d = c.relatedTarget, f = c.handleObj;
                return d && (d === this || a.contains(this, d)) || (c.type = f.origType,
                e = f.handler.apply(this, arguments),
                c.type = b),
                e
            }
        }
    }),
    a.fn.extend({
        on: function(a, b, c, d) {
            return af(this, a, b, c, d)
        },
        one: function(a, b, c, d) {
            return af(this, a, b, c, d, 1)
        },
        off: function(b, d, e) {
            var c, f;
            if (b && b.preventDefault && b.handleObj)
                return c = b.handleObj,
                a(b.delegateTarget).off(c.namespace ? c.origType + "." + c.namespace : c.origType, c.selector, c.handler),
                this;
            if ("object" == typeof b) {
                for (f in b)
                    this.off(f, d, b[f]);
                return this
            }
            return !1 !== d && "function" != typeof d || (e = d,
            d = void 0),
            !1 === e && (e = D),
            this.each(function() {
                a.event.remove(this, b, e, d)
            })
        }
    }),
    bx = /<script|<style|<link/i,
    bw = /checked\s*(?:[^=]|=\s*.checked.)/i,
    bv = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
    function aE(b, c) {
        return i(b, "table") && i(11 !== c.nodeType ? c : c.firstChild, "tr") && a(b).children("tbody")[0] || b
    }
    function bu(a) {
        return a.type = (null !== a.getAttribute("type")) + "/" + a.type,
        a
    }
    function bt(a) {
        return "true/" === (a.type || "").slice(0, 5) ? a.type = a.type.slice(5) : a.removeAttribute("type"),
        a
    }
    function aH(c, d) {
        var e, i, f, j, k, g;
        if (1 === d.nodeType) {
            if (b.hasData(c) && (g = b.get(c).events))
                for (f in b.remove(d, "handle events"),
                g)
                    for (e = 0,
                    i = g[f].length; e < i; e++)
                        a.event.add(d, f, g[f][e]);
            h.hasData(c) && (j = h.access(c),
            k = a.extend({}, j),
            h.set(d, k))
        }
    }
    function E(h, j, r, q) {
        j = be(j);
        var k, p, i, o, d, m, e = 0, l = h.length, t = l - 1, n = j[0], s = c(n);
        if (s || 1 < l && "string" == typeof n && !f.checkClone && bw.test(n))
            return h.each(function(a) {
                var b = h.eq(a);
                s && (j[0] = n.call(this, a, b.html())),
                E(b, j, r, q)
            });
        if (l && (p = (k = au(j, h[0].ownerDocument, !1, h, q)).firstChild,
        1 === k.childNodes.length && (k = p),
        p || q)) {
            for (o = (i = a.map(g(k, "script"), bu)).length; e < l; e++)
                d = k,
                e !== t && (d = a.clone(d, !0, !0),
                o && a.merge(i, g(d, "script"))),
                r.call(h[e], d, e);
            if (o)
                for (m = i[i.length - 1].ownerDocument,
                a.map(i, bt),
                e = 0; e < o; e++)
                    d = i[e],
                    aq.test(d.type || "") && !b.access(d, "globalEval") && a.contains(m, d) && (d.src && "module" !== (d.type || "").toLowerCase() ? a._evalUrl && !d.noModule && a._evalUrl(d.src, {
                        nonce: d.nonce || d.getAttribute("nonce")
                    }, m) : aZ(d.textContent.replace(bv, ""), d, m))
        }
        return h
    }
    function aJ(c, d, e) {
        for (var b, h = d ? a.filter(d, c) : c, f = 0; null != (b = h[f]); f++)
            e || 1 !== b.nodeType || a.cleanData(g(b)),
            b.parentNode && (e && G(b) && an(g(b, "script")),
            b.parentNode.removeChild(b));
        return c
    }
    a.extend({
        htmlPrefilter: function(a) {
            return a
        },
        clone: function(c, m, n) {
            var b, k, e, d, i, j, l, h = c.cloneNode(!0), o = G(c);
            if (!(f.noCloneChecked || 1 !== c.nodeType && 11 !== c.nodeType || a.isXMLDoc(c)))
                for (d = g(h),
                b = 0,
                k = (e = g(c)).length; b < k; b++)
                    i = e[b],
                    j = d[b],
                    void 0,
                    "input" === (l = j.nodeName.toLowerCase()) && J.test(i.type) ? j.checked = i.checked : "input" !== l && "textarea" !== l || (j.defaultValue = i.defaultValue);
            if (m)
                if (n)
                    for (e = e || g(c),
                    d = d || g(h),
                    b = 0,
                    k = e.length; b < k; b++)
                        aH(e[b], d[b]);
                else
                    aH(c, h);
            return 0 < (d = g(h, "script")).length && an(d, !o && g(c, "script")),
            h
        },
        cleanData: function(g) {
            for (var d, c, e, i = a.event.special, f = 0; void 0 !== (c = g[f]); f++)
                if (P(c)) {
                    if (d = c[b.expando]) {
                        if (d.events)
                            for (e in d.events)
                                i[e] ? a.event.remove(c, e) : a.removeEvent(c, e, d.handle);
                        c[b.expando] = void 0
                    }
                    c[h.expando] && (c[h.expando] = void 0)
                }
        }
    }),
    a.fn.extend({
        detach: function(a) {
            return aJ(this, a, !0)
        },
        remove: function(a) {
            return aJ(this, a)
        },
        text: function(b) {
            return o(this, function(b) {
                return void 0 === b ? a.text(this) : this.empty().each(function() {
                    1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = b)
                })
            }, null, b, arguments.length)
        },
        append: function() {
            return E(this, arguments, function(a) {
                1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || aE(this, a).appendChild(a)
            })
        },
        prepend: function() {
            return E(this, arguments, function(a) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var b = aE(this, a);
                    b.insertBefore(a, b.firstChild)
                }
            })
        },
        before: function() {
            return E(this, arguments, function(a) {
                this.parentNode && this.parentNode.insertBefore(a, this)
            })
        },
        after: function() {
            return E(this, arguments, function(a) {
                this.parentNode && this.parentNode.insertBefore(a, this.nextSibling)
            })
        },
        empty: function() {
            for (var b, c = 0; null != (b = this[c]); c++)
                1 === b.nodeType && (a.cleanData(g(b, !1)),
                b.textContent = "");
            return this
        },
        clone: function(b, c) {
            return b = null != b && b,
            c = null == c ? b : c,
            this.map(function() {
                return a.clone(this, b, c)
            })
        },
        html: function(b) {
            return o(this, function(b) {
                var c = this[0] || {}
                  , d = 0
                  , e = this.length;
                if (void 0 === b && 1 === c.nodeType)
                    return c.innerHTML;
                if ("string" == typeof b && !bx.test(b) && !j[(ar.exec(b) || ["", ""])[1].toLowerCase()]) {
                    b = a.htmlPrefilter(b);
                    try {
                        for (; d < e; d++)
                            1 === (c = this[d] || {}).nodeType && (a.cleanData(g(c, !1)),
                            c.innerHTML = b);
                        c = 0
                    } catch (a) {}
                }
                c && this.empty().append(b)
            }, null, b, arguments.length)
        },
        replaceWith: function() {
            var b = [];
            return E(this, arguments, function(d) {
                var c = this.parentNode;
                a.inArray(this, b) < 0 && (a.cleanData(g(this)),
                c && c.replaceChild(d, this))
            }, b)
        }
    }),
    a.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function(b, c) {
        a.fn[b] = function(h) {
            for (var d, e = [], f = a(h), g = f.length - 1, b = 0; b <= g; b++)
                d = b === g ? this : this.clone(!0),
                a(f[b])[c](d),
                ak.apply(e, d.get());
            return this.pushStack(e)
        }
    }),
    ac = new RegExp("^(" + ax + ")(?!px)[a-z%]+$","i"),
    Z = function(b) {
        var a = b.ownerDocument.defaultView;
        return a && a.opener || (a = d),
        a.getComputedStyle(b)
    }
    ,
    aM = function(b, c, f) {
        var d, a, e = {};
        for (a in c)
            e[a] = b.style[a],
            b.style[a] = c[a];
        for (a in d = f.call(b),
        c)
            b.style[a] = e[a];
        return d
    }
    ,
    br = new RegExp(p.join("|"),"i");
    function N(e, g, d) {
        var h, i, j, c, b = e.style;
        return (d = d || Z(e)) && ("" !== (c = d.getPropertyValue(g) || d[g]) || G(e) || (c = a.style(e, g)),
        !f.pixelBoxStyles() && ac.test(c) && br.test(g) && (h = b.width,
        i = b.minWidth,
        j = b.maxWidth,
        b.minWidth = b.maxWidth = b.width = c,
        c = d.width,
        b.width = h,
        b.minWidth = i,
        b.maxWidth = j)),
        void 0 !== c ? c + "" : c
    }
    function aP(a, b) {
        return {
            get: function() {
                if (!a())
                    return (this.get = b).apply(this, arguments);
                delete this.get
            }
        }
    }
    !function() {
        function c() {
            if (b) {
                h.style.cssText = "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0",
                b.style.cssText = "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%",
                t.appendChild(h).appendChild(b);
                var a = d.getComputedStyle(b);
                m = "1%" !== a.top,
                l = 12 === g(a.marginLeft),
                b.style.right = "60%",
                k = 36 === g(a.right),
                n = 36 === g(a.width),
                b.style.position = "absolute",
                j = 12 === g(b.offsetWidth / 3),
                t.removeChild(h),
                b = null
            }
        }
        function g(a) {
            return Math.round(parseFloat(a))
        }
        var m, n, j, k, i, l, h = e.createElement("div"), b = e.createElement("div");
        b.style && (b.style.backgroundClip = "content-box",
        b.cloneNode(!0).style.backgroundClip = "",
        f.clearCloneStyle = "content-box" === b.style.backgroundClip,
        a.extend(f, {
            boxSizingReliable: function() {
                return c(),
                n
            },
            pixelBoxStyles: function() {
                return c(),
                k
            },
            pixelPosition: function() {
                return c(),
                m
            },
            reliableMarginLeft: function() {
                return c(),
                l
            },
            scrollboxSize: function() {
                return c(),
                j
            },
            reliableTrDimensions: function() {
                var b, a, c, f;
                return null == i && (b = e.createElement("table"),
                a = e.createElement("tr"),
                c = e.createElement("div"),
                b.style.cssText = "position:absolute;left:-11111px;border-collapse:separate",
                a.style.cssText = "border:1px solid",
                a.style.height = "1px",
                c.style.height = "9px",
                c.style.display = "block",
                t.appendChild(b).appendChild(a).appendChild(c),
                f = d.getComputedStyle(a),
                i = parseInt(f.height, 10) + parseInt(f.borderTopWidth, 10) + parseInt(f.borderBottomWidth, 10) === a.offsetHeight,
                t.removeChild(b)),
                i
            }
        }))
    }(),
    aQ = ["Webkit", "Moz", "ms"],
    aR = e.createElement("div").style,
    bi = {};
    function aa(b) {
        var c = a.cssProps[b] || bi[b];
        return c || (b in aR ? b : bi[b] = function(a) {
            for (var c = a[0].toUpperCase() + a.slice(1), b = aQ.length; b--; )
                if ((a = aQ[b] + c)in aR)
                    return a
        }(b) || b)
    }
    bp = /^(none|table(?!-c[ea]).+)/,
    aV = /^--/,
    bm = {
        position: "absolute",
        visibility: "hidden",
        display: "block"
    },
    aX = {
        letterSpacing: "0",
        fontWeight: "400"
    };
    function aY(d, b, c) {
        var a = O.exec(b);
        return a ? Math.max(0, a[2] - (c || 0)) + (a[3] || "px") : b
    }
    function aj(d, g, f, h, e, i) {
        var b = "width" === g ? 1 : 0
          , j = 0
          , c = 0;
        if (f === (h ? "border" : "content"))
            return 0;
        for (; b < 4; b += 2)
            "margin" === f && (c += a.css(d, f + p[b], !0, e)),
            h ? ("content" === f && (c -= a.css(d, "padding" + p[b], !0, e)),
            "margin" !== f && (c -= a.css(d, "border" + p[b] + "Width", !0, e))) : (c += a.css(d, "padding" + p[b], !0, e),
            "padding" !== f ? c += a.css(d, "border" + p[b] + "Width", !0, e) : j += a.css(d, "border" + p[b] + "Width", !0, e));
        return !h && 0 <= i && (c += Math.max(0, Math.ceil(d["offset" + g[0].toUpperCase() + g.slice(1)] - i - c - j - .5)) || 0),
        c
    }
    function a_(b, e, h) {
        var d = Z(b)
          , g = (!f.boxSizingReliable() || h) && "border-box" === a.css(b, "boxSizing", !1, d)
          , j = g
          , c = N(b, e, d)
          , k = "offset" + e[0].toUpperCase() + e.slice(1);
        if (ac.test(c)) {
            if (!h)
                return c;
            c = "auto"
        }
        return (!f.boxSizingReliable() && g || !f.reliableTrDimensions() && i(b, "tr") || "auto" === c || !parseFloat(c) && "inline" === a.css(b, "display", !1, d)) && b.getClientRects().length && (g = "border-box" === a.css(b, "boxSizing", !1, d),
        (j = k in b) && (c = b[k])),
        (c = parseFloat(c) || 0) + aj(b, e, h || (g ? "border" : "content"), j, d, c) + "px"
    }
    function k(a, b, c, d, e) {
        return new k.prototype.init(a,b,c,d,e)
    }
    a.extend({
        cssHooks: {
            opacity: {
                get: function(b, c) {
                    if (c) {
                        var a = N(b, "opacity");
                        return "" === a ? "1" : a
                    }
                }
            }
        },
        cssNumber: {
            animationIterationCount: !0,
            columnCount: !0,
            fillOpacity: !0,
            flexGrow: !0,
            flexShrink: !0,
            fontWeight: !0,
            gridArea: !0,
            gridColumn: !0,
            gridColumnEnd: !0,
            gridColumnStart: !0,
            gridRow: !0,
            gridRowEnd: !0,
            gridRowStart: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {},
        style: function(d, c, b, l) {
            if (d && 3 !== d.nodeType && 8 !== d.nodeType && d.style) {
                var e, i, g, j = n(c), k = aV.test(c), h = d.style;
                if (k || (c = aa(j)),
                g = a.cssHooks[c] || a.cssHooks[j],
                void 0 === b)
                    return g && "get"in g && void 0 !== (e = g.get(d, !1, l)) ? e : h[c];
                "string" === (i = typeof b) && (e = O.exec(b)) && e[1] && (b = aw(d, c, e),
                i = "number"),
                null != b && b == b && ("number" !== i || k || (b += e && e[3] || (a.cssNumber[j] ? "" : "px")),
                f.clearCloneStyle || "" !== b || 0 !== c.indexOf("background") || (h[c] = "inherit"),
                g && "set"in g && void 0 === (b = g.set(d, b, l)) || (k ? h.setProperty(c, b) : h[c] = b))
            }
        },
        css: function(g, c, d, i) {
            var b, f, e, h = n(c);
            return aV.test(c) || (c = aa(h)),
            (e = a.cssHooks[c] || a.cssHooks[h]) && "get"in e && (b = e.get(g, !0, d)),
            void 0 === b && (b = N(g, c, i)),
            "normal" === b && c in aX && (b = aX[c]),
            "" === d || d ? (f = parseFloat(b),
            !0 === d || isFinite(f) ? f || 0 : b) : b
        }
    }),
    a.each(["height", "width"], function(c, b) {
        a.cssHooks[b] = {
            get: function(c, e, d) {
                if (e)
                    return !bp.test(a.css(c, "display")) || c.getClientRects().length && c.getBoundingClientRect().width ? a_(c, b, d) : aM(c, bm, function() {
                        return a_(c, b, d)
                    })
            },
            set: function(c, e, g) {
                var i, d = Z(c), j = !f.scrollboxSize() && "absolute" === d.position, k = (j || g) && "border-box" === a.css(c, "boxSizing", !1, d), h = g ? aj(c, b, g, k, d) : 0;
                return k && j && (h -= Math.ceil(c["offset" + b[0].toUpperCase() + b.slice(1)] - parseFloat(d[b]) - aj(c, b, "border", !1, d) - .5)),
                h && (i = O.exec(e)) && "px" !== (i[3] || "px") && (c.style[b] = e,
                e = a.css(c, b)),
                aY(0, e, h)
            }
        }
    }),
    a.cssHooks.marginLeft = aP(f.reliableMarginLeft, function(a, b) {
        if (b)
            return (parseFloat(N(a, "marginLeft")) || a.getBoundingClientRect().left - aM(a, {
                marginLeft: 0
            }, function() {
                return a.getBoundingClientRect().left
            })) + "px"
    }),
    a.each({
        margin: "",
        padding: "",
        border: "Width"
    }, function(b, c) {
        a.cssHooks[b + c] = {
            expand: function(d) {
                for (var a = 0, f = {}, e = "string" == typeof d ? d.split(" ") : [d]; a < 4; a++)
                    f[b + p[a] + c] = e[a] || e[a - 2] || e[0];
                return f
            }
        },
        "margin" !== b && (a.cssHooks[b + c].set = aY)
    }),
    a.fn.extend({
        css: function(b, c) {
            return o(this, function(c, b, e) {
                var f, g, h = {}, d = 0;
                if (Array.isArray(b)) {
                    for (f = Z(c),
                    g = b.length; d < g; d++)
                        h[b[d]] = a.css(c, b[d], !1, f);
                    return h
                }
                return void 0 !== e ? a.style(c, b, e) : a.css(c, b)
            }, b, c, 1 < arguments.length)
        }
    }),
    ((a.Tween = k).prototype = {
        constructor: k,
        init: function(c, d, b, e, f, g) {
            this.elem = c,
            this.prop = b,
            this.easing = f || a.easing._default,
            this.options = d,
            this.start = this.now = this.cur(),
            this.end = e,
            this.unit = g || (a.cssNumber[b] ? "" : "px")
        },
        cur: function() {
            var a = k.propHooks[this.prop];
            return a && a.get ? a.get(this) : k.propHooks._default.get(this)
        },
        run: function(b) {
            var c, d = k.propHooks[this.prop];
            return this.options.duration ? this.pos = c = a.easing[this.easing](b, this.options.duration * b, 0, 1, this.options.duration) : this.pos = c = b,
            this.now = (this.end - this.start) * c + this.start,
            this.options.step && this.options.step.call(this.elem, this.now, this),
            d && d.set ? d.set(this) : k.propHooks._default.set(this),
            this
        }
    }).init.prototype = k.prototype,
    (k.propHooks = {
        _default: {
            get: function(b) {
                var c;
                return 1 !== b.elem.nodeType || null != b.elem[b.prop] && null == b.elem.style[b.prop] ? b.elem[b.prop] : (c = a.css(b.elem, b.prop, "")) && "auto" !== c ? c : 0
            },
            set: function(b) {
                a.fx.step[b.prop] ? a.fx.step[b.prop](b) : 1 !== b.elem.nodeType || !a.cssHooks[b.prop] && null == b.elem.style[aa(b.prop)] ? b.elem[b.prop] = b.now : a.style(b.elem, b.prop, b.now + b.unit)
            }
        }
    }).scrollTop = k.propHooks.scrollLeft = {
        set: function(a) {
            a.elem.nodeType && a.elem.parentNode && (a.elem[a.prop] = a.now)
        }
    },
    a.easing = {
        linear: function(a) {
            return a
        },
        swing: function(a) {
            return .5 - Math.cos(a * Math.PI) / 2
        },
        _default: "swing"
    },
    a.fx = k.prototype.init,
    a.fx.step = {},
    bk = /^(?:toggle|show|hide)$/,
    bj = /queueHooks$/;
    function al() {
        Q && (!1 === e.hidden && d.requestAnimationFrame ? d.requestAnimationFrame(al) : d.setTimeout(al, a.fx.interval),
        a.fx.tick())
    }
    function bh() {
        return d.setTimeout(function() {
            H = void 0
        }),
        H = Date.now()
    }
    function W(c, b) {
        var e, d = 0, a = {
            height: c
        };
        for (b = b ? 1 : 0; d < 4; d += 2 - b)
            a["margin" + (e = p[d])] = a["padding" + e] = c;
        return b && (a.opacity = a.width = c),
        a
    }
    function bf(e, b, f) {
        for (var c, d = (l.tweeners[b] || []).concat(l.tweeners["*"]), a = 0, g = d.length; a < g; a++)
            if (c = d[a].call(f, b, e))
                return c
    }
    function l(d, k, g) {
        var f, h, i = 0, o = l.prefilters.length, e = a.Deferred().always(function() {
            delete m.elem
        }), m = function() {
            if (h)
                return !1;
            for (var i = H || bh(), a = Math.max(0, b.startTime + b.duration - i), c = 1 - (a / b.duration || 0), f = 0, g = b.tweens.length; f < g; f++)
                b.tweens[f].run(c);
            return e.notifyWith(d, [b, c, a]),
            c < 1 && g ? a : (g || e.notifyWith(d, [b, 1, 0]),
            e.resolveWith(d, [b]),
            !1)
        }, b = e.promise({
            elem: d,
            props: a.extend({}, k),
            opts: a.extend(!0, {
                specialEasing: {},
                easing: a.easing._default
            }, g),
            originalProperties: k,
            originalOptions: g,
            startTime: H || bh(),
            duration: g.duration,
            tweens: [],
            createTween: function(c, f) {
                var e = a.Tween(d, b.opts, c, f, b.opts.specialEasing[c] || b.opts.easing);
                return b.tweens.push(e),
                e
            },
            stop: function(a) {
                var c = 0
                  , f = a ? b.tweens.length : 0;
                if (h)
                    return this;
                for (h = !0; c < f; c++)
                    b.tweens[c].run(1);
                return a ? (e.notifyWith(d, [b, 1, 0]),
                e.resolveWith(d, [b, a])) : e.rejectWith(d, [b, a]),
                this
            }
        }), j = b.props;
        for (!function(d, g) {
            var b, e, f, c, h;
            for (b in d)
                if (f = g[e = n(b)],
                c = d[b],
                Array.isArray(c) && (f = c[1],
                c = d[b] = c[0]),
                b !== e && (d[e] = c,
                delete d[b]),
                (h = a.cssHooks[e]) && "expand"in h)
                    for (b in c = h.expand(c),
                    delete d[e],
                    c)
                        b in d || (d[b] = c[b],
                        g[b] = f);
                else
                    g[e] = f
        }(j, b.opts.specialEasing); i < o; i++)
            if (f = l.prefilters[i].call(b, d, j, b.opts))
                return c(f.stop) && (a._queueHooks(b.elem, b.opts.queue).stop = f.stop.bind(f)),
                f;
        return a.map(j, bf, b),
        c(b.opts.start) && b.opts.start.call(d, b),
        b.progress(b.opts.progress).done(b.opts.done, b.opts.complete).fail(b.opts.fail).always(b.opts.always),
        a.fx.timer(a.extend(m, {
            elem: d,
            anim: b,
            queue: b.opts.queue
        })),
        b
    }
    a.Animation = a.extend(l, {
        tweeners: {
            "*": [function(b, c) {
                var a = this.createTween(b, c);
                return aw(a.elem, b, O.exec(c), a),
                a
            }
            ]
        },
        tweener: function(a, e) {
            c(a) ? (e = a,
            a = ["*"]) : a = a.match(m);
            for (var b, d = 0, f = a.length; d < f; d++)
                b = a[d],
                l.tweeners[b] = l.tweeners[b] || [],
                l.tweeners[b].unshift(e)
        },
        prefilters: [function(c, l, m) {
            var d, p, q, j, r, h, f, k, s = "width"in l || "height"in l, n = this, o = {}, g = c.style, i = c.nodeType && _(c), e = b.get(c, "fxshow");
            for (d in m.queue || (null == (j = a._queueHooks(c, "fx")).unqueued && (j.unqueued = 0,
            r = j.empty.fire,
            j.empty.fire = function() {
                j.unqueued || r()
            }
            ),
            j.unqueued++,
            n.always(function() {
                n.always(function() {
                    j.unqueued--,
                    a.queue(c, "fx").length || j.empty.fire()
                })
            })),
            l)
                if (p = l[d],
                bk.test(p)) {
                    if (delete l[d],
                    q = q || "toggle" === p,
                    p === (i ? "hide" : "show")) {
                        if ("show" !== p || !e || void 0 === e[d])
                            continue;
                        i = !0
                    }
                    o[d] = e && e[d] || a.style(c, d)
                }
            if ((h = !a.isEmptyObject(l)) || !a.isEmptyObject(o))
                for (d in s && 1 === c.nodeType && (m.overflow = [g.overflow, g.overflowX, g.overflowY],
                null == (f = e && e.display) && (f = b.get(c, "display")),
                "none" === (k = a.css(c, "display")) && (f ? k = f : (A([c], !0),
                f = c.style.display || f,
                k = a.css(c, "display"),
                A([c]))),
                ("inline" === k || "inline-block" === k && null != f) && "none" === a.css(c, "float") && (h || (n.done(function() {
                    g.display = f
                }),
                null == f && (k = g.display,
                f = "none" === k ? "" : k)),
                g.display = "inline-block")),
                m.overflow && (g.overflow = "hidden",
                n.always(function() {
                    g.overflow = m.overflow[0],
                    g.overflowX = m.overflow[1],
                    g.overflowY = m.overflow[2]
                })),
                h = !1,
                o)
                    h || (e ? "hidden"in e && (i = e.hidden) : e = b.access(c, "fxshow", {
                        display: f
                    }),
                    q && (e.hidden = !i),
                    i && A([c], !0),
                    n.done(function() {
                        for (d in i || A([c]),
                        b.remove(c, "fxshow"),
                        o)
                            a.style(c, d, o[d])
                    })),
                    h = bf(i ? e[d] : 0, d, n),
                    d in e || (e[d] = h.start,
                    i && (h.end = h.start,
                    h.start = 0))
        }
        ],
        prefilter: function(a, b) {
            b ? l.prefilters.unshift(a) : l.prefilters.push(a)
        }
    }),
    a.speed = function(d, e, f) {
        var b = d && "object" == typeof d ? a.extend({}, d) : {
            complete: f || !f && e || c(d) && d,
            duration: d,
            easing: f && e || e && !c(e) && e
        };
        return a.fx.off ? b.duration = 0 : "number" != typeof b.duration && (b.duration in a.fx.speeds ? b.duration = a.fx.speeds[b.duration] : b.duration = a.fx.speeds._default),
        null != b.queue && !0 !== b.queue || (b.queue = "fx"),
        b.old = b.complete,
        b.complete = function() {
            c(b.old) && b.old.call(this),
            b.queue && a.dequeue(this, b.queue)
        }
        ,
        b
    }
    ,
    a.fn.extend({
        fadeTo: function(a, b, c, d) {
            return this.filter(_).css("opacity", 0).show().end().animate({
                opacity: b
            }, a, c, d)
        },
        animate: function(f, g, h, i) {
            var e = a.isEmptyObject(f)
              , d = a.speed(g, h, i)
              , c = function() {
                var c = l(this, a.extend({}, f), d);
                (e || b.get(this, "finish")) && c.stop(!0)
            };
            return c.finish = c,
            e || !1 === d.queue ? this.each(c) : this.queue(d.queue, c)
        },
        stop: function(c, e, d) {
            var f = function(a) {
                var b = a.stop;
                delete a.stop,
                b(d)
            };
            return "string" != typeof c && (d = e,
            e = c,
            c = void 0),
            e && this.queue(c || "fx", []),
            this.each(function() {
                var i = !0
                  , e = null != c && c + "queueHooks"
                  , h = a.timers
                  , g = b.get(this);
                if (e)
                    g[e] && g[e].stop && f(g[e]);
                else
                    for (e in g)
                        g[e] && g[e].stop && bj.test(e) && f(g[e]);
                for (e = h.length; e--; )
                    h[e].elem !== this || null != c && h[e].queue !== c || (h[e].anim.stop(d),
                    i = !1,
                    h.splice(e, 1));
                !i && d || a.dequeue(this, c)
            })
        },
        finish: function(c) {
            return !1 !== c && (c = c || "fx"),
            this.each(function() {
                var d, g = b.get(this), e = g[c + "queue"], h = g[c + "queueHooks"], f = a.timers, i = e ? e.length : 0;
                for (g.finish = !0,
                a.queue(this, c, []),
                h && h.stop && h.stop.call(this, !0),
                d = f.length; d--; )
                    f[d].elem === this && f[d].queue === c && (f[d].anim.stop(!0),
                    f.splice(d, 1));
                for (d = 0; d < i; d++)
                    e[d] && e[d].finish && e[d].finish.call(this);
                delete g.finish
            })
        }
    }),
    a.each(["toggle", "show", "hide"], function(d, b) {
        var c = a.fn[b];
        a.fn[b] = function(a, d, e) {
            return null == a || "boolean" == typeof a ? c.apply(this, arguments) : this.animate(W(b, !0), a, d, e)
        }
    }),
    a.each({
        slideDown: W("show"),
        slideUp: W("hide"),
        slideToggle: W("toggle"),
        fadeIn: {
            opacity: "show"
        },
        fadeOut: {
            opacity: "hide"
        },
        fadeToggle: {
            opacity: "toggle"
        }
    }, function(b, c) {
        a.fn[b] = function(a, b, d) {
            return this.animate(c, a, b, d)
        }
    }),
    a.timers = [],
    a.fx.tick = function() {
        var d, b = 0, c = a.timers;
        for (H = Date.now(); b < c.length; b++)
            (d = c[b])() || c[b] !== d || c.splice(b--, 1);
        c.length || a.fx.stop(),
        H = void 0
    }
    ,
    a.fx.timer = function(b) {
        a.timers.push(b),
        a.fx.start()
    }
    ,
    a.fx.interval = 13,
    a.fx.start = function() {
        Q || (Q = !0,
        al())
    }
    ,
    a.fx.stop = function() {
        Q = null
    }
    ,
    a.fx.speeds = {
        slow: 600,
        fast: 200,
        _default: 400
    },
    a.fn.delay = function(b, c) {
        return b = a.fx && a.fx.speeds[b] || b,
        c = c || "fx",
        this.queue(c, function(a, c) {
            var e = d.setTimeout(a, b);
            c.stop = function() {
                d.clearTimeout(e)
            }
        })
    }
    ,
    B = e.createElement("input"),
    bd = e.createElement("select").appendChild(e.createElement("option")),
    B.type = "checkbox",
    f.checkOn = "" !== B.value,
    f.optSelected = bd.selected,
    (B = e.createElement("input")).value = "t",
    B.type = "radio",
    f.radioValue = "t" === B.value,
    I = a.expr.attrHandle,
    a.fn.extend({
        attr: function(b, c) {
            return o(this, a.attr, b, c, 1 < arguments.length)
        },
        removeAttr: function(b) {
            return this.each(function() {
                a.removeAttr(this, b)
            })
        }
    }),
    a.extend({
        attr: function(b, c, e) {
            var f, d, g = b.nodeType;
            if (3 !== g && 8 !== g && 2 !== g)
                return "undefined" == typeof b.getAttribute ? a.prop(b, c, e) : (1 === g && a.isXMLDoc(b) || (d = a.attrHooks[c.toLowerCase()] || (a.expr.match.bool.test(c) ? aA : void 0)),
                void 0 !== e ? null === e ? void a.removeAttr(b, c) : d && "set"in d && void 0 !== (f = d.set(b, e, c)) ? f : (b.setAttribute(c, e + ""),
                e) : d && "get"in d && null !== (f = d.get(b, c)) ? f : null == (f = a.find.attr(b, c)) ? void 0 : f)
        },
        attrHooks: {
            type: {
                set: function(a, b) {
                    if (!f.radioValue && "radio" === b && i(a, "input")) {
                        var c = a.value;
                        return a.setAttribute("type", b),
                        c && (a.value = c),
                        b
                    }
                }
            }
        },
        removeAttr: function(a, b) {
            var c, e = 0, d = b && b.match(m);
            if (d && 1 === a.nodeType)
                while (c = d[e++])
                    a.removeAttribute(c)
        }
    }),
    aA = {
        set: function(c, d, b) {
            return !1 === d ? a.removeAttr(c, b) : c.setAttribute(b, b),
            b
        }
    },
    a.each(a.expr.match.bool.source.match(/\w+/g), function(d, b) {
        var c = I[b] || a.find.attr;
        I[b] = function(g, d, e) {
            var b, f, a = d.toLowerCase();
            return e || (f = I[a],
            I[a] = b,
            b = null != c(g, d, e) ? a : null,
            I[a] = f),
            b
        }
    }),
    bn = /^(?:input|select|textarea|button)$/i,
    bo = /^(?:a|area)$/i;
    function w(a) {
        return (a.match(m) || []).join(" ")
    }
    function s(a) {
        return a.getAttribute && a.getAttribute("class") || ""
    }
    function ad(a) {
        return Array.isArray(a) ? a : "string" == typeof a && a.match(m) || []
    }
    a.fn.extend({
        prop: function(b, c) {
            return o(this, a.prop, b, c, 1 < arguments.length)
        },
        removeProp: function(b) {
            return this.each(function() {
                delete this[a.propFix[b] || b]
            })
        }
    }),
    a.extend({
        prop: function(d, b, g) {
            var e, c, f = d.nodeType;
            if (3 !== f && 8 !== f && 2 !== f)
                return 1 === f && a.isXMLDoc(d) || (b = a.propFix[b] || b,
                c = a.propHooks[b]),
                void 0 !== g ? c && "set"in c && void 0 !== (e = c.set(d, g, b)) ? e : d[b] = g : c && "get"in c && null !== (e = c.get(d, b)) ? e : d[b]
        },
        propHooks: {
            tabIndex: {
                get: function(b) {
                    var c = a.find.attr(b, "tabindex");
                    return c ? parseInt(c, 10) : bn.test(b.nodeName) || bo.test(b.nodeName) && b.href ? 0 : -1
                }
            }
        },
        propFix: {
            for: "htmlFor",
            class: "className"
        }
    }),
    f.optSelected || (a.propHooks.selected = {
        get: function(b) {
            var a = b.parentNode;
            return a && a.parentNode && a.parentNode.selectedIndex,
            null
        },
        set: function(b) {
            var a = b.parentNode;
            a && (a.selectedIndex,
            a.parentNode && a.parentNode.selectedIndex)
        }
    }),
    a.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
        a.propFix[this.toLowerCase()] = this
    }),
    a.fn.extend({
        addClass: function(e) {
            var h, b, d, f, g, i, j, k = 0;
            if (c(e))
                return this.each(function(b) {
                    a(this).addClass(e.call(this, b, s(this)))
                });
            if ((h = ad(e)).length)
                while (b = this[k++])
                    if (f = s(b),
                    d = 1 === b.nodeType && " " + w(f) + " ") {
                        for (i = 0; g = h[i++]; )
                            d.indexOf(" " + g + " ") < 0 && (d += g + " ");
                        f !== (j = w(d)) && b.setAttribute("class", j)
                    }
            return this
        },
        removeClass: function(e) {
            var h, d, b, f, g, i, j, k = 0;
            if (c(e))
                return this.each(function(b) {
                    a(this).removeClass(e.call(this, b, s(this)))
                });
            if (!arguments.length)
                return this.attr("class", "");
            if ((h = ad(e)).length)
                while (d = this[k++])
                    if (f = s(d),
                    b = 1 === d.nodeType && " " + w(f) + " ") {
                        for (i = 0; g = h[i++]; )
                            while (-1 < b.indexOf(" " + g + " "))
                                b = b.replace(" " + g + " ", " ");
                        f !== (j = w(b)) && d.setAttribute("class", j)
                    }
            return this
        },
        toggleClass: function(d, e) {
            var f = typeof d
              , g = "string" === f || Array.isArray(d);
            return "boolean" == typeof e && g ? e ? this.addClass(d) : this.removeClass(d) : c(d) ? this.each(function(b) {
                a(this).toggleClass(d.call(this, b, s(this), e), e)
            }) : this.each(function() {
                var c, h, e, i;
                if (g)
                    for (h = 0,
                    e = a(this),
                    i = ad(d); c = i[h++]; )
                        e.hasClass(c) ? e.removeClass(c) : e.addClass(c);
                else
                    void 0 !== d && "boolean" !== f || ((c = s(this)) && b.set(this, "__className__", c),
                    this.setAttribute && this.setAttribute("class", c || !1 === d ? "" : b.get(this, "__className__") || ""))
            })
        },
        hasClass: function(c) {
            var b, a, d = 0;
            for (b = " " + c + " "; a = this[d++]; )
                if (1 === a.nodeType && -1 < (" " + w(s(a)) + " ").indexOf(b))
                    return !0;
            return !1
        }
    }),
    bs = /\r/g,
    a.fn.extend({
        val: function(f) {
            var b, d, g, e = this[0];
            return arguments.length ? (g = c(f),
            this.each(function(d) {
                var c;
                1 === this.nodeType && (null == (c = g ? f.call(this, d, a(this).val()) : f) ? c = "" : "number" == typeof c ? c += "" : Array.isArray(c) && (c = a.map(c, function(a) {
                    return null == a ? "" : a + ""
                })),
                (b = a.valHooks[this.type] || a.valHooks[this.nodeName.toLowerCase()]) && "set"in b && void 0 !== b.set(this, c, "value") || (this.value = c))
            })) : e ? (b = a.valHooks[e.type] || a.valHooks[e.nodeName.toLowerCase()]) && "get"in b && void 0 !== (d = b.get(e, "value")) ? d : "string" == typeof (d = e.value) ? d.replace(bs, "") : null == d ? "" : d : void 0
        }
    }),
    a.extend({
        valHooks: {
            option: {
                get: function(b) {
                    var c = a.find.attr(b, "value");
                    return null != c ? c : w(a.text(b))
                }
            },
            select: {
                get: function(g) {
                    var f, b, c, h = g.options, e = g.selectedIndex, d = "select-one" === g.type, j = d ? null : [], k = d ? e + 1 : h.length;
                    for (c = e < 0 ? k : d ? e : 0; c < k; c++)
                        if (((b = h[c]).selected || c === e) && !b.disabled && (!b.parentNode.disabled || !i(b.parentNode, "optgroup"))) {
                            if (f = a(b).val(),
                            d)
                                return f;
                            j.push(f)
                        }
                    return j
                },
                set: function(b, h) {
                    for (var c, d, e = b.options, f = a.makeArray(h), g = e.length; g--; )
                        ((d = e[g]).selected = -1 < a.inArray(a.valHooks.option.get(d), f)) && (c = !0);
                    return c || (b.selectedIndex = -1),
                    f
                }
            }
        }
    }),
    a.each(["radio", "checkbox"], function() {
        a.valHooks[this] = {
            set: function(b, c) {
                if (Array.isArray(c))
                    return b.checked = -1 < a.inArray(a(b).val(), c)
            }
        },
        f.checkOn || (a.valHooks[this].get = function(a) {
            return null === a.getAttribute("value") ? "on" : a.value
        }
        )
    }),
    f.focusin = "onfocusin"in d,
    aG = /^(?:focusinfocus|focusoutblur)$/,
    aF = function(a) {
        a.stopPropagation()
    }
    ,
    a.extend(a.event, {
        trigger: function(f, l, h, p) {
            var s, i, j, t, m, n, k, q, r = [h || e], g = X.call(f, "type") ? f.type : f, o = X.call(f, "namespace") ? f.namespace.split(".") : [];
            if (i = q = j = h = h || e,
            3 !== h.nodeType && 8 !== h.nodeType && !aG.test(g + a.event.triggered) && (-1 < g.indexOf(".") && (g = (o = g.split(".")).shift(),
            o.sort()),
            m = g.indexOf(":") < 0 && "on" + g,
            (f = f[a.expando] ? f : new a.Event(g,"object" == typeof f && f)).isTrigger = p ? 2 : 3,
            f.namespace = o.join("."),
            f.rnamespace = f.namespace ? new RegExp("(^|\\.)" + o.join("\\.(?:.*\\.|)") + "(\\.|$)") : null,
            f.result = void 0,
            f.target || (f.target = h),
            l = null == l ? [f] : a.makeArray(l, [f]),
            k = a.event.special[g] || {},
            p || !k.trigger || !1 !== k.trigger.apply(h, l))) {
                if (!p && !k.noBubble && !C(h)) {
                    for (t = k.delegateType || g,
                    aG.test(t + g) || (i = i.parentNode); i; i = i.parentNode)
                        r.push(i),
                        j = i;
                    j === (h.ownerDocument || e) && r.push(j.defaultView || j.parentWindow || d)
                }
                for (s = 0; (i = r[s++]) && !f.isPropagationStopped(); )
                    q = i,
                    f.type = 1 < s ? t : k.bindType || g,
                    (n = (b.get(i, "events") || Object.create(null))[f.type] && b.get(i, "handle")) && n.apply(i, l),
                    (n = m && i[m]) && n.apply && P(i) && (f.result = n.apply(i, l),
                    !1 === f.result && f.preventDefault());
                return f.type = g,
                p || f.isDefaultPrevented() || k._default && !1 !== k._default.apply(r.pop(), l) || !P(h) || m && c(h[g]) && !C(h) && ((j = h[m]) && (h[m] = null),
                a.event.triggered = g,
                f.isPropagationStopped() && q.addEventListener(g, aF),
                h[g](),
                f.isPropagationStopped() && q.removeEventListener(g, aF),
                a.event.triggered = void 0,
                j && (h[m] = j)),
                f.result
            }
        },
        simulate: function(b, c, d) {
            var e = a.extend(new a.Event, d, {
                type: b,
                isSimulated: !0
            });
            a.event.trigger(e, null, c)
        }
    }),
    a.fn.extend({
        trigger: function(b, c) {
            return this.each(function() {
                a.event.trigger(b, c, this)
            })
        },
        triggerHandler: function(c, d) {
            var b = this[0];
            if (b)
                return a.event.trigger(c, d, b, !0)
        }
    }),
    f.focusin || a.each({
        focus: "focusin",
        blur: "focusout"
    }, function(d, c) {
        var e = function(b) {
            a.event.simulate(c, b.target, a.event.fix(b))
        };
        a.event.special[c] = {
            setup: function() {
                var a = this.ownerDocument || this.document || this
                  , f = b.access(a, c);
                f || a.addEventListener(d, e, !0),
                b.access(a, c, (f || 0) + 1)
            },
            teardown: function() {
                var a = this.ownerDocument || this.document || this
                  , f = b.access(a, c) - 1;
                f ? b.access(a, c, f) : (a.removeEventListener(d, e, !0),
                b.remove(a, c))
            }
        }
    }),
    M = d.location,
    aC = {
        guid: Date.now()
    },
    ao = /\?/,
    a.parseXML = function(c) {
        var b, e;
        if (!c || "string" != typeof c)
            return null;
        try {
            b = (new d.DOMParser).parseFromString(c, "text/xml")
        } catch (a) {}
        return e = b && b.getElementsByTagName("parsererror")[0],
        b && !e || a.error("Invalid XML: " + (e ? a.map(e.childNodes, function(a) {
            return a.textContent
        }).join("\n") : c)),
        b
    }
    ,
    by = /\[\]$/,
    ay = /\r?\n/g,
    bA = /^(?:submit|button|image|reset|file)$/i,
    bB = /^(?:input|select|textarea|keygen)/i;
    function ai(c, b, d, e) {
        var f;
        if (Array.isArray(b))
            a.each(b, function(b, a) {
                d || by.test(c) ? e(c, a) : ai(c + "[" + ("object" == typeof a && null != a ? b : "") + "]", a, d, e)
            });
        else if (d || "object" !== z(b))
            e(c, b);
        else
            for (f in b)
                ai(c + "[" + f + "]", b[f], d, e)
    }
    a.param = function(b, g) {
        var d, e = [], f = function(d, a) {
            var b = c(a) ? a() : a;
            e[e.length] = encodeURIComponent(d) + "=" + encodeURIComponent(null == b ? "" : b)
        };
        if (null == b)
            return "";
        if (Array.isArray(b) || b.jquery && !a.isPlainObject(b))
            a.each(b, function() {
                f(this.name, this.value)
            });
        else
            for (d in b)
                ai(d, b[d], g, f);
        return e.join("&")
    }
    ,
    a.fn.extend({
        serialize: function() {
            return a.param(this.serializeArray())
        },
        serializeArray: function() {
            return this.map(function() {
                var b = a.prop(this, "elements");
                return b ? a.makeArray(b) : this
            }).filter(function() {
                var b = this.type;
                return this.name && !a(this).is(":disabled") && bB.test(this.nodeName) && !bA.test(b) && (this.checked || !J.test(b))
            }).map(function(d, c) {
                var b = a(this).val();
                return null == b ? null : Array.isArray(b) ? a.map(b, function(a) {
                    return {
                        name: c.name,
                        value: a.replace(ay, "\r\n")
                    }
                }) : {
                    name: c.name,
                    value: b.replace(ay, "\r\n")
                }
            }).get()
        }
    }),
    bD = /%20/g,
    bX = /#.*$/,
    bF = /([?&])_=[^&]*/,
    bG = /^(.*?):[ \t]*([^\r\n]*)$/gm,
    bH = /^(?:GET|HEAD)$/,
    bI = /^\/\//,
    aB = {},
    ag = {},
    aD = "*/".concat("*"),
    ap = e.createElement("a");
    function aI(a) {
        return function(d, e) {
            "string" != typeof d && (e = d,
            d = "*");
            var b, f = 0, g = d.toLowerCase().match(m) || [];
            if (c(e))
                while (b = g[f++])
                    "+" === b[0] ? (b = b.slice(1) || "*",
                    (a[b] = a[b] || []).unshift(e)) : (a[b] = a[b] || []).push(e)
        }
    }
    function aN(f, c, g, h) {
        var d = {}
          , e = f === ag;
        function b(i) {
            var j;
            return d[i] = !0,
            a.each(f[i] || [], function(i, f) {
                var a = f(c, g, h);
                return "string" != typeof a || e || d[a] ? e ? !(j = a) : void 0 : (c.dataTypes.unshift(a),
                b(a),
                !1)
            }),
            j
        }
        return b(c.dataTypes[0]) || !d["*"] && b("*")
    }
    function ae(d, e) {
        var b, c, f = a.ajaxSettings.flatOptions || {};
        for (b in e)
            void 0 !== e[b] && ((f[b] ? d : c || (c = {}))[b] = e[b]);
        return c && a.extend(!0, d, c),
        d
    }
    return ap.href = M.href,
    a.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: M.href,
            type: "GET",
            isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(M.protocol),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": aD,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript"
            },
            contents: {
                xml: /\bxml\b/,
                html: /\bhtml/,
                json: /\bjson\b/
            },
            responseFields: {
                xml: "responseXML",
                text: "responseText",
                json: "responseJSON"
            },
            converters: {
                "* text": String,
                "text html": !0,
                "text json": JSON.parse,
                "text xml": a.parseXML
            },
            flatOptions: {
                url: !0,
                context: !0
            }
        },
        ajaxSetup: function(b, c) {
            return c ? ae(ae(b, a.ajaxSettings), c) : ae(a.ajaxSettings, b)
        },
        ajaxPrefilter: aI(aB),
        ajaxTransport: aI(ag),
        ajax: function(q, h) {
            "object" == typeof q && (h = q,
            q = void 0),
            h = h || {};
            var l, f, w, k, v, j, g, o, s, p, b = a.ajaxSetup({}, h), i = b.context || b, t = b.context && (i.nodeType || i.jquery) ? a(i) : a.event, u = a.Deferred(), A = a.Callbacks("once memory"), n = b.statusCode || {}, x = {}, y = {}, z = "canceled", c = {
                readyState: 0,
                getResponseHeader: function(b) {
                    var a;
                    if (g) {
                        if (!k)
                            for (k = {}; a = bG.exec(w); )
                                k[a[1].toLowerCase() + " "] = (k[a[1].toLowerCase() + " "] || []).concat(a[2]);
                        a = k[b.toLowerCase() + " "]
                    }
                    return null == a ? null : a.join(", ")
                },
                getAllResponseHeaders: function() {
                    return g ? w : null
                },
                setRequestHeader: function(a, b) {
                    return null == g && (a = y[a.toLowerCase()] = y[a.toLowerCase()] || a,
                    x[a] = b),
                    this
                },
                overrideMimeType: function(a) {
                    return null == g && (b.mimeType = a),
                    this
                },
                statusCode: function(a) {
                    var b;
                    if (a)
                        if (g)
                            c.always(a[c.status]);
                        else
                            for (b in a)
                                n[b] = [n[b], a[b]];
                    return this
                },
                abort: function(b) {
                    var a = b || z;
                    return l && l.abort(a),
                    r(0, a),
                    this
                }
            };
            if (u.promise(c),
            b.url = ((q || b.url || M.href) + "").replace(bI, M.protocol + "//"),
            b.type = h.method || h.type || b.method || b.type,
            b.dataTypes = (b.dataType || "*").toLowerCase().match(m) || [""],
            null == b.crossDomain) {
                j = e.createElement("a");
                try {
                    j.href = b.url,
                    j.href = j.href,
                    b.crossDomain = ap.protocol + "//" + ap.host != j.protocol + "//" + j.host
                } catch (a) {
                    b.crossDomain = !0
                }
            }
            if (b.data && b.processData && "string" != typeof b.data && (b.data = a.param(b.data, b.traditional)),
            aN(aB, b, h, c),
            g)
                return c;
            for (s in (o = a.event && b.global) && 0 == a.active++ && a.event.trigger("ajaxStart"),
            b.type = b.type.toUpperCase(),
            b.hasContent = !bH.test(b.type),
            f = b.url.replace(bX, ""),
            b.hasContent ? b.data && b.processData && 0 === (b.contentType || "").indexOf("application/x-www-form-urlencoded") && (b.data = b.data.replace(bD, "+")) : (p = b.url.slice(f.length),
            b.data && (b.processData || "string" == typeof b.data) && (f += (ao.test(f) ? "&" : "?") + b.data,
            delete b.data),
            !1 === b.cache && (f = f.replace(bF, "$1"),
            p = (ao.test(f) ? "&" : "?") + "_=" + aC.guid++ + p),
            b.url = f + p),
            b.ifModified && (a.lastModified[f] && c.setRequestHeader("If-Modified-Since", a.lastModified[f]),
            a.etag[f] && c.setRequestHeader("If-None-Match", a.etag[f])),
            (b.data && b.hasContent && !1 !== b.contentType || h.contentType) && c.setRequestHeader("Content-Type", b.contentType),
            c.setRequestHeader("Accept", b.dataTypes[0] && b.accepts[b.dataTypes[0]] ? b.accepts[b.dataTypes[0]] + ("*" !== b.dataTypes[0] ? ", " + aD + "; q=0.01" : "") : b.accepts["*"]),
            b.headers)
                c.setRequestHeader(s, b.headers[s]);
            if (b.beforeSend && (!1 === b.beforeSend.call(i, c, b) || g))
                return c.abort();
            if (z = "abort",
            A.add(b.complete),
            c.done(b.success),
            c.fail(b.error),
            l = aN(ag, b, h, c)) {
                if (c.readyState = 1,
                o && t.trigger("ajaxSend", [c, b]),
                g)
                    return c;
                b.async && 0 < b.timeout && (v = d.setTimeout(function() {
                    c.abort("timeout")
                }, b.timeout));
                try {
                    g = !1,
                    l.send(x, r)
                } catch (a) {
                    if (g)
                        throw a;
                    r(-1, a)
                }
            } else
                r(-1, "No Transport");
            function r(e, r, s, x) {
                var j, q, p, k, m, h = r;
                g || (g = !0,
                v && d.clearTimeout(v),
                l = void 0,
                w = x || "",
                c.readyState = 0 < e ? 4 : 0,
                j = 200 <= e && e < 300 || 304 === e,
                s && (k = function(d, i, h) {
                    for (var e, b, c, g, f = d.contents, a = d.dataTypes; "*" === a[0]; )
                        a.shift(),
                        void 0 === e && (e = d.mimeType || i.getResponseHeader("Content-Type"));
                    if (e)
                        for (b in f)
                            if (f[b] && f[b].test(e)) {
                                a.unshift(b);
                                break
                            }
                    if (a[0]in h)
                        c = a[0];
                    else {
                        for (b in h) {
                            if (!a[0] || d.converters[b + " " + a[0]]) {
                                c = b;
                                break
                            }
                            g || (g = b)
                        }
                        c = c || g
                    }
                    if (c)
                        return c !== a[0] && a.unshift(c),
                        h[c]
                }(b, c, s)),
                !j && -1 < a.inArray("script", b.dataTypes) && a.inArray("json", b.dataTypes) < 0 && (b.converters["text script"] = function() {}
                ),
                k = function(c, d, j, k) {
                    var h, a, b, g, e, f = {}, i = c.dataTypes.slice();
                    if (i[1])
                        for (b in c.converters)
                            f[b.toLowerCase()] = c.converters[b];
                    for (a = i.shift(); a; )
                        if (c.responseFields[a] && (j[c.responseFields[a]] = d),
                        !e && k && c.dataFilter && (d = c.dataFilter(d, c.dataType)),
                        e = a,
                        a = i.shift())
                            if ("*" === a)
                                a = e;
                            else if ("*" !== e && e !== a) {
                                if (!(b = f[e + " " + a] || f["* " + a]))
                                    for (h in f)
                                        if ((g = h.split(" "))[1] === a && (b = f[e + " " + g[0]] || f["* " + g[0]])) {
                                            !0 === b ? b = f[h] : !0 !== f[h] && (a = g[0],
                                            i.unshift(g[1]));
                                            break
                                        }
                                if (!0 !== b)
                                    if (b && c.throws)
                                        d = b(d);
                                    else
                                        try {
                                            d = b(d)
                                        } catch (c) {
                                            return {
                                                state: "parsererror",
                                                error: b ? c : "No conversion from " + e + " to " + a
                                            }
                                        }
                            }
                    return {
                        state: "success",
                        data: d
                    }
                }(b, k, c, j),
                j ? (b.ifModified && ((m = c.getResponseHeader("Last-Modified")) && (a.lastModified[f] = m),
                (m = c.getResponseHeader("etag")) && (a.etag[f] = m)),
                204 === e || "HEAD" === b.type ? h = "nocontent" : 304 === e ? h = "notmodified" : (h = k.state,
                q = k.data,
                j = !(p = k.error))) : (p = h,
                !e && h || (h = "error",
                e < 0 && (e = 0))),
                c.status = e,
                c.statusText = (r || h) + "",
                j ? u.resolveWith(i, [q, h, c]) : u.rejectWith(i, [c, h, p]),
                c.statusCode(n),
                n = void 0,
                o && t.trigger(j ? "ajaxSuccess" : "ajaxError", [c, b, j ? q : p]),
                A.fireWith(i, [c, h]),
                o && (t.trigger("ajaxComplete", [c, b]),
                --a.active || a.event.trigger("ajaxStop")))
            }
            return c
        },
        getJSON: function(b, c, d) {
            return a.get(b, c, d, "json")
        },
        getScript: function(b, c) {
            return a.get(b, void 0, c, "script")
        }
    }),
    a.each(["get", "post"], function(d, b) {
        a[b] = function(e, d, f, g) {
            return c(d) && (g = g || f,
            f = d,
            d = void 0),
            a.ajax(a.extend({
                url: e,
                type: b,
                dataType: g,
                data: d,
                success: f
            }, a.isPlainObject(e) && e))
        }
    }),
    a.ajaxPrefilter(function(a) {
        var b;
        for (b in a.headers)
            "content-type" === b.toLowerCase() && (a.contentType = a.headers[b] || "")
    }),
    a._evalUrl = function(b, c, d) {
        return a.ajax({
            url: b,
            type: "GET",
            dataType: "script",
            cache: !0,
            async: !1,
            global: !1,
            converters: {
                "text script": function() {}
            },
            dataFilter: function(b) {
                a.globalEval(b, c, d)
            }
        })
    }
    ,
    a.fn.extend({
        wrapAll: function(b) {
            var d;
            return this[0] && (c(b) && (b = b.call(this[0])),
            d = a(b, this[0].ownerDocument).eq(0).clone(!0),
            this[0].parentNode && d.insertBefore(this[0]),
            d.map(function() {
                for (var a = this; a.firstElementChild; )
                    a = a.firstElementChild;
                return a
            }).append(this)),
            this
        },
        wrapInner: function(b) {
            return c(b) ? this.each(function(c) {
                a(this).wrapInner(b.call(this, c))
            }) : this.each(function() {
                var c = a(this)
                  , d = c.contents();
                d.length ? d.wrapAll(b) : c.append(b)
            })
        },
        wrap: function(b) {
            var d = c(b);
            return this.each(function(c) {
                a(this).wrapAll(d ? b.call(this, c) : b)
            })
        },
        unwrap: function(b) {
            return this.parent(b).not("body").each(function() {
                a(this).replaceWith(this.childNodes)
            }),
            this
        }
    }),
    a.expr.pseudos.hidden = function(b) {
        return !a.expr.pseudos.visible(b)
    }
    ,
    a.expr.pseudos.visible = function(a) {
        return !!(a.offsetWidth || a.offsetHeight || a.getClientRects().length)
    }
    ,
    a.ajaxSettings.xhr = function() {
        try {
            return new d.XMLHttpRequest
        } catch (a) {}
    }
    ,
    bQ = {
        0: 200,
        1223: 204
    },
    L = a.ajaxSettings.xhr(),
    f.cors = !!L && "withCredentials"in L,
    f.ajax = L = !!L,
    a.ajaxTransport(function(a) {
        var b, c;
        if (f.cors || L && !a.crossDomain)
            return {
                send: function(g, h) {
                    var f, e = a.xhr();
                    if (e.open(a.type, a.url, a.async, a.username, a.password),
                    a.xhrFields)
                        for (f in a.xhrFields)
                            e[f] = a.xhrFields[f];
                    for (f in a.mimeType && e.overrideMimeType && e.overrideMimeType(a.mimeType),
                    a.crossDomain || g["X-Requested-With"] || (g["X-Requested-With"] = "XMLHttpRequest"),
                    g)
                        e.setRequestHeader(f, g[f]);
                    b = function(a) {
                        return function() {
                            b && (b = c = e.onload = e.onerror = e.onabort = e.ontimeout = e.onreadystatechange = null,
                            "abort" === a ? e.abort() : "error" === a ? "number" != typeof e.status ? h(0, "error") : h(e.status, e.statusText) : h(bQ[e.status] || e.status, e.statusText, "text" !== (e.responseType || "text") || "string" != typeof e.responseText ? {
                                binary: e.response
                            } : {
                                text: e.responseText
                            }, e.getAllResponseHeaders()))
                        }
                    }
                    ,
                    e.onload = b(),
                    c = e.onerror = e.ontimeout = b("error"),
                    void 0 !== e.onabort ? e.onabort = c : e.onreadystatechange = function() {
                        4 === e.readyState && d.setTimeout(function() {
                            b && c()
                        })
                    }
                    ,
                    b = b("abort");
                    try {
                        e.send(a.hasContent && a.data || null)
                    } catch (a) {
                        if (b)
                            throw a
                    }
                },
                abort: function() {
                    b && b()
                }
            }
    }),
    a.ajaxPrefilter(function(a) {
        a.crossDomain && (a.contents.script = !1)
    }),
    a.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /\b(?:java|ecma)script\b/
        },
        converters: {
            "text script": function(b) {
                return a.globalEval(b),
                b
            }
        }
    }),
    a.ajaxPrefilter("script", function(a) {
        void 0 === a.cache && (a.cache = !1),
        a.crossDomain && (a.type = "GET")
    }),
    a.ajaxTransport("script", function(b) {
        var d, c;
        if (b.crossDomain || b.scriptAttrs)
            return {
                send: function(g, f) {
                    d = a("<script>").attr(b.scriptAttrs || {}).prop({
                        charset: b.scriptCharset,
                        src: b.url
                    }).on("load error", c = function(a) {
                        d.remove(),
                        c = null,
                        a && f("error" === a.type ? 404 : 200, a.type)
                    }
                    ),
                    e.head.appendChild(d[0])
                },
                abort: function() {
                    c && c()
                }
            }
    }),
    ba = [],
    am = /(=)\?(?=&|$)|\?\?/,
    a.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function() {
            var b = ba.pop() || a.expando + "_" + aC.guid++;
            return this[b] = !0,
            b
        }
    }),
    a.ajaxPrefilter("json jsonp", function(b, i, j) {
        var e, f, g, h = !1 !== b.jsonp && (am.test(b.url) ? "url" : "string" == typeof b.data && 0 === (b.contentType || "").indexOf("application/x-www-form-urlencoded") && am.test(b.data) && "data");
        if (h || "jsonp" === b.dataTypes[0])
            return e = b.jsonpCallback = c(b.jsonpCallback) ? b.jsonpCallback() : b.jsonpCallback,
            h ? b[h] = b[h].replace(am, "$1" + e) : !1 !== b.jsonp && (b.url += (ao.test(b.url) ? "&" : "?") + b.jsonp + "=" + e),
            b.converters["script json"] = function() {
                return g || a.error(e + " was not called"),
                g[0]
            }
            ,
            b.dataTypes[0] = "json",
            f = d[e],
            d[e] = function() {
                g = arguments
            }
            ,
            j.always(function() {
                void 0 === f ? a(d).removeProp(e) : d[e] = f,
                b[e] && (b.jsonpCallback = i.jsonpCallback,
                ba.push(e)),
                g && c(f) && f(g[0]),
                g = f = void 0
            }),
            "script"
    }),
    f.createHTMLDocument = ((a$ = e.implementation.createHTMLDocument("").body).innerHTML = "<form></form><form></form>",
    2 === a$.childNodes.length),
    a.parseHTML = function(g, b, h) {
        return "string" != typeof g ? [] : ("boolean" == typeof b && (h = b,
        b = !1),
        b || (f.createHTMLDocument ? ((i = (b = e.implementation.createHTMLDocument("")).createElement("base")).href = e.location.href,
        b.head.appendChild(i)) : b = e),
        c = !h && [],
        (d = aS.exec(g)) ? [b.createElement(d[1])] : (d = au([g], b, c),
        c && c.length && a(c).remove(),
        a.merge([], d.childNodes)));
        var i, d, c
    }
    ,
    a.fn.load = function(d, b, e) {
        var f, i, j, g = this, h = d.indexOf(" ");
        return -1 < h && (f = w(d.slice(h)),
        d = d.slice(0, h)),
        c(b) ? (e = b,
        b = void 0) : b && "object" == typeof b && (i = "POST"),
        0 < g.length && a.ajax({
            url: d,
            type: i || "GET",
            dataType: "html",
            data: b
        }).done(function(b) {
            j = arguments,
            g.html(f ? a("<div>").append(a.parseHTML(b)).find(f) : b)
        }).always(e && function(a, b) {
            g.each(function() {
                e.apply(this, j || [a.responseText, b, a])
            })
        }
        ),
        this
    }
    ,
    a.expr.pseudos.animated = function(b) {
        return a.grep(a.timers, function(a) {
            return b === a.elem
        }).length
    }
    ,
    a.offset = {
        setOffset: function(d, b, n) {
            var m, i, l, j, f, g, h = a.css(d, "position"), k = a(d), e = {};
            "static" === h && (d.style.position = "relative"),
            f = k.offset(),
            l = a.css(d, "top"),
            g = a.css(d, "left"),
            ("absolute" === h || "fixed" === h) && -1 < (l + g).indexOf("auto") ? (j = (m = k.position()).top,
            i = m.left) : (j = parseFloat(l) || 0,
            i = parseFloat(g) || 0),
            c(b) && (b = b.call(d, n, a.extend({}, f))),
            null != b.top && (e.top = b.top - f.top + j),
            null != b.left && (e.left = b.left - f.left + i),
            "using"in b ? b.using.call(d, e) : k.css(e)
        }
    },
    a.fn.extend({
        offset: function(e) {
            if (arguments.length)
                return void 0 === e ? this : this.each(function(b) {
                    a.offset.setOffset(this, e, b)
                });
            var c, d, b = this[0];
            return b ? b.getClientRects().length ? (c = b.getBoundingClientRect(),
            d = b.ownerDocument.defaultView,
            {
                top: c.top + d.pageYOffset,
                left: c.left + d.pageXOffset
            }) : {
                top: 0,
                left: 0
            } : void 0
        },
        position: function() {
            if (this[0]) {
                var b, d, e, c = this[0], f = {
                    top: 0,
                    left: 0
                };
                if ("fixed" === a.css(c, "position"))
                    d = c.getBoundingClientRect();
                else {
                    for (d = this.offset(),
                    e = c.ownerDocument,
                    b = c.offsetParent || e.documentElement; b && (b === e.body || b === e.documentElement) && "static" === a.css(b, "position"); )
                        b = b.parentNode;
                    b && b !== c && 1 === b.nodeType && ((f = a(b).offset()).top += a.css(b, "borderTopWidth", !0),
                    f.left += a.css(b, "borderLeftWidth", !0))
                }
                return {
                    top: d.top - f.top - a.css(c, "marginTop", !0),
                    left: d.left - f.left - a.css(c, "marginLeft", !0)
                }
            }
        },
        offsetParent: function() {
            return this.map(function() {
                for (var b = this.offsetParent; b && "static" === a.css(b, "position"); )
                    b = b.offsetParent;
                return b || t
            })
        }
    }),
    a.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    }, function(b, c) {
        var d = "pageYOffset" === c;
        a.fn[b] = function(a) {
            return o(this, function(b, f, e) {
                var a;
                if (C(b) ? a = b : 9 === b.nodeType && (a = b.defaultView),
                void 0 === e)
                    return a ? a[c] : b[f];
                a ? a.scrollTo(d ? a.pageXOffset : e, d ? e : a.pageYOffset) : b[f] = e
            }, b, a, arguments.length)
        }
    }),
    a.each(["top", "left"], function(c, b) {
        a.cssHooks[b] = aP(f.pixelPosition, function(d, c) {
            if (c)
                return c = N(d, b),
                ac.test(c) ? a(d).position()[b] + "px" : c
        })
    }),
    a.each({
        Height: "height",
        Width: "width"
    }, function(b, c) {
        a.each({
            padding: "inner" + b,
            content: c,
            "": "outer" + b
        }, function(d, e) {
            a.fn[e] = function(f, i) {
                var g = arguments.length && (d || "boolean" != typeof f)
                  , h = d || (!0 === f || !0 === i ? "margin" : "border");
                return o(this, function(c, f, g) {
                    var d;
                    return C(c) ? 0 === e.indexOf("outer") ? c["inner" + b] : c.document.documentElement["client" + b] : 9 === c.nodeType ? (d = c.documentElement,
                    Math.max(c.body["scroll" + b], d["scroll" + b], c.body["offset" + b], d["offset" + b], d["client" + b])) : void 0 === g ? a.css(c, f, h) : a.style(c, f, g, h)
                }, c, g ? f : void 0, g)
            }
        })
    }),
    a.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(c, b) {
        a.fn[b] = function(a) {
            return this.on(b, a)
        }
    }),
    a.fn.extend({
        bind: function(a, b, c) {
            return this.on(a, null, b, c)
        },
        unbind: function(a, b) {
            return this.off(a, null, b)
        },
        delegate: function(a, b, c, d) {
            return this.on(b, a, c, d)
        },
        undelegate: function(a, b, c) {
            return 1 === arguments.length ? this.off(a, "**") : this.off(b, a || "**", c)
        },
        hover: function(a, b) {
            return this.mouseenter(a).mouseleave(b || a)
        }
    }),
    a.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function(c, b) {
        a.fn[b] = function(a, c) {
            return 0 < arguments.length ? this.on(b, null, a, c) : this.trigger(b)
        }
    }),
    bV = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
    a.proxy = function(b, d) {
        var e, f, g;
        if ("string" == typeof d && (e = b[d],
        d = b,
        b = e),
        c(b))
            return f = r.call(arguments, 2),
            (g = function() {
                return b.apply(d || this, f.concat(r.call(arguments)))
            }
            ).guid = b.guid = b.guid || a.guid++,
            g
    }
    ,
    a.holdReady = function(b) {
        b ? a.readyWait++ : a.ready(!0)
    }
    ,
    a.isArray = Array.isArray,
    a.parseJSON = JSON.parse,
    a.nodeName = i,
    a.isFunction = c,
    a.isWindow = C,
    a.camelCase = n,
    a.type = z,
    a.now = Date.now,
    a.isNumeric = function(b) {
        var c = a.type(b);
        return ("number" === c || "string" === c) && !isNaN(b - parseFloat(b))
    }
    ,
    a.trim = function(a) {
        return null == a ? "" : (a + "").replace(bV, "")
    }
    ,
    "function" == typeof define && define.amd && define("jquery", [], function() {
        return a
    }),
    bW = d.jQuery,
    bl = d.$,
    a.noConflict = function(b) {
        return d.$ === a && (d.$ = bl),
        b && d.jQuery === a && (d.jQuery = bW),
        a
    }
    ,
    "undefined" == typeof bU && (d.jQuery = d.$ = a),
    a
}),
!function(a, b) {
    "object" == typeof exports && "undefined" != typeof module ? b(exports, require("jquery")) : "function" == typeof define && define.amd ? define(["exports", "jquery"], b) : b((a = "undefined" != typeof globalThis ? globalThis : a || self).bootstrap = {}, a.jQuery)
}(this, function(d, bs) {
    "use strict";
    var a, b, y, aV, r, aP, w, o, at, aN, N, aL, P, m, t, aG, M, aF, z, A, ay, ax, W, U, aj, ai, p, e, av, Q, J, aA, aB, aC, aE, j, n, aH, aI, aJ, aK, g, aM, K, aO, B, aQ, aR, aS, aT, k, aW, aX, aY, aZ, a_, a$, ba, i, s, bd, bh, bf, bg, aD, E, l, ap, R, ak, D, ag, v, bb, be, X, G;
    function br(a) {
        return a && "object" == typeof a && "default"in a ? a : {
            default: a
        }
    }
    a = br(bs);
    function bc(d, c) {
        for (var b = 0, a; b < c.length; b++)
            a = c[b],
            a.enumerable = a.enumerable || !1,
            a.configurable = !0,
            "value"in a && (a.writable = !0),
            Object.defineProperty(d, a.key, a)
    }
    function f(a, b, c) {
        return b && bc(a.prototype, b),
        c && bc(a, c),
        a
    }
    function c() {
        return (c = Object.assign || function(d) {
            for (var a = 1, b, c; a < arguments.length; a++) {
                b = arguments[a];
                for (c in b)
                    Object.prototype.hasOwnProperty.call(b, c) && (d[c] = b[c])
            }
            return d
        }
        ).apply(this, arguments)
    }
    function bq(d) {
        var e = this
          , c = !1;
        return a.default(this).one(b.TRANSITION_END, function() {
            c = !0
        }),
        setTimeout(function() {
            c || b.triggerTransitionEnd(e)
        }, d),
        this
    }
    b = {
        TRANSITION_END: "bsTransitionEnd",
        getUID: function(a) {
            do
                a += ~~(1e6 * Math.random());
            while (document.getElementById(a))return a
        },
        getSelectorFromElement: function(c) {
            var a = c.getAttribute("data-target"), b;
            (!a || "#" === a) && (b = c.getAttribute("href"),
            a = b && "#" !== b ? b.trim() : "");
            try {
                return document.querySelector(a) ? a : null
            } catch (a) {
                return null
            }
        },
        getTransitionDurationFromElement: function(d) {
            if (!d)
                return 0;
            var b = a.default(d).css("transition-duration")
              , c = a.default(d).css("transition-delay")
              , e = parseFloat(b)
              , f = parseFloat(c);
            return e || f ? (b = b.split(",")[0],
            c = c.split(",")[0],
            1e3 * (parseFloat(b) + parseFloat(c))) : 0
        },
        reflow: function(a) {
            return a.offsetHeight
        },
        triggerTransitionEnd: function(b) {
            a.default(b).trigger("transitionend")
        },
        supportsTransitionEnd: function() {
            return Boolean("transitionend")
        },
        isElement: function(a) {
            return (a[0] || a).nodeType
        },
        typeCheckConfig: function(h, i, f) {
            var c, g, d, e, a;
            for (c in f)
                if (Object.prototype.hasOwnProperty.call(f, c))
                    if (g = f[c],
                    d = i[c],
                    e = d && b.isElement(d) ? "element" : null === (a = d) || "undefined" == typeof a ? "" + a : {}.toString.call(a).match(/\s([a-z]+)/i)[1].toLowerCase(),
                    !new RegExp(g).test(e))
                        throw new Error(h.toUpperCase() + ': Option "' + c + '" provided type "' + e + '" but expected type "' + g + '".')
        },
        findShadowRoot: function(a) {
            if (!document.documentElement.attachShadow)
                return null;
            if ("function" == typeof a.getRootNode) {
                var c = a.getRootNode();
                return c instanceof ShadowRoot ? c : null
            }
            return a instanceof ShadowRoot ? a : a.parentNode ? b.findShadowRoot(a.parentNode) : null
        },
        jQueryDetection: function() {
            if ("undefined" == typeof a.default)
                throw new TypeError("Bootstrap's JavaScript requires jQuery. jQuery must be included before Bootstrap's JavaScript.");
            var b = a.default.fn.jquery.split(" ")[0].split(".");
            if (b[0] < 2 && b[1] < 9 || 1 === b[0] && 9 === b[1] && b[2] < 1 || b[0] >= 4)
                throw new Error("Bootstrap's JavaScript requires at least jQuery v1.9.1 but less than v4.0.0")
        }
    },
    b.jQueryDetection(),
    a.default.fn.emulateTransitionEnd = bq,
    a.default.event.special[b.TRANSITION_END] = {
        bindType: "transitionend",
        delegateType: "transitionend",
        handle: function(b) {
            if (a.default(b.target).is(this))
                return b.handleObj.handler.apply(this, arguments)
        }
    },
    y = "alert",
    aV = a.default.fn[y],
    r = function() {
        function c(a) {
            this._element = a
        }
        var d = c.prototype;
        return d.close = function(b) {
            var a = this._element;
            b && (a = this._getRootElement(b)),
            this._triggerCloseEvent(a).isDefaultPrevented() || this._removeElement(a)
        }
        ,
        d.dispose = function() {
            a.default.removeData(this._element, "bs.alert"),
            this._element = null
        }
        ,
        d._getRootElement = function(d) {
            var e = b.getSelectorFromElement(d)
              , c = !1;
            return e && (c = document.querySelector(e)),
            c || (c = a.default(d).closest(".alert")[0]),
            c
        }
        ,
        d._triggerCloseEvent = function(c) {
            var b = a.default.Event("close.bs.alert");
            return a.default(c).trigger(b),
            b
        }
        ,
        d._removeElement = function(c) {
            var d = this, e;
            a.default(c).removeClass("show"),
            a.default(c).hasClass("fade") ? (e = b.getTransitionDurationFromElement(c),
            a.default(c).one(b.TRANSITION_END, function(a) {
                return d._destroyElement(c, a)
            }).emulateTransitionEnd(e)) : this._destroyElement(c)
        }
        ,
        d._destroyElement = function(b) {
            a.default(b).detach().trigger("closed.bs.alert").remove()
        }
        ,
        c._jQueryInterface = function(b) {
            return this.each(function() {
                var e = a.default(this)
                  , d = e.data("bs.alert");
                d || (d = new c(this),
                e.data("bs.alert", d)),
                "close" === b && d[b](this)
            })
        }
        ,
        c._handleDismiss = function(a) {
            return function(b) {
                b && b.preventDefault(),
                a.close(this)
            }
        }
        ,
        f(c, null, [{
            key: "VERSION",
            get: function() {
                return "4.6.0"
            }
        }]),
        c
    }(),
    a.default(document).on("click.bs.alert.data-api", '[data-dismiss="alert"]', r._handleDismiss(new r)),
    a.default.fn[y] = r._jQueryInterface,
    a.default.fn[y].Constructor = r,
    a.default.fn[y].noConflict = function() {
        return a.default.fn[y] = aV,
        r._jQueryInterface
    }
    ,
    aP = a.default.fn.button,
    w = function() {
        function b(a) {
            this._element = a,
            this.shouldAvoidTriggerChange = !1
        }
        var c = b.prototype;
        return c.toggle = function() {
            var c = !0, d = !0, e = a.default(this._element).closest('[data-toggle="buttons"]')[0], b, f;
            e && (b = this._element.querySelector('input:not([type="hidden"])'),
            b && ("radio" === b.type && (b.checked && this._element.classList.contains("active") ? c = !1 : (f = e.querySelector(".active"),
            f && a.default(f).removeClass("active"))),
            c && ("checkbox" !== b.type && "radio" !== b.type || (b.checked = !this._element.classList.contains("active")),
            this.shouldAvoidTriggerChange || a.default(b).trigger("change")),
            b.focus(),
            d = !1)),
            this._element.hasAttribute("disabled") || this._element.classList.contains("disabled") || (d && this._element.setAttribute("aria-pressed", !this._element.classList.contains("active")),
            c && a.default(this._element).toggleClass("active"))
        }
        ,
        c.dispose = function() {
            a.default.removeData(this._element, "bs.button"),
            this._element = null
        }
        ,
        b._jQueryInterface = function(c, d) {
            return this.each(function() {
                var f = a.default(this)
                  , e = f.data("bs.button");
                e || (e = new b(this),
                f.data("bs.button", e)),
                e.shouldAvoidTriggerChange = d,
                "toggle" === c && e[c]()
            })
        }
        ,
        f(b, null, [{
            key: "VERSION",
            get: function() {
                return "4.6.0"
            }
        }]),
        b
    }(),
    a.default(document).on("click.bs.button.data-api", '[data-toggle^="button"]', function(c) {
        var b = c.target, e = b, d;
        if (a.default(b).hasClass("btn") || (b = a.default(b).closest(".btn")[0]),
        !b || b.hasAttribute("disabled") || b.classList.contains("disabled"))
            c.preventDefault();
        else {
            if (d = b.querySelector('input:not([type="hidden"])'),
            d && (d.hasAttribute("disabled") || d.classList.contains("disabled")))
                return void c.preventDefault();
            "INPUT" !== e.tagName && "LABEL" === b.tagName || w._jQueryInterface.call(a.default(b), "toggle", "INPUT" === e.tagName)
        }
    }).on("focus.bs.button.data-api blur.bs.button.data-api", '[data-toggle^="button"]', function(b) {
        var c = a.default(b.target).closest(".btn")[0];
        a.default(c).toggleClass("focus", /^focus(in)?$/.test(b.type))
    }),
    a.default(window).on("load.bs.button.data-api", function() {
        for (var a = [].slice.call(document.querySelectorAll('[data-toggle="buttons"] .btn')), b = 0, g = a.length, c, f, d, h, e; b < g; b++)
            c = a[b],
            f = c.querySelector('input:not([type="hidden"])'),
            f.checked || f.hasAttribute("checked") ? c.classList.add("active") : c.classList.remove("active");
        for (d = 0,
        h = (a = [].slice.call(document.querySelectorAll('[data-toggle="button"]'))).length; d < h; d++)
            e = a[d],
            "true" === e.getAttribute("aria-pressed") ? e.classList.add("active") : e.classList.remove("active")
    }),
    a.default.fn.button = w._jQueryInterface,
    a.default.fn.button.Constructor = w,
    a.default.fn.button.noConflict = function() {
        return a.default.fn.button = aP,
        w._jQueryInterface
    }
    ,
    o = "carousel",
    at = ".bs.carousel",
    aN = a.default.fn[o],
    N = {
        interval: 5e3,
        keyboard: !0,
        slide: !1,
        pause: "hover",
        wrap: !0,
        touch: !0
    },
    aL = {
        interval: "(number|boolean)",
        keyboard: "boolean",
        slide: "(boolean|string)",
        pause: "(string|boolean)",
        wrap: "boolean",
        touch: "boolean"
    },
    P = {
        TOUCH: "touch",
        PEN: "pen"
    },
    m = function() {
        function e(a, b) {
            this._items = null,
            this._interval = null,
            this._activeElement = null,
            this._isPaused = !1,
            this._isSliding = !1,
            this.touchTimeout = null,
            this.touchStartX = 0,
            this.touchDeltaX = 0,
            this._config = this._getConfig(b),
            this._element = a,
            this._indicatorsElement = this._element.querySelector(".carousel-indicators"),
            this._touchSupported = "ontouchstart"in document.documentElement || navigator.maxTouchPoints > 0,
            this._pointerEvent = Boolean(window.PointerEvent || window.MSPointerEvent),
            this._addEventListeners()
        }
        var d = e.prototype;
        return d.next = function() {
            this._isSliding || this._slide("next")
        }
        ,
        d.nextWhenVisible = function() {
            var b = a.default(this._element);
            !document.hidden && b.is(":visible") && "hidden" !== b.css("visibility") && this.next()
        }
        ,
        d.prev = function() {
            this._isSliding || this._slide("prev")
        }
        ,
        d.pause = function(a) {
            a || (this._isPaused = !0),
            this._element.querySelector(".carousel-item-next, .carousel-item-prev") && (b.triggerTransitionEnd(this._element),
            this.cycle(!0)),
            clearInterval(this._interval),
            this._interval = null
        }
        ,
        d.cycle = function(a) {
            a || (this._isPaused = !1),
            this._interval && (clearInterval(this._interval),
            this._interval = null),
            this._config.interval && !this._isPaused && (this._updateInterval(),
            this._interval = setInterval((document.visibilityState ? this.nextWhenVisible : this.next).bind(this), this._config.interval))
        }
        ,
        d.to = function(b) {
            var d = this, c, e;
            if (this._activeElement = this._element.querySelector(".active.carousel-item"),
            c = this._getItemIndex(this._activeElement),
            !(b > this._items.length - 1 || b < 0))
                if (this._isSliding)
                    a.default(this._element).one("slid.bs.carousel", function() {
                        return d.to(b)
                    });
                else {
                    if (c === b)
                        return this.pause(),
                        void this.cycle();
                    e = b > c ? "next" : "prev",
                    this._slide(e, this._items[b])
                }
        }
        ,
        d.dispose = function() {
            a.default(this._element).off(at),
            a.default.removeData(this._element, "bs.carousel"),
            this._items = null,
            this._config = null,
            this._element = null,
            this._interval = null,
            this._isPaused = null,
            this._isSliding = null,
            this._activeElement = null,
            this._indicatorsElement = null
        }
        ,
        d._getConfig = function(a) {
            return a = c({}, N, a),
            b.typeCheckConfig(o, a, aL),
            a
        }
        ,
        d._handleSwipe = function() {
            var a = Math.abs(this.touchDeltaX), b;
            a <= 40 || (b = a / this.touchDeltaX,
            this.touchDeltaX = 0,
            b > 0 && this.prev(),
            b < 0 && this.next())
        }
        ,
        d._addEventListeners = function() {
            var b = this;
            this._config.keyboard && a.default(this._element).on("keydown.bs.carousel", function(a) {
                return b._keydown(a)
            }),
            "hover" === this._config.pause && a.default(this._element).on("mouseenter.bs.carousel", function(a) {
                return b.pause(a)
            }).on("mouseleave.bs.carousel", function(a) {
                return b.cycle(a)
            }),
            this._config.touch && this._addTouchEventListeners()
        }
        ,
        d._addTouchEventListeners = function() {
            var b = this, c, d;
            this._touchSupported && (c = function(a) {
                b._pointerEvent && P[a.originalEvent.pointerType.toUpperCase()] ? b.touchStartX = a.originalEvent.clientX : b._pointerEvent || (b.touchStartX = a.originalEvent.touches[0].clientX)
            }
            ,
            d = function(a) {
                b._pointerEvent && P[a.originalEvent.pointerType.toUpperCase()] && (b.touchDeltaX = a.originalEvent.clientX - b.touchStartX),
                b._handleSwipe(),
                "hover" === b._config.pause && (b.pause(),
                b.touchTimeout && clearTimeout(b.touchTimeout),
                b.touchTimeout = setTimeout(function(a) {
                    return b.cycle(a)
                }, 500 + b._config.interval))
            }
            ,
            a.default(this._element.querySelectorAll(".carousel-item img")).on("dragstart.bs.carousel", function(a) {
                return a.preventDefault()
            }),
            this._pointerEvent ? (a.default(this._element).on("pointerdown.bs.carousel", function(a) {
                return c(a)
            }),
            a.default(this._element).on("pointerup.bs.carousel", function(a) {
                return d(a)
            }),
            this._element.classList.add("pointer-event")) : (a.default(this._element).on("touchstart.bs.carousel", function(a) {
                return c(a)
            }),
            a.default(this._element).on("touchmove.bs.carousel", function(a) {
                return function(a) {
                    a.originalEvent.touches && a.originalEvent.touches.length > 1 ? b.touchDeltaX = 0 : b.touchDeltaX = a.originalEvent.touches[0].clientX - b.touchStartX
                }(a)
            }),
            a.default(this._element).on("touchend.bs.carousel", function(a) {
                return d(a)
            })))
        }
        ,
        d._keydown = function(a) {
            if (!/input|textarea/i.test(a.target.tagName))
                switch (a.which) {
                case 37:
                    a.preventDefault(),
                    this.prev();
                    break;
                case 39:
                    a.preventDefault(),
                    this.next()
                }
        }
        ,
        d._getItemIndex = function(a) {
            return this._items = a && a.parentNode ? [].slice.call(a.parentNode.querySelectorAll(".carousel-item")) : [],
            this._items.indexOf(a)
        }
        ,
        d._getItemByDirection = function(a, c) {
            var e = "next" === a, f = "prev" === a, b = this._getItemIndex(c), g = this._items.length - 1, d;
            return (f && 0 === b || e && b === g) && !this._config.wrap ? c : (d = (b + ("prev" === a ? -1 : 1)) % this._items.length,
            -1 === d ? this._items[this._items.length - 1] : this._items[d])
        }
        ,
        d._triggerSlideEvent = function(b, d) {
            var e = this._getItemIndex(b)
              , f = this._getItemIndex(this._element.querySelector(".active.carousel-item"))
              , c = a.default.Event("slide.bs.carousel", {
                relatedTarget: b,
                direction: d,
                from: f,
                to: e
            });
            return a.default(this._element).trigger(c),
            c
        }
        ,
        d._setActiveIndicatorElement = function(d) {
            var c, b;
            this._indicatorsElement && (c = [].slice.call(this._indicatorsElement.querySelectorAll(".active")),
            a.default(c).removeClass("active"),
            b = this._indicatorsElement.children[this._getItemIndex(d)],
            b && a.default(b).addClass("active"))
        }
        ,
        d._updateInterval = function() {
            var a = this._activeElement || this._element.querySelector(".active.carousel-item"), b;
            a && (b = parseInt(a.getAttribute("data-interval"), 10),
            b ? (this._config.defaultInterval = this._config.defaultInterval || this._config.interval,
            this._config.interval = b) : this._config.interval = this._config.defaultInterval || this._config.interval)
        }
        ,
        d._slide = function(h, n) {
            var e, f, g, i = this, d = this._element.querySelector(".active.carousel-item"), m = this._getItemIndex(d), c = n || d && this._getItemByDirection(h, d), l = this._getItemIndex(c), j = Boolean(this._interval), k, o;
            "next" === h ? (e = "carousel-item-left",
            f = "carousel-item-next",
            g = "left") : (e = "carousel-item-right",
            f = "carousel-item-prev",
            g = "right"),
            c && a.default(c).hasClass("active") ? this._isSliding = !1 : !this._triggerSlideEvent(c, g).isDefaultPrevented() && d && c && (this._isSliding = !0,
            j && this.pause(),
            this._setActiveIndicatorElement(c),
            this._activeElement = c,
            k = a.default.Event("slid.bs.carousel", {
                relatedTarget: c,
                direction: g,
                from: m,
                to: l
            }),
            a.default(this._element).hasClass("slide") ? (a.default(c).addClass(f),
            b.reflow(c),
            a.default(d).addClass(e),
            a.default(c).addClass(e),
            o = b.getTransitionDurationFromElement(d),
            a.default(d).one(b.TRANSITION_END, function() {
                a.default(c).removeClass(e + " " + f).addClass("active"),
                a.default(d).removeClass("active " + f + " " + e),
                i._isSliding = !1,
                setTimeout(function() {
                    return a.default(i._element).trigger(k)
                }, 0)
            }).emulateTransitionEnd(o)) : (a.default(d).removeClass("active"),
            a.default(c).addClass("active"),
            this._isSliding = !1,
            a.default(this._element).trigger(k)),
            j && this.cycle())
        }
        ,
        e._jQueryInterface = function(b) {
            return this.each(function() {
                var d = a.default(this).data("bs.carousel"), f = c({}, N, a.default(this).data()), g;
                if ("object" == typeof b && (f = c({}, f, b)),
                g = "string" == typeof b ? b : f.slide,
                d || (d = new e(this,f),
                a.default(this).data("bs.carousel", d)),
                "number" == typeof b)
                    d.to(b);
                else if ("string" == typeof g) {
                    if ("undefined" == typeof d[g])
                        throw new TypeError('No method named "' + g + '"');
                    d[g]()
                } else
                    f.interval && f.ride && (d.pause(),
                    d.cycle())
            })
        }
        ,
        e._dataApiClickHandler = function(i) {
            var g = b.getSelectorFromElement(this), d, h, f;
            g && (d = a.default(g)[0],
            d && a.default(d).hasClass("carousel") && (h = c({}, a.default(d).data(), a.default(this).data()),
            f = this.getAttribute("data-slide-to"),
            f && (h.interval = !1),
            e._jQueryInterface.call(a.default(d), h),
            f && a.default(d).data("bs.carousel").to(f),
            i.preventDefault()))
        }
        ,
        f(e, null, [{
            key: "VERSION",
            get: function() {
                return "4.6.0"
            }
        }, {
            key: "Default",
            get: function() {
                return N
            }
        }]),
        e
    }(),
    a.default(document).on("click.bs.carousel.data-api", "[data-slide], [data-slide-to]", m._dataApiClickHandler),
    a.default(window).on("load.bs.carousel.data-api", function() {
        for (var c = [].slice.call(document.querySelectorAll('[data-ride="carousel"]')), b = 0, e = c.length, d; b < e; b++)
            d = a.default(c[b]),
            m._jQueryInterface.call(d, d.data())
    }),
    a.default.fn[o] = m._jQueryInterface,
    a.default.fn[o].Constructor = m,
    a.default.fn[o].noConflict = function() {
        return a.default.fn[o] = aN,
        m._jQueryInterface
    }
    ,
    t = "collapse",
    aG = a.default.fn[t],
    M = {
        toggle: !0,
        parent: ""
    },
    aF = {
        toggle: "boolean",
        parent: "(string|element)"
    },
    z = function() {
        function e(a, i) {
            var e, c, h, f, d, g;
            this._isTransitioning = !1,
            this._element = a,
            this._config = this._getConfig(i),
            this._triggerArray = [].slice.call(document.querySelectorAll('[data-toggle="collapse"][href="#' + a.id + '"],[data-toggle="collapse"][data-target="#' + a.id + '"]'));
            for (e = [].slice.call(document.querySelectorAll('[data-toggle="collapse"]')),
            c = 0,
            h = e.length; c < h; c++)
                f = e[c],
                d = b.getSelectorFromElement(f),
                g = [].slice.call(document.querySelectorAll(d)).filter(function(b) {
                    return b === a
                }),
                null !== d && g.length > 0 && (this._selector = d,
                this._triggerArray.push(f));
            this._parent = this._config.parent ? this._getParent() : null,
            this._config.parent || this._addAriaAndCollapsedClass(this._element, this._triggerArray),
            this._config.toggle && this.toggle()
        }
        var d = e.prototype;
        return d.toggle = function() {
            a.default(this._element).hasClass("show") ? this.hide() : this.show()
        }
        ,
        d.show = function() {
            var c, g, d = this, h, f, i, j;
            !this._isTransitioning && !a.default(this._element).hasClass("show") && (this._parent && 0 === (c = [].slice.call(this._parent.querySelectorAll(".show, .collapsing")).filter(function(a) {
                return "string" == typeof d._config.parent ? a.getAttribute("data-parent") === d._config.parent : a.classList.contains("collapse")
            })).length && (c = null),
            !(c && (g = a.default(c).not(this._selector).data("bs.collapse")) && g._isTransitioning)) && (h = a.default.Event("show.bs.collapse"),
            (a.default(this._element).trigger(h),
            !h.isDefaultPrevented()) && (c && (e._jQueryInterface.call(a.default(c).not(this._selector), "hide"),
            g || a.default(c).data("bs.collapse", null)),
            f = this._getDimension(),
            a.default(this._element).removeClass("collapse").addClass("collapsing"),
            this._element.style[f] = 0,
            this._triggerArray.length && a.default(this._triggerArray).removeClass("collapsed").attr("aria-expanded", !0),
            this.setTransitioning(!0),
            i = "scroll" + (f[0].toUpperCase() + f.slice(1)),
            j = b.getTransitionDurationFromElement(this._element),
            a.default(this._element).one(b.TRANSITION_END, function() {
                a.default(d._element).removeClass("collapsing").addClass("collapse show"),
                d._element.style[f] = "",
                d.setTransitioning(!1),
                a.default(d._element).trigger("shown.bs.collapse")
            }).emulateTransitionEnd(j),
            this._element.style[f] = this._element[i] + "px"))
        }
        ,
        d.hide = function() {
            var e = this, f, c, g, d, h, i, j;
            if (!this._isTransitioning && a.default(this._element).hasClass("show"))
                if (f = a.default.Event("hide.bs.collapse"),
                a.default(this._element).trigger(f),
                !f.isDefaultPrevented()) {
                    if (c = this._getDimension(),
                    this._element.style[c] = this._element.getBoundingClientRect()[c] + "px",
                    b.reflow(this._element),
                    a.default(this._element).addClass("collapsing").removeClass("collapse show"),
                    g = this._triggerArray.length,
                    g > 0)
                        for (d = 0; d < g; d++)
                            h = this._triggerArray[d],
                            i = b.getSelectorFromElement(h),
                            null !== i && (a.default([].slice.call(document.querySelectorAll(i))).hasClass("show") || a.default(h).addClass("collapsed").attr("aria-expanded", !1));
                    this.setTransitioning(!0),
                    this._element.style[c] = "",
                    j = b.getTransitionDurationFromElement(this._element),
                    a.default(this._element).one(b.TRANSITION_END, function() {
                        e.setTransitioning(!1),
                        a.default(e._element).removeClass("collapsing").addClass("collapse").trigger("hidden.bs.collapse")
                    }).emulateTransitionEnd(j)
                }
        }
        ,
        d.setTransitioning = function(a) {
            this._isTransitioning = a
        }
        ,
        d.dispose = function() {
            a.default.removeData(this._element, "bs.collapse"),
            this._config = null,
            this._parent = null,
            this._element = null,
            this._triggerArray = null,
            this._isTransitioning = null
        }
        ,
        d._getConfig = function(a) {
            return (a = c({}, M, a)).toggle = Boolean(a.toggle),
            b.typeCheckConfig(t, a, aF),
            a
        }
        ,
        d._getDimension = function() {
            return a.default(this._element).hasClass("width") ? "width" : "height"
        }
        ,
        d._getParent = function() {
            var c, d = this, f, g;
            return b.isElement(this._config.parent) ? (c = this._config.parent,
            "undefined" != typeof this._config.parent.jquery && (c = this._config.parent[0])) : c = document.querySelector(this._config.parent),
            f = '[data-toggle="collapse"][data-parent="' + this._config.parent + '"]',
            g = [].slice.call(c.querySelectorAll(f)),
            a.default(g).each(function(b, a) {
                d._addAriaAndCollapsedClass(e._getTargetFromElement(a), [a])
            }),
            c
        }
        ,
        d._addAriaAndCollapsedClass = function(d, b) {
            var c = a.default(d).hasClass("show");
            b.length && a.default(b).toggleClass("collapsed", !c).attr("aria-expanded", c)
        }
        ,
        e._getTargetFromElement = function(c) {
            var a = b.getSelectorFromElement(c);
            return a ? document.querySelector(a) : null
        }
        ,
        e._jQueryInterface = function(b) {
            return this.each(function() {
                var f = a.default(this)
                  , d = f.data("bs.collapse")
                  , g = c({}, M, f.data(), "object" == typeof b && b ? b : {});
                if (!d && g.toggle && "string" == typeof b && /show|hide/.test(b) && (g.toggle = !1),
                d || (d = new e(this,g),
                f.data("bs.collapse", d)),
                "string" == typeof b) {
                    if ("undefined" == typeof d[b])
                        throw new TypeError('No method named "' + b + '"');
                    d[b]()
                }
            })
        }
        ,
        f(e, null, [{
            key: "VERSION",
            get: function() {
                return "4.6.0"
            }
        }, {
            key: "Default",
            get: function() {
                return M
            }
        }]),
        e
    }(),
    a.default(document).on("click.bs.collapse.data-api", '[data-toggle="collapse"]', function(c) {
        "A" === c.currentTarget.tagName && c.preventDefault();
        var d = a.default(this)
          , e = b.getSelectorFromElement(this)
          , f = [].slice.call(document.querySelectorAll(e));
        a.default(f).each(function() {
            var b = a.default(this)
              , c = b.data("bs.collapse") ? "toggle" : d.data();
            z._jQueryInterface.call(b, c)
        })
    }),
    a.default.fn[t] = z._jQueryInterface,
    a.default.fn[t].Constructor = z,
    a.default.fn[t].noConflict = function() {
        return a.default.fn[t] = aG,
        z._jQueryInterface
    }
    ,
    A = "undefined" != typeof window && "undefined" != typeof document && "undefined" != typeof navigator,
    ay = function() {
        for (var b = ["Edge", "Trident", "Firefox"], a = 0; a < b.length; a += 1)
            if (A && navigator.userAgent.indexOf(b[a]) >= 0)
                return 1;
        return 0
    }(),
    ax = A && window.Promise ? function(b) {
        var a = !1;
        return function() {
            a || (a = !0,
            window.Promise.resolve().then(function() {
                a = !1,
                b()
            }))
        }
    }
    : function(b) {
        var a = !1;
        return function() {
            a || (a = !0,
            setTimeout(function() {
                a = !1,
                b()
            }, ay))
        }
    }
    ;
    function au(a) {
        return a && "[object Function]" === {}.toString.call(a)
    }
    function q(a, b) {
        if (1 !== a.nodeType)
            return [];
        var c = a.ownerDocument.defaultView.getComputedStyle(a, null);
        return b ? c[b] : c
    }
    function _(a) {
        return "HTML" === a.nodeName ? a : a.parentNode || a.host
    }
    function F(a) {
        if (!a)
            return document.body;
        switch (a.nodeName) {
        case "HTML":
        case "BODY":
            return a.ownerDocument.body;
        case "#document":
            return a.body
        }
        var b = q(a)
          , c = b.overflow
          , d = b.overflowX
          , e = b.overflowY;
        return /(auto|scroll|overlay)/.test(c + e + d) ? a : F(_(a))
    }
    function ar(a) {
        return a && a.referenceNode ? a.referenceNode : a
    }
    W = A && !(!window.MSInputMethodContext || !document.documentMode),
    U = A && /MSIE 10/.test(navigator.userAgent);
    function u(a) {
        return 11 === a ? W : 10 === a ? U : W || U
    }
    function C(b) {
        var d, a, c;
        if (!b)
            return document.documentElement;
        for (d = u(10) ? document.body : null,
        a = b.offsetParent || null; a === d && b.nextElementSibling; )
            a = (b = b.nextElementSibling).offsetParent;
        return c = a && a.nodeName,
        c && "BODY" !== c && "HTML" !== c ? -1 !== ["TH", "TD", "TABLE"].indexOf(a.nodeName) && "static" === q(a, "position") ? C(a) : a : b ? b.ownerDocument.documentElement : document.documentElement
    }
    function O(a) {
        return null !== a.parentNode ? O(a.parentNode) : a
    }
    function I(a, b) {
        var i, f, g, d, e, h, c, j;
        return a && a.nodeType && b && b.nodeType ? (i = a.compareDocumentPosition(b) & Node.DOCUMENT_POSITION_FOLLOWING,
        f = i ? a : b,
        g = i ? b : a,
        d = document.createRange(),
        d.setStart(f, 0),
        d.setEnd(g, 0),
        c = d.commonAncestorContainer,
        a !== c && b !== c || f.contains(g)) ? "BODY" === (h = (e = c).nodeName) || "HTML" !== h && C(e.firstElementChild) !== e ? C(c) : c : (j = O(a),
        j.host ? I(j.host, b) : I(a, O(b).host)) : document.documentElement
    }
    function x(a) {
        var d = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "top", b = "top" === d ? "scrollTop" : "scrollLeft", c = a.nodeName, e, f;
        return "BODY" === c || "HTML" === c ? (e = a.ownerDocument.documentElement,
        f = a.ownerDocument.scrollingElement || e,
        f[b]) : a[b]
    }
    function bp(a, c) {
        var f = arguments.length > 2 && void 0 !== arguments[2] && arguments[2]
          , d = x(c, "top")
          , e = x(c, "left")
          , b = f ? -1 : 1;
        return a.top += d * b,
        a.bottom += d * b,
        a.left += e * b,
        a.right += e * b,
        a
    }
    function aq(a, c) {
        var b = "x" === c ? "Left" : "Top"
          , d = "Left" === b ? "Right" : "Bottom";
        return parseFloat(a["border" + b + "Width"]) + parseFloat(a["border" + d + "Width"])
    }
    function an(a, c, b, d) {
        return Math.max(c["offset" + a], c["scroll" + a], b["client" + a], b["offset" + a], b["scroll" + a], u(10) ? parseInt(b["offset" + a]) + parseInt(d["margin" + ("Height" === a ? "Top" : "Left")]) + parseInt(d["margin" + ("Height" === a ? "Bottom" : "Right")]) : 0)
    }
    function am(b) {
        var c = b.body
          , a = b.documentElement
          , d = u(10) && getComputedStyle(a);
        return {
            height: an("Height", c, a, d),
            width: an("Width", c, a, d)
        }
    }
    aj = function(a, b) {
        if (!(a instanceof b))
            throw new TypeError("Cannot call a class as a function")
    }
    ,
    ai = function() {
        function a(d, c) {
            for (var b = 0, a; b < c.length; b++)
                a = c[b],
                a.enumerable = a.enumerable || !1,
                a.configurable = !0,
                "value"in a && (a.writable = !0),
                Object.defineProperty(d, a.key, a)
        }
        return function(b, c, d) {
            return c && a(b.prototype, c),
            d && a(b, d),
            b
        }
    }(),
    p = function(a, b, c) {
        return b in a ? Object.defineProperty(a, b, {
            value: c,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : a[b] = c,
        a
    }
    ,
    e = Object.assign || function(d) {
        for (var a = 1, b, c; a < arguments.length; a++) {
            b = arguments[a];
            for (c in b)
                Object.prototype.hasOwnProperty.call(b, c) && (d[c] = b[c])
        }
        return d
    }
    ;
    function h(a) {
        return e({}, a, {
            right: a.left + a.width,
            bottom: a.top + a.height
        })
    }
    function Y(b) {
        var a = {}, g, i, c, f, k, l, d, e, j;
        try {
            u(10) ? (a = b.getBoundingClientRect(),
            g = x(b, "top"),
            i = x(b, "left"),
            a.top += g,
            a.left += i,
            a.bottom += g,
            a.right += i) : a = b.getBoundingClientRect()
        } catch (a) {}
        return c = {
            left: a.left,
            top: a.top,
            width: a.right - a.left,
            height: a.bottom - a.top
        },
        f = "HTML" === b.nodeName ? am(b.ownerDocument) : {},
        k = f.width || b.clientWidth || c.width,
        l = f.height || b.clientHeight || c.height,
        d = b.offsetWidth - k,
        e = b.offsetHeight - l,
        (d || e) && (j = q(b),
        d -= aq(j, "x"),
        e -= aq(j, "y"),
        c.width -= d,
        c.height -= e),
        h(c)
    }
    function Z(o, b) {
        var n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2], m = u(10), l = "HTML" === b.nodeName, d = Y(o), c = Y(b), i = F(o), e = q(b), k = parseFloat(e.borderTopWidth), g = parseFloat(e.borderLeftWidth), a, j, f;
        return n && l && (c.top = Math.max(c.top, 0),
        c.left = Math.max(c.left, 0)),
        a = h({
            top: d.top - c.top - k,
            left: d.left - c.left - g,
            width: d.width,
            height: d.height
        }),
        (a.marginTop = 0,
        a.marginLeft = 0,
        !m && l) && (j = parseFloat(e.marginTop),
        f = parseFloat(e.marginLeft),
        a.top -= k - j,
        a.bottom -= k - j,
        a.left -= g - f,
        a.right -= g - f,
        a.marginTop = j,
        a.marginLeft = f),
        (m && !n ? b.contains(i) : b === i && "BODY" !== i.nodeName) && (a = bp(a, b)),
        a
    }
    function bo(c) {
        var d = arguments.length > 1 && void 0 !== arguments[1] && arguments[1]
          , a = c.ownerDocument.documentElement
          , b = Z(c, a)
          , e = Math.max(a.clientWidth, window.innerWidth || 0)
          , f = Math.max(a.clientHeight, window.innerHeight || 0)
          , g = d ? 0 : x(a)
          , i = d ? 0 : x(a, "left")
          , j = {
            top: g - b.top + b.marginTop,
            left: i - b.left + b.marginLeft,
            width: e,
            height: f
        };
        return h(j)
    }
    function ac(a) {
        var b = a.nodeName, c;
        return !("BODY" === b || "HTML" === b) && ("fixed" === q(a, "position") || (c = _(a),
        !!c && ac(c)))
    }
    function ab(b) {
        if (!b || !b.parentElement || u())
            return document.documentElement;
        for (var a = b.parentElement; a && "none" === q(a, "transform"); )
            a = a.parentElement;
        return a || document.documentElement
    }
    function V(d, j, b, f) {
        var h = arguments.length > 4 && void 0 !== arguments[4] && arguments[4], a = {
            top: 0,
            left: 0
        }, i = h ? ab(d) : I(d, ar(j)), e, c, k, l, m, g;
        return "viewport" === f ? a = bo(i, h) : (e = void 0,
        "scrollParent" === f ? "BODY" === (e = F(_(j))).nodeName && (e = d.ownerDocument.documentElement) : e = "window" === f ? d.ownerDocument.documentElement : f,
        c = Z(e, i, h),
        "HTML" !== e.nodeName || ac(i) ? a = c : (k = am(d.ownerDocument),
        l = k.height,
        m = k.width,
        a.top += c.top - c.marginTop,
        a.bottom = l + c.top,
        a.left += c.left - c.marginLeft,
        a.right = m + c.left)),
        g = "number" == typeof (b = b || 0),
        a.left += g ? b : b.left || 0,
        a.top += g ? b : b.top || 0,
        a.right -= g ? b : b.right || 0,
        a.bottom -= g ? b : b.bottom || 0,
        a
    }
    function bn(a) {
        return a.width * a.height
    }
    function ad(d, b, c, k, j) {
        var m = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0, a, f, i, g, l, h;
        return -1 === d.indexOf("auto") ? d : (a = V(c, k, m, j),
        f = {
            top: {
                width: a.width,
                height: b.top - a.top
            },
            right: {
                width: a.right - b.right,
                height: a.height
            },
            bottom: {
                width: a.width,
                height: a.bottom - b.bottom
            },
            left: {
                width: b.left - a.left,
                height: a.height
            }
        },
        i = Object.keys(f).map(function(a) {
            return e({
                key: a
            }, f[a], {
                area: bn(f[a])
            })
        }).sort(function(a, b) {
            return b.area - a.area
        }),
        g = i.filter(function(a) {
            var b = a.width
              , d = a.height;
            return b >= c.clientWidth && d >= c.clientHeight
        }),
        l = g.length > 0 ? g[0].key : i[0].key,
        h = d.split("-")[1],
        l + (h ? "-" + h : ""))
    }
    function ae(e, a, b) {
        var c = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null
          , d = c ? ab(a) : I(a, ar(b));
        return Z(b, d, c)
    }
    function af(a) {
        var b = a.ownerDocument.defaultView.getComputedStyle(a)
          , c = parseFloat(b.marginTop || 0) + parseFloat(b.marginBottom || 0)
          , d = parseFloat(b.marginLeft || 0) + parseFloat(b.marginRight || 0);
        return {
            width: a.offsetWidth + d,
            height: a.offsetHeight + c
        }
    }
    function L(a) {
        var b = {
            left: "right",
            right: "left",
            bottom: "top",
            top: "bottom"
        };
        return a.replace(/left|right|bottom|top/g, function(a) {
            return b[a]
        })
    }
    function ah(i, a, b) {
        b = b.split("-")[0];
        var c = af(i)
          , f = {
            width: c.width,
            height: c.height
        }
          , d = -1 !== ["right", "left"].indexOf(b)
          , g = d ? "top" : "left"
          , e = d ? "left" : "top"
          , h = d ? "height" : "width"
          , j = d ? "width" : "height";
        return f[g] = a[g] + a[h] / 2 - c[h] / 2,
        f[e] = b === e ? a[e] - c[j] : a[L(e)],
        f
    }
    function H(a, b) {
        return Array.prototype.find ? a.find(b) : a.filter(b)[0]
    }
    function aa(b, a, c) {
        return (void 0 === c ? b : b.slice(0, function(a, b, c) {
            if (Array.prototype.findIndex)
                return a.findIndex(function(a) {
                    return a[b] === c
                });
            var d = H(a, function(a) {
                return a[b] === c
            });
            return a.indexOf(d)
        }(b, "name", c))).forEach(function(b) {
            b.function && console.warn("`modifier.function` is deprecated, use `modifier.fn`!");
            var c = b.function || b.fn;
            b.enabled && au(c) && (a.offsets.popper = h(a.offsets.popper),
            a.offsets.reference = h(a.offsets.reference),
            a = c(a, b))
        }),
        a
    }
    function bm() {
        if (!this.state.isDestroyed) {
            var a = {
                instance: this,
                styles: {},
                arrowStyles: {},
                attributes: {},
                flipped: !1,
                offsets: {}
            };
            a.offsets.reference = ae(this.state, this.popper, this.reference, this.options.positionFixed),
            a.placement = ad(this.options.placement, a.offsets.reference, this.popper, this.reference, this.options.modifiers.flip.boundariesElement, this.options.modifiers.flip.padding),
            a.originalPlacement = a.placement,
            a.positionFixed = this.options.positionFixed,
            a.offsets.popper = ah(this.popper, a.offsets.reference, a.placement),
            a.offsets.popper.position = this.options.positionFixed ? "fixed" : "absolute",
            a = aa(this.modifiers, a),
            this.state.isCreated ? this.options.onUpdate(a) : (this.state.isCreated = !0,
            this.options.onCreate(a))
        }
    }
    function al(a, b) {
        return a.some(function(a) {
            var c = a.name;
            return a.enabled && c === b
        })
    }
    function S(a) {
        for (var c = [!1, "ms", "Webkit", "Moz", "O"], f = a.charAt(0).toUpperCase() + a.slice(1), b = 0, d, e; b < c.length; b++)
            if (d = c[b],
            e = d ? "" + d + f : a,
            "undefined" != typeof document.body.style[e])
                return e;
        return null
    }
    function bl() {
        return this.state.isDestroyed = !0,
        al(this.modifiers, "applyStyle") && (this.popper.removeAttribute("x-placement"),
        this.popper.style.position = "",
        this.popper.style.top = "",
        this.popper.style.left = "",
        this.popper.style.right = "",
        this.popper.style.bottom = "",
        this.popper.style.willChange = "",
        this.popper.style[S("transform")] = ""),
        this.disableEventListeners(),
        this.options.removeOnDestroy && this.popper.parentNode.removeChild(this.popper),
        this
    }
    function ao(b) {
        var a = b.ownerDocument;
        return a ? a.defaultView : window
    }
    function bk(b, e, a, d) {
        a.updateBound = d,
        ao(b).addEventListener("resize", a.updateBound, {
            passive: !0
        });
        var c = F(b);
        return function g(b, c, d, e) {
            var f = "BODY" === b.nodeName
              , a = f ? b.ownerDocument.defaultView : b;
            a.addEventListener(c, d, {
                passive: !0
            }),
            f || g(F(a.parentNode), c, d, e),
            e.push(a)
        }(c, "scroll", a.updateBound, a.scrollParents),
        a.scrollElement = c,
        a.eventsEnabled = !0,
        a
    }
    function bj() {
        this.state.eventsEnabled || (this.state = bk(this.reference, this.options, this.state, this.scheduleUpdate))
    }
    function bi() {
        var b, a;
        this.state.eventsEnabled && (cancelAnimationFrame(this.scheduleUpdate),
        this.state = (b = this.reference,
        a = this.state,
        ao(b).removeEventListener("resize", a.updateBound),
        a.scrollParents.forEach(function(b) {
            b.removeEventListener("scroll", a.updateBound)
        }),
        a.updateBound = null,
        a.scrollParents = [],
        a.scrollElement = null,
        a.eventsEnabled = !1,
        a))
    }
    function $(a) {
        return "" !== a && !isNaN(parseFloat(a)) && isFinite(a)
    }
    function T(b, a) {
        Object.keys(a).forEach(function(c) {
            var d = "";
            -1 !== ["width", "height", "top", "right", "bottom", "left"].indexOf(c) && $(a[c]) && (d = "px"),
            b.style[c] = a[c] + d
        })
    }
    av = A && /Firefox/i.test(navigator.userAgent);
    function aw(a, b, c) {
        var d = H(a, function(a) {
            return a.name === b
        }), e = !!d && a.some(function(a) {
            return a.name === c && a.enabled && a.order < d.order
        }), f, g;
        return e || (f = "`" + b + "`",
        g = "`" + c + "`",
        console.warn(g + " modifier is required by " + f + " modifier in order to work, be sure to include it before " + f + "!")),
        e
    }
    Q = ["auto-start", "auto", "auto-end", "top-start", "top", "top-end", "right-start", "right", "right-end", "bottom-end", "bottom", "bottom-start", "left-end", "left", "left-start"],
    J = Q.slice(3);
    function az(c) {
        var d = arguments.length > 1 && void 0 !== arguments[1] && arguments[1]
          , a = J.indexOf(c)
          , b = J.slice(a + 1).concat(J.slice(0, a));
        return d ? b.reverse() : b
    }
    aA = "flip",
    aB = "clockwise",
    aC = "counterclockwise";
    function bt(g, i, j, k) {
        var e = [0, 0], f = -1 !== ["right", "left"].indexOf(k), a = g.split(/(\+|\-)/).map(function(a) {
            return a.trim()
        }), b = a.indexOf(H(a, function(a) {
            return -1 !== a.search(/,|\s/)
        })), c, d;
        return a[b] && -1 === a[b].indexOf(",") && console.warn("Offsets separated by white space(s) are deprecated, use a comma (,) instead."),
        c = /\s*,\s*|\s+/,
        d = -1 !== b ? [a.slice(0, b).concat([a[b].split(c)[0]]), [a[b].split(c)[1]].concat(a.slice(b + 1))] : [a],
        (d = d.map(function(b, c) {
            var d = (1 === c ? !f : f) ? "height" : "width"
              , a = !1;
            return b.reduce(function(b, c) {
                return "" === b[b.length - 1] && -1 !== ["+", "-"].indexOf(c) ? (b[b.length - 1] = c,
                a = !0,
                b) : a ? (b[b.length - 1] += c,
                a = !1,
                b) : b.concat(c)
            }, []).map(function(a) {
                return function(e, i, f, g) {
                    var d = e.match(/((?:\-|\+)?\d*\.?\d*)(.*)/), b = +d[1], a = d[2], c;
                    if (!b)
                        return e;
                    if (0 === a.indexOf("%")) {
                        switch (c = void 0,
                        a) {
                        case "%p":
                            c = f;
                            break;
                        case "%":
                        case "%r":
                        default:
                            c = g
                        }
                        return h(c)[i] / 100 * b
                    }
                    return "vh" === a || "vw" === a ? ("vh" === a ? Math.max(document.documentElement.clientHeight, window.innerHeight || 0) : Math.max(document.documentElement.clientWidth, window.innerWidth || 0)) / 100 * b : b
                }(a, d, i, j)
            })
        })).forEach(function(a, b) {
            a.forEach(function(c, d) {
                $(c) && (e[b] += c * ("-" === a[d - 1] ? -1 : 1))
            })
        }),
        e
    }
    aE = {
        placement: "bottom",
        positionFixed: !1,
        eventsEnabled: !0,
        removeOnDestroy: !1,
        onCreate: function() {},
        onUpdate: function() {},
        modifiers: {
            shift: {
                order: 100,
                enabled: !0,
                fn: function(a) {
                    var d = a.placement, k = d.split("-")[0], f = d.split("-")[1], g, c, h, i, b, j, l;
                    return f && (g = a.offsets,
                    c = g.reference,
                    h = g.popper,
                    i = -1 !== ["bottom", "top"].indexOf(k),
                    b = i ? "left" : "top",
                    j = i ? "width" : "height",
                    l = {
                        start: p({}, b, c[b]),
                        end: p({}, b, c[b] + c[j] - h[j])
                    },
                    a.offsets.popper = e({}, h, l[f])),
                    a
                }
            },
            offset: {
                order: 200,
                enabled: !0,
                fn: function(d, i) {
                    var e = i.offset
                      , g = d.placement
                      , f = d.offsets
                      , a = f.popper
                      , h = f.reference
                      , c = g.split("-")[0]
                      , b = void 0;
                    return b = $(+e) ? [+e, 0] : bt(e, a, h, c),
                    "left" === c ? (a.top += b[0],
                    a.left -= b[1]) : "right" === c ? (a.top += b[0],
                    a.left += b[1]) : "top" === c ? (a.left += b[0],
                    a.top -= b[1]) : "bottom" === c && (a.left += b[0],
                    a.top += b[1]),
                    d.popper = a,
                    d
                },
                offset: 0
            },
            preventOverflow: {
                order: 300,
                enabled: !0,
                fn: function(b, d) {
                    var g = d.boundariesElement || C(b.instance.popper), h, c, i, j, k, f, l, a, m;
                    return b.instance.reference === g && (g = C(g)),
                    h = S("transform"),
                    c = b.instance.popper.style,
                    i = c.top,
                    j = c.left,
                    k = c[h],
                    c.top = "",
                    c.left = "",
                    c[h] = "",
                    f = V(b.instance.popper, b.instance.reference, d.padding, g, b.positionFixed),
                    c.top = i,
                    c.left = j,
                    c[h] = k,
                    d.boundaries = f,
                    l = d.priority,
                    a = b.offsets.popper,
                    m = {
                        primary: function(b) {
                            var c = a[b];
                            return a[b] < f[b] && !d.escapeWithReference && (c = Math.max(a[b], f[b])),
                            p({}, b, c)
                        },
                        secondary: function(b) {
                            var c = "right" === b ? "left" : "top"
                              , e = a[c];
                            return a[b] > f[b] && !d.escapeWithReference && (e = Math.min(a[c], f[b] - ("right" === b ? a.width : a.height))),
                            p({}, c, e)
                        }
                    },
                    l.forEach(function(b) {
                        var c = -1 !== ["left", "top"].indexOf(b) ? "primary" : "secondary";
                        a = e({}, a, m[c](b))
                    }),
                    b.offsets.popper = a,
                    b
                },
                priority: ["left", "right", "top", "bottom"],
                padding: 5,
                boundariesElement: "scrollParent"
            },
            keepTogether: {
                order: 400,
                enabled: !0,
                fn: function(a) {
                    var h = a.offsets
                      , g = h.popper
                      , c = h.reference
                      , i = a.placement.split("-")[0]
                      , d = Math.floor
                      , f = -1 !== ["top", "bottom"].indexOf(i)
                      , e = f ? "right" : "bottom"
                      , b = f ? "left" : "top"
                      , j = f ? "width" : "height";
                    return g[e] < d(c[b]) && (a.offsets.popper[b] = d(c[b]) - g[j]),
                    g[b] > d(c[e]) && (a.offsets.popper[b] = d(c[e])),
                    a
                }
            },
            arrow: {
                order: 500,
                enabled: !0,
                fn: function(a, s) {
                    var j, d, w, n, f, e, g, k, l, b, r, i, c, t, o, u, v, m;
                    if (!aw(a.instance.modifiers, "arrow", "keepTogether"))
                        return a;
                    if (d = s.element,
                    "string" == typeof d) {
                        if (!(d = a.instance.popper.querySelector(d)))
                            return a
                    } else if (!a.instance.popper.contains(d))
                        return console.warn("WARNING: `arrow.element` must be child of its popper element!"),
                        a;
                    return w = a.placement.split("-")[0],
                    n = a.offsets,
                    f = n.popper,
                    e = n.reference,
                    g = -1 !== ["left", "right"].indexOf(w),
                    k = g ? "height" : "width",
                    l = g ? "Top" : "Left",
                    b = l.toLowerCase(),
                    r = g ? "left" : "top",
                    i = g ? "bottom" : "right",
                    c = af(d)[k],
                    e[i] - c < f[b] && (a.offsets.popper[b] -= f[b] - (e[i] - c)),
                    e[b] + c > f[i] && (a.offsets.popper[b] += e[b] + c - f[i]),
                    a.offsets.popper = h(a.offsets.popper),
                    t = e[b] + e[k] / 2 - c / 2,
                    o = q(a.instance.popper),
                    u = parseFloat(o["margin" + l]),
                    v = parseFloat(o["border" + l + "Width"]),
                    m = t - a.offsets.popper[b] - u - v,
                    m = Math.max(Math.min(f[k] - c, m), 0),
                    a.arrowElement = d,
                    a.offsets.arrow = (p(j = {}, b, Math.round(m)),
                    p(j, r, ""),
                    j),
                    a
                },
                element: "[x-arrow]"
            },
            flip: {
                order: 600,
                enabled: !0,
                fn: function(a, f) {
                    if (al(a.instance.modifiers, "inner"))
                        return a;
                    if (a.flipped && a.placement === a.originalPlacement)
                        return a;
                    var g = V(a.instance.popper, a.instance.reference, f.padding, f.boundariesElement, a.positionFixed)
                      , b = a.placement.split("-")[0]
                      , h = L(b)
                      , c = a.placement.split("-")[1] || ""
                      , d = [];
                    switch (f.behavior) {
                    case aA:
                        d = [b, h];
                        break;
                    case aB:
                        d = az(b);
                        break;
                    case aC:
                        d = az(b, !0);
                        break;
                    default:
                        d = f.behavior
                    }
                    return d.forEach(function(w, t) {
                        if (b !== w || d.length === t + 1)
                            return a;
                        b = a.placement.split("-")[0],
                        h = L(b);
                        var k = a.offsets.popper
                          , l = a.offsets.reference
                          , i = Math.floor
                          , r = "left" === b && i(k.right) > i(l.left) || "right" === b && i(k.left) < i(l.right) || "top" === b && i(k.bottom) > i(l.top) || "bottom" === b && i(k.top) < i(l.bottom)
                          , o = i(k.left) < i(g.left)
                          , p = i(k.right) > i(g.right)
                          , m = i(k.top) < i(g.top)
                          , n = i(k.bottom) > i(g.bottom)
                          , s = "left" === b && o || "right" === b && p || "top" === b && m || "bottom" === b && n
                          , j = -1 !== ["top", "bottom"].indexOf(b)
                          , u = !!f.flipVariations && (j && "start" === c && o || j && "end" === c && p || !j && "start" === c && m || !j && "end" === c && n)
                          , v = !!f.flipVariationsByContent && (j && "start" === c && p || j && "end" === c && o || !j && "start" === c && n || !j && "end" === c && m)
                          , q = u || v;
                        (r || s || q) && (a.flipped = !0,
                        (r || s) && (b = d[t + 1]),
                        q && (c = function(a) {
                            return "end" === a ? "start" : "start" === a ? "end" : a
                        }(c)),
                        a.placement = b + (c ? "-" + c : ""),
                        a.offsets.popper = e({}, a.offsets.popper, ah(a.instance.popper, a.offsets.reference, a.placement)),
                        a = aa(a.instance.modifiers, a, "flip"))
                    }),
                    a
                },
                behavior: "flip",
                padding: 5,
                boundariesElement: "viewport",
                flipVariations: !1,
                flipVariationsByContent: !1
            },
            inner: {
                order: 700,
                enabled: !1,
                fn: function(a) {
                    var d = a.placement
                      , b = d.split("-")[0]
                      , e = a.offsets
                      , c = e.popper
                      , g = e.reference
                      , f = -1 !== ["left", "right"].indexOf(b)
                      , i = -1 === ["top", "left"].indexOf(b);
                    return c[f ? "left" : "top"] = g[b] - (i ? c[f ? "width" : "height"] : 0),
                    a.placement = L(d),
                    a.offsets.popper = h(c),
                    a
                }
            },
            hide: {
                order: 800,
                enabled: !0,
                fn: function(a) {
                    if (!aw(a.instance.modifiers, "hide", "preventOverflow"))
                        return a;
                    var b = a.offsets.reference
                      , c = H(a.instance.modifiers, function(a) {
                        return "preventOverflow" === a.name
                    }).boundaries;
                    if (b.bottom < c.top || b.left > c.right || b.top > c.bottom || b.right < c.left) {
                        if (!0 === a.hide)
                            return a;
                        a.hide = !0,
                        a.attributes["x-out-of-boundaries"] = ""
                    } else {
                        if (!1 === a.hide)
                            return a;
                        a.hide = !1,
                        a.attributes["x-out-of-boundaries"] = !1
                    }
                    return a
                }
            },
            computeStyle: {
                order: 850,
                enabled: !0,
                fn: function(a, i) {
                    var n = i.x, q = i.y, p = a.offsets.popper, k = H(a.instance.modifiers, function(a) {
                        return "applyStyle" === a.name
                    }).gpuAcceleration, o, g, m, b, c, f, d, l, j, h, r, s, t;
                    return void 0 !== k && console.warn("WARNING: `gpuAcceleration` option moved to `computeStyle` modifier and will not be supported in future versions of Popper.js!"),
                    o = void 0 !== k ? k : i.gpuAcceleration,
                    g = C(a.instance.popper),
                    m = Y(g),
                    b = {
                        position: p.position
                    },
                    c = function(d, c) {
                        var h = d.offsets
                          , a = h.popper
                          , n = h.reference
                          , b = Math.round
                          , m = Math.floor
                          , e = function(a) {
                            return a
                        }
                          , i = b(n.width)
                          , j = b(a.width)
                          , l = -1 !== ["left", "right"].indexOf(d.placement)
                          , g = -1 !== d.placement.indexOf("-")
                          , f = c ? l || g || i % 2 == j % 2 ? b : m : e
                          , k = c ? b : e;
                        return {
                            left: f(i % 2 == 1 && j % 2 == 1 && !g && c ? a.left - 1 : a.left),
                            top: k(a.top),
                            bottom: k(a.bottom),
                            right: f(a.right)
                        }
                    }(a, window.devicePixelRatio < 2 || !av),
                    f = "bottom" === n ? "top" : "bottom",
                    d = "right" === q ? "left" : "right",
                    l = S("transform"),
                    j = void 0,
                    h = void 0,
                    (h = "bottom" === f ? "HTML" === g.nodeName ? -g.clientHeight + c.bottom : -m.height + c.bottom : c.top,
                    j = "right" === d ? "HTML" === g.nodeName ? -g.clientWidth + c.right : -m.width + c.right : c.left,
                    o && l) ? (b[l] = "translate3d(" + j + "px, " + h + "px, 0)",
                    b[f] = 0,
                    b[d] = 0,
                    b.willChange = "transform") : (r = "bottom" === f ? -1 : 1,
                    s = "right" === d ? -1 : 1,
                    b[f] = h * r,
                    b[d] = j * s,
                    b.willChange = f + ", " + d),
                    t = {
                        "x-placement": a.placement
                    },
                    a.attributes = e({}, t, a.attributes),
                    a.styles = e({}, b, a.styles),
                    a.arrowStyles = e({}, a.offsets.arrow, a.arrowStyles),
                    a
                },
                gpuAcceleration: !0,
                x: "bottom",
                y: "right"
            },
            applyStyle: {
                order: 900,
                enabled: !0,
                fn: function(a) {
                    var c, b;
                    return T(a.instance.popper, a.styles),
                    c = a.instance.popper,
                    b = a.attributes,
                    Object.keys(b).forEach(function(a) {
                        !1 !== b[a] ? c.setAttribute(a, b[a]) : c.removeAttribute(a)
                    }),
                    a.arrowElement && Object.keys(a.arrowStyles).length && T(a.arrowElement, a.arrowStyles),
                    a
                },
                onLoad: function(c, b, a, g, d) {
                    var e = ae(d, b, c, a.positionFixed)
                      , f = ad(a.placement, e, b, c, a.modifiers.flip.boundariesElement, a.modifiers.flip.padding);
                    return b.setAttribute("x-placement", f),
                    T(b, {
                        position: a.positionFixed ? "fixed" : "absolute"
                    }),
                    a
                },
                gpuAcceleration: void 0
            }
        }
    },
    j = function() {
        function a(c, d) {
            var b = this, f = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}, g;
            aj(this, a),
            this.scheduleUpdate = function() {
                return requestAnimationFrame(b.update)
            }
            ,
            this.update = ax(this.update.bind(this)),
            this.options = e({}, a.Defaults, f),
            this.state = {
                isDestroyed: !1,
                isCreated: !1,
                scrollParents: []
            },
            this.reference = c && c.jquery ? c[0] : c,
            this.popper = d && d.jquery ? d[0] : d,
            this.options.modifiers = {},
            Object.keys(e({}, a.Defaults.modifiers, f.modifiers)).forEach(function(c) {
                b.options.modifiers[c] = e({}, a.Defaults.modifiers[c] || {}, f.modifiers ? f.modifiers[c] : {})
            }),
            this.modifiers = Object.keys(this.options.modifiers).map(function(a) {
                return e({
                    name: a
                }, b.options.modifiers[a])
            }).sort(function(a, b) {
                return a.order - b.order
            }),
            this.modifiers.forEach(function(a) {
                a.enabled && au(a.onLoad) && a.onLoad(b.reference, b.popper, b.options, a, b.state)
            }),
            this.update(),
            g = this.options.eventsEnabled,
            g && this.enableEventListeners(),
            this.state.eventsEnabled = g
        }
        return ai(a, [{
            key: "update",
            value: function() {
                return bm.call(this)
            }
        }, {
            key: "destroy",
            value: function() {
                return bl.call(this)
            }
        }, {
            key: "enableEventListeners",
            value: function() {
                return bj.call(this)
            }
        }, {
            key: "disableEventListeners",
            value: function() {
                return bi.call(this)
            }
        }]),
        a
    }(),
    j.Utils = ("undefined" != typeof window ? window : global).PopperUtils,
    j.placements = Q,
    j.Defaults = aE,
    n = "dropdown",
    aH = a.default.fn[n],
    aI = new RegExp("38|40|27"),
    aJ = {
        offset: 0,
        flip: !0,
        boundary: "scrollParent",
        reference: "toggle",
        display: "dynamic",
        popperConfig: null
    },
    aK = {
        offset: "(number|string|function)",
        flip: "boolean",
        boundary: "(string|element)",
        reference: "(string|element)",
        display: "string",
        popperConfig: "(null|object)"
    },
    g = function() {
        function d(a, b) {
            this._element = a,
            this._popper = null,
            this._config = this._getConfig(b),
            this._menu = this._getMenuElement(),
            this._inNavbar = this._detectNavbar(),
            this._addEventListeners()
        }
        var e = d.prototype;
        return e.toggle = function() {
            if (!this._element.disabled && !a.default(this._element).hasClass("disabled")) {
                var b = a.default(this._menu).hasClass("show");
                d._clearMenus(),
                b || this.show(!0)
            }
        }
        ,
        e.show = function(f) {
            var g, h, c, e;
            if (void 0 === f && (f = !1),
            !(this._element.disabled || a.default(this._element).hasClass("disabled") || a.default(this._menu).hasClass("show")))
                if (g = {
                    relatedTarget: this._element
                },
                h = a.default.Event("show.bs.dropdown", g),
                c = d._getParentFromElement(this._element),
                a.default(c).trigger(h),
                !h.isDefaultPrevented()) {
                    if (!this._inNavbar && f) {
                        if ("undefined" == typeof j)
                            throw new TypeError("Bootstrap's dropdowns require Popper (https://popper.js.org)");
                        e = this._element,
                        "parent" === this._config.reference ? e = c : b.isElement(this._config.reference) && (e = this._config.reference,
                        "undefined" != typeof this._config.reference.jquery && (e = this._config.reference[0])),
                        "scrollParent" !== this._config.boundary && a.default(c).addClass("position-static"),
                        this._popper = new j(e,this._menu,this._getPopperConfig())
                    }
                    "ontouchstart"in document.documentElement && 0 === a.default(c).closest(".navbar-nav").length && a.default(document.body).children().on("mouseover", null, a.default.noop),
                    this._element.focus(),
                    this._element.setAttribute("aria-expanded", !0),
                    a.default(this._menu).toggleClass("show"),
                    a.default(c).toggleClass("show").trigger(a.default.Event("shown.bs.dropdown", g))
                }
        }
        ,
        e.hide = function() {
            if (!this._element.disabled && !a.default(this._element).hasClass("disabled") && a.default(this._menu).hasClass("show")) {
                var b = {
                    relatedTarget: this._element
                }
                  , c = a.default.Event("hide.bs.dropdown", b)
                  , e = d._getParentFromElement(this._element);
                a.default(e).trigger(c),
                c.isDefaultPrevented() || (this._popper && this._popper.destroy(),
                a.default(this._menu).toggleClass("show"),
                a.default(e).toggleClass("show").trigger(a.default.Event("hidden.bs.dropdown", b)))
            }
        }
        ,
        e.dispose = function() {
            a.default.removeData(this._element, "bs.dropdown"),
            a.default(this._element).off(".bs.dropdown"),
            this._element = null,
            this._menu = null,
            null !== this._popper && (this._popper.destroy(),
            this._popper = null)
        }
        ,
        e.update = function() {
            this._inNavbar = this._detectNavbar(),
            null !== this._popper && this._popper.scheduleUpdate()
        }
        ,
        e._addEventListeners = function() {
            var b = this;
            a.default(this._element).on("click.bs.dropdown", function(a) {
                a.preventDefault(),
                a.stopPropagation(),
                b.toggle()
            })
        }
        ,
        e._getConfig = function(d) {
            return d = c({}, this.constructor.Default, a.default(this._element).data(), d),
            b.typeCheckConfig(n, d, this.constructor.DefaultType),
            d
        }
        ,
        e._getMenuElement = function() {
            if (!this._menu) {
                var a = d._getParentFromElement(this._element);
                a && (this._menu = a.querySelector(".dropdown-menu"))
            }
            return this._menu
        }
        ,
        e._getPlacement = function() {
            var c = a.default(this._element.parentNode)
              , b = "bottom-start";
            return c.hasClass("dropup") ? b = a.default(this._menu).hasClass("dropdown-menu-right") ? "top-end" : "top-start" : c.hasClass("dropright") ? b = "right-start" : c.hasClass("dropleft") ? b = "left-start" : a.default(this._menu).hasClass("dropdown-menu-right") && (b = "bottom-end"),
            b
        }
        ,
        e._detectNavbar = function() {
            return a.default(this._element).closest(".navbar").length > 0
        }
        ,
        e._getOffset = function() {
            var b = this
              , a = {};
            return "function" == typeof this._config.offset ? a.fn = function(a) {
                return a.offsets = c({}, a.offsets, b._config.offset(a.offsets, b._element) || {}),
                a
            }
            : a.offset = this._config.offset,
            a
        }
        ,
        e._getPopperConfig = function() {
            var a = {
                placement: this._getPlacement(),
                modifiers: {
                    offset: this._getOffset(),
                    flip: {
                        enabled: this._config.flip
                    },
                    preventOverflow: {
                        boundariesElement: this._config.boundary
                    }
                }
            };
            return "static" === this._config.display && (a.modifiers.applyStyle = {
                enabled: !1
            }),
            c({}, a, this._config.popperConfig)
        }
        ,
        d._jQueryInterface = function(b) {
            return this.each(function() {
                var c = a.default(this).data("bs.dropdown");
                if (c || (c = new d(this,"object" == typeof b ? b : null),
                a.default(this).data("bs.dropdown", c)),
                "string" == typeof b) {
                    if ("undefined" == typeof c[b])
                        throw new TypeError('No method named "' + b + '"');
                    c[b]()
                }
            })
        }
        ,
        d._clearMenus = function(b) {
            var e, c, j, f, g, h, k, i;
            if (!b || 3 !== b.which && ("keyup" !== b.type || 9 === b.which))
                for (e = [].slice.call(document.querySelectorAll('[data-toggle="dropdown"]')),
                c = 0,
                j = e.length; c < j; c++)
                    f = d._getParentFromElement(e[c]),
                    g = a.default(e[c]).data("bs.dropdown"),
                    h = {
                        relatedTarget: e[c]
                    },
                    (b && "click" === b.type && (h.clickEvent = b),
                    g) && (k = g._menu,
                    a.default(f).hasClass("show") && !(b && ("click" === b.type && /input|textarea/i.test(b.target.tagName) || "keyup" === b.type && 9 === b.which) && a.default.contains(f, b.target)) && (i = a.default.Event("hide.bs.dropdown", h),
                    a.default(f).trigger(i),
                    i.isDefaultPrevented() || ("ontouchstart"in document.documentElement && a.default(document.body).children().off("mouseover", null, a.default.noop),
                    e[c].setAttribute("aria-expanded", "false"),
                    g._popper && g._popper.destroy(),
                    a.default(k).removeClass("show"),
                    a.default(f).removeClass("show").trigger(a.default.Event("hidden.bs.dropdown", h)))))
        }
        ,
        d._getParentFromElement = function(a) {
            var c, d = b.getSelectorFromElement(a);
            return d && (c = document.querySelector(d)),
            c || a.parentNode
        }
        ,
        d._dataApiKeydownHandler = function(b) {
            var f, g, e, c;
            if (!(/input|textarea/i.test(b.target.tagName) ? 32 === b.which || 27 !== b.which && (40 !== b.which && 38 !== b.which || a.default(b.target).closest(".dropdown-menu").length) : !aI.test(b.which)) && !this.disabled && !a.default(this).hasClass("disabled"))
                if (f = d._getParentFromElement(this),
                g = a.default(f).hasClass("show"),
                g || 27 !== b.which) {
                    if (b.preventDefault(),
                    b.stopPropagation(),
                    !g || 27 === b.which || 32 === b.which)
                        return 27 === b.which && a.default(f.querySelector('[data-toggle="dropdown"]')).trigger("focus"),
                        void a.default(this).trigger("click");
                    e = [].slice.call(f.querySelectorAll(".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)")).filter(function(b) {
                        return a.default(b).is(":visible")
                    }),
                    0 !== e.length && (c = e.indexOf(b.target),
                    38 === b.which && c > 0 && c--,
                    40 === b.which && c < e.length - 1 && c++,
                    c < 0 && (c = 0),
                    e[c].focus())
                }
        }
        ,
        f(d, null, [{
            key: "VERSION",
            get: function() {
                return "4.6.0"
            }
        }, {
            key: "Default",
            get: function() {
                return aJ
            }
        }, {
            key: "DefaultType",
            get: function() {
                return aK
            }
        }]),
        d
    }(),
    a.default(document).on("keydown.bs.dropdown.data-api", '[data-toggle="dropdown"]', g._dataApiKeydownHandler).on("keydown.bs.dropdown.data-api", ".dropdown-menu", g._dataApiKeydownHandler).on("click.bs.dropdown.data-api keyup.bs.dropdown.data-api", g._clearMenus).on("click.bs.dropdown.data-api", '[data-toggle="dropdown"]', function(b) {
        b.preventDefault(),
        b.stopPropagation(),
        g._jQueryInterface.call(a.default(this), "toggle")
    }).on("click.bs.dropdown.data-api", ".dropdown form", function(a) {
        a.stopPropagation()
    }),
    a.default.fn[n] = g._jQueryInterface,
    a.default.fn[n].Constructor = g,
    a.default.fn[n].noConflict = function() {
        return a.default.fn[n] = aH,
        g._jQueryInterface
    }
    ,
    aM = a.default.fn.modal,
    K = {
        backdrop: !0,
        keyboard: !0,
        focus: !0,
        show: !0
    },
    aO = {
        backdrop: "(boolean|string)",
        keyboard: "boolean",
        focus: "boolean",
        show: "boolean"
    },
    B = function() {
        function e(a, b) {
            this._config = this._getConfig(b),
            this._element = a,
            this._dialog = a.querySelector(".modal-dialog"),
            this._backdrop = null,
            this._isShown = !1,
            this._isBodyOverflowing = !1,
            this._ignoreBackdropClick = !1,
            this._isTransitioning = !1,
            this._scrollbarWidth = 0
        }
        var d = e.prototype;
        return d.toggle = function(a) {
            return this._isShown ? this.hide() : this.show(a)
        }
        ,
        d.show = function(c) {
            var b = this, d;
            !this._isShown && !this._isTransitioning && (a.default(this._element).hasClass("fade") && (this._isTransitioning = !0),
            d = a.default.Event("show.bs.modal", {
                relatedTarget: c
            }),
            a.default(this._element).trigger(d),
            this._isShown || d.isDefaultPrevented() || (this._isShown = !0,
            this._checkScrollbar(),
            this._setScrollbar(),
            this._adjustDialog(),
            this._setEscapeEvent(),
            this._setResizeEvent(),
            a.default(this._element).on("click.dismiss.bs.modal", '[data-dismiss="modal"]', function(a) {
                return b.hide(a)
            }),
            a.default(this._dialog).on("mousedown.dismiss.bs.modal", function() {
                a.default(b._element).one("mouseup.dismiss.bs.modal", function(c) {
                    a.default(c.target).is(b._element) && (b._ignoreBackdropClick = !0)
                })
            }),
            this._showBackdrop(function() {
                return b._showElement(c)
            })))
        }
        ,
        d.hide = function(c) {
            var f = this, d, e, g;
            c && c.preventDefault(),
            this._isShown && !this._isTransitioning && (d = a.default.Event("hide.bs.modal"),
            (a.default(this._element).trigger(d),
            this._isShown && !d.isDefaultPrevented()) && (this._isShown = !1,
            e = a.default(this._element).hasClass("fade"),
            (e && (this._isTransitioning = !0),
            this._setEscapeEvent(),
            this._setResizeEvent(),
            a.default(document).off("focusin.bs.modal"),
            a.default(this._element).removeClass("show"),
            a.default(this._element).off("click.dismiss.bs.modal"),
            a.default(this._dialog).off("mousedown.dismiss.bs.modal"),
            e) ? (g = b.getTransitionDurationFromElement(this._element),
            a.default(this._element).one(b.TRANSITION_END, function(a) {
                return f._hideModal(a)
            }).emulateTransitionEnd(g)) : this._hideModal()))
        }
        ,
        d.dispose = function() {
            [window, this._element, this._dialog].forEach(function(b) {
                return a.default(b).off(".bs.modal")
            }),
            a.default(document).off("focusin.bs.modal"),
            a.default.removeData(this._element, "bs.modal"),
            this._config = null,
            this._element = null,
            this._dialog = null,
            this._backdrop = null,
            this._isShown = null,
            this._isBodyOverflowing = null,
            this._ignoreBackdropClick = null,
            this._isTransitioning = null,
            this._scrollbarWidth = null
        }
        ,
        d.handleUpdate = function() {
            this._adjustDialog()
        }
        ,
        d._getConfig = function(a) {
            return a = c({}, K, a),
            b.typeCheckConfig("modal", a, aO),
            a
        }
        ,
        d._triggerBackdropTransition = function() {
            var c = this, d = a.default.Event("hidePrevented.bs.modal"), e, f;
            a.default(this._element).trigger(d),
            !d.isDefaultPrevented() && (e = this._element.scrollHeight > document.documentElement.clientHeight,
            e || (this._element.style.overflowY = "hidden"),
            this._element.classList.add("modal-static"),
            f = b.getTransitionDurationFromElement(this._dialog),
            a.default(this._element).off(b.TRANSITION_END),
            a.default(this._element).one(b.TRANSITION_END, function() {
                c._element.classList.remove("modal-static"),
                e || a.default(c._element).one(b.TRANSITION_END, function() {
                    c._element.style.overflowY = ""
                }).emulateTransitionEnd(c._element, f)
            }).emulateTransitionEnd(f),
            this._element.focus())
        }
        ,
        d._showElement = function(g) {
            var c = this, d = a.default(this._element).hasClass("fade"), e = this._dialog ? this._dialog.querySelector(".modal-body") : null, h, f, i;
            this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE || document.body.appendChild(this._element),
            this._element.style.display = "block",
            this._element.removeAttribute("aria-hidden"),
            this._element.setAttribute("aria-modal", !0),
            this._element.setAttribute("role", "dialog"),
            a.default(this._dialog).hasClass("modal-dialog-scrollable") && e ? e.scrollTop = 0 : this._element.scrollTop = 0,
            d && b.reflow(this._element),
            a.default(this._element).addClass("show"),
            this._config.focus && this._enforceFocus(),
            h = a.default.Event("shown.bs.modal", {
                relatedTarget: g
            }),
            f = function() {
                c._config.focus && c._element.focus(),
                c._isTransitioning = !1,
                a.default(c._element).trigger(h)
            }
            ,
            d ? (i = b.getTransitionDurationFromElement(this._dialog),
            a.default(this._dialog).one(b.TRANSITION_END, f).emulateTransitionEnd(i)) : f()
        }
        ,
        d._enforceFocus = function() {
            var b = this;
            a.default(document).off("focusin.bs.modal").on("focusin.bs.modal", function(c) {
                document !== c.target && b._element !== c.target && 0 === a.default(b._element).has(c.target).length && b._element.focus()
            })
        }
        ,
        d._setEscapeEvent = function() {
            var b = this;
            this._isShown ? a.default(this._element).on("keydown.dismiss.bs.modal", function(a) {
                b._config.keyboard && 27 === a.which ? (a.preventDefault(),
                b.hide()) : b._config.keyboard || 27 !== a.which || b._triggerBackdropTransition()
            }) : this._isShown || a.default(this._element).off("keydown.dismiss.bs.modal")
        }
        ,
        d._setResizeEvent = function() {
            var b = this;
            this._isShown ? a.default(window).on("resize.bs.modal", function(a) {
                return b.handleUpdate(a)
            }) : a.default(window).off("resize.bs.modal")
        }
        ,
        d._hideModal = function() {
            var b = this;
            this._element.style.display = "none",
            this._element.setAttribute("aria-hidden", !0),
            this._element.removeAttribute("aria-modal"),
            this._element.removeAttribute("role"),
            this._isTransitioning = !1,
            this._showBackdrop(function() {
                a.default(document.body).removeClass("modal-open"),
                b._resetAdjustments(),
                b._resetScrollbar(),
                a.default(b._element).trigger("hidden.bs.modal")
            })
        }
        ,
        d._removeBackdrop = function() {
            this._backdrop && (a.default(this._backdrop).remove(),
            this._backdrop = null)
        }
        ,
        d._showBackdrop = function(c) {
            var d = this, e = a.default(this._element).hasClass("fade") ? "fade" : "", g, f, h;
            if (this._isShown && this._config.backdrop) {
                if (this._backdrop = document.createElement("div"),
                this._backdrop.className = "modal-backdrop",
                e && this._backdrop.classList.add(e),
                a.default(this._backdrop).appendTo(document.body),
                a.default(this._element).on("click.dismiss.bs.modal", function(a) {
                    d._ignoreBackdropClick ? d._ignoreBackdropClick = !1 : a.target === a.currentTarget && ("static" === d._config.backdrop ? d._triggerBackdropTransition() : d.hide())
                }),
                e && b.reflow(this._backdrop),
                a.default(this._backdrop).addClass("show"),
                !c)
                    return;
                if (!e)
                    return void c();
                g = b.getTransitionDurationFromElement(this._backdrop),
                a.default(this._backdrop).one(b.TRANSITION_END, c).emulateTransitionEnd(g)
            } else
                !this._isShown && this._backdrop ? (a.default(this._backdrop).removeClass("show"),
                f = function() {
                    d._removeBackdrop(),
                    c && c()
                }
                ,
                a.default(this._element).hasClass("fade") ? (h = b.getTransitionDurationFromElement(this._backdrop),
                a.default(this._backdrop).one(b.TRANSITION_END, f).emulateTransitionEnd(h)) : f()) : c && c()
        }
        ,
        d._adjustDialog = function() {
            var a = this._element.scrollHeight > document.documentElement.clientHeight;
            !this._isBodyOverflowing && a && (this._element.style.paddingLeft = this._scrollbarWidth + "px"),
            this._isBodyOverflowing && !a && (this._element.style.paddingRight = this._scrollbarWidth + "px")
        }
        ,
        d._resetAdjustments = function() {
            this._element.style.paddingLeft = "",
            this._element.style.paddingRight = ""
        }
        ,
        d._checkScrollbar = function() {
            var a = document.body.getBoundingClientRect();
            this._isBodyOverflowing = Math.round(a.left + a.right) < window.innerWidth,
            this._scrollbarWidth = this._getScrollbarWidth()
        }
        ,
        d._setScrollbar = function() {
            var b = this, c, d, e, f;
            this._isBodyOverflowing && (c = [].slice.call(document.querySelectorAll(".fixed-top, .fixed-bottom, .is-fixed, .sticky-top")),
            d = [].slice.call(document.querySelectorAll(".sticky-top")),
            a.default(c).each(function(f, c) {
                var d = c.style.paddingRight
                  , e = a.default(c).css("padding-right");
                a.default(c).data("padding-right", d).css("padding-right", parseFloat(e) + b._scrollbarWidth + "px")
            }),
            a.default(d).each(function(f, c) {
                var d = c.style.marginRight
                  , e = a.default(c).css("margin-right");
                a.default(c).data("margin-right", d).css("margin-right", parseFloat(e) - b._scrollbarWidth + "px")
            }),
            e = document.body.style.paddingRight,
            f = a.default(document.body).css("padding-right"),
            a.default(document.body).data("padding-right", e).css("padding-right", parseFloat(f) + this._scrollbarWidth + "px")),
            a.default(document.body).addClass("modal-open")
        }
        ,
        d._resetScrollbar = function() {
            var b = [].slice.call(document.querySelectorAll(".fixed-top, .fixed-bottom, .is-fixed, .sticky-top")), c, d;
            a.default(b).each(function(d, b) {
                var c = a.default(b).data("padding-right");
                a.default(b).removeData("padding-right"),
                b.style.paddingRight = c || ""
            }),
            c = [].slice.call(document.querySelectorAll(".sticky-top")),
            a.default(c).each(function(d, b) {
                var c = a.default(b).data("margin-right");
                "undefined" != typeof c && a.default(b).css("margin-right", c).removeData("margin-right")
            }),
            d = a.default(document.body).data("padding-right"),
            a.default(document.body).removeData("padding-right"),
            document.body.style.paddingRight = d || ""
        }
        ,
        d._getScrollbarWidth = function() {
            var a = document.createElement("div"), b;
            return a.className = "modal-scrollbar-measure",
            document.body.appendChild(a),
            b = a.getBoundingClientRect().width - a.clientWidth,
            document.body.removeChild(a),
            b
        }
        ,
        e._jQueryInterface = function(b, d) {
            return this.each(function() {
                var f = a.default(this).data("bs.modal")
                  , g = c({}, K, a.default(this).data(), "object" == typeof b && b ? b : {});
                if (f || (f = new e(this,g),
                a.default(this).data("bs.modal", f)),
                "string" == typeof b) {
                    if ("undefined" == typeof f[b])
                        throw new TypeError('No method named "' + b + '"');
                    f[b](d)
                } else
                    g.show && f.show(d)
            })
        }
        ,
        f(e, null, [{
            key: "VERSION",
            get: function() {
                return "4.6.0"
            }
        }, {
            key: "Default",
            get: function() {
                return K
            }
        }]),
        e
    }(),
    a.default(document).on("click.bs.modal.data-api", '[data-toggle="modal"]', function(g) {
        var d, e = this, f = b.getSelectorFromElement(this), h, i;
        f && (d = document.querySelector(f)),
        h = a.default(d).data("bs.modal") ? "toggle" : c({}, a.default(d).data(), a.default(this).data()),
        "A" !== this.tagName && "AREA" !== this.tagName || g.preventDefault(),
        i = a.default(d).one("show.bs.modal", function(b) {
            b.isDefaultPrevented() || i.one("hidden.bs.modal", function() {
                a.default(e).is(":visible") && e.focus()
            })
        }),
        B._jQueryInterface.call(a.default(d), h, this)
    }),
    a.default.fn.modal = B._jQueryInterface,
    a.default.fn.modal.Constructor = B,
    a.default.fn.modal.noConflict = function() {
        return a.default.fn.modal = aM,
        B._jQueryInterface
    }
    ,
    aQ = ["background", "cite", "href", "itemtype", "longdesc", "poster", "src", "xlink:href"],
    aR = {
        "*": ["class", "dir", "id", "lang", "role", /^aria-[\w-]*$/i],
        a: ["target", "href", "title", "rel"],
        area: [],
        b: [],
        br: [],
        col: [],
        code: [],
        div: [],
        em: [],
        hr: [],
        h1: [],
        h2: [],
        h3: [],
        h4: [],
        h5: [],
        h6: [],
        i: [],
        img: ["src", "srcset", "alt", "title", "width", "height"],
        li: [],
        ol: [],
        p: [],
        pre: [],
        s: [],
        small: [],
        span: [],
        sub: [],
        sup: [],
        strong: [],
        u: [],
        ul: []
    },
    aS = /^(?:(?:https?|mailto|ftp|tel|file):|[^#&/:?]*(?:[#/?]|$))/gi,
    aT = /^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[\d+/a-z]+=*$/i;
    function aU(a, b, c) {
        if (0 === a.length)
            return a;
        if (c && "function" == typeof c)
            return c(a);
        for (var e = (new window.DOMParser).parseFromString(a, "text/html"), g = Object.keys(b), f = [].slice.call(e.body.querySelectorAll("*")), h = function(c, i) {
            var a = f[c], d = a.nodeName.toLowerCase(), e, h;
            if (-1 === g.indexOf(a.nodeName.toLowerCase()))
                return a.parentNode.removeChild(a),
                "continue";
            e = [].slice.call(a.attributes),
            h = [].concat(b["*"] || [], b[d] || []),
            e.forEach(function(b) {
                (function(a, d) {
                    var b = a.nodeName.toLowerCase(), e, c, f;
                    if (-1 !== d.indexOf(b))
                        return -1 === aQ.indexOf(b) || Boolean(a.nodeValue.match(aS) || a.nodeValue.match(aT));
                    for (e = d.filter(function(a) {
                        return a instanceof RegExp
                    }),
                    c = 0,
                    f = e.length; c < f; c++)
                        if (b.match(e[c]))
                            return !0;
                    return !1
                }
                )(b, h) || a.removeAttribute(b.nodeName)
            })
        }, d = 0, i = f.length; d < i; d++)
            h(d);
        return e.body.innerHTML
    }
    k = "tooltip",
    aW = a.default.fn[k],
    aX = new RegExp("(^|\\s)bs-tooltip\\S+","g"),
    aY = ["sanitize", "whiteList", "sanitizeFn"],
    aZ = {
        animation: "boolean",
        template: "string",
        title: "(string|element|function)",
        trigger: "string",
        delay: "(number|object)",
        html: "boolean",
        selector: "(string|boolean)",
        placement: "(string|function)",
        offset: "(number|string|function)",
        container: "(string|element|boolean)",
        fallbackPlacement: "(string|array)",
        boundary: "(string|element)",
        customClass: "(string|function)",
        sanitize: "boolean",
        sanitizeFn: "(null|function)",
        whiteList: "object",
        popperConfig: "(null|object)"
    },
    a_ = {
        AUTO: "auto",
        TOP: "top",
        RIGHT: "right",
        BOTTOM: "bottom",
        LEFT: "left"
    },
    a$ = {
        animation: !0,
        template: '<div class="tooltip" role="tooltip"><div class="arrow"></div><div class="tooltip-inner"></div></div>',
        trigger: "hover focus",
        title: "",
        delay: 0,
        html: !1,
        selector: !1,
        placement: "top",
        offset: 0,
        container: !1,
        fallbackPlacement: "flip",
        boundary: "scrollParent",
        customClass: "",
        sanitize: !0,
        sanitizeFn: null,
        whiteList: aR,
        popperConfig: null
    },
    ba = {
        HIDE: "hide.bs.tooltip",
        HIDDEN: "hidden.bs.tooltip",
        SHOW: "show.bs.tooltip",
        SHOWN: "shown.bs.tooltip",
        INSERTED: "inserted.bs.tooltip",
        CLICK: "click.bs.tooltip",
        FOCUSIN: "focusin.bs.tooltip",
        FOCUSOUT: "focusout.bs.tooltip",
        MOUSEENTER: "mouseenter.bs.tooltip",
        MOUSELEAVE: "mouseleave.bs.tooltip"
    },
    i = function() {
        function e(a, b) {
            if ("undefined" == typeof j)
                throw new TypeError("Bootstrap's tooltips require Popper (https://popper.js.org)");
            this._isEnabled = !0,
            this._timeout = 0,
            this._hoverState = "",
            this._activeTrigger = {},
            this._popper = null,
            this.element = a,
            this.config = this._getConfig(b),
            this.tip = null,
            this._setListeners()
        }
        var d = e.prototype;
        return d.enable = function() {
            this._isEnabled = !0
        }
        ,
        d.disable = function() {
            this._isEnabled = !1
        }
        ,
        d.toggleEnabled = function() {
            this._isEnabled = !this._isEnabled
        }
        ,
        d.toggle = function(c) {
            if (this._isEnabled)
                if (c) {
                    var d = this.constructor.DATA_KEY
                      , b = a.default(c.currentTarget).data(d);
                    b || (b = new this.constructor(c.currentTarget,this._getDelegateConfig()),
                    a.default(c.currentTarget).data(d, b)),
                    b._activeTrigger.click = !b._activeTrigger.click,
                    b._isWithActiveTrigger() ? b._enter(null, b) : b._leave(null, b)
                } else {
                    if (a.default(this.getTipElement()).hasClass("show"))
                        return void this._leave(null, this);
                    this._enter(null, this)
                }
        }
        ,
        d.dispose = function() {
            clearTimeout(this._timeout),
            a.default.removeData(this.element, this.constructor.DATA_KEY),
            a.default(this.element).off(this.constructor.EVENT_KEY),
            a.default(this.element).closest(".modal").off("hide.bs.modal", this._hideModalHandler),
            this.tip && a.default(this.tip).remove(),
            this._isEnabled = null,
            this._timeout = null,
            this._hoverState = null,
            this._activeTrigger = null,
            this._popper && this._popper.destroy(),
            this._popper = null,
            this.element = null,
            this.config = null,
            this.tip = null
        }
        ,
        d.show = function() {
            var c = this, e, f, m, d, h, k, i, l, g, n;
            if ("none" === a.default(this.element).css("display"))
                throw new Error("Please use show on visible elements");
            if (e = a.default.Event(this.constructor.Event.SHOW),
            this.isWithContent() && this._isEnabled) {
                if (a.default(this.element).trigger(e),
                f = b.findShadowRoot(this.element),
                m = a.default.contains(null !== f ? f : this.element.ownerDocument.documentElement, this.element),
                e.isDefaultPrevented() || !m)
                    return;
                d = this.getTipElement(),
                h = b.getUID(this.constructor.NAME),
                d.setAttribute("id", h),
                this.element.setAttribute("aria-describedby", h),
                this.setContent(),
                this.config.animation && a.default(d).addClass("fade"),
                k = "function" == typeof this.config.placement ? this.config.placement.call(this, d, this.element) : this.config.placement,
                i = this._getAttachment(k),
                this.addAttachmentClass(i),
                l = this._getContainer(),
                a.default(d).data(this.constructor.DATA_KEY, this),
                a.default.contains(this.element.ownerDocument.documentElement, this.tip) || a.default(d).appendTo(l),
                a.default(this.element).trigger(this.constructor.Event.INSERTED),
                this._popper = new j(this.element,d,this._getPopperConfig(i)),
                a.default(d).addClass("show"),
                a.default(d).addClass(this.config.customClass),
                "ontouchstart"in document.documentElement && a.default(document.body).children().on("mouseover", null, a.default.noop),
                g = function() {
                    c.config.animation && c._fixTransition();
                    var b = c._hoverState;
                    c._hoverState = null,
                    a.default(c.element).trigger(c.constructor.Event.SHOWN),
                    "out" === b && c._leave(null, c)
                }
                ,
                a.default(this.tip).hasClass("fade") ? (n = b.getTransitionDurationFromElement(this.tip),
                a.default(this.tip).one(b.TRANSITION_END, g).emulateTransitionEnd(n)) : g()
            }
        }
        ,
        d.hide = function(e) {
            var c = this, d = this.getTipElement(), f = a.default.Event(this.constructor.Event.HIDE), g = function() {
                "show" !== c._hoverState && d.parentNode && d.parentNode.removeChild(d),
                c._cleanTipClass(),
                c.element.removeAttribute("aria-describedby"),
                a.default(c.element).trigger(c.constructor.Event.HIDDEN),
                null !== c._popper && c._popper.destroy(),
                e && e()
            }, h;
            a.default(this.element).trigger(f),
            !f.isDefaultPrevented() && (a.default(d).removeClass("show"),
            "ontouchstart"in document.documentElement && a.default(document.body).children().off("mouseover", null, a.default.noop),
            this._activeTrigger.click = !1,
            this._activeTrigger.focus = !1,
            this._activeTrigger.hover = !1,
            a.default(this.tip).hasClass("fade") ? (h = b.getTransitionDurationFromElement(d),
            a.default(d).one(b.TRANSITION_END, g).emulateTransitionEnd(h)) : g(),
            this._hoverState = "")
        }
        ,
        d.update = function() {
            null !== this._popper && this._popper.scheduleUpdate()
        }
        ,
        d.isWithContent = function() {
            return Boolean(this.getTitle())
        }
        ,
        d.addAttachmentClass = function(b) {
            a.default(this.getTipElement()).addClass("bs-tooltip-" + b)
        }
        ,
        d.getTipElement = function() {
            return this.tip = this.tip || a.default(this.config.template)[0],
            this.tip
        }
        ,
        d.setContent = function() {
            var b = this.getTipElement();
            this.setElementContent(a.default(b.querySelectorAll(".tooltip-inner")), this.getTitle()),
            a.default(b).removeClass("fade show")
        }
        ,
        d.setElementContent = function(c, b) {
            "object" != typeof b || !b.nodeType && !b.jquery ? this.config.html ? (this.config.sanitize && (b = aU(b, this.config.whiteList, this.config.sanitizeFn)),
            c.html(b)) : c.text(b) : this.config.html ? a.default(b).parent().is(c) || c.empty().append(b) : c.text(a.default(b).text())
        }
        ,
        d.getTitle = function() {
            var a = this.element.getAttribute("data-original-title");
            return a || (a = "function" == typeof this.config.title ? this.config.title.call(this.element) : this.config.title),
            a
        }
        ,
        d._getPopperConfig = function(b) {
            var a = this;
            return c({}, {
                placement: b,
                modifiers: {
                    offset: this._getOffset(),
                    flip: {
                        behavior: this.config.fallbackPlacement
                    },
                    arrow: {
                        element: ".arrow"
                    },
                    preventOverflow: {
                        boundariesElement: this.config.boundary
                    }
                },
                onCreate: function(b) {
                    b.originalPlacement !== b.placement && a._handlePopperPlacementChange(b)
                },
                onUpdate: function(b) {
                    return a._handlePopperPlacementChange(b)
                }
            }, this.config.popperConfig)
        }
        ,
        d._getOffset = function() {
            var b = this
              , a = {};
            return "function" == typeof this.config.offset ? a.fn = function(a) {
                return a.offsets = c({}, a.offsets, b.config.offset(a.offsets, b.element) || {}),
                a
            }
            : a.offset = this.config.offset,
            a
        }
        ,
        d._getContainer = function() {
            return !1 === this.config.container ? document.body : b.isElement(this.config.container) ? a.default(this.config.container) : a.default(document).find(this.config.container)
        }
        ,
        d._getAttachment = function(a) {
            return a_[a.toUpperCase()]
        }
        ,
        d._setListeners = function() {
            var b = this;
            this.config.trigger.split(" ").forEach(function(c) {
                if ("click" === c)
                    a.default(b.element).on(b.constructor.Event.CLICK, b.config.selector, function(a) {
                        return b.toggle(a)
                    });
                else if ("manual" !== c) {
                    var d = "hover" === c ? b.constructor.Event.MOUSEENTER : b.constructor.Event.FOCUSIN
                      , e = "hover" === c ? b.constructor.Event.MOUSELEAVE : b.constructor.Event.FOCUSOUT;
                    a.default(b.element).on(d, b.config.selector, function(a) {
                        return b._enter(a)
                    }).on(e, b.config.selector, function(a) {
                        return b._leave(a)
                    })
                }
            }),
            this._hideModalHandler = function() {
                b.element && b.hide()
            }
            ,
            a.default(this.element).closest(".modal").on("hide.bs.modal", this._hideModalHandler),
            this.config.selector ? this.config = c({}, this.config, {
                trigger: "manual",
                selector: ""
            }) : this._fixTitle()
        }
        ,
        d._fixTitle = function() {
            var a = typeof this.element.getAttribute("data-original-title");
            (this.element.getAttribute("title") || "string" !== a) && (this.element.setAttribute("data-original-title", this.element.getAttribute("title") || ""),
            this.element.setAttribute("title", ""))
        }
        ,
        d._enter = function(c, b) {
            var d = this.constructor.DATA_KEY;
            (b = b || a.default(c.currentTarget).data(d)) || (b = new this.constructor(c.currentTarget,this._getDelegateConfig()),
            a.default(c.currentTarget).data(d, b)),
            c && (b._activeTrigger["focusin" === c.type ? "focus" : "hover"] = !0),
            a.default(b.getTipElement()).hasClass("show") || "show" === b._hoverState ? b._hoverState = "show" : (clearTimeout(b._timeout),
            b._hoverState = "show",
            b.config.delay && b.config.delay.show ? b._timeout = setTimeout(function() {
                "show" === b._hoverState && b.show()
            }, b.config.delay.show) : b.show())
        }
        ,
        d._leave = function(c, b) {
            var d = this.constructor.DATA_KEY;
            (b = b || a.default(c.currentTarget).data(d)) || (b = new this.constructor(c.currentTarget,this._getDelegateConfig()),
            a.default(c.currentTarget).data(d, b)),
            c && (b._activeTrigger["focusout" === c.type ? "focus" : "hover"] = !1),
            b._isWithActiveTrigger() || (clearTimeout(b._timeout),
            b._hoverState = "out",
            b.config.delay && b.config.delay.hide ? b._timeout = setTimeout(function() {
                "out" === b._hoverState && b.hide()
            }, b.config.delay.hide) : b.hide())
        }
        ,
        d._isWithActiveTrigger = function() {
            for (var a in this._activeTrigger)
                if (this._activeTrigger[a])
                    return !0;
            return !1
        }
        ,
        d._getConfig = function(d) {
            var e = a.default(this.element).data();
            return Object.keys(e).forEach(function(a) {
                -1 !== aY.indexOf(a) && delete e[a]
            }),
            "number" == typeof (d = c({}, this.constructor.Default, e, "object" == typeof d && d ? d : {})).delay && (d.delay = {
                show: d.delay,
                hide: d.delay
            }),
            "number" == typeof d.title && (d.title = d.title.toString()),
            "number" == typeof d.content && (d.content = d.content.toString()),
            b.typeCheckConfig(k, d, this.constructor.DefaultType),
            d.sanitize && (d.template = aU(d.template, d.whiteList, d.sanitizeFn)),
            d
        }
        ,
        d._getDelegateConfig = function() {
            var b = {}, a;
            if (this.config)
                for (a in this.config)
                    this.constructor.Default[a] !== this.config[a] && (b[a] = this.config[a]);
            return b
        }
        ,
        d._cleanTipClass = function() {
            var c = a.default(this.getTipElement())
              , b = c.attr("class").match(aX);
            null !== b && b.length && c.removeClass(b.join(""))
        }
        ,
        d._handlePopperPlacementChange = function(a) {
            this.tip = a.instance.popper,
            this._cleanTipClass(),
            this.addAttachmentClass(this._getAttachment(a.placement))
        }
        ,
        d._fixTransition = function() {
            var b = this.getTipElement()
              , c = this.config.animation;
            null === b.getAttribute("x-placement") && (a.default(b).removeClass("fade"),
            this.config.animation = !1,
            this.hide(),
            this.show(),
            this.config.animation = c)
        }
        ,
        e._jQueryInterface = function(b) {
            return this.each(function() {
                var d = a.default(this)
                  , c = d.data("bs.tooltip")
                  , f = "object" == typeof b && b;
                if ((c || !/dispose|hide/.test(b)) && (c || (c = new e(this,f),
                d.data("bs.tooltip", c)),
                "string" == typeof b)) {
                    if ("undefined" == typeof c[b])
                        throw new TypeError('No method named "' + b + '"');
                    c[b]()
                }
            })
        }
        ,
        f(e, null, [{
            key: "VERSION",
            get: function() {
                return "4.6.0"
            }
        }, {
            key: "Default",
            get: function() {
                return a$
            }
        }, {
            key: "NAME",
            get: function() {
                return k
            }
        }, {
            key: "DATA_KEY",
            get: function() {
                return "bs.tooltip"
            }
        }, {
            key: "Event",
            get: function() {
                return ba
            }
        }, {
            key: "EVENT_KEY",
            get: function() {
                return ".bs.tooltip"
            }
        }, {
            key: "DefaultType",
            get: function() {
                return aZ
            }
        }]),
        e
    }(),
    a.default.fn[k] = i._jQueryInterface,
    a.default.fn[k].Constructor = i,
    a.default.fn[k].noConflict = function() {
        return a.default.fn[k] = aW,
        i._jQueryInterface
    }
    ,
    s = "popover",
    bd = a.default.fn[s],
    bh = new RegExp("(^|\\s)bs-popover\\S+","g"),
    bf = c({}, i.Default, {
        placement: "right",
        trigger: "click",
        content: "",
        template: '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>'
    }),
    bg = c({}, i.DefaultType, {
        content: "(string|element|function)"
    }),
    aD = {
        HIDE: "hide.bs.popover",
        HIDDEN: "hidden.bs.popover",
        SHOW: "show.bs.popover",
        SHOWN: "shown.bs.popover",
        INSERTED: "inserted.bs.popover",
        CLICK: "click.bs.popover",
        FOCUSIN: "focusin.bs.popover",
        FOCUSOUT: "focusout.bs.popover",
        MOUSEENTER: "mouseenter.bs.popover",
        MOUSELEAVE: "mouseleave.bs.popover"
    },
    E = function(g) {
        var d, e, c;
        function b() {
            return g.apply(this, arguments) || this
        }
        return e = g,
        (d = b).prototype = Object.create(e.prototype),
        d.prototype.constructor = d,
        d.__proto__ = e,
        c = b.prototype,
        c.isWithContent = function() {
            return this.getTitle() || this._getContent()
        }
        ,
        c.addAttachmentClass = function(b) {
            a.default(this.getTipElement()).addClass("bs-popover-" + b)
        }
        ,
        c.getTipElement = function() {
            return this.tip = this.tip || a.default(this.config.template)[0],
            this.tip
        }
        ,
        c.setContent = function() {
            var c = a.default(this.getTipElement()), b;
            this.setElementContent(c.find(".popover-header"), this.getTitle()),
            b = this._getContent(),
            "function" == typeof b && (b = b.call(this.element)),
            this.setElementContent(c.find(".popover-body"), b),
            c.removeClass("fade show")
        }
        ,
        c._getContent = function() {
            return this.element.getAttribute("data-content") || this.config.content
        }
        ,
        c._cleanTipClass = function() {
            var c = a.default(this.getTipElement())
              , b = c.attr("class").match(bh);
            null !== b && b.length > 0 && c.removeClass(b.join(""))
        }
        ,
        b._jQueryInterface = function(c) {
            return this.each(function() {
                var d = a.default(this).data("bs.popover")
                  , e = "object" == typeof c ? c : null;
                if ((d || !/dispose|hide/.test(c)) && (d || (d = new b(this,e),
                a.default(this).data("bs.popover", d)),
                "string" == typeof c)) {
                    if ("undefined" == typeof d[c])
                        throw new TypeError('No method named "' + c + '"');
                    d[c]()
                }
            })
        }
        ,
        f(b, null, [{
            key: "VERSION",
            get: function() {
                return "4.6.0"
            }
        }, {
            key: "Default",
            get: function() {
                return bf
            }
        }, {
            key: "NAME",
            get: function() {
                return s
            }
        }, {
            key: "DATA_KEY",
            get: function() {
                return "bs.popover"
            }
        }, {
            key: "Event",
            get: function() {
                return aD
            }
        }, {
            key: "EVENT_KEY",
            get: function() {
                return ".bs.popover"
            }
        }, {
            key: "DefaultType",
            get: function() {
                return bg
            }
        }]),
        b
    }(i),
    a.default.fn[s] = E._jQueryInterface,
    a.default.fn[s].Constructor = E,
    a.default.fn[s].noConflict = function() {
        return a.default.fn[s] = bd,
        E._jQueryInterface
    }
    ,
    l = "scrollspy",
    ap = a.default.fn[l],
    R = {
        offset: 10,
        method: "auto",
        target: ""
    },
    ak = {
        offset: "number",
        method: "string",
        target: "(string|element)"
    },
    D = function() {
        function e(b, c) {
            var d = this;
            this._element = b,
            this._scrollElement = "BODY" === b.tagName ? window : b,
            this._config = this._getConfig(c),
            this._selector = this._config.target + " .nav-link," + this._config.target + " .list-group-item," + this._config.target + " .dropdown-item",
            this._offsets = [],
            this._targets = [],
            this._activeTarget = null,
            this._scrollHeight = 0,
            a.default(this._scrollElement).on("scroll.bs.scrollspy", function(a) {
                return d._process(a)
            }),
            this.refresh(),
            this._process()
        }
        var d = e.prototype;
        return d.refresh = function() {
            var c = this
              , e = this._scrollElement === this._scrollElement.window ? "offset" : "position"
              , d = "auto" === this._config.method ? e : this._config.method
              , f = "position" === d ? this._getScrollTop() : 0;
            this._offsets = [],
            this._targets = [],
            this._scrollHeight = this._getScrollHeight(),
            [].slice.call(document.querySelectorAll(this._selector)).map(function(h) {
                var c, e = b.getSelectorFromElement(h), g;
                if (e && (c = document.querySelector(e)),
                c)
                    if (g = c.getBoundingClientRect(),
                    g.width || g.height)
                        return [a.default(c)[d]().top + f, e];
                return null
            }).filter(function(a) {
                return a
            }).sort(function(a, b) {
                return a[0] - b[0]
            }).forEach(function(a) {
                c._offsets.push(a[0]),
                c._targets.push(a[1])
            })
        }
        ,
        d.dispose = function() {
            a.default.removeData(this._element, "bs.scrollspy"),
            a.default(this._scrollElement).off(".bs.scrollspy"),
            this._element = null,
            this._scrollElement = null,
            this._config = null,
            this._selector = null,
            this._offsets = null,
            this._targets = null,
            this._activeTarget = null,
            this._scrollHeight = null
        }
        ,
        d._getConfig = function(d) {
            if ("string" != typeof (d = c({}, R, "object" == typeof d && d ? d : {})).target && b.isElement(d.target)) {
                var e = a.default(d.target).attr("id");
                e || (e = b.getUID(l),
                a.default(d.target).attr("id", e)),
                d.target = "#" + e
            }
            return b.typeCheckConfig(l, d, ak),
            d
        }
        ,
        d._getScrollTop = function() {
            return this._scrollElement === window ? this._scrollElement.pageYOffset : this._scrollElement.scrollTop
        }
        ,
        d._getScrollHeight = function() {
            return this._scrollElement.scrollHeight || Math.max(document.body.scrollHeight, document.documentElement.scrollHeight)
        }
        ,
        d._getOffsetHeight = function() {
            return this._scrollElement === window ? window.innerHeight : this._scrollElement.getBoundingClientRect().height
        }
        ,
        d._process = function() {
            var b = this._getScrollTop() + this._config.offset, c = this._getScrollHeight(), e = this._config.offset + c - this._getOffsetHeight(), d, a;
            if (this._scrollHeight !== c && this.refresh(),
            b >= e)
                d = this._targets[this._targets.length - 1],
                this._activeTarget !== d && this._activate(d);
            else {
                if (this._activeTarget && b < this._offsets[0] && this._offsets[0] > 0)
                    return this._activeTarget = null,
                    void this._clear();
                for (a = this._offsets.length; a--; )
                    this._activeTarget !== this._targets[a] && b >= this._offsets[a] && ("undefined" == typeof this._offsets[a + 1] || b < this._offsets[a + 1]) && this._activate(this._targets[a])
            }
        }
        ,
        d._activate = function(c) {
            this._activeTarget = c,
            this._clear();
            var d = this._selector.split(",").map(function(a) {
                return a + '[data-target="' + c + '"],' + a + '[href="' + c + '"]'
            })
              , b = a.default([].slice.call(document.querySelectorAll(d.join(","))));
            b.hasClass("dropdown-item") ? (b.closest(".dropdown").find(".dropdown-toggle").addClass("active"),
            b.addClass("active")) : (b.addClass("active"),
            b.parents(".nav, .list-group").prev(".nav-link, .list-group-item").addClass("active"),
            b.parents(".nav, .list-group").prev(".nav-item").children(".nav-link").addClass("active")),
            a.default(this._scrollElement).trigger("activate.bs.scrollspy", {
                relatedTarget: c
            })
        }
        ,
        d._clear = function() {
            [].slice.call(document.querySelectorAll(this._selector)).filter(function(a) {
                return a.classList.contains("active")
            }).forEach(function(a) {
                return a.classList.remove("active")
            })
        }
        ,
        e._jQueryInterface = function(b) {
            return this.each(function() {
                var c = a.default(this).data("bs.scrollspy");
                if (c || (c = new e(this,"object" == typeof b && b),
                a.default(this).data("bs.scrollspy", c)),
                "string" == typeof b) {
                    if ("undefined" == typeof c[b])
                        throw new TypeError('No method named "' + b + '"');
                    c[b]()
                }
            })
        }
        ,
        f(e, null, [{
            key: "VERSION",
            get: function() {
                return "4.6.0"
            }
        }, {
            key: "Default",
            get: function() {
                return R
            }
        }]),
        e
    }(),
    a.default(window).on("load.bs.scrollspy.data-api", function() {
        for (var b = [].slice.call(document.querySelectorAll('[data-spy="scroll"]')), c = b.length, d; c--; )
            d = a.default(b[c]),
            D._jQueryInterface.call(d, d.data())
    }),
    a.default.fn[l] = D._jQueryInterface,
    a.default.fn[l].Constructor = D,
    a.default.fn[l].noConflict = function() {
        return a.default.fn[l] = ap,
        D._jQueryInterface
    }
    ,
    ag = a.default.fn.tab,
    v = function() {
        function c(a) {
            this._element = a
        }
        var d = c.prototype;
        return d.show = function() {
            var f = this, e, c, d, g, k, h, i, j;
            this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE && a.default(this._element).hasClass("active") || a.default(this._element).hasClass("disabled") || (d = a.default(this._element).closest(".nav, .list-group")[0],
            g = b.getSelectorFromElement(this._element),
            d && (k = "UL" === d.nodeName || "OL" === d.nodeName ? "> li > .active" : ".active",
            c = (c = a.default.makeArray(a.default(d).find(k)))[c.length - 1]),
            h = a.default.Event("hide.bs.tab", {
                relatedTarget: this._element
            }),
            i = a.default.Event("show.bs.tab", {
                relatedTarget: c
            }),
            (c && a.default(c).trigger(h),
            a.default(this._element).trigger(i),
            !i.isDefaultPrevented() && !h.isDefaultPrevented()) && (g && (e = document.querySelector(g)),
            this._activate(this._element, d),
            j = function() {
                var b = a.default.Event("hidden.bs.tab", {
                    relatedTarget: f._element
                })
                  , d = a.default.Event("shown.bs.tab", {
                    relatedTarget: c
                });
                a.default(c).trigger(b),
                a.default(f._element).trigger(d)
            }
            ,
            e ? this._activate(e, e.parentNode, j) : j()))
        }
        ,
        d.dispose = function() {
            a.default.removeData(this._element, "bs.tab"),
            this._element = null
        }
        ,
        d._activate = function(i, d, f) {
            var g = this, c = (!d || "UL" !== d.nodeName && "OL" !== d.nodeName ? a.default(d).children(".active") : a.default(d).find("> li > .active"))[0], h = f && c && a.default(c).hasClass("fade"), e = function() {
                return g._transitionComplete(i, c, f)
            }, j;
            c && h ? (j = b.getTransitionDurationFromElement(c),
            a.default(c).removeClass("show").one(b.TRANSITION_END, e).emulateTransitionEnd(j)) : e()
        }
        ,
        d._transitionComplete = function(c, d, g) {
            var e, f, h;
            d && (a.default(d).removeClass("active"),
            e = a.default(d.parentNode).find("> .dropdown-menu .active")[0],
            e && a.default(e).removeClass("active"),
            "tab" === d.getAttribute("role") && d.setAttribute("aria-selected", !1)),
            (a.default(c).addClass("active"),
            "tab" === c.getAttribute("role") && c.setAttribute("aria-selected", !0),
            b.reflow(c),
            c.classList.contains("fade") && c.classList.add("show"),
            c.parentNode && a.default(c.parentNode).hasClass("dropdown-menu")) && (f = a.default(c).closest(".dropdown")[0],
            f && (h = [].slice.call(f.querySelectorAll(".dropdown-toggle")),
            a.default(h).addClass("active")),
            c.setAttribute("aria-expanded", !0)),
            g && g()
        }
        ,
        c._jQueryInterface = function(b) {
            return this.each(function() {
                var e = a.default(this)
                  , d = e.data("bs.tab");
                if (d || (d = new c(this),
                e.data("bs.tab", d)),
                "string" == typeof b) {
                    if ("undefined" == typeof d[b])
                        throw new TypeError('No method named "' + b + '"');
                    d[b]()
                }
            })
        }
        ,
        f(c, null, [{
            key: "VERSION",
            get: function() {
                return "4.6.0"
            }
        }]),
        c
    }(),
    a.default(document).on("click.bs.tab.data-api", '[data-toggle="tab"], [data-toggle="pill"], [data-toggle="list"]', function(b) {
        b.preventDefault(),
        v._jQueryInterface.call(a.default(this), "show")
    }),
    a.default.fn.tab = v._jQueryInterface,
    a.default.fn.tab.Constructor = v,
    a.default.fn.tab.noConflict = function() {
        return a.default.fn.tab = ag,
        v._jQueryInterface
    }
    ,
    bb = a.default.fn.toast,
    be = {
        animation: "boolean",
        autohide: "boolean",
        delay: "number"
    },
    X = {
        animation: !0,
        autohide: !0,
        delay: 500
    },
    G = function() {
        function e(a, b) {
            this._element = a,
            this._config = this._getConfig(b),
            this._timeout = null,
            this._setListeners()
        }
        var d = e.prototype;
        return d.show = function() {
            var c = this, d = a.default.Event("show.bs.toast"), e, f;
            a.default(this._element).trigger(d),
            !d.isDefaultPrevented() && (this._clearTimeout(),
            this._config.animation && this._element.classList.add("fade"),
            e = function() {
                c._element.classList.remove("showing"),
                c._element.classList.add("show"),
                a.default(c._element).trigger("shown.bs.toast"),
                c._config.autohide && (c._timeout = setTimeout(function() {
                    c.hide()
                }, c._config.delay))
            }
            ,
            (this._element.classList.remove("hide"),
            b.reflow(this._element),
            this._element.classList.add("showing"),
            this._config.animation) ? (f = b.getTransitionDurationFromElement(this._element),
            a.default(this._element).one(b.TRANSITION_END, e).emulateTransitionEnd(f)) : e())
        }
        ,
        d.hide = function() {
            if (this._element.classList.contains("show")) {
                var b = a.default.Event("hide.bs.toast");
                a.default(this._element).trigger(b),
                b.isDefaultPrevented() || this._close()
            }
        }
        ,
        d.dispose = function() {
            this._clearTimeout(),
            this._element.classList.contains("show") && this._element.classList.remove("show"),
            a.default(this._element).off("click.dismiss.bs.toast"),
            a.default.removeData(this._element, "bs.toast"),
            this._element = null,
            this._config = null
        }
        ,
        d._getConfig = function(d) {
            return d = c({}, X, a.default(this._element).data(), "object" == typeof d && d ? d : {}),
            b.typeCheckConfig("toast", d, this.constructor.DefaultType),
            d
        }
        ,
        d._setListeners = function() {
            var b = this;
            a.default(this._element).on("click.dismiss.bs.toast", '[data-dismiss="toast"]', function() {
                return b.hide()
            })
        }
        ,
        d._close = function() {
            var c = this, d = function() {
                c._element.classList.add("hide"),
                a.default(c._element).trigger("hidden.bs.toast")
            }, e;
            this._element.classList.remove("show"),
            this._config.animation ? (e = b.getTransitionDurationFromElement(this._element),
            a.default(this._element).one(b.TRANSITION_END, d).emulateTransitionEnd(e)) : d()
        }
        ,
        d._clearTimeout = function() {
            clearTimeout(this._timeout),
            this._timeout = null
        }
        ,
        e._jQueryInterface = function(b) {
            return this.each(function() {
                var d = a.default(this)
                  , c = d.data("bs.toast");
                if (c || (c = new e(this,"object" == typeof b && b),
                d.data("bs.toast", c)),
                "string" == typeof b) {
                    if ("undefined" == typeof c[b])
                        throw new TypeError('No method named "' + b + '"');
                    c[b](this)
                }
            })
        }
        ,
        f(e, null, [{
            key: "VERSION",
            get: function() {
                return "4.6.0"
            }
        }, {
            key: "DefaultType",
            get: function() {
                return be
            }
        }, {
            key: "Default",
            get: function() {
                return X
            }
        }]),
        e
    }(),
    a.default.fn.toast = G._jQueryInterface,
    a.default.fn.toast.Constructor = G,
    a.default.fn.toast.noConflict = function() {
        return a.default.fn.toast = bb,
        G._jQueryInterface
    }
    ,
    d.Alert = r,
    d.Button = w,
    d.Carousel = m,
    d.Collapse = z,
    d.Dropdown = g,
    d.Modal = B,
    d.Popover = E,
    d.Scrollspy = D,
    d.Tab = v,
    d.Toast = G,
    d.Tooltip = i,
    d.Util = b,
    Object.defineProperty(d, "__esModule", {
        value: !0
    })
});
let mouseoverTimer, lastTouchTimestamp;
const prefetches = new Set
  , prefetchElement = document.createElement('link')
  , isSupported = prefetchElement.relList && prefetchElement.relList.supports && prefetchElement.relList.supports('prefetch') && window.IntersectionObserver && 'isIntersecting'in IntersectionObserverEntry.prototype
  , allowQueryString = 'instantAllowQueryString'in document.body.dataset
  , allowExternalLinks = 'instantAllowExternalLinks'in document.body.dataset
  , useWhitelist = 'instantWhitelist'in document.body.dataset
  , mousedownShortcut = 'instantMousedownShortcut'in document.body.dataset
  , DELAY_TO_NOT_BE_CONSIDERED_A_TOUCH_INITIATED_ACTION = 1111;
let delayOnHover = 65
  , useMousedown = !1
  , useMousedownOnly = !1
  , useViewport = !1;
if ('instantIntensity'in document.body.dataset) {
    const a = document.body.dataset.instantIntensity;
    if (a.substr(0, 'mousedown'.length) == 'mousedown')
        useMousedown = !0,
        a == 'mousedown-only' && (useMousedownOnly = !0);
    else if (a.substr(0, 'viewport'.length) == 'viewport')
        navigator.connection && (navigator.connection.saveData || navigator.connection.effectiveType && navigator.connection.effectiveType.includes('2g')) || (a == "viewport" ? document.documentElement.clientWidth * document.documentElement.clientHeight < 45e4 && (useViewport = !0) : a == "viewport-all" && (useViewport = !0));
    else {
        const b = parseInt(a);
        isNaN(b) || (delayOnHover = b)
    }
}
if (isSupported) {
    const a = {
        capture: !0,
        passive: !0
    };
    if (useMousedownOnly || document.addEventListener('touchstart', touchstartListener, a),
    useMousedown ? mousedownShortcut || document.addEventListener('mousedown', mousedownListener, a) : document.addEventListener('mouseover', mouseoverListener, a),
    mousedownShortcut && document.addEventListener('mousedown', mousedownShortcutListener, a),
    useViewport) {
        let a;
        window.requestIdleCallback ? a = a=>{
            requestIdleCallback(a, {
                timeout: 1500
            })
        }
        : a = a=>{
            a()
        }
        ,
        a(()=>{
            const a = new IntersectionObserver(b=>{
                b.forEach(b=>{
                    if (b.isIntersecting) {
                        const c = b.target;
                        a.unobserve(c),
                        preload(c.href)
                    }
                }
                )
            }
            );
            document.querySelectorAll('a').forEach(b=>{
                isPreloadable(b) && a.observe(b)
            }
            )
        }
        )
    }
}
function touchstartListener(b) {
    lastTouchTimestamp = performance.now();
    const a = b.target.closest('a');
    if (!isPreloadable(a))
        return;
    preload(a.href)
}
function mouseoverListener(b) {
    if (performance.now() - lastTouchTimestamp < DELAY_TO_NOT_BE_CONSIDERED_A_TOUCH_INITIATED_ACTION)
        return;
    const a = b.target.closest('a');
    if (!isPreloadable(a))
        return;
    a.addEventListener('mouseout', mouseoutListener, {
        passive: !0
    }),
    mouseoverTimer = setTimeout(()=>{
        preload(a.href),
        mouseoverTimer = void 0
    }
    , delayOnHover)
}
function mousedownListener(b) {
    const a = b.target.closest('a');
    if (!isPreloadable(a))
        return;
    preload(a.href)
}
function mouseoutListener(a) {
    if (a.relatedTarget && a.target.closest('a') == a.relatedTarget.closest('a'))
        return;
    mouseoverTimer && (clearTimeout(mouseoverTimer),
    mouseoverTimer = void 0)
}
function mousedownShortcutListener(a) {
    if (performance.now() - lastTouchTimestamp < DELAY_TO_NOT_BE_CONSIDERED_A_TOUCH_INITIATED_ACTION)
        return;
    const b = a.target.closest('a');
    if (a.which > 1 || a.metaKey || a.ctrlKey)
        return;
    if (!b)
        return;
    b.addEventListener('click', function(a) {
        if (a.detail == 1337)
            return;
        a.preventDefault()
    }, {
        capture: !0,
        passive: !1,
        once: !0
    });
    const c = new MouseEvent('click',{
        view: window,
        bubbles: !0,
        cancelable: !1,
        detail: 1337
    });
    b.dispatchEvent(c)
}
function isPreloadable(a) {
    if (!a || !a.href)
        return;
    if (useWhitelist && !('instant'in a.dataset))
        return;
    if (!allowExternalLinks && a.origin != location.origin && !('instant'in a.dataset))
        return;
    if (!['http:', 'https:'].includes(a.protocol))
        return;
    if (a.protocol == 'http:' && location.protocol == 'https:')
        return;
    if (!allowQueryString && a.search && !('instant'in a.dataset))
        return;
    if (a.hash && a.pathname + a.search == location.pathname + location.search)
        return;
    if ('noInstant'in a.dataset)
        return;
    return !0
}
function preload(a) {
    if (prefetches.has(a))
        return;
    const b = document.createElement('link');
    b.rel = 'prefetch',
    b.href = a,
    document.head.appendChild(b),
    prefetches.add(a)
}
