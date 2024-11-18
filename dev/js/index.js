"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

/*! jQuery v3.5.1 | (c) JS Foundation and other contributors | jquery.org/license */
!function (e, t) {
  "use strict";

  "object" == (typeof module === "undefined" ? "undefined" : _typeof(module)) && "object" == _typeof(module.exports) ? module.exports = e.document ? t(e, !0) : function (e) {
    if (!e.document) throw new Error("jQuery requires a window with a document");
    return t(e);
  } : t(e);
}("undefined" != typeof window ? window : void 0, function (C, e) {
  "use strict";

  var t = [],
      r = Object.getPrototypeOf,
      s = t.slice,
      g = t.flat ? function (e) {
    return t.flat.call(e);
  } : function (e) {
    return t.concat.apply([], e);
  },
      u = t.push,
      i = t.indexOf,
      n = {},
      o = n.toString,
      v = n.hasOwnProperty,
      a = v.toString,
      l = a.call(Object),
      y = {},
      m = function m(e) {
    return "function" == typeof e && "number" != typeof e.nodeType;
  },
      x = function x(e) {
    return null != e && e === e.window;
  },
      E = C.document,
      c = {
    type: !0,
    src: !0,
    nonce: !0,
    noModule: !0
  };

  function b(e, t, n) {
    var r,
        i,
        o = (n = n || E).createElement("script");
    if (o.text = e, t) for (r in c) {
      (i = t[r] || t.getAttribute && t.getAttribute(r)) && o.setAttribute(r, i);
    }
    n.head.appendChild(o).parentNode.removeChild(o);
  }

  function w(e) {
    return null == e ? e + "" : "object" == _typeof(e) || "function" == typeof e ? n[o.call(e)] || "object" : _typeof(e);
  }

  var f = "3.5.1",
      S = function S(e, t) {
    return new S.fn.init(e, t);
  };

  function p(e) {
    var t = !!e && "length" in e && e.length,
        n = w(e);
    return !m(e) && !x(e) && ("array" === n || 0 === t || "number" == typeof t && 0 < t && t - 1 in e);
  }

  S.fn = S.prototype = {
    jquery: f,
    constructor: S,
    length: 0,
    toArray: function toArray() {
      return s.call(this);
    },
    get: function get(e) {
      return null == e ? s.call(this) : e < 0 ? this[e + this.length] : this[e];
    },
    pushStack: function pushStack(e) {
      var t = S.merge(this.constructor(), e);
      return t.prevObject = this, t;
    },
    each: function each(e) {
      return S.each(this, e);
    },
    map: function map(n) {
      return this.pushStack(S.map(this, function (e, t) {
        return n.call(e, t, e);
      }));
    },
    slice: function slice() {
      return this.pushStack(s.apply(this, arguments));
    },
    first: function first() {
      return this.eq(0);
    },
    last: function last() {
      return this.eq(-1);
    },
    even: function even() {
      return this.pushStack(S.grep(this, function (e, t) {
        return (t + 1) % 2;
      }));
    },
    odd: function odd() {
      return this.pushStack(S.grep(this, function (e, t) {
        return t % 2;
      }));
    },
    eq: function eq(e) {
      var t = this.length,
          n = +e + (e < 0 ? t : 0);
      return this.pushStack(0 <= n && n < t ? [this[n]] : []);
    },
    end: function end() {
      return this.prevObject || this.constructor();
    },
    push: u,
    sort: t.sort,
    splice: t.splice
  }, S.extend = S.fn.extend = function () {
    var e,
        t,
        n,
        r,
        i,
        o,
        a = arguments[0] || {},
        s = 1,
        u = arguments.length,
        l = !1;

    for ("boolean" == typeof a && (l = a, a = arguments[s] || {}, s++), "object" == _typeof(a) || m(a) || (a = {}), s === u && (a = this, s--); s < u; s++) {
      if (null != (e = arguments[s])) for (t in e) {
        r = e[t], "__proto__" !== t && a !== r && (l && r && (S.isPlainObject(r) || (i = Array.isArray(r))) ? (n = a[t], o = i && !Array.isArray(n) ? [] : i || S.isPlainObject(n) ? n : {}, i = !1, a[t] = S.extend(l, o, r)) : void 0 !== r && (a[t] = r));
      }
    }

    return a;
  }, S.extend({
    expando: "jQuery" + (f + Math.random()).replace(/\D/g, ""),
    isReady: !0,
    error: function error(e) {
      throw new Error(e);
    },
    noop: function noop() {},
    isPlainObject: function isPlainObject(e) {
      var t, n;
      return !(!e || "[object Object]" !== o.call(e)) && (!(t = r(e)) || "function" == typeof (n = v.call(t, "constructor") && t.constructor) && a.call(n) === l);
    },
    isEmptyObject: function isEmptyObject(e) {
      var t;

      for (t in e) {
        return !1;
      }

      return !0;
    },
    globalEval: function globalEval(e, t, n) {
      b(e, {
        nonce: t && t.nonce
      }, n);
    },
    each: function each(e, t) {
      var n,
          r = 0;

      if (p(e)) {
        for (n = e.length; r < n; r++) {
          if (!1 === t.call(e[r], r, e[r])) break;
        }
      } else for (r in e) {
        if (!1 === t.call(e[r], r, e[r])) break;
      }

      return e;
    },
    makeArray: function makeArray(e, t) {
      var n = t || [];
      return null != e && (p(Object(e)) ? S.merge(n, "string" == typeof e ? [e] : e) : u.call(n, e)), n;
    },
    inArray: function inArray(e, t, n) {
      return null == t ? -1 : i.call(t, e, n);
    },
    merge: function merge(e, t) {
      for (var n = +t.length, r = 0, i = e.length; r < n; r++) {
        e[i++] = t[r];
      }

      return e.length = i, e;
    },
    grep: function grep(e, t, n) {
      for (var r = [], i = 0, o = e.length, a = !n; i < o; i++) {
        !t(e[i], i) !== a && r.push(e[i]);
      }

      return r;
    },
    map: function map(e, t, n) {
      var r,
          i,
          o = 0,
          a = [];
      if (p(e)) for (r = e.length; o < r; o++) {
        null != (i = t(e[o], o, n)) && a.push(i);
      } else for (o in e) {
        null != (i = t(e[o], o, n)) && a.push(i);
      }
      return g(a);
    },
    guid: 1,
    support: y
  }), "function" == typeof Symbol && (S.fn[Symbol.iterator] = t[Symbol.iterator]), S.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function (e, t) {
    n["[object " + t + "]"] = t.toLowerCase();
  });

  var d = function (n) {
    var e,
        d,
        b,
        o,
        i,
        h,
        f,
        g,
        w,
        u,
        l,
        T,
        C,
        a,
        E,
        v,
        s,
        c,
        y,
        S = "sizzle" + 1 * new Date(),
        p = n.document,
        k = 0,
        r = 0,
        m = ue(),
        x = ue(),
        A = ue(),
        N = ue(),
        D = function D(e, t) {
      return e === t && (l = !0), 0;
    },
        j = {}.hasOwnProperty,
        t = [],
        q = t.pop,
        L = t.push,
        H = t.push,
        O = t.slice,
        P = function P(e, t) {
      for (var n = 0, r = e.length; n < r; n++) {
        if (e[n] === t) return n;
      }

      return -1;
    },
        R = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
        M = "[\\x20\\t\\r\\n\\f]",
        I = "(?:\\\\[\\da-fA-F]{1,6}" + M + "?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+",
        W = "\\[" + M + "*(" + I + ")(?:" + M + "*([*^$|!~]?=)" + M + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + I + "))|)" + M + "*\\]",
        F = ":(" + I + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + W + ")*)|.*)\\)|)",
        B = new RegExp(M + "+", "g"),
        $ = new RegExp("^" + M + "+|((?:^|[^\\\\])(?:\\\\.)*)" + M + "+$", "g"),
        _ = new RegExp("^" + M + "*," + M + "*"),
        z = new RegExp("^" + M + "*([>+~]|" + M + ")" + M + "*"),
        U = new RegExp(M + "|>"),
        X = new RegExp(F),
        V = new RegExp("^" + I + "$"),
        G = {
      ID: new RegExp("^#(" + I + ")"),
      CLASS: new RegExp("^\\.(" + I + ")"),
      TAG: new RegExp("^(" + I + "|[*])"),
      ATTR: new RegExp("^" + W),
      PSEUDO: new RegExp("^" + F),
      CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + M + "*(even|odd|(([+-]|)(\\d*)n|)" + M + "*(?:([+-]|)" + M + "*(\\d+)|))" + M + "*\\)|)", "i"),
      bool: new RegExp("^(?:" + R + ")$", "i"),
      needsContext: new RegExp("^" + M + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + M + "*((?:-\\d)?\\d*)" + M + "*\\)|)(?=[^-]|$)", "i")
    },
        Y = /HTML$/i,
        Q = /^(?:input|select|textarea|button)$/i,
        J = /^h\d$/i,
        K = /^[^{]+\{\s*\[native \w/,
        Z = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
        ee = /[+~]/,
        te = new RegExp("\\\\[\\da-fA-F]{1,6}" + M + "?|\\\\([^\\r\\n\\f])", "g"),
        ne = function ne(e, t) {
      var n = "0x" + e.slice(1) - 65536;
      return t || (n < 0 ? String.fromCharCode(n + 65536) : String.fromCharCode(n >> 10 | 55296, 1023 & n | 56320));
    },
        re = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
        ie = function ie(e, t) {
      return t ? "\0" === e ? "\uFFFD" : e.slice(0, -1) + "\\" + e.charCodeAt(e.length - 1).toString(16) + " " : "\\" + e;
    },
        oe = function oe() {
      T();
    },
        ae = be(function (e) {
      return !0 === e.disabled && "fieldset" === e.nodeName.toLowerCase();
    }, {
      dir: "parentNode",
      next: "legend"
    });

    try {
      H.apply(t = O.call(p.childNodes), p.childNodes), t[p.childNodes.length].nodeType;
    } catch (e) {
      H = {
        apply: t.length ? function (e, t) {
          L.apply(e, O.call(t));
        } : function (e, t) {
          var n = e.length,
              r = 0;

          while (e[n++] = t[r++]) {
            ;
          }

          e.length = n - 1;
        }
      };
    }

    function se(t, e, n, r) {
      var i,
          o,
          a,
          s,
          u,
          l,
          c,
          f = e && e.ownerDocument,
          p = e ? e.nodeType : 9;
      if (n = n || [], "string" != typeof t || !t || 1 !== p && 9 !== p && 11 !== p) return n;

      if (!r && (T(e), e = e || C, E)) {
        if (11 !== p && (u = Z.exec(t))) if (i = u[1]) {
          if (9 === p) {
            if (!(a = e.getElementById(i))) return n;
            if (a.id === i) return n.push(a), n;
          } else if (f && (a = f.getElementById(i)) && y(e, a) && a.id === i) return n.push(a), n;
        } else {
          if (u[2]) return H.apply(n, e.getElementsByTagName(t)), n;
          if ((i = u[3]) && d.getElementsByClassName && e.getElementsByClassName) return H.apply(n, e.getElementsByClassName(i)), n;
        }

        if (d.qsa && !N[t + " "] && (!v || !v.test(t)) && (1 !== p || "object" !== e.nodeName.toLowerCase())) {
          if (c = t, f = e, 1 === p && (U.test(t) || z.test(t))) {
            (f = ee.test(t) && ye(e.parentNode) || e) === e && d.scope || ((s = e.getAttribute("id")) ? s = s.replace(re, ie) : e.setAttribute("id", s = S)), o = (l = h(t)).length;

            while (o--) {
              l[o] = (s ? "#" + s : ":scope") + " " + xe(l[o]);
            }

            c = l.join(",");
          }

          try {
            return H.apply(n, f.querySelectorAll(c)), n;
          } catch (e) {
            N(t, !0);
          } finally {
            s === S && e.removeAttribute("id");
          }
        }
      }

      return g(t.replace($, "$1"), e, n, r);
    }

    function ue() {
      var r = [];
      return function e(t, n) {
        return r.push(t + " ") > b.cacheLength && delete e[r.shift()], e[t + " "] = n;
      };
    }

    function le(e) {
      return e[S] = !0, e;
    }

    function ce(e) {
      var t = C.createElement("fieldset");

      try {
        return !!e(t);
      } catch (e) {
        return !1;
      } finally {
        t.parentNode && t.parentNode.removeChild(t), t = null;
      }
    }

    function fe(e, t) {
      var n = e.split("|"),
          r = n.length;

      while (r--) {
        b.attrHandle[n[r]] = t;
      }
    }

    function pe(e, t) {
      var n = t && e,
          r = n && 1 === e.nodeType && 1 === t.nodeType && e.sourceIndex - t.sourceIndex;
      if (r) return r;
      if (n) while (n = n.nextSibling) {
        if (n === t) return -1;
      }
      return e ? 1 : -1;
    }

    function de(t) {
      return function (e) {
        return "input" === e.nodeName.toLowerCase() && e.type === t;
      };
    }

    function he(n) {
      return function (e) {
        var t = e.nodeName.toLowerCase();
        return ("input" === t || "button" === t) && e.type === n;
      };
    }

    function ge(t) {
      return function (e) {
        return "form" in e ? e.parentNode && !1 === e.disabled ? "label" in e ? "label" in e.parentNode ? e.parentNode.disabled === t : e.disabled === t : e.isDisabled === t || e.isDisabled !== !t && ae(e) === t : e.disabled === t : "label" in e && e.disabled === t;
      };
    }

    function ve(a) {
      return le(function (o) {
        return o = +o, le(function (e, t) {
          var n,
              r = a([], e.length, o),
              i = r.length;

          while (i--) {
            e[n = r[i]] && (e[n] = !(t[n] = e[n]));
          }
        });
      });
    }

    function ye(e) {
      return e && "undefined" != typeof e.getElementsByTagName && e;
    }

    for (e in d = se.support = {}, i = se.isXML = function (e) {
      var t = e.namespaceURI,
          n = (e.ownerDocument || e).documentElement;
      return !Y.test(t || n && n.nodeName || "HTML");
    }, T = se.setDocument = function (e) {
      var t,
          n,
          r = e ? e.ownerDocument || e : p;
      return r != C && 9 === r.nodeType && r.documentElement && (a = (C = r).documentElement, E = !i(C), p != C && (n = C.defaultView) && n.top !== n && (n.addEventListener ? n.addEventListener("unload", oe, !1) : n.attachEvent && n.attachEvent("onunload", oe)), d.scope = ce(function (e) {
        return a.appendChild(e).appendChild(C.createElement("div")), "undefined" != typeof e.querySelectorAll && !e.querySelectorAll(":scope fieldset div").length;
      }), d.attributes = ce(function (e) {
        return e.className = "i", !e.getAttribute("className");
      }), d.getElementsByTagName = ce(function (e) {
        return e.appendChild(C.createComment("")), !e.getElementsByTagName("*").length;
      }), d.getElementsByClassName = K.test(C.getElementsByClassName), d.getById = ce(function (e) {
        return a.appendChild(e).id = S, !C.getElementsByName || !C.getElementsByName(S).length;
      }), d.getById ? (b.filter.ID = function (e) {
        var t = e.replace(te, ne);
        return function (e) {
          return e.getAttribute("id") === t;
        };
      }, b.find.ID = function (e, t) {
        if ("undefined" != typeof t.getElementById && E) {
          var n = t.getElementById(e);
          return n ? [n] : [];
        }
      }) : (b.filter.ID = function (e) {
        var n = e.replace(te, ne);
        return function (e) {
          var t = "undefined" != typeof e.getAttributeNode && e.getAttributeNode("id");
          return t && t.value === n;
        };
      }, b.find.ID = function (e, t) {
        if ("undefined" != typeof t.getElementById && E) {
          var n,
              r,
              i,
              o = t.getElementById(e);

          if (o) {
            if ((n = o.getAttributeNode("id")) && n.value === e) return [o];
            i = t.getElementsByName(e), r = 0;

            while (o = i[r++]) {
              if ((n = o.getAttributeNode("id")) && n.value === e) return [o];
            }
          }

          return [];
        }
      }), b.find.TAG = d.getElementsByTagName ? function (e, t) {
        return "undefined" != typeof t.getElementsByTagName ? t.getElementsByTagName(e) : d.qsa ? t.querySelectorAll(e) : void 0;
      } : function (e, t) {
        var n,
            r = [],
            i = 0,
            o = t.getElementsByTagName(e);

        if ("*" === e) {
          while (n = o[i++]) {
            1 === n.nodeType && r.push(n);
          }

          return r;
        }

        return o;
      }, b.find.CLASS = d.getElementsByClassName && function (e, t) {
        if ("undefined" != typeof t.getElementsByClassName && E) return t.getElementsByClassName(e);
      }, s = [], v = [], (d.qsa = K.test(C.querySelectorAll)) && (ce(function (e) {
        var t;
        a.appendChild(e).innerHTML = "<a id='" + S + "'></a><select id='" + S + "-\r\\' msallowcapture=''><option selected=''></option></select>", e.querySelectorAll("[msallowcapture^='']").length && v.push("[*^$]=" + M + "*(?:''|\"\")"), e.querySelectorAll("[selected]").length || v.push("\\[" + M + "*(?:value|" + R + ")"), e.querySelectorAll("[id~=" + S + "-]").length || v.push("~="), (t = C.createElement("input")).setAttribute("name", ""), e.appendChild(t), e.querySelectorAll("[name='']").length || v.push("\\[" + M + "*name" + M + "*=" + M + "*(?:''|\"\")"), e.querySelectorAll(":checked").length || v.push(":checked"), e.querySelectorAll("a#" + S + "+*").length || v.push(".#.+[+~]"), e.querySelectorAll("\\\f"), v.push("[\\r\\n\\f]");
      }), ce(function (e) {
        e.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
        var t = C.createElement("input");
        t.setAttribute("type", "hidden"), e.appendChild(t).setAttribute("name", "D"), e.querySelectorAll("[name=d]").length && v.push("name" + M + "*[*^$|!~]?="), 2 !== e.querySelectorAll(":enabled").length && v.push(":enabled", ":disabled"), a.appendChild(e).disabled = !0, 2 !== e.querySelectorAll(":disabled").length && v.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), v.push(",.*:");
      })), (d.matchesSelector = K.test(c = a.matches || a.webkitMatchesSelector || a.mozMatchesSelector || a.oMatchesSelector || a.msMatchesSelector)) && ce(function (e) {
        d.disconnectedMatch = c.call(e, "*"), c.call(e, "[s!='']:x"), s.push("!=", F);
      }), v = v.length && new RegExp(v.join("|")), s = s.length && new RegExp(s.join("|")), t = K.test(a.compareDocumentPosition), y = t || K.test(a.contains) ? function (e, t) {
        var n = 9 === e.nodeType ? e.documentElement : e,
            r = t && t.parentNode;
        return e === r || !(!r || 1 !== r.nodeType || !(n.contains ? n.contains(r) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(r)));
      } : function (e, t) {
        if (t) while (t = t.parentNode) {
          if (t === e) return !0;
        }
        return !1;
      }, D = t ? function (e, t) {
        if (e === t) return l = !0, 0;
        var n = !e.compareDocumentPosition - !t.compareDocumentPosition;
        return n || (1 & (n = (e.ownerDocument || e) == (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1) || !d.sortDetached && t.compareDocumentPosition(e) === n ? e == C || e.ownerDocument == p && y(p, e) ? -1 : t == C || t.ownerDocument == p && y(p, t) ? 1 : u ? P(u, e) - P(u, t) : 0 : 4 & n ? -1 : 1);
      } : function (e, t) {
        if (e === t) return l = !0, 0;
        var n,
            r = 0,
            i = e.parentNode,
            o = t.parentNode,
            a = [e],
            s = [t];
        if (!i || !o) return e == C ? -1 : t == C ? 1 : i ? -1 : o ? 1 : u ? P(u, e) - P(u, t) : 0;
        if (i === o) return pe(e, t);
        n = e;

        while (n = n.parentNode) {
          a.unshift(n);
        }

        n = t;

        while (n = n.parentNode) {
          s.unshift(n);
        }

        while (a[r] === s[r]) {
          r++;
        }

        return r ? pe(a[r], s[r]) : a[r] == p ? -1 : s[r] == p ? 1 : 0;
      }), C;
    }, se.matches = function (e, t) {
      return se(e, null, null, t);
    }, se.matchesSelector = function (e, t) {
      if (T(e), d.matchesSelector && E && !N[t + " "] && (!s || !s.test(t)) && (!v || !v.test(t))) try {
        var n = c.call(e, t);
        if (n || d.disconnectedMatch || e.document && 11 !== e.document.nodeType) return n;
      } catch (e) {
        N(t, !0);
      }
      return 0 < se(t, C, null, [e]).length;
    }, se.contains = function (e, t) {
      return (e.ownerDocument || e) != C && T(e), y(e, t);
    }, se.attr = function (e, t) {
      (e.ownerDocument || e) != C && T(e);
      var n = b.attrHandle[t.toLowerCase()],
          r = n && j.call(b.attrHandle, t.toLowerCase()) ? n(e, t, !E) : void 0;
      return void 0 !== r ? r : d.attributes || !E ? e.getAttribute(t) : (r = e.getAttributeNode(t)) && r.specified ? r.value : null;
    }, se.escape = function (e) {
      return (e + "").replace(re, ie);
    }, se.error = function (e) {
      throw new Error("Syntax error, unrecognized expression: " + e);
    }, se.uniqueSort = function (e) {
      var t,
          n = [],
          r = 0,
          i = 0;

      if (l = !d.detectDuplicates, u = !d.sortStable && e.slice(0), e.sort(D), l) {
        while (t = e[i++]) {
          t === e[i] && (r = n.push(i));
        }

        while (r--) {
          e.splice(n[r], 1);
        }
      }

      return u = null, e;
    }, o = se.getText = function (e) {
      var t,
          n = "",
          r = 0,
          i = e.nodeType;

      if (i) {
        if (1 === i || 9 === i || 11 === i) {
          if ("string" == typeof e.textContent) return e.textContent;

          for (e = e.firstChild; e; e = e.nextSibling) {
            n += o(e);
          }
        } else if (3 === i || 4 === i) return e.nodeValue;
      } else while (t = e[r++]) {
        n += o(t);
      }

      return n;
    }, (b = se.selectors = {
      cacheLength: 50,
      createPseudo: le,
      match: G,
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
        ATTR: function ATTR(e) {
          return e[1] = e[1].replace(te, ne), e[3] = (e[3] || e[4] || e[5] || "").replace(te, ne), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4);
        },
        CHILD: function CHILD(e) {
          return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || se.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && se.error(e[0]), e;
        },
        PSEUDO: function PSEUDO(e) {
          var t,
              n = !e[6] && e[2];
          return G.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : n && X.test(n) && (t = h(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t), e[2] = n.slice(0, t)), e.slice(0, 3));
        }
      },
      filter: {
        TAG: function TAG(e) {
          var t = e.replace(te, ne).toLowerCase();
          return "*" === e ? function () {
            return !0;
          } : function (e) {
            return e.nodeName && e.nodeName.toLowerCase() === t;
          };
        },
        CLASS: function CLASS(e) {
          var t = m[e + " "];
          return t || (t = new RegExp("(^|" + M + ")" + e + "(" + M + "|$)")) && m(e, function (e) {
            return t.test("string" == typeof e.className && e.className || "undefined" != typeof e.getAttribute && e.getAttribute("class") || "");
          });
        },
        ATTR: function ATTR(n, r, i) {
          return function (e) {
            var t = se.attr(e, n);
            return null == t ? "!=" === r : !r || (t += "", "=" === r ? t === i : "!=" === r ? t !== i : "^=" === r ? i && 0 === t.indexOf(i) : "*=" === r ? i && -1 < t.indexOf(i) : "$=" === r ? i && t.slice(-i.length) === i : "~=" === r ? -1 < (" " + t.replace(B, " ") + " ").indexOf(i) : "|=" === r && (t === i || t.slice(0, i.length + 1) === i + "-"));
          };
        },
        CHILD: function CHILD(h, e, t, g, v) {
          var y = "nth" !== h.slice(0, 3),
              m = "last" !== h.slice(-4),
              x = "of-type" === e;
          return 1 === g && 0 === v ? function (e) {
            return !!e.parentNode;
          } : function (e, t, n) {
            var r,
                i,
                o,
                a,
                s,
                u,
                l = y !== m ? "nextSibling" : "previousSibling",
                c = e.parentNode,
                f = x && e.nodeName.toLowerCase(),
                p = !n && !x,
                d = !1;

            if (c) {
              if (y) {
                while (l) {
                  a = e;

                  while (a = a[l]) {
                    if (x ? a.nodeName.toLowerCase() === f : 1 === a.nodeType) return !1;
                  }

                  u = l = "only" === h && !u && "nextSibling";
                }

                return !0;
              }

              if (u = [m ? c.firstChild : c.lastChild], m && p) {
                d = (s = (r = (i = (o = (a = c)[S] || (a[S] = {}))[a.uniqueID] || (o[a.uniqueID] = {}))[h] || [])[0] === k && r[1]) && r[2], a = s && c.childNodes[s];

                while (a = ++s && a && a[l] || (d = s = 0) || u.pop()) {
                  if (1 === a.nodeType && ++d && a === e) {
                    i[h] = [k, s, d];
                    break;
                  }
                }
              } else if (p && (d = s = (r = (i = (o = (a = e)[S] || (a[S] = {}))[a.uniqueID] || (o[a.uniqueID] = {}))[h] || [])[0] === k && r[1]), !1 === d) while (a = ++s && a && a[l] || (d = s = 0) || u.pop()) {
                if ((x ? a.nodeName.toLowerCase() === f : 1 === a.nodeType) && ++d && (p && ((i = (o = a[S] || (a[S] = {}))[a.uniqueID] || (o[a.uniqueID] = {}))[h] = [k, d]), a === e)) break;
              }

              return (d -= v) === g || d % g == 0 && 0 <= d / g;
            }
          };
        },
        PSEUDO: function PSEUDO(e, o) {
          var t,
              a = b.pseudos[e] || b.setFilters[e.toLowerCase()] || se.error("unsupported pseudo: " + e);
          return a[S] ? a(o) : 1 < a.length ? (t = [e, e, "", o], b.setFilters.hasOwnProperty(e.toLowerCase()) ? le(function (e, t) {
            var n,
                r = a(e, o),
                i = r.length;

            while (i--) {
              e[n = P(e, r[i])] = !(t[n] = r[i]);
            }
          }) : function (e) {
            return a(e, 0, t);
          }) : a;
        }
      },
      pseudos: {
        not: le(function (e) {
          var r = [],
              i = [],
              s = f(e.replace($, "$1"));
          return s[S] ? le(function (e, t, n, r) {
            var i,
                o = s(e, null, r, []),
                a = e.length;

            while (a--) {
              (i = o[a]) && (e[a] = !(t[a] = i));
            }
          }) : function (e, t, n) {
            return r[0] = e, s(r, null, n, i), r[0] = null, !i.pop();
          };
        }),
        has: le(function (t) {
          return function (e) {
            return 0 < se(t, e).length;
          };
        }),
        contains: le(function (t) {
          return t = t.replace(te, ne), function (e) {
            return -1 < (e.textContent || o(e)).indexOf(t);
          };
        }),
        lang: le(function (n) {
          return V.test(n || "") || se.error("unsupported lang: " + n), n = n.replace(te, ne).toLowerCase(), function (e) {
            var t;

            do {
              if (t = E ? e.lang : e.getAttribute("xml:lang") || e.getAttribute("lang")) return (t = t.toLowerCase()) === n || 0 === t.indexOf(n + "-");
            } while ((e = e.parentNode) && 1 === e.nodeType);

            return !1;
          };
        }),
        target: function target(e) {
          var t = n.location && n.location.hash;
          return t && t.slice(1) === e.id;
        },
        root: function root(e) {
          return e === a;
        },
        focus: function focus(e) {
          return e === C.activeElement && (!C.hasFocus || C.hasFocus()) && !!(e.type || e.href || ~e.tabIndex);
        },
        enabled: ge(!1),
        disabled: ge(!0),
        checked: function checked(e) {
          var t = e.nodeName.toLowerCase();
          return "input" === t && !!e.checked || "option" === t && !!e.selected;
        },
        selected: function selected(e) {
          return e.parentNode && e.parentNode.selectedIndex, !0 === e.selected;
        },
        empty: function empty(e) {
          for (e = e.firstChild; e; e = e.nextSibling) {
            if (e.nodeType < 6) return !1;
          }

          return !0;
        },
        parent: function parent(e) {
          return !b.pseudos.empty(e);
        },
        header: function header(e) {
          return J.test(e.nodeName);
        },
        input: function input(e) {
          return Q.test(e.nodeName);
        },
        button: function button(e) {
          var t = e.nodeName.toLowerCase();
          return "input" === t && "button" === e.type || "button" === t;
        },
        text: function text(e) {
          var t;
          return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase());
        },
        first: ve(function () {
          return [0];
        }),
        last: ve(function (e, t) {
          return [t - 1];
        }),
        eq: ve(function (e, t, n) {
          return [n < 0 ? n + t : n];
        }),
        even: ve(function (e, t) {
          for (var n = 0; n < t; n += 2) {
            e.push(n);
          }

          return e;
        }),
        odd: ve(function (e, t) {
          for (var n = 1; n < t; n += 2) {
            e.push(n);
          }

          return e;
        }),
        lt: ve(function (e, t, n) {
          for (var r = n < 0 ? n + t : t < n ? t : n; 0 <= --r;) {
            e.push(r);
          }

          return e;
        }),
        gt: ve(function (e, t, n) {
          for (var r = n < 0 ? n + t : n; ++r < t;) {
            e.push(r);
          }

          return e;
        })
      }
    }).pseudos.nth = b.pseudos.eq, {
      radio: !0,
      checkbox: !0,
      file: !0,
      password: !0,
      image: !0
    }) {
      b.pseudos[e] = de(e);
    }

    for (e in {
      submit: !0,
      reset: !0
    }) {
      b.pseudos[e] = he(e);
    }

    function me() {}

    function xe(e) {
      for (var t = 0, n = e.length, r = ""; t < n; t++) {
        r += e[t].value;
      }

      return r;
    }

    function be(s, e, t) {
      var u = e.dir,
          l = e.next,
          c = l || u,
          f = t && "parentNode" === c,
          p = r++;
      return e.first ? function (e, t, n) {
        while (e = e[u]) {
          if (1 === e.nodeType || f) return s(e, t, n);
        }

        return !1;
      } : function (e, t, n) {
        var r,
            i,
            o,
            a = [k, p];

        if (n) {
          while (e = e[u]) {
            if ((1 === e.nodeType || f) && s(e, t, n)) return !0;
          }
        } else while (e = e[u]) {
          if (1 === e.nodeType || f) if (i = (o = e[S] || (e[S] = {}))[e.uniqueID] || (o[e.uniqueID] = {}), l && l === e.nodeName.toLowerCase()) e = e[u] || e;else {
            if ((r = i[c]) && r[0] === k && r[1] === p) return a[2] = r[2];
            if ((i[c] = a)[2] = s(e, t, n)) return !0;
          }
        }

        return !1;
      };
    }

    function we(i) {
      return 1 < i.length ? function (e, t, n) {
        var r = i.length;

        while (r--) {
          if (!i[r](e, t, n)) return !1;
        }

        return !0;
      } : i[0];
    }

    function Te(e, t, n, r, i) {
      for (var o, a = [], s = 0, u = e.length, l = null != t; s < u; s++) {
        (o = e[s]) && (n && !n(o, r, i) || (a.push(o), l && t.push(s)));
      }

      return a;
    }

    function Ce(d, h, g, v, y, e) {
      return v && !v[S] && (v = Ce(v)), y && !y[S] && (y = Ce(y, e)), le(function (e, t, n, r) {
        var i,
            o,
            a,
            s = [],
            u = [],
            l = t.length,
            c = e || function (e, t, n) {
          for (var r = 0, i = t.length; r < i; r++) {
            se(e, t[r], n);
          }

          return n;
        }(h || "*", n.nodeType ? [n] : n, []),
            f = !d || !e && h ? c : Te(c, s, d, n, r),
            p = g ? y || (e ? d : l || v) ? [] : t : f;

        if (g && g(f, p, n, r), v) {
          i = Te(p, u), v(i, [], n, r), o = i.length;

          while (o--) {
            (a = i[o]) && (p[u[o]] = !(f[u[o]] = a));
          }
        }

        if (e) {
          if (y || d) {
            if (y) {
              i = [], o = p.length;

              while (o--) {
                (a = p[o]) && i.push(f[o] = a);
              }

              y(null, p = [], i, r);
            }

            o = p.length;

            while (o--) {
              (a = p[o]) && -1 < (i = y ? P(e, a) : s[o]) && (e[i] = !(t[i] = a));
            }
          }
        } else p = Te(p === t ? p.splice(l, p.length) : p), y ? y(null, t, p, r) : H.apply(t, p);
      });
    }

    function Ee(e) {
      for (var i, t, n, r = e.length, o = b.relative[e[0].type], a = o || b.relative[" "], s = o ? 1 : 0, u = be(function (e) {
        return e === i;
      }, a, !0), l = be(function (e) {
        return -1 < P(i, e);
      }, a, !0), c = [function (e, t, n) {
        var r = !o && (n || t !== w) || ((i = t).nodeType ? u(e, t, n) : l(e, t, n));
        return i = null, r;
      }]; s < r; s++) {
        if (t = b.relative[e[s].type]) c = [be(we(c), t)];else {
          if ((t = b.filter[e[s].type].apply(null, e[s].matches))[S]) {
            for (n = ++s; n < r; n++) {
              if (b.relative[e[n].type]) break;
            }

            return Ce(1 < s && we(c), 1 < s && xe(e.slice(0, s - 1).concat({
              value: " " === e[s - 2].type ? "*" : ""
            })).replace($, "$1"), t, s < n && Ee(e.slice(s, n)), n < r && Ee(e = e.slice(n)), n < r && xe(e));
          }

          c.push(t);
        }
      }

      return we(c);
    }

    return me.prototype = b.filters = b.pseudos, b.setFilters = new me(), h = se.tokenize = function (e, t) {
      var n,
          r,
          i,
          o,
          a,
          s,
          u,
          l = x[e + " "];
      if (l) return t ? 0 : l.slice(0);
      a = e, s = [], u = b.preFilter;

      while (a) {
        for (o in n && !(r = _.exec(a)) || (r && (a = a.slice(r[0].length) || a), s.push(i = [])), n = !1, (r = z.exec(a)) && (n = r.shift(), i.push({
          value: n,
          type: r[0].replace($, " ")
        }), a = a.slice(n.length)), b.filter) {
          !(r = G[o].exec(a)) || u[o] && !(r = u[o](r)) || (n = r.shift(), i.push({
            value: n,
            type: o,
            matches: r
          }), a = a.slice(n.length));
        }

        if (!n) break;
      }

      return t ? a.length : a ? se.error(e) : x(e, s).slice(0);
    }, f = se.compile = function (e, t) {
      var n,
          v,
          y,
          m,
          x,
          r,
          i = [],
          o = [],
          a = A[e + " "];

      if (!a) {
        t || (t = h(e)), n = t.length;

        while (n--) {
          (a = Ee(t[n]))[S] ? i.push(a) : o.push(a);
        }

        (a = A(e, (v = o, m = 0 < (y = i).length, x = 0 < v.length, r = function r(e, t, n, _r, i) {
          var o,
              a,
              s,
              u = 0,
              l = "0",
              c = e && [],
              f = [],
              p = w,
              d = e || x && b.find.TAG("*", i),
              h = k += null == p ? 1 : Math.random() || .1,
              g = d.length;

          for (i && (w = t == C || t || i); l !== g && null != (o = d[l]); l++) {
            if (x && o) {
              a = 0, t || o.ownerDocument == C || (T(o), n = !E);

              while (s = v[a++]) {
                if (s(o, t || C, n)) {
                  _r.push(o);

                  break;
                }
              }

              i && (k = h);
            }

            m && ((o = !s && o) && u--, e && c.push(o));
          }

          if (u += l, m && l !== u) {
            a = 0;

            while (s = y[a++]) {
              s(c, f, t, n);
            }

            if (e) {
              if (0 < u) while (l--) {
                c[l] || f[l] || (f[l] = q.call(_r));
              }
              f = Te(f);
            }

            H.apply(_r, f), i && !e && 0 < f.length && 1 < u + y.length && se.uniqueSort(_r);
          }

          return i && (k = h, w = p), c;
        }, m ? le(r) : r))).selector = e;
      }

      return a;
    }, g = se.select = function (e, t, n, r) {
      var i,
          o,
          a,
          s,
          u,
          l = "function" == typeof e && e,
          c = !r && h(e = l.selector || e);

      if (n = n || [], 1 === c.length) {
        if (2 < (o = c[0] = c[0].slice(0)).length && "ID" === (a = o[0]).type && 9 === t.nodeType && E && b.relative[o[1].type]) {
          if (!(t = (b.find.ID(a.matches[0].replace(te, ne), t) || [])[0])) return n;
          l && (t = t.parentNode), e = e.slice(o.shift().value.length);
        }

        i = G.needsContext.test(e) ? 0 : o.length;

        while (i--) {
          if (a = o[i], b.relative[s = a.type]) break;

          if ((u = b.find[s]) && (r = u(a.matches[0].replace(te, ne), ee.test(o[0].type) && ye(t.parentNode) || t))) {
            if (o.splice(i, 1), !(e = r.length && xe(o))) return H.apply(n, r), n;
            break;
          }
        }
      }

      return (l || f(e, c))(r, t, !E, n, !t || ee.test(e) && ye(t.parentNode) || t), n;
    }, d.sortStable = S.split("").sort(D).join("") === S, d.detectDuplicates = !!l, T(), d.sortDetached = ce(function (e) {
      return 1 & e.compareDocumentPosition(C.createElement("fieldset"));
    }), ce(function (e) {
      return e.innerHTML = "<a href='#'></a>", "#" === e.firstChild.getAttribute("href");
    }) || fe("type|href|height|width", function (e, t, n) {
      if (!n) return e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2);
    }), d.attributes && ce(function (e) {
      return e.innerHTML = "<input/>", e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value");
    }) || fe("value", function (e, t, n) {
      if (!n && "input" === e.nodeName.toLowerCase()) return e.defaultValue;
    }), ce(function (e) {
      return null == e.getAttribute("disabled");
    }) || fe(R, function (e, t, n) {
      var r;
      if (!n) return !0 === e[t] ? t.toLowerCase() : (r = e.getAttributeNode(t)) && r.specified ? r.value : null;
    }), se;
  }(C);

  S.find = d, S.expr = d.selectors, S.expr[":"] = S.expr.pseudos, S.uniqueSort = S.unique = d.uniqueSort, S.text = d.getText, S.isXMLDoc = d.isXML, S.contains = d.contains, S.escapeSelector = d.escape;

  var h = function h(e, t, n) {
    var r = [],
        i = void 0 !== n;

    while ((e = e[t]) && 9 !== e.nodeType) {
      if (1 === e.nodeType) {
        if (i && S(e).is(n)) break;
        r.push(e);
      }
    }

    return r;
  },
      T = function T(e, t) {
    for (var n = []; e; e = e.nextSibling) {
      1 === e.nodeType && e !== t && n.push(e);
    }

    return n;
  },
      k = S.expr.match.needsContext;

  function A(e, t) {
    return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase();
  }

  var N = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;

  function D(e, n, r) {
    return m(n) ? S.grep(e, function (e, t) {
      return !!n.call(e, t, e) !== r;
    }) : n.nodeType ? S.grep(e, function (e) {
      return e === n !== r;
    }) : "string" != typeof n ? S.grep(e, function (e) {
      return -1 < i.call(n, e) !== r;
    }) : S.filter(n, e, r);
  }

  S.filter = function (e, t, n) {
    var r = t[0];
    return n && (e = ":not(" + e + ")"), 1 === t.length && 1 === r.nodeType ? S.find.matchesSelector(r, e) ? [r] : [] : S.find.matches(e, S.grep(t, function (e) {
      return 1 === e.nodeType;
    }));
  }, S.fn.extend({
    find: function find(e) {
      var t,
          n,
          r = this.length,
          i = this;
      if ("string" != typeof e) return this.pushStack(S(e).filter(function () {
        for (t = 0; t < r; t++) {
          if (S.contains(i[t], this)) return !0;
        }
      }));

      for (n = this.pushStack([]), t = 0; t < r; t++) {
        S.find(e, i[t], n);
      }

      return 1 < r ? S.uniqueSort(n) : n;
    },
    filter: function filter(e) {
      return this.pushStack(D(this, e || [], !1));
    },
    not: function not(e) {
      return this.pushStack(D(this, e || [], !0));
    },
    is: function is(e) {
      return !!D(this, "string" == typeof e && k.test(e) ? S(e) : e || [], !1).length;
    }
  });
  var j,
      q = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
  (S.fn.init = function (e, t, n) {
    var r, i;
    if (!e) return this;

    if (n = n || j, "string" == typeof e) {
      if (!(r = "<" === e[0] && ">" === e[e.length - 1] && 3 <= e.length ? [null, e, null] : q.exec(e)) || !r[1] && t) return !t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e);

      if (r[1]) {
        if (t = t instanceof S ? t[0] : t, S.merge(this, S.parseHTML(r[1], t && t.nodeType ? t.ownerDocument || t : E, !0)), N.test(r[1]) && S.isPlainObject(t)) for (r in t) {
          m(this[r]) ? this[r](t[r]) : this.attr(r, t[r]);
        }
        return this;
      }

      return (i = E.getElementById(r[2])) && (this[0] = i, this.length = 1), this;
    }

    return e.nodeType ? (this[0] = e, this.length = 1, this) : m(e) ? void 0 !== n.ready ? n.ready(e) : e(S) : S.makeArray(e, this);
  }).prototype = S.fn, j = S(E);
  var L = /^(?:parents|prev(?:Until|All))/,
      H = {
    children: !0,
    contents: !0,
    next: !0,
    prev: !0
  };

  function O(e, t) {
    while ((e = e[t]) && 1 !== e.nodeType) {
      ;
    }

    return e;
  }

  S.fn.extend({
    has: function has(e) {
      var t = S(e, this),
          n = t.length;
      return this.filter(function () {
        for (var e = 0; e < n; e++) {
          if (S.contains(this, t[e])) return !0;
        }
      });
    },
    closest: function closest(e, t) {
      var n,
          r = 0,
          i = this.length,
          o = [],
          a = "string" != typeof e && S(e);
      if (!k.test(e)) for (; r < i; r++) {
        for (n = this[r]; n && n !== t; n = n.parentNode) {
          if (n.nodeType < 11 && (a ? -1 < a.index(n) : 1 === n.nodeType && S.find.matchesSelector(n, e))) {
            o.push(n);
            break;
          }
        }
      }
      return this.pushStack(1 < o.length ? S.uniqueSort(o) : o);
    },
    index: function index(e) {
      return e ? "string" == typeof e ? i.call(S(e), this[0]) : i.call(this, e.jquery ? e[0] : e) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1;
    },
    add: function add(e, t) {
      return this.pushStack(S.uniqueSort(S.merge(this.get(), S(e, t))));
    },
    addBack: function addBack(e) {
      return this.add(null == e ? this.prevObject : this.prevObject.filter(e));
    }
  }), S.each({
    parent: function parent(e) {
      var t = e.parentNode;
      return t && 11 !== t.nodeType ? t : null;
    },
    parents: function parents(e) {
      return h(e, "parentNode");
    },
    parentsUntil: function parentsUntil(e, t, n) {
      return h(e, "parentNode", n);
    },
    next: function next(e) {
      return O(e, "nextSibling");
    },
    prev: function prev(e) {
      return O(e, "previousSibling");
    },
    nextAll: function nextAll(e) {
      return h(e, "nextSibling");
    },
    prevAll: function prevAll(e) {
      return h(e, "previousSibling");
    },
    nextUntil: function nextUntil(e, t, n) {
      return h(e, "nextSibling", n);
    },
    prevUntil: function prevUntil(e, t, n) {
      return h(e, "previousSibling", n);
    },
    siblings: function siblings(e) {
      return T((e.parentNode || {}).firstChild, e);
    },
    children: function children(e) {
      return T(e.firstChild);
    },
    contents: function contents(e) {
      return null != e.contentDocument && r(e.contentDocument) ? e.contentDocument : (A(e, "template") && (e = e.content || e), S.merge([], e.childNodes));
    }
  }, function (r, i) {
    S.fn[r] = function (e, t) {
      var n = S.map(this, i, e);
      return "Until" !== r.slice(-5) && (t = e), t && "string" == typeof t && (n = S.filter(t, n)), 1 < this.length && (H[r] || S.uniqueSort(n), L.test(r) && n.reverse()), this.pushStack(n);
    };
  });
  var P = /[^\x20\t\r\n\f]+/g;

  function R(e) {
    return e;
  }

  function M(e) {
    throw e;
  }

  function I(e, t, n, r) {
    var i;

    try {
      e && m(i = e.promise) ? i.call(e).done(t).fail(n) : e && m(i = e.then) ? i.call(e, t, n) : t.apply(void 0, [e].slice(r));
    } catch (e) {
      n.apply(void 0, [e]);
    }
  }

  S.Callbacks = function (r) {
    var e, n;
    r = "string" == typeof r ? (e = r, n = {}, S.each(e.match(P) || [], function (e, t) {
      n[t] = !0;
    }), n) : S.extend({}, r);

    var i,
        t,
        o,
        a,
        s = [],
        u = [],
        l = -1,
        c = function c() {
      for (a = a || r.once, o = i = !0; u.length; l = -1) {
        t = u.shift();

        while (++l < s.length) {
          !1 === s[l].apply(t[0], t[1]) && r.stopOnFalse && (l = s.length, t = !1);
        }
      }

      r.memory || (t = !1), i = !1, a && (s = t ? [] : "");
    },
        f = {
      add: function add() {
        return s && (t && !i && (l = s.length - 1, u.push(t)), function n(e) {
          S.each(e, function (e, t) {
            m(t) ? r.unique && f.has(t) || s.push(t) : t && t.length && "string" !== w(t) && n(t);
          });
        }(arguments), t && !i && c()), this;
      },
      remove: function remove() {
        return S.each(arguments, function (e, t) {
          var n;

          while (-1 < (n = S.inArray(t, s, n))) {
            s.splice(n, 1), n <= l && l--;
          }
        }), this;
      },
      has: function has(e) {
        return e ? -1 < S.inArray(e, s) : 0 < s.length;
      },
      empty: function empty() {
        return s && (s = []), this;
      },
      disable: function disable() {
        return a = u = [], s = t = "", this;
      },
      disabled: function disabled() {
        return !s;
      },
      lock: function lock() {
        return a = u = [], t || i || (s = t = ""), this;
      },
      locked: function locked() {
        return !!a;
      },
      fireWith: function fireWith(e, t) {
        return a || (t = [e, (t = t || []).slice ? t.slice() : t], u.push(t), i || c()), this;
      },
      fire: function fire() {
        return f.fireWith(this, arguments), this;
      },
      fired: function fired() {
        return !!o;
      }
    };

    return f;
  }, S.extend({
    Deferred: function Deferred(e) {
      var o = [["notify", "progress", S.Callbacks("memory"), S.Callbacks("memory"), 2], ["resolve", "done", S.Callbacks("once memory"), S.Callbacks("once memory"), 0, "resolved"], ["reject", "fail", S.Callbacks("once memory"), S.Callbacks("once memory"), 1, "rejected"]],
          i = "pending",
          a = {
        state: function state() {
          return i;
        },
        always: function always() {
          return s.done(arguments).fail(arguments), this;
        },
        "catch": function _catch(e) {
          return a.then(null, e);
        },
        pipe: function pipe() {
          var i = arguments;
          return S.Deferred(function (r) {
            S.each(o, function (e, t) {
              var n = m(i[t[4]]) && i[t[4]];
              s[t[1]](function () {
                var e = n && n.apply(this, arguments);
                e && m(e.promise) ? e.promise().progress(r.notify).done(r.resolve).fail(r.reject) : r[t[0] + "With"](this, n ? [e] : arguments);
              });
            }), i = null;
          }).promise();
        },
        then: function then(t, n, r) {
          var u = 0;

          function l(i, o, a, s) {
            return function () {
              var n = this,
                  r = arguments,
                  e = function e() {
                var e, t;

                if (!(i < u)) {
                  if ((e = a.apply(n, r)) === o.promise()) throw new TypeError("Thenable self-resolution");
                  t = e && ("object" == _typeof(e) || "function" == typeof e) && e.then, m(t) ? s ? t.call(e, l(u, o, R, s), l(u, o, M, s)) : (u++, t.call(e, l(u, o, R, s), l(u, o, M, s), l(u, o, R, o.notifyWith))) : (a !== R && (n = void 0, r = [e]), (s || o.resolveWith)(n, r));
                }
              },
                  t = s ? e : function () {
                try {
                  e();
                } catch (e) {
                  S.Deferred.exceptionHook && S.Deferred.exceptionHook(e, t.stackTrace), u <= i + 1 && (a !== M && (n = void 0, r = [e]), o.rejectWith(n, r));
                }
              };

              i ? t() : (S.Deferred.getStackHook && (t.stackTrace = S.Deferred.getStackHook()), C.setTimeout(t));
            };
          }

          return S.Deferred(function (e) {
            o[0][3].add(l(0, e, m(r) ? r : R, e.notifyWith)), o[1][3].add(l(0, e, m(t) ? t : R)), o[2][3].add(l(0, e, m(n) ? n : M));
          }).promise();
        },
        promise: function promise(e) {
          return null != e ? S.extend(e, a) : a;
        }
      },
          s = {};
      return S.each(o, function (e, t) {
        var n = t[2],
            r = t[5];
        a[t[1]] = n.add, r && n.add(function () {
          i = r;
        }, o[3 - e][2].disable, o[3 - e][3].disable, o[0][2].lock, o[0][3].lock), n.add(t[3].fire), s[t[0]] = function () {
          return s[t[0] + "With"](this === s ? void 0 : this, arguments), this;
        }, s[t[0] + "With"] = n.fireWith;
      }), a.promise(s), e && e.call(s, s), s;
    },
    when: function when(e) {
      var n = arguments.length,
          t = n,
          r = Array(t),
          i = s.call(arguments),
          o = S.Deferred(),
          a = function a(t) {
        return function (e) {
          r[t] = this, i[t] = 1 < arguments.length ? s.call(arguments) : e, --n || o.resolveWith(r, i);
        };
      };

      if (n <= 1 && (I(e, o.done(a(t)).resolve, o.reject, !n), "pending" === o.state() || m(i[t] && i[t].then))) return o.then();

      while (t--) {
        I(i[t], a(t), o.reject);
      }

      return o.promise();
    }
  });
  var W = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
  S.Deferred.exceptionHook = function (e, t) {
    C.console && C.console.warn && e && W.test(e.name) && C.console.warn("jQuery.Deferred exception: " + e.message, e.stack, t);
  }, S.readyException = function (e) {
    C.setTimeout(function () {
      throw e;
    });
  };
  var F = S.Deferred();

  function B() {
    E.removeEventListener("DOMContentLoaded", B), C.removeEventListener("load", B), S.ready();
  }

  S.fn.ready = function (e) {
    return F.then(e)["catch"](function (e) {
      S.readyException(e);
    }), this;
  }, S.extend({
    isReady: !1,
    readyWait: 1,
    ready: function ready(e) {
      (!0 === e ? --S.readyWait : S.isReady) || (S.isReady = !0) !== e && 0 < --S.readyWait || F.resolveWith(E, [S]);
    }
  }), S.ready.then = F.then, "complete" === E.readyState || "loading" !== E.readyState && !E.documentElement.doScroll ? C.setTimeout(S.ready) : (E.addEventListener("DOMContentLoaded", B), C.addEventListener("load", B));

  var $ = function $(e, t, n, r, i, o, a) {
    var s = 0,
        u = e.length,
        l = null == n;
    if ("object" === w(n)) for (s in i = !0, n) {
      $(e, t, s, n[s], !0, o, a);
    } else if (void 0 !== r && (i = !0, m(r) || (a = !0), l && (a ? (t.call(e, r), t = null) : (l = t, t = function t(e, _t2, n) {
      return l.call(S(e), n);
    })), t)) for (; s < u; s++) {
      t(e[s], n, a ? r : r.call(e[s], s, t(e[s], n)));
    }
    return i ? e : l ? t.call(e) : u ? t(e[0], n) : o;
  },
      _ = /^-ms-/,
      z = /-([a-z])/g;

  function U(e, t) {
    return t.toUpperCase();
  }

  function X(e) {
    return e.replace(_, "ms-").replace(z, U);
  }

  var V = function V(e) {
    return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType;
  };

  function G() {
    this.expando = S.expando + G.uid++;
  }

  G.uid = 1, G.prototype = {
    cache: function cache(e) {
      var t = e[this.expando];
      return t || (t = {}, V(e) && (e.nodeType ? e[this.expando] = t : Object.defineProperty(e, this.expando, {
        value: t,
        configurable: !0
      }))), t;
    },
    set: function set(e, t, n) {
      var r,
          i = this.cache(e);
      if ("string" == typeof t) i[X(t)] = n;else for (r in t) {
        i[X(r)] = t[r];
      }
      return i;
    },
    get: function get(e, t) {
      return void 0 === t ? this.cache(e) : e[this.expando] && e[this.expando][X(t)];
    },
    access: function access(e, t, n) {
      return void 0 === t || t && "string" == typeof t && void 0 === n ? this.get(e, t) : (this.set(e, t, n), void 0 !== n ? n : t);
    },
    remove: function remove(e, t) {
      var n,
          r = e[this.expando];

      if (void 0 !== r) {
        if (void 0 !== t) {
          n = (t = Array.isArray(t) ? t.map(X) : (t = X(t)) in r ? [t] : t.match(P) || []).length;

          while (n--) {
            delete r[t[n]];
          }
        }

        (void 0 === t || S.isEmptyObject(r)) && (e.nodeType ? e[this.expando] = void 0 : delete e[this.expando]);
      }
    },
    hasData: function hasData(e) {
      var t = e[this.expando];
      return void 0 !== t && !S.isEmptyObject(t);
    }
  };
  var Y = new G(),
      Q = new G(),
      J = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
      K = /[A-Z]/g;

  function Z(e, t, n) {
    var r, i;
    if (void 0 === n && 1 === e.nodeType) if (r = "data-" + t.replace(K, "-$&").toLowerCase(), "string" == typeof (n = e.getAttribute(r))) {
      try {
        n = "true" === (i = n) || "false" !== i && ("null" === i ? null : i === +i + "" ? +i : J.test(i) ? JSON.parse(i) : i);
      } catch (e) {}

      Q.set(e, t, n);
    } else n = void 0;
    return n;
  }

  S.extend({
    hasData: function hasData(e) {
      return Q.hasData(e) || Y.hasData(e);
    },
    data: function data(e, t, n) {
      return Q.access(e, t, n);
    },
    removeData: function removeData(e, t) {
      Q.remove(e, t);
    },
    _data: function _data(e, t, n) {
      return Y.access(e, t, n);
    },
    _removeData: function _removeData(e, t) {
      Y.remove(e, t);
    }
  }), S.fn.extend({
    data: function data(n, e) {
      var t,
          r,
          i,
          o = this[0],
          a = o && o.attributes;

      if (void 0 === n) {
        if (this.length && (i = Q.get(o), 1 === o.nodeType && !Y.get(o, "hasDataAttrs"))) {
          t = a.length;

          while (t--) {
            a[t] && 0 === (r = a[t].name).indexOf("data-") && (r = X(r.slice(5)), Z(o, r, i[r]));
          }

          Y.set(o, "hasDataAttrs", !0);
        }

        return i;
      }

      return "object" == _typeof(n) ? this.each(function () {
        Q.set(this, n);
      }) : $(this, function (e) {
        var t;
        if (o && void 0 === e) return void 0 !== (t = Q.get(o, n)) ? t : void 0 !== (t = Z(o, n)) ? t : void 0;
        this.each(function () {
          Q.set(this, n, e);
        });
      }, null, e, 1 < arguments.length, null, !0);
    },
    removeData: function removeData(e) {
      return this.each(function () {
        Q.remove(this, e);
      });
    }
  }), S.extend({
    queue: function queue(e, t, n) {
      var r;
      if (e) return t = (t || "fx") + "queue", r = Y.get(e, t), n && (!r || Array.isArray(n) ? r = Y.access(e, t, S.makeArray(n)) : r.push(n)), r || [];
    },
    dequeue: function dequeue(e, t) {
      t = t || "fx";

      var n = S.queue(e, t),
          r = n.length,
          i = n.shift(),
          o = S._queueHooks(e, t);

      "inprogress" === i && (i = n.shift(), r--), i && ("fx" === t && n.unshift("inprogress"), delete o.stop, i.call(e, function () {
        S.dequeue(e, t);
      }, o)), !r && o && o.empty.fire();
    },
    _queueHooks: function _queueHooks(e, t) {
      var n = t + "queueHooks";
      return Y.get(e, n) || Y.access(e, n, {
        empty: S.Callbacks("once memory").add(function () {
          Y.remove(e, [t + "queue", n]);
        })
      });
    }
  }), S.fn.extend({
    queue: function queue(t, n) {
      var e = 2;
      return "string" != typeof t && (n = t, t = "fx", e--), arguments.length < e ? S.queue(this[0], t) : void 0 === n ? this : this.each(function () {
        var e = S.queue(this, t, n);
        S._queueHooks(this, t), "fx" === t && "inprogress" !== e[0] && S.dequeue(this, t);
      });
    },
    dequeue: function dequeue(e) {
      return this.each(function () {
        S.dequeue(this, e);
      });
    },
    clearQueue: function clearQueue(e) {
      return this.queue(e || "fx", []);
    },
    promise: function promise(e, t) {
      var n,
          r = 1,
          i = S.Deferred(),
          o = this,
          a = this.length,
          s = function s() {
        --r || i.resolveWith(o, [o]);
      };

      "string" != typeof e && (t = e, e = void 0), e = e || "fx";

      while (a--) {
        (n = Y.get(o[a], e + "queueHooks")) && n.empty && (r++, n.empty.add(s));
      }

      return s(), i.promise(t);
    }
  });

  var ee = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
      te = new RegExp("^(?:([+-])=|)(" + ee + ")([a-z%]*)$", "i"),
      ne = ["Top", "Right", "Bottom", "Left"],
      re = E.documentElement,
      ie = function ie(e) {
    return S.contains(e.ownerDocument, e);
  },
      oe = {
    composed: !0
  };

  re.getRootNode && (ie = function ie(e) {
    return S.contains(e.ownerDocument, e) || e.getRootNode(oe) === e.ownerDocument;
  });

  var ae = function ae(e, t) {
    return "none" === (e = t || e).style.display || "" === e.style.display && ie(e) && "none" === S.css(e, "display");
  };

  function se(e, t, n, r) {
    var i,
        o,
        a = 20,
        s = r ? function () {
      return r.cur();
    } : function () {
      return S.css(e, t, "");
    },
        u = s(),
        l = n && n[3] || (S.cssNumber[t] ? "" : "px"),
        c = e.nodeType && (S.cssNumber[t] || "px" !== l && +u) && te.exec(S.css(e, t));

    if (c && c[3] !== l) {
      u /= 2, l = l || c[3], c = +u || 1;

      while (a--) {
        S.style(e, t, c + l), (1 - o) * (1 - (o = s() / u || .5)) <= 0 && (a = 0), c /= o;
      }

      c *= 2, S.style(e, t, c + l), n = n || [];
    }

    return n && (c = +c || +u || 0, i = n[1] ? c + (n[1] + 1) * n[2] : +n[2], r && (r.unit = l, r.start = c, r.end = i)), i;
  }

  var ue = {};

  function le(e, t) {
    for (var n, r, i, o, a, s, u, l = [], c = 0, f = e.length; c < f; c++) {
      (r = e[c]).style && (n = r.style.display, t ? ("none" === n && (l[c] = Y.get(r, "display") || null, l[c] || (r.style.display = "")), "" === r.style.display && ae(r) && (l[c] = (u = a = o = void 0, a = (i = r).ownerDocument, s = i.nodeName, (u = ue[s]) || (o = a.body.appendChild(a.createElement(s)), u = S.css(o, "display"), o.parentNode.removeChild(o), "none" === u && (u = "block"), ue[s] = u)))) : "none" !== n && (l[c] = "none", Y.set(r, "display", n)));
    }

    for (c = 0; c < f; c++) {
      null != l[c] && (e[c].style.display = l[c]);
    }

    return e;
  }

  S.fn.extend({
    show: function show() {
      return le(this, !0);
    },
    hide: function hide() {
      return le(this);
    },
    toggle: function toggle(e) {
      return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function () {
        ae(this) ? S(this).show() : S(this).hide();
      });
    }
  });
  var ce,
      fe,
      pe = /^(?:checkbox|radio)$/i,
      de = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i,
      he = /^$|^module$|\/(?:java|ecma)script/i;
  ce = E.createDocumentFragment().appendChild(E.createElement("div")), (fe = E.createElement("input")).setAttribute("type", "radio"), fe.setAttribute("checked", "checked"), fe.setAttribute("name", "t"), ce.appendChild(fe), y.checkClone = ce.cloneNode(!0).cloneNode(!0).lastChild.checked, ce.innerHTML = "<textarea>x</textarea>", y.noCloneChecked = !!ce.cloneNode(!0).lastChild.defaultValue, ce.innerHTML = "<option></option>", y.option = !!ce.lastChild;
  var ge = {
    thead: [1, "<table>", "</table>"],
    col: [2, "<table><colgroup>", "</colgroup></table>"],
    tr: [2, "<table><tbody>", "</tbody></table>"],
    td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
    _default: [0, "", ""]
  };

  function ve(e, t) {
    var n;
    return n = "undefined" != typeof e.getElementsByTagName ? e.getElementsByTagName(t || "*") : "undefined" != typeof e.querySelectorAll ? e.querySelectorAll(t || "*") : [], void 0 === t || t && A(e, t) ? S.merge([e], n) : n;
  }

  function ye(e, t) {
    for (var n = 0, r = e.length; n < r; n++) {
      Y.set(e[n], "globalEval", !t || Y.get(t[n], "globalEval"));
    }
  }

  ge.tbody = ge.tfoot = ge.colgroup = ge.caption = ge.thead, ge.th = ge.td, y.option || (ge.optgroup = ge.option = [1, "<select multiple='multiple'>", "</select>"]);
  var me = /<|&#?\w+;/;

  function xe(e, t, n, r, i) {
    for (var o, a, s, u, l, c, f = t.createDocumentFragment(), p = [], d = 0, h = e.length; d < h; d++) {
      if ((o = e[d]) || 0 === o) if ("object" === w(o)) S.merge(p, o.nodeType ? [o] : o);else if (me.test(o)) {
        a = a || f.appendChild(t.createElement("div")), s = (de.exec(o) || ["", ""])[1].toLowerCase(), u = ge[s] || ge._default, a.innerHTML = u[1] + S.htmlPrefilter(o) + u[2], c = u[0];

        while (c--) {
          a = a.lastChild;
        }

        S.merge(p, a.childNodes), (a = f.firstChild).textContent = "";
      } else p.push(t.createTextNode(o));
    }

    f.textContent = "", d = 0;

    while (o = p[d++]) {
      if (r && -1 < S.inArray(o, r)) i && i.push(o);else if (l = ie(o), a = ve(f.appendChild(o), "script"), l && ye(a), n) {
        c = 0;

        while (o = a[c++]) {
          he.test(o.type || "") && n.push(o);
        }
      }
    }

    return f;
  }

  var be = /^key/,
      we = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
      Te = /^([^.]*)(?:\.(.+)|)/;

  function Ce() {
    return !0;
  }

  function Ee() {
    return !1;
  }

  function Se(e, t) {
    return e === function () {
      try {
        return E.activeElement;
      } catch (e) {}
    }() == ("focus" === t);
  }

  function ke(e, t, n, r, i, o) {
    var a, s;

    if ("object" == _typeof(t)) {
      for (s in "string" != typeof n && (r = r || n, n = void 0), t) {
        ke(e, s, n, r, t[s], o);
      }

      return e;
    }

    if (null == r && null == i ? (i = n, r = n = void 0) : null == i && ("string" == typeof n ? (i = r, r = void 0) : (i = r, r = n, n = void 0)), !1 === i) i = Ee;else if (!i) return e;
    return 1 === o && (a = i, (i = function i(e) {
      return S().off(e), a.apply(this, arguments);
    }).guid = a.guid || (a.guid = S.guid++)), e.each(function () {
      S.event.add(this, t, i, r, n);
    });
  }

  function Ae(e, i, o) {
    o ? (Y.set(e, i, !1), S.event.add(e, i, {
      namespace: !1,
      handler: function handler(e) {
        var t,
            n,
            r = Y.get(this, i);

        if (1 & e.isTrigger && this[i]) {
          if (r.length) (S.event.special[i] || {}).delegateType && e.stopPropagation();else if (r = s.call(arguments), Y.set(this, i, r), t = o(this, i), this[i](), r !== (n = Y.get(this, i)) || t ? Y.set(this, i, !1) : n = {}, r !== n) return e.stopImmediatePropagation(), e.preventDefault(), n.value;
        } else r.length && (Y.set(this, i, {
          value: S.event.trigger(S.extend(r[0], S.Event.prototype), r.slice(1), this)
        }), e.stopImmediatePropagation());
      }
    })) : void 0 === Y.get(e, i) && S.event.add(e, i, Ce);
  }

  S.event = {
    global: {},
    add: function add(t, e, n, r, i) {
      var o,
          a,
          s,
          u,
          l,
          c,
          f,
          p,
          d,
          h,
          g,
          v = Y.get(t);

      if (V(t)) {
        n.handler && (n = (o = n).handler, i = o.selector), i && S.find.matchesSelector(re, i), n.guid || (n.guid = S.guid++), (u = v.events) || (u = v.events = Object.create(null)), (a = v.handle) || (a = v.handle = function (e) {
          return "undefined" != typeof S && S.event.triggered !== e.type ? S.event.dispatch.apply(t, arguments) : void 0;
        }), l = (e = (e || "").match(P) || [""]).length;

        while (l--) {
          d = g = (s = Te.exec(e[l]) || [])[1], h = (s[2] || "").split(".").sort(), d && (f = S.event.special[d] || {}, d = (i ? f.delegateType : f.bindType) || d, f = S.event.special[d] || {}, c = S.extend({
            type: d,
            origType: g,
            data: r,
            handler: n,
            guid: n.guid,
            selector: i,
            needsContext: i && S.expr.match.needsContext.test(i),
            namespace: h.join(".")
          }, o), (p = u[d]) || ((p = u[d] = []).delegateCount = 0, f.setup && !1 !== f.setup.call(t, r, h, a) || t.addEventListener && t.addEventListener(d, a)), f.add && (f.add.call(t, c), c.handler.guid || (c.handler.guid = n.guid)), i ? p.splice(p.delegateCount++, 0, c) : p.push(c), S.event.global[d] = !0);
        }
      }
    },
    remove: function remove(e, t, n, r, i) {
      var o,
          a,
          s,
          u,
          l,
          c,
          f,
          p,
          d,
          h,
          g,
          v = Y.hasData(e) && Y.get(e);

      if (v && (u = v.events)) {
        l = (t = (t || "").match(P) || [""]).length;

        while (l--) {
          if (d = g = (s = Te.exec(t[l]) || [])[1], h = (s[2] || "").split(".").sort(), d) {
            f = S.event.special[d] || {}, p = u[d = (r ? f.delegateType : f.bindType) || d] || [], s = s[2] && new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"), a = o = p.length;

            while (o--) {
              c = p[o], !i && g !== c.origType || n && n.guid !== c.guid || s && !s.test(c.namespace) || r && r !== c.selector && ("**" !== r || !c.selector) || (p.splice(o, 1), c.selector && p.delegateCount--, f.remove && f.remove.call(e, c));
            }

            a && !p.length && (f.teardown && !1 !== f.teardown.call(e, h, v.handle) || S.removeEvent(e, d, v.handle), delete u[d]);
          } else for (d in u) {
            S.event.remove(e, d + t[l], n, r, !0);
          }
        }

        S.isEmptyObject(u) && Y.remove(e, "handle events");
      }
    },
    dispatch: function dispatch(e) {
      var t,
          n,
          r,
          i,
          o,
          a,
          s = new Array(arguments.length),
          u = S.event.fix(e),
          l = (Y.get(this, "events") || Object.create(null))[u.type] || [],
          c = S.event.special[u.type] || {};

      for (s[0] = u, t = 1; t < arguments.length; t++) {
        s[t] = arguments[t];
      }

      if (u.delegateTarget = this, !c.preDispatch || !1 !== c.preDispatch.call(this, u)) {
        a = S.event.handlers.call(this, u, l), t = 0;

        while ((i = a[t++]) && !u.isPropagationStopped()) {
          u.currentTarget = i.elem, n = 0;

          while ((o = i.handlers[n++]) && !u.isImmediatePropagationStopped()) {
            u.rnamespace && !1 !== o.namespace && !u.rnamespace.test(o.namespace) || (u.handleObj = o, u.data = o.data, void 0 !== (r = ((S.event.special[o.origType] || {}).handle || o.handler).apply(i.elem, s)) && !1 === (u.result = r) && (u.preventDefault(), u.stopPropagation()));
          }
        }

        return c.postDispatch && c.postDispatch.call(this, u), u.result;
      }
    },
    handlers: function handlers(e, t) {
      var n,
          r,
          i,
          o,
          a,
          s = [],
          u = t.delegateCount,
          l = e.target;
      if (u && l.nodeType && !("click" === e.type && 1 <= e.button)) for (; l !== this; l = l.parentNode || this) {
        if (1 === l.nodeType && ("click" !== e.type || !0 !== l.disabled)) {
          for (o = [], a = {}, n = 0; n < u; n++) {
            void 0 === a[i = (r = t[n]).selector + " "] && (a[i] = r.needsContext ? -1 < S(i, this).index(l) : S.find(i, this, null, [l]).length), a[i] && o.push(r);
          }

          o.length && s.push({
            elem: l,
            handlers: o
          });
        }
      }
      return l = this, u < t.length && s.push({
        elem: l,
        handlers: t.slice(u)
      }), s;
    },
    addProp: function addProp(t, e) {
      Object.defineProperty(S.Event.prototype, t, {
        enumerable: !0,
        configurable: !0,
        get: m(e) ? function () {
          if (this.originalEvent) return e(this.originalEvent);
        } : function () {
          if (this.originalEvent) return this.originalEvent[t];
        },
        set: function set(e) {
          Object.defineProperty(this, t, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: e
          });
        }
      });
    },
    fix: function fix(e) {
      return e[S.expando] ? e : new S.Event(e);
    },
    special: {
      load: {
        noBubble: !0
      },
      click: {
        setup: function setup(e) {
          var t = this || e;
          return pe.test(t.type) && t.click && A(t, "input") && Ae(t, "click", Ce), !1;
        },
        trigger: function trigger(e) {
          var t = this || e;
          return pe.test(t.type) && t.click && A(t, "input") && Ae(t, "click"), !0;
        },
        _default: function _default(e) {
          var t = e.target;
          return pe.test(t.type) && t.click && A(t, "input") && Y.get(t, "click") || A(t, "a");
        }
      },
      beforeunload: {
        postDispatch: function postDispatch(e) {
          void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result);
        }
      }
    }
  }, S.removeEvent = function (e, t, n) {
    e.removeEventListener && e.removeEventListener(t, n);
  }, S.Event = function (e, t) {
    if (!(this instanceof S.Event)) return new S.Event(e, t);
    e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && !1 === e.returnValue ? Ce : Ee, this.target = e.target && 3 === e.target.nodeType ? e.target.parentNode : e.target, this.currentTarget = e.currentTarget, this.relatedTarget = e.relatedTarget) : this.type = e, t && S.extend(this, t), this.timeStamp = e && e.timeStamp || Date.now(), this[S.expando] = !0;
  }, S.Event.prototype = {
    constructor: S.Event,
    isDefaultPrevented: Ee,
    isPropagationStopped: Ee,
    isImmediatePropagationStopped: Ee,
    isSimulated: !1,
    preventDefault: function preventDefault() {
      var e = this.originalEvent;
      this.isDefaultPrevented = Ce, e && !this.isSimulated && e.preventDefault();
    },
    stopPropagation: function stopPropagation() {
      var e = this.originalEvent;
      this.isPropagationStopped = Ce, e && !this.isSimulated && e.stopPropagation();
    },
    stopImmediatePropagation: function stopImmediatePropagation() {
      var e = this.originalEvent;
      this.isImmediatePropagationStopped = Ce, e && !this.isSimulated && e.stopImmediatePropagation(), this.stopPropagation();
    }
  }, S.each({
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
    "char": !0,
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
    which: function which(e) {
      var t = e.button;
      return null == e.which && be.test(e.type) ? null != e.charCode ? e.charCode : e.keyCode : !e.which && void 0 !== t && we.test(e.type) ? 1 & t ? 1 : 2 & t ? 3 : 4 & t ? 2 : 0 : e.which;
    }
  }, S.event.addProp), S.each({
    focus: "focusin",
    blur: "focusout"
  }, function (e, t) {
    S.event.special[e] = {
      setup: function setup() {
        return Ae(this, e, Se), !1;
      },
      trigger: function trigger() {
        return Ae(this, e), !0;
      },
      delegateType: t
    };
  }), S.each({
    mouseenter: "mouseover",
    mouseleave: "mouseout",
    pointerenter: "pointerover",
    pointerleave: "pointerout"
  }, function (e, i) {
    S.event.special[e] = {
      delegateType: i,
      bindType: i,
      handle: function handle(e) {
        var t,
            n = e.relatedTarget,
            r = e.handleObj;
        return n && (n === this || S.contains(this, n)) || (e.type = r.origType, t = r.handler.apply(this, arguments), e.type = i), t;
      }
    };
  }), S.fn.extend({
    on: function on(e, t, n, r) {
      return ke(this, e, t, n, r);
    },
    one: function one(e, t, n, r) {
      return ke(this, e, t, n, r, 1);
    },
    off: function off(e, t, n) {
      var r, i;
      if (e && e.preventDefault && e.handleObj) return r = e.handleObj, S(e.delegateTarget).off(r.namespace ? r.origType + "." + r.namespace : r.origType, r.selector, r.handler), this;

      if ("object" == _typeof(e)) {
        for (i in e) {
          this.off(i, t, e[i]);
        }

        return this;
      }

      return !1 !== t && "function" != typeof t || (n = t, t = void 0), !1 === n && (n = Ee), this.each(function () {
        S.event.remove(this, e, n, t);
      });
    }
  });
  var Ne = /<script|<style|<link/i,
      De = /checked\s*(?:[^=]|=\s*.checked.)/i,
      je = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;

  function qe(e, t) {
    return A(e, "table") && A(11 !== t.nodeType ? t : t.firstChild, "tr") && S(e).children("tbody")[0] || e;
  }

  function Le(e) {
    return e.type = (null !== e.getAttribute("type")) + "/" + e.type, e;
  }

  function He(e) {
    return "true/" === (e.type || "").slice(0, 5) ? e.type = e.type.slice(5) : e.removeAttribute("type"), e;
  }

  function Oe(e, t) {
    var n, r, i, o, a, s;

    if (1 === t.nodeType) {
      if (Y.hasData(e) && (s = Y.get(e).events)) for (i in Y.remove(t, "handle events"), s) {
        for (n = 0, r = s[i].length; n < r; n++) {
          S.event.add(t, i, s[i][n]);
        }
      }
      Q.hasData(e) && (o = Q.access(e), a = S.extend({}, o), Q.set(t, a));
    }
  }

  function Pe(n, r, i, o) {
    r = g(r);
    var e,
        t,
        a,
        s,
        u,
        l,
        c = 0,
        f = n.length,
        p = f - 1,
        d = r[0],
        h = m(d);
    if (h || 1 < f && "string" == typeof d && !y.checkClone && De.test(d)) return n.each(function (e) {
      var t = n.eq(e);
      h && (r[0] = d.call(this, e, t.html())), Pe(t, r, i, o);
    });

    if (f && (t = (e = xe(r, n[0].ownerDocument, !1, n, o)).firstChild, 1 === e.childNodes.length && (e = t), t || o)) {
      for (s = (a = S.map(ve(e, "script"), Le)).length; c < f; c++) {
        u = e, c !== p && (u = S.clone(u, !0, !0), s && S.merge(a, ve(u, "script"))), i.call(n[c], u, c);
      }

      if (s) for (l = a[a.length - 1].ownerDocument, S.map(a, He), c = 0; c < s; c++) {
        u = a[c], he.test(u.type || "") && !Y.access(u, "globalEval") && S.contains(l, u) && (u.src && "module" !== (u.type || "").toLowerCase() ? S._evalUrl && !u.noModule && S._evalUrl(u.src, {
          nonce: u.nonce || u.getAttribute("nonce")
        }, l) : b(u.textContent.replace(je, ""), u, l));
      }
    }

    return n;
  }

  function Re(e, t, n) {
    for (var r, i = t ? S.filter(t, e) : e, o = 0; null != (r = i[o]); o++) {
      n || 1 !== r.nodeType || S.cleanData(ve(r)), r.parentNode && (n && ie(r) && ye(ve(r, "script")), r.parentNode.removeChild(r));
    }

    return e;
  }

  S.extend({
    htmlPrefilter: function htmlPrefilter(e) {
      return e;
    },
    clone: function clone(e, t, n) {
      var r,
          i,
          o,
          a,
          s,
          u,
          l,
          c = e.cloneNode(!0),
          f = ie(e);
      if (!(y.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || S.isXMLDoc(e))) for (a = ve(c), r = 0, i = (o = ve(e)).length; r < i; r++) {
        s = o[r], u = a[r], void 0, "input" === (l = u.nodeName.toLowerCase()) && pe.test(s.type) ? u.checked = s.checked : "input" !== l && "textarea" !== l || (u.defaultValue = s.defaultValue);
      }
      if (t) if (n) for (o = o || ve(e), a = a || ve(c), r = 0, i = o.length; r < i; r++) {
        Oe(o[r], a[r]);
      } else Oe(e, c);
      return 0 < (a = ve(c, "script")).length && ye(a, !f && ve(e, "script")), c;
    },
    cleanData: function cleanData(e) {
      for (var t, n, r, i = S.event.special, o = 0; void 0 !== (n = e[o]); o++) {
        if (V(n)) {
          if (t = n[Y.expando]) {
            if (t.events) for (r in t.events) {
              i[r] ? S.event.remove(n, r) : S.removeEvent(n, r, t.handle);
            }
            n[Y.expando] = void 0;
          }

          n[Q.expando] && (n[Q.expando] = void 0);
        }
      }
    }
  }), S.fn.extend({
    detach: function detach(e) {
      return Re(this, e, !0);
    },
    remove: function remove(e) {
      return Re(this, e);
    },
    text: function text(e) {
      return $(this, function (e) {
        return void 0 === e ? S.text(this) : this.empty().each(function () {
          1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = e);
        });
      }, null, e, arguments.length);
    },
    append: function append() {
      return Pe(this, arguments, function (e) {
        1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || qe(this, e).appendChild(e);
      });
    },
    prepend: function prepend() {
      return Pe(this, arguments, function (e) {
        if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
          var t = qe(this, e);
          t.insertBefore(e, t.firstChild);
        }
      });
    },
    before: function before() {
      return Pe(this, arguments, function (e) {
        this.parentNode && this.parentNode.insertBefore(e, this);
      });
    },
    after: function after() {
      return Pe(this, arguments, function (e) {
        this.parentNode && this.parentNode.insertBefore(e, this.nextSibling);
      });
    },
    empty: function empty() {
      for (var e, t = 0; null != (e = this[t]); t++) {
        1 === e.nodeType && (S.cleanData(ve(e, !1)), e.textContent = "");
      }

      return this;
    },
    clone: function clone(e, t) {
      return e = null != e && e, t = null == t ? e : t, this.map(function () {
        return S.clone(this, e, t);
      });
    },
    html: function html(e) {
      return $(this, function (e) {
        var t = this[0] || {},
            n = 0,
            r = this.length;
        if (void 0 === e && 1 === t.nodeType) return t.innerHTML;

        if ("string" == typeof e && !Ne.test(e) && !ge[(de.exec(e) || ["", ""])[1].toLowerCase()]) {
          e = S.htmlPrefilter(e);

          try {
            for (; n < r; n++) {
              1 === (t = this[n] || {}).nodeType && (S.cleanData(ve(t, !1)), t.innerHTML = e);
            }

            t = 0;
          } catch (e) {}
        }

        t && this.empty().append(e);
      }, null, e, arguments.length);
    },
    replaceWith: function replaceWith() {
      var n = [];
      return Pe(this, arguments, function (e) {
        var t = this.parentNode;
        S.inArray(this, n) < 0 && (S.cleanData(ve(this)), t && t.replaceChild(e, this));
      }, n);
    }
  }), S.each({
    appendTo: "append",
    prependTo: "prepend",
    insertBefore: "before",
    insertAfter: "after",
    replaceAll: "replaceWith"
  }, function (e, a) {
    S.fn[e] = function (e) {
      for (var t, n = [], r = S(e), i = r.length - 1, o = 0; o <= i; o++) {
        t = o === i ? this : this.clone(!0), S(r[o])[a](t), u.apply(n, t.get());
      }

      return this.pushStack(n);
    };
  });

  var Me = new RegExp("^(" + ee + ")(?!px)[a-z%]+$", "i"),
      Ie = function Ie(e) {
    var t = e.ownerDocument.defaultView;
    return t && t.opener || (t = C), t.getComputedStyle(e);
  },
      We = function We(e, t, n) {
    var r,
        i,
        o = {};

    for (i in t) {
      o[i] = e.style[i], e.style[i] = t[i];
    }

    for (i in r = n.call(e), t) {
      e.style[i] = o[i];
    }

    return r;
  },
      Fe = new RegExp(ne.join("|"), "i");

  function Be(e, t, n) {
    var r,
        i,
        o,
        a,
        s = e.style;
    return (n = n || Ie(e)) && ("" !== (a = n.getPropertyValue(t) || n[t]) || ie(e) || (a = S.style(e, t)), !y.pixelBoxStyles() && Me.test(a) && Fe.test(t) && (r = s.width, i = s.minWidth, o = s.maxWidth, s.minWidth = s.maxWidth = s.width = a, a = n.width, s.width = r, s.minWidth = i, s.maxWidth = o)), void 0 !== a ? a + "" : a;
  }

  function $e(e, t) {
    return {
      get: function get() {
        if (!e()) return (this.get = t).apply(this, arguments);
        delete this.get;
      }
    };
  }

  !function () {
    function e() {
      if (l) {
        u.style.cssText = "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0", l.style.cssText = "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%", re.appendChild(u).appendChild(l);
        var e = C.getComputedStyle(l);
        n = "1%" !== e.top, s = 12 === t(e.marginLeft), l.style.right = "60%", o = 36 === t(e.right), r = 36 === t(e.width), l.style.position = "absolute", i = 12 === t(l.offsetWidth / 3), re.removeChild(u), l = null;
      }
    }

    function t(e) {
      return Math.round(parseFloat(e));
    }

    var n,
        r,
        i,
        o,
        a,
        s,
        u = E.createElement("div"),
        l = E.createElement("div");
    l.style && (l.style.backgroundClip = "content-box", l.cloneNode(!0).style.backgroundClip = "", y.clearCloneStyle = "content-box" === l.style.backgroundClip, S.extend(y, {
      boxSizingReliable: function boxSizingReliable() {
        return e(), r;
      },
      pixelBoxStyles: function pixelBoxStyles() {
        return e(), o;
      },
      pixelPosition: function pixelPosition() {
        return e(), n;
      },
      reliableMarginLeft: function reliableMarginLeft() {
        return e(), s;
      },
      scrollboxSize: function scrollboxSize() {
        return e(), i;
      },
      reliableTrDimensions: function reliableTrDimensions() {
        var e, t, n, r;
        return null == a && (e = E.createElement("table"), t = E.createElement("tr"), n = E.createElement("div"), e.style.cssText = "position:absolute;left:-11111px", t.style.height = "1px", n.style.height = "9px", re.appendChild(e).appendChild(t).appendChild(n), r = C.getComputedStyle(t), a = 3 < parseInt(r.height), re.removeChild(e)), a;
      }
    }));
  }();
  var _e = ["Webkit", "Moz", "ms"],
      ze = E.createElement("div").style,
      Ue = {};

  function Xe(e) {
    var t = S.cssProps[e] || Ue[e];
    return t || (e in ze ? e : Ue[e] = function (e) {
      var t = e[0].toUpperCase() + e.slice(1),
          n = _e.length;

      while (n--) {
        if ((e = _e[n] + t) in ze) return e;
      }
    }(e) || e);
  }

  var Ve = /^(none|table(?!-c[ea]).+)/,
      Ge = /^--/,
      Ye = {
    position: "absolute",
    visibility: "hidden",
    display: "block"
  },
      Qe = {
    letterSpacing: "0",
    fontWeight: "400"
  };

  function Je(e, t, n) {
    var r = te.exec(t);
    return r ? Math.max(0, r[2] - (n || 0)) + (r[3] || "px") : t;
  }

  function Ke(e, t, n, r, i, o) {
    var a = "width" === t ? 1 : 0,
        s = 0,
        u = 0;
    if (n === (r ? "border" : "content")) return 0;

    for (; a < 4; a += 2) {
      "margin" === n && (u += S.css(e, n + ne[a], !0, i)), r ? ("content" === n && (u -= S.css(e, "padding" + ne[a], !0, i)), "margin" !== n && (u -= S.css(e, "border" + ne[a] + "Width", !0, i))) : (u += S.css(e, "padding" + ne[a], !0, i), "padding" !== n ? u += S.css(e, "border" + ne[a] + "Width", !0, i) : s += S.css(e, "border" + ne[a] + "Width", !0, i));
    }

    return !r && 0 <= o && (u += Math.max(0, Math.ceil(e["offset" + t[0].toUpperCase() + t.slice(1)] - o - u - s - .5)) || 0), u;
  }

  function Ze(e, t, n) {
    var r = Ie(e),
        i = (!y.boxSizingReliable() || n) && "border-box" === S.css(e, "boxSizing", !1, r),
        o = i,
        a = Be(e, t, r),
        s = "offset" + t[0].toUpperCase() + t.slice(1);

    if (Me.test(a)) {
      if (!n) return a;
      a = "auto";
    }

    return (!y.boxSizingReliable() && i || !y.reliableTrDimensions() && A(e, "tr") || "auto" === a || !parseFloat(a) && "inline" === S.css(e, "display", !1, r)) && e.getClientRects().length && (i = "border-box" === S.css(e, "boxSizing", !1, r), (o = s in e) && (a = e[s])), (a = parseFloat(a) || 0) + Ke(e, t, n || (i ? "border" : "content"), o, r, a) + "px";
  }

  function et(e, t, n, r, i) {
    return new et.prototype.init(e, t, n, r, i);
  }

  S.extend({
    cssHooks: {
      opacity: {
        get: function get(e, t) {
          if (t) {
            var n = Be(e, "opacity");
            return "" === n ? "1" : n;
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
    style: function style(e, t, n, r) {
      if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
        var i,
            o,
            a,
            s = X(t),
            u = Ge.test(t),
            l = e.style;
        if (u || (t = Xe(s)), a = S.cssHooks[t] || S.cssHooks[s], void 0 === n) return a && "get" in a && void 0 !== (i = a.get(e, !1, r)) ? i : l[t];
        "string" === (o = _typeof(n)) && (i = te.exec(n)) && i[1] && (n = se(e, t, i), o = "number"), null != n && n == n && ("number" !== o || u || (n += i && i[3] || (S.cssNumber[s] ? "" : "px")), y.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (l[t] = "inherit"), a && "set" in a && void 0 === (n = a.set(e, n, r)) || (u ? l.setProperty(t, n) : l[t] = n));
      }
    },
    css: function css(e, t, n, r) {
      var i,
          o,
          a,
          s = X(t);
      return Ge.test(t) || (t = Xe(s)), (a = S.cssHooks[t] || S.cssHooks[s]) && "get" in a && (i = a.get(e, !0, n)), void 0 === i && (i = Be(e, t, r)), "normal" === i && t in Qe && (i = Qe[t]), "" === n || n ? (o = parseFloat(i), !0 === n || isFinite(o) ? o || 0 : i) : i;
    }
  }), S.each(["height", "width"], function (e, u) {
    S.cssHooks[u] = {
      get: function get(e, t, n) {
        if (t) return !Ve.test(S.css(e, "display")) || e.getClientRects().length && e.getBoundingClientRect().width ? Ze(e, u, n) : We(e, Ye, function () {
          return Ze(e, u, n);
        });
      },
      set: function set(e, t, n) {
        var r,
            i = Ie(e),
            o = !y.scrollboxSize() && "absolute" === i.position,
            a = (o || n) && "border-box" === S.css(e, "boxSizing", !1, i),
            s = n ? Ke(e, u, n, a, i) : 0;
        return a && o && (s -= Math.ceil(e["offset" + u[0].toUpperCase() + u.slice(1)] - parseFloat(i[u]) - Ke(e, u, "border", !1, i) - .5)), s && (r = te.exec(t)) && "px" !== (r[3] || "px") && (e.style[u] = t, t = S.css(e, u)), Je(0, t, s);
      }
    };
  }), S.cssHooks.marginLeft = $e(y.reliableMarginLeft, function (e, t) {
    if (t) return (parseFloat(Be(e, "marginLeft")) || e.getBoundingClientRect().left - We(e, {
      marginLeft: 0
    }, function () {
      return e.getBoundingClientRect().left;
    })) + "px";
  }), S.each({
    margin: "",
    padding: "",
    border: "Width"
  }, function (i, o) {
    S.cssHooks[i + o] = {
      expand: function expand(e) {
        for (var t = 0, n = {}, r = "string" == typeof e ? e.split(" ") : [e]; t < 4; t++) {
          n[i + ne[t] + o] = r[t] || r[t - 2] || r[0];
        }

        return n;
      }
    }, "margin" !== i && (S.cssHooks[i + o].set = Je);
  }), S.fn.extend({
    css: function css(e, t) {
      return $(this, function (e, t, n) {
        var r,
            i,
            o = {},
            a = 0;

        if (Array.isArray(t)) {
          for (r = Ie(e), i = t.length; a < i; a++) {
            o[t[a]] = S.css(e, t[a], !1, r);
          }

          return o;
        }

        return void 0 !== n ? S.style(e, t, n) : S.css(e, t);
      }, e, t, 1 < arguments.length);
    }
  }), ((S.Tween = et).prototype = {
    constructor: et,
    init: function init(e, t, n, r, i, o) {
      this.elem = e, this.prop = n, this.easing = i || S.easing._default, this.options = t, this.start = this.now = this.cur(), this.end = r, this.unit = o || (S.cssNumber[n] ? "" : "px");
    },
    cur: function cur() {
      var e = et.propHooks[this.prop];
      return e && e.get ? e.get(this) : et.propHooks._default.get(this);
    },
    run: function run(e) {
      var t,
          n = et.propHooks[this.prop];
      return this.options.duration ? this.pos = t = S.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : et.propHooks._default.set(this), this;
    }
  }).init.prototype = et.prototype, (et.propHooks = {
    _default: {
      get: function get(e) {
        var t;
        return 1 !== e.elem.nodeType || null != e.elem[e.prop] && null == e.elem.style[e.prop] ? e.elem[e.prop] : (t = S.css(e.elem, e.prop, "")) && "auto" !== t ? t : 0;
      },
      set: function set(e) {
        S.fx.step[e.prop] ? S.fx.step[e.prop](e) : 1 !== e.elem.nodeType || !S.cssHooks[e.prop] && null == e.elem.style[Xe(e.prop)] ? e.elem[e.prop] = e.now : S.style(e.elem, e.prop, e.now + e.unit);
      }
    }
  }).scrollTop = et.propHooks.scrollLeft = {
    set: function set(e) {
      e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now);
    }
  }, S.easing = {
    linear: function linear(e) {
      return e;
    },
    swing: function swing(e) {
      return .5 - Math.cos(e * Math.PI) / 2;
    },
    _default: "swing"
  }, S.fx = et.prototype.init, S.fx.step = {};
  var tt,
      nt,
      rt,
      it,
      ot = /^(?:toggle|show|hide)$/,
      at = /queueHooks$/;

  function st() {
    nt && (!1 === E.hidden && C.requestAnimationFrame ? C.requestAnimationFrame(st) : C.setTimeout(st, S.fx.interval), S.fx.tick());
  }

  function ut() {
    return C.setTimeout(function () {
      tt = void 0;
    }), tt = Date.now();
  }

  function lt(e, t) {
    var n,
        r = 0,
        i = {
      height: e
    };

    for (t = t ? 1 : 0; r < 4; r += 2 - t) {
      i["margin" + (n = ne[r])] = i["padding" + n] = e;
    }

    return t && (i.opacity = i.width = e), i;
  }

  function ct(e, t, n) {
    for (var r, i = (ft.tweeners[t] || []).concat(ft.tweeners["*"]), o = 0, a = i.length; o < a; o++) {
      if (r = i[o].call(n, t, e)) return r;
    }
  }

  function ft(o, e, t) {
    var n,
        a,
        r = 0,
        i = ft.prefilters.length,
        s = S.Deferred().always(function () {
      delete u.elem;
    }),
        u = function u() {
      if (a) return !1;

      for (var e = tt || ut(), t = Math.max(0, l.startTime + l.duration - e), n = 1 - (t / l.duration || 0), r = 0, i = l.tweens.length; r < i; r++) {
        l.tweens[r].run(n);
      }

      return s.notifyWith(o, [l, n, t]), n < 1 && i ? t : (i || s.notifyWith(o, [l, 1, 0]), s.resolveWith(o, [l]), !1);
    },
        l = s.promise({
      elem: o,
      props: S.extend({}, e),
      opts: S.extend(!0, {
        specialEasing: {},
        easing: S.easing._default
      }, t),
      originalProperties: e,
      originalOptions: t,
      startTime: tt || ut(),
      duration: t.duration,
      tweens: [],
      createTween: function createTween(e, t) {
        var n = S.Tween(o, l.opts, e, t, l.opts.specialEasing[e] || l.opts.easing);
        return l.tweens.push(n), n;
      },
      stop: function stop(e) {
        var t = 0,
            n = e ? l.tweens.length : 0;
        if (a) return this;

        for (a = !0; t < n; t++) {
          l.tweens[t].run(1);
        }

        return e ? (s.notifyWith(o, [l, 1, 0]), s.resolveWith(o, [l, e])) : s.rejectWith(o, [l, e]), this;
      }
    }),
        c = l.props;

    for (!function (e, t) {
      var n, r, i, o, a;

      for (n in e) {
        if (i = t[r = X(n)], o = e[n], Array.isArray(o) && (i = o[1], o = e[n] = o[0]), n !== r && (e[r] = o, delete e[n]), (a = S.cssHooks[r]) && ("expand" in a)) for (n in o = a.expand(o), delete e[r], o) {
          (n in e) || (e[n] = o[n], t[n] = i);
        } else t[r] = i;
      }
    }(c, l.opts.specialEasing); r < i; r++) {
      if (n = ft.prefilters[r].call(l, o, c, l.opts)) return m(n.stop) && (S._queueHooks(l.elem, l.opts.queue).stop = n.stop.bind(n)), n;
    }

    return S.map(c, ct, l), m(l.opts.start) && l.opts.start.call(o, l), l.progress(l.opts.progress).done(l.opts.done, l.opts.complete).fail(l.opts.fail).always(l.opts.always), S.fx.timer(S.extend(u, {
      elem: o,
      anim: l,
      queue: l.opts.queue
    })), l;
  }

  S.Animation = S.extend(ft, {
    tweeners: {
      "*": [function (e, t) {
        var n = this.createTween(e, t);
        return se(n.elem, e, te.exec(t), n), n;
      }]
    },
    tweener: function tweener(e, t) {
      m(e) ? (t = e, e = ["*"]) : e = e.match(P);

      for (var n, r = 0, i = e.length; r < i; r++) {
        n = e[r], ft.tweeners[n] = ft.tweeners[n] || [], ft.tweeners[n].unshift(t);
      }
    },
    prefilters: [function (e, t, n) {
      var r,
          i,
          o,
          a,
          s,
          u,
          l,
          c,
          f = "width" in t || "height" in t,
          p = this,
          d = {},
          h = e.style,
          g = e.nodeType && ae(e),
          v = Y.get(e, "fxshow");

      for (r in n.queue || (null == (a = S._queueHooks(e, "fx")).unqueued && (a.unqueued = 0, s = a.empty.fire, a.empty.fire = function () {
        a.unqueued || s();
      }), a.unqueued++, p.always(function () {
        p.always(function () {
          a.unqueued--, S.queue(e, "fx").length || a.empty.fire();
        });
      })), t) {
        if (i = t[r], ot.test(i)) {
          if (delete t[r], o = o || "toggle" === i, i === (g ? "hide" : "show")) {
            if ("show" !== i || !v || void 0 === v[r]) continue;
            g = !0;
          }

          d[r] = v && v[r] || S.style(e, r);
        }
      }

      if ((u = !S.isEmptyObject(t)) || !S.isEmptyObject(d)) for (r in f && 1 === e.nodeType && (n.overflow = [h.overflow, h.overflowX, h.overflowY], null == (l = v && v.display) && (l = Y.get(e, "display")), "none" === (c = S.css(e, "display")) && (l ? c = l : (le([e], !0), l = e.style.display || l, c = S.css(e, "display"), le([e]))), ("inline" === c || "inline-block" === c && null != l) && "none" === S.css(e, "float") && (u || (p.done(function () {
        h.display = l;
      }), null == l && (c = h.display, l = "none" === c ? "" : c)), h.display = "inline-block")), n.overflow && (h.overflow = "hidden", p.always(function () {
        h.overflow = n.overflow[0], h.overflowX = n.overflow[1], h.overflowY = n.overflow[2];
      })), u = !1, d) {
        u || (v ? "hidden" in v && (g = v.hidden) : v = Y.access(e, "fxshow", {
          display: l
        }), o && (v.hidden = !g), g && le([e], !0), p.done(function () {
          for (r in g || le([e]), Y.remove(e, "fxshow"), d) {
            S.style(e, r, d[r]);
          }
        })), u = ct(g ? v[r] : 0, r, p), r in v || (v[r] = u.start, g && (u.end = u.start, u.start = 0));
      }
    }],
    prefilter: function prefilter(e, t) {
      t ? ft.prefilters.unshift(e) : ft.prefilters.push(e);
    }
  }), S.speed = function (e, t, n) {
    var r = e && "object" == _typeof(e) ? S.extend({}, e) : {
      complete: n || !n && t || m(e) && e,
      duration: e,
      easing: n && t || t && !m(t) && t
    };
    return S.fx.off ? r.duration = 0 : "number" != typeof r.duration && (r.duration in S.fx.speeds ? r.duration = S.fx.speeds[r.duration] : r.duration = S.fx.speeds._default), null != r.queue && !0 !== r.queue || (r.queue = "fx"), r.old = r.complete, r.complete = function () {
      m(r.old) && r.old.call(this), r.queue && S.dequeue(this, r.queue);
    }, r;
  }, S.fn.extend({
    fadeTo: function fadeTo(e, t, n, r) {
      return this.filter(ae).css("opacity", 0).show().end().animate({
        opacity: t
      }, e, n, r);
    },
    animate: function animate(t, e, n, r) {
      var i = S.isEmptyObject(t),
          o = S.speed(e, n, r),
          a = function a() {
        var e = ft(this, S.extend({}, t), o);
        (i || Y.get(this, "finish")) && e.stop(!0);
      };

      return a.finish = a, i || !1 === o.queue ? this.each(a) : this.queue(o.queue, a);
    },
    stop: function stop(i, e, o) {
      var a = function a(e) {
        var t = e.stop;
        delete e.stop, t(o);
      };

      return "string" != typeof i && (o = e, e = i, i = void 0), e && this.queue(i || "fx", []), this.each(function () {
        var e = !0,
            t = null != i && i + "queueHooks",
            n = S.timers,
            r = Y.get(this);
        if (t) r[t] && r[t].stop && a(r[t]);else for (t in r) {
          r[t] && r[t].stop && at.test(t) && a(r[t]);
        }

        for (t = n.length; t--;) {
          n[t].elem !== this || null != i && n[t].queue !== i || (n[t].anim.stop(o), e = !1, n.splice(t, 1));
        }

        !e && o || S.dequeue(this, i);
      });
    },
    finish: function finish(a) {
      return !1 !== a && (a = a || "fx"), this.each(function () {
        var e,
            t = Y.get(this),
            n = t[a + "queue"],
            r = t[a + "queueHooks"],
            i = S.timers,
            o = n ? n.length : 0;

        for (t.finish = !0, S.queue(this, a, []), r && r.stop && r.stop.call(this, !0), e = i.length; e--;) {
          i[e].elem === this && i[e].queue === a && (i[e].anim.stop(!0), i.splice(e, 1));
        }

        for (e = 0; e < o; e++) {
          n[e] && n[e].finish && n[e].finish.call(this);
        }

        delete t.finish;
      });
    }
  }), S.each(["toggle", "show", "hide"], function (e, r) {
    var i = S.fn[r];

    S.fn[r] = function (e, t, n) {
      return null == e || "boolean" == typeof e ? i.apply(this, arguments) : this.animate(lt(r, !0), e, t, n);
    };
  }), S.each({
    slideDown: lt("show"),
    slideUp: lt("hide"),
    slideToggle: lt("toggle"),
    fadeIn: {
      opacity: "show"
    },
    fadeOut: {
      opacity: "hide"
    },
    fadeToggle: {
      opacity: "toggle"
    }
  }, function (e, r) {
    S.fn[e] = function (e, t, n) {
      return this.animate(r, e, t, n);
    };
  }), S.timers = [], S.fx.tick = function () {
    var e,
        t = 0,
        n = S.timers;

    for (tt = Date.now(); t < n.length; t++) {
      (e = n[t])() || n[t] !== e || n.splice(t--, 1);
    }

    n.length || S.fx.stop(), tt = void 0;
  }, S.fx.timer = function (e) {
    S.timers.push(e), S.fx.start();
  }, S.fx.interval = 13, S.fx.start = function () {
    nt || (nt = !0, st());
  }, S.fx.stop = function () {
    nt = null;
  }, S.fx.speeds = {
    slow: 600,
    fast: 200,
    _default: 400
  }, S.fn.delay = function (r, e) {
    return r = S.fx && S.fx.speeds[r] || r, e = e || "fx", this.queue(e, function (e, t) {
      var n = C.setTimeout(e, r);

      t.stop = function () {
        C.clearTimeout(n);
      };
    });
  }, rt = E.createElement("input"), it = E.createElement("select").appendChild(E.createElement("option")), rt.type = "checkbox", y.checkOn = "" !== rt.value, y.optSelected = it.selected, (rt = E.createElement("input")).value = "t", rt.type = "radio", y.radioValue = "t" === rt.value;
  var pt,
      dt = S.expr.attrHandle;
  S.fn.extend({
    attr: function attr(e, t) {
      return $(this, S.attr, e, t, 1 < arguments.length);
    },
    removeAttr: function removeAttr(e) {
      return this.each(function () {
        S.removeAttr(this, e);
      });
    }
  }), S.extend({
    attr: function attr(e, t, n) {
      var r,
          i,
          o = e.nodeType;
      if (3 !== o && 8 !== o && 2 !== o) return "undefined" == typeof e.getAttribute ? S.prop(e, t, n) : (1 === o && S.isXMLDoc(e) || (i = S.attrHooks[t.toLowerCase()] || (S.expr.match.bool.test(t) ? pt : void 0)), void 0 !== n ? null === n ? void S.removeAttr(e, t) : i && "set" in i && void 0 !== (r = i.set(e, n, t)) ? r : (e.setAttribute(t, n + ""), n) : i && "get" in i && null !== (r = i.get(e, t)) ? r : null == (r = S.find.attr(e, t)) ? void 0 : r);
    },
    attrHooks: {
      type: {
        set: function set(e, t) {
          if (!y.radioValue && "radio" === t && A(e, "input")) {
            var n = e.value;
            return e.setAttribute("type", t), n && (e.value = n), t;
          }
        }
      }
    },
    removeAttr: function removeAttr(e, t) {
      var n,
          r = 0,
          i = t && t.match(P);
      if (i && 1 === e.nodeType) while (n = i[r++]) {
        e.removeAttribute(n);
      }
    }
  }), pt = {
    set: function set(e, t, n) {
      return !1 === t ? S.removeAttr(e, n) : e.setAttribute(n, n), n;
    }
  }, S.each(S.expr.match.bool.source.match(/\w+/g), function (e, t) {
    var a = dt[t] || S.find.attr;

    dt[t] = function (e, t, n) {
      var r,
          i,
          o = t.toLowerCase();
      return n || (i = dt[o], dt[o] = r, r = null != a(e, t, n) ? o : null, dt[o] = i), r;
    };
  });
  var ht = /^(?:input|select|textarea|button)$/i,
      gt = /^(?:a|area)$/i;

  function vt(e) {
    return (e.match(P) || []).join(" ");
  }

  function yt(e) {
    return e.getAttribute && e.getAttribute("class") || "";
  }

  function mt(e) {
    return Array.isArray(e) ? e : "string" == typeof e && e.match(P) || [];
  }

  S.fn.extend({
    prop: function prop(e, t) {
      return $(this, S.prop, e, t, 1 < arguments.length);
    },
    removeProp: function removeProp(e) {
      return this.each(function () {
        delete this[S.propFix[e] || e];
      });
    }
  }), S.extend({
    prop: function prop(e, t, n) {
      var r,
          i,
          o = e.nodeType;
      if (3 !== o && 8 !== o && 2 !== o) return 1 === o && S.isXMLDoc(e) || (t = S.propFix[t] || t, i = S.propHooks[t]), void 0 !== n ? i && "set" in i && void 0 !== (r = i.set(e, n, t)) ? r : e[t] = n : i && "get" in i && null !== (r = i.get(e, t)) ? r : e[t];
    },
    propHooks: {
      tabIndex: {
        get: function get(e) {
          var t = S.find.attr(e, "tabindex");
          return t ? parseInt(t, 10) : ht.test(e.nodeName) || gt.test(e.nodeName) && e.href ? 0 : -1;
        }
      }
    },
    propFix: {
      "for": "htmlFor",
      "class": "className"
    }
  }), y.optSelected || (S.propHooks.selected = {
    get: function get(e) {
      var t = e.parentNode;
      return t && t.parentNode && t.parentNode.selectedIndex, null;
    },
    set: function set(e) {
      var t = e.parentNode;
      t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex);
    }
  }), S.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function () {
    S.propFix[this.toLowerCase()] = this;
  }), S.fn.extend({
    addClass: function addClass(t) {
      var e,
          n,
          r,
          i,
          o,
          a,
          s,
          u = 0;
      if (m(t)) return this.each(function (e) {
        S(this).addClass(t.call(this, e, yt(this)));
      });
      if ((e = mt(t)).length) while (n = this[u++]) {
        if (i = yt(n), r = 1 === n.nodeType && " " + vt(i) + " ") {
          a = 0;

          while (o = e[a++]) {
            r.indexOf(" " + o + " ") < 0 && (r += o + " ");
          }

          i !== (s = vt(r)) && n.setAttribute("class", s);
        }
      }
      return this;
    },
    removeClass: function removeClass(t) {
      var e,
          n,
          r,
          i,
          o,
          a,
          s,
          u = 0;
      if (m(t)) return this.each(function (e) {
        S(this).removeClass(t.call(this, e, yt(this)));
      });
      if (!arguments.length) return this.attr("class", "");
      if ((e = mt(t)).length) while (n = this[u++]) {
        if (i = yt(n), r = 1 === n.nodeType && " " + vt(i) + " ") {
          a = 0;

          while (o = e[a++]) {
            while (-1 < r.indexOf(" " + o + " ")) {
              r = r.replace(" " + o + " ", " ");
            }
          }

          i !== (s = vt(r)) && n.setAttribute("class", s);
        }
      }
      return this;
    },
    toggleClass: function toggleClass(i, t) {
      var o = _typeof(i),
          a = "string" === o || Array.isArray(i);

      return "boolean" == typeof t && a ? t ? this.addClass(i) : this.removeClass(i) : m(i) ? this.each(function (e) {
        S(this).toggleClass(i.call(this, e, yt(this), t), t);
      }) : this.each(function () {
        var e, t, n, r;

        if (a) {
          t = 0, n = S(this), r = mt(i);

          while (e = r[t++]) {
            n.hasClass(e) ? n.removeClass(e) : n.addClass(e);
          }
        } else void 0 !== i && "boolean" !== o || ((e = yt(this)) && Y.set(this, "__className__", e), this.setAttribute && this.setAttribute("class", e || !1 === i ? "" : Y.get(this, "__className__") || ""));
      });
    },
    hasClass: function hasClass(e) {
      var t,
          n,
          r = 0;
      t = " " + e + " ";

      while (n = this[r++]) {
        if (1 === n.nodeType && -1 < (" " + vt(yt(n)) + " ").indexOf(t)) return !0;
      }

      return !1;
    }
  });
  var xt = /\r/g;
  S.fn.extend({
    val: function val(n) {
      var r,
          e,
          i,
          t = this[0];
      return arguments.length ? (i = m(n), this.each(function (e) {
        var t;
        1 === this.nodeType && (null == (t = i ? n.call(this, e, S(this).val()) : n) ? t = "" : "number" == typeof t ? t += "" : Array.isArray(t) && (t = S.map(t, function (e) {
          return null == e ? "" : e + "";
        })), (r = S.valHooks[this.type] || S.valHooks[this.nodeName.toLowerCase()]) && "set" in r && void 0 !== r.set(this, t, "value") || (this.value = t));
      })) : t ? (r = S.valHooks[t.type] || S.valHooks[t.nodeName.toLowerCase()]) && "get" in r && void 0 !== (e = r.get(t, "value")) ? e : "string" == typeof (e = t.value) ? e.replace(xt, "") : null == e ? "" : e : void 0;
    }
  }), S.extend({
    valHooks: {
      option: {
        get: function get(e) {
          var t = S.find.attr(e, "value");
          return null != t ? t : vt(S.text(e));
        }
      },
      select: {
        get: function get(e) {
          var t,
              n,
              r,
              i = e.options,
              o = e.selectedIndex,
              a = "select-one" === e.type,
              s = a ? null : [],
              u = a ? o + 1 : i.length;

          for (r = o < 0 ? u : a ? o : 0; r < u; r++) {
            if (((n = i[r]).selected || r === o) && !n.disabled && (!n.parentNode.disabled || !A(n.parentNode, "optgroup"))) {
              if (t = S(n).val(), a) return t;
              s.push(t);
            }
          }

          return s;
        },
        set: function set(e, t) {
          var n,
              r,
              i = e.options,
              o = S.makeArray(t),
              a = i.length;

          while (a--) {
            ((r = i[a]).selected = -1 < S.inArray(S.valHooks.option.get(r), o)) && (n = !0);
          }

          return n || (e.selectedIndex = -1), o;
        }
      }
    }
  }), S.each(["radio", "checkbox"], function () {
    S.valHooks[this] = {
      set: function set(e, t) {
        if (Array.isArray(t)) return e.checked = -1 < S.inArray(S(e).val(), t);
      }
    }, y.checkOn || (S.valHooks[this].get = function (e) {
      return null === e.getAttribute("value") ? "on" : e.value;
    });
  }), y.focusin = "onfocusin" in C;

  var bt = /^(?:focusinfocus|focusoutblur)$/,
      wt = function wt(e) {
    e.stopPropagation();
  };

  S.extend(S.event, {
    trigger: function trigger(e, t, n, r) {
      var i,
          o,
          a,
          s,
          u,
          l,
          c,
          f,
          p = [n || E],
          d = v.call(e, "type") ? e.type : e,
          h = v.call(e, "namespace") ? e.namespace.split(".") : [];

      if (o = f = a = n = n || E, 3 !== n.nodeType && 8 !== n.nodeType && !bt.test(d + S.event.triggered) && (-1 < d.indexOf(".") && (d = (h = d.split(".")).shift(), h.sort()), u = d.indexOf(":") < 0 && "on" + d, (e = e[S.expando] ? e : new S.Event(d, "object" == _typeof(e) && e)).isTrigger = r ? 2 : 3, e.namespace = h.join("."), e.rnamespace = e.namespace ? new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, e.result = void 0, e.target || (e.target = n), t = null == t ? [e] : S.makeArray(t, [e]), c = S.event.special[d] || {}, r || !c.trigger || !1 !== c.trigger.apply(n, t))) {
        if (!r && !c.noBubble && !x(n)) {
          for (s = c.delegateType || d, bt.test(s + d) || (o = o.parentNode); o; o = o.parentNode) {
            p.push(o), a = o;
          }

          a === (n.ownerDocument || E) && p.push(a.defaultView || a.parentWindow || C);
        }

        i = 0;

        while ((o = p[i++]) && !e.isPropagationStopped()) {
          f = o, e.type = 1 < i ? s : c.bindType || d, (l = (Y.get(o, "events") || Object.create(null))[e.type] && Y.get(o, "handle")) && l.apply(o, t), (l = u && o[u]) && l.apply && V(o) && (e.result = l.apply(o, t), !1 === e.result && e.preventDefault());
        }

        return e.type = d, r || e.isDefaultPrevented() || c._default && !1 !== c._default.apply(p.pop(), t) || !V(n) || u && m(n[d]) && !x(n) && ((a = n[u]) && (n[u] = null), S.event.triggered = d, e.isPropagationStopped() && f.addEventListener(d, wt), n[d](), e.isPropagationStopped() && f.removeEventListener(d, wt), S.event.triggered = void 0, a && (n[u] = a)), e.result;
      }
    },
    simulate: function simulate(e, t, n) {
      var r = S.extend(new S.Event(), n, {
        type: e,
        isSimulated: !0
      });
      S.event.trigger(r, null, t);
    }
  }), S.fn.extend({
    trigger: function trigger(e, t) {
      return this.each(function () {
        S.event.trigger(e, t, this);
      });
    },
    triggerHandler: function triggerHandler(e, t) {
      var n = this[0];
      if (n) return S.event.trigger(e, t, n, !0);
    }
  }), y.focusin || S.each({
    focus: "focusin",
    blur: "focusout"
  }, function (n, r) {
    var i = function i(e) {
      S.event.simulate(r, e.target, S.event.fix(e));
    };

    S.event.special[r] = {
      setup: function setup() {
        var e = this.ownerDocument || this.document || this,
            t = Y.access(e, r);
        t || e.addEventListener(n, i, !0), Y.access(e, r, (t || 0) + 1);
      },
      teardown: function teardown() {
        var e = this.ownerDocument || this.document || this,
            t = Y.access(e, r) - 1;
        t ? Y.access(e, r, t) : (e.removeEventListener(n, i, !0), Y.remove(e, r));
      }
    };
  });
  var Tt = C.location,
      Ct = {
    guid: Date.now()
  },
      Et = /\?/;

  S.parseXML = function (e) {
    var t;
    if (!e || "string" != typeof e) return null;

    try {
      t = new C.DOMParser().parseFromString(e, "text/xml");
    } catch (e) {
      t = void 0;
    }

    return t && !t.getElementsByTagName("parsererror").length || S.error("Invalid XML: " + e), t;
  };

  var St = /\[\]$/,
      kt = /\r?\n/g,
      At = /^(?:submit|button|image|reset|file)$/i,
      Nt = /^(?:input|select|textarea|keygen)/i;

  function Dt(n, e, r, i) {
    var t;
    if (Array.isArray(e)) S.each(e, function (e, t) {
      r || St.test(n) ? i(n, t) : Dt(n + "[" + ("object" == _typeof(t) && null != t ? e : "") + "]", t, r, i);
    });else if (r || "object" !== w(e)) i(n, e);else for (t in e) {
      Dt(n + "[" + t + "]", e[t], r, i);
    }
  }

  S.param = function (e, t) {
    var n,
        r = [],
        i = function i(e, t) {
      var n = m(t) ? t() : t;
      r[r.length] = encodeURIComponent(e) + "=" + encodeURIComponent(null == n ? "" : n);
    };

    if (null == e) return "";
    if (Array.isArray(e) || e.jquery && !S.isPlainObject(e)) S.each(e, function () {
      i(this.name, this.value);
    });else for (n in e) {
      Dt(n, e[n], t, i);
    }
    return r.join("&");
  }, S.fn.extend({
    serialize: function serialize() {
      return S.param(this.serializeArray());
    },
    serializeArray: function serializeArray() {
      return this.map(function () {
        var e = S.prop(this, "elements");
        return e ? S.makeArray(e) : this;
      }).filter(function () {
        var e = this.type;
        return this.name && !S(this).is(":disabled") && Nt.test(this.nodeName) && !At.test(e) && (this.checked || !pe.test(e));
      }).map(function (e, t) {
        var n = S(this).val();
        return null == n ? null : Array.isArray(n) ? S.map(n, function (e) {
          return {
            name: t.name,
            value: e.replace(kt, "\r\n")
          };
        }) : {
          name: t.name,
          value: n.replace(kt, "\r\n")
        };
      }).get();
    }
  });
  var jt = /%20/g,
      qt = /#.*$/,
      Lt = /([?&])_=[^&]*/,
      Ht = /^(.*?):[ \t]*([^\r\n]*)$/gm,
      Ot = /^(?:GET|HEAD)$/,
      Pt = /^\/\//,
      Rt = {},
      Mt = {},
      It = "*/".concat("*"),
      Wt = E.createElement("a");

  function Ft(o) {
    return function (e, t) {
      "string" != typeof e && (t = e, e = "*");
      var n,
          r = 0,
          i = e.toLowerCase().match(P) || [];
      if (m(t)) while (n = i[r++]) {
        "+" === n[0] ? (n = n.slice(1) || "*", (o[n] = o[n] || []).unshift(t)) : (o[n] = o[n] || []).push(t);
      }
    };
  }

  function Bt(t, i, o, a) {
    var s = {},
        u = t === Mt;

    function l(e) {
      var r;
      return s[e] = !0, S.each(t[e] || [], function (e, t) {
        var n = t(i, o, a);
        return "string" != typeof n || u || s[n] ? u ? !(r = n) : void 0 : (i.dataTypes.unshift(n), l(n), !1);
      }), r;
    }

    return l(i.dataTypes[0]) || !s["*"] && l("*");
  }

  function $t(e, t) {
    var n,
        r,
        i = S.ajaxSettings.flatOptions || {};

    for (n in t) {
      void 0 !== t[n] && ((i[n] ? e : r || (r = {}))[n] = t[n]);
    }

    return r && S.extend(!0, e, r), e;
  }

  Wt.href = Tt.href, S.extend({
    active: 0,
    lastModified: {},
    etag: {},
    ajaxSettings: {
      url: Tt.href,
      type: "GET",
      isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(Tt.protocol),
      global: !0,
      processData: !0,
      async: !0,
      contentType: "application/x-www-form-urlencoded; charset=UTF-8",
      accepts: {
        "*": It,
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
        "text xml": S.parseXML
      },
      flatOptions: {
        url: !0,
        context: !0
      }
    },
    ajaxSetup: function ajaxSetup(e, t) {
      return t ? $t($t(e, S.ajaxSettings), t) : $t(S.ajaxSettings, e);
    },
    ajaxPrefilter: Ft(Rt),
    ajaxTransport: Ft(Mt),
    ajax: function ajax(e, t) {
      "object" == _typeof(e) && (t = e, e = void 0), t = t || {};
      var c,
          f,
          p,
          n,
          d,
          r,
          h,
          g,
          i,
          o,
          v = S.ajaxSetup({}, t),
          y = v.context || v,
          m = v.context && (y.nodeType || y.jquery) ? S(y) : S.event,
          x = S.Deferred(),
          b = S.Callbacks("once memory"),
          w = v.statusCode || {},
          a = {},
          s = {},
          u = "canceled",
          T = {
        readyState: 0,
        getResponseHeader: function getResponseHeader(e) {
          var t;

          if (h) {
            if (!n) {
              n = {};

              while (t = Ht.exec(p)) {
                n[t[1].toLowerCase() + " "] = (n[t[1].toLowerCase() + " "] || []).concat(t[2]);
              }
            }

            t = n[e.toLowerCase() + " "];
          }

          return null == t ? null : t.join(", ");
        },
        getAllResponseHeaders: function getAllResponseHeaders() {
          return h ? p : null;
        },
        setRequestHeader: function setRequestHeader(e, t) {
          return null == h && (e = s[e.toLowerCase()] = s[e.toLowerCase()] || e, a[e] = t), this;
        },
        overrideMimeType: function overrideMimeType(e) {
          return null == h && (v.mimeType = e), this;
        },
        statusCode: function statusCode(e) {
          var t;
          if (e) if (h) T.always(e[T.status]);else for (t in e) {
            w[t] = [w[t], e[t]];
          }
          return this;
        },
        abort: function abort(e) {
          var t = e || u;
          return c && c.abort(t), l(0, t), this;
        }
      };

      if (x.promise(T), v.url = ((e || v.url || Tt.href) + "").replace(Pt, Tt.protocol + "//"), v.type = t.method || t.type || v.method || v.type, v.dataTypes = (v.dataType || "*").toLowerCase().match(P) || [""], null == v.crossDomain) {
        r = E.createElement("a");

        try {
          r.href = v.url, r.href = r.href, v.crossDomain = Wt.protocol + "//" + Wt.host != r.protocol + "//" + r.host;
        } catch (e) {
          v.crossDomain = !0;
        }
      }

      if (v.data && v.processData && "string" != typeof v.data && (v.data = S.param(v.data, v.traditional)), Bt(Rt, v, t, T), h) return T;

      for (i in (g = S.event && v.global) && 0 == S.active++ && S.event.trigger("ajaxStart"), v.type = v.type.toUpperCase(), v.hasContent = !Ot.test(v.type), f = v.url.replace(qt, ""), v.hasContent ? v.data && v.processData && 0 === (v.contentType || "").indexOf("application/x-www-form-urlencoded") && (v.data = v.data.replace(jt, "+")) : (o = v.url.slice(f.length), v.data && (v.processData || "string" == typeof v.data) && (f += (Et.test(f) ? "&" : "?") + v.data, delete v.data), !1 === v.cache && (f = f.replace(Lt, "$1"), o = (Et.test(f) ? "&" : "?") + "_=" + Ct.guid++ + o), v.url = f + o), v.ifModified && (S.lastModified[f] && T.setRequestHeader("If-Modified-Since", S.lastModified[f]), S.etag[f] && T.setRequestHeader("If-None-Match", S.etag[f])), (v.data && v.hasContent && !1 !== v.contentType || t.contentType) && T.setRequestHeader("Content-Type", v.contentType), T.setRequestHeader("Accept", v.dataTypes[0] && v.accepts[v.dataTypes[0]] ? v.accepts[v.dataTypes[0]] + ("*" !== v.dataTypes[0] ? ", " + It + "; q=0.01" : "") : v.accepts["*"]), v.headers) {
        T.setRequestHeader(i, v.headers[i]);
      }

      if (v.beforeSend && (!1 === v.beforeSend.call(y, T, v) || h)) return T.abort();

      if (u = "abort", b.add(v.complete), T.done(v.success), T.fail(v.error), c = Bt(Mt, v, t, T)) {
        if (T.readyState = 1, g && m.trigger("ajaxSend", [T, v]), h) return T;
        v.async && 0 < v.timeout && (d = C.setTimeout(function () {
          T.abort("timeout");
        }, v.timeout));

        try {
          h = !1, c.send(a, l);
        } catch (e) {
          if (h) throw e;
          l(-1, e);
        }
      } else l(-1, "No Transport");

      function l(e, t, n, r) {
        var i,
            o,
            a,
            s,
            u,
            l = t;
        h || (h = !0, d && C.clearTimeout(d), c = void 0, p = r || "", T.readyState = 0 < e ? 4 : 0, i = 200 <= e && e < 300 || 304 === e, n && (s = function (e, t, n) {
          var r,
              i,
              o,
              a,
              s = e.contents,
              u = e.dataTypes;

          while ("*" === u[0]) {
            u.shift(), void 0 === r && (r = e.mimeType || t.getResponseHeader("Content-Type"));
          }

          if (r) for (i in s) {
            if (s[i] && s[i].test(r)) {
              u.unshift(i);
              break;
            }
          }
          if (u[0] in n) o = u[0];else {
            for (i in n) {
              if (!u[0] || e.converters[i + " " + u[0]]) {
                o = i;
                break;
              }

              a || (a = i);
            }

            o = o || a;
          }
          if (o) return o !== u[0] && u.unshift(o), n[o];
        }(v, T, n)), !i && -1 < S.inArray("script", v.dataTypes) && (v.converters["text script"] = function () {}), s = function (e, t, n, r) {
          var i,
              o,
              a,
              s,
              u,
              l = {},
              c = e.dataTypes.slice();
          if (c[1]) for (a in e.converters) {
            l[a.toLowerCase()] = e.converters[a];
          }
          o = c.shift();

          while (o) {
            if (e.responseFields[o] && (n[e.responseFields[o]] = t), !u && r && e.dataFilter && (t = e.dataFilter(t, e.dataType)), u = o, o = c.shift()) if ("*" === o) o = u;else if ("*" !== u && u !== o) {
              if (!(a = l[u + " " + o] || l["* " + o])) for (i in l) {
                if ((s = i.split(" "))[1] === o && (a = l[u + " " + s[0]] || l["* " + s[0]])) {
                  !0 === a ? a = l[i] : !0 !== l[i] && (o = s[0], c.unshift(s[1]));
                  break;
                }
              }
              if (!0 !== a) if (a && e["throws"]) t = a(t);else try {
                t = a(t);
              } catch (e) {
                return {
                  state: "parsererror",
                  error: a ? e : "No conversion from " + u + " to " + o
                };
              }
            }
          }

          return {
            state: "success",
            data: t
          };
        }(v, s, T, i), i ? (v.ifModified && ((u = T.getResponseHeader("Last-Modified")) && (S.lastModified[f] = u), (u = T.getResponseHeader("etag")) && (S.etag[f] = u)), 204 === e || "HEAD" === v.type ? l = "nocontent" : 304 === e ? l = "notmodified" : (l = s.state, o = s.data, i = !(a = s.error))) : (a = l, !e && l || (l = "error", e < 0 && (e = 0))), T.status = e, T.statusText = (t || l) + "", i ? x.resolveWith(y, [o, l, T]) : x.rejectWith(y, [T, l, a]), T.statusCode(w), w = void 0, g && m.trigger(i ? "ajaxSuccess" : "ajaxError", [T, v, i ? o : a]), b.fireWith(y, [T, l]), g && (m.trigger("ajaxComplete", [T, v]), --S.active || S.event.trigger("ajaxStop")));
      }

      return T;
    },
    getJSON: function getJSON(e, t, n) {
      return S.get(e, t, n, "json");
    },
    getScript: function getScript(e, t) {
      return S.get(e, void 0, t, "script");
    }
  }), S.each(["get", "post"], function (e, i) {
    S[i] = function (e, t, n, r) {
      return m(t) && (r = r || n, n = t, t = void 0), S.ajax(S.extend({
        url: e,
        type: i,
        dataType: r,
        data: t,
        success: n
      }, S.isPlainObject(e) && e));
    };
  }), S.ajaxPrefilter(function (e) {
    var t;

    for (t in e.headers) {
      "content-type" === t.toLowerCase() && (e.contentType = e.headers[t] || "");
    }
  }), S._evalUrl = function (e, t, n) {
    return S.ajax({
      url: e,
      type: "GET",
      dataType: "script",
      cache: !0,
      async: !1,
      global: !1,
      converters: {
        "text script": function textScript() {}
      },
      dataFilter: function dataFilter(e) {
        S.globalEval(e, t, n);
      }
    });
  }, S.fn.extend({
    wrapAll: function wrapAll(e) {
      var t;
      return this[0] && (m(e) && (e = e.call(this[0])), t = S(e, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && t.insertBefore(this[0]), t.map(function () {
        var e = this;

        while (e.firstElementChild) {
          e = e.firstElementChild;
        }

        return e;
      }).append(this)), this;
    },
    wrapInner: function wrapInner(n) {
      return m(n) ? this.each(function (e) {
        S(this).wrapInner(n.call(this, e));
      }) : this.each(function () {
        var e = S(this),
            t = e.contents();
        t.length ? t.wrapAll(n) : e.append(n);
      });
    },
    wrap: function wrap(t) {
      var n = m(t);
      return this.each(function (e) {
        S(this).wrapAll(n ? t.call(this, e) : t);
      });
    },
    unwrap: function unwrap(e) {
      return this.parent(e).not("body").each(function () {
        S(this).replaceWith(this.childNodes);
      }), this;
    }
  }), S.expr.pseudos.hidden = function (e) {
    return !S.expr.pseudos.visible(e);
  }, S.expr.pseudos.visible = function (e) {
    return !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length);
  }, S.ajaxSettings.xhr = function () {
    try {
      return new C.XMLHttpRequest();
    } catch (e) {}
  };
  var _t = {
    0: 200,
    1223: 204
  },
      zt = S.ajaxSettings.xhr();
  y.cors = !!zt && "withCredentials" in zt, y.ajax = zt = !!zt, S.ajaxTransport(function (i) {
    var _o, a;

    if (y.cors || zt && !i.crossDomain) return {
      send: function send(e, t) {
        var n,
            r = i.xhr();
        if (r.open(i.type, i.url, i.async, i.username, i.password), i.xhrFields) for (n in i.xhrFields) {
          r[n] = i.xhrFields[n];
        }

        for (n in i.mimeType && r.overrideMimeType && r.overrideMimeType(i.mimeType), i.crossDomain || e["X-Requested-With"] || (e["X-Requested-With"] = "XMLHttpRequest"), e) {
          r.setRequestHeader(n, e[n]);
        }

        _o = function o(e) {
          return function () {
            _o && (_o = a = r.onload = r.onerror = r.onabort = r.ontimeout = r.onreadystatechange = null, "abort" === e ? r.abort() : "error" === e ? "number" != typeof r.status ? t(0, "error") : t(r.status, r.statusText) : t(_t[r.status] || r.status, r.statusText, "text" !== (r.responseType || "text") || "string" != typeof r.responseText ? {
              binary: r.response
            } : {
              text: r.responseText
            }, r.getAllResponseHeaders()));
          };
        }, r.onload = _o(), a = r.onerror = r.ontimeout = _o("error"), void 0 !== r.onabort ? r.onabort = a : r.onreadystatechange = function () {
          4 === r.readyState && C.setTimeout(function () {
            _o && a();
          });
        }, _o = _o("abort");

        try {
          r.send(i.hasContent && i.data || null);
        } catch (e) {
          if (_o) throw e;
        }
      },
      abort: function abort() {
        _o && _o();
      }
    };
  }), S.ajaxPrefilter(function (e) {
    e.crossDomain && (e.contents.script = !1);
  }), S.ajaxSetup({
    accepts: {
      script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
    },
    contents: {
      script: /\b(?:java|ecma)script\b/
    },
    converters: {
      "text script": function textScript(e) {
        return S.globalEval(e), e;
      }
    }
  }), S.ajaxPrefilter("script", function (e) {
    void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET");
  }), S.ajaxTransport("script", function (n) {
    var r, _i;

    if (n.crossDomain || n.scriptAttrs) return {
      send: function send(e, t) {
        r = S("<script>").attr(n.scriptAttrs || {}).prop({
          charset: n.scriptCharset,
          src: n.url
        }).on("load error", _i = function i(e) {
          r.remove(), _i = null, e && t("error" === e.type ? 404 : 200, e.type);
        }), E.head.appendChild(r[0]);
      },
      abort: function abort() {
        _i && _i();
      }
    };
  });
  var Ut,
      Xt = [],
      Vt = /(=)\?(?=&|$)|\?\?/;
  S.ajaxSetup({
    jsonp: "callback",
    jsonpCallback: function jsonpCallback() {
      var e = Xt.pop() || S.expando + "_" + Ct.guid++;
      return this[e] = !0, e;
    }
  }), S.ajaxPrefilter("json jsonp", function (e, t, n) {
    var r,
        i,
        o,
        a = !1 !== e.jsonp && (Vt.test(e.url) ? "url" : "string" == typeof e.data && 0 === (e.contentType || "").indexOf("application/x-www-form-urlencoded") && Vt.test(e.data) && "data");
    if (a || "jsonp" === e.dataTypes[0]) return r = e.jsonpCallback = m(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback, a ? e[a] = e[a].replace(Vt, "$1" + r) : !1 !== e.jsonp && (e.url += (Et.test(e.url) ? "&" : "?") + e.jsonp + "=" + r), e.converters["script json"] = function () {
      return o || S.error(r + " was not called"), o[0];
    }, e.dataTypes[0] = "json", i = C[r], C[r] = function () {
      o = arguments;
    }, n.always(function () {
      void 0 === i ? S(C).removeProp(r) : C[r] = i, e[r] && (e.jsonpCallback = t.jsonpCallback, Xt.push(r)), o && m(i) && i(o[0]), o = i = void 0;
    }), "script";
  }), y.createHTMLDocument = ((Ut = E.implementation.createHTMLDocument("").body).innerHTML = "<form></form><form></form>", 2 === Ut.childNodes.length), S.parseHTML = function (e, t, n) {
    return "string" != typeof e ? [] : ("boolean" == typeof t && (n = t, t = !1), t || (y.createHTMLDocument ? ((r = (t = E.implementation.createHTMLDocument("")).createElement("base")).href = E.location.href, t.head.appendChild(r)) : t = E), o = !n && [], (i = N.exec(e)) ? [t.createElement(i[1])] : (i = xe([e], t, o), o && o.length && S(o).remove(), S.merge([], i.childNodes)));
    var r, i, o;
  }, S.fn.load = function (e, t, n) {
    var r,
        i,
        o,
        a = this,
        s = e.indexOf(" ");
    return -1 < s && (r = vt(e.slice(s)), e = e.slice(0, s)), m(t) ? (n = t, t = void 0) : t && "object" == _typeof(t) && (i = "POST"), 0 < a.length && S.ajax({
      url: e,
      type: i || "GET",
      dataType: "html",
      data: t
    }).done(function (e) {
      o = arguments, a.html(r ? S("<div>").append(S.parseHTML(e)).find(r) : e);
    }).always(n && function (e, t) {
      a.each(function () {
        n.apply(this, o || [e.responseText, t, e]);
      });
    }), this;
  }, S.expr.pseudos.animated = function (t) {
    return S.grep(S.timers, function (e) {
      return t === e.elem;
    }).length;
  }, S.offset = {
    setOffset: function setOffset(e, t, n) {
      var r,
          i,
          o,
          a,
          s,
          u,
          l = S.css(e, "position"),
          c = S(e),
          f = {};
      "static" === l && (e.style.position = "relative"), s = c.offset(), o = S.css(e, "top"), u = S.css(e, "left"), ("absolute" === l || "fixed" === l) && -1 < (o + u).indexOf("auto") ? (a = (r = c.position()).top, i = r.left) : (a = parseFloat(o) || 0, i = parseFloat(u) || 0), m(t) && (t = t.call(e, n, S.extend({}, s))), null != t.top && (f.top = t.top - s.top + a), null != t.left && (f.left = t.left - s.left + i), "using" in t ? t.using.call(e, f) : ("number" == typeof f.top && (f.top += "px"), "number" == typeof f.left && (f.left += "px"), c.css(f));
    }
  }, S.fn.extend({
    offset: function offset(t) {
      if (arguments.length) return void 0 === t ? this : this.each(function (e) {
        S.offset.setOffset(this, t, e);
      });
      var e,
          n,
          r = this[0];
      return r ? r.getClientRects().length ? (e = r.getBoundingClientRect(), n = r.ownerDocument.defaultView, {
        top: e.top + n.pageYOffset,
        left: e.left + n.pageXOffset
      }) : {
        top: 0,
        left: 0
      } : void 0;
    },
    position: function position() {
      if (this[0]) {
        var e,
            t,
            n,
            r = this[0],
            i = {
          top: 0,
          left: 0
        };
        if ("fixed" === S.css(r, "position")) t = r.getBoundingClientRect();else {
          t = this.offset(), n = r.ownerDocument, e = r.offsetParent || n.documentElement;

          while (e && (e === n.body || e === n.documentElement) && "static" === S.css(e, "position")) {
            e = e.parentNode;
          }

          e && e !== r && 1 === e.nodeType && ((i = S(e).offset()).top += S.css(e, "borderTopWidth", !0), i.left += S.css(e, "borderLeftWidth", !0));
        }
        return {
          top: t.top - i.top - S.css(r, "marginTop", !0),
          left: t.left - i.left - S.css(r, "marginLeft", !0)
        };
      }
    },
    offsetParent: function offsetParent() {
      return this.map(function () {
        var e = this.offsetParent;

        while (e && "static" === S.css(e, "position")) {
          e = e.offsetParent;
        }

        return e || re;
      });
    }
  }), S.each({
    scrollLeft: "pageXOffset",
    scrollTop: "pageYOffset"
  }, function (t, i) {
    var o = "pageYOffset" === i;

    S.fn[t] = function (e) {
      return $(this, function (e, t, n) {
        var r;
        if (x(e) ? r = e : 9 === e.nodeType && (r = e.defaultView), void 0 === n) return r ? r[i] : e[t];
        r ? r.scrollTo(o ? r.pageXOffset : n, o ? n : r.pageYOffset) : e[t] = n;
      }, t, e, arguments.length);
    };
  }), S.each(["top", "left"], function (e, n) {
    S.cssHooks[n] = $e(y.pixelPosition, function (e, t) {
      if (t) return t = Be(e, n), Me.test(t) ? S(e).position()[n] + "px" : t;
    });
  }), S.each({
    Height: "height",
    Width: "width"
  }, function (a, s) {
    S.each({
      padding: "inner" + a,
      content: s,
      "": "outer" + a
    }, function (r, o) {
      S.fn[o] = function (e, t) {
        var n = arguments.length && (r || "boolean" != typeof e),
            i = r || (!0 === e || !0 === t ? "margin" : "border");
        return $(this, function (e, t, n) {
          var r;
          return x(e) ? 0 === o.indexOf("outer") ? e["inner" + a] : e.document.documentElement["client" + a] : 9 === e.nodeType ? (r = e.documentElement, Math.max(e.body["scroll" + a], r["scroll" + a], e.body["offset" + a], r["offset" + a], r["client" + a])) : void 0 === n ? S.css(e, t, i) : S.style(e, t, n, i);
        }, s, n ? e : void 0, n);
      };
    });
  }), S.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function (e, t) {
    S.fn[t] = function (e) {
      return this.on(t, e);
    };
  }), S.fn.extend({
    bind: function bind(e, t, n) {
      return this.on(e, null, t, n);
    },
    unbind: function unbind(e, t) {
      return this.off(e, null, t);
    },
    delegate: function delegate(e, t, n, r) {
      return this.on(t, e, n, r);
    },
    undelegate: function undelegate(e, t, n) {
      return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n);
    },
    hover: function hover(e, t) {
      return this.mouseenter(e).mouseleave(t || e);
    }
  }), S.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function (e, n) {
    S.fn[n] = function (e, t) {
      return 0 < arguments.length ? this.on(n, null, e, t) : this.trigger(n);
    };
  });
  var Gt = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
  S.proxy = function (e, t) {
    var n, r, i;
    if ("string" == typeof t && (n = e[t], t = e, e = n), m(e)) return r = s.call(arguments, 2), (i = function i() {
      return e.apply(t || this, r.concat(s.call(arguments)));
    }).guid = e.guid = e.guid || S.guid++, i;
  }, S.holdReady = function (e) {
    e ? S.readyWait++ : S.ready(!0);
  }, S.isArray = Array.isArray, S.parseJSON = JSON.parse, S.nodeName = A, S.isFunction = m, S.isWindow = x, S.camelCase = X, S.type = w, S.now = Date.now, S.isNumeric = function (e) {
    var t = S.type(e);
    return ("number" === t || "string" === t) && !isNaN(e - parseFloat(e));
  }, S.trim = function (e) {
    return null == e ? "" : (e + "").replace(Gt, "");
  }, "function" == typeof define && define.amd && define("jquery", [], function () {
    return S;
  });
  var Yt = C.jQuery,
      Qt = C.$;
  return S.noConflict = function (e) {
    return C.$ === S && (C.$ = Qt), e && C.jQuery === S && (C.jQuery = Yt), S;
  }, "undefined" == typeof e && (C.jQuery = C.$ = S), S;
}); // DOM.event.move
//
// 2.0.0
//
// Stephen Band
//
// Triggers 'movestart', 'move' and 'moveend' events after
// mousemoves following a mousedown cross a distance threshold,
// similar to the native 'dragstart', 'drag' and 'dragend' events.
// Move events are throttled to animation frames. Move event objects
// have the properties:
//
// pageX:
// pageY:     Page coordinates of pointer.
// startX:
// startY:    Page coordinates of pointer at movestart.
// distX:
// distY:     Distance the pointer has moved since movestart.
// deltaX:
// deltaY:    Distance the finger has moved since last event.
// velocityX:
// velocityY: Average velocity over last few events.

(function (fn) {
  if (typeof define === 'function' && define.amd) {
    define([], fn);
  } else if (typeof module !== "undefined" && module !== null && module.exports) {
    module.exports = fn;
  } else {
    fn();
  }
})(function () {
  var assign = Object.assign || window.jQuery && jQuery.extend; // Number of pixels a pressed pointer travels before movestart
  // event is fired.

  var threshold = 8; // Shim for requestAnimationFrame, falling back to timer. See:
  // see http://paulirish.com/2011/requestanimationframe-for-smart-animating/

  var requestFrame = function () {
    return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function (fn, element) {
      return window.setTimeout(function () {
        fn();
      }, 25);
    };
  }(); // Shim for customEvent
  // see https://developer.mozilla.org/en-US/docs/Web/API/CustomEvent/CustomEvent#Polyfill


  (function () {
    if (typeof window.CustomEvent === "function") return false;

    function CustomEvent(event, params) {
      params = params || {
        bubbles: false,
        cancelable: false,
        detail: undefined
      };
      var evt = document.createEvent('CustomEvent');
      evt.initCustomEvent(event, params.bubbles, params.cancelable, params.detail);
      return evt;
    }

    CustomEvent.prototype = window.Event.prototype;
    window.CustomEvent = CustomEvent;
  })();

  var ignoreTags = {
    textarea: true,
    input: true,
    select: true,
    button: true
  };
  var mouseevents = {
    move: 'mousemove',
    cancel: 'mouseup dragstart',
    end: 'mouseup'
  };
  var touchevents = {
    move: 'touchmove',
    cancel: 'touchend',
    end: 'touchend'
  };
  var rspaces = /\s+/; // DOM Events

  var eventOptions = {
    bubbles: true,
    cancelable: true
  };
  var eventsSymbol = typeof Symbol === "function" ? Symbol('events') : {};

  function createEvent(type) {
    return new CustomEvent(type, eventOptions);
  }

  function getEvents(node) {
    return node[eventsSymbol] || (node[eventsSymbol] = {});
  }

  function on(node, types, fn, data, selector) {
    types = types.split(rspaces);
    var events = getEvents(node);
    var i = types.length;
    var handlers, type;

    function handler(e) {
      fn(e, data);
    }

    while (i--) {
      type = types[i];
      handlers = events[type] || (events[type] = []);
      handlers.push([fn, handler]);
      node.addEventListener(type, handler);
    }
  }

  function off(node, types, fn, selector) {
    types = types.split(rspaces);
    var events = getEvents(node);
    var i = types.length;
    var type, handlers, k;

    if (!events) {
      return;
    }

    while (i--) {
      type = types[i];
      handlers = events[type];

      if (!handlers) {
        continue;
      }

      k = handlers.length;

      while (k--) {
        if (handlers[k][0] === fn) {
          node.removeEventListener(type, handlers[k][1]);
          handlers.splice(k, 1);
        }
      }
    }
  }

  function trigger(node, type, properties) {
    // Don't cache events. It prevents you from triggering an event of a
    // given type from inside the handler of another event of that type.
    var event = createEvent(type);

    if (properties) {
      assign(event, properties);
    }

    node.dispatchEvent(event);
  } // Constructors


  function Timer(fn) {
    var callback = fn,
        active = false,
        running = false;

    function trigger(time) {
      if (active) {
        callback();
        requestFrame(trigger);
        running = true;
        active = false;
      } else {
        running = false;
      }
    }

    this.kick = function (fn) {
      active = true;

      if (!running) {
        trigger();
      }
    };

    this.end = function (fn) {
      var cb = callback;

      if (!fn) {
        return;
      } // If the timer is not running, simply call the end callback.


      if (!running) {
        fn();
      } // If the timer is running, and has been kicked lately, then
      // queue up the current callback and the end callback, otherwise
      // just the end callback.
      else {
        callback = active ? function () {
          cb();
          fn();
        } : fn;
        active = true;
      }
    };
  } // Functions


  function noop() {}

  function preventDefault(e) {
    e.preventDefault();
  }

  function isIgnoreTag(e) {
    return !!ignoreTags[e.target.tagName.toLowerCase()];
  }

  function isPrimaryButton(e) {
    // Ignore mousedowns on any button other than the left (or primary)
    // mouse button, or when a modifier key is pressed.
    return e.which === 1 && !e.ctrlKey && !e.altKey;
  }

  function identifiedTouch(touchList, id) {
    var i, l;

    if (touchList.identifiedTouch) {
      return touchList.identifiedTouch(id);
    } // touchList.identifiedTouch() does not exist in
    // webkit yet… we must do the search ourselves...


    i = -1;
    l = touchList.length;

    while (++i < l) {
      if (touchList[i].identifier === id) {
        return touchList[i];
      }
    }
  }

  function changedTouch(e, data) {
    var touch = identifiedTouch(e.changedTouches, data.identifier); // This isn't the touch you're looking for.

    if (!touch) {
      return;
    } // Chrome Android (at least) includes touches that have not
    // changed in e.changedTouches. That's a bit annoying. Check
    // that this touch has changed.


    if (touch.pageX === data.pageX && touch.pageY === data.pageY) {
      return;
    }

    return touch;
  } // Handlers that decide when the first movestart is triggered


  function mousedown(e) {
    // Ignore non-primary buttons
    if (!isPrimaryButton(e)) {
      return;
    } // Ignore form and interactive elements


    if (isIgnoreTag(e)) {
      return;
    }

    on(document, mouseevents.move, mousemove, e);
    on(document, mouseevents.cancel, mouseend, e);
  }

  function mousemove(e, data) {
    checkThreshold(e, data, e, removeMouse);
  }

  function mouseend(e, data) {
    removeMouse();
  }

  function removeMouse() {
    off(document, mouseevents.move, mousemove);
    off(document, mouseevents.cancel, mouseend);
  }

  function touchstart(e) {
    // Don't get in the way of interaction with form elements
    if (ignoreTags[e.target.tagName.toLowerCase()]) {
      return;
    }

    var touch = e.changedTouches[0]; // iOS live updates the touch objects whereas Android gives us copies.
    // That means we can't trust the touchstart object to stay the same,
    // so we must copy the data. This object acts as a template for
    // movestart, move and moveend event objects.

    var data = {
      target: touch.target,
      pageX: touch.pageX,
      pageY: touch.pageY,
      identifier: touch.identifier,
      // The only way to make handlers individually unbindable is by
      // making them unique.
      touchmove: function touchmove(e, data) {
        _touchmove(e, data);
      },
      touchend: function touchend(e, data) {
        _touchend(e, data);
      }
    };
    on(document, touchevents.move, data.touchmove, data);
    on(document, touchevents.cancel, data.touchend, data);
  }

  function _touchmove(e, data) {
    var touch = changedTouch(e, data);

    if (!touch) {
      return;
    }

    checkThreshold(e, data, touch, removeTouch);
  }

  function _touchend(e, data) {
    var touch = identifiedTouch(e.changedTouches, data.identifier);

    if (!touch) {
      return;
    }

    removeTouch(data);
  }

  function removeTouch(data) {
    off(document, touchevents.move, data.touchmove);
    off(document, touchevents.cancel, data.touchend);
  }

  function checkThreshold(e, data, touch, fn) {
    var distX = touch.pageX - data.pageX;
    var distY = touch.pageY - data.pageY; // Do nothing if the threshold has not been crossed.

    if (distX * distX + distY * distY < threshold * threshold) {
      return;
    }

    triggerStart(e, data, touch, distX, distY, fn);
  }

  function triggerStart(e, data, touch, distX, distY, fn) {
    var touches = e.targetTouches;
    var time = e.timeStamp - data.timeStamp; // Create a movestart object with some special properties that
    // are passed only to the movestart handlers.

    var template = {
      altKey: e.altKey,
      ctrlKey: e.ctrlKey,
      shiftKey: e.shiftKey,
      startX: data.pageX,
      startY: data.pageY,
      distX: distX,
      distY: distY,
      deltaX: distX,
      deltaY: distY,
      pageX: touch.pageX,
      pageY: touch.pageY,
      velocityX: distX / time,
      velocityY: distY / time,
      identifier: data.identifier,
      targetTouches: touches,
      finger: touches ? touches.length : 1,
      enableMove: function enableMove() {
        this.moveEnabled = true;
        this.enableMove = noop;
        e.preventDefault();
      }
    }; // Trigger the movestart event.

    trigger(data.target, 'movestart', template); // Unbind handlers that tracked the touch or mouse up till now.

    fn(data);
  } // Handlers that control what happens following a movestart


  function activeMousemove(e, data) {
    var timer = data.timer;
    data.touch = e;
    data.timeStamp = e.timeStamp;
    timer.kick();
  }

  function activeMouseend(e, data) {
    var target = data.target;
    var event = data.event;
    var timer = data.timer;
    removeActiveMouse();
    endEvent(target, event, timer, function () {
      // Unbind the click suppressor, waiting until after mouseup
      // has been handled.
      setTimeout(function () {
        off(target, 'click', preventDefault);
      }, 0);
    });
  }

  function removeActiveMouse() {
    off(document, mouseevents.move, activeMousemove);
    off(document, mouseevents.end, activeMouseend);
  }

  function activeTouchmove(e, data) {
    var event = data.event;
    var timer = data.timer;
    var touch = changedTouch(e, event);

    if (!touch) {
      return;
    } // Stop the interface from gesturing


    e.preventDefault();
    event.targetTouches = e.targetTouches;
    data.touch = touch;
    data.timeStamp = e.timeStamp;
    timer.kick();
  }

  function activeTouchend(e, data) {
    var target = data.target;
    var event = data.event;
    var timer = data.timer;
    var touch = identifiedTouch(e.changedTouches, event.identifier); // This isn't the touch you're looking for.

    if (!touch) {
      return;
    }

    removeActiveTouch(data);
    endEvent(target, event, timer);
  }

  function removeActiveTouch(data) {
    off(document, touchevents.move, data.activeTouchmove);
    off(document, touchevents.end, data.activeTouchend);
  } // Logic for triggering move and moveend events


  function updateEvent(event, touch, timeStamp) {
    var time = timeStamp - event.timeStamp;
    event.distX = touch.pageX - event.startX;
    event.distY = touch.pageY - event.startY;
    event.deltaX = touch.pageX - event.pageX;
    event.deltaY = touch.pageY - event.pageY; // Average the velocity of the last few events using a decay
    // curve to even out spurious jumps in values.

    event.velocityX = 0.3 * event.velocityX + 0.7 * event.deltaX / time;
    event.velocityY = 0.3 * event.velocityY + 0.7 * event.deltaY / time;
    event.pageX = touch.pageX;
    event.pageY = touch.pageY;
  }

  function endEvent(target, event, timer, fn) {
    timer.end(function () {
      trigger(target, 'moveend', event);
      return fn && fn();
    });
  } // Set up the DOM


  function movestart(e) {
    if (e.defaultPrevented) {
      return;
    }

    if (!e.moveEnabled) {
      return;
    }

    var event = {
      startX: e.startX,
      startY: e.startY,
      pageX: e.pageX,
      pageY: e.pageY,
      distX: e.distX,
      distY: e.distY,
      deltaX: e.deltaX,
      deltaY: e.deltaY,
      velocityX: e.velocityX,
      velocityY: e.velocityY,
      identifier: e.identifier,
      targetTouches: e.targetTouches,
      finger: e.finger
    };
    var data = {
      target: e.target,
      event: event,
      timer: new Timer(update),
      touch: undefined,
      timeStamp: e.timeStamp
    };

    function update(time) {
      updateEvent(event, data.touch, data.timeStamp);
      trigger(data.target, 'move', event);
    }

    if (e.identifier === undefined) {
      // We're dealing with a mouse event.
      // Stop clicks from propagating during a move
      on(e.target, 'click', preventDefault);
      on(document, mouseevents.move, activeMousemove, data);
      on(document, mouseevents.end, activeMouseend, data);
    } else {
      // In order to unbind correct handlers they have to be unique
      data.activeTouchmove = function (e, data) {
        activeTouchmove(e, data);
      };

      data.activeTouchend = function (e, data) {
        activeTouchend(e, data);
      }; // We're dealing with a touch.


      on(document, touchevents.move, data.activeTouchmove, data);
      on(document, touchevents.end, data.activeTouchend, data);
    }
  }

  on(document, 'mousedown', mousedown);
  on(document, 'touchstart', touchstart);
  on(document, 'movestart', movestart); // jQuery special events
  //
  // jQuery event objects are copies of DOM event objects. They need
  // a little help copying the move properties across.

  if (!window.jQuery) {
    return;
  }

  var properties = "startX startY pageX pageY distX distY deltaX deltaY velocityX velocityY".split(' ');

  function enableMove1(e) {
    e.enableMove();
  }

  function enableMove2(e) {
    e.enableMove();
  }

  function enableMove3(e) {
    e.enableMove();
  }

  function add(handleObj) {
    var handler = handleObj.handler;

    handleObj.handler = function (e) {
      // Copy move properties across from originalEvent
      var i = properties.length;
      var property;

      while (i--) {
        property = properties[i];
        e[property] = e.originalEvent[property];
      }

      handler.apply(this, arguments);
    };
  }

  jQuery.event.special.movestart = {
    setup: function setup() {
      // Movestart must be enabled to allow other move events
      on(this, 'movestart', enableMove1); // Do listen to DOM events

      return false;
    },
    teardown: function teardown() {
      off(this, 'movestart', enableMove1);
      return false;
    },
    add: add
  };
  jQuery.event.special.move = {
    setup: function setup() {
      on(this, 'movestart', enableMove2);
      return false;
    },
    teardown: function teardown() {
      off(this, 'movestart', enableMove2);
      return false;
    },
    add: add
  };
  jQuery.event.special.moveend = {
    setup: function setup() {
      on(this, 'movestart', enableMove3);
      return false;
    },
    teardown: function teardown() {
      off(this, 'movestart', enableMove3);
      return false;
    },
    add: add
  };
}); // jQuery Mask Plugin v1.14.16
// github.com/igorescobar/jQuery-Mask-Plugin
// var $jscomp=$jscomp||{};$jscomp.scope={};$jscomp.findInternal=function(a,n,f){a instanceof String&&(a=String(a));for(var p=a.length,k=0;k<p;k++){var b=a[k];if(n.call(f,b,k,a))return{i:k,v:b}}return{i:-1,v:void 0}};$jscomp.ASSUME_ES5=!1;$jscomp.ASSUME_NO_NATIVE_MAP=!1;$jscomp.ASSUME_NO_NATIVE_SET=!1;$jscomp.SIMPLE_FROUND_POLYFILL=!1;
// $jscomp.defineProperty=$jscomp.ASSUME_ES5||"function"==typeof Object.defineProperties?Object.defineProperty:function(a,n,f){a!=Array.prototype&&a!=Object.prototype&&(a[n]=f.value)};$jscomp.getGlobal=function(a){return"undefined"!=typeof window&&window===a?a:"undefined"!=typeof global&&null!=global?global:a};$jscomp.global=$jscomp.getGlobal(this);
// $jscomp.polyfill=function(a,n,f,p){if(n){f=$jscomp.global;a=a.split(".");for(p=0;p<a.length-1;p++){var k=a[p];k in f||(f[k]={});f=f[k]}a=a[a.length-1];p=f[a];n=n(p);n!=p&&null!=n&&$jscomp.defineProperty(f,a,{configurable:!0,writable:!0,value:n})}};$jscomp.polyfill("Array.prototype.find",function(a){return a?a:function(a,f){return $jscomp.findInternal(this,a,f).v}},"es6","es3");
// (function(a,n,f){"function"===typeof define&&define.amd?define(["jquery"],a):"object"===typeof exports&&"undefined"===typeof Meteor?module.exports=a(require("jquery")):a(n||f)})(function(a){var n=function(b,d,e){var c={invalid:[],getCaret:function(){try{var a=0,r=b.get(0),h=document.selection,d=r.selectionStart;if(h&&-1===navigator.appVersion.indexOf("MSIE 10")){var e=h.createRange();e.moveStart("character",-c.val().length);a=e.text.length}else if(d||"0"===d)a=d;return a}catch(C){}},setCaret:function(a){try{if(b.is(":focus")){var c=
// b.get(0);if(c.setSelectionRange)c.setSelectionRange(a,a);else{var g=c.createTextRange();g.collapse(!0);g.moveEnd("character",a);g.moveStart("character",a);g.select()}}}catch(B){}},events:function(){b.on("keydown.mask",function(a){b.data("mask-keycode",a.keyCode||a.which);b.data("mask-previus-value",b.val());b.data("mask-previus-caret-pos",c.getCaret());c.maskDigitPosMapOld=c.maskDigitPosMap}).on(a.jMaskGlobals.useInput?"input.mask":"keyup.mask",c.behaviour).on("paste.mask drop.mask",function(){setTimeout(function(){b.keydown().keyup()},
// 100)}).on("change.mask",function(){b.data("changed",!0)}).on("blur.mask",function(){f===c.val()||b.data("changed")||b.trigger("change");b.data("changed",!1)}).on("blur.mask",function(){f=c.val()}).on("focus.mask",function(b){!0===e.selectOnFocus&&a(b.target).select()}).on("focusout.mask",function(){e.clearIfNotMatch&&!k.test(c.val())&&c.val("")})},getRegexMask:function(){for(var a=[],b,c,e,t,f=0;f<d.length;f++)(b=l.translation[d.charAt(f)])?(c=b.pattern.toString().replace(/.{1}$|^.{1}/g,""),e=b.optional,
// (b=b.recursive)?(a.push(d.charAt(f)),t={digit:d.charAt(f),pattern:c}):a.push(e||b?c+"?":c)):a.push(d.charAt(f).replace(/[-\/\\^$*+?.()|[\]{}]/g,"\\$&"));a=a.join("");t&&(a=a.replace(new RegExp("("+t.digit+"(.*"+t.digit+")?)"),"($1)?").replace(new RegExp(t.digit,"g"),t.pattern));return new RegExp(a)},destroyEvents:function(){b.off("input keydown keyup paste drop blur focusout ".split(" ").join(".mask "))},val:function(a){var c=b.is("input")?"val":"text";if(0<arguments.length){if(b[c]()!==a)b[c](a);
// c=b}else c=b[c]();return c},calculateCaretPosition:function(a){var d=c.getMasked(),h=c.getCaret();if(a!==d){var e=b.data("mask-previus-caret-pos")||0;d=d.length;var g=a.length,f=a=0,l=0,k=0,m;for(m=h;m<d&&c.maskDigitPosMap[m];m++)f++;for(m=h-1;0<=m&&c.maskDigitPosMap[m];m--)a++;for(m=h-1;0<=m;m--)c.maskDigitPosMap[m]&&l++;for(m=e-1;0<=m;m--)c.maskDigitPosMapOld[m]&&k++;h>g?h=10*d:e>=h&&e!==g?c.maskDigitPosMapOld[h]||(e=h,h=h-(k-l)-a,c.maskDigitPosMap[h]&&(h=e)):h>e&&(h=h+(l-k)+f)}return h},behaviour:function(d){d=
// d||window.event;c.invalid=[];var e=b.data("mask-keycode");if(-1===a.inArray(e,l.byPassKeys)){e=c.getMasked();var h=c.getCaret(),g=b.data("mask-previus-value")||"";setTimeout(function(){c.setCaret(c.calculateCaretPosition(g))},a.jMaskGlobals.keyStrokeCompensation);c.val(e);c.setCaret(h);return c.callbacks(d)}},getMasked:function(a,b){var h=[],f=void 0===b?c.val():b+"",g=0,k=d.length,n=0,p=f.length,m=1,r="push",u=-1,w=0;b=[];if(e.reverse){r="unshift";m=-1;var x=0;g=k-1;n=p-1;var A=function(){return-1<
// g&&-1<n}}else x=k-1,A=function(){return g<k&&n<p};for(var z;A();){var y=d.charAt(g),v=f.charAt(n),q=l.translation[y];if(q)v.match(q.pattern)?(h[r](v),q.recursive&&(-1===u?u=g:g===x&&g!==u&&(g=u-m),x===u&&(g-=m)),g+=m):v===z?(w--,z=void 0):q.optional?(g+=m,n-=m):q.fallback?(h[r](q.fallback),g+=m,n-=m):c.invalid.push({p:n,v:v,e:q.pattern}),n+=m;else{if(!a)h[r](y);v===y?(b.push(n),n+=m):(z=y,b.push(n+w),w++);g+=m}}a=d.charAt(x);k!==p+1||l.translation[a]||h.push(a);h=h.join("");c.mapMaskdigitPositions(h,
// b,p);return h},mapMaskdigitPositions:function(a,b,d){a=e.reverse?a.length-d:0;c.maskDigitPosMap={};for(d=0;d<b.length;d++)c.maskDigitPosMap[b[d]+a]=1},callbacks:function(a){var g=c.val(),h=g!==f,k=[g,a,b,e],l=function(a,b,c){"function"===typeof e[a]&&b&&e[a].apply(this,c)};l("onChange",!0===h,k);l("onKeyPress",!0===h,k);l("onComplete",g.length===d.length,k);l("onInvalid",0<c.invalid.length,[g,a,b,c.invalid,e])}};b=a(b);var l=this,f=c.val(),k;d="function"===typeof d?d(c.val(),void 0,b,e):d;l.mask=
// d;l.options=e;l.remove=function(){var a=c.getCaret();l.options.placeholder&&b.removeAttr("placeholder");b.data("mask-maxlength")&&b.removeAttr("maxlength");c.destroyEvents();c.val(l.getCleanVal());c.setCaret(a);return b};l.getCleanVal=function(){return c.getMasked(!0)};l.getMaskedVal=function(a){return c.getMasked(!1,a)};l.init=function(g){g=g||!1;e=e||{};l.clearIfNotMatch=a.jMaskGlobals.clearIfNotMatch;l.byPassKeys=a.jMaskGlobals.byPassKeys;l.translation=a.extend({},a.jMaskGlobals.translation,e.translation);
// l=a.extend(!0,{},l,e);k=c.getRegexMask();if(g)c.events(),c.val(c.getMasked());else{e.placeholder&&b.attr("placeholder",e.placeholder);b.data("mask")&&b.attr("autocomplete","off");g=0;for(var f=!0;g<d.length;g++){var h=l.translation[d.charAt(g)];if(h&&h.recursive){f=!1;break}}f&&b.attr("maxlength",d.length).data("mask-maxlength",!0);c.destroyEvents();c.events();g=c.getCaret();c.val(c.getMasked());c.setCaret(g)}};l.init(!b.is("input"))};a.maskWatchers={};var f=function(){var b=a(this),d={},e=b.attr("data-mask");
// b.attr("data-mask-reverse")&&(d.reverse=!0);b.attr("data-mask-clearifnotmatch")&&(d.clearIfNotMatch=!0);"true"===b.attr("data-mask-selectonfocus")&&(d.selectOnFocus=!0);if(p(b,e,d))return b.data("mask",new n(this,e,d))},p=function(b,d,e){e=e||{};var c=a(b).data("mask"),f=JSON.stringify;b=a(b).val()||a(b).text();try{return"function"===typeof d&&(d=d(b)),"object"!==typeof c||f(c.options)!==f(e)||c.mask!==d}catch(w){}},k=function(a){var b=document.createElement("div");a="on"+a;var e=a in b;e||(b.setAttribute(a,
// "return;"),e="function"===typeof b[a]);return e};a.fn.mask=function(b,d){d=d||{};var e=this.selector,c=a.jMaskGlobals,f=c.watchInterval;c=d.watchInputs||c.watchInputs;var k=function(){if(p(this,b,d))return a(this).data("mask",new n(this,b,d))};a(this).each(k);e&&""!==e&&c&&(clearInterval(a.maskWatchers[e]),a.maskWatchers[e]=setInterval(function(){a(document).find(e).each(k)},f));return this};a.fn.masked=function(a){return this.data("mask").getMaskedVal(a)};a.fn.unmask=function(){clearInterval(a.maskWatchers[this.selector]);
// delete a.maskWatchers[this.selector];return this.each(function(){var b=a(this).data("mask");b&&b.remove().removeData("mask")})};a.fn.cleanVal=function(){return this.data("mask").getCleanVal()};a.applyDataMask=function(b){b=b||a.jMaskGlobals.maskElements;(b instanceof a?b:a(b)).filter(a.jMaskGlobals.dataMaskAttr).each(f)};k={maskElements:"input,td,span,div",dataMaskAttr:"*[data-mask]",dataMask:!0,watchInterval:300,watchInputs:!0,keyStrokeCompensation:10,useInput:!/Chrome\/[2-4][0-9]|SamsungBrowser/.test(window.navigator.userAgent)&&
// k("input"),watchDataMask:!1,byPassKeys:[9,16,17,18,36,37,38,39,40,91],translation:{0:{pattern:/\d/},9:{pattern:/\d/,optional:!0},"#":{pattern:/\d/,recursive:!0},A:{pattern:/[a-zA-Z0-9]/},S:{pattern:/[a-zA-Z]/}}};a.jMaskGlobals=a.jMaskGlobals||{};k=a.jMaskGlobals=a.extend(!0,{},k,a.jMaskGlobals);k.dataMask&&a.applyDataMask();setInterval(function(){a.jMaskGlobals.watchDataMask&&a.applyDataMask()},k.watchInterval)},window.jQuery,window.Zepto);

/*  jQuery Nice Select - v1.1.0
    https://github.com/hernansartorio/jquery-nice-select
    Made by Hernán Sartorio  */


(function ($) {
  $.fn.niceSelect = function (method) {
    // Methods
    if (typeof method == 'string') {
      if (method == 'update') {
        this.each(function () {
          var $select = $(this);
          var $dropdown = $(this).next('.nice-select');
          var open = $dropdown.hasClass('open');

          if ($dropdown.length) {
            $dropdown.remove();
            create_nice_select($select);

            if (open) {
              $select.next().trigger('click');
            }
          }
        });
      } else if (method == 'destroy') {
        this.each(function () {
          var $select = $(this);
          var $dropdown = $(this).next('.nice-select');

          if ($dropdown.length) {
            $dropdown.remove();
            $select.css('display', '');
          }
        });

        if ($('.nice-select').length == 0) {
          $(document).off('.nice_select');
        }
      } else {//         console.log('Method "' + method + '" does not exist.')
      }

      return this;
    } // Hide native select


    this.hide(); // Create custom markup

    this.each(function () {
      var $select = $(this);

      if (!$select.next().hasClass('nice-select')) {
        create_nice_select($select);
      }
    });

    function create_nice_select($select) {
      $select.after($('<div></div>').addClass('nice-select').addClass($select.attr('class') || '').addClass($select.attr('disabled') ? 'disabled' : '').attr('tabindex', $select.attr('disabled') ? null : '0').html('<span class="current"></span><ul class="list"></ul>'));
      var $dropdown = $select.next();
      var $options = $select.find('option');
      var $selected = $select.find('option:selected');
      $dropdown.find('.current').html($selected.data('display') || $selected.text());
      $options.each(function (i) {
        var $option = $(this);
        var display = $option.data('display');
        $dropdown.find('ul').append($('<li></li>').attr('data-value', $option.val()).attr('data-display', display || null).addClass('option' + ($option.is(':selected') ? ' selected' : '') + ($option.is(':disabled') ? ' disabled' : '')).html($option.text()));
      });
    }
    /* Event listeners */
    // Unbind existing events in case that the plugin has been initialized before


    $(document).off('.nice_select'); // Open/close

    $(document).on('click.nice_select', '.nice-select', function (event) {
      var $dropdown = $(this);
      $('.nice-select').not($dropdown).removeClass('open');
      $dropdown.toggleClass('open');

      if ($dropdown.hasClass('open')) {
        $dropdown.find('.option');
        $dropdown.find('.focus').removeClass('focus');
        $dropdown.find('.selected').addClass('focus');
      } else {
        $dropdown.focus();
      }
    }); // Close when clicking outside

    $(document).on('click.nice_select', function (event) {
      if ($(event.target).closest('.nice-select').length === 0) {
        $('.nice-select').removeClass('open').find('.option');
      }
    }); // Option click

    $(document).on('click.nice_select', '.nice-select .option:not(.disabled)', function (event) {
      var $option = $(this);
      var $dropdown = $option.closest('.nice-select');
      $dropdown.find('.selected').removeClass('selected');
      $option.addClass('selected');
      var text = $option.data('display') || $option.text();
      $dropdown.find('.current').text(text);
      $dropdown.prev('select').val($option.data('value')).trigger('change');
    }); // Keyboard events

    $(document).on('keydown.nice_select', '.nice-select', function (event) {
      var $dropdown = $(this);
      var $focused_option = $($dropdown.find('.focus') || $dropdown.find('.list .option.selected')); // Space or Enter

      if (event.keyCode == 32 || event.keyCode == 13) {
        if ($dropdown.hasClass('open')) {
          $focused_option.trigger('click');
        } else {
          $dropdown.trigger('click');
        }

        return false; // Down
      } else if (event.keyCode == 40) {
        if (!$dropdown.hasClass('open')) {
          $dropdown.trigger('click');
        } else {
          var $next = $focused_option.nextAll('.option:not(.disabled)').first();

          if ($next.length > 0) {
            $dropdown.find('.focus').removeClass('focus');
            $next.addClass('focus');
          }
        }

        return false; // Up
      } else if (event.keyCode == 38) {
        if (!$dropdown.hasClass('open')) {
          $dropdown.trigger('click');
        } else {
          var $prev = $focused_option.prevAll('.option:not(.disabled)').first();

          if ($prev.length > 0) {
            $dropdown.find('.focus').removeClass('focus');
            $prev.addClass('focus');
          }
        }

        return false; // Esc
      } else if (event.keyCode == 27) {
        if ($dropdown.hasClass('open')) {
          $dropdown.trigger('click');
        } // Tab

      } else if (event.keyCode == 9) {
        if ($dropdown.hasClass('open')) {
          return false;
        }
      }
    }); // Detect CSS pointer-events support, for IE <= 10. From Modernizr.

    var style = document.createElement('a').style;
    style.cssText = 'pointer-events:auto';

    if (style.pointerEvents !== 'auto') {
      $('html').addClass('no-csspointerevents');
    }

    return this;
  };
})(jQuery);

(function ($) {
  $.fn.twentytwenty = function (options) {
    var options = $.extend({
      default_offset_pct: 0.5,
      orientation: 'horizontal',
      before_label: 'Before',
      after_label: 'After',
      no_overlay: false,
      move_slider_on_hover: false,
      move_with_handle_only: true,
      click_to_move: false
    }, options);
    return this.each(function () {
      var sliderPct = options.default_offset_pct;
      var container = $(this);
      var sliderOrientation = options.orientation;
      var beforeDirection = sliderOrientation === 'vertical' ? 'down' : 'left';
      var afterDirection = sliderOrientation === 'vertical' ? 'up' : 'right';
      container.wrap("<div class='twentytwenty-wrapper twentytwenty-" + sliderOrientation + "'></div>");

      if (!options.no_overlay) {
        container.append("<div class='twentytwenty-overlay'></div>");
        var overlay = container.find(".twentytwenty-overlay");
        overlay.append("<div class='twentytwenty-before-label' data-content='" + options.before_label + "'></div>");
        overlay.append("<div class='twentytwenty-after-label' data-content='" + options.after_label + "'></div>");
      }

      var beforeImg = container.find("img:first");
      var afterImg = container.find("img:last");
      container.append("<div class='twentytwenty-handle'></div>");
      var slider = container.find(".twentytwenty-handle");
      slider.append("<span class='twentytwenty-" + beforeDirection + "-arrow'></span>");
      slider.append("<span class='twentytwenty-" + afterDirection + "-arrow'></span>");
      container.addClass("twentytwenty-container");
      beforeImg.addClass("twentytwenty-before");
      afterImg.addClass("twentytwenty-after");

      var calcOffset = function calcOffset(dimensionPct) {
        var w = beforeImg.width();
        var h = beforeImg.height();
        return {
          w: w + "px",
          h: h + "px",
          cw: dimensionPct * w + "px",
          ch: dimensionPct * h + "px"
        };
      };

      var adjustContainer = function adjustContainer(offset) {
        if (sliderOrientation === 'vertical') {
          beforeImg.css("clip", "rect(0," + offset.w + "," + offset.ch + ",0)");
          afterImg.css("clip", "rect(" + offset.ch + "," + offset.w + "," + offset.h + ",0)");
        } else {
          beforeImg.css("clip", "rect(0," + offset.cw + "," + offset.h + ",0)");
          afterImg.css("clip", "rect(0," + offset.w + "," + offset.h + "," + offset.cw + ")");
        }

        container.css("height", offset.h);
      };

      var adjustSlider = function adjustSlider(pct) {
        var offset = calcOffset(pct);
        slider.css(sliderOrientation === "vertical" ? "top" : "left", sliderOrientation === "vertical" ? offset.ch : offset.cw);
        adjustContainer(offset);
      }; // Return the number specified or the min/max number if it outside the range given.


      var minMaxNumber = function minMaxNumber(num, min, max) {
        return Math.max(min, Math.min(max, num));
      }; // Calculate the slider percentage based on the position.


      var getSliderPercentage = function getSliderPercentage(positionX, positionY) {
        var sliderPercentage = sliderOrientation === 'vertical' ? (positionY - offsetY) / imgHeight : (positionX - offsetX) / imgWidth;
        return minMaxNumber(sliderPercentage, 0, 1);
      };

      $(window).on("resize.twentytwenty", function (e) {
        adjustSlider(sliderPct);
      });
      var offsetX = 0;
      var offsetY = 0;
      var imgWidth = 0;
      var imgHeight = 0;

      var onMoveStart = function onMoveStart(e) {
        if ((e.distX > e.distY && e.distX < -e.distY || e.distX < e.distY && e.distX > -e.distY) && sliderOrientation !== 'vertical') {
          e.preventDefault();
        } else if ((e.distX < e.distY && e.distX < -e.distY || e.distX > e.distY && e.distX > -e.distY) && sliderOrientation === 'vertical') {
          e.preventDefault();
        }

        container.addClass("active");
        offsetX = container.offset().left;
        offsetY = container.offset().top;
        imgWidth = beforeImg.width();
        imgHeight = beforeImg.height();
      };

      var onMove = function onMove(e) {
        if (container.hasClass("active")) {
          sliderPct = getSliderPercentage(e.pageX, e.pageY);
          adjustSlider(sliderPct);
        }
      };

      var onMoveEnd = function onMoveEnd() {
        container.removeClass("active");
      };

      var moveTarget = options.move_with_handle_only ? slider : container;
      moveTarget.on("movestart", onMoveStart);
      moveTarget.on("move", onMove);
      moveTarget.on("moveend", onMoveEnd);

      if (options.move_slider_on_hover) {
        container.on("mouseenter", onMoveStart);
        container.on("mousemove", onMove);
        container.on("mouseleave", onMoveEnd);
      }

      slider.on("touchmove", function (e) {
        e.preventDefault();
      });
      container.find("img").on("mousedown", function (event) {
        event.preventDefault();
      });

      if (options.click_to_move) {
        container.on('click', function (e) {
          offsetX = container.offset().left;
          offsetY = container.offset().top;
          imgWidth = beforeImg.width();
          imgHeight = beforeImg.height();
          sliderPct = getSliderPercentage(e.pageX, e.pageY);
          adjustSlider(sliderPct);
        });
      }

      $(window).trigger("resize.twentytwenty");
    });
  };
})(jQuery);
/*! jQuery Validation Plugin - v1.19.1 - 6/15/2019
 * https://jqueryvalidation.org/
 * Copyright (c) 2019 Jörn Zaefferer; Licensed MIT */


!function (a) {
  "function" == typeof define && define.amd ? define(["jquery"], a) : "object" == (typeof module === "undefined" ? "undefined" : _typeof(module)) && module.exports ? module.exports = a(require("jquery")) : a(jQuery);
}(function (a) {
  a.extend(a.fn, {
    validate: function validate(b) {
      if (!this.length) return void (b && b.debug && window.console && console.warn("Nothing selected, can't validate, returning nothing."));
      var c = a.data(this[0], "validator");
      return c ? c : (this.attr("novalidate", "novalidate"), c = new a.validator(b, this[0]), a.data(this[0], "validator", c), c.settings.onsubmit && (this.on("click.validate", ":submit", function (b) {
        c.submitButton = b.currentTarget, a(this).hasClass("cancel") && (c.cancelSubmit = !0), void 0 !== a(this).attr("formnovalidate") && (c.cancelSubmit = !0);
      }), this.on("submit.validate", function (b) {
        function d() {
          var d, e;
          return c.submitButton && (c.settings.submitHandler || c.formSubmitted) && (d = a("<input type='hidden'/>").attr("name", c.submitButton.name).val(a(c.submitButton).val()).appendTo(c.currentForm)), !(c.settings.submitHandler && !c.settings.debug) || (e = c.settings.submitHandler.call(c, c.currentForm, b), d && d.remove(), void 0 !== e && e);
        }

        return c.settings.debug && b.preventDefault(), c.cancelSubmit ? (c.cancelSubmit = !1, d()) : c.form() ? c.pendingRequest ? (c.formSubmitted = !0, !1) : d() : (c.focusInvalid(), !1);
      })), c);
    },
    valid: function valid() {
      var b, c, d;
      return a(this[0]).is("form") ? b = this.validate().form() : (d = [], b = !0, c = a(this[0].form).validate(), this.each(function () {
        b = c.element(this) && b, b || (d = d.concat(c.errorList));
      }), c.errorList = d), b;
    },
    rules: function rules(b, c) {
      var d,
          e,
          f,
          g,
          h,
          i,
          j = this[0],
          k = "undefined" != typeof this.attr("contenteditable") && "false" !== this.attr("contenteditable");

      if (null != j && (!j.form && k && (j.form = this.closest("form")[0], j.name = this.attr("name")), null != j.form)) {
        if (b) switch (d = a.data(j.form, "validator").settings, e = d.rules, f = a.validator.staticRules(j), b) {
          case "add":
            a.extend(f, a.validator.normalizeRule(c)), delete f.messages, e[j.name] = f, c.messages && (d.messages[j.name] = a.extend(d.messages[j.name], c.messages));
            break;

          case "remove":
            return c ? (i = {}, a.each(c.split(/\s/), function (a, b) {
              i[b] = f[b], delete f[b];
            }), i) : (delete e[j.name], f);
        }
        return g = a.validator.normalizeRules(a.extend({}, a.validator.classRules(j), a.validator.attributeRules(j), a.validator.dataRules(j), a.validator.staticRules(j)), j), g.required && (h = g.required, delete g.required, g = a.extend({
          required: h
        }, g)), g.remote && (h = g.remote, delete g.remote, g = a.extend(g, {
          remote: h
        })), g;
      }
    }
  }), a.extend(a.expr.pseudos || a.expr[":"], {
    blank: function blank(b) {
      return !a.trim("" + a(b).val());
    },
    filled: function filled(b) {
      var c = a(b).val();
      return null !== c && !!a.trim("" + c);
    },
    unchecked: function unchecked(b) {
      return !a(b).prop("checked");
    }
  }), a.validator = function (b, c) {
    this.settings = a.extend(!0, {}, a.validator.defaults, b), this.currentForm = c, this.init();
  }, a.validator.format = function (b, c) {
    return 1 === arguments.length ? function () {
      var c = a.makeArray(arguments);
      return c.unshift(b), a.validator.format.apply(this, c);
    } : void 0 === c ? b : (arguments.length > 2 && c.constructor !== Array && (c = a.makeArray(arguments).slice(1)), c.constructor !== Array && (c = [c]), a.each(c, function (a, c) {
      b = b.replace(new RegExp("\\{" + a + "\\}", "g"), function () {
        return c;
      });
    }), b);
  }, a.extend(a.validator, {
    defaults: {
      messages: {},
      groups: {},
      rules: {},
      errorClass: "error",
      pendingClass: "pending",
      validClass: "valid",
      errorElement: "label",
      focusCleanup: !1,
      focusInvalid: !0,
      errorContainer: a([]),
      errorLabelContainer: a([]),
      onsubmit: !0,
      ignore: ":hidden",
      ignoreTitle: !1,
      onfocusin: function onfocusin(a) {
        this.lastActive = a, this.settings.focusCleanup && (this.settings.unhighlight && this.settings.unhighlight.call(this, a, this.settings.errorClass, this.settings.validClass), this.hideThese(this.errorsFor(a)));
      },
      onfocusout: function onfocusout(a) {
        this.checkable(a) || !(a.name in this.submitted) && this.optional(a) || this.element(a);
      },
      onkeyup: function onkeyup(b, c) {
        var d = [16, 17, 18, 20, 35, 36, 37, 38, 39, 40, 45, 144, 225];
        9 === c.which && "" === this.elementValue(b) || a.inArray(c.keyCode, d) !== -1 || (b.name in this.submitted || b.name in this.invalid) && this.element(b);
      },
      onclick: function onclick(a) {
        a.name in this.submitted ? this.element(a) : a.parentNode.name in this.submitted && this.element(a.parentNode);
      },
      highlight: function highlight(b, c, d) {
        "radio" === b.type ? this.findByName(b.name).addClass(c).removeClass(d) : a(b).addClass(c).removeClass(d);
      },
      unhighlight: function unhighlight(b, c, d) {
        "radio" === b.type ? this.findByName(b.name).removeClass(c).addClass(d) : a(b).removeClass(c).addClass(d);
      }
    },
    setDefaults: function setDefaults(b) {
      a.extend(a.validator.defaults, b);
    },
    messages: {
      required: "This field is required.",
      remote: "Please fix this field.",
      email: "Please enter a valid email address.",
      url: "Please enter a valid URL.",
      date: "Please enter a valid date.",
      dateISO: "Please enter a valid date (ISO).",
      number: "Please enter a valid number.",
      digits: "Please enter only digits.",
      equalTo: "Please enter the same value again.",
      maxlength: a.validator.format("Please enter no more than {0} characters."),
      minlength: a.validator.format("Please enter at least {0} characters."),
      rangelength: a.validator.format("Please enter a value between {0} and {1} characters long."),
      range: a.validator.format("Please enter a value between {0} and {1}."),
      max: a.validator.format("Please enter a value less than or equal to {0}."),
      min: a.validator.format("Please enter a value greater than or equal to {0}."),
      step: a.validator.format("Please enter a multiple of {0}.")
    },
    autoCreateRanges: !1,
    prototype: {
      init: function init() {
        function b(b) {
          var c = "undefined" != typeof a(this).attr("contenteditable") && "false" !== a(this).attr("contenteditable");

          if (!this.form && c && (this.form = a(this).closest("form")[0], this.name = a(this).attr("name")), d === this.form) {
            var e = a.data(this.form, "validator"),
                f = "on" + b.type.replace(/^validate/, ""),
                g = e.settings;
            g[f] && !a(this).is(g.ignore) && g[f].call(e, this, b);
          }
        }

        this.labelContainer = a(this.settings.errorLabelContainer), this.errorContext = this.labelContainer.length && this.labelContainer || a(this.currentForm), this.containers = a(this.settings.errorContainer).add(this.settings.errorLabelContainer), this.submitted = {}, this.valueCache = {}, this.pendingRequest = 0, this.pending = {}, this.invalid = {}, this.reset();
        var c,
            d = this.currentForm,
            e = this.groups = {};
        a.each(this.settings.groups, function (b, c) {
          "string" == typeof c && (c = c.split(/\s/)), a.each(c, function (a, c) {
            e[c] = b;
          });
        }), c = this.settings.rules, a.each(c, function (b, d) {
          c[b] = a.validator.normalizeRule(d);
        }), a(this.currentForm).on("focusin.validate focusout.validate keyup.validate", ":text, [type='password'], [type='file'], select, textarea, [type='number'], [type='search'], [type='tel'], [type='url'], [type='email'], [type='datetime'], [type='date'], [type='month'], [type='week'], [type='time'], [type='datetime-local'], [type='range'], [type='color'], [type='radio'], [type='checkbox'], [contenteditable], [type='button']", b).on("click.validate", "select, option, [type='radio'], [type='checkbox']", b), this.settings.invalidHandler && a(this.currentForm).on("invalid-form.validate", this.settings.invalidHandler);
      },
      form: function form() {
        return this.checkForm(), a.extend(this.submitted, this.errorMap), this.invalid = a.extend({}, this.errorMap), this.valid() || a(this.currentForm).triggerHandler("invalid-form", [this]), this.showErrors(), this.valid();
      },
      checkForm: function checkForm() {
        this.prepareForm();

        for (var a = 0, b = this.currentElements = this.elements(); b[a]; a++) {
          this.check(b[a]);
        }

        return this.valid();
      },
      element: function element(b) {
        var c,
            d,
            e = this.clean(b),
            f = this.validationTargetFor(e),
            g = this,
            h = !0;
        return void 0 === f ? delete this.invalid[e.name] : (this.prepareElement(f), this.currentElements = a(f), d = this.groups[f.name], d && a.each(this.groups, function (a, b) {
          b === d && a !== f.name && (e = g.validationTargetFor(g.clean(g.findByName(a))), e && e.name in g.invalid && (g.currentElements.push(e), h = g.check(e) && h));
        }), c = this.check(f) !== !1, h = h && c, c ? this.invalid[f.name] = !1 : this.invalid[f.name] = !0, this.numberOfInvalids() || (this.toHide = this.toHide.add(this.containers)), this.showErrors(), a(b).attr("aria-invalid", !c)), h;
      },
      showErrors: function showErrors(b) {
        if (b) {
          var c = this;
          a.extend(this.errorMap, b), this.errorList = a.map(this.errorMap, function (a, b) {
            return {
              message: a,
              element: c.findByName(b)[0]
            };
          }), this.successList = a.grep(this.successList, function (a) {
            return !(a.name in b);
          });
        }

        this.settings.showErrors ? this.settings.showErrors.call(this, this.errorMap, this.errorList) : this.defaultShowErrors();
      },
      resetForm: function resetForm() {
        a.fn.resetForm && a(this.currentForm).resetForm(), this.invalid = {}, this.submitted = {}, this.prepareForm(), this.hideErrors();
        var b = this.elements().removeData("previousValue").removeAttr("aria-invalid");
        this.resetElements(b);
      },
      resetElements: function resetElements(a) {
        var b;
        if (this.settings.unhighlight) for (b = 0; a[b]; b++) {
          this.settings.unhighlight.call(this, a[b], this.settings.errorClass, ""), this.findByName(a[b].name).removeClass(this.settings.validClass);
        } else a.removeClass(this.settings.errorClass).removeClass(this.settings.validClass);
      },
      numberOfInvalids: function numberOfInvalids() {
        return this.objectLength(this.invalid);
      },
      objectLength: function objectLength(a) {
        var b,
            c = 0;

        for (b in a) {
          void 0 !== a[b] && null !== a[b] && a[b] !== !1 && c++;
        }

        return c;
      },
      hideErrors: function hideErrors() {
        this.hideThese(this.toHide);
      },
      hideThese: function hideThese(a) {
        a.not(this.containers).text(""), this.addWrapper(a).hide();
      },
      valid: function valid() {
        return 0 === this.size();
      },
      size: function size() {
        return this.errorList.length;
      },
      focusInvalid: function focusInvalid() {
        if (this.settings.focusInvalid) try {
          a(this.findLastActive() || this.errorList.length && this.errorList[0].element || []).filter(":visible").trigger("focus").trigger("focusin");
        } catch (b) {}
      },
      findLastActive: function findLastActive() {
        var b = this.lastActive;
        return b && 1 === a.grep(this.errorList, function (a) {
          return a.element.name === b.name;
        }).length && b;
      },
      elements: function elements() {
        var b = this,
            c = {};
        return a(this.currentForm).find("input, select, textarea, [contenteditable]").not(":submit, :reset, :image, :disabled").not(this.settings.ignore).filter(function () {
          var d = this.name || a(this).attr("name"),
              e = "undefined" != typeof a(this).attr("contenteditable") && "false" !== a(this).attr("contenteditable");
          return !d && b.settings.debug && window.console && console.error("%o has no name assigned", this), e && (this.form = a(this).closest("form")[0], this.name = d), this.form === b.currentForm && !(d in c || !b.objectLength(a(this).rules())) && (c[d] = !0, !0);
        });
      },
      clean: function clean(b) {
        return a(b)[0];
      },
      errors: function errors() {
        var b = this.settings.errorClass.split(" ").join(".");
        return a(this.settings.errorElement + "." + b, this.errorContext);
      },
      resetInternals: function resetInternals() {
        this.successList = [], this.errorList = [], this.errorMap = {}, this.toShow = a([]), this.toHide = a([]);
      },
      reset: function reset() {
        this.resetInternals(), this.currentElements = a([]);
      },
      prepareForm: function prepareForm() {
        this.reset(), this.toHide = this.errors().add(this.containers);
      },
      prepareElement: function prepareElement(a) {
        this.reset(), this.toHide = this.errorsFor(a);
      },
      elementValue: function elementValue(b) {
        var c,
            d,
            e = a(b),
            f = b.type,
            g = "undefined" != typeof e.attr("contenteditable") && "false" !== e.attr("contenteditable");
        return "radio" === f || "checkbox" === f ? this.findByName(b.name).filter(":checked").val() : "number" === f && "undefined" != typeof b.validity ? b.validity.badInput ? "NaN" : e.val() : (c = g ? e.text() : e.val(), "file" === f ? "C:\\fakepath\\" === c.substr(0, 12) ? c.substr(12) : (d = c.lastIndexOf("/"), d >= 0 ? c.substr(d + 1) : (d = c.lastIndexOf("\\"), d >= 0 ? c.substr(d + 1) : c)) : "string" == typeof c ? c.replace(/\r/g, "") : c);
      },
      check: function check(b) {
        b = this.validationTargetFor(this.clean(b));
        var c,
            d,
            e,
            f,
            g = a(b).rules(),
            h = a.map(g, function (a, b) {
          return b;
        }).length,
            i = !1,
            j = this.elementValue(b);
        "function" == typeof g.normalizer ? f = g.normalizer : "function" == typeof this.settings.normalizer && (f = this.settings.normalizer), f && (j = f.call(b, j), delete g.normalizer);

        for (d in g) {
          e = {
            method: d,
            parameters: g[d]
          };

          try {
            if (c = a.validator.methods[d].call(this, j, b, e.parameters), "dependency-mismatch" === c && 1 === h) {
              i = !0;
              continue;
            }

            if (i = !1, "pending" === c) return void (this.toHide = this.toHide.not(this.errorsFor(b)));
            if (!c) return this.formatAndAdd(b, e), !1;
          } catch (k) {
            throw this.settings.debug && window.console && console.log("Exception occurred when checking element " + b.id + ", check the '" + e.method + "' method.", k), k instanceof TypeError && (k.message += ".  Exception occurred when checking element " + b.id + ", check the '" + e.method + "' method."), k;
          }
        }

        if (!i) return this.objectLength(g) && this.successList.push(b), !0;
      },
      customDataMessage: function customDataMessage(b, c) {
        return a(b).data("msg" + c.charAt(0).toUpperCase() + c.substring(1).toLowerCase()) || a(b).data("msg");
      },
      customMessage: function customMessage(a, b) {
        var c = this.settings.messages[a];
        return c && (c.constructor === String ? c : c[b]);
      },
      findDefined: function findDefined() {
        for (var a = 0; a < arguments.length; a++) {
          if (void 0 !== arguments[a]) return arguments[a];
        }
      },
      defaultMessage: function defaultMessage(b, c) {
        "string" == typeof c && (c = {
          method: c
        });
        var d = this.findDefined(this.customMessage(b.name, c.method), this.customDataMessage(b, c.method), !this.settings.ignoreTitle && b.title || void 0, a.validator.messages[c.method], "<strong>Warning: No message defined for " + b.name + "</strong>"),
            e = /\$?\{(\d+)\}/g;
        return "function" == typeof d ? d = d.call(this, c.parameters, b) : e.test(d) && (d = a.validator.format(d.replace(e, "{$1}"), c.parameters)), d;
      },
      formatAndAdd: function formatAndAdd(a, b) {
        var c = this.defaultMessage(a, b);
        this.errorList.push({
          message: c,
          element: a,
          method: b.method
        }), this.errorMap[a.name] = c, this.submitted[a.name] = c;
      },
      addWrapper: function addWrapper(a) {
        return this.settings.wrapper && (a = a.add(a.parent(this.settings.wrapper))), a;
      },
      defaultShowErrors: function defaultShowErrors() {
        var a, b, c;

        for (a = 0; this.errorList[a]; a++) {
          c = this.errorList[a], this.settings.highlight && this.settings.highlight.call(this, c.element, this.settings.errorClass, this.settings.validClass), this.showLabel(c.element, c.message);
        }

        if (this.errorList.length && (this.toShow = this.toShow.add(this.containers)), this.settings.success) for (a = 0; this.successList[a]; a++) {
          this.showLabel(this.successList[a]);
        }
        if (this.settings.unhighlight) for (a = 0, b = this.validElements(); b[a]; a++) {
          this.settings.unhighlight.call(this, b[a], this.settings.errorClass, this.settings.validClass);
        }
        this.toHide = this.toHide.not(this.toShow), this.hideErrors(), this.addWrapper(this.toShow).show();
      },
      validElements: function validElements() {
        return this.currentElements.not(this.invalidElements());
      },
      invalidElements: function invalidElements() {
        return a(this.errorList).map(function () {
          return this.element;
        });
      },
      showLabel: function showLabel(b, c) {
        var d,
            e,
            f,
            g,
            h = this.errorsFor(b),
            i = this.idOrName(b),
            j = a(b).attr("aria-describedby");
        h.length ? (h.removeClass(this.settings.validClass).addClass(this.settings.errorClass), h.html(c)) : (h = a("<" + this.settings.errorElement + ">").attr("id", i + "-error").addClass(this.settings.errorClass).html(c || ""), d = h, this.settings.wrapper && (d = h.hide().show().wrap("<" + this.settings.wrapper + "/>").parent()), this.labelContainer.length ? this.labelContainer.append(d) : this.settings.errorPlacement ? this.settings.errorPlacement.call(this, d, a(b)) : d.insertAfter(b), h.is("label") ? h.attr("for", i) : 0 === h.parents("label[for='" + this.escapeCssMeta(i) + "']").length && (f = h.attr("id"), j ? j.match(new RegExp("\\b" + this.escapeCssMeta(f) + "\\b")) || (j += " " + f) : j = f, a(b).attr("aria-describedby", j), e = this.groups[b.name], e && (g = this, a.each(g.groups, function (b, c) {
          c === e && a("[name='" + g.escapeCssMeta(b) + "']", g.currentForm).attr("aria-describedby", h.attr("id"));
        })))), !c && this.settings.success && (h.text(""), "string" == typeof this.settings.success ? h.addClass(this.settings.success) : this.settings.success(h, b)), this.toShow = this.toShow.add(h);
      },
      errorsFor: function errorsFor(b) {
        var c = this.escapeCssMeta(this.idOrName(b)),
            d = a(b).attr("aria-describedby"),
            e = "label[for='" + c + "'], label[for='" + c + "'] *";
        return d && (e = e + ", #" + this.escapeCssMeta(d).replace(/\s+/g, ", #")), this.errors().filter(e);
      },
      escapeCssMeta: function escapeCssMeta(a) {
        return a.replace(/([\\!"#$%&'()*+,.\/:;<=>?@\[\]^`{|}~])/g, "\\$1");
      },
      idOrName: function idOrName(a) {
        return this.groups[a.name] || (this.checkable(a) ? a.name : a.id || a.name);
      },
      validationTargetFor: function validationTargetFor(b) {
        return this.checkable(b) && (b = this.findByName(b.name)), a(b).not(this.settings.ignore)[0];
      },
      checkable: function checkable(a) {
        return /radio|checkbox/i.test(a.type);
      },
      findByName: function findByName(b) {
        return a(this.currentForm).find("[name='" + this.escapeCssMeta(b) + "']");
      },
      getLength: function getLength(b, c) {
        switch (c.nodeName.toLowerCase()) {
          case "select":
            return a("option:selected", c).length;

          case "input":
            if (this.checkable(c)) return this.findByName(c.name).filter(":checked").length;
        }

        return b.length;
      },
      depend: function depend(a, b) {
        return !this.dependTypes[_typeof(a)] || this.dependTypes[_typeof(a)](a, b);
      },
      dependTypes: {
        "boolean": function boolean(a) {
          return a;
        },
        string: function string(b, c) {
          return !!a(b, c.form).length;
        },
        "function": function _function(a, b) {
          return a(b);
        }
      },
      optional: function optional(b) {
        var c = this.elementValue(b);
        return !a.validator.methods.required.call(this, c, b) && "dependency-mismatch";
      },
      startRequest: function startRequest(b) {
        this.pending[b.name] || (this.pendingRequest++, a(b).addClass(this.settings.pendingClass), this.pending[b.name] = !0);
      },
      stopRequest: function stopRequest(b, c) {
        this.pendingRequest--, this.pendingRequest < 0 && (this.pendingRequest = 0), delete this.pending[b.name], a(b).removeClass(this.settings.pendingClass), c && 0 === this.pendingRequest && this.formSubmitted && this.form() ? (a(this.currentForm).submit(), this.submitButton && a("input:hidden[name='" + this.submitButton.name + "']", this.currentForm).remove(), this.formSubmitted = !1) : !c && 0 === this.pendingRequest && this.formSubmitted && (a(this.currentForm).triggerHandler("invalid-form", [this]), this.formSubmitted = !1);
      },
      previousValue: function previousValue(b, c) {
        return c = "string" == typeof c && c || "remote", a.data(b, "previousValue") || a.data(b, "previousValue", {
          old: null,
          valid: !0,
          message: this.defaultMessage(b, {
            method: c
          })
        });
      },
      destroy: function destroy() {
        this.resetForm(), a(this.currentForm).off(".validate").removeData("validator").find(".validate-equalTo-blur").off(".validate-equalTo").removeClass("validate-equalTo-blur").find(".validate-lessThan-blur").off(".validate-lessThan").removeClass("validate-lessThan-blur").find(".validate-lessThanEqual-blur").off(".validate-lessThanEqual").removeClass("validate-lessThanEqual-blur").find(".validate-greaterThanEqual-blur").off(".validate-greaterThanEqual").removeClass("validate-greaterThanEqual-blur").find(".validate-greaterThan-blur").off(".validate-greaterThan").removeClass("validate-greaterThan-blur");
      }
    },
    classRuleSettings: {
      required: {
        required: !0
      },
      email: {
        email: !0
      },
      url: {
        url: !0
      },
      date: {
        date: !0
      },
      dateISO: {
        dateISO: !0
      },
      number: {
        number: !0
      },
      digits: {
        digits: !0
      },
      creditcard: {
        creditcard: !0
      }
    },
    addClassRules: function addClassRules(b, c) {
      b.constructor === String ? this.classRuleSettings[b] = c : a.extend(this.classRuleSettings, b);
    },
    classRules: function classRules(b) {
      var c = {},
          d = a(b).attr("class");
      return d && a.each(d.split(" "), function () {
        this in a.validator.classRuleSettings && a.extend(c, a.validator.classRuleSettings[this]);
      }), c;
    },
    normalizeAttributeRule: function normalizeAttributeRule(a, b, c, d) {
      /min|max|step/.test(c) && (null === b || /number|range|text/.test(b)) && (d = Number(d), isNaN(d) && (d = void 0)), d || 0 === d ? a[c] = d : b === c && "range" !== b && (a[c] = !0);
    },
    attributeRules: function attributeRules(b) {
      var c,
          d,
          e = {},
          f = a(b),
          g = b.getAttribute("type");

      for (c in a.validator.methods) {
        "required" === c ? (d = b.getAttribute(c), "" === d && (d = !0), d = !!d) : d = f.attr(c), this.normalizeAttributeRule(e, g, c, d);
      }

      return e.maxlength && /-1|2147483647|524288/.test(e.maxlength) && delete e.maxlength, e;
    },
    dataRules: function dataRules(b) {
      var c,
          d,
          e = {},
          f = a(b),
          g = b.getAttribute("type");

      for (c in a.validator.methods) {
        d = f.data("rule" + c.charAt(0).toUpperCase() + c.substring(1).toLowerCase()), "" === d && (d = !0), this.normalizeAttributeRule(e, g, c, d);
      }

      return e;
    },
    staticRules: function staticRules(b) {
      var c = {},
          d = a.data(b.form, "validator");
      return d.settings.rules && (c = a.validator.normalizeRule(d.settings.rules[b.name]) || {}), c;
    },
    normalizeRules: function normalizeRules(b, c) {
      return a.each(b, function (d, e) {
        if (e === !1) return void delete b[d];

        if (e.param || e.depends) {
          var f = !0;

          switch (_typeof(e.depends)) {
            case "string":
              f = !!a(e.depends, c.form).length;
              break;

            case "function":
              f = e.depends.call(c, c);
          }

          f ? b[d] = void 0 === e.param || e.param : (a.data(c.form, "validator").resetElements(a(c)), delete b[d]);
        }
      }), a.each(b, function (d, e) {
        b[d] = a.isFunction(e) && "normalizer" !== d ? e(c) : e;
      }), a.each(["minlength", "maxlength"], function () {
        b[this] && (b[this] = Number(b[this]));
      }), a.each(["rangelength", "range"], function () {
        var c;
        b[this] && (a.isArray(b[this]) ? b[this] = [Number(b[this][0]), Number(b[this][1])] : "string" == typeof b[this] && (c = b[this].replace(/[\[\]]/g, "").split(/[\s,]+/), b[this] = [Number(c[0]), Number(c[1])]));
      }), a.validator.autoCreateRanges && (null != b.min && null != b.max && (b.range = [b.min, b.max], delete b.min, delete b.max), null != b.minlength && null != b.maxlength && (b.rangelength = [b.minlength, b.maxlength], delete b.minlength, delete b.maxlength)), b;
    },
    normalizeRule: function normalizeRule(b) {
      if ("string" == typeof b) {
        var c = {};
        a.each(b.split(/\s/), function () {
          c[this] = !0;
        }), b = c;
      }

      return b;
    },
    addMethod: function addMethod(b, c, d) {
      a.validator.methods[b] = c, a.validator.messages[b] = void 0 !== d ? d : a.validator.messages[b], c.length < 3 && a.validator.addClassRules(b, a.validator.normalizeRule(b));
    },
    methods: {
      required: function required(b, c, d) {
        if (!this.depend(d, c)) return "dependency-mismatch";

        if ("select" === c.nodeName.toLowerCase()) {
          var e = a(c).val();
          return e && e.length > 0;
        }

        return this.checkable(c) ? this.getLength(b, c) > 0 : void 0 !== b && null !== b && b.length > 0;
      },
      email: function email(a, b) {
        return this.optional(b) || /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/.test(a);
      },
      url: function url(a, b) {
        return this.optional(b) || /^(?:(?:(?:https?|ftp):)?\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})).?)(?::\d{2,5})?(?:[\/?#]\S*)?$/i.test(a);
      },
      date: function () {
        var a = !1;
        return function (b, c) {
          return a || (a = !0, this.settings.debug && window.console && console.warn("The `date` method is deprecated and will be removed in version '2.0.0'.\nPlease don't use it, since it relies on the Date constructor, which\nbehaves very differently across browsers and locales. Use `dateISO`\ninstead or one of the locale specific methods in `localizations/`\nand `additional-methods.js`.")), this.optional(c) || !/Invalid|NaN/.test(new Date(b).toString());
        };
      }(),
      dateISO: function dateISO(a, b) {
        return this.optional(b) || /^\d{4}[\/\-](0?[1-9]|1[012])[\/\-](0?[1-9]|[12][0-9]|3[01])$/.test(a);
      },
      number: function number(a, b) {
        return this.optional(b) || /^(?:-?\d+|-?\d{1,3}(?:,\d{3})+)?(?:\.\d+)?$/.test(a);
      },
      digits: function digits(a, b) {
        return this.optional(b) || /^\d+$/.test(a);
      },
      minlength: function minlength(b, c, d) {
        var e = a.isArray(b) ? b.length : this.getLength(b, c);
        return this.optional(c) || e >= d;
      },
      maxlength: function maxlength(b, c, d) {
        var e = a.isArray(b) ? b.length : this.getLength(b, c);
        return this.optional(c) || e <= d;
      },
      rangelength: function rangelength(b, c, d) {
        var e = a.isArray(b) ? b.length : this.getLength(b, c);
        return this.optional(c) || e >= d[0] && e <= d[1];
      },
      min: function min(a, b, c) {
        return this.optional(b) || a >= c;
      },
      max: function max(a, b, c) {
        return this.optional(b) || a <= c;
      },
      range: function range(a, b, c) {
        return this.optional(b) || a >= c[0] && a <= c[1];
      },
      step: function step(b, c, d) {
        var e,
            f = a(c).attr("type"),
            g = "Step attribute on input type " + f + " is not supported.",
            h = ["text", "number", "range"],
            i = new RegExp("\\b" + f + "\\b"),
            j = f && !i.test(h.join()),
            k = function k(a) {
          var b = ("" + a).match(/(?:\.(\d+))?$/);
          return b && b[1] ? b[1].length : 0;
        },
            l = function l(a) {
          return Math.round(a * Math.pow(10, e));
        },
            m = !0;

        if (j) throw new Error(g);
        return e = k(d), (k(b) > e || l(b) % l(d) !== 0) && (m = !1), this.optional(c) || m;
      },
      equalTo: function equalTo(b, c, d) {
        var e = a(d);
        return this.settings.onfocusout && e.not(".validate-equalTo-blur").length && e.addClass("validate-equalTo-blur").on("blur.validate-equalTo", function () {
          a(c).valid();
        }), b === e.val();
      },
      remote: function remote(b, c, d, e) {
        if (this.optional(c)) return "dependency-mismatch";
        e = "string" == typeof e && e || "remote";
        var f,
            g,
            h,
            i = this.previousValue(c, e);
        return this.settings.messages[c.name] || (this.settings.messages[c.name] = {}), i.originalMessage = i.originalMessage || this.settings.messages[c.name][e], this.settings.messages[c.name][e] = i.message, d = "string" == typeof d && {
          url: d
        } || d, h = a.param(a.extend({
          data: b
        }, d.data)), i.old === h ? i.valid : (i.old = h, f = this, this.startRequest(c), g = {}, g[c.name] = b, a.ajax(a.extend(!0, {
          mode: "abort",
          port: "validate" + c.name,
          dataType: "json",
          data: g,
          context: f.currentForm,
          success: function success(a) {
            var d,
                g,
                h,
                j = a === !0 || "true" === a;
            f.settings.messages[c.name][e] = i.originalMessage, j ? (h = f.formSubmitted, f.resetInternals(), f.toHide = f.errorsFor(c), f.formSubmitted = h, f.successList.push(c), f.invalid[c.name] = !1, f.showErrors()) : (d = {}, g = a || f.defaultMessage(c, {
              method: e,
              parameters: b
            }), d[c.name] = i.message = g, f.invalid[c.name] = !0, f.showErrors(d)), i.valid = j, f.stopRequest(c, j);
          }
        }, d)), "pending");
      }
    }
  });
  var b,
      c = {};
  return a.ajaxPrefilter ? a.ajaxPrefilter(function (a, b, d) {
    var e = a.port;
    "abort" === a.mode && (c[e] && c[e].abort(), c[e] = d);
  }) : (b = a.ajax, a.ajax = function (d) {
    var e = ("mode" in d ? d : a.ajaxSettings).mode,
        f = ("port" in d ? d : a.ajaxSettings).port;
    return "abort" === e ? (c[f] && c[f].abort(), c[f] = b.apply(this, arguments), c[f]) : b.apply(this, arguments);
  }), a;
});
$(document).ready(function () {
  $('select').niceSelect();
  $('[bannerSlider_js]').each(function () {
    new Swiper($(this)[0], {
      direction: 'horizontal',
      slidesPerView: 1,
      speed: 700,
      loop: true,
      fadeEffect: {
        crossFade: true
      },
      effect: 'fade',
      autoplay: {
        delay: 3600,
        disableOnInteraction: false
      },
      on: {
        beforeInit: function beforeInit() {
          var slides = this.slides.length;
          var slidesPerView = this.params.slidesPerView; // Проверка количества слайдов

          if (slides <= slidesPerView) {
            this.params.loop = false; // Отключаем loop
          } else {
            this.params.loop = true;
          }
        }
      }
    });
  });
  $('[newsSlider_js]').each(function () {
    var swiper = new Swiper($(this)[0], {
      direction: 'horizontal',
      slidesPerView: 1.7,
      spaceBetween: 17,
      speed: 700,
      scrollbar: {
        enable: true,
        el: ".swiper-scrollbar",
        draggable: true,
        hide: false
      }
    });
  });
  $('[plusSizeSlider_js]').each(function () {
    var swiper = new Swiper($(this)[0], {
      direction: 'horizontal',
      slidesPerView: 1,
      spaceBetween: 10,
      speed: 700,
      scrollbar: {
        enable: true,
        el: ".swiper-scroll",
        draggable: true,
        hide: false
      },
      navigation: {
        nextEl: '.section-plus-size .swiper__navigation-btn-next',
        prevEl: '.section-plus-size .swiper__navigation-btn-prev'
      },
      breakpoints: {
        0: {
          scrollbar: {
            enabled: true
          }
        },
        767: {
          slidesPerView: 3,
          spaceBetween: 18,
          scrollbar: {
            enabled: false
          }
        }
      }
    });
  });
  $('[galleryGridSwiper_JS]').each(function () {
    var swiper = new Swiper($(this)[0], {
      speed: 300,
      slidesPerView: 1,
      spaceBetween: 10,
      effect: 'fade',
      fadeEffect: {
        crossFade: true
      },
      navigation: {
        nextEl: '.swiper-navigation__btn-next',
        prevEl: '.swiper-navigation__btn-prev'
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
        renderBullet: function renderBullet(index, className) {
          return '<button class="' + className + '">' + (index + 1) + '</button>';
        }
      },
      on: {
        slideChange: function slideChange() {
          var el = document.querySelector('.section-main-gallery');
          var isSticky = document.querySelector('.header.fixed');
          var headerHeight = 0;
          isSticky ? headerHeight = document.querySelector('.header.fixed').offsetHeight : 0;
          var elementTop = el.offsetTop;

          if (el) {
            window.scrollTo({
              top: elementTop - headerHeight,
              behavior: 'smooth'
            });
          }
        }
      }
    });
  });
  $('[productGallerySlider_js]').each(function () {
    var swiper = new Swiper($(this)[0], {
      direction: 'horizontal',
      slidesPerView: 1,
      spaceBetween: 10,
      pagination: {
        el: ".swiper-pagination",
        bullets: true,
        clickable: true
      }
    });
  });
  $('[categoriesSlider_js]').each(function () {
    var swiper = new Swiper($(this)[0], {
      direction: 'horizontal',
      slidesPerView: 2.2,
      spaceBetween: 64,
      speed: 700,
      scrollbar: {
        el: ".swiper-scrollbar",
        draggable: true,
        hide: false
      },
      // navigation: {
      //   nextEl: '.section-sertificates .swiper__navigation-btn-next',
      //   prevEl: '.section-sertificates .swiper__navigation-btn-prev',
      // },
      breakpoints: {
        0: {
          slidesPerView: 2.2,
          spaceBetween: 10,
          scrollbar: {
            enabled: true
          }
        },
        767: {
          freeMode: true,
          slidesPerView: 4.5,
          spaceBetween: 20,
          scrollbar: {
            enabled: false
          }
        }
      }
    });
  });
  var swiperMarque = new Swiper('.section-partners__swiper', {
    slidesPerView: 3,
    spaceBetween: 20,
    speed: 5000,
    loop: true,
    allowTouchMove: false,
    // можно ещё отключить свайп
    autoplay: {
      delay: 0,
      disableOnInteraction: false // или сделать так, чтобы восстанавливался autoplay после взаимодействия

    },
    breakpoints: {
      992: {
        slidesPerView: 4,
        spaceBetween: 50
      }
    }
  });

  function calculateSpaceBetween() {
    var marqueeContainer = document.querySelector('.section-categories__marquee');

    if (marqueeContainer) {
      var containerWidth = marqueeContainer.offsetWidth; // Получаем ширину контейнера
      // Пример расчета spaceBetween (можете настроить по своему усмотрению)

      var spaceBetween = Math.max(280, Math.round(containerWidth * 93 / 100)); // Минимум 100, иначе 1/10 ширины контейнера

      return spaceBetween;
    }
  }

  var swiperMarqueText = new Swiper('.section-categories__marquee', {
    slidesPerView: 'auto',
    spaceBetween: calculateSpaceBetween(),
    speed: 13000,
    loop: true,
    allowTouchMove: false,
    // можно ещё отключить свайп
    autoplay: {
      delay: 0,
      disableOnInteraction: false // или сделать так, чтобы восстанавливался autoplay после взаимодействия

    },
    on: {
      resize: function resize(swiper) {
        swiper.params.spaceBetween = calculateSpaceBetween();
        swiper.update();
      }
    }
  });

  function calculateSpaceBetweenPoll() {
    var marqueeContainer = document.querySelector('.poll-close__marquee');

    if (marqueeContainer) {
      var containerWidth = marqueeContainer.offsetWidth; // Получаем ширину контейнера
      // Пример расчета spaceBetween (можете настроить по своему усмотрению)

      var spaceBetween = Math.max(50, Math.round(containerWidth * 8.3 / 100));
      return spaceBetween;
    }
  }

  var swiperPollMarquee1 = new Swiper('.poll-close__marquee_top', {
    slidesPerView: 'auto',
    spaceBetween: calculateSpaceBetweenPoll(),
    speed: 22000,
    loop: true,
    allowTouchMove: false,
    // можно ещё отключить свайп
    autoplay: {
      delay: 0,
      disableOnInteraction: false // или сделать так, чтобы восстанавливался autoplay после взаимодействия

    },
    on: {
      resize: function resize(swiper) {
        swiper.params.spaceBetween = calculateSpaceBetweenPoll();
        swiper.update();
      }
    }
  });
  var swiperPollMarquee2 = new Swiper('.poll-close__marquee_bottom', {
    slidesPerView: 'auto',
    spaceBetween: calculateSpaceBetweenPoll(),
    speed: 35000,
    loop: true,
    initialSlide: 2,
    allowTouchMove: false,
    // можно ещё отключить свайп
    autoplay: {
      delay: 0,
      disableOnInteraction: false // или сделать так, чтобы восстанавливался autoplay после взаимодействия

    },
    on: {
      resize: function resize(swiper) {
        swiper.params.spaceBetween = calculateSpaceBetweenPoll();
        swiper.update();
      }
    }
  });
  var gallary__swiper = new Swiper('.gallary__swiper', {
    slidesPerView: 4,
    spaceBetween: '1%',
    watchSlidesProgress: true,
    scrollbar: {
      el: ".swiper-scrollbar",
      draggable: true,
      hide: false
    },
    autoplay: {
      delay: 2500
    },
    pagination: {
      el: ".gallary__wrapper .swiper-pagination"
    },
    breakpoints: {
      0: {
        slidesPerView: 1.5,
        spaceBetween: '1%',
        scrollbar: {
          enabled: true
        },
        pagination: {
          enabled: false
        }
      },
      578: {
        slidesPerView: 2,
        spaceBetween: '1%',
        scrollbar: {
          enabled: true
        },
        pagination: {
          enabled: false
        }
      },
      767: {
        slidesPerView: 4,
        spaceBetween: '1%',
        scrollbar: {
          enabled: false
        },
        pagination: {
          enabled: true
        }
      }
    }
  });
  $('.tabs-slider').each(function () {
    var $container = $(this).find('.swiper-container');
    var swiperTabs = new Swiper($container, {
      direction: 'horizontal',
      freeMode: true,
      slidesPerView: 'auto',
      spaceBetween: 10,
      touchStartForcePreventDefault: true
    });
  });
  $('body').on('click', '[agreementControl_JS]', function () {
    var $this = $(this),
        $form = $this.closest('form'),
        $input = $form.find('[agreementControlCheckbox_JS]'),
        $btn = $form.find('[agreementControlBtn_JS]');

    if ($this.hasClass('checked')) {
      $this.removeClass('checked');
      $input.removeAttr('checked');
      $btn.addClass('disabled');
      $btn.attr('disabled', true);
    } else {
      $this.addClass('checked');
      $input.attr('checked', '');
      $btn.removeClass('disabled');
      $btn.removeAttr('disabled');
    }
  });
  $('body').on('click', '[readMoreBtn_JS]', function () {
    var $btn = $(this),
        $parent = $btn.closest('[readMoreContainer_JS]');
    $parent.addClass('open');
  });
  $("[toTop_JS]").click(function () {
    $("html, body").animate({
      scrollTop: 0
    }, 0);
    return false;
  });
  $("[anchorLink_JS]").on("click", function (event) {
    event.preventDefault();
    var id = $(this).attr('href');

    if ($(window).innerWidth() < 769) {
      var headerHeight = $(window).innerWidth();
      headerHeight = headerHeight / 100 * 29.6875;
    } else {
      var headerHeight = $(window).innerWidth();
      headerHeight = headerHeight / 100 * 5, 2548607461902259590120861797162;
    }

    if ($(id).length > 0) {
      var top = $(id).offset().top - headerHeight;
      $('body,html').animate({
        scrollTop: top
      }, 1500);
    } else {
      //             console.log(1);
      window.location.href = "index.html" + id;
    }
  });
  var hash = window.location.hash;

  if (hash != "") {
    if ($(window).innerWidth() < 769) {
      var headerHeight = $(window).innerWidth();
      headerHeight = headerHeight / 100 * 29.6875;
    } else {
      var headerHeight = $(window).innerWidth();
      headerHeight = headerHeight / 100 * 5, 2548607461902259590120861797162;
    }

    if ($(hash).length > 0) {
      var offset = $(hash).offset().top - headerHeight;
      $('body,html').animate({
        scrollTop: offset
      }, 1500);
    }
  }

  ;
  var namePattern = /^[a-zA-Zа-яА-Я\s]+$/; // Буквы и пробелы

  var emailPattern = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/; // Email

  var passwordPattern = /^[a-zA-Z0-9!@#$%^&*()_+]{6,}$/;
  $.validator.addMethod('pattern', function (value, element, pattern) {
    // Проверяем, является ли значение пустым (если поле не обязательно) или соответствует регулярному выражению
    return this.optional(element) || pattern.test(value);
  }, 'Поле содержит некорректное значение');
  $('[formValidate_JS]').each(function () {
    var form = $(this);
    $(this).validate({
      errorClass: "validate_error",
      rules: {
        name: {
          required: true,
          pattern: namePattern,
          // Метод проверки букв и пробелов
          minlength: 2
        },
        phone: {
          required: true,
          minlength: 7 // Метод проверки повторяющихся подряд символов

        },
        login: {
          required: true,
          // Поле обязательно
          minlength: 3,
          // Минимальная длина 3 символа
          maxlength: 20,
          // Максимальная длина 20 символов
          pattern: /^[a-zA-Z0-9_-]+$/ // Допустимые символы (буквы, цифры, точки, подчеркивания и дефисы)

        },
        email: {
          pattern: emailPattern // Проверка корректности email

        },
        password: {
          required: true,
          minlength: 6,
          // Минимальная длина пароля
          pattern: passwordPattern // Пример паттерна для пароля

        }
      },
      messages: {
        name: {
          required: "Это поле обязательно для заполнения.",
          minlength: "Минимальная длина имени составляет {0} символов.",
          pattern: "Имя может содержать только буквы и пробелы."
        },
        phone: {
          required: "Телефон является обязательным.",
          minlength: "Минимальная длина телефона составляет {0} символов."
        },
        email: {
          required: "Email является обязательным.",
          pattern: "Введите корректный email адрес."
        },
        login: {
          required: "Введите логин.",
          minlength: "Минимальная длина имени пользователя составляет {0} символов.",
          maxlength: "Максимальная длина имени пользователя составляет {0} символов.",
          pattern: "Имя пользователя может содержать только буквы, цифры, подчеркивания и дефисы."
        },
        password: {
          required: "Пароль является обязательным.",
          minlength: "Минимальная длина пароля составляет {0} символов.",
          pattern: "Пароль может содержать только буквы, цифры и специальные символы."
        }
      },
      errorPlacement: function errorPlacement(error, element) {
        error.insertBefore(element);
      },
      invalidHandler: function invalidHandler(event, validator) {}
    });
  }); // Обработка события input для запрещенных символов

  $('input[name="name"]').on('input', function () {
    this.value = this.value.replace(/[^a-zA-Zа-яА-Я\s]/g, '');
  });
  $('input[name="email"]').on('input', function () {
    this.value = this.value.replace(/[^a-zA-Z0-9_.+-@]/g, ''); // Разрешаем только допустимые символы для email
  });
  $('input[name="password"]').on('input', function () {
    this.value = this.value.replace(/[^a-zA-Z0-9!@#$%^&*()_+]/g, ''); // Разрешаем только допустимые символы для password
  }); // Переключение видимости пароля

  $('#togglePassword').on('click', function () {
    var passwordInput = $('input[name="password"]');
    var type = passwordInput.attr('type') === 'password' ? 'text' : 'password';
    passwordInput.attr('type', type);
    type === 'password' ? $(this).addClass('close') : $(this).removeClass('close');
  });
  $('[headerBtn_JS]').on('click', function () {
    if ($(this).hasClass('active')) {
      menuClose();
    } else {
      menuOpen();
    }
  });
  $('.header__nav a').on('click', function () {
    if ($('[headerBtn_JS]').hasClass('open')) {
      menuClose();
    }
  });

  function slideToggleSection() {
    $('[toggleItem_JS]').each(function () {
      $(this).removeClass('open');
      $(this).siblings().each(function () {
        if ($(window).outerWidth() < 992) {
          $(this).css('display', 'none');
        } else {
          $(this).removeAttr('style');
        }
      });
    });

    if ($(window).outerWidth() < 992) {
      $('.product-card [toggleItem_JS]').first().addClass('open');
      $('.product-card [toggleItem_JS]').first().siblings().removeAttr('style');
    }

    return;
  }

  $('[toggleItem_JS]').each(function () {
    $(this).on('click', function () {
      if ($(window).outerWidth() < 992) {
        $(this).toggleClass('open');
        $(this).siblings().slideToggle();
      }
    });
  });
  slideToggleSection(); // Dropdown

  function rightDropdown() {
    $('.menu__item.dropdown').each(function () {
      var $submenu = $(this).find('.submenu');
      var $offsetToLeft = $submenu.offset().left + $submenu.outerWidth();

      if ($(window).outerWidth() > 992) {
        if ($offsetToLeft > $(window).outerWidth()) {
          $submenu.css('transform', "translateX(-".concat($offsetToLeft - $(window).outerWidth() + 30, "px)"));
        }
      } else {
        $submenu.removeAttr('style');
      }
    });
  }

  rightDropdown();
  var windowWidth = $(window).outerWidth();
  $(window).on('resize', function () {
    if ($(window).outerWidth() !== windowWidth) {
      rightDropdown();
      slideToggleSection();
    }
  });
  $('.menu__item.dropdown').on('mouseenter', function () {
    if ($(window).outerWidth() > 992) {
      $(this).addClass('is-active');
      $(this).find('.submenu').addClass('is-active');
    }
  });
  $('.menu__item.dropdown').on('mouseleave', function () {
    if ($(window).outerWidth() > 992) {
      $(this).removeClass('is-active');
      $(this).find('.submenu').removeClass('is-active');
    }
  });
  $('.menu__dropdown-btn').each(function () {
    $(this).on('click', function (e) {
      if ($(window).outerWidth() <= 992) {
        var $isOpen = $(this).closest('.menu__item.dropdown').hasClass('is-active'); // $('.menu__dropdown-btn').each(function() {
        //   $(this).closest('.menu__item.dropdown').removeClass('is-active');
        //   $(this).siblings('.submenu').removeClass('is-active');
        //   $(this).siblings('.submenu').slideUp();
        // });

        if ($isOpen) {
          // return;
          $(this).closest('.menu__item.dropdown').removeClass('is-active');
          $(this).siblings('.submenu').removeClass('is-active');
          $(this).siblings('.submenu').slideUp();
        } else {
          $(this).closest('.menu__item.dropdown').addClass('is-active');
          $(this).siblings('.submenu').addClass('is-active');
          $(this).siblings('.submenu').slideDown();
        }
      }
    });
  });
}); // $(document).on('click', function (e) {
//   if ($(window).outerWidth() <= 992) {
//     if ($(e.target).closest('.menu__item.dropdown.is-active').length
//     && !$(e.target).closest('.menu__dropdown-btn.is-active').length) {
//         // клик внутри элемента
//         return;
//     }
//     // клик снаружи элемента
//     $('.menu__item.dropdown.is-active').removeClass('is-active');
//     $('.submenu.is-active').slideUp();
//     $('.submenu.is-active').removeClass('is-active');
//   }
// });

$('[loadMoreBtn_JS]').on('click', function () {
  $(this).closest('[loadMoreContainer_JS]').addClass('md-all-items-visible');
});

function menuOpen() {
  $('[headerBtn_JS]').addClass('active');
  $('[headerBtn_JS]').closest('header').find('.header__bottom').addClass('open');
  $('html').css('overflow', 'hidden');
}

function menuClose() {
  $('[headerBtn_JS]').removeClass('active');
  $('[headerBtn_JS]').closest('header').find('.header__bottom').removeClass('open');
  $('html').removeAttr('style');
}

$(document).ready(function () {
  $('body').on('click', '[popupOpen]', function () {
    popupClose();
    var $elem = $(this),
        target = $elem.attr('popupOpen');

    if (target == 'promotion-popup' || target == 'service-popup' || target == 'product-popup') {
      var id = $elem.attr('data-hidden-id');
      $('[popupID="' + target + '"]').find('[hiddenValue_JS]').attr('value', id);
    }

    popupOpen(target);
  }); // setTimeout(function() {
  //   popupOpen('marketing-news');
  // }, 30000);
  // setTimeout(function() {
  //   popupOpen('after-sixty');
  // }, 60000);

  $('body').on('click', '[popupClose_JS]', function () {
    popupClose();
  });
  $('body').append('<div class="download-popup-trigger"></div>');
  $('body .download-popup-trigger').hover(function () {
    if (localStorage.getItem('downloadPopupState') === 'true') {
      popupOpen('download-popup');
      localStorage.setItem('downloadPopupState', 'false');
    }

    ;
  });
});

if (localStorage.getItem('downloadPopupState') === null) {
  localStorage.setItem('downloadPopupState', 'true');
}

var popupClose = function popupClose() {
  $('.popup.open').find('input').val('');
  $('.popup.open').find('textarea').val('');
  $('.popup.open').find('.form-file').each(function () {
    var text = $(this).attr('data-text');
    $(this).find('div p').text(text);
  });
  $('.popup.open').find('.form-stars label:last-child').trigger('click');
  $('.popup .validate_error').each(function () {
    $(this).removeClass('validate_error');
  });
  $('html').removeAttr('style');
  $('.popup.open').addClass('fade');
  $('.popup.open').removeClass('open');
};

function come(elem) {
  var docViewTop = $(window).scrollTop(),
      docViewBottom = docViewTop + $(window).height(),
      elemTop = $(elem).offset().top,
      elemBottom = elemTop + $(elem).height();
  return elemBottom <= docViewBottom && elemTop >= docViewTop;
}

var popupOpen = function popupOpen(e) {
  popupClose();
  var target = e;
  var width = $('.page').width();
  $('html').css('overflow', 'hidden');
  $('[popupID="' + target + '"]').addClass('open');
  $('[popupID="' + target + '"]').removeClass('fade');

  if ($('[popupID="' + target + '"]').hasClass('product-popup')) {
    // clearTimeout(galleryThumbsSwiperUpdateTimeout);
    galleryThumbsSwiper.update();

    if ($(window).outerWidth() <= 767) {
      setTimeout(function () {
        galleryThumbsSwiper.update();
      }, 10);
    }
  }
};

function fixedHeader() {
  var height = jQuery(window).scrollTop();
  var headerHeight = $('.header').innerHeight();

  if (height >= headerHeight) {
    jQuery('.header').addClass('fixed');
  } else {
    jQuery('.header').removeClass('fixed');
  }
}

fixedHeader();
jQuery(window).scroll(function ($) {
  fixedHeader();
});
$(window).on('resize', function () {
  fixedHeader();
});
$(window).on('scroll', function () {
  var ratio = $(document).scrollTop() / (($(document).height() - $(window).height()) / 100);
  $('.header-progress').width(ratio + "%");
});
$(window).scroll(function () {
  var scroll = $(window).scrollTop();

  if (scroll >= $(document).height() / 3) {
    $('[toTop_JS]').addClass('visible');
  } else {
    $('[toTop_JS]').removeClass('visible');
  }

  ;
  $('[onScrollDisplay_JS]').each(function () {
    var el = $(this);

    if (come(el)) {
      el.addClass('visible');
    }

    ;
  });
});
$('.header__search-open').on('click', function (e) {
  e.preventDefault();
  $(this).parents('.search-form').toggleClass('open');
});
$('.header__search-close-btn').on('click', function (e) {
  e.preventDefault();
  $(this).parents('.search-form').removeClass('open');
  $(this).parents('.search-form').find('input').val('');
});
$('.winners-category-list__item.category button').on('click', function () {
  $(this).siblings('ul').slideToggle();
}); // $('img').each( function(e) {
//   $(this).addClass('lazy');
// });
// let lazyLoadInstance = new LazyLoad();
// TIMER

var pollDateStart = $('#poll-timer').data('date');

if (pollDateStart) {
  var countDownDate = new Date(pollDateStart).getTime(); // Update the count down every 1 second

  var x = setInterval(function () {
    // Get today's date and time
    var now = new Date().getTime(); // Find the distance between now and the count down date

    var distance = countDownDate - now; // Time calculations for days, hours, minutes and seconds

    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor(distance % (1000 * 60 * 60 * 24) / (1000 * 60 * 60));
    var minutes = Math.floor(distance % (1000 * 60 * 60) / (1000 * 60));
    var seconds = Math.floor(distance % (1000 * 60) / 1000);
    var daysEl = $('#poll-timer').find('.section-poll__timer-days .number');
    var hoursEl = $('#poll-timer').find('.section-poll__timer-hours .number');
    var minutesEl = $('#poll-timer').find('.section-poll__timer-minutes .number');
    var secondsEl = $('#poll-timer').find('.section-poll__timer-seconds .number');
    daysEl.text(days);
    hoursEl.text(hours);
    minutesEl.text(minutes);
    secondsEl.text(seconds); // If the count down is finished, write some text

    if (distance < 0) {
      clearInterval(x);
      document.getElementById("poll-timer").innerHTML = "<div class='page-title title'>Голосование скоро начнется!</div>";
    }
  }, 1000);
}
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbImUiLCJ0IiwibW9kdWxlIiwiZXhwb3J0cyIsImRvY3VtZW50IiwiRXJyb3IiLCJ3aW5kb3ciLCJDIiwiciIsIk9iamVjdCIsImdldFByb3RvdHlwZU9mIiwicyIsInNsaWNlIiwiZyIsImZsYXQiLCJjYWxsIiwiY29uY2F0IiwiYXBwbHkiLCJ1IiwicHVzaCIsImkiLCJpbmRleE9mIiwibiIsIm8iLCJ0b1N0cmluZyIsInYiLCJoYXNPd25Qcm9wZXJ0eSIsImEiLCJsIiwieSIsIm0iLCJub2RlVHlwZSIsIngiLCJFIiwiYyIsInR5cGUiLCJzcmMiLCJub25jZSIsIm5vTW9kdWxlIiwiYiIsImNyZWF0ZUVsZW1lbnQiLCJ0ZXh0IiwiZ2V0QXR0cmlidXRlIiwic2V0QXR0cmlidXRlIiwiaGVhZCIsImFwcGVuZENoaWxkIiwicGFyZW50Tm9kZSIsInJlbW92ZUNoaWxkIiwidyIsImYiLCJTIiwiZm4iLCJpbml0IiwicCIsImxlbmd0aCIsInByb3RvdHlwZSIsImpxdWVyeSIsImNvbnN0cnVjdG9yIiwidG9BcnJheSIsImdldCIsInB1c2hTdGFjayIsIm1lcmdlIiwicHJldk9iamVjdCIsImVhY2giLCJtYXAiLCJhcmd1bWVudHMiLCJmaXJzdCIsImVxIiwibGFzdCIsImV2ZW4iLCJncmVwIiwib2RkIiwiZW5kIiwic29ydCIsInNwbGljZSIsImV4dGVuZCIsImlzUGxhaW5PYmplY3QiLCJBcnJheSIsImlzQXJyYXkiLCJleHBhbmRvIiwiTWF0aCIsInJhbmRvbSIsInJlcGxhY2UiLCJpc1JlYWR5IiwiZXJyb3IiLCJub29wIiwiaXNFbXB0eU9iamVjdCIsImdsb2JhbEV2YWwiLCJtYWtlQXJyYXkiLCJpbkFycmF5IiwiZ3VpZCIsInN1cHBvcnQiLCJTeW1ib2wiLCJpdGVyYXRvciIsInNwbGl0IiwidG9Mb3dlckNhc2UiLCJkIiwiaCIsIlQiLCJEYXRlIiwiayIsInVlIiwiQSIsIk4iLCJEIiwiaiIsInEiLCJwb3AiLCJMIiwiSCIsIk8iLCJQIiwiUiIsIk0iLCJJIiwiVyIsIkYiLCJCIiwiUmVnRXhwIiwiJCIsIl8iLCJ6IiwiVSIsIlgiLCJWIiwiRyIsIklEIiwiQ0xBU1MiLCJUQUciLCJBVFRSIiwiUFNFVURPIiwiQ0hJTEQiLCJib29sIiwibmVlZHNDb250ZXh0IiwiWSIsIlEiLCJKIiwiSyIsIloiLCJlZSIsInRlIiwibmUiLCJTdHJpbmciLCJmcm9tQ2hhckNvZGUiLCJyZSIsImllIiwiY2hhckNvZGVBdCIsIm9lIiwiYWUiLCJiZSIsImRpc2FibGVkIiwibm9kZU5hbWUiLCJkaXIiLCJuZXh0IiwiY2hpbGROb2RlcyIsInNlIiwib3duZXJEb2N1bWVudCIsImV4ZWMiLCJnZXRFbGVtZW50QnlJZCIsImlkIiwiZ2V0RWxlbWVudHNCeVRhZ05hbWUiLCJnZXRFbGVtZW50c0J5Q2xhc3NOYW1lIiwicXNhIiwidGVzdCIsInllIiwic2NvcGUiLCJ4ZSIsImpvaW4iLCJxdWVyeVNlbGVjdG9yQWxsIiwicmVtb3ZlQXR0cmlidXRlIiwiY2FjaGVMZW5ndGgiLCJzaGlmdCIsImxlIiwiY2UiLCJmZSIsImF0dHJIYW5kbGUiLCJwZSIsInNvdXJjZUluZGV4IiwibmV4dFNpYmxpbmciLCJkZSIsImhlIiwiZ2UiLCJpc0Rpc2FibGVkIiwidmUiLCJpc1hNTCIsIm5hbWVzcGFjZVVSSSIsImRvY3VtZW50RWxlbWVudCIsInNldERvY3VtZW50IiwiZGVmYXVsdFZpZXciLCJ0b3AiLCJhZGRFdmVudExpc3RlbmVyIiwiYXR0YWNoRXZlbnQiLCJhdHRyaWJ1dGVzIiwiY2xhc3NOYW1lIiwiY3JlYXRlQ29tbWVudCIsImdldEJ5SWQiLCJnZXRFbGVtZW50c0J5TmFtZSIsImZpbHRlciIsImZpbmQiLCJnZXRBdHRyaWJ1dGVOb2RlIiwidmFsdWUiLCJpbm5lckhUTUwiLCJtYXRjaGVzU2VsZWN0b3IiLCJtYXRjaGVzIiwid2Via2l0TWF0Y2hlc1NlbGVjdG9yIiwibW96TWF0Y2hlc1NlbGVjdG9yIiwib01hdGNoZXNTZWxlY3RvciIsIm1zTWF0Y2hlc1NlbGVjdG9yIiwiZGlzY29ubmVjdGVkTWF0Y2giLCJjb21wYXJlRG9jdW1lbnRQb3NpdGlvbiIsImNvbnRhaW5zIiwic29ydERldGFjaGVkIiwidW5zaGlmdCIsImF0dHIiLCJzcGVjaWZpZWQiLCJlc2NhcGUiLCJ1bmlxdWVTb3J0IiwiZGV0ZWN0RHVwbGljYXRlcyIsInNvcnRTdGFibGUiLCJnZXRUZXh0IiwidGV4dENvbnRlbnQiLCJmaXJzdENoaWxkIiwibm9kZVZhbHVlIiwic2VsZWN0b3JzIiwiY3JlYXRlUHNldWRvIiwibWF0Y2giLCJyZWxhdGl2ZSIsInByZUZpbHRlciIsImxhc3RDaGlsZCIsInVuaXF1ZUlEIiwicHNldWRvcyIsInNldEZpbHRlcnMiLCJub3QiLCJoYXMiLCJsYW5nIiwidGFyZ2V0IiwibG9jYXRpb24iLCJoYXNoIiwicm9vdCIsImZvY3VzIiwiYWN0aXZlRWxlbWVudCIsImhhc0ZvY3VzIiwiaHJlZiIsInRhYkluZGV4IiwiZW5hYmxlZCIsImNoZWNrZWQiLCJzZWxlY3RlZCIsInNlbGVjdGVkSW5kZXgiLCJlbXB0eSIsInBhcmVudCIsImhlYWRlciIsImlucHV0IiwiYnV0dG9uIiwibHQiLCJndCIsIm50aCIsInJhZGlvIiwiY2hlY2tib3giLCJmaWxlIiwicGFzc3dvcmQiLCJpbWFnZSIsInN1Ym1pdCIsInJlc2V0IiwibWUiLCJ3ZSIsIlRlIiwiQ2UiLCJFZSIsImZpbHRlcnMiLCJ0b2tlbml6ZSIsImNvbXBpbGUiLCJzZWxlY3RvciIsInNlbGVjdCIsImRlZmF1bHRWYWx1ZSIsImV4cHIiLCJ1bmlxdWUiLCJpc1hNTERvYyIsImVzY2FwZVNlbGVjdG9yIiwiaXMiLCJwYXJzZUhUTUwiLCJyZWFkeSIsImNoaWxkcmVuIiwiY29udGVudHMiLCJwcmV2IiwiY2xvc2VzdCIsImluZGV4IiwicHJldkFsbCIsImFkZCIsImFkZEJhY2siLCJwYXJlbnRzIiwicGFyZW50c1VudGlsIiwibmV4dEFsbCIsIm5leHRVbnRpbCIsInByZXZVbnRpbCIsInNpYmxpbmdzIiwiY29udGVudERvY3VtZW50IiwiY29udGVudCIsInJldmVyc2UiLCJwcm9taXNlIiwiZG9uZSIsImZhaWwiLCJ0aGVuIiwiQ2FsbGJhY2tzIiwib25jZSIsInN0b3BPbkZhbHNlIiwibWVtb3J5IiwicmVtb3ZlIiwiZGlzYWJsZSIsImxvY2siLCJsb2NrZWQiLCJmaXJlV2l0aCIsImZpcmUiLCJmaXJlZCIsIkRlZmVycmVkIiwic3RhdGUiLCJhbHdheXMiLCJwaXBlIiwicHJvZ3Jlc3MiLCJub3RpZnkiLCJyZXNvbHZlIiwicmVqZWN0IiwiVHlwZUVycm9yIiwibm90aWZ5V2l0aCIsInJlc29sdmVXaXRoIiwiZXhjZXB0aW9uSG9vayIsInN0YWNrVHJhY2UiLCJyZWplY3RXaXRoIiwiZ2V0U3RhY2tIb29rIiwic2V0VGltZW91dCIsIndoZW4iLCJjb25zb2xlIiwid2FybiIsIm5hbWUiLCJtZXNzYWdlIiwic3RhY2siLCJyZWFkeUV4Y2VwdGlvbiIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJyZWFkeVdhaXQiLCJyZWFkeVN0YXRlIiwiZG9TY3JvbGwiLCJ0b1VwcGVyQ2FzZSIsInVpZCIsImNhY2hlIiwiZGVmaW5lUHJvcGVydHkiLCJjb25maWd1cmFibGUiLCJzZXQiLCJhY2Nlc3MiLCJoYXNEYXRhIiwiSlNPTiIsInBhcnNlIiwiZGF0YSIsInJlbW92ZURhdGEiLCJfZGF0YSIsIl9yZW1vdmVEYXRhIiwicXVldWUiLCJkZXF1ZXVlIiwiX3F1ZXVlSG9va3MiLCJzdG9wIiwiY2xlYXJRdWV1ZSIsInNvdXJjZSIsImNvbXBvc2VkIiwiZ2V0Um9vdE5vZGUiLCJzdHlsZSIsImRpc3BsYXkiLCJjc3MiLCJjdXIiLCJjc3NOdW1iZXIiLCJ1bml0Iiwic3RhcnQiLCJib2R5Iiwic2hvdyIsImhpZGUiLCJ0b2dnbGUiLCJjcmVhdGVEb2N1bWVudEZyYWdtZW50IiwiY2hlY2tDbG9uZSIsImNsb25lTm9kZSIsIm5vQ2xvbmVDaGVja2VkIiwib3B0aW9uIiwidGhlYWQiLCJjb2wiLCJ0ciIsInRkIiwiX2RlZmF1bHQiLCJ0Ym9keSIsInRmb290IiwiY29sZ3JvdXAiLCJjYXB0aW9uIiwidGgiLCJvcHRncm91cCIsImh0bWxQcmVmaWx0ZXIiLCJjcmVhdGVUZXh0Tm9kZSIsIlNlIiwia2UiLCJvZmYiLCJldmVudCIsIkFlIiwibmFtZXNwYWNlIiwiaGFuZGxlciIsImlzVHJpZ2dlciIsInNwZWNpYWwiLCJkZWxlZ2F0ZVR5cGUiLCJzdG9wUHJvcGFnYXRpb24iLCJzdG9wSW1tZWRpYXRlUHJvcGFnYXRpb24iLCJwcmV2ZW50RGVmYXVsdCIsInRyaWdnZXIiLCJFdmVudCIsImdsb2JhbCIsImV2ZW50cyIsImNyZWF0ZSIsImhhbmRsZSIsInRyaWdnZXJlZCIsImRpc3BhdGNoIiwiYmluZFR5cGUiLCJvcmlnVHlwZSIsImRlbGVnYXRlQ291bnQiLCJzZXR1cCIsInRlYXJkb3duIiwicmVtb3ZlRXZlbnQiLCJmaXgiLCJkZWxlZ2F0ZVRhcmdldCIsInByZURpc3BhdGNoIiwiaGFuZGxlcnMiLCJpc1Byb3BhZ2F0aW9uU3RvcHBlZCIsImN1cnJlbnRUYXJnZXQiLCJlbGVtIiwiaXNJbW1lZGlhdGVQcm9wYWdhdGlvblN0b3BwZWQiLCJybmFtZXNwYWNlIiwiaGFuZGxlT2JqIiwicmVzdWx0IiwicG9zdERpc3BhdGNoIiwiYWRkUHJvcCIsImVudW1lcmFibGUiLCJvcmlnaW5hbEV2ZW50Iiwid3JpdGFibGUiLCJsb2FkIiwibm9CdWJibGUiLCJjbGljayIsImJlZm9yZXVubG9hZCIsInJldHVyblZhbHVlIiwiaXNEZWZhdWx0UHJldmVudGVkIiwiZGVmYXVsdFByZXZlbnRlZCIsInJlbGF0ZWRUYXJnZXQiLCJ0aW1lU3RhbXAiLCJub3ciLCJpc1NpbXVsYXRlZCIsImFsdEtleSIsImJ1YmJsZXMiLCJjYW5jZWxhYmxlIiwiY2hhbmdlZFRvdWNoZXMiLCJjdHJsS2V5IiwiZGV0YWlsIiwiZXZlbnRQaGFzZSIsIm1ldGFLZXkiLCJwYWdlWCIsInBhZ2VZIiwic2hpZnRLZXkiLCJ2aWV3IiwiY29kZSIsImNoYXJDb2RlIiwia2V5Iiwia2V5Q29kZSIsImJ1dHRvbnMiLCJjbGllbnRYIiwiY2xpZW50WSIsIm9mZnNldFgiLCJvZmZzZXRZIiwicG9pbnRlcklkIiwicG9pbnRlclR5cGUiLCJzY3JlZW5YIiwic2NyZWVuWSIsInRhcmdldFRvdWNoZXMiLCJ0b0VsZW1lbnQiLCJ0b3VjaGVzIiwid2hpY2giLCJibHVyIiwibW91c2VlbnRlciIsIm1vdXNlbGVhdmUiLCJwb2ludGVyZW50ZXIiLCJwb2ludGVybGVhdmUiLCJvbiIsIm9uZSIsIk5lIiwiRGUiLCJqZSIsInFlIiwiTGUiLCJIZSIsIk9lIiwiUGUiLCJodG1sIiwiY2xvbmUiLCJfZXZhbFVybCIsIlJlIiwiY2xlYW5EYXRhIiwiZGV0YWNoIiwiYXBwZW5kIiwicHJlcGVuZCIsImluc2VydEJlZm9yZSIsImJlZm9yZSIsImFmdGVyIiwicmVwbGFjZVdpdGgiLCJyZXBsYWNlQ2hpbGQiLCJhcHBlbmRUbyIsInByZXBlbmRUbyIsImluc2VydEFmdGVyIiwicmVwbGFjZUFsbCIsIk1lIiwiSWUiLCJvcGVuZXIiLCJnZXRDb21wdXRlZFN0eWxlIiwiV2UiLCJGZSIsIkJlIiwiZ2V0UHJvcGVydHlWYWx1ZSIsInBpeGVsQm94U3R5bGVzIiwid2lkdGgiLCJtaW5XaWR0aCIsIm1heFdpZHRoIiwiJGUiLCJjc3NUZXh0IiwibWFyZ2luTGVmdCIsInJpZ2h0IiwicG9zaXRpb24iLCJvZmZzZXRXaWR0aCIsInJvdW5kIiwicGFyc2VGbG9hdCIsImJhY2tncm91bmRDbGlwIiwiY2xlYXJDbG9uZVN0eWxlIiwiYm94U2l6aW5nUmVsaWFibGUiLCJwaXhlbFBvc2l0aW9uIiwicmVsaWFibGVNYXJnaW5MZWZ0Iiwic2Nyb2xsYm94U2l6ZSIsInJlbGlhYmxlVHJEaW1lbnNpb25zIiwiaGVpZ2h0IiwicGFyc2VJbnQiLCJfZSIsInplIiwiVWUiLCJYZSIsImNzc1Byb3BzIiwiVmUiLCJHZSIsIlllIiwidmlzaWJpbGl0eSIsIlFlIiwibGV0dGVyU3BhY2luZyIsImZvbnRXZWlnaHQiLCJKZSIsIm1heCIsIktlIiwiY2VpbCIsIlplIiwiZ2V0Q2xpZW50UmVjdHMiLCJldCIsImNzc0hvb2tzIiwib3BhY2l0eSIsImFuaW1hdGlvbkl0ZXJhdGlvbkNvdW50IiwiY29sdW1uQ291bnQiLCJmaWxsT3BhY2l0eSIsImZsZXhHcm93IiwiZmxleFNocmluayIsImdyaWRBcmVhIiwiZ3JpZENvbHVtbiIsImdyaWRDb2x1bW5FbmQiLCJncmlkQ29sdW1uU3RhcnQiLCJncmlkUm93IiwiZ3JpZFJvd0VuZCIsImdyaWRSb3dTdGFydCIsImxpbmVIZWlnaHQiLCJvcmRlciIsIm9ycGhhbnMiLCJ3aWRvd3MiLCJ6SW5kZXgiLCJ6b29tIiwic2V0UHJvcGVydHkiLCJpc0Zpbml0ZSIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsImxlZnQiLCJtYXJnaW4iLCJwYWRkaW5nIiwiYm9yZGVyIiwiZXhwYW5kIiwiVHdlZW4iLCJwcm9wIiwiZWFzaW5nIiwib3B0aW9ucyIsInByb3BIb29rcyIsInJ1biIsImR1cmF0aW9uIiwicG9zIiwic3RlcCIsImZ4Iiwic2Nyb2xsVG9wIiwic2Nyb2xsTGVmdCIsImxpbmVhciIsInN3aW5nIiwiY29zIiwiUEkiLCJ0dCIsIm50IiwicnQiLCJpdCIsIm90IiwiYXQiLCJzdCIsImhpZGRlbiIsInJlcXVlc3RBbmltYXRpb25GcmFtZSIsImludGVydmFsIiwidGljayIsInV0IiwiY3QiLCJmdCIsInR3ZWVuZXJzIiwicHJlZmlsdGVycyIsInN0YXJ0VGltZSIsInR3ZWVucyIsInByb3BzIiwib3B0cyIsInNwZWNpYWxFYXNpbmciLCJvcmlnaW5hbFByb3BlcnRpZXMiLCJvcmlnaW5hbE9wdGlvbnMiLCJjcmVhdGVUd2VlbiIsImJpbmQiLCJjb21wbGV0ZSIsInRpbWVyIiwiYW5pbSIsIkFuaW1hdGlvbiIsInR3ZWVuZXIiLCJ1bnF1ZXVlZCIsIm92ZXJmbG93Iiwib3ZlcmZsb3dYIiwib3ZlcmZsb3dZIiwicHJlZmlsdGVyIiwic3BlZWQiLCJzcGVlZHMiLCJvbGQiLCJmYWRlVG8iLCJhbmltYXRlIiwiZmluaXNoIiwidGltZXJzIiwic2xpZGVEb3duIiwic2xpZGVVcCIsInNsaWRlVG9nZ2xlIiwiZmFkZUluIiwiZmFkZU91dCIsImZhZGVUb2dnbGUiLCJzbG93IiwiZmFzdCIsImRlbGF5IiwiY2xlYXJUaW1lb3V0IiwiY2hlY2tPbiIsIm9wdFNlbGVjdGVkIiwicmFkaW9WYWx1ZSIsInB0IiwiZHQiLCJyZW1vdmVBdHRyIiwiYXR0ckhvb2tzIiwiaHQiLCJ2dCIsInl0IiwibXQiLCJyZW1vdmVQcm9wIiwicHJvcEZpeCIsImFkZENsYXNzIiwicmVtb3ZlQ2xhc3MiLCJ0b2dnbGVDbGFzcyIsImhhc0NsYXNzIiwieHQiLCJ2YWwiLCJ2YWxIb29rcyIsImZvY3VzaW4iLCJidCIsInd0IiwicGFyZW50V2luZG93Iiwic2ltdWxhdGUiLCJ0cmlnZ2VySGFuZGxlciIsIlR0IiwiQ3QiLCJFdCIsInBhcnNlWE1MIiwiRE9NUGFyc2VyIiwicGFyc2VGcm9tU3RyaW5nIiwiU3QiLCJrdCIsIkF0IiwiTnQiLCJEdCIsInBhcmFtIiwiZW5jb2RlVVJJQ29tcG9uZW50Iiwic2VyaWFsaXplIiwic2VyaWFsaXplQXJyYXkiLCJqdCIsInF0IiwiTHQiLCJIdCIsIk90IiwiUHQiLCJSdCIsIk10IiwiSXQiLCJXdCIsIkZ0IiwiQnQiLCJkYXRhVHlwZXMiLCIkdCIsImFqYXhTZXR0aW5ncyIsImZsYXRPcHRpb25zIiwiYWN0aXZlIiwibGFzdE1vZGlmaWVkIiwiZXRhZyIsInVybCIsImlzTG9jYWwiLCJwcm90b2NvbCIsInByb2Nlc3NEYXRhIiwiYXN5bmMiLCJjb250ZW50VHlwZSIsImFjY2VwdHMiLCJ4bWwiLCJqc29uIiwicmVzcG9uc2VGaWVsZHMiLCJjb252ZXJ0ZXJzIiwiY29udGV4dCIsImFqYXhTZXR1cCIsImFqYXhQcmVmaWx0ZXIiLCJhamF4VHJhbnNwb3J0IiwiYWpheCIsInN0YXR1c0NvZGUiLCJnZXRSZXNwb25zZUhlYWRlciIsImdldEFsbFJlc3BvbnNlSGVhZGVycyIsInNldFJlcXVlc3RIZWFkZXIiLCJvdmVycmlkZU1pbWVUeXBlIiwibWltZVR5cGUiLCJzdGF0dXMiLCJhYm9ydCIsIm1ldGhvZCIsImRhdGFUeXBlIiwiY3Jvc3NEb21haW4iLCJob3N0IiwidHJhZGl0aW9uYWwiLCJoYXNDb250ZW50IiwiaWZNb2RpZmllZCIsImhlYWRlcnMiLCJiZWZvcmVTZW5kIiwic3VjY2VzcyIsInRpbWVvdXQiLCJzZW5kIiwiZGF0YUZpbHRlciIsInN0YXR1c1RleHQiLCJnZXRKU09OIiwiZ2V0U2NyaXB0Iiwid3JhcEFsbCIsImZpcnN0RWxlbWVudENoaWxkIiwid3JhcElubmVyIiwid3JhcCIsInVud3JhcCIsInZpc2libGUiLCJvZmZzZXRIZWlnaHQiLCJ4aHIiLCJYTUxIdHRwUmVxdWVzdCIsIl90IiwienQiLCJjb3JzIiwib3BlbiIsInVzZXJuYW1lIiwieGhyRmllbGRzIiwib25sb2FkIiwib25lcnJvciIsIm9uYWJvcnQiLCJvbnRpbWVvdXQiLCJvbnJlYWR5c3RhdGVjaGFuZ2UiLCJyZXNwb25zZVR5cGUiLCJyZXNwb25zZVRleHQiLCJiaW5hcnkiLCJyZXNwb25zZSIsInNjcmlwdCIsInNjcmlwdEF0dHJzIiwiY2hhcnNldCIsInNjcmlwdENoYXJzZXQiLCJVdCIsIlh0IiwiVnQiLCJqc29ucCIsImpzb25wQ2FsbGJhY2siLCJjcmVhdGVIVE1MRG9jdW1lbnQiLCJpbXBsZW1lbnRhdGlvbiIsImFuaW1hdGVkIiwib2Zmc2V0Iiwic2V0T2Zmc2V0IiwidXNpbmciLCJwYWdlWU9mZnNldCIsInBhZ2VYT2Zmc2V0Iiwib2Zmc2V0UGFyZW50Iiwic2Nyb2xsVG8iLCJIZWlnaHQiLCJXaWR0aCIsInVuYmluZCIsImRlbGVnYXRlIiwidW5kZWxlZ2F0ZSIsImhvdmVyIiwiR3QiLCJwcm94eSIsImhvbGRSZWFkeSIsInBhcnNlSlNPTiIsImlzRnVuY3Rpb24iLCJpc1dpbmRvdyIsImNhbWVsQ2FzZSIsImlzTnVtZXJpYyIsImlzTmFOIiwidHJpbSIsImRlZmluZSIsImFtZCIsIll0IiwialF1ZXJ5IiwiUXQiLCJub0NvbmZsaWN0IiwiYXNzaWduIiwidGhyZXNob2xkIiwicmVxdWVzdEZyYW1lIiwid2Via2l0UmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwibW96UmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwib1JlcXVlc3RBbmltYXRpb25GcmFtZSIsIm1zUmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwiZWxlbWVudCIsIkN1c3RvbUV2ZW50IiwicGFyYW1zIiwidW5kZWZpbmVkIiwiZXZ0IiwiY3JlYXRlRXZlbnQiLCJpbml0Q3VzdG9tRXZlbnQiLCJpZ25vcmVUYWdzIiwidGV4dGFyZWEiLCJtb3VzZWV2ZW50cyIsIm1vdmUiLCJjYW5jZWwiLCJ0b3VjaGV2ZW50cyIsInJzcGFjZXMiLCJldmVudE9wdGlvbnMiLCJldmVudHNTeW1ib2wiLCJnZXRFdmVudHMiLCJub2RlIiwidHlwZXMiLCJwcm9wZXJ0aWVzIiwiZGlzcGF0Y2hFdmVudCIsIlRpbWVyIiwiY2FsbGJhY2siLCJydW5uaW5nIiwidGltZSIsImtpY2siLCJjYiIsImlzSWdub3JlVGFnIiwidGFnTmFtZSIsImlzUHJpbWFyeUJ1dHRvbiIsImlkZW50aWZpZWRUb3VjaCIsInRvdWNoTGlzdCIsImlkZW50aWZpZXIiLCJjaGFuZ2VkVG91Y2giLCJ0b3VjaCIsIm1vdXNlZG93biIsIm1vdXNlbW92ZSIsIm1vdXNlZW5kIiwiY2hlY2tUaHJlc2hvbGQiLCJyZW1vdmVNb3VzZSIsInRvdWNoc3RhcnQiLCJ0b3VjaG1vdmUiLCJ0b3VjaGVuZCIsInJlbW92ZVRvdWNoIiwiZGlzdFgiLCJkaXN0WSIsInRyaWdnZXJTdGFydCIsInRlbXBsYXRlIiwic3RhcnRYIiwic3RhcnRZIiwiZGVsdGFYIiwiZGVsdGFZIiwidmVsb2NpdHlYIiwidmVsb2NpdHlZIiwiZmluZ2VyIiwiZW5hYmxlTW92ZSIsIm1vdmVFbmFibGVkIiwiYWN0aXZlTW91c2Vtb3ZlIiwiYWN0aXZlTW91c2VlbmQiLCJyZW1vdmVBY3RpdmVNb3VzZSIsImVuZEV2ZW50IiwiYWN0aXZlVG91Y2htb3ZlIiwiYWN0aXZlVG91Y2hlbmQiLCJyZW1vdmVBY3RpdmVUb3VjaCIsInVwZGF0ZUV2ZW50IiwibW92ZXN0YXJ0IiwidXBkYXRlIiwiZW5hYmxlTW92ZTEiLCJlbmFibGVNb3ZlMiIsImVuYWJsZU1vdmUzIiwicHJvcGVydHkiLCJtb3ZlZW5kIiwibmljZVNlbGVjdCIsIiRzZWxlY3QiLCIkZHJvcGRvd24iLCJjcmVhdGVfbmljZV9zZWxlY3QiLCIkb3B0aW9ucyIsIiRzZWxlY3RlZCIsIiRvcHRpb24iLCIkZm9jdXNlZF9vcHRpb24iLCIkbmV4dCIsIiRwcmV2IiwicG9pbnRlckV2ZW50cyIsInR3ZW50eXR3ZW50eSIsImRlZmF1bHRfb2Zmc2V0X3BjdCIsIm9yaWVudGF0aW9uIiwiYmVmb3JlX2xhYmVsIiwiYWZ0ZXJfbGFiZWwiLCJub19vdmVybGF5IiwibW92ZV9zbGlkZXJfb25faG92ZXIiLCJtb3ZlX3dpdGhfaGFuZGxlX29ubHkiLCJjbGlja190b19tb3ZlIiwic2xpZGVyUGN0IiwiY29udGFpbmVyIiwic2xpZGVyT3JpZW50YXRpb24iLCJiZWZvcmVEaXJlY3Rpb24iLCJhZnRlckRpcmVjdGlvbiIsIm92ZXJsYXkiLCJiZWZvcmVJbWciLCJhZnRlckltZyIsInNsaWRlciIsImNhbGNPZmZzZXQiLCJkaW1lbnNpb25QY3QiLCJjdyIsImNoIiwiYWRqdXN0Q29udGFpbmVyIiwiYWRqdXN0U2xpZGVyIiwicGN0IiwibWluTWF4TnVtYmVyIiwibnVtIiwibWluIiwiZ2V0U2xpZGVyUGVyY2VudGFnZSIsInBvc2l0aW9uWCIsInBvc2l0aW9uWSIsInNsaWRlclBlcmNlbnRhZ2UiLCJpbWdIZWlnaHQiLCJpbWdXaWR0aCIsIm9uTW92ZVN0YXJ0Iiwib25Nb3ZlIiwib25Nb3ZlRW5kIiwibW92ZVRhcmdldCIsInJlcXVpcmUiLCJ2YWxpZGF0ZSIsImRlYnVnIiwidmFsaWRhdG9yIiwic2V0dGluZ3MiLCJvbnN1Ym1pdCIsInN1Ym1pdEJ1dHRvbiIsImNhbmNlbFN1Ym1pdCIsInN1Ym1pdEhhbmRsZXIiLCJmb3JtU3VibWl0dGVkIiwiY3VycmVudEZvcm0iLCJmb3JtIiwicGVuZGluZ1JlcXVlc3QiLCJmb2N1c0ludmFsaWQiLCJ2YWxpZCIsImVycm9yTGlzdCIsInJ1bGVzIiwic3RhdGljUnVsZXMiLCJub3JtYWxpemVSdWxlIiwibWVzc2FnZXMiLCJub3JtYWxpemVSdWxlcyIsImNsYXNzUnVsZXMiLCJhdHRyaWJ1dGVSdWxlcyIsImRhdGFSdWxlcyIsInJlcXVpcmVkIiwicmVtb3RlIiwiYmxhbmsiLCJmaWxsZWQiLCJ1bmNoZWNrZWQiLCJkZWZhdWx0cyIsImZvcm1hdCIsImdyb3VwcyIsImVycm9yQ2xhc3MiLCJwZW5kaW5nQ2xhc3MiLCJ2YWxpZENsYXNzIiwiZXJyb3JFbGVtZW50IiwiZm9jdXNDbGVhbnVwIiwiZXJyb3JDb250YWluZXIiLCJlcnJvckxhYmVsQ29udGFpbmVyIiwiaWdub3JlIiwiaWdub3JlVGl0bGUiLCJvbmZvY3VzaW4iLCJsYXN0QWN0aXZlIiwidW5oaWdobGlnaHQiLCJoaWRlVGhlc2UiLCJlcnJvcnNGb3IiLCJvbmZvY3Vzb3V0IiwiY2hlY2thYmxlIiwic3VibWl0dGVkIiwib3B0aW9uYWwiLCJvbmtleXVwIiwiZWxlbWVudFZhbHVlIiwiaW52YWxpZCIsIm9uY2xpY2siLCJoaWdobGlnaHQiLCJmaW5kQnlOYW1lIiwic2V0RGVmYXVsdHMiLCJlbWFpbCIsImRhdGUiLCJkYXRlSVNPIiwibnVtYmVyIiwiZGlnaXRzIiwiZXF1YWxUbyIsIm1heGxlbmd0aCIsIm1pbmxlbmd0aCIsInJhbmdlbGVuZ3RoIiwicmFuZ2UiLCJhdXRvQ3JlYXRlUmFuZ2VzIiwibGFiZWxDb250YWluZXIiLCJlcnJvckNvbnRleHQiLCJjb250YWluZXJzIiwidmFsdWVDYWNoZSIsInBlbmRpbmciLCJpbnZhbGlkSGFuZGxlciIsImNoZWNrRm9ybSIsImVycm9yTWFwIiwic2hvd0Vycm9ycyIsInByZXBhcmVGb3JtIiwiY3VycmVudEVsZW1lbnRzIiwiZWxlbWVudHMiLCJjaGVjayIsImNsZWFuIiwidmFsaWRhdGlvblRhcmdldEZvciIsInByZXBhcmVFbGVtZW50IiwibnVtYmVyT2ZJbnZhbGlkcyIsInRvSGlkZSIsInN1Y2Nlc3NMaXN0IiwiZGVmYXVsdFNob3dFcnJvcnMiLCJyZXNldEZvcm0iLCJoaWRlRXJyb3JzIiwicmVzZXRFbGVtZW50cyIsIm9iamVjdExlbmd0aCIsImFkZFdyYXBwZXIiLCJzaXplIiwiZmluZExhc3RBY3RpdmUiLCJlcnJvcnMiLCJyZXNldEludGVybmFscyIsInRvU2hvdyIsInZhbGlkaXR5IiwiYmFkSW5wdXQiLCJzdWJzdHIiLCJsYXN0SW5kZXhPZiIsIm5vcm1hbGl6ZXIiLCJwYXJhbWV0ZXJzIiwibWV0aG9kcyIsImZvcm1hdEFuZEFkZCIsImxvZyIsImN1c3RvbURhdGFNZXNzYWdlIiwiY2hhckF0Iiwic3Vic3RyaW5nIiwiY3VzdG9tTWVzc2FnZSIsImZpbmREZWZpbmVkIiwiZGVmYXVsdE1lc3NhZ2UiLCJ0aXRsZSIsIndyYXBwZXIiLCJzaG93TGFiZWwiLCJ2YWxpZEVsZW1lbnRzIiwiaW52YWxpZEVsZW1lbnRzIiwiaWRPck5hbWUiLCJlcnJvclBsYWNlbWVudCIsImVzY2FwZUNzc01ldGEiLCJnZXRMZW5ndGgiLCJkZXBlbmQiLCJkZXBlbmRUeXBlcyIsInN0cmluZyIsInN0YXJ0UmVxdWVzdCIsInN0b3BSZXF1ZXN0IiwicHJldmlvdXNWYWx1ZSIsImRlc3Ryb3kiLCJjbGFzc1J1bGVTZXR0aW5ncyIsImNyZWRpdGNhcmQiLCJhZGRDbGFzc1J1bGVzIiwibm9ybWFsaXplQXR0cmlidXRlUnVsZSIsIk51bWJlciIsImRlcGVuZHMiLCJhZGRNZXRob2QiLCJwb3ciLCJvcmlnaW5hbE1lc3NhZ2UiLCJtb2RlIiwicG9ydCIsIlN3aXBlciIsImRpcmVjdGlvbiIsInNsaWRlc1BlclZpZXciLCJsb29wIiwiZmFkZUVmZmVjdCIsImNyb3NzRmFkZSIsImVmZmVjdCIsImF1dG9wbGF5IiwiZGlzYWJsZU9uSW50ZXJhY3Rpb24iLCJiZWZvcmVJbml0Iiwic2xpZGVzIiwic3dpcGVyIiwic3BhY2VCZXR3ZWVuIiwic2Nyb2xsYmFyIiwiZW5hYmxlIiwiZWwiLCJkcmFnZ2FibGUiLCJuYXZpZ2F0aW9uIiwibmV4dEVsIiwicHJldkVsIiwiYnJlYWtwb2ludHMiLCJwYWdpbmF0aW9uIiwiY2xpY2thYmxlIiwicmVuZGVyQnVsbGV0Iiwic2xpZGVDaGFuZ2UiLCJxdWVyeVNlbGVjdG9yIiwiaXNTdGlja3kiLCJoZWFkZXJIZWlnaHQiLCJlbGVtZW50VG9wIiwib2Zmc2V0VG9wIiwiYmVoYXZpb3IiLCJidWxsZXRzIiwiZnJlZU1vZGUiLCJzd2lwZXJNYXJxdWUiLCJhbGxvd1RvdWNoTW92ZSIsImNhbGN1bGF0ZVNwYWNlQmV0d2VlbiIsIm1hcnF1ZWVDb250YWluZXIiLCJjb250YWluZXJXaWR0aCIsInN3aXBlck1hcnF1ZVRleHQiLCJyZXNpemUiLCJjYWxjdWxhdGVTcGFjZUJldHdlZW5Qb2xsIiwic3dpcGVyUG9sbE1hcnF1ZWUxIiwic3dpcGVyUG9sbE1hcnF1ZWUyIiwiaW5pdGlhbFNsaWRlIiwiZ2FsbGFyeV9fc3dpcGVyIiwid2F0Y2hTbGlkZXNQcm9ncmVzcyIsIiRjb250YWluZXIiLCJzd2lwZXJUYWJzIiwidG91Y2hTdGFydEZvcmNlUHJldmVudERlZmF1bHQiLCIkdGhpcyIsIiRmb3JtIiwiJGlucHV0IiwiJGJ0biIsIiRwYXJlbnQiLCJpbm5lcldpZHRoIiwibmFtZVBhdHRlcm4iLCJlbWFpbFBhdHRlcm4iLCJwYXNzd29yZFBhdHRlcm4iLCJwYXR0ZXJuIiwicGhvbmUiLCJsb2dpbiIsInBhc3N3b3JkSW5wdXQiLCJtZW51Q2xvc2UiLCJtZW51T3BlbiIsInNsaWRlVG9nZ2xlU2VjdGlvbiIsIm91dGVyV2lkdGgiLCJyaWdodERyb3Bkb3duIiwiJHN1Ym1lbnUiLCIkb2Zmc2V0VG9MZWZ0Iiwid2luZG93V2lkdGgiLCIkaXNPcGVuIiwicG9wdXBDbG9zZSIsIiRlbGVtIiwicG9wdXBPcGVuIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsInNldEl0ZW0iLCJjb21lIiwiZG9jVmlld1RvcCIsImRvY1ZpZXdCb3R0b20iLCJlbGVtVG9wIiwiZWxlbUJvdHRvbSIsImdhbGxlcnlUaHVtYnNTd2lwZXIiLCJmaXhlZEhlYWRlciIsImlubmVySGVpZ2h0Iiwic2Nyb2xsIiwicmF0aW8iLCJwb2xsRGF0ZVN0YXJ0IiwiY291bnREb3duRGF0ZSIsImdldFRpbWUiLCJzZXRJbnRlcnZhbCIsImRpc3RhbmNlIiwiZGF5cyIsImZsb29yIiwiaG91cnMiLCJtaW51dGVzIiwic2Vjb25kcyIsImRheXNFbCIsImhvdXJzRWwiLCJtaW51dGVzRWwiLCJzZWNvbmRzRWwiLCJjbGVhckludGVydmFsIl0sIm1hcHBpbmdzIjoiOzs7O0FBQUE7QUFDQSxDQUFDLFVBQVNBLENBQVQsRUFBV0MsQ0FBWCxFQUFhO0FBQUM7O0FBQWEsc0JBQWlCQyxNQUFqQix5Q0FBaUJBLE1BQWpCLE1BQXlCLG9CQUFpQkEsTUFBTSxDQUFDQyxPQUF4QixDQUF6QixHQUF5REQsTUFBTSxDQUFDQyxPQUFQLEdBQWVILENBQUMsQ0FBQ0ksUUFBRixHQUFXSCxDQUFDLENBQUNELENBQUQsRUFBRyxDQUFDLENBQUosQ0FBWixHQUFtQixVQUFTQSxDQUFULEVBQVc7QUFBQyxRQUFHLENBQUNBLENBQUMsQ0FBQ0ksUUFBTixFQUFlLE1BQU0sSUFBSUMsS0FBSixDQUFVLDBDQUFWLENBQU47QUFBNEQsV0FBT0osQ0FBQyxDQUFDRCxDQUFELENBQVI7QUFBWSxHQUE5TCxHQUErTEMsQ0FBQyxDQUFDRCxDQUFELENBQWhNO0FBQW9NLENBQS9OLENBQWdPLGVBQWEsT0FBT00sTUFBcEIsR0FBMkJBLE1BQTNCLFNBQWhPLEVBQXVRLFVBQVNDLENBQVQsRUFBV1AsQ0FBWCxFQUFhO0FBQUM7O0FBQWEsTUFBSUMsQ0FBQyxHQUFDLEVBQU47QUFBQSxNQUFTTyxDQUFDLEdBQUNDLE1BQU0sQ0FBQ0MsY0FBbEI7QUFBQSxNQUFpQ0MsQ0FBQyxHQUFDVixDQUFDLENBQUNXLEtBQXJD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LEVBQXNDMkMsU0FBdEMsR0FBa0QsaUVBQWxEO0FBQ0Q7QUFDRixHQTNCa0IsRUEyQmhCLElBM0JnQixDQUFuQjtBQTRCRCIsInNvdXJjZXNDb250ZW50IjpbIi8qISBqUXVlcnkgdjMuNS4xIHwgKGMpIEpTIEZvdW5kYXRpb24gYW5kIG90aGVyIGNvbnRyaWJ1dG9ycyB8IGpxdWVyeS5vcmcvbGljZW5zZSAqL1xuIWZ1bmN0aW9uKGUsdCl7XCJ1c2Ugc3RyaWN0XCI7XCJvYmplY3RcIj09dHlwZW9mIG1vZHVsZSYmXCJvYmplY3RcIj09dHlwZW9mIG1vZHVsZS5leHBvcnRzP21vZHVsZS5leHBvcnRzPWUuZG9jdW1lbnQ/dChlLCEwKTpmdW5jdGlvbihlKXtpZighZS5kb2N1bWVudCl0aHJvdyBuZXcgRXJyb3IoXCJqUXVlcnkgcmVxdWlyZXMgYSB3aW5kb3cgd2l0aCBhIGRvY3VtZW50XCIpO3JldHVybiB0KGUpfTp0KGUpfShcInVuZGVmaW5lZFwiIT10eXBlb2Ygd2luZG93P3dpbmRvdzp0aGlzLGZ1bmN0aW9uKEMsZSl7XCJ1c2Ugc3RyaWN0XCI7dmFyIHQ9W10scj1PYmplY3QuZ2V0UHJvdG90eXBlT2Yscz10LnNsaWNlLGc9dC5mbGF0P2Z1bmN0aW9uKGUpe3JldHVybiB0LmZsYXQuY2FsbChlKX06ZnVuY3Rpb24oZSl7cmV0dXJuIHQuY29uY2F0LmFwcGx5KFtdLGUpfSx1PXQucHVzaCxpPXQuaW5kZXhPZixuPXt9LG89bi50b1N0cmluZyx2PW4uaGFzT3duUHJvcGVydHksYT12LnRvU3RyaW5nLGw9YS5jYWxsKE9iamVjdCkseT17fSxtPWZ1bmN0aW9uKGUpe3JldHVyblwiZnVuY3Rpb25cIj09dHlwZW9mIGUmJlwibnVtYmVyXCIhPXR5cGVvZiBlLm5vZGVUeXBlfSx4PWZ1bmN0aW9uKGUpe3JldHVybiBudWxsIT1lJiZlPT09ZS53aW5kb3d9LEU9Qy5kb2N1bWVudCxjPXt0eXBlOiEwLHNyYzohMCxub25jZTohMCxub01vZHVsZTohMH07ZnVuY3Rpb24gYihlLHQsbil7dmFyIHIsaSxvPShuPW58fEUpLmNyZWF0ZUVsZW1lbnQoXCJzY3JpcHRcIik7aWYoby50ZXh0PWUsdClmb3IociBpbiBjKShpPXRbcl18fHQuZ2V0QXR0cmlidXRlJiZ0LmdldEF0dHJpYnV0ZShyKSkmJm8uc2V0QXR0cmlidXRlKHIsaSk7bi5oZWFkLmFwcGVuZENoaWxkKG8pLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQobyl9ZnVuY3Rpb24gdyhlKXtyZXR1cm4gbnVsbD09ZT9lK1wiXCI6XCJvYmplY3RcIj09dHlwZW9mIGV8fFwiZnVuY3Rpb25cIj09dHlwZW9mIGU/bltvLmNhbGwoZSldfHxcIm9iamVjdFwiOnR5cGVvZiBlfXZhciBmPVwiMy41LjFcIixTPWZ1bmN0aW9uKGUsdCl7cmV0dXJuIG5ldyBTLmZuLmluaXQoZSx0KX07ZnVuY3Rpb24gcChlKXt2YXIgdD0hIWUmJlwibGVuZ3RoXCJpbiBlJiZlLmxlbmd0aCxuPXcoZSk7cmV0dXJuIW0oZSkmJiF4KGUpJiYoXCJhcnJheVwiPT09bnx8MD09PXR8fFwibnVtYmVyXCI9PXR5cGVvZiB0JiYwPHQmJnQtMSBpbiBlKX1TLmZuPVMucHJvdG90eXBlPXtqcXVlcnk6Zixjb25zdHJ1Y3RvcjpTLGxlbmd0aDowLHRvQXJyYXk6ZnVuY3Rpb24oKXtyZXR1cm4gcy5jYWxsKHRoaXMpfSxnZXQ6ZnVuY3Rpb24oZSl7cmV0dXJuIG51bGw9PWU/cy5jYWxsKHRoaXMpOmU8MD90aGlzW2UrdGhpcy5sZW5ndGhdOnRoaXNbZV19LHB1c2hTdGFjazpmdW5jdGlvbihlKXt2YXIgdD1TLm1lcmdlKHRoaXMuY29uc3RydWN0b3IoKSxlKTtyZXR1cm4gdC5wcmV2T2JqZWN0PXRoaXMsdH0sZWFjaDpmdW5jdGlvbihlKXtyZXR1cm4gUy5lYWNoKHRoaXMsZSl9LG1hcDpmdW5jdGlvbihuKXtyZXR1cm4gdGhpcy5wdXNoU3RhY2soUy5tYXAodGhpcyxmdW5jdGlvbihlLHQpe3JldHVybiBuLmNhbGwoZSx0LGUpfSkpfSxzbGljZTpmdW5jdGlvbigpe3JldHVybiB0aGlzLnB1c2hTdGFjayhzLmFwcGx5KHRoaXMsYXJndW1lbnRzKSl9LGZpcnN0OmZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuZXEoMCl9LGxhc3Q6ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5lcSgtMSl9LGV2ZW46ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5wdXNoU3RhY2soUy5ncmVwKHRoaXMsZnVuY3Rpb24oZSx0KXtyZXR1cm4odCsxKSUyfSkpfSxvZGQ6ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5wdXNoU3RhY2soUy5ncmVwKHRoaXMsZnVuY3Rpb24oZSx0KXtyZXR1cm4gdCUyfSkpfSxlcTpmdW5jdGlvbihlKXt2YXIgdD10aGlzLmxlbmd0aCxuPStlKyhlPDA/dDowKTtyZXR1cm4gdGhpcy5wdXNoU3RhY2soMDw9biYmbjx0P1t0aGlzW25dXTpbXSl9LGVuZDpmdW5jdGlvbigpe3JldHVybiB0aGlzLnByZXZPYmplY3R8fHRoaXMuY29uc3RydWN0b3IoKX0scHVzaDp1LHNvcnQ6dC5zb3J0LHNwbGljZTp0LnNwbGljZX0sUy5leHRlbmQ9Uy5mbi5leHRlbmQ9ZnVuY3Rpb24oKXt2YXIgZSx0LG4scixpLG8sYT1hcmd1bWVudHNbMF18fHt9LHM9MSx1PWFyZ3VtZW50cy5sZW5ndGgsbD0hMTtmb3IoXCJib29sZWFuXCI9PXR5cGVvZiBhJiYobD1hLGE9YXJndW1lbnRzW3NdfHx7fSxzKyspLFwib2JqZWN0XCI9PXR5cGVvZiBhfHxtKGEpfHwoYT17fSkscz09PXUmJihhPXRoaXMscy0tKTtzPHU7cysrKWlmKG51bGwhPShlPWFyZ3VtZW50c1tzXSkpZm9yKHQgaW4gZSlyPWVbdF0sXCJfX3Byb3RvX19cIiE9PXQmJmEhPT1yJiYobCYmciYmKFMuaXNQbGFpbk9iamVjdChyKXx8KGk9QXJyYXkuaXNBcnJheShyKSkpPyhuPWFbdF0sbz1pJiYhQXJyYXkuaXNBcnJheShuKT9bXTppfHxTLmlzUGxhaW5PYmplY3Qobik/bjp7fSxpPSExLGFbdF09Uy5leHRlbmQobCxvLHIpKTp2b2lkIDAhPT1yJiYoYVt0XT1yKSk7cmV0dXJuIGF9LFMuZXh0ZW5kKHtleHBhbmRvOlwialF1ZXJ5XCIrKGYrTWF0aC5yYW5kb20oKSkucmVwbGFjZSgvXFxEL2csXCJcIiksaXNSZWFkeTohMCxlcnJvcjpmdW5jdGlvbihlKXt0aHJvdyBuZXcgRXJyb3IoZSl9LG5vb3A6ZnVuY3Rpb24oKXt9LGlzUGxhaW5PYmplY3Q6ZnVuY3Rpb24oZSl7dmFyIHQsbjtyZXR1cm4hKCFlfHxcIltvYmplY3QgT2JqZWN0XVwiIT09by5jYWxsKGUpKSYmKCEodD1yKGUpKXx8XCJmdW5jdGlvblwiPT10eXBlb2Yobj12LmNhbGwodCxcImNvbnN0cnVjdG9yXCIpJiZ0LmNvbnN0cnVjdG9yKSYmYS5jYWxsKG4pPT09bCl9LGlzRW1wdHlPYmplY3Q6ZnVuY3Rpb24oZSl7dmFyIHQ7Zm9yKHQgaW4gZSlyZXR1cm4hMTtyZXR1cm4hMH0sZ2xvYmFsRXZhbDpmdW5jdGlvbihlLHQsbil7YihlLHtub25jZTp0JiZ0Lm5vbmNlfSxuKX0sZWFjaDpmdW5jdGlvbihlLHQpe3ZhciBuLHI9MDtpZihwKGUpKXtmb3Iobj1lLmxlbmd0aDtyPG47cisrKWlmKCExPT09dC5jYWxsKGVbcl0scixlW3JdKSlicmVha31lbHNlIGZvcihyIGluIGUpaWYoITE9PT10LmNhbGwoZVtyXSxyLGVbcl0pKWJyZWFrO3JldHVybiBlfSxtYWtlQXJyYXk6ZnVuY3Rpb24oZSx0KXt2YXIgbj10fHxbXTtyZXR1cm4gbnVsbCE9ZSYmKHAoT2JqZWN0KGUpKT9TLm1lcmdlKG4sXCJzdHJpbmdcIj09dHlwZW9mIGU/W2VdOmUpOnUuY2FsbChuLGUpKSxufSxpbkFycmF5OmZ1bmN0aW9uKGUsdCxuKXtyZXR1cm4gbnVsbD09dD8tMTppLmNhbGwodCxlLG4pfSxtZXJnZTpmdW5jdGlvbihlLHQpe2Zvcih2YXIgbj0rdC5sZW5ndGgscj0wLGk9ZS5sZW5ndGg7cjxuO3IrKyllW2krK109dFtyXTtyZXR1cm4gZS5sZW5ndGg9aSxlfSxncmVwOmZ1bmN0aW9uKGUsdCxuKXtmb3IodmFyIHI9W10saT0wLG89ZS5sZW5ndGgsYT0hbjtpPG87aSsrKSF0KGVbaV0saSkhPT1hJiZyLnB1c2goZVtpXSk7cmV0dXJuIHJ9LG1hcDpmdW5jdGlvbihlLHQsbil7dmFyIHIsaSxvPTAsYT1bXTtpZihwKGUpKWZvcihyPWUubGVuZ3RoO288cjtvKyspbnVsbCE9KGk9dChlW29dLG8sbikpJiZhLnB1c2goaSk7ZWxzZSBmb3IobyBpbiBlKW51bGwhPShpPXQoZVtvXSxvLG4pKSYmYS5wdXNoKGkpO3JldHVybiBnKGEpfSxndWlkOjEsc3VwcG9ydDp5fSksXCJmdW5jdGlvblwiPT10eXBlb2YgU3ltYm9sJiYoUy5mbltTeW1ib2wuaXRlcmF0b3JdPXRbU3ltYm9sLml0ZXJhdG9yXSksUy5lYWNoKFwiQm9vbGVhbiBOdW1iZXIgU3RyaW5nIEZ1bmN0aW9uIEFycmF5IERhdGUgUmVnRXhwIE9iamVjdCBFcnJvciBTeW1ib2xcIi5zcGxpdChcIiBcIiksZnVuY3Rpb24oZSx0KXtuW1wiW29iamVjdCBcIit0K1wiXVwiXT10LnRvTG93ZXJDYXNlKCl9KTt2YXIgZD1mdW5jdGlvbihuKXt2YXIgZSxkLGIsbyxpLGgsZixnLHcsdSxsLFQsQyxhLEUsdixzLGMseSxTPVwic2l6emxlXCIrMSpuZXcgRGF0ZSxwPW4uZG9jdW1lbnQsaz0wLHI9MCxtPXVlKCkseD11ZSgpLEE9dWUoKSxOPXVlKCksRD1mdW5jdGlvbihlLHQpe3JldHVybiBlPT09dCYmKGw9ITApLDB9LGo9e30uaGFzT3duUHJvcGVydHksdD1bXSxxPXQucG9wLEw9dC5wdXNoLEg9dC5wdXNoLE89dC5zbGljZSxQPWZ1bmN0aW9uKGUsdCl7Zm9yKHZhciBuPTAscj1lLmxlbmd0aDtuPHI7bisrKWlmKGVbbl09PT10KXJldHVybiBuO3JldHVybi0xfSxSPVwiY2hlY2tlZHxzZWxlY3RlZHxhc3luY3xhdXRvZm9jdXN8YXV0b3BsYXl8Y29udHJvbHN8ZGVmZXJ8ZGlzYWJsZWR8aGlkZGVufGlzbWFwfGxvb3B8bXVsdGlwbGV8b3BlbnxyZWFkb25seXxyZXF1aXJlZHxzY29wZWRcIixNPVwiW1xcXFx4MjBcXFxcdFxcXFxyXFxcXG5cXFxcZl1cIixJPVwiKD86XFxcXFxcXFxbXFxcXGRhLWZBLUZdezEsNn1cIitNK1wiP3xcXFxcXFxcXFteXFxcXHJcXFxcblxcXFxmXXxbXFxcXHctXXxbXlxcMC1cXFxceDdmXSkrXCIsVz1cIlxcXFxbXCIrTStcIiooXCIrSStcIikoPzpcIitNK1wiKihbKl4kfCF+XT89KVwiK00rXCIqKD86JygoPzpcXFxcXFxcXC58W15cXFxcXFxcXCddKSopJ3xcXFwiKCg/OlxcXFxcXFxcLnxbXlxcXFxcXFxcXFxcIl0pKilcXFwifChcIitJK1wiKSl8KVwiK00rXCIqXFxcXF1cIixGPVwiOihcIitJK1wiKSg/OlxcXFwoKCgnKCg/OlxcXFxcXFxcLnxbXlxcXFxcXFxcJ10pKiknfFxcXCIoKD86XFxcXFxcXFwufFteXFxcXFxcXFxcXFwiXSkqKVxcXCIpfCgoPzpcXFxcXFxcXC58W15cXFxcXFxcXCgpW1xcXFxdXXxcIitXK1wiKSopfC4qKVxcXFwpfClcIixCPW5ldyBSZWdFeHAoTStcIitcIixcImdcIiksJD1uZXcgUmVnRXhwKFwiXlwiK00rXCIrfCgoPzpefFteXFxcXFxcXFxdKSg/OlxcXFxcXFxcLikqKVwiK00rXCIrJFwiLFwiZ1wiKSxfPW5ldyBSZWdFeHAoXCJeXCIrTStcIiosXCIrTStcIipcIiksej1uZXcgUmVnRXhwKFwiXlwiK00rXCIqKFs+K35dfFwiK00rXCIpXCIrTStcIipcIiksVT1uZXcgUmVnRXhwKE0rXCJ8PlwiKSxYPW5ldyBSZWdFeHAoRiksVj1uZXcgUmVnRXhwKFwiXlwiK0krXCIkXCIpLEc9e0lEOm5ldyBSZWdFeHAoXCJeIyhcIitJK1wiKVwiKSxDTEFTUzpuZXcgUmVnRXhwKFwiXlxcXFwuKFwiK0krXCIpXCIpLFRBRzpuZXcgUmVnRXhwKFwiXihcIitJK1wifFsqXSlcIiksQVRUUjpuZXcgUmVnRXhwKFwiXlwiK1cpLFBTRVVETzpuZXcgUmVnRXhwKFwiXlwiK0YpLENISUxEOm5ldyBSZWdFeHAoXCJeOihvbmx5fGZpcnN0fGxhc3R8bnRofG50aC1sYXN0KS0oY2hpbGR8b2YtdHlwZSkoPzpcXFxcKFwiK00rXCIqKGV2ZW58b2RkfCgoWystXXwpKFxcXFxkKilufClcIitNK1wiKig/OihbKy1dfClcIitNK1wiKihcXFxcZCspfCkpXCIrTStcIipcXFxcKXwpXCIsXCJpXCIpLGJvb2w6bmV3IFJlZ0V4cChcIl4oPzpcIitSK1wiKSRcIixcImlcIiksbmVlZHNDb250ZXh0Om5ldyBSZWdFeHAoXCJeXCIrTStcIipbPit+XXw6KGV2ZW58b2RkfGVxfGd0fGx0fG50aHxmaXJzdHxsYXN0KSg/OlxcXFwoXCIrTStcIiooKD86LVxcXFxkKT9cXFxcZCopXCIrTStcIipcXFxcKXwpKD89W14tXXwkKVwiLFwiaVwiKX0sWT0vSFRNTCQvaSxRPS9eKD86aW5wdXR8c2VsZWN0fHRleHRhcmVhfGJ1dHRvbikkL2ksSj0vXmhcXGQkL2ksSz0vXltee10rXFx7XFxzKlxcW25hdGl2ZSBcXHcvLFo9L14oPzojKFtcXHctXSspfChcXHcrKXxcXC4oW1xcdy1dKykpJC8sZWU9L1srfl0vLHRlPW5ldyBSZWdFeHAoXCJcXFxcXFxcXFtcXFxcZGEtZkEtRl17MSw2fVwiK00rXCI/fFxcXFxcXFxcKFteXFxcXHJcXFxcblxcXFxmXSlcIixcImdcIiksbmU9ZnVuY3Rpb24oZSx0KXt2YXIgbj1cIjB4XCIrZS5zbGljZSgxKS02NTUzNjtyZXR1cm4gdHx8KG48MD9TdHJpbmcuZnJvbUNoYXJDb2RlKG4rNjU1MzYpOlN0cmluZy5mcm9tQ2hhckNvZGUobj4+MTB8NTUyOTYsMTAyMyZufDU2MzIwKSl9LHJlPS8oW1xcMC1cXHgxZlxceDdmXXxeLT9cXGQpfF4tJHxbXlxcMC1cXHgxZlxceDdmLVxcdUZGRkZcXHctXS9nLGllPWZ1bmN0aW9uKGUsdCl7cmV0dXJuIHQ/XCJcXDBcIj09PWU/XCJcXHVmZmZkXCI6ZS5zbGljZSgwLC0xKStcIlxcXFxcIitlLmNoYXJDb2RlQXQoZS5sZW5ndGgtMSkudG9TdHJpbmcoMTYpK1wiIFwiOlwiXFxcXFwiK2V9LG9lPWZ1bmN0aW9uKCl7VCgpfSxhZT1iZShmdW5jdGlvbihlKXtyZXR1cm4hMD09PWUuZGlzYWJsZWQmJlwiZmllbGRzZXRcIj09PWUubm9kZU5hbWUudG9Mb3dlckNhc2UoKX0se2RpcjpcInBhcmVudE5vZGVcIixuZXh0OlwibGVnZW5kXCJ9KTt0cnl7SC5hcHBseSh0PU8uY2FsbChwLmNoaWxkTm9kZXMpLHAuY2hpbGROb2RlcyksdFtwLmNoaWxkTm9kZXMubGVuZ3RoXS5ub2RlVHlwZX1jYXRjaChlKXtIPXthcHBseTp0Lmxlbmd0aD9mdW5jdGlvbihlLHQpe0wuYXBwbHkoZSxPLmNhbGwodCkpfTpmdW5jdGlvbihlLHQpe3ZhciBuPWUubGVuZ3RoLHI9MDt3aGlsZShlW24rK109dFtyKytdKTtlLmxlbmd0aD1uLTF9fX1mdW5jdGlvbiBzZSh0LGUsbixyKXt2YXIgaSxvLGEscyx1LGwsYyxmPWUmJmUub3duZXJEb2N1bWVudCxwPWU/ZS5ub2RlVHlwZTo5O2lmKG49bnx8W10sXCJzdHJpbmdcIiE9dHlwZW9mIHR8fCF0fHwxIT09cCYmOSE9PXAmJjExIT09cClyZXR1cm4gbjtpZighciYmKFQoZSksZT1lfHxDLEUpKXtpZigxMSE9PXAmJih1PVouZXhlYyh0KSkpaWYoaT11WzFdKXtpZig5PT09cCl7aWYoIShhPWUuZ2V0RWxlbWVudEJ5SWQoaSkpKXJldHVybiBuO2lmKGEuaWQ9PT1pKXJldHVybiBuLnB1c2goYSksbn1lbHNlIGlmKGYmJihhPWYuZ2V0RWxlbWVudEJ5SWQoaSkpJiZ5KGUsYSkmJmEuaWQ9PT1pKXJldHVybiBuLnB1c2goYSksbn1lbHNle2lmKHVbMl0pcmV0dXJuIEguYXBwbHkobixlLmdldEVsZW1lbnRzQnlUYWdOYW1lKHQpKSxuO2lmKChpPXVbM10pJiZkLmdldEVsZW1lbnRzQnlDbGFzc05hbWUmJmUuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSlyZXR1cm4gSC5hcHBseShuLGUuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShpKSksbn1pZihkLnFzYSYmIU5bdCtcIiBcIl0mJighdnx8IXYudGVzdCh0KSkmJigxIT09cHx8XCJvYmplY3RcIiE9PWUubm9kZU5hbWUudG9Mb3dlckNhc2UoKSkpe2lmKGM9dCxmPWUsMT09PXAmJihVLnRlc3QodCl8fHoudGVzdCh0KSkpeyhmPWVlLnRlc3QodCkmJnllKGUucGFyZW50Tm9kZSl8fGUpPT09ZSYmZC5zY29wZXx8KChzPWUuZ2V0QXR0cmlidXRlKFwiaWRcIikpP3M9cy5yZXBsYWNlKHJlLGllKTplLnNldEF0dHJpYnV0ZShcImlkXCIscz1TKSksbz0obD1oKHQpKS5sZW5ndGg7d2hpbGUoby0tKWxbb109KHM/XCIjXCIrczpcIjpzY29wZVwiKStcIiBcIit4ZShsW29dKTtjPWwuam9pbihcIixcIil9dHJ5e3JldHVybiBILmFwcGx5KG4sZi5xdWVyeVNlbGVjdG9yQWxsKGMpKSxufWNhdGNoKGUpe04odCwhMCl9ZmluYWxseXtzPT09UyYmZS5yZW1vdmVBdHRyaWJ1dGUoXCJpZFwiKX19fXJldHVybiBnKHQucmVwbGFjZSgkLFwiJDFcIiksZSxuLHIpfWZ1bmN0aW9uIHVlKCl7dmFyIHI9W107cmV0dXJuIGZ1bmN0aW9uIGUodCxuKXtyZXR1cm4gci5wdXNoKHQrXCIgXCIpPmIuY2FjaGVMZW5ndGgmJmRlbGV0ZSBlW3Iuc2hpZnQoKV0sZVt0K1wiIFwiXT1ufX1mdW5jdGlvbiBsZShlKXtyZXR1cm4gZVtTXT0hMCxlfWZ1bmN0aW9uIGNlKGUpe3ZhciB0PUMuY3JlYXRlRWxlbWVudChcImZpZWxkc2V0XCIpO3RyeXtyZXR1cm4hIWUodCl9Y2F0Y2goZSl7cmV0dXJuITF9ZmluYWxseXt0LnBhcmVudE5vZGUmJnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZCh0KSx0PW51bGx9fWZ1bmN0aW9uIGZlKGUsdCl7dmFyIG49ZS5zcGxpdChcInxcIikscj1uLmxlbmd0aDt3aGlsZShyLS0pYi5hdHRySGFuZGxlW25bcl1dPXR9ZnVuY3Rpb24gcGUoZSx0KXt2YXIgbj10JiZlLHI9biYmMT09PWUubm9kZVR5cGUmJjE9PT10Lm5vZGVUeXBlJiZlLnNvdXJjZUluZGV4LXQuc291cmNlSW5kZXg7aWYocilyZXR1cm4gcjtpZihuKXdoaWxlKG49bi5uZXh0U2libGluZylpZihuPT09dClyZXR1cm4tMTtyZXR1cm4gZT8xOi0xfWZ1bmN0aW9uIGRlKHQpe3JldHVybiBmdW5jdGlvbihlKXtyZXR1cm5cImlucHV0XCI9PT1lLm5vZGVOYW1lLnRvTG93ZXJDYXNlKCkmJmUudHlwZT09PXR9fWZ1bmN0aW9uIGhlKG4pe3JldHVybiBmdW5jdGlvbihlKXt2YXIgdD1lLm5vZGVOYW1lLnRvTG93ZXJDYXNlKCk7cmV0dXJuKFwiaW5wdXRcIj09PXR8fFwiYnV0dG9uXCI9PT10KSYmZS50eXBlPT09bn19ZnVuY3Rpb24gZ2UodCl7cmV0dXJuIGZ1bmN0aW9uKGUpe3JldHVyblwiZm9ybVwiaW4gZT9lLnBhcmVudE5vZGUmJiExPT09ZS5kaXNhYmxlZD9cImxhYmVsXCJpbiBlP1wibGFiZWxcImluIGUucGFyZW50Tm9kZT9lLnBhcmVudE5vZGUuZGlzYWJsZWQ9PT10OmUuZGlzYWJsZWQ9PT10OmUuaXNEaXNhYmxlZD09PXR8fGUuaXNEaXNhYmxlZCE9PSF0JiZhZShlKT09PXQ6ZS5kaXNhYmxlZD09PXQ6XCJsYWJlbFwiaW4gZSYmZS5kaXNhYmxlZD09PXR9fWZ1bmN0aW9uIHZlKGEpe3JldHVybiBsZShmdW5jdGlvbihvKXtyZXR1cm4gbz0rbyxsZShmdW5jdGlvbihlLHQpe3ZhciBuLHI9YShbXSxlLmxlbmd0aCxvKSxpPXIubGVuZ3RoO3doaWxlKGktLSllW249cltpXV0mJihlW25dPSEodFtuXT1lW25dKSl9KX0pfWZ1bmN0aW9uIHllKGUpe3JldHVybiBlJiZcInVuZGVmaW5lZFwiIT10eXBlb2YgZS5nZXRFbGVtZW50c0J5VGFnTmFtZSYmZX1mb3IoZSBpbiBkPXNlLnN1cHBvcnQ9e30saT1zZS5pc1hNTD1mdW5jdGlvbihlKXt2YXIgdD1lLm5hbWVzcGFjZVVSSSxuPShlLm93bmVyRG9jdW1lbnR8fGUpLmRvY3VtZW50RWxlbWVudDtyZXR1cm4hWS50ZXN0KHR8fG4mJm4ubm9kZU5hbWV8fFwiSFRNTFwiKX0sVD1zZS5zZXREb2N1bWVudD1mdW5jdGlvbihlKXt2YXIgdCxuLHI9ZT9lLm93bmVyRG9jdW1lbnR8fGU6cDtyZXR1cm4gciE9QyYmOT09PXIubm9kZVR5cGUmJnIuZG9jdW1lbnRFbGVtZW50JiYoYT0oQz1yKS5kb2N1bWVudEVsZW1lbnQsRT0haShDKSxwIT1DJiYobj1DLmRlZmF1bHRWaWV3KSYmbi50b3AhPT1uJiYobi5hZGRFdmVudExpc3RlbmVyP24uYWRkRXZlbnRMaXN0ZW5lcihcInVubG9hZFwiLG9lLCExKTpuLmF0dGFjaEV2ZW50JiZuLmF0dGFjaEV2ZW50KFwib251bmxvYWRcIixvZSkpLGQuc2NvcGU9Y2UoZnVuY3Rpb24oZSl7cmV0dXJuIGEuYXBwZW5kQ2hpbGQoZSkuYXBwZW5kQ2hpbGQoQy5jcmVhdGVFbGVtZW50KFwiZGl2XCIpKSxcInVuZGVmaW5lZFwiIT10eXBlb2YgZS5xdWVyeVNlbGVjdG9yQWxsJiYhZS5xdWVyeVNlbGVjdG9yQWxsKFwiOnNjb3BlIGZpZWxkc2V0IGRpdlwiKS5sZW5ndGh9KSxkLmF0dHJpYnV0ZXM9Y2UoZnVuY3Rpb24oZSl7cmV0dXJuIGUuY2xhc3NOYW1lPVwiaVwiLCFlLmdldEF0dHJpYnV0ZShcImNsYXNzTmFtZVwiKX0pLGQuZ2V0RWxlbWVudHNCeVRhZ05hbWU9Y2UoZnVuY3Rpb24oZSl7cmV0dXJuIGUuYXBwZW5kQ2hpbGQoQy5jcmVhdGVDb21tZW50KFwiXCIpKSwhZS5nZXRFbGVtZW50c0J5VGFnTmFtZShcIipcIikubGVuZ3RofSksZC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lPUsudGVzdChDLmdldEVsZW1lbnRzQnlDbGFzc05hbWUpLGQuZ2V0QnlJZD1jZShmdW5jdGlvbihlKXtyZXR1cm4gYS5hcHBlbmRDaGlsZChlKS5pZD1TLCFDLmdldEVsZW1lbnRzQnlOYW1lfHwhQy5nZXRFbGVtZW50c0J5TmFtZShTKS5sZW5ndGh9KSxkLmdldEJ5SWQ/KGIuZmlsdGVyLklEPWZ1bmN0aW9uKGUpe3ZhciB0PWUucmVwbGFjZSh0ZSxuZSk7cmV0dXJuIGZ1bmN0aW9uKGUpe3JldHVybiBlLmdldEF0dHJpYnV0ZShcImlkXCIpPT09dH19LGIuZmluZC5JRD1mdW5jdGlvbihlLHQpe2lmKFwidW5kZWZpbmVkXCIhPXR5cGVvZiB0LmdldEVsZW1lbnRCeUlkJiZFKXt2YXIgbj10LmdldEVsZW1lbnRCeUlkKGUpO3JldHVybiBuP1tuXTpbXX19KTooYi5maWx0ZXIuSUQ9ZnVuY3Rpb24oZSl7dmFyIG49ZS5yZXBsYWNlKHRlLG5lKTtyZXR1cm4gZnVuY3Rpb24oZSl7dmFyIHQ9XCJ1bmRlZmluZWRcIiE9dHlwZW9mIGUuZ2V0QXR0cmlidXRlTm9kZSYmZS5nZXRBdHRyaWJ1dGVOb2RlKFwiaWRcIik7cmV0dXJuIHQmJnQudmFsdWU9PT1ufX0sYi5maW5kLklEPWZ1bmN0aW9uKGUsdCl7aWYoXCJ1bmRlZmluZWRcIiE9dHlwZW9mIHQuZ2V0RWxlbWVudEJ5SWQmJkUpe3ZhciBuLHIsaSxvPXQuZ2V0RWxlbWVudEJ5SWQoZSk7aWYobyl7aWYoKG49by5nZXRBdHRyaWJ1dGVOb2RlKFwiaWRcIikpJiZuLnZhbHVlPT09ZSlyZXR1cm5bb107aT10LmdldEVsZW1lbnRzQnlOYW1lKGUpLHI9MDt3aGlsZShvPWlbcisrXSlpZigobj1vLmdldEF0dHJpYnV0ZU5vZGUoXCJpZFwiKSkmJm4udmFsdWU9PT1lKXJldHVybltvXX1yZXR1cm5bXX19KSxiLmZpbmQuVEFHPWQuZ2V0RWxlbWVudHNCeVRhZ05hbWU/ZnVuY3Rpb24oZSx0KXtyZXR1cm5cInVuZGVmaW5lZFwiIT10eXBlb2YgdC5nZXRFbGVtZW50c0J5VGFnTmFtZT90LmdldEVsZW1lbnRzQnlUYWdOYW1lKGUpOmQucXNhP3QucXVlcnlTZWxlY3RvckFsbChlKTp2b2lkIDB9OmZ1bmN0aW9uKGUsdCl7dmFyIG4scj1bXSxpPTAsbz10LmdldEVsZW1lbnRzQnlUYWdOYW1lKGUpO2lmKFwiKlwiPT09ZSl7d2hpbGUobj1vW2krK10pMT09PW4ubm9kZVR5cGUmJnIucHVzaChuKTtyZXR1cm4gcn1yZXR1cm4gb30sYi5maW5kLkNMQVNTPWQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSYmZnVuY3Rpb24oZSx0KXtpZihcInVuZGVmaW5lZFwiIT10eXBlb2YgdC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lJiZFKXJldHVybiB0LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoZSl9LHM9W10sdj1bXSwoZC5xc2E9Sy50ZXN0KEMucXVlcnlTZWxlY3RvckFsbCkpJiYoY2UoZnVuY3Rpb24oZSl7dmFyIHQ7YS5hcHBlbmRDaGlsZChlKS5pbm5lckhUTUw9XCI8YSBpZD0nXCIrUytcIic+PC9hPjxzZWxlY3QgaWQ9J1wiK1MrXCItXFxyXFxcXCcgbXNhbGxvd2NhcHR1cmU9Jyc+PG9wdGlvbiBzZWxlY3RlZD0nJz48L29wdGlvbj48L3NlbGVjdD5cIixlLnF1ZXJ5U2VsZWN0b3JBbGwoXCJbbXNhbGxvd2NhcHR1cmVePScnXVwiKS5sZW5ndGgmJnYucHVzaChcIlsqXiRdPVwiK00rXCIqKD86Jyd8XFxcIlxcXCIpXCIpLGUucXVlcnlTZWxlY3RvckFsbChcIltzZWxlY3RlZF1cIikubGVuZ3RofHx2LnB1c2goXCJcXFxcW1wiK00rXCIqKD86dmFsdWV8XCIrUitcIilcIiksZS5xdWVyeVNlbGVjdG9yQWxsKFwiW2lkfj1cIitTK1wiLV1cIikubGVuZ3RofHx2LnB1c2goXCJ+PVwiKSwodD1DLmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKSkuc2V0QXR0cmlidXRlKFwibmFtZVwiLFwiXCIpLGUuYXBwZW5kQ2hpbGQodCksZS5xdWVyeVNlbGVjdG9yQWxsKFwiW25hbWU9JyddXCIpLmxlbmd0aHx8di5wdXNoKFwiXFxcXFtcIitNK1wiKm5hbWVcIitNK1wiKj1cIitNK1wiKig/OicnfFxcXCJcXFwiKVwiKSxlLnF1ZXJ5U2VsZWN0b3JBbGwoXCI6Y2hlY2tlZFwiKS5sZW5ndGh8fHYucHVzaChcIjpjaGVja2VkXCIpLGUucXVlcnlTZWxlY3RvckFsbChcImEjXCIrUytcIisqXCIpLmxlbmd0aHx8di5wdXNoKFwiLiMuK1srfl1cIiksZS5xdWVyeVNlbGVjdG9yQWxsKFwiXFxcXFxcZlwiKSx2LnB1c2goXCJbXFxcXHJcXFxcblxcXFxmXVwiKX0pLGNlKGZ1bmN0aW9uKGUpe2UuaW5uZXJIVE1MPVwiPGEgaHJlZj0nJyBkaXNhYmxlZD0nZGlzYWJsZWQnPjwvYT48c2VsZWN0IGRpc2FibGVkPSdkaXNhYmxlZCc+PG9wdGlvbi8+PC9zZWxlY3Q+XCI7dmFyIHQ9Qy5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7dC5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsXCJoaWRkZW5cIiksZS5hcHBlbmRDaGlsZCh0KS5zZXRBdHRyaWJ1dGUoXCJuYW1lXCIsXCJEXCIpLGUucXVlcnlTZWxlY3RvckFsbChcIltuYW1lPWRdXCIpLmxlbmd0aCYmdi5wdXNoKFwibmFtZVwiK00rXCIqWypeJHwhfl0/PVwiKSwyIT09ZS5xdWVyeVNlbGVjdG9yQWxsKFwiOmVuYWJsZWRcIikubGVuZ3RoJiZ2LnB1c2goXCI6ZW5hYmxlZFwiLFwiOmRpc2FibGVkXCIpLGEuYXBwZW5kQ2hpbGQoZSkuZGlzYWJsZWQ9ITAsMiE9PWUucXVlcnlTZWxlY3RvckFsbChcIjpkaXNhYmxlZFwiKS5sZW5ndGgmJnYucHVzaChcIjplbmFibGVkXCIsXCI6ZGlzYWJsZWRcIiksZS5xdWVyeVNlbGVjdG9yQWxsKFwiKiw6eFwiKSx2LnB1c2goXCIsLio6XCIpfSkpLChkLm1hdGNoZXNTZWxlY3Rvcj1LLnRlc3QoYz1hLm1hdGNoZXN8fGEud2Via2l0TWF0Y2hlc1NlbGVjdG9yfHxhLm1vek1hdGNoZXNTZWxlY3Rvcnx8YS5vTWF0Y2hlc1NlbGVjdG9yfHxhLm1zTWF0Y2hlc1NlbGVjdG9yKSkmJmNlKGZ1bmN0aW9uKGUpe2QuZGlzY29ubmVjdGVkTWF0Y2g9Yy5jYWxsKGUsXCIqXCIpLGMuY2FsbChlLFwiW3MhPScnXTp4XCIpLHMucHVzaChcIiE9XCIsRil9KSx2PXYubGVuZ3RoJiZuZXcgUmVnRXhwKHYuam9pbihcInxcIikpLHM9cy5sZW5ndGgmJm5ldyBSZWdFeHAocy5qb2luKFwifFwiKSksdD1LLnRlc3QoYS5jb21wYXJlRG9jdW1lbnRQb3NpdGlvbikseT10fHxLLnRlc3QoYS5jb250YWlucyk/ZnVuY3Rpb24oZSx0KXt2YXIgbj05PT09ZS5ub2RlVHlwZT9lLmRvY3VtZW50RWxlbWVudDplLHI9dCYmdC5wYXJlbnROb2RlO3JldHVybiBlPT09cnx8ISghcnx8MSE9PXIubm9kZVR5cGV8fCEobi5jb250YWlucz9uLmNvbnRhaW5zKHIpOmUuY29tcGFyZURvY3VtZW50UG9zaXRpb24mJjE2JmUuY29tcGFyZURvY3VtZW50UG9zaXRpb24ocikpKX06ZnVuY3Rpb24oZSx0KXtpZih0KXdoaWxlKHQ9dC5wYXJlbnROb2RlKWlmKHQ9PT1lKXJldHVybiEwO3JldHVybiExfSxEPXQ/ZnVuY3Rpb24oZSx0KXtpZihlPT09dClyZXR1cm4gbD0hMCwwO3ZhciBuPSFlLmNvbXBhcmVEb2N1bWVudFBvc2l0aW9uLSF0LmNvbXBhcmVEb2N1bWVudFBvc2l0aW9uO3JldHVybiBufHwoMSYobj0oZS5vd25lckRvY3VtZW50fHxlKT09KHQub3duZXJEb2N1bWVudHx8dCk/ZS5jb21wYXJlRG9jdW1lbnRQb3NpdGlvbih0KToxKXx8IWQuc29ydERldGFjaGVkJiZ0LmNvbXBhcmVEb2N1bWVudFBvc2l0aW9uKGUpPT09bj9lPT1DfHxlLm93bmVyRG9jdW1lbnQ9PXAmJnkocCxlKT8tMTp0PT1DfHx0Lm93bmVyRG9jdW1lbnQ9PXAmJnkocCx0KT8xOnU/UCh1LGUpLVAodSx0KTowOjQmbj8tMToxKX06ZnVuY3Rpb24oZSx0KXtpZihlPT09dClyZXR1cm4gbD0hMCwwO3ZhciBuLHI9MCxpPWUucGFyZW50Tm9kZSxvPXQucGFyZW50Tm9kZSxhPVtlXSxzPVt0XTtpZighaXx8IW8pcmV0dXJuIGU9PUM/LTE6dD09Qz8xOmk/LTE6bz8xOnU/UCh1LGUpLVAodSx0KTowO2lmKGk9PT1vKXJldHVybiBwZShlLHQpO249ZTt3aGlsZShuPW4ucGFyZW50Tm9kZSlhLnVuc2hpZnQobik7bj10O3doaWxlKG49bi5wYXJlbnROb2RlKXMudW5zaGlmdChuKTt3aGlsZShhW3JdPT09c1tyXSlyKys7cmV0dXJuIHI/cGUoYVtyXSxzW3JdKTphW3JdPT1wPy0xOnNbcl09PXA/MTowfSksQ30sc2UubWF0Y2hlcz1mdW5jdGlvbihlLHQpe3JldHVybiBzZShlLG51bGwsbnVsbCx0KX0sc2UubWF0Y2hlc1NlbGVjdG9yPWZ1bmN0aW9uKGUsdCl7aWYoVChlKSxkLm1hdGNoZXNTZWxlY3RvciYmRSYmIU5bdCtcIiBcIl0mJighc3x8IXMudGVzdCh0KSkmJighdnx8IXYudGVzdCh0KSkpdHJ5e3ZhciBuPWMuY2FsbChlLHQpO2lmKG58fGQuZGlzY29ubmVjdGVkTWF0Y2h8fGUuZG9jdW1lbnQmJjExIT09ZS5kb2N1bWVudC5ub2RlVHlwZSlyZXR1cm4gbn1jYXRjaChlKXtOKHQsITApfXJldHVybiAwPHNlKHQsQyxudWxsLFtlXSkubGVuZ3RofSxzZS5jb250YWlucz1mdW5jdGlvbihlLHQpe3JldHVybihlLm93bmVyRG9jdW1lbnR8fGUpIT1DJiZUKGUpLHkoZSx0KX0sc2UuYXR0cj1mdW5jdGlvbihlLHQpeyhlLm93bmVyRG9jdW1lbnR8fGUpIT1DJiZUKGUpO3ZhciBuPWIuYXR0ckhhbmRsZVt0LnRvTG93ZXJDYXNlKCldLHI9biYmai5jYWxsKGIuYXR0ckhhbmRsZSx0LnRvTG93ZXJDYXNlKCkpP24oZSx0LCFFKTp2b2lkIDA7cmV0dXJuIHZvaWQgMCE9PXI/cjpkLmF0dHJpYnV0ZXN8fCFFP2UuZ2V0QXR0cmlidXRlKHQpOihyPWUuZ2V0QXR0cmlidXRlTm9kZSh0KSkmJnIuc3BlY2lmaWVkP3IudmFsdWU6bnVsbH0sc2UuZXNjYXBlPWZ1bmN0aW9uKGUpe3JldHVybihlK1wiXCIpLnJlcGxhY2UocmUsaWUpfSxzZS5lcnJvcj1mdW5jdGlvbihlKXt0aHJvdyBuZXcgRXJyb3IoXCJTeW50YXggZXJyb3IsIHVucmVjb2duaXplZCBleHByZXNzaW9uOiBcIitlKX0sc2UudW5pcXVlU29ydD1mdW5jdGlvbihlKXt2YXIgdCxuPVtdLHI9MCxpPTA7aWYobD0hZC5kZXRlY3REdXBsaWNhdGVzLHU9IWQuc29ydFN0YWJsZSYmZS5zbGljZSgwKSxlLnNvcnQoRCksbCl7d2hpbGUodD1lW2krK10pdD09PWVbaV0mJihyPW4ucHVzaChpKSk7d2hpbGUoci0tKWUuc3BsaWNlKG5bcl0sMSl9cmV0dXJuIHU9bnVsbCxlfSxvPXNlLmdldFRleHQ9ZnVuY3Rpb24oZSl7dmFyIHQsbj1cIlwiLHI9MCxpPWUubm9kZVR5cGU7aWYoaSl7aWYoMT09PWl8fDk9PT1pfHwxMT09PWkpe2lmKFwic3RyaW5nXCI9PXR5cGVvZiBlLnRleHRDb250ZW50KXJldHVybiBlLnRleHRDb250ZW50O2ZvcihlPWUuZmlyc3RDaGlsZDtlO2U9ZS5uZXh0U2libGluZyluKz1vKGUpfWVsc2UgaWYoMz09PWl8fDQ9PT1pKXJldHVybiBlLm5vZGVWYWx1ZX1lbHNlIHdoaWxlKHQ9ZVtyKytdKW4rPW8odCk7cmV0dXJuIG59LChiPXNlLnNlbGVjdG9ycz17Y2FjaGVMZW5ndGg6NTAsY3JlYXRlUHNldWRvOmxlLG1hdGNoOkcsYXR0ckhhbmRsZTp7fSxmaW5kOnt9LHJlbGF0aXZlOntcIj5cIjp7ZGlyOlwicGFyZW50Tm9kZVwiLGZpcnN0OiEwfSxcIiBcIjp7ZGlyOlwicGFyZW50Tm9kZVwifSxcIitcIjp7ZGlyOlwicHJldmlvdXNTaWJsaW5nXCIsZmlyc3Q6ITB9LFwiflwiOntkaXI6XCJwcmV2aW91c1NpYmxpbmdcIn19LHByZUZpbHRlcjp7QVRUUjpmdW5jdGlvbihlKXtyZXR1cm4gZVsxXT1lWzFdLnJlcGxhY2UodGUsbmUpLGVbM109KGVbM118fGVbNF18fGVbNV18fFwiXCIpLnJlcGxhY2UodGUsbmUpLFwifj1cIj09PWVbMl0mJihlWzNdPVwiIFwiK2VbM10rXCIgXCIpLGUuc2xpY2UoMCw0KX0sQ0hJTEQ6ZnVuY3Rpb24oZSl7cmV0dXJuIGVbMV09ZVsxXS50b0xvd2VyQ2FzZSgpLFwibnRoXCI9PT1lWzFdLnNsaWNlKDAsMyk/KGVbM118fHNlLmVycm9yKGVbMF0pLGVbNF09KyhlWzRdP2VbNV0rKGVbNl18fDEpOjIqKFwiZXZlblwiPT09ZVszXXx8XCJvZGRcIj09PWVbM10pKSxlWzVdPSsoZVs3XStlWzhdfHxcIm9kZFwiPT09ZVszXSkpOmVbM10mJnNlLmVycm9yKGVbMF0pLGV9LFBTRVVETzpmdW5jdGlvbihlKXt2YXIgdCxuPSFlWzZdJiZlWzJdO3JldHVybiBHLkNISUxELnRlc3QoZVswXSk/bnVsbDooZVszXT9lWzJdPWVbNF18fGVbNV18fFwiXCI6biYmWC50ZXN0KG4pJiYodD1oKG4sITApKSYmKHQ9bi5pbmRleE9mKFwiKVwiLG4ubGVuZ3RoLXQpLW4ubGVuZ3RoKSYmKGVbMF09ZVswXS5zbGljZSgwLHQpLGVbMl09bi5zbGljZSgwLHQpKSxlLnNsaWNlKDAsMykpfX0sZmlsdGVyOntUQUc6ZnVuY3Rpb24oZSl7dmFyIHQ9ZS5yZXBsYWNlKHRlLG5lKS50b0xvd2VyQ2FzZSgpO3JldHVyblwiKlwiPT09ZT9mdW5jdGlvbigpe3JldHVybiEwfTpmdW5jdGlvbihlKXtyZXR1cm4gZS5ub2RlTmFtZSYmZS5ub2RlTmFtZS50b0xvd2VyQ2FzZSgpPT09dH19LENMQVNTOmZ1bmN0aW9uKGUpe3ZhciB0PW1bZStcIiBcIl07cmV0dXJuIHR8fCh0PW5ldyBSZWdFeHAoXCIoXnxcIitNK1wiKVwiK2UrXCIoXCIrTStcInwkKVwiKSkmJm0oZSxmdW5jdGlvbihlKXtyZXR1cm4gdC50ZXN0KFwic3RyaW5nXCI9PXR5cGVvZiBlLmNsYXNzTmFtZSYmZS5jbGFzc05hbWV8fFwidW5kZWZpbmVkXCIhPXR5cGVvZiBlLmdldEF0dHJpYnV0ZSYmZS5nZXRBdHRyaWJ1dGUoXCJjbGFzc1wiKXx8XCJcIil9KX0sQVRUUjpmdW5jdGlvbihuLHIsaSl7cmV0dXJuIGZ1bmN0aW9uKGUpe3ZhciB0PXNlLmF0dHIoZSxuKTtyZXR1cm4gbnVsbD09dD9cIiE9XCI9PT1yOiFyfHwodCs9XCJcIixcIj1cIj09PXI/dD09PWk6XCIhPVwiPT09cj90IT09aTpcIl49XCI9PT1yP2kmJjA9PT10LmluZGV4T2YoaSk6XCIqPVwiPT09cj9pJiYtMTx0LmluZGV4T2YoaSk6XCIkPVwiPT09cj9pJiZ0LnNsaWNlKC1pLmxlbmd0aCk9PT1pOlwifj1cIj09PXI/LTE8KFwiIFwiK3QucmVwbGFjZShCLFwiIFwiKStcIiBcIikuaW5kZXhPZihpKTpcInw9XCI9PT1yJiYodD09PWl8fHQuc2xpY2UoMCxpLmxlbmd0aCsxKT09PWkrXCItXCIpKX19LENISUxEOmZ1bmN0aW9uKGgsZSx0LGcsdil7dmFyIHk9XCJudGhcIiE9PWguc2xpY2UoMCwzKSxtPVwibGFzdFwiIT09aC5zbGljZSgtNCkseD1cIm9mLXR5cGVcIj09PWU7cmV0dXJuIDE9PT1nJiYwPT09dj9mdW5jdGlvbihlKXtyZXR1cm4hIWUucGFyZW50Tm9kZX06ZnVuY3Rpb24oZSx0LG4pe3ZhciByLGksbyxhLHMsdSxsPXkhPT1tP1wibmV4dFNpYmxpbmdcIjpcInByZXZpb3VzU2libGluZ1wiLGM9ZS5wYXJlbnROb2RlLGY9eCYmZS5ub2RlTmFtZS50b0xvd2VyQ2FzZSgpLHA9IW4mJiF4LGQ9ITE7aWYoYyl7aWYoeSl7d2hpbGUobCl7YT1lO3doaWxlKGE9YVtsXSlpZih4P2Eubm9kZU5hbWUudG9Mb3dlckNhc2UoKT09PWY6MT09PWEubm9kZVR5cGUpcmV0dXJuITE7dT1sPVwib25seVwiPT09aCYmIXUmJlwibmV4dFNpYmxpbmdcIn1yZXR1cm4hMH1pZih1PVttP2MuZmlyc3RDaGlsZDpjLmxhc3RDaGlsZF0sbSYmcCl7ZD0ocz0ocj0oaT0obz0oYT1jKVtTXXx8KGFbU109e30pKVthLnVuaXF1ZUlEXXx8KG9bYS51bmlxdWVJRF09e30pKVtoXXx8W10pWzBdPT09ayYmclsxXSkmJnJbMl0sYT1zJiZjLmNoaWxkTm9kZXNbc107d2hpbGUoYT0rK3MmJmEmJmFbbF18fChkPXM9MCl8fHUucG9wKCkpaWYoMT09PWEubm9kZVR5cGUmJisrZCYmYT09PWUpe2lbaF09W2sscyxkXTticmVha319ZWxzZSBpZihwJiYoZD1zPShyPShpPShvPShhPWUpW1NdfHwoYVtTXT17fSkpW2EudW5pcXVlSURdfHwob1thLnVuaXF1ZUlEXT17fSkpW2hdfHxbXSlbMF09PT1rJiZyWzFdKSwhMT09PWQpd2hpbGUoYT0rK3MmJmEmJmFbbF18fChkPXM9MCl8fHUucG9wKCkpaWYoKHg/YS5ub2RlTmFtZS50b0xvd2VyQ2FzZSgpPT09ZjoxPT09YS5ub2RlVHlwZSkmJisrZCYmKHAmJigoaT0obz1hW1NdfHwoYVtTXT17fSkpW2EudW5pcXVlSURdfHwob1thLnVuaXF1ZUlEXT17fSkpW2hdPVtrLGRdKSxhPT09ZSkpYnJlYWs7cmV0dXJuKGQtPXYpPT09Z3x8ZCVnPT0wJiYwPD1kL2d9fX0sUFNFVURPOmZ1bmN0aW9uKGUsbyl7dmFyIHQsYT1iLnBzZXVkb3NbZV18fGIuc2V0RmlsdGVyc1tlLnRvTG93ZXJDYXNlKCldfHxzZS5lcnJvcihcInVuc3VwcG9ydGVkIHBzZXVkbzogXCIrZSk7cmV0dXJuIGFbU10/YShvKToxPGEubGVuZ3RoPyh0PVtlLGUsXCJcIixvXSxiLnNldEZpbHRlcnMuaGFzT3duUHJvcGVydHkoZS50b0xvd2VyQ2FzZSgpKT9sZShmdW5jdGlvbihlLHQpe3ZhciBuLHI9YShlLG8pLGk9ci5sZW5ndGg7d2hpbGUoaS0tKWVbbj1QKGUscltpXSldPSEodFtuXT1yW2ldKX0pOmZ1bmN0aW9uKGUpe3JldHVybiBhKGUsMCx0KX0pOmF9fSxwc2V1ZG9zOntub3Q6bGUoZnVuY3Rpb24oZSl7dmFyIHI9W10saT1bXSxzPWYoZS5yZXBsYWNlKCQsXCIkMVwiKSk7cmV0dXJuIHNbU10/bGUoZnVuY3Rpb24oZSx0LG4scil7dmFyIGksbz1zKGUsbnVsbCxyLFtdKSxhPWUubGVuZ3RoO3doaWxlKGEtLSkoaT1vW2FdKSYmKGVbYV09ISh0W2FdPWkpKX0pOmZ1bmN0aW9uKGUsdCxuKXtyZXR1cm4gclswXT1lLHMocixudWxsLG4saSksclswXT1udWxsLCFpLnBvcCgpfX0pLGhhczpsZShmdW5jdGlvbih0KXtyZXR1cm4gZnVuY3Rpb24oZSl7cmV0dXJuIDA8c2UodCxlKS5sZW5ndGh9fSksY29udGFpbnM6bGUoZnVuY3Rpb24odCl7cmV0dXJuIHQ9dC5yZXBsYWNlKHRlLG5lKSxmdW5jdGlvbihlKXtyZXR1cm4tMTwoZS50ZXh0Q29udGVudHx8byhlKSkuaW5kZXhPZih0KX19KSxsYW5nOmxlKGZ1bmN0aW9uKG4pe3JldHVybiBWLnRlc3Qobnx8XCJcIil8fHNlLmVycm9yKFwidW5zdXBwb3J0ZWQgbGFuZzogXCIrbiksbj1uLnJlcGxhY2UodGUsbmUpLnRvTG93ZXJDYXNlKCksZnVuY3Rpb24oZSl7dmFyIHQ7ZG97aWYodD1FP2UubGFuZzplLmdldEF0dHJpYnV0ZShcInhtbDpsYW5nXCIpfHxlLmdldEF0dHJpYnV0ZShcImxhbmdcIikpcmV0dXJuKHQ9dC50b0xvd2VyQ2FzZSgpKT09PW58fDA9PT10LmluZGV4T2YobitcIi1cIil9d2hpbGUoKGU9ZS5wYXJlbnROb2RlKSYmMT09PWUubm9kZVR5cGUpO3JldHVybiExfX0pLHRhcmdldDpmdW5jdGlvbihlKXt2YXIgdD1uLmxvY2F0aW9uJiZuLmxvY2F0aW9uLmhhc2g7cmV0dXJuIHQmJnQuc2xpY2UoMSk9PT1lLmlkfSxyb290OmZ1bmN0aW9uKGUpe3JldHVybiBlPT09YX0sZm9jdXM6ZnVuY3Rpb24oZSl7cmV0dXJuIGU9PT1DLmFjdGl2ZUVsZW1lbnQmJighQy5oYXNGb2N1c3x8Qy5oYXNGb2N1cygpKSYmISEoZS50eXBlfHxlLmhyZWZ8fH5lLnRhYkluZGV4KX0sZW5hYmxlZDpnZSghMSksZGlzYWJsZWQ6Z2UoITApLGNoZWNrZWQ6ZnVuY3Rpb24oZSl7dmFyIHQ9ZS5ub2RlTmFtZS50b0xvd2VyQ2FzZSgpO3JldHVyblwiaW5wdXRcIj09PXQmJiEhZS5jaGVja2VkfHxcIm9wdGlvblwiPT09dCYmISFlLnNlbGVjdGVkfSxzZWxlY3RlZDpmdW5jdGlvbihlKXtyZXR1cm4gZS5wYXJlbnROb2RlJiZlLnBhcmVudE5vZGUuc2VsZWN0ZWRJbmRleCwhMD09PWUuc2VsZWN0ZWR9LGVtcHR5OmZ1bmN0aW9uKGUpe2ZvcihlPWUuZmlyc3RDaGlsZDtlO2U9ZS5uZXh0U2libGluZylpZihlLm5vZGVUeXBlPDYpcmV0dXJuITE7cmV0dXJuITB9LHBhcmVudDpmdW5jdGlvbihlKXtyZXR1cm4hYi5wc2V1ZG9zLmVtcHR5KGUpfSxoZWFkZXI6ZnVuY3Rpb24oZSl7cmV0dXJuIEoudGVzdChlLm5vZGVOYW1lKX0saW5wdXQ6ZnVuY3Rpb24oZSl7cmV0dXJuIFEudGVzdChlLm5vZGVOYW1lKX0sYnV0dG9uOmZ1bmN0aW9uKGUpe3ZhciB0PWUubm9kZU5hbWUudG9Mb3dlckNhc2UoKTtyZXR1cm5cImlucHV0XCI9PT10JiZcImJ1dHRvblwiPT09ZS50eXBlfHxcImJ1dHRvblwiPT09dH0sdGV4dDpmdW5jdGlvbihlKXt2YXIgdDtyZXR1cm5cImlucHV0XCI9PT1lLm5vZGVOYW1lLnRvTG93ZXJDYXNlKCkmJlwidGV4dFwiPT09ZS50eXBlJiYobnVsbD09KHQ9ZS5nZXRBdHRyaWJ1dGUoXCJ0eXBlXCIpKXx8XCJ0ZXh0XCI9PT10LnRvTG93ZXJDYXNlKCkpfSxmaXJzdDp2ZShmdW5jdGlvbigpe3JldHVyblswXX0pLGxhc3Q6dmUoZnVuY3Rpb24oZSx0KXtyZXR1cm5bdC0xXX0pLGVxOnZlKGZ1bmN0aW9uKGUsdCxuKXtyZXR1cm5bbjwwP24rdDpuXX0pLGV2ZW46dmUoZnVuY3Rpb24oZSx0KXtmb3IodmFyIG49MDtuPHQ7bis9MillLnB1c2gobik7cmV0dXJuIGV9KSxvZGQ6dmUoZnVuY3Rpb24oZSx0KXtmb3IodmFyIG49MTtuPHQ7bis9MillLnB1c2gobik7cmV0dXJuIGV9KSxsdDp2ZShmdW5jdGlvbihlLHQsbil7Zm9yKHZhciByPW48MD9uK3Q6dDxuP3Q6bjswPD0tLXI7KWUucHVzaChyKTtyZXR1cm4gZX0pLGd0OnZlKGZ1bmN0aW9uKGUsdCxuKXtmb3IodmFyIHI9bjwwP24rdDpuOysrcjx0OyllLnB1c2gocik7cmV0dXJuIGV9KX19KS5wc2V1ZG9zLm50aD1iLnBzZXVkb3MuZXEse3JhZGlvOiEwLGNoZWNrYm94OiEwLGZpbGU6ITAscGFzc3dvcmQ6ITAsaW1hZ2U6ITB9KWIucHNldWRvc1tlXT1kZShlKTtmb3IoZSBpbntzdWJtaXQ6ITAscmVzZXQ6ITB9KWIucHNldWRvc1tlXT1oZShlKTtmdW5jdGlvbiBtZSgpe31mdW5jdGlvbiB4ZShlKXtmb3IodmFyIHQ9MCxuPWUubGVuZ3RoLHI9XCJcIjt0PG47dCsrKXIrPWVbdF0udmFsdWU7cmV0dXJuIHJ9ZnVuY3Rpb24gYmUocyxlLHQpe3ZhciB1PWUuZGlyLGw9ZS5uZXh0LGM9bHx8dSxmPXQmJlwicGFyZW50Tm9kZVwiPT09YyxwPXIrKztyZXR1cm4gZS5maXJzdD9mdW5jdGlvbihlLHQsbil7d2hpbGUoZT1lW3VdKWlmKDE9PT1lLm5vZGVUeXBlfHxmKXJldHVybiBzKGUsdCxuKTtyZXR1cm4hMX06ZnVuY3Rpb24oZSx0LG4pe3ZhciByLGksbyxhPVtrLHBdO2lmKG4pe3doaWxlKGU9ZVt1XSlpZigoMT09PWUubm9kZVR5cGV8fGYpJiZzKGUsdCxuKSlyZXR1cm4hMH1lbHNlIHdoaWxlKGU9ZVt1XSlpZigxPT09ZS5ub2RlVHlwZXx8ZilpZihpPShvPWVbU118fChlW1NdPXt9KSlbZS51bmlxdWVJRF18fChvW2UudW5pcXVlSURdPXt9KSxsJiZsPT09ZS5ub2RlTmFtZS50b0xvd2VyQ2FzZSgpKWU9ZVt1XXx8ZTtlbHNle2lmKChyPWlbY10pJiZyWzBdPT09ayYmclsxXT09PXApcmV0dXJuIGFbMl09clsyXTtpZigoaVtjXT1hKVsyXT1zKGUsdCxuKSlyZXR1cm4hMH1yZXR1cm4hMX19ZnVuY3Rpb24gd2UoaSl7cmV0dXJuIDE8aS5sZW5ndGg/ZnVuY3Rpb24oZSx0LG4pe3ZhciByPWkubGVuZ3RoO3doaWxlKHItLSlpZighaVtyXShlLHQsbikpcmV0dXJuITE7cmV0dXJuITB9OmlbMF19ZnVuY3Rpb24gVGUoZSx0LG4scixpKXtmb3IodmFyIG8sYT1bXSxzPTAsdT1lLmxlbmd0aCxsPW51bGwhPXQ7czx1O3MrKykobz1lW3NdKSYmKG4mJiFuKG8scixpKXx8KGEucHVzaChvKSxsJiZ0LnB1c2gocykpKTtyZXR1cm4gYX1mdW5jdGlvbiBDZShkLGgsZyx2LHksZSl7cmV0dXJuIHYmJiF2W1NdJiYodj1DZSh2KSkseSYmIXlbU10mJih5PUNlKHksZSkpLGxlKGZ1bmN0aW9uKGUsdCxuLHIpe3ZhciBpLG8sYSxzPVtdLHU9W10sbD10Lmxlbmd0aCxjPWV8fGZ1bmN0aW9uKGUsdCxuKXtmb3IodmFyIHI9MCxpPXQubGVuZ3RoO3I8aTtyKyspc2UoZSx0W3JdLG4pO3JldHVybiBufShofHxcIipcIixuLm5vZGVUeXBlP1tuXTpuLFtdKSxmPSFkfHwhZSYmaD9jOlRlKGMscyxkLG4scikscD1nP3l8fChlP2Q6bHx8dik/W106dDpmO2lmKGcmJmcoZixwLG4sciksdil7aT1UZShwLHUpLHYoaSxbXSxuLHIpLG89aS5sZW5ndGg7d2hpbGUoby0tKShhPWlbb10pJiYocFt1W29dXT0hKGZbdVtvXV09YSkpfWlmKGUpe2lmKHl8fGQpe2lmKHkpe2k9W10sbz1wLmxlbmd0aDt3aGlsZShvLS0pKGE9cFtvXSkmJmkucHVzaChmW29dPWEpO3kobnVsbCxwPVtdLGkscil9bz1wLmxlbmd0aDt3aGlsZShvLS0pKGE9cFtvXSkmJi0xPChpPXk/UChlLGEpOnNbb10pJiYoZVtpXT0hKHRbaV09YSkpfX1lbHNlIHA9VGUocD09PXQ/cC5zcGxpY2UobCxwLmxlbmd0aCk6cCkseT95KG51bGwsdCxwLHIpOkguYXBwbHkodCxwKX0pfWZ1bmN0aW9uIEVlKGUpe2Zvcih2YXIgaSx0LG4scj1lLmxlbmd0aCxvPWIucmVsYXRpdmVbZVswXS50eXBlXSxhPW98fGIucmVsYXRpdmVbXCIgXCJdLHM9bz8xOjAsdT1iZShmdW5jdGlvbihlKXtyZXR1cm4gZT09PWl9LGEsITApLGw9YmUoZnVuY3Rpb24oZSl7cmV0dXJuLTE8UChpLGUpfSxhLCEwKSxjPVtmdW5jdGlvbihlLHQsbil7dmFyIHI9IW8mJihufHx0IT09dyl8fCgoaT10KS5ub2RlVHlwZT91KGUsdCxuKTpsKGUsdCxuKSk7cmV0dXJuIGk9bnVsbCxyfV07czxyO3MrKylpZih0PWIucmVsYXRpdmVbZVtzXS50eXBlXSljPVtiZSh3ZShjKSx0KV07ZWxzZXtpZigodD1iLmZpbHRlcltlW3NdLnR5cGVdLmFwcGx5KG51bGwsZVtzXS5tYXRjaGVzKSlbU10pe2ZvcihuPSsrcztuPHI7bisrKWlmKGIucmVsYXRpdmVbZVtuXS50eXBlXSlicmVhaztyZXR1cm4gQ2UoMTxzJiZ3ZShjKSwxPHMmJnhlKGUuc2xpY2UoMCxzLTEpLmNvbmNhdCh7dmFsdWU6XCIgXCI9PT1lW3MtMl0udHlwZT9cIipcIjpcIlwifSkpLnJlcGxhY2UoJCxcIiQxXCIpLHQsczxuJiZFZShlLnNsaWNlKHMsbikpLG48ciYmRWUoZT1lLnNsaWNlKG4pKSxuPHImJnhlKGUpKX1jLnB1c2godCl9cmV0dXJuIHdlKGMpfXJldHVybiBtZS5wcm90b3R5cGU9Yi5maWx0ZXJzPWIucHNldWRvcyxiLnNldEZpbHRlcnM9bmV3IG1lLGg9c2UudG9rZW5pemU9ZnVuY3Rpb24oZSx0KXt2YXIgbixyLGksbyxhLHMsdSxsPXhbZStcIiBcIl07aWYobClyZXR1cm4gdD8wOmwuc2xpY2UoMCk7YT1lLHM9W10sdT1iLnByZUZpbHRlcjt3aGlsZShhKXtmb3IobyBpbiBuJiYhKHI9Xy5leGVjKGEpKXx8KHImJihhPWEuc2xpY2UoclswXS5sZW5ndGgpfHxhKSxzLnB1c2goaT1bXSkpLG49ITEsKHI9ei5leGVjKGEpKSYmKG49ci5zaGlmdCgpLGkucHVzaCh7dmFsdWU6bix0eXBlOnJbMF0ucmVwbGFjZSgkLFwiIFwiKX0pLGE9YS5zbGljZShuLmxlbmd0aCkpLGIuZmlsdGVyKSEocj1HW29dLmV4ZWMoYSkpfHx1W29dJiYhKHI9dVtvXShyKSl8fChuPXIuc2hpZnQoKSxpLnB1c2goe3ZhbHVlOm4sdHlwZTpvLG1hdGNoZXM6cn0pLGE9YS5zbGljZShuLmxlbmd0aCkpO2lmKCFuKWJyZWFrfXJldHVybiB0P2EubGVuZ3RoOmE/c2UuZXJyb3IoZSk6eChlLHMpLnNsaWNlKDApfSxmPXNlLmNvbXBpbGU9ZnVuY3Rpb24oZSx0KXt2YXIgbix2LHksbSx4LHIsaT1bXSxvPVtdLGE9QVtlK1wiIFwiXTtpZighYSl7dHx8KHQ9aChlKSksbj10Lmxlbmd0aDt3aGlsZShuLS0pKGE9RWUodFtuXSkpW1NdP2kucHVzaChhKTpvLnB1c2goYSk7KGE9QShlLCh2PW8sbT0wPCh5PWkpLmxlbmd0aCx4PTA8di5sZW5ndGgscj1mdW5jdGlvbihlLHQsbixyLGkpe3ZhciBvLGEscyx1PTAsbD1cIjBcIixjPWUmJltdLGY9W10scD13LGQ9ZXx8eCYmYi5maW5kLlRBRyhcIipcIixpKSxoPWsrPW51bGw9PXA/MTpNYXRoLnJhbmRvbSgpfHwuMSxnPWQubGVuZ3RoO2ZvcihpJiYodz10PT1DfHx0fHxpKTtsIT09ZyYmbnVsbCE9KG89ZFtsXSk7bCsrKXtpZih4JiZvKXthPTAsdHx8by5vd25lckRvY3VtZW50PT1DfHwoVChvKSxuPSFFKTt3aGlsZShzPXZbYSsrXSlpZihzKG8sdHx8QyxuKSl7ci5wdXNoKG8pO2JyZWFrfWkmJihrPWgpfW0mJigobz0hcyYmbykmJnUtLSxlJiZjLnB1c2gobykpfWlmKHUrPWwsbSYmbCE9PXUpe2E9MDt3aGlsZShzPXlbYSsrXSlzKGMsZix0LG4pO2lmKGUpe2lmKDA8dSl3aGlsZShsLS0pY1tsXXx8ZltsXXx8KGZbbF09cS5jYWxsKHIpKTtmPVRlKGYpfUguYXBwbHkocixmKSxpJiYhZSYmMDxmLmxlbmd0aCYmMTx1K3kubGVuZ3RoJiZzZS51bmlxdWVTb3J0KHIpfXJldHVybiBpJiYoaz1oLHc9cCksY30sbT9sZShyKTpyKSkpLnNlbGVjdG9yPWV9cmV0dXJuIGF9LGc9c2Uuc2VsZWN0PWZ1bmN0aW9uKGUsdCxuLHIpe3ZhciBpLG8sYSxzLHUsbD1cImZ1bmN0aW9uXCI9PXR5cGVvZiBlJiZlLGM9IXImJmgoZT1sLnNlbGVjdG9yfHxlKTtpZihuPW58fFtdLDE9PT1jLmxlbmd0aCl7aWYoMjwobz1jWzBdPWNbMF0uc2xpY2UoMCkpLmxlbmd0aCYmXCJJRFwiPT09KGE9b1swXSkudHlwZSYmOT09PXQubm9kZVR5cGUmJkUmJmIucmVsYXRpdmVbb1sxXS50eXBlXSl7aWYoISh0PShiLmZpbmQuSUQoYS5tYXRjaGVzWzBdLnJlcGxhY2UodGUsbmUpLHQpfHxbXSlbMF0pKXJldHVybiBuO2wmJih0PXQucGFyZW50Tm9kZSksZT1lLnNsaWNlKG8uc2hpZnQoKS52YWx1ZS5sZW5ndGgpfWk9Ry5uZWVkc0NvbnRleHQudGVzdChlKT8wOm8ubGVuZ3RoO3doaWxlKGktLSl7aWYoYT1vW2ldLGIucmVsYXRpdmVbcz1hLnR5cGVdKWJyZWFrO2lmKCh1PWIuZmluZFtzXSkmJihyPXUoYS5tYXRjaGVzWzBdLnJlcGxhY2UodGUsbmUpLGVlLnRlc3Qob1swXS50eXBlKSYmeWUodC5wYXJlbnROb2RlKXx8dCkpKXtpZihvLnNwbGljZShpLDEpLCEoZT1yLmxlbmd0aCYmeGUobykpKXJldHVybiBILmFwcGx5KG4sciksbjticmVha319fXJldHVybihsfHxmKGUsYykpKHIsdCwhRSxuLCF0fHxlZS50ZXN0KGUpJiZ5ZSh0LnBhcmVudE5vZGUpfHx0KSxufSxkLnNvcnRTdGFibGU9Uy5zcGxpdChcIlwiKS5zb3J0KEQpLmpvaW4oXCJcIik9PT1TLGQuZGV0ZWN0RHVwbGljYXRlcz0hIWwsVCgpLGQuc29ydERldGFjaGVkPWNlKGZ1bmN0aW9uKGUpe3JldHVybiAxJmUuY29tcGFyZURvY3VtZW50UG9zaXRpb24oQy5jcmVhdGVFbGVtZW50KFwiZmllbGRzZXRcIikpfSksY2UoZnVuY3Rpb24oZSl7cmV0dXJuIGUuaW5uZXJIVE1MPVwiPGEgaHJlZj0nIyc+PC9hPlwiLFwiI1wiPT09ZS5maXJzdENoaWxkLmdldEF0dHJpYnV0ZShcImhyZWZcIil9KXx8ZmUoXCJ0eXBlfGhyZWZ8aGVpZ2h0fHdpZHRoXCIsZnVuY3Rpb24oZSx0LG4pe2lmKCFuKXJldHVybiBlLmdldEF0dHJpYnV0ZSh0LFwidHlwZVwiPT09dC50b0xvd2VyQ2FzZSgpPzE6Mil9KSxkLmF0dHJpYnV0ZXMmJmNlKGZ1bmN0aW9uKGUpe3JldHVybiBlLmlubmVySFRNTD1cIjxpbnB1dC8+XCIsZS5maXJzdENoaWxkLnNldEF0dHJpYnV0ZShcInZhbHVlXCIsXCJcIiksXCJcIj09PWUuZmlyc3RDaGlsZC5nZXRBdHRyaWJ1dGUoXCJ2YWx1ZVwiKX0pfHxmZShcInZhbHVlXCIsZnVuY3Rpb24oZSx0LG4pe2lmKCFuJiZcImlucHV0XCI9PT1lLm5vZGVOYW1lLnRvTG93ZXJDYXNlKCkpcmV0dXJuIGUuZGVmYXVsdFZhbHVlfSksY2UoZnVuY3Rpb24oZSl7cmV0dXJuIG51bGw9PWUuZ2V0QXR0cmlidXRlKFwiZGlzYWJsZWRcIil9KXx8ZmUoUixmdW5jdGlvbihlLHQsbil7dmFyIHI7aWYoIW4pcmV0dXJuITA9PT1lW3RdP3QudG9Mb3dlckNhc2UoKToocj1lLmdldEF0dHJpYnV0ZU5vZGUodCkpJiZyLnNwZWNpZmllZD9yLnZhbHVlOm51bGx9KSxzZX0oQyk7Uy5maW5kPWQsUy5leHByPWQuc2VsZWN0b3JzLFMuZXhwcltcIjpcIl09Uy5leHByLnBzZXVkb3MsUy51bmlxdWVTb3J0PVMudW5pcXVlPWQudW5pcXVlU29ydCxTLnRleHQ9ZC5nZXRUZXh0LFMuaXNYTUxEb2M9ZC5pc1hNTCxTLmNvbnRhaW5zPWQuY29udGFpbnMsUy5lc2NhcGVTZWxlY3Rvcj1kLmVzY2FwZTt2YXIgaD1mdW5jdGlvbihlLHQsbil7dmFyIHI9W10saT12b2lkIDAhPT1uO3doaWxlKChlPWVbdF0pJiY5IT09ZS5ub2RlVHlwZSlpZigxPT09ZS5ub2RlVHlwZSl7aWYoaSYmUyhlKS5pcyhuKSlicmVhaztyLnB1c2goZSl9cmV0dXJuIHJ9LFQ9ZnVuY3Rpb24oZSx0KXtmb3IodmFyIG49W107ZTtlPWUubmV4dFNpYmxpbmcpMT09PWUubm9kZVR5cGUmJmUhPT10JiZuLnB1c2goZSk7cmV0dXJuIG59LGs9Uy5leHByLm1hdGNoLm5lZWRzQ29udGV4dDtmdW5jdGlvbiBBKGUsdCl7cmV0dXJuIGUubm9kZU5hbWUmJmUubm9kZU5hbWUudG9Mb3dlckNhc2UoKT09PXQudG9Mb3dlckNhc2UoKX12YXIgTj0vXjwoW2Etel1bXlxcL1xcMD46XFx4MjBcXHRcXHJcXG5cXGZdKilbXFx4MjBcXHRcXHJcXG5cXGZdKlxcLz8+KD86PFxcL1xcMT58KSQvaTtmdW5jdGlvbiBEKGUsbixyKXtyZXR1cm4gbShuKT9TLmdyZXAoZSxmdW5jdGlvbihlLHQpe3JldHVybiEhbi5jYWxsKGUsdCxlKSE9PXJ9KTpuLm5vZGVUeXBlP1MuZ3JlcChlLGZ1bmN0aW9uKGUpe3JldHVybiBlPT09biE9PXJ9KTpcInN0cmluZ1wiIT10eXBlb2Ygbj9TLmdyZXAoZSxmdW5jdGlvbihlKXtyZXR1cm4tMTxpLmNhbGwobixlKSE9PXJ9KTpTLmZpbHRlcihuLGUscil9Uy5maWx0ZXI9ZnVuY3Rpb24oZSx0LG4pe3ZhciByPXRbMF07cmV0dXJuIG4mJihlPVwiOm5vdChcIitlK1wiKVwiKSwxPT09dC5sZW5ndGgmJjE9PT1yLm5vZGVUeXBlP1MuZmluZC5tYXRjaGVzU2VsZWN0b3IocixlKT9bcl06W106Uy5maW5kLm1hdGNoZXMoZSxTLmdyZXAodCxmdW5jdGlvbihlKXtyZXR1cm4gMT09PWUubm9kZVR5cGV9KSl9LFMuZm4uZXh0ZW5kKHtmaW5kOmZ1bmN0aW9uKGUpe3ZhciB0LG4scj10aGlzLmxlbmd0aCxpPXRoaXM7aWYoXCJzdHJpbmdcIiE9dHlwZW9mIGUpcmV0dXJuIHRoaXMucHVzaFN0YWNrKFMoZSkuZmlsdGVyKGZ1bmN0aW9uKCl7Zm9yKHQ9MDt0PHI7dCsrKWlmKFMuY29udGFpbnMoaVt0XSx0aGlzKSlyZXR1cm4hMH0pKTtmb3Iobj10aGlzLnB1c2hTdGFjayhbXSksdD0wO3Q8cjt0KyspUy5maW5kKGUsaVt0XSxuKTtyZXR1cm4gMTxyP1MudW5pcXVlU29ydChuKTpufSxmaWx0ZXI6ZnVuY3Rpb24oZSl7cmV0dXJuIHRoaXMucHVzaFN0YWNrKEQodGhpcyxlfHxbXSwhMSkpfSxub3Q6ZnVuY3Rpb24oZSl7cmV0dXJuIHRoaXMucHVzaFN0YWNrKEQodGhpcyxlfHxbXSwhMCkpfSxpczpmdW5jdGlvbihlKXtyZXR1cm4hIUQodGhpcyxcInN0cmluZ1wiPT10eXBlb2YgZSYmay50ZXN0KGUpP1MoZSk6ZXx8W10sITEpLmxlbmd0aH19KTt2YXIgaixxPS9eKD86XFxzKig8W1xcd1xcV10rPilbXj5dKnwjKFtcXHctXSspKSQvOyhTLmZuLmluaXQ9ZnVuY3Rpb24oZSx0LG4pe3ZhciByLGk7aWYoIWUpcmV0dXJuIHRoaXM7aWYobj1ufHxqLFwic3RyaW5nXCI9PXR5cGVvZiBlKXtpZighKHI9XCI8XCI9PT1lWzBdJiZcIj5cIj09PWVbZS5sZW5ndGgtMV0mJjM8PWUubGVuZ3RoP1tudWxsLGUsbnVsbF06cS5leGVjKGUpKXx8IXJbMV0mJnQpcmV0dXJuIXR8fHQuanF1ZXJ5Pyh0fHxuKS5maW5kKGUpOnRoaXMuY29uc3RydWN0b3IodCkuZmluZChlKTtpZihyWzFdKXtpZih0PXQgaW5zdGFuY2VvZiBTP3RbMF06dCxTLm1lcmdlKHRoaXMsUy5wYXJzZUhUTUwoclsxXSx0JiZ0Lm5vZGVUeXBlP3Qub3duZXJEb2N1bWVudHx8dDpFLCEwKSksTi50ZXN0KHJbMV0pJiZTLmlzUGxhaW5PYmplY3QodCkpZm9yKHIgaW4gdCltKHRoaXNbcl0pP3RoaXNbcl0odFtyXSk6dGhpcy5hdHRyKHIsdFtyXSk7cmV0dXJuIHRoaXN9cmV0dXJuKGk9RS5nZXRFbGVtZW50QnlJZChyWzJdKSkmJih0aGlzWzBdPWksdGhpcy5sZW5ndGg9MSksdGhpc31yZXR1cm4gZS5ub2RlVHlwZT8odGhpc1swXT1lLHRoaXMubGVuZ3RoPTEsdGhpcyk6bShlKT92b2lkIDAhPT1uLnJlYWR5P24ucmVhZHkoZSk6ZShTKTpTLm1ha2VBcnJheShlLHRoaXMpfSkucHJvdG90eXBlPVMuZm4saj1TKEUpO3ZhciBMPS9eKD86cGFyZW50c3xwcmV2KD86VW50aWx8QWxsKSkvLEg9e2NoaWxkcmVuOiEwLGNvbnRlbnRzOiEwLG5leHQ6ITAscHJldjohMH07ZnVuY3Rpb24gTyhlLHQpe3doaWxlKChlPWVbdF0pJiYxIT09ZS5ub2RlVHlwZSk7cmV0dXJuIGV9Uy5mbi5leHRlbmQoe2hhczpmdW5jdGlvbihlKXt2YXIgdD1TKGUsdGhpcyksbj10Lmxlbmd0aDtyZXR1cm4gdGhpcy5maWx0ZXIoZnVuY3Rpb24oKXtmb3IodmFyIGU9MDtlPG47ZSsrKWlmKFMuY29udGFpbnModGhpcyx0W2VdKSlyZXR1cm4hMH0pfSxjbG9zZXN0OmZ1bmN0aW9uKGUsdCl7dmFyIG4scj0wLGk9dGhpcy5sZW5ndGgsbz1bXSxhPVwic3RyaW5nXCIhPXR5cGVvZiBlJiZTKGUpO2lmKCFrLnRlc3QoZSkpZm9yKDtyPGk7cisrKWZvcihuPXRoaXNbcl07biYmbiE9PXQ7bj1uLnBhcmVudE5vZGUpaWYobi5ub2RlVHlwZTwxMSYmKGE/LTE8YS5pbmRleChuKToxPT09bi5ub2RlVHlwZSYmUy5maW5kLm1hdGNoZXNTZWxlY3RvcihuLGUpKSl7by5wdXNoKG4pO2JyZWFrfXJldHVybiB0aGlzLnB1c2hTdGFjaygxPG8ubGVuZ3RoP1MudW5pcXVlU29ydChvKTpvKX0saW5kZXg6ZnVuY3Rpb24oZSl7cmV0dXJuIGU/XCJzdHJpbmdcIj09dHlwZW9mIGU/aS5jYWxsKFMoZSksdGhpc1swXSk6aS5jYWxsKHRoaXMsZS5qcXVlcnk/ZVswXTplKTp0aGlzWzBdJiZ0aGlzWzBdLnBhcmVudE5vZGU/dGhpcy5maXJzdCgpLnByZXZBbGwoKS5sZW5ndGg6LTF9LGFkZDpmdW5jdGlvbihlLHQpe3JldHVybiB0aGlzLnB1c2hTdGFjayhTLnVuaXF1ZVNvcnQoUy5tZXJnZSh0aGlzLmdldCgpLFMoZSx0KSkpKX0sYWRkQmFjazpmdW5jdGlvbihlKXtyZXR1cm4gdGhpcy5hZGQobnVsbD09ZT90aGlzLnByZXZPYmplY3Q6dGhpcy5wcmV2T2JqZWN0LmZpbHRlcihlKSl9fSksUy5lYWNoKHtwYXJlbnQ6ZnVuY3Rpb24oZSl7dmFyIHQ9ZS5wYXJlbnROb2RlO3JldHVybiB0JiYxMSE9PXQubm9kZVR5cGU/dDpudWxsfSxwYXJlbnRzOmZ1bmN0aW9uKGUpe3JldHVybiBoKGUsXCJwYXJlbnROb2RlXCIpfSxwYXJlbnRzVW50aWw6ZnVuY3Rpb24oZSx0LG4pe3JldHVybiBoKGUsXCJwYXJlbnROb2RlXCIsbil9LG5leHQ6ZnVuY3Rpb24oZSl7cmV0dXJuIE8oZSxcIm5leHRTaWJsaW5nXCIpfSxwcmV2OmZ1bmN0aW9uKGUpe3JldHVybiBPKGUsXCJwcmV2aW91c1NpYmxpbmdcIil9LG5leHRBbGw6ZnVuY3Rpb24oZSl7cmV0dXJuIGgoZSxcIm5leHRTaWJsaW5nXCIpfSxwcmV2QWxsOmZ1bmN0aW9uKGUpe3JldHVybiBoKGUsXCJwcmV2aW91c1NpYmxpbmdcIil9LG5leHRVbnRpbDpmdW5jdGlvbihlLHQsbil7cmV0dXJuIGgoZSxcIm5leHRTaWJsaW5nXCIsbil9LHByZXZVbnRpbDpmdW5jdGlvbihlLHQsbil7cmV0dXJuIGgoZSxcInByZXZpb3VzU2libGluZ1wiLG4pfSxzaWJsaW5nczpmdW5jdGlvbihlKXtyZXR1cm4gVCgoZS5wYXJlbnROb2RlfHx7fSkuZmlyc3RDaGlsZCxlKX0sY2hpbGRyZW46ZnVuY3Rpb24oZSl7cmV0dXJuIFQoZS5maXJzdENoaWxkKX0sY29udGVudHM6ZnVuY3Rpb24oZSl7cmV0dXJuIG51bGwhPWUuY29udGVudERvY3VtZW50JiZyKGUuY29udGVudERvY3VtZW50KT9lLmNvbnRlbnREb2N1bWVudDooQShlLFwidGVtcGxhdGVcIikmJihlPWUuY29udGVudHx8ZSksUy5tZXJnZShbXSxlLmNoaWxkTm9kZXMpKX19LGZ1bmN0aW9uKHIsaSl7Uy5mbltyXT1mdW5jdGlvbihlLHQpe3ZhciBuPVMubWFwKHRoaXMsaSxlKTtyZXR1cm5cIlVudGlsXCIhPT1yLnNsaWNlKC01KSYmKHQ9ZSksdCYmXCJzdHJpbmdcIj09dHlwZW9mIHQmJihuPVMuZmlsdGVyKHQsbikpLDE8dGhpcy5sZW5ndGgmJihIW3JdfHxTLnVuaXF1ZVNvcnQobiksTC50ZXN0KHIpJiZuLnJldmVyc2UoKSksdGhpcy5wdXNoU3RhY2sobil9fSk7dmFyIFA9L1teXFx4MjBcXHRcXHJcXG5cXGZdKy9nO2Z1bmN0aW9uIFIoZSl7cmV0dXJuIGV9ZnVuY3Rpb24gTShlKXt0aHJvdyBlfWZ1bmN0aW9uIEkoZSx0LG4scil7dmFyIGk7dHJ5e2UmJm0oaT1lLnByb21pc2UpP2kuY2FsbChlKS5kb25lKHQpLmZhaWwobik6ZSYmbShpPWUudGhlbik/aS5jYWxsKGUsdCxuKTp0LmFwcGx5KHZvaWQgMCxbZV0uc2xpY2UocikpfWNhdGNoKGUpe24uYXBwbHkodm9pZCAwLFtlXSl9fVMuQ2FsbGJhY2tzPWZ1bmN0aW9uKHIpe3ZhciBlLG47cj1cInN0cmluZ1wiPT10eXBlb2Ygcj8oZT1yLG49e30sUy5lYWNoKGUubWF0Y2goUCl8fFtdLGZ1bmN0aW9uKGUsdCl7blt0XT0hMH0pLG4pOlMuZXh0ZW5kKHt9LHIpO3ZhciBpLHQsbyxhLHM9W10sdT1bXSxsPS0xLGM9ZnVuY3Rpb24oKXtmb3IoYT1hfHxyLm9uY2Usbz1pPSEwO3UubGVuZ3RoO2w9LTEpe3Q9dS5zaGlmdCgpO3doaWxlKCsrbDxzLmxlbmd0aCkhMT09PXNbbF0uYXBwbHkodFswXSx0WzFdKSYmci5zdG9wT25GYWxzZSYmKGw9cy5sZW5ndGgsdD0hMSl9ci5tZW1vcnl8fCh0PSExKSxpPSExLGEmJihzPXQ/W106XCJcIil9LGY9e2FkZDpmdW5jdGlvbigpe3JldHVybiBzJiYodCYmIWkmJihsPXMubGVuZ3RoLTEsdS5wdXNoKHQpKSxmdW5jdGlvbiBuKGUpe1MuZWFjaChlLGZ1bmN0aW9uKGUsdCl7bSh0KT9yLnVuaXF1ZSYmZi5oYXModCl8fHMucHVzaCh0KTp0JiZ0Lmxlbmd0aCYmXCJzdHJpbmdcIiE9PXcodCkmJm4odCl9KX0oYXJndW1lbnRzKSx0JiYhaSYmYygpKSx0aGlzfSxyZW1vdmU6ZnVuY3Rpb24oKXtyZXR1cm4gUy5lYWNoKGFyZ3VtZW50cyxmdW5jdGlvbihlLHQpe3ZhciBuO3doaWxlKC0xPChuPVMuaW5BcnJheSh0LHMsbikpKXMuc3BsaWNlKG4sMSksbjw9bCYmbC0tfSksdGhpc30saGFzOmZ1bmN0aW9uKGUpe3JldHVybiBlPy0xPFMuaW5BcnJheShlLHMpOjA8cy5sZW5ndGh9LGVtcHR5OmZ1bmN0aW9uKCl7cmV0dXJuIHMmJihzPVtdKSx0aGlzfSxkaXNhYmxlOmZ1bmN0aW9uKCl7cmV0dXJuIGE9dT1bXSxzPXQ9XCJcIix0aGlzfSxkaXNhYmxlZDpmdW5jdGlvbigpe3JldHVybiFzfSxsb2NrOmZ1bmN0aW9uKCl7cmV0dXJuIGE9dT1bXSx0fHxpfHwocz10PVwiXCIpLHRoaXN9LGxvY2tlZDpmdW5jdGlvbigpe3JldHVybiEhYX0sZmlyZVdpdGg6ZnVuY3Rpb24oZSx0KXtyZXR1cm4gYXx8KHQ9W2UsKHQ9dHx8W10pLnNsaWNlP3Quc2xpY2UoKTp0XSx1LnB1c2godCksaXx8YygpKSx0aGlzfSxmaXJlOmZ1bmN0aW9uKCl7cmV0dXJuIGYuZmlyZVdpdGgodGhpcyxhcmd1bWVudHMpLHRoaXN9LGZpcmVkOmZ1bmN0aW9uKCl7cmV0dXJuISFvfX07cmV0dXJuIGZ9LFMuZXh0ZW5kKHtEZWZlcnJlZDpmdW5jdGlvbihlKXt2YXIgbz1bW1wibm90aWZ5XCIsXCJwcm9ncmVzc1wiLFMuQ2FsbGJhY2tzKFwibWVtb3J5XCIpLFMuQ2FsbGJhY2tzKFwibWVtb3J5XCIpLDJdLFtcInJlc29sdmVcIixcImRvbmVcIixTLkNhbGxiYWNrcyhcIm9uY2UgbWVtb3J5XCIpLFMuQ2FsbGJhY2tzKFwib25jZSBtZW1vcnlcIiksMCxcInJlc29sdmVkXCJdLFtcInJlamVjdFwiLFwiZmFpbFwiLFMuQ2FsbGJhY2tzKFwib25jZSBtZW1vcnlcIiksUy5DYWxsYmFja3MoXCJvbmNlIG1lbW9yeVwiKSwxLFwicmVqZWN0ZWRcIl1dLGk9XCJwZW5kaW5nXCIsYT17c3RhdGU6ZnVuY3Rpb24oKXtyZXR1cm4gaX0sYWx3YXlzOmZ1bmN0aW9uKCl7cmV0dXJuIHMuZG9uZShhcmd1bWVudHMpLmZhaWwoYXJndW1lbnRzKSx0aGlzfSxcImNhdGNoXCI6ZnVuY3Rpb24oZSl7cmV0dXJuIGEudGhlbihudWxsLGUpfSxwaXBlOmZ1bmN0aW9uKCl7dmFyIGk9YXJndW1lbnRzO3JldHVybiBTLkRlZmVycmVkKGZ1bmN0aW9uKHIpe1MuZWFjaChvLGZ1bmN0aW9uKGUsdCl7dmFyIG49bShpW3RbNF1dKSYmaVt0WzRdXTtzW3RbMV1dKGZ1bmN0aW9uKCl7dmFyIGU9biYmbi5hcHBseSh0aGlzLGFyZ3VtZW50cyk7ZSYmbShlLnByb21pc2UpP2UucHJvbWlzZSgpLnByb2dyZXNzKHIubm90aWZ5KS5kb25lKHIucmVzb2x2ZSkuZmFpbChyLnJlamVjdCk6clt0WzBdK1wiV2l0aFwiXSh0aGlzLG4/W2VdOmFyZ3VtZW50cyl9KX0pLGk9bnVsbH0pLnByb21pc2UoKX0sdGhlbjpmdW5jdGlvbih0LG4scil7dmFyIHU9MDtmdW5jdGlvbiBsKGksbyxhLHMpe3JldHVybiBmdW5jdGlvbigpe3ZhciBuPXRoaXMscj1hcmd1bWVudHMsZT1mdW5jdGlvbigpe3ZhciBlLHQ7aWYoIShpPHUpKXtpZigoZT1hLmFwcGx5KG4scikpPT09by5wcm9taXNlKCkpdGhyb3cgbmV3IFR5cGVFcnJvcihcIlRoZW5hYmxlIHNlbGYtcmVzb2x1dGlvblwiKTt0PWUmJihcIm9iamVjdFwiPT10eXBlb2YgZXx8XCJmdW5jdGlvblwiPT10eXBlb2YgZSkmJmUudGhlbixtKHQpP3M/dC5jYWxsKGUsbCh1LG8sUixzKSxsKHUsbyxNLHMpKToodSsrLHQuY2FsbChlLGwodSxvLFIscyksbCh1LG8sTSxzKSxsKHUsbyxSLG8ubm90aWZ5V2l0aCkpKTooYSE9PVImJihuPXZvaWQgMCxyPVtlXSksKHN8fG8ucmVzb2x2ZVdpdGgpKG4scikpfX0sdD1zP2U6ZnVuY3Rpb24oKXt0cnl7ZSgpfWNhdGNoKGUpe1MuRGVmZXJyZWQuZXhjZXB0aW9uSG9vayYmUy5EZWZlcnJlZC5leGNlcHRpb25Ib29rKGUsdC5zdGFja1RyYWNlKSx1PD1pKzEmJihhIT09TSYmKG49dm9pZCAwLHI9W2VdKSxvLnJlamVjdFdpdGgobixyKSl9fTtpP3QoKTooUy5EZWZlcnJlZC5nZXRTdGFja0hvb2smJih0LnN0YWNrVHJhY2U9Uy5EZWZlcnJlZC5nZXRTdGFja0hvb2soKSksQy5zZXRUaW1lb3V0KHQpKX19cmV0dXJuIFMuRGVmZXJyZWQoZnVuY3Rpb24oZSl7b1swXVszXS5hZGQobCgwLGUsbShyKT9yOlIsZS5ub3RpZnlXaXRoKSksb1sxXVszXS5hZGQobCgwLGUsbSh0KT90OlIpKSxvWzJdWzNdLmFkZChsKDAsZSxtKG4pP246TSkpfSkucHJvbWlzZSgpfSxwcm9taXNlOmZ1bmN0aW9uKGUpe3JldHVybiBudWxsIT1lP1MuZXh0ZW5kKGUsYSk6YX19LHM9e307cmV0dXJuIFMuZWFjaChvLGZ1bmN0aW9uKGUsdCl7dmFyIG49dFsyXSxyPXRbNV07YVt0WzFdXT1uLmFkZCxyJiZuLmFkZChmdW5jdGlvbigpe2k9cn0sb1szLWVdWzJdLmRpc2FibGUsb1szLWVdWzNdLmRpc2FibGUsb1swXVsyXS5sb2NrLG9bMF1bM10ubG9jayksbi5hZGQodFszXS5maXJlKSxzW3RbMF1dPWZ1bmN0aW9uKCl7cmV0dXJuIHNbdFswXStcIldpdGhcIl0odGhpcz09PXM/dm9pZCAwOnRoaXMsYXJndW1lbnRzKSx0aGlzfSxzW3RbMF0rXCJXaXRoXCJdPW4uZmlyZVdpdGh9KSxhLnByb21pc2UocyksZSYmZS5jYWxsKHMscyksc30sd2hlbjpmdW5jdGlvbihlKXt2YXIgbj1hcmd1bWVudHMubGVuZ3RoLHQ9bixyPUFycmF5KHQpLGk9cy5jYWxsKGFyZ3VtZW50cyksbz1TLkRlZmVycmVkKCksYT1mdW5jdGlvbih0KXtyZXR1cm4gZnVuY3Rpb24oZSl7clt0XT10aGlzLGlbdF09MTxhcmd1bWVudHMubGVuZ3RoP3MuY2FsbChhcmd1bWVudHMpOmUsLS1ufHxvLnJlc29sdmVXaXRoKHIsaSl9fTtpZihuPD0xJiYoSShlLG8uZG9uZShhKHQpKS5yZXNvbHZlLG8ucmVqZWN0LCFuKSxcInBlbmRpbmdcIj09PW8uc3RhdGUoKXx8bShpW3RdJiZpW3RdLnRoZW4pKSlyZXR1cm4gby50aGVuKCk7d2hpbGUodC0tKUkoaVt0XSxhKHQpLG8ucmVqZWN0KTtyZXR1cm4gby5wcm9taXNlKCl9fSk7dmFyIFc9L14oRXZhbHxJbnRlcm5hbHxSYW5nZXxSZWZlcmVuY2V8U3ludGF4fFR5cGV8VVJJKUVycm9yJC87Uy5EZWZlcnJlZC5leGNlcHRpb25Ib29rPWZ1bmN0aW9uKGUsdCl7Qy5jb25zb2xlJiZDLmNvbnNvbGUud2FybiYmZSYmVy50ZXN0KGUubmFtZSkmJkMuY29uc29sZS53YXJuKFwialF1ZXJ5LkRlZmVycmVkIGV4Y2VwdGlvbjogXCIrZS5tZXNzYWdlLGUuc3RhY2ssdCl9LFMucmVhZHlFeGNlcHRpb249ZnVuY3Rpb24oZSl7Qy5zZXRUaW1lb3V0KGZ1bmN0aW9uKCl7dGhyb3cgZX0pfTt2YXIgRj1TLkRlZmVycmVkKCk7ZnVuY3Rpb24gQigpe0UucmVtb3ZlRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIixCKSxDLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJsb2FkXCIsQiksUy5yZWFkeSgpfVMuZm4ucmVhZHk9ZnVuY3Rpb24oZSl7cmV0dXJuIEYudGhlbihlKVtcImNhdGNoXCJdKGZ1bmN0aW9uKGUpe1MucmVhZHlFeGNlcHRpb24oZSl9KSx0aGlzfSxTLmV4dGVuZCh7aXNSZWFkeTohMSxyZWFkeVdhaXQ6MSxyZWFkeTpmdW5jdGlvbihlKXsoITA9PT1lPy0tUy5yZWFkeVdhaXQ6Uy5pc1JlYWR5KXx8KFMuaXNSZWFkeT0hMCkhPT1lJiYwPC0tUy5yZWFkeVdhaXR8fEYucmVzb2x2ZVdpdGgoRSxbU10pfX0pLFMucmVhZHkudGhlbj1GLnRoZW4sXCJjb21wbGV0ZVwiPT09RS5yZWFkeVN0YXRlfHxcImxvYWRpbmdcIiE9PUUucmVhZHlTdGF0ZSYmIUUuZG9jdW1lbnRFbGVtZW50LmRvU2Nyb2xsP0Muc2V0VGltZW91dChTLnJlYWR5KTooRS5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLEIpLEMuYWRkRXZlbnRMaXN0ZW5lcihcImxvYWRcIixCKSk7dmFyICQ9ZnVuY3Rpb24oZSx0LG4scixpLG8sYSl7dmFyIHM9MCx1PWUubGVuZ3RoLGw9bnVsbD09bjtpZihcIm9iamVjdFwiPT09dyhuKSlmb3IocyBpbiBpPSEwLG4pJChlLHQscyxuW3NdLCEwLG8sYSk7ZWxzZSBpZih2b2lkIDAhPT1yJiYoaT0hMCxtKHIpfHwoYT0hMCksbCYmKGE/KHQuY2FsbChlLHIpLHQ9bnVsbCk6KGw9dCx0PWZ1bmN0aW9uKGUsdCxuKXtyZXR1cm4gbC5jYWxsKFMoZSksbil9KSksdCkpZm9yKDtzPHU7cysrKXQoZVtzXSxuLGE/cjpyLmNhbGwoZVtzXSxzLHQoZVtzXSxuKSkpO3JldHVybiBpP2U6bD90LmNhbGwoZSk6dT90KGVbMF0sbik6b30sXz0vXi1tcy0vLHo9Ly0oW2Etel0pL2c7ZnVuY3Rpb24gVShlLHQpe3JldHVybiB0LnRvVXBwZXJDYXNlKCl9ZnVuY3Rpb24gWChlKXtyZXR1cm4gZS5yZXBsYWNlKF8sXCJtcy1cIikucmVwbGFjZSh6LFUpfXZhciBWPWZ1bmN0aW9uKGUpe3JldHVybiAxPT09ZS5ub2RlVHlwZXx8OT09PWUubm9kZVR5cGV8fCErZS5ub2RlVHlwZX07ZnVuY3Rpb24gRygpe3RoaXMuZXhwYW5kbz1TLmV4cGFuZG8rRy51aWQrK31HLnVpZD0xLEcucHJvdG90eXBlPXtjYWNoZTpmdW5jdGlvbihlKXt2YXIgdD1lW3RoaXMuZXhwYW5kb107cmV0dXJuIHR8fCh0PXt9LFYoZSkmJihlLm5vZGVUeXBlP2VbdGhpcy5leHBhbmRvXT10Ok9iamVjdC5kZWZpbmVQcm9wZXJ0eShlLHRoaXMuZXhwYW5kbyx7dmFsdWU6dCxjb25maWd1cmFibGU6ITB9KSkpLHR9LHNldDpmdW5jdGlvbihlLHQsbil7dmFyIHIsaT10aGlzLmNhY2hlKGUpO2lmKFwic3RyaW5nXCI9PXR5cGVvZiB0KWlbWCh0KV09bjtlbHNlIGZvcihyIGluIHQpaVtYKHIpXT10W3JdO3JldHVybiBpfSxnZXQ6ZnVuY3Rpb24oZSx0KXtyZXR1cm4gdm9pZCAwPT09dD90aGlzLmNhY2hlKGUpOmVbdGhpcy5leHBhbmRvXSYmZVt0aGlzLmV4cGFuZG9dW1godCldfSxhY2Nlc3M6ZnVuY3Rpb24oZSx0LG4pe3JldHVybiB2b2lkIDA9PT10fHx0JiZcInN0cmluZ1wiPT10eXBlb2YgdCYmdm9pZCAwPT09bj90aGlzLmdldChlLHQpOih0aGlzLnNldChlLHQsbiksdm9pZCAwIT09bj9uOnQpfSxyZW1vdmU6ZnVuY3Rpb24oZSx0KXt2YXIgbixyPWVbdGhpcy5leHBhbmRvXTtpZih2b2lkIDAhPT1yKXtpZih2b2lkIDAhPT10KXtuPSh0PUFycmF5LmlzQXJyYXkodCk/dC5tYXAoWCk6KHQ9WCh0KSlpbiByP1t0XTp0Lm1hdGNoKFApfHxbXSkubGVuZ3RoO3doaWxlKG4tLSlkZWxldGUgclt0W25dXX0odm9pZCAwPT09dHx8Uy5pc0VtcHR5T2JqZWN0KHIpKSYmKGUubm9kZVR5cGU/ZVt0aGlzLmV4cGFuZG9dPXZvaWQgMDpkZWxldGUgZVt0aGlzLmV4cGFuZG9dKX19LGhhc0RhdGE6ZnVuY3Rpb24oZSl7dmFyIHQ9ZVt0aGlzLmV4cGFuZG9dO3JldHVybiB2b2lkIDAhPT10JiYhUy5pc0VtcHR5T2JqZWN0KHQpfX07dmFyIFk9bmV3IEcsUT1uZXcgRyxKPS9eKD86XFx7W1xcd1xcV10qXFx9fFxcW1tcXHdcXFddKlxcXSkkLyxLPS9bQS1aXS9nO2Z1bmN0aW9uIFooZSx0LG4pe3ZhciByLGk7aWYodm9pZCAwPT09biYmMT09PWUubm9kZVR5cGUpaWYocj1cImRhdGEtXCIrdC5yZXBsYWNlKEssXCItJCZcIikudG9Mb3dlckNhc2UoKSxcInN0cmluZ1wiPT10eXBlb2Yobj1lLmdldEF0dHJpYnV0ZShyKSkpe3RyeXtuPVwidHJ1ZVwiPT09KGk9bil8fFwiZmFsc2VcIiE9PWkmJihcIm51bGxcIj09PWk/bnVsbDppPT09K2krXCJcIj8raTpKLnRlc3QoaSk/SlNPTi5wYXJzZShpKTppKX1jYXRjaChlKXt9US5zZXQoZSx0LG4pfWVsc2Ugbj12b2lkIDA7cmV0dXJuIG59Uy5leHRlbmQoe2hhc0RhdGE6ZnVuY3Rpb24oZSl7cmV0dXJuIFEuaGFzRGF0YShlKXx8WS5oYXNEYXRhKGUpfSxkYXRhOmZ1bmN0aW9uKGUsdCxuKXtyZXR1cm4gUS5hY2Nlc3MoZSx0LG4pfSxyZW1vdmVEYXRhOmZ1bmN0aW9uKGUsdCl7US5yZW1vdmUoZSx0KX0sX2RhdGE6ZnVuY3Rpb24oZSx0LG4pe3JldHVybiBZLmFjY2VzcyhlLHQsbil9LF9yZW1vdmVEYXRhOmZ1bmN0aW9uKGUsdCl7WS5yZW1vdmUoZSx0KX19KSxTLmZuLmV4dGVuZCh7ZGF0YTpmdW5jdGlvbihuLGUpe3ZhciB0LHIsaSxvPXRoaXNbMF0sYT1vJiZvLmF0dHJpYnV0ZXM7aWYodm9pZCAwPT09bil7aWYodGhpcy5sZW5ndGgmJihpPVEuZ2V0KG8pLDE9PT1vLm5vZGVUeXBlJiYhWS5nZXQobyxcImhhc0RhdGFBdHRyc1wiKSkpe3Q9YS5sZW5ndGg7d2hpbGUodC0tKWFbdF0mJjA9PT0ocj1hW3RdLm5hbWUpLmluZGV4T2YoXCJkYXRhLVwiKSYmKHI9WChyLnNsaWNlKDUpKSxaKG8scixpW3JdKSk7WS5zZXQobyxcImhhc0RhdGFBdHRyc1wiLCEwKX1yZXR1cm4gaX1yZXR1cm5cIm9iamVjdFwiPT10eXBlb2Ygbj90aGlzLmVhY2goZnVuY3Rpb24oKXtRLnNldCh0aGlzLG4pfSk6JCh0aGlzLGZ1bmN0aW9uKGUpe3ZhciB0O2lmKG8mJnZvaWQgMD09PWUpcmV0dXJuIHZvaWQgMCE9PSh0PVEuZ2V0KG8sbikpP3Q6dm9pZCAwIT09KHQ9WihvLG4pKT90OnZvaWQgMDt0aGlzLmVhY2goZnVuY3Rpb24oKXtRLnNldCh0aGlzLG4sZSl9KX0sbnVsbCxlLDE8YXJndW1lbnRzLmxlbmd0aCxudWxsLCEwKX0scmVtb3ZlRGF0YTpmdW5jdGlvbihlKXtyZXR1cm4gdGhpcy5lYWNoKGZ1bmN0aW9uKCl7US5yZW1vdmUodGhpcyxlKX0pfX0pLFMuZXh0ZW5kKHtxdWV1ZTpmdW5jdGlvbihlLHQsbil7dmFyIHI7aWYoZSlyZXR1cm4gdD0odHx8XCJmeFwiKStcInF1ZXVlXCIscj1ZLmdldChlLHQpLG4mJighcnx8QXJyYXkuaXNBcnJheShuKT9yPVkuYWNjZXNzKGUsdCxTLm1ha2VBcnJheShuKSk6ci5wdXNoKG4pKSxyfHxbXX0sZGVxdWV1ZTpmdW5jdGlvbihlLHQpe3Q9dHx8XCJmeFwiO3ZhciBuPVMucXVldWUoZSx0KSxyPW4ubGVuZ3RoLGk9bi5zaGlmdCgpLG89Uy5fcXVldWVIb29rcyhlLHQpO1wiaW5wcm9ncmVzc1wiPT09aSYmKGk9bi5zaGlmdCgpLHItLSksaSYmKFwiZnhcIj09PXQmJm4udW5zaGlmdChcImlucHJvZ3Jlc3NcIiksZGVsZXRlIG8uc3RvcCxpLmNhbGwoZSxmdW5jdGlvbigpe1MuZGVxdWV1ZShlLHQpfSxvKSksIXImJm8mJm8uZW1wdHkuZmlyZSgpfSxfcXVldWVIb29rczpmdW5jdGlvbihlLHQpe3ZhciBuPXQrXCJxdWV1ZUhvb2tzXCI7cmV0dXJuIFkuZ2V0KGUsbil8fFkuYWNjZXNzKGUsbix7ZW1wdHk6Uy5DYWxsYmFja3MoXCJvbmNlIG1lbW9yeVwiKS5hZGQoZnVuY3Rpb24oKXtZLnJlbW92ZShlLFt0K1wicXVldWVcIixuXSl9KX0pfX0pLFMuZm4uZXh0ZW5kKHtxdWV1ZTpmdW5jdGlvbih0LG4pe3ZhciBlPTI7cmV0dXJuXCJzdHJpbmdcIiE9dHlwZW9mIHQmJihuPXQsdD1cImZ4XCIsZS0tKSxhcmd1bWVudHMubGVuZ3RoPGU/Uy5xdWV1ZSh0aGlzWzBdLHQpOnZvaWQgMD09PW4/dGhpczp0aGlzLmVhY2goZnVuY3Rpb24oKXt2YXIgZT1TLnF1ZXVlKHRoaXMsdCxuKTtTLl9xdWV1ZUhvb2tzKHRoaXMsdCksXCJmeFwiPT09dCYmXCJpbnByb2dyZXNzXCIhPT1lWzBdJiZTLmRlcXVldWUodGhpcyx0KX0pfSxkZXF1ZXVlOmZ1bmN0aW9uKGUpe3JldHVybiB0aGlzLmVhY2goZnVuY3Rpb24oKXtTLmRlcXVldWUodGhpcyxlKX0pfSxjbGVhclF1ZXVlOmZ1bmN0aW9uKGUpe3JldHVybiB0aGlzLnF1ZXVlKGV8fFwiZnhcIixbXSl9LHByb21pc2U6ZnVuY3Rpb24oZSx0KXt2YXIgbixyPTEsaT1TLkRlZmVycmVkKCksbz10aGlzLGE9dGhpcy5sZW5ndGgscz1mdW5jdGlvbigpey0tcnx8aS5yZXNvbHZlV2l0aChvLFtvXSl9O1wic3RyaW5nXCIhPXR5cGVvZiBlJiYodD1lLGU9dm9pZCAwKSxlPWV8fFwiZnhcIjt3aGlsZShhLS0pKG49WS5nZXQob1thXSxlK1wicXVldWVIb29rc1wiKSkmJm4uZW1wdHkmJihyKyssbi5lbXB0eS5hZGQocykpO3JldHVybiBzKCksaS5wcm9taXNlKHQpfX0pO3ZhciBlZT0vWystXT8oPzpcXGQqXFwufClcXGQrKD86W2VFXVsrLV0/XFxkK3wpLy5zb3VyY2UsdGU9bmV3IFJlZ0V4cChcIl4oPzooWystXSk9fCkoXCIrZWUrXCIpKFthLXolXSopJFwiLFwiaVwiKSxuZT1bXCJUb3BcIixcIlJpZ2h0XCIsXCJCb3R0b21cIixcIkxlZnRcIl0scmU9RS5kb2N1bWVudEVsZW1lbnQsaWU9ZnVuY3Rpb24oZSl7cmV0dXJuIFMuY29udGFpbnMoZS5vd25lckRvY3VtZW50LGUpfSxvZT17Y29tcG9zZWQ6ITB9O3JlLmdldFJvb3ROb2RlJiYoaWU9ZnVuY3Rpb24oZSl7cmV0dXJuIFMuY29udGFpbnMoZS5vd25lckRvY3VtZW50LGUpfHxlLmdldFJvb3ROb2RlKG9lKT09PWUub3duZXJEb2N1bWVudH0pO3ZhciBhZT1mdW5jdGlvbihlLHQpe3JldHVyblwibm9uZVwiPT09KGU9dHx8ZSkuc3R5bGUuZGlzcGxheXx8XCJcIj09PWUuc3R5bGUuZGlzcGxheSYmaWUoZSkmJlwibm9uZVwiPT09Uy5jc3MoZSxcImRpc3BsYXlcIil9O2Z1bmN0aW9uIHNlKGUsdCxuLHIpe3ZhciBpLG8sYT0yMCxzPXI/ZnVuY3Rpb24oKXtyZXR1cm4gci5jdXIoKX06ZnVuY3Rpb24oKXtyZXR1cm4gUy5jc3MoZSx0LFwiXCIpfSx1PXMoKSxsPW4mJm5bM118fChTLmNzc051bWJlclt0XT9cIlwiOlwicHhcIiksYz1lLm5vZGVUeXBlJiYoUy5jc3NOdW1iZXJbdF18fFwicHhcIiE9PWwmJit1KSYmdGUuZXhlYyhTLmNzcyhlLHQpKTtpZihjJiZjWzNdIT09bCl7dS89MixsPWx8fGNbM10sYz0rdXx8MTt3aGlsZShhLS0pUy5zdHlsZShlLHQsYytsKSwoMS1vKSooMS0obz1zKCkvdXx8LjUpKTw9MCYmKGE9MCksYy89bztjKj0yLFMuc3R5bGUoZSx0LGMrbCksbj1ufHxbXX1yZXR1cm4gbiYmKGM9K2N8fCt1fHwwLGk9blsxXT9jKyhuWzFdKzEpKm5bMl06K25bMl0sciYmKHIudW5pdD1sLHIuc3RhcnQ9YyxyLmVuZD1pKSksaX12YXIgdWU9e307ZnVuY3Rpb24gbGUoZSx0KXtmb3IodmFyIG4scixpLG8sYSxzLHUsbD1bXSxjPTAsZj1lLmxlbmd0aDtjPGY7YysrKShyPWVbY10pLnN0eWxlJiYobj1yLnN0eWxlLmRpc3BsYXksdD8oXCJub25lXCI9PT1uJiYobFtjXT1ZLmdldChyLFwiZGlzcGxheVwiKXx8bnVsbCxsW2NdfHwoci5zdHlsZS5kaXNwbGF5PVwiXCIpKSxcIlwiPT09ci5zdHlsZS5kaXNwbGF5JiZhZShyKSYmKGxbY109KHU9YT1vPXZvaWQgMCxhPShpPXIpLm93bmVyRG9jdW1lbnQscz1pLm5vZGVOYW1lLCh1PXVlW3NdKXx8KG89YS5ib2R5LmFwcGVuZENoaWxkKGEuY3JlYXRlRWxlbWVudChzKSksdT1TLmNzcyhvLFwiZGlzcGxheVwiKSxvLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQobyksXCJub25lXCI9PT11JiYodT1cImJsb2NrXCIpLHVlW3NdPXUpKSkpOlwibm9uZVwiIT09biYmKGxbY109XCJub25lXCIsWS5zZXQocixcImRpc3BsYXlcIixuKSkpO2ZvcihjPTA7YzxmO2MrKyludWxsIT1sW2NdJiYoZVtjXS5zdHlsZS5kaXNwbGF5PWxbY10pO3JldHVybiBlfVMuZm4uZXh0ZW5kKHtzaG93OmZ1bmN0aW9uKCl7cmV0dXJuIGxlKHRoaXMsITApfSxoaWRlOmZ1bmN0aW9uKCl7cmV0dXJuIGxlKHRoaXMpfSx0b2dnbGU6ZnVuY3Rpb24oZSl7cmV0dXJuXCJib29sZWFuXCI9PXR5cGVvZiBlP2U/dGhpcy5zaG93KCk6dGhpcy5oaWRlKCk6dGhpcy5lYWNoKGZ1bmN0aW9uKCl7YWUodGhpcyk/Uyh0aGlzKS5zaG93KCk6Uyh0aGlzKS5oaWRlKCl9KX19KTt2YXIgY2UsZmUscGU9L14oPzpjaGVja2JveHxyYWRpbykkL2ksZGU9LzwoW2Etel1bXlxcL1xcMD5cXHgyMFxcdFxcclxcblxcZl0qKS9pLGhlPS9eJHxebW9kdWxlJHxcXC8oPzpqYXZhfGVjbWEpc2NyaXB0L2k7Y2U9RS5jcmVhdGVEb2N1bWVudEZyYWdtZW50KCkuYXBwZW5kQ2hpbGQoRS5jcmVhdGVFbGVtZW50KFwiZGl2XCIpKSwoZmU9RS5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIikpLnNldEF0dHJpYnV0ZShcInR5cGVcIixcInJhZGlvXCIpLGZlLnNldEF0dHJpYnV0ZShcImNoZWNrZWRcIixcImNoZWNrZWRcIiksZmUuc2V0QXR0cmlidXRlKFwibmFtZVwiLFwidFwiKSxjZS5hcHBlbmRDaGlsZChmZSkseS5jaGVja0Nsb25lPWNlLmNsb25lTm9kZSghMCkuY2xvbmVOb2RlKCEwKS5sYXN0Q2hpbGQuY2hlY2tlZCxjZS5pbm5lckhUTUw9XCI8dGV4dGFyZWE+eDwvdGV4dGFyZWE+XCIseS5ub0Nsb25lQ2hlY2tlZD0hIWNlLmNsb25lTm9kZSghMCkubGFzdENoaWxkLmRlZmF1bHRWYWx1ZSxjZS5pbm5lckhUTUw9XCI8b3B0aW9uPjwvb3B0aW9uPlwiLHkub3B0aW9uPSEhY2UubGFzdENoaWxkO3ZhciBnZT17dGhlYWQ6WzEsXCI8dGFibGU+XCIsXCI8L3RhYmxlPlwiXSxjb2w6WzIsXCI8dGFibGU+PGNvbGdyb3VwPlwiLFwiPC9jb2xncm91cD48L3RhYmxlPlwiXSx0cjpbMixcIjx0YWJsZT48dGJvZHk+XCIsXCI8L3Rib2R5PjwvdGFibGU+XCJdLHRkOlszLFwiPHRhYmxlPjx0Ym9keT48dHI+XCIsXCI8L3RyPjwvdGJvZHk+PC90YWJsZT5cIl0sX2RlZmF1bHQ6WzAsXCJcIixcIlwiXX07ZnVuY3Rpb24gdmUoZSx0KXt2YXIgbjtyZXR1cm4gbj1cInVuZGVmaW5lZFwiIT10eXBlb2YgZS5nZXRFbGVtZW50c0J5VGFnTmFtZT9lLmdldEVsZW1lbnRzQnlUYWdOYW1lKHR8fFwiKlwiKTpcInVuZGVmaW5lZFwiIT10eXBlb2YgZS5xdWVyeVNlbGVjdG9yQWxsP2UucXVlcnlTZWxlY3RvckFsbCh0fHxcIipcIik6W10sdm9pZCAwPT09dHx8dCYmQShlLHQpP1MubWVyZ2UoW2VdLG4pOm59ZnVuY3Rpb24geWUoZSx0KXtmb3IodmFyIG49MCxyPWUubGVuZ3RoO248cjtuKyspWS5zZXQoZVtuXSxcImdsb2JhbEV2YWxcIiwhdHx8WS5nZXQodFtuXSxcImdsb2JhbEV2YWxcIikpfWdlLnRib2R5PWdlLnRmb290PWdlLmNvbGdyb3VwPWdlLmNhcHRpb249Z2UudGhlYWQsZ2UudGg9Z2UudGQseS5vcHRpb258fChnZS5vcHRncm91cD1nZS5vcHRpb249WzEsXCI8c2VsZWN0IG11bHRpcGxlPSdtdWx0aXBsZSc+XCIsXCI8L3NlbGVjdD5cIl0pO3ZhciBtZT0vPHwmIz9cXHcrOy87ZnVuY3Rpb24geGUoZSx0LG4scixpKXtmb3IodmFyIG8sYSxzLHUsbCxjLGY9dC5jcmVhdGVEb2N1bWVudEZyYWdtZW50KCkscD1bXSxkPTAsaD1lLmxlbmd0aDtkPGg7ZCsrKWlmKChvPWVbZF0pfHwwPT09bylpZihcIm9iamVjdFwiPT09dyhvKSlTLm1lcmdlKHAsby5ub2RlVHlwZT9bb106byk7ZWxzZSBpZihtZS50ZXN0KG8pKXthPWF8fGYuYXBwZW5kQ2hpbGQodC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpKSxzPShkZS5leGVjKG8pfHxbXCJcIixcIlwiXSlbMV0udG9Mb3dlckNhc2UoKSx1PWdlW3NdfHxnZS5fZGVmYXVsdCxhLmlubmVySFRNTD11WzFdK1MuaHRtbFByZWZpbHRlcihvKSt1WzJdLGM9dVswXTt3aGlsZShjLS0pYT1hLmxhc3RDaGlsZDtTLm1lcmdlKHAsYS5jaGlsZE5vZGVzKSwoYT1mLmZpcnN0Q2hpbGQpLnRleHRDb250ZW50PVwiXCJ9ZWxzZSBwLnB1c2godC5jcmVhdGVUZXh0Tm9kZShvKSk7Zi50ZXh0Q29udGVudD1cIlwiLGQ9MDt3aGlsZShvPXBbZCsrXSlpZihyJiYtMTxTLmluQXJyYXkobyxyKSlpJiZpLnB1c2gobyk7ZWxzZSBpZihsPWllKG8pLGE9dmUoZi5hcHBlbmRDaGlsZChvKSxcInNjcmlwdFwiKSxsJiZ5ZShhKSxuKXtjPTA7d2hpbGUobz1hW2MrK10paGUudGVzdChvLnR5cGV8fFwiXCIpJiZuLnB1c2gobyl9cmV0dXJuIGZ9dmFyIGJlPS9ea2V5Lyx3ZT0vXig/Om1vdXNlfHBvaW50ZXJ8Y29udGV4dG1lbnV8ZHJhZ3xkcm9wKXxjbGljay8sVGU9L14oW14uXSopKD86XFwuKC4rKXwpLztmdW5jdGlvbiBDZSgpe3JldHVybiEwfWZ1bmN0aW9uIEVlKCl7cmV0dXJuITF9ZnVuY3Rpb24gU2UoZSx0KXtyZXR1cm4gZT09PWZ1bmN0aW9uKCl7dHJ5e3JldHVybiBFLmFjdGl2ZUVsZW1lbnR9Y2F0Y2goZSl7fX0oKT09KFwiZm9jdXNcIj09PXQpfWZ1bmN0aW9uIGtlKGUsdCxuLHIsaSxvKXt2YXIgYSxzO2lmKFwib2JqZWN0XCI9PXR5cGVvZiB0KXtmb3IocyBpblwic3RyaW5nXCIhPXR5cGVvZiBuJiYocj1yfHxuLG49dm9pZCAwKSx0KWtlKGUscyxuLHIsdFtzXSxvKTtyZXR1cm4gZX1pZihudWxsPT1yJiZudWxsPT1pPyhpPW4scj1uPXZvaWQgMCk6bnVsbD09aSYmKFwic3RyaW5nXCI9PXR5cGVvZiBuPyhpPXIscj12b2lkIDApOihpPXIscj1uLG49dm9pZCAwKSksITE9PT1pKWk9RWU7ZWxzZSBpZighaSlyZXR1cm4gZTtyZXR1cm4gMT09PW8mJihhPWksKGk9ZnVuY3Rpb24oZSl7cmV0dXJuIFMoKS5vZmYoZSksYS5hcHBseSh0aGlzLGFyZ3VtZW50cyl9KS5ndWlkPWEuZ3VpZHx8KGEuZ3VpZD1TLmd1aWQrKykpLGUuZWFjaChmdW5jdGlvbigpe1MuZXZlbnQuYWRkKHRoaXMsdCxpLHIsbil9KX1mdW5jdGlvbiBBZShlLGksbyl7bz8oWS5zZXQoZSxpLCExKSxTLmV2ZW50LmFkZChlLGkse25hbWVzcGFjZTohMSxoYW5kbGVyOmZ1bmN0aW9uKGUpe3ZhciB0LG4scj1ZLmdldCh0aGlzLGkpO2lmKDEmZS5pc1RyaWdnZXImJnRoaXNbaV0pe2lmKHIubGVuZ3RoKShTLmV2ZW50LnNwZWNpYWxbaV18fHt9KS5kZWxlZ2F0ZVR5cGUmJmUuc3RvcFByb3BhZ2F0aW9uKCk7ZWxzZSBpZihyPXMuY2FsbChhcmd1bWVudHMpLFkuc2V0KHRoaXMsaSxyKSx0PW8odGhpcyxpKSx0aGlzW2ldKCksciE9PShuPVkuZ2V0KHRoaXMsaSkpfHx0P1kuc2V0KHRoaXMsaSwhMSk6bj17fSxyIT09bilyZXR1cm4gZS5zdG9wSW1tZWRpYXRlUHJvcGFnYXRpb24oKSxlLnByZXZlbnREZWZhdWx0KCksbi52YWx1ZX1lbHNlIHIubGVuZ3RoJiYoWS5zZXQodGhpcyxpLHt2YWx1ZTpTLmV2ZW50LnRyaWdnZXIoUy5leHRlbmQoclswXSxTLkV2ZW50LnByb3RvdHlwZSksci5zbGljZSgxKSx0aGlzKX0pLGUuc3RvcEltbWVkaWF0ZVByb3BhZ2F0aW9uKCkpfX0pKTp2b2lkIDA9PT1ZLmdldChlLGkpJiZTLmV2ZW50LmFkZChlLGksQ2UpfVMuZXZlbnQ9e2dsb2JhbDp7fSxhZGQ6ZnVuY3Rpb24odCxlLG4scixpKXt2YXIgbyxhLHMsdSxsLGMsZixwLGQsaCxnLHY9WS5nZXQodCk7aWYoVih0KSl7bi5oYW5kbGVyJiYobj0obz1uKS5oYW5kbGVyLGk9by5zZWxlY3RvciksaSYmUy5maW5kLm1hdGNoZXNTZWxlY3RvcihyZSxpKSxuLmd1aWR8fChuLmd1aWQ9Uy5ndWlkKyspLCh1PXYuZXZlbnRzKXx8KHU9di5ldmVudHM9T2JqZWN0LmNyZWF0ZShudWxsKSksKGE9di5oYW5kbGUpfHwoYT12LmhhbmRsZT1mdW5jdGlvbihlKXtyZXR1cm5cInVuZGVmaW5lZFwiIT10eXBlb2YgUyYmUy5ldmVudC50cmlnZ2VyZWQhPT1lLnR5cGU/Uy5ldmVudC5kaXNwYXRjaC5hcHBseSh0LGFyZ3VtZW50cyk6dm9pZCAwfSksbD0oZT0oZXx8XCJcIikubWF0Y2goUCl8fFtcIlwiXSkubGVuZ3RoO3doaWxlKGwtLSlkPWc9KHM9VGUuZXhlYyhlW2xdKXx8W10pWzFdLGg9KHNbMl18fFwiXCIpLnNwbGl0KFwiLlwiKS5zb3J0KCksZCYmKGY9Uy5ldmVudC5zcGVjaWFsW2RdfHx7fSxkPShpP2YuZGVsZWdhdGVUeXBlOmYuYmluZFR5cGUpfHxkLGY9Uy5ldmVudC5zcGVjaWFsW2RdfHx7fSxjPVMuZXh0ZW5kKHt0eXBlOmQsb3JpZ1R5cGU6ZyxkYXRhOnIsaGFuZGxlcjpuLGd1aWQ6bi5ndWlkLHNlbGVjdG9yOmksbmVlZHNDb250ZXh0OmkmJlMuZXhwci5tYXRjaC5uZWVkc0NvbnRleHQudGVzdChpKSxuYW1lc3BhY2U6aC5qb2luKFwiLlwiKX0sbyksKHA9dVtkXSl8fCgocD11W2RdPVtdKS5kZWxlZ2F0ZUNvdW50PTAsZi5zZXR1cCYmITEhPT1mLnNldHVwLmNhbGwodCxyLGgsYSl8fHQuYWRkRXZlbnRMaXN0ZW5lciYmdC5hZGRFdmVudExpc3RlbmVyKGQsYSkpLGYuYWRkJiYoZi5hZGQuY2FsbCh0LGMpLGMuaGFuZGxlci5ndWlkfHwoYy5oYW5kbGVyLmd1aWQ9bi5ndWlkKSksaT9wLnNwbGljZShwLmRlbGVnYXRlQ291bnQrKywwLGMpOnAucHVzaChjKSxTLmV2ZW50Lmdsb2JhbFtkXT0hMCl9fSxyZW1vdmU6ZnVuY3Rpb24oZSx0LG4scixpKXt2YXIgbyxhLHMsdSxsLGMsZixwLGQsaCxnLHY9WS5oYXNEYXRhKGUpJiZZLmdldChlKTtpZih2JiYodT12LmV2ZW50cykpe2w9KHQ9KHR8fFwiXCIpLm1hdGNoKFApfHxbXCJcIl0pLmxlbmd0aDt3aGlsZShsLS0paWYoZD1nPShzPVRlLmV4ZWModFtsXSl8fFtdKVsxXSxoPShzWzJdfHxcIlwiKS5zcGxpdChcIi5cIikuc29ydCgpLGQpe2Y9Uy5ldmVudC5zcGVjaWFsW2RdfHx7fSxwPXVbZD0ocj9mLmRlbGVnYXRlVHlwZTpmLmJpbmRUeXBlKXx8ZF18fFtdLHM9c1syXSYmbmV3IFJlZ0V4cChcIihefFxcXFwuKVwiK2guam9pbihcIlxcXFwuKD86LipcXFxcLnwpXCIpK1wiKFxcXFwufCQpXCIpLGE9bz1wLmxlbmd0aDt3aGlsZShvLS0pYz1wW29dLCFpJiZnIT09Yy5vcmlnVHlwZXx8biYmbi5ndWlkIT09Yy5ndWlkfHxzJiYhcy50ZXN0KGMubmFtZXNwYWNlKXx8ciYmciE9PWMuc2VsZWN0b3ImJihcIioqXCIhPT1yfHwhYy5zZWxlY3Rvcil8fChwLnNwbGljZShvLDEpLGMuc2VsZWN0b3ImJnAuZGVsZWdhdGVDb3VudC0tLGYucmVtb3ZlJiZmLnJlbW92ZS5jYWxsKGUsYykpO2EmJiFwLmxlbmd0aCYmKGYudGVhcmRvd24mJiExIT09Zi50ZWFyZG93bi5jYWxsKGUsaCx2LmhhbmRsZSl8fFMucmVtb3ZlRXZlbnQoZSxkLHYuaGFuZGxlKSxkZWxldGUgdVtkXSl9ZWxzZSBmb3IoZCBpbiB1KVMuZXZlbnQucmVtb3ZlKGUsZCt0W2xdLG4sciwhMCk7Uy5pc0VtcHR5T2JqZWN0KHUpJiZZLnJlbW92ZShlLFwiaGFuZGxlIGV2ZW50c1wiKX19LGRpc3BhdGNoOmZ1bmN0aW9uKGUpe3ZhciB0LG4scixpLG8sYSxzPW5ldyBBcnJheShhcmd1bWVudHMubGVuZ3RoKSx1PVMuZXZlbnQuZml4KGUpLGw9KFkuZ2V0KHRoaXMsXCJldmVudHNcIil8fE9iamVjdC5jcmVhdGUobnVsbCkpW3UudHlwZV18fFtdLGM9Uy5ldmVudC5zcGVjaWFsW3UudHlwZV18fHt9O2ZvcihzWzBdPXUsdD0xO3Q8YXJndW1lbnRzLmxlbmd0aDt0Kyspc1t0XT1hcmd1bWVudHNbdF07aWYodS5kZWxlZ2F0ZVRhcmdldD10aGlzLCFjLnByZURpc3BhdGNofHwhMSE9PWMucHJlRGlzcGF0Y2guY2FsbCh0aGlzLHUpKXthPVMuZXZlbnQuaGFuZGxlcnMuY2FsbCh0aGlzLHUsbCksdD0wO3doaWxlKChpPWFbdCsrXSkmJiF1LmlzUHJvcGFnYXRpb25TdG9wcGVkKCkpe3UuY3VycmVudFRhcmdldD1pLmVsZW0sbj0wO3doaWxlKChvPWkuaGFuZGxlcnNbbisrXSkmJiF1LmlzSW1tZWRpYXRlUHJvcGFnYXRpb25TdG9wcGVkKCkpdS5ybmFtZXNwYWNlJiYhMSE9PW8ubmFtZXNwYWNlJiYhdS5ybmFtZXNwYWNlLnRlc3Qoby5uYW1lc3BhY2UpfHwodS5oYW5kbGVPYmo9byx1LmRhdGE9by5kYXRhLHZvaWQgMCE9PShyPSgoUy5ldmVudC5zcGVjaWFsW28ub3JpZ1R5cGVdfHx7fSkuaGFuZGxlfHxvLmhhbmRsZXIpLmFwcGx5KGkuZWxlbSxzKSkmJiExPT09KHUucmVzdWx0PXIpJiYodS5wcmV2ZW50RGVmYXVsdCgpLHUuc3RvcFByb3BhZ2F0aW9uKCkpKX1yZXR1cm4gYy5wb3N0RGlzcGF0Y2gmJmMucG9zdERpc3BhdGNoLmNhbGwodGhpcyx1KSx1LnJlc3VsdH19LGhhbmRsZXJzOmZ1bmN0aW9uKGUsdCl7dmFyIG4scixpLG8sYSxzPVtdLHU9dC5kZWxlZ2F0ZUNvdW50LGw9ZS50YXJnZXQ7aWYodSYmbC5ub2RlVHlwZSYmIShcImNsaWNrXCI9PT1lLnR5cGUmJjE8PWUuYnV0dG9uKSlmb3IoO2whPT10aGlzO2w9bC5wYXJlbnROb2RlfHx0aGlzKWlmKDE9PT1sLm5vZGVUeXBlJiYoXCJjbGlja1wiIT09ZS50eXBlfHwhMCE9PWwuZGlzYWJsZWQpKXtmb3Iobz1bXSxhPXt9LG49MDtuPHU7bisrKXZvaWQgMD09PWFbaT0ocj10W25dKS5zZWxlY3RvcitcIiBcIl0mJihhW2ldPXIubmVlZHNDb250ZXh0Py0xPFMoaSx0aGlzKS5pbmRleChsKTpTLmZpbmQoaSx0aGlzLG51bGwsW2xdKS5sZW5ndGgpLGFbaV0mJm8ucHVzaChyKTtvLmxlbmd0aCYmcy5wdXNoKHtlbGVtOmwsaGFuZGxlcnM6b30pfXJldHVybiBsPXRoaXMsdTx0Lmxlbmd0aCYmcy5wdXNoKHtlbGVtOmwsaGFuZGxlcnM6dC5zbGljZSh1KX0pLHN9LGFkZFByb3A6ZnVuY3Rpb24odCxlKXtPYmplY3QuZGVmaW5lUHJvcGVydHkoUy5FdmVudC5wcm90b3R5cGUsdCx7ZW51bWVyYWJsZTohMCxjb25maWd1cmFibGU6ITAsZ2V0Om0oZSk/ZnVuY3Rpb24oKXtpZih0aGlzLm9yaWdpbmFsRXZlbnQpcmV0dXJuIGUodGhpcy5vcmlnaW5hbEV2ZW50KX06ZnVuY3Rpb24oKXtpZih0aGlzLm9yaWdpbmFsRXZlbnQpcmV0dXJuIHRoaXMub3JpZ2luYWxFdmVudFt0XX0sc2V0OmZ1bmN0aW9uKGUpe09iamVjdC5kZWZpbmVQcm9wZXJ0eSh0aGlzLHQse2VudW1lcmFibGU6ITAsY29uZmlndXJhYmxlOiEwLHdyaXRhYmxlOiEwLHZhbHVlOmV9KX19KX0sZml4OmZ1bmN0aW9uKGUpe3JldHVybiBlW1MuZXhwYW5kb10/ZTpuZXcgUy5FdmVudChlKX0sc3BlY2lhbDp7bG9hZDp7bm9CdWJibGU6ITB9LGNsaWNrOntzZXR1cDpmdW5jdGlvbihlKXt2YXIgdD10aGlzfHxlO3JldHVybiBwZS50ZXN0KHQudHlwZSkmJnQuY2xpY2smJkEodCxcImlucHV0XCIpJiZBZSh0LFwiY2xpY2tcIixDZSksITF9LHRyaWdnZXI6ZnVuY3Rpb24oZSl7dmFyIHQ9dGhpc3x8ZTtyZXR1cm4gcGUudGVzdCh0LnR5cGUpJiZ0LmNsaWNrJiZBKHQsXCJpbnB1dFwiKSYmQWUodCxcImNsaWNrXCIpLCEwfSxfZGVmYXVsdDpmdW5jdGlvbihlKXt2YXIgdD1lLnRhcmdldDtyZXR1cm4gcGUudGVzdCh0LnR5cGUpJiZ0LmNsaWNrJiZBKHQsXCJpbnB1dFwiKSYmWS5nZXQodCxcImNsaWNrXCIpfHxBKHQsXCJhXCIpfX0sYmVmb3JldW5sb2FkOntwb3N0RGlzcGF0Y2g6ZnVuY3Rpb24oZSl7dm9pZCAwIT09ZS5yZXN1bHQmJmUub3JpZ2luYWxFdmVudCYmKGUub3JpZ2luYWxFdmVudC5yZXR1cm5WYWx1ZT1lLnJlc3VsdCl9fX19LFMucmVtb3ZlRXZlbnQ9ZnVuY3Rpb24oZSx0LG4pe2UucmVtb3ZlRXZlbnRMaXN0ZW5lciYmZS5yZW1vdmVFdmVudExpc3RlbmVyKHQsbil9LFMuRXZlbnQ9ZnVuY3Rpb24oZSx0KXtpZighKHRoaXMgaW5zdGFuY2VvZiBTLkV2ZW50KSlyZXR1cm4gbmV3IFMuRXZlbnQoZSx0KTtlJiZlLnR5cGU/KHRoaXMub3JpZ2luYWxFdmVudD1lLHRoaXMudHlwZT1lLnR5cGUsdGhpcy5pc0RlZmF1bHRQcmV2ZW50ZWQ9ZS5kZWZhdWx0UHJldmVudGVkfHx2b2lkIDA9PT1lLmRlZmF1bHRQcmV2ZW50ZWQmJiExPT09ZS5yZXR1cm5WYWx1ZT9DZTpFZSx0aGlzLnRhcmdldD1lLnRhcmdldCYmMz09PWUudGFyZ2V0Lm5vZGVUeXBlP2UudGFyZ2V0LnBhcmVudE5vZGU6ZS50YXJnZXQsdGhpcy5jdXJyZW50VGFyZ2V0PWUuY3VycmVudFRhcmdldCx0aGlzLnJlbGF0ZWRUYXJnZXQ9ZS5yZWxhdGVkVGFyZ2V0KTp0aGlzLnR5cGU9ZSx0JiZTLmV4dGVuZCh0aGlzLHQpLHRoaXMudGltZVN0YW1wPWUmJmUudGltZVN0YW1wfHxEYXRlLm5vdygpLHRoaXNbUy5leHBhbmRvXT0hMH0sUy5FdmVudC5wcm90b3R5cGU9e2NvbnN0cnVjdG9yOlMuRXZlbnQsaXNEZWZhdWx0UHJldmVudGVkOkVlLGlzUHJvcGFnYXRpb25TdG9wcGVkOkVlLGlzSW1tZWRpYXRlUHJvcGFnYXRpb25TdG9wcGVkOkVlLGlzU2ltdWxhdGVkOiExLHByZXZlbnREZWZhdWx0OmZ1bmN0aW9uKCl7dmFyIGU9dGhpcy5vcmlnaW5hbEV2ZW50O3RoaXMuaXNEZWZhdWx0UHJldmVudGVkPUNlLGUmJiF0aGlzLmlzU2ltdWxhdGVkJiZlLnByZXZlbnREZWZhdWx0KCl9LHN0b3BQcm9wYWdhdGlvbjpmdW5jdGlvbigpe3ZhciBlPXRoaXMub3JpZ2luYWxFdmVudDt0aGlzLmlzUHJvcGFnYXRpb25TdG9wcGVkPUNlLGUmJiF0aGlzLmlzU2ltdWxhdGVkJiZlLnN0b3BQcm9wYWdhdGlvbigpfSxzdG9wSW1tZWRpYXRlUHJvcGFnYXRpb246ZnVuY3Rpb24oKXt2YXIgZT10aGlzLm9yaWdpbmFsRXZlbnQ7dGhpcy5pc0ltbWVkaWF0ZVByb3BhZ2F0aW9uU3RvcHBlZD1DZSxlJiYhdGhpcy5pc1NpbXVsYXRlZCYmZS5zdG9wSW1tZWRpYXRlUHJvcGFnYXRpb24oKSx0aGlzLnN0b3BQcm9wYWdhdGlvbigpfX0sUy5lYWNoKHthbHRLZXk6ITAsYnViYmxlczohMCxjYW5jZWxhYmxlOiEwLGNoYW5nZWRUb3VjaGVzOiEwLGN0cmxLZXk6ITAsZGV0YWlsOiEwLGV2ZW50UGhhc2U6ITAsbWV0YUtleTohMCxwYWdlWDohMCxwYWdlWTohMCxzaGlmdEtleTohMCx2aWV3OiEwLFwiY2hhclwiOiEwLGNvZGU6ITAsY2hhckNvZGU6ITAsa2V5OiEwLGtleUNvZGU6ITAsYnV0dG9uOiEwLGJ1dHRvbnM6ITAsY2xpZW50WDohMCxjbGllbnRZOiEwLG9mZnNldFg6ITAsb2Zmc2V0WTohMCxwb2ludGVySWQ6ITAscG9pbnRlclR5cGU6ITAsc2NyZWVuWDohMCxzY3JlZW5ZOiEwLHRhcmdldFRvdWNoZXM6ITAsdG9FbGVtZW50OiEwLHRvdWNoZXM6ITAsd2hpY2g6ZnVuY3Rpb24oZSl7dmFyIHQ9ZS5idXR0b247cmV0dXJuIG51bGw9PWUud2hpY2gmJmJlLnRlc3QoZS50eXBlKT9udWxsIT1lLmNoYXJDb2RlP2UuY2hhckNvZGU6ZS5rZXlDb2RlOiFlLndoaWNoJiZ2b2lkIDAhPT10JiZ3ZS50ZXN0KGUudHlwZSk/MSZ0PzE6MiZ0PzM6NCZ0PzI6MDplLndoaWNofX0sUy5ldmVudC5hZGRQcm9wKSxTLmVhY2goe2ZvY3VzOlwiZm9jdXNpblwiLGJsdXI6XCJmb2N1c291dFwifSxmdW5jdGlvbihlLHQpe1MuZXZlbnQuc3BlY2lhbFtlXT17c2V0dXA6ZnVuY3Rpb24oKXtyZXR1cm4gQWUodGhpcyxlLFNlKSwhMX0sdHJpZ2dlcjpmdW5jdGlvbigpe3JldHVybiBBZSh0aGlzLGUpLCEwfSxkZWxlZ2F0ZVR5cGU6dH19KSxTLmVhY2goe21vdXNlZW50ZXI6XCJtb3VzZW92ZXJcIixtb3VzZWxlYXZlOlwibW91c2VvdXRcIixwb2ludGVyZW50ZXI6XCJwb2ludGVyb3ZlclwiLHBvaW50ZXJsZWF2ZTpcInBvaW50ZXJvdXRcIn0sZnVuY3Rpb24oZSxpKXtTLmV2ZW50LnNwZWNpYWxbZV09e2RlbGVnYXRlVHlwZTppLGJpbmRUeXBlOmksaGFuZGxlOmZ1bmN0aW9uKGUpe3ZhciB0LG49ZS5yZWxhdGVkVGFyZ2V0LHI9ZS5oYW5kbGVPYmo7cmV0dXJuIG4mJihuPT09dGhpc3x8Uy5jb250YWlucyh0aGlzLG4pKXx8KGUudHlwZT1yLm9yaWdUeXBlLHQ9ci5oYW5kbGVyLmFwcGx5KHRoaXMsYXJndW1lbnRzKSxlLnR5cGU9aSksdH19fSksUy5mbi5leHRlbmQoe29uOmZ1bmN0aW9uKGUsdCxuLHIpe3JldHVybiBrZSh0aGlzLGUsdCxuLHIpfSxvbmU6ZnVuY3Rpb24oZSx0LG4scil7cmV0dXJuIGtlKHRoaXMsZSx0LG4sciwxKX0sb2ZmOmZ1bmN0aW9uKGUsdCxuKXt2YXIgcixpO2lmKGUmJmUucHJldmVudERlZmF1bHQmJmUuaGFuZGxlT2JqKXJldHVybiByPWUuaGFuZGxlT2JqLFMoZS5kZWxlZ2F0ZVRhcmdldCkub2ZmKHIubmFtZXNwYWNlP3Iub3JpZ1R5cGUrXCIuXCIrci5uYW1lc3BhY2U6ci5vcmlnVHlwZSxyLnNlbGVjdG9yLHIuaGFuZGxlciksdGhpcztpZihcIm9iamVjdFwiPT10eXBlb2YgZSl7Zm9yKGkgaW4gZSl0aGlzLm9mZihpLHQsZVtpXSk7cmV0dXJuIHRoaXN9cmV0dXJuITEhPT10JiZcImZ1bmN0aW9uXCIhPXR5cGVvZiB0fHwobj10LHQ9dm9pZCAwKSwhMT09PW4mJihuPUVlKSx0aGlzLmVhY2goZnVuY3Rpb24oKXtTLmV2ZW50LnJlbW92ZSh0aGlzLGUsbix0KX0pfX0pO3ZhciBOZT0vPHNjcmlwdHw8c3R5bGV8PGxpbmsvaSxEZT0vY2hlY2tlZFxccyooPzpbXj1dfD1cXHMqLmNoZWNrZWQuKS9pLGplPS9eXFxzKjwhKD86XFxbQ0RBVEFcXFt8LS0pfCg/OlxcXVxcXXwtLSk+XFxzKiQvZztmdW5jdGlvbiBxZShlLHQpe3JldHVybiBBKGUsXCJ0YWJsZVwiKSYmQSgxMSE9PXQubm9kZVR5cGU/dDp0LmZpcnN0Q2hpbGQsXCJ0clwiKSYmUyhlKS5jaGlsZHJlbihcInRib2R5XCIpWzBdfHxlfWZ1bmN0aW9uIExlKGUpe3JldHVybiBlLnR5cGU9KG51bGwhPT1lLmdldEF0dHJpYnV0ZShcInR5cGVcIikpK1wiL1wiK2UudHlwZSxlfWZ1bmN0aW9uIEhlKGUpe3JldHVyblwidHJ1ZS9cIj09PShlLnR5cGV8fFwiXCIpLnNsaWNlKDAsNSk/ZS50eXBlPWUudHlwZS5zbGljZSg1KTplLnJlbW92ZUF0dHJpYnV0ZShcInR5cGVcIiksZX1mdW5jdGlvbiBPZShlLHQpe3ZhciBuLHIsaSxvLGEscztpZigxPT09dC5ub2RlVHlwZSl7aWYoWS5oYXNEYXRhKGUpJiYocz1ZLmdldChlKS5ldmVudHMpKWZvcihpIGluIFkucmVtb3ZlKHQsXCJoYW5kbGUgZXZlbnRzXCIpLHMpZm9yKG49MCxyPXNbaV0ubGVuZ3RoO248cjtuKyspUy5ldmVudC5hZGQodCxpLHNbaV1bbl0pO1EuaGFzRGF0YShlKSYmKG89US5hY2Nlc3MoZSksYT1TLmV4dGVuZCh7fSxvKSxRLnNldCh0LGEpKX19ZnVuY3Rpb24gUGUobixyLGksbyl7cj1nKHIpO3ZhciBlLHQsYSxzLHUsbCxjPTAsZj1uLmxlbmd0aCxwPWYtMSxkPXJbMF0saD1tKGQpO2lmKGh8fDE8ZiYmXCJzdHJpbmdcIj09dHlwZW9mIGQmJiF5LmNoZWNrQ2xvbmUmJkRlLnRlc3QoZCkpcmV0dXJuIG4uZWFjaChmdW5jdGlvbihlKXt2YXIgdD1uLmVxKGUpO2gmJihyWzBdPWQuY2FsbCh0aGlzLGUsdC5odG1sKCkpKSxQZSh0LHIsaSxvKX0pO2lmKGYmJih0PShlPXhlKHIsblswXS5vd25lckRvY3VtZW50LCExLG4sbykpLmZpcnN0Q2hpbGQsMT09PWUuY2hpbGROb2Rlcy5sZW5ndGgmJihlPXQpLHR8fG8pKXtmb3Iocz0oYT1TLm1hcCh2ZShlLFwic2NyaXB0XCIpLExlKSkubGVuZ3RoO2M8ZjtjKyspdT1lLGMhPT1wJiYodT1TLmNsb25lKHUsITAsITApLHMmJlMubWVyZ2UoYSx2ZSh1LFwic2NyaXB0XCIpKSksaS5jYWxsKG5bY10sdSxjKTtpZihzKWZvcihsPWFbYS5sZW5ndGgtMV0ub3duZXJEb2N1bWVudCxTLm1hcChhLEhlKSxjPTA7YzxzO2MrKyl1PWFbY10saGUudGVzdCh1LnR5cGV8fFwiXCIpJiYhWS5hY2Nlc3ModSxcImdsb2JhbEV2YWxcIikmJlMuY29udGFpbnMobCx1KSYmKHUuc3JjJiZcIm1vZHVsZVwiIT09KHUudHlwZXx8XCJcIikudG9Mb3dlckNhc2UoKT9TLl9ldmFsVXJsJiYhdS5ub01vZHVsZSYmUy5fZXZhbFVybCh1LnNyYyx7bm9uY2U6dS5ub25jZXx8dS5nZXRBdHRyaWJ1dGUoXCJub25jZVwiKX0sbCk6Yih1LnRleHRDb250ZW50LnJlcGxhY2UoamUsXCJcIiksdSxsKSl9cmV0dXJuIG59ZnVuY3Rpb24gUmUoZSx0LG4pe2Zvcih2YXIgcixpPXQ/Uy5maWx0ZXIodCxlKTplLG89MDtudWxsIT0ocj1pW29dKTtvKyspbnx8MSE9PXIubm9kZVR5cGV8fFMuY2xlYW5EYXRhKHZlKHIpKSxyLnBhcmVudE5vZGUmJihuJiZpZShyKSYmeWUodmUocixcInNjcmlwdFwiKSksci5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHIpKTtyZXR1cm4gZX1TLmV4dGVuZCh7aHRtbFByZWZpbHRlcjpmdW5jdGlvbihlKXtyZXR1cm4gZX0sY2xvbmU6ZnVuY3Rpb24oZSx0LG4pe3ZhciByLGksbyxhLHMsdSxsLGM9ZS5jbG9uZU5vZGUoITApLGY9aWUoZSk7aWYoISh5Lm5vQ2xvbmVDaGVja2VkfHwxIT09ZS5ub2RlVHlwZSYmMTEhPT1lLm5vZGVUeXBlfHxTLmlzWE1MRG9jKGUpKSlmb3IoYT12ZShjKSxyPTAsaT0obz12ZShlKSkubGVuZ3RoO3I8aTtyKyspcz1vW3JdLHU9YVtyXSx2b2lkIDAsXCJpbnB1dFwiPT09KGw9dS5ub2RlTmFtZS50b0xvd2VyQ2FzZSgpKSYmcGUudGVzdChzLnR5cGUpP3UuY2hlY2tlZD1zLmNoZWNrZWQ6XCJpbnB1dFwiIT09bCYmXCJ0ZXh0YXJlYVwiIT09bHx8KHUuZGVmYXVsdFZhbHVlPXMuZGVmYXVsdFZhbHVlKTtpZih0KWlmKG4pZm9yKG89b3x8dmUoZSksYT1hfHx2ZShjKSxyPTAsaT1vLmxlbmd0aDtyPGk7cisrKU9lKG9bcl0sYVtyXSk7ZWxzZSBPZShlLGMpO3JldHVybiAwPChhPXZlKGMsXCJzY3JpcHRcIikpLmxlbmd0aCYmeWUoYSwhZiYmdmUoZSxcInNjcmlwdFwiKSksY30sY2xlYW5EYXRhOmZ1bmN0aW9uKGUpe2Zvcih2YXIgdCxuLHIsaT1TLmV2ZW50LnNwZWNpYWwsbz0wO3ZvaWQgMCE9PShuPWVbb10pO28rKylpZihWKG4pKXtpZih0PW5bWS5leHBhbmRvXSl7aWYodC5ldmVudHMpZm9yKHIgaW4gdC5ldmVudHMpaVtyXT9TLmV2ZW50LnJlbW92ZShuLHIpOlMucmVtb3ZlRXZlbnQobixyLHQuaGFuZGxlKTtuW1kuZXhwYW5kb109dm9pZCAwfW5bUS5leHBhbmRvXSYmKG5bUS5leHBhbmRvXT12b2lkIDApfX19KSxTLmZuLmV4dGVuZCh7ZGV0YWNoOmZ1bmN0aW9uKGUpe3JldHVybiBSZSh0aGlzLGUsITApfSxyZW1vdmU6ZnVuY3Rpb24oZSl7cmV0dXJuIFJlKHRoaXMsZSl9LHRleHQ6ZnVuY3Rpb24oZSl7cmV0dXJuICQodGhpcyxmdW5jdGlvbihlKXtyZXR1cm4gdm9pZCAwPT09ZT9TLnRleHQodGhpcyk6dGhpcy5lbXB0eSgpLmVhY2goZnVuY3Rpb24oKXsxIT09dGhpcy5ub2RlVHlwZSYmMTEhPT10aGlzLm5vZGVUeXBlJiY5IT09dGhpcy5ub2RlVHlwZXx8KHRoaXMudGV4dENvbnRlbnQ9ZSl9KX0sbnVsbCxlLGFyZ3VtZW50cy5sZW5ndGgpfSxhcHBlbmQ6ZnVuY3Rpb24oKXtyZXR1cm4gUGUodGhpcyxhcmd1bWVudHMsZnVuY3Rpb24oZSl7MSE9PXRoaXMubm9kZVR5cGUmJjExIT09dGhpcy5ub2RlVHlwZSYmOSE9PXRoaXMubm9kZVR5cGV8fHFlKHRoaXMsZSkuYXBwZW5kQ2hpbGQoZSl9KX0scHJlcGVuZDpmdW5jdGlvbigpe3JldHVybiBQZSh0aGlzLGFyZ3VtZW50cyxmdW5jdGlvbihlKXtpZigxPT09dGhpcy5ub2RlVHlwZXx8MTE9PT10aGlzLm5vZGVUeXBlfHw5PT09dGhpcy5ub2RlVHlwZSl7dmFyIHQ9cWUodGhpcyxlKTt0Lmluc2VydEJlZm9yZShlLHQuZmlyc3RDaGlsZCl9fSl9LGJlZm9yZTpmdW5jdGlvbigpe3JldHVybiBQZSh0aGlzLGFyZ3VtZW50cyxmdW5jdGlvbihlKXt0aGlzLnBhcmVudE5vZGUmJnRoaXMucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUoZSx0aGlzKX0pfSxhZnRlcjpmdW5jdGlvbigpe3JldHVybiBQZSh0aGlzLGFyZ3VtZW50cyxmdW5jdGlvbihlKXt0aGlzLnBhcmVudE5vZGUmJnRoaXMucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUoZSx0aGlzLm5leHRTaWJsaW5nKX0pfSxlbXB0eTpmdW5jdGlvbigpe2Zvcih2YXIgZSx0PTA7bnVsbCE9KGU9dGhpc1t0XSk7dCsrKTE9PT1lLm5vZGVUeXBlJiYoUy5jbGVhbkRhdGEodmUoZSwhMSkpLGUudGV4dENvbnRlbnQ9XCJcIik7cmV0dXJuIHRoaXN9LGNsb25lOmZ1bmN0aW9uKGUsdCl7cmV0dXJuIGU9bnVsbCE9ZSYmZSx0PW51bGw9PXQ/ZTp0LHRoaXMubWFwKGZ1bmN0aW9uKCl7cmV0dXJuIFMuY2xvbmUodGhpcyxlLHQpfSl9LGh0bWw6ZnVuY3Rpb24oZSl7cmV0dXJuICQodGhpcyxmdW5jdGlvbihlKXt2YXIgdD10aGlzWzBdfHx7fSxuPTAscj10aGlzLmxlbmd0aDtpZih2b2lkIDA9PT1lJiYxPT09dC5ub2RlVHlwZSlyZXR1cm4gdC5pbm5lckhUTUw7aWYoXCJzdHJpbmdcIj09dHlwZW9mIGUmJiFOZS50ZXN0KGUpJiYhZ2VbKGRlLmV4ZWMoZSl8fFtcIlwiLFwiXCJdKVsxXS50b0xvd2VyQ2FzZSgpXSl7ZT1TLmh0bWxQcmVmaWx0ZXIoZSk7dHJ5e2Zvcig7bjxyO24rKykxPT09KHQ9dGhpc1tuXXx8e30pLm5vZGVUeXBlJiYoUy5jbGVhbkRhdGEodmUodCwhMSkpLHQuaW5uZXJIVE1MPWUpO3Q9MH1jYXRjaChlKXt9fXQmJnRoaXMuZW1wdHkoKS5hcHBlbmQoZSl9LG51bGwsZSxhcmd1bWVudHMubGVuZ3RoKX0scmVwbGFjZVdpdGg6ZnVuY3Rpb24oKXt2YXIgbj1bXTtyZXR1cm4gUGUodGhpcyxhcmd1bWVudHMsZnVuY3Rpb24oZSl7dmFyIHQ9dGhpcy5wYXJlbnROb2RlO1MuaW5BcnJheSh0aGlzLG4pPDAmJihTLmNsZWFuRGF0YSh2ZSh0aGlzKSksdCYmdC5yZXBsYWNlQ2hpbGQoZSx0aGlzKSl9LG4pfX0pLFMuZWFjaCh7YXBwZW5kVG86XCJhcHBlbmRcIixwcmVwZW5kVG86XCJwcmVwZW5kXCIsaW5zZXJ0QmVmb3JlOlwiYmVmb3JlXCIsaW5zZXJ0QWZ0ZXI6XCJhZnRlclwiLHJlcGxhY2VBbGw6XCJyZXBsYWNlV2l0aFwifSxmdW5jdGlvbihlLGEpe1MuZm5bZV09ZnVuY3Rpb24oZSl7Zm9yKHZhciB0LG49W10scj1TKGUpLGk9ci5sZW5ndGgtMSxvPTA7bzw9aTtvKyspdD1vPT09aT90aGlzOnRoaXMuY2xvbmUoITApLFMocltvXSlbYV0odCksdS5hcHBseShuLHQuZ2V0KCkpO3JldHVybiB0aGlzLnB1c2hTdGFjayhuKX19KTt2YXIgTWU9bmV3IFJlZ0V4cChcIl4oXCIrZWUrXCIpKD8hcHgpW2EteiVdKyRcIixcImlcIiksSWU9ZnVuY3Rpb24oZSl7dmFyIHQ9ZS5vd25lckRvY3VtZW50LmRlZmF1bHRWaWV3O3JldHVybiB0JiZ0Lm9wZW5lcnx8KHQ9QyksdC5nZXRDb21wdXRlZFN0eWxlKGUpfSxXZT1mdW5jdGlvbihlLHQsbil7dmFyIHIsaSxvPXt9O2ZvcihpIGluIHQpb1tpXT1lLnN0eWxlW2ldLGUuc3R5bGVbaV09dFtpXTtmb3IoaSBpbiByPW4uY2FsbChlKSx0KWUuc3R5bGVbaV09b1tpXTtyZXR1cm4gcn0sRmU9bmV3IFJlZ0V4cChuZS5qb2luKFwifFwiKSxcImlcIik7ZnVuY3Rpb24gQmUoZSx0LG4pe3ZhciByLGksbyxhLHM9ZS5zdHlsZTtyZXR1cm4obj1ufHxJZShlKSkmJihcIlwiIT09KGE9bi5nZXRQcm9wZXJ0eVZhbHVlKHQpfHxuW3RdKXx8aWUoZSl8fChhPVMuc3R5bGUoZSx0KSksIXkucGl4ZWxCb3hTdHlsZXMoKSYmTWUudGVzdChhKSYmRmUudGVzdCh0KSYmKHI9cy53aWR0aCxpPXMubWluV2lkdGgsbz1zLm1heFdpZHRoLHMubWluV2lkdGg9cy5tYXhXaWR0aD1zLndpZHRoPWEsYT1uLndpZHRoLHMud2lkdGg9cixzLm1pbldpZHRoPWkscy5tYXhXaWR0aD1vKSksdm9pZCAwIT09YT9hK1wiXCI6YX1mdW5jdGlvbiAkZShlLHQpe3JldHVybntnZXQ6ZnVuY3Rpb24oKXtpZighZSgpKXJldHVybih0aGlzLmdldD10KS5hcHBseSh0aGlzLGFyZ3VtZW50cyk7ZGVsZXRlIHRoaXMuZ2V0fX19IWZ1bmN0aW9uKCl7ZnVuY3Rpb24gZSgpe2lmKGwpe3Uuc3R5bGUuY3NzVGV4dD1cInBvc2l0aW9uOmFic29sdXRlO2xlZnQ6LTExMTExcHg7d2lkdGg6NjBweDttYXJnaW4tdG9wOjFweDtwYWRkaW5nOjA7Ym9yZGVyOjBcIixsLnN0eWxlLmNzc1RleHQ9XCJwb3NpdGlvbjpyZWxhdGl2ZTtkaXNwbGF5OmJsb2NrO2JveC1zaXppbmc6Ym9yZGVyLWJveDtvdmVyZmxvdzpzY3JvbGw7bWFyZ2luOmF1dG87Ym9yZGVyOjFweDtwYWRkaW5nOjFweDt3aWR0aDo2MCU7dG9wOjElXCIscmUuYXBwZW5kQ2hpbGQodSkuYXBwZW5kQ2hpbGQobCk7dmFyIGU9Qy5nZXRDb21wdXRlZFN0eWxlKGwpO249XCIxJVwiIT09ZS50b3Ascz0xMj09PXQoZS5tYXJnaW5MZWZ0KSxsLnN0eWxlLnJpZ2h0PVwiNjAlXCIsbz0zNj09PXQoZS5yaWdodCkscj0zNj09PXQoZS53aWR0aCksbC5zdHlsZS5wb3NpdGlvbj1cImFic29sdXRlXCIsaT0xMj09PXQobC5vZmZzZXRXaWR0aC8zKSxyZS5yZW1vdmVDaGlsZCh1KSxsPW51bGx9fWZ1bmN0aW9uIHQoZSl7cmV0dXJuIE1hdGgucm91bmQocGFyc2VGbG9hdChlKSl9dmFyIG4scixpLG8sYSxzLHU9RS5jcmVhdGVFbGVtZW50KFwiZGl2XCIpLGw9RS5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO2wuc3R5bGUmJihsLnN0eWxlLmJhY2tncm91bmRDbGlwPVwiY29udGVudC1ib3hcIixsLmNsb25lTm9kZSghMCkuc3R5bGUuYmFja2dyb3VuZENsaXA9XCJcIix5LmNsZWFyQ2xvbmVTdHlsZT1cImNvbnRlbnQtYm94XCI9PT1sLnN0eWxlLmJhY2tncm91bmRDbGlwLFMuZXh0ZW5kKHkse2JveFNpemluZ1JlbGlhYmxlOmZ1bmN0aW9uKCl7cmV0dXJuIGUoKSxyfSxwaXhlbEJveFN0eWxlczpmdW5jdGlvbigpe3JldHVybiBlKCksb30scGl4ZWxQb3NpdGlvbjpmdW5jdGlvbigpe3JldHVybiBlKCksbn0scmVsaWFibGVNYXJnaW5MZWZ0OmZ1bmN0aW9uKCl7cmV0dXJuIGUoKSxzfSxzY3JvbGxib3hTaXplOmZ1bmN0aW9uKCl7cmV0dXJuIGUoKSxpfSxyZWxpYWJsZVRyRGltZW5zaW9uczpmdW5jdGlvbigpe3ZhciBlLHQsbixyO3JldHVybiBudWxsPT1hJiYoZT1FLmNyZWF0ZUVsZW1lbnQoXCJ0YWJsZVwiKSx0PUUuY3JlYXRlRWxlbWVudChcInRyXCIpLG49RS5jcmVhdGVFbGVtZW50KFwiZGl2XCIpLGUuc3R5bGUuY3NzVGV4dD1cInBvc2l0aW9uOmFic29sdXRlO2xlZnQ6LTExMTExcHhcIix0LnN0eWxlLmhlaWdodD1cIjFweFwiLG4uc3R5bGUuaGVpZ2h0PVwiOXB4XCIscmUuYXBwZW5kQ2hpbGQoZSkuYXBwZW5kQ2hpbGQodCkuYXBwZW5kQ2hpbGQobikscj1DLmdldENvbXB1dGVkU3R5bGUodCksYT0zPHBhcnNlSW50KHIuaGVpZ2h0KSxyZS5yZW1vdmVDaGlsZChlKSksYX19KSl9KCk7dmFyIF9lPVtcIldlYmtpdFwiLFwiTW96XCIsXCJtc1wiXSx6ZT1FLmNyZWF0ZUVsZW1lbnQoXCJkaXZcIikuc3R5bGUsVWU9e307ZnVuY3Rpb24gWGUoZSl7dmFyIHQ9Uy5jc3NQcm9wc1tlXXx8VWVbZV07cmV0dXJuIHR8fChlIGluIHplP2U6VWVbZV09ZnVuY3Rpb24oZSl7dmFyIHQ9ZVswXS50b1VwcGVyQ2FzZSgpK2Uuc2xpY2UoMSksbj1fZS5sZW5ndGg7d2hpbGUobi0tKWlmKChlPV9lW25dK3QpaW4gemUpcmV0dXJuIGV9KGUpfHxlKX12YXIgVmU9L14obm9uZXx0YWJsZSg/IS1jW2VhXSkuKykvLEdlPS9eLS0vLFllPXtwb3NpdGlvbjpcImFic29sdXRlXCIsdmlzaWJpbGl0eTpcImhpZGRlblwiLGRpc3BsYXk6XCJibG9ja1wifSxRZT17bGV0dGVyU3BhY2luZzpcIjBcIixmb250V2VpZ2h0OlwiNDAwXCJ9O2Z1bmN0aW9uIEplKGUsdCxuKXt2YXIgcj10ZS5leGVjKHQpO3JldHVybiByP01hdGgubWF4KDAsclsyXS0obnx8MCkpKyhyWzNdfHxcInB4XCIpOnR9ZnVuY3Rpb24gS2UoZSx0LG4scixpLG8pe3ZhciBhPVwid2lkdGhcIj09PXQ/MTowLHM9MCx1PTA7aWYobj09PShyP1wiYm9yZGVyXCI6XCJjb250ZW50XCIpKXJldHVybiAwO2Zvcig7YTw0O2ErPTIpXCJtYXJnaW5cIj09PW4mJih1Kz1TLmNzcyhlLG4rbmVbYV0sITAsaSkpLHI/KFwiY29udGVudFwiPT09biYmKHUtPVMuY3NzKGUsXCJwYWRkaW5nXCIrbmVbYV0sITAsaSkpLFwibWFyZ2luXCIhPT1uJiYodS09Uy5jc3MoZSxcImJvcmRlclwiK25lW2FdK1wiV2lkdGhcIiwhMCxpKSkpOih1Kz1TLmNzcyhlLFwicGFkZGluZ1wiK25lW2FdLCEwLGkpLFwicGFkZGluZ1wiIT09bj91Kz1TLmNzcyhlLFwiYm9yZGVyXCIrbmVbYV0rXCJXaWR0aFwiLCEwLGkpOnMrPVMuY3NzKGUsXCJib3JkZXJcIituZVthXStcIldpZHRoXCIsITAsaSkpO3JldHVybiFyJiYwPD1vJiYodSs9TWF0aC5tYXgoMCxNYXRoLmNlaWwoZVtcIm9mZnNldFwiK3RbMF0udG9VcHBlckNhc2UoKSt0LnNsaWNlKDEpXS1vLXUtcy0uNSkpfHwwKSx1fWZ1bmN0aW9uIFplKGUsdCxuKXt2YXIgcj1JZShlKSxpPSgheS5ib3hTaXppbmdSZWxpYWJsZSgpfHxuKSYmXCJib3JkZXItYm94XCI9PT1TLmNzcyhlLFwiYm94U2l6aW5nXCIsITEsciksbz1pLGE9QmUoZSx0LHIpLHM9XCJvZmZzZXRcIit0WzBdLnRvVXBwZXJDYXNlKCkrdC5zbGljZSgxKTtpZihNZS50ZXN0KGEpKXtpZighbilyZXR1cm4gYTthPVwiYXV0b1wifXJldHVybigheS5ib3hTaXppbmdSZWxpYWJsZSgpJiZpfHwheS5yZWxpYWJsZVRyRGltZW5zaW9ucygpJiZBKGUsXCJ0clwiKXx8XCJhdXRvXCI9PT1hfHwhcGFyc2VGbG9hdChhKSYmXCJpbmxpbmVcIj09PVMuY3NzKGUsXCJkaXNwbGF5XCIsITEscikpJiZlLmdldENsaWVudFJlY3RzKCkubGVuZ3RoJiYoaT1cImJvcmRlci1ib3hcIj09PVMuY3NzKGUsXCJib3hTaXppbmdcIiwhMSxyKSwobz1zIGluIGUpJiYoYT1lW3NdKSksKGE9cGFyc2VGbG9hdChhKXx8MCkrS2UoZSx0LG58fChpP1wiYm9yZGVyXCI6XCJjb250ZW50XCIpLG8scixhKStcInB4XCJ9ZnVuY3Rpb24gZXQoZSx0LG4scixpKXtyZXR1cm4gbmV3IGV0LnByb3RvdHlwZS5pbml0KGUsdCxuLHIsaSl9Uy5leHRlbmQoe2Nzc0hvb2tzOntvcGFjaXR5OntnZXQ6ZnVuY3Rpb24oZSx0KXtpZih0KXt2YXIgbj1CZShlLFwib3BhY2l0eVwiKTtyZXR1cm5cIlwiPT09bj9cIjFcIjpufX19fSxjc3NOdW1iZXI6e2FuaW1hdGlvbkl0ZXJhdGlvbkNvdW50OiEwLGNvbHVtbkNvdW50OiEwLGZpbGxPcGFjaXR5OiEwLGZsZXhHcm93OiEwLGZsZXhTaHJpbms6ITAsZm9udFdlaWdodDohMCxncmlkQXJlYTohMCxncmlkQ29sdW1uOiEwLGdyaWRDb2x1bW5FbmQ6ITAsZ3JpZENvbHVtblN0YXJ0OiEwLGdyaWRSb3c6ITAsZ3JpZFJvd0VuZDohMCxncmlkUm93U3RhcnQ6ITAsbGluZUhlaWdodDohMCxvcGFjaXR5OiEwLG9yZGVyOiEwLG9ycGhhbnM6ITAsd2lkb3dzOiEwLHpJbmRleDohMCx6b29tOiEwfSxjc3NQcm9wczp7fSxzdHlsZTpmdW5jdGlvbihlLHQsbixyKXtpZihlJiYzIT09ZS5ub2RlVHlwZSYmOCE9PWUubm9kZVR5cGUmJmUuc3R5bGUpe3ZhciBpLG8sYSxzPVgodCksdT1HZS50ZXN0KHQpLGw9ZS5zdHlsZTtpZih1fHwodD1YZShzKSksYT1TLmNzc0hvb2tzW3RdfHxTLmNzc0hvb2tzW3NdLHZvaWQgMD09PW4pcmV0dXJuIGEmJlwiZ2V0XCJpbiBhJiZ2b2lkIDAhPT0oaT1hLmdldChlLCExLHIpKT9pOmxbdF07XCJzdHJpbmdcIj09PShvPXR5cGVvZiBuKSYmKGk9dGUuZXhlYyhuKSkmJmlbMV0mJihuPXNlKGUsdCxpKSxvPVwibnVtYmVyXCIpLG51bGwhPW4mJm49PW4mJihcIm51bWJlclwiIT09b3x8dXx8KG4rPWkmJmlbM118fChTLmNzc051bWJlcltzXT9cIlwiOlwicHhcIikpLHkuY2xlYXJDbG9uZVN0eWxlfHxcIlwiIT09bnx8MCE9PXQuaW5kZXhPZihcImJhY2tncm91bmRcIil8fChsW3RdPVwiaW5oZXJpdFwiKSxhJiZcInNldFwiaW4gYSYmdm9pZCAwPT09KG49YS5zZXQoZSxuLHIpKXx8KHU/bC5zZXRQcm9wZXJ0eSh0LG4pOmxbdF09bikpfX0sY3NzOmZ1bmN0aW9uKGUsdCxuLHIpe3ZhciBpLG8sYSxzPVgodCk7cmV0dXJuIEdlLnRlc3QodCl8fCh0PVhlKHMpKSwoYT1TLmNzc0hvb2tzW3RdfHxTLmNzc0hvb2tzW3NdKSYmXCJnZXRcImluIGEmJihpPWEuZ2V0KGUsITAsbikpLHZvaWQgMD09PWkmJihpPUJlKGUsdCxyKSksXCJub3JtYWxcIj09PWkmJnQgaW4gUWUmJihpPVFlW3RdKSxcIlwiPT09bnx8bj8obz1wYXJzZUZsb2F0KGkpLCEwPT09bnx8aXNGaW5pdGUobyk/b3x8MDppKTppfX0pLFMuZWFjaChbXCJoZWlnaHRcIixcIndpZHRoXCJdLGZ1bmN0aW9uKGUsdSl7Uy5jc3NIb29rc1t1XT17Z2V0OmZ1bmN0aW9uKGUsdCxuKXtpZih0KXJldHVybiFWZS50ZXN0KFMuY3NzKGUsXCJkaXNwbGF5XCIpKXx8ZS5nZXRDbGllbnRSZWN0cygpLmxlbmd0aCYmZS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS53aWR0aD9aZShlLHUsbik6V2UoZSxZZSxmdW5jdGlvbigpe3JldHVybiBaZShlLHUsbil9KX0sc2V0OmZ1bmN0aW9uKGUsdCxuKXt2YXIgcixpPUllKGUpLG89IXkuc2Nyb2xsYm94U2l6ZSgpJiZcImFic29sdXRlXCI9PT1pLnBvc2l0aW9uLGE9KG98fG4pJiZcImJvcmRlci1ib3hcIj09PVMuY3NzKGUsXCJib3hTaXppbmdcIiwhMSxpKSxzPW4/S2UoZSx1LG4sYSxpKTowO3JldHVybiBhJiZvJiYocy09TWF0aC5jZWlsKGVbXCJvZmZzZXRcIit1WzBdLnRvVXBwZXJDYXNlKCkrdS5zbGljZSgxKV0tcGFyc2VGbG9hdChpW3VdKS1LZShlLHUsXCJib3JkZXJcIiwhMSxpKS0uNSkpLHMmJihyPXRlLmV4ZWModCkpJiZcInB4XCIhPT0oclszXXx8XCJweFwiKSYmKGUuc3R5bGVbdV09dCx0PVMuY3NzKGUsdSkpLEplKDAsdCxzKX19fSksUy5jc3NIb29rcy5tYXJnaW5MZWZ0PSRlKHkucmVsaWFibGVNYXJnaW5MZWZ0LGZ1bmN0aW9uKGUsdCl7aWYodClyZXR1cm4ocGFyc2VGbG9hdChCZShlLFwibWFyZ2luTGVmdFwiKSl8fGUuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkubGVmdC1XZShlLHttYXJnaW5MZWZ0OjB9LGZ1bmN0aW9uKCl7cmV0dXJuIGUuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkubGVmdH0pKStcInB4XCJ9KSxTLmVhY2goe21hcmdpbjpcIlwiLHBhZGRpbmc6XCJcIixib3JkZXI6XCJXaWR0aFwifSxmdW5jdGlvbihpLG8pe1MuY3NzSG9va3NbaStvXT17ZXhwYW5kOmZ1bmN0aW9uKGUpe2Zvcih2YXIgdD0wLG49e30scj1cInN0cmluZ1wiPT10eXBlb2YgZT9lLnNwbGl0KFwiIFwiKTpbZV07dDw0O3QrKyluW2krbmVbdF0rb109clt0XXx8clt0LTJdfHxyWzBdO3JldHVybiBufX0sXCJtYXJnaW5cIiE9PWkmJihTLmNzc0hvb2tzW2krb10uc2V0PUplKX0pLFMuZm4uZXh0ZW5kKHtjc3M6ZnVuY3Rpb24oZSx0KXtyZXR1cm4gJCh0aGlzLGZ1bmN0aW9uKGUsdCxuKXt2YXIgcixpLG89e30sYT0wO2lmKEFycmF5LmlzQXJyYXkodCkpe2ZvcihyPUllKGUpLGk9dC5sZW5ndGg7YTxpO2ErKylvW3RbYV1dPVMuY3NzKGUsdFthXSwhMSxyKTtyZXR1cm4gb31yZXR1cm4gdm9pZCAwIT09bj9TLnN0eWxlKGUsdCxuKTpTLmNzcyhlLHQpfSxlLHQsMTxhcmd1bWVudHMubGVuZ3RoKX19KSwoKFMuVHdlZW49ZXQpLnByb3RvdHlwZT17Y29uc3RydWN0b3I6ZXQsaW5pdDpmdW5jdGlvbihlLHQsbixyLGksbyl7dGhpcy5lbGVtPWUsdGhpcy5wcm9wPW4sdGhpcy5lYXNpbmc9aXx8Uy5lYXNpbmcuX2RlZmF1bHQsdGhpcy5vcHRpb25zPXQsdGhpcy5zdGFydD10aGlzLm5vdz10aGlzLmN1cigpLHRoaXMuZW5kPXIsdGhpcy51bml0PW98fChTLmNzc051bWJlcltuXT9cIlwiOlwicHhcIil9LGN1cjpmdW5jdGlvbigpe3ZhciBlPWV0LnByb3BIb29rc1t0aGlzLnByb3BdO3JldHVybiBlJiZlLmdldD9lLmdldCh0aGlzKTpldC5wcm9wSG9va3MuX2RlZmF1bHQuZ2V0KHRoaXMpfSxydW46ZnVuY3Rpb24oZSl7dmFyIHQsbj1ldC5wcm9wSG9va3NbdGhpcy5wcm9wXTtyZXR1cm4gdGhpcy5vcHRpb25zLmR1cmF0aW9uP3RoaXMucG9zPXQ9Uy5lYXNpbmdbdGhpcy5lYXNpbmddKGUsdGhpcy5vcHRpb25zLmR1cmF0aW9uKmUsMCwxLHRoaXMub3B0aW9ucy5kdXJhdGlvbik6dGhpcy5wb3M9dD1lLHRoaXMubm93PSh0aGlzLmVuZC10aGlzLnN0YXJ0KSp0K3RoaXMuc3RhcnQsdGhpcy5vcHRpb25zLnN0ZXAmJnRoaXMub3B0aW9ucy5zdGVwLmNhbGwodGhpcy5lbGVtLHRoaXMubm93LHRoaXMpLG4mJm4uc2V0P24uc2V0KHRoaXMpOmV0LnByb3BIb29rcy5fZGVmYXVsdC5zZXQodGhpcyksdGhpc319KS5pbml0LnByb3RvdHlwZT1ldC5wcm90b3R5cGUsKGV0LnByb3BIb29rcz17X2RlZmF1bHQ6e2dldDpmdW5jdGlvbihlKXt2YXIgdDtyZXR1cm4gMSE9PWUuZWxlbS5ub2RlVHlwZXx8bnVsbCE9ZS5lbGVtW2UucHJvcF0mJm51bGw9PWUuZWxlbS5zdHlsZVtlLnByb3BdP2UuZWxlbVtlLnByb3BdOih0PVMuY3NzKGUuZWxlbSxlLnByb3AsXCJcIikpJiZcImF1dG9cIiE9PXQ/dDowfSxzZXQ6ZnVuY3Rpb24oZSl7Uy5meC5zdGVwW2UucHJvcF0/Uy5meC5zdGVwW2UucHJvcF0oZSk6MSE9PWUuZWxlbS5ub2RlVHlwZXx8IVMuY3NzSG9va3NbZS5wcm9wXSYmbnVsbD09ZS5lbGVtLnN0eWxlW1hlKGUucHJvcCldP2UuZWxlbVtlLnByb3BdPWUubm93OlMuc3R5bGUoZS5lbGVtLGUucHJvcCxlLm5vdytlLnVuaXQpfX19KS5zY3JvbGxUb3A9ZXQucHJvcEhvb2tzLnNjcm9sbExlZnQ9e3NldDpmdW5jdGlvbihlKXtlLmVsZW0ubm9kZVR5cGUmJmUuZWxlbS5wYXJlbnROb2RlJiYoZS5lbGVtW2UucHJvcF09ZS5ub3cpfX0sUy5lYXNpbmc9e2xpbmVhcjpmdW5jdGlvbihlKXtyZXR1cm4gZX0sc3dpbmc6ZnVuY3Rpb24oZSl7cmV0dXJuLjUtTWF0aC5jb3MoZSpNYXRoLlBJKS8yfSxfZGVmYXVsdDpcInN3aW5nXCJ9LFMuZng9ZXQucHJvdG90eXBlLmluaXQsUy5meC5zdGVwPXt9O3ZhciB0dCxudCxydCxpdCxvdD0vXig/OnRvZ2dsZXxzaG93fGhpZGUpJC8sYXQ9L3F1ZXVlSG9va3MkLztmdW5jdGlvbiBzdCgpe250JiYoITE9PT1FLmhpZGRlbiYmQy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWU/Qy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUoc3QpOkMuc2V0VGltZW91dChzdCxTLmZ4LmludGVydmFsKSxTLmZ4LnRpY2soKSl9ZnVuY3Rpb24gdXQoKXtyZXR1cm4gQy5zZXRUaW1lb3V0KGZ1bmN0aW9uKCl7dHQ9dm9pZCAwfSksdHQ9RGF0ZS5ub3coKX1mdW5jdGlvbiBsdChlLHQpe3ZhciBuLHI9MCxpPXtoZWlnaHQ6ZX07Zm9yKHQ9dD8xOjA7cjw0O3IrPTItdClpW1wibWFyZ2luXCIrKG49bmVbcl0pXT1pW1wicGFkZGluZ1wiK25dPWU7cmV0dXJuIHQmJihpLm9wYWNpdHk9aS53aWR0aD1lKSxpfWZ1bmN0aW9uIGN0KGUsdCxuKXtmb3IodmFyIHIsaT0oZnQudHdlZW5lcnNbdF18fFtdKS5jb25jYXQoZnQudHdlZW5lcnNbXCIqXCJdKSxvPTAsYT1pLmxlbmd0aDtvPGE7bysrKWlmKHI9aVtvXS5jYWxsKG4sdCxlKSlyZXR1cm4gcn1mdW5jdGlvbiBmdChvLGUsdCl7dmFyIG4sYSxyPTAsaT1mdC5wcmVmaWx0ZXJzLmxlbmd0aCxzPVMuRGVmZXJyZWQoKS5hbHdheXMoZnVuY3Rpb24oKXtkZWxldGUgdS5lbGVtfSksdT1mdW5jdGlvbigpe2lmKGEpcmV0dXJuITE7Zm9yKHZhciBlPXR0fHx1dCgpLHQ9TWF0aC5tYXgoMCxsLnN0YXJ0VGltZStsLmR1cmF0aW9uLWUpLG49MS0odC9sLmR1cmF0aW9ufHwwKSxyPTAsaT1sLnR3ZWVucy5sZW5ndGg7cjxpO3IrKylsLnR3ZWVuc1tyXS5ydW4obik7cmV0dXJuIHMubm90aWZ5V2l0aChvLFtsLG4sdF0pLG48MSYmaT90OihpfHxzLm5vdGlmeVdpdGgobyxbbCwxLDBdKSxzLnJlc29sdmVXaXRoKG8sW2xdKSwhMSl9LGw9cy5wcm9taXNlKHtlbGVtOm8scHJvcHM6Uy5leHRlbmQoe30sZSksb3B0czpTLmV4dGVuZCghMCx7c3BlY2lhbEVhc2luZzp7fSxlYXNpbmc6Uy5lYXNpbmcuX2RlZmF1bHR9LHQpLG9yaWdpbmFsUHJvcGVydGllczplLG9yaWdpbmFsT3B0aW9uczp0LHN0YXJ0VGltZTp0dHx8dXQoKSxkdXJhdGlvbjp0LmR1cmF0aW9uLHR3ZWVuczpbXSxjcmVhdGVUd2VlbjpmdW5jdGlvbihlLHQpe3ZhciBuPVMuVHdlZW4obyxsLm9wdHMsZSx0LGwub3B0cy5zcGVjaWFsRWFzaW5nW2VdfHxsLm9wdHMuZWFzaW5nKTtyZXR1cm4gbC50d2VlbnMucHVzaChuKSxufSxzdG9wOmZ1bmN0aW9uKGUpe3ZhciB0PTAsbj1lP2wudHdlZW5zLmxlbmd0aDowO2lmKGEpcmV0dXJuIHRoaXM7Zm9yKGE9ITA7dDxuO3QrKylsLnR3ZWVuc1t0XS5ydW4oMSk7cmV0dXJuIGU/KHMubm90aWZ5V2l0aChvLFtsLDEsMF0pLHMucmVzb2x2ZVdpdGgobyxbbCxlXSkpOnMucmVqZWN0V2l0aChvLFtsLGVdKSx0aGlzfX0pLGM9bC5wcm9wcztmb3IoIWZ1bmN0aW9uKGUsdCl7dmFyIG4scixpLG8sYTtmb3IobiBpbiBlKWlmKGk9dFtyPVgobildLG89ZVtuXSxBcnJheS5pc0FycmF5KG8pJiYoaT1vWzFdLG89ZVtuXT1vWzBdKSxuIT09ciYmKGVbcl09byxkZWxldGUgZVtuXSksKGE9Uy5jc3NIb29rc1tyXSkmJlwiZXhwYW5kXCJpbiBhKWZvcihuIGluIG89YS5leHBhbmQobyksZGVsZXRlIGVbcl0sbyluIGluIGV8fChlW25dPW9bbl0sdFtuXT1pKTtlbHNlIHRbcl09aX0oYyxsLm9wdHMuc3BlY2lhbEVhc2luZyk7cjxpO3IrKylpZihuPWZ0LnByZWZpbHRlcnNbcl0uY2FsbChsLG8sYyxsLm9wdHMpKXJldHVybiBtKG4uc3RvcCkmJihTLl9xdWV1ZUhvb2tzKGwuZWxlbSxsLm9wdHMucXVldWUpLnN0b3A9bi5zdG9wLmJpbmQobikpLG47cmV0dXJuIFMubWFwKGMsY3QsbCksbShsLm9wdHMuc3RhcnQpJiZsLm9wdHMuc3RhcnQuY2FsbChvLGwpLGwucHJvZ3Jlc3MobC5vcHRzLnByb2dyZXNzKS5kb25lKGwub3B0cy5kb25lLGwub3B0cy5jb21wbGV0ZSkuZmFpbChsLm9wdHMuZmFpbCkuYWx3YXlzKGwub3B0cy5hbHdheXMpLFMuZngudGltZXIoUy5leHRlbmQodSx7ZWxlbTpvLGFuaW06bCxxdWV1ZTpsLm9wdHMucXVldWV9KSksbH1TLkFuaW1hdGlvbj1TLmV4dGVuZChmdCx7dHdlZW5lcnM6e1wiKlwiOltmdW5jdGlvbihlLHQpe3ZhciBuPXRoaXMuY3JlYXRlVHdlZW4oZSx0KTtyZXR1cm4gc2Uobi5lbGVtLGUsdGUuZXhlYyh0KSxuKSxufV19LHR3ZWVuZXI6ZnVuY3Rpb24oZSx0KXttKGUpPyh0PWUsZT1bXCIqXCJdKTplPWUubWF0Y2goUCk7Zm9yKHZhciBuLHI9MCxpPWUubGVuZ3RoO3I8aTtyKyspbj1lW3JdLGZ0LnR3ZWVuZXJzW25dPWZ0LnR3ZWVuZXJzW25dfHxbXSxmdC50d2VlbmVyc1tuXS51bnNoaWZ0KHQpfSxwcmVmaWx0ZXJzOltmdW5jdGlvbihlLHQsbil7dmFyIHIsaSxvLGEscyx1LGwsYyxmPVwid2lkdGhcImluIHR8fFwiaGVpZ2h0XCJpbiB0LHA9dGhpcyxkPXt9LGg9ZS5zdHlsZSxnPWUubm9kZVR5cGUmJmFlKGUpLHY9WS5nZXQoZSxcImZ4c2hvd1wiKTtmb3IociBpbiBuLnF1ZXVlfHwobnVsbD09KGE9Uy5fcXVldWVIb29rcyhlLFwiZnhcIikpLnVucXVldWVkJiYoYS51bnF1ZXVlZD0wLHM9YS5lbXB0eS5maXJlLGEuZW1wdHkuZmlyZT1mdW5jdGlvbigpe2EudW5xdWV1ZWR8fHMoKX0pLGEudW5xdWV1ZWQrKyxwLmFsd2F5cyhmdW5jdGlvbigpe3AuYWx3YXlzKGZ1bmN0aW9uKCl7YS51bnF1ZXVlZC0tLFMucXVldWUoZSxcImZ4XCIpLmxlbmd0aHx8YS5lbXB0eS5maXJlKCl9KX0pKSx0KWlmKGk9dFtyXSxvdC50ZXN0KGkpKXtpZihkZWxldGUgdFtyXSxvPW98fFwidG9nZ2xlXCI9PT1pLGk9PT0oZz9cImhpZGVcIjpcInNob3dcIikpe2lmKFwic2hvd1wiIT09aXx8IXZ8fHZvaWQgMD09PXZbcl0pY29udGludWU7Zz0hMH1kW3JdPXYmJnZbcl18fFMuc3R5bGUoZSxyKX1pZigodT0hUy5pc0VtcHR5T2JqZWN0KHQpKXx8IVMuaXNFbXB0eU9iamVjdChkKSlmb3IociBpbiBmJiYxPT09ZS5ub2RlVHlwZSYmKG4ub3ZlcmZsb3c9W2gub3ZlcmZsb3csaC5vdmVyZmxvd1gsaC5vdmVyZmxvd1ldLG51bGw9PShsPXYmJnYuZGlzcGxheSkmJihsPVkuZ2V0KGUsXCJkaXNwbGF5XCIpKSxcIm5vbmVcIj09PShjPVMuY3NzKGUsXCJkaXNwbGF5XCIpKSYmKGw/Yz1sOihsZShbZV0sITApLGw9ZS5zdHlsZS5kaXNwbGF5fHxsLGM9Uy5jc3MoZSxcImRpc3BsYXlcIiksbGUoW2VdKSkpLChcImlubGluZVwiPT09Y3x8XCJpbmxpbmUtYmxvY2tcIj09PWMmJm51bGwhPWwpJiZcIm5vbmVcIj09PVMuY3NzKGUsXCJmbG9hdFwiKSYmKHV8fChwLmRvbmUoZnVuY3Rpb24oKXtoLmRpc3BsYXk9bH0pLG51bGw9PWwmJihjPWguZGlzcGxheSxsPVwibm9uZVwiPT09Yz9cIlwiOmMpKSxoLmRpc3BsYXk9XCJpbmxpbmUtYmxvY2tcIikpLG4ub3ZlcmZsb3cmJihoLm92ZXJmbG93PVwiaGlkZGVuXCIscC5hbHdheXMoZnVuY3Rpb24oKXtoLm92ZXJmbG93PW4ub3ZlcmZsb3dbMF0saC5vdmVyZmxvd1g9bi5vdmVyZmxvd1sxXSxoLm92ZXJmbG93WT1uLm92ZXJmbG93WzJdfSkpLHU9ITEsZCl1fHwodj9cImhpZGRlblwiaW4gdiYmKGc9di5oaWRkZW4pOnY9WS5hY2Nlc3MoZSxcImZ4c2hvd1wiLHtkaXNwbGF5Omx9KSxvJiYodi5oaWRkZW49IWcpLGcmJmxlKFtlXSwhMCkscC5kb25lKGZ1bmN0aW9uKCl7Zm9yKHIgaW4gZ3x8bGUoW2VdKSxZLnJlbW92ZShlLFwiZnhzaG93XCIpLGQpUy5zdHlsZShlLHIsZFtyXSl9KSksdT1jdChnP3Zbcl06MCxyLHApLHIgaW4gdnx8KHZbcl09dS5zdGFydCxnJiYodS5lbmQ9dS5zdGFydCx1LnN0YXJ0PTApKX1dLHByZWZpbHRlcjpmdW5jdGlvbihlLHQpe3Q/ZnQucHJlZmlsdGVycy51bnNoaWZ0KGUpOmZ0LnByZWZpbHRlcnMucHVzaChlKX19KSxTLnNwZWVkPWZ1bmN0aW9uKGUsdCxuKXt2YXIgcj1lJiZcIm9iamVjdFwiPT10eXBlb2YgZT9TLmV4dGVuZCh7fSxlKTp7Y29tcGxldGU6bnx8IW4mJnR8fG0oZSkmJmUsZHVyYXRpb246ZSxlYXNpbmc6biYmdHx8dCYmIW0odCkmJnR9O3JldHVybiBTLmZ4Lm9mZj9yLmR1cmF0aW9uPTA6XCJudW1iZXJcIiE9dHlwZW9mIHIuZHVyYXRpb24mJihyLmR1cmF0aW9uIGluIFMuZnguc3BlZWRzP3IuZHVyYXRpb249Uy5meC5zcGVlZHNbci5kdXJhdGlvbl06ci5kdXJhdGlvbj1TLmZ4LnNwZWVkcy5fZGVmYXVsdCksbnVsbCE9ci5xdWV1ZSYmITAhPT1yLnF1ZXVlfHwoci5xdWV1ZT1cImZ4XCIpLHIub2xkPXIuY29tcGxldGUsci5jb21wbGV0ZT1mdW5jdGlvbigpe20oci5vbGQpJiZyLm9sZC5jYWxsKHRoaXMpLHIucXVldWUmJlMuZGVxdWV1ZSh0aGlzLHIucXVldWUpfSxyfSxTLmZuLmV4dGVuZCh7ZmFkZVRvOmZ1bmN0aW9uKGUsdCxuLHIpe3JldHVybiB0aGlzLmZpbHRlcihhZSkuY3NzKFwib3BhY2l0eVwiLDApLnNob3coKS5lbmQoKS5hbmltYXRlKHtvcGFjaXR5OnR9LGUsbixyKX0sYW5pbWF0ZTpmdW5jdGlvbih0LGUsbixyKXt2YXIgaT1TLmlzRW1wdHlPYmplY3QodCksbz1TLnNwZWVkKGUsbixyKSxhPWZ1bmN0aW9uKCl7dmFyIGU9ZnQodGhpcyxTLmV4dGVuZCh7fSx0KSxvKTsoaXx8WS5nZXQodGhpcyxcImZpbmlzaFwiKSkmJmUuc3RvcCghMCl9O3JldHVybiBhLmZpbmlzaD1hLGl8fCExPT09by5xdWV1ZT90aGlzLmVhY2goYSk6dGhpcy5xdWV1ZShvLnF1ZXVlLGEpfSxzdG9wOmZ1bmN0aW9uKGksZSxvKXt2YXIgYT1mdW5jdGlvbihlKXt2YXIgdD1lLnN0b3A7ZGVsZXRlIGUuc3RvcCx0KG8pfTtyZXR1cm5cInN0cmluZ1wiIT10eXBlb2YgaSYmKG89ZSxlPWksaT12b2lkIDApLGUmJnRoaXMucXVldWUoaXx8XCJmeFwiLFtdKSx0aGlzLmVhY2goZnVuY3Rpb24oKXt2YXIgZT0hMCx0PW51bGwhPWkmJmkrXCJxdWV1ZUhvb2tzXCIsbj1TLnRpbWVycyxyPVkuZ2V0KHRoaXMpO2lmKHQpclt0XSYmclt0XS5zdG9wJiZhKHJbdF0pO2Vsc2UgZm9yKHQgaW4gcilyW3RdJiZyW3RdLnN0b3AmJmF0LnRlc3QodCkmJmEoclt0XSk7Zm9yKHQ9bi5sZW5ndGg7dC0tOyluW3RdLmVsZW0hPT10aGlzfHxudWxsIT1pJiZuW3RdLnF1ZXVlIT09aXx8KG5bdF0uYW5pbS5zdG9wKG8pLGU9ITEsbi5zcGxpY2UodCwxKSk7IWUmJm98fFMuZGVxdWV1ZSh0aGlzLGkpfSl9LGZpbmlzaDpmdW5jdGlvbihhKXtyZXR1cm4hMSE9PWEmJihhPWF8fFwiZnhcIiksdGhpcy5lYWNoKGZ1bmN0aW9uKCl7dmFyIGUsdD1ZLmdldCh0aGlzKSxuPXRbYStcInF1ZXVlXCJdLHI9dFthK1wicXVldWVIb29rc1wiXSxpPVMudGltZXJzLG89bj9uLmxlbmd0aDowO2Zvcih0LmZpbmlzaD0hMCxTLnF1ZXVlKHRoaXMsYSxbXSksciYmci5zdG9wJiZyLnN0b3AuY2FsbCh0aGlzLCEwKSxlPWkubGVuZ3RoO2UtLTspaVtlXS5lbGVtPT09dGhpcyYmaVtlXS5xdWV1ZT09PWEmJihpW2VdLmFuaW0uc3RvcCghMCksaS5zcGxpY2UoZSwxKSk7Zm9yKGU9MDtlPG87ZSsrKW5bZV0mJm5bZV0uZmluaXNoJiZuW2VdLmZpbmlzaC5jYWxsKHRoaXMpO2RlbGV0ZSB0LmZpbmlzaH0pfX0pLFMuZWFjaChbXCJ0b2dnbGVcIixcInNob3dcIixcImhpZGVcIl0sZnVuY3Rpb24oZSxyKXt2YXIgaT1TLmZuW3JdO1MuZm5bcl09ZnVuY3Rpb24oZSx0LG4pe3JldHVybiBudWxsPT1lfHxcImJvb2xlYW5cIj09dHlwZW9mIGU/aS5hcHBseSh0aGlzLGFyZ3VtZW50cyk6dGhpcy5hbmltYXRlKGx0KHIsITApLGUsdCxuKX19KSxTLmVhY2goe3NsaWRlRG93bjpsdChcInNob3dcIiksc2xpZGVVcDpsdChcImhpZGVcIiksc2xpZGVUb2dnbGU6bHQoXCJ0b2dnbGVcIiksZmFkZUluOntvcGFjaXR5Olwic2hvd1wifSxmYWRlT3V0OntvcGFjaXR5OlwiaGlkZVwifSxmYWRlVG9nZ2xlOntvcGFjaXR5OlwidG9nZ2xlXCJ9fSxmdW5jdGlvbihlLHIpe1MuZm5bZV09ZnVuY3Rpb24oZSx0LG4pe3JldHVybiB0aGlzLmFuaW1hdGUocixlLHQsbil9fSksUy50aW1lcnM9W10sUy5meC50aWNrPWZ1bmN0aW9uKCl7dmFyIGUsdD0wLG49Uy50aW1lcnM7Zm9yKHR0PURhdGUubm93KCk7dDxuLmxlbmd0aDt0KyspKGU9blt0XSkoKXx8blt0XSE9PWV8fG4uc3BsaWNlKHQtLSwxKTtuLmxlbmd0aHx8Uy5meC5zdG9wKCksdHQ9dm9pZCAwfSxTLmZ4LnRpbWVyPWZ1bmN0aW9uKGUpe1MudGltZXJzLnB1c2goZSksUy5meC5zdGFydCgpfSxTLmZ4LmludGVydmFsPTEzLFMuZnguc3RhcnQ9ZnVuY3Rpb24oKXtudHx8KG50PSEwLHN0KCkpfSxTLmZ4LnN0b3A9ZnVuY3Rpb24oKXtudD1udWxsfSxTLmZ4LnNwZWVkcz17c2xvdzo2MDAsZmFzdDoyMDAsX2RlZmF1bHQ6NDAwfSxTLmZuLmRlbGF5PWZ1bmN0aW9uKHIsZSl7cmV0dXJuIHI9Uy5meCYmUy5meC5zcGVlZHNbcl18fHIsZT1lfHxcImZ4XCIsdGhpcy5xdWV1ZShlLGZ1bmN0aW9uKGUsdCl7dmFyIG49Qy5zZXRUaW1lb3V0KGUscik7dC5zdG9wPWZ1bmN0aW9uKCl7Qy5jbGVhclRpbWVvdXQobil9fSl9LHJ0PUUuY3JlYXRlRWxlbWVudChcImlucHV0XCIpLGl0PUUuY3JlYXRlRWxlbWVudChcInNlbGVjdFwiKS5hcHBlbmRDaGlsZChFLmNyZWF0ZUVsZW1lbnQoXCJvcHRpb25cIikpLHJ0LnR5cGU9XCJjaGVja2JveFwiLHkuY2hlY2tPbj1cIlwiIT09cnQudmFsdWUseS5vcHRTZWxlY3RlZD1pdC5zZWxlY3RlZCwocnQ9RS5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIikpLnZhbHVlPVwidFwiLHJ0LnR5cGU9XCJyYWRpb1wiLHkucmFkaW9WYWx1ZT1cInRcIj09PXJ0LnZhbHVlO3ZhciBwdCxkdD1TLmV4cHIuYXR0ckhhbmRsZTtTLmZuLmV4dGVuZCh7YXR0cjpmdW5jdGlvbihlLHQpe3JldHVybiAkKHRoaXMsUy5hdHRyLGUsdCwxPGFyZ3VtZW50cy5sZW5ndGgpfSxyZW1vdmVBdHRyOmZ1bmN0aW9uKGUpe3JldHVybiB0aGlzLmVhY2goZnVuY3Rpb24oKXtTLnJlbW92ZUF0dHIodGhpcyxlKX0pfX0pLFMuZXh0ZW5kKHthdHRyOmZ1bmN0aW9uKGUsdCxuKXt2YXIgcixpLG89ZS5ub2RlVHlwZTtpZigzIT09byYmOCE9PW8mJjIhPT1vKXJldHVyblwidW5kZWZpbmVkXCI9PXR5cGVvZiBlLmdldEF0dHJpYnV0ZT9TLnByb3AoZSx0LG4pOigxPT09byYmUy5pc1hNTERvYyhlKXx8KGk9Uy5hdHRySG9va3NbdC50b0xvd2VyQ2FzZSgpXXx8KFMuZXhwci5tYXRjaC5ib29sLnRlc3QodCk/cHQ6dm9pZCAwKSksdm9pZCAwIT09bj9udWxsPT09bj92b2lkIFMucmVtb3ZlQXR0cihlLHQpOmkmJlwic2V0XCJpbiBpJiZ2b2lkIDAhPT0ocj1pLnNldChlLG4sdCkpP3I6KGUuc2V0QXR0cmlidXRlKHQsbitcIlwiKSxuKTppJiZcImdldFwiaW4gaSYmbnVsbCE9PShyPWkuZ2V0KGUsdCkpP3I6bnVsbD09KHI9Uy5maW5kLmF0dHIoZSx0KSk/dm9pZCAwOnIpfSxhdHRySG9va3M6e3R5cGU6e3NldDpmdW5jdGlvbihlLHQpe2lmKCF5LnJhZGlvVmFsdWUmJlwicmFkaW9cIj09PXQmJkEoZSxcImlucHV0XCIpKXt2YXIgbj1lLnZhbHVlO3JldHVybiBlLnNldEF0dHJpYnV0ZShcInR5cGVcIix0KSxuJiYoZS52YWx1ZT1uKSx0fX19fSxyZW1vdmVBdHRyOmZ1bmN0aW9uKGUsdCl7dmFyIG4scj0wLGk9dCYmdC5tYXRjaChQKTtpZihpJiYxPT09ZS5ub2RlVHlwZSl3aGlsZShuPWlbcisrXSllLnJlbW92ZUF0dHJpYnV0ZShuKX19KSxwdD17c2V0OmZ1bmN0aW9uKGUsdCxuKXtyZXR1cm4hMT09PXQ/Uy5yZW1vdmVBdHRyKGUsbik6ZS5zZXRBdHRyaWJ1dGUobixuKSxufX0sUy5lYWNoKFMuZXhwci5tYXRjaC5ib29sLnNvdXJjZS5tYXRjaCgvXFx3Ky9nKSxmdW5jdGlvbihlLHQpe3ZhciBhPWR0W3RdfHxTLmZpbmQuYXR0cjtkdFt0XT1mdW5jdGlvbihlLHQsbil7dmFyIHIsaSxvPXQudG9Mb3dlckNhc2UoKTtyZXR1cm4gbnx8KGk9ZHRbb10sZHRbb109cixyPW51bGwhPWEoZSx0LG4pP286bnVsbCxkdFtvXT1pKSxyfX0pO3ZhciBodD0vXig/OmlucHV0fHNlbGVjdHx0ZXh0YXJlYXxidXR0b24pJC9pLGd0PS9eKD86YXxhcmVhKSQvaTtmdW5jdGlvbiB2dChlKXtyZXR1cm4oZS5tYXRjaChQKXx8W10pLmpvaW4oXCIgXCIpfWZ1bmN0aW9uIHl0KGUpe3JldHVybiBlLmdldEF0dHJpYnV0ZSYmZS5nZXRBdHRyaWJ1dGUoXCJjbGFzc1wiKXx8XCJcIn1mdW5jdGlvbiBtdChlKXtyZXR1cm4gQXJyYXkuaXNBcnJheShlKT9lOlwic3RyaW5nXCI9PXR5cGVvZiBlJiZlLm1hdGNoKFApfHxbXX1TLmZuLmV4dGVuZCh7cHJvcDpmdW5jdGlvbihlLHQpe3JldHVybiAkKHRoaXMsUy5wcm9wLGUsdCwxPGFyZ3VtZW50cy5sZW5ndGgpfSxyZW1vdmVQcm9wOmZ1bmN0aW9uKGUpe3JldHVybiB0aGlzLmVhY2goZnVuY3Rpb24oKXtkZWxldGUgdGhpc1tTLnByb3BGaXhbZV18fGVdfSl9fSksUy5leHRlbmQoe3Byb3A6ZnVuY3Rpb24oZSx0LG4pe3ZhciByLGksbz1lLm5vZGVUeXBlO2lmKDMhPT1vJiY4IT09byYmMiE9PW8pcmV0dXJuIDE9PT1vJiZTLmlzWE1MRG9jKGUpfHwodD1TLnByb3BGaXhbdF18fHQsaT1TLnByb3BIb29rc1t0XSksdm9pZCAwIT09bj9pJiZcInNldFwiaW4gaSYmdm9pZCAwIT09KHI9aS5zZXQoZSxuLHQpKT9yOmVbdF09bjppJiZcImdldFwiaW4gaSYmbnVsbCE9PShyPWkuZ2V0KGUsdCkpP3I6ZVt0XX0scHJvcEhvb2tzOnt0YWJJbmRleDp7Z2V0OmZ1bmN0aW9uKGUpe3ZhciB0PVMuZmluZC5hdHRyKGUsXCJ0YWJpbmRleFwiKTtyZXR1cm4gdD9wYXJzZUludCh0LDEwKTpodC50ZXN0KGUubm9kZU5hbWUpfHxndC50ZXN0KGUubm9kZU5hbWUpJiZlLmhyZWY/MDotMX19fSxwcm9wRml4OntcImZvclwiOlwiaHRtbEZvclwiLFwiY2xhc3NcIjpcImNsYXNzTmFtZVwifX0pLHkub3B0U2VsZWN0ZWR8fChTLnByb3BIb29rcy5zZWxlY3RlZD17Z2V0OmZ1bmN0aW9uKGUpe3ZhciB0PWUucGFyZW50Tm9kZTtyZXR1cm4gdCYmdC5wYXJlbnROb2RlJiZ0LnBhcmVudE5vZGUuc2VsZWN0ZWRJbmRleCxudWxsfSxzZXQ6ZnVuY3Rpb24oZSl7dmFyIHQ9ZS5wYXJlbnROb2RlO3QmJih0LnNlbGVjdGVkSW5kZXgsdC5wYXJlbnROb2RlJiZ0LnBhcmVudE5vZGUuc2VsZWN0ZWRJbmRleCl9fSksUy5lYWNoKFtcInRhYkluZGV4XCIsXCJyZWFkT25seVwiLFwibWF4TGVuZ3RoXCIsXCJjZWxsU3BhY2luZ1wiLFwiY2VsbFBhZGRpbmdcIixcInJvd1NwYW5cIixcImNvbFNwYW5cIixcInVzZU1hcFwiLFwiZnJhbWVCb3JkZXJcIixcImNvbnRlbnRFZGl0YWJsZVwiXSxmdW5jdGlvbigpe1MucHJvcEZpeFt0aGlzLnRvTG93ZXJDYXNlKCldPXRoaXN9KSxTLmZuLmV4dGVuZCh7YWRkQ2xhc3M6ZnVuY3Rpb24odCl7dmFyIGUsbixyLGksbyxhLHMsdT0wO2lmKG0odCkpcmV0dXJuIHRoaXMuZWFjaChmdW5jdGlvbihlKXtTKHRoaXMpLmFkZENsYXNzKHQuY2FsbCh0aGlzLGUseXQodGhpcykpKX0pO2lmKChlPW10KHQpKS5sZW5ndGgpd2hpbGUobj10aGlzW3UrK10paWYoaT15dChuKSxyPTE9PT1uLm5vZGVUeXBlJiZcIiBcIit2dChpKStcIiBcIil7YT0wO3doaWxlKG89ZVthKytdKXIuaW5kZXhPZihcIiBcIitvK1wiIFwiKTwwJiYocis9bytcIiBcIik7aSE9PShzPXZ0KHIpKSYmbi5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLHMpfXJldHVybiB0aGlzfSxyZW1vdmVDbGFzczpmdW5jdGlvbih0KXt2YXIgZSxuLHIsaSxvLGEscyx1PTA7aWYobSh0KSlyZXR1cm4gdGhpcy5lYWNoKGZ1bmN0aW9uKGUpe1ModGhpcykucmVtb3ZlQ2xhc3ModC5jYWxsKHRoaXMsZSx5dCh0aGlzKSkpfSk7aWYoIWFyZ3VtZW50cy5sZW5ndGgpcmV0dXJuIHRoaXMuYXR0cihcImNsYXNzXCIsXCJcIik7aWYoKGU9bXQodCkpLmxlbmd0aCl3aGlsZShuPXRoaXNbdSsrXSlpZihpPXl0KG4pLHI9MT09PW4ubm9kZVR5cGUmJlwiIFwiK3Z0KGkpK1wiIFwiKXthPTA7d2hpbGUobz1lW2ErK10pd2hpbGUoLTE8ci5pbmRleE9mKFwiIFwiK28rXCIgXCIpKXI9ci5yZXBsYWNlKFwiIFwiK28rXCIgXCIsXCIgXCIpO2khPT0ocz12dChyKSkmJm4uc2V0QXR0cmlidXRlKFwiY2xhc3NcIixzKX1yZXR1cm4gdGhpc30sdG9nZ2xlQ2xhc3M6ZnVuY3Rpb24oaSx0KXt2YXIgbz10eXBlb2YgaSxhPVwic3RyaW5nXCI9PT1vfHxBcnJheS5pc0FycmF5KGkpO3JldHVyblwiYm9vbGVhblwiPT10eXBlb2YgdCYmYT90P3RoaXMuYWRkQ2xhc3MoaSk6dGhpcy5yZW1vdmVDbGFzcyhpKTptKGkpP3RoaXMuZWFjaChmdW5jdGlvbihlKXtTKHRoaXMpLnRvZ2dsZUNsYXNzKGkuY2FsbCh0aGlzLGUseXQodGhpcyksdCksdCl9KTp0aGlzLmVhY2goZnVuY3Rpb24oKXt2YXIgZSx0LG4scjtpZihhKXt0PTAsbj1TKHRoaXMpLHI9bXQoaSk7d2hpbGUoZT1yW3QrK10pbi5oYXNDbGFzcyhlKT9uLnJlbW92ZUNsYXNzKGUpOm4uYWRkQ2xhc3MoZSl9ZWxzZSB2b2lkIDAhPT1pJiZcImJvb2xlYW5cIiE9PW98fCgoZT15dCh0aGlzKSkmJlkuc2V0KHRoaXMsXCJfX2NsYXNzTmFtZV9fXCIsZSksdGhpcy5zZXRBdHRyaWJ1dGUmJnRoaXMuc2V0QXR0cmlidXRlKFwiY2xhc3NcIixlfHwhMT09PWk/XCJcIjpZLmdldCh0aGlzLFwiX19jbGFzc05hbWVfX1wiKXx8XCJcIikpfSl9LGhhc0NsYXNzOmZ1bmN0aW9uKGUpe3ZhciB0LG4scj0wO3Q9XCIgXCIrZStcIiBcIjt3aGlsZShuPXRoaXNbcisrXSlpZigxPT09bi5ub2RlVHlwZSYmLTE8KFwiIFwiK3Z0KHl0KG4pKStcIiBcIikuaW5kZXhPZih0KSlyZXR1cm4hMDtyZXR1cm4hMX19KTt2YXIgeHQ9L1xcci9nO1MuZm4uZXh0ZW5kKHt2YWw6ZnVuY3Rpb24obil7dmFyIHIsZSxpLHQ9dGhpc1swXTtyZXR1cm4gYXJndW1lbnRzLmxlbmd0aD8oaT1tKG4pLHRoaXMuZWFjaChmdW5jdGlvbihlKXt2YXIgdDsxPT09dGhpcy5ub2RlVHlwZSYmKG51bGw9PSh0PWk/bi5jYWxsKHRoaXMsZSxTKHRoaXMpLnZhbCgpKTpuKT90PVwiXCI6XCJudW1iZXJcIj09dHlwZW9mIHQ/dCs9XCJcIjpBcnJheS5pc0FycmF5KHQpJiYodD1TLm1hcCh0LGZ1bmN0aW9uKGUpe3JldHVybiBudWxsPT1lP1wiXCI6ZStcIlwifSkpLChyPVMudmFsSG9va3NbdGhpcy50eXBlXXx8Uy52YWxIb29rc1t0aGlzLm5vZGVOYW1lLnRvTG93ZXJDYXNlKCldKSYmXCJzZXRcImluIHImJnZvaWQgMCE9PXIuc2V0KHRoaXMsdCxcInZhbHVlXCIpfHwodGhpcy52YWx1ZT10KSl9KSk6dD8ocj1TLnZhbEhvb2tzW3QudHlwZV18fFMudmFsSG9va3NbdC5ub2RlTmFtZS50b0xvd2VyQ2FzZSgpXSkmJlwiZ2V0XCJpbiByJiZ2b2lkIDAhPT0oZT1yLmdldCh0LFwidmFsdWVcIikpP2U6XCJzdHJpbmdcIj09dHlwZW9mKGU9dC52YWx1ZSk/ZS5yZXBsYWNlKHh0LFwiXCIpOm51bGw9PWU/XCJcIjplOnZvaWQgMH19KSxTLmV4dGVuZCh7dmFsSG9va3M6e29wdGlvbjp7Z2V0OmZ1bmN0aW9uKGUpe3ZhciB0PVMuZmluZC5hdHRyKGUsXCJ2YWx1ZVwiKTtyZXR1cm4gbnVsbCE9dD90OnZ0KFMudGV4dChlKSl9fSxzZWxlY3Q6e2dldDpmdW5jdGlvbihlKXt2YXIgdCxuLHIsaT1lLm9wdGlvbnMsbz1lLnNlbGVjdGVkSW5kZXgsYT1cInNlbGVjdC1vbmVcIj09PWUudHlwZSxzPWE/bnVsbDpbXSx1PWE/bysxOmkubGVuZ3RoO2ZvcihyPW88MD91OmE/bzowO3I8dTtyKyspaWYoKChuPWlbcl0pLnNlbGVjdGVkfHxyPT09bykmJiFuLmRpc2FibGVkJiYoIW4ucGFyZW50Tm9kZS5kaXNhYmxlZHx8IUEobi5wYXJlbnROb2RlLFwib3B0Z3JvdXBcIikpKXtpZih0PVMobikudmFsKCksYSlyZXR1cm4gdDtzLnB1c2godCl9cmV0dXJuIHN9LHNldDpmdW5jdGlvbihlLHQpe3ZhciBuLHIsaT1lLm9wdGlvbnMsbz1TLm1ha2VBcnJheSh0KSxhPWkubGVuZ3RoO3doaWxlKGEtLSkoKHI9aVthXSkuc2VsZWN0ZWQ9LTE8Uy5pbkFycmF5KFMudmFsSG9va3Mub3B0aW9uLmdldChyKSxvKSkmJihuPSEwKTtyZXR1cm4gbnx8KGUuc2VsZWN0ZWRJbmRleD0tMSksb319fX0pLFMuZWFjaChbXCJyYWRpb1wiLFwiY2hlY2tib3hcIl0sZnVuY3Rpb24oKXtTLnZhbEhvb2tzW3RoaXNdPXtzZXQ6ZnVuY3Rpb24oZSx0KXtpZihBcnJheS5pc0FycmF5KHQpKXJldHVybiBlLmNoZWNrZWQ9LTE8Uy5pbkFycmF5KFMoZSkudmFsKCksdCl9fSx5LmNoZWNrT258fChTLnZhbEhvb2tzW3RoaXNdLmdldD1mdW5jdGlvbihlKXtyZXR1cm4gbnVsbD09PWUuZ2V0QXR0cmlidXRlKFwidmFsdWVcIik/XCJvblwiOmUudmFsdWV9KX0pLHkuZm9jdXNpbj1cIm9uZm9jdXNpblwiaW4gQzt2YXIgYnQ9L14oPzpmb2N1c2luZm9jdXN8Zm9jdXNvdXRibHVyKSQvLHd0PWZ1bmN0aW9uKGUpe2Uuc3RvcFByb3BhZ2F0aW9uKCl9O1MuZXh0ZW5kKFMuZXZlbnQse3RyaWdnZXI6ZnVuY3Rpb24oZSx0LG4scil7dmFyIGksbyxhLHMsdSxsLGMsZixwPVtufHxFXSxkPXYuY2FsbChlLFwidHlwZVwiKT9lLnR5cGU6ZSxoPXYuY2FsbChlLFwibmFtZXNwYWNlXCIpP2UubmFtZXNwYWNlLnNwbGl0KFwiLlwiKTpbXTtpZihvPWY9YT1uPW58fEUsMyE9PW4ubm9kZVR5cGUmJjghPT1uLm5vZGVUeXBlJiYhYnQudGVzdChkK1MuZXZlbnQudHJpZ2dlcmVkKSYmKC0xPGQuaW5kZXhPZihcIi5cIikmJihkPShoPWQuc3BsaXQoXCIuXCIpKS5zaGlmdCgpLGguc29ydCgpKSx1PWQuaW5kZXhPZihcIjpcIik8MCYmXCJvblwiK2QsKGU9ZVtTLmV4cGFuZG9dP2U6bmV3IFMuRXZlbnQoZCxcIm9iamVjdFwiPT10eXBlb2YgZSYmZSkpLmlzVHJpZ2dlcj1yPzI6MyxlLm5hbWVzcGFjZT1oLmpvaW4oXCIuXCIpLGUucm5hbWVzcGFjZT1lLm5hbWVzcGFjZT9uZXcgUmVnRXhwKFwiKF58XFxcXC4pXCIraC5qb2luKFwiXFxcXC4oPzouKlxcXFwufClcIikrXCIoXFxcXC58JClcIik6bnVsbCxlLnJlc3VsdD12b2lkIDAsZS50YXJnZXR8fChlLnRhcmdldD1uKSx0PW51bGw9PXQ/W2VdOlMubWFrZUFycmF5KHQsW2VdKSxjPVMuZXZlbnQuc3BlY2lhbFtkXXx8e30scnx8IWMudHJpZ2dlcnx8ITEhPT1jLnRyaWdnZXIuYXBwbHkobix0KSkpe2lmKCFyJiYhYy5ub0J1YmJsZSYmIXgobikpe2ZvcihzPWMuZGVsZWdhdGVUeXBlfHxkLGJ0LnRlc3QocytkKXx8KG89by5wYXJlbnROb2RlKTtvO289by5wYXJlbnROb2RlKXAucHVzaChvKSxhPW87YT09PShuLm93bmVyRG9jdW1lbnR8fEUpJiZwLnB1c2goYS5kZWZhdWx0Vmlld3x8YS5wYXJlbnRXaW5kb3d8fEMpfWk9MDt3aGlsZSgobz1wW2krK10pJiYhZS5pc1Byb3BhZ2F0aW9uU3RvcHBlZCgpKWY9byxlLnR5cGU9MTxpP3M6Yy5iaW5kVHlwZXx8ZCwobD0oWS5nZXQobyxcImV2ZW50c1wiKXx8T2JqZWN0LmNyZWF0ZShudWxsKSlbZS50eXBlXSYmWS5nZXQobyxcImhhbmRsZVwiKSkmJmwuYXBwbHkobyx0KSwobD11JiZvW3VdKSYmbC5hcHBseSYmVihvKSYmKGUucmVzdWx0PWwuYXBwbHkobyx0KSwhMT09PWUucmVzdWx0JiZlLnByZXZlbnREZWZhdWx0KCkpO3JldHVybiBlLnR5cGU9ZCxyfHxlLmlzRGVmYXVsdFByZXZlbnRlZCgpfHxjLl9kZWZhdWx0JiYhMSE9PWMuX2RlZmF1bHQuYXBwbHkocC5wb3AoKSx0KXx8IVYobil8fHUmJm0obltkXSkmJiF4KG4pJiYoKGE9blt1XSkmJihuW3VdPW51bGwpLFMuZXZlbnQudHJpZ2dlcmVkPWQsZS5pc1Byb3BhZ2F0aW9uU3RvcHBlZCgpJiZmLmFkZEV2ZW50TGlzdGVuZXIoZCx3dCksbltkXSgpLGUuaXNQcm9wYWdhdGlvblN0b3BwZWQoKSYmZi5yZW1vdmVFdmVudExpc3RlbmVyKGQsd3QpLFMuZXZlbnQudHJpZ2dlcmVkPXZvaWQgMCxhJiYoblt1XT1hKSksZS5yZXN1bHR9fSxzaW11bGF0ZTpmdW5jdGlvbihlLHQsbil7dmFyIHI9Uy5leHRlbmQobmV3IFMuRXZlbnQsbix7dHlwZTplLGlzU2ltdWxhdGVkOiEwfSk7Uy5ldmVudC50cmlnZ2VyKHIsbnVsbCx0KX19KSxTLmZuLmV4dGVuZCh7dHJpZ2dlcjpmdW5jdGlvbihlLHQpe3JldHVybiB0aGlzLmVhY2goZnVuY3Rpb24oKXtTLmV2ZW50LnRyaWdnZXIoZSx0LHRoaXMpfSl9LHRyaWdnZXJIYW5kbGVyOmZ1bmN0aW9uKGUsdCl7dmFyIG49dGhpc1swXTtpZihuKXJldHVybiBTLmV2ZW50LnRyaWdnZXIoZSx0LG4sITApfX0pLHkuZm9jdXNpbnx8Uy5lYWNoKHtmb2N1czpcImZvY3VzaW5cIixibHVyOlwiZm9jdXNvdXRcIn0sZnVuY3Rpb24obixyKXt2YXIgaT1mdW5jdGlvbihlKXtTLmV2ZW50LnNpbXVsYXRlKHIsZS50YXJnZXQsUy5ldmVudC5maXgoZSkpfTtTLmV2ZW50LnNwZWNpYWxbcl09e3NldHVwOmZ1bmN0aW9uKCl7dmFyIGU9dGhpcy5vd25lckRvY3VtZW50fHx0aGlzLmRvY3VtZW50fHx0aGlzLHQ9WS5hY2Nlc3MoZSxyKTt0fHxlLmFkZEV2ZW50TGlzdGVuZXIobixpLCEwKSxZLmFjY2VzcyhlLHIsKHR8fDApKzEpfSx0ZWFyZG93bjpmdW5jdGlvbigpe3ZhciBlPXRoaXMub3duZXJEb2N1bWVudHx8dGhpcy5kb2N1bWVudHx8dGhpcyx0PVkuYWNjZXNzKGUsciktMTt0P1kuYWNjZXNzKGUscix0KTooZS5yZW1vdmVFdmVudExpc3RlbmVyKG4saSwhMCksWS5yZW1vdmUoZSxyKSl9fX0pO3ZhciBUdD1DLmxvY2F0aW9uLEN0PXtndWlkOkRhdGUubm93KCl9LEV0PS9cXD8vO1MucGFyc2VYTUw9ZnVuY3Rpb24oZSl7dmFyIHQ7aWYoIWV8fFwic3RyaW5nXCIhPXR5cGVvZiBlKXJldHVybiBudWxsO3RyeXt0PShuZXcgQy5ET01QYXJzZXIpLnBhcnNlRnJvbVN0cmluZyhlLFwidGV4dC94bWxcIil9Y2F0Y2goZSl7dD12b2lkIDB9cmV0dXJuIHQmJiF0LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwicGFyc2VyZXJyb3JcIikubGVuZ3RofHxTLmVycm9yKFwiSW52YWxpZCBYTUw6IFwiK2UpLHR9O3ZhciBTdD0vXFxbXFxdJC8sa3Q9L1xccj9cXG4vZyxBdD0vXig/OnN1Ym1pdHxidXR0b258aW1hZ2V8cmVzZXR8ZmlsZSkkL2ksTnQ9L14oPzppbnB1dHxzZWxlY3R8dGV4dGFyZWF8a2V5Z2VuKS9pO2Z1bmN0aW9uIER0KG4sZSxyLGkpe3ZhciB0O2lmKEFycmF5LmlzQXJyYXkoZSkpUy5lYWNoKGUsZnVuY3Rpb24oZSx0KXtyfHxTdC50ZXN0KG4pP2kobix0KTpEdChuK1wiW1wiKyhcIm9iamVjdFwiPT10eXBlb2YgdCYmbnVsbCE9dD9lOlwiXCIpK1wiXVwiLHQscixpKX0pO2Vsc2UgaWYocnx8XCJvYmplY3RcIiE9PXcoZSkpaShuLGUpO2Vsc2UgZm9yKHQgaW4gZSlEdChuK1wiW1wiK3QrXCJdXCIsZVt0XSxyLGkpfVMucGFyYW09ZnVuY3Rpb24oZSx0KXt2YXIgbixyPVtdLGk9ZnVuY3Rpb24oZSx0KXt2YXIgbj1tKHQpP3QoKTp0O3Jbci5sZW5ndGhdPWVuY29kZVVSSUNvbXBvbmVudChlKStcIj1cIitlbmNvZGVVUklDb21wb25lbnQobnVsbD09bj9cIlwiOm4pfTtpZihudWxsPT1lKXJldHVyblwiXCI7aWYoQXJyYXkuaXNBcnJheShlKXx8ZS5qcXVlcnkmJiFTLmlzUGxhaW5PYmplY3QoZSkpUy5lYWNoKGUsZnVuY3Rpb24oKXtpKHRoaXMubmFtZSx0aGlzLnZhbHVlKX0pO2Vsc2UgZm9yKG4gaW4gZSlEdChuLGVbbl0sdCxpKTtyZXR1cm4gci5qb2luKFwiJlwiKX0sUy5mbi5leHRlbmQoe3NlcmlhbGl6ZTpmdW5jdGlvbigpe3JldHVybiBTLnBhcmFtKHRoaXMuc2VyaWFsaXplQXJyYXkoKSl9LHNlcmlhbGl6ZUFycmF5OmZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uKCl7dmFyIGU9Uy5wcm9wKHRoaXMsXCJlbGVtZW50c1wiKTtyZXR1cm4gZT9TLm1ha2VBcnJheShlKTp0aGlzfSkuZmlsdGVyKGZ1bmN0aW9uKCl7dmFyIGU9dGhpcy50eXBlO3JldHVybiB0aGlzLm5hbWUmJiFTKHRoaXMpLmlzKFwiOmRpc2FibGVkXCIpJiZOdC50ZXN0KHRoaXMubm9kZU5hbWUpJiYhQXQudGVzdChlKSYmKHRoaXMuY2hlY2tlZHx8IXBlLnRlc3QoZSkpfSkubWFwKGZ1bmN0aW9uKGUsdCl7dmFyIG49Uyh0aGlzKS52YWwoKTtyZXR1cm4gbnVsbD09bj9udWxsOkFycmF5LmlzQXJyYXkobik/Uy5tYXAobixmdW5jdGlvbihlKXtyZXR1cm57bmFtZTp0Lm5hbWUsdmFsdWU6ZS5yZXBsYWNlKGt0LFwiXFxyXFxuXCIpfX0pOntuYW1lOnQubmFtZSx2YWx1ZTpuLnJlcGxhY2Uoa3QsXCJcXHJcXG5cIil9fSkuZ2V0KCl9fSk7dmFyIGp0PS8lMjAvZyxxdD0vIy4qJC8sTHQ9LyhbPyZdKV89W14mXSovLEh0PS9eKC4qPyk6WyBcXHRdKihbXlxcclxcbl0qKSQvZ20sT3Q9L14oPzpHRVR8SEVBRCkkLyxQdD0vXlxcL1xcLy8sUnQ9e30sTXQ9e30sSXQ9XCIqL1wiLmNvbmNhdChcIipcIiksV3Q9RS5jcmVhdGVFbGVtZW50KFwiYVwiKTtmdW5jdGlvbiBGdChvKXtyZXR1cm4gZnVuY3Rpb24oZSx0KXtcInN0cmluZ1wiIT10eXBlb2YgZSYmKHQ9ZSxlPVwiKlwiKTt2YXIgbixyPTAsaT1lLnRvTG93ZXJDYXNlKCkubWF0Y2goUCl8fFtdO2lmKG0odCkpd2hpbGUobj1pW3IrK10pXCIrXCI9PT1uWzBdPyhuPW4uc2xpY2UoMSl8fFwiKlwiLChvW25dPW9bbl18fFtdKS51bnNoaWZ0KHQpKToob1tuXT1vW25dfHxbXSkucHVzaCh0KX19ZnVuY3Rpb24gQnQodCxpLG8sYSl7dmFyIHM9e30sdT10PT09TXQ7ZnVuY3Rpb24gbChlKXt2YXIgcjtyZXR1cm4gc1tlXT0hMCxTLmVhY2godFtlXXx8W10sZnVuY3Rpb24oZSx0KXt2YXIgbj10KGksbyxhKTtyZXR1cm5cInN0cmluZ1wiIT10eXBlb2Ygbnx8dXx8c1tuXT91PyEocj1uKTp2b2lkIDA6KGkuZGF0YVR5cGVzLnVuc2hpZnQobiksbChuKSwhMSl9KSxyfXJldHVybiBsKGkuZGF0YVR5cGVzWzBdKXx8IXNbXCIqXCJdJiZsKFwiKlwiKX1mdW5jdGlvbiAkdChlLHQpe3ZhciBuLHIsaT1TLmFqYXhTZXR0aW5ncy5mbGF0T3B0aW9uc3x8e307Zm9yKG4gaW4gdCl2b2lkIDAhPT10W25dJiYoKGlbbl0/ZTpyfHwocj17fSkpW25dPXRbbl0pO3JldHVybiByJiZTLmV4dGVuZCghMCxlLHIpLGV9V3QuaHJlZj1UdC5ocmVmLFMuZXh0ZW5kKHthY3RpdmU6MCxsYXN0TW9kaWZpZWQ6e30sZXRhZzp7fSxhamF4U2V0dGluZ3M6e3VybDpUdC5ocmVmLHR5cGU6XCJHRVRcIixpc0xvY2FsOi9eKD86YWJvdXR8YXBwfGFwcC1zdG9yYWdlfC4rLWV4dGVuc2lvbnxmaWxlfHJlc3x3aWRnZXQpOiQvLnRlc3QoVHQucHJvdG9jb2wpLGdsb2JhbDohMCxwcm9jZXNzRGF0YTohMCxhc3luYzohMCxjb250ZW50VHlwZTpcImFwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZDsgY2hhcnNldD1VVEYtOFwiLGFjY2VwdHM6e1wiKlwiOkl0LHRleHQ6XCJ0ZXh0L3BsYWluXCIsaHRtbDpcInRleHQvaHRtbFwiLHhtbDpcImFwcGxpY2F0aW9uL3htbCwgdGV4dC94bWxcIixqc29uOlwiYXBwbGljYXRpb24vanNvbiwgdGV4dC9qYXZhc2NyaXB0XCJ9LGNvbnRlbnRzOnt4bWw6L1xcYnhtbFxcYi8saHRtbDovXFxiaHRtbC8sanNvbjovXFxianNvblxcYi99LHJlc3BvbnNlRmllbGRzOnt4bWw6XCJyZXNwb25zZVhNTFwiLHRleHQ6XCJyZXNwb25zZVRleHRcIixqc29uOlwicmVzcG9uc2VKU09OXCJ9LGNvbnZlcnRlcnM6e1wiKiB0ZXh0XCI6U3RyaW5nLFwidGV4dCBodG1sXCI6ITAsXCJ0ZXh0IGpzb25cIjpKU09OLnBhcnNlLFwidGV4dCB4bWxcIjpTLnBhcnNlWE1MfSxmbGF0T3B0aW9uczp7dXJsOiEwLGNvbnRleHQ6ITB9fSxhamF4U2V0dXA6ZnVuY3Rpb24oZSx0KXtyZXR1cm4gdD8kdCgkdChlLFMuYWpheFNldHRpbmdzKSx0KTokdChTLmFqYXhTZXR0aW5ncyxlKX0sYWpheFByZWZpbHRlcjpGdChSdCksYWpheFRyYW5zcG9ydDpGdChNdCksYWpheDpmdW5jdGlvbihlLHQpe1wib2JqZWN0XCI9PXR5cGVvZiBlJiYodD1lLGU9dm9pZCAwKSx0PXR8fHt9O3ZhciBjLGYscCxuLGQscixoLGcsaSxvLHY9Uy5hamF4U2V0dXAoe30sdCkseT12LmNvbnRleHR8fHYsbT12LmNvbnRleHQmJih5Lm5vZGVUeXBlfHx5LmpxdWVyeSk/Uyh5KTpTLmV2ZW50LHg9Uy5EZWZlcnJlZCgpLGI9Uy5DYWxsYmFja3MoXCJvbmNlIG1lbW9yeVwiKSx3PXYuc3RhdHVzQ29kZXx8e30sYT17fSxzPXt9LHU9XCJjYW5jZWxlZFwiLFQ9e3JlYWR5U3RhdGU6MCxnZXRSZXNwb25zZUhlYWRlcjpmdW5jdGlvbihlKXt2YXIgdDtpZihoKXtpZighbil7bj17fTt3aGlsZSh0PUh0LmV4ZWMocCkpblt0WzFdLnRvTG93ZXJDYXNlKCkrXCIgXCJdPShuW3RbMV0udG9Mb3dlckNhc2UoKStcIiBcIl18fFtdKS5jb25jYXQodFsyXSl9dD1uW2UudG9Mb3dlckNhc2UoKStcIiBcIl19cmV0dXJuIG51bGw9PXQ/bnVsbDp0LmpvaW4oXCIsIFwiKX0sZ2V0QWxsUmVzcG9uc2VIZWFkZXJzOmZ1bmN0aW9uKCl7cmV0dXJuIGg/cDpudWxsfSxzZXRSZXF1ZXN0SGVhZGVyOmZ1bmN0aW9uKGUsdCl7cmV0dXJuIG51bGw9PWgmJihlPXNbZS50b0xvd2VyQ2FzZSgpXT1zW2UudG9Mb3dlckNhc2UoKV18fGUsYVtlXT10KSx0aGlzfSxvdmVycmlkZU1pbWVUeXBlOmZ1bmN0aW9uKGUpe3JldHVybiBudWxsPT1oJiYodi5taW1lVHlwZT1lKSx0aGlzfSxzdGF0dXNDb2RlOmZ1bmN0aW9uKGUpe3ZhciB0O2lmKGUpaWYoaClULmFsd2F5cyhlW1Quc3RhdHVzXSk7ZWxzZSBmb3IodCBpbiBlKXdbdF09W3dbdF0sZVt0XV07cmV0dXJuIHRoaXN9LGFib3J0OmZ1bmN0aW9uKGUpe3ZhciB0PWV8fHU7cmV0dXJuIGMmJmMuYWJvcnQodCksbCgwLHQpLHRoaXN9fTtpZih4LnByb21pc2UoVCksdi51cmw9KChlfHx2LnVybHx8VHQuaHJlZikrXCJcIikucmVwbGFjZShQdCxUdC5wcm90b2NvbCtcIi8vXCIpLHYudHlwZT10Lm1ldGhvZHx8dC50eXBlfHx2Lm1ldGhvZHx8di50eXBlLHYuZGF0YVR5cGVzPSh2LmRhdGFUeXBlfHxcIipcIikudG9Mb3dlckNhc2UoKS5tYXRjaChQKXx8W1wiXCJdLG51bGw9PXYuY3Jvc3NEb21haW4pe3I9RS5jcmVhdGVFbGVtZW50KFwiYVwiKTt0cnl7ci5ocmVmPXYudXJsLHIuaHJlZj1yLmhyZWYsdi5jcm9zc0RvbWFpbj1XdC5wcm90b2NvbCtcIi8vXCIrV3QuaG9zdCE9ci5wcm90b2NvbCtcIi8vXCIrci5ob3N0fWNhdGNoKGUpe3YuY3Jvc3NEb21haW49ITB9fWlmKHYuZGF0YSYmdi5wcm9jZXNzRGF0YSYmXCJzdHJpbmdcIiE9dHlwZW9mIHYuZGF0YSYmKHYuZGF0YT1TLnBhcmFtKHYuZGF0YSx2LnRyYWRpdGlvbmFsKSksQnQoUnQsdix0LFQpLGgpcmV0dXJuIFQ7Zm9yKGkgaW4oZz1TLmV2ZW50JiZ2Lmdsb2JhbCkmJjA9PVMuYWN0aXZlKysmJlMuZXZlbnQudHJpZ2dlcihcImFqYXhTdGFydFwiKSx2LnR5cGU9di50eXBlLnRvVXBwZXJDYXNlKCksdi5oYXNDb250ZW50PSFPdC50ZXN0KHYudHlwZSksZj12LnVybC5yZXBsYWNlKHF0LFwiXCIpLHYuaGFzQ29udGVudD92LmRhdGEmJnYucHJvY2Vzc0RhdGEmJjA9PT0odi5jb250ZW50VHlwZXx8XCJcIikuaW5kZXhPZihcImFwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZFwiKSYmKHYuZGF0YT12LmRhdGEucmVwbGFjZShqdCxcIitcIikpOihvPXYudXJsLnNsaWNlKGYubGVuZ3RoKSx2LmRhdGEmJih2LnByb2Nlc3NEYXRhfHxcInN0cmluZ1wiPT10eXBlb2Ygdi5kYXRhKSYmKGYrPShFdC50ZXN0KGYpP1wiJlwiOlwiP1wiKSt2LmRhdGEsZGVsZXRlIHYuZGF0YSksITE9PT12LmNhY2hlJiYoZj1mLnJlcGxhY2UoTHQsXCIkMVwiKSxvPShFdC50ZXN0KGYpP1wiJlwiOlwiP1wiKStcIl89XCIrQ3QuZ3VpZCsrK28pLHYudXJsPWYrbyksdi5pZk1vZGlmaWVkJiYoUy5sYXN0TW9kaWZpZWRbZl0mJlQuc2V0UmVxdWVzdEhlYWRlcihcIklmLU1vZGlmaWVkLVNpbmNlXCIsUy5sYXN0TW9kaWZpZWRbZl0pLFMuZXRhZ1tmXSYmVC5zZXRSZXF1ZXN0SGVhZGVyKFwiSWYtTm9uZS1NYXRjaFwiLFMuZXRhZ1tmXSkpLCh2LmRhdGEmJnYuaGFzQ29udGVudCYmITEhPT12LmNvbnRlbnRUeXBlfHx0LmNvbnRlbnRUeXBlKSYmVC5zZXRSZXF1ZXN0SGVhZGVyKFwiQ29udGVudC1UeXBlXCIsdi5jb250ZW50VHlwZSksVC5zZXRSZXF1ZXN0SGVhZGVyKFwiQWNjZXB0XCIsdi5kYXRhVHlwZXNbMF0mJnYuYWNjZXB0c1t2LmRhdGFUeXBlc1swXV0/di5hY2NlcHRzW3YuZGF0YVR5cGVzWzBdXSsoXCIqXCIhPT12LmRhdGFUeXBlc1swXT9cIiwgXCIrSXQrXCI7IHE9MC4wMVwiOlwiXCIpOnYuYWNjZXB0c1tcIipcIl0pLHYuaGVhZGVycylULnNldFJlcXVlc3RIZWFkZXIoaSx2LmhlYWRlcnNbaV0pO2lmKHYuYmVmb3JlU2VuZCYmKCExPT09di5iZWZvcmVTZW5kLmNhbGwoeSxULHYpfHxoKSlyZXR1cm4gVC5hYm9ydCgpO2lmKHU9XCJhYm9ydFwiLGIuYWRkKHYuY29tcGxldGUpLFQuZG9uZSh2LnN1Y2Nlc3MpLFQuZmFpbCh2LmVycm9yKSxjPUJ0KE10LHYsdCxUKSl7aWYoVC5yZWFkeVN0YXRlPTEsZyYmbS50cmlnZ2VyKFwiYWpheFNlbmRcIixbVCx2XSksaClyZXR1cm4gVDt2LmFzeW5jJiYwPHYudGltZW91dCYmKGQ9Qy5zZXRUaW1lb3V0KGZ1bmN0aW9uKCl7VC5hYm9ydChcInRpbWVvdXRcIil9LHYudGltZW91dCkpO3RyeXtoPSExLGMuc2VuZChhLGwpfWNhdGNoKGUpe2lmKGgpdGhyb3cgZTtsKC0xLGUpfX1lbHNlIGwoLTEsXCJObyBUcmFuc3BvcnRcIik7ZnVuY3Rpb24gbChlLHQsbixyKXt2YXIgaSxvLGEscyx1LGw9dDtofHwoaD0hMCxkJiZDLmNsZWFyVGltZW91dChkKSxjPXZvaWQgMCxwPXJ8fFwiXCIsVC5yZWFkeVN0YXRlPTA8ZT80OjAsaT0yMDA8PWUmJmU8MzAwfHwzMDQ9PT1lLG4mJihzPWZ1bmN0aW9uKGUsdCxuKXt2YXIgcixpLG8sYSxzPWUuY29udGVudHMsdT1lLmRhdGFUeXBlczt3aGlsZShcIipcIj09PXVbMF0pdS5zaGlmdCgpLHZvaWQgMD09PXImJihyPWUubWltZVR5cGV8fHQuZ2V0UmVzcG9uc2VIZWFkZXIoXCJDb250ZW50LVR5cGVcIikpO2lmKHIpZm9yKGkgaW4gcylpZihzW2ldJiZzW2ldLnRlc3Qocikpe3UudW5zaGlmdChpKTticmVha31pZih1WzBdaW4gbilvPXVbMF07ZWxzZXtmb3IoaSBpbiBuKXtpZighdVswXXx8ZS5jb252ZXJ0ZXJzW2krXCIgXCIrdVswXV0pe289aTticmVha31hfHwoYT1pKX1vPW98fGF9aWYobylyZXR1cm4gbyE9PXVbMF0mJnUudW5zaGlmdChvKSxuW29dfSh2LFQsbikpLCFpJiYtMTxTLmluQXJyYXkoXCJzY3JpcHRcIix2LmRhdGFUeXBlcykmJih2LmNvbnZlcnRlcnNbXCJ0ZXh0IHNjcmlwdFwiXT1mdW5jdGlvbigpe30pLHM9ZnVuY3Rpb24oZSx0LG4scil7dmFyIGksbyxhLHMsdSxsPXt9LGM9ZS5kYXRhVHlwZXMuc2xpY2UoKTtpZihjWzFdKWZvcihhIGluIGUuY29udmVydGVycylsW2EudG9Mb3dlckNhc2UoKV09ZS5jb252ZXJ0ZXJzW2FdO289Yy5zaGlmdCgpO3doaWxlKG8paWYoZS5yZXNwb25zZUZpZWxkc1tvXSYmKG5bZS5yZXNwb25zZUZpZWxkc1tvXV09dCksIXUmJnImJmUuZGF0YUZpbHRlciYmKHQ9ZS5kYXRhRmlsdGVyKHQsZS5kYXRhVHlwZSkpLHU9byxvPWMuc2hpZnQoKSlpZihcIipcIj09PW8pbz11O2Vsc2UgaWYoXCIqXCIhPT11JiZ1IT09byl7aWYoIShhPWxbdStcIiBcIitvXXx8bFtcIiogXCIrb10pKWZvcihpIGluIGwpaWYoKHM9aS5zcGxpdChcIiBcIikpWzFdPT09byYmKGE9bFt1K1wiIFwiK3NbMF1dfHxsW1wiKiBcIitzWzBdXSkpeyEwPT09YT9hPWxbaV06ITAhPT1sW2ldJiYobz1zWzBdLGMudW5zaGlmdChzWzFdKSk7YnJlYWt9aWYoITAhPT1hKWlmKGEmJmVbXCJ0aHJvd3NcIl0pdD1hKHQpO2Vsc2UgdHJ5e3Q9YSh0KX1jYXRjaChlKXtyZXR1cm57c3RhdGU6XCJwYXJzZXJlcnJvclwiLGVycm9yOmE/ZTpcIk5vIGNvbnZlcnNpb24gZnJvbSBcIit1K1wiIHRvIFwiK299fX1yZXR1cm57c3RhdGU6XCJzdWNjZXNzXCIsZGF0YTp0fX0odixzLFQsaSksaT8odi5pZk1vZGlmaWVkJiYoKHU9VC5nZXRSZXNwb25zZUhlYWRlcihcIkxhc3QtTW9kaWZpZWRcIikpJiYoUy5sYXN0TW9kaWZpZWRbZl09dSksKHU9VC5nZXRSZXNwb25zZUhlYWRlcihcImV0YWdcIikpJiYoUy5ldGFnW2ZdPXUpKSwyMDQ9PT1lfHxcIkhFQURcIj09PXYudHlwZT9sPVwibm9jb250ZW50XCI6MzA0PT09ZT9sPVwibm90bW9kaWZpZWRcIjoobD1zLnN0YXRlLG89cy5kYXRhLGk9IShhPXMuZXJyb3IpKSk6KGE9bCwhZSYmbHx8KGw9XCJlcnJvclwiLGU8MCYmKGU9MCkpKSxULnN0YXR1cz1lLFQuc3RhdHVzVGV4dD0odHx8bCkrXCJcIixpP3gucmVzb2x2ZVdpdGgoeSxbbyxsLFRdKTp4LnJlamVjdFdpdGgoeSxbVCxsLGFdKSxULnN0YXR1c0NvZGUodyksdz12b2lkIDAsZyYmbS50cmlnZ2VyKGk/XCJhamF4U3VjY2Vzc1wiOlwiYWpheEVycm9yXCIsW1QsdixpP286YV0pLGIuZmlyZVdpdGgoeSxbVCxsXSksZyYmKG0udHJpZ2dlcihcImFqYXhDb21wbGV0ZVwiLFtULHZdKSwtLVMuYWN0aXZlfHxTLmV2ZW50LnRyaWdnZXIoXCJhamF4U3RvcFwiKSkpfXJldHVybiBUfSxnZXRKU09OOmZ1bmN0aW9uKGUsdCxuKXtyZXR1cm4gUy5nZXQoZSx0LG4sXCJqc29uXCIpfSxnZXRTY3JpcHQ6ZnVuY3Rpb24oZSx0KXtyZXR1cm4gUy5nZXQoZSx2b2lkIDAsdCxcInNjcmlwdFwiKX19KSxTLmVhY2goW1wiZ2V0XCIsXCJwb3N0XCJdLGZ1bmN0aW9uKGUsaSl7U1tpXT1mdW5jdGlvbihlLHQsbixyKXtyZXR1cm4gbSh0KSYmKHI9cnx8bixuPXQsdD12b2lkIDApLFMuYWpheChTLmV4dGVuZCh7dXJsOmUsdHlwZTppLGRhdGFUeXBlOnIsZGF0YTp0LHN1Y2Nlc3M6bn0sUy5pc1BsYWluT2JqZWN0KGUpJiZlKSl9fSksUy5hamF4UHJlZmlsdGVyKGZ1bmN0aW9uKGUpe3ZhciB0O2Zvcih0IGluIGUuaGVhZGVycylcImNvbnRlbnQtdHlwZVwiPT09dC50b0xvd2VyQ2FzZSgpJiYoZS5jb250ZW50VHlwZT1lLmhlYWRlcnNbdF18fFwiXCIpfSksUy5fZXZhbFVybD1mdW5jdGlvbihlLHQsbil7cmV0dXJuIFMuYWpheCh7dXJsOmUsdHlwZTpcIkdFVFwiLGRhdGFUeXBlOlwic2NyaXB0XCIsY2FjaGU6ITAsYXN5bmM6ITEsZ2xvYmFsOiExLGNvbnZlcnRlcnM6e1widGV4dCBzY3JpcHRcIjpmdW5jdGlvbigpe319LGRhdGFGaWx0ZXI6ZnVuY3Rpb24oZSl7Uy5nbG9iYWxFdmFsKGUsdCxuKX19KX0sUy5mbi5leHRlbmQoe3dyYXBBbGw6ZnVuY3Rpb24oZSl7dmFyIHQ7cmV0dXJuIHRoaXNbMF0mJihtKGUpJiYoZT1lLmNhbGwodGhpc1swXSkpLHQ9UyhlLHRoaXNbMF0ub3duZXJEb2N1bWVudCkuZXEoMCkuY2xvbmUoITApLHRoaXNbMF0ucGFyZW50Tm9kZSYmdC5pbnNlcnRCZWZvcmUodGhpc1swXSksdC5tYXAoZnVuY3Rpb24oKXt2YXIgZT10aGlzO3doaWxlKGUuZmlyc3RFbGVtZW50Q2hpbGQpZT1lLmZpcnN0RWxlbWVudENoaWxkO3JldHVybiBlfSkuYXBwZW5kKHRoaXMpKSx0aGlzfSx3cmFwSW5uZXI6ZnVuY3Rpb24obil7cmV0dXJuIG0obik/dGhpcy5lYWNoKGZ1bmN0aW9uKGUpe1ModGhpcykud3JhcElubmVyKG4uY2FsbCh0aGlzLGUpKX0pOnRoaXMuZWFjaChmdW5jdGlvbigpe3ZhciBlPVModGhpcyksdD1lLmNvbnRlbnRzKCk7dC5sZW5ndGg/dC53cmFwQWxsKG4pOmUuYXBwZW5kKG4pfSl9LHdyYXA6ZnVuY3Rpb24odCl7dmFyIG49bSh0KTtyZXR1cm4gdGhpcy5lYWNoKGZ1bmN0aW9uKGUpe1ModGhpcykud3JhcEFsbChuP3QuY2FsbCh0aGlzLGUpOnQpfSl9LHVud3JhcDpmdW5jdGlvbihlKXtyZXR1cm4gdGhpcy5wYXJlbnQoZSkubm90KFwiYm9keVwiKS5lYWNoKGZ1bmN0aW9uKCl7Uyh0aGlzKS5yZXBsYWNlV2l0aCh0aGlzLmNoaWxkTm9kZXMpfSksdGhpc319KSxTLmV4cHIucHNldWRvcy5oaWRkZW49ZnVuY3Rpb24oZSl7cmV0dXJuIVMuZXhwci5wc2V1ZG9zLnZpc2libGUoZSl9LFMuZXhwci5wc2V1ZG9zLnZpc2libGU9ZnVuY3Rpb24oZSl7cmV0dXJuISEoZS5vZmZzZXRXaWR0aHx8ZS5vZmZzZXRIZWlnaHR8fGUuZ2V0Q2xpZW50UmVjdHMoKS5sZW5ndGgpfSxTLmFqYXhTZXR0aW5ncy54aHI9ZnVuY3Rpb24oKXt0cnl7cmV0dXJuIG5ldyBDLlhNTEh0dHBSZXF1ZXN0fWNhdGNoKGUpe319O3ZhciBfdD17MDoyMDAsMTIyMzoyMDR9LHp0PVMuYWpheFNldHRpbmdzLnhocigpO3kuY29ycz0hIXp0JiZcIndpdGhDcmVkZW50aWFsc1wiaW4genQseS5hamF4PXp0PSEhenQsUy5hamF4VHJhbnNwb3J0KGZ1bmN0aW9uKGkpe3ZhciBvLGE7aWYoeS5jb3JzfHx6dCYmIWkuY3Jvc3NEb21haW4pcmV0dXJue3NlbmQ6ZnVuY3Rpb24oZSx0KXt2YXIgbixyPWkueGhyKCk7aWYoci5vcGVuKGkudHlwZSxpLnVybCxpLmFzeW5jLGkudXNlcm5hbWUsaS5wYXNzd29yZCksaS54aHJGaWVsZHMpZm9yKG4gaW4gaS54aHJGaWVsZHMpcltuXT1pLnhockZpZWxkc1tuXTtmb3IobiBpbiBpLm1pbWVUeXBlJiZyLm92ZXJyaWRlTWltZVR5cGUmJnIub3ZlcnJpZGVNaW1lVHlwZShpLm1pbWVUeXBlKSxpLmNyb3NzRG9tYWlufHxlW1wiWC1SZXF1ZXN0ZWQtV2l0aFwiXXx8KGVbXCJYLVJlcXVlc3RlZC1XaXRoXCJdPVwiWE1MSHR0cFJlcXVlc3RcIiksZSlyLnNldFJlcXVlc3RIZWFkZXIobixlW25dKTtvPWZ1bmN0aW9uKGUpe3JldHVybiBmdW5jdGlvbigpe28mJihvPWE9ci5vbmxvYWQ9ci5vbmVycm9yPXIub25hYm9ydD1yLm9udGltZW91dD1yLm9ucmVhZHlzdGF0ZWNoYW5nZT1udWxsLFwiYWJvcnRcIj09PWU/ci5hYm9ydCgpOlwiZXJyb3JcIj09PWU/XCJudW1iZXJcIiE9dHlwZW9mIHIuc3RhdHVzP3QoMCxcImVycm9yXCIpOnQoci5zdGF0dXMsci5zdGF0dXNUZXh0KTp0KF90W3Iuc3RhdHVzXXx8ci5zdGF0dXMsci5zdGF0dXNUZXh0LFwidGV4dFwiIT09KHIucmVzcG9uc2VUeXBlfHxcInRleHRcIil8fFwic3RyaW5nXCIhPXR5cGVvZiByLnJlc3BvbnNlVGV4dD97YmluYXJ5OnIucmVzcG9uc2V9Ont0ZXh0OnIucmVzcG9uc2VUZXh0fSxyLmdldEFsbFJlc3BvbnNlSGVhZGVycygpKSl9fSxyLm9ubG9hZD1vKCksYT1yLm9uZXJyb3I9ci5vbnRpbWVvdXQ9byhcImVycm9yXCIpLHZvaWQgMCE9PXIub25hYm9ydD9yLm9uYWJvcnQ9YTpyLm9ucmVhZHlzdGF0ZWNoYW5nZT1mdW5jdGlvbigpezQ9PT1yLnJlYWR5U3RhdGUmJkMuc2V0VGltZW91dChmdW5jdGlvbigpe28mJmEoKX0pfSxvPW8oXCJhYm9ydFwiKTt0cnl7ci5zZW5kKGkuaGFzQ29udGVudCYmaS5kYXRhfHxudWxsKX1jYXRjaChlKXtpZihvKXRocm93IGV9fSxhYm9ydDpmdW5jdGlvbigpe28mJm8oKX19fSksUy5hamF4UHJlZmlsdGVyKGZ1bmN0aW9uKGUpe2UuY3Jvc3NEb21haW4mJihlLmNvbnRlbnRzLnNjcmlwdD0hMSl9KSxTLmFqYXhTZXR1cCh7YWNjZXB0czp7c2NyaXB0OlwidGV4dC9qYXZhc2NyaXB0LCBhcHBsaWNhdGlvbi9qYXZhc2NyaXB0LCBhcHBsaWNhdGlvbi9lY21hc2NyaXB0LCBhcHBsaWNhdGlvbi94LWVjbWFzY3JpcHRcIn0sY29udGVudHM6e3NjcmlwdDovXFxiKD86amF2YXxlY21hKXNjcmlwdFxcYi99LGNvbnZlcnRlcnM6e1widGV4dCBzY3JpcHRcIjpmdW5jdGlvbihlKXtyZXR1cm4gUy5nbG9iYWxFdmFsKGUpLGV9fX0pLFMuYWpheFByZWZpbHRlcihcInNjcmlwdFwiLGZ1bmN0aW9uKGUpe3ZvaWQgMD09PWUuY2FjaGUmJihlLmNhY2hlPSExKSxlLmNyb3NzRG9tYWluJiYoZS50eXBlPVwiR0VUXCIpfSksUy5hamF4VHJhbnNwb3J0KFwic2NyaXB0XCIsZnVuY3Rpb24obil7dmFyIHIsaTtpZihuLmNyb3NzRG9tYWlufHxuLnNjcmlwdEF0dHJzKXJldHVybntzZW5kOmZ1bmN0aW9uKGUsdCl7cj1TKFwiPHNjcmlwdD5cIikuYXR0cihuLnNjcmlwdEF0dHJzfHx7fSkucHJvcCh7Y2hhcnNldDpuLnNjcmlwdENoYXJzZXQsc3JjOm4udXJsfSkub24oXCJsb2FkIGVycm9yXCIsaT1mdW5jdGlvbihlKXtyLnJlbW92ZSgpLGk9bnVsbCxlJiZ0KFwiZXJyb3JcIj09PWUudHlwZT80MDQ6MjAwLGUudHlwZSl9KSxFLmhlYWQuYXBwZW5kQ2hpbGQoclswXSl9LGFib3J0OmZ1bmN0aW9uKCl7aSYmaSgpfX19KTt2YXIgVXQsWHQ9W10sVnQ9Lyg9KVxcPyg/PSZ8JCl8XFw/XFw/LztTLmFqYXhTZXR1cCh7anNvbnA6XCJjYWxsYmFja1wiLGpzb25wQ2FsbGJhY2s6ZnVuY3Rpb24oKXt2YXIgZT1YdC5wb3AoKXx8Uy5leHBhbmRvK1wiX1wiK0N0Lmd1aWQrKztyZXR1cm4gdGhpc1tlXT0hMCxlfX0pLFMuYWpheFByZWZpbHRlcihcImpzb24ganNvbnBcIixmdW5jdGlvbihlLHQsbil7dmFyIHIsaSxvLGE9ITEhPT1lLmpzb25wJiYoVnQudGVzdChlLnVybCk/XCJ1cmxcIjpcInN0cmluZ1wiPT10eXBlb2YgZS5kYXRhJiYwPT09KGUuY29udGVudFR5cGV8fFwiXCIpLmluZGV4T2YoXCJhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWRcIikmJlZ0LnRlc3QoZS5kYXRhKSYmXCJkYXRhXCIpO2lmKGF8fFwianNvbnBcIj09PWUuZGF0YVR5cGVzWzBdKXJldHVybiByPWUuanNvbnBDYWxsYmFjaz1tKGUuanNvbnBDYWxsYmFjayk/ZS5qc29ucENhbGxiYWNrKCk6ZS5qc29ucENhbGxiYWNrLGE/ZVthXT1lW2FdLnJlcGxhY2UoVnQsXCIkMVwiK3IpOiExIT09ZS5qc29ucCYmKGUudXJsKz0oRXQudGVzdChlLnVybCk/XCImXCI6XCI/XCIpK2UuanNvbnArXCI9XCIrciksZS5jb252ZXJ0ZXJzW1wic2NyaXB0IGpzb25cIl09ZnVuY3Rpb24oKXtyZXR1cm4gb3x8Uy5lcnJvcihyK1wiIHdhcyBub3QgY2FsbGVkXCIpLG9bMF19LGUuZGF0YVR5cGVzWzBdPVwianNvblwiLGk9Q1tyXSxDW3JdPWZ1bmN0aW9uKCl7bz1hcmd1bWVudHN9LG4uYWx3YXlzKGZ1bmN0aW9uKCl7dm9pZCAwPT09aT9TKEMpLnJlbW92ZVByb3Aocik6Q1tyXT1pLGVbcl0mJihlLmpzb25wQ2FsbGJhY2s9dC5qc29ucENhbGxiYWNrLFh0LnB1c2gocikpLG8mJm0oaSkmJmkob1swXSksbz1pPXZvaWQgMH0pLFwic2NyaXB0XCJ9KSx5LmNyZWF0ZUhUTUxEb2N1bWVudD0oKFV0PUUuaW1wbGVtZW50YXRpb24uY3JlYXRlSFRNTERvY3VtZW50KFwiXCIpLmJvZHkpLmlubmVySFRNTD1cIjxmb3JtPjwvZm9ybT48Zm9ybT48L2Zvcm0+XCIsMj09PVV0LmNoaWxkTm9kZXMubGVuZ3RoKSxTLnBhcnNlSFRNTD1mdW5jdGlvbihlLHQsbil7cmV0dXJuXCJzdHJpbmdcIiE9dHlwZW9mIGU/W106KFwiYm9vbGVhblwiPT10eXBlb2YgdCYmKG49dCx0PSExKSx0fHwoeS5jcmVhdGVIVE1MRG9jdW1lbnQ/KChyPSh0PUUuaW1wbGVtZW50YXRpb24uY3JlYXRlSFRNTERvY3VtZW50KFwiXCIpKS5jcmVhdGVFbGVtZW50KFwiYmFzZVwiKSkuaHJlZj1FLmxvY2F0aW9uLmhyZWYsdC5oZWFkLmFwcGVuZENoaWxkKHIpKTp0PUUpLG89IW4mJltdLChpPU4uZXhlYyhlKSk/W3QuY3JlYXRlRWxlbWVudChpWzFdKV06KGk9eGUoW2VdLHQsbyksbyYmby5sZW5ndGgmJlMobykucmVtb3ZlKCksUy5tZXJnZShbXSxpLmNoaWxkTm9kZXMpKSk7dmFyIHIsaSxvfSxTLmZuLmxvYWQ9ZnVuY3Rpb24oZSx0LG4pe3ZhciByLGksbyxhPXRoaXMscz1lLmluZGV4T2YoXCIgXCIpO3JldHVybi0xPHMmJihyPXZ0KGUuc2xpY2UocykpLGU9ZS5zbGljZSgwLHMpKSxtKHQpPyhuPXQsdD12b2lkIDApOnQmJlwib2JqZWN0XCI9PXR5cGVvZiB0JiYoaT1cIlBPU1RcIiksMDxhLmxlbmd0aCYmUy5hamF4KHt1cmw6ZSx0eXBlOml8fFwiR0VUXCIsZGF0YVR5cGU6XCJodG1sXCIsZGF0YTp0fSkuZG9uZShmdW5jdGlvbihlKXtvPWFyZ3VtZW50cyxhLmh0bWwocj9TKFwiPGRpdj5cIikuYXBwZW5kKFMucGFyc2VIVE1MKGUpKS5maW5kKHIpOmUpfSkuYWx3YXlzKG4mJmZ1bmN0aW9uKGUsdCl7YS5lYWNoKGZ1bmN0aW9uKCl7bi5hcHBseSh0aGlzLG98fFtlLnJlc3BvbnNlVGV4dCx0LGVdKX0pfSksdGhpc30sUy5leHByLnBzZXVkb3MuYW5pbWF0ZWQ9ZnVuY3Rpb24odCl7cmV0dXJuIFMuZ3JlcChTLnRpbWVycyxmdW5jdGlvbihlKXtyZXR1cm4gdD09PWUuZWxlbX0pLmxlbmd0aH0sUy5vZmZzZXQ9e3NldE9mZnNldDpmdW5jdGlvbihlLHQsbil7dmFyIHIsaSxvLGEscyx1LGw9Uy5jc3MoZSxcInBvc2l0aW9uXCIpLGM9UyhlKSxmPXt9O1wic3RhdGljXCI9PT1sJiYoZS5zdHlsZS5wb3NpdGlvbj1cInJlbGF0aXZlXCIpLHM9Yy5vZmZzZXQoKSxvPVMuY3NzKGUsXCJ0b3BcIiksdT1TLmNzcyhlLFwibGVmdFwiKSwoXCJhYnNvbHV0ZVwiPT09bHx8XCJmaXhlZFwiPT09bCkmJi0xPChvK3UpLmluZGV4T2YoXCJhdXRvXCIpPyhhPShyPWMucG9zaXRpb24oKSkudG9wLGk9ci5sZWZ0KTooYT1wYXJzZUZsb2F0KG8pfHwwLGk9cGFyc2VGbG9hdCh1KXx8MCksbSh0KSYmKHQ9dC5jYWxsKGUsbixTLmV4dGVuZCh7fSxzKSkpLG51bGwhPXQudG9wJiYoZi50b3A9dC50b3Atcy50b3ArYSksbnVsbCE9dC5sZWZ0JiYoZi5sZWZ0PXQubGVmdC1zLmxlZnQraSksXCJ1c2luZ1wiaW4gdD90LnVzaW5nLmNhbGwoZSxmKTooXCJudW1iZXJcIj09dHlwZW9mIGYudG9wJiYoZi50b3ArPVwicHhcIiksXCJudW1iZXJcIj09dHlwZW9mIGYubGVmdCYmKGYubGVmdCs9XCJweFwiKSxjLmNzcyhmKSl9fSxTLmZuLmV4dGVuZCh7b2Zmc2V0OmZ1bmN0aW9uKHQpe2lmKGFyZ3VtZW50cy5sZW5ndGgpcmV0dXJuIHZvaWQgMD09PXQ/dGhpczp0aGlzLmVhY2goZnVuY3Rpb24oZSl7Uy5vZmZzZXQuc2V0T2Zmc2V0KHRoaXMsdCxlKX0pO3ZhciBlLG4scj10aGlzWzBdO3JldHVybiByP3IuZ2V0Q2xpZW50UmVjdHMoKS5sZW5ndGg/KGU9ci5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKSxuPXIub3duZXJEb2N1bWVudC5kZWZhdWx0Vmlldyx7dG9wOmUudG9wK24ucGFnZVlPZmZzZXQsbGVmdDplLmxlZnQrbi5wYWdlWE9mZnNldH0pOnt0b3A6MCxsZWZ0OjB9OnZvaWQgMH0scG9zaXRpb246ZnVuY3Rpb24oKXtpZih0aGlzWzBdKXt2YXIgZSx0LG4scj10aGlzWzBdLGk9e3RvcDowLGxlZnQ6MH07aWYoXCJmaXhlZFwiPT09Uy5jc3MocixcInBvc2l0aW9uXCIpKXQ9ci5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtlbHNle3Q9dGhpcy5vZmZzZXQoKSxuPXIub3duZXJEb2N1bWVudCxlPXIub2Zmc2V0UGFyZW50fHxuLmRvY3VtZW50RWxlbWVudDt3aGlsZShlJiYoZT09PW4uYm9keXx8ZT09PW4uZG9jdW1lbnRFbGVtZW50KSYmXCJzdGF0aWNcIj09PVMuY3NzKGUsXCJwb3NpdGlvblwiKSllPWUucGFyZW50Tm9kZTtlJiZlIT09ciYmMT09PWUubm9kZVR5cGUmJigoaT1TKGUpLm9mZnNldCgpKS50b3ArPVMuY3NzKGUsXCJib3JkZXJUb3BXaWR0aFwiLCEwKSxpLmxlZnQrPVMuY3NzKGUsXCJib3JkZXJMZWZ0V2lkdGhcIiwhMCkpfXJldHVybnt0b3A6dC50b3AtaS50b3AtUy5jc3MocixcIm1hcmdpblRvcFwiLCEwKSxsZWZ0OnQubGVmdC1pLmxlZnQtUy5jc3MocixcIm1hcmdpbkxlZnRcIiwhMCl9fX0sb2Zmc2V0UGFyZW50OmZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uKCl7dmFyIGU9dGhpcy5vZmZzZXRQYXJlbnQ7d2hpbGUoZSYmXCJzdGF0aWNcIj09PVMuY3NzKGUsXCJwb3NpdGlvblwiKSllPWUub2Zmc2V0UGFyZW50O3JldHVybiBlfHxyZX0pfX0pLFMuZWFjaCh7c2Nyb2xsTGVmdDpcInBhZ2VYT2Zmc2V0XCIsc2Nyb2xsVG9wOlwicGFnZVlPZmZzZXRcIn0sZnVuY3Rpb24odCxpKXt2YXIgbz1cInBhZ2VZT2Zmc2V0XCI9PT1pO1MuZm5bdF09ZnVuY3Rpb24oZSl7cmV0dXJuICQodGhpcyxmdW5jdGlvbihlLHQsbil7dmFyIHI7aWYoeChlKT9yPWU6OT09PWUubm9kZVR5cGUmJihyPWUuZGVmYXVsdFZpZXcpLHZvaWQgMD09PW4pcmV0dXJuIHI/cltpXTplW3RdO3I/ci5zY3JvbGxUbyhvP3IucGFnZVhPZmZzZXQ6bixvP246ci5wYWdlWU9mZnNldCk6ZVt0XT1ufSx0LGUsYXJndW1lbnRzLmxlbmd0aCl9fSksUy5lYWNoKFtcInRvcFwiLFwibGVmdFwiXSxmdW5jdGlvbihlLG4pe1MuY3NzSG9va3Nbbl09JGUoeS5waXhlbFBvc2l0aW9uLGZ1bmN0aW9uKGUsdCl7aWYodClyZXR1cm4gdD1CZShlLG4pLE1lLnRlc3QodCk/UyhlKS5wb3NpdGlvbigpW25dK1wicHhcIjp0fSl9KSxTLmVhY2goe0hlaWdodDpcImhlaWdodFwiLFdpZHRoOlwid2lkdGhcIn0sZnVuY3Rpb24oYSxzKXtTLmVhY2goe3BhZGRpbmc6XCJpbm5lclwiK2EsY29udGVudDpzLFwiXCI6XCJvdXRlclwiK2F9LGZ1bmN0aW9uKHIsbyl7Uy5mbltvXT1mdW5jdGlvbihlLHQpe3ZhciBuPWFyZ3VtZW50cy5sZW5ndGgmJihyfHxcImJvb2xlYW5cIiE9dHlwZW9mIGUpLGk9cnx8KCEwPT09ZXx8ITA9PT10P1wibWFyZ2luXCI6XCJib3JkZXJcIik7cmV0dXJuICQodGhpcyxmdW5jdGlvbihlLHQsbil7dmFyIHI7cmV0dXJuIHgoZSk/MD09PW8uaW5kZXhPZihcIm91dGVyXCIpP2VbXCJpbm5lclwiK2FdOmUuZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50W1wiY2xpZW50XCIrYV06OT09PWUubm9kZVR5cGU/KHI9ZS5kb2N1bWVudEVsZW1lbnQsTWF0aC5tYXgoZS5ib2R5W1wic2Nyb2xsXCIrYV0scltcInNjcm9sbFwiK2FdLGUuYm9keVtcIm9mZnNldFwiK2FdLHJbXCJvZmZzZXRcIithXSxyW1wiY2xpZW50XCIrYV0pKTp2b2lkIDA9PT1uP1MuY3NzKGUsdCxpKTpTLnN0eWxlKGUsdCxuLGkpfSxzLG4/ZTp2b2lkIDAsbil9fSl9KSxTLmVhY2goW1wiYWpheFN0YXJ0XCIsXCJhamF4U3RvcFwiLFwiYWpheENvbXBsZXRlXCIsXCJhamF4RXJyb3JcIixcImFqYXhTdWNjZXNzXCIsXCJhamF4U2VuZFwiXSxmdW5jdGlvbihlLHQpe1MuZm5bdF09ZnVuY3Rpb24oZSl7cmV0dXJuIHRoaXMub24odCxlKX19KSxTLmZuLmV4dGVuZCh7YmluZDpmdW5jdGlvbihlLHQsbil7cmV0dXJuIHRoaXMub24oZSxudWxsLHQsbil9LHVuYmluZDpmdW5jdGlvbihlLHQpe3JldHVybiB0aGlzLm9mZihlLG51bGwsdCl9LGRlbGVnYXRlOmZ1bmN0aW9uKGUsdCxuLHIpe3JldHVybiB0aGlzLm9uKHQsZSxuLHIpfSx1bmRlbGVnYXRlOmZ1bmN0aW9uKGUsdCxuKXtyZXR1cm4gMT09PWFyZ3VtZW50cy5sZW5ndGg/dGhpcy5vZmYoZSxcIioqXCIpOnRoaXMub2ZmKHQsZXx8XCIqKlwiLG4pfSxob3ZlcjpmdW5jdGlvbihlLHQpe3JldHVybiB0aGlzLm1vdXNlZW50ZXIoZSkubW91c2VsZWF2ZSh0fHxlKX19KSxTLmVhY2goXCJibHVyIGZvY3VzIGZvY3VzaW4gZm9jdXNvdXQgcmVzaXplIHNjcm9sbCBjbGljayBkYmxjbGljayBtb3VzZWRvd24gbW91c2V1cCBtb3VzZW1vdmUgbW91c2VvdmVyIG1vdXNlb3V0IG1vdXNlZW50ZXIgbW91c2VsZWF2ZSBjaGFuZ2Ugc2VsZWN0IHN1Ym1pdCBrZXlkb3duIGtleXByZXNzIGtleXVwIGNvbnRleHRtZW51XCIuc3BsaXQoXCIgXCIpLGZ1bmN0aW9uKGUsbil7Uy5mbltuXT1mdW5jdGlvbihlLHQpe3JldHVybiAwPGFyZ3VtZW50cy5sZW5ndGg/dGhpcy5vbihuLG51bGwsZSx0KTp0aGlzLnRyaWdnZXIobil9fSk7dmFyIEd0PS9eW1xcc1xcdUZFRkZcXHhBMF0rfFtcXHNcXHVGRUZGXFx4QTBdKyQvZztTLnByb3h5PWZ1bmN0aW9uKGUsdCl7dmFyIG4scixpO2lmKFwic3RyaW5nXCI9PXR5cGVvZiB0JiYobj1lW3RdLHQ9ZSxlPW4pLG0oZSkpcmV0dXJuIHI9cy5jYWxsKGFyZ3VtZW50cywyKSwoaT1mdW5jdGlvbigpe3JldHVybiBlLmFwcGx5KHR8fHRoaXMsci5jb25jYXQocy5jYWxsKGFyZ3VtZW50cykpKX0pLmd1aWQ9ZS5ndWlkPWUuZ3VpZHx8Uy5ndWlkKyssaX0sUy5ob2xkUmVhZHk9ZnVuY3Rpb24oZSl7ZT9TLnJlYWR5V2FpdCsrOlMucmVhZHkoITApfSxTLmlzQXJyYXk9QXJyYXkuaXNBcnJheSxTLnBhcnNlSlNPTj1KU09OLnBhcnNlLFMubm9kZU5hbWU9QSxTLmlzRnVuY3Rpb249bSxTLmlzV2luZG93PXgsUy5jYW1lbENhc2U9WCxTLnR5cGU9dyxTLm5vdz1EYXRlLm5vdyxTLmlzTnVtZXJpYz1mdW5jdGlvbihlKXt2YXIgdD1TLnR5cGUoZSk7cmV0dXJuKFwibnVtYmVyXCI9PT10fHxcInN0cmluZ1wiPT09dCkmJiFpc05hTihlLXBhcnNlRmxvYXQoZSkpfSxTLnRyaW09ZnVuY3Rpb24oZSl7cmV0dXJuIG51bGw9PWU/XCJcIjooZStcIlwiKS5yZXBsYWNlKEd0LFwiXCIpfSxcImZ1bmN0aW9uXCI9PXR5cGVvZiBkZWZpbmUmJmRlZmluZS5hbWQmJmRlZmluZShcImpxdWVyeVwiLFtdLGZ1bmN0aW9uKCl7cmV0dXJuIFN9KTt2YXIgWXQ9Qy5qUXVlcnksUXQ9Qy4kO3JldHVybiBTLm5vQ29uZmxpY3Q9ZnVuY3Rpb24oZSl7cmV0dXJuIEMuJD09PVMmJihDLiQ9UXQpLGUmJkMualF1ZXJ5PT09UyYmKEMualF1ZXJ5PVl0KSxTfSxcInVuZGVmaW5lZFwiPT10eXBlb2YgZSYmKEMualF1ZXJ5PUMuJD1TKSxTfSk7XG4vLyBET00uZXZlbnQubW92ZVxuLy9cbi8vIDIuMC4wXG4vL1xuLy8gU3RlcGhlbiBCYW5kXG4vL1xuLy8gVHJpZ2dlcnMgJ21vdmVzdGFydCcsICdtb3ZlJyBhbmQgJ21vdmVlbmQnIGV2ZW50cyBhZnRlclxuLy8gbW91c2Vtb3ZlcyBmb2xsb3dpbmcgYSBtb3VzZWRvd24gY3Jvc3MgYSBkaXN0YW5jZSB0aHJlc2hvbGQsXG4vLyBzaW1pbGFyIHRvIHRoZSBuYXRpdmUgJ2RyYWdzdGFydCcsICdkcmFnJyBhbmQgJ2RyYWdlbmQnIGV2ZW50cy5cbi8vIE1vdmUgZXZlbnRzIGFyZSB0aHJvdHRsZWQgdG8gYW5pbWF0aW9uIGZyYW1lcy4gTW92ZSBldmVudCBvYmplY3RzXG4vLyBoYXZlIHRoZSBwcm9wZXJ0aWVzOlxuLy9cbi8vIHBhZ2VYOlxuLy8gcGFnZVk6ICAgICBQYWdlIGNvb3JkaW5hdGVzIG9mIHBvaW50ZXIuXG4vLyBzdGFydFg6XG4vLyBzdGFydFk6ICAgIFBhZ2UgY29vcmRpbmF0ZXMgb2YgcG9pbnRlciBhdCBtb3Zlc3RhcnQuXG4vLyBkaXN0WDpcbi8vIGRpc3RZOiAgICAgRGlzdGFuY2UgdGhlIHBvaW50ZXIgaGFzIG1vdmVkIHNpbmNlIG1vdmVzdGFydC5cbi8vIGRlbHRhWDpcbi8vIGRlbHRhWTogICAgRGlzdGFuY2UgdGhlIGZpbmdlciBoYXMgbW92ZWQgc2luY2UgbGFzdCBldmVudC5cbi8vIHZlbG9jaXR5WDpcbi8vIHZlbG9jaXR5WTogQXZlcmFnZSB2ZWxvY2l0eSBvdmVyIGxhc3QgZmV3IGV2ZW50cy5cblxuXG4oZnVuY3Rpb24oZm4pIHtcblx0aWYgKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZCkge1xuICAgICAgICBkZWZpbmUoW10sIGZuKTtcbiAgICB9IGVsc2UgaWYgKCh0eXBlb2YgbW9kdWxlICE9PSBcInVuZGVmaW5lZFwiICYmIG1vZHVsZSAhPT0gbnVsbCkgJiYgbW9kdWxlLmV4cG9ydHMpIHtcbiAgICAgICAgbW9kdWxlLmV4cG9ydHMgPSBmbjtcblx0fSBlbHNlIHtcblx0XHRmbigpO1xuXHR9XG59KShmdW5jdGlvbigpe1xuXHR2YXIgYXNzaWduID0gT2JqZWN0LmFzc2lnbiB8fCB3aW5kb3cualF1ZXJ5ICYmIGpRdWVyeS5leHRlbmQ7XG5cblx0Ly8gTnVtYmVyIG9mIHBpeGVscyBhIHByZXNzZWQgcG9pbnRlciB0cmF2ZWxzIGJlZm9yZSBtb3Zlc3RhcnRcblx0Ly8gZXZlbnQgaXMgZmlyZWQuXG5cdHZhciB0aHJlc2hvbGQgPSA4O1xuXG5cdC8vIFNoaW0gZm9yIHJlcXVlc3RBbmltYXRpb25GcmFtZSwgZmFsbGluZyBiYWNrIHRvIHRpbWVyLiBTZWU6XG5cdC8vIHNlZSBodHRwOi8vcGF1bGlyaXNoLmNvbS8yMDExL3JlcXVlc3RhbmltYXRpb25mcmFtZS1mb3Itc21hcnQtYW5pbWF0aW5nL1xuXHR2YXIgcmVxdWVzdEZyYW1lID0gKGZ1bmN0aW9uKCl7XG5cdFx0cmV0dXJuIChcblx0XHRcdHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUgfHxcblx0XHRcdHdpbmRvdy53ZWJraXRSZXF1ZXN0QW5pbWF0aW9uRnJhbWUgfHxcblx0XHRcdHdpbmRvdy5tb3pSZXF1ZXN0QW5pbWF0aW9uRnJhbWUgfHxcblx0XHRcdHdpbmRvdy5vUmVxdWVzdEFuaW1hdGlvbkZyYW1lIHx8XG5cdFx0XHR3aW5kb3cubXNSZXF1ZXN0QW5pbWF0aW9uRnJhbWUgfHxcblx0XHRcdGZ1bmN0aW9uKGZuLCBlbGVtZW50KXtcblx0XHRcdFx0cmV0dXJuIHdpbmRvdy5zZXRUaW1lb3V0KGZ1bmN0aW9uKCl7XG5cdFx0XHRcdFx0Zm4oKTtcblx0XHRcdFx0fSwgMjUpO1xuXHRcdFx0fVxuXHRcdCk7XG5cdH0pKCk7XG5cblx0Ly8gU2hpbSBmb3IgY3VzdG9tRXZlbnRcblx0Ly8gc2VlIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0FQSS9DdXN0b21FdmVudC9DdXN0b21FdmVudCNQb2x5ZmlsbFxuXHQoZnVuY3Rpb24gKCkge1xuXHRcdGlmICggdHlwZW9mIHdpbmRvdy5DdXN0b21FdmVudCA9PT0gXCJmdW5jdGlvblwiICkgcmV0dXJuIGZhbHNlO1xuXHRcdGZ1bmN0aW9uIEN1c3RvbUV2ZW50ICggZXZlbnQsIHBhcmFtcyApIHtcblx0XHRcdHBhcmFtcyA9IHBhcmFtcyB8fCB7IGJ1YmJsZXM6IGZhbHNlLCBjYW5jZWxhYmxlOiBmYWxzZSwgZGV0YWlsOiB1bmRlZmluZWQgfTtcblx0XHRcdHZhciBldnQgPSBkb2N1bWVudC5jcmVhdGVFdmVudCggJ0N1c3RvbUV2ZW50JyApO1xuXHRcdFx0ZXZ0LmluaXRDdXN0b21FdmVudCggZXZlbnQsIHBhcmFtcy5idWJibGVzLCBwYXJhbXMuY2FuY2VsYWJsZSwgcGFyYW1zLmRldGFpbCApO1xuXHRcdFx0cmV0dXJuIGV2dDtcblx0XHR9XG5cblx0XHRDdXN0b21FdmVudC5wcm90b3R5cGUgPSB3aW5kb3cuRXZlbnQucHJvdG90eXBlO1xuXHRcdHdpbmRvdy5DdXN0b21FdmVudCA9IEN1c3RvbUV2ZW50O1xuXHR9KSgpO1xuXG5cdHZhciBpZ25vcmVUYWdzID0ge1xuXHRcdFx0dGV4dGFyZWE6IHRydWUsXG5cdFx0XHRpbnB1dDogdHJ1ZSxcblx0XHRcdHNlbGVjdDogdHJ1ZSxcblx0XHRcdGJ1dHRvbjogdHJ1ZVxuXHRcdH07XG5cblx0dmFyIG1vdXNlZXZlbnRzID0ge1xuXHRcdG1vdmU6ICAgJ21vdXNlbW92ZScsXG5cdFx0Y2FuY2VsOiAnbW91c2V1cCBkcmFnc3RhcnQnLFxuXHRcdGVuZDogICAgJ21vdXNldXAnXG5cdH07XG5cblx0dmFyIHRvdWNoZXZlbnRzID0ge1xuXHRcdG1vdmU6ICAgJ3RvdWNobW92ZScsXG5cdFx0Y2FuY2VsOiAndG91Y2hlbmQnLFxuXHRcdGVuZDogICAgJ3RvdWNoZW5kJ1xuXHR9O1xuXG5cdHZhciByc3BhY2VzID0gL1xccysvO1xuXG5cblx0Ly8gRE9NIEV2ZW50c1xuXG5cdHZhciBldmVudE9wdGlvbnMgPSB7IGJ1YmJsZXM6IHRydWUsIGNhbmNlbGFibGU6IHRydWUgfTtcblxuXHR2YXIgZXZlbnRzU3ltYm9sID0gdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiID8gU3ltYm9sKCdldmVudHMnKSA6IHt9O1xuXG5cdGZ1bmN0aW9uIGNyZWF0ZUV2ZW50KHR5cGUpIHtcblx0XHRyZXR1cm4gbmV3IEN1c3RvbUV2ZW50KHR5cGUsIGV2ZW50T3B0aW9ucyk7XG5cdH1cblxuXHRmdW5jdGlvbiBnZXRFdmVudHMobm9kZSkge1xuXHRcdHJldHVybiBub2RlW2V2ZW50c1N5bWJvbF0gfHwgKG5vZGVbZXZlbnRzU3ltYm9sXSA9IHt9KTtcblx0fVxuXG5cdGZ1bmN0aW9uIG9uKG5vZGUsIHR5cGVzLCBmbiwgZGF0YSwgc2VsZWN0b3IpIHtcblx0XHR0eXBlcyA9IHR5cGVzLnNwbGl0KHJzcGFjZXMpO1xuXG5cdFx0dmFyIGV2ZW50cyA9IGdldEV2ZW50cyhub2RlKTtcblx0XHR2YXIgaSA9IHR5cGVzLmxlbmd0aDtcblx0XHR2YXIgaGFuZGxlcnMsIHR5cGU7XG5cblx0XHRmdW5jdGlvbiBoYW5kbGVyKGUpIHsgZm4oZSwgZGF0YSk7IH1cblxuXHRcdHdoaWxlIChpLS0pIHtcblx0XHRcdHR5cGUgPSB0eXBlc1tpXTtcblx0XHRcdGhhbmRsZXJzID0gZXZlbnRzW3R5cGVdIHx8IChldmVudHNbdHlwZV0gPSBbXSk7XG5cdFx0XHRoYW5kbGVycy5wdXNoKFtmbiwgaGFuZGxlcl0pO1xuXHRcdFx0bm9kZS5hZGRFdmVudExpc3RlbmVyKHR5cGUsIGhhbmRsZXIpO1xuXHRcdH1cblx0fVxuXG5cdGZ1bmN0aW9uIG9mZihub2RlLCB0eXBlcywgZm4sIHNlbGVjdG9yKSB7XG5cdFx0dHlwZXMgPSB0eXBlcy5zcGxpdChyc3BhY2VzKTtcblxuXHRcdHZhciBldmVudHMgPSBnZXRFdmVudHMobm9kZSk7XG5cdFx0dmFyIGkgPSB0eXBlcy5sZW5ndGg7XG5cdFx0dmFyIHR5cGUsIGhhbmRsZXJzLCBrO1xuXG5cdFx0aWYgKCFldmVudHMpIHsgcmV0dXJuOyB9XG5cblx0XHR3aGlsZSAoaS0tKSB7XG5cdFx0XHR0eXBlID0gdHlwZXNbaV07XG5cdFx0XHRoYW5kbGVycyA9IGV2ZW50c1t0eXBlXTtcblx0XHRcdGlmICghaGFuZGxlcnMpIHsgY29udGludWU7IH1cblx0XHRcdGsgPSBoYW5kbGVycy5sZW5ndGg7XG5cdFx0XHR3aGlsZSAoay0tKSB7XG5cdFx0XHRcdGlmIChoYW5kbGVyc1trXVswXSA9PT0gZm4pIHtcblx0XHRcdFx0XHRub2RlLnJlbW92ZUV2ZW50TGlzdGVuZXIodHlwZSwgaGFuZGxlcnNba11bMV0pO1xuXHRcdFx0XHRcdGhhbmRsZXJzLnNwbGljZShrLCAxKTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblx0fVxuXG5cdGZ1bmN0aW9uIHRyaWdnZXIobm9kZSwgdHlwZSwgcHJvcGVydGllcykge1xuXHRcdC8vIERvbid0IGNhY2hlIGV2ZW50cy4gSXQgcHJldmVudHMgeW91IGZyb20gdHJpZ2dlcmluZyBhbiBldmVudCBvZiBhXG5cdFx0Ly8gZ2l2ZW4gdHlwZSBmcm9tIGluc2lkZSB0aGUgaGFuZGxlciBvZiBhbm90aGVyIGV2ZW50IG9mIHRoYXQgdHlwZS5cblx0XHR2YXIgZXZlbnQgPSBjcmVhdGVFdmVudCh0eXBlKTtcblx0XHRpZiAocHJvcGVydGllcykgeyBhc3NpZ24oZXZlbnQsIHByb3BlcnRpZXMpOyB9XG5cdFx0bm9kZS5kaXNwYXRjaEV2ZW50KGV2ZW50KTtcblx0fVxuXG5cblx0Ly8gQ29uc3RydWN0b3JzXG5cblx0ZnVuY3Rpb24gVGltZXIoZm4pe1xuXHRcdHZhciBjYWxsYmFjayA9IGZuLFxuXHRcdCAgICBhY3RpdmUgPSBmYWxzZSxcblx0XHQgICAgcnVubmluZyA9IGZhbHNlO1xuXG5cdFx0ZnVuY3Rpb24gdHJpZ2dlcih0aW1lKSB7XG5cdFx0XHRpZiAoYWN0aXZlKXtcblx0XHRcdFx0Y2FsbGJhY2soKTtcblx0XHRcdFx0cmVxdWVzdEZyYW1lKHRyaWdnZXIpO1xuXHRcdFx0XHRydW5uaW5nID0gdHJ1ZTtcblx0XHRcdFx0YWN0aXZlID0gZmFsc2U7XG5cdFx0XHR9XG5cdFx0XHRlbHNlIHtcblx0XHRcdFx0cnVubmluZyA9IGZhbHNlO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdHRoaXMua2ljayA9IGZ1bmN0aW9uKGZuKSB7XG5cdFx0XHRhY3RpdmUgPSB0cnVlO1xuXHRcdFx0aWYgKCFydW5uaW5nKSB7IHRyaWdnZXIoKTsgfVxuXHRcdH07XG5cblx0XHR0aGlzLmVuZCA9IGZ1bmN0aW9uKGZuKSB7XG5cdFx0XHR2YXIgY2IgPSBjYWxsYmFjaztcblxuXHRcdFx0aWYgKCFmbikgeyByZXR1cm47IH1cblxuXHRcdFx0Ly8gSWYgdGhlIHRpbWVyIGlzIG5vdCBydW5uaW5nLCBzaW1wbHkgY2FsbCB0aGUgZW5kIGNhbGxiYWNrLlxuXHRcdFx0aWYgKCFydW5uaW5nKSB7XG5cdFx0XHRcdGZuKCk7XG5cdFx0XHR9XG5cdFx0XHQvLyBJZiB0aGUgdGltZXIgaXMgcnVubmluZywgYW5kIGhhcyBiZWVuIGtpY2tlZCBsYXRlbHksIHRoZW5cblx0XHRcdC8vIHF1ZXVlIHVwIHRoZSBjdXJyZW50IGNhbGxiYWNrIGFuZCB0aGUgZW5kIGNhbGxiYWNrLCBvdGhlcndpc2Vcblx0XHRcdC8vIGp1c3QgdGhlIGVuZCBjYWxsYmFjay5cblx0XHRcdGVsc2Uge1xuXHRcdFx0XHRjYWxsYmFjayA9IGFjdGl2ZSA/XG5cdFx0XHRcdFx0ZnVuY3Rpb24oKXsgY2IoKTsgZm4oKTsgfSA6XG5cdFx0XHRcdFx0Zm4gO1xuXG5cdFx0XHRcdGFjdGl2ZSA9IHRydWU7XG5cdFx0XHR9XG5cdFx0fTtcblx0fVxuXG5cblx0Ly8gRnVuY3Rpb25zXG5cblx0ZnVuY3Rpb24gbm9vcCgpIHt9XG5cblx0ZnVuY3Rpb24gcHJldmVudERlZmF1bHQoZSkge1xuXHRcdGUucHJldmVudERlZmF1bHQoKTtcblx0fVxuXG5cdGZ1bmN0aW9uIGlzSWdub3JlVGFnKGUpIHtcblx0XHRyZXR1cm4gISFpZ25vcmVUYWdzW2UudGFyZ2V0LnRhZ05hbWUudG9Mb3dlckNhc2UoKV07XG5cdH1cblxuXHRmdW5jdGlvbiBpc1ByaW1hcnlCdXR0b24oZSkge1xuXHRcdC8vIElnbm9yZSBtb3VzZWRvd25zIG9uIGFueSBidXR0b24gb3RoZXIgdGhhbiB0aGUgbGVmdCAob3IgcHJpbWFyeSlcblx0XHQvLyBtb3VzZSBidXR0b24sIG9yIHdoZW4gYSBtb2RpZmllciBrZXkgaXMgcHJlc3NlZC5cblx0XHRyZXR1cm4gKGUud2hpY2ggPT09IDEgJiYgIWUuY3RybEtleSAmJiAhZS5hbHRLZXkpO1xuXHR9XG5cblx0ZnVuY3Rpb24gaWRlbnRpZmllZFRvdWNoKHRvdWNoTGlzdCwgaWQpIHtcblx0XHR2YXIgaSwgbDtcblxuXHRcdGlmICh0b3VjaExpc3QuaWRlbnRpZmllZFRvdWNoKSB7XG5cdFx0XHRyZXR1cm4gdG91Y2hMaXN0LmlkZW50aWZpZWRUb3VjaChpZCk7XG5cdFx0fVxuXG5cdFx0Ly8gdG91Y2hMaXN0LmlkZW50aWZpZWRUb3VjaCgpIGRvZXMgbm90IGV4aXN0IGluXG5cdFx0Ly8gd2Via2l0IHlldOKApiB3ZSBtdXN0IGRvIHRoZSBzZWFyY2ggb3Vyc2VsdmVzLi4uXG5cblx0XHRpID0gLTE7XG5cdFx0bCA9IHRvdWNoTGlzdC5sZW5ndGg7XG5cblx0XHR3aGlsZSAoKytpIDwgbCkge1xuXHRcdFx0aWYgKHRvdWNoTGlzdFtpXS5pZGVudGlmaWVyID09PSBpZCkge1xuXHRcdFx0XHRyZXR1cm4gdG91Y2hMaXN0W2ldO1xuXHRcdFx0fVxuXHRcdH1cblx0fVxuXG5cdGZ1bmN0aW9uIGNoYW5nZWRUb3VjaChlLCBkYXRhKSB7XG5cdFx0dmFyIHRvdWNoID0gaWRlbnRpZmllZFRvdWNoKGUuY2hhbmdlZFRvdWNoZXMsIGRhdGEuaWRlbnRpZmllcik7XG5cblx0XHQvLyBUaGlzIGlzbid0IHRoZSB0b3VjaCB5b3UncmUgbG9va2luZyBmb3IuXG5cdFx0aWYgKCF0b3VjaCkgeyByZXR1cm47IH1cblxuXHRcdC8vIENocm9tZSBBbmRyb2lkIChhdCBsZWFzdCkgaW5jbHVkZXMgdG91Y2hlcyB0aGF0IGhhdmUgbm90XG5cdFx0Ly8gY2hhbmdlZCBpbiBlLmNoYW5nZWRUb3VjaGVzLiBUaGF0J3MgYSBiaXQgYW5ub3lpbmcuIENoZWNrXG5cdFx0Ly8gdGhhdCB0aGlzIHRvdWNoIGhhcyBjaGFuZ2VkLlxuXHRcdGlmICh0b3VjaC5wYWdlWCA9PT0gZGF0YS5wYWdlWCAmJiB0b3VjaC5wYWdlWSA9PT0gZGF0YS5wYWdlWSkgeyByZXR1cm47IH1cblxuXHRcdHJldHVybiB0b3VjaDtcblx0fVxuXG5cblx0Ly8gSGFuZGxlcnMgdGhhdCBkZWNpZGUgd2hlbiB0aGUgZmlyc3QgbW92ZXN0YXJ0IGlzIHRyaWdnZXJlZFxuXG5cdGZ1bmN0aW9uIG1vdXNlZG93bihlKXtcblx0XHQvLyBJZ25vcmUgbm9uLXByaW1hcnkgYnV0dG9uc1xuXHRcdGlmICghaXNQcmltYXJ5QnV0dG9uKGUpKSB7IHJldHVybjsgfVxuXG5cdFx0Ly8gSWdub3JlIGZvcm0gYW5kIGludGVyYWN0aXZlIGVsZW1lbnRzXG5cdFx0aWYgKGlzSWdub3JlVGFnKGUpKSB7IHJldHVybjsgfVxuXG5cdFx0b24oZG9jdW1lbnQsIG1vdXNlZXZlbnRzLm1vdmUsIG1vdXNlbW92ZSwgZSk7XG5cdFx0b24oZG9jdW1lbnQsIG1vdXNlZXZlbnRzLmNhbmNlbCwgbW91c2VlbmQsIGUpO1xuXHR9XG5cblx0ZnVuY3Rpb24gbW91c2Vtb3ZlKGUsIGRhdGEpe1xuXHRcdGNoZWNrVGhyZXNob2xkKGUsIGRhdGEsIGUsIHJlbW92ZU1vdXNlKTtcblx0fVxuXG5cdGZ1bmN0aW9uIG1vdXNlZW5kKGUsIGRhdGEpIHtcblx0XHRyZW1vdmVNb3VzZSgpO1xuXHR9XG5cblx0ZnVuY3Rpb24gcmVtb3ZlTW91c2UoKSB7XG5cdFx0b2ZmKGRvY3VtZW50LCBtb3VzZWV2ZW50cy5tb3ZlLCBtb3VzZW1vdmUpO1xuXHRcdG9mZihkb2N1bWVudCwgbW91c2VldmVudHMuY2FuY2VsLCBtb3VzZWVuZCk7XG5cdH1cblxuXHRmdW5jdGlvbiB0b3VjaHN0YXJ0KGUpIHtcblx0XHQvLyBEb24ndCBnZXQgaW4gdGhlIHdheSBvZiBpbnRlcmFjdGlvbiB3aXRoIGZvcm0gZWxlbWVudHNcblx0XHRpZiAoaWdub3JlVGFnc1tlLnRhcmdldC50YWdOYW1lLnRvTG93ZXJDYXNlKCldKSB7IHJldHVybjsgfVxuXG5cdFx0dmFyIHRvdWNoID0gZS5jaGFuZ2VkVG91Y2hlc1swXTtcblxuXHRcdC8vIGlPUyBsaXZlIHVwZGF0ZXMgdGhlIHRvdWNoIG9iamVjdHMgd2hlcmVhcyBBbmRyb2lkIGdpdmVzIHVzIGNvcGllcy5cblx0XHQvLyBUaGF0IG1lYW5zIHdlIGNhbid0IHRydXN0IHRoZSB0b3VjaHN0YXJ0IG9iamVjdCB0byBzdGF5IHRoZSBzYW1lLFxuXHRcdC8vIHNvIHdlIG11c3QgY29weSB0aGUgZGF0YS4gVGhpcyBvYmplY3QgYWN0cyBhcyBhIHRlbXBsYXRlIGZvclxuXHRcdC8vIG1vdmVzdGFydCwgbW92ZSBhbmQgbW92ZWVuZCBldmVudCBvYmplY3RzLlxuXHRcdHZhciBkYXRhID0ge1xuXHRcdFx0dGFyZ2V0OiAgICAgdG91Y2gudGFyZ2V0LFxuXHRcdFx0cGFnZVg6ICAgICAgdG91Y2gucGFnZVgsXG5cdFx0XHRwYWdlWTogICAgICB0b3VjaC5wYWdlWSxcblx0XHRcdGlkZW50aWZpZXI6IHRvdWNoLmlkZW50aWZpZXIsXG5cblx0XHRcdC8vIFRoZSBvbmx5IHdheSB0byBtYWtlIGhhbmRsZXJzIGluZGl2aWR1YWxseSB1bmJpbmRhYmxlIGlzIGJ5XG5cdFx0XHQvLyBtYWtpbmcgdGhlbSB1bmlxdWUuXG5cdFx0XHR0b3VjaG1vdmU6ICBmdW5jdGlvbihlLCBkYXRhKSB7IHRvdWNobW92ZShlLCBkYXRhKTsgfSxcblx0XHRcdHRvdWNoZW5kOiAgIGZ1bmN0aW9uKGUsIGRhdGEpIHsgdG91Y2hlbmQoZSwgZGF0YSk7IH1cblx0XHR9O1xuXG5cdFx0b24oZG9jdW1lbnQsIHRvdWNoZXZlbnRzLm1vdmUsIGRhdGEudG91Y2htb3ZlLCBkYXRhKTtcblx0XHRvbihkb2N1bWVudCwgdG91Y2hldmVudHMuY2FuY2VsLCBkYXRhLnRvdWNoZW5kLCBkYXRhKTtcblx0fVxuXG5cdGZ1bmN0aW9uIHRvdWNobW92ZShlLCBkYXRhKSB7XG5cdFx0dmFyIHRvdWNoID0gY2hhbmdlZFRvdWNoKGUsIGRhdGEpO1xuXHRcdGlmICghdG91Y2gpIHsgcmV0dXJuOyB9XG5cdFx0Y2hlY2tUaHJlc2hvbGQoZSwgZGF0YSwgdG91Y2gsIHJlbW92ZVRvdWNoKTtcblx0fVxuXG5cdGZ1bmN0aW9uIHRvdWNoZW5kKGUsIGRhdGEpIHtcblx0XHR2YXIgdG91Y2ggPSBpZGVudGlmaWVkVG91Y2goZS5jaGFuZ2VkVG91Y2hlcywgZGF0YS5pZGVudGlmaWVyKTtcblx0XHRpZiAoIXRvdWNoKSB7IHJldHVybjsgfVxuXHRcdHJlbW92ZVRvdWNoKGRhdGEpO1xuXHR9XG5cblx0ZnVuY3Rpb24gcmVtb3ZlVG91Y2goZGF0YSkge1xuXHRcdG9mZihkb2N1bWVudCwgdG91Y2hldmVudHMubW92ZSwgZGF0YS50b3VjaG1vdmUpO1xuXHRcdG9mZihkb2N1bWVudCwgdG91Y2hldmVudHMuY2FuY2VsLCBkYXRhLnRvdWNoZW5kKTtcblx0fVxuXG5cdGZ1bmN0aW9uIGNoZWNrVGhyZXNob2xkKGUsIGRhdGEsIHRvdWNoLCBmbikge1xuXHRcdHZhciBkaXN0WCA9IHRvdWNoLnBhZ2VYIC0gZGF0YS5wYWdlWDtcblx0XHR2YXIgZGlzdFkgPSB0b3VjaC5wYWdlWSAtIGRhdGEucGFnZVk7XG5cblx0XHQvLyBEbyBub3RoaW5nIGlmIHRoZSB0aHJlc2hvbGQgaGFzIG5vdCBiZWVuIGNyb3NzZWQuXG5cdFx0aWYgKChkaXN0WCAqIGRpc3RYKSArIChkaXN0WSAqIGRpc3RZKSA8ICh0aHJlc2hvbGQgKiB0aHJlc2hvbGQpKSB7IHJldHVybjsgfVxuXG5cdFx0dHJpZ2dlclN0YXJ0KGUsIGRhdGEsIHRvdWNoLCBkaXN0WCwgZGlzdFksIGZuKTtcblx0fVxuXG5cdGZ1bmN0aW9uIHRyaWdnZXJTdGFydChlLCBkYXRhLCB0b3VjaCwgZGlzdFgsIGRpc3RZLCBmbikge1xuXHRcdHZhciB0b3VjaGVzID0gZS50YXJnZXRUb3VjaGVzO1xuXHRcdHZhciB0aW1lID0gZS50aW1lU3RhbXAgLSBkYXRhLnRpbWVTdGFtcDtcblxuXHRcdC8vIENyZWF0ZSBhIG1vdmVzdGFydCBvYmplY3Qgd2l0aCBzb21lIHNwZWNpYWwgcHJvcGVydGllcyB0aGF0XG5cdFx0Ly8gYXJlIHBhc3NlZCBvbmx5IHRvIHRoZSBtb3Zlc3RhcnQgaGFuZGxlcnMuXG5cdFx0dmFyIHRlbXBsYXRlID0ge1xuXHRcdFx0YWx0S2V5OiAgICAgZS5hbHRLZXksXG5cdFx0XHRjdHJsS2V5OiAgICBlLmN0cmxLZXksXG5cdFx0XHRzaGlmdEtleTogICBlLnNoaWZ0S2V5LFxuXHRcdFx0c3RhcnRYOiAgICAgZGF0YS5wYWdlWCxcblx0XHRcdHN0YXJ0WTogICAgIGRhdGEucGFnZVksXG5cdFx0XHRkaXN0WDogICAgICBkaXN0WCxcblx0XHRcdGRpc3RZOiAgICAgIGRpc3RZLFxuXHRcdFx0ZGVsdGFYOiAgICAgZGlzdFgsXG5cdFx0XHRkZWx0YVk6ICAgICBkaXN0WSxcblx0XHRcdHBhZ2VYOiAgICAgIHRvdWNoLnBhZ2VYLFxuXHRcdFx0cGFnZVk6ICAgICAgdG91Y2gucGFnZVksXG5cdFx0XHR2ZWxvY2l0eVg6ICBkaXN0WCAvIHRpbWUsXG5cdFx0XHR2ZWxvY2l0eVk6ICBkaXN0WSAvIHRpbWUsXG5cdFx0XHRpZGVudGlmaWVyOiBkYXRhLmlkZW50aWZpZXIsXG5cdFx0XHR0YXJnZXRUb3VjaGVzOiB0b3VjaGVzLFxuXHRcdFx0ZmluZ2VyOiB0b3VjaGVzID8gdG91Y2hlcy5sZW5ndGggOiAxLFxuXHRcdFx0ZW5hYmxlTW92ZTogZnVuY3Rpb24oKSB7XG5cdFx0XHRcdHRoaXMubW92ZUVuYWJsZWQgPSB0cnVlO1xuXHRcdFx0XHR0aGlzLmVuYWJsZU1vdmUgPSBub29wO1xuXHRcdFx0XHRlLnByZXZlbnREZWZhdWx0KCk7XG5cdFx0XHR9XG5cdFx0fTtcblxuXHRcdC8vIFRyaWdnZXIgdGhlIG1vdmVzdGFydCBldmVudC5cblx0XHR0cmlnZ2VyKGRhdGEudGFyZ2V0LCAnbW92ZXN0YXJ0JywgdGVtcGxhdGUpO1xuXG5cdFx0Ly8gVW5iaW5kIGhhbmRsZXJzIHRoYXQgdHJhY2tlZCB0aGUgdG91Y2ggb3IgbW91c2UgdXAgdGlsbCBub3cuXG5cdFx0Zm4oZGF0YSk7XG5cdH1cblxuXG5cdC8vIEhhbmRsZXJzIHRoYXQgY29udHJvbCB3aGF0IGhhcHBlbnMgZm9sbG93aW5nIGEgbW92ZXN0YXJ0XG5cblx0ZnVuY3Rpb24gYWN0aXZlTW91c2Vtb3ZlKGUsIGRhdGEpIHtcblx0XHR2YXIgdGltZXIgID0gZGF0YS50aW1lcjtcblxuXHRcdGRhdGEudG91Y2ggPSBlO1xuXHRcdGRhdGEudGltZVN0YW1wID0gZS50aW1lU3RhbXA7XG5cdFx0dGltZXIua2ljaygpO1xuXHR9XG5cblx0ZnVuY3Rpb24gYWN0aXZlTW91c2VlbmQoZSwgZGF0YSkge1xuXHRcdHZhciB0YXJnZXQgPSBkYXRhLnRhcmdldDtcblx0XHR2YXIgZXZlbnQgID0gZGF0YS5ldmVudDtcblx0XHR2YXIgdGltZXIgID0gZGF0YS50aW1lcjtcblxuXHRcdHJlbW92ZUFjdGl2ZU1vdXNlKCk7XG5cblx0XHRlbmRFdmVudCh0YXJnZXQsIGV2ZW50LCB0aW1lciwgZnVuY3Rpb24oKSB7XG5cdFx0XHQvLyBVbmJpbmQgdGhlIGNsaWNrIHN1cHByZXNzb3IsIHdhaXRpbmcgdW50aWwgYWZ0ZXIgbW91c2V1cFxuXHRcdFx0Ly8gaGFzIGJlZW4gaGFuZGxlZC5cblx0XHRcdHNldFRpbWVvdXQoZnVuY3Rpb24oKXtcblx0XHRcdFx0b2ZmKHRhcmdldCwgJ2NsaWNrJywgcHJldmVudERlZmF1bHQpO1xuXHRcdFx0fSwgMCk7XG5cdFx0fSk7XG5cdH1cblxuXHRmdW5jdGlvbiByZW1vdmVBY3RpdmVNb3VzZSgpIHtcblx0XHRvZmYoZG9jdW1lbnQsIG1vdXNlZXZlbnRzLm1vdmUsIGFjdGl2ZU1vdXNlbW92ZSk7XG5cdFx0b2ZmKGRvY3VtZW50LCBtb3VzZWV2ZW50cy5lbmQsIGFjdGl2ZU1vdXNlZW5kKTtcblx0fVxuXG5cdGZ1bmN0aW9uIGFjdGl2ZVRvdWNobW92ZShlLCBkYXRhKSB7XG5cdFx0dmFyIGV2ZW50ID0gZGF0YS5ldmVudDtcblx0XHR2YXIgdGltZXIgPSBkYXRhLnRpbWVyO1xuXHRcdHZhciB0b3VjaCA9IGNoYW5nZWRUb3VjaChlLCBldmVudCk7XG5cblx0XHRpZiAoIXRvdWNoKSB7IHJldHVybjsgfVxuXG5cdFx0Ly8gU3RvcCB0aGUgaW50ZXJmYWNlIGZyb20gZ2VzdHVyaW5nXG5cdFx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xuXG5cdFx0ZXZlbnQudGFyZ2V0VG91Y2hlcyA9IGUudGFyZ2V0VG91Y2hlcztcblx0XHRkYXRhLnRvdWNoID0gdG91Y2g7XG5cdFx0ZGF0YS50aW1lU3RhbXAgPSBlLnRpbWVTdGFtcDtcblxuXHRcdHRpbWVyLmtpY2soKTtcblx0fVxuXG5cdGZ1bmN0aW9uIGFjdGl2ZVRvdWNoZW5kKGUsIGRhdGEpIHtcblx0XHR2YXIgdGFyZ2V0ID0gZGF0YS50YXJnZXQ7XG5cdFx0dmFyIGV2ZW50ICA9IGRhdGEuZXZlbnQ7XG5cdFx0dmFyIHRpbWVyICA9IGRhdGEudGltZXI7XG5cdFx0dmFyIHRvdWNoICA9IGlkZW50aWZpZWRUb3VjaChlLmNoYW5nZWRUb3VjaGVzLCBldmVudC5pZGVudGlmaWVyKTtcblxuXHRcdC8vIFRoaXMgaXNuJ3QgdGhlIHRvdWNoIHlvdSdyZSBsb29raW5nIGZvci5cblx0XHRpZiAoIXRvdWNoKSB7IHJldHVybjsgfVxuXG5cdFx0cmVtb3ZlQWN0aXZlVG91Y2goZGF0YSk7XG5cdFx0ZW5kRXZlbnQodGFyZ2V0LCBldmVudCwgdGltZXIpO1xuXHR9XG5cblx0ZnVuY3Rpb24gcmVtb3ZlQWN0aXZlVG91Y2goZGF0YSkge1xuXHRcdG9mZihkb2N1bWVudCwgdG91Y2hldmVudHMubW92ZSwgZGF0YS5hY3RpdmVUb3VjaG1vdmUpO1xuXHRcdG9mZihkb2N1bWVudCwgdG91Y2hldmVudHMuZW5kLCBkYXRhLmFjdGl2ZVRvdWNoZW5kKTtcblx0fVxuXG5cblx0Ly8gTG9naWMgZm9yIHRyaWdnZXJpbmcgbW92ZSBhbmQgbW92ZWVuZCBldmVudHNcblxuXHRmdW5jdGlvbiB1cGRhdGVFdmVudChldmVudCwgdG91Y2gsIHRpbWVTdGFtcCkge1xuXHRcdHZhciB0aW1lID0gdGltZVN0YW1wIC0gZXZlbnQudGltZVN0YW1wO1xuXG5cdFx0ZXZlbnQuZGlzdFggPSAgdG91Y2gucGFnZVggLSBldmVudC5zdGFydFg7XG5cdFx0ZXZlbnQuZGlzdFkgPSAgdG91Y2gucGFnZVkgLSBldmVudC5zdGFydFk7XG5cdFx0ZXZlbnQuZGVsdGFYID0gdG91Y2gucGFnZVggLSBldmVudC5wYWdlWDtcblx0XHRldmVudC5kZWx0YVkgPSB0b3VjaC5wYWdlWSAtIGV2ZW50LnBhZ2VZO1xuXG5cdFx0Ly8gQXZlcmFnZSB0aGUgdmVsb2NpdHkgb2YgdGhlIGxhc3QgZmV3IGV2ZW50cyB1c2luZyBhIGRlY2F5XG5cdFx0Ly8gY3VydmUgdG8gZXZlbiBvdXQgc3B1cmlvdXMganVtcHMgaW4gdmFsdWVzLlxuXHRcdGV2ZW50LnZlbG9jaXR5WCA9IDAuMyAqIGV2ZW50LnZlbG9jaXR5WCArIDAuNyAqIGV2ZW50LmRlbHRhWCAvIHRpbWU7XG5cdFx0ZXZlbnQudmVsb2NpdHlZID0gMC4zICogZXZlbnQudmVsb2NpdHlZICsgMC43ICogZXZlbnQuZGVsdGFZIC8gdGltZTtcblx0XHRldmVudC5wYWdlWCA9ICB0b3VjaC5wYWdlWDtcblx0XHRldmVudC5wYWdlWSA9ICB0b3VjaC5wYWdlWTtcblx0fVxuXG5cdGZ1bmN0aW9uIGVuZEV2ZW50KHRhcmdldCwgZXZlbnQsIHRpbWVyLCBmbikge1xuXHRcdHRpbWVyLmVuZChmdW5jdGlvbigpe1xuXHRcdFx0dHJpZ2dlcih0YXJnZXQsICdtb3ZlZW5kJywgZXZlbnQpO1xuXHRcdFx0cmV0dXJuIGZuICYmIGZuKCk7XG5cdFx0fSk7XG5cdH1cblxuXG5cdC8vIFNldCB1cCB0aGUgRE9NXG5cblx0ZnVuY3Rpb24gbW92ZXN0YXJ0KGUpIHtcblx0XHRpZiAoZS5kZWZhdWx0UHJldmVudGVkKSB7IHJldHVybjsgfVxuXHRcdGlmICghZS5tb3ZlRW5hYmxlZCkgeyByZXR1cm47IH1cblxuXHRcdHZhciBldmVudCA9IHtcblx0XHRcdHN0YXJ0WDogICAgICAgIGUuc3RhcnRYLFxuXHRcdFx0c3RhcnRZOiAgICAgICAgZS5zdGFydFksXG5cdFx0XHRwYWdlWDogICAgICAgICBlLnBhZ2VYLFxuXHRcdFx0cGFnZVk6ICAgICAgICAgZS5wYWdlWSxcblx0XHRcdGRpc3RYOiAgICAgICAgIGUuZGlzdFgsXG5cdFx0XHRkaXN0WTogICAgICAgICBlLmRpc3RZLFxuXHRcdFx0ZGVsdGFYOiAgICAgICAgZS5kZWx0YVgsXG5cdFx0XHRkZWx0YVk6ICAgICAgICBlLmRlbHRhWSxcblx0XHRcdHZlbG9jaXR5WDogICAgIGUudmVsb2NpdHlYLFxuXHRcdFx0dmVsb2NpdHlZOiAgICAgZS52ZWxvY2l0eVksXG5cdFx0XHRpZGVudGlmaWVyOiAgICBlLmlkZW50aWZpZXIsXG5cdFx0XHR0YXJnZXRUb3VjaGVzOiBlLnRhcmdldFRvdWNoZXMsXG5cdFx0XHRmaW5nZXI6ICAgICAgICBlLmZpbmdlclxuXHRcdH07XG5cblx0XHR2YXIgZGF0YSA9IHtcblx0XHRcdHRhcmdldDogICAgZS50YXJnZXQsXG5cdFx0XHRldmVudDogICAgIGV2ZW50LFxuXHRcdFx0dGltZXI6ICAgICBuZXcgVGltZXIodXBkYXRlKSxcblx0XHRcdHRvdWNoOiAgICAgdW5kZWZpbmVkLFxuXHRcdFx0dGltZVN0YW1wOiBlLnRpbWVTdGFtcFxuXHRcdH07XG5cblx0XHRmdW5jdGlvbiB1cGRhdGUodGltZSkge1xuXHRcdFx0dXBkYXRlRXZlbnQoZXZlbnQsIGRhdGEudG91Y2gsIGRhdGEudGltZVN0YW1wKTtcblx0XHRcdHRyaWdnZXIoZGF0YS50YXJnZXQsICdtb3ZlJywgZXZlbnQpO1xuXHRcdH1cblxuXHRcdGlmIChlLmlkZW50aWZpZXIgPT09IHVuZGVmaW5lZCkge1xuXHRcdFx0Ly8gV2UncmUgZGVhbGluZyB3aXRoIGEgbW91c2UgZXZlbnQuXG5cdFx0XHQvLyBTdG9wIGNsaWNrcyBmcm9tIHByb3BhZ2F0aW5nIGR1cmluZyBhIG1vdmVcblx0XHRcdG9uKGUudGFyZ2V0LCAnY2xpY2snLCBwcmV2ZW50RGVmYXVsdCk7XG5cdFx0XHRvbihkb2N1bWVudCwgbW91c2VldmVudHMubW92ZSwgYWN0aXZlTW91c2Vtb3ZlLCBkYXRhKTtcblx0XHRcdG9uKGRvY3VtZW50LCBtb3VzZWV2ZW50cy5lbmQsIGFjdGl2ZU1vdXNlZW5kLCBkYXRhKTtcblx0XHR9XG5cdFx0ZWxzZSB7XG5cdFx0XHQvLyBJbiBvcmRlciB0byB1bmJpbmQgY29ycmVjdCBoYW5kbGVycyB0aGV5IGhhdmUgdG8gYmUgdW5pcXVlXG5cdFx0XHRkYXRhLmFjdGl2ZVRvdWNobW92ZSA9IGZ1bmN0aW9uKGUsIGRhdGEpIHsgYWN0aXZlVG91Y2htb3ZlKGUsIGRhdGEpOyB9O1xuXHRcdFx0ZGF0YS5hY3RpdmVUb3VjaGVuZCA9IGZ1bmN0aW9uKGUsIGRhdGEpIHsgYWN0aXZlVG91Y2hlbmQoZSwgZGF0YSk7IH07XG5cblx0XHRcdC8vIFdlJ3JlIGRlYWxpbmcgd2l0aCBhIHRvdWNoLlxuXHRcdFx0b24oZG9jdW1lbnQsIHRvdWNoZXZlbnRzLm1vdmUsIGRhdGEuYWN0aXZlVG91Y2htb3ZlLCBkYXRhKTtcblx0XHRcdG9uKGRvY3VtZW50LCB0b3VjaGV2ZW50cy5lbmQsIGRhdGEuYWN0aXZlVG91Y2hlbmQsIGRhdGEpO1xuXHRcdH1cblx0fVxuXG5cdG9uKGRvY3VtZW50LCAnbW91c2Vkb3duJywgbW91c2Vkb3duKTtcblx0b24oZG9jdW1lbnQsICd0b3VjaHN0YXJ0JywgdG91Y2hzdGFydCk7XG5cdG9uKGRvY3VtZW50LCAnbW92ZXN0YXJ0JywgbW92ZXN0YXJ0KTtcblxuXG5cdC8vIGpRdWVyeSBzcGVjaWFsIGV2ZW50c1xuXHQvL1xuXHQvLyBqUXVlcnkgZXZlbnQgb2JqZWN0cyBhcmUgY29waWVzIG9mIERPTSBldmVudCBvYmplY3RzLiBUaGV5IG5lZWRcblx0Ly8gYSBsaXR0bGUgaGVscCBjb3B5aW5nIHRoZSBtb3ZlIHByb3BlcnRpZXMgYWNyb3NzLlxuXG5cdGlmICghd2luZG93LmpRdWVyeSkgeyByZXR1cm47IH1cblxuXHR2YXIgcHJvcGVydGllcyA9IChcInN0YXJ0WCBzdGFydFkgcGFnZVggcGFnZVkgZGlzdFggZGlzdFkgZGVsdGFYIGRlbHRhWSB2ZWxvY2l0eVggdmVsb2NpdHlZXCIpLnNwbGl0KCcgJyk7XG5cblx0ZnVuY3Rpb24gZW5hYmxlTW92ZTEoZSkgeyBlLmVuYWJsZU1vdmUoKTsgfVxuXHRmdW5jdGlvbiBlbmFibGVNb3ZlMihlKSB7IGUuZW5hYmxlTW92ZSgpOyB9XG5cdGZ1bmN0aW9uIGVuYWJsZU1vdmUzKGUpIHsgZS5lbmFibGVNb3ZlKCk7IH1cblxuXHRmdW5jdGlvbiBhZGQoaGFuZGxlT2JqKSB7XG5cdFx0dmFyIGhhbmRsZXIgPSBoYW5kbGVPYmouaGFuZGxlcjtcblxuXHRcdGhhbmRsZU9iai5oYW5kbGVyID0gZnVuY3Rpb24oZSkge1xuXHRcdFx0Ly8gQ29weSBtb3ZlIHByb3BlcnRpZXMgYWNyb3NzIGZyb20gb3JpZ2luYWxFdmVudFxuXHRcdFx0dmFyIGkgPSBwcm9wZXJ0aWVzLmxlbmd0aDtcblx0XHRcdHZhciBwcm9wZXJ0eTtcblxuXHRcdFx0d2hpbGUoaS0tKSB7XG5cdFx0XHRcdHByb3BlcnR5ID0gcHJvcGVydGllc1tpXTtcblx0XHRcdFx0ZVtwcm9wZXJ0eV0gPSBlLm9yaWdpbmFsRXZlbnRbcHJvcGVydHldO1xuXHRcdFx0fVxuXG5cdFx0XHRoYW5kbGVyLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG5cdFx0fTtcblx0fVxuXG5cdGpRdWVyeS5ldmVudC5zcGVjaWFsLm1vdmVzdGFydCA9IHtcblx0XHRzZXR1cDogZnVuY3Rpb24oKSB7XG5cdFx0XHQvLyBNb3Zlc3RhcnQgbXVzdCBiZSBlbmFibGVkIHRvIGFsbG93IG90aGVyIG1vdmUgZXZlbnRzXG5cdFx0XHRvbih0aGlzLCAnbW92ZXN0YXJ0JywgZW5hYmxlTW92ZTEpO1xuXG5cdFx0XHQvLyBEbyBsaXN0ZW4gdG8gRE9NIGV2ZW50c1xuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH0sXG5cblx0XHR0ZWFyZG93bjogZnVuY3Rpb24oKSB7XG5cdFx0XHRvZmYodGhpcywgJ21vdmVzdGFydCcsIGVuYWJsZU1vdmUxKTtcblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9LFxuXG5cdFx0YWRkOiBhZGRcblx0fTtcblxuXHRqUXVlcnkuZXZlbnQuc3BlY2lhbC5tb3ZlID0ge1xuXHRcdHNldHVwOiBmdW5jdGlvbigpIHtcblx0XHRcdG9uKHRoaXMsICdtb3Zlc3RhcnQnLCBlbmFibGVNb3ZlMik7XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fSxcblxuXHRcdHRlYXJkb3duOiBmdW5jdGlvbigpIHtcblx0XHRcdG9mZih0aGlzLCAnbW92ZXN0YXJ0JywgZW5hYmxlTW92ZTIpO1xuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH0sXG5cblx0XHRhZGQ6IGFkZFxuXHR9O1xuXG5cdGpRdWVyeS5ldmVudC5zcGVjaWFsLm1vdmVlbmQgPSB7XG5cdFx0c2V0dXA6IGZ1bmN0aW9uKCkge1xuXHRcdFx0b24odGhpcywgJ21vdmVzdGFydCcsIGVuYWJsZU1vdmUzKTtcblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9LFxuXG5cdFx0dGVhcmRvd246IGZ1bmN0aW9uKCkge1xuXHRcdFx0b2ZmKHRoaXMsICdtb3Zlc3RhcnQnLCBlbmFibGVNb3ZlMyk7XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fSxcblxuXHRcdGFkZDogYWRkXG5cdH07XG59KTtcblxuLy8galF1ZXJ5IE1hc2sgUGx1Z2luIHYxLjE0LjE2XG4vLyBnaXRodWIuY29tL2lnb3Jlc2NvYmFyL2pRdWVyeS1NYXNrLVBsdWdpblxuLy8gdmFyICRqc2NvbXA9JGpzY29tcHx8e307JGpzY29tcC5zY29wZT17fTskanNjb21wLmZpbmRJbnRlcm5hbD1mdW5jdGlvbihhLG4sZil7YSBpbnN0YW5jZW9mIFN0cmluZyYmKGE9U3RyaW5nKGEpKTtmb3IodmFyIHA9YS5sZW5ndGgsaz0wO2s8cDtrKyspe3ZhciBiPWFba107aWYobi5jYWxsKGYsYixrLGEpKXJldHVybntpOmssdjpifX1yZXR1cm57aTotMSx2OnZvaWQgMH19OyRqc2NvbXAuQVNTVU1FX0VTNT0hMTskanNjb21wLkFTU1VNRV9OT19OQVRJVkVfTUFQPSExOyRqc2NvbXAuQVNTVU1FX05PX05BVElWRV9TRVQ9ITE7JGpzY29tcC5TSU1QTEVfRlJPVU5EX1BPTFlGSUxMPSExO1xuLy8gJGpzY29tcC5kZWZpbmVQcm9wZXJ0eT0kanNjb21wLkFTU1VNRV9FUzV8fFwiZnVuY3Rpb25cIj09dHlwZW9mIE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzP09iamVjdC5kZWZpbmVQcm9wZXJ0eTpmdW5jdGlvbihhLG4sZil7YSE9QXJyYXkucHJvdG90eXBlJiZhIT1PYmplY3QucHJvdG90eXBlJiYoYVtuXT1mLnZhbHVlKX07JGpzY29tcC5nZXRHbG9iYWw9ZnVuY3Rpb24oYSl7cmV0dXJuXCJ1bmRlZmluZWRcIiE9dHlwZW9mIHdpbmRvdyYmd2luZG93PT09YT9hOlwidW5kZWZpbmVkXCIhPXR5cGVvZiBnbG9iYWwmJm51bGwhPWdsb2JhbD9nbG9iYWw6YX07JGpzY29tcC5nbG9iYWw9JGpzY29tcC5nZXRHbG9iYWwodGhpcyk7XG4vLyAkanNjb21wLnBvbHlmaWxsPWZ1bmN0aW9uKGEsbixmLHApe2lmKG4pe2Y9JGpzY29tcC5nbG9iYWw7YT1hLnNwbGl0KFwiLlwiKTtmb3IocD0wO3A8YS5sZW5ndGgtMTtwKyspe3ZhciBrPWFbcF07ayBpbiBmfHwoZltrXT17fSk7Zj1mW2tdfWE9YVthLmxlbmd0aC0xXTtwPWZbYV07bj1uKHApO24hPXAmJm51bGwhPW4mJiRqc2NvbXAuZGVmaW5lUHJvcGVydHkoZixhLHtjb25maWd1cmFibGU6ITAsd3JpdGFibGU6ITAsdmFsdWU6bn0pfX07JGpzY29tcC5wb2x5ZmlsbChcIkFycmF5LnByb3RvdHlwZS5maW5kXCIsZnVuY3Rpb24oYSl7cmV0dXJuIGE/YTpmdW5jdGlvbihhLGYpe3JldHVybiAkanNjb21wLmZpbmRJbnRlcm5hbCh0aGlzLGEsZikudn19LFwiZXM2XCIsXCJlczNcIik7XG4vLyAoZnVuY3Rpb24oYSxuLGYpe1wiZnVuY3Rpb25cIj09PXR5cGVvZiBkZWZpbmUmJmRlZmluZS5hbWQ/ZGVmaW5lKFtcImpxdWVyeVwiXSxhKTpcIm9iamVjdFwiPT09dHlwZW9mIGV4cG9ydHMmJlwidW5kZWZpbmVkXCI9PT10eXBlb2YgTWV0ZW9yP21vZHVsZS5leHBvcnRzPWEocmVxdWlyZShcImpxdWVyeVwiKSk6YShufHxmKX0pKGZ1bmN0aW9uKGEpe3ZhciBuPWZ1bmN0aW9uKGIsZCxlKXt2YXIgYz17aW52YWxpZDpbXSxnZXRDYXJldDpmdW5jdGlvbigpe3RyeXt2YXIgYT0wLHI9Yi5nZXQoMCksaD1kb2N1bWVudC5zZWxlY3Rpb24sZD1yLnNlbGVjdGlvblN0YXJ0O2lmKGgmJi0xPT09bmF2aWdhdG9yLmFwcFZlcnNpb24uaW5kZXhPZihcIk1TSUUgMTBcIikpe3ZhciBlPWguY3JlYXRlUmFuZ2UoKTtlLm1vdmVTdGFydChcImNoYXJhY3RlclwiLC1jLnZhbCgpLmxlbmd0aCk7YT1lLnRleHQubGVuZ3RofWVsc2UgaWYoZHx8XCIwXCI9PT1kKWE9ZDtyZXR1cm4gYX1jYXRjaChDKXt9fSxzZXRDYXJldDpmdW5jdGlvbihhKXt0cnl7aWYoYi5pcyhcIjpmb2N1c1wiKSl7dmFyIGM9XG4vLyBiLmdldCgwKTtpZihjLnNldFNlbGVjdGlvblJhbmdlKWMuc2V0U2VsZWN0aW9uUmFuZ2UoYSxhKTtlbHNle3ZhciBnPWMuY3JlYXRlVGV4dFJhbmdlKCk7Zy5jb2xsYXBzZSghMCk7Zy5tb3ZlRW5kKFwiY2hhcmFjdGVyXCIsYSk7Zy5tb3ZlU3RhcnQoXCJjaGFyYWN0ZXJcIixhKTtnLnNlbGVjdCgpfX19Y2F0Y2goQil7fX0sZXZlbnRzOmZ1bmN0aW9uKCl7Yi5vbihcImtleWRvd24ubWFza1wiLGZ1bmN0aW9uKGEpe2IuZGF0YShcIm1hc2sta2V5Y29kZVwiLGEua2V5Q29kZXx8YS53aGljaCk7Yi5kYXRhKFwibWFzay1wcmV2aXVzLXZhbHVlXCIsYi52YWwoKSk7Yi5kYXRhKFwibWFzay1wcmV2aXVzLWNhcmV0LXBvc1wiLGMuZ2V0Q2FyZXQoKSk7Yy5tYXNrRGlnaXRQb3NNYXBPbGQ9Yy5tYXNrRGlnaXRQb3NNYXB9KS5vbihhLmpNYXNrR2xvYmFscy51c2VJbnB1dD9cImlucHV0Lm1hc2tcIjpcImtleXVwLm1hc2tcIixjLmJlaGF2aW91cikub24oXCJwYXN0ZS5tYXNrIGRyb3AubWFza1wiLGZ1bmN0aW9uKCl7c2V0VGltZW91dChmdW5jdGlvbigpe2Iua2V5ZG93bigpLmtleXVwKCl9LFxuLy8gMTAwKX0pLm9uKFwiY2hhbmdlLm1hc2tcIixmdW5jdGlvbigpe2IuZGF0YShcImNoYW5nZWRcIiwhMCl9KS5vbihcImJsdXIubWFza1wiLGZ1bmN0aW9uKCl7Zj09PWMudmFsKCl8fGIuZGF0YShcImNoYW5nZWRcIil8fGIudHJpZ2dlcihcImNoYW5nZVwiKTtiLmRhdGEoXCJjaGFuZ2VkXCIsITEpfSkub24oXCJibHVyLm1hc2tcIixmdW5jdGlvbigpe2Y9Yy52YWwoKX0pLm9uKFwiZm9jdXMubWFza1wiLGZ1bmN0aW9uKGIpeyEwPT09ZS5zZWxlY3RPbkZvY3VzJiZhKGIudGFyZ2V0KS5zZWxlY3QoKX0pLm9uKFwiZm9jdXNvdXQubWFza1wiLGZ1bmN0aW9uKCl7ZS5jbGVhcklmTm90TWF0Y2gmJiFrLnRlc3QoYy52YWwoKSkmJmMudmFsKFwiXCIpfSl9LGdldFJlZ2V4TWFzazpmdW5jdGlvbigpe2Zvcih2YXIgYT1bXSxiLGMsZSx0LGY9MDtmPGQubGVuZ3RoO2YrKykoYj1sLnRyYW5zbGF0aW9uW2QuY2hhckF0KGYpXSk/KGM9Yi5wYXR0ZXJuLnRvU3RyaW5nKCkucmVwbGFjZSgvLnsxfSR8Xi57MX0vZyxcIlwiKSxlPWIub3B0aW9uYWwsXG4vLyAoYj1iLnJlY3Vyc2l2ZSk/KGEucHVzaChkLmNoYXJBdChmKSksdD17ZGlnaXQ6ZC5jaGFyQXQoZikscGF0dGVybjpjfSk6YS5wdXNoKGV8fGI/YytcIj9cIjpjKSk6YS5wdXNoKGQuY2hhckF0KGYpLnJlcGxhY2UoL1stXFwvXFxcXF4kKis/LigpfFtcXF17fV0vZyxcIlxcXFwkJlwiKSk7YT1hLmpvaW4oXCJcIik7dCYmKGE9YS5yZXBsYWNlKG5ldyBSZWdFeHAoXCIoXCIrdC5kaWdpdCtcIiguKlwiK3QuZGlnaXQrXCIpPylcIiksXCIoJDEpP1wiKS5yZXBsYWNlKG5ldyBSZWdFeHAodC5kaWdpdCxcImdcIiksdC5wYXR0ZXJuKSk7cmV0dXJuIG5ldyBSZWdFeHAoYSl9LGRlc3Ryb3lFdmVudHM6ZnVuY3Rpb24oKXtiLm9mZihcImlucHV0IGtleWRvd24ga2V5dXAgcGFzdGUgZHJvcCBibHVyIGZvY3Vzb3V0IFwiLnNwbGl0KFwiIFwiKS5qb2luKFwiLm1hc2sgXCIpKX0sdmFsOmZ1bmN0aW9uKGEpe3ZhciBjPWIuaXMoXCJpbnB1dFwiKT9cInZhbFwiOlwidGV4dFwiO2lmKDA8YXJndW1lbnRzLmxlbmd0aCl7aWYoYltjXSgpIT09YSliW2NdKGEpO1xuLy8gYz1ifWVsc2UgYz1iW2NdKCk7cmV0dXJuIGN9LGNhbGN1bGF0ZUNhcmV0UG9zaXRpb246ZnVuY3Rpb24oYSl7dmFyIGQ9Yy5nZXRNYXNrZWQoKSxoPWMuZ2V0Q2FyZXQoKTtpZihhIT09ZCl7dmFyIGU9Yi5kYXRhKFwibWFzay1wcmV2aXVzLWNhcmV0LXBvc1wiKXx8MDtkPWQubGVuZ3RoO3ZhciBnPWEubGVuZ3RoLGY9YT0wLGw9MCxrPTAsbTtmb3IobT1oO208ZCYmYy5tYXNrRGlnaXRQb3NNYXBbbV07bSsrKWYrKztmb3IobT1oLTE7MDw9bSYmYy5tYXNrRGlnaXRQb3NNYXBbbV07bS0tKWErKztmb3IobT1oLTE7MDw9bTttLS0pYy5tYXNrRGlnaXRQb3NNYXBbbV0mJmwrKztmb3IobT1lLTE7MDw9bTttLS0pYy5tYXNrRGlnaXRQb3NNYXBPbGRbbV0mJmsrKztoPmc/aD0xMCpkOmU+PWgmJmUhPT1nP2MubWFza0RpZ2l0UG9zTWFwT2xkW2hdfHwoZT1oLGg9aC0oay1sKS1hLGMubWFza0RpZ2l0UG9zTWFwW2hdJiYoaD1lKSk6aD5lJiYoaD1oKyhsLWspK2YpfXJldHVybiBofSxiZWhhdmlvdXI6ZnVuY3Rpb24oZCl7ZD1cbi8vIGR8fHdpbmRvdy5ldmVudDtjLmludmFsaWQ9W107dmFyIGU9Yi5kYXRhKFwibWFzay1rZXljb2RlXCIpO2lmKC0xPT09YS5pbkFycmF5KGUsbC5ieVBhc3NLZXlzKSl7ZT1jLmdldE1hc2tlZCgpO3ZhciBoPWMuZ2V0Q2FyZXQoKSxnPWIuZGF0YShcIm1hc2stcHJldml1cy12YWx1ZVwiKXx8XCJcIjtzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7Yy5zZXRDYXJldChjLmNhbGN1bGF0ZUNhcmV0UG9zaXRpb24oZykpfSxhLmpNYXNrR2xvYmFscy5rZXlTdHJva2VDb21wZW5zYXRpb24pO2MudmFsKGUpO2Muc2V0Q2FyZXQoaCk7cmV0dXJuIGMuY2FsbGJhY2tzKGQpfX0sZ2V0TWFza2VkOmZ1bmN0aW9uKGEsYil7dmFyIGg9W10sZj12b2lkIDA9PT1iP2MudmFsKCk6YitcIlwiLGc9MCxrPWQubGVuZ3RoLG49MCxwPWYubGVuZ3RoLG09MSxyPVwicHVzaFwiLHU9LTEsdz0wO2I9W107aWYoZS5yZXZlcnNlKXtyPVwidW5zaGlmdFwiO209LTE7dmFyIHg9MDtnPWstMTtuPXAtMTt2YXIgQT1mdW5jdGlvbigpe3JldHVybi0xPFxuLy8gZyYmLTE8bn19ZWxzZSB4PWstMSxBPWZ1bmN0aW9uKCl7cmV0dXJuIGc8ayYmbjxwfTtmb3IodmFyIHo7QSgpOyl7dmFyIHk9ZC5jaGFyQXQoZyksdj1mLmNoYXJBdChuKSxxPWwudHJhbnNsYXRpb25beV07aWYocSl2Lm1hdGNoKHEucGF0dGVybik/KGhbcl0odikscS5yZWN1cnNpdmUmJigtMT09PXU/dT1nOmc9PT14JiZnIT09dSYmKGc9dS1tKSx4PT09dSYmKGctPW0pKSxnKz1tKTp2PT09ej8ody0tLHo9dm9pZCAwKTpxLm9wdGlvbmFsPyhnKz1tLG4tPW0pOnEuZmFsbGJhY2s/KGhbcl0ocS5mYWxsYmFjayksZys9bSxuLT1tKTpjLmludmFsaWQucHVzaCh7cDpuLHY6dixlOnEucGF0dGVybn0pLG4rPW07ZWxzZXtpZighYSloW3JdKHkpO3Y9PT15PyhiLnB1c2gobiksbis9bSk6KHo9eSxiLnB1c2gobit3KSx3KyspO2crPW19fWE9ZC5jaGFyQXQoeCk7ayE9PXArMXx8bC50cmFuc2xhdGlvblthXXx8aC5wdXNoKGEpO2g9aC5qb2luKFwiXCIpO2MubWFwTWFza2RpZ2l0UG9zaXRpb25zKGgsXG4vLyBiLHApO3JldHVybiBofSxtYXBNYXNrZGlnaXRQb3NpdGlvbnM6ZnVuY3Rpb24oYSxiLGQpe2E9ZS5yZXZlcnNlP2EubGVuZ3RoLWQ6MDtjLm1hc2tEaWdpdFBvc01hcD17fTtmb3IoZD0wO2Q8Yi5sZW5ndGg7ZCsrKWMubWFza0RpZ2l0UG9zTWFwW2JbZF0rYV09MX0sY2FsbGJhY2tzOmZ1bmN0aW9uKGEpe3ZhciBnPWMudmFsKCksaD1nIT09ZixrPVtnLGEsYixlXSxsPWZ1bmN0aW9uKGEsYixjKXtcImZ1bmN0aW9uXCI9PT10eXBlb2YgZVthXSYmYiYmZVthXS5hcHBseSh0aGlzLGMpfTtsKFwib25DaGFuZ2VcIiwhMD09PWgsayk7bChcIm9uS2V5UHJlc3NcIiwhMD09PWgsayk7bChcIm9uQ29tcGxldGVcIixnLmxlbmd0aD09PWQubGVuZ3RoLGspO2woXCJvbkludmFsaWRcIiwwPGMuaW52YWxpZC5sZW5ndGgsW2csYSxiLGMuaW52YWxpZCxlXSl9fTtiPWEoYik7dmFyIGw9dGhpcyxmPWMudmFsKCksaztkPVwiZnVuY3Rpb25cIj09PXR5cGVvZiBkP2QoYy52YWwoKSx2b2lkIDAsYixlKTpkO2wubWFzaz1cbi8vIGQ7bC5vcHRpb25zPWU7bC5yZW1vdmU9ZnVuY3Rpb24oKXt2YXIgYT1jLmdldENhcmV0KCk7bC5vcHRpb25zLnBsYWNlaG9sZGVyJiZiLnJlbW92ZUF0dHIoXCJwbGFjZWhvbGRlclwiKTtiLmRhdGEoXCJtYXNrLW1heGxlbmd0aFwiKSYmYi5yZW1vdmVBdHRyKFwibWF4bGVuZ3RoXCIpO2MuZGVzdHJveUV2ZW50cygpO2MudmFsKGwuZ2V0Q2xlYW5WYWwoKSk7Yy5zZXRDYXJldChhKTtyZXR1cm4gYn07bC5nZXRDbGVhblZhbD1mdW5jdGlvbigpe3JldHVybiBjLmdldE1hc2tlZCghMCl9O2wuZ2V0TWFza2VkVmFsPWZ1bmN0aW9uKGEpe3JldHVybiBjLmdldE1hc2tlZCghMSxhKX07bC5pbml0PWZ1bmN0aW9uKGcpe2c9Z3x8ITE7ZT1lfHx7fTtsLmNsZWFySWZOb3RNYXRjaD1hLmpNYXNrR2xvYmFscy5jbGVhcklmTm90TWF0Y2g7bC5ieVBhc3NLZXlzPWEuak1hc2tHbG9iYWxzLmJ5UGFzc0tleXM7bC50cmFuc2xhdGlvbj1hLmV4dGVuZCh7fSxhLmpNYXNrR2xvYmFscy50cmFuc2xhdGlvbixlLnRyYW5zbGF0aW9uKTtcbi8vIGw9YS5leHRlbmQoITAse30sbCxlKTtrPWMuZ2V0UmVnZXhNYXNrKCk7aWYoZyljLmV2ZW50cygpLGMudmFsKGMuZ2V0TWFza2VkKCkpO2Vsc2V7ZS5wbGFjZWhvbGRlciYmYi5hdHRyKFwicGxhY2Vob2xkZXJcIixlLnBsYWNlaG9sZGVyKTtiLmRhdGEoXCJtYXNrXCIpJiZiLmF0dHIoXCJhdXRvY29tcGxldGVcIixcIm9mZlwiKTtnPTA7Zm9yKHZhciBmPSEwO2c8ZC5sZW5ndGg7ZysrKXt2YXIgaD1sLnRyYW5zbGF0aW9uW2QuY2hhckF0KGcpXTtpZihoJiZoLnJlY3Vyc2l2ZSl7Zj0hMTticmVha319ZiYmYi5hdHRyKFwibWF4bGVuZ3RoXCIsZC5sZW5ndGgpLmRhdGEoXCJtYXNrLW1heGxlbmd0aFwiLCEwKTtjLmRlc3Ryb3lFdmVudHMoKTtjLmV2ZW50cygpO2c9Yy5nZXRDYXJldCgpO2MudmFsKGMuZ2V0TWFza2VkKCkpO2Muc2V0Q2FyZXQoZyl9fTtsLmluaXQoIWIuaXMoXCJpbnB1dFwiKSl9O2EubWFza1dhdGNoZXJzPXt9O3ZhciBmPWZ1bmN0aW9uKCl7dmFyIGI9YSh0aGlzKSxkPXt9LGU9Yi5hdHRyKFwiZGF0YS1tYXNrXCIpO1xuLy8gYi5hdHRyKFwiZGF0YS1tYXNrLXJldmVyc2VcIikmJihkLnJldmVyc2U9ITApO2IuYXR0cihcImRhdGEtbWFzay1jbGVhcmlmbm90bWF0Y2hcIikmJihkLmNsZWFySWZOb3RNYXRjaD0hMCk7XCJ0cnVlXCI9PT1iLmF0dHIoXCJkYXRhLW1hc2stc2VsZWN0b25mb2N1c1wiKSYmKGQuc2VsZWN0T25Gb2N1cz0hMCk7aWYocChiLGUsZCkpcmV0dXJuIGIuZGF0YShcIm1hc2tcIixuZXcgbih0aGlzLGUsZCkpfSxwPWZ1bmN0aW9uKGIsZCxlKXtlPWV8fHt9O3ZhciBjPWEoYikuZGF0YShcIm1hc2tcIiksZj1KU09OLnN0cmluZ2lmeTtiPWEoYikudmFsKCl8fGEoYikudGV4dCgpO3RyeXtyZXR1cm5cImZ1bmN0aW9uXCI9PT10eXBlb2YgZCYmKGQ9ZChiKSksXCJvYmplY3RcIiE9PXR5cGVvZiBjfHxmKGMub3B0aW9ucykhPT1mKGUpfHxjLm1hc2shPT1kfWNhdGNoKHcpe319LGs9ZnVuY3Rpb24oYSl7dmFyIGI9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTthPVwib25cIithO3ZhciBlPWEgaW4gYjtlfHwoYi5zZXRBdHRyaWJ1dGUoYSxcbi8vIFwicmV0dXJuO1wiKSxlPVwiZnVuY3Rpb25cIj09PXR5cGVvZiBiW2FdKTtyZXR1cm4gZX07YS5mbi5tYXNrPWZ1bmN0aW9uKGIsZCl7ZD1kfHx7fTt2YXIgZT10aGlzLnNlbGVjdG9yLGM9YS5qTWFza0dsb2JhbHMsZj1jLndhdGNoSW50ZXJ2YWw7Yz1kLndhdGNoSW5wdXRzfHxjLndhdGNoSW5wdXRzO3ZhciBrPWZ1bmN0aW9uKCl7aWYocCh0aGlzLGIsZCkpcmV0dXJuIGEodGhpcykuZGF0YShcIm1hc2tcIixuZXcgbih0aGlzLGIsZCkpfTthKHRoaXMpLmVhY2goayk7ZSYmXCJcIiE9PWUmJmMmJihjbGVhckludGVydmFsKGEubWFza1dhdGNoZXJzW2VdKSxhLm1hc2tXYXRjaGVyc1tlXT1zZXRJbnRlcnZhbChmdW5jdGlvbigpe2EoZG9jdW1lbnQpLmZpbmQoZSkuZWFjaChrKX0sZikpO3JldHVybiB0aGlzfTthLmZuLm1hc2tlZD1mdW5jdGlvbihhKXtyZXR1cm4gdGhpcy5kYXRhKFwibWFza1wiKS5nZXRNYXNrZWRWYWwoYSl9O2EuZm4udW5tYXNrPWZ1bmN0aW9uKCl7Y2xlYXJJbnRlcnZhbChhLm1hc2tXYXRjaGVyc1t0aGlzLnNlbGVjdG9yXSk7XG4vLyBkZWxldGUgYS5tYXNrV2F0Y2hlcnNbdGhpcy5zZWxlY3Rvcl07cmV0dXJuIHRoaXMuZWFjaChmdW5jdGlvbigpe3ZhciBiPWEodGhpcykuZGF0YShcIm1hc2tcIik7YiYmYi5yZW1vdmUoKS5yZW1vdmVEYXRhKFwibWFza1wiKX0pfTthLmZuLmNsZWFuVmFsPWZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuZGF0YShcIm1hc2tcIikuZ2V0Q2xlYW5WYWwoKX07YS5hcHBseURhdGFNYXNrPWZ1bmN0aW9uKGIpe2I9Ynx8YS5qTWFza0dsb2JhbHMubWFza0VsZW1lbnRzOyhiIGluc3RhbmNlb2YgYT9iOmEoYikpLmZpbHRlcihhLmpNYXNrR2xvYmFscy5kYXRhTWFza0F0dHIpLmVhY2goZil9O2s9e21hc2tFbGVtZW50czpcImlucHV0LHRkLHNwYW4sZGl2XCIsZGF0YU1hc2tBdHRyOlwiKltkYXRhLW1hc2tdXCIsZGF0YU1hc2s6ITAsd2F0Y2hJbnRlcnZhbDozMDAsd2F0Y2hJbnB1dHM6ITAsa2V5U3Ryb2tlQ29tcGVuc2F0aW9uOjEwLHVzZUlucHV0OiEvQ2hyb21lXFwvWzItNF1bMC05XXxTYW1zdW5nQnJvd3Nlci8udGVzdCh3aW5kb3cubmF2aWdhdG9yLnVzZXJBZ2VudCkmJlxuLy8gayhcImlucHV0XCIpLHdhdGNoRGF0YU1hc2s6ITEsYnlQYXNzS2V5czpbOSwxNiwxNywxOCwzNiwzNywzOCwzOSw0MCw5MV0sdHJhbnNsYXRpb246ezA6e3BhdHRlcm46L1xcZC99LDk6e3BhdHRlcm46L1xcZC8sb3B0aW9uYWw6ITB9LFwiI1wiOntwYXR0ZXJuOi9cXGQvLHJlY3Vyc2l2ZTohMH0sQTp7cGF0dGVybjovW2EtekEtWjAtOV0vfSxTOntwYXR0ZXJuOi9bYS16QS1aXS99fX07YS5qTWFza0dsb2JhbHM9YS5qTWFza0dsb2JhbHN8fHt9O2s9YS5qTWFza0dsb2JhbHM9YS5leHRlbmQoITAse30sayxhLmpNYXNrR2xvYmFscyk7ay5kYXRhTWFzayYmYS5hcHBseURhdGFNYXNrKCk7c2V0SW50ZXJ2YWwoZnVuY3Rpb24oKXthLmpNYXNrR2xvYmFscy53YXRjaERhdGFNYXNrJiZhLmFwcGx5RGF0YU1hc2soKX0say53YXRjaEludGVydmFsKX0sd2luZG93LmpRdWVyeSx3aW5kb3cuWmVwdG8pO1xuXG4vKiAgalF1ZXJ5IE5pY2UgU2VsZWN0IC0gdjEuMS4wXG4gICAgaHR0cHM6Ly9naXRodWIuY29tL2hlcm5hbnNhcnRvcmlvL2pxdWVyeS1uaWNlLXNlbGVjdFxuICAgIE1hZGUgYnkgSGVybsOhbiBTYXJ0b3JpbyAgKi9cblxuKGZ1bmN0aW9uKCQpIHtcblxuICAkLmZuLm5pY2VTZWxlY3QgPSBmdW5jdGlvbihtZXRob2QpIHtcblxuICAgIC8vIE1ldGhvZHNcbiAgICBpZiAodHlwZW9mIG1ldGhvZCA9PSAnc3RyaW5nJykge1xuICAgICAgaWYgKG1ldGhvZCA9PSAndXBkYXRlJykge1xuICAgICAgICB0aGlzLmVhY2goZnVuY3Rpb24oKSB7XG4gICAgICAgICAgdmFyICRzZWxlY3QgPSAkKHRoaXMpO1xuICAgICAgICAgIHZhciAkZHJvcGRvd24gPSAkKHRoaXMpLm5leHQoJy5uaWNlLXNlbGVjdCcpO1xuICAgICAgICAgIHZhciBvcGVuID0gJGRyb3Bkb3duLmhhc0NsYXNzKCdvcGVuJyk7XG5cbiAgICAgICAgICBpZiAoJGRyb3Bkb3duLmxlbmd0aCkge1xuICAgICAgICAgICAgJGRyb3Bkb3duLnJlbW92ZSgpO1xuICAgICAgICAgICAgY3JlYXRlX25pY2Vfc2VsZWN0KCRzZWxlY3QpO1xuXG4gICAgICAgICAgICBpZiAob3Blbikge1xuICAgICAgICAgICAgICAkc2VsZWN0Lm5leHQoKS50cmlnZ2VyKCdjbGljaycpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9IGVsc2UgaWYgKG1ldGhvZCA9PSAnZGVzdHJveScpIHtcbiAgICAgICAgdGhpcy5lYWNoKGZ1bmN0aW9uKCkge1xuICAgICAgICAgIHZhciAkc2VsZWN0ID0gJCh0aGlzKTtcbiAgICAgICAgICB2YXIgJGRyb3Bkb3duID0gJCh0aGlzKS5uZXh0KCcubmljZS1zZWxlY3QnKTtcblxuICAgICAgICAgIGlmICgkZHJvcGRvd24ubGVuZ3RoKSB7XG4gICAgICAgICAgICAkZHJvcGRvd24ucmVtb3ZlKCk7XG4gICAgICAgICAgICAkc2VsZWN0LmNzcygnZGlzcGxheScsICcnKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICBpZiAoJCgnLm5pY2Utc2VsZWN0JykubGVuZ3RoID09IDApIHtcbiAgICAgICAgICAkKGRvY3VtZW50KS5vZmYoJy5uaWNlX3NlbGVjdCcpO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuLy8gICAgICAgICBjb25zb2xlLmxvZygnTWV0aG9kIFwiJyArIG1ldGhvZCArICdcIiBkb2VzIG5vdCBleGlzdC4nKVxuICAgICAgfVxuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgLy8gSGlkZSBuYXRpdmUgc2VsZWN0XG4gICAgdGhpcy5oaWRlKCk7XG5cbiAgICAvLyBDcmVhdGUgY3VzdG9tIG1hcmt1cFxuICAgIHRoaXMuZWFjaChmdW5jdGlvbigpIHtcbiAgICAgIHZhciAkc2VsZWN0ID0gJCh0aGlzKTtcblxuICAgICAgaWYgKCEkc2VsZWN0Lm5leHQoKS5oYXNDbGFzcygnbmljZS1zZWxlY3QnKSkge1xuICAgICAgICBjcmVhdGVfbmljZV9zZWxlY3QoJHNlbGVjdCk7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBmdW5jdGlvbiBjcmVhdGVfbmljZV9zZWxlY3QoJHNlbGVjdCkge1xuICAgICAgJHNlbGVjdC5hZnRlcigkKCc8ZGl2PjwvZGl2PicpXG4gICAgICAgIC5hZGRDbGFzcygnbmljZS1zZWxlY3QnKVxuICAgICAgICAuYWRkQ2xhc3MoJHNlbGVjdC5hdHRyKCdjbGFzcycpIHx8ICcnKVxuICAgICAgICAuYWRkQ2xhc3MoJHNlbGVjdC5hdHRyKCdkaXNhYmxlZCcpID8gJ2Rpc2FibGVkJyA6ICcnKVxuICAgICAgICAuYXR0cigndGFiaW5kZXgnLCAkc2VsZWN0LmF0dHIoJ2Rpc2FibGVkJykgPyBudWxsIDogJzAnKVxuICAgICAgICAuaHRtbCgnPHNwYW4gY2xhc3M9XCJjdXJyZW50XCI+PC9zcGFuPjx1bCBjbGFzcz1cImxpc3RcIj48L3VsPicpXG4gICAgICApO1xuXG4gICAgICB2YXIgJGRyb3Bkb3duID0gJHNlbGVjdC5uZXh0KCk7XG4gICAgICB2YXIgJG9wdGlvbnMgPSAkc2VsZWN0LmZpbmQoJ29wdGlvbicpO1xuICAgICAgdmFyICRzZWxlY3RlZCA9ICRzZWxlY3QuZmluZCgnb3B0aW9uOnNlbGVjdGVkJyk7XG5cbiAgICAgICRkcm9wZG93bi5maW5kKCcuY3VycmVudCcpLmh0bWwoJHNlbGVjdGVkLmRhdGEoJ2Rpc3BsYXknKSB8fMKgJHNlbGVjdGVkLnRleHQoKSk7XG5cbiAgICAgICRvcHRpb25zLmVhY2goZnVuY3Rpb24oaSkge1xuICAgICAgICB2YXIgJG9wdGlvbiA9ICQodGhpcyk7XG4gICAgICAgIHZhciBkaXNwbGF5ID0gJG9wdGlvbi5kYXRhKCdkaXNwbGF5Jyk7XG5cbiAgICAgICAgJGRyb3Bkb3duLmZpbmQoJ3VsJykuYXBwZW5kKCQoJzxsaT48L2xpPicpXG4gICAgICAgICAgLmF0dHIoJ2RhdGEtdmFsdWUnLCAkb3B0aW9uLnZhbCgpKVxuICAgICAgICAgIC5hdHRyKCdkYXRhLWRpc3BsYXknLCAoZGlzcGxheSB8fCBudWxsKSlcbiAgICAgICAgICAuYWRkQ2xhc3MoJ29wdGlvbicgK1xuICAgICAgICAgICAgKCRvcHRpb24uaXMoJzpzZWxlY3RlZCcpID8gJyBzZWxlY3RlZCcgOiAnJykgK1xuICAgICAgICAgICAgKCRvcHRpb24uaXMoJzpkaXNhYmxlZCcpID8gJyBkaXNhYmxlZCcgOiAnJykpXG4gICAgICAgICAgLmh0bWwoJG9wdGlvbi50ZXh0KCkpXG4gICAgICAgICk7XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICAvKiBFdmVudCBsaXN0ZW5lcnMgKi9cblxuICAgIC8vIFVuYmluZCBleGlzdGluZyBldmVudHMgaW4gY2FzZSB0aGF0IHRoZSBwbHVnaW4gaGFzIGJlZW4gaW5pdGlhbGl6ZWQgYmVmb3JlXG4gICAgJChkb2N1bWVudCkub2ZmKCcubmljZV9zZWxlY3QnKTtcblxuICAgIC8vIE9wZW4vY2xvc2VcbiAgICAkKGRvY3VtZW50KS5vbignY2xpY2submljZV9zZWxlY3QnLCAnLm5pY2Utc2VsZWN0JywgZnVuY3Rpb24oZXZlbnQpIHtcbiAgICAgIHZhciAkZHJvcGRvd24gPSAkKHRoaXMpO1xuXG4gICAgICAkKCcubmljZS1zZWxlY3QnKS5ub3QoJGRyb3Bkb3duKS5yZW1vdmVDbGFzcygnb3BlbicpO1xuICAgICAgJGRyb3Bkb3duLnRvZ2dsZUNsYXNzKCdvcGVuJyk7XG5cbiAgICAgIGlmICgkZHJvcGRvd24uaGFzQ2xhc3MoJ29wZW4nKSkge1xuICAgICAgICAkZHJvcGRvd24uZmluZCgnLm9wdGlvbicpO1xuICAgICAgICAkZHJvcGRvd24uZmluZCgnLmZvY3VzJykucmVtb3ZlQ2xhc3MoJ2ZvY3VzJyk7XG4gICAgICAgICRkcm9wZG93bi5maW5kKCcuc2VsZWN0ZWQnKS5hZGRDbGFzcygnZm9jdXMnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICRkcm9wZG93bi5mb2N1cygpO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgLy8gQ2xvc2Ugd2hlbiBjbGlja2luZyBvdXRzaWRlXG4gICAgJChkb2N1bWVudCkub24oJ2NsaWNrLm5pY2Vfc2VsZWN0JywgZnVuY3Rpb24oZXZlbnQpIHtcbiAgICAgIGlmICgkKGV2ZW50LnRhcmdldCkuY2xvc2VzdCgnLm5pY2Utc2VsZWN0JykubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICQoJy5uaWNlLXNlbGVjdCcpLnJlbW92ZUNsYXNzKCdvcGVuJykuZmluZCgnLm9wdGlvbicpO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgLy8gT3B0aW9uIGNsaWNrXG4gICAgJChkb2N1bWVudCkub24oJ2NsaWNrLm5pY2Vfc2VsZWN0JywgJy5uaWNlLXNlbGVjdCAub3B0aW9uOm5vdCguZGlzYWJsZWQpJywgZnVuY3Rpb24oZXZlbnQpIHtcbiAgICAgIHZhciAkb3B0aW9uID0gJCh0aGlzKTtcbiAgICAgIHZhciAkZHJvcGRvd24gPSAkb3B0aW9uLmNsb3Nlc3QoJy5uaWNlLXNlbGVjdCcpO1xuXG4gICAgICAkZHJvcGRvd24uZmluZCgnLnNlbGVjdGVkJykucmVtb3ZlQ2xhc3MoJ3NlbGVjdGVkJyk7XG4gICAgICAkb3B0aW9uLmFkZENsYXNzKCdzZWxlY3RlZCcpO1xuXG4gICAgICB2YXIgdGV4dCA9ICRvcHRpb24uZGF0YSgnZGlzcGxheScpIHx8ICRvcHRpb24udGV4dCgpO1xuICAgICAgJGRyb3Bkb3duLmZpbmQoJy5jdXJyZW50JykudGV4dCh0ZXh0KTtcblxuICAgICAgJGRyb3Bkb3duLnByZXYoJ3NlbGVjdCcpLnZhbCgkb3B0aW9uLmRhdGEoJ3ZhbHVlJykpLnRyaWdnZXIoJ2NoYW5nZScpO1xuICAgIH0pO1xuXG4gICAgLy8gS2V5Ym9hcmQgZXZlbnRzXG4gICAgJChkb2N1bWVudCkub24oJ2tleWRvd24ubmljZV9zZWxlY3QnLCAnLm5pY2Utc2VsZWN0JywgZnVuY3Rpb24oZXZlbnQpIHtcbiAgICAgIHZhciAkZHJvcGRvd24gPSAkKHRoaXMpO1xuICAgICAgdmFyICRmb2N1c2VkX29wdGlvbiA9ICQoJGRyb3Bkb3duLmZpbmQoJy5mb2N1cycpIHx8ICRkcm9wZG93bi5maW5kKCcubGlzdCAub3B0aW9uLnNlbGVjdGVkJykpO1xuXG4gICAgICAvLyBTcGFjZSBvciBFbnRlclxuICAgICAgaWYgKGV2ZW50LmtleUNvZGUgPT0gMzIgfHwgZXZlbnQua2V5Q29kZSA9PSAxMykge1xuICAgICAgICBpZiAoJGRyb3Bkb3duLmhhc0NsYXNzKCdvcGVuJykpIHtcbiAgICAgICAgICAkZm9jdXNlZF9vcHRpb24udHJpZ2dlcignY2xpY2snKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAkZHJvcGRvd24udHJpZ2dlcignY2xpY2snKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAvLyBEb3duXG4gICAgICB9IGVsc2UgaWYgKGV2ZW50LmtleUNvZGUgPT0gNDApIHtcbiAgICAgICAgaWYgKCEkZHJvcGRvd24uaGFzQ2xhc3MoJ29wZW4nKSkge1xuICAgICAgICAgICRkcm9wZG93bi50cmlnZ2VyKCdjbGljaycpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHZhciAkbmV4dCA9ICRmb2N1c2VkX29wdGlvbi5uZXh0QWxsKCcub3B0aW9uOm5vdCguZGlzYWJsZWQpJykuZmlyc3QoKTtcbiAgICAgICAgICBpZiAoJG5leHQubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgJGRyb3Bkb3duLmZpbmQoJy5mb2N1cycpLnJlbW92ZUNsYXNzKCdmb2N1cycpO1xuICAgICAgICAgICAgJG5leHQuYWRkQ2xhc3MoJ2ZvY3VzJyk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIC8vIFVwXG4gICAgICB9IGVsc2UgaWYgKGV2ZW50LmtleUNvZGUgPT0gMzgpIHtcbiAgICAgICAgaWYgKCEkZHJvcGRvd24uaGFzQ2xhc3MoJ29wZW4nKSkge1xuICAgICAgICAgICRkcm9wZG93bi50cmlnZ2VyKCdjbGljaycpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHZhciAkcHJldiA9ICRmb2N1c2VkX29wdGlvbi5wcmV2QWxsKCcub3B0aW9uOm5vdCguZGlzYWJsZWQpJykuZmlyc3QoKTtcbiAgICAgICAgICBpZiAoJHByZXYubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgJGRyb3Bkb3duLmZpbmQoJy5mb2N1cycpLnJlbW92ZUNsYXNzKCdmb2N1cycpO1xuICAgICAgICAgICAgJHByZXYuYWRkQ2xhc3MoJ2ZvY3VzJyk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIC8vIEVzY1xuICAgICAgfSBlbHNlIGlmIChldmVudC5rZXlDb2RlID09IDI3KSB7XG4gICAgICAgIGlmICgkZHJvcGRvd24uaGFzQ2xhc3MoJ29wZW4nKSkge1xuICAgICAgICAgICRkcm9wZG93bi50cmlnZ2VyKCdjbGljaycpO1xuICAgICAgICB9XG4gICAgICAvLyBUYWJcbiAgICAgIH0gZWxzZSBpZiAoZXZlbnQua2V5Q29kZSA9PSA5KSB7XG4gICAgICAgIGlmICgkZHJvcGRvd24uaGFzQ2xhc3MoJ29wZW4nKSkge1xuICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pO1xuXG4gICAgLy8gRGV0ZWN0IENTUyBwb2ludGVyLWV2ZW50cyBzdXBwb3J0LCBmb3IgSUUgPD0gMTAuIEZyb20gTW9kZXJuaXpyLlxuICAgIHZhciBzdHlsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKS5zdHlsZTtcbiAgICBzdHlsZS5jc3NUZXh0ID0gJ3BvaW50ZXItZXZlbnRzOmF1dG8nO1xuICAgIGlmIChzdHlsZS5wb2ludGVyRXZlbnRzICE9PSAnYXV0bycpIHtcbiAgICAgICQoJ2h0bWwnKS5hZGRDbGFzcygnbm8tY3NzcG9pbnRlcmV2ZW50cycpO1xuICAgIH1cblxuICAgIHJldHVybiB0aGlzO1xuXG4gIH07XG5cbn0oalF1ZXJ5KSk7XG4oZnVuY3Rpb24oJCl7XG5cbiAgJC5mbi50d2VudHl0d2VudHkgPSBmdW5jdGlvbihvcHRpb25zKSB7XG4gICAgdmFyIG9wdGlvbnMgPSAkLmV4dGVuZCh7XG4gICAgICBkZWZhdWx0X29mZnNldF9wY3Q6IDAuNSxcbiAgICAgIG9yaWVudGF0aW9uOiAnaG9yaXpvbnRhbCcsXG4gICAgICBiZWZvcmVfbGFiZWw6ICdCZWZvcmUnLFxuICAgICAgYWZ0ZXJfbGFiZWw6ICdBZnRlcicsXG4gICAgICBub19vdmVybGF5OiBmYWxzZSxcbiAgICAgIG1vdmVfc2xpZGVyX29uX2hvdmVyOiBmYWxzZSxcbiAgICAgIG1vdmVfd2l0aF9oYW5kbGVfb25seTogdHJ1ZSxcbiAgICAgIGNsaWNrX3RvX21vdmU6IGZhbHNlXG4gICAgfSwgb3B0aW9ucyk7XG5cbiAgICByZXR1cm4gdGhpcy5lYWNoKGZ1bmN0aW9uKCkge1xuXG4gICAgICB2YXIgc2xpZGVyUGN0ID0gb3B0aW9ucy5kZWZhdWx0X29mZnNldF9wY3Q7XG4gICAgICB2YXIgY29udGFpbmVyID0gJCh0aGlzKTtcbiAgICAgIHZhciBzbGlkZXJPcmllbnRhdGlvbiA9IG9wdGlvbnMub3JpZW50YXRpb247XG4gICAgICB2YXIgYmVmb3JlRGlyZWN0aW9uID0gKHNsaWRlck9yaWVudGF0aW9uID09PSAndmVydGljYWwnKSA/ICdkb3duJyA6ICdsZWZ0JztcbiAgICAgIHZhciBhZnRlckRpcmVjdGlvbiA9IChzbGlkZXJPcmllbnRhdGlvbiA9PT0gJ3ZlcnRpY2FsJykgPyAndXAnIDogJ3JpZ2h0JztcblxuXG4gICAgICBjb250YWluZXIud3JhcChcIjxkaXYgY2xhc3M9J3R3ZW50eXR3ZW50eS13cmFwcGVyIHR3ZW50eXR3ZW50eS1cIiArIHNsaWRlck9yaWVudGF0aW9uICsgXCInPjwvZGl2PlwiKTtcbiAgICAgIGlmKCFvcHRpb25zLm5vX292ZXJsYXkpIHtcbiAgICAgICAgY29udGFpbmVyLmFwcGVuZChcIjxkaXYgY2xhc3M9J3R3ZW50eXR3ZW50eS1vdmVybGF5Jz48L2Rpdj5cIik7XG4gICAgICAgIHZhciBvdmVybGF5ID0gY29udGFpbmVyLmZpbmQoXCIudHdlbnR5dHdlbnR5LW92ZXJsYXlcIik7XG4gICAgICAgIG92ZXJsYXkuYXBwZW5kKFwiPGRpdiBjbGFzcz0ndHdlbnR5dHdlbnR5LWJlZm9yZS1sYWJlbCcgZGF0YS1jb250ZW50PSdcIitvcHRpb25zLmJlZm9yZV9sYWJlbCtcIic+PC9kaXY+XCIpO1xuICAgICAgICBvdmVybGF5LmFwcGVuZChcIjxkaXYgY2xhc3M9J3R3ZW50eXR3ZW50eS1hZnRlci1sYWJlbCcgZGF0YS1jb250ZW50PSdcIitvcHRpb25zLmFmdGVyX2xhYmVsK1wiJz48L2Rpdj5cIik7XG4gICAgICB9XG4gICAgICB2YXIgYmVmb3JlSW1nID0gY29udGFpbmVyLmZpbmQoXCJpbWc6Zmlyc3RcIik7XG4gICAgICB2YXIgYWZ0ZXJJbWcgPSBjb250YWluZXIuZmluZChcImltZzpsYXN0XCIpO1xuICAgICAgY29udGFpbmVyLmFwcGVuZChcIjxkaXYgY2xhc3M9J3R3ZW50eXR3ZW50eS1oYW5kbGUnPjwvZGl2PlwiKTtcbiAgICAgIHZhciBzbGlkZXIgPSBjb250YWluZXIuZmluZChcIi50d2VudHl0d2VudHktaGFuZGxlXCIpO1xuICAgICAgc2xpZGVyLmFwcGVuZChcIjxzcGFuIGNsYXNzPSd0d2VudHl0d2VudHktXCIgKyBiZWZvcmVEaXJlY3Rpb24gKyBcIi1hcnJvdyc+PC9zcGFuPlwiKTtcbiAgICAgIHNsaWRlci5hcHBlbmQoXCI8c3BhbiBjbGFzcz0ndHdlbnR5dHdlbnR5LVwiICsgYWZ0ZXJEaXJlY3Rpb24gKyBcIi1hcnJvdyc+PC9zcGFuPlwiKTtcbiAgICAgIGNvbnRhaW5lci5hZGRDbGFzcyhcInR3ZW50eXR3ZW50eS1jb250YWluZXJcIik7XG4gICAgICBiZWZvcmVJbWcuYWRkQ2xhc3MoXCJ0d2VudHl0d2VudHktYmVmb3JlXCIpO1xuICAgICAgYWZ0ZXJJbWcuYWRkQ2xhc3MoXCJ0d2VudHl0d2VudHktYWZ0ZXJcIik7XG5cbiAgICAgIHZhciBjYWxjT2Zmc2V0ID0gZnVuY3Rpb24oZGltZW5zaW9uUGN0KSB7XG4gICAgICAgIHZhciB3ID0gYmVmb3JlSW1nLndpZHRoKCk7XG4gICAgICAgIHZhciBoID0gYmVmb3JlSW1nLmhlaWdodCgpO1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIHc6IHcrXCJweFwiLFxuICAgICAgICAgIGg6IGgrXCJweFwiLFxuICAgICAgICAgIGN3OiAoZGltZW5zaW9uUGN0KncpK1wicHhcIixcbiAgICAgICAgICBjaDogKGRpbWVuc2lvblBjdCpoKStcInB4XCJcbiAgICAgICAgfTtcbiAgICAgIH07XG5cbiAgICAgIHZhciBhZGp1c3RDb250YWluZXIgPSBmdW5jdGlvbihvZmZzZXQpIHtcbiAgICAgIFx0aWYgKHNsaWRlck9yaWVudGF0aW9uID09PSAndmVydGljYWwnKSB7XG4gICAgICAgICAgYmVmb3JlSW1nLmNzcyhcImNsaXBcIiwgXCJyZWN0KDAsXCIrb2Zmc2V0LncrXCIsXCIrb2Zmc2V0LmNoK1wiLDApXCIpO1xuICAgICAgICAgIGFmdGVySW1nLmNzcyhcImNsaXBcIiwgXCJyZWN0KFwiK29mZnNldC5jaCtcIixcIitvZmZzZXQudytcIixcIitvZmZzZXQuaCtcIiwwKVwiKTtcbiAgICAgIFx0fVxuICAgICAgXHRlbHNlIHtcbiAgICAgICAgICBiZWZvcmVJbWcuY3NzKFwiY2xpcFwiLCBcInJlY3QoMCxcIitvZmZzZXQuY3crXCIsXCIrb2Zmc2V0LmgrXCIsMClcIik7XG4gICAgICAgICAgYWZ0ZXJJbWcuY3NzKFwiY2xpcFwiLCBcInJlY3QoMCxcIitvZmZzZXQudytcIixcIitvZmZzZXQuaCtcIixcIitvZmZzZXQuY3crXCIpXCIpO1xuICAgIFx0fVxuICAgICAgICBjb250YWluZXIuY3NzKFwiaGVpZ2h0XCIsIG9mZnNldC5oKTtcbiAgICAgIH07XG5cbiAgICAgIHZhciBhZGp1c3RTbGlkZXIgPSBmdW5jdGlvbihwY3QpIHtcbiAgICAgICAgdmFyIG9mZnNldCA9IGNhbGNPZmZzZXQocGN0KTtcbiAgICAgICAgc2xpZGVyLmNzcygoc2xpZGVyT3JpZW50YXRpb249PT1cInZlcnRpY2FsXCIpID8gXCJ0b3BcIiA6IFwibGVmdFwiLCAoc2xpZGVyT3JpZW50YXRpb249PT1cInZlcnRpY2FsXCIpID8gb2Zmc2V0LmNoIDogb2Zmc2V0LmN3KTtcbiAgICAgICAgYWRqdXN0Q29udGFpbmVyKG9mZnNldCk7XG4gICAgICB9O1xuXG4gICAgICAvLyBSZXR1cm4gdGhlIG51bWJlciBzcGVjaWZpZWQgb3IgdGhlIG1pbi9tYXggbnVtYmVyIGlmIGl0IG91dHNpZGUgdGhlIHJhbmdlIGdpdmVuLlxuICAgICAgdmFyIG1pbk1heE51bWJlciA9IGZ1bmN0aW9uKG51bSwgbWluLCBtYXgpIHtcbiAgICAgICAgcmV0dXJuIE1hdGgubWF4KG1pbiwgTWF0aC5taW4obWF4LCBudW0pKTtcbiAgICAgIH07XG5cbiAgICAgIC8vIENhbGN1bGF0ZSB0aGUgc2xpZGVyIHBlcmNlbnRhZ2UgYmFzZWQgb24gdGhlIHBvc2l0aW9uLlxuICAgICAgdmFyIGdldFNsaWRlclBlcmNlbnRhZ2UgPSBmdW5jdGlvbihwb3NpdGlvblgsIHBvc2l0aW9uWSkge1xuICAgICAgICB2YXIgc2xpZGVyUGVyY2VudGFnZSA9IChzbGlkZXJPcmllbnRhdGlvbiA9PT0gJ3ZlcnRpY2FsJykgP1xuICAgICAgICAgIChwb3NpdGlvblktb2Zmc2V0WSkvaW1nSGVpZ2h0IDpcbiAgICAgICAgICAocG9zaXRpb25YLW9mZnNldFgpL2ltZ1dpZHRoO1xuXG4gICAgICAgIHJldHVybiBtaW5NYXhOdW1iZXIoc2xpZGVyUGVyY2VudGFnZSwgMCwgMSk7XG4gICAgICB9O1xuXG5cbiAgICAgICQod2luZG93KS5vbihcInJlc2l6ZS50d2VudHl0d2VudHlcIiwgZnVuY3Rpb24oZSkge1xuICAgICAgICBhZGp1c3RTbGlkZXIoc2xpZGVyUGN0KTtcbiAgICAgIH0pO1xuXG4gICAgICB2YXIgb2Zmc2V0WCA9IDA7XG4gICAgICB2YXIgb2Zmc2V0WSA9IDA7XG4gICAgICB2YXIgaW1nV2lkdGggPSAwO1xuICAgICAgdmFyIGltZ0hlaWdodCA9IDA7XG4gICAgICB2YXIgb25Nb3ZlU3RhcnQgPSBmdW5jdGlvbihlKSB7XG4gICAgICAgIGlmICgoKGUuZGlzdFggPiBlLmRpc3RZICYmIGUuZGlzdFggPCAtZS5kaXN0WSkgfHwgKGUuZGlzdFggPCBlLmRpc3RZICYmIGUuZGlzdFggPiAtZS5kaXN0WSkpICYmIHNsaWRlck9yaWVudGF0aW9uICE9PSAndmVydGljYWwnKSB7XG4gICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKCgoZS5kaXN0WCA8IGUuZGlzdFkgJiYgZS5kaXN0WCA8IC1lLmRpc3RZKSB8fCAoZS5kaXN0WCA+IGUuZGlzdFkgJiYgZS5kaXN0WCA+IC1lLmRpc3RZKSkgJiYgc2xpZGVyT3JpZW50YXRpb24gPT09ICd2ZXJ0aWNhbCcpIHtcbiAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIH1cbiAgICAgICAgY29udGFpbmVyLmFkZENsYXNzKFwiYWN0aXZlXCIpO1xuICAgICAgICBvZmZzZXRYID0gY29udGFpbmVyLm9mZnNldCgpLmxlZnQ7XG4gICAgICAgIG9mZnNldFkgPSBjb250YWluZXIub2Zmc2V0KCkudG9wO1xuICAgICAgICBpbWdXaWR0aCA9IGJlZm9yZUltZy53aWR0aCgpO1xuICAgICAgICBpbWdIZWlnaHQgPSBiZWZvcmVJbWcuaGVpZ2h0KCk7XG4gICAgICB9O1xuICAgICAgdmFyIG9uTW92ZSA9IGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgaWYgKGNvbnRhaW5lci5oYXNDbGFzcyhcImFjdGl2ZVwiKSkge1xuICAgICAgICAgIHNsaWRlclBjdCA9IGdldFNsaWRlclBlcmNlbnRhZ2UoZS5wYWdlWCwgZS5wYWdlWSk7XG4gICAgICAgICAgYWRqdXN0U2xpZGVyKHNsaWRlclBjdCk7XG4gICAgICAgIH1cbiAgICAgIH07XG4gICAgICB2YXIgb25Nb3ZlRW5kID0gZnVuY3Rpb24oKSB7XG4gICAgICAgICAgY29udGFpbmVyLnJlbW92ZUNsYXNzKFwiYWN0aXZlXCIpO1xuICAgICAgfTtcblxuICAgICAgdmFyIG1vdmVUYXJnZXQgPSBvcHRpb25zLm1vdmVfd2l0aF9oYW5kbGVfb25seSA/IHNsaWRlciA6IGNvbnRhaW5lcjtcbiAgICAgIG1vdmVUYXJnZXQub24oXCJtb3Zlc3RhcnRcIixvbk1vdmVTdGFydCk7XG4gICAgICBtb3ZlVGFyZ2V0Lm9uKFwibW92ZVwiLG9uTW92ZSk7XG4gICAgICBtb3ZlVGFyZ2V0Lm9uKFwibW92ZWVuZFwiLG9uTW92ZUVuZCk7XG5cbiAgICAgIGlmIChvcHRpb25zLm1vdmVfc2xpZGVyX29uX2hvdmVyKSB7XG4gICAgICAgIGNvbnRhaW5lci5vbihcIm1vdXNlZW50ZXJcIiwgb25Nb3ZlU3RhcnQpO1xuICAgICAgICBjb250YWluZXIub24oXCJtb3VzZW1vdmVcIiwgb25Nb3ZlKTtcbiAgICAgICAgY29udGFpbmVyLm9uKFwibW91c2VsZWF2ZVwiLCBvbk1vdmVFbmQpO1xuICAgICAgfVxuXG4gICAgICBzbGlkZXIub24oXCJ0b3VjaG1vdmVcIiwgZnVuY3Rpb24oZSkge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICB9KTtcblxuICAgICAgY29udGFpbmVyLmZpbmQoXCJpbWdcIikub24oXCJtb3VzZWRvd25cIiwgZnVuY3Rpb24oZXZlbnQpIHtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgIH0pO1xuXG4gICAgICBpZiAob3B0aW9ucy5jbGlja190b19tb3ZlKSB7XG4gICAgICAgIGNvbnRhaW5lci5vbignY2xpY2snLCBmdW5jdGlvbihlKSB7XG4gICAgICAgICAgb2Zmc2V0WCA9IGNvbnRhaW5lci5vZmZzZXQoKS5sZWZ0O1xuICAgICAgICAgIG9mZnNldFkgPSBjb250YWluZXIub2Zmc2V0KCkudG9wO1xuICAgICAgICAgIGltZ1dpZHRoID0gYmVmb3JlSW1nLndpZHRoKCk7XG4gICAgICAgICAgaW1nSGVpZ2h0ID0gYmVmb3JlSW1nLmhlaWdodCgpO1xuXG4gICAgICAgICAgc2xpZGVyUGN0ID0gZ2V0U2xpZGVyUGVyY2VudGFnZShlLnBhZ2VYLCBlLnBhZ2VZKTtcbiAgICAgICAgICBhZGp1c3RTbGlkZXIoc2xpZGVyUGN0KTtcbiAgICAgICAgfSk7XG4gICAgICB9XG5cbiAgICAgICQod2luZG93KS50cmlnZ2VyKFwicmVzaXplLnR3ZW50eXR3ZW50eVwiKTtcbiAgICB9KTtcbiAgfTtcblxufSkoalF1ZXJ5KTtcblxuLyohIGpRdWVyeSBWYWxpZGF0aW9uIFBsdWdpbiAtIHYxLjE5LjEgLSA2LzE1LzIwMTlcbiAqIGh0dHBzOi8vanF1ZXJ5dmFsaWRhdGlvbi5vcmcvXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTkgSsO2cm4gWmFlZmZlcmVyOyBMaWNlbnNlZCBNSVQgKi9cbiFmdW5jdGlvbihhKXtcImZ1bmN0aW9uXCI9PXR5cGVvZiBkZWZpbmUmJmRlZmluZS5hbWQ/ZGVmaW5lKFtcImpxdWVyeVwiXSxhKTpcIm9iamVjdFwiPT10eXBlb2YgbW9kdWxlJiZtb2R1bGUuZXhwb3J0cz9tb2R1bGUuZXhwb3J0cz1hKHJlcXVpcmUoXCJqcXVlcnlcIikpOmEoalF1ZXJ5KX0oZnVuY3Rpb24oYSl7YS5leHRlbmQoYS5mbix7dmFsaWRhdGU6ZnVuY3Rpb24oYil7aWYoIXRoaXMubGVuZ3RoKXJldHVybiB2b2lkKGImJmIuZGVidWcmJndpbmRvdy5jb25zb2xlJiZjb25zb2xlLndhcm4oXCJOb3RoaW5nIHNlbGVjdGVkLCBjYW4ndCB2YWxpZGF0ZSwgcmV0dXJuaW5nIG5vdGhpbmcuXCIpKTt2YXIgYz1hLmRhdGEodGhpc1swXSxcInZhbGlkYXRvclwiKTtyZXR1cm4gYz9jOih0aGlzLmF0dHIoXCJub3ZhbGlkYXRlXCIsXCJub3ZhbGlkYXRlXCIpLGM9bmV3IGEudmFsaWRhdG9yKGIsdGhpc1swXSksYS5kYXRhKHRoaXNbMF0sXCJ2YWxpZGF0b3JcIixjKSxjLnNldHRpbmdzLm9uc3VibWl0JiYodGhpcy5vbihcImNsaWNrLnZhbGlkYXRlXCIsXCI6c3VibWl0XCIsZnVuY3Rpb24oYil7Yy5zdWJtaXRCdXR0b249Yi5jdXJyZW50VGFyZ2V0LGEodGhpcykuaGFzQ2xhc3MoXCJjYW5jZWxcIikmJihjLmNhbmNlbFN1Ym1pdD0hMCksdm9pZCAwIT09YSh0aGlzKS5hdHRyKFwiZm9ybW5vdmFsaWRhdGVcIikmJihjLmNhbmNlbFN1Ym1pdD0hMCl9KSx0aGlzLm9uKFwic3VibWl0LnZhbGlkYXRlXCIsZnVuY3Rpb24oYil7ZnVuY3Rpb24gZCgpe3ZhciBkLGU7cmV0dXJuIGMuc3VibWl0QnV0dG9uJiYoYy5zZXR0aW5ncy5zdWJtaXRIYW5kbGVyfHxjLmZvcm1TdWJtaXR0ZWQpJiYoZD1hKFwiPGlucHV0IHR5cGU9J2hpZGRlbicvPlwiKS5hdHRyKFwibmFtZVwiLGMuc3VibWl0QnV0dG9uLm5hbWUpLnZhbChhKGMuc3VibWl0QnV0dG9uKS52YWwoKSkuYXBwZW5kVG8oYy5jdXJyZW50Rm9ybSkpLCEoYy5zZXR0aW5ncy5zdWJtaXRIYW5kbGVyJiYhYy5zZXR0aW5ncy5kZWJ1Zyl8fChlPWMuc2V0dGluZ3Muc3VibWl0SGFuZGxlci5jYWxsKGMsYy5jdXJyZW50Rm9ybSxiKSxkJiZkLnJlbW92ZSgpLHZvaWQgMCE9PWUmJmUpfXJldHVybiBjLnNldHRpbmdzLmRlYnVnJiZiLnByZXZlbnREZWZhdWx0KCksYy5jYW5jZWxTdWJtaXQ/KGMuY2FuY2VsU3VibWl0PSExLGQoKSk6Yy5mb3JtKCk/Yy5wZW5kaW5nUmVxdWVzdD8oYy5mb3JtU3VibWl0dGVkPSEwLCExKTpkKCk6KGMuZm9jdXNJbnZhbGlkKCksITEpfSkpLGMpfSx2YWxpZDpmdW5jdGlvbigpe3ZhciBiLGMsZDtyZXR1cm4gYSh0aGlzWzBdKS5pcyhcImZvcm1cIik/Yj10aGlzLnZhbGlkYXRlKCkuZm9ybSgpOihkPVtdLGI9ITAsYz1hKHRoaXNbMF0uZm9ybSkudmFsaWRhdGUoKSx0aGlzLmVhY2goZnVuY3Rpb24oKXtiPWMuZWxlbWVudCh0aGlzKSYmYixifHwoZD1kLmNvbmNhdChjLmVycm9yTGlzdCkpfSksYy5lcnJvckxpc3Q9ZCksYn0scnVsZXM6ZnVuY3Rpb24oYixjKXt2YXIgZCxlLGYsZyxoLGksaj10aGlzWzBdLGs9XCJ1bmRlZmluZWRcIiE9dHlwZW9mIHRoaXMuYXR0cihcImNvbnRlbnRlZGl0YWJsZVwiKSYmXCJmYWxzZVwiIT09dGhpcy5hdHRyKFwiY29udGVudGVkaXRhYmxlXCIpO2lmKG51bGwhPWomJighai5mb3JtJiZrJiYoai5mb3JtPXRoaXMuY2xvc2VzdChcImZvcm1cIilbMF0sai5uYW1lPXRoaXMuYXR0cihcIm5hbWVcIikpLG51bGwhPWouZm9ybSkpe2lmKGIpc3dpdGNoKGQ9YS5kYXRhKGouZm9ybSxcInZhbGlkYXRvclwiKS5zZXR0aW5ncyxlPWQucnVsZXMsZj1hLnZhbGlkYXRvci5zdGF0aWNSdWxlcyhqKSxiKXtjYXNlXCJhZGRcIjphLmV4dGVuZChmLGEudmFsaWRhdG9yLm5vcm1hbGl6ZVJ1bGUoYykpLGRlbGV0ZSBmLm1lc3NhZ2VzLGVbai5uYW1lXT1mLGMubWVzc2FnZXMmJihkLm1lc3NhZ2VzW2oubmFtZV09YS5leHRlbmQoZC5tZXNzYWdlc1tqLm5hbWVdLGMubWVzc2FnZXMpKTticmVhaztjYXNlXCJyZW1vdmVcIjpyZXR1cm4gYz8oaT17fSxhLmVhY2goYy5zcGxpdCgvXFxzLyksZnVuY3Rpb24oYSxiKXtpW2JdPWZbYl0sZGVsZXRlIGZbYl19KSxpKTooZGVsZXRlIGVbai5uYW1lXSxmKX1yZXR1cm4gZz1hLnZhbGlkYXRvci5ub3JtYWxpemVSdWxlcyhhLmV4dGVuZCh7fSxhLnZhbGlkYXRvci5jbGFzc1J1bGVzKGopLGEudmFsaWRhdG9yLmF0dHJpYnV0ZVJ1bGVzKGopLGEudmFsaWRhdG9yLmRhdGFSdWxlcyhqKSxhLnZhbGlkYXRvci5zdGF0aWNSdWxlcyhqKSksaiksZy5yZXF1aXJlZCYmKGg9Zy5yZXF1aXJlZCxkZWxldGUgZy5yZXF1aXJlZCxnPWEuZXh0ZW5kKHtyZXF1aXJlZDpofSxnKSksZy5yZW1vdGUmJihoPWcucmVtb3RlLGRlbGV0ZSBnLnJlbW90ZSxnPWEuZXh0ZW5kKGcse3JlbW90ZTpofSkpLGd9fX0pLGEuZXh0ZW5kKGEuZXhwci5wc2V1ZG9zfHxhLmV4cHJbXCI6XCJdLHtibGFuazpmdW5jdGlvbihiKXtyZXR1cm4hYS50cmltKFwiXCIrYShiKS52YWwoKSl9LGZpbGxlZDpmdW5jdGlvbihiKXt2YXIgYz1hKGIpLnZhbCgpO3JldHVybiBudWxsIT09YyYmISFhLnRyaW0oXCJcIitjKX0sdW5jaGVja2VkOmZ1bmN0aW9uKGIpe3JldHVybiFhKGIpLnByb3AoXCJjaGVja2VkXCIpfX0pLGEudmFsaWRhdG9yPWZ1bmN0aW9uKGIsYyl7dGhpcy5zZXR0aW5ncz1hLmV4dGVuZCghMCx7fSxhLnZhbGlkYXRvci5kZWZhdWx0cyxiKSx0aGlzLmN1cnJlbnRGb3JtPWMsdGhpcy5pbml0KCl9LGEudmFsaWRhdG9yLmZvcm1hdD1mdW5jdGlvbihiLGMpe3JldHVybiAxPT09YXJndW1lbnRzLmxlbmd0aD9mdW5jdGlvbigpe3ZhciBjPWEubWFrZUFycmF5KGFyZ3VtZW50cyk7cmV0dXJuIGMudW5zaGlmdChiKSxhLnZhbGlkYXRvci5mb3JtYXQuYXBwbHkodGhpcyxjKX06dm9pZCAwPT09Yz9iOihhcmd1bWVudHMubGVuZ3RoPjImJmMuY29uc3RydWN0b3IhPT1BcnJheSYmKGM9YS5tYWtlQXJyYXkoYXJndW1lbnRzKS5zbGljZSgxKSksYy5jb25zdHJ1Y3RvciE9PUFycmF5JiYoYz1bY10pLGEuZWFjaChjLGZ1bmN0aW9uKGEsYyl7Yj1iLnJlcGxhY2UobmV3IFJlZ0V4cChcIlxcXFx7XCIrYStcIlxcXFx9XCIsXCJnXCIpLGZ1bmN0aW9uKCl7cmV0dXJuIGN9KX0pLGIpfSxhLmV4dGVuZChhLnZhbGlkYXRvcix7ZGVmYXVsdHM6e21lc3NhZ2VzOnt9LGdyb3Vwczp7fSxydWxlczp7fSxlcnJvckNsYXNzOlwiZXJyb3JcIixwZW5kaW5nQ2xhc3M6XCJwZW5kaW5nXCIsdmFsaWRDbGFzczpcInZhbGlkXCIsZXJyb3JFbGVtZW50OlwibGFiZWxcIixmb2N1c0NsZWFudXA6ITEsZm9jdXNJbnZhbGlkOiEwLGVycm9yQ29udGFpbmVyOmEoW10pLGVycm9yTGFiZWxDb250YWluZXI6YShbXSksb25zdWJtaXQ6ITAsaWdub3JlOlwiOmhpZGRlblwiLGlnbm9yZVRpdGxlOiExLG9uZm9jdXNpbjpmdW5jdGlvbihhKXt0aGlzLmxhc3RBY3RpdmU9YSx0aGlzLnNldHRpbmdzLmZvY3VzQ2xlYW51cCYmKHRoaXMuc2V0dGluZ3MudW5oaWdobGlnaHQmJnRoaXMuc2V0dGluZ3MudW5oaWdobGlnaHQuY2FsbCh0aGlzLGEsdGhpcy5zZXR0aW5ncy5lcnJvckNsYXNzLHRoaXMuc2V0dGluZ3MudmFsaWRDbGFzcyksdGhpcy5oaWRlVGhlc2UodGhpcy5lcnJvcnNGb3IoYSkpKX0sb25mb2N1c291dDpmdW5jdGlvbihhKXt0aGlzLmNoZWNrYWJsZShhKXx8IShhLm5hbWUgaW4gdGhpcy5zdWJtaXR0ZWQpJiZ0aGlzLm9wdGlvbmFsKGEpfHx0aGlzLmVsZW1lbnQoYSl9LG9ua2V5dXA6ZnVuY3Rpb24oYixjKXt2YXIgZD1bMTYsMTcsMTgsMjAsMzUsMzYsMzcsMzgsMzksNDAsNDUsMTQ0LDIyNV07OT09PWMud2hpY2gmJlwiXCI9PT10aGlzLmVsZW1lbnRWYWx1ZShiKXx8YS5pbkFycmF5KGMua2V5Q29kZSxkKSE9PS0xfHwoYi5uYW1lIGluIHRoaXMuc3VibWl0dGVkfHxiLm5hbWUgaW4gdGhpcy5pbnZhbGlkKSYmdGhpcy5lbGVtZW50KGIpfSxvbmNsaWNrOmZ1bmN0aW9uKGEpe2EubmFtZSBpbiB0aGlzLnN1Ym1pdHRlZD90aGlzLmVsZW1lbnQoYSk6YS5wYXJlbnROb2RlLm5hbWUgaW4gdGhpcy5zdWJtaXR0ZWQmJnRoaXMuZWxlbWVudChhLnBhcmVudE5vZGUpfSxoaWdobGlnaHQ6ZnVuY3Rpb24oYixjLGQpe1wicmFkaW9cIj09PWIudHlwZT90aGlzLmZpbmRCeU5hbWUoYi5uYW1lKS5hZGRDbGFzcyhjKS5yZW1vdmVDbGFzcyhkKTphKGIpLmFkZENsYXNzKGMpLnJlbW92ZUNsYXNzKGQpfSx1bmhpZ2hsaWdodDpmdW5jdGlvbihiLGMsZCl7XCJyYWRpb1wiPT09Yi50eXBlP3RoaXMuZmluZEJ5TmFtZShiLm5hbWUpLnJlbW92ZUNsYXNzKGMpLmFkZENsYXNzKGQpOmEoYikucmVtb3ZlQ2xhc3MoYykuYWRkQ2xhc3MoZCl9fSxzZXREZWZhdWx0czpmdW5jdGlvbihiKXthLmV4dGVuZChhLnZhbGlkYXRvci5kZWZhdWx0cyxiKX0sbWVzc2FnZXM6e3JlcXVpcmVkOlwiVGhpcyBmaWVsZCBpcyByZXF1aXJlZC5cIixyZW1vdGU6XCJQbGVhc2UgZml4IHRoaXMgZmllbGQuXCIsZW1haWw6XCJQbGVhc2UgZW50ZXIgYSB2YWxpZCBlbWFpbCBhZGRyZXNzLlwiLHVybDpcIlBsZWFzZSBlbnRlciBhIHZhbGlkIFVSTC5cIixkYXRlOlwiUGxlYXNlIGVudGVyIGEgdmFsaWQgZGF0ZS5cIixkYXRlSVNPOlwiUGxlYXNlIGVudGVyIGEgdmFsaWQgZGF0ZSAoSVNPKS5cIixudW1iZXI6XCJQbGVhc2UgZW50ZXIgYSB2YWxpZCBudW1iZXIuXCIsZGlnaXRzOlwiUGxlYXNlIGVudGVyIG9ubHkgZGlnaXRzLlwiLGVxdWFsVG86XCJQbGVhc2UgZW50ZXIgdGhlIHNhbWUgdmFsdWUgYWdhaW4uXCIsbWF4bGVuZ3RoOmEudmFsaWRhdG9yLmZvcm1hdChcIlBsZWFzZSBlbnRlciBubyBtb3JlIHRoYW4gezB9IGNoYXJhY3RlcnMuXCIpLG1pbmxlbmd0aDphLnZhbGlkYXRvci5mb3JtYXQoXCJQbGVhc2UgZW50ZXIgYXQgbGVhc3QgezB9IGNoYXJhY3RlcnMuXCIpLHJhbmdlbGVuZ3RoOmEudmFsaWRhdG9yLmZvcm1hdChcIlBsZWFzZSBlbnRlciBhIHZhbHVlIGJldHdlZW4gezB9IGFuZCB7MX0gY2hhcmFjdGVycyBsb25nLlwiKSxyYW5nZTphLnZhbGlkYXRvci5mb3JtYXQoXCJQbGVhc2UgZW50ZXIgYSB2YWx1ZSBiZXR3ZWVuIHswfSBhbmQgezF9LlwiKSxtYXg6YS52YWxpZGF0b3IuZm9ybWF0KFwiUGxlYXNlIGVudGVyIGEgdmFsdWUgbGVzcyB0aGFuIG9yIGVxdWFsIHRvIHswfS5cIiksbWluOmEudmFsaWRhdG9yLmZvcm1hdChcIlBsZWFzZSBlbnRlciBhIHZhbHVlIGdyZWF0ZXIgdGhhbiBvciBlcXVhbCB0byB7MH0uXCIpLHN0ZXA6YS52YWxpZGF0b3IuZm9ybWF0KFwiUGxlYXNlIGVudGVyIGEgbXVsdGlwbGUgb2YgezB9LlwiKX0sYXV0b0NyZWF0ZVJhbmdlczohMSxwcm90b3R5cGU6e2luaXQ6ZnVuY3Rpb24oKXtmdW5jdGlvbiBiKGIpe3ZhciBjPVwidW5kZWZpbmVkXCIhPXR5cGVvZiBhKHRoaXMpLmF0dHIoXCJjb250ZW50ZWRpdGFibGVcIikmJlwiZmFsc2VcIiE9PWEodGhpcykuYXR0cihcImNvbnRlbnRlZGl0YWJsZVwiKTtpZighdGhpcy5mb3JtJiZjJiYodGhpcy5mb3JtPWEodGhpcykuY2xvc2VzdChcImZvcm1cIilbMF0sdGhpcy5uYW1lPWEodGhpcykuYXR0cihcIm5hbWVcIikpLGQ9PT10aGlzLmZvcm0pe3ZhciBlPWEuZGF0YSh0aGlzLmZvcm0sXCJ2YWxpZGF0b3JcIiksZj1cIm9uXCIrYi50eXBlLnJlcGxhY2UoL152YWxpZGF0ZS8sXCJcIiksZz1lLnNldHRpbmdzO2dbZl0mJiFhKHRoaXMpLmlzKGcuaWdub3JlKSYmZ1tmXS5jYWxsKGUsdGhpcyxiKX19dGhpcy5sYWJlbENvbnRhaW5lcj1hKHRoaXMuc2V0dGluZ3MuZXJyb3JMYWJlbENvbnRhaW5lciksdGhpcy5lcnJvckNvbnRleHQ9dGhpcy5sYWJlbENvbnRhaW5lci5sZW5ndGgmJnRoaXMubGFiZWxDb250YWluZXJ8fGEodGhpcy5jdXJyZW50Rm9ybSksdGhpcy5jb250YWluZXJzPWEodGhpcy5zZXR0aW5ncy5lcnJvckNvbnRhaW5lcikuYWRkKHRoaXMuc2V0dGluZ3MuZXJyb3JMYWJlbENvbnRhaW5lciksdGhpcy5zdWJtaXR0ZWQ9e30sdGhpcy52YWx1ZUNhY2hlPXt9LHRoaXMucGVuZGluZ1JlcXVlc3Q9MCx0aGlzLnBlbmRpbmc9e30sdGhpcy5pbnZhbGlkPXt9LHRoaXMucmVzZXQoKTt2YXIgYyxkPXRoaXMuY3VycmVudEZvcm0sZT10aGlzLmdyb3Vwcz17fTthLmVhY2godGhpcy5zZXR0aW5ncy5ncm91cHMsZnVuY3Rpb24oYixjKXtcInN0cmluZ1wiPT10eXBlb2YgYyYmKGM9Yy5zcGxpdCgvXFxzLykpLGEuZWFjaChjLGZ1bmN0aW9uKGEsYyl7ZVtjXT1ifSl9KSxjPXRoaXMuc2V0dGluZ3MucnVsZXMsYS5lYWNoKGMsZnVuY3Rpb24oYixkKXtjW2JdPWEudmFsaWRhdG9yLm5vcm1hbGl6ZVJ1bGUoZCl9KSxhKHRoaXMuY3VycmVudEZvcm0pLm9uKFwiZm9jdXNpbi52YWxpZGF0ZSBmb2N1c291dC52YWxpZGF0ZSBrZXl1cC52YWxpZGF0ZVwiLFwiOnRleHQsIFt0eXBlPSdwYXNzd29yZCddLCBbdHlwZT0nZmlsZSddLCBzZWxlY3QsIHRleHRhcmVhLCBbdHlwZT0nbnVtYmVyJ10sIFt0eXBlPSdzZWFyY2gnXSwgW3R5cGU9J3RlbCddLCBbdHlwZT0ndXJsJ10sIFt0eXBlPSdlbWFpbCddLCBbdHlwZT0nZGF0ZXRpbWUnXSwgW3R5cGU9J2RhdGUnXSwgW3R5cGU9J21vbnRoJ10sIFt0eXBlPSd3ZWVrJ10sIFt0eXBlPSd0aW1lJ10sIFt0eXBlPSdkYXRldGltZS1sb2NhbCddLCBbdHlwZT0ncmFuZ2UnXSwgW3R5cGU9J2NvbG9yJ10sIFt0eXBlPSdyYWRpbyddLCBbdHlwZT0nY2hlY2tib3gnXSwgW2NvbnRlbnRlZGl0YWJsZV0sIFt0eXBlPSdidXR0b24nXVwiLGIpLm9uKFwiY2xpY2sudmFsaWRhdGVcIixcInNlbGVjdCwgb3B0aW9uLCBbdHlwZT0ncmFkaW8nXSwgW3R5cGU9J2NoZWNrYm94J11cIixiKSx0aGlzLnNldHRpbmdzLmludmFsaWRIYW5kbGVyJiZhKHRoaXMuY3VycmVudEZvcm0pLm9uKFwiaW52YWxpZC1mb3JtLnZhbGlkYXRlXCIsdGhpcy5zZXR0aW5ncy5pbnZhbGlkSGFuZGxlcil9LGZvcm06ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5jaGVja0Zvcm0oKSxhLmV4dGVuZCh0aGlzLnN1Ym1pdHRlZCx0aGlzLmVycm9yTWFwKSx0aGlzLmludmFsaWQ9YS5leHRlbmQoe30sdGhpcy5lcnJvck1hcCksdGhpcy52YWxpZCgpfHxhKHRoaXMuY3VycmVudEZvcm0pLnRyaWdnZXJIYW5kbGVyKFwiaW52YWxpZC1mb3JtXCIsW3RoaXNdKSx0aGlzLnNob3dFcnJvcnMoKSx0aGlzLnZhbGlkKCl9LGNoZWNrRm9ybTpmdW5jdGlvbigpe3RoaXMucHJlcGFyZUZvcm0oKTtmb3IodmFyIGE9MCxiPXRoaXMuY3VycmVudEVsZW1lbnRzPXRoaXMuZWxlbWVudHMoKTtiW2FdO2ErKyl0aGlzLmNoZWNrKGJbYV0pO3JldHVybiB0aGlzLnZhbGlkKCl9LGVsZW1lbnQ6ZnVuY3Rpb24oYil7dmFyIGMsZCxlPXRoaXMuY2xlYW4oYiksZj10aGlzLnZhbGlkYXRpb25UYXJnZXRGb3IoZSksZz10aGlzLGg9ITA7cmV0dXJuIHZvaWQgMD09PWY/ZGVsZXRlIHRoaXMuaW52YWxpZFtlLm5hbWVdOih0aGlzLnByZXBhcmVFbGVtZW50KGYpLHRoaXMuY3VycmVudEVsZW1lbnRzPWEoZiksZD10aGlzLmdyb3Vwc1tmLm5hbWVdLGQmJmEuZWFjaCh0aGlzLmdyb3VwcyxmdW5jdGlvbihhLGIpe2I9PT1kJiZhIT09Zi5uYW1lJiYoZT1nLnZhbGlkYXRpb25UYXJnZXRGb3IoZy5jbGVhbihnLmZpbmRCeU5hbWUoYSkpKSxlJiZlLm5hbWUgaW4gZy5pbnZhbGlkJiYoZy5jdXJyZW50RWxlbWVudHMucHVzaChlKSxoPWcuY2hlY2soZSkmJmgpKX0pLGM9dGhpcy5jaGVjayhmKSE9PSExLGg9aCYmYyxjP3RoaXMuaW52YWxpZFtmLm5hbWVdPSExOnRoaXMuaW52YWxpZFtmLm5hbWVdPSEwLHRoaXMubnVtYmVyT2ZJbnZhbGlkcygpfHwodGhpcy50b0hpZGU9dGhpcy50b0hpZGUuYWRkKHRoaXMuY29udGFpbmVycykpLHRoaXMuc2hvd0Vycm9ycygpLGEoYikuYXR0cihcImFyaWEtaW52YWxpZFwiLCFjKSksaH0sc2hvd0Vycm9yczpmdW5jdGlvbihiKXtpZihiKXt2YXIgYz10aGlzO2EuZXh0ZW5kKHRoaXMuZXJyb3JNYXAsYiksdGhpcy5lcnJvckxpc3Q9YS5tYXAodGhpcy5lcnJvck1hcCxmdW5jdGlvbihhLGIpe3JldHVybnttZXNzYWdlOmEsZWxlbWVudDpjLmZpbmRCeU5hbWUoYilbMF19fSksdGhpcy5zdWNjZXNzTGlzdD1hLmdyZXAodGhpcy5zdWNjZXNzTGlzdCxmdW5jdGlvbihhKXtyZXR1cm4hKGEubmFtZSBpbiBiKX0pfXRoaXMuc2V0dGluZ3Muc2hvd0Vycm9ycz90aGlzLnNldHRpbmdzLnNob3dFcnJvcnMuY2FsbCh0aGlzLHRoaXMuZXJyb3JNYXAsdGhpcy5lcnJvckxpc3QpOnRoaXMuZGVmYXVsdFNob3dFcnJvcnMoKX0scmVzZXRGb3JtOmZ1bmN0aW9uKCl7YS5mbi5yZXNldEZvcm0mJmEodGhpcy5jdXJyZW50Rm9ybSkucmVzZXRGb3JtKCksdGhpcy5pbnZhbGlkPXt9LHRoaXMuc3VibWl0dGVkPXt9LHRoaXMucHJlcGFyZUZvcm0oKSx0aGlzLmhpZGVFcnJvcnMoKTt2YXIgYj10aGlzLmVsZW1lbnRzKCkucmVtb3ZlRGF0YShcInByZXZpb3VzVmFsdWVcIikucmVtb3ZlQXR0cihcImFyaWEtaW52YWxpZFwiKTt0aGlzLnJlc2V0RWxlbWVudHMoYil9LHJlc2V0RWxlbWVudHM6ZnVuY3Rpb24oYSl7dmFyIGI7aWYodGhpcy5zZXR0aW5ncy51bmhpZ2hsaWdodClmb3IoYj0wO2FbYl07YisrKXRoaXMuc2V0dGluZ3MudW5oaWdobGlnaHQuY2FsbCh0aGlzLGFbYl0sdGhpcy5zZXR0aW5ncy5lcnJvckNsYXNzLFwiXCIpLHRoaXMuZmluZEJ5TmFtZShhW2JdLm5hbWUpLnJlbW92ZUNsYXNzKHRoaXMuc2V0dGluZ3MudmFsaWRDbGFzcyk7ZWxzZSBhLnJlbW92ZUNsYXNzKHRoaXMuc2V0dGluZ3MuZXJyb3JDbGFzcykucmVtb3ZlQ2xhc3ModGhpcy5zZXR0aW5ncy52YWxpZENsYXNzKX0sbnVtYmVyT2ZJbnZhbGlkczpmdW5jdGlvbigpe3JldHVybiB0aGlzLm9iamVjdExlbmd0aCh0aGlzLmludmFsaWQpfSxvYmplY3RMZW5ndGg6ZnVuY3Rpb24oYSl7dmFyIGIsYz0wO2ZvcihiIGluIGEpdm9pZCAwIT09YVtiXSYmbnVsbCE9PWFbYl0mJmFbYl0hPT0hMSYmYysrO3JldHVybiBjfSxoaWRlRXJyb3JzOmZ1bmN0aW9uKCl7dGhpcy5oaWRlVGhlc2UodGhpcy50b0hpZGUpfSxoaWRlVGhlc2U6ZnVuY3Rpb24oYSl7YS5ub3QodGhpcy5jb250YWluZXJzKS50ZXh0KFwiXCIpLHRoaXMuYWRkV3JhcHBlcihhKS5oaWRlKCl9LHZhbGlkOmZ1bmN0aW9uKCl7cmV0dXJuIDA9PT10aGlzLnNpemUoKX0sc2l6ZTpmdW5jdGlvbigpe3JldHVybiB0aGlzLmVycm9yTGlzdC5sZW5ndGh9LGZvY3VzSW52YWxpZDpmdW5jdGlvbigpe2lmKHRoaXMuc2V0dGluZ3MuZm9jdXNJbnZhbGlkKXRyeXthKHRoaXMuZmluZExhc3RBY3RpdmUoKXx8dGhpcy5lcnJvckxpc3QubGVuZ3RoJiZ0aGlzLmVycm9yTGlzdFswXS5lbGVtZW50fHxbXSkuZmlsdGVyKFwiOnZpc2libGVcIikudHJpZ2dlcihcImZvY3VzXCIpLnRyaWdnZXIoXCJmb2N1c2luXCIpfWNhdGNoKGIpe319LGZpbmRMYXN0QWN0aXZlOmZ1bmN0aW9uKCl7dmFyIGI9dGhpcy5sYXN0QWN0aXZlO3JldHVybiBiJiYxPT09YS5ncmVwKHRoaXMuZXJyb3JMaXN0LGZ1bmN0aW9uKGEpe3JldHVybiBhLmVsZW1lbnQubmFtZT09PWIubmFtZX0pLmxlbmd0aCYmYn0sZWxlbWVudHM6ZnVuY3Rpb24oKXt2YXIgYj10aGlzLGM9e307cmV0dXJuIGEodGhpcy5jdXJyZW50Rm9ybSkuZmluZChcImlucHV0LCBzZWxlY3QsIHRleHRhcmVhLCBbY29udGVudGVkaXRhYmxlXVwiKS5ub3QoXCI6c3VibWl0LCA6cmVzZXQsIDppbWFnZSwgOmRpc2FibGVkXCIpLm5vdCh0aGlzLnNldHRpbmdzLmlnbm9yZSkuZmlsdGVyKGZ1bmN0aW9uKCl7dmFyIGQ9dGhpcy5uYW1lfHxhKHRoaXMpLmF0dHIoXCJuYW1lXCIpLGU9XCJ1bmRlZmluZWRcIiE9dHlwZW9mIGEodGhpcykuYXR0cihcImNvbnRlbnRlZGl0YWJsZVwiKSYmXCJmYWxzZVwiIT09YSh0aGlzKS5hdHRyKFwiY29udGVudGVkaXRhYmxlXCIpO3JldHVybiFkJiZiLnNldHRpbmdzLmRlYnVnJiZ3aW5kb3cuY29uc29sZSYmY29uc29sZS5lcnJvcihcIiVvIGhhcyBubyBuYW1lIGFzc2lnbmVkXCIsdGhpcyksZSYmKHRoaXMuZm9ybT1hKHRoaXMpLmNsb3Nlc3QoXCJmb3JtXCIpWzBdLHRoaXMubmFtZT1kKSx0aGlzLmZvcm09PT1iLmN1cnJlbnRGb3JtJiYoIShkIGluIGN8fCFiLm9iamVjdExlbmd0aChhKHRoaXMpLnJ1bGVzKCkpKSYmKGNbZF09ITAsITApKX0pfSxjbGVhbjpmdW5jdGlvbihiKXtyZXR1cm4gYShiKVswXX0sZXJyb3JzOmZ1bmN0aW9uKCl7dmFyIGI9dGhpcy5zZXR0aW5ncy5lcnJvckNsYXNzLnNwbGl0KFwiIFwiKS5qb2luKFwiLlwiKTtyZXR1cm4gYSh0aGlzLnNldHRpbmdzLmVycm9yRWxlbWVudCtcIi5cIitiLHRoaXMuZXJyb3JDb250ZXh0KX0scmVzZXRJbnRlcm5hbHM6ZnVuY3Rpb24oKXt0aGlzLnN1Y2Nlc3NMaXN0PVtdLHRoaXMuZXJyb3JMaXN0PVtdLHRoaXMuZXJyb3JNYXA9e30sdGhpcy50b1Nob3c9YShbXSksdGhpcy50b0hpZGU9YShbXSl9LHJlc2V0OmZ1bmN0aW9uKCl7dGhpcy5yZXNldEludGVybmFscygpLHRoaXMuY3VycmVudEVsZW1lbnRzPWEoW10pfSxwcmVwYXJlRm9ybTpmdW5jdGlvbigpe3RoaXMucmVzZXQoKSx0aGlzLnRvSGlkZT10aGlzLmVycm9ycygpLmFkZCh0aGlzLmNvbnRhaW5lcnMpfSxwcmVwYXJlRWxlbWVudDpmdW5jdGlvbihhKXt0aGlzLnJlc2V0KCksdGhpcy50b0hpZGU9dGhpcy5lcnJvcnNGb3IoYSl9LGVsZW1lbnRWYWx1ZTpmdW5jdGlvbihiKXt2YXIgYyxkLGU9YShiKSxmPWIudHlwZSxnPVwidW5kZWZpbmVkXCIhPXR5cGVvZiBlLmF0dHIoXCJjb250ZW50ZWRpdGFibGVcIikmJlwiZmFsc2VcIiE9PWUuYXR0cihcImNvbnRlbnRlZGl0YWJsZVwiKTtyZXR1cm5cInJhZGlvXCI9PT1mfHxcImNoZWNrYm94XCI9PT1mP3RoaXMuZmluZEJ5TmFtZShiLm5hbWUpLmZpbHRlcihcIjpjaGVja2VkXCIpLnZhbCgpOlwibnVtYmVyXCI9PT1mJiZcInVuZGVmaW5lZFwiIT10eXBlb2YgYi52YWxpZGl0eT9iLnZhbGlkaXR5LmJhZElucHV0P1wiTmFOXCI6ZS52YWwoKTooYz1nP2UudGV4dCgpOmUudmFsKCksXCJmaWxlXCI9PT1mP1wiQzpcXFxcZmFrZXBhdGhcXFxcXCI9PT1jLnN1YnN0cigwLDEyKT9jLnN1YnN0cigxMik6KGQ9Yy5sYXN0SW5kZXhPZihcIi9cIiksZD49MD9jLnN1YnN0cihkKzEpOihkPWMubGFzdEluZGV4T2YoXCJcXFxcXCIpLGQ+PTA/Yy5zdWJzdHIoZCsxKTpjKSk6XCJzdHJpbmdcIj09dHlwZW9mIGM/Yy5yZXBsYWNlKC9cXHIvZyxcIlwiKTpjKX0sY2hlY2s6ZnVuY3Rpb24oYil7Yj10aGlzLnZhbGlkYXRpb25UYXJnZXRGb3IodGhpcy5jbGVhbihiKSk7dmFyIGMsZCxlLGYsZz1hKGIpLnJ1bGVzKCksaD1hLm1hcChnLGZ1bmN0aW9uKGEsYil7cmV0dXJuIGJ9KS5sZW5ndGgsaT0hMSxqPXRoaXMuZWxlbWVudFZhbHVlKGIpO1wiZnVuY3Rpb25cIj09dHlwZW9mIGcubm9ybWFsaXplcj9mPWcubm9ybWFsaXplcjpcImZ1bmN0aW9uXCI9PXR5cGVvZiB0aGlzLnNldHRpbmdzLm5vcm1hbGl6ZXImJihmPXRoaXMuc2V0dGluZ3Mubm9ybWFsaXplciksZiYmKGo9Zi5jYWxsKGIsaiksZGVsZXRlIGcubm9ybWFsaXplcik7Zm9yKGQgaW4gZyl7ZT17bWV0aG9kOmQscGFyYW1ldGVyczpnW2RdfTt0cnl7aWYoYz1hLnZhbGlkYXRvci5tZXRob2RzW2RdLmNhbGwodGhpcyxqLGIsZS5wYXJhbWV0ZXJzKSxcImRlcGVuZGVuY3ktbWlzbWF0Y2hcIj09PWMmJjE9PT1oKXtpPSEwO2NvbnRpbnVlfWlmKGk9ITEsXCJwZW5kaW5nXCI9PT1jKXJldHVybiB2b2lkKHRoaXMudG9IaWRlPXRoaXMudG9IaWRlLm5vdCh0aGlzLmVycm9yc0ZvcihiKSkpO2lmKCFjKXJldHVybiB0aGlzLmZvcm1hdEFuZEFkZChiLGUpLCExfWNhdGNoKGspe3Rocm93IHRoaXMuc2V0dGluZ3MuZGVidWcmJndpbmRvdy5jb25zb2xlJiZjb25zb2xlLmxvZyhcIkV4Y2VwdGlvbiBvY2N1cnJlZCB3aGVuIGNoZWNraW5nIGVsZW1lbnQgXCIrYi5pZCtcIiwgY2hlY2sgdGhlICdcIitlLm1ldGhvZCtcIicgbWV0aG9kLlwiLGspLGsgaW5zdGFuY2VvZiBUeXBlRXJyb3ImJihrLm1lc3NhZ2UrPVwiLiAgRXhjZXB0aW9uIG9jY3VycmVkIHdoZW4gY2hlY2tpbmcgZWxlbWVudCBcIitiLmlkK1wiLCBjaGVjayB0aGUgJ1wiK2UubWV0aG9kK1wiJyBtZXRob2QuXCIpLGt9fWlmKCFpKXJldHVybiB0aGlzLm9iamVjdExlbmd0aChnKSYmdGhpcy5zdWNjZXNzTGlzdC5wdXNoKGIpLCEwfSxjdXN0b21EYXRhTWVzc2FnZTpmdW5jdGlvbihiLGMpe3JldHVybiBhKGIpLmRhdGEoXCJtc2dcIitjLmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpK2Muc3Vic3RyaW5nKDEpLnRvTG93ZXJDYXNlKCkpfHxhKGIpLmRhdGEoXCJtc2dcIil9LGN1c3RvbU1lc3NhZ2U6ZnVuY3Rpb24oYSxiKXt2YXIgYz10aGlzLnNldHRpbmdzLm1lc3NhZ2VzW2FdO3JldHVybiBjJiYoYy5jb25zdHJ1Y3Rvcj09PVN0cmluZz9jOmNbYl0pfSxmaW5kRGVmaW5lZDpmdW5jdGlvbigpe2Zvcih2YXIgYT0wO2E8YXJndW1lbnRzLmxlbmd0aDthKyspaWYodm9pZCAwIT09YXJndW1lbnRzW2FdKXJldHVybiBhcmd1bWVudHNbYV19LGRlZmF1bHRNZXNzYWdlOmZ1bmN0aW9uKGIsYyl7XCJzdHJpbmdcIj09dHlwZW9mIGMmJihjPXttZXRob2Q6Y30pO3ZhciBkPXRoaXMuZmluZERlZmluZWQodGhpcy5jdXN0b21NZXNzYWdlKGIubmFtZSxjLm1ldGhvZCksdGhpcy5jdXN0b21EYXRhTWVzc2FnZShiLGMubWV0aG9kKSwhdGhpcy5zZXR0aW5ncy5pZ25vcmVUaXRsZSYmYi50aXRsZXx8dm9pZCAwLGEudmFsaWRhdG9yLm1lc3NhZ2VzW2MubWV0aG9kXSxcIjxzdHJvbmc+V2FybmluZzogTm8gbWVzc2FnZSBkZWZpbmVkIGZvciBcIitiLm5hbWUrXCI8L3N0cm9uZz5cIiksZT0vXFwkP1xceyhcXGQrKVxcfS9nO3JldHVyblwiZnVuY3Rpb25cIj09dHlwZW9mIGQ/ZD1kLmNhbGwodGhpcyxjLnBhcmFtZXRlcnMsYik6ZS50ZXN0KGQpJiYoZD1hLnZhbGlkYXRvci5mb3JtYXQoZC5yZXBsYWNlKGUsXCJ7JDF9XCIpLGMucGFyYW1ldGVycykpLGR9LGZvcm1hdEFuZEFkZDpmdW5jdGlvbihhLGIpe3ZhciBjPXRoaXMuZGVmYXVsdE1lc3NhZ2UoYSxiKTt0aGlzLmVycm9yTGlzdC5wdXNoKHttZXNzYWdlOmMsZWxlbWVudDphLG1ldGhvZDpiLm1ldGhvZH0pLHRoaXMuZXJyb3JNYXBbYS5uYW1lXT1jLHRoaXMuc3VibWl0dGVkW2EubmFtZV09Y30sYWRkV3JhcHBlcjpmdW5jdGlvbihhKXtyZXR1cm4gdGhpcy5zZXR0aW5ncy53cmFwcGVyJiYoYT1hLmFkZChhLnBhcmVudCh0aGlzLnNldHRpbmdzLndyYXBwZXIpKSksYX0sZGVmYXVsdFNob3dFcnJvcnM6ZnVuY3Rpb24oKXt2YXIgYSxiLGM7Zm9yKGE9MDt0aGlzLmVycm9yTGlzdFthXTthKyspYz10aGlzLmVycm9yTGlzdFthXSx0aGlzLnNldHRpbmdzLmhpZ2hsaWdodCYmdGhpcy5zZXR0aW5ncy5oaWdobGlnaHQuY2FsbCh0aGlzLGMuZWxlbWVudCx0aGlzLnNldHRpbmdzLmVycm9yQ2xhc3MsdGhpcy5zZXR0aW5ncy52YWxpZENsYXNzKSx0aGlzLnNob3dMYWJlbChjLmVsZW1lbnQsYy5tZXNzYWdlKTtpZih0aGlzLmVycm9yTGlzdC5sZW5ndGgmJih0aGlzLnRvU2hvdz10aGlzLnRvU2hvdy5hZGQodGhpcy5jb250YWluZXJzKSksdGhpcy5zZXR0aW5ncy5zdWNjZXNzKWZvcihhPTA7dGhpcy5zdWNjZXNzTGlzdFthXTthKyspdGhpcy5zaG93TGFiZWwodGhpcy5zdWNjZXNzTGlzdFthXSk7aWYodGhpcy5zZXR0aW5ncy51bmhpZ2hsaWdodClmb3IoYT0wLGI9dGhpcy52YWxpZEVsZW1lbnRzKCk7YlthXTthKyspdGhpcy5zZXR0aW5ncy51bmhpZ2hsaWdodC5jYWxsKHRoaXMsYlthXSx0aGlzLnNldHRpbmdzLmVycm9yQ2xhc3MsdGhpcy5zZXR0aW5ncy52YWxpZENsYXNzKTt0aGlzLnRvSGlkZT10aGlzLnRvSGlkZS5ub3QodGhpcy50b1Nob3cpLHRoaXMuaGlkZUVycm9ycygpLHRoaXMuYWRkV3JhcHBlcih0aGlzLnRvU2hvdykuc2hvdygpfSx2YWxpZEVsZW1lbnRzOmZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuY3VycmVudEVsZW1lbnRzLm5vdCh0aGlzLmludmFsaWRFbGVtZW50cygpKX0saW52YWxpZEVsZW1lbnRzOmZ1bmN0aW9uKCl7cmV0dXJuIGEodGhpcy5lcnJvckxpc3QpLm1hcChmdW5jdGlvbigpe3JldHVybiB0aGlzLmVsZW1lbnR9KX0sc2hvd0xhYmVsOmZ1bmN0aW9uKGIsYyl7dmFyIGQsZSxmLGcsaD10aGlzLmVycm9yc0ZvcihiKSxpPXRoaXMuaWRPck5hbWUoYiksaj1hKGIpLmF0dHIoXCJhcmlhLWRlc2NyaWJlZGJ5XCIpO2gubGVuZ3RoPyhoLnJlbW92ZUNsYXNzKHRoaXMuc2V0dGluZ3MudmFsaWRDbGFzcykuYWRkQ2xhc3ModGhpcy5zZXR0aW5ncy5lcnJvckNsYXNzKSxoLmh0bWwoYykpOihoPWEoXCI8XCIrdGhpcy5zZXR0aW5ncy5lcnJvckVsZW1lbnQrXCI+XCIpLmF0dHIoXCJpZFwiLGkrXCItZXJyb3JcIikuYWRkQ2xhc3ModGhpcy5zZXR0aW5ncy5lcnJvckNsYXNzKS5odG1sKGN8fFwiXCIpLGQ9aCx0aGlzLnNldHRpbmdzLndyYXBwZXImJihkPWguaGlkZSgpLnNob3coKS53cmFwKFwiPFwiK3RoaXMuc2V0dGluZ3Mud3JhcHBlcitcIi8+XCIpLnBhcmVudCgpKSx0aGlzLmxhYmVsQ29udGFpbmVyLmxlbmd0aD90aGlzLmxhYmVsQ29udGFpbmVyLmFwcGVuZChkKTp0aGlzLnNldHRpbmdzLmVycm9yUGxhY2VtZW50P3RoaXMuc2V0dGluZ3MuZXJyb3JQbGFjZW1lbnQuY2FsbCh0aGlzLGQsYShiKSk6ZC5pbnNlcnRBZnRlcihiKSxoLmlzKFwibGFiZWxcIik/aC5hdHRyKFwiZm9yXCIsaSk6MD09PWgucGFyZW50cyhcImxhYmVsW2Zvcj0nXCIrdGhpcy5lc2NhcGVDc3NNZXRhKGkpK1wiJ11cIikubGVuZ3RoJiYoZj1oLmF0dHIoXCJpZFwiKSxqP2oubWF0Y2gobmV3IFJlZ0V4cChcIlxcXFxiXCIrdGhpcy5lc2NhcGVDc3NNZXRhKGYpK1wiXFxcXGJcIikpfHwoais9XCIgXCIrZik6aj1mLGEoYikuYXR0cihcImFyaWEtZGVzY3JpYmVkYnlcIixqKSxlPXRoaXMuZ3JvdXBzW2IubmFtZV0sZSYmKGc9dGhpcyxhLmVhY2goZy5ncm91cHMsZnVuY3Rpb24oYixjKXtjPT09ZSYmYShcIltuYW1lPSdcIitnLmVzY2FwZUNzc01ldGEoYikrXCInXVwiLGcuY3VycmVudEZvcm0pLmF0dHIoXCJhcmlhLWRlc2NyaWJlZGJ5XCIsaC5hdHRyKFwiaWRcIikpfSkpKSksIWMmJnRoaXMuc2V0dGluZ3Muc3VjY2VzcyYmKGgudGV4dChcIlwiKSxcInN0cmluZ1wiPT10eXBlb2YgdGhpcy5zZXR0aW5ncy5zdWNjZXNzP2guYWRkQ2xhc3ModGhpcy5zZXR0aW5ncy5zdWNjZXNzKTp0aGlzLnNldHRpbmdzLnN1Y2Nlc3MoaCxiKSksdGhpcy50b1Nob3c9dGhpcy50b1Nob3cuYWRkKGgpfSxlcnJvcnNGb3I6ZnVuY3Rpb24oYil7dmFyIGM9dGhpcy5lc2NhcGVDc3NNZXRhKHRoaXMuaWRPck5hbWUoYikpLGQ9YShiKS5hdHRyKFwiYXJpYS1kZXNjcmliZWRieVwiKSxlPVwibGFiZWxbZm9yPSdcIitjK1wiJ10sIGxhYmVsW2Zvcj0nXCIrYytcIiddICpcIjtyZXR1cm4gZCYmKGU9ZStcIiwgI1wiK3RoaXMuZXNjYXBlQ3NzTWV0YShkKS5yZXBsYWNlKC9cXHMrL2csXCIsICNcIikpLHRoaXMuZXJyb3JzKCkuZmlsdGVyKGUpfSxlc2NhcGVDc3NNZXRhOmZ1bmN0aW9uKGEpe3JldHVybiBhLnJlcGxhY2UoLyhbXFxcXCFcIiMkJSYnKCkqKywuXFwvOjs8PT4/QFxcW1xcXV5ge3x9fl0pL2csXCJcXFxcJDFcIil9LGlkT3JOYW1lOmZ1bmN0aW9uKGEpe3JldHVybiB0aGlzLmdyb3Vwc1thLm5hbWVdfHwodGhpcy5jaGVja2FibGUoYSk/YS5uYW1lOmEuaWR8fGEubmFtZSl9LHZhbGlkYXRpb25UYXJnZXRGb3I6ZnVuY3Rpb24oYil7cmV0dXJuIHRoaXMuY2hlY2thYmxlKGIpJiYoYj10aGlzLmZpbmRCeU5hbWUoYi5uYW1lKSksYShiKS5ub3QodGhpcy5zZXR0aW5ncy5pZ25vcmUpWzBdfSxjaGVja2FibGU6ZnVuY3Rpb24oYSl7cmV0dXJuL3JhZGlvfGNoZWNrYm94L2kudGVzdChhLnR5cGUpfSxmaW5kQnlOYW1lOmZ1bmN0aW9uKGIpe3JldHVybiBhKHRoaXMuY3VycmVudEZvcm0pLmZpbmQoXCJbbmFtZT0nXCIrdGhpcy5lc2NhcGVDc3NNZXRhKGIpK1wiJ11cIil9LGdldExlbmd0aDpmdW5jdGlvbihiLGMpe3N3aXRjaChjLm5vZGVOYW1lLnRvTG93ZXJDYXNlKCkpe2Nhc2VcInNlbGVjdFwiOnJldHVybiBhKFwib3B0aW9uOnNlbGVjdGVkXCIsYykubGVuZ3RoO2Nhc2VcImlucHV0XCI6aWYodGhpcy5jaGVja2FibGUoYykpcmV0dXJuIHRoaXMuZmluZEJ5TmFtZShjLm5hbWUpLmZpbHRlcihcIjpjaGVja2VkXCIpLmxlbmd0aH1yZXR1cm4gYi5sZW5ndGh9LGRlcGVuZDpmdW5jdGlvbihhLGIpe3JldHVybiF0aGlzLmRlcGVuZFR5cGVzW3R5cGVvZiBhXXx8dGhpcy5kZXBlbmRUeXBlc1t0eXBlb2YgYV0oYSxiKX0sZGVwZW5kVHlwZXM6e1wiYm9vbGVhblwiOmZ1bmN0aW9uKGEpe3JldHVybiBhfSxzdHJpbmc6ZnVuY3Rpb24oYixjKXtyZXR1cm4hIWEoYixjLmZvcm0pLmxlbmd0aH0sXCJmdW5jdGlvblwiOmZ1bmN0aW9uKGEsYil7cmV0dXJuIGEoYil9fSxvcHRpb25hbDpmdW5jdGlvbihiKXt2YXIgYz10aGlzLmVsZW1lbnRWYWx1ZShiKTtyZXR1cm4hYS52YWxpZGF0b3IubWV0aG9kcy5yZXF1aXJlZC5jYWxsKHRoaXMsYyxiKSYmXCJkZXBlbmRlbmN5LW1pc21hdGNoXCJ9LHN0YXJ0UmVxdWVzdDpmdW5jdGlvbihiKXt0aGlzLnBlbmRpbmdbYi5uYW1lXXx8KHRoaXMucGVuZGluZ1JlcXVlc3QrKyxhKGIpLmFkZENsYXNzKHRoaXMuc2V0dGluZ3MucGVuZGluZ0NsYXNzKSx0aGlzLnBlbmRpbmdbYi5uYW1lXT0hMCl9LHN0b3BSZXF1ZXN0OmZ1bmN0aW9uKGIsYyl7dGhpcy5wZW5kaW5nUmVxdWVzdC0tLHRoaXMucGVuZGluZ1JlcXVlc3Q8MCYmKHRoaXMucGVuZGluZ1JlcXVlc3Q9MCksZGVsZXRlIHRoaXMucGVuZGluZ1tiLm5hbWVdLGEoYikucmVtb3ZlQ2xhc3ModGhpcy5zZXR0aW5ncy5wZW5kaW5nQ2xhc3MpLGMmJjA9PT10aGlzLnBlbmRpbmdSZXF1ZXN0JiZ0aGlzLmZvcm1TdWJtaXR0ZWQmJnRoaXMuZm9ybSgpPyhhKHRoaXMuY3VycmVudEZvcm0pLnN1Ym1pdCgpLHRoaXMuc3VibWl0QnV0dG9uJiZhKFwiaW5wdXQ6aGlkZGVuW25hbWU9J1wiK3RoaXMuc3VibWl0QnV0dG9uLm5hbWUrXCInXVwiLHRoaXMuY3VycmVudEZvcm0pLnJlbW92ZSgpLHRoaXMuZm9ybVN1Ym1pdHRlZD0hMSk6IWMmJjA9PT10aGlzLnBlbmRpbmdSZXF1ZXN0JiZ0aGlzLmZvcm1TdWJtaXR0ZWQmJihhKHRoaXMuY3VycmVudEZvcm0pLnRyaWdnZXJIYW5kbGVyKFwiaW52YWxpZC1mb3JtXCIsW3RoaXNdKSx0aGlzLmZvcm1TdWJtaXR0ZWQ9ITEpfSxwcmV2aW91c1ZhbHVlOmZ1bmN0aW9uKGIsYyl7cmV0dXJuIGM9XCJzdHJpbmdcIj09dHlwZW9mIGMmJmN8fFwicmVtb3RlXCIsYS5kYXRhKGIsXCJwcmV2aW91c1ZhbHVlXCIpfHxhLmRhdGEoYixcInByZXZpb3VzVmFsdWVcIix7b2xkOm51bGwsdmFsaWQ6ITAsbWVzc2FnZTp0aGlzLmRlZmF1bHRNZXNzYWdlKGIse21ldGhvZDpjfSl9KX0sZGVzdHJveTpmdW5jdGlvbigpe3RoaXMucmVzZXRGb3JtKCksYSh0aGlzLmN1cnJlbnRGb3JtKS5vZmYoXCIudmFsaWRhdGVcIikucmVtb3ZlRGF0YShcInZhbGlkYXRvclwiKS5maW5kKFwiLnZhbGlkYXRlLWVxdWFsVG8tYmx1clwiKS5vZmYoXCIudmFsaWRhdGUtZXF1YWxUb1wiKS5yZW1vdmVDbGFzcyhcInZhbGlkYXRlLWVxdWFsVG8tYmx1clwiKS5maW5kKFwiLnZhbGlkYXRlLWxlc3NUaGFuLWJsdXJcIikub2ZmKFwiLnZhbGlkYXRlLWxlc3NUaGFuXCIpLnJlbW92ZUNsYXNzKFwidmFsaWRhdGUtbGVzc1RoYW4tYmx1clwiKS5maW5kKFwiLnZhbGlkYXRlLWxlc3NUaGFuRXF1YWwtYmx1clwiKS5vZmYoXCIudmFsaWRhdGUtbGVzc1RoYW5FcXVhbFwiKS5yZW1vdmVDbGFzcyhcInZhbGlkYXRlLWxlc3NUaGFuRXF1YWwtYmx1clwiKS5maW5kKFwiLnZhbGlkYXRlLWdyZWF0ZXJUaGFuRXF1YWwtYmx1clwiKS5vZmYoXCIudmFsaWRhdGUtZ3JlYXRlclRoYW5FcXVhbFwiKS5yZW1vdmVDbGFzcyhcInZhbGlkYXRlLWdyZWF0ZXJUaGFuRXF1YWwtYmx1clwiKS5maW5kKFwiLnZhbGlkYXRlLWdyZWF0ZXJUaGFuLWJsdXJcIikub2ZmKFwiLnZhbGlkYXRlLWdyZWF0ZXJUaGFuXCIpLnJlbW92ZUNsYXNzKFwidmFsaWRhdGUtZ3JlYXRlclRoYW4tYmx1clwiKX19LGNsYXNzUnVsZVNldHRpbmdzOntyZXF1aXJlZDp7cmVxdWlyZWQ6ITB9LGVtYWlsOntlbWFpbDohMH0sdXJsOnt1cmw6ITB9LGRhdGU6e2RhdGU6ITB9LGRhdGVJU086e2RhdGVJU086ITB9LG51bWJlcjp7bnVtYmVyOiEwfSxkaWdpdHM6e2RpZ2l0czohMH0sY3JlZGl0Y2FyZDp7Y3JlZGl0Y2FyZDohMH19LGFkZENsYXNzUnVsZXM6ZnVuY3Rpb24oYixjKXtiLmNvbnN0cnVjdG9yPT09U3RyaW5nP3RoaXMuY2xhc3NSdWxlU2V0dGluZ3NbYl09YzphLmV4dGVuZCh0aGlzLmNsYXNzUnVsZVNldHRpbmdzLGIpfSxjbGFzc1J1bGVzOmZ1bmN0aW9uKGIpe3ZhciBjPXt9LGQ9YShiKS5hdHRyKFwiY2xhc3NcIik7cmV0dXJuIGQmJmEuZWFjaChkLnNwbGl0KFwiIFwiKSxmdW5jdGlvbigpe3RoaXMgaW4gYS52YWxpZGF0b3IuY2xhc3NSdWxlU2V0dGluZ3MmJmEuZXh0ZW5kKGMsYS52YWxpZGF0b3IuY2xhc3NSdWxlU2V0dGluZ3NbdGhpc10pfSksY30sbm9ybWFsaXplQXR0cmlidXRlUnVsZTpmdW5jdGlvbihhLGIsYyxkKXsvbWlufG1heHxzdGVwLy50ZXN0KGMpJiYobnVsbD09PWJ8fC9udW1iZXJ8cmFuZ2V8dGV4dC8udGVzdChiKSkmJihkPU51bWJlcihkKSxpc05hTihkKSYmKGQ9dm9pZCAwKSksZHx8MD09PWQ/YVtjXT1kOmI9PT1jJiZcInJhbmdlXCIhPT1iJiYoYVtjXT0hMCl9LGF0dHJpYnV0ZVJ1bGVzOmZ1bmN0aW9uKGIpe3ZhciBjLGQsZT17fSxmPWEoYiksZz1iLmdldEF0dHJpYnV0ZShcInR5cGVcIik7Zm9yKGMgaW4gYS52YWxpZGF0b3IubWV0aG9kcylcInJlcXVpcmVkXCI9PT1jPyhkPWIuZ2V0QXR0cmlidXRlKGMpLFwiXCI9PT1kJiYoZD0hMCksZD0hIWQpOmQ9Zi5hdHRyKGMpLHRoaXMubm9ybWFsaXplQXR0cmlidXRlUnVsZShlLGcsYyxkKTtyZXR1cm4gZS5tYXhsZW5ndGgmJi8tMXwyMTQ3NDgzNjQ3fDUyNDI4OC8udGVzdChlLm1heGxlbmd0aCkmJmRlbGV0ZSBlLm1heGxlbmd0aCxlfSxkYXRhUnVsZXM6ZnVuY3Rpb24oYil7dmFyIGMsZCxlPXt9LGY9YShiKSxnPWIuZ2V0QXR0cmlidXRlKFwidHlwZVwiKTtmb3IoYyBpbiBhLnZhbGlkYXRvci5tZXRob2RzKWQ9Zi5kYXRhKFwicnVsZVwiK2MuY2hhckF0KDApLnRvVXBwZXJDYXNlKCkrYy5zdWJzdHJpbmcoMSkudG9Mb3dlckNhc2UoKSksXCJcIj09PWQmJihkPSEwKSx0aGlzLm5vcm1hbGl6ZUF0dHJpYnV0ZVJ1bGUoZSxnLGMsZCk7cmV0dXJuIGV9LHN0YXRpY1J1bGVzOmZ1bmN0aW9uKGIpe3ZhciBjPXt9LGQ9YS5kYXRhKGIuZm9ybSxcInZhbGlkYXRvclwiKTtyZXR1cm4gZC5zZXR0aW5ncy5ydWxlcyYmKGM9YS52YWxpZGF0b3Iubm9ybWFsaXplUnVsZShkLnNldHRpbmdzLnJ1bGVzW2IubmFtZV0pfHx7fSksY30sbm9ybWFsaXplUnVsZXM6ZnVuY3Rpb24oYixjKXtyZXR1cm4gYS5lYWNoKGIsZnVuY3Rpb24oZCxlKXtpZihlPT09ITEpcmV0dXJuIHZvaWQgZGVsZXRlIGJbZF07aWYoZS5wYXJhbXx8ZS5kZXBlbmRzKXt2YXIgZj0hMDtzd2l0Y2godHlwZW9mIGUuZGVwZW5kcyl7Y2FzZVwic3RyaW5nXCI6Zj0hIWEoZS5kZXBlbmRzLGMuZm9ybSkubGVuZ3RoO2JyZWFrO2Nhc2VcImZ1bmN0aW9uXCI6Zj1lLmRlcGVuZHMuY2FsbChjLGMpfWY/YltkXT12b2lkIDA9PT1lLnBhcmFtfHxlLnBhcmFtOihhLmRhdGEoYy5mb3JtLFwidmFsaWRhdG9yXCIpLnJlc2V0RWxlbWVudHMoYShjKSksZGVsZXRlIGJbZF0pfX0pLGEuZWFjaChiLGZ1bmN0aW9uKGQsZSl7YltkXT1hLmlzRnVuY3Rpb24oZSkmJlwibm9ybWFsaXplclwiIT09ZD9lKGMpOmV9KSxhLmVhY2goW1wibWlubGVuZ3RoXCIsXCJtYXhsZW5ndGhcIl0sZnVuY3Rpb24oKXtiW3RoaXNdJiYoYlt0aGlzXT1OdW1iZXIoYlt0aGlzXSkpfSksYS5lYWNoKFtcInJhbmdlbGVuZ3RoXCIsXCJyYW5nZVwiXSxmdW5jdGlvbigpe3ZhciBjO2JbdGhpc10mJihhLmlzQXJyYXkoYlt0aGlzXSk/Ylt0aGlzXT1bTnVtYmVyKGJbdGhpc11bMF0pLE51bWJlcihiW3RoaXNdWzFdKV06XCJzdHJpbmdcIj09dHlwZW9mIGJbdGhpc10mJihjPWJbdGhpc10ucmVwbGFjZSgvW1xcW1xcXV0vZyxcIlwiKS5zcGxpdCgvW1xccyxdKy8pLGJbdGhpc109W051bWJlcihjWzBdKSxOdW1iZXIoY1sxXSldKSl9KSxhLnZhbGlkYXRvci5hdXRvQ3JlYXRlUmFuZ2VzJiYobnVsbCE9Yi5taW4mJm51bGwhPWIubWF4JiYoYi5yYW5nZT1bYi5taW4sYi5tYXhdLGRlbGV0ZSBiLm1pbixkZWxldGUgYi5tYXgpLG51bGwhPWIubWlubGVuZ3RoJiZudWxsIT1iLm1heGxlbmd0aCYmKGIucmFuZ2VsZW5ndGg9W2IubWlubGVuZ3RoLGIubWF4bGVuZ3RoXSxkZWxldGUgYi5taW5sZW5ndGgsZGVsZXRlIGIubWF4bGVuZ3RoKSksYn0sbm9ybWFsaXplUnVsZTpmdW5jdGlvbihiKXtpZihcInN0cmluZ1wiPT10eXBlb2YgYil7dmFyIGM9e307YS5lYWNoKGIuc3BsaXQoL1xccy8pLGZ1bmN0aW9uKCl7Y1t0aGlzXT0hMH0pLGI9Y31yZXR1cm4gYn0sYWRkTWV0aG9kOmZ1bmN0aW9uKGIsYyxkKXthLnZhbGlkYXRvci5tZXRob2RzW2JdPWMsYS52YWxpZGF0b3IubWVzc2FnZXNbYl09dm9pZCAwIT09ZD9kOmEudmFsaWRhdG9yLm1lc3NhZ2VzW2JdLGMubGVuZ3RoPDMmJmEudmFsaWRhdG9yLmFkZENsYXNzUnVsZXMoYixhLnZhbGlkYXRvci5ub3JtYWxpemVSdWxlKGIpKX0sbWV0aG9kczp7cmVxdWlyZWQ6ZnVuY3Rpb24oYixjLGQpe2lmKCF0aGlzLmRlcGVuZChkLGMpKXJldHVyblwiZGVwZW5kZW5jeS1taXNtYXRjaFwiO2lmKFwic2VsZWN0XCI9PT1jLm5vZGVOYW1lLnRvTG93ZXJDYXNlKCkpe3ZhciBlPWEoYykudmFsKCk7cmV0dXJuIGUmJmUubGVuZ3RoPjB9cmV0dXJuIHRoaXMuY2hlY2thYmxlKGMpP3RoaXMuZ2V0TGVuZ3RoKGIsYyk+MDp2b2lkIDAhPT1iJiZudWxsIT09YiYmYi5sZW5ndGg+MH0sZW1haWw6ZnVuY3Rpb24oYSxiKXtyZXR1cm4gdGhpcy5vcHRpb25hbChiKXx8L15bYS16QS1aMC05LiEjJCUmJyorXFwvPT9eX2B7fH1+LV0rQFthLXpBLVowLTldKD86W2EtekEtWjAtOS1dezAsNjF9W2EtekEtWjAtOV0pPyg/OlxcLlthLXpBLVowLTldKD86W2EtekEtWjAtOS1dezAsNjF9W2EtekEtWjAtOV0pPykqJC8udGVzdChhKX0sdXJsOmZ1bmN0aW9uKGEsYil7cmV0dXJuIHRoaXMub3B0aW9uYWwoYil8fC9eKD86KD86KD86aHR0cHM/fGZ0cCk6KT9cXC9cXC8pKD86XFxTKyg/OjpcXFMqKT9AKT8oPzooPyEoPzoxMHwxMjcpKD86XFwuXFxkezEsM30pezN9KSg/ISg/OjE2OVxcLjI1NHwxOTJcXC4xNjgpKD86XFwuXFxkezEsM30pezJ9KSg/ITE3MlxcLig/OjFbNi05XXwyXFxkfDNbMC0xXSkoPzpcXC5cXGR7MSwzfSl7Mn0pKD86WzEtOV1cXGQ/fDFcXGRcXGR8MlswMV1cXGR8MjJbMC0zXSkoPzpcXC4oPzoxP1xcZHsxLDJ9fDJbMC00XVxcZHwyNVswLTVdKSl7Mn0oPzpcXC4oPzpbMS05XVxcZD98MVxcZFxcZHwyWzAtNF1cXGR8MjVbMC00XSkpfCg/Oig/OlthLXpcXHUwMGExLVxcdWZmZmYwLTldLSopKlthLXpcXHUwMGExLVxcdWZmZmYwLTldKykoPzpcXC4oPzpbYS16XFx1MDBhMS1cXHVmZmZmMC05XS0qKSpbYS16XFx1MDBhMS1cXHVmZmZmMC05XSspKig/OlxcLig/OlthLXpcXHUwMGExLVxcdWZmZmZdezIsfSkpLj8pKD86OlxcZHsyLDV9KT8oPzpbXFwvPyNdXFxTKik/JC9pLnRlc3QoYSl9LGRhdGU6ZnVuY3Rpb24oKXt2YXIgYT0hMTtyZXR1cm4gZnVuY3Rpb24oYixjKXtyZXR1cm4gYXx8KGE9ITAsdGhpcy5zZXR0aW5ncy5kZWJ1ZyYmd2luZG93LmNvbnNvbGUmJmNvbnNvbGUud2FybihcIlRoZSBgZGF0ZWAgbWV0aG9kIGlzIGRlcHJlY2F0ZWQgYW5kIHdpbGwgYmUgcmVtb3ZlZCBpbiB2ZXJzaW9uICcyLjAuMCcuXFxuUGxlYXNlIGRvbid0IHVzZSBpdCwgc2luY2UgaXQgcmVsaWVzIG9uIHRoZSBEYXRlIGNvbnN0cnVjdG9yLCB3aGljaFxcbmJlaGF2ZXMgdmVyeSBkaWZmZXJlbnRseSBhY3Jvc3MgYnJvd3NlcnMgYW5kIGxvY2FsZXMuIFVzZSBgZGF0ZUlTT2BcXG5pbnN0ZWFkIG9yIG9uZSBvZiB0aGUgbG9jYWxlIHNwZWNpZmljIG1ldGhvZHMgaW4gYGxvY2FsaXphdGlvbnMvYFxcbmFuZCBgYWRkaXRpb25hbC1tZXRob2RzLmpzYC5cIikpLHRoaXMub3B0aW9uYWwoYyl8fCEvSW52YWxpZHxOYU4vLnRlc3QobmV3IERhdGUoYikudG9TdHJpbmcoKSl9fSgpLGRhdGVJU086ZnVuY3Rpb24oYSxiKXtyZXR1cm4gdGhpcy5vcHRpb25hbChiKXx8L15cXGR7NH1bXFwvXFwtXSgwP1sxLTldfDFbMDEyXSlbXFwvXFwtXSgwP1sxLTldfFsxMl1bMC05XXwzWzAxXSkkLy50ZXN0KGEpfSxudW1iZXI6ZnVuY3Rpb24oYSxiKXtyZXR1cm4gdGhpcy5vcHRpb25hbChiKXx8L14oPzotP1xcZCt8LT9cXGR7MSwzfSg/OixcXGR7M30pKyk/KD86XFwuXFxkKyk/JC8udGVzdChhKX0sZGlnaXRzOmZ1bmN0aW9uKGEsYil7cmV0dXJuIHRoaXMub3B0aW9uYWwoYil8fC9eXFxkKyQvLnRlc3QoYSl9LG1pbmxlbmd0aDpmdW5jdGlvbihiLGMsZCl7dmFyIGU9YS5pc0FycmF5KGIpP2IubGVuZ3RoOnRoaXMuZ2V0TGVuZ3RoKGIsYyk7cmV0dXJuIHRoaXMub3B0aW9uYWwoYyl8fGU+PWR9LG1heGxlbmd0aDpmdW5jdGlvbihiLGMsZCl7dmFyIGU9YS5pc0FycmF5KGIpP2IubGVuZ3RoOnRoaXMuZ2V0TGVuZ3RoKGIsYyk7cmV0dXJuIHRoaXMub3B0aW9uYWwoYyl8fGU8PWR9LHJhbmdlbGVuZ3RoOmZ1bmN0aW9uKGIsYyxkKXt2YXIgZT1hLmlzQXJyYXkoYik/Yi5sZW5ndGg6dGhpcy5nZXRMZW5ndGgoYixjKTtyZXR1cm4gdGhpcy5vcHRpb25hbChjKXx8ZT49ZFswXSYmZTw9ZFsxXX0sbWluOmZ1bmN0aW9uKGEsYixjKXtyZXR1cm4gdGhpcy5vcHRpb25hbChiKXx8YT49Y30sbWF4OmZ1bmN0aW9uKGEsYixjKXtyZXR1cm4gdGhpcy5vcHRpb25hbChiKXx8YTw9Y30scmFuZ2U6ZnVuY3Rpb24oYSxiLGMpe3JldHVybiB0aGlzLm9wdGlvbmFsKGIpfHxhPj1jWzBdJiZhPD1jWzFdfSxzdGVwOmZ1bmN0aW9uKGIsYyxkKXt2YXIgZSxmPWEoYykuYXR0cihcInR5cGVcIiksZz1cIlN0ZXAgYXR0cmlidXRlIG9uIGlucHV0IHR5cGUgXCIrZitcIiBpcyBub3Qgc3VwcG9ydGVkLlwiLGg9W1widGV4dFwiLFwibnVtYmVyXCIsXCJyYW5nZVwiXSxpPW5ldyBSZWdFeHAoXCJcXFxcYlwiK2YrXCJcXFxcYlwiKSxqPWYmJiFpLnRlc3QoaC5qb2luKCkpLGs9ZnVuY3Rpb24oYSl7dmFyIGI9KFwiXCIrYSkubWF0Y2goLyg/OlxcLihcXGQrKSk/JC8pO3JldHVybiBiJiZiWzFdP2JbMV0ubGVuZ3RoOjB9LGw9ZnVuY3Rpb24oYSl7cmV0dXJuIE1hdGgucm91bmQoYSpNYXRoLnBvdygxMCxlKSl9LG09ITA7aWYoail0aHJvdyBuZXcgRXJyb3IoZyk7cmV0dXJuIGU9ayhkKSwoayhiKT5lfHxsKGIpJWwoZCkhPT0wKSYmKG09ITEpLHRoaXMub3B0aW9uYWwoYyl8fG19LGVxdWFsVG86ZnVuY3Rpb24oYixjLGQpe3ZhciBlPWEoZCk7cmV0dXJuIHRoaXMuc2V0dGluZ3Mub25mb2N1c291dCYmZS5ub3QoXCIudmFsaWRhdGUtZXF1YWxUby1ibHVyXCIpLmxlbmd0aCYmZS5hZGRDbGFzcyhcInZhbGlkYXRlLWVxdWFsVG8tYmx1clwiKS5vbihcImJsdXIudmFsaWRhdGUtZXF1YWxUb1wiLGZ1bmN0aW9uKCl7YShjKS52YWxpZCgpfSksYj09PWUudmFsKCl9LHJlbW90ZTpmdW5jdGlvbihiLGMsZCxlKXtpZih0aGlzLm9wdGlvbmFsKGMpKXJldHVyblwiZGVwZW5kZW5jeS1taXNtYXRjaFwiO2U9XCJzdHJpbmdcIj09dHlwZW9mIGUmJmV8fFwicmVtb3RlXCI7dmFyIGYsZyxoLGk9dGhpcy5wcmV2aW91c1ZhbHVlKGMsZSk7cmV0dXJuIHRoaXMuc2V0dGluZ3MubWVzc2FnZXNbYy5uYW1lXXx8KHRoaXMuc2V0dGluZ3MubWVzc2FnZXNbYy5uYW1lXT17fSksaS5vcmlnaW5hbE1lc3NhZ2U9aS5vcmlnaW5hbE1lc3NhZ2V8fHRoaXMuc2V0dGluZ3MubWVzc2FnZXNbYy5uYW1lXVtlXSx0aGlzLnNldHRpbmdzLm1lc3NhZ2VzW2MubmFtZV1bZV09aS5tZXNzYWdlLGQ9XCJzdHJpbmdcIj09dHlwZW9mIGQmJnt1cmw6ZH18fGQsaD1hLnBhcmFtKGEuZXh0ZW5kKHtkYXRhOmJ9LGQuZGF0YSkpLGkub2xkPT09aD9pLnZhbGlkOihpLm9sZD1oLGY9dGhpcyx0aGlzLnN0YXJ0UmVxdWVzdChjKSxnPXt9LGdbYy5uYW1lXT1iLGEuYWpheChhLmV4dGVuZCghMCx7bW9kZTpcImFib3J0XCIscG9ydDpcInZhbGlkYXRlXCIrYy5uYW1lLGRhdGFUeXBlOlwianNvblwiLGRhdGE6Zyxjb250ZXh0OmYuY3VycmVudEZvcm0sc3VjY2VzczpmdW5jdGlvbihhKXt2YXIgZCxnLGgsaj1hPT09ITB8fFwidHJ1ZVwiPT09YTtmLnNldHRpbmdzLm1lc3NhZ2VzW2MubmFtZV1bZV09aS5vcmlnaW5hbE1lc3NhZ2Usaj8oaD1mLmZvcm1TdWJtaXR0ZWQsZi5yZXNldEludGVybmFscygpLGYudG9IaWRlPWYuZXJyb3JzRm9yKGMpLGYuZm9ybVN1Ym1pdHRlZD1oLGYuc3VjY2Vzc0xpc3QucHVzaChjKSxmLmludmFsaWRbYy5uYW1lXT0hMSxmLnNob3dFcnJvcnMoKSk6KGQ9e30sZz1hfHxmLmRlZmF1bHRNZXNzYWdlKGMse21ldGhvZDplLHBhcmFtZXRlcnM6Yn0pLGRbYy5uYW1lXT1pLm1lc3NhZ2U9ZyxmLmludmFsaWRbYy5uYW1lXT0hMCxmLnNob3dFcnJvcnMoZCkpLGkudmFsaWQ9aixmLnN0b3BSZXF1ZXN0KGMsail9fSxkKSksXCJwZW5kaW5nXCIpfX19KTt2YXIgYixjPXt9O3JldHVybiBhLmFqYXhQcmVmaWx0ZXI/YS5hamF4UHJlZmlsdGVyKGZ1bmN0aW9uKGEsYixkKXt2YXIgZT1hLnBvcnQ7XCJhYm9ydFwiPT09YS5tb2RlJiYoY1tlXSYmY1tlXS5hYm9ydCgpLGNbZV09ZCl9KTooYj1hLmFqYXgsYS5hamF4PWZ1bmN0aW9uKGQpe3ZhciBlPShcIm1vZGVcImluIGQ/ZDphLmFqYXhTZXR0aW5ncykubW9kZSxmPShcInBvcnRcImluIGQ/ZDphLmFqYXhTZXR0aW5ncykucG9ydDtyZXR1cm5cImFib3J0XCI9PT1lPyhjW2ZdJiZjW2ZdLmFib3J0KCksY1tmXT1iLmFwcGx5KHRoaXMsYXJndW1lbnRzKSxjW2ZdKTpiLmFwcGx5KHRoaXMsYXJndW1lbnRzKX0pLGF9KTtcblxuXG4kKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbiAoKSB7XG4gICAgJCgnc2VsZWN0JykubmljZVNlbGVjdCgpO1xuICAgICQoJ1tiYW5uZXJTbGlkZXJfanNdJykuZWFjaChmdW5jdGlvbiAoKSB7XG4gICAgICBuZXcgU3dpcGVyKCQodGhpcylbMF0sIHtcbiAgICAgICAgZGlyZWN0aW9uOiAnaG9yaXpvbnRhbCcsXG4gICAgICAgIHNsaWRlc1BlclZpZXc6IDEsXG4gICAgICAgIHNwZWVkOiA3MDAsXG4gICAgICAgIGxvb3A6IHRydWUsXG4gICAgICAgIGZhZGVFZmZlY3Q6IHtcbiAgICAgICAgICBjcm9zc0ZhZGU6IHRydWVcbiAgICAgICAgfSxcbiAgICAgICAgZWZmZWN0OiAnZmFkZScsXG4gICAgICAgIGF1dG9wbGF5OiB7XG4gICAgICAgICAgZGVsYXk6IDM2MDAsXG4gICAgICAgICAgZGlzYWJsZU9uSW50ZXJhY3Rpb246IGZhbHNlLFxuICAgICAgICB9LFxuICAgICAgICBvbjoge1xuICAgICAgICAgIGJlZm9yZUluaXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGNvbnN0IHNsaWRlcyA9IHRoaXMuc2xpZGVzLmxlbmd0aDtcbiAgICAgICAgICAgIGNvbnN0IHNsaWRlc1BlclZpZXcgPSB0aGlzLnBhcmFtcy5zbGlkZXNQZXJWaWV3O1xuXG4gICAgICAgICAgICAvLyDQn9GA0L7QstC10YDQutCwINC60L7Qu9C40YfQtdGB0YLQstCwINGB0LvQsNC50LTQvtCyXG4gICAgICAgICAgICBpZiAoc2xpZGVzIDw9IHNsaWRlc1BlclZpZXcpIHtcbiAgICAgICAgICAgICAgdGhpcy5wYXJhbXMubG9vcCA9IGZhbHNlOyAvLyDQntGC0LrQu9GO0YfQsNC10LwgbG9vcFxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgdGhpcy5wYXJhbXMubG9vcCA9IHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSxcbiAgICAgICAgfSxcbiAgICAgIH0pO1xuICB9KTtcbiAgJCgnW25ld3NTbGlkZXJfanNdJykuZWFjaChmdW5jdGlvbiAoKSB7XG4gICAgdmFyIHN3aXBlciA9IG5ldyBTd2lwZXIoJCh0aGlzKVswXSwge1xuICAgICAgZGlyZWN0aW9uOiAnaG9yaXpvbnRhbCcsXG4gICAgICBzbGlkZXNQZXJWaWV3OiAxLjcsXG4gICAgICBzcGFjZUJldHdlZW46IDE3LFxuICAgICAgc3BlZWQ6IDcwMCxcbiAgICAgIHNjcm9sbGJhcjoge1xuICAgICAgICBlbmFibGU6IHRydWUsXG4gICAgICAgIGVsOiBcIi5zd2lwZXItc2Nyb2xsYmFyXCIsXG4gICAgICAgIGRyYWdnYWJsZTogdHJ1ZSxcbiAgICAgICAgaGlkZTogZmFsc2UsXG4gICAgICB9LFxuICAgIH0pO1xuICB9KTtcbiAgJCgnW3BsdXNTaXplU2xpZGVyX2pzXScpLmVhY2goZnVuY3Rpb24gKCkge1xuICAgIHZhciBzd2lwZXIgPSBuZXcgU3dpcGVyKCQodGhpcylbMF0sIHtcbiAgICAgIGRpcmVjdGlvbjogJ2hvcml6b250YWwnLFxuICAgICAgc2xpZGVzUGVyVmlldzogMSxcbiAgICAgIHNwYWNlQmV0d2VlbjogMTAsXG4gICAgICBzcGVlZDogNzAwLFxuICAgICAgc2Nyb2xsYmFyOiB7XG4gICAgICAgIGVuYWJsZTogdHJ1ZSxcbiAgICAgICAgZWw6IFwiLnN3aXBlci1zY3JvbGxcIixcbiAgICAgICAgZHJhZ2dhYmxlOiB0cnVlLFxuICAgICAgICBoaWRlOiBmYWxzZSxcbiAgICAgIH0sXG4gICAgICBuYXZpZ2F0aW9uOiB7XG4gICAgICAgIG5leHRFbDogJy5zZWN0aW9uLXBsdXMtc2l6ZSAuc3dpcGVyX19uYXZpZ2F0aW9uLWJ0bi1uZXh0JyxcbiAgICAgICAgcHJldkVsOiAnLnNlY3Rpb24tcGx1cy1zaXplIC5zd2lwZXJfX25hdmlnYXRpb24tYnRuLXByZXYnLFxuICAgICAgfSxcbiAgICAgIGJyZWFrcG9pbnRzOiB7XG4gICAgICAgIDA6IHtcbiAgICAgICAgICBzY3JvbGxiYXI6IHtcbiAgICAgICAgICAgIGVuYWJsZWQ6IHRydWUsXG4gICAgICAgICAgfSxcbiAgICAgICAgfSxcbiAgICAgICAgNzY3OiB7XG4gICAgICAgICAgc2xpZGVzUGVyVmlldzogMyxcbiAgICAgICAgICBzcGFjZUJldHdlZW46IDE4LFxuICAgICAgICAgIHNjcm9sbGJhcjoge1xuICAgICAgICAgICAgZW5hYmxlZDogZmFsc2UsXG4gICAgICAgICAgfSxcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgfSk7XG4gIH0pO1xuICAkKCdbZ2FsbGVyeUdyaWRTd2lwZXJfSlNdJykuZWFjaChmdW5jdGlvbiAoKSB7XG4gICAgdmFyIHN3aXBlciA9IG5ldyBTd2lwZXIoJCh0aGlzKVswXSwge1xuICAgICAgc3BlZWQ6IDMwMCxcbiAgICAgIHNsaWRlc1BlclZpZXc6IDEsXG4gICAgICBzcGFjZUJldHdlZW46IDEwLFxuICAgICAgZWZmZWN0OiAnZmFkZScsXG4gICAgICBmYWRlRWZmZWN0OiB7XG4gICAgICAgIGNyb3NzRmFkZTogdHJ1ZVxuICAgICAgfSxcbiAgICAgIG5hdmlnYXRpb246IHtcbiAgICAgICAgbmV4dEVsOiAnLnN3aXBlci1uYXZpZ2F0aW9uX19idG4tbmV4dCcsXG4gICAgICAgIHByZXZFbDogJy5zd2lwZXItbmF2aWdhdGlvbl9fYnRuLXByZXYnLFxuICAgICAgfSxcbiAgICAgIHBhZ2luYXRpb246IHtcbiAgICAgICAgZWw6IFwiLnN3aXBlci1wYWdpbmF0aW9uXCIsXG4gICAgICAgIGNsaWNrYWJsZTogdHJ1ZSxcbiAgICAgICAgcmVuZGVyQnVsbGV0OiBmdW5jdGlvbiAoaW5kZXgsIGNsYXNzTmFtZSkge1xuICAgICAgICAgIHJldHVybiAnPGJ1dHRvbiBjbGFzcz1cIicgKyBjbGFzc05hbWUgKyAnXCI+JyArIChpbmRleCArIDEpICsgJzwvYnV0dG9uPic7XG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgICAgb246IHtcbiAgICAgICAgc2xpZGVDaGFuZ2U6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgIGxldCBlbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zZWN0aW9uLW1haW4tZ2FsbGVyeScpO1xuICAgICAgICAgIGxldCBpc1N0aWNreSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5oZWFkZXIuZml4ZWQnKTtcbiAgICAgICAgICBsZXQgaGVhZGVySGVpZ2h0ID0gMDtcbiAgICAgICAgICBpc1N0aWNreSA/IGhlYWRlckhlaWdodCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5oZWFkZXIuZml4ZWQnKS5vZmZzZXRIZWlnaHQgOiAwO1xuICAgICAgICAgIGNvbnN0IGVsZW1lbnRUb3AgPSBlbC5vZmZzZXRUb3A7XG4gICAgICAgICAgaWYoZWwpIHtcbiAgICAgICAgICAgIHdpbmRvdy5zY3JvbGxUbyh7IHRvcDogZWxlbWVudFRvcCAtIGhlYWRlckhlaWdodCwgYmVoYXZpb3I6ICdzbW9vdGgnIH0pO1xuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgfSlcbiAgfSlcbiAgJCgnW3Byb2R1Y3RHYWxsZXJ5U2xpZGVyX2pzXScpLmVhY2goZnVuY3Rpb24gKCkge1xuICAgIHZhciBzd2lwZXIgPSBuZXcgU3dpcGVyKCQodGhpcylbMF0sIHtcbiAgICAgIGRpcmVjdGlvbjogJ2hvcml6b250YWwnLFxuICAgICAgc2xpZGVzUGVyVmlldzogMSxcbiAgICAgIHNwYWNlQmV0d2VlbjogMTAsXG4gICAgICBwYWdpbmF0aW9uOiB7XG4gICAgICAgIGVsOiBcIi5zd2lwZXItcGFnaW5hdGlvblwiLFxuICAgICAgICBidWxsZXRzOiB0cnVlLFxuICAgICAgICBjbGlja2FibGU6IHRydWUsXG4gICAgICB9LFxuICAgIH0pXG4gIH0pO1xuICAkKCdbY2F0ZWdvcmllc1NsaWRlcl9qc10nKS5lYWNoKGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgc3dpcGVyID0gbmV3IFN3aXBlcigkKHRoaXMpWzBdLCB7XG4gICAgICBkaXJlY3Rpb246ICdob3Jpem9udGFsJyxcbiAgICAgIHNsaWRlc1BlclZpZXc6IDIuMixcbiAgICAgIHNwYWNlQmV0d2VlbjogNjQsXG4gICAgICBzcGVlZDogNzAwLFxuICAgICAgc2Nyb2xsYmFyOiB7XG4gICAgICAgIGVsOiBcIi5zd2lwZXItc2Nyb2xsYmFyXCIsXG4gICAgICAgIGRyYWdnYWJsZTogdHJ1ZSxcbiAgICAgICAgaGlkZTogZmFsc2UsXG4gICAgICB9LFxuICAgICAgLy8gbmF2aWdhdGlvbjoge1xuICAgICAgLy8gICBuZXh0RWw6ICcuc2VjdGlvbi1zZXJ0aWZpY2F0ZXMgLnN3aXBlcl9fbmF2aWdhdGlvbi1idG4tbmV4dCcsXG4gICAgICAvLyAgIHByZXZFbDogJy5zZWN0aW9uLXNlcnRpZmljYXRlcyAuc3dpcGVyX19uYXZpZ2F0aW9uLWJ0bi1wcmV2JyxcbiAgICAgIC8vIH0sXG4gICAgICBicmVha3BvaW50czoge1xuICAgICAgICAwOiB7XG4gICAgICAgICAgc2xpZGVzUGVyVmlldzogMi4yLFxuICAgICAgICAgIHNwYWNlQmV0d2VlbjogMTAsXG4gICAgICAgICAgc2Nyb2xsYmFyOiB7XG4gICAgICAgICAgICBlbmFibGVkOiB0cnVlLFxuICAgICAgICAgIH0sXG4gICAgICAgIH0sXG4gICAgICAgIDc2Nzoge1xuICAgICAgICAgIGZyZWVNb2RlOiB0cnVlLFxuICAgICAgICAgIHNsaWRlc1BlclZpZXc6IDQuNSxcbiAgICAgICAgICBzcGFjZUJldHdlZW46IDIwLFxuICAgICAgICAgIHNjcm9sbGJhcjoge1xuICAgICAgICAgICAgZW5hYmxlZDogZmFsc2UsXG4gICAgICAgICAgfSxcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgfSk7XG4gIH0pO1xuXG4gIHZhciBzd2lwZXJNYXJxdWUgPSBuZXcgU3dpcGVyKCcuc2VjdGlvbi1wYXJ0bmVyc19fc3dpcGVyJywge1xuICAgIHNsaWRlc1BlclZpZXc6IDMsXG4gICAgc3BhY2VCZXR3ZWVuOiAyMCxcbiAgICBzcGVlZDogNTAwMCxcbiAgICBsb29wOiB0cnVlLFxuICAgIGFsbG93VG91Y2hNb3ZlOiBmYWxzZSwgLy8g0LzQvtC20L3QviDQtdGJ0ZEg0L7RgtC60LvRjtGH0LjRgtGMINGB0LLQsNC50L9cbiAgICBhdXRvcGxheToge1xuICAgICAgZGVsYXk6IDAsXG4gICAgICBkaXNhYmxlT25JbnRlcmFjdGlvbjogZmFsc2UgLy8g0LjQu9C4INGB0LTQtdC70LDRgtGMINGC0LDQuiwg0YfRgtC+0LHRiyDQstC+0YHRgdGC0LDQvdCw0LLQu9C40LLQsNC70YHRjyBhdXRvcGxheSDQv9C+0YHQu9C1INCy0LfQsNC40LzQvtC00LXQudGB0YLQstC40Y9cbiAgICB9LFxuICAgIGJyZWFrcG9pbnRzOiB7XG4gICAgICA5OTI6IHtcbiAgICAgICAgc2xpZGVzUGVyVmlldzogNCxcbiAgICAgICAgc3BhY2VCZXR3ZWVuOiA1MCxcbiAgICAgIH1cbiAgICB9XG4gIH0pO1xuXG5cbiAgZnVuY3Rpb24gY2FsY3VsYXRlU3BhY2VCZXR3ZWVuKCkge1xuICAgIGNvbnN0IG1hcnF1ZWVDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2VjdGlvbi1jYXRlZ29yaWVzX19tYXJxdWVlJyk7XG4gICAgaWYobWFycXVlZUNvbnRhaW5lcikge1xuICAgICAgY29uc3QgY29udGFpbmVyV2lkdGggPSBtYXJxdWVlQ29udGFpbmVyLm9mZnNldFdpZHRoOyAvLyDQn9C+0LvRg9GH0LDQtdC8INGI0LjRgNC40L3RgyDQutC+0L3RgtC10LnQvdC10YDQsFxuXG4gICAgICAvLyDQn9GA0LjQvNC10YAg0YDQsNGB0YfQtdGC0LAgc3BhY2VCZXR3ZWVuICjQvNC+0LbQtdGC0LUg0L3QsNGB0YLRgNC+0LjRgtGMINC/0L4g0YHQstC+0LXQvNGDINGD0YHQvNC+0YLRgNC10L3QuNGOKVxuICAgICAgY29uc3Qgc3BhY2VCZXR3ZWVuID0gTWF0aC5tYXgoMjgwLCBNYXRoLnJvdW5kKGNvbnRhaW5lcldpZHRoICogOTMgLyAxMDApKTsgLy8g0JzQuNC90LjQvNGD0LwgMTAwLCDQuNC90LDRh9C1IDEvMTAg0YjQuNGA0LjQvdGLINC60L7QvdGC0LXQudC90LXRgNCwXG5cbiAgICAgIHJldHVybiBzcGFjZUJldHdlZW47XG4gICAgfVxuICB9XG4gIHZhciBzd2lwZXJNYXJxdWVUZXh0ID0gbmV3IFN3aXBlcignLnNlY3Rpb24tY2F0ZWdvcmllc19fbWFycXVlZScsIHtcbiAgICBzbGlkZXNQZXJWaWV3OiAnYXV0bycsXG4gICAgc3BhY2VCZXR3ZWVuOiBjYWxjdWxhdGVTcGFjZUJldHdlZW4oKSxcbiAgICBzcGVlZDogMTMwMDAsXG4gICAgbG9vcDogdHJ1ZSxcbiAgICBhbGxvd1RvdWNoTW92ZTogZmFsc2UsIC8vINC80L7QttC90L4g0LXRidGRINC+0YLQutC70Y7Rh9C40YLRjCDRgdCy0LDQudC/XG4gICAgYXV0b3BsYXk6IHtcbiAgICAgIGRlbGF5OiAwLFxuICAgICAgZGlzYWJsZU9uSW50ZXJhY3Rpb246IGZhbHNlIC8vINC40LvQuCDRgdC00LXQu9Cw0YLRjCDRgtCw0LosINGH0YLQvtCx0Ysg0LLQvtGB0YHRgtCw0L3QsNCy0LvQuNCy0LDQu9GB0Y8gYXV0b3BsYXkg0L/QvtGB0LvQtSDQstC30LDQuNC80L7QtNC10LnRgdGC0LLQuNGPXG4gICAgfSxcbiAgICBvbjoge1xuICAgICAgcmVzaXplOiBmdW5jdGlvbihzd2lwZXIpIHtcbiAgICAgICAgc3dpcGVyLnBhcmFtcy5zcGFjZUJldHdlZW4gPSBjYWxjdWxhdGVTcGFjZUJldHdlZW4oKTtcbiAgICAgICAgc3dpcGVyLnVwZGF0ZSgpO1xuICAgICAgfVxuICAgIH1cbiAgfSk7XG5cbiAgZnVuY3Rpb24gY2FsY3VsYXRlU3BhY2VCZXR3ZWVuUG9sbCgpIHtcbiAgICBjb25zdCBtYXJxdWVlQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBvbGwtY2xvc2VfX21hcnF1ZWUnKTtcbiAgICBpZihtYXJxdWVlQ29udGFpbmVyKSB7XG4gICAgICBjb25zdCBjb250YWluZXJXaWR0aCA9IG1hcnF1ZWVDb250YWluZXIub2Zmc2V0V2lkdGg7IC8vINCf0L7Qu9GD0YfQsNC10Lwg0YjQuNGA0LjQvdGDINC60L7QvdGC0LXQudC90LXRgNCwXG4gICAgICAvLyDQn9GA0LjQvNC10YAg0YDQsNGB0YfQtdGC0LAgc3BhY2VCZXR3ZWVuICjQvNC+0LbQtdGC0LUg0L3QsNGB0YLRgNC+0LjRgtGMINC/0L4g0YHQstC+0LXQvNGDINGD0YHQvNC+0YLRgNC10L3QuNGOKVxuICAgICAgY29uc3Qgc3BhY2VCZXR3ZWVuID0gTWF0aC5tYXgoNTAsIE1hdGgucm91bmQoY29udGFpbmVyV2lkdGggKiA4LjMgLyAxMDApKTtcbiAgICAgIHJldHVybiBzcGFjZUJldHdlZW47XG4gICAgfVxuICB9XG4gIHZhciBzd2lwZXJQb2xsTWFycXVlZTEgPSBuZXcgU3dpcGVyKCcucG9sbC1jbG9zZV9fbWFycXVlZV90b3AnLCB7XG4gICAgc2xpZGVzUGVyVmlldzogJ2F1dG8nLFxuICAgIHNwYWNlQmV0d2VlbjogY2FsY3VsYXRlU3BhY2VCZXR3ZWVuUG9sbCgpLFxuICAgIHNwZWVkOiAyMjAwMCxcbiAgICBsb29wOiB0cnVlLFxuICAgIGFsbG93VG91Y2hNb3ZlOiBmYWxzZSwgLy8g0LzQvtC20L3QviDQtdGJ0ZEg0L7RgtC60LvRjtGH0LjRgtGMINGB0LLQsNC50L9cbiAgICBhdXRvcGxheToge1xuICAgICAgZGVsYXk6IDAsXG4gICAgICBkaXNhYmxlT25JbnRlcmFjdGlvbjogZmFsc2UgLy8g0LjQu9C4INGB0LTQtdC70LDRgtGMINGC0LDQuiwg0YfRgtC+0LHRiyDQstC+0YHRgdGC0LDQvdCw0LLQu9C40LLQsNC70YHRjyBhdXRvcGxheSDQv9C+0YHQu9C1INCy0LfQsNC40LzQvtC00LXQudGB0YLQstC40Y9cbiAgICB9LFxuICAgIG9uOiB7XG4gICAgICByZXNpemU6IGZ1bmN0aW9uKHN3aXBlcikge1xuICAgICAgICBzd2lwZXIucGFyYW1zLnNwYWNlQmV0d2VlbiA9IGNhbGN1bGF0ZVNwYWNlQmV0d2VlblBvbGwoKTtcbiAgICAgICAgc3dpcGVyLnVwZGF0ZSgpO1xuICAgICAgfVxuICAgIH1cbiAgfSk7XG4gIHZhciBzd2lwZXJQb2xsTWFycXVlZTIgPSBuZXcgU3dpcGVyKCcucG9sbC1jbG9zZV9fbWFycXVlZV9ib3R0b20nLCB7XG4gICAgc2xpZGVzUGVyVmlldzogJ2F1dG8nLFxuICAgIHNwYWNlQmV0d2VlbjogY2FsY3VsYXRlU3BhY2VCZXR3ZWVuUG9sbCgpLFxuICAgIHNwZWVkOiAzNTAwMCxcbiAgICBsb29wOiB0cnVlLFxuICAgIGluaXRpYWxTbGlkZTogMixcbiAgICBhbGxvd1RvdWNoTW92ZTogZmFsc2UsIC8vINC80L7QttC90L4g0LXRidGRINC+0YLQutC70Y7Rh9C40YLRjCDRgdCy0LDQudC/XG4gICAgYXV0b3BsYXk6IHtcbiAgICAgIGRlbGF5OiAwLFxuICAgICAgZGlzYWJsZU9uSW50ZXJhY3Rpb246IGZhbHNlIC8vINC40LvQuCDRgdC00LXQu9Cw0YLRjCDRgtCw0LosINGH0YLQvtCx0Ysg0LLQvtGB0YHRgtCw0L3QsNCy0LvQuNCy0LDQu9GB0Y8gYXV0b3BsYXkg0L/QvtGB0LvQtSDQstC30LDQuNC80L7QtNC10LnRgdGC0LLQuNGPXG4gICAgfSxcbiAgICBvbjoge1xuICAgICAgcmVzaXplOiBmdW5jdGlvbihzd2lwZXIpIHtcbiAgICAgICAgc3dpcGVyLnBhcmFtcy5zcGFjZUJldHdlZW4gPSBjYWxjdWxhdGVTcGFjZUJldHdlZW5Qb2xsKCk7XG4gICAgICAgIHN3aXBlci51cGRhdGUoKTtcbiAgICAgIH1cbiAgICB9XG4gIH0pO1xuXG5cblxuICBjb25zdCBnYWxsYXJ5X19zd2lwZXIgPSBuZXcgU3dpcGVyKCcuZ2FsbGFyeV9fc3dpcGVyJywge1xuICAgIHNsaWRlc1BlclZpZXc6IDQsXG4gICAgc3BhY2VCZXR3ZWVuOiAnMSUnLFxuICAgIHdhdGNoU2xpZGVzUHJvZ3Jlc3M6IHRydWUsXG4gICAgc2Nyb2xsYmFyOiB7XG4gICAgICBlbDogXCIuc3dpcGVyLXNjcm9sbGJhclwiLFxuICAgICAgZHJhZ2dhYmxlOiB0cnVlLFxuICAgICAgaGlkZTogZmFsc2UsXG4gICAgfSxcbiAgICBhdXRvcGxheToge1xuICAgICAgICBkZWxheTogMjUwMCxcbiAgICB9LFxuICAgIHBhZ2luYXRpb246IHtcbiAgICAgICAgZWw6IFwiLmdhbGxhcnlfX3dyYXBwZXIgLnN3aXBlci1wYWdpbmF0aW9uXCIsXG4gICAgfSxcbiAgICBicmVha3BvaW50czp7XG4gICAgICAwOntcbiAgICAgICAgc2xpZGVzUGVyVmlldzogMS41LFxuICAgICAgICBzcGFjZUJldHdlZW46ICcxJScsXG4gICAgICAgIHNjcm9sbGJhcjoge1xuICAgICAgICAgIGVuYWJsZWQ6IHRydWUsXG4gICAgICAgIH0sXG4gICAgICAgIHBhZ2luYXRpb246IHtcbiAgICAgICAgICBlbmFibGVkOiBmYWxzZSxcbiAgICAgICAgfVxuICAgIH0sXG4gICAgNTc4OntcbiAgICAgIHNsaWRlc1BlclZpZXc6IDIsXG4gICAgICBzcGFjZUJldHdlZW46ICcxJScsXG4gICAgICBzY3JvbGxiYXI6IHtcbiAgICAgICBlbmFibGVkOiB0cnVlLFxuICAgICAgfSxcbiAgICAgIHBhZ2luYXRpb246IHtcbiAgICAgICAgZW5hYmxlZDogZmFsc2UsXG4gICAgICB9XG4gICAgfSxcbiAgICAgIDc2Nzp7XG4gICAgICAgICAgc2xpZGVzUGVyVmlldzogNCxcbiAgICAgICAgICBzcGFjZUJldHdlZW46ICcxJScsXG4gICAgICAgICAgc2Nyb2xsYmFyOiB7XG4gICAgICAgICAgICBlbmFibGVkOiBmYWxzZSxcbiAgICAgICAgICAgfSxcbiAgICAgICAgICAgcGFnaW5hdGlvbjoge1xuICAgICAgICAgICAgZW5hYmxlZDogdHJ1ZSxcbiAgICAgICAgICB9XG4gICAgICB9LFxuXG5cbiAgICB9XG59KVxuXG4gICAgJCgnLnRhYnMtc2xpZGVyJykuZWFjaChmdW5jdGlvbiAoKSB7XG4gICAgICB2YXIgJGNvbnRhaW5lciA9ICQodGhpcykuZmluZCgnLnN3aXBlci1jb250YWluZXInKTtcbiAgICAgIHZhciBzd2lwZXJUYWJzID0gbmV3IFN3aXBlcigkY29udGFpbmVyLCB7XG4gICAgICAgIGRpcmVjdGlvbjogJ2hvcml6b250YWwnLFxuICAgICAgICBmcmVlTW9kZTogdHJ1ZSxcbiAgICAgICAgc2xpZGVzUGVyVmlldzogJ2F1dG8nLFxuICAgICAgICBzcGFjZUJldHdlZW46IDEwLFxuICAgICAgICB0b3VjaFN0YXJ0Rm9yY2VQcmV2ZW50RGVmYXVsdDogdHJ1ZSxcbiAgICAgIH0pIDtcbiAgICB9KVxuXG4gICAgJCgnYm9keScpLm9uKCdjbGljaycsICdbYWdyZWVtZW50Q29udHJvbF9KU10nLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciAkdGhpcyA9ICQodGhpcyksXG4gICAgICAgICAgICAkZm9ybSA9ICR0aGlzLmNsb3Nlc3QoJ2Zvcm0nKSxcbiAgICAgICAgICAgICRpbnB1dCA9ICRmb3JtLmZpbmQoJ1thZ3JlZW1lbnRDb250cm9sQ2hlY2tib3hfSlNdJyksXG4gICAgICAgICAgICAkYnRuID0gJGZvcm0uZmluZCgnW2FncmVlbWVudENvbnRyb2xCdG5fSlNdJyk7XG5cbiAgICAgICAgaWYgKCR0aGlzLmhhc0NsYXNzKCdjaGVja2VkJykpIHtcbiAgICAgICAgICAgICR0aGlzLnJlbW92ZUNsYXNzKCdjaGVja2VkJyk7XG4gICAgICAgICAgICAkaW5wdXQucmVtb3ZlQXR0cignY2hlY2tlZCcpO1xuICAgICAgICAgICAgJGJ0bi5hZGRDbGFzcygnZGlzYWJsZWQnKTtcbiAgICAgICAgICAgICRidG4uYXR0cignZGlzYWJsZWQnLCB0cnVlKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICR0aGlzLmFkZENsYXNzKCdjaGVja2VkJyk7XG4gICAgICAgICAgICAkaW5wdXQuYXR0cignY2hlY2tlZCcsICcnKTtcbiAgICAgICAgICAgICRidG4ucmVtb3ZlQ2xhc3MoJ2Rpc2FibGVkJyk7XG4gICAgICAgICAgICAkYnRuLnJlbW92ZUF0dHIoJ2Rpc2FibGVkJyk7XG4gICAgICAgIH1cbiAgICB9KTtcblxuICAgICQoJ2JvZHknKS5vbignY2xpY2snLCAnW3JlYWRNb3JlQnRuX0pTXScsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyICRidG4gPSAkKHRoaXMpLFxuICAgICAgICAgICAgJHBhcmVudCA9ICRidG4uY2xvc2VzdCgnW3JlYWRNb3JlQ29udGFpbmVyX0pTXScpO1xuXG4gICAgICAgICRwYXJlbnQuYWRkQ2xhc3MoJ29wZW4nKTtcbiAgICB9KTtcblxuICAgICQoXCJbdG9Ub3BfSlNdXCIpLmNsaWNrKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgJChcImh0bWwsIGJvZHlcIikuYW5pbWF0ZSh7XG4gICAgICAgICAgICBzY3JvbGxUb3A6IDBcbiAgICAgICAgfSwgMCk7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9KTtcblxuICAgICQoXCJbYW5jaG9yTGlua19KU11cIikub24oXCJjbGlja1wiLCBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgdmFyIGlkID0gJCh0aGlzKS5hdHRyKCdocmVmJyk7XG5cbiAgICAgICAgaWYgKCQod2luZG93KS5pbm5lcldpZHRoKCkgPCA3NjkpIHtcbiAgICAgICAgICAgIHZhciBoZWFkZXJIZWlnaHQgPSAkKHdpbmRvdykuaW5uZXJXaWR0aCgpO1xuICAgICAgICAgICAgaGVhZGVySGVpZ2h0ID0gKGhlYWRlckhlaWdodCAvIDEwMCkgKiAyOS42ODc1O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdmFyIGhlYWRlckhlaWdodCA9ICQod2luZG93KS5pbm5lcldpZHRoKCk7XG4gICAgICAgICAgICBoZWFkZXJIZWlnaHQgPSAoaGVhZGVySGVpZ2h0IC8gMTAwKSAqIDUsIDI1NDg2MDc0NjE5MDIyNTk1OTAxMjA4NjE3OTcxNjI7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoJChpZCkubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgdmFyIHRvcCA9ICgkKGlkKS5vZmZzZXQoKS50b3ApIC0gaGVhZGVySGVpZ2h0O1xuICAgICAgICAgICAgJCgnYm9keSxodG1sJykuYW5pbWF0ZSh7XG4gICAgICAgICAgICAgICAgc2Nyb2xsVG9wOiB0b3BcbiAgICAgICAgICAgIH0sIDE1MDApO1xuICAgICAgICB9IGVsc2Uge1xuLy8gICAgICAgICAgICAgY29uc29sZS5sb2coMSk7XG4gICAgICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IFwiaW5kZXguaHRtbFwiICsgaWQ7XG4gICAgICAgIH1cbiAgICB9KTtcblxuICAgIHZhciBoYXNoID0gd2luZG93LmxvY2F0aW9uLmhhc2g7XG4gICAgaWYgKGhhc2ggIT0gXCJcIikge1xuXG4gICAgICAgIGlmICgkKHdpbmRvdykuaW5uZXJXaWR0aCgpIDwgNzY5KSB7XG4gICAgICAgICAgICB2YXIgaGVhZGVySGVpZ2h0ID0gJCh3aW5kb3cpLmlubmVyV2lkdGgoKTtcbiAgICAgICAgICAgIGhlYWRlckhlaWdodCA9IChoZWFkZXJIZWlnaHQgLyAxMDApICogMjkuNjg3NTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHZhciBoZWFkZXJIZWlnaHQgPSAkKHdpbmRvdykuaW5uZXJXaWR0aCgpO1xuICAgICAgICAgICAgaGVhZGVySGVpZ2h0ID0gKGhlYWRlckhlaWdodCAvIDEwMCkgKiA1LCAyNTQ4NjA3NDYxOTAyMjU5NTkwMTIwODYxNzk3MTYyO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCQoaGFzaCkubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgdmFyIG9mZnNldCA9ICQoaGFzaCkub2Zmc2V0KCkudG9wIC0gaGVhZGVySGVpZ2h0O1xuICAgICAgICAgICAgJCgnYm9keSxodG1sJykuYW5pbWF0ZSh7XG4gICAgICAgICAgICAgICAgc2Nyb2xsVG9wOiBvZmZzZXRcbiAgICAgICAgICAgIH0sIDE1MDApO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIGNvbnN0IG5hbWVQYXR0ZXJuID0gL15bYS16QS1a0LAt0Y/QkC3Qr1xcc10rJC87IC8vINCR0YPQutCy0Ysg0Lgg0L/RgNC+0LHQtdC70YtcbiAgICBjb25zdCBlbWFpbFBhdHRlcm4gPSAvXihbYS16QS1aMC05Xy4rLV0pK1xcQCgoW2EtekEtWjAtOS1dKStcXC4pKyhbYS16QS1aMC05XXsyLDR9KSskLzsgLy8gRW1haWxcbiAgICBjb25zdCBwYXNzd29yZFBhdHRlcm4gPSAvXlthLXpBLVowLTkhQCMkJV4mKigpXytdezYsfSQvO1xuXG4gICQudmFsaWRhdG9yLmFkZE1ldGhvZCgncGF0dGVybicsIGZ1bmN0aW9uKHZhbHVlLCBlbGVtZW50LCBwYXR0ZXJuKSB7XG4gICAgLy8g0J/RgNC+0LLQtdGA0Y/QtdC8LCDRj9Cy0LvRj9C10YLRgdGPINC70Lgg0LfQvdCw0YfQtdC90LjQtSDQv9GD0YHRgtGL0LwgKNC10YHQu9C4INC/0L7Qu9C1INC90LUg0L7QsdGP0LfQsNGC0LXQu9GM0L3Qvikg0LjQu9C4INGB0L7QvtGC0LLQtdGC0YHRgtCy0YPQtdGCINGA0LXQs9GD0LvRj9GA0L3QvtC80YMg0LLRi9GA0LDQttC10L3QuNGOXG4gICAgcmV0dXJuIHRoaXMub3B0aW9uYWwoZWxlbWVudCkgfHwgcGF0dGVybi50ZXN0KHZhbHVlKTtcbn0sICfQn9C+0LvQtSDRgdC+0LTQtdGA0LbQuNGCINC90LXQutC+0YDRgNC10LrRgtC90L7QtSDQt9C90LDRh9C10L3QuNC1Jyk7XG5cbiAgICAkKCdbZm9ybVZhbGlkYXRlX0pTXScpLmVhY2goZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgZm9ybSA9ICQodGhpcyk7XG4gICAgICAgICQodGhpcykudmFsaWRhdGUoe1xuICAgICAgICAgICAgZXJyb3JDbGFzczogXCJ2YWxpZGF0ZV9lcnJvclwiLFxuICAgICAgICAgICAgcnVsZXM6IHtcbiAgICAgICAgICAgICAgbmFtZToge1xuICAgICAgICAgICAgICAgICAgcmVxdWlyZWQ6IHRydWUsXG4gICAgICAgICAgICAgICAgICBwYXR0ZXJuOiBuYW1lUGF0dGVybiwgLy8g0JzQtdGC0L7QtCDQv9GA0L7QstC10YDQutC4INCx0YPQutCyINC4INC/0YDQvtCx0LXQu9C+0LJcbiAgICAgICAgICAgICAgICAgIG1pbmxlbmd0aDogMixcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgcGhvbmU6IHtcbiAgICAgICAgICAgICAgICByZXF1aXJlZDogdHJ1ZSxcbiAgICAgICAgICAgICAgICBtaW5sZW5ndGg6IDcsIC8vINCc0LXRgtC+0LQg0L/RgNC+0LLQtdGA0LrQuCDQv9C+0LLRgtC+0YDRj9GO0YnQuNGF0YHRjyDQv9C+0LTRgNGP0LQg0YHQuNC80LLQvtC70L7QslxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBsb2dpbjoge1xuICAgICAgICAgICAgICAgIHJlcXVpcmVkOiB0cnVlLCAvLyDQn9C+0LvQtSDQvtCx0Y/Qt9Cw0YLQtdC70YzQvdC+XG4gICAgICAgICAgICAgICAgbWlubGVuZ3RoOiAzLCAgICAvLyDQnNC40L3QuNC80LDQu9GM0L3QsNGPINC00LvQuNC90LAgMyDRgdC40LzQstC+0LvQsFxuICAgICAgICAgICAgICAgIG1heGxlbmd0aDogMjAsICAgLy8g0JzQsNC60YHQuNC80LDQu9GM0L3QsNGPINC00LvQuNC90LAgMjAg0YHQuNC80LLQvtC70L7QslxuICAgICAgICAgICAgICAgIHBhdHRlcm46IC9eW2EtekEtWjAtOV8tXSskLyAvLyDQlNC+0L/Rg9GB0YLQuNC80YvQtSDRgdC40LzQstC+0LvRiyAo0LHRg9C60LLRiywg0YbQuNGE0YDRiywg0YLQvtGH0LrQuCwg0L/QvtC00YfQtdGA0LrQuNCy0LDQvdC40Y8g0Lgg0LTQtdGE0LjRgdGLKVxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBlbWFpbDoge1xuICAgICAgICAgICAgICAgICAgcGF0dGVybjogZW1haWxQYXR0ZXJuLCAvLyDQn9GA0L7QstC10YDQutCwINC60L7RgNGA0LXQutGC0L3QvtGB0YLQuCBlbWFpbFxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBwYXNzd29yZDoge1xuICAgICAgICAgICAgICAgIHJlcXVpcmVkOiB0cnVlLFxuICAgICAgICAgICAgICAgIG1pbmxlbmd0aDogNiwgLy8g0JzQuNC90LjQvNCw0LvRjNC90LDRjyDQtNC70LjQvdCwINC/0LDRgNC+0LvRj1xuICAgICAgICAgICAgICAgIHBhdHRlcm46IHBhc3N3b3JkUGF0dGVybiAvLyDQn9GA0LjQvNC10YAg0L/QsNGC0YLQtdGA0L3QsCDQtNC70Y8g0L/QsNGA0L7Qu9GPXG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgIH0sXG4gICAgICAgICAgbWVzc2FnZXM6IHtcbiAgICAgICAgICAgIG5hbWU6IHtcbiAgICAgICAgICAgICAgcmVxdWlyZWQ6IFwi0K3RgtC+INC/0L7Qu9C1INC+0LHRj9C30LDRgtC10LvRjNC90L4g0LTQu9GPINC30LDQv9C+0LvQvdC10L3QuNGPLlwiLFxuICAgICAgICAgICAgICBtaW5sZW5ndGg6IFwi0JzQuNC90LjQvNCw0LvRjNC90LDRjyDQtNC70LjQvdCwINC40LzQtdC90Lgg0YHQvtGB0YLQsNCy0LvRj9C10YIgezB9INGB0LjQvNCy0L7Qu9C+0LIuXCIsXG4gICAgICAgICAgICAgIHBhdHRlcm46IFwi0JjQvNGPINC80L7QttC10YIg0YHQvtC00LXRgNC20LDRgtGMINGC0L7Qu9GM0LrQviDQsdGD0LrQstGLINC4INC/0YDQvtCx0LXQu9GLLlwiXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgcGhvbmU6IHtcbiAgICAgICAgICAgICAgICByZXF1aXJlZDogXCLQotC10LvQtdGE0L7QvSDRj9Cy0LvRj9C10YLRgdGPINC+0LHRj9C30LDRgtC10LvRjNC90YvQvC5cIixcbiAgICAgICAgICAgICAgICBtaW5sZW5ndGg6IFwi0JzQuNC90LjQvNCw0LvRjNC90LDRjyDQtNC70LjQvdCwINGC0LXQu9C10YTQvtC90LAg0YHQvtGB0YLQsNCy0LvRj9C10YIgezB9INGB0LjQvNCy0L7Qu9C+0LIuXCJcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBlbWFpbDoge1xuICAgICAgICAgICAgICAgIHJlcXVpcmVkOiBcIkVtYWlsINGP0LLQu9GP0LXRgtGB0Y8g0L7QsdGP0LfQsNGC0LXQu9GM0L3Ri9C8LlwiLFxuICAgICAgICAgICAgICAgIHBhdHRlcm46IFwi0JLQstC10LTQuNGC0LUg0LrQvtGA0YDQtdC60YLQvdGL0LkgZW1haWwg0LDQtNGA0LXRgS5cIlxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGxvZ2luOiB7XG4gICAgICAgICAgICAgICAgcmVxdWlyZWQ6IFwi0JLQstC10LTQuNGC0LUg0LvQvtCz0LjQvS5cIixcbiAgICAgICAgICAgICAgICBtaW5sZW5ndGg6IFwi0JzQuNC90LjQvNCw0LvRjNC90LDRjyDQtNC70LjQvdCwINC40LzQtdC90Lgg0L/QvtC70YzQt9C+0LLQsNGC0LXQu9GPINGB0L7RgdGC0LDQstC70Y/QtdGCIHswfSDRgdC40LzQstC+0LvQvtCyLlwiLFxuICAgICAgICAgICAgICAgIG1heGxlbmd0aDogXCLQnNCw0LrRgdC40LzQsNC70YzQvdCw0Y8g0LTQu9C40L3QsCDQuNC80LXQvdC4INC/0L7Qu9GM0LfQvtCy0LDRgtC10LvRjyDRgdC+0YHRgtCw0LLQu9GP0LXRgiB7MH0g0YHQuNC80LLQvtC70L7Qsi5cIixcbiAgICAgICAgICAgICAgICBwYXR0ZXJuOiBcItCY0LzRjyDQv9C+0LvRjNC30L7QstCw0YLQtdC70Y8g0LzQvtC20LXRgiDRgdC+0LTQtdGA0LbQsNGC0Ywg0YLQvtC70YzQutC+INCx0YPQutCy0YssINGG0LjRhNGA0YssINC/0L7QtNGH0LXRgNC60LjQstCw0L3QuNGPINC4INC00LXRhNC40YHRiy5cIlxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHBhc3N3b3JkOiB7XG4gICAgICAgICAgICAgICAgcmVxdWlyZWQ6IFwi0J/QsNGA0L7Qu9GMINGP0LLQu9GP0LXRgtGB0Y8g0L7QsdGP0LfQsNGC0LXQu9GM0L3Ri9C8LlwiLFxuICAgICAgICAgICAgICAgIG1pbmxlbmd0aDogXCLQnNC40L3QuNC80LDQu9GM0L3QsNGPINC00LvQuNC90LAg0L/QsNGA0L7Qu9GPINGB0L7RgdGC0LDQstC70Y/QtdGCIHswfSDRgdC40LzQstC+0LvQvtCyLlwiLFxuICAgICAgICAgICAgICAgIHBhdHRlcm46IFwi0J/QsNGA0L7Qu9GMINC80L7QttC10YIg0YHQvtC00LXRgNC20LDRgtGMINGC0L7Qu9GM0LrQviDQsdGD0LrQstGLLCDRhtC40YTRgNGLINC4INGB0L/QtdGG0LjQsNC70YzQvdGL0LUg0YHQuNC80LLQvtC70YsuXCJcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9LFxuICAgICAgICAgIGVycm9yUGxhY2VtZW50OiBmdW5jdGlvbiAoZXJyb3IsIGVsZW1lbnQpIHtcbiAgICAgICAgICAgIGVycm9yLmluc2VydEJlZm9yZShlbGVtZW50KTtcbiAgICAgICAgfSxcbiAgICAgICAgaW52YWxpZEhhbmRsZXI6IGZ1bmN0aW9uKGV2ZW50LCB2YWxpZGF0b3IpIHtcbiAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9KTtcblxuXG4gICAgLy8g0J7QsdGA0LDQsdC+0YLQutCwINGB0L7QsdGL0YLQuNGPIGlucHV0INC00LvRjyDQt9Cw0L/RgNC10YnQtdC90L3Ri9GFINGB0LjQvNCy0L7Qu9C+0LJcbiAgICAkKCdpbnB1dFtuYW1lPVwibmFtZVwiXScpLm9uKCdpbnB1dCcsIGZ1bmN0aW9uKCkge1xuICAgICAgdGhpcy52YWx1ZSA9IHRoaXMudmFsdWUucmVwbGFjZSgvW15hLXpBLVrQsC3Rj9CQLdCvXFxzXS9nLCAnJyk7XG4gICAgfSk7XG4gICAgJCgnaW5wdXRbbmFtZT1cImVtYWlsXCJdJykub24oJ2lucHV0JywgZnVuY3Rpb24oKSB7XG4gICAgICAgIHRoaXMudmFsdWUgPSB0aGlzLnZhbHVlLnJlcGxhY2UoL1teYS16QS1aMC05Xy4rLUBdL2csICcnKTsgLy8g0KDQsNC30YDQtdGI0LDQtdC8INGC0L7Qu9GM0LrQviDQtNC+0L/Rg9GB0YLQuNC80YvQtSDRgdC40LzQstC+0LvRiyDQtNC70Y8gZW1haWxcbiAgICB9KTtcbiAgICAkKCdpbnB1dFtuYW1lPVwicGFzc3dvcmRcIl0nKS5vbignaW5wdXQnLCBmdW5jdGlvbigpIHtcbiAgICAgIHRoaXMudmFsdWUgPSB0aGlzLnZhbHVlLnJlcGxhY2UoL1teYS16QS1aMC05IUAjJCVeJiooKV8rXS9nLCAnJyk7IC8vINCg0LDQt9GA0LXRiNCw0LXQvCDRgtC+0LvRjNC60L4g0LTQvtC/0YPRgdGC0LjQvNGL0LUg0YHQuNC80LLQvtC70Ysg0LTQu9GPIHBhc3N3b3JkXG4gIH0pO1xuXG4gICAgIC8vINCf0LXRgNC10LrQu9GO0YfQtdC90LjQtSDQstC40LTQuNC80L7RgdGC0Lgg0L/QsNGA0L7Qu9GPXG4gICAgICQoJyN0b2dnbGVQYXNzd29yZCcpLm9uKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGNvbnN0IHBhc3N3b3JkSW5wdXQgPSAkKCdpbnB1dFtuYW1lPVwicGFzc3dvcmRcIl0nKTtcbiAgICAgIGNvbnN0IHR5cGUgPSBwYXNzd29yZElucHV0LmF0dHIoJ3R5cGUnKSA9PT0gJ3Bhc3N3b3JkJyA/ICd0ZXh0JyA6ICdwYXNzd29yZCc7XG4gICAgICBwYXNzd29yZElucHV0LmF0dHIoJ3R5cGUnLCB0eXBlKTtcbiAgICAgIHR5cGUgPT09ICdwYXNzd29yZCcgPyAkKHRoaXMpLmFkZENsYXNzKCdjbG9zZScpIDogJCh0aGlzKS5yZW1vdmVDbGFzcygnY2xvc2UnKTtcbiAgICB9KTtcblxuICAgICQoJ1toZWFkZXJCdG5fSlNdJykub24oJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xuICAgICAgaWYgKCQodGhpcykuaGFzQ2xhc3MoJ2FjdGl2ZScpKSB7XG4gICAgICAgIG1lbnVDbG9zZSgpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbWVudU9wZW4oKTtcbiAgICAgIH1cbiAgfSk7XG5cbiQoJy5oZWFkZXJfX25hdiBhJykub24oJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xuICBpZiAoJCgnW2hlYWRlckJ0bl9KU10nKS5oYXNDbGFzcygnb3BlbicpKSB7XG4gICAgbWVudUNsb3NlKCk7XG4gIH1cbn0pO1xuXG4gIGZ1bmN0aW9uIHNsaWRlVG9nZ2xlU2VjdGlvbigpIHtcbiAgICAkKCdbdG9nZ2xlSXRlbV9KU10nKS5lYWNoKGZ1bmN0aW9uKCkge1xuICAgICAgJCh0aGlzKS5yZW1vdmVDbGFzcygnb3BlbicpO1xuICAgICAgJCh0aGlzKS5zaWJsaW5ncygpLmVhY2goZnVuY3Rpb24oKSB7XG4gICAgICAgIGlmICgkKHdpbmRvdykub3V0ZXJXaWR0aCgpIDwgOTkyKSB7XG4gICAgICAgICAgJCh0aGlzKS5jc3MoJ2Rpc3BsYXknLCAnbm9uZScpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICQodGhpcykucmVtb3ZlQXR0cignc3R5bGUnKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfSk7XG4gICAgaWYoJCh3aW5kb3cpLm91dGVyV2lkdGgoKSA8IDk5Mikge1xuICAgICAgJCgnLnByb2R1Y3QtY2FyZCBbdG9nZ2xlSXRlbV9KU10nKS5maXJzdCgpLmFkZENsYXNzKCdvcGVuJyk7XG4gICAgICAkKCcucHJvZHVjdC1jYXJkIFt0b2dnbGVJdGVtX0pTXScpLmZpcnN0KCkuc2libGluZ3MoKS5yZW1vdmVBdHRyKCdzdHlsZScpO1xuICAgIH1cbiAgICByZXR1cm47XG4gIH1cblxuICAkKCdbdG9nZ2xlSXRlbV9KU10nKS5lYWNoKGZ1bmN0aW9uKCkge1xuICAgICQodGhpcykub24oJ2NsaWNrJywgZnVuY3Rpb24oKSB7XG4gICAgICBpZiAoJCh3aW5kb3cpLm91dGVyV2lkdGgoKSA8IDk5Mikge1xuICAgICAgICAkKHRoaXMpLnRvZ2dsZUNsYXNzKCdvcGVuJyk7XG4gICAgICAgICQodGhpcykuc2libGluZ3MoKS5zbGlkZVRvZ2dsZSgpO1xuICAgICAgfVxuICAgIH0pO1xuICB9KTtcbiAgc2xpZGVUb2dnbGVTZWN0aW9uKCk7XG5cblxuXG4gIC8vIERyb3Bkb3duXG4gIGZ1bmN0aW9uIHJpZ2h0RHJvcGRvd24oKSB7XG4gICAgJCgnLm1lbnVfX2l0ZW0uZHJvcGRvd24nKS5lYWNoKGZ1bmN0aW9uICgpIHtcbiAgICAgIHZhciAkc3VibWVudSA9ICQodGhpcykuZmluZCgnLnN1Ym1lbnUnKTtcbiAgICAgIHZhciAkb2Zmc2V0VG9MZWZ0ID0gJHN1Ym1lbnUub2Zmc2V0KCkubGVmdCArICRzdWJtZW51Lm91dGVyV2lkdGgoKTtcbiAgICAgIGlmICgkKHdpbmRvdykub3V0ZXJXaWR0aCgpID4gOTkyKSB7XG4gICAgICAgIGlmKCRvZmZzZXRUb0xlZnQgPiAkKHdpbmRvdykub3V0ZXJXaWR0aCgpKSB7XG4gICAgICAgICAgJHN1Ym1lbnUuY3NzKCd0cmFuc2Zvcm0nLCBgdHJhbnNsYXRlWCgtJHskb2Zmc2V0VG9MZWZ0IC0gJCh3aW5kb3cpLm91dGVyV2lkdGgoKSArIDMwfXB4KWApO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAkc3VibWVudS5yZW1vdmVBdHRyKCdzdHlsZScpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG4gIHJpZ2h0RHJvcGRvd24oKTtcblxuICBsZXQgd2luZG93V2lkdGggPSAkKHdpbmRvdykub3V0ZXJXaWR0aCgpO1xuICAkKHdpbmRvdykub24oJ3Jlc2l6ZScsIGZ1bmN0aW9uKCkge1xuICAgIGlmICgkKHdpbmRvdykub3V0ZXJXaWR0aCgpICE9PSB3aW5kb3dXaWR0aCkge1xuICAgICAgcmlnaHREcm9wZG93bigpO1xuICAgICAgc2xpZGVUb2dnbGVTZWN0aW9uKCk7XG4gICAgfVxuICB9KTtcblxuXG4gICAgJCgnLm1lbnVfX2l0ZW0uZHJvcGRvd24nKS5vbignbW91c2VlbnRlcicsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGlmICgkKHdpbmRvdykub3V0ZXJXaWR0aCgpID4gOTkyKSB7XG4gICAgICAgICQodGhpcykuYWRkQ2xhc3MoJ2lzLWFjdGl2ZScpO1xuICAgICAgICAkKHRoaXMpLmZpbmQoJy5zdWJtZW51JykuYWRkQ2xhc3MoJ2lzLWFjdGl2ZScpO1xuICAgICAgfVxuICAgIH0pO1xuICAgICQoJy5tZW51X19pdGVtLmRyb3Bkb3duJykub24oJ21vdXNlbGVhdmUnLCBmdW5jdGlvbiAoKSB7XG4gICAgICBpZiAoJCh3aW5kb3cpLm91dGVyV2lkdGgoKSA+IDk5Mikge1xuICAgICAgICAkKHRoaXMpLnJlbW92ZUNsYXNzKCdpcy1hY3RpdmUnKTtcbiAgICAgICAgJCh0aGlzKS5maW5kKCcuc3VibWVudScpLnJlbW92ZUNsYXNzKCdpcy1hY3RpdmUnKTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgICQoJy5tZW51X19kcm9wZG93bi1idG4nKS5lYWNoKGZ1bmN0aW9uKCkge1xuICAgICAgJCh0aGlzKS5vbignY2xpY2snLCBmdW5jdGlvbiAoZSkge1xuICAgICAgICBpZiAoJCh3aW5kb3cpLm91dGVyV2lkdGgoKSA8PSA5OTIpIHtcbiAgICAgICAgICB2YXIgJGlzT3BlbiA9ICQodGhpcykuY2xvc2VzdCgnLm1lbnVfX2l0ZW0uZHJvcGRvd24nKS5oYXNDbGFzcygnaXMtYWN0aXZlJyk7XG4gICAgICAgICAgLy8gJCgnLm1lbnVfX2Ryb3Bkb3duLWJ0bicpLmVhY2goZnVuY3Rpb24oKSB7XG4gICAgICAgICAgLy8gICAkKHRoaXMpLmNsb3Nlc3QoJy5tZW51X19pdGVtLmRyb3Bkb3duJykucmVtb3ZlQ2xhc3MoJ2lzLWFjdGl2ZScpO1xuICAgICAgICAgIC8vICAgJCh0aGlzKS5zaWJsaW5ncygnLnN1Ym1lbnUnKS5yZW1vdmVDbGFzcygnaXMtYWN0aXZlJyk7XG4gICAgICAgICAgLy8gICAkKHRoaXMpLnNpYmxpbmdzKCcuc3VibWVudScpLnNsaWRlVXAoKTtcbiAgICAgICAgICAvLyB9KTtcbiAgICAgICAgICBpZigkaXNPcGVuKSB7XG4gICAgICAgICAgICAvLyByZXR1cm47XG4gICAgICAgICAgICAkKHRoaXMpLmNsb3Nlc3QoJy5tZW51X19pdGVtLmRyb3Bkb3duJykucmVtb3ZlQ2xhc3MoJ2lzLWFjdGl2ZScpO1xuICAgICAgICAgICAgJCh0aGlzKS5zaWJsaW5ncygnLnN1Ym1lbnUnKS5yZW1vdmVDbGFzcygnaXMtYWN0aXZlJyk7XG4gICAgICAgICAgICAkKHRoaXMpLnNpYmxpbmdzKCcuc3VibWVudScpLnNsaWRlVXAoKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgJCh0aGlzKS5jbG9zZXN0KCcubWVudV9faXRlbS5kcm9wZG93bicpLmFkZENsYXNzKCdpcy1hY3RpdmUnKTtcbiAgICAgICAgICAgICQodGhpcykuc2libGluZ3MoJy5zdWJtZW51JykuYWRkQ2xhc3MoJ2lzLWFjdGl2ZScpO1xuICAgICAgICAgICAgJCh0aGlzKS5zaWJsaW5ncygnLnN1Ym1lbnUnKS5zbGlkZURvd24oKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfSk7XG4gIH0pO1xuXG4gICAgLy8gJChkb2N1bWVudCkub24oJ2NsaWNrJywgZnVuY3Rpb24gKGUpIHtcbiAgICAvLyAgIGlmICgkKHdpbmRvdykub3V0ZXJXaWR0aCgpIDw9IDk5Mikge1xuICAgIC8vICAgICBpZiAoJChlLnRhcmdldCkuY2xvc2VzdCgnLm1lbnVfX2l0ZW0uZHJvcGRvd24uaXMtYWN0aXZlJykubGVuZ3RoXG4gICAgLy8gICAgICYmICEkKGUudGFyZ2V0KS5jbG9zZXN0KCcubWVudV9fZHJvcGRvd24tYnRuLmlzLWFjdGl2ZScpLmxlbmd0aCkge1xuICAgIC8vICAgICAgICAgLy8g0LrQu9C40Log0LLQvdGD0YLRgNC4INGN0LvQtdC80LXQvdGC0LBcbiAgICAvLyAgICAgICAgIHJldHVybjtcbiAgICAvLyAgICAgfVxuICAgIC8vICAgICAvLyDQutC70LjQuiDRgdC90LDRgNGD0LbQuCDRjdC70LXQvNC10L3RgtCwXG4gICAgLy8gICAgICQoJy5tZW51X19pdGVtLmRyb3Bkb3duLmlzLWFjdGl2ZScpLnJlbW92ZUNsYXNzKCdpcy1hY3RpdmUnKTtcbiAgICAvLyAgICAgJCgnLnN1Ym1lbnUuaXMtYWN0aXZlJykuc2xpZGVVcCgpO1xuICAgIC8vICAgICAkKCcuc3VibWVudS5pcy1hY3RpdmUnKS5yZW1vdmVDbGFzcygnaXMtYWN0aXZlJyk7XG4gICAgLy8gICB9XG4gICAgLy8gfSk7XG5cblxuICAgICQoJ1tsb2FkTW9yZUJ0bl9KU10nKS5vbignY2xpY2snLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICQodGhpcykuY2xvc2VzdCgnW2xvYWRNb3JlQ29udGFpbmVyX0pTXScpLmFkZENsYXNzKCdtZC1hbGwtaXRlbXMtdmlzaWJsZScpO1xuICAgIH0pO1xuXG5cblxuXG5mdW5jdGlvbiBtZW51T3BlbigpIHtcbiAgICAkKCdbaGVhZGVyQnRuX0pTXScpLmFkZENsYXNzKCdhY3RpdmUnKTtcbiAgICAkKCdbaGVhZGVyQnRuX0pTXScpLmNsb3Nlc3QoJ2hlYWRlcicpLmZpbmQoJy5oZWFkZXJfX2JvdHRvbScpLmFkZENsYXNzKCdvcGVuJyk7XG4gICAgJCgnaHRtbCcpLmNzcygnb3ZlcmZsb3cnLCAnaGlkZGVuJyk7XG59XG5cbmZ1bmN0aW9uIG1lbnVDbG9zZSgpIHtcbiAgICAkKCdbaGVhZGVyQnRuX0pTXScpLnJlbW92ZUNsYXNzKCdhY3RpdmUnKTtcbiAgICAkKCdbaGVhZGVyQnRuX0pTXScpLmNsb3Nlc3QoJ2hlYWRlcicpLmZpbmQoJy5oZWFkZXJfX2JvdHRvbScpLnJlbW92ZUNsYXNzKCdvcGVuJyk7XG4gICAgJCgnaHRtbCcpLnJlbW92ZUF0dHIoJ3N0eWxlJyk7XG59XG5cblxuXG5cbiQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uICgpIHtcbiAgICAkKCdib2R5Jykub24oJ2NsaWNrJywgJ1twb3B1cE9wZW5dJywgZnVuY3Rpb24gKCkge1xuICAgICAgICBwb3B1cENsb3NlKCk7XG4gICAgICAgIHZhciAkZWxlbSA9ICQodGhpcyksXG4gICAgICAgICAgICB0YXJnZXQgPSAkZWxlbS5hdHRyKCdwb3B1cE9wZW4nKTtcblxuICAgICAgICBpZiAodGFyZ2V0ID09ICdwcm9tb3Rpb24tcG9wdXAnIHx8IHRhcmdldCA9PSAnc2VydmljZS1wb3B1cCcgfHwgdGFyZ2V0ID09ICdwcm9kdWN0LXBvcHVwJykge1xuICAgICAgICAgICAgdmFyIGlkID0gJGVsZW0uYXR0cignZGF0YS1oaWRkZW4taWQnKTtcblxuICAgICAgICAgICAgJCgnW3BvcHVwSUQ9XCInICsgdGFyZ2V0ICsgJ1wiXScpLmZpbmQoJ1toaWRkZW5WYWx1ZV9KU10nKS5hdHRyKCd2YWx1ZScsIGlkKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHBvcHVwT3Blbih0YXJnZXQpO1xuICAgIH0pO1xuXG5cbiAgICAvLyBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuICAgIC8vICAgcG9wdXBPcGVuKCdtYXJrZXRpbmctbmV3cycpO1xuICAgIC8vIH0sIDMwMDAwKTtcbiAgICAvLyBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuICAgIC8vICAgcG9wdXBPcGVuKCdhZnRlci1zaXh0eScpO1xuICAgIC8vIH0sIDYwMDAwKTtcblxuXG4gICAgJCgnYm9keScpLm9uKCdjbGljaycsICdbcG9wdXBDbG9zZV9KU10nLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHBvcHVwQ2xvc2UoKTtcbiAgICB9KTtcblxuICAgICQoJ2JvZHknKS5hcHBlbmQoJzxkaXYgY2xhc3M9XCJkb3dubG9hZC1wb3B1cC10cmlnZ2VyXCI+PC9kaXY+Jyk7XG5cbiAgICAkKCdib2R5IC5kb3dubG9hZC1wb3B1cC10cmlnZ2VyJykuaG92ZXIoZnVuY3Rpb24gKCkge1xuICAgICAgaWYgKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdkb3dubG9hZFBvcHVwU3RhdGUnKSA9PT0gJ3RydWUnKSB7XG4gICAgICAgIHBvcHVwT3BlbignZG93bmxvYWQtcG9wdXAnKTtcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2Rvd25sb2FkUG9wdXBTdGF0ZScsICdmYWxzZScpO1xuICAgICAgfTtcbiAgICB9KTtcbn0pO1xuXG5pZiAobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2Rvd25sb2FkUG9wdXBTdGF0ZScpID09PSBudWxsKSB7XG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2Rvd25sb2FkUG9wdXBTdGF0ZScsICd0cnVlJylcbn1cblxudmFyIHBvcHVwQ2xvc2UgPSBmdW5jdGlvbiAoKSB7XG4gICAgJCgnLnBvcHVwLm9wZW4nKS5maW5kKCdpbnB1dCcpLnZhbCgnJyk7XG4gICAgJCgnLnBvcHVwLm9wZW4nKS5maW5kKCd0ZXh0YXJlYScpLnZhbCgnJyk7XG4gICAgJCgnLnBvcHVwLm9wZW4nKS5maW5kKCcuZm9ybS1maWxlJykuZWFjaChmdW5jdGlvbigpe1xuICAgICAgICB2YXIgdGV4dCA9ICQodGhpcykuYXR0cignZGF0YS10ZXh0Jyk7XG5cbiAgICAgICAgJCh0aGlzKS5maW5kKCdkaXYgcCcpLnRleHQodGV4dCk7XG4gICAgfSk7XG4gICAgJCgnLnBvcHVwLm9wZW4nKS5maW5kKCcuZm9ybS1zdGFycyBsYWJlbDpsYXN0LWNoaWxkJykudHJpZ2dlcignY2xpY2snKTtcbiAgICAkKCcucG9wdXAgLnZhbGlkYXRlX2Vycm9yJykuZWFjaChmdW5jdGlvbiAoKSB7XG4gICAgICAgICQodGhpcykucmVtb3ZlQ2xhc3MoJ3ZhbGlkYXRlX2Vycm9yJyk7XG4gICAgfSk7XG4gICAgJCgnaHRtbCcpLnJlbW92ZUF0dHIoJ3N0eWxlJyk7XG4gICAgJCgnLnBvcHVwLm9wZW4nKS5hZGRDbGFzcygnZmFkZScpO1xuICAgICQoJy5wb3B1cC5vcGVuJykucmVtb3ZlQ2xhc3MoJ29wZW4nKTtcbn07XG5cbmZ1bmN0aW9uIGNvbWUoZWxlbSkge1xuICB2YXIgZG9jVmlld1RvcCA9ICQod2luZG93KS5zY3JvbGxUb3AoKSxcbiAgICAgIGRvY1ZpZXdCb3R0b20gPSBkb2NWaWV3VG9wICsgJCh3aW5kb3cpLmhlaWdodCgpLFxuICAgICAgZWxlbVRvcCA9ICQoZWxlbSkub2Zmc2V0KCkudG9wLFxuICAgICAgZWxlbUJvdHRvbSA9IGVsZW1Ub3AgKyAkKGVsZW0pLmhlaWdodCgpO1xuICByZXR1cm4gZWxlbUJvdHRvbSA8PSBkb2NWaWV3Qm90dG9tICYmIGVsZW1Ub3AgPj0gZG9jVmlld1RvcDtcbn1cblxudmFyIHBvcHVwT3BlbiA9IGZ1bmN0aW9uIChlKSB7XG4gICAgcG9wdXBDbG9zZSgpO1xuICAgIHZhciB0YXJnZXQgPSBlO1xuICAgIHZhciB3aWR0aCA9ICQoJy5wYWdlJykud2lkdGgoKTtcblxuICAgICQoJ2h0bWwnKS5jc3MoJ292ZXJmbG93JywgJ2hpZGRlbicpO1xuICAgICQoJ1twb3B1cElEPVwiJyArIHRhcmdldCArICdcIl0nKS5hZGRDbGFzcygnb3BlbicpO1xuICAgICQoJ1twb3B1cElEPVwiJyArIHRhcmdldCArICdcIl0nKS5yZW1vdmVDbGFzcygnZmFkZScpO1xuICAgIGlmKCQoJ1twb3B1cElEPVwiJyArIHRhcmdldCArICdcIl0nKS5oYXNDbGFzcygncHJvZHVjdC1wb3B1cCcpKSB7XG4gICAgICAvLyBjbGVhclRpbWVvdXQoZ2FsbGVyeVRodW1ic1N3aXBlclVwZGF0ZVRpbWVvdXQpO1xuICAgICAgZ2FsbGVyeVRodW1ic1N3aXBlci51cGRhdGUoKTtcbiAgICAgIGlmKCQod2luZG93KS5vdXRlcldpZHRoKCkgPD0gNzY3KSB7XG4gICAgICAgIHNldFRpbWVvdXQoIGZ1bmN0aW9uKCkge1xuICAgICAgICAgIGdhbGxlcnlUaHVtYnNTd2lwZXIudXBkYXRlKCk7XG4gICAgICAgIH0sIDEwKTtcbiAgICAgIH1cbiAgICB9XG59O1xuXG5mdW5jdGlvbiBmaXhlZEhlYWRlcigpIHtcbiAgdmFyIGhlaWdodCA9IGpRdWVyeSh3aW5kb3cpLnNjcm9sbFRvcCgpO1xuICB2YXIgaGVhZGVySGVpZ2h0ID0gJCgnLmhlYWRlcicpLmlubmVySGVpZ2h0KCk7XG5cdGlmICggaGVpZ2h0ID49IGhlYWRlckhlaWdodCkge1xuICAgIGpRdWVyeSgnLmhlYWRlcicpLmFkZENsYXNzKCdmaXhlZCcpO1xuICB9IGVsc2Uge1xuICAgIGpRdWVyeSgnLmhlYWRlcicpLnJlbW92ZUNsYXNzKCdmaXhlZCcpO1xuICB9XG59XG5cbmZpeGVkSGVhZGVyKCk7XG5qUXVlcnkod2luZG93KS5zY3JvbGwoZnVuY3Rpb24oJCkge1xuXHRmaXhlZEhlYWRlcigpO1xufSk7XG4kKHdpbmRvdykub24oJ3Jlc2l6ZScsIGZ1bmN0aW9uKCkge1xuICBmaXhlZEhlYWRlcigpO1xufSk7XG5cblxuXG4kKHdpbmRvdykub24oJ3Njcm9sbCcsIGZ1bmN0aW9uKCkge1xuICB2YXIgcmF0aW8gPSAkKGRvY3VtZW50KS5zY3JvbGxUb3AoKSAvICgoJChkb2N1bWVudCkuaGVpZ2h0KCkgLSAkKHdpbmRvdykuaGVpZ2h0KCkpIC8gMTAwKTtcbiAgJCgnLmhlYWRlci1wcm9ncmVzcycpLndpZHRoKHJhdGlvICsgXCIlXCIpO1xufSk7XG5cbiQod2luZG93KS5zY3JvbGwoZnVuY3Rpb24gKCkge1xuICB2YXIgc2Nyb2xsID0gJCh3aW5kb3cpLnNjcm9sbFRvcCgpO1xuICBpZiAoc2Nyb2xsID49ICAkKGRvY3VtZW50KS5oZWlnaHQoKSAvIDMpIHtcbiAgICAgICQoJ1t0b1RvcF9KU10nKS5hZGRDbGFzcygndmlzaWJsZScpO1xuICB9IGVsc2Uge1xuICAgICAgJCgnW3RvVG9wX0pTXScpLnJlbW92ZUNsYXNzKCd2aXNpYmxlJyk7XG4gIH07XG5cblxuXG4gICQoJ1tvblNjcm9sbERpc3BsYXlfSlNdJykuZWFjaChmdW5jdGlvbiAoKSB7XG4gICAgICB2YXIgZWwgPSAkKHRoaXMpO1xuICAgICAgaWYgKGNvbWUoZWwpKSB7XG4gICAgICAgICAgZWwuYWRkQ2xhc3MoJ3Zpc2libGUnKTtcbiAgICAgIH07XG4gIH0pO1xuXG59KTtcblxuJCgnLmhlYWRlcl9fc2VhcmNoLW9wZW4nKS5vbignY2xpY2snLCBmdW5jdGlvbihlKSB7XG4gIGUucHJldmVudERlZmF1bHQoKTtcbiAgJCh0aGlzKS5wYXJlbnRzKCcuc2VhcmNoLWZvcm0nKS50b2dnbGVDbGFzcygnb3BlbicpO1xufSk7XG4kKCcuaGVhZGVyX19zZWFyY2gtY2xvc2UtYnRuJykub24oJ2NsaWNrJywgZnVuY3Rpb24oZSkge1xuICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICQodGhpcykucGFyZW50cygnLnNlYXJjaC1mb3JtJykucmVtb3ZlQ2xhc3MoJ29wZW4nKTtcbiAgJCh0aGlzKS5wYXJlbnRzKCcuc2VhcmNoLWZvcm0nKS5maW5kKCdpbnB1dCcpLnZhbCgnJyk7XG59KTtcblxuXG4kKCcud2lubmVycy1jYXRlZ29yeS1saXN0X19pdGVtLmNhdGVnb3J5IGJ1dHRvbicpLm9uKCdjbGljaycsIGZ1bmN0aW9uKCkge1xuICAkKHRoaXMpLnNpYmxpbmdzKCd1bCcpLnNsaWRlVG9nZ2xlKCk7XG59KVxuXG5cbi8vICQoJ2ltZycpLmVhY2goIGZ1bmN0aW9uKGUpIHtcbi8vICAgJCh0aGlzKS5hZGRDbGFzcygnbGF6eScpO1xuLy8gfSk7XG4vLyBsZXQgbGF6eUxvYWRJbnN0YW5jZSA9IG5ldyBMYXp5TG9hZCgpO1xuXG5cbi8vIFRJTUVSXG5sZXQgcG9sbERhdGVTdGFydCA9ICQoJyNwb2xsLXRpbWVyJykuZGF0YSgnZGF0ZScpO1xuaWYocG9sbERhdGVTdGFydCkge1xuICB2YXIgY291bnREb3duRGF0ZSA9IG5ldyBEYXRlKHBvbGxEYXRlU3RhcnQpLmdldFRpbWUoKTtcbiAgLy8gVXBkYXRlIHRoZSBjb3VudCBkb3duIGV2ZXJ5IDEgc2Vjb25kXG4gIHZhciB4ID0gc2V0SW50ZXJ2YWwoZnVuY3Rpb24oKSB7XG4gICAgLy8gR2V0IHRvZGF5J3MgZGF0ZSBhbmQgdGltZVxuICAgIHZhciBub3cgPSBuZXcgRGF0ZSgpLmdldFRpbWUoKTtcblxuICAgIC8vIEZpbmQgdGhlIGRpc3RhbmNlIGJldHdlZW4gbm93IGFuZCB0aGUgY291bnQgZG93biBkYXRlXG4gICAgdmFyIGRpc3RhbmNlID0gY291bnREb3duRGF0ZSAtIG5vdztcblxuICAgIC8vIFRpbWUgY2FsY3VsYXRpb25zIGZvciBkYXlzLCBob3VycywgbWludXRlcyBhbmQgc2Vjb25kc1xuICAgIHZhciBkYXlzID0gTWF0aC5mbG9vcihkaXN0YW5jZSAvICgxMDAwICogNjAgKiA2MCAqIDI0KSk7XG4gICAgdmFyIGhvdXJzID0gTWF0aC5mbG9vcigoZGlzdGFuY2UgJSAoMTAwMCAqIDYwICogNjAgKiAyNCkpIC8gKDEwMDAgKiA2MCAqIDYwKSk7XG4gICAgdmFyIG1pbnV0ZXMgPSBNYXRoLmZsb29yKChkaXN0YW5jZSAlICgxMDAwICogNjAgKiA2MCkpIC8gKDEwMDAgKiA2MCkpO1xuICAgIHZhciBzZWNvbmRzID0gTWF0aC5mbG9vcigoZGlzdGFuY2UgJSAoMTAwMCAqIDYwKSkgLyAxMDAwKTtcblxuICAgIHZhciBkYXlzRWwgPSAkKCcjcG9sbC10aW1lcicpLmZpbmQoJy5zZWN0aW9uLXBvbGxfX3RpbWVyLWRheXMgLm51bWJlcicpO1xuICAgIHZhciBob3Vyc0VsID0gJCgnI3BvbGwtdGltZXInKS5maW5kKCcuc2VjdGlvbi1wb2xsX190aW1lci1ob3VycyAubnVtYmVyJyk7XG4gICAgdmFyIG1pbnV0ZXNFbCA9ICQoJyNwb2xsLXRpbWVyJykuZmluZCgnLnNlY3Rpb24tcG9sbF9fdGltZXItbWludXRlcyAubnVtYmVyJyk7XG4gICAgdmFyIHNlY29uZHNFbCA9ICQoJyNwb2xsLXRpbWVyJykuZmluZCgnLnNlY3Rpb24tcG9sbF9fdGltZXItc2Vjb25kcyAubnVtYmVyJyk7XG4gICAgZGF5c0VsLnRleHQoZGF5cyk7XG4gICAgaG91cnNFbC50ZXh0KGhvdXJzKTtcbiAgICBtaW51dGVzRWwudGV4dChtaW51dGVzKTtcbiAgICBzZWNvbmRzRWwudGV4dChzZWNvbmRzKTtcblxuICAgIC8vIElmIHRoZSBjb3VudCBkb3duIGlzIGZpbmlzaGVkLCB3cml0ZSBzb21lIHRleHRcbiAgICBpZiAoZGlzdGFuY2UgPCAwKSB7XG4gICAgICBjbGVhckludGVydmFsKHgpO1xuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwb2xsLXRpbWVyXCIpLmlubmVySFRNTCA9IFwiPGRpdiBjbGFzcz0ncGFnZS10aXRsZSB0aXRsZSc+0JPQvtC70L7RgdC+0LLQsNC90LjQtSDRgdC60L7RgNC+INC90LDRh9C90LXRgtGB0Y8hPC9kaXY+XCI7XG4gICAgfVxuICB9LCAxMDAwKTtcbn1cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG4iXSwiZmlsZSI6ImluZGV4LmpzIn0=
