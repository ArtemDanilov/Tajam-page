! function (e) {
    var t = {};

    function r(n) {
        if (t[n]) return t[n].exports;
        var o = t[n] = {
            i: n,
            l: !1,
            exports: {}
        };
        return e[n].call(o.exports, o, o.exports, r), o.l = !0, o.exports
    }
    r.m = e, r.c = t, r.d = function (e, t, n) {
        r.o(e, t) || Object.defineProperty(e, t, {
            enumerable: !0,
            get: n
        })
    }, r.r = function (e) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(e, "__esModule", {
            value: !0
        })
    }, r.t = function (e, t) {
        if (1 & t && (e = r(e)), 8 & t) return e;
        if (4 & t && "object" == typeof e && e && e.__esModule) return e;
        var n = Object.create(null);
        if (r.r(n), Object.defineProperty(n, "default", {
                enumerable: !0,
                value: e
            }), 2 & t && "string" != typeof e)
            for (var o in e) r.d(n, o, function (t) {
                return e[t]
            }.bind(null, o));
        return n
    }, r.n = function (e) {
        var t = e && e.__esModule ? function () {
            return e.default
        } : function () {
            return e
        };
        return r.d(t, "a", t), t
    }, r.o = function (e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    }, r.p = "", r(r.s = 0)
}([function (e, t, r) {
    "use strict";
    r.r(t);
    var n = document.querySelector(".nav"),
        o = document.querySelector(".nav-bg"),
        u = document.querySelector(".nav__list");

    function i(e) {
        e.preventDefault();
        var t = e.target.getAttribute("href");
        window.scrollTo({
            top: document.querySelector(t).offsetTop - 50,
            behavior: "smooth"
        })
    }

    function l(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
        return n
    }
    var a, c = document.getElementById("hamburger"),
        f = function (e, t) {
            var r;
            if ("undefined" == typeof Symbol || null == e[Symbol.iterator]) {
                if (Array.isArray(e) || (r = function (e, t) {
                        if (!e) return;
                        if ("string" == typeof e) return l(e, t);
                        var r = Object.prototype.toString.call(e).slice(8, -1);
                        "Object" === r && e.constructor && (r = e.constructor.name);
                        if ("Map" === r || "Set" === r) return Array.from(e);
                        if ("Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return l(e, t)
                    }(e)) || t && e && "number" == typeof e.length) {
                    r && (e = r);
                    var n = 0,
                        o = function () {};
                    return {
                        s: o,
                        n: function () {
                            return n >= e.length ? {
                                done: !0
                            } : {
                                done: !1,
                                value: e[n++]
                            }
                        },
                        e: function (e) {
                            throw e
                        },
                        f: o
                    }
                }
                throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }
            var u, i = !0,
                a = !1;
            return {
                s: function () {
                    r = e[Symbol.iterator]()
                },
                n: function () {
                    var e = r.next();
                    return i = e.done, e
                },
                e: function (e) {
                    a = !0, u = e
                },
                f: function () {
                    try {
                        i || null == r.return || r.return()
                    } finally {
                        if (a) throw u
                    }
                }
            }
        }(document.querySelectorAll(".nav__list--item"));
    try {
        for (f.s(); !(a = f.n()).done;) {
            a.value.addEventListener("click", i)
        }
    } catch (e) {
        f.e(e)
    } finally {
        f.f()
    }
    window.addEventListener("scroll", (function () {
        window.pageYOffset >= 50 ? n.classList.add("scroll-bg") : n.classList.remove("scroll-bg")
    })), c.addEventListener("click", (function () {
        o.classList.toggle("nav-bg-active"), u.classList.toggle("nav-list-active")
    }))
}]);