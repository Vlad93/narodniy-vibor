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
    speed: 4500,
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
          pattern: /^[a-zA-Zа-яА-Я\s]+$/,
          // Метод проверки букв и пробелов
          minlength: 2
        },
        phone: {
          required: true,
          minlength: 7 // Метод проверки повторяющихся подряд символов

        },
        email: {
          pattern: /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/ // Проверка корректности email

        }
      },
      errorPlacement: function errorPlacement(error, element) {}
    });
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

var galleryThumbsSwiper = new Swiper('.product-popup__gallery-swiper-thumbs', {
  // loop: true,
  direction: 'vertical',
  spaceBetween: 10,
  slidesPerView: 4,
  watchSlidesProgress: true,
  scrollbar: {
    el: ".swiper-scrollbar",
    hide: false,
    draggable: true
  },
  breakpoints: {
    767: {
      direction: 'horizontal'
    }
  },
  on: {
    resize: function resize() {
      this.update();
    }
  }
});
var gallerySwiper = new Swiper('.product-popup__gallery-swiper-large', {
  // loop: true,
  spaceBetween: 10,
  thumbs: {
    swiper: galleryThumbsSwiper
  }
});

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
    jQuery('.header').addClass('fixed'); // $('body').css('padding-top', $('.header').innerHeight());
  } else {
    jQuery('.header').removeClass('fixed'); // $('body').css('padding-top', '0');
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
}); // $('img').each( function(e) {
//   $(this).addClass('lazy');
// });
// let lazyLoadInstance = new LazyLoad();
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbImUiLCJ0IiwibW9kdWxlIiwiZXhwb3J0cyIsImRvY3VtZW50IiwiRXJyb3IiLCJ3aW5kb3ciLCJDIiwiciIsIk9iamVjdCIsImdldFByb3RvdHlwZU9mIiwicyIsInNsaWNlIiwiZyIsImZsYXQiLCJjYWxsIiwiY29uY2F0IiwiYXBwbHkiLCJ1IiwicHVzaCIsImkiLCJpbmRleE9mIiwibiIsIm8iLCJ0b1N0cmluZyIsInYiLCJoYXNPd25Qcm9wZXJ0eSIsImEiLCJsIiwieSIsIm0iLCJub2RlVHlwZSIsIngiLCJFIiwiYyIsInR5cGUiLCJzcmMiLCJub25jZSIsIm5vTW9kdWxlIiwiYiIsImNyZWF0ZUVsZW1lbnQiLCJ0ZXh0IiwiZ2V0QXR0cmlidXRlIiwic2V0QXR0cmlidXRlIiwiaGVhZCIsImFwcGVuZENoaWxkIiwicGFyZW50Tm9kZSIsInJlbW92ZUNoaWxkIiwidyIsImYiLCJTIiwiZm4iLCJpbml0IiwicCIsImxlbmd0aCIsInByb3RvdHlwZSIsImpxdWVyeSIsImNvbnN0cnVjdG9yIiwidG9BcnJheSIsImdldCIsInB1c2hTdGFjayIsIm1lcmdlIiwicHJldk9iamVjdCIsImVhY2giLCJtYXAiLCJhcmd1bWVudHMiLCJmaXJzdCIsImVxIiwibGFzdCIsImV2ZW4iLCJncmVwIiwib2RkIiwiZW5kIiwic29ydCIsInNwbGljZSIsImV4dGVuZCIsImlzUGxhaW5PYmplY3QiLCJBcnJheSIsImlzQXJyYXkiLCJleHBhbmRvIiwiTWF0aCIsInJhbmRvbSIsInJlcGxhY2UiLCJpc1JlYWR5IiwiZXJyb3IiLCJub29wIiwiaXNFbXB0eU9iamVjdCIsImdsb2JhbEV2YWwiLCJtYWtlQXJyYXkiLCJpbkFycmF5IiwiZ3VpZCIsInN1cHBvcnQiLCJTeW1ib2wiLCJpdGVyYXRvciIsInNwbGl0IiwidG9Mb3dlckNhc2UiLCJkIiwiaCIsIlQiLCJEYXRlIiwiayIsInVlIiwiQSIsIk4iLCJEIiwiaiIsInEiLCJwb3AiLCJMIiwiSCIsIk8iLCJQIiwiUiIsIk0iLCJJIiwiVyIsIkYiLCJCIiwiUmVnRXhwIiwiJCIsIl8iLCJ6IiwiVSIsIlgiLCJWIiwiRyIsIklEIiwiQ0xBU1MiLCJUQUciLCJBVFRSIiwiUFNFVURPIiwiQ0hJTEQiLCJib29sIiwibmVlZHNDb250ZXh0IiwiWSIsIlEiLCJKIiwiSyIsIloiLCJlZSIsInRlIiwibmUiLCJTdHJpbmciLCJmcm9tQ2hhckNvZGUiLCJyZSIsImllIiwiY2hhckNvZGVBdCIsIm9lIiwiYWUiLCJiZSIsImRpc2FibGVkIiwibm9kZU5hbWUiLCJkaXIiLCJuZXh0IiwiY2hpbGROb2RlcyIsInNlIiwib3duZXJEb2N1bWVudCIsImV4ZWMiLCJnZXRFbGVtZW50QnlJZCIsImlkIiwiZ2V0RWxlbWVudHNCeVRhZ05hbWUiLCJnZXRFbGVtZW50c0J5Q2xhc3NOYW1lIiwicXNhIiwidGVzdCIsInllIiwic2NvcGUiLCJ4ZSIsImpvaW4iLCJxdWVyeVNlbGVjdG9yQWxsIiwicmVtb3ZlQXR0cmlidXRlIiwiY2FjaGVMZW5ndGgiLCJzaGlmdCIsImxlIiwiY2UiLCJmZSIsImF0dHJIYW5kbGUiLCJwZSIsInNvdXJjZUluZGV4IiwibmV4dFNpYmxpbmciLCJkZSIsImhlIiwiZ2UiLCJpc0Rpc2FibGVkIiwidmUiLCJpc1hNTCIsIm5hbWVzcGFjZVVSSSIsImRvY3VtZW50RWxlbWVudCIsInNldERvY3VtZW50IiwiZGVmYXVsdFZpZXciLCJ0b3AiLCJhZGRFdmVudExpc3RlbmVyIiwiYXR0YWNoRXZlbnQiLCJhdHRyaWJ1dGVzIiwiY2xhc3NOYW1lIiwiY3JlYXRlQ29tbWVudCIsImdldEJ5SWQiLCJnZXRFbGVtZW50c0J5TmFtZSIsImZpbHRlciIsImZpbmQiLCJnZXRBdHRyaWJ1dGVOb2RlIiwidmFsdWUiLCJpbm5lckhUTUwiLCJtYXRjaGVzU2VsZWN0b3IiLCJtYXRjaGVzIiwid2Via2l0TWF0Y2hlc1NlbGVjdG9yIiwibW96TWF0Y2hlc1NlbGVjdG9yIiwib01hdGNoZXNTZWxlY3RvciIsIm1zTWF0Y2hlc1NlbGVjdG9yIiwiZGlzY29ubmVjdGVkTWF0Y2giLCJjb21wYXJlRG9jdW1lbnRQb3NpdGlvbiIsImNvbnRhaW5zIiwic29ydERldGFjaGVkIiwidW5zaGlmdCIsImF0dHIiLCJzcGVjaWZpZWQiLCJlc2NhcGUiLCJ1bmlxdWVTb3J0IiwiZGV0ZWN0RHVwbGljYXRlcyIsInNvcnRTdGFibGUiLCJnZXRUZXh0IiwidGV4dENvbnRlbnQiLCJmaXJzdENoaWxkIiwibm9kZVZhbHVlIiwic2VsZWN0b3JzIiwiY3JlYXRlUHNldWRvIiwibWF0Y2giLCJyZWxhdGl2ZSIsInByZUZpbHRlciIsImxhc3RDaGlsZCIsInVuaXF1ZUlEIiwicHNldWRvcyIsInNldEZpbHRlcnMiLCJub3QiLCJoYXMiLCJsYW5nIiwidGFyZ2V0IiwibG9jYXRpb24iLCJoYXNoIiwicm9vdCIsImZvY3VzIiwiYWN0aXZlRWxlbWVudCIsImhhc0ZvY3VzIiwiaHJlZiIsInRhYkluZGV4IiwiZW5hYmxlZCIsImNoZWNrZWQiLCJzZWxlY3RlZCIsInNlbGVjdGVkSW5kZXgiLCJlbXB0eSIsInBhcmVudCIsImhlYWRlciIsImlucHV0IiwiYnV0dG9uIiwibHQiLCJndCIsIm50aCIsInJhZGlvIiwiY2hlY2tib3giLCJmaWxlIiwicGFzc3dvcmQiLCJpbWFnZSIsInN1Ym1pdCIsInJlc2V0IiwibWUiLCJ3ZSIsIlRlIiwiQ2UiLCJFZSIsImZpbHRlcnMiLCJ0b2tlbml6ZSIsImNvbXBpbGUiLCJzZWxlY3RvciIsInNlbGVjdCIsImRlZmF1bHRWYWx1ZSIsImV4cHIiLCJ1bmlxdWUiLCJpc1hNTERvYyIsImVzY2FwZVNlbGVjdG9yIiwiaXMiLCJwYXJzZUhUTUwiLCJyZWFkeSIsImNoaWxkcmVuIiwiY29udGVudHMiLCJwcmV2IiwiY2xvc2VzdCIsImluZGV4IiwicHJldkFsbCIsImFkZCIsImFkZEJhY2siLCJwYXJlbnRzIiwicGFyZW50c1VudGlsIiwibmV4dEFsbCIsIm5leHRVbnRpbCIsInByZXZVbnRpbCIsInNpYmxpbmdzIiwiY29udGVudERvY3VtZW50IiwiY29udGVudCIsInJldmVyc2UiLCJwcm9taXNlIiwiZG9uZSIsImZhaWwiLCJ0aGVuIiwiQ2FsbGJhY2tzIiwib25jZSIsInN0b3BPbkZhbHNlIiwibWVtb3J5IiwicmVtb3ZlIiwiZGlzYWJsZSIsImxvY2siLCJsb2NrZWQiLCJmaXJlV2l0aCIsImZpcmUiLCJmaXJlZCIsIkRlZmVycmVkIiwic3RhdGUiLCJhbHdheXMiLCJwaXBlIiwicHJvZ3Jlc3MiLCJub3RpZnkiLCJyZXNvbHZlIiwicmVqZWN0IiwiVHlwZUVycm9yIiwibm90aWZ5V2l0aCIsInJlc29sdmVXaXRoIiwiZXhjZXB0aW9uSG9vayIsInN0YWNrVHJhY2UiLCJyZWplY3RXaXRoIiwiZ2V0U3RhY2tIb29rIiwic2V0VGltZW91dCIsIndoZW4iLCJjb25zb2xlIiwid2FybiIsIm5hbWUiLCJtZXNzYWdlIiwic3RhY2siLCJyZWFkeUV4Y2VwdGlvbiIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJyZWFkeVdhaXQiLCJyZWFkeVN0YXRlIiwiZG9TY3JvbGwiLCJ0b1VwcGVyQ2FzZSIsInVpZCIsImNhY2hlIiwiZGVmaW5lUHJvcGVydHkiLCJjb25maWd1cmFibGUiLCJzZXQiLCJhY2Nlc3MiLCJoYXNEYXRhIiwiSlNPTiIsInBhcnNlIiwiZGF0YSIsInJlbW92ZURhdGEiLCJfZGF0YSIsIl9yZW1vdmVEYXRhIiwicXVldWUiLCJkZXF1ZXVlIiwiX3F1ZXVlSG9va3MiLCJzdG9wIiwiY2xlYXJRdWV1ZSIsInNvdXJjZSIsImNvbXBvc2VkIiwiZ2V0Um9vdE5vZGUiLCJzdHlsZSIsImRpc3BsYXkiLCJjc3MiLCJjdXIiLCJjc3NOdW1iZXIiLCJ1bml0Iiwic3RhcnQiLCJib2R5Iiwic2hvdyIsImhpZGUiLCJ0b2dnbGUiLCJjcmVhdGVEb2N1bWVudEZyYWdtZW50IiwiY2hlY2tDbG9uZSIsImNsb25lTm9kZSIsIm5vQ2xvbmVDaGVja2VkIiwib3B0aW9uIiwidGhlYWQiLCJjb2wiLCJ0ciIsInRkIiwiX2RlZmF1bHQiLCJ0Ym9keSIsInRmb290IiwiY29sZ3JvdXAiLCJjYXB0aW9uIiwidGgiLCJvcHRncm91cCIsImh0bWxQcmVmaWx0ZXIiLCJjcmVhdGVUZXh0Tm9kZSIsIlNlIiwia2UiLCJvZmYiLCJldmVudCIsIkFlIiwibmFtZXNwYWNlIiwiaGFuZGxlciIsImlzVHJpZ2dlciIsInNwZWNpYWwiLCJkZWxlZ2F0ZVR5cGUiLCJzdG9wUHJvcGFnYXRpb24iLCJzdG9wSW1tZWRpYXRlUHJvcGFnYXRpb24iLCJwcmV2ZW50RGVmYXVsdCIsInRyaWdnZXIiLCJFdmVudCIsImdsb2JhbCIsImV2ZW50cyIsImNyZWF0ZSIsImhhbmRsZSIsInRyaWdnZXJlZCIsImRpc3BhdGNoIiwiYmluZFR5cGUiLCJvcmlnVHlwZSIsImRlbGVnYXRlQ291bnQiLCJzZXR1cCIsInRlYXJkb3duIiwicmVtb3ZlRXZlbnQiLCJmaXgiLCJkZWxlZ2F0ZVRhcmdldCIsInByZURpc3BhdGNoIiwiaGFuZGxlcnMiLCJpc1Byb3BhZ2F0aW9uU3RvcHBlZCIsImN1cnJlbnRUYXJnZXQiLCJlbGVtIiwiaXNJbW1lZGlhdGVQcm9wYWdhdGlvblN0b3BwZWQiLCJybmFtZXNwYWNlIiwiaGFuZGxlT2JqIiwicmVzdWx0IiwicG9zdERpc3BhdGNoIiwiYWRkUHJvcCIsImVudW1lcmFibGUiLCJvcmlnaW5hbEV2ZW50Iiwid3JpdGFibGUiLCJsb2FkIiwibm9CdWJibGUiLCJjbGljayIsImJlZm9yZXVubG9hZCIsInJldHVyblZhbHVlIiwiaXNEZWZhdWx0UHJldmVudGVkIiwiZGVmYXVsdFByZXZlbnRlZCIsInJlbGF0ZWRUYXJnZXQiLCJ0aW1lU3RhbXAiLCJub3ciLCJpc1NpbXVsYXRlZCIsImFsdEtleSIsImJ1YmJsZXMiLCJjYW5jZWxhYmxlIiwiY2hhbmdlZFRvdWNoZXMiLCJjdHJsS2V5IiwiZGV0YWlsIiwiZXZlbnRQaGFzZSIsIm1ldGFLZXkiLCJwYWdlWCIsInBhZ2VZIiwic2hpZnRLZXkiLCJ2aWV3IiwiY29kZSIsImNoYXJDb2RlIiwia2V5Iiwia2V5Q29kZSIsImJ1dHRvbnMiLCJjbGllbnRYIiwiY2xpZW50WSIsIm9mZnNldFgiLCJvZmZzZXRZIiwicG9pbnRlcklkIiwicG9pbnRlclR5cGUiLCJzY3JlZW5YIiwic2NyZWVuWSIsInRhcmdldFRvdWNoZXMiLCJ0b0VsZW1lbnQiLCJ0b3VjaGVzIiwid2hpY2giLCJibHVyIiwibW91c2VlbnRlciIsIm1vdXNlbGVhdmUiLCJwb2ludGVyZW50ZXIiLCJwb2ludGVybGVhdmUiLCJvbiIsIm9uZSIsIk5lIiwiRGUiLCJqZSIsInFlIiwiTGUiLCJIZSIsIk9lIiwiUGUiLCJodG1sIiwiY2xvbmUiLCJfZXZhbFVybCIsIlJlIiwiY2xlYW5EYXRhIiwiZGV0YWNoIiwiYXBwZW5kIiwicHJlcGVuZCIsImluc2VydEJlZm9yZSIsImJlZm9yZSIsImFmdGVyIiwicmVwbGFjZVdpdGgiLCJyZXBsYWNlQ2hpbGQiLCJhcHBlbmRUbyIsInByZXBlbmRUbyIsImluc2VydEFmdGVyIiwicmVwbGFjZUFsbCIsIk1lIiwiSWUiLCJvcGVuZXIiLCJnZXRDb21wdXRlZFN0eWxlIiwiV2UiLCJGZSIsIkJlIiwiZ2V0UHJvcGVydHlWYWx1ZSIsInBpeGVsQm94U3R5bGVzIiwid2lkdGgiLCJtaW5XaWR0aCIsIm1heFdpZHRoIiwiJGUiLCJjc3NUZXh0IiwibWFyZ2luTGVmdCIsInJpZ2h0IiwicG9zaXRpb24iLCJvZmZzZXRXaWR0aCIsInJvdW5kIiwicGFyc2VGbG9hdCIsImJhY2tncm91bmRDbGlwIiwiY2xlYXJDbG9uZVN0eWxlIiwiYm94U2l6aW5nUmVsaWFibGUiLCJwaXhlbFBvc2l0aW9uIiwicmVsaWFibGVNYXJnaW5MZWZ0Iiwic2Nyb2xsYm94U2l6ZSIsInJlbGlhYmxlVHJEaW1lbnNpb25zIiwiaGVpZ2h0IiwicGFyc2VJbnQiLCJfZSIsInplIiwiVWUiLCJYZSIsImNzc1Byb3BzIiwiVmUiLCJHZSIsIlllIiwidmlzaWJpbGl0eSIsIlFlIiwibGV0dGVyU3BhY2luZyIsImZvbnRXZWlnaHQiLCJKZSIsIm1heCIsIktlIiwiY2VpbCIsIlplIiwiZ2V0Q2xpZW50UmVjdHMiLCJldCIsImNzc0hvb2tzIiwib3BhY2l0eSIsImFuaW1hdGlvbkl0ZXJhdGlvbkNvdW50IiwiY29sdW1uQ291bnQiLCJmaWxsT3BhY2l0eSIsImZsZXhHcm93IiwiZmxleFNocmluayIsImdyaWRBcmVhIiwiZ3JpZENvbHVtbiIsImdyaWRDb2x1bW5FbmQiLCJncmlkQ29sdW1uU3RhcnQiLCJncmlkUm93IiwiZ3JpZFJvd0VuZCIsImdyaWRSb3dTdGFydCIsImxpbmVIZWlnaHQiLCJvcmRlciIsIm9ycGhhbnMiLCJ3aWRvd3MiLCJ6SW5kZXgiLCJ6b29tIiwic2V0UHJvcGVydHkiLCJpc0Zpbml0ZSIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsImxlZnQiLCJtYXJnaW4iLCJwYWRkaW5nIiwiYm9yZGVyIiwiZXhwYW5kIiwiVHdlZW4iLCJwcm9wIiwiZWFzaW5nIiwib3B0aW9ucyIsInByb3BIb29rcyIsInJ1biIsImR1cmF0aW9uIiwicG9zIiwic3RlcCIsImZ4Iiwic2Nyb2xsVG9wIiwic2Nyb2xsTGVmdCIsImxpbmVhciIsInN3aW5nIiwiY29zIiwiUEkiLCJ0dCIsIm50IiwicnQiLCJpdCIsIm90IiwiYXQiLCJzdCIsImhpZGRlbiIsInJlcXVlc3RBbmltYXRpb25GcmFtZSIsImludGVydmFsIiwidGljayIsInV0IiwiY3QiLCJmdCIsInR3ZWVuZXJzIiwicHJlZmlsdGVycyIsInN0YXJ0VGltZSIsInR3ZWVucyIsInByb3BzIiwib3B0cyIsInNwZWNpYWxFYXNpbmciLCJvcmlnaW5hbFByb3BlcnRpZXMiLCJvcmlnaW5hbE9wdGlvbnMiLCJjcmVhdGVUd2VlbiIsImJpbmQiLCJjb21wbGV0ZSIsInRpbWVyIiwiYW5pbSIsIkFuaW1hdGlvbiIsInR3ZWVuZXIiLCJ1bnF1ZXVlZCIsIm92ZXJmbG93Iiwib3ZlcmZsb3dYIiwib3ZlcmZsb3dZIiwicHJlZmlsdGVyIiwic3BlZWQiLCJzcGVlZHMiLCJvbGQiLCJmYWRlVG8iLCJhbmltYXRlIiwiZmluaXNoIiwidGltZXJzIiwic2xpZGVEb3duIiwic2xpZGVVcCIsInNsaWRlVG9nZ2xlIiwiZmFkZUluIiwiZmFkZU91dCIsImZhZGVUb2dnbGUiLCJzbG93IiwiZmFzdCIsImRlbGF5IiwiY2xlYXJUaW1lb3V0IiwiY2hlY2tPbiIsIm9wdFNlbGVjdGVkIiwicmFkaW9WYWx1ZSIsInB0IiwiZHQiLCJyZW1vdmVBdHRyIiwiYXR0ckhvb2tzIiwiaHQiLCJ2dCIsInl0IiwibXQiLCJyZW1vdmVQcm9wIiwicHJvcEZpeCIsImFkZENsYXNzIiwicmVtb3ZlQ2xhc3MiLCJ0b2dnbGVDbGFzcyIsImhhc0NsYXNzIiwieHQiLCJ2YWwiLCJ2YWxIb29rcyIsImZvY3VzaW4iLCJidCIsInd0IiwicGFyZW50V2luZG93Iiwic2ltdWxhdGUiLCJ0cmlnZ2VySGFuZGxlciIsIlR0IiwiQ3QiLCJFdCIsInBhcnNlWE1MIiwiRE9NUGFyc2VyIiwicGFyc2VGcm9tU3RyaW5nIiwiU3QiLCJrdCIsIkF0IiwiTnQiLCJEdCIsInBhcmFtIiwiZW5jb2RlVVJJQ29tcG9uZW50Iiwic2VyaWFsaXplIiwic2VyaWFsaXplQXJyYXkiLCJqdCIsInF0IiwiTHQiLCJIdCIsIk90IiwiUHQiLCJSdCIsIk10IiwiSXQiLCJXdCIsIkZ0IiwiQnQiLCJkYXRhVHlwZXMiLCIkdCIsImFqYXhTZXR0aW5ncyIsImZsYXRPcHRpb25zIiwiYWN0aXZlIiwibGFzdE1vZGlmaWVkIiwiZXRhZyIsInVybCIsImlzTG9jYWwiLCJwcm90b2NvbCIsInByb2Nlc3NEYXRhIiwiYXN5bmMiLCJjb250ZW50VHlwZSIsImFjY2VwdHMiLCJ4bWwiLCJqc29uIiwicmVzcG9uc2VGaWVsZHMiLCJjb252ZXJ0ZXJzIiwiY29udGV4dCIsImFqYXhTZXR1cCIsImFqYXhQcmVmaWx0ZXIiLCJhamF4VHJhbnNwb3J0IiwiYWpheCIsInN0YXR1c0NvZGUiLCJnZXRSZXNwb25zZUhlYWRlciIsImdldEFsbFJlc3BvbnNlSGVhZGVycyIsInNldFJlcXVlc3RIZWFkZXIiLCJvdmVycmlkZU1pbWVUeXBlIiwibWltZVR5cGUiLCJzdGF0dXMiLCJhYm9ydCIsIm1ldGhvZCIsImRhdGFUeXBlIiwiY3Jvc3NEb21haW4iLCJob3N0IiwidHJhZGl0aW9uYWwiLCJoYXNDb250ZW50IiwiaWZNb2RpZmllZCIsImhlYWRlcnMiLCJiZWZvcmVTZW5kIiwic3VjY2VzcyIsInRpbWVvdXQiLCJzZW5kIiwiZGF0YUZpbHRlciIsInN0YXR1c1RleHQiLCJnZXRKU09OIiwiZ2V0U2NyaXB0Iiwid3JhcEFsbCIsImZpcnN0RWxlbWVudENoaWxkIiwid3JhcElubmVyIiwid3JhcCIsInVud3JhcCIsInZpc2libGUiLCJvZmZzZXRIZWlnaHQiLCJ4aHIiLCJYTUxIdHRwUmVxdWVzdCIsIl90IiwienQiLCJjb3JzIiwib3BlbiIsInVzZXJuYW1lIiwieGhyRmllbGRzIiwib25sb2FkIiwib25lcnJvciIsIm9uYWJvcnQiLCJvbnRpbWVvdXQiLCJvbnJlYWR5c3RhdGVjaGFuZ2UiLCJyZXNwb25zZVR5cGUiLCJyZXNwb25zZVRleHQiLCJiaW5hcnkiLCJyZXNwb25zZSIsInNjcmlwdCIsInNjcmlwdEF0dHJzIiwiY2hhcnNldCIsInNjcmlwdENoYXJzZXQiLCJVdCIsIlh0IiwiVnQiLCJqc29ucCIsImpzb25wQ2FsbGJhY2siLCJjcmVhdGVIVE1MRG9jdW1lbnQiLCJpbXBsZW1lbnRhdGlvbiIsImFuaW1hdGVkIiwib2Zmc2V0Iiwic2V0T2Zmc2V0IiwidXNpbmciLCJwYWdlWU9mZnNldCIsInBhZ2VYT2Zmc2V0Iiwib2Zmc2V0UGFyZW50Iiwic2Nyb2xsVG8iLCJIZWlnaHQiLCJXaWR0aCIsInVuYmluZCIsImRlbGVnYXRlIiwidW5kZWxlZ2F0ZSIsImhvdmVyIiwiR3QiLCJwcm94eSIsImhvbGRSZWFkeSIsInBhcnNlSlNPTiIsImlzRnVuY3Rpb24iLCJpc1dpbmRvdyIsImNhbWVsQ2FzZSIsImlzTnVtZXJpYyIsImlzTmFOIiwidHJpbSIsImRlZmluZSIsImFtZCIsIll0IiwialF1ZXJ5IiwiUXQiLCJub0NvbmZsaWN0IiwiYXNzaWduIiwidGhyZXNob2xkIiwicmVxdWVzdEZyYW1lIiwid2Via2l0UmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwibW96UmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwib1JlcXVlc3RBbmltYXRpb25GcmFtZSIsIm1zUmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwiZWxlbWVudCIsIkN1c3RvbUV2ZW50IiwicGFyYW1zIiwidW5kZWZpbmVkIiwiZXZ0IiwiY3JlYXRlRXZlbnQiLCJpbml0Q3VzdG9tRXZlbnQiLCJpZ25vcmVUYWdzIiwidGV4dGFyZWEiLCJtb3VzZWV2ZW50cyIsIm1vdmUiLCJjYW5jZWwiLCJ0b3VjaGV2ZW50cyIsInJzcGFjZXMiLCJldmVudE9wdGlvbnMiLCJldmVudHNTeW1ib2wiLCJnZXRFdmVudHMiLCJub2RlIiwidHlwZXMiLCJwcm9wZXJ0aWVzIiwiZGlzcGF0Y2hFdmVudCIsIlRpbWVyIiwiY2FsbGJhY2siLCJydW5uaW5nIiwidGltZSIsImtpY2siLCJjYiIsImlzSWdub3JlVGFnIiwidGFnTmFtZSIsImlzUHJpbWFyeUJ1dHRvbiIsImlkZW50aWZpZWRUb3VjaCIsInRvdWNoTGlzdCIsImlkZW50aWZpZXIiLCJjaGFuZ2VkVG91Y2giLCJ0b3VjaCIsIm1vdXNlZG93biIsIm1vdXNlbW92ZSIsIm1vdXNlZW5kIiwiY2hlY2tUaHJlc2hvbGQiLCJyZW1vdmVNb3VzZSIsInRvdWNoc3RhcnQiLCJ0b3VjaG1vdmUiLCJ0b3VjaGVuZCIsInJlbW92ZVRvdWNoIiwiZGlzdFgiLCJkaXN0WSIsInRyaWdnZXJTdGFydCIsInRlbXBsYXRlIiwic3RhcnRYIiwic3RhcnRZIiwiZGVsdGFYIiwiZGVsdGFZIiwidmVsb2NpdHlYIiwidmVsb2NpdHlZIiwiZmluZ2VyIiwiZW5hYmxlTW92ZSIsIm1vdmVFbmFibGVkIiwiYWN0aXZlTW91c2Vtb3ZlIiwiYWN0aXZlTW91c2VlbmQiLCJyZW1vdmVBY3RpdmVNb3VzZSIsImVuZEV2ZW50IiwiYWN0aXZlVG91Y2htb3ZlIiwiYWN0aXZlVG91Y2hlbmQiLCJyZW1vdmVBY3RpdmVUb3VjaCIsInVwZGF0ZUV2ZW50IiwibW92ZXN0YXJ0IiwidXBkYXRlIiwiZW5hYmxlTW92ZTEiLCJlbmFibGVNb3ZlMiIsImVuYWJsZU1vdmUzIiwicHJvcGVydHkiLCJtb3ZlZW5kIiwibmljZVNlbGVjdCIsIiRzZWxlY3QiLCIkZHJvcGRvd24iLCJjcmVhdGVfbmljZV9zZWxlY3QiLCIkb3B0aW9ucyIsIiRzZWxlY3RlZCIsIiRvcHRpb24iLCIkZm9jdXNlZF9vcHRpb24iLCIkbmV4dCIsIiRwcmV2IiwicG9pbnRlckV2ZW50cyIsInR3ZW50eXR3ZW50eSIsImRlZmF1bHRfb2Zmc2V0X3BjdCIsIm9yaWVudGF0aW9uIiwiYmVmb3JlX2xhYmVsIiwiYWZ0ZXJfbGFiZWwiLCJub19vdmVybGF5IiwibW92ZV9zbGlkZXJfb25faG92ZXIiLCJtb3ZlX3dpdGhfaGFuZGxlX29ubHkiLCJjbGlja190b19tb3ZlIiwic2xpZGVyUGN0IiwiY29udGFpbmVyIiwic2xpZGVyT3JpZW50YXRpb24iLCJiZWZvcmVEaXJlY3Rpb24iLCJhZnRlckRpcmVjdGlvbiIsIm92ZXJsYXkiLCJiZWZvcmVJbWciLCJhZnRlckltZyIsInNsaWRlciIsImNhbGNPZmZzZXQiLCJkaW1lbnNpb25QY3QiLCJjdyIsImNoIiwiYWRqdXN0Q29udGFpbmVyIiwiYWRqdXN0U2xpZGVyIiwicGN0IiwibWluTWF4TnVtYmVyIiwibnVtIiwibWluIiwiZ2V0U2xpZGVyUGVyY2VudGFnZSIsInBvc2l0aW9uWCIsInBvc2l0aW9uWSIsInNsaWRlclBlcmNlbnRhZ2UiLCJpbWdIZWlnaHQiLCJpbWdXaWR0aCIsIm9uTW92ZVN0YXJ0Iiwib25Nb3ZlIiwib25Nb3ZlRW5kIiwibW92ZVRhcmdldCIsInJlcXVpcmUiLCJ2YWxpZGF0ZSIsImRlYnVnIiwidmFsaWRhdG9yIiwic2V0dGluZ3MiLCJvbnN1Ym1pdCIsInN1Ym1pdEJ1dHRvbiIsImNhbmNlbFN1Ym1pdCIsInN1Ym1pdEhhbmRsZXIiLCJmb3JtU3VibWl0dGVkIiwiY3VycmVudEZvcm0iLCJmb3JtIiwicGVuZGluZ1JlcXVlc3QiLCJmb2N1c0ludmFsaWQiLCJ2YWxpZCIsImVycm9yTGlzdCIsInJ1bGVzIiwic3RhdGljUnVsZXMiLCJub3JtYWxpemVSdWxlIiwibWVzc2FnZXMiLCJub3JtYWxpemVSdWxlcyIsImNsYXNzUnVsZXMiLCJhdHRyaWJ1dGVSdWxlcyIsImRhdGFSdWxlcyIsInJlcXVpcmVkIiwicmVtb3RlIiwiYmxhbmsiLCJmaWxsZWQiLCJ1bmNoZWNrZWQiLCJkZWZhdWx0cyIsImZvcm1hdCIsImdyb3VwcyIsImVycm9yQ2xhc3MiLCJwZW5kaW5nQ2xhc3MiLCJ2YWxpZENsYXNzIiwiZXJyb3JFbGVtZW50IiwiZm9jdXNDbGVhbnVwIiwiZXJyb3JDb250YWluZXIiLCJlcnJvckxhYmVsQ29udGFpbmVyIiwiaWdub3JlIiwiaWdub3JlVGl0bGUiLCJvbmZvY3VzaW4iLCJsYXN0QWN0aXZlIiwidW5oaWdobGlnaHQiLCJoaWRlVGhlc2UiLCJlcnJvcnNGb3IiLCJvbmZvY3Vzb3V0IiwiY2hlY2thYmxlIiwic3VibWl0dGVkIiwib3B0aW9uYWwiLCJvbmtleXVwIiwiZWxlbWVudFZhbHVlIiwiaW52YWxpZCIsIm9uY2xpY2siLCJoaWdobGlnaHQiLCJmaW5kQnlOYW1lIiwic2V0RGVmYXVsdHMiLCJlbWFpbCIsImRhdGUiLCJkYXRlSVNPIiwibnVtYmVyIiwiZGlnaXRzIiwiZXF1YWxUbyIsIm1heGxlbmd0aCIsIm1pbmxlbmd0aCIsInJhbmdlbGVuZ3RoIiwicmFuZ2UiLCJhdXRvQ3JlYXRlUmFuZ2VzIiwibGFiZWxDb250YWluZXIiLCJlcnJvckNvbnRleHQiLCJjb250YWluZXJzIiwidmFsdWVDYWNoZSIsInBlbmRpbmciLCJpbnZhbGlkSGFuZGxlciIsImNoZWNrRm9ybSIsImVycm9yTWFwIiwic2hvd0Vycm9ycyIsInByZXBhcmVGb3JtIiwiY3VycmVudEVsZW1lbnRzIiwiZWxlbWVudHMiLCJjaGVjayIsImNsZWFuIiwidmFsaWRhdGlvblRhcmdldEZvciIsInByZXBhcmVFbGVtZW50IiwibnVtYmVyT2ZJbnZhbGlkcyIsInRvSGlkZSIsInN1Y2Nlc3NMaXN0IiwiZGVmYXVsdFNob3dFcnJvcnMiLCJyZXNldEZvcm0iLCJoaWRlRXJyb3JzIiwicmVzZXRFbGVtZW50cyIsIm9iamVjdExlbmd0aCIsImFkZFdyYXBwZXIiLCJzaXplIiwiZmluZExhc3RBY3RpdmUiLCJlcnJvcnMiLCJyZXNldEludGVybmFscyIsInRvU2hvdyIsInZhbGlkaXR5IiwiYmFkSW5wdXQiLCJzdWJzdHIiLCJsYXN0SW5kZXhPZiIsIm5vcm1hbGl6ZXIiLCJwYXJhbWV0ZXJzIiwibWV0aG9kcyIsImZvcm1hdEFuZEFkZCIsImxvZyIsImN1c3RvbURhdGFNZXNzYWdlIiwiY2hhckF0Iiwic3Vic3RyaW5nIiwiY3VzdG9tTWVzc2FnZSIsImZpbmREZWZpbmVkIiwiZGVmYXVsdE1lc3NhZ2UiLCJ0aXRsZSIsIndyYXBwZXIiLCJzaG93TGFiZWwiLCJ2YWxpZEVsZW1lbnRzIiwiaW52YWxpZEVsZW1lbnRzIiwiaWRPck5hbWUiLCJlcnJvclBsYWNlbWVudCIsImVzY2FwZUNzc01ldGEiLCJnZXRMZW5ndGgiLCJkZXBlbmQiLCJkZXBlbmRUeXBlcyIsInN0cmluZyIsInN0YXJ0UmVxdWVzdCIsInN0b3BSZXF1ZXN0IiwicHJldmlvdXNWYWx1ZSIsImRlc3Ryb3kiLCJjbGFzc1J1bGVTZXR0aW5ncyIsImNyZWRpdGNhcmQiLCJhZGRDbGFzc1J1bGVzIiwibm9ybWFsaXplQXR0cmlidXRlUnVsZSIsIk51bWJlciIsImRlcGVuZHMiLCJhZGRNZXRob2QiLCJwb3ciLCJvcmlnaW5hbE1lc3NhZ2UiLCJtb2RlIiwicG9ydCIsIlN3aXBlciIsImRpcmVjdGlvbiIsInNsaWRlc1BlclZpZXciLCJsb29wIiwiZmFkZUVmZmVjdCIsImNyb3NzRmFkZSIsImVmZmVjdCIsImF1dG9wbGF5IiwiZGlzYWJsZU9uSW50ZXJhY3Rpb24iLCJiZWZvcmVJbml0Iiwic2xpZGVzIiwic3dpcGVyIiwic3BhY2VCZXR3ZWVuIiwic2Nyb2xsYmFyIiwiZW5hYmxlIiwiZWwiLCJkcmFnZ2FibGUiLCJuYXZpZ2F0aW9uIiwibmV4dEVsIiwicHJldkVsIiwiYnJlYWtwb2ludHMiLCJwYWdpbmF0aW9uIiwiY2xpY2thYmxlIiwicmVuZGVyQnVsbGV0Iiwic2xpZGVDaGFuZ2UiLCJxdWVyeVNlbGVjdG9yIiwiaXNTdGlja3kiLCJoZWFkZXJIZWlnaHQiLCJlbGVtZW50VG9wIiwib2Zmc2V0VG9wIiwiYmVoYXZpb3IiLCJidWxsZXRzIiwiZnJlZU1vZGUiLCJzd2lwZXJNYXJxdWUiLCJhbGxvd1RvdWNoTW92ZSIsImdhbGxhcnlfX3N3aXBlciIsIndhdGNoU2xpZGVzUHJvZ3Jlc3MiLCIkY29udGFpbmVyIiwic3dpcGVyVGFicyIsInRvdWNoU3RhcnRGb3JjZVByZXZlbnREZWZhdWx0IiwiJHRoaXMiLCIkZm9ybSIsIiRpbnB1dCIsIiRidG4iLCIkcGFyZW50IiwiaW5uZXJXaWR0aCIsInBhdHRlcm4iLCJwaG9uZSIsIm1lbnVDbG9zZSIsIm1lbnVPcGVuIiwic2xpZGVUb2dnbGVTZWN0aW9uIiwib3V0ZXJXaWR0aCIsInJpZ2h0RHJvcGRvd24iLCIkc3VibWVudSIsIiRvZmZzZXRUb0xlZnQiLCJ3aW5kb3dXaWR0aCIsIiRpc09wZW4iLCJwb3B1cENsb3NlIiwiJGVsZW0iLCJwb3B1cE9wZW4iLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwic2V0SXRlbSIsImdhbGxlcnlUaHVtYnNTd2lwZXIiLCJyZXNpemUiLCJnYWxsZXJ5U3dpcGVyIiwidGh1bWJzIiwiZml4ZWRIZWFkZXIiLCJpbm5lckhlaWdodCIsInNjcm9sbCIsInJhdGlvIiwiY29tZSJdLCJtYXBwaW5ncyI6Ijs7OztBQUFBO0FBQ0EsQ0FBQyxVQUFTQSxDQUFULEVBQVdDLENBQVgsRUFBYTtBQUFDOztBQUFhLHNCQUFpQkMsTUFBakIseUNBQWlCQSxNQUFqQixNQUF5QixvQkFBaUJBLE1B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QWxDLEVBQTJDLFVBQVMvZCxDQUFULEVBQVk7QUFDckRBLEVBQUFBLENBQUMsQ0FBQ21aLGNBQUY7QUFDQTVSLEVBQUFBLENBQUMsQ0FBQyxJQUFELENBQUQsQ0FBUTBLLE9BQVIsQ0FBZ0IsY0FBaEIsRUFBZ0N1WCxXQUFoQyxDQUE0QyxNQUE1QztBQUNBamlCLEVBQUFBLENBQUMsQ0FBQyxJQUFELENBQUQsQ0FBUTBLLE9BQVIsQ0FBZ0IsY0FBaEIsRUFBZ0MzRixJQUFoQyxDQUFxQyxPQUFyQyxFQUE4Q3NkLEdBQTlDLENBQWtELEVBQWxEO0FBQ0QsQ0FKRCxFLENBT0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzQ29udGVudCI6WyIvKiEgalF1ZXJ5IHYzLjUuMSB8IChjKSBKUyBGb3VuZGF0aW9uIGFuZCBvdGhlciBjb250cmlidXRvcnMgfCBqcXVlcnkub3JnL2xpY2Vuc2UgKi9cbiFmdW5jdGlvbihlLHQpe1widXNlIHN0cmljdFwiO1wib2JqZWN0XCI9PXR5cGVvZiBtb2R1bGUmJlwib2JqZWN0XCI9PXR5cGVvZiBtb2R1bGUuZXhwb3J0cz9tb2R1bGUuZXhwb3J0cz1lLmRvY3VtZW50P3QoZSwhMCk6ZnVuY3Rpb24oZSl7aWYoIWUuZG9jdW1lbnQpdGhyb3cgbmV3IEVycm9yKFwialF1ZXJ5IHJlcXVpcmVzIGEgd2luZG93IHdpdGggYSBkb2N1bWVudFwiKTtyZXR1cm4gdChlKX06dChlKX0oXCJ1bmRlZmluZWRcIiE9dHlwZW9mIHdpbmRvdz93aW5kb3c6dGhpcyxmdW5jdGlvbihDLGUpe1widXNlIHN0cmljdFwiO3ZhciB0PVtdLHI9T2JqZWN0LmdldFByb3RvdHlwZU9mLHM9dC5zbGljZSxnPXQuZmxhdD9mdW5jdGlvbihlKXtyZXR1cm4gdC5mbGF0LmNhbGwoZSl9OmZ1bmN0aW9uKGUpe3JldHVybiB0LmNvbmNhdC5hcHBseShbXSxlKX0sdT10LnB1c2gsaT10LmluZGV4T2Ysbj17fSxvPW4udG9TdHJpbmcsdj1uLmhhc093blByb3BlcnR5LGE9di50b1N0cmluZyxsPWEuY2FsbChPYmplY3QpLHk9e30sbT1mdW5jdGlvbihlKXtyZXR1cm5cImZ1bmN0aW9uXCI9PXR5cGVvZiBlJiZcIm51bWJlclwiIT10eXBlb2YgZS5ub2RlVHlwZX0seD1mdW5jdGlvbihlKXtyZXR1cm4gbnVsbCE9ZSYmZT09PWUud2luZG93fSxFPUMuZG9jdW1lbnQsYz17dHlwZTohMCxzcmM6ITAsbm9uY2U6ITAsbm9Nb2R1bGU6ITB9O2Z1bmN0aW9uIGIoZSx0LG4pe3ZhciByLGksbz0obj1ufHxFKS5jcmVhdGVFbGVtZW50KFwic2NyaXB0XCIpO2lmKG8udGV4dD1lLHQpZm9yKHIgaW4gYykoaT10W3JdfHx0LmdldEF0dHJpYnV0ZSYmdC5nZXRBdHRyaWJ1dGUocikpJiZvLnNldEF0dHJpYnV0ZShyLGkpO24uaGVhZC5hcHBlbmRDaGlsZChvKS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKG8pfWZ1bmN0aW9uIHcoZSl7cmV0dXJuIG51bGw9PWU/ZStcIlwiOlwib2JqZWN0XCI9PXR5cGVvZiBlfHxcImZ1bmN0aW9uXCI9PXR5cGVvZiBlP25bby5jYWxsKGUpXXx8XCJvYmplY3RcIjp0eXBlb2YgZX12YXIgZj1cIjMuNS4xXCIsUz1mdW5jdGlvbihlLHQpe3JldHVybiBuZXcgUy5mbi5pbml0KGUsdCl9O2Z1bmN0aW9uIHAoZSl7dmFyIHQ9ISFlJiZcImxlbmd0aFwiaW4gZSYmZS5sZW5ndGgsbj13KGUpO3JldHVybiFtKGUpJiYheChlKSYmKFwiYXJyYXlcIj09PW58fDA9PT10fHxcIm51bWJlclwiPT10eXBlb2YgdCYmMDx0JiZ0LTEgaW4gZSl9Uy5mbj1TLnByb3RvdHlwZT17anF1ZXJ5OmYsY29uc3RydWN0b3I6UyxsZW5ndGg6MCx0b0FycmF5OmZ1bmN0aW9uKCl7cmV0dXJuIHMuY2FsbCh0aGlzKX0sZ2V0OmZ1bmN0aW9uKGUpe3JldHVybiBudWxsPT1lP3MuY2FsbCh0aGlzKTplPDA/dGhpc1tlK3RoaXMubGVuZ3RoXTp0aGlzW2VdfSxwdXNoU3RhY2s6ZnVuY3Rpb24oZSl7dmFyIHQ9Uy5tZXJnZSh0aGlzLmNvbnN0cnVjdG9yKCksZSk7cmV0dXJuIHQucHJldk9iamVjdD10aGlzLHR9LGVhY2g6ZnVuY3Rpb24oZSl7cmV0dXJuIFMuZWFjaCh0aGlzLGUpfSxtYXA6ZnVuY3Rpb24obil7cmV0dXJuIHRoaXMucHVzaFN0YWNrKFMubWFwKHRoaXMsZnVuY3Rpb24oZSx0KXtyZXR1cm4gbi5jYWxsKGUsdCxlKX0pKX0sc2xpY2U6ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5wdXNoU3RhY2socy5hcHBseSh0aGlzLGFyZ3VtZW50cykpfSxmaXJzdDpmdW5jdGlvbigpe3JldHVybiB0aGlzLmVxKDApfSxsYXN0OmZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuZXEoLTEpfSxldmVuOmZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMucHVzaFN0YWNrKFMuZ3JlcCh0aGlzLGZ1bmN0aW9uKGUsdCl7cmV0dXJuKHQrMSklMn0pKX0sb2RkOmZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMucHVzaFN0YWNrKFMuZ3JlcCh0aGlzLGZ1bmN0aW9uKGUsdCl7cmV0dXJuIHQlMn0pKX0sZXE6ZnVuY3Rpb24oZSl7dmFyIHQ9dGhpcy5sZW5ndGgsbj0rZSsoZTwwP3Q6MCk7cmV0dXJuIHRoaXMucHVzaFN0YWNrKDA8PW4mJm48dD9bdGhpc1tuXV06W10pfSxlbmQ6ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5wcmV2T2JqZWN0fHx0aGlzLmNvbnN0cnVjdG9yKCl9LHB1c2g6dSxzb3J0OnQuc29ydCxzcGxpY2U6dC5zcGxpY2V9LFMuZXh0ZW5kPVMuZm4uZXh0ZW5kPWZ1bmN0aW9uKCl7dmFyIGUsdCxuLHIsaSxvLGE9YXJndW1lbnRzWzBdfHx7fSxzPTEsdT1hcmd1bWVudHMubGVuZ3RoLGw9ITE7Zm9yKFwiYm9vbGVhblwiPT10eXBlb2YgYSYmKGw9YSxhPWFyZ3VtZW50c1tzXXx8e30scysrKSxcIm9iamVjdFwiPT10eXBlb2YgYXx8bShhKXx8KGE9e30pLHM9PT11JiYoYT10aGlzLHMtLSk7czx1O3MrKylpZihudWxsIT0oZT1hcmd1bWVudHNbc10pKWZvcih0IGluIGUpcj1lW3RdLFwiX19wcm90b19fXCIhPT10JiZhIT09ciYmKGwmJnImJihTLmlzUGxhaW5PYmplY3Qocil8fChpPUFycmF5LmlzQXJyYXkocikpKT8obj1hW3RdLG89aSYmIUFycmF5LmlzQXJyYXkobik/W106aXx8Uy5pc1BsYWluT2JqZWN0KG4pP246e30saT0hMSxhW3RdPVMuZXh0ZW5kKGwsbyxyKSk6dm9pZCAwIT09ciYmKGFbdF09cikpO3JldHVybiBhfSxTLmV4dGVuZCh7ZXhwYW5kbzpcImpRdWVyeVwiKyhmK01hdGgucmFuZG9tKCkpLnJlcGxhY2UoL1xcRC9nLFwiXCIpLGlzUmVhZHk6ITAsZXJyb3I6ZnVuY3Rpb24oZSl7dGhyb3cgbmV3IEVycm9yKGUpfSxub29wOmZ1bmN0aW9uKCl7fSxpc1BsYWluT2JqZWN0OmZ1bmN0aW9uKGUpe3ZhciB0LG47cmV0dXJuISghZXx8XCJbb2JqZWN0IE9iamVjdF1cIiE9PW8uY2FsbChlKSkmJighKHQ9cihlKSl8fFwiZnVuY3Rpb25cIj09dHlwZW9mKG49di5jYWxsKHQsXCJjb25zdHJ1Y3RvclwiKSYmdC5jb25zdHJ1Y3RvcikmJmEuY2FsbChuKT09PWwpfSxpc0VtcHR5T2JqZWN0OmZ1bmN0aW9uKGUpe3ZhciB0O2Zvcih0IGluIGUpcmV0dXJuITE7cmV0dXJuITB9LGdsb2JhbEV2YWw6ZnVuY3Rpb24oZSx0LG4pe2IoZSx7bm9uY2U6dCYmdC5ub25jZX0sbil9LGVhY2g6ZnVuY3Rpb24oZSx0KXt2YXIgbixyPTA7aWYocChlKSl7Zm9yKG49ZS5sZW5ndGg7cjxuO3IrKylpZighMT09PXQuY2FsbChlW3JdLHIsZVtyXSkpYnJlYWt9ZWxzZSBmb3IociBpbiBlKWlmKCExPT09dC5jYWxsKGVbcl0scixlW3JdKSlicmVhaztyZXR1cm4gZX0sbWFrZUFycmF5OmZ1bmN0aW9uKGUsdCl7dmFyIG49dHx8W107cmV0dXJuIG51bGwhPWUmJihwKE9iamVjdChlKSk/Uy5tZXJnZShuLFwic3RyaW5nXCI9PXR5cGVvZiBlP1tlXTplKTp1LmNhbGwobixlKSksbn0saW5BcnJheTpmdW5jdGlvbihlLHQsbil7cmV0dXJuIG51bGw9PXQ/LTE6aS5jYWxsKHQsZSxuKX0sbWVyZ2U6ZnVuY3Rpb24oZSx0KXtmb3IodmFyIG49K3QubGVuZ3RoLHI9MCxpPWUubGVuZ3RoO3I8bjtyKyspZVtpKytdPXRbcl07cmV0dXJuIGUubGVuZ3RoPWksZX0sZ3JlcDpmdW5jdGlvbihlLHQsbil7Zm9yKHZhciByPVtdLGk9MCxvPWUubGVuZ3RoLGE9IW47aTxvO2krKykhdChlW2ldLGkpIT09YSYmci5wdXNoKGVbaV0pO3JldHVybiByfSxtYXA6ZnVuY3Rpb24oZSx0LG4pe3ZhciByLGksbz0wLGE9W107aWYocChlKSlmb3Iocj1lLmxlbmd0aDtvPHI7bysrKW51bGwhPShpPXQoZVtvXSxvLG4pKSYmYS5wdXNoKGkpO2Vsc2UgZm9yKG8gaW4gZSludWxsIT0oaT10KGVbb10sbyxuKSkmJmEucHVzaChpKTtyZXR1cm4gZyhhKX0sZ3VpZDoxLHN1cHBvcnQ6eX0pLFwiZnVuY3Rpb25cIj09dHlwZW9mIFN5bWJvbCYmKFMuZm5bU3ltYm9sLml0ZXJhdG9yXT10W1N5bWJvbC5pdGVyYXRvcl0pLFMuZWFjaChcIkJvb2xlYW4gTnVtYmVyIFN0cmluZyBGdW5jdGlvbiBBcnJheSBEYXRlIFJlZ0V4cCBPYmplY3QgRXJyb3IgU3ltYm9sXCIuc3BsaXQoXCIgXCIpLGZ1bmN0aW9uKGUsdCl7bltcIltvYmplY3QgXCIrdCtcIl1cIl09dC50b0xvd2VyQ2FzZSgpfSk7dmFyIGQ9ZnVuY3Rpb24obil7dmFyIGUsZCxiLG8saSxoLGYsZyx3LHUsbCxULEMsYSxFLHYscyxjLHksUz1cInNpenpsZVwiKzEqbmV3IERhdGUscD1uLmRvY3VtZW50LGs9MCxyPTAsbT11ZSgpLHg9dWUoKSxBPXVlKCksTj11ZSgpLEQ9ZnVuY3Rpb24oZSx0KXtyZXR1cm4gZT09PXQmJihsPSEwKSwwfSxqPXt9Lmhhc093blByb3BlcnR5LHQ9W10scT10LnBvcCxMPXQucHVzaCxIPXQucHVzaCxPPXQuc2xpY2UsUD1mdW5jdGlvbihlLHQpe2Zvcih2YXIgbj0wLHI9ZS5sZW5ndGg7bjxyO24rKylpZihlW25dPT09dClyZXR1cm4gbjtyZXR1cm4tMX0sUj1cImNoZWNrZWR8c2VsZWN0ZWR8YXN5bmN8YXV0b2ZvY3VzfGF1dG9wbGF5fGNvbnRyb2xzfGRlZmVyfGRpc2FibGVkfGhpZGRlbnxpc21hcHxsb29wfG11bHRpcGxlfG9wZW58cmVhZG9ubHl8cmVxdWlyZWR8c2NvcGVkXCIsTT1cIltcXFxceDIwXFxcXHRcXFxcclxcXFxuXFxcXGZdXCIsST1cIig/OlxcXFxcXFxcW1xcXFxkYS1mQS1GXXsxLDZ9XCIrTStcIj98XFxcXFxcXFxbXlxcXFxyXFxcXG5cXFxcZl18W1xcXFx3LV18W15cXDAtXFxcXHg3Zl0pK1wiLFc9XCJcXFxcW1wiK00rXCIqKFwiK0krXCIpKD86XCIrTStcIiooWypeJHwhfl0/PSlcIitNK1wiKig/OicoKD86XFxcXFxcXFwufFteXFxcXFxcXFwnXSkqKSd8XFxcIigoPzpcXFxcXFxcXC58W15cXFxcXFxcXFxcXCJdKSopXFxcInwoXCIrSStcIikpfClcIitNK1wiKlxcXFxdXCIsRj1cIjooXCIrSStcIikoPzpcXFxcKCgoJygoPzpcXFxcXFxcXC58W15cXFxcXFxcXCddKSopJ3xcXFwiKCg/OlxcXFxcXFxcLnxbXlxcXFxcXFxcXFxcIl0pKilcXFwiKXwoKD86XFxcXFxcXFwufFteXFxcXFxcXFwoKVtcXFxcXV18XCIrVytcIikqKXwuKilcXFxcKXwpXCIsQj1uZXcgUmVnRXhwKE0rXCIrXCIsXCJnXCIpLCQ9bmV3IFJlZ0V4cChcIl5cIitNK1wiK3woKD86XnxbXlxcXFxcXFxcXSkoPzpcXFxcXFxcXC4pKilcIitNK1wiKyRcIixcImdcIiksXz1uZXcgUmVnRXhwKFwiXlwiK00rXCIqLFwiK00rXCIqXCIpLHo9bmV3IFJlZ0V4cChcIl5cIitNK1wiKihbPit+XXxcIitNK1wiKVwiK00rXCIqXCIpLFU9bmV3IFJlZ0V4cChNK1wifD5cIiksWD1uZXcgUmVnRXhwKEYpLFY9bmV3IFJlZ0V4cChcIl5cIitJK1wiJFwiKSxHPXtJRDpuZXcgUmVnRXhwKFwiXiMoXCIrSStcIilcIiksQ0xBU1M6bmV3IFJlZ0V4cChcIl5cXFxcLihcIitJK1wiKVwiKSxUQUc6bmV3IFJlZ0V4cChcIl4oXCIrSStcInxbKl0pXCIpLEFUVFI6bmV3IFJlZ0V4cChcIl5cIitXKSxQU0VVRE86bmV3IFJlZ0V4cChcIl5cIitGKSxDSElMRDpuZXcgUmVnRXhwKFwiXjoob25seXxmaXJzdHxsYXN0fG50aHxudGgtbGFzdCktKGNoaWxkfG9mLXR5cGUpKD86XFxcXChcIitNK1wiKihldmVufG9kZHwoKFsrLV18KShcXFxcZCopbnwpXCIrTStcIiooPzooWystXXwpXCIrTStcIiooXFxcXGQrKXwpKVwiK00rXCIqXFxcXCl8KVwiLFwiaVwiKSxib29sOm5ldyBSZWdFeHAoXCJeKD86XCIrUitcIikkXCIsXCJpXCIpLG5lZWRzQ29udGV4dDpuZXcgUmVnRXhwKFwiXlwiK00rXCIqWz4rfl18OihldmVufG9kZHxlcXxndHxsdHxudGh8Zmlyc3R8bGFzdCkoPzpcXFxcKFwiK00rXCIqKCg/Oi1cXFxcZCk/XFxcXGQqKVwiK00rXCIqXFxcXCl8KSg/PVteLV18JClcIixcImlcIil9LFk9L0hUTUwkL2ksUT0vXig/OmlucHV0fHNlbGVjdHx0ZXh0YXJlYXxidXR0b24pJC9pLEo9L15oXFxkJC9pLEs9L15bXntdK1xce1xccypcXFtuYXRpdmUgXFx3LyxaPS9eKD86IyhbXFx3LV0rKXwoXFx3Kyl8XFwuKFtcXHctXSspKSQvLGVlPS9bK35dLyx0ZT1uZXcgUmVnRXhwKFwiXFxcXFxcXFxbXFxcXGRhLWZBLUZdezEsNn1cIitNK1wiP3xcXFxcXFxcXChbXlxcXFxyXFxcXG5cXFxcZl0pXCIsXCJnXCIpLG5lPWZ1bmN0aW9uKGUsdCl7dmFyIG49XCIweFwiK2Uuc2xpY2UoMSktNjU1MzY7cmV0dXJuIHR8fChuPDA/U3RyaW5nLmZyb21DaGFyQ29kZShuKzY1NTM2KTpTdHJpbmcuZnJvbUNoYXJDb2RlKG4+PjEwfDU1Mjk2LDEwMjMmbnw1NjMyMCkpfSxyZT0vKFtcXDAtXFx4MWZcXHg3Zl18Xi0/XFxkKXxeLSR8W15cXDAtXFx4MWZcXHg3Zi1cXHVGRkZGXFx3LV0vZyxpZT1mdW5jdGlvbihlLHQpe3JldHVybiB0P1wiXFwwXCI9PT1lP1wiXFx1ZmZmZFwiOmUuc2xpY2UoMCwtMSkrXCJcXFxcXCIrZS5jaGFyQ29kZUF0KGUubGVuZ3RoLTEpLnRvU3RyaW5nKDE2KStcIiBcIjpcIlxcXFxcIitlfSxvZT1mdW5jdGlvbigpe1QoKX0sYWU9YmUoZnVuY3Rpb24oZSl7cmV0dXJuITA9PT1lLmRpc2FibGVkJiZcImZpZWxkc2V0XCI9PT1lLm5vZGVOYW1lLnRvTG93ZXJDYXNlKCl9LHtkaXI6XCJwYXJlbnROb2RlXCIsbmV4dDpcImxlZ2VuZFwifSk7dHJ5e0guYXBwbHkodD1PLmNhbGwocC5jaGlsZE5vZGVzKSxwLmNoaWxkTm9kZXMpLHRbcC5jaGlsZE5vZGVzLmxlbmd0aF0ubm9kZVR5cGV9Y2F0Y2goZSl7SD17YXBwbHk6dC5sZW5ndGg/ZnVuY3Rpb24oZSx0KXtMLmFwcGx5KGUsTy5jYWxsKHQpKX06ZnVuY3Rpb24oZSx0KXt2YXIgbj1lLmxlbmd0aCxyPTA7d2hpbGUoZVtuKytdPXRbcisrXSk7ZS5sZW5ndGg9bi0xfX19ZnVuY3Rpb24gc2UodCxlLG4scil7dmFyIGksbyxhLHMsdSxsLGMsZj1lJiZlLm93bmVyRG9jdW1lbnQscD1lP2Uubm9kZVR5cGU6OTtpZihuPW58fFtdLFwic3RyaW5nXCIhPXR5cGVvZiB0fHwhdHx8MSE9PXAmJjkhPT1wJiYxMSE9PXApcmV0dXJuIG47aWYoIXImJihUKGUpLGU9ZXx8QyxFKSl7aWYoMTEhPT1wJiYodT1aLmV4ZWModCkpKWlmKGk9dVsxXSl7aWYoOT09PXApe2lmKCEoYT1lLmdldEVsZW1lbnRCeUlkKGkpKSlyZXR1cm4gbjtpZihhLmlkPT09aSlyZXR1cm4gbi5wdXNoKGEpLG59ZWxzZSBpZihmJiYoYT1mLmdldEVsZW1lbnRCeUlkKGkpKSYmeShlLGEpJiZhLmlkPT09aSlyZXR1cm4gbi5wdXNoKGEpLG59ZWxzZXtpZih1WzJdKXJldHVybiBILmFwcGx5KG4sZS5nZXRFbGVtZW50c0J5VGFnTmFtZSh0KSksbjtpZigoaT11WzNdKSYmZC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lJiZlLmdldEVsZW1lbnRzQnlDbGFzc05hbWUpcmV0dXJuIEguYXBwbHkobixlLmdldEVsZW1lbnRzQnlDbGFzc05hbWUoaSkpLG59aWYoZC5xc2EmJiFOW3QrXCIgXCJdJiYoIXZ8fCF2LnRlc3QodCkpJiYoMSE9PXB8fFwib2JqZWN0XCIhPT1lLm5vZGVOYW1lLnRvTG93ZXJDYXNlKCkpKXtpZihjPXQsZj1lLDE9PT1wJiYoVS50ZXN0KHQpfHx6LnRlc3QodCkpKXsoZj1lZS50ZXN0KHQpJiZ5ZShlLnBhcmVudE5vZGUpfHxlKT09PWUmJmQuc2NvcGV8fCgocz1lLmdldEF0dHJpYnV0ZShcImlkXCIpKT9zPXMucmVwbGFjZShyZSxpZSk6ZS5zZXRBdHRyaWJ1dGUoXCJpZFwiLHM9UykpLG89KGw9aCh0KSkubGVuZ3RoO3doaWxlKG8tLSlsW29dPShzP1wiI1wiK3M6XCI6c2NvcGVcIikrXCIgXCIreGUobFtvXSk7Yz1sLmpvaW4oXCIsXCIpfXRyeXtyZXR1cm4gSC5hcHBseShuLGYucXVlcnlTZWxlY3RvckFsbChjKSksbn1jYXRjaChlKXtOKHQsITApfWZpbmFsbHl7cz09PVMmJmUucmVtb3ZlQXR0cmlidXRlKFwiaWRcIil9fX1yZXR1cm4gZyh0LnJlcGxhY2UoJCxcIiQxXCIpLGUsbixyKX1mdW5jdGlvbiB1ZSgpe3ZhciByPVtdO3JldHVybiBmdW5jdGlvbiBlKHQsbil7cmV0dXJuIHIucHVzaCh0K1wiIFwiKT5iLmNhY2hlTGVuZ3RoJiZkZWxldGUgZVtyLnNoaWZ0KCldLGVbdCtcIiBcIl09bn19ZnVuY3Rpb24gbGUoZSl7cmV0dXJuIGVbU109ITAsZX1mdW5jdGlvbiBjZShlKXt2YXIgdD1DLmNyZWF0ZUVsZW1lbnQoXCJmaWVsZHNldFwiKTt0cnl7cmV0dXJuISFlKHQpfWNhdGNoKGUpe3JldHVybiExfWZpbmFsbHl7dC5wYXJlbnROb2RlJiZ0LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQodCksdD1udWxsfX1mdW5jdGlvbiBmZShlLHQpe3ZhciBuPWUuc3BsaXQoXCJ8XCIpLHI9bi5sZW5ndGg7d2hpbGUoci0tKWIuYXR0ckhhbmRsZVtuW3JdXT10fWZ1bmN0aW9uIHBlKGUsdCl7dmFyIG49dCYmZSxyPW4mJjE9PT1lLm5vZGVUeXBlJiYxPT09dC5ub2RlVHlwZSYmZS5zb3VyY2VJbmRleC10LnNvdXJjZUluZGV4O2lmKHIpcmV0dXJuIHI7aWYobil3aGlsZShuPW4ubmV4dFNpYmxpbmcpaWYobj09PXQpcmV0dXJuLTE7cmV0dXJuIGU/MTotMX1mdW5jdGlvbiBkZSh0KXtyZXR1cm4gZnVuY3Rpb24oZSl7cmV0dXJuXCJpbnB1dFwiPT09ZS5ub2RlTmFtZS50b0xvd2VyQ2FzZSgpJiZlLnR5cGU9PT10fX1mdW5jdGlvbiBoZShuKXtyZXR1cm4gZnVuY3Rpb24oZSl7dmFyIHQ9ZS5ub2RlTmFtZS50b0xvd2VyQ2FzZSgpO3JldHVybihcImlucHV0XCI9PT10fHxcImJ1dHRvblwiPT09dCkmJmUudHlwZT09PW59fWZ1bmN0aW9uIGdlKHQpe3JldHVybiBmdW5jdGlvbihlKXtyZXR1cm5cImZvcm1cImluIGU/ZS5wYXJlbnROb2RlJiYhMT09PWUuZGlzYWJsZWQ/XCJsYWJlbFwiaW4gZT9cImxhYmVsXCJpbiBlLnBhcmVudE5vZGU/ZS5wYXJlbnROb2RlLmRpc2FibGVkPT09dDplLmRpc2FibGVkPT09dDplLmlzRGlzYWJsZWQ9PT10fHxlLmlzRGlzYWJsZWQhPT0hdCYmYWUoZSk9PT10OmUuZGlzYWJsZWQ9PT10OlwibGFiZWxcImluIGUmJmUuZGlzYWJsZWQ9PT10fX1mdW5jdGlvbiB2ZShhKXtyZXR1cm4gbGUoZnVuY3Rpb24obyl7cmV0dXJuIG89K28sbGUoZnVuY3Rpb24oZSx0KXt2YXIgbixyPWEoW10sZS5sZW5ndGgsbyksaT1yLmxlbmd0aDt3aGlsZShpLS0pZVtuPXJbaV1dJiYoZVtuXT0hKHRbbl09ZVtuXSkpfSl9KX1mdW5jdGlvbiB5ZShlKXtyZXR1cm4gZSYmXCJ1bmRlZmluZWRcIiE9dHlwZW9mIGUuZ2V0RWxlbWVudHNCeVRhZ05hbWUmJmV9Zm9yKGUgaW4gZD1zZS5zdXBwb3J0PXt9LGk9c2UuaXNYTUw9ZnVuY3Rpb24oZSl7dmFyIHQ9ZS5uYW1lc3BhY2VVUkksbj0oZS5vd25lckRvY3VtZW50fHxlKS5kb2N1bWVudEVsZW1lbnQ7cmV0dXJuIVkudGVzdCh0fHxuJiZuLm5vZGVOYW1lfHxcIkhUTUxcIil9LFQ9c2Uuc2V0RG9jdW1lbnQ9ZnVuY3Rpb24oZSl7dmFyIHQsbixyPWU/ZS5vd25lckRvY3VtZW50fHxlOnA7cmV0dXJuIHIhPUMmJjk9PT1yLm5vZGVUeXBlJiZyLmRvY3VtZW50RWxlbWVudCYmKGE9KEM9cikuZG9jdW1lbnRFbGVtZW50LEU9IWkoQykscCE9QyYmKG49Qy5kZWZhdWx0VmlldykmJm4udG9wIT09biYmKG4uYWRkRXZlbnRMaXN0ZW5lcj9uLmFkZEV2ZW50TGlzdGVuZXIoXCJ1bmxvYWRcIixvZSwhMSk6bi5hdHRhY2hFdmVudCYmbi5hdHRhY2hFdmVudChcIm9udW5sb2FkXCIsb2UpKSxkLnNjb3BlPWNlKGZ1bmN0aW9uKGUpe3JldHVybiBhLmFwcGVuZENoaWxkKGUpLmFwcGVuZENoaWxkKEMuY3JlYXRlRWxlbWVudChcImRpdlwiKSksXCJ1bmRlZmluZWRcIiE9dHlwZW9mIGUucXVlcnlTZWxlY3RvckFsbCYmIWUucXVlcnlTZWxlY3RvckFsbChcIjpzY29wZSBmaWVsZHNldCBkaXZcIikubGVuZ3RofSksZC5hdHRyaWJ1dGVzPWNlKGZ1bmN0aW9uKGUpe3JldHVybiBlLmNsYXNzTmFtZT1cImlcIiwhZS5nZXRBdHRyaWJ1dGUoXCJjbGFzc05hbWVcIil9KSxkLmdldEVsZW1lbnRzQnlUYWdOYW1lPWNlKGZ1bmN0aW9uKGUpe3JldHVybiBlLmFwcGVuZENoaWxkKEMuY3JlYXRlQ29tbWVudChcIlwiKSksIWUuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCIqXCIpLmxlbmd0aH0pLGQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZT1LLnRlc3QoQy5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKSxkLmdldEJ5SWQ9Y2UoZnVuY3Rpb24oZSl7cmV0dXJuIGEuYXBwZW5kQ2hpbGQoZSkuaWQ9UywhQy5nZXRFbGVtZW50c0J5TmFtZXx8IUMuZ2V0RWxlbWVudHNCeU5hbWUoUykubGVuZ3RofSksZC5nZXRCeUlkPyhiLmZpbHRlci5JRD1mdW5jdGlvbihlKXt2YXIgdD1lLnJlcGxhY2UodGUsbmUpO3JldHVybiBmdW5jdGlvbihlKXtyZXR1cm4gZS5nZXRBdHRyaWJ1dGUoXCJpZFwiKT09PXR9fSxiLmZpbmQuSUQ9ZnVuY3Rpb24oZSx0KXtpZihcInVuZGVmaW5lZFwiIT10eXBlb2YgdC5nZXRFbGVtZW50QnlJZCYmRSl7dmFyIG49dC5nZXRFbGVtZW50QnlJZChlKTtyZXR1cm4gbj9bbl06W119fSk6KGIuZmlsdGVyLklEPWZ1bmN0aW9uKGUpe3ZhciBuPWUucmVwbGFjZSh0ZSxuZSk7cmV0dXJuIGZ1bmN0aW9uKGUpe3ZhciB0PVwidW5kZWZpbmVkXCIhPXR5cGVvZiBlLmdldEF0dHJpYnV0ZU5vZGUmJmUuZ2V0QXR0cmlidXRlTm9kZShcImlkXCIpO3JldHVybiB0JiZ0LnZhbHVlPT09bn19LGIuZmluZC5JRD1mdW5jdGlvbihlLHQpe2lmKFwidW5kZWZpbmVkXCIhPXR5cGVvZiB0LmdldEVsZW1lbnRCeUlkJiZFKXt2YXIgbixyLGksbz10LmdldEVsZW1lbnRCeUlkKGUpO2lmKG8pe2lmKChuPW8uZ2V0QXR0cmlidXRlTm9kZShcImlkXCIpKSYmbi52YWx1ZT09PWUpcmV0dXJuW29dO2k9dC5nZXRFbGVtZW50c0J5TmFtZShlKSxyPTA7d2hpbGUobz1pW3IrK10paWYoKG49by5nZXRBdHRyaWJ1dGVOb2RlKFwiaWRcIikpJiZuLnZhbHVlPT09ZSlyZXR1cm5bb119cmV0dXJuW119fSksYi5maW5kLlRBRz1kLmdldEVsZW1lbnRzQnlUYWdOYW1lP2Z1bmN0aW9uKGUsdCl7cmV0dXJuXCJ1bmRlZmluZWRcIiE9dHlwZW9mIHQuZ2V0RWxlbWVudHNCeVRhZ05hbWU/dC5nZXRFbGVtZW50c0J5VGFnTmFtZShlKTpkLnFzYT90LnF1ZXJ5U2VsZWN0b3JBbGwoZSk6dm9pZCAwfTpmdW5jdGlvbihlLHQpe3ZhciBuLHI9W10saT0wLG89dC5nZXRFbGVtZW50c0J5VGFnTmFtZShlKTtpZihcIipcIj09PWUpe3doaWxlKG49b1tpKytdKTE9PT1uLm5vZGVUeXBlJiZyLnB1c2gobik7cmV0dXJuIHJ9cmV0dXJuIG99LGIuZmluZC5DTEFTUz1kLmdldEVsZW1lbnRzQnlDbGFzc05hbWUmJmZ1bmN0aW9uKGUsdCl7aWYoXCJ1bmRlZmluZWRcIiE9dHlwZW9mIHQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSYmRSlyZXR1cm4gdC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKGUpfSxzPVtdLHY9W10sKGQucXNhPUsudGVzdChDLnF1ZXJ5U2VsZWN0b3JBbGwpKSYmKGNlKGZ1bmN0aW9uKGUpe3ZhciB0O2EuYXBwZW5kQ2hpbGQoZSkuaW5uZXJIVE1MPVwiPGEgaWQ9J1wiK1MrXCInPjwvYT48c2VsZWN0IGlkPSdcIitTK1wiLVxcclxcXFwnIG1zYWxsb3djYXB0dXJlPScnPjxvcHRpb24gc2VsZWN0ZWQ9Jyc+PC9vcHRpb24+PC9zZWxlY3Q+XCIsZS5xdWVyeVNlbGVjdG9yQWxsKFwiW21zYWxsb3djYXB0dXJlXj0nJ11cIikubGVuZ3RoJiZ2LnB1c2goXCJbKl4kXT1cIitNK1wiKig/OicnfFxcXCJcXFwiKVwiKSxlLnF1ZXJ5U2VsZWN0b3JBbGwoXCJbc2VsZWN0ZWRdXCIpLmxlbmd0aHx8di5wdXNoKFwiXFxcXFtcIitNK1wiKig/OnZhbHVlfFwiK1IrXCIpXCIpLGUucXVlcnlTZWxlY3RvckFsbChcIltpZH49XCIrUytcIi1dXCIpLmxlbmd0aHx8di5wdXNoKFwifj1cIiksKHQ9Qy5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIikpLnNldEF0dHJpYnV0ZShcIm5hbWVcIixcIlwiKSxlLmFwcGVuZENoaWxkKHQpLGUucXVlcnlTZWxlY3RvckFsbChcIltuYW1lPScnXVwiKS5sZW5ndGh8fHYucHVzaChcIlxcXFxbXCIrTStcIipuYW1lXCIrTStcIio9XCIrTStcIiooPzonJ3xcXFwiXFxcIilcIiksZS5xdWVyeVNlbGVjdG9yQWxsKFwiOmNoZWNrZWRcIikubGVuZ3RofHx2LnB1c2goXCI6Y2hlY2tlZFwiKSxlLnF1ZXJ5U2VsZWN0b3JBbGwoXCJhI1wiK1MrXCIrKlwiKS5sZW5ndGh8fHYucHVzaChcIi4jLitbK35dXCIpLGUucXVlcnlTZWxlY3RvckFsbChcIlxcXFxcXGZcIiksdi5wdXNoKFwiW1xcXFxyXFxcXG5cXFxcZl1cIil9KSxjZShmdW5jdGlvbihlKXtlLmlubmVySFRNTD1cIjxhIGhyZWY9JycgZGlzYWJsZWQ9J2Rpc2FibGVkJz48L2E+PHNlbGVjdCBkaXNhYmxlZD0nZGlzYWJsZWQnPjxvcHRpb24vPjwvc2VsZWN0PlwiO3ZhciB0PUMuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO3Quc2V0QXR0cmlidXRlKFwidHlwZVwiLFwiaGlkZGVuXCIpLGUuYXBwZW5kQ2hpbGQodCkuc2V0QXR0cmlidXRlKFwibmFtZVwiLFwiRFwiKSxlLnF1ZXJ5U2VsZWN0b3JBbGwoXCJbbmFtZT1kXVwiKS5sZW5ndGgmJnYucHVzaChcIm5hbWVcIitNK1wiKlsqXiR8IX5dPz1cIiksMiE9PWUucXVlcnlTZWxlY3RvckFsbChcIjplbmFibGVkXCIpLmxlbmd0aCYmdi5wdXNoKFwiOmVuYWJsZWRcIixcIjpkaXNhYmxlZFwiKSxhLmFwcGVuZENoaWxkKGUpLmRpc2FibGVkPSEwLDIhPT1lLnF1ZXJ5U2VsZWN0b3JBbGwoXCI6ZGlzYWJsZWRcIikubGVuZ3RoJiZ2LnB1c2goXCI6ZW5hYmxlZFwiLFwiOmRpc2FibGVkXCIpLGUucXVlcnlTZWxlY3RvckFsbChcIiosOnhcIiksdi5wdXNoKFwiLC4qOlwiKX0pKSwoZC5tYXRjaGVzU2VsZWN0b3I9Sy50ZXN0KGM9YS5tYXRjaGVzfHxhLndlYmtpdE1hdGNoZXNTZWxlY3Rvcnx8YS5tb3pNYXRjaGVzU2VsZWN0b3J8fGEub01hdGNoZXNTZWxlY3Rvcnx8YS5tc01hdGNoZXNTZWxlY3RvcikpJiZjZShmdW5jdGlvbihlKXtkLmRpc2Nvbm5lY3RlZE1hdGNoPWMuY2FsbChlLFwiKlwiKSxjLmNhbGwoZSxcIltzIT0nJ106eFwiKSxzLnB1c2goXCIhPVwiLEYpfSksdj12Lmxlbmd0aCYmbmV3IFJlZ0V4cCh2LmpvaW4oXCJ8XCIpKSxzPXMubGVuZ3RoJiZuZXcgUmVnRXhwKHMuam9pbihcInxcIikpLHQ9Sy50ZXN0KGEuY29tcGFyZURvY3VtZW50UG9zaXRpb24pLHk9dHx8Sy50ZXN0KGEuY29udGFpbnMpP2Z1bmN0aW9uKGUsdCl7dmFyIG49OT09PWUubm9kZVR5cGU/ZS5kb2N1bWVudEVsZW1lbnQ6ZSxyPXQmJnQucGFyZW50Tm9kZTtyZXR1cm4gZT09PXJ8fCEoIXJ8fDEhPT1yLm5vZGVUeXBlfHwhKG4uY29udGFpbnM/bi5jb250YWlucyhyKTplLmNvbXBhcmVEb2N1bWVudFBvc2l0aW9uJiYxNiZlLmNvbXBhcmVEb2N1bWVudFBvc2l0aW9uKHIpKSl9OmZ1bmN0aW9uKGUsdCl7aWYodCl3aGlsZSh0PXQucGFyZW50Tm9kZSlpZih0PT09ZSlyZXR1cm4hMDtyZXR1cm4hMX0sRD10P2Z1bmN0aW9uKGUsdCl7aWYoZT09PXQpcmV0dXJuIGw9ITAsMDt2YXIgbj0hZS5jb21wYXJlRG9jdW1lbnRQb3NpdGlvbi0hdC5jb21wYXJlRG9jdW1lbnRQb3NpdGlvbjtyZXR1cm4gbnx8KDEmKG49KGUub3duZXJEb2N1bWVudHx8ZSk9PSh0Lm93bmVyRG9jdW1lbnR8fHQpP2UuY29tcGFyZURvY3VtZW50UG9zaXRpb24odCk6MSl8fCFkLnNvcnREZXRhY2hlZCYmdC5jb21wYXJlRG9jdW1lbnRQb3NpdGlvbihlKT09PW4/ZT09Q3x8ZS5vd25lckRvY3VtZW50PT1wJiZ5KHAsZSk/LTE6dD09Q3x8dC5vd25lckRvY3VtZW50PT1wJiZ5KHAsdCk/MTp1P1AodSxlKS1QKHUsdCk6MDo0Jm4/LTE6MSl9OmZ1bmN0aW9uKGUsdCl7aWYoZT09PXQpcmV0dXJuIGw9ITAsMDt2YXIgbixyPTAsaT1lLnBhcmVudE5vZGUsbz10LnBhcmVudE5vZGUsYT1bZV0scz1bdF07aWYoIWl8fCFvKXJldHVybiBlPT1DPy0xOnQ9PUM/MTppPy0xOm8/MTp1P1AodSxlKS1QKHUsdCk6MDtpZihpPT09bylyZXR1cm4gcGUoZSx0KTtuPWU7d2hpbGUobj1uLnBhcmVudE5vZGUpYS51bnNoaWZ0KG4pO249dDt3aGlsZShuPW4ucGFyZW50Tm9kZSlzLnVuc2hpZnQobik7d2hpbGUoYVtyXT09PXNbcl0pcisrO3JldHVybiByP3BlKGFbcl0sc1tyXSk6YVtyXT09cD8tMTpzW3JdPT1wPzE6MH0pLEN9LHNlLm1hdGNoZXM9ZnVuY3Rpb24oZSx0KXtyZXR1cm4gc2UoZSxudWxsLG51bGwsdCl9LHNlLm1hdGNoZXNTZWxlY3Rvcj1mdW5jdGlvbihlLHQpe2lmKFQoZSksZC5tYXRjaGVzU2VsZWN0b3ImJkUmJiFOW3QrXCIgXCJdJiYoIXN8fCFzLnRlc3QodCkpJiYoIXZ8fCF2LnRlc3QodCkpKXRyeXt2YXIgbj1jLmNhbGwoZSx0KTtpZihufHxkLmRpc2Nvbm5lY3RlZE1hdGNofHxlLmRvY3VtZW50JiYxMSE9PWUuZG9jdW1lbnQubm9kZVR5cGUpcmV0dXJuIG59Y2F0Y2goZSl7Tih0LCEwKX1yZXR1cm4gMDxzZSh0LEMsbnVsbCxbZV0pLmxlbmd0aH0sc2UuY29udGFpbnM9ZnVuY3Rpb24oZSx0KXtyZXR1cm4oZS5vd25lckRvY3VtZW50fHxlKSE9QyYmVChlKSx5KGUsdCl9LHNlLmF0dHI9ZnVuY3Rpb24oZSx0KXsoZS5vd25lckRvY3VtZW50fHxlKSE9QyYmVChlKTt2YXIgbj1iLmF0dHJIYW5kbGVbdC50b0xvd2VyQ2FzZSgpXSxyPW4mJmouY2FsbChiLmF0dHJIYW5kbGUsdC50b0xvd2VyQ2FzZSgpKT9uKGUsdCwhRSk6dm9pZCAwO3JldHVybiB2b2lkIDAhPT1yP3I6ZC5hdHRyaWJ1dGVzfHwhRT9lLmdldEF0dHJpYnV0ZSh0KToocj1lLmdldEF0dHJpYnV0ZU5vZGUodCkpJiZyLnNwZWNpZmllZD9yLnZhbHVlOm51bGx9LHNlLmVzY2FwZT1mdW5jdGlvbihlKXtyZXR1cm4oZStcIlwiKS5yZXBsYWNlKHJlLGllKX0sc2UuZXJyb3I9ZnVuY3Rpb24oZSl7dGhyb3cgbmV3IEVycm9yKFwiU3ludGF4IGVycm9yLCB1bnJlY29nbml6ZWQgZXhwcmVzc2lvbjogXCIrZSl9LHNlLnVuaXF1ZVNvcnQ9ZnVuY3Rpb24oZSl7dmFyIHQsbj1bXSxyPTAsaT0wO2lmKGw9IWQuZGV0ZWN0RHVwbGljYXRlcyx1PSFkLnNvcnRTdGFibGUmJmUuc2xpY2UoMCksZS5zb3J0KEQpLGwpe3doaWxlKHQ9ZVtpKytdKXQ9PT1lW2ldJiYocj1uLnB1c2goaSkpO3doaWxlKHItLSllLnNwbGljZShuW3JdLDEpfXJldHVybiB1PW51bGwsZX0sbz1zZS5nZXRUZXh0PWZ1bmN0aW9uKGUpe3ZhciB0LG49XCJcIixyPTAsaT1lLm5vZGVUeXBlO2lmKGkpe2lmKDE9PT1pfHw5PT09aXx8MTE9PT1pKXtpZihcInN0cmluZ1wiPT10eXBlb2YgZS50ZXh0Q29udGVudClyZXR1cm4gZS50ZXh0Q29udGVudDtmb3IoZT1lLmZpcnN0Q2hpbGQ7ZTtlPWUubmV4dFNpYmxpbmcpbis9byhlKX1lbHNlIGlmKDM9PT1pfHw0PT09aSlyZXR1cm4gZS5ub2RlVmFsdWV9ZWxzZSB3aGlsZSh0PWVbcisrXSluKz1vKHQpO3JldHVybiBufSwoYj1zZS5zZWxlY3RvcnM9e2NhY2hlTGVuZ3RoOjUwLGNyZWF0ZVBzZXVkbzpsZSxtYXRjaDpHLGF0dHJIYW5kbGU6e30sZmluZDp7fSxyZWxhdGl2ZTp7XCI+XCI6e2RpcjpcInBhcmVudE5vZGVcIixmaXJzdDohMH0sXCIgXCI6e2RpcjpcInBhcmVudE5vZGVcIn0sXCIrXCI6e2RpcjpcInByZXZpb3VzU2libGluZ1wiLGZpcnN0OiEwfSxcIn5cIjp7ZGlyOlwicHJldmlvdXNTaWJsaW5nXCJ9fSxwcmVGaWx0ZXI6e0FUVFI6ZnVuY3Rpb24oZSl7cmV0dXJuIGVbMV09ZVsxXS5yZXBsYWNlKHRlLG5lKSxlWzNdPShlWzNdfHxlWzRdfHxlWzVdfHxcIlwiKS5yZXBsYWNlKHRlLG5lKSxcIn49XCI9PT1lWzJdJiYoZVszXT1cIiBcIitlWzNdK1wiIFwiKSxlLnNsaWNlKDAsNCl9LENISUxEOmZ1bmN0aW9uKGUpe3JldHVybiBlWzFdPWVbMV0udG9Mb3dlckNhc2UoKSxcIm50aFwiPT09ZVsxXS5zbGljZSgwLDMpPyhlWzNdfHxzZS5lcnJvcihlWzBdKSxlWzRdPSsoZVs0XT9lWzVdKyhlWzZdfHwxKToyKihcImV2ZW5cIj09PWVbM118fFwib2RkXCI9PT1lWzNdKSksZVs1XT0rKGVbN10rZVs4XXx8XCJvZGRcIj09PWVbM10pKTplWzNdJiZzZS5lcnJvcihlWzBdKSxlfSxQU0VVRE86ZnVuY3Rpb24oZSl7dmFyIHQsbj0hZVs2XSYmZVsyXTtyZXR1cm4gRy5DSElMRC50ZXN0KGVbMF0pP251bGw6KGVbM10/ZVsyXT1lWzRdfHxlWzVdfHxcIlwiOm4mJlgudGVzdChuKSYmKHQ9aChuLCEwKSkmJih0PW4uaW5kZXhPZihcIilcIixuLmxlbmd0aC10KS1uLmxlbmd0aCkmJihlWzBdPWVbMF0uc2xpY2UoMCx0KSxlWzJdPW4uc2xpY2UoMCx0KSksZS5zbGljZSgwLDMpKX19LGZpbHRlcjp7VEFHOmZ1bmN0aW9uKGUpe3ZhciB0PWUucmVwbGFjZSh0ZSxuZSkudG9Mb3dlckNhc2UoKTtyZXR1cm5cIipcIj09PWU/ZnVuY3Rpb24oKXtyZXR1cm4hMH06ZnVuY3Rpb24oZSl7cmV0dXJuIGUubm9kZU5hbWUmJmUubm9kZU5hbWUudG9Mb3dlckNhc2UoKT09PXR9fSxDTEFTUzpmdW5jdGlvbihlKXt2YXIgdD1tW2UrXCIgXCJdO3JldHVybiB0fHwodD1uZXcgUmVnRXhwKFwiKF58XCIrTStcIilcIitlK1wiKFwiK00rXCJ8JClcIikpJiZtKGUsZnVuY3Rpb24oZSl7cmV0dXJuIHQudGVzdChcInN0cmluZ1wiPT10eXBlb2YgZS5jbGFzc05hbWUmJmUuY2xhc3NOYW1lfHxcInVuZGVmaW5lZFwiIT10eXBlb2YgZS5nZXRBdHRyaWJ1dGUmJmUuZ2V0QXR0cmlidXRlKFwiY2xhc3NcIil8fFwiXCIpfSl9LEFUVFI6ZnVuY3Rpb24obixyLGkpe3JldHVybiBmdW5jdGlvbihlKXt2YXIgdD1zZS5hdHRyKGUsbik7cmV0dXJuIG51bGw9PXQ/XCIhPVwiPT09cjohcnx8KHQrPVwiXCIsXCI9XCI9PT1yP3Q9PT1pOlwiIT1cIj09PXI/dCE9PWk6XCJePVwiPT09cj9pJiYwPT09dC5pbmRleE9mKGkpOlwiKj1cIj09PXI/aSYmLTE8dC5pbmRleE9mKGkpOlwiJD1cIj09PXI/aSYmdC5zbGljZSgtaS5sZW5ndGgpPT09aTpcIn49XCI9PT1yPy0xPChcIiBcIit0LnJlcGxhY2UoQixcIiBcIikrXCIgXCIpLmluZGV4T2YoaSk6XCJ8PVwiPT09ciYmKHQ9PT1pfHx0LnNsaWNlKDAsaS5sZW5ndGgrMSk9PT1pK1wiLVwiKSl9fSxDSElMRDpmdW5jdGlvbihoLGUsdCxnLHYpe3ZhciB5PVwibnRoXCIhPT1oLnNsaWNlKDAsMyksbT1cImxhc3RcIiE9PWguc2xpY2UoLTQpLHg9XCJvZi10eXBlXCI9PT1lO3JldHVybiAxPT09ZyYmMD09PXY/ZnVuY3Rpb24oZSl7cmV0dXJuISFlLnBhcmVudE5vZGV9OmZ1bmN0aW9uKGUsdCxuKXt2YXIgcixpLG8sYSxzLHUsbD15IT09bT9cIm5leHRTaWJsaW5nXCI6XCJwcmV2aW91c1NpYmxpbmdcIixjPWUucGFyZW50Tm9kZSxmPXgmJmUubm9kZU5hbWUudG9Mb3dlckNhc2UoKSxwPSFuJiYheCxkPSExO2lmKGMpe2lmKHkpe3doaWxlKGwpe2E9ZTt3aGlsZShhPWFbbF0paWYoeD9hLm5vZGVOYW1lLnRvTG93ZXJDYXNlKCk9PT1mOjE9PT1hLm5vZGVUeXBlKXJldHVybiExO3U9bD1cIm9ubHlcIj09PWgmJiF1JiZcIm5leHRTaWJsaW5nXCJ9cmV0dXJuITB9aWYodT1bbT9jLmZpcnN0Q2hpbGQ6Yy5sYXN0Q2hpbGRdLG0mJnApe2Q9KHM9KHI9KGk9KG89KGE9YylbU118fChhW1NdPXt9KSlbYS51bmlxdWVJRF18fChvW2EudW5pcXVlSURdPXt9KSlbaF18fFtdKVswXT09PWsmJnJbMV0pJiZyWzJdLGE9cyYmYy5jaGlsZE5vZGVzW3NdO3doaWxlKGE9KytzJiZhJiZhW2xdfHwoZD1zPTApfHx1LnBvcCgpKWlmKDE9PT1hLm5vZGVUeXBlJiYrK2QmJmE9PT1lKXtpW2hdPVtrLHMsZF07YnJlYWt9fWVsc2UgaWYocCYmKGQ9cz0ocj0oaT0obz0oYT1lKVtTXXx8KGFbU109e30pKVthLnVuaXF1ZUlEXXx8KG9bYS51bmlxdWVJRF09e30pKVtoXXx8W10pWzBdPT09ayYmclsxXSksITE9PT1kKXdoaWxlKGE9KytzJiZhJiZhW2xdfHwoZD1zPTApfHx1LnBvcCgpKWlmKCh4P2Eubm9kZU5hbWUudG9Mb3dlckNhc2UoKT09PWY6MT09PWEubm9kZVR5cGUpJiYrK2QmJihwJiYoKGk9KG89YVtTXXx8KGFbU109e30pKVthLnVuaXF1ZUlEXXx8KG9bYS51bmlxdWVJRF09e30pKVtoXT1bayxkXSksYT09PWUpKWJyZWFrO3JldHVybihkLT12KT09PWd8fGQlZz09MCYmMDw9ZC9nfX19LFBTRVVETzpmdW5jdGlvbihlLG8pe3ZhciB0LGE9Yi5wc2V1ZG9zW2VdfHxiLnNldEZpbHRlcnNbZS50b0xvd2VyQ2FzZSgpXXx8c2UuZXJyb3IoXCJ1bnN1cHBvcnRlZCBwc2V1ZG86IFwiK2UpO3JldHVybiBhW1NdP2Eobyk6MTxhLmxlbmd0aD8odD1bZSxlLFwiXCIsb10sYi5zZXRGaWx0ZXJzLmhhc093blByb3BlcnR5KGUudG9Mb3dlckNhc2UoKSk/bGUoZnVuY3Rpb24oZSx0KXt2YXIgbixyPWEoZSxvKSxpPXIubGVuZ3RoO3doaWxlKGktLSllW249UChlLHJbaV0pXT0hKHRbbl09cltpXSl9KTpmdW5jdGlvbihlKXtyZXR1cm4gYShlLDAsdCl9KTphfX0scHNldWRvczp7bm90OmxlKGZ1bmN0aW9uKGUpe3ZhciByPVtdLGk9W10scz1mKGUucmVwbGFjZSgkLFwiJDFcIikpO3JldHVybiBzW1NdP2xlKGZ1bmN0aW9uKGUsdCxuLHIpe3ZhciBpLG89cyhlLG51bGwscixbXSksYT1lLmxlbmd0aDt3aGlsZShhLS0pKGk9b1thXSkmJihlW2FdPSEodFthXT1pKSl9KTpmdW5jdGlvbihlLHQsbil7cmV0dXJuIHJbMF09ZSxzKHIsbnVsbCxuLGkpLHJbMF09bnVsbCwhaS5wb3AoKX19KSxoYXM6bGUoZnVuY3Rpb24odCl7cmV0dXJuIGZ1bmN0aW9uKGUpe3JldHVybiAwPHNlKHQsZSkubGVuZ3RofX0pLGNvbnRhaW5zOmxlKGZ1bmN0aW9uKHQpe3JldHVybiB0PXQucmVwbGFjZSh0ZSxuZSksZnVuY3Rpb24oZSl7cmV0dXJuLTE8KGUudGV4dENvbnRlbnR8fG8oZSkpLmluZGV4T2YodCl9fSksbGFuZzpsZShmdW5jdGlvbihuKXtyZXR1cm4gVi50ZXN0KG58fFwiXCIpfHxzZS5lcnJvcihcInVuc3VwcG9ydGVkIGxhbmc6IFwiK24pLG49bi5yZXBsYWNlKHRlLG5lKS50b0xvd2VyQ2FzZSgpLGZ1bmN0aW9uKGUpe3ZhciB0O2Rve2lmKHQ9RT9lLmxhbmc6ZS5nZXRBdHRyaWJ1dGUoXCJ4bWw6bGFuZ1wiKXx8ZS5nZXRBdHRyaWJ1dGUoXCJsYW5nXCIpKXJldHVybih0PXQudG9Mb3dlckNhc2UoKSk9PT1ufHwwPT09dC5pbmRleE9mKG4rXCItXCIpfXdoaWxlKChlPWUucGFyZW50Tm9kZSkmJjE9PT1lLm5vZGVUeXBlKTtyZXR1cm4hMX19KSx0YXJnZXQ6ZnVuY3Rpb24oZSl7dmFyIHQ9bi5sb2NhdGlvbiYmbi5sb2NhdGlvbi5oYXNoO3JldHVybiB0JiZ0LnNsaWNlKDEpPT09ZS5pZH0scm9vdDpmdW5jdGlvbihlKXtyZXR1cm4gZT09PWF9LGZvY3VzOmZ1bmN0aW9uKGUpe3JldHVybiBlPT09Qy5hY3RpdmVFbGVtZW50JiYoIUMuaGFzRm9jdXN8fEMuaGFzRm9jdXMoKSkmJiEhKGUudHlwZXx8ZS5ocmVmfHx+ZS50YWJJbmRleCl9LGVuYWJsZWQ6Z2UoITEpLGRpc2FibGVkOmdlKCEwKSxjaGVja2VkOmZ1bmN0aW9uKGUpe3ZhciB0PWUubm9kZU5hbWUudG9Mb3dlckNhc2UoKTtyZXR1cm5cImlucHV0XCI9PT10JiYhIWUuY2hlY2tlZHx8XCJvcHRpb25cIj09PXQmJiEhZS5zZWxlY3RlZH0sc2VsZWN0ZWQ6ZnVuY3Rpb24oZSl7cmV0dXJuIGUucGFyZW50Tm9kZSYmZS5wYXJlbnROb2RlLnNlbGVjdGVkSW5kZXgsITA9PT1lLnNlbGVjdGVkfSxlbXB0eTpmdW5jdGlvbihlKXtmb3IoZT1lLmZpcnN0Q2hpbGQ7ZTtlPWUubmV4dFNpYmxpbmcpaWYoZS5ub2RlVHlwZTw2KXJldHVybiExO3JldHVybiEwfSxwYXJlbnQ6ZnVuY3Rpb24oZSl7cmV0dXJuIWIucHNldWRvcy5lbXB0eShlKX0saGVhZGVyOmZ1bmN0aW9uKGUpe3JldHVybiBKLnRlc3QoZS5ub2RlTmFtZSl9LGlucHV0OmZ1bmN0aW9uKGUpe3JldHVybiBRLnRlc3QoZS5ub2RlTmFtZSl9LGJ1dHRvbjpmdW5jdGlvbihlKXt2YXIgdD1lLm5vZGVOYW1lLnRvTG93ZXJDYXNlKCk7cmV0dXJuXCJpbnB1dFwiPT09dCYmXCJidXR0b25cIj09PWUudHlwZXx8XCJidXR0b25cIj09PXR9LHRleHQ6ZnVuY3Rpb24oZSl7dmFyIHQ7cmV0dXJuXCJpbnB1dFwiPT09ZS5ub2RlTmFtZS50b0xvd2VyQ2FzZSgpJiZcInRleHRcIj09PWUudHlwZSYmKG51bGw9PSh0PWUuZ2V0QXR0cmlidXRlKFwidHlwZVwiKSl8fFwidGV4dFwiPT09dC50b0xvd2VyQ2FzZSgpKX0sZmlyc3Q6dmUoZnVuY3Rpb24oKXtyZXR1cm5bMF19KSxsYXN0OnZlKGZ1bmN0aW9uKGUsdCl7cmV0dXJuW3QtMV19KSxlcTp2ZShmdW5jdGlvbihlLHQsbil7cmV0dXJuW248MD9uK3Q6bl19KSxldmVuOnZlKGZ1bmN0aW9uKGUsdCl7Zm9yKHZhciBuPTA7bjx0O24rPTIpZS5wdXNoKG4pO3JldHVybiBlfSksb2RkOnZlKGZ1bmN0aW9uKGUsdCl7Zm9yKHZhciBuPTE7bjx0O24rPTIpZS5wdXNoKG4pO3JldHVybiBlfSksbHQ6dmUoZnVuY3Rpb24oZSx0LG4pe2Zvcih2YXIgcj1uPDA/bit0OnQ8bj90Om47MDw9LS1yOyllLnB1c2gocik7cmV0dXJuIGV9KSxndDp2ZShmdW5jdGlvbihlLHQsbil7Zm9yKHZhciByPW48MD9uK3Q6bjsrK3I8dDspZS5wdXNoKHIpO3JldHVybiBlfSl9fSkucHNldWRvcy5udGg9Yi5wc2V1ZG9zLmVxLHtyYWRpbzohMCxjaGVja2JveDohMCxmaWxlOiEwLHBhc3N3b3JkOiEwLGltYWdlOiEwfSliLnBzZXVkb3NbZV09ZGUoZSk7Zm9yKGUgaW57c3VibWl0OiEwLHJlc2V0OiEwfSliLnBzZXVkb3NbZV09aGUoZSk7ZnVuY3Rpb24gbWUoKXt9ZnVuY3Rpb24geGUoZSl7Zm9yKHZhciB0PTAsbj1lLmxlbmd0aCxyPVwiXCI7dDxuO3QrKylyKz1lW3RdLnZhbHVlO3JldHVybiByfWZ1bmN0aW9uIGJlKHMsZSx0KXt2YXIgdT1lLmRpcixsPWUubmV4dCxjPWx8fHUsZj10JiZcInBhcmVudE5vZGVcIj09PWMscD1yKys7cmV0dXJuIGUuZmlyc3Q/ZnVuY3Rpb24oZSx0LG4pe3doaWxlKGU9ZVt1XSlpZigxPT09ZS5ub2RlVHlwZXx8ZilyZXR1cm4gcyhlLHQsbik7cmV0dXJuITF9OmZ1bmN0aW9uKGUsdCxuKXt2YXIgcixpLG8sYT1bayxwXTtpZihuKXt3aGlsZShlPWVbdV0paWYoKDE9PT1lLm5vZGVUeXBlfHxmKSYmcyhlLHQsbikpcmV0dXJuITB9ZWxzZSB3aGlsZShlPWVbdV0paWYoMT09PWUubm9kZVR5cGV8fGYpaWYoaT0obz1lW1NdfHwoZVtTXT17fSkpW2UudW5pcXVlSURdfHwob1tlLnVuaXF1ZUlEXT17fSksbCYmbD09PWUubm9kZU5hbWUudG9Mb3dlckNhc2UoKSllPWVbdV18fGU7ZWxzZXtpZigocj1pW2NdKSYmclswXT09PWsmJnJbMV09PT1wKXJldHVybiBhWzJdPXJbMl07aWYoKGlbY109YSlbMl09cyhlLHQsbikpcmV0dXJuITB9cmV0dXJuITF9fWZ1bmN0aW9uIHdlKGkpe3JldHVybiAxPGkubGVuZ3RoP2Z1bmN0aW9uKGUsdCxuKXt2YXIgcj1pLmxlbmd0aDt3aGlsZShyLS0paWYoIWlbcl0oZSx0LG4pKXJldHVybiExO3JldHVybiEwfTppWzBdfWZ1bmN0aW9uIFRlKGUsdCxuLHIsaSl7Zm9yKHZhciBvLGE9W10scz0wLHU9ZS5sZW5ndGgsbD1udWxsIT10O3M8dTtzKyspKG89ZVtzXSkmJihuJiYhbihvLHIsaSl8fChhLnB1c2gobyksbCYmdC5wdXNoKHMpKSk7cmV0dXJuIGF9ZnVuY3Rpb24gQ2UoZCxoLGcsdix5LGUpe3JldHVybiB2JiYhdltTXSYmKHY9Q2UodikpLHkmJiF5W1NdJiYoeT1DZSh5LGUpKSxsZShmdW5jdGlvbihlLHQsbixyKXt2YXIgaSxvLGEscz1bXSx1PVtdLGw9dC5sZW5ndGgsYz1lfHxmdW5jdGlvbihlLHQsbil7Zm9yKHZhciByPTAsaT10Lmxlbmd0aDtyPGk7cisrKXNlKGUsdFtyXSxuKTtyZXR1cm4gbn0oaHx8XCIqXCIsbi5ub2RlVHlwZT9bbl06bixbXSksZj0hZHx8IWUmJmg/YzpUZShjLHMsZCxuLHIpLHA9Zz95fHwoZT9kOmx8fHYpP1tdOnQ6ZjtpZihnJiZnKGYscCxuLHIpLHYpe2k9VGUocCx1KSx2KGksW10sbixyKSxvPWkubGVuZ3RoO3doaWxlKG8tLSkoYT1pW29dKSYmKHBbdVtvXV09IShmW3Vbb11dPWEpKX1pZihlKXtpZih5fHxkKXtpZih5KXtpPVtdLG89cC5sZW5ndGg7d2hpbGUoby0tKShhPXBbb10pJiZpLnB1c2goZltvXT1hKTt5KG51bGwscD1bXSxpLHIpfW89cC5sZW5ndGg7d2hpbGUoby0tKShhPXBbb10pJiYtMTwoaT15P1AoZSxhKTpzW29dKSYmKGVbaV09ISh0W2ldPWEpKX19ZWxzZSBwPVRlKHA9PT10P3Auc3BsaWNlKGwscC5sZW5ndGgpOnApLHk/eShudWxsLHQscCxyKTpILmFwcGx5KHQscCl9KX1mdW5jdGlvbiBFZShlKXtmb3IodmFyIGksdCxuLHI9ZS5sZW5ndGgsbz1iLnJlbGF0aXZlW2VbMF0udHlwZV0sYT1vfHxiLnJlbGF0aXZlW1wiIFwiXSxzPW8/MTowLHU9YmUoZnVuY3Rpb24oZSl7cmV0dXJuIGU9PT1pfSxhLCEwKSxsPWJlKGZ1bmN0aW9uKGUpe3JldHVybi0xPFAoaSxlKX0sYSwhMCksYz1bZnVuY3Rpb24oZSx0LG4pe3ZhciByPSFvJiYobnx8dCE9PXcpfHwoKGk9dCkubm9kZVR5cGU/dShlLHQsbik6bChlLHQsbikpO3JldHVybiBpPW51bGwscn1dO3M8cjtzKyspaWYodD1iLnJlbGF0aXZlW2Vbc10udHlwZV0pYz1bYmUod2UoYyksdCldO2Vsc2V7aWYoKHQ9Yi5maWx0ZXJbZVtzXS50eXBlXS5hcHBseShudWxsLGVbc10ubWF0Y2hlcykpW1NdKXtmb3Iobj0rK3M7bjxyO24rKylpZihiLnJlbGF0aXZlW2Vbbl0udHlwZV0pYnJlYWs7cmV0dXJuIENlKDE8cyYmd2UoYyksMTxzJiZ4ZShlLnNsaWNlKDAscy0xKS5jb25jYXQoe3ZhbHVlOlwiIFwiPT09ZVtzLTJdLnR5cGU/XCIqXCI6XCJcIn0pKS5yZXBsYWNlKCQsXCIkMVwiKSx0LHM8biYmRWUoZS5zbGljZShzLG4pKSxuPHImJkVlKGU9ZS5zbGljZShuKSksbjxyJiZ4ZShlKSl9Yy5wdXNoKHQpfXJldHVybiB3ZShjKX1yZXR1cm4gbWUucHJvdG90eXBlPWIuZmlsdGVycz1iLnBzZXVkb3MsYi5zZXRGaWx0ZXJzPW5ldyBtZSxoPXNlLnRva2VuaXplPWZ1bmN0aW9uKGUsdCl7dmFyIG4scixpLG8sYSxzLHUsbD14W2UrXCIgXCJdO2lmKGwpcmV0dXJuIHQ/MDpsLnNsaWNlKDApO2E9ZSxzPVtdLHU9Yi5wcmVGaWx0ZXI7d2hpbGUoYSl7Zm9yKG8gaW4gbiYmIShyPV8uZXhlYyhhKSl8fChyJiYoYT1hLnNsaWNlKHJbMF0ubGVuZ3RoKXx8YSkscy5wdXNoKGk9W10pKSxuPSExLChyPXouZXhlYyhhKSkmJihuPXIuc2hpZnQoKSxpLnB1c2goe3ZhbHVlOm4sdHlwZTpyWzBdLnJlcGxhY2UoJCxcIiBcIil9KSxhPWEuc2xpY2Uobi5sZW5ndGgpKSxiLmZpbHRlcikhKHI9R1tvXS5leGVjKGEpKXx8dVtvXSYmIShyPXVbb10ocikpfHwobj1yLnNoaWZ0KCksaS5wdXNoKHt2YWx1ZTpuLHR5cGU6byxtYXRjaGVzOnJ9KSxhPWEuc2xpY2Uobi5sZW5ndGgpKTtpZighbilicmVha31yZXR1cm4gdD9hLmxlbmd0aDphP3NlLmVycm9yKGUpOngoZSxzKS5zbGljZSgwKX0sZj1zZS5jb21waWxlPWZ1bmN0aW9uKGUsdCl7dmFyIG4sdix5LG0seCxyLGk9W10sbz1bXSxhPUFbZStcIiBcIl07aWYoIWEpe3R8fCh0PWgoZSkpLG49dC5sZW5ndGg7d2hpbGUobi0tKShhPUVlKHRbbl0pKVtTXT9pLnB1c2goYSk6by5wdXNoKGEpOyhhPUEoZSwodj1vLG09MDwoeT1pKS5sZW5ndGgseD0wPHYubGVuZ3RoLHI9ZnVuY3Rpb24oZSx0LG4scixpKXt2YXIgbyxhLHMsdT0wLGw9XCIwXCIsYz1lJiZbXSxmPVtdLHA9dyxkPWV8fHgmJmIuZmluZC5UQUcoXCIqXCIsaSksaD1rKz1udWxsPT1wPzE6TWF0aC5yYW5kb20oKXx8LjEsZz1kLmxlbmd0aDtmb3IoaSYmKHc9dD09Q3x8dHx8aSk7bCE9PWcmJm51bGwhPShvPWRbbF0pO2wrKyl7aWYoeCYmbyl7YT0wLHR8fG8ub3duZXJEb2N1bWVudD09Q3x8KFQobyksbj0hRSk7d2hpbGUocz12W2ErK10paWYocyhvLHR8fEMsbikpe3IucHVzaChvKTticmVha31pJiYoaz1oKX1tJiYoKG89IXMmJm8pJiZ1LS0sZSYmYy5wdXNoKG8pKX1pZih1Kz1sLG0mJmwhPT11KXthPTA7d2hpbGUocz15W2ErK10pcyhjLGYsdCxuKTtpZihlKXtpZigwPHUpd2hpbGUobC0tKWNbbF18fGZbbF18fChmW2xdPXEuY2FsbChyKSk7Zj1UZShmKX1ILmFwcGx5KHIsZiksaSYmIWUmJjA8Zi5sZW5ndGgmJjE8dSt5Lmxlbmd0aCYmc2UudW5pcXVlU29ydChyKX1yZXR1cm4gaSYmKGs9aCx3PXApLGN9LG0/bGUocik6cikpKS5zZWxlY3Rvcj1lfXJldHVybiBhfSxnPXNlLnNlbGVjdD1mdW5jdGlvbihlLHQsbixyKXt2YXIgaSxvLGEscyx1LGw9XCJmdW5jdGlvblwiPT10eXBlb2YgZSYmZSxjPSFyJiZoKGU9bC5zZWxlY3Rvcnx8ZSk7aWYobj1ufHxbXSwxPT09Yy5sZW5ndGgpe2lmKDI8KG89Y1swXT1jWzBdLnNsaWNlKDApKS5sZW5ndGgmJlwiSURcIj09PShhPW9bMF0pLnR5cGUmJjk9PT10Lm5vZGVUeXBlJiZFJiZiLnJlbGF0aXZlW29bMV0udHlwZV0pe2lmKCEodD0oYi5maW5kLklEKGEubWF0Y2hlc1swXS5yZXBsYWNlKHRlLG5lKSx0KXx8W10pWzBdKSlyZXR1cm4gbjtsJiYodD10LnBhcmVudE5vZGUpLGU9ZS5zbGljZShvLnNoaWZ0KCkudmFsdWUubGVuZ3RoKX1pPUcubmVlZHNDb250ZXh0LnRlc3QoZSk/MDpvLmxlbmd0aDt3aGlsZShpLS0pe2lmKGE9b1tpXSxiLnJlbGF0aXZlW3M9YS50eXBlXSlicmVhaztpZigodT1iLmZpbmRbc10pJiYocj11KGEubWF0Y2hlc1swXS5yZXBsYWNlKHRlLG5lKSxlZS50ZXN0KG9bMF0udHlwZSkmJnllKHQucGFyZW50Tm9kZSl8fHQpKSl7aWYoby5zcGxpY2UoaSwxKSwhKGU9ci5sZW5ndGgmJnhlKG8pKSlyZXR1cm4gSC5hcHBseShuLHIpLG47YnJlYWt9fX1yZXR1cm4obHx8ZihlLGMpKShyLHQsIUUsbiwhdHx8ZWUudGVzdChlKSYmeWUodC5wYXJlbnROb2RlKXx8dCksbn0sZC5zb3J0U3RhYmxlPVMuc3BsaXQoXCJcIikuc29ydChEKS5qb2luKFwiXCIpPT09UyxkLmRldGVjdER1cGxpY2F0ZXM9ISFsLFQoKSxkLnNvcnREZXRhY2hlZD1jZShmdW5jdGlvbihlKXtyZXR1cm4gMSZlLmNvbXBhcmVEb2N1bWVudFBvc2l0aW9uKEMuY3JlYXRlRWxlbWVudChcImZpZWxkc2V0XCIpKX0pLGNlKGZ1bmN0aW9uKGUpe3JldHVybiBlLmlubmVySFRNTD1cIjxhIGhyZWY9JyMnPjwvYT5cIixcIiNcIj09PWUuZmlyc3RDaGlsZC5nZXRBdHRyaWJ1dGUoXCJocmVmXCIpfSl8fGZlKFwidHlwZXxocmVmfGhlaWdodHx3aWR0aFwiLGZ1bmN0aW9uKGUsdCxuKXtpZighbilyZXR1cm4gZS5nZXRBdHRyaWJ1dGUodCxcInR5cGVcIj09PXQudG9Mb3dlckNhc2UoKT8xOjIpfSksZC5hdHRyaWJ1dGVzJiZjZShmdW5jdGlvbihlKXtyZXR1cm4gZS5pbm5lckhUTUw9XCI8aW5wdXQvPlwiLGUuZmlyc3RDaGlsZC5zZXRBdHRyaWJ1dGUoXCJ2YWx1ZVwiLFwiXCIpLFwiXCI9PT1lLmZpcnN0Q2hpbGQuZ2V0QXR0cmlidXRlKFwidmFsdWVcIil9KXx8ZmUoXCJ2YWx1ZVwiLGZ1bmN0aW9uKGUsdCxuKXtpZighbiYmXCJpbnB1dFwiPT09ZS5ub2RlTmFtZS50b0xvd2VyQ2FzZSgpKXJldHVybiBlLmRlZmF1bHRWYWx1ZX0pLGNlKGZ1bmN0aW9uKGUpe3JldHVybiBudWxsPT1lLmdldEF0dHJpYnV0ZShcImRpc2FibGVkXCIpfSl8fGZlKFIsZnVuY3Rpb24oZSx0LG4pe3ZhciByO2lmKCFuKXJldHVybiEwPT09ZVt0XT90LnRvTG93ZXJDYXNlKCk6KHI9ZS5nZXRBdHRyaWJ1dGVOb2RlKHQpKSYmci5zcGVjaWZpZWQ/ci52YWx1ZTpudWxsfSksc2V9KEMpO1MuZmluZD1kLFMuZXhwcj1kLnNlbGVjdG9ycyxTLmV4cHJbXCI6XCJdPVMuZXhwci5wc2V1ZG9zLFMudW5pcXVlU29ydD1TLnVuaXF1ZT1kLnVuaXF1ZVNvcnQsUy50ZXh0PWQuZ2V0VGV4dCxTLmlzWE1MRG9jPWQuaXNYTUwsUy5jb250YWlucz1kLmNvbnRhaW5zLFMuZXNjYXBlU2VsZWN0b3I9ZC5lc2NhcGU7dmFyIGg9ZnVuY3Rpb24oZSx0LG4pe3ZhciByPVtdLGk9dm9pZCAwIT09bjt3aGlsZSgoZT1lW3RdKSYmOSE9PWUubm9kZVR5cGUpaWYoMT09PWUubm9kZVR5cGUpe2lmKGkmJlMoZSkuaXMobikpYnJlYWs7ci5wdXNoKGUpfXJldHVybiByfSxUPWZ1bmN0aW9uKGUsdCl7Zm9yKHZhciBuPVtdO2U7ZT1lLm5leHRTaWJsaW5nKTE9PT1lLm5vZGVUeXBlJiZlIT09dCYmbi5wdXNoKGUpO3JldHVybiBufSxrPVMuZXhwci5tYXRjaC5uZWVkc0NvbnRleHQ7ZnVuY3Rpb24gQShlLHQpe3JldHVybiBlLm5vZGVOYW1lJiZlLm5vZGVOYW1lLnRvTG93ZXJDYXNlKCk9PT10LnRvTG93ZXJDYXNlKCl9dmFyIE49L148KFthLXpdW15cXC9cXDA+OlxceDIwXFx0XFxyXFxuXFxmXSopW1xceDIwXFx0XFxyXFxuXFxmXSpcXC8/Pig/OjxcXC9cXDE+fCkkL2k7ZnVuY3Rpb24gRChlLG4scil7cmV0dXJuIG0obik/Uy5ncmVwKGUsZnVuY3Rpb24oZSx0KXtyZXR1cm4hIW4uY2FsbChlLHQsZSkhPT1yfSk6bi5ub2RlVHlwZT9TLmdyZXAoZSxmdW5jdGlvbihlKXtyZXR1cm4gZT09PW4hPT1yfSk6XCJzdHJpbmdcIiE9dHlwZW9mIG4/Uy5ncmVwKGUsZnVuY3Rpb24oZSl7cmV0dXJuLTE8aS5jYWxsKG4sZSkhPT1yfSk6Uy5maWx0ZXIobixlLHIpfVMuZmlsdGVyPWZ1bmN0aW9uKGUsdCxuKXt2YXIgcj10WzBdO3JldHVybiBuJiYoZT1cIjpub3QoXCIrZStcIilcIiksMT09PXQubGVuZ3RoJiYxPT09ci5ub2RlVHlwZT9TLmZpbmQubWF0Y2hlc1NlbGVjdG9yKHIsZSk/W3JdOltdOlMuZmluZC5tYXRjaGVzKGUsUy5ncmVwKHQsZnVuY3Rpb24oZSl7cmV0dXJuIDE9PT1lLm5vZGVUeXBlfSkpfSxTLmZuLmV4dGVuZCh7ZmluZDpmdW5jdGlvbihlKXt2YXIgdCxuLHI9dGhpcy5sZW5ndGgsaT10aGlzO2lmKFwic3RyaW5nXCIhPXR5cGVvZiBlKXJldHVybiB0aGlzLnB1c2hTdGFjayhTKGUpLmZpbHRlcihmdW5jdGlvbigpe2Zvcih0PTA7dDxyO3QrKylpZihTLmNvbnRhaW5zKGlbdF0sdGhpcykpcmV0dXJuITB9KSk7Zm9yKG49dGhpcy5wdXNoU3RhY2soW10pLHQ9MDt0PHI7dCsrKVMuZmluZChlLGlbdF0sbik7cmV0dXJuIDE8cj9TLnVuaXF1ZVNvcnQobik6bn0sZmlsdGVyOmZ1bmN0aW9uKGUpe3JldHVybiB0aGlzLnB1c2hTdGFjayhEKHRoaXMsZXx8W10sITEpKX0sbm90OmZ1bmN0aW9uKGUpe3JldHVybiB0aGlzLnB1c2hTdGFjayhEKHRoaXMsZXx8W10sITApKX0saXM6ZnVuY3Rpb24oZSl7cmV0dXJuISFEKHRoaXMsXCJzdHJpbmdcIj09dHlwZW9mIGUmJmsudGVzdChlKT9TKGUpOmV8fFtdLCExKS5sZW5ndGh9fSk7dmFyIGoscT0vXig/OlxccyooPFtcXHdcXFddKz4pW14+XSp8IyhbXFx3LV0rKSkkLzsoUy5mbi5pbml0PWZ1bmN0aW9uKGUsdCxuKXt2YXIgcixpO2lmKCFlKXJldHVybiB0aGlzO2lmKG49bnx8aixcInN0cmluZ1wiPT10eXBlb2YgZSl7aWYoIShyPVwiPFwiPT09ZVswXSYmXCI+XCI9PT1lW2UubGVuZ3RoLTFdJiYzPD1lLmxlbmd0aD9bbnVsbCxlLG51bGxdOnEuZXhlYyhlKSl8fCFyWzFdJiZ0KXJldHVybiF0fHx0LmpxdWVyeT8odHx8bikuZmluZChlKTp0aGlzLmNvbnN0cnVjdG9yKHQpLmZpbmQoZSk7aWYoclsxXSl7aWYodD10IGluc3RhbmNlb2YgUz90WzBdOnQsUy5tZXJnZSh0aGlzLFMucGFyc2VIVE1MKHJbMV0sdCYmdC5ub2RlVHlwZT90Lm93bmVyRG9jdW1lbnR8fHQ6RSwhMCkpLE4udGVzdChyWzFdKSYmUy5pc1BsYWluT2JqZWN0KHQpKWZvcihyIGluIHQpbSh0aGlzW3JdKT90aGlzW3JdKHRbcl0pOnRoaXMuYXR0cihyLHRbcl0pO3JldHVybiB0aGlzfXJldHVybihpPUUuZ2V0RWxlbWVudEJ5SWQoclsyXSkpJiYodGhpc1swXT1pLHRoaXMubGVuZ3RoPTEpLHRoaXN9cmV0dXJuIGUubm9kZVR5cGU/KHRoaXNbMF09ZSx0aGlzLmxlbmd0aD0xLHRoaXMpOm0oZSk/dm9pZCAwIT09bi5yZWFkeT9uLnJlYWR5KGUpOmUoUyk6Uy5tYWtlQXJyYXkoZSx0aGlzKX0pLnByb3RvdHlwZT1TLmZuLGo9UyhFKTt2YXIgTD0vXig/OnBhcmVudHN8cHJldig/OlVudGlsfEFsbCkpLyxIPXtjaGlsZHJlbjohMCxjb250ZW50czohMCxuZXh0OiEwLHByZXY6ITB9O2Z1bmN0aW9uIE8oZSx0KXt3aGlsZSgoZT1lW3RdKSYmMSE9PWUubm9kZVR5cGUpO3JldHVybiBlfVMuZm4uZXh0ZW5kKHtoYXM6ZnVuY3Rpb24oZSl7dmFyIHQ9UyhlLHRoaXMpLG49dC5sZW5ndGg7cmV0dXJuIHRoaXMuZmlsdGVyKGZ1bmN0aW9uKCl7Zm9yKHZhciBlPTA7ZTxuO2UrKylpZihTLmNvbnRhaW5zKHRoaXMsdFtlXSkpcmV0dXJuITB9KX0sY2xvc2VzdDpmdW5jdGlvbihlLHQpe3ZhciBuLHI9MCxpPXRoaXMubGVuZ3RoLG89W10sYT1cInN0cmluZ1wiIT10eXBlb2YgZSYmUyhlKTtpZighay50ZXN0KGUpKWZvcig7cjxpO3IrKylmb3Iobj10aGlzW3JdO24mJm4hPT10O249bi5wYXJlbnROb2RlKWlmKG4ubm9kZVR5cGU8MTEmJihhPy0xPGEuaW5kZXgobik6MT09PW4ubm9kZVR5cGUmJlMuZmluZC5tYXRjaGVzU2VsZWN0b3IobixlKSkpe28ucHVzaChuKTticmVha31yZXR1cm4gdGhpcy5wdXNoU3RhY2soMTxvLmxlbmd0aD9TLnVuaXF1ZVNvcnQobyk6byl9LGluZGV4OmZ1bmN0aW9uKGUpe3JldHVybiBlP1wic3RyaW5nXCI9PXR5cGVvZiBlP2kuY2FsbChTKGUpLHRoaXNbMF0pOmkuY2FsbCh0aGlzLGUuanF1ZXJ5P2VbMF06ZSk6dGhpc1swXSYmdGhpc1swXS5wYXJlbnROb2RlP3RoaXMuZmlyc3QoKS5wcmV2QWxsKCkubGVuZ3RoOi0xfSxhZGQ6ZnVuY3Rpb24oZSx0KXtyZXR1cm4gdGhpcy5wdXNoU3RhY2soUy51bmlxdWVTb3J0KFMubWVyZ2UodGhpcy5nZXQoKSxTKGUsdCkpKSl9LGFkZEJhY2s6ZnVuY3Rpb24oZSl7cmV0dXJuIHRoaXMuYWRkKG51bGw9PWU/dGhpcy5wcmV2T2JqZWN0OnRoaXMucHJldk9iamVjdC5maWx0ZXIoZSkpfX0pLFMuZWFjaCh7cGFyZW50OmZ1bmN0aW9uKGUpe3ZhciB0PWUucGFyZW50Tm9kZTtyZXR1cm4gdCYmMTEhPT10Lm5vZGVUeXBlP3Q6bnVsbH0scGFyZW50czpmdW5jdGlvbihlKXtyZXR1cm4gaChlLFwicGFyZW50Tm9kZVwiKX0scGFyZW50c1VudGlsOmZ1bmN0aW9uKGUsdCxuKXtyZXR1cm4gaChlLFwicGFyZW50Tm9kZVwiLG4pfSxuZXh0OmZ1bmN0aW9uKGUpe3JldHVybiBPKGUsXCJuZXh0U2libGluZ1wiKX0scHJldjpmdW5jdGlvbihlKXtyZXR1cm4gTyhlLFwicHJldmlvdXNTaWJsaW5nXCIpfSxuZXh0QWxsOmZ1bmN0aW9uKGUpe3JldHVybiBoKGUsXCJuZXh0U2libGluZ1wiKX0scHJldkFsbDpmdW5jdGlvbihlKXtyZXR1cm4gaChlLFwicHJldmlvdXNTaWJsaW5nXCIpfSxuZXh0VW50aWw6ZnVuY3Rpb24oZSx0LG4pe3JldHVybiBoKGUsXCJuZXh0U2libGluZ1wiLG4pfSxwcmV2VW50aWw6ZnVuY3Rpb24oZSx0LG4pe3JldHVybiBoKGUsXCJwcmV2aW91c1NpYmxpbmdcIixuKX0sc2libGluZ3M6ZnVuY3Rpb24oZSl7cmV0dXJuIFQoKGUucGFyZW50Tm9kZXx8e30pLmZpcnN0Q2hpbGQsZSl9LGNoaWxkcmVuOmZ1bmN0aW9uKGUpe3JldHVybiBUKGUuZmlyc3RDaGlsZCl9LGNvbnRlbnRzOmZ1bmN0aW9uKGUpe3JldHVybiBudWxsIT1lLmNvbnRlbnREb2N1bWVudCYmcihlLmNvbnRlbnREb2N1bWVudCk/ZS5jb250ZW50RG9jdW1lbnQ6KEEoZSxcInRlbXBsYXRlXCIpJiYoZT1lLmNvbnRlbnR8fGUpLFMubWVyZ2UoW10sZS5jaGlsZE5vZGVzKSl9fSxmdW5jdGlvbihyLGkpe1MuZm5bcl09ZnVuY3Rpb24oZSx0KXt2YXIgbj1TLm1hcCh0aGlzLGksZSk7cmV0dXJuXCJVbnRpbFwiIT09ci5zbGljZSgtNSkmJih0PWUpLHQmJlwic3RyaW5nXCI9PXR5cGVvZiB0JiYobj1TLmZpbHRlcih0LG4pKSwxPHRoaXMubGVuZ3RoJiYoSFtyXXx8Uy51bmlxdWVTb3J0KG4pLEwudGVzdChyKSYmbi5yZXZlcnNlKCkpLHRoaXMucHVzaFN0YWNrKG4pfX0pO3ZhciBQPS9bXlxceDIwXFx0XFxyXFxuXFxmXSsvZztmdW5jdGlvbiBSKGUpe3JldHVybiBlfWZ1bmN0aW9uIE0oZSl7dGhyb3cgZX1mdW5jdGlvbiBJKGUsdCxuLHIpe3ZhciBpO3RyeXtlJiZtKGk9ZS5wcm9taXNlKT9pLmNhbGwoZSkuZG9uZSh0KS5mYWlsKG4pOmUmJm0oaT1lLnRoZW4pP2kuY2FsbChlLHQsbik6dC5hcHBseSh2b2lkIDAsW2VdLnNsaWNlKHIpKX1jYXRjaChlKXtuLmFwcGx5KHZvaWQgMCxbZV0pfX1TLkNhbGxiYWNrcz1mdW5jdGlvbihyKXt2YXIgZSxuO3I9XCJzdHJpbmdcIj09dHlwZW9mIHI/KGU9cixuPXt9LFMuZWFjaChlLm1hdGNoKFApfHxbXSxmdW5jdGlvbihlLHQpe25bdF09ITB9KSxuKTpTLmV4dGVuZCh7fSxyKTt2YXIgaSx0LG8sYSxzPVtdLHU9W10sbD0tMSxjPWZ1bmN0aW9uKCl7Zm9yKGE9YXx8ci5vbmNlLG89aT0hMDt1Lmxlbmd0aDtsPS0xKXt0PXUuc2hpZnQoKTt3aGlsZSgrK2w8cy5sZW5ndGgpITE9PT1zW2xdLmFwcGx5KHRbMF0sdFsxXSkmJnIuc3RvcE9uRmFsc2UmJihsPXMubGVuZ3RoLHQ9ITEpfXIubWVtb3J5fHwodD0hMSksaT0hMSxhJiYocz10P1tdOlwiXCIpfSxmPXthZGQ6ZnVuY3Rpb24oKXtyZXR1cm4gcyYmKHQmJiFpJiYobD1zLmxlbmd0aC0xLHUucHVzaCh0KSksZnVuY3Rpb24gbihlKXtTLmVhY2goZSxmdW5jdGlvbihlLHQpe20odCk/ci51bmlxdWUmJmYuaGFzKHQpfHxzLnB1c2godCk6dCYmdC5sZW5ndGgmJlwic3RyaW5nXCIhPT13KHQpJiZuKHQpfSl9KGFyZ3VtZW50cyksdCYmIWkmJmMoKSksdGhpc30scmVtb3ZlOmZ1bmN0aW9uKCl7cmV0dXJuIFMuZWFjaChhcmd1bWVudHMsZnVuY3Rpb24oZSx0KXt2YXIgbjt3aGlsZSgtMTwobj1TLmluQXJyYXkodCxzLG4pKSlzLnNwbGljZShuLDEpLG48PWwmJmwtLX0pLHRoaXN9LGhhczpmdW5jdGlvbihlKXtyZXR1cm4gZT8tMTxTLmluQXJyYXkoZSxzKTowPHMubGVuZ3RofSxlbXB0eTpmdW5jdGlvbigpe3JldHVybiBzJiYocz1bXSksdGhpc30sZGlzYWJsZTpmdW5jdGlvbigpe3JldHVybiBhPXU9W10scz10PVwiXCIsdGhpc30sZGlzYWJsZWQ6ZnVuY3Rpb24oKXtyZXR1cm4hc30sbG9jazpmdW5jdGlvbigpe3JldHVybiBhPXU9W10sdHx8aXx8KHM9dD1cIlwiKSx0aGlzfSxsb2NrZWQ6ZnVuY3Rpb24oKXtyZXR1cm4hIWF9LGZpcmVXaXRoOmZ1bmN0aW9uKGUsdCl7cmV0dXJuIGF8fCh0PVtlLCh0PXR8fFtdKS5zbGljZT90LnNsaWNlKCk6dF0sdS5wdXNoKHQpLGl8fGMoKSksdGhpc30sZmlyZTpmdW5jdGlvbigpe3JldHVybiBmLmZpcmVXaXRoKHRoaXMsYXJndW1lbnRzKSx0aGlzfSxmaXJlZDpmdW5jdGlvbigpe3JldHVybiEhb319O3JldHVybiBmfSxTLmV4dGVuZCh7RGVmZXJyZWQ6ZnVuY3Rpb24oZSl7dmFyIG89W1tcIm5vdGlmeVwiLFwicHJvZ3Jlc3NcIixTLkNhbGxiYWNrcyhcIm1lbW9yeVwiKSxTLkNhbGxiYWNrcyhcIm1lbW9yeVwiKSwyXSxbXCJyZXNvbHZlXCIsXCJkb25lXCIsUy5DYWxsYmFja3MoXCJvbmNlIG1lbW9yeVwiKSxTLkNhbGxiYWNrcyhcIm9uY2UgbWVtb3J5XCIpLDAsXCJyZXNvbHZlZFwiXSxbXCJyZWplY3RcIixcImZhaWxcIixTLkNhbGxiYWNrcyhcIm9uY2UgbWVtb3J5XCIpLFMuQ2FsbGJhY2tzKFwib25jZSBtZW1vcnlcIiksMSxcInJlamVjdGVkXCJdXSxpPVwicGVuZGluZ1wiLGE9e3N0YXRlOmZ1bmN0aW9uKCl7cmV0dXJuIGl9LGFsd2F5czpmdW5jdGlvbigpe3JldHVybiBzLmRvbmUoYXJndW1lbnRzKS5mYWlsKGFyZ3VtZW50cyksdGhpc30sXCJjYXRjaFwiOmZ1bmN0aW9uKGUpe3JldHVybiBhLnRoZW4obnVsbCxlKX0scGlwZTpmdW5jdGlvbigpe3ZhciBpPWFyZ3VtZW50cztyZXR1cm4gUy5EZWZlcnJlZChmdW5jdGlvbihyKXtTLmVhY2gobyxmdW5jdGlvbihlLHQpe3ZhciBuPW0oaVt0WzRdXSkmJmlbdFs0XV07c1t0WzFdXShmdW5jdGlvbigpe3ZhciBlPW4mJm4uYXBwbHkodGhpcyxhcmd1bWVudHMpO2UmJm0oZS5wcm9taXNlKT9lLnByb21pc2UoKS5wcm9ncmVzcyhyLm5vdGlmeSkuZG9uZShyLnJlc29sdmUpLmZhaWwoci5yZWplY3QpOnJbdFswXStcIldpdGhcIl0odGhpcyxuP1tlXTphcmd1bWVudHMpfSl9KSxpPW51bGx9KS5wcm9taXNlKCl9LHRoZW46ZnVuY3Rpb24odCxuLHIpe3ZhciB1PTA7ZnVuY3Rpb24gbChpLG8sYSxzKXtyZXR1cm4gZnVuY3Rpb24oKXt2YXIgbj10aGlzLHI9YXJndW1lbnRzLGU9ZnVuY3Rpb24oKXt2YXIgZSx0O2lmKCEoaTx1KSl7aWYoKGU9YS5hcHBseShuLHIpKT09PW8ucHJvbWlzZSgpKXRocm93IG5ldyBUeXBlRXJyb3IoXCJUaGVuYWJsZSBzZWxmLXJlc29sdXRpb25cIik7dD1lJiYoXCJvYmplY3RcIj09dHlwZW9mIGV8fFwiZnVuY3Rpb25cIj09dHlwZW9mIGUpJiZlLnRoZW4sbSh0KT9zP3QuY2FsbChlLGwodSxvLFIscyksbCh1LG8sTSxzKSk6KHUrKyx0LmNhbGwoZSxsKHUsbyxSLHMpLGwodSxvLE0scyksbCh1LG8sUixvLm5vdGlmeVdpdGgpKSk6KGEhPT1SJiYobj12b2lkIDAscj1bZV0pLChzfHxvLnJlc29sdmVXaXRoKShuLHIpKX19LHQ9cz9lOmZ1bmN0aW9uKCl7dHJ5e2UoKX1jYXRjaChlKXtTLkRlZmVycmVkLmV4Y2VwdGlvbkhvb2smJlMuRGVmZXJyZWQuZXhjZXB0aW9uSG9vayhlLHQuc3RhY2tUcmFjZSksdTw9aSsxJiYoYSE9PU0mJihuPXZvaWQgMCxyPVtlXSksby5yZWplY3RXaXRoKG4scikpfX07aT90KCk6KFMuRGVmZXJyZWQuZ2V0U3RhY2tIb29rJiYodC5zdGFja1RyYWNlPVMuRGVmZXJyZWQuZ2V0U3RhY2tIb29rKCkpLEMuc2V0VGltZW91dCh0KSl9fXJldHVybiBTLkRlZmVycmVkKGZ1bmN0aW9uKGUpe29bMF1bM10uYWRkKGwoMCxlLG0ocik/cjpSLGUubm90aWZ5V2l0aCkpLG9bMV1bM10uYWRkKGwoMCxlLG0odCk/dDpSKSksb1syXVszXS5hZGQobCgwLGUsbShuKT9uOk0pKX0pLnByb21pc2UoKX0scHJvbWlzZTpmdW5jdGlvbihlKXtyZXR1cm4gbnVsbCE9ZT9TLmV4dGVuZChlLGEpOmF9fSxzPXt9O3JldHVybiBTLmVhY2gobyxmdW5jdGlvbihlLHQpe3ZhciBuPXRbMl0scj10WzVdO2FbdFsxXV09bi5hZGQsciYmbi5hZGQoZnVuY3Rpb24oKXtpPXJ9LG9bMy1lXVsyXS5kaXNhYmxlLG9bMy1lXVszXS5kaXNhYmxlLG9bMF1bMl0ubG9jayxvWzBdWzNdLmxvY2spLG4uYWRkKHRbM10uZmlyZSksc1t0WzBdXT1mdW5jdGlvbigpe3JldHVybiBzW3RbMF0rXCJXaXRoXCJdKHRoaXM9PT1zP3ZvaWQgMDp0aGlzLGFyZ3VtZW50cyksdGhpc30sc1t0WzBdK1wiV2l0aFwiXT1uLmZpcmVXaXRofSksYS5wcm9taXNlKHMpLGUmJmUuY2FsbChzLHMpLHN9LHdoZW46ZnVuY3Rpb24oZSl7dmFyIG49YXJndW1lbnRzLmxlbmd0aCx0PW4scj1BcnJheSh0KSxpPXMuY2FsbChhcmd1bWVudHMpLG89Uy5EZWZlcnJlZCgpLGE9ZnVuY3Rpb24odCl7cmV0dXJuIGZ1bmN0aW9uKGUpe3JbdF09dGhpcyxpW3RdPTE8YXJndW1lbnRzLmxlbmd0aD9zLmNhbGwoYXJndW1lbnRzKTplLC0tbnx8by5yZXNvbHZlV2l0aChyLGkpfX07aWYobjw9MSYmKEkoZSxvLmRvbmUoYSh0KSkucmVzb2x2ZSxvLnJlamVjdCwhbiksXCJwZW5kaW5nXCI9PT1vLnN0YXRlKCl8fG0oaVt0XSYmaVt0XS50aGVuKSkpcmV0dXJuIG8udGhlbigpO3doaWxlKHQtLSlJKGlbdF0sYSh0KSxvLnJlamVjdCk7cmV0dXJuIG8ucHJvbWlzZSgpfX0pO3ZhciBXPS9eKEV2YWx8SW50ZXJuYWx8UmFuZ2V8UmVmZXJlbmNlfFN5bnRheHxUeXBlfFVSSSlFcnJvciQvO1MuRGVmZXJyZWQuZXhjZXB0aW9uSG9vaz1mdW5jdGlvbihlLHQpe0MuY29uc29sZSYmQy5jb25zb2xlLndhcm4mJmUmJlcudGVzdChlLm5hbWUpJiZDLmNvbnNvbGUud2FybihcImpRdWVyeS5EZWZlcnJlZCBleGNlcHRpb246IFwiK2UubWVzc2FnZSxlLnN0YWNrLHQpfSxTLnJlYWR5RXhjZXB0aW9uPWZ1bmN0aW9uKGUpe0Muc2V0VGltZW91dChmdW5jdGlvbigpe3Rocm93IGV9KX07dmFyIEY9Uy5EZWZlcnJlZCgpO2Z1bmN0aW9uIEIoKXtFLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsQiksQy5yZW1vdmVFdmVudExpc3RlbmVyKFwibG9hZFwiLEIpLFMucmVhZHkoKX1TLmZuLnJlYWR5PWZ1bmN0aW9uKGUpe3JldHVybiBGLnRoZW4oZSlbXCJjYXRjaFwiXShmdW5jdGlvbihlKXtTLnJlYWR5RXhjZXB0aW9uKGUpfSksdGhpc30sUy5leHRlbmQoe2lzUmVhZHk6ITEscmVhZHlXYWl0OjEscmVhZHk6ZnVuY3Rpb24oZSl7KCEwPT09ZT8tLVMucmVhZHlXYWl0OlMuaXNSZWFkeSl8fChTLmlzUmVhZHk9ITApIT09ZSYmMDwtLVMucmVhZHlXYWl0fHxGLnJlc29sdmVXaXRoKEUsW1NdKX19KSxTLnJlYWR5LnRoZW49Ri50aGVuLFwiY29tcGxldGVcIj09PUUucmVhZHlTdGF0ZXx8XCJsb2FkaW5nXCIhPT1FLnJlYWR5U3RhdGUmJiFFLmRvY3VtZW50RWxlbWVudC5kb1Njcm9sbD9DLnNldFRpbWVvdXQoUy5yZWFkeSk6KEUuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIixCKSxDLmFkZEV2ZW50TGlzdGVuZXIoXCJsb2FkXCIsQikpO3ZhciAkPWZ1bmN0aW9uKGUsdCxuLHIsaSxvLGEpe3ZhciBzPTAsdT1lLmxlbmd0aCxsPW51bGw9PW47aWYoXCJvYmplY3RcIj09PXcobikpZm9yKHMgaW4gaT0hMCxuKSQoZSx0LHMsbltzXSwhMCxvLGEpO2Vsc2UgaWYodm9pZCAwIT09ciYmKGk9ITAsbShyKXx8KGE9ITApLGwmJihhPyh0LmNhbGwoZSxyKSx0PW51bGwpOihsPXQsdD1mdW5jdGlvbihlLHQsbil7cmV0dXJuIGwuY2FsbChTKGUpLG4pfSkpLHQpKWZvcig7czx1O3MrKyl0KGVbc10sbixhP3I6ci5jYWxsKGVbc10scyx0KGVbc10sbikpKTtyZXR1cm4gaT9lOmw/dC5jYWxsKGUpOnU/dChlWzBdLG4pOm99LF89L14tbXMtLyx6PS8tKFthLXpdKS9nO2Z1bmN0aW9uIFUoZSx0KXtyZXR1cm4gdC50b1VwcGVyQ2FzZSgpfWZ1bmN0aW9uIFgoZSl7cmV0dXJuIGUucmVwbGFjZShfLFwibXMtXCIpLnJlcGxhY2UoeixVKX12YXIgVj1mdW5jdGlvbihlKXtyZXR1cm4gMT09PWUubm9kZVR5cGV8fDk9PT1lLm5vZGVUeXBlfHwhK2Uubm9kZVR5cGV9O2Z1bmN0aW9uIEcoKXt0aGlzLmV4cGFuZG89Uy5leHBhbmRvK0cudWlkKyt9Ry51aWQ9MSxHLnByb3RvdHlwZT17Y2FjaGU6ZnVuY3Rpb24oZSl7dmFyIHQ9ZVt0aGlzLmV4cGFuZG9dO3JldHVybiB0fHwodD17fSxWKGUpJiYoZS5ub2RlVHlwZT9lW3RoaXMuZXhwYW5kb109dDpPYmplY3QuZGVmaW5lUHJvcGVydHkoZSx0aGlzLmV4cGFuZG8se3ZhbHVlOnQsY29uZmlndXJhYmxlOiEwfSkpKSx0fSxzZXQ6ZnVuY3Rpb24oZSx0LG4pe3ZhciByLGk9dGhpcy5jYWNoZShlKTtpZihcInN0cmluZ1wiPT10eXBlb2YgdClpW1godCldPW47ZWxzZSBmb3IociBpbiB0KWlbWChyKV09dFtyXTtyZXR1cm4gaX0sZ2V0OmZ1bmN0aW9uKGUsdCl7cmV0dXJuIHZvaWQgMD09PXQ/dGhpcy5jYWNoZShlKTplW3RoaXMuZXhwYW5kb10mJmVbdGhpcy5leHBhbmRvXVtYKHQpXX0sYWNjZXNzOmZ1bmN0aW9uKGUsdCxuKXtyZXR1cm4gdm9pZCAwPT09dHx8dCYmXCJzdHJpbmdcIj09dHlwZW9mIHQmJnZvaWQgMD09PW4/dGhpcy5nZXQoZSx0KToodGhpcy5zZXQoZSx0LG4pLHZvaWQgMCE9PW4/bjp0KX0scmVtb3ZlOmZ1bmN0aW9uKGUsdCl7dmFyIG4scj1lW3RoaXMuZXhwYW5kb107aWYodm9pZCAwIT09cil7aWYodm9pZCAwIT09dCl7bj0odD1BcnJheS5pc0FycmF5KHQpP3QubWFwKFgpOih0PVgodCkpaW4gcj9bdF06dC5tYXRjaChQKXx8W10pLmxlbmd0aDt3aGlsZShuLS0pZGVsZXRlIHJbdFtuXV19KHZvaWQgMD09PXR8fFMuaXNFbXB0eU9iamVjdChyKSkmJihlLm5vZGVUeXBlP2VbdGhpcy5leHBhbmRvXT12b2lkIDA6ZGVsZXRlIGVbdGhpcy5leHBhbmRvXSl9fSxoYXNEYXRhOmZ1bmN0aW9uKGUpe3ZhciB0PWVbdGhpcy5leHBhbmRvXTtyZXR1cm4gdm9pZCAwIT09dCYmIVMuaXNFbXB0eU9iamVjdCh0KX19O3ZhciBZPW5ldyBHLFE9bmV3IEcsSj0vXig/Olxce1tcXHdcXFddKlxcfXxcXFtbXFx3XFxXXSpcXF0pJC8sSz0vW0EtWl0vZztmdW5jdGlvbiBaKGUsdCxuKXt2YXIgcixpO2lmKHZvaWQgMD09PW4mJjE9PT1lLm5vZGVUeXBlKWlmKHI9XCJkYXRhLVwiK3QucmVwbGFjZShLLFwiLSQmXCIpLnRvTG93ZXJDYXNlKCksXCJzdHJpbmdcIj09dHlwZW9mKG49ZS5nZXRBdHRyaWJ1dGUocikpKXt0cnl7bj1cInRydWVcIj09PShpPW4pfHxcImZhbHNlXCIhPT1pJiYoXCJudWxsXCI9PT1pP251bGw6aT09PStpK1wiXCI/K2k6Si50ZXN0KGkpP0pTT04ucGFyc2UoaSk6aSl9Y2F0Y2goZSl7fVEuc2V0KGUsdCxuKX1lbHNlIG49dm9pZCAwO3JldHVybiBufVMuZXh0ZW5kKHtoYXNEYXRhOmZ1bmN0aW9uKGUpe3JldHVybiBRLmhhc0RhdGEoZSl8fFkuaGFzRGF0YShlKX0sZGF0YTpmdW5jdGlvbihlLHQsbil7cmV0dXJuIFEuYWNjZXNzKGUsdCxuKX0scmVtb3ZlRGF0YTpmdW5jdGlvbihlLHQpe1EucmVtb3ZlKGUsdCl9LF9kYXRhOmZ1bmN0aW9uKGUsdCxuKXtyZXR1cm4gWS5hY2Nlc3MoZSx0LG4pfSxfcmVtb3ZlRGF0YTpmdW5jdGlvbihlLHQpe1kucmVtb3ZlKGUsdCl9fSksUy5mbi5leHRlbmQoe2RhdGE6ZnVuY3Rpb24obixlKXt2YXIgdCxyLGksbz10aGlzWzBdLGE9byYmby5hdHRyaWJ1dGVzO2lmKHZvaWQgMD09PW4pe2lmKHRoaXMubGVuZ3RoJiYoaT1RLmdldChvKSwxPT09by5ub2RlVHlwZSYmIVkuZ2V0KG8sXCJoYXNEYXRhQXR0cnNcIikpKXt0PWEubGVuZ3RoO3doaWxlKHQtLSlhW3RdJiYwPT09KHI9YVt0XS5uYW1lKS5pbmRleE9mKFwiZGF0YS1cIikmJihyPVgoci5zbGljZSg1KSksWihvLHIsaVtyXSkpO1kuc2V0KG8sXCJoYXNEYXRhQXR0cnNcIiwhMCl9cmV0dXJuIGl9cmV0dXJuXCJvYmplY3RcIj09dHlwZW9mIG4/dGhpcy5lYWNoKGZ1bmN0aW9uKCl7US5zZXQodGhpcyxuKX0pOiQodGhpcyxmdW5jdGlvbihlKXt2YXIgdDtpZihvJiZ2b2lkIDA9PT1lKXJldHVybiB2b2lkIDAhPT0odD1RLmdldChvLG4pKT90OnZvaWQgMCE9PSh0PVoobyxuKSk/dDp2b2lkIDA7dGhpcy5lYWNoKGZ1bmN0aW9uKCl7US5zZXQodGhpcyxuLGUpfSl9LG51bGwsZSwxPGFyZ3VtZW50cy5sZW5ndGgsbnVsbCwhMCl9LHJlbW92ZURhdGE6ZnVuY3Rpb24oZSl7cmV0dXJuIHRoaXMuZWFjaChmdW5jdGlvbigpe1EucmVtb3ZlKHRoaXMsZSl9KX19KSxTLmV4dGVuZCh7cXVldWU6ZnVuY3Rpb24oZSx0LG4pe3ZhciByO2lmKGUpcmV0dXJuIHQ9KHR8fFwiZnhcIikrXCJxdWV1ZVwiLHI9WS5nZXQoZSx0KSxuJiYoIXJ8fEFycmF5LmlzQXJyYXkobik/cj1ZLmFjY2VzcyhlLHQsUy5tYWtlQXJyYXkobikpOnIucHVzaChuKSkscnx8W119LGRlcXVldWU6ZnVuY3Rpb24oZSx0KXt0PXR8fFwiZnhcIjt2YXIgbj1TLnF1ZXVlKGUsdCkscj1uLmxlbmd0aCxpPW4uc2hpZnQoKSxvPVMuX3F1ZXVlSG9va3MoZSx0KTtcImlucHJvZ3Jlc3NcIj09PWkmJihpPW4uc2hpZnQoKSxyLS0pLGkmJihcImZ4XCI9PT10JiZuLnVuc2hpZnQoXCJpbnByb2dyZXNzXCIpLGRlbGV0ZSBvLnN0b3AsaS5jYWxsKGUsZnVuY3Rpb24oKXtTLmRlcXVldWUoZSx0KX0sbykpLCFyJiZvJiZvLmVtcHR5LmZpcmUoKX0sX3F1ZXVlSG9va3M6ZnVuY3Rpb24oZSx0KXt2YXIgbj10K1wicXVldWVIb29rc1wiO3JldHVybiBZLmdldChlLG4pfHxZLmFjY2VzcyhlLG4se2VtcHR5OlMuQ2FsbGJhY2tzKFwib25jZSBtZW1vcnlcIikuYWRkKGZ1bmN0aW9uKCl7WS5yZW1vdmUoZSxbdCtcInF1ZXVlXCIsbl0pfSl9KX19KSxTLmZuLmV4dGVuZCh7cXVldWU6ZnVuY3Rpb24odCxuKXt2YXIgZT0yO3JldHVyblwic3RyaW5nXCIhPXR5cGVvZiB0JiYobj10LHQ9XCJmeFwiLGUtLSksYXJndW1lbnRzLmxlbmd0aDxlP1MucXVldWUodGhpc1swXSx0KTp2b2lkIDA9PT1uP3RoaXM6dGhpcy5lYWNoKGZ1bmN0aW9uKCl7dmFyIGU9Uy5xdWV1ZSh0aGlzLHQsbik7Uy5fcXVldWVIb29rcyh0aGlzLHQpLFwiZnhcIj09PXQmJlwiaW5wcm9ncmVzc1wiIT09ZVswXSYmUy5kZXF1ZXVlKHRoaXMsdCl9KX0sZGVxdWV1ZTpmdW5jdGlvbihlKXtyZXR1cm4gdGhpcy5lYWNoKGZ1bmN0aW9uKCl7Uy5kZXF1ZXVlKHRoaXMsZSl9KX0sY2xlYXJRdWV1ZTpmdW5jdGlvbihlKXtyZXR1cm4gdGhpcy5xdWV1ZShlfHxcImZ4XCIsW10pfSxwcm9taXNlOmZ1bmN0aW9uKGUsdCl7dmFyIG4scj0xLGk9Uy5EZWZlcnJlZCgpLG89dGhpcyxhPXRoaXMubGVuZ3RoLHM9ZnVuY3Rpb24oKXstLXJ8fGkucmVzb2x2ZVdpdGgobyxbb10pfTtcInN0cmluZ1wiIT10eXBlb2YgZSYmKHQ9ZSxlPXZvaWQgMCksZT1lfHxcImZ4XCI7d2hpbGUoYS0tKShuPVkuZ2V0KG9bYV0sZStcInF1ZXVlSG9va3NcIikpJiZuLmVtcHR5JiYocisrLG4uZW1wdHkuYWRkKHMpKTtyZXR1cm4gcygpLGkucHJvbWlzZSh0KX19KTt2YXIgZWU9L1srLV0/KD86XFxkKlxcLnwpXFxkKyg/OltlRV1bKy1dP1xcZCt8KS8uc291cmNlLHRlPW5ldyBSZWdFeHAoXCJeKD86KFsrLV0pPXwpKFwiK2VlK1wiKShbYS16JV0qKSRcIixcImlcIiksbmU9W1wiVG9wXCIsXCJSaWdodFwiLFwiQm90dG9tXCIsXCJMZWZ0XCJdLHJlPUUuZG9jdW1lbnRFbGVtZW50LGllPWZ1bmN0aW9uKGUpe3JldHVybiBTLmNvbnRhaW5zKGUub3duZXJEb2N1bWVudCxlKX0sb2U9e2NvbXBvc2VkOiEwfTtyZS5nZXRSb290Tm9kZSYmKGllPWZ1bmN0aW9uKGUpe3JldHVybiBTLmNvbnRhaW5zKGUub3duZXJEb2N1bWVudCxlKXx8ZS5nZXRSb290Tm9kZShvZSk9PT1lLm93bmVyRG9jdW1lbnR9KTt2YXIgYWU9ZnVuY3Rpb24oZSx0KXtyZXR1cm5cIm5vbmVcIj09PShlPXR8fGUpLnN0eWxlLmRpc3BsYXl8fFwiXCI9PT1lLnN0eWxlLmRpc3BsYXkmJmllKGUpJiZcIm5vbmVcIj09PVMuY3NzKGUsXCJkaXNwbGF5XCIpfTtmdW5jdGlvbiBzZShlLHQsbixyKXt2YXIgaSxvLGE9MjAscz1yP2Z1bmN0aW9uKCl7cmV0dXJuIHIuY3VyKCl9OmZ1bmN0aW9uKCl7cmV0dXJuIFMuY3NzKGUsdCxcIlwiKX0sdT1zKCksbD1uJiZuWzNdfHwoUy5jc3NOdW1iZXJbdF0/XCJcIjpcInB4XCIpLGM9ZS5ub2RlVHlwZSYmKFMuY3NzTnVtYmVyW3RdfHxcInB4XCIhPT1sJiYrdSkmJnRlLmV4ZWMoUy5jc3MoZSx0KSk7aWYoYyYmY1szXSE9PWwpe3UvPTIsbD1sfHxjWzNdLGM9K3V8fDE7d2hpbGUoYS0tKVMuc3R5bGUoZSx0LGMrbCksKDEtbykqKDEtKG89cygpL3V8fC41KSk8PTAmJihhPTApLGMvPW87Yyo9MixTLnN0eWxlKGUsdCxjK2wpLG49bnx8W119cmV0dXJuIG4mJihjPStjfHwrdXx8MCxpPW5bMV0/YysoblsxXSsxKSpuWzJdOituWzJdLHImJihyLnVuaXQ9bCxyLnN0YXJ0PWMsci5lbmQ9aSkpLGl9dmFyIHVlPXt9O2Z1bmN0aW9uIGxlKGUsdCl7Zm9yKHZhciBuLHIsaSxvLGEscyx1LGw9W10sYz0wLGY9ZS5sZW5ndGg7YzxmO2MrKykocj1lW2NdKS5zdHlsZSYmKG49ci5zdHlsZS5kaXNwbGF5LHQ/KFwibm9uZVwiPT09biYmKGxbY109WS5nZXQocixcImRpc3BsYXlcIil8fG51bGwsbFtjXXx8KHIuc3R5bGUuZGlzcGxheT1cIlwiKSksXCJcIj09PXIuc3R5bGUuZGlzcGxheSYmYWUocikmJihsW2NdPSh1PWE9bz12b2lkIDAsYT0oaT1yKS5vd25lckRvY3VtZW50LHM9aS5ub2RlTmFtZSwodT11ZVtzXSl8fChvPWEuYm9keS5hcHBlbmRDaGlsZChhLmNyZWF0ZUVsZW1lbnQocykpLHU9Uy5jc3MobyxcImRpc3BsYXlcIiksby5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKG8pLFwibm9uZVwiPT09dSYmKHU9XCJibG9ja1wiKSx1ZVtzXT11KSkpKTpcIm5vbmVcIiE9PW4mJihsW2NdPVwibm9uZVwiLFkuc2V0KHIsXCJkaXNwbGF5XCIsbikpKTtmb3IoYz0wO2M8ZjtjKyspbnVsbCE9bFtjXSYmKGVbY10uc3R5bGUuZGlzcGxheT1sW2NdKTtyZXR1cm4gZX1TLmZuLmV4dGVuZCh7c2hvdzpmdW5jdGlvbigpe3JldHVybiBsZSh0aGlzLCEwKX0saGlkZTpmdW5jdGlvbigpe3JldHVybiBsZSh0aGlzKX0sdG9nZ2xlOmZ1bmN0aW9uKGUpe3JldHVyblwiYm9vbGVhblwiPT10eXBlb2YgZT9lP3RoaXMuc2hvdygpOnRoaXMuaGlkZSgpOnRoaXMuZWFjaChmdW5jdGlvbigpe2FlKHRoaXMpP1ModGhpcykuc2hvdygpOlModGhpcykuaGlkZSgpfSl9fSk7dmFyIGNlLGZlLHBlPS9eKD86Y2hlY2tib3h8cmFkaW8pJC9pLGRlPS88KFthLXpdW15cXC9cXDA+XFx4MjBcXHRcXHJcXG5cXGZdKikvaSxoZT0vXiR8Xm1vZHVsZSR8XFwvKD86amF2YXxlY21hKXNjcmlwdC9pO2NlPUUuY3JlYXRlRG9jdW1lbnRGcmFnbWVudCgpLmFwcGVuZENoaWxkKEUuY3JlYXRlRWxlbWVudChcImRpdlwiKSksKGZlPUUuY3JlYXRlRWxlbWVudChcImlucHV0XCIpKS5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsXCJyYWRpb1wiKSxmZS5zZXRBdHRyaWJ1dGUoXCJjaGVja2VkXCIsXCJjaGVja2VkXCIpLGZlLnNldEF0dHJpYnV0ZShcIm5hbWVcIixcInRcIiksY2UuYXBwZW5kQ2hpbGQoZmUpLHkuY2hlY2tDbG9uZT1jZS5jbG9uZU5vZGUoITApLmNsb25lTm9kZSghMCkubGFzdENoaWxkLmNoZWNrZWQsY2UuaW5uZXJIVE1MPVwiPHRleHRhcmVhPng8L3RleHRhcmVhPlwiLHkubm9DbG9uZUNoZWNrZWQ9ISFjZS5jbG9uZU5vZGUoITApLmxhc3RDaGlsZC5kZWZhdWx0VmFsdWUsY2UuaW5uZXJIVE1MPVwiPG9wdGlvbj48L29wdGlvbj5cIix5Lm9wdGlvbj0hIWNlLmxhc3RDaGlsZDt2YXIgZ2U9e3RoZWFkOlsxLFwiPHRhYmxlPlwiLFwiPC90YWJsZT5cIl0sY29sOlsyLFwiPHRhYmxlPjxjb2xncm91cD5cIixcIjwvY29sZ3JvdXA+PC90YWJsZT5cIl0sdHI6WzIsXCI8dGFibGU+PHRib2R5PlwiLFwiPC90Ym9keT48L3RhYmxlPlwiXSx0ZDpbMyxcIjx0YWJsZT48dGJvZHk+PHRyPlwiLFwiPC90cj48L3Rib2R5PjwvdGFibGU+XCJdLF9kZWZhdWx0OlswLFwiXCIsXCJcIl19O2Z1bmN0aW9uIHZlKGUsdCl7dmFyIG47cmV0dXJuIG49XCJ1bmRlZmluZWRcIiE9dHlwZW9mIGUuZ2V0RWxlbWVudHNCeVRhZ05hbWU/ZS5nZXRFbGVtZW50c0J5VGFnTmFtZSh0fHxcIipcIik6XCJ1bmRlZmluZWRcIiE9dHlwZW9mIGUucXVlcnlTZWxlY3RvckFsbD9lLnF1ZXJ5U2VsZWN0b3JBbGwodHx8XCIqXCIpOltdLHZvaWQgMD09PXR8fHQmJkEoZSx0KT9TLm1lcmdlKFtlXSxuKTpufWZ1bmN0aW9uIHllKGUsdCl7Zm9yKHZhciBuPTAscj1lLmxlbmd0aDtuPHI7bisrKVkuc2V0KGVbbl0sXCJnbG9iYWxFdmFsXCIsIXR8fFkuZ2V0KHRbbl0sXCJnbG9iYWxFdmFsXCIpKX1nZS50Ym9keT1nZS50Zm9vdD1nZS5jb2xncm91cD1nZS5jYXB0aW9uPWdlLnRoZWFkLGdlLnRoPWdlLnRkLHkub3B0aW9ufHwoZ2Uub3B0Z3JvdXA9Z2Uub3B0aW9uPVsxLFwiPHNlbGVjdCBtdWx0aXBsZT0nbXVsdGlwbGUnPlwiLFwiPC9zZWxlY3Q+XCJdKTt2YXIgbWU9Lzx8JiM/XFx3KzsvO2Z1bmN0aW9uIHhlKGUsdCxuLHIsaSl7Zm9yKHZhciBvLGEscyx1LGwsYyxmPXQuY3JlYXRlRG9jdW1lbnRGcmFnbWVudCgpLHA9W10sZD0wLGg9ZS5sZW5ndGg7ZDxoO2QrKylpZigobz1lW2RdKXx8MD09PW8paWYoXCJvYmplY3RcIj09PXcobykpUy5tZXJnZShwLG8ubm9kZVR5cGU/W29dOm8pO2Vsc2UgaWYobWUudGVzdChvKSl7YT1hfHxmLmFwcGVuZENoaWxkKHQuY3JlYXRlRWxlbWVudChcImRpdlwiKSkscz0oZGUuZXhlYyhvKXx8W1wiXCIsXCJcIl0pWzFdLnRvTG93ZXJDYXNlKCksdT1nZVtzXXx8Z2UuX2RlZmF1bHQsYS5pbm5lckhUTUw9dVsxXStTLmh0bWxQcmVmaWx0ZXIobykrdVsyXSxjPXVbMF07d2hpbGUoYy0tKWE9YS5sYXN0Q2hpbGQ7Uy5tZXJnZShwLGEuY2hpbGROb2RlcyksKGE9Zi5maXJzdENoaWxkKS50ZXh0Q29udGVudD1cIlwifWVsc2UgcC5wdXNoKHQuY3JlYXRlVGV4dE5vZGUobykpO2YudGV4dENvbnRlbnQ9XCJcIixkPTA7d2hpbGUobz1wW2QrK10paWYociYmLTE8Uy5pbkFycmF5KG8scikpaSYmaS5wdXNoKG8pO2Vsc2UgaWYobD1pZShvKSxhPXZlKGYuYXBwZW5kQ2hpbGQobyksXCJzY3JpcHRcIiksbCYmeWUoYSksbil7Yz0wO3doaWxlKG89YVtjKytdKWhlLnRlc3Qoby50eXBlfHxcIlwiKSYmbi5wdXNoKG8pfXJldHVybiBmfXZhciBiZT0vXmtleS8sd2U9L14oPzptb3VzZXxwb2ludGVyfGNvbnRleHRtZW51fGRyYWd8ZHJvcCl8Y2xpY2svLFRlPS9eKFteLl0qKSg/OlxcLiguKyl8KS87ZnVuY3Rpb24gQ2UoKXtyZXR1cm4hMH1mdW5jdGlvbiBFZSgpe3JldHVybiExfWZ1bmN0aW9uIFNlKGUsdCl7cmV0dXJuIGU9PT1mdW5jdGlvbigpe3RyeXtyZXR1cm4gRS5hY3RpdmVFbGVtZW50fWNhdGNoKGUpe319KCk9PShcImZvY3VzXCI9PT10KX1mdW5jdGlvbiBrZShlLHQsbixyLGksbyl7dmFyIGEscztpZihcIm9iamVjdFwiPT10eXBlb2YgdCl7Zm9yKHMgaW5cInN0cmluZ1wiIT10eXBlb2YgbiYmKHI9cnx8bixuPXZvaWQgMCksdClrZShlLHMsbixyLHRbc10sbyk7cmV0dXJuIGV9aWYobnVsbD09ciYmbnVsbD09aT8oaT1uLHI9bj12b2lkIDApOm51bGw9PWkmJihcInN0cmluZ1wiPT10eXBlb2Ygbj8oaT1yLHI9dm9pZCAwKTooaT1yLHI9bixuPXZvaWQgMCkpLCExPT09aSlpPUVlO2Vsc2UgaWYoIWkpcmV0dXJuIGU7cmV0dXJuIDE9PT1vJiYoYT1pLChpPWZ1bmN0aW9uKGUpe3JldHVybiBTKCkub2ZmKGUpLGEuYXBwbHkodGhpcyxhcmd1bWVudHMpfSkuZ3VpZD1hLmd1aWR8fChhLmd1aWQ9Uy5ndWlkKyspKSxlLmVhY2goZnVuY3Rpb24oKXtTLmV2ZW50LmFkZCh0aGlzLHQsaSxyLG4pfSl9ZnVuY3Rpb24gQWUoZSxpLG8pe28/KFkuc2V0KGUsaSwhMSksUy5ldmVudC5hZGQoZSxpLHtuYW1lc3BhY2U6ITEsaGFuZGxlcjpmdW5jdGlvbihlKXt2YXIgdCxuLHI9WS5nZXQodGhpcyxpKTtpZigxJmUuaXNUcmlnZ2VyJiZ0aGlzW2ldKXtpZihyLmxlbmd0aCkoUy5ldmVudC5zcGVjaWFsW2ldfHx7fSkuZGVsZWdhdGVUeXBlJiZlLnN0b3BQcm9wYWdhdGlvbigpO2Vsc2UgaWYocj1zLmNhbGwoYXJndW1lbnRzKSxZLnNldCh0aGlzLGksciksdD1vKHRoaXMsaSksdGhpc1tpXSgpLHIhPT0obj1ZLmdldCh0aGlzLGkpKXx8dD9ZLnNldCh0aGlzLGksITEpOm49e30sciE9PW4pcmV0dXJuIGUuc3RvcEltbWVkaWF0ZVByb3BhZ2F0aW9uKCksZS5wcmV2ZW50RGVmYXVsdCgpLG4udmFsdWV9ZWxzZSByLmxlbmd0aCYmKFkuc2V0KHRoaXMsaSx7dmFsdWU6Uy5ldmVudC50cmlnZ2VyKFMuZXh0ZW5kKHJbMF0sUy5FdmVudC5wcm90b3R5cGUpLHIuc2xpY2UoMSksdGhpcyl9KSxlLnN0b3BJbW1lZGlhdGVQcm9wYWdhdGlvbigpKX19KSk6dm9pZCAwPT09WS5nZXQoZSxpKSYmUy5ldmVudC5hZGQoZSxpLENlKX1TLmV2ZW50PXtnbG9iYWw6e30sYWRkOmZ1bmN0aW9uKHQsZSxuLHIsaSl7dmFyIG8sYSxzLHUsbCxjLGYscCxkLGgsZyx2PVkuZ2V0KHQpO2lmKFYodCkpe24uaGFuZGxlciYmKG49KG89bikuaGFuZGxlcixpPW8uc2VsZWN0b3IpLGkmJlMuZmluZC5tYXRjaGVzU2VsZWN0b3IocmUsaSksbi5ndWlkfHwobi5ndWlkPVMuZ3VpZCsrKSwodT12LmV2ZW50cyl8fCh1PXYuZXZlbnRzPU9iamVjdC5jcmVhdGUobnVsbCkpLChhPXYuaGFuZGxlKXx8KGE9di5oYW5kbGU9ZnVuY3Rpb24oZSl7cmV0dXJuXCJ1bmRlZmluZWRcIiE9dHlwZW9mIFMmJlMuZXZlbnQudHJpZ2dlcmVkIT09ZS50eXBlP1MuZXZlbnQuZGlzcGF0Y2guYXBwbHkodCxhcmd1bWVudHMpOnZvaWQgMH0pLGw9KGU9KGV8fFwiXCIpLm1hdGNoKFApfHxbXCJcIl0pLmxlbmd0aDt3aGlsZShsLS0pZD1nPShzPVRlLmV4ZWMoZVtsXSl8fFtdKVsxXSxoPShzWzJdfHxcIlwiKS5zcGxpdChcIi5cIikuc29ydCgpLGQmJihmPVMuZXZlbnQuc3BlY2lhbFtkXXx8e30sZD0oaT9mLmRlbGVnYXRlVHlwZTpmLmJpbmRUeXBlKXx8ZCxmPVMuZXZlbnQuc3BlY2lhbFtkXXx8e30sYz1TLmV4dGVuZCh7dHlwZTpkLG9yaWdUeXBlOmcsZGF0YTpyLGhhbmRsZXI6bixndWlkOm4uZ3VpZCxzZWxlY3RvcjppLG5lZWRzQ29udGV4dDppJiZTLmV4cHIubWF0Y2gubmVlZHNDb250ZXh0LnRlc3QoaSksbmFtZXNwYWNlOmguam9pbihcIi5cIil9LG8pLChwPXVbZF0pfHwoKHA9dVtkXT1bXSkuZGVsZWdhdGVDb3VudD0wLGYuc2V0dXAmJiExIT09Zi5zZXR1cC5jYWxsKHQscixoLGEpfHx0LmFkZEV2ZW50TGlzdGVuZXImJnQuYWRkRXZlbnRMaXN0ZW5lcihkLGEpKSxmLmFkZCYmKGYuYWRkLmNhbGwodCxjKSxjLmhhbmRsZXIuZ3VpZHx8KGMuaGFuZGxlci5ndWlkPW4uZ3VpZCkpLGk/cC5zcGxpY2UocC5kZWxlZ2F0ZUNvdW50KyssMCxjKTpwLnB1c2goYyksUy5ldmVudC5nbG9iYWxbZF09ITApfX0scmVtb3ZlOmZ1bmN0aW9uKGUsdCxuLHIsaSl7dmFyIG8sYSxzLHUsbCxjLGYscCxkLGgsZyx2PVkuaGFzRGF0YShlKSYmWS5nZXQoZSk7aWYodiYmKHU9di5ldmVudHMpKXtsPSh0PSh0fHxcIlwiKS5tYXRjaChQKXx8W1wiXCJdKS5sZW5ndGg7d2hpbGUobC0tKWlmKGQ9Zz0ocz1UZS5leGVjKHRbbF0pfHxbXSlbMV0saD0oc1syXXx8XCJcIikuc3BsaXQoXCIuXCIpLnNvcnQoKSxkKXtmPVMuZXZlbnQuc3BlY2lhbFtkXXx8e30scD11W2Q9KHI/Zi5kZWxlZ2F0ZVR5cGU6Zi5iaW5kVHlwZSl8fGRdfHxbXSxzPXNbMl0mJm5ldyBSZWdFeHAoXCIoXnxcXFxcLilcIitoLmpvaW4oXCJcXFxcLig/Oi4qXFxcXC58KVwiKStcIihcXFxcLnwkKVwiKSxhPW89cC5sZW5ndGg7d2hpbGUoby0tKWM9cFtvXSwhaSYmZyE9PWMub3JpZ1R5cGV8fG4mJm4uZ3VpZCE9PWMuZ3VpZHx8cyYmIXMudGVzdChjLm5hbWVzcGFjZSl8fHImJnIhPT1jLnNlbGVjdG9yJiYoXCIqKlwiIT09cnx8IWMuc2VsZWN0b3IpfHwocC5zcGxpY2UobywxKSxjLnNlbGVjdG9yJiZwLmRlbGVnYXRlQ291bnQtLSxmLnJlbW92ZSYmZi5yZW1vdmUuY2FsbChlLGMpKTthJiYhcC5sZW5ndGgmJihmLnRlYXJkb3duJiYhMSE9PWYudGVhcmRvd24uY2FsbChlLGgsdi5oYW5kbGUpfHxTLnJlbW92ZUV2ZW50KGUsZCx2LmhhbmRsZSksZGVsZXRlIHVbZF0pfWVsc2UgZm9yKGQgaW4gdSlTLmV2ZW50LnJlbW92ZShlLGQrdFtsXSxuLHIsITApO1MuaXNFbXB0eU9iamVjdCh1KSYmWS5yZW1vdmUoZSxcImhhbmRsZSBldmVudHNcIil9fSxkaXNwYXRjaDpmdW5jdGlvbihlKXt2YXIgdCxuLHIsaSxvLGEscz1uZXcgQXJyYXkoYXJndW1lbnRzLmxlbmd0aCksdT1TLmV2ZW50LmZpeChlKSxsPShZLmdldCh0aGlzLFwiZXZlbnRzXCIpfHxPYmplY3QuY3JlYXRlKG51bGwpKVt1LnR5cGVdfHxbXSxjPVMuZXZlbnQuc3BlY2lhbFt1LnR5cGVdfHx7fTtmb3Ioc1swXT11LHQ9MTt0PGFyZ3VtZW50cy5sZW5ndGg7dCsrKXNbdF09YXJndW1lbnRzW3RdO2lmKHUuZGVsZWdhdGVUYXJnZXQ9dGhpcywhYy5wcmVEaXNwYXRjaHx8ITEhPT1jLnByZURpc3BhdGNoLmNhbGwodGhpcyx1KSl7YT1TLmV2ZW50LmhhbmRsZXJzLmNhbGwodGhpcyx1LGwpLHQ9MDt3aGlsZSgoaT1hW3QrK10pJiYhdS5pc1Byb3BhZ2F0aW9uU3RvcHBlZCgpKXt1LmN1cnJlbnRUYXJnZXQ9aS5lbGVtLG49MDt3aGlsZSgobz1pLmhhbmRsZXJzW24rK10pJiYhdS5pc0ltbWVkaWF0ZVByb3BhZ2F0aW9uU3RvcHBlZCgpKXUucm5hbWVzcGFjZSYmITEhPT1vLm5hbWVzcGFjZSYmIXUucm5hbWVzcGFjZS50ZXN0KG8ubmFtZXNwYWNlKXx8KHUuaGFuZGxlT2JqPW8sdS5kYXRhPW8uZGF0YSx2b2lkIDAhPT0ocj0oKFMuZXZlbnQuc3BlY2lhbFtvLm9yaWdUeXBlXXx8e30pLmhhbmRsZXx8by5oYW5kbGVyKS5hcHBseShpLmVsZW0scykpJiYhMT09PSh1LnJlc3VsdD1yKSYmKHUucHJldmVudERlZmF1bHQoKSx1LnN0b3BQcm9wYWdhdGlvbigpKSl9cmV0dXJuIGMucG9zdERpc3BhdGNoJiZjLnBvc3REaXNwYXRjaC5jYWxsKHRoaXMsdSksdS5yZXN1bHR9fSxoYW5kbGVyczpmdW5jdGlvbihlLHQpe3ZhciBuLHIsaSxvLGEscz1bXSx1PXQuZGVsZWdhdGVDb3VudCxsPWUudGFyZ2V0O2lmKHUmJmwubm9kZVR5cGUmJiEoXCJjbGlja1wiPT09ZS50eXBlJiYxPD1lLmJ1dHRvbikpZm9yKDtsIT09dGhpcztsPWwucGFyZW50Tm9kZXx8dGhpcylpZigxPT09bC5ub2RlVHlwZSYmKFwiY2xpY2tcIiE9PWUudHlwZXx8ITAhPT1sLmRpc2FibGVkKSl7Zm9yKG89W10sYT17fSxuPTA7bjx1O24rKyl2b2lkIDA9PT1hW2k9KHI9dFtuXSkuc2VsZWN0b3IrXCIgXCJdJiYoYVtpXT1yLm5lZWRzQ29udGV4dD8tMTxTKGksdGhpcykuaW5kZXgobCk6Uy5maW5kKGksdGhpcyxudWxsLFtsXSkubGVuZ3RoKSxhW2ldJiZvLnB1c2gocik7by5sZW5ndGgmJnMucHVzaCh7ZWxlbTpsLGhhbmRsZXJzOm99KX1yZXR1cm4gbD10aGlzLHU8dC5sZW5ndGgmJnMucHVzaCh7ZWxlbTpsLGhhbmRsZXJzOnQuc2xpY2UodSl9KSxzfSxhZGRQcm9wOmZ1bmN0aW9uKHQsZSl7T2JqZWN0LmRlZmluZVByb3BlcnR5KFMuRXZlbnQucHJvdG90eXBlLHQse2VudW1lcmFibGU6ITAsY29uZmlndXJhYmxlOiEwLGdldDptKGUpP2Z1bmN0aW9uKCl7aWYodGhpcy5vcmlnaW5hbEV2ZW50KXJldHVybiBlKHRoaXMub3JpZ2luYWxFdmVudCl9OmZ1bmN0aW9uKCl7aWYodGhpcy5vcmlnaW5hbEV2ZW50KXJldHVybiB0aGlzLm9yaWdpbmFsRXZlbnRbdF19LHNldDpmdW5jdGlvbihlKXtPYmplY3QuZGVmaW5lUHJvcGVydHkodGhpcyx0LHtlbnVtZXJhYmxlOiEwLGNvbmZpZ3VyYWJsZTohMCx3cml0YWJsZTohMCx2YWx1ZTplfSl9fSl9LGZpeDpmdW5jdGlvbihlKXtyZXR1cm4gZVtTLmV4cGFuZG9dP2U6bmV3IFMuRXZlbnQoZSl9LHNwZWNpYWw6e2xvYWQ6e25vQnViYmxlOiEwfSxjbGljazp7c2V0dXA6ZnVuY3Rpb24oZSl7dmFyIHQ9dGhpc3x8ZTtyZXR1cm4gcGUudGVzdCh0LnR5cGUpJiZ0LmNsaWNrJiZBKHQsXCJpbnB1dFwiKSYmQWUodCxcImNsaWNrXCIsQ2UpLCExfSx0cmlnZ2VyOmZ1bmN0aW9uKGUpe3ZhciB0PXRoaXN8fGU7cmV0dXJuIHBlLnRlc3QodC50eXBlKSYmdC5jbGljayYmQSh0LFwiaW5wdXRcIikmJkFlKHQsXCJjbGlja1wiKSwhMH0sX2RlZmF1bHQ6ZnVuY3Rpb24oZSl7dmFyIHQ9ZS50YXJnZXQ7cmV0dXJuIHBlLnRlc3QodC50eXBlKSYmdC5jbGljayYmQSh0LFwiaW5wdXRcIikmJlkuZ2V0KHQsXCJjbGlja1wiKXx8QSh0LFwiYVwiKX19LGJlZm9yZXVubG9hZDp7cG9zdERpc3BhdGNoOmZ1bmN0aW9uKGUpe3ZvaWQgMCE9PWUucmVzdWx0JiZlLm9yaWdpbmFsRXZlbnQmJihlLm9yaWdpbmFsRXZlbnQucmV0dXJuVmFsdWU9ZS5yZXN1bHQpfX19fSxTLnJlbW92ZUV2ZW50PWZ1bmN0aW9uKGUsdCxuKXtlLnJlbW92ZUV2ZW50TGlzdGVuZXImJmUucmVtb3ZlRXZlbnRMaXN0ZW5lcih0LG4pfSxTLkV2ZW50PWZ1bmN0aW9uKGUsdCl7aWYoISh0aGlzIGluc3RhbmNlb2YgUy5FdmVudCkpcmV0dXJuIG5ldyBTLkV2ZW50KGUsdCk7ZSYmZS50eXBlPyh0aGlzLm9yaWdpbmFsRXZlbnQ9ZSx0aGlzLnR5cGU9ZS50eXBlLHRoaXMuaXNEZWZhdWx0UHJldmVudGVkPWUuZGVmYXVsdFByZXZlbnRlZHx8dm9pZCAwPT09ZS5kZWZhdWx0UHJldmVudGVkJiYhMT09PWUucmV0dXJuVmFsdWU/Q2U6RWUsdGhpcy50YXJnZXQ9ZS50YXJnZXQmJjM9PT1lLnRhcmdldC5ub2RlVHlwZT9lLnRhcmdldC5wYXJlbnROb2RlOmUudGFyZ2V0LHRoaXMuY3VycmVudFRhcmdldD1lLmN1cnJlbnRUYXJnZXQsdGhpcy5yZWxhdGVkVGFyZ2V0PWUucmVsYXRlZFRhcmdldCk6dGhpcy50eXBlPWUsdCYmUy5leHRlbmQodGhpcyx0KSx0aGlzLnRpbWVTdGFtcD1lJiZlLnRpbWVTdGFtcHx8RGF0ZS5ub3coKSx0aGlzW1MuZXhwYW5kb109ITB9LFMuRXZlbnQucHJvdG90eXBlPXtjb25zdHJ1Y3RvcjpTLkV2ZW50LGlzRGVmYXVsdFByZXZlbnRlZDpFZSxpc1Byb3BhZ2F0aW9uU3RvcHBlZDpFZSxpc0ltbWVkaWF0ZVByb3BhZ2F0aW9uU3RvcHBlZDpFZSxpc1NpbXVsYXRlZDohMSxwcmV2ZW50RGVmYXVsdDpmdW5jdGlvbigpe3ZhciBlPXRoaXMub3JpZ2luYWxFdmVudDt0aGlzLmlzRGVmYXVsdFByZXZlbnRlZD1DZSxlJiYhdGhpcy5pc1NpbXVsYXRlZCYmZS5wcmV2ZW50RGVmYXVsdCgpfSxzdG9wUHJvcGFnYXRpb246ZnVuY3Rpb24oKXt2YXIgZT10aGlzLm9yaWdpbmFsRXZlbnQ7dGhpcy5pc1Byb3BhZ2F0aW9uU3RvcHBlZD1DZSxlJiYhdGhpcy5pc1NpbXVsYXRlZCYmZS5zdG9wUHJvcGFnYXRpb24oKX0sc3RvcEltbWVkaWF0ZVByb3BhZ2F0aW9uOmZ1bmN0aW9uKCl7dmFyIGU9dGhpcy5vcmlnaW5hbEV2ZW50O3RoaXMuaXNJbW1lZGlhdGVQcm9wYWdhdGlvblN0b3BwZWQ9Q2UsZSYmIXRoaXMuaXNTaW11bGF0ZWQmJmUuc3RvcEltbWVkaWF0ZVByb3BhZ2F0aW9uKCksdGhpcy5zdG9wUHJvcGFnYXRpb24oKX19LFMuZWFjaCh7YWx0S2V5OiEwLGJ1YmJsZXM6ITAsY2FuY2VsYWJsZTohMCxjaGFuZ2VkVG91Y2hlczohMCxjdHJsS2V5OiEwLGRldGFpbDohMCxldmVudFBoYXNlOiEwLG1ldGFLZXk6ITAscGFnZVg6ITAscGFnZVk6ITAsc2hpZnRLZXk6ITAsdmlldzohMCxcImNoYXJcIjohMCxjb2RlOiEwLGNoYXJDb2RlOiEwLGtleTohMCxrZXlDb2RlOiEwLGJ1dHRvbjohMCxidXR0b25zOiEwLGNsaWVudFg6ITAsY2xpZW50WTohMCxvZmZzZXRYOiEwLG9mZnNldFk6ITAscG9pbnRlcklkOiEwLHBvaW50ZXJUeXBlOiEwLHNjcmVlblg6ITAsc2NyZWVuWTohMCx0YXJnZXRUb3VjaGVzOiEwLHRvRWxlbWVudDohMCx0b3VjaGVzOiEwLHdoaWNoOmZ1bmN0aW9uKGUpe3ZhciB0PWUuYnV0dG9uO3JldHVybiBudWxsPT1lLndoaWNoJiZiZS50ZXN0KGUudHlwZSk/bnVsbCE9ZS5jaGFyQ29kZT9lLmNoYXJDb2RlOmUua2V5Q29kZTohZS53aGljaCYmdm9pZCAwIT09dCYmd2UudGVzdChlLnR5cGUpPzEmdD8xOjImdD8zOjQmdD8yOjA6ZS53aGljaH19LFMuZXZlbnQuYWRkUHJvcCksUy5lYWNoKHtmb2N1czpcImZvY3VzaW5cIixibHVyOlwiZm9jdXNvdXRcIn0sZnVuY3Rpb24oZSx0KXtTLmV2ZW50LnNwZWNpYWxbZV09e3NldHVwOmZ1bmN0aW9uKCl7cmV0dXJuIEFlKHRoaXMsZSxTZSksITF9LHRyaWdnZXI6ZnVuY3Rpb24oKXtyZXR1cm4gQWUodGhpcyxlKSwhMH0sZGVsZWdhdGVUeXBlOnR9fSksUy5lYWNoKHttb3VzZWVudGVyOlwibW91c2VvdmVyXCIsbW91c2VsZWF2ZTpcIm1vdXNlb3V0XCIscG9pbnRlcmVudGVyOlwicG9pbnRlcm92ZXJcIixwb2ludGVybGVhdmU6XCJwb2ludGVyb3V0XCJ9LGZ1bmN0aW9uKGUsaSl7Uy5ldmVudC5zcGVjaWFsW2VdPXtkZWxlZ2F0ZVR5cGU6aSxiaW5kVHlwZTppLGhhbmRsZTpmdW5jdGlvbihlKXt2YXIgdCxuPWUucmVsYXRlZFRhcmdldCxyPWUuaGFuZGxlT2JqO3JldHVybiBuJiYobj09PXRoaXN8fFMuY29udGFpbnModGhpcyxuKSl8fChlLnR5cGU9ci5vcmlnVHlwZSx0PXIuaGFuZGxlci5hcHBseSh0aGlzLGFyZ3VtZW50cyksZS50eXBlPWkpLHR9fX0pLFMuZm4uZXh0ZW5kKHtvbjpmdW5jdGlvbihlLHQsbixyKXtyZXR1cm4ga2UodGhpcyxlLHQsbixyKX0sb25lOmZ1bmN0aW9uKGUsdCxuLHIpe3JldHVybiBrZSh0aGlzLGUsdCxuLHIsMSl9LG9mZjpmdW5jdGlvbihlLHQsbil7dmFyIHIsaTtpZihlJiZlLnByZXZlbnREZWZhdWx0JiZlLmhhbmRsZU9iailyZXR1cm4gcj1lLmhhbmRsZU9iaixTKGUuZGVsZWdhdGVUYXJnZXQpLm9mZihyLm5hbWVzcGFjZT9yLm9yaWdUeXBlK1wiLlwiK3IubmFtZXNwYWNlOnIub3JpZ1R5cGUsci5zZWxlY3RvcixyLmhhbmRsZXIpLHRoaXM7aWYoXCJvYmplY3RcIj09dHlwZW9mIGUpe2ZvcihpIGluIGUpdGhpcy5vZmYoaSx0LGVbaV0pO3JldHVybiB0aGlzfXJldHVybiExIT09dCYmXCJmdW5jdGlvblwiIT10eXBlb2YgdHx8KG49dCx0PXZvaWQgMCksITE9PT1uJiYobj1FZSksdGhpcy5lYWNoKGZ1bmN0aW9uKCl7Uy5ldmVudC5yZW1vdmUodGhpcyxlLG4sdCl9KX19KTt2YXIgTmU9LzxzY3JpcHR8PHN0eWxlfDxsaW5rL2ksRGU9L2NoZWNrZWRcXHMqKD86W149XXw9XFxzKi5jaGVja2VkLikvaSxqZT0vXlxccyo8ISg/OlxcW0NEQVRBXFxbfC0tKXwoPzpcXF1cXF18LS0pPlxccyokL2c7ZnVuY3Rpb24gcWUoZSx0KXtyZXR1cm4gQShlLFwidGFibGVcIikmJkEoMTEhPT10Lm5vZGVUeXBlP3Q6dC5maXJzdENoaWxkLFwidHJcIikmJlMoZSkuY2hpbGRyZW4oXCJ0Ym9keVwiKVswXXx8ZX1mdW5jdGlvbiBMZShlKXtyZXR1cm4gZS50eXBlPShudWxsIT09ZS5nZXRBdHRyaWJ1dGUoXCJ0eXBlXCIpKStcIi9cIitlLnR5cGUsZX1mdW5jdGlvbiBIZShlKXtyZXR1cm5cInRydWUvXCI9PT0oZS50eXBlfHxcIlwiKS5zbGljZSgwLDUpP2UudHlwZT1lLnR5cGUuc2xpY2UoNSk6ZS5yZW1vdmVBdHRyaWJ1dGUoXCJ0eXBlXCIpLGV9ZnVuY3Rpb24gT2UoZSx0KXt2YXIgbixyLGksbyxhLHM7aWYoMT09PXQubm9kZVR5cGUpe2lmKFkuaGFzRGF0YShlKSYmKHM9WS5nZXQoZSkuZXZlbnRzKSlmb3IoaSBpbiBZLnJlbW92ZSh0LFwiaGFuZGxlIGV2ZW50c1wiKSxzKWZvcihuPTAscj1zW2ldLmxlbmd0aDtuPHI7bisrKVMuZXZlbnQuYWRkKHQsaSxzW2ldW25dKTtRLmhhc0RhdGEoZSkmJihvPVEuYWNjZXNzKGUpLGE9Uy5leHRlbmQoe30sbyksUS5zZXQodCxhKSl9fWZ1bmN0aW9uIFBlKG4scixpLG8pe3I9ZyhyKTt2YXIgZSx0LGEscyx1LGwsYz0wLGY9bi5sZW5ndGgscD1mLTEsZD1yWzBdLGg9bShkKTtpZihofHwxPGYmJlwic3RyaW5nXCI9PXR5cGVvZiBkJiYheS5jaGVja0Nsb25lJiZEZS50ZXN0KGQpKXJldHVybiBuLmVhY2goZnVuY3Rpb24oZSl7dmFyIHQ9bi5lcShlKTtoJiYoclswXT1kLmNhbGwodGhpcyxlLHQuaHRtbCgpKSksUGUodCxyLGksbyl9KTtpZihmJiYodD0oZT14ZShyLG5bMF0ub3duZXJEb2N1bWVudCwhMSxuLG8pKS5maXJzdENoaWxkLDE9PT1lLmNoaWxkTm9kZXMubGVuZ3RoJiYoZT10KSx0fHxvKSl7Zm9yKHM9KGE9Uy5tYXAodmUoZSxcInNjcmlwdFwiKSxMZSkpLmxlbmd0aDtjPGY7YysrKXU9ZSxjIT09cCYmKHU9Uy5jbG9uZSh1LCEwLCEwKSxzJiZTLm1lcmdlKGEsdmUodSxcInNjcmlwdFwiKSkpLGkuY2FsbChuW2NdLHUsYyk7aWYocylmb3IobD1hW2EubGVuZ3RoLTFdLm93bmVyRG9jdW1lbnQsUy5tYXAoYSxIZSksYz0wO2M8cztjKyspdT1hW2NdLGhlLnRlc3QodS50eXBlfHxcIlwiKSYmIVkuYWNjZXNzKHUsXCJnbG9iYWxFdmFsXCIpJiZTLmNvbnRhaW5zKGwsdSkmJih1LnNyYyYmXCJtb2R1bGVcIiE9PSh1LnR5cGV8fFwiXCIpLnRvTG93ZXJDYXNlKCk/Uy5fZXZhbFVybCYmIXUubm9Nb2R1bGUmJlMuX2V2YWxVcmwodS5zcmMse25vbmNlOnUubm9uY2V8fHUuZ2V0QXR0cmlidXRlKFwibm9uY2VcIil9LGwpOmIodS50ZXh0Q29udGVudC5yZXBsYWNlKGplLFwiXCIpLHUsbCkpfXJldHVybiBufWZ1bmN0aW9uIFJlKGUsdCxuKXtmb3IodmFyIHIsaT10P1MuZmlsdGVyKHQsZSk6ZSxvPTA7bnVsbCE9KHI9aVtvXSk7bysrKW58fDEhPT1yLm5vZGVUeXBlfHxTLmNsZWFuRGF0YSh2ZShyKSksci5wYXJlbnROb2RlJiYobiYmaWUocikmJnllKHZlKHIsXCJzY3JpcHRcIikpLHIucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChyKSk7cmV0dXJuIGV9Uy5leHRlbmQoe2h0bWxQcmVmaWx0ZXI6ZnVuY3Rpb24oZSl7cmV0dXJuIGV9LGNsb25lOmZ1bmN0aW9uKGUsdCxuKXt2YXIgcixpLG8sYSxzLHUsbCxjPWUuY2xvbmVOb2RlKCEwKSxmPWllKGUpO2lmKCEoeS5ub0Nsb25lQ2hlY2tlZHx8MSE9PWUubm9kZVR5cGUmJjExIT09ZS5ub2RlVHlwZXx8Uy5pc1hNTERvYyhlKSkpZm9yKGE9dmUoYykscj0wLGk9KG89dmUoZSkpLmxlbmd0aDtyPGk7cisrKXM9b1tyXSx1PWFbcl0sdm9pZCAwLFwiaW5wdXRcIj09PShsPXUubm9kZU5hbWUudG9Mb3dlckNhc2UoKSkmJnBlLnRlc3Qocy50eXBlKT91LmNoZWNrZWQ9cy5jaGVja2VkOlwiaW5wdXRcIiE9PWwmJlwidGV4dGFyZWFcIiE9PWx8fCh1LmRlZmF1bHRWYWx1ZT1zLmRlZmF1bHRWYWx1ZSk7aWYodClpZihuKWZvcihvPW98fHZlKGUpLGE9YXx8dmUoYykscj0wLGk9by5sZW5ndGg7cjxpO3IrKylPZShvW3JdLGFbcl0pO2Vsc2UgT2UoZSxjKTtyZXR1cm4gMDwoYT12ZShjLFwic2NyaXB0XCIpKS5sZW5ndGgmJnllKGEsIWYmJnZlKGUsXCJzY3JpcHRcIikpLGN9LGNsZWFuRGF0YTpmdW5jdGlvbihlKXtmb3IodmFyIHQsbixyLGk9Uy5ldmVudC5zcGVjaWFsLG89MDt2b2lkIDAhPT0obj1lW29dKTtvKyspaWYoVihuKSl7aWYodD1uW1kuZXhwYW5kb10pe2lmKHQuZXZlbnRzKWZvcihyIGluIHQuZXZlbnRzKWlbcl0/Uy5ldmVudC5yZW1vdmUobixyKTpTLnJlbW92ZUV2ZW50KG4scix0LmhhbmRsZSk7bltZLmV4cGFuZG9dPXZvaWQgMH1uW1EuZXhwYW5kb10mJihuW1EuZXhwYW5kb109dm9pZCAwKX19fSksUy5mbi5leHRlbmQoe2RldGFjaDpmdW5jdGlvbihlKXtyZXR1cm4gUmUodGhpcyxlLCEwKX0scmVtb3ZlOmZ1bmN0aW9uKGUpe3JldHVybiBSZSh0aGlzLGUpfSx0ZXh0OmZ1bmN0aW9uKGUpe3JldHVybiAkKHRoaXMsZnVuY3Rpb24oZSl7cmV0dXJuIHZvaWQgMD09PWU/Uy50ZXh0KHRoaXMpOnRoaXMuZW1wdHkoKS5lYWNoKGZ1bmN0aW9uKCl7MSE9PXRoaXMubm9kZVR5cGUmJjExIT09dGhpcy5ub2RlVHlwZSYmOSE9PXRoaXMubm9kZVR5cGV8fCh0aGlzLnRleHRDb250ZW50PWUpfSl9LG51bGwsZSxhcmd1bWVudHMubGVuZ3RoKX0sYXBwZW5kOmZ1bmN0aW9uKCl7cmV0dXJuIFBlKHRoaXMsYXJndW1lbnRzLGZ1bmN0aW9uKGUpezEhPT10aGlzLm5vZGVUeXBlJiYxMSE9PXRoaXMubm9kZVR5cGUmJjkhPT10aGlzLm5vZGVUeXBlfHxxZSh0aGlzLGUpLmFwcGVuZENoaWxkKGUpfSl9LHByZXBlbmQ6ZnVuY3Rpb24oKXtyZXR1cm4gUGUodGhpcyxhcmd1bWVudHMsZnVuY3Rpb24oZSl7aWYoMT09PXRoaXMubm9kZVR5cGV8fDExPT09dGhpcy5ub2RlVHlwZXx8OT09PXRoaXMubm9kZVR5cGUpe3ZhciB0PXFlKHRoaXMsZSk7dC5pbnNlcnRCZWZvcmUoZSx0LmZpcnN0Q2hpbGQpfX0pfSxiZWZvcmU6ZnVuY3Rpb24oKXtyZXR1cm4gUGUodGhpcyxhcmd1bWVudHMsZnVuY3Rpb24oZSl7dGhpcy5wYXJlbnROb2RlJiZ0aGlzLnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKGUsdGhpcyl9KX0sYWZ0ZXI6ZnVuY3Rpb24oKXtyZXR1cm4gUGUodGhpcyxhcmd1bWVudHMsZnVuY3Rpb24oZSl7dGhpcy5wYXJlbnROb2RlJiZ0aGlzLnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKGUsdGhpcy5uZXh0U2libGluZyl9KX0sZW1wdHk6ZnVuY3Rpb24oKXtmb3IodmFyIGUsdD0wO251bGwhPShlPXRoaXNbdF0pO3QrKykxPT09ZS5ub2RlVHlwZSYmKFMuY2xlYW5EYXRhKHZlKGUsITEpKSxlLnRleHRDb250ZW50PVwiXCIpO3JldHVybiB0aGlzfSxjbG9uZTpmdW5jdGlvbihlLHQpe3JldHVybiBlPW51bGwhPWUmJmUsdD1udWxsPT10P2U6dCx0aGlzLm1hcChmdW5jdGlvbigpe3JldHVybiBTLmNsb25lKHRoaXMsZSx0KX0pfSxodG1sOmZ1bmN0aW9uKGUpe3JldHVybiAkKHRoaXMsZnVuY3Rpb24oZSl7dmFyIHQ9dGhpc1swXXx8e30sbj0wLHI9dGhpcy5sZW5ndGg7aWYodm9pZCAwPT09ZSYmMT09PXQubm9kZVR5cGUpcmV0dXJuIHQuaW5uZXJIVE1MO2lmKFwic3RyaW5nXCI9PXR5cGVvZiBlJiYhTmUudGVzdChlKSYmIWdlWyhkZS5leGVjKGUpfHxbXCJcIixcIlwiXSlbMV0udG9Mb3dlckNhc2UoKV0pe2U9Uy5odG1sUHJlZmlsdGVyKGUpO3RyeXtmb3IoO248cjtuKyspMT09PSh0PXRoaXNbbl18fHt9KS5ub2RlVHlwZSYmKFMuY2xlYW5EYXRhKHZlKHQsITEpKSx0LmlubmVySFRNTD1lKTt0PTB9Y2F0Y2goZSl7fX10JiZ0aGlzLmVtcHR5KCkuYXBwZW5kKGUpfSxudWxsLGUsYXJndW1lbnRzLmxlbmd0aCl9LHJlcGxhY2VXaXRoOmZ1bmN0aW9uKCl7dmFyIG49W107cmV0dXJuIFBlKHRoaXMsYXJndW1lbnRzLGZ1bmN0aW9uKGUpe3ZhciB0PXRoaXMucGFyZW50Tm9kZTtTLmluQXJyYXkodGhpcyxuKTwwJiYoUy5jbGVhbkRhdGEodmUodGhpcykpLHQmJnQucmVwbGFjZUNoaWxkKGUsdGhpcykpfSxuKX19KSxTLmVhY2goe2FwcGVuZFRvOlwiYXBwZW5kXCIscHJlcGVuZFRvOlwicHJlcGVuZFwiLGluc2VydEJlZm9yZTpcImJlZm9yZVwiLGluc2VydEFmdGVyOlwiYWZ0ZXJcIixyZXBsYWNlQWxsOlwicmVwbGFjZVdpdGhcIn0sZnVuY3Rpb24oZSxhKXtTLmZuW2VdPWZ1bmN0aW9uKGUpe2Zvcih2YXIgdCxuPVtdLHI9UyhlKSxpPXIubGVuZ3RoLTEsbz0wO288PWk7bysrKXQ9bz09PWk/dGhpczp0aGlzLmNsb25lKCEwKSxTKHJbb10pW2FdKHQpLHUuYXBwbHkobix0LmdldCgpKTtyZXR1cm4gdGhpcy5wdXNoU3RhY2sobil9fSk7dmFyIE1lPW5ldyBSZWdFeHAoXCJeKFwiK2VlK1wiKSg/IXB4KVthLXolXSskXCIsXCJpXCIpLEllPWZ1bmN0aW9uKGUpe3ZhciB0PWUub3duZXJEb2N1bWVudC5kZWZhdWx0VmlldztyZXR1cm4gdCYmdC5vcGVuZXJ8fCh0PUMpLHQuZ2V0Q29tcHV0ZWRTdHlsZShlKX0sV2U9ZnVuY3Rpb24oZSx0LG4pe3ZhciByLGksbz17fTtmb3IoaSBpbiB0KW9baV09ZS5zdHlsZVtpXSxlLnN0eWxlW2ldPXRbaV07Zm9yKGkgaW4gcj1uLmNhbGwoZSksdCllLnN0eWxlW2ldPW9baV07cmV0dXJuIHJ9LEZlPW5ldyBSZWdFeHAobmUuam9pbihcInxcIiksXCJpXCIpO2Z1bmN0aW9uIEJlKGUsdCxuKXt2YXIgcixpLG8sYSxzPWUuc3R5bGU7cmV0dXJuKG49bnx8SWUoZSkpJiYoXCJcIiE9PShhPW4uZ2V0UHJvcGVydHlWYWx1ZSh0KXx8blt0XSl8fGllKGUpfHwoYT1TLnN0eWxlKGUsdCkpLCF5LnBpeGVsQm94U3R5bGVzKCkmJk1lLnRlc3QoYSkmJkZlLnRlc3QodCkmJihyPXMud2lkdGgsaT1zLm1pbldpZHRoLG89cy5tYXhXaWR0aCxzLm1pbldpZHRoPXMubWF4V2lkdGg9cy53aWR0aD1hLGE9bi53aWR0aCxzLndpZHRoPXIscy5taW5XaWR0aD1pLHMubWF4V2lkdGg9bykpLHZvaWQgMCE9PWE/YStcIlwiOmF9ZnVuY3Rpb24gJGUoZSx0KXtyZXR1cm57Z2V0OmZ1bmN0aW9uKCl7aWYoIWUoKSlyZXR1cm4odGhpcy5nZXQ9dCkuYXBwbHkodGhpcyxhcmd1bWVudHMpO2RlbGV0ZSB0aGlzLmdldH19fSFmdW5jdGlvbigpe2Z1bmN0aW9uIGUoKXtpZihsKXt1LnN0eWxlLmNzc1RleHQ9XCJwb3NpdGlvbjphYnNvbHV0ZTtsZWZ0Oi0xMTExMXB4O3dpZHRoOjYwcHg7bWFyZ2luLXRvcDoxcHg7cGFkZGluZzowO2JvcmRlcjowXCIsbC5zdHlsZS5jc3NUZXh0PVwicG9zaXRpb246cmVsYXRpdmU7ZGlzcGxheTpibG9jaztib3gtc2l6aW5nOmJvcmRlci1ib3g7b3ZlcmZsb3c6c2Nyb2xsO21hcmdpbjphdXRvO2JvcmRlcjoxcHg7cGFkZGluZzoxcHg7d2lkdGg6NjAlO3RvcDoxJVwiLHJlLmFwcGVuZENoaWxkKHUpLmFwcGVuZENoaWxkKGwpO3ZhciBlPUMuZ2V0Q29tcHV0ZWRTdHlsZShsKTtuPVwiMSVcIiE9PWUudG9wLHM9MTI9PT10KGUubWFyZ2luTGVmdCksbC5zdHlsZS5yaWdodD1cIjYwJVwiLG89MzY9PT10KGUucmlnaHQpLHI9MzY9PT10KGUud2lkdGgpLGwuc3R5bGUucG9zaXRpb249XCJhYnNvbHV0ZVwiLGk9MTI9PT10KGwub2Zmc2V0V2lkdGgvMykscmUucmVtb3ZlQ2hpbGQodSksbD1udWxsfX1mdW5jdGlvbiB0KGUpe3JldHVybiBNYXRoLnJvdW5kKHBhcnNlRmxvYXQoZSkpfXZhciBuLHIsaSxvLGEscyx1PUUuY3JlYXRlRWxlbWVudChcImRpdlwiKSxsPUUuY3JlYXRlRWxlbWVudChcImRpdlwiKTtsLnN0eWxlJiYobC5zdHlsZS5iYWNrZ3JvdW5kQ2xpcD1cImNvbnRlbnQtYm94XCIsbC5jbG9uZU5vZGUoITApLnN0eWxlLmJhY2tncm91bmRDbGlwPVwiXCIseS5jbGVhckNsb25lU3R5bGU9XCJjb250ZW50LWJveFwiPT09bC5zdHlsZS5iYWNrZ3JvdW5kQ2xpcCxTLmV4dGVuZCh5LHtib3hTaXppbmdSZWxpYWJsZTpmdW5jdGlvbigpe3JldHVybiBlKCkscn0scGl4ZWxCb3hTdHlsZXM6ZnVuY3Rpb24oKXtyZXR1cm4gZSgpLG99LHBpeGVsUG9zaXRpb246ZnVuY3Rpb24oKXtyZXR1cm4gZSgpLG59LHJlbGlhYmxlTWFyZ2luTGVmdDpmdW5jdGlvbigpe3JldHVybiBlKCksc30sc2Nyb2xsYm94U2l6ZTpmdW5jdGlvbigpe3JldHVybiBlKCksaX0scmVsaWFibGVUckRpbWVuc2lvbnM6ZnVuY3Rpb24oKXt2YXIgZSx0LG4scjtyZXR1cm4gbnVsbD09YSYmKGU9RS5jcmVhdGVFbGVtZW50KFwidGFibGVcIiksdD1FLmNyZWF0ZUVsZW1lbnQoXCJ0clwiKSxuPUUuY3JlYXRlRWxlbWVudChcImRpdlwiKSxlLnN0eWxlLmNzc1RleHQ9XCJwb3NpdGlvbjphYnNvbHV0ZTtsZWZ0Oi0xMTExMXB4XCIsdC5zdHlsZS5oZWlnaHQ9XCIxcHhcIixuLnN0eWxlLmhlaWdodD1cIjlweFwiLHJlLmFwcGVuZENoaWxkKGUpLmFwcGVuZENoaWxkKHQpLmFwcGVuZENoaWxkKG4pLHI9Qy5nZXRDb21wdXRlZFN0eWxlKHQpLGE9MzxwYXJzZUludChyLmhlaWdodCkscmUucmVtb3ZlQ2hpbGQoZSkpLGF9fSkpfSgpO3ZhciBfZT1bXCJXZWJraXRcIixcIk1velwiLFwibXNcIl0semU9RS5jcmVhdGVFbGVtZW50KFwiZGl2XCIpLnN0eWxlLFVlPXt9O2Z1bmN0aW9uIFhlKGUpe3ZhciB0PVMuY3NzUHJvcHNbZV18fFVlW2VdO3JldHVybiB0fHwoZSBpbiB6ZT9lOlVlW2VdPWZ1bmN0aW9uKGUpe3ZhciB0PWVbMF0udG9VcHBlckNhc2UoKStlLnNsaWNlKDEpLG49X2UubGVuZ3RoO3doaWxlKG4tLSlpZigoZT1fZVtuXSt0KWluIHplKXJldHVybiBlfShlKXx8ZSl9dmFyIFZlPS9eKG5vbmV8dGFibGUoPyEtY1tlYV0pLispLyxHZT0vXi0tLyxZZT17cG9zaXRpb246XCJhYnNvbHV0ZVwiLHZpc2liaWxpdHk6XCJoaWRkZW5cIixkaXNwbGF5OlwiYmxvY2tcIn0sUWU9e2xldHRlclNwYWNpbmc6XCIwXCIsZm9udFdlaWdodDpcIjQwMFwifTtmdW5jdGlvbiBKZShlLHQsbil7dmFyIHI9dGUuZXhlYyh0KTtyZXR1cm4gcj9NYXRoLm1heCgwLHJbMl0tKG58fDApKSsoclszXXx8XCJweFwiKTp0fWZ1bmN0aW9uIEtlKGUsdCxuLHIsaSxvKXt2YXIgYT1cIndpZHRoXCI9PT10PzE6MCxzPTAsdT0wO2lmKG49PT0ocj9cImJvcmRlclwiOlwiY29udGVudFwiKSlyZXR1cm4gMDtmb3IoO2E8NDthKz0yKVwibWFyZ2luXCI9PT1uJiYodSs9Uy5jc3MoZSxuK25lW2FdLCEwLGkpKSxyPyhcImNvbnRlbnRcIj09PW4mJih1LT1TLmNzcyhlLFwicGFkZGluZ1wiK25lW2FdLCEwLGkpKSxcIm1hcmdpblwiIT09biYmKHUtPVMuY3NzKGUsXCJib3JkZXJcIituZVthXStcIldpZHRoXCIsITAsaSkpKToodSs9Uy5jc3MoZSxcInBhZGRpbmdcIituZVthXSwhMCxpKSxcInBhZGRpbmdcIiE9PW4/dSs9Uy5jc3MoZSxcImJvcmRlclwiK25lW2FdK1wiV2lkdGhcIiwhMCxpKTpzKz1TLmNzcyhlLFwiYm9yZGVyXCIrbmVbYV0rXCJXaWR0aFwiLCEwLGkpKTtyZXR1cm4hciYmMDw9byYmKHUrPU1hdGgubWF4KDAsTWF0aC5jZWlsKGVbXCJvZmZzZXRcIit0WzBdLnRvVXBwZXJDYXNlKCkrdC5zbGljZSgxKV0tby11LXMtLjUpKXx8MCksdX1mdW5jdGlvbiBaZShlLHQsbil7dmFyIHI9SWUoZSksaT0oIXkuYm94U2l6aW5nUmVsaWFibGUoKXx8bikmJlwiYm9yZGVyLWJveFwiPT09Uy5jc3MoZSxcImJveFNpemluZ1wiLCExLHIpLG89aSxhPUJlKGUsdCxyKSxzPVwib2Zmc2V0XCIrdFswXS50b1VwcGVyQ2FzZSgpK3Quc2xpY2UoMSk7aWYoTWUudGVzdChhKSl7aWYoIW4pcmV0dXJuIGE7YT1cImF1dG9cIn1yZXR1cm4oIXkuYm94U2l6aW5nUmVsaWFibGUoKSYmaXx8IXkucmVsaWFibGVUckRpbWVuc2lvbnMoKSYmQShlLFwidHJcIil8fFwiYXV0b1wiPT09YXx8IXBhcnNlRmxvYXQoYSkmJlwiaW5saW5lXCI9PT1TLmNzcyhlLFwiZGlzcGxheVwiLCExLHIpKSYmZS5nZXRDbGllbnRSZWN0cygpLmxlbmd0aCYmKGk9XCJib3JkZXItYm94XCI9PT1TLmNzcyhlLFwiYm94U2l6aW5nXCIsITEsciksKG89cyBpbiBlKSYmKGE9ZVtzXSkpLChhPXBhcnNlRmxvYXQoYSl8fDApK0tlKGUsdCxufHwoaT9cImJvcmRlclwiOlwiY29udGVudFwiKSxvLHIsYSkrXCJweFwifWZ1bmN0aW9uIGV0KGUsdCxuLHIsaSl7cmV0dXJuIG5ldyBldC5wcm90b3R5cGUuaW5pdChlLHQsbixyLGkpfVMuZXh0ZW5kKHtjc3NIb29rczp7b3BhY2l0eTp7Z2V0OmZ1bmN0aW9uKGUsdCl7aWYodCl7dmFyIG49QmUoZSxcIm9wYWNpdHlcIik7cmV0dXJuXCJcIj09PW4/XCIxXCI6bn19fX0sY3NzTnVtYmVyOnthbmltYXRpb25JdGVyYXRpb25Db3VudDohMCxjb2x1bW5Db3VudDohMCxmaWxsT3BhY2l0eTohMCxmbGV4R3JvdzohMCxmbGV4U2hyaW5rOiEwLGZvbnRXZWlnaHQ6ITAsZ3JpZEFyZWE6ITAsZ3JpZENvbHVtbjohMCxncmlkQ29sdW1uRW5kOiEwLGdyaWRDb2x1bW5TdGFydDohMCxncmlkUm93OiEwLGdyaWRSb3dFbmQ6ITAsZ3JpZFJvd1N0YXJ0OiEwLGxpbmVIZWlnaHQ6ITAsb3BhY2l0eTohMCxvcmRlcjohMCxvcnBoYW5zOiEwLHdpZG93czohMCx6SW5kZXg6ITAsem9vbTohMH0sY3NzUHJvcHM6e30sc3R5bGU6ZnVuY3Rpb24oZSx0LG4scil7aWYoZSYmMyE9PWUubm9kZVR5cGUmJjghPT1lLm5vZGVUeXBlJiZlLnN0eWxlKXt2YXIgaSxvLGEscz1YKHQpLHU9R2UudGVzdCh0KSxsPWUuc3R5bGU7aWYodXx8KHQ9WGUocykpLGE9Uy5jc3NIb29rc1t0XXx8Uy5jc3NIb29rc1tzXSx2b2lkIDA9PT1uKXJldHVybiBhJiZcImdldFwiaW4gYSYmdm9pZCAwIT09KGk9YS5nZXQoZSwhMSxyKSk/aTpsW3RdO1wic3RyaW5nXCI9PT0obz10eXBlb2YgbikmJihpPXRlLmV4ZWMobikpJiZpWzFdJiYobj1zZShlLHQsaSksbz1cIm51bWJlclwiKSxudWxsIT1uJiZuPT1uJiYoXCJudW1iZXJcIiE9PW98fHV8fChuKz1pJiZpWzNdfHwoUy5jc3NOdW1iZXJbc10/XCJcIjpcInB4XCIpKSx5LmNsZWFyQ2xvbmVTdHlsZXx8XCJcIiE9PW58fDAhPT10LmluZGV4T2YoXCJiYWNrZ3JvdW5kXCIpfHwobFt0XT1cImluaGVyaXRcIiksYSYmXCJzZXRcImluIGEmJnZvaWQgMD09PShuPWEuc2V0KGUsbixyKSl8fCh1P2wuc2V0UHJvcGVydHkodCxuKTpsW3RdPW4pKX19LGNzczpmdW5jdGlvbihlLHQsbixyKXt2YXIgaSxvLGEscz1YKHQpO3JldHVybiBHZS50ZXN0KHQpfHwodD1YZShzKSksKGE9Uy5jc3NIb29rc1t0XXx8Uy5jc3NIb29rc1tzXSkmJlwiZ2V0XCJpbiBhJiYoaT1hLmdldChlLCEwLG4pKSx2b2lkIDA9PT1pJiYoaT1CZShlLHQscikpLFwibm9ybWFsXCI9PT1pJiZ0IGluIFFlJiYoaT1RZVt0XSksXCJcIj09PW58fG4/KG89cGFyc2VGbG9hdChpKSwhMD09PW58fGlzRmluaXRlKG8pP298fDA6aSk6aX19KSxTLmVhY2goW1wiaGVpZ2h0XCIsXCJ3aWR0aFwiXSxmdW5jdGlvbihlLHUpe1MuY3NzSG9va3NbdV09e2dldDpmdW5jdGlvbihlLHQsbil7aWYodClyZXR1cm4hVmUudGVzdChTLmNzcyhlLFwiZGlzcGxheVwiKSl8fGUuZ2V0Q2xpZW50UmVjdHMoKS5sZW5ndGgmJmUuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkud2lkdGg/WmUoZSx1LG4pOldlKGUsWWUsZnVuY3Rpb24oKXtyZXR1cm4gWmUoZSx1LG4pfSl9LHNldDpmdW5jdGlvbihlLHQsbil7dmFyIHIsaT1JZShlKSxvPSF5LnNjcm9sbGJveFNpemUoKSYmXCJhYnNvbHV0ZVwiPT09aS5wb3NpdGlvbixhPShvfHxuKSYmXCJib3JkZXItYm94XCI9PT1TLmNzcyhlLFwiYm94U2l6aW5nXCIsITEsaSkscz1uP0tlKGUsdSxuLGEsaSk6MDtyZXR1cm4gYSYmbyYmKHMtPU1hdGguY2VpbChlW1wib2Zmc2V0XCIrdVswXS50b1VwcGVyQ2FzZSgpK3Uuc2xpY2UoMSldLXBhcnNlRmxvYXQoaVt1XSktS2UoZSx1LFwiYm9yZGVyXCIsITEsaSktLjUpKSxzJiYocj10ZS5leGVjKHQpKSYmXCJweFwiIT09KHJbM118fFwicHhcIikmJihlLnN0eWxlW3VdPXQsdD1TLmNzcyhlLHUpKSxKZSgwLHQscyl9fX0pLFMuY3NzSG9va3MubWFyZ2luTGVmdD0kZSh5LnJlbGlhYmxlTWFyZ2luTGVmdCxmdW5jdGlvbihlLHQpe2lmKHQpcmV0dXJuKHBhcnNlRmxvYXQoQmUoZSxcIm1hcmdpbkxlZnRcIikpfHxlLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLmxlZnQtV2UoZSx7bWFyZ2luTGVmdDowfSxmdW5jdGlvbigpe3JldHVybiBlLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLmxlZnR9KSkrXCJweFwifSksUy5lYWNoKHttYXJnaW46XCJcIixwYWRkaW5nOlwiXCIsYm9yZGVyOlwiV2lkdGhcIn0sZnVuY3Rpb24oaSxvKXtTLmNzc0hvb2tzW2krb109e2V4cGFuZDpmdW5jdGlvbihlKXtmb3IodmFyIHQ9MCxuPXt9LHI9XCJzdHJpbmdcIj09dHlwZW9mIGU/ZS5zcGxpdChcIiBcIik6W2VdO3Q8NDt0KyspbltpK25lW3RdK29dPXJbdF18fHJbdC0yXXx8clswXTtyZXR1cm4gbn19LFwibWFyZ2luXCIhPT1pJiYoUy5jc3NIb29rc1tpK29dLnNldD1KZSl9KSxTLmZuLmV4dGVuZCh7Y3NzOmZ1bmN0aW9uKGUsdCl7cmV0dXJuICQodGhpcyxmdW5jdGlvbihlLHQsbil7dmFyIHIsaSxvPXt9LGE9MDtpZihBcnJheS5pc0FycmF5KHQpKXtmb3Iocj1JZShlKSxpPXQubGVuZ3RoO2E8aTthKyspb1t0W2FdXT1TLmNzcyhlLHRbYV0sITEscik7cmV0dXJuIG99cmV0dXJuIHZvaWQgMCE9PW4/Uy5zdHlsZShlLHQsbik6Uy5jc3MoZSx0KX0sZSx0LDE8YXJndW1lbnRzLmxlbmd0aCl9fSksKChTLlR3ZWVuPWV0KS5wcm90b3R5cGU9e2NvbnN0cnVjdG9yOmV0LGluaXQ6ZnVuY3Rpb24oZSx0LG4scixpLG8pe3RoaXMuZWxlbT1lLHRoaXMucHJvcD1uLHRoaXMuZWFzaW5nPWl8fFMuZWFzaW5nLl9kZWZhdWx0LHRoaXMub3B0aW9ucz10LHRoaXMuc3RhcnQ9dGhpcy5ub3c9dGhpcy5jdXIoKSx0aGlzLmVuZD1yLHRoaXMudW5pdD1vfHwoUy5jc3NOdW1iZXJbbl0/XCJcIjpcInB4XCIpfSxjdXI6ZnVuY3Rpb24oKXt2YXIgZT1ldC5wcm9wSG9va3NbdGhpcy5wcm9wXTtyZXR1cm4gZSYmZS5nZXQ/ZS5nZXQodGhpcyk6ZXQucHJvcEhvb2tzLl9kZWZhdWx0LmdldCh0aGlzKX0scnVuOmZ1bmN0aW9uKGUpe3ZhciB0LG49ZXQucHJvcEhvb2tzW3RoaXMucHJvcF07cmV0dXJuIHRoaXMub3B0aW9ucy5kdXJhdGlvbj90aGlzLnBvcz10PVMuZWFzaW5nW3RoaXMuZWFzaW5nXShlLHRoaXMub3B0aW9ucy5kdXJhdGlvbiplLDAsMSx0aGlzLm9wdGlvbnMuZHVyYXRpb24pOnRoaXMucG9zPXQ9ZSx0aGlzLm5vdz0odGhpcy5lbmQtdGhpcy5zdGFydCkqdCt0aGlzLnN0YXJ0LHRoaXMub3B0aW9ucy5zdGVwJiZ0aGlzLm9wdGlvbnMuc3RlcC5jYWxsKHRoaXMuZWxlbSx0aGlzLm5vdyx0aGlzKSxuJiZuLnNldD9uLnNldCh0aGlzKTpldC5wcm9wSG9va3MuX2RlZmF1bHQuc2V0KHRoaXMpLHRoaXN9fSkuaW5pdC5wcm90b3R5cGU9ZXQucHJvdG90eXBlLChldC5wcm9wSG9va3M9e19kZWZhdWx0OntnZXQ6ZnVuY3Rpb24oZSl7dmFyIHQ7cmV0dXJuIDEhPT1lLmVsZW0ubm9kZVR5cGV8fG51bGwhPWUuZWxlbVtlLnByb3BdJiZudWxsPT1lLmVsZW0uc3R5bGVbZS5wcm9wXT9lLmVsZW1bZS5wcm9wXToodD1TLmNzcyhlLmVsZW0sZS5wcm9wLFwiXCIpKSYmXCJhdXRvXCIhPT10P3Q6MH0sc2V0OmZ1bmN0aW9uKGUpe1MuZnguc3RlcFtlLnByb3BdP1MuZnguc3RlcFtlLnByb3BdKGUpOjEhPT1lLmVsZW0ubm9kZVR5cGV8fCFTLmNzc0hvb2tzW2UucHJvcF0mJm51bGw9PWUuZWxlbS5zdHlsZVtYZShlLnByb3ApXT9lLmVsZW1bZS5wcm9wXT1lLm5vdzpTLnN0eWxlKGUuZWxlbSxlLnByb3AsZS5ub3crZS51bml0KX19fSkuc2Nyb2xsVG9wPWV0LnByb3BIb29rcy5zY3JvbGxMZWZ0PXtzZXQ6ZnVuY3Rpb24oZSl7ZS5lbGVtLm5vZGVUeXBlJiZlLmVsZW0ucGFyZW50Tm9kZSYmKGUuZWxlbVtlLnByb3BdPWUubm93KX19LFMuZWFzaW5nPXtsaW5lYXI6ZnVuY3Rpb24oZSl7cmV0dXJuIGV9LHN3aW5nOmZ1bmN0aW9uKGUpe3JldHVybi41LU1hdGguY29zKGUqTWF0aC5QSSkvMn0sX2RlZmF1bHQ6XCJzd2luZ1wifSxTLmZ4PWV0LnByb3RvdHlwZS5pbml0LFMuZnguc3RlcD17fTt2YXIgdHQsbnQscnQsaXQsb3Q9L14oPzp0b2dnbGV8c2hvd3xoaWRlKSQvLGF0PS9xdWV1ZUhvb2tzJC87ZnVuY3Rpb24gc3QoKXtudCYmKCExPT09RS5oaWRkZW4mJkMucmVxdWVzdEFuaW1hdGlvbkZyYW1lP0MucmVxdWVzdEFuaW1hdGlvbkZyYW1lKHN0KTpDLnNldFRpbWVvdXQoc3QsUy5meC5pbnRlcnZhbCksUy5meC50aWNrKCkpfWZ1bmN0aW9uIHV0KCl7cmV0dXJuIEMuc2V0VGltZW91dChmdW5jdGlvbigpe3R0PXZvaWQgMH0pLHR0PURhdGUubm93KCl9ZnVuY3Rpb24gbHQoZSx0KXt2YXIgbixyPTAsaT17aGVpZ2h0OmV9O2Zvcih0PXQ/MTowO3I8NDtyKz0yLXQpaVtcIm1hcmdpblwiKyhuPW5lW3JdKV09aVtcInBhZGRpbmdcIituXT1lO3JldHVybiB0JiYoaS5vcGFjaXR5PWkud2lkdGg9ZSksaX1mdW5jdGlvbiBjdChlLHQsbil7Zm9yKHZhciByLGk9KGZ0LnR3ZWVuZXJzW3RdfHxbXSkuY29uY2F0KGZ0LnR3ZWVuZXJzW1wiKlwiXSksbz0wLGE9aS5sZW5ndGg7bzxhO28rKylpZihyPWlbb10uY2FsbChuLHQsZSkpcmV0dXJuIHJ9ZnVuY3Rpb24gZnQobyxlLHQpe3ZhciBuLGEscj0wLGk9ZnQucHJlZmlsdGVycy5sZW5ndGgscz1TLkRlZmVycmVkKCkuYWx3YXlzKGZ1bmN0aW9uKCl7ZGVsZXRlIHUuZWxlbX0pLHU9ZnVuY3Rpb24oKXtpZihhKXJldHVybiExO2Zvcih2YXIgZT10dHx8dXQoKSx0PU1hdGgubWF4KDAsbC5zdGFydFRpbWUrbC5kdXJhdGlvbi1lKSxuPTEtKHQvbC5kdXJhdGlvbnx8MCkscj0wLGk9bC50d2VlbnMubGVuZ3RoO3I8aTtyKyspbC50d2VlbnNbcl0ucnVuKG4pO3JldHVybiBzLm5vdGlmeVdpdGgobyxbbCxuLHRdKSxuPDEmJmk/dDooaXx8cy5ub3RpZnlXaXRoKG8sW2wsMSwwXSkscy5yZXNvbHZlV2l0aChvLFtsXSksITEpfSxsPXMucHJvbWlzZSh7ZWxlbTpvLHByb3BzOlMuZXh0ZW5kKHt9LGUpLG9wdHM6Uy5leHRlbmQoITAse3NwZWNpYWxFYXNpbmc6e30sZWFzaW5nOlMuZWFzaW5nLl9kZWZhdWx0fSx0KSxvcmlnaW5hbFByb3BlcnRpZXM6ZSxvcmlnaW5hbE9wdGlvbnM6dCxzdGFydFRpbWU6dHR8fHV0KCksZHVyYXRpb246dC5kdXJhdGlvbix0d2VlbnM6W10sY3JlYXRlVHdlZW46ZnVuY3Rpb24oZSx0KXt2YXIgbj1TLlR3ZWVuKG8sbC5vcHRzLGUsdCxsLm9wdHMuc3BlY2lhbEVhc2luZ1tlXXx8bC5vcHRzLmVhc2luZyk7cmV0dXJuIGwudHdlZW5zLnB1c2gobiksbn0sc3RvcDpmdW5jdGlvbihlKXt2YXIgdD0wLG49ZT9sLnR3ZWVucy5sZW5ndGg6MDtpZihhKXJldHVybiB0aGlzO2ZvcihhPSEwO3Q8bjt0KyspbC50d2VlbnNbdF0ucnVuKDEpO3JldHVybiBlPyhzLm5vdGlmeVdpdGgobyxbbCwxLDBdKSxzLnJlc29sdmVXaXRoKG8sW2wsZV0pKTpzLnJlamVjdFdpdGgobyxbbCxlXSksdGhpc319KSxjPWwucHJvcHM7Zm9yKCFmdW5jdGlvbihlLHQpe3ZhciBuLHIsaSxvLGE7Zm9yKG4gaW4gZSlpZihpPXRbcj1YKG4pXSxvPWVbbl0sQXJyYXkuaXNBcnJheShvKSYmKGk9b1sxXSxvPWVbbl09b1swXSksbiE9PXImJihlW3JdPW8sZGVsZXRlIGVbbl0pLChhPVMuY3NzSG9va3Nbcl0pJiZcImV4cGFuZFwiaW4gYSlmb3IobiBpbiBvPWEuZXhwYW5kKG8pLGRlbGV0ZSBlW3JdLG8pbiBpbiBlfHwoZVtuXT1vW25dLHRbbl09aSk7ZWxzZSB0W3JdPWl9KGMsbC5vcHRzLnNwZWNpYWxFYXNpbmcpO3I8aTtyKyspaWYobj1mdC5wcmVmaWx0ZXJzW3JdLmNhbGwobCxvLGMsbC5vcHRzKSlyZXR1cm4gbShuLnN0b3ApJiYoUy5fcXVldWVIb29rcyhsLmVsZW0sbC5vcHRzLnF1ZXVlKS5zdG9wPW4uc3RvcC5iaW5kKG4pKSxuO3JldHVybiBTLm1hcChjLGN0LGwpLG0obC5vcHRzLnN0YXJ0KSYmbC5vcHRzLnN0YXJ0LmNhbGwobyxsKSxsLnByb2dyZXNzKGwub3B0cy5wcm9ncmVzcykuZG9uZShsLm9wdHMuZG9uZSxsLm9wdHMuY29tcGxldGUpLmZhaWwobC5vcHRzLmZhaWwpLmFsd2F5cyhsLm9wdHMuYWx3YXlzKSxTLmZ4LnRpbWVyKFMuZXh0ZW5kKHUse2VsZW06byxhbmltOmwscXVldWU6bC5vcHRzLnF1ZXVlfSkpLGx9Uy5BbmltYXRpb249Uy5leHRlbmQoZnQse3R3ZWVuZXJzOntcIipcIjpbZnVuY3Rpb24oZSx0KXt2YXIgbj10aGlzLmNyZWF0ZVR3ZWVuKGUsdCk7cmV0dXJuIHNlKG4uZWxlbSxlLHRlLmV4ZWModCksbiksbn1dfSx0d2VlbmVyOmZ1bmN0aW9uKGUsdCl7bShlKT8odD1lLGU9W1wiKlwiXSk6ZT1lLm1hdGNoKFApO2Zvcih2YXIgbixyPTAsaT1lLmxlbmd0aDtyPGk7cisrKW49ZVtyXSxmdC50d2VlbmVyc1tuXT1mdC50d2VlbmVyc1tuXXx8W10sZnQudHdlZW5lcnNbbl0udW5zaGlmdCh0KX0scHJlZmlsdGVyczpbZnVuY3Rpb24oZSx0LG4pe3ZhciByLGksbyxhLHMsdSxsLGMsZj1cIndpZHRoXCJpbiB0fHxcImhlaWdodFwiaW4gdCxwPXRoaXMsZD17fSxoPWUuc3R5bGUsZz1lLm5vZGVUeXBlJiZhZShlKSx2PVkuZ2V0KGUsXCJmeHNob3dcIik7Zm9yKHIgaW4gbi5xdWV1ZXx8KG51bGw9PShhPVMuX3F1ZXVlSG9va3MoZSxcImZ4XCIpKS51bnF1ZXVlZCYmKGEudW5xdWV1ZWQ9MCxzPWEuZW1wdHkuZmlyZSxhLmVtcHR5LmZpcmU9ZnVuY3Rpb24oKXthLnVucXVldWVkfHxzKCl9KSxhLnVucXVldWVkKysscC5hbHdheXMoZnVuY3Rpb24oKXtwLmFsd2F5cyhmdW5jdGlvbigpe2EudW5xdWV1ZWQtLSxTLnF1ZXVlKGUsXCJmeFwiKS5sZW5ndGh8fGEuZW1wdHkuZmlyZSgpfSl9KSksdClpZihpPXRbcl0sb3QudGVzdChpKSl7aWYoZGVsZXRlIHRbcl0sbz1vfHxcInRvZ2dsZVwiPT09aSxpPT09KGc/XCJoaWRlXCI6XCJzaG93XCIpKXtpZihcInNob3dcIiE9PWl8fCF2fHx2b2lkIDA9PT12W3JdKWNvbnRpbnVlO2c9ITB9ZFtyXT12JiZ2W3JdfHxTLnN0eWxlKGUscil9aWYoKHU9IVMuaXNFbXB0eU9iamVjdCh0KSl8fCFTLmlzRW1wdHlPYmplY3QoZCkpZm9yKHIgaW4gZiYmMT09PWUubm9kZVR5cGUmJihuLm92ZXJmbG93PVtoLm92ZXJmbG93LGgub3ZlcmZsb3dYLGgub3ZlcmZsb3dZXSxudWxsPT0obD12JiZ2LmRpc3BsYXkpJiYobD1ZLmdldChlLFwiZGlzcGxheVwiKSksXCJub25lXCI9PT0oYz1TLmNzcyhlLFwiZGlzcGxheVwiKSkmJihsP2M9bDoobGUoW2VdLCEwKSxsPWUuc3R5bGUuZGlzcGxheXx8bCxjPVMuY3NzKGUsXCJkaXNwbGF5XCIpLGxlKFtlXSkpKSwoXCJpbmxpbmVcIj09PWN8fFwiaW5saW5lLWJsb2NrXCI9PT1jJiZudWxsIT1sKSYmXCJub25lXCI9PT1TLmNzcyhlLFwiZmxvYXRcIikmJih1fHwocC5kb25lKGZ1bmN0aW9uKCl7aC5kaXNwbGF5PWx9KSxudWxsPT1sJiYoYz1oLmRpc3BsYXksbD1cIm5vbmVcIj09PWM/XCJcIjpjKSksaC5kaXNwbGF5PVwiaW5saW5lLWJsb2NrXCIpKSxuLm92ZXJmbG93JiYoaC5vdmVyZmxvdz1cImhpZGRlblwiLHAuYWx3YXlzKGZ1bmN0aW9uKCl7aC5vdmVyZmxvdz1uLm92ZXJmbG93WzBdLGgub3ZlcmZsb3dYPW4ub3ZlcmZsb3dbMV0saC5vdmVyZmxvd1k9bi5vdmVyZmxvd1syXX0pKSx1PSExLGQpdXx8KHY/XCJoaWRkZW5cImluIHYmJihnPXYuaGlkZGVuKTp2PVkuYWNjZXNzKGUsXCJmeHNob3dcIix7ZGlzcGxheTpsfSksbyYmKHYuaGlkZGVuPSFnKSxnJiZsZShbZV0sITApLHAuZG9uZShmdW5jdGlvbigpe2ZvcihyIGluIGd8fGxlKFtlXSksWS5yZW1vdmUoZSxcImZ4c2hvd1wiKSxkKVMuc3R5bGUoZSxyLGRbcl0pfSkpLHU9Y3QoZz92W3JdOjAscixwKSxyIGluIHZ8fCh2W3JdPXUuc3RhcnQsZyYmKHUuZW5kPXUuc3RhcnQsdS5zdGFydD0wKSl9XSxwcmVmaWx0ZXI6ZnVuY3Rpb24oZSx0KXt0P2Z0LnByZWZpbHRlcnMudW5zaGlmdChlKTpmdC5wcmVmaWx0ZXJzLnB1c2goZSl9fSksUy5zcGVlZD1mdW5jdGlvbihlLHQsbil7dmFyIHI9ZSYmXCJvYmplY3RcIj09dHlwZW9mIGU/Uy5leHRlbmQoe30sZSk6e2NvbXBsZXRlOm58fCFuJiZ0fHxtKGUpJiZlLGR1cmF0aW9uOmUsZWFzaW5nOm4mJnR8fHQmJiFtKHQpJiZ0fTtyZXR1cm4gUy5meC5vZmY/ci5kdXJhdGlvbj0wOlwibnVtYmVyXCIhPXR5cGVvZiByLmR1cmF0aW9uJiYoci5kdXJhdGlvbiBpbiBTLmZ4LnNwZWVkcz9yLmR1cmF0aW9uPVMuZnguc3BlZWRzW3IuZHVyYXRpb25dOnIuZHVyYXRpb249Uy5meC5zcGVlZHMuX2RlZmF1bHQpLG51bGwhPXIucXVldWUmJiEwIT09ci5xdWV1ZXx8KHIucXVldWU9XCJmeFwiKSxyLm9sZD1yLmNvbXBsZXRlLHIuY29tcGxldGU9ZnVuY3Rpb24oKXttKHIub2xkKSYmci5vbGQuY2FsbCh0aGlzKSxyLnF1ZXVlJiZTLmRlcXVldWUodGhpcyxyLnF1ZXVlKX0scn0sUy5mbi5leHRlbmQoe2ZhZGVUbzpmdW5jdGlvbihlLHQsbixyKXtyZXR1cm4gdGhpcy5maWx0ZXIoYWUpLmNzcyhcIm9wYWNpdHlcIiwwKS5zaG93KCkuZW5kKCkuYW5pbWF0ZSh7b3BhY2l0eTp0fSxlLG4scil9LGFuaW1hdGU6ZnVuY3Rpb24odCxlLG4scil7dmFyIGk9Uy5pc0VtcHR5T2JqZWN0KHQpLG89Uy5zcGVlZChlLG4sciksYT1mdW5jdGlvbigpe3ZhciBlPWZ0KHRoaXMsUy5leHRlbmQoe30sdCksbyk7KGl8fFkuZ2V0KHRoaXMsXCJmaW5pc2hcIikpJiZlLnN0b3AoITApfTtyZXR1cm4gYS5maW5pc2g9YSxpfHwhMT09PW8ucXVldWU/dGhpcy5lYWNoKGEpOnRoaXMucXVldWUoby5xdWV1ZSxhKX0sc3RvcDpmdW5jdGlvbihpLGUsbyl7dmFyIGE9ZnVuY3Rpb24oZSl7dmFyIHQ9ZS5zdG9wO2RlbGV0ZSBlLnN0b3AsdChvKX07cmV0dXJuXCJzdHJpbmdcIiE9dHlwZW9mIGkmJihvPWUsZT1pLGk9dm9pZCAwKSxlJiZ0aGlzLnF1ZXVlKGl8fFwiZnhcIixbXSksdGhpcy5lYWNoKGZ1bmN0aW9uKCl7dmFyIGU9ITAsdD1udWxsIT1pJiZpK1wicXVldWVIb29rc1wiLG49Uy50aW1lcnMscj1ZLmdldCh0aGlzKTtpZih0KXJbdF0mJnJbdF0uc3RvcCYmYShyW3RdKTtlbHNlIGZvcih0IGluIHIpclt0XSYmclt0XS5zdG9wJiZhdC50ZXN0KHQpJiZhKHJbdF0pO2Zvcih0PW4ubGVuZ3RoO3QtLTspblt0XS5lbGVtIT09dGhpc3x8bnVsbCE9aSYmblt0XS5xdWV1ZSE9PWl8fChuW3RdLmFuaW0uc3RvcChvKSxlPSExLG4uc3BsaWNlKHQsMSkpOyFlJiZvfHxTLmRlcXVldWUodGhpcyxpKX0pfSxmaW5pc2g6ZnVuY3Rpb24oYSl7cmV0dXJuITEhPT1hJiYoYT1hfHxcImZ4XCIpLHRoaXMuZWFjaChmdW5jdGlvbigpe3ZhciBlLHQ9WS5nZXQodGhpcyksbj10W2ErXCJxdWV1ZVwiXSxyPXRbYStcInF1ZXVlSG9va3NcIl0saT1TLnRpbWVycyxvPW4/bi5sZW5ndGg6MDtmb3IodC5maW5pc2g9ITAsUy5xdWV1ZSh0aGlzLGEsW10pLHImJnIuc3RvcCYmci5zdG9wLmNhbGwodGhpcywhMCksZT1pLmxlbmd0aDtlLS07KWlbZV0uZWxlbT09PXRoaXMmJmlbZV0ucXVldWU9PT1hJiYoaVtlXS5hbmltLnN0b3AoITApLGkuc3BsaWNlKGUsMSkpO2ZvcihlPTA7ZTxvO2UrKyluW2VdJiZuW2VdLmZpbmlzaCYmbltlXS5maW5pc2guY2FsbCh0aGlzKTtkZWxldGUgdC5maW5pc2h9KX19KSxTLmVhY2goW1widG9nZ2xlXCIsXCJzaG93XCIsXCJoaWRlXCJdLGZ1bmN0aW9uKGUscil7dmFyIGk9Uy5mbltyXTtTLmZuW3JdPWZ1bmN0aW9uKGUsdCxuKXtyZXR1cm4gbnVsbD09ZXx8XCJib29sZWFuXCI9PXR5cGVvZiBlP2kuYXBwbHkodGhpcyxhcmd1bWVudHMpOnRoaXMuYW5pbWF0ZShsdChyLCEwKSxlLHQsbil9fSksUy5lYWNoKHtzbGlkZURvd246bHQoXCJzaG93XCIpLHNsaWRlVXA6bHQoXCJoaWRlXCIpLHNsaWRlVG9nZ2xlOmx0KFwidG9nZ2xlXCIpLGZhZGVJbjp7b3BhY2l0eTpcInNob3dcIn0sZmFkZU91dDp7b3BhY2l0eTpcImhpZGVcIn0sZmFkZVRvZ2dsZTp7b3BhY2l0eTpcInRvZ2dsZVwifX0sZnVuY3Rpb24oZSxyKXtTLmZuW2VdPWZ1bmN0aW9uKGUsdCxuKXtyZXR1cm4gdGhpcy5hbmltYXRlKHIsZSx0LG4pfX0pLFMudGltZXJzPVtdLFMuZngudGljaz1mdW5jdGlvbigpe3ZhciBlLHQ9MCxuPVMudGltZXJzO2Zvcih0dD1EYXRlLm5vdygpO3Q8bi5sZW5ndGg7dCsrKShlPW5bdF0pKCl8fG5bdF0hPT1lfHxuLnNwbGljZSh0LS0sMSk7bi5sZW5ndGh8fFMuZnguc3RvcCgpLHR0PXZvaWQgMH0sUy5meC50aW1lcj1mdW5jdGlvbihlKXtTLnRpbWVycy5wdXNoKGUpLFMuZnguc3RhcnQoKX0sUy5meC5pbnRlcnZhbD0xMyxTLmZ4LnN0YXJ0PWZ1bmN0aW9uKCl7bnR8fChudD0hMCxzdCgpKX0sUy5meC5zdG9wPWZ1bmN0aW9uKCl7bnQ9bnVsbH0sUy5meC5zcGVlZHM9e3Nsb3c6NjAwLGZhc3Q6MjAwLF9kZWZhdWx0OjQwMH0sUy5mbi5kZWxheT1mdW5jdGlvbihyLGUpe3JldHVybiByPVMuZngmJlMuZnguc3BlZWRzW3JdfHxyLGU9ZXx8XCJmeFwiLHRoaXMucXVldWUoZSxmdW5jdGlvbihlLHQpe3ZhciBuPUMuc2V0VGltZW91dChlLHIpO3Quc3RvcD1mdW5jdGlvbigpe0MuY2xlYXJUaW1lb3V0KG4pfX0pfSxydD1FLmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKSxpdD1FLmNyZWF0ZUVsZW1lbnQoXCJzZWxlY3RcIikuYXBwZW5kQ2hpbGQoRS5jcmVhdGVFbGVtZW50KFwib3B0aW9uXCIpKSxydC50eXBlPVwiY2hlY2tib3hcIix5LmNoZWNrT249XCJcIiE9PXJ0LnZhbHVlLHkub3B0U2VsZWN0ZWQ9aXQuc2VsZWN0ZWQsKHJ0PUUuY3JlYXRlRWxlbWVudChcImlucHV0XCIpKS52YWx1ZT1cInRcIixydC50eXBlPVwicmFkaW9cIix5LnJhZGlvVmFsdWU9XCJ0XCI9PT1ydC52YWx1ZTt2YXIgcHQsZHQ9Uy5leHByLmF0dHJIYW5kbGU7Uy5mbi5leHRlbmQoe2F0dHI6ZnVuY3Rpb24oZSx0KXtyZXR1cm4gJCh0aGlzLFMuYXR0cixlLHQsMTxhcmd1bWVudHMubGVuZ3RoKX0scmVtb3ZlQXR0cjpmdW5jdGlvbihlKXtyZXR1cm4gdGhpcy5lYWNoKGZ1bmN0aW9uKCl7Uy5yZW1vdmVBdHRyKHRoaXMsZSl9KX19KSxTLmV4dGVuZCh7YXR0cjpmdW5jdGlvbihlLHQsbil7dmFyIHIsaSxvPWUubm9kZVR5cGU7aWYoMyE9PW8mJjghPT1vJiYyIT09bylyZXR1cm5cInVuZGVmaW5lZFwiPT10eXBlb2YgZS5nZXRBdHRyaWJ1dGU/Uy5wcm9wKGUsdCxuKTooMT09PW8mJlMuaXNYTUxEb2MoZSl8fChpPVMuYXR0ckhvb2tzW3QudG9Mb3dlckNhc2UoKV18fChTLmV4cHIubWF0Y2guYm9vbC50ZXN0KHQpP3B0OnZvaWQgMCkpLHZvaWQgMCE9PW4/bnVsbD09PW4/dm9pZCBTLnJlbW92ZUF0dHIoZSx0KTppJiZcInNldFwiaW4gaSYmdm9pZCAwIT09KHI9aS5zZXQoZSxuLHQpKT9yOihlLnNldEF0dHJpYnV0ZSh0LG4rXCJcIiksbik6aSYmXCJnZXRcImluIGkmJm51bGwhPT0ocj1pLmdldChlLHQpKT9yOm51bGw9PShyPVMuZmluZC5hdHRyKGUsdCkpP3ZvaWQgMDpyKX0sYXR0ckhvb2tzOnt0eXBlOntzZXQ6ZnVuY3Rpb24oZSx0KXtpZigheS5yYWRpb1ZhbHVlJiZcInJhZGlvXCI9PT10JiZBKGUsXCJpbnB1dFwiKSl7dmFyIG49ZS52YWx1ZTtyZXR1cm4gZS5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsdCksbiYmKGUudmFsdWU9biksdH19fX0scmVtb3ZlQXR0cjpmdW5jdGlvbihlLHQpe3ZhciBuLHI9MCxpPXQmJnQubWF0Y2goUCk7aWYoaSYmMT09PWUubm9kZVR5cGUpd2hpbGUobj1pW3IrK10pZS5yZW1vdmVBdHRyaWJ1dGUobil9fSkscHQ9e3NldDpmdW5jdGlvbihlLHQsbil7cmV0dXJuITE9PT10P1MucmVtb3ZlQXR0cihlLG4pOmUuc2V0QXR0cmlidXRlKG4sbiksbn19LFMuZWFjaChTLmV4cHIubWF0Y2guYm9vbC5zb3VyY2UubWF0Y2goL1xcdysvZyksZnVuY3Rpb24oZSx0KXt2YXIgYT1kdFt0XXx8Uy5maW5kLmF0dHI7ZHRbdF09ZnVuY3Rpb24oZSx0LG4pe3ZhciByLGksbz10LnRvTG93ZXJDYXNlKCk7cmV0dXJuIG58fChpPWR0W29dLGR0W29dPXIscj1udWxsIT1hKGUsdCxuKT9vOm51bGwsZHRbb109aSkscn19KTt2YXIgaHQ9L14oPzppbnB1dHxzZWxlY3R8dGV4dGFyZWF8YnV0dG9uKSQvaSxndD0vXig/OmF8YXJlYSkkL2k7ZnVuY3Rpb24gdnQoZSl7cmV0dXJuKGUubWF0Y2goUCl8fFtdKS5qb2luKFwiIFwiKX1mdW5jdGlvbiB5dChlKXtyZXR1cm4gZS5nZXRBdHRyaWJ1dGUmJmUuZ2V0QXR0cmlidXRlKFwiY2xhc3NcIil8fFwiXCJ9ZnVuY3Rpb24gbXQoZSl7cmV0dXJuIEFycmF5LmlzQXJyYXkoZSk/ZTpcInN0cmluZ1wiPT10eXBlb2YgZSYmZS5tYXRjaChQKXx8W119Uy5mbi5leHRlbmQoe3Byb3A6ZnVuY3Rpb24oZSx0KXtyZXR1cm4gJCh0aGlzLFMucHJvcCxlLHQsMTxhcmd1bWVudHMubGVuZ3RoKX0scmVtb3ZlUHJvcDpmdW5jdGlvbihlKXtyZXR1cm4gdGhpcy5lYWNoKGZ1bmN0aW9uKCl7ZGVsZXRlIHRoaXNbUy5wcm9wRml4W2VdfHxlXX0pfX0pLFMuZXh0ZW5kKHtwcm9wOmZ1bmN0aW9uKGUsdCxuKXt2YXIgcixpLG89ZS5ub2RlVHlwZTtpZigzIT09byYmOCE9PW8mJjIhPT1vKXJldHVybiAxPT09byYmUy5pc1hNTERvYyhlKXx8KHQ9Uy5wcm9wRml4W3RdfHx0LGk9Uy5wcm9wSG9va3NbdF0pLHZvaWQgMCE9PW4/aSYmXCJzZXRcImluIGkmJnZvaWQgMCE9PShyPWkuc2V0KGUsbix0KSk/cjplW3RdPW46aSYmXCJnZXRcImluIGkmJm51bGwhPT0ocj1pLmdldChlLHQpKT9yOmVbdF19LHByb3BIb29rczp7dGFiSW5kZXg6e2dldDpmdW5jdGlvbihlKXt2YXIgdD1TLmZpbmQuYXR0cihlLFwidGFiaW5kZXhcIik7cmV0dXJuIHQ/cGFyc2VJbnQodCwxMCk6aHQudGVzdChlLm5vZGVOYW1lKXx8Z3QudGVzdChlLm5vZGVOYW1lKSYmZS5ocmVmPzA6LTF9fX0scHJvcEZpeDp7XCJmb3JcIjpcImh0bWxGb3JcIixcImNsYXNzXCI6XCJjbGFzc05hbWVcIn19KSx5Lm9wdFNlbGVjdGVkfHwoUy5wcm9wSG9va3Muc2VsZWN0ZWQ9e2dldDpmdW5jdGlvbihlKXt2YXIgdD1lLnBhcmVudE5vZGU7cmV0dXJuIHQmJnQucGFyZW50Tm9kZSYmdC5wYXJlbnROb2RlLnNlbGVjdGVkSW5kZXgsbnVsbH0sc2V0OmZ1bmN0aW9uKGUpe3ZhciB0PWUucGFyZW50Tm9kZTt0JiYodC5zZWxlY3RlZEluZGV4LHQucGFyZW50Tm9kZSYmdC5wYXJlbnROb2RlLnNlbGVjdGVkSW5kZXgpfX0pLFMuZWFjaChbXCJ0YWJJbmRleFwiLFwicmVhZE9ubHlcIixcIm1heExlbmd0aFwiLFwiY2VsbFNwYWNpbmdcIixcImNlbGxQYWRkaW5nXCIsXCJyb3dTcGFuXCIsXCJjb2xTcGFuXCIsXCJ1c2VNYXBcIixcImZyYW1lQm9yZGVyXCIsXCJjb250ZW50RWRpdGFibGVcIl0sZnVuY3Rpb24oKXtTLnByb3BGaXhbdGhpcy50b0xvd2VyQ2FzZSgpXT10aGlzfSksUy5mbi5leHRlbmQoe2FkZENsYXNzOmZ1bmN0aW9uKHQpe3ZhciBlLG4scixpLG8sYSxzLHU9MDtpZihtKHQpKXJldHVybiB0aGlzLmVhY2goZnVuY3Rpb24oZSl7Uyh0aGlzKS5hZGRDbGFzcyh0LmNhbGwodGhpcyxlLHl0KHRoaXMpKSl9KTtpZigoZT1tdCh0KSkubGVuZ3RoKXdoaWxlKG49dGhpc1t1KytdKWlmKGk9eXQobikscj0xPT09bi5ub2RlVHlwZSYmXCIgXCIrdnQoaSkrXCIgXCIpe2E9MDt3aGlsZShvPWVbYSsrXSlyLmluZGV4T2YoXCIgXCIrbytcIiBcIik8MCYmKHIrPW8rXCIgXCIpO2khPT0ocz12dChyKSkmJm4uc2V0QXR0cmlidXRlKFwiY2xhc3NcIixzKX1yZXR1cm4gdGhpc30scmVtb3ZlQ2xhc3M6ZnVuY3Rpb24odCl7dmFyIGUsbixyLGksbyxhLHMsdT0wO2lmKG0odCkpcmV0dXJuIHRoaXMuZWFjaChmdW5jdGlvbihlKXtTKHRoaXMpLnJlbW92ZUNsYXNzKHQuY2FsbCh0aGlzLGUseXQodGhpcykpKX0pO2lmKCFhcmd1bWVudHMubGVuZ3RoKXJldHVybiB0aGlzLmF0dHIoXCJjbGFzc1wiLFwiXCIpO2lmKChlPW10KHQpKS5sZW5ndGgpd2hpbGUobj10aGlzW3UrK10paWYoaT15dChuKSxyPTE9PT1uLm5vZGVUeXBlJiZcIiBcIit2dChpKStcIiBcIil7YT0wO3doaWxlKG89ZVthKytdKXdoaWxlKC0xPHIuaW5kZXhPZihcIiBcIitvK1wiIFwiKSlyPXIucmVwbGFjZShcIiBcIitvK1wiIFwiLFwiIFwiKTtpIT09KHM9dnQocikpJiZuLnNldEF0dHJpYnV0ZShcImNsYXNzXCIscyl9cmV0dXJuIHRoaXN9LHRvZ2dsZUNsYXNzOmZ1bmN0aW9uKGksdCl7dmFyIG89dHlwZW9mIGksYT1cInN0cmluZ1wiPT09b3x8QXJyYXkuaXNBcnJheShpKTtyZXR1cm5cImJvb2xlYW5cIj09dHlwZW9mIHQmJmE/dD90aGlzLmFkZENsYXNzKGkpOnRoaXMucmVtb3ZlQ2xhc3MoaSk6bShpKT90aGlzLmVhY2goZnVuY3Rpb24oZSl7Uyh0aGlzKS50b2dnbGVDbGFzcyhpLmNhbGwodGhpcyxlLHl0KHRoaXMpLHQpLHQpfSk6dGhpcy5lYWNoKGZ1bmN0aW9uKCl7dmFyIGUsdCxuLHI7aWYoYSl7dD0wLG49Uyh0aGlzKSxyPW10KGkpO3doaWxlKGU9clt0KytdKW4uaGFzQ2xhc3MoZSk/bi5yZW1vdmVDbGFzcyhlKTpuLmFkZENsYXNzKGUpfWVsc2Ugdm9pZCAwIT09aSYmXCJib29sZWFuXCIhPT1vfHwoKGU9eXQodGhpcykpJiZZLnNldCh0aGlzLFwiX19jbGFzc05hbWVfX1wiLGUpLHRoaXMuc2V0QXR0cmlidXRlJiZ0aGlzLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsZXx8ITE9PT1pP1wiXCI6WS5nZXQodGhpcyxcIl9fY2xhc3NOYW1lX19cIil8fFwiXCIpKX0pfSxoYXNDbGFzczpmdW5jdGlvbihlKXt2YXIgdCxuLHI9MDt0PVwiIFwiK2UrXCIgXCI7d2hpbGUobj10aGlzW3IrK10paWYoMT09PW4ubm9kZVR5cGUmJi0xPChcIiBcIit2dCh5dChuKSkrXCIgXCIpLmluZGV4T2YodCkpcmV0dXJuITA7cmV0dXJuITF9fSk7dmFyIHh0PS9cXHIvZztTLmZuLmV4dGVuZCh7dmFsOmZ1bmN0aW9uKG4pe3ZhciByLGUsaSx0PXRoaXNbMF07cmV0dXJuIGFyZ3VtZW50cy5sZW5ndGg/KGk9bShuKSx0aGlzLmVhY2goZnVuY3Rpb24oZSl7dmFyIHQ7MT09PXRoaXMubm9kZVR5cGUmJihudWxsPT0odD1pP24uY2FsbCh0aGlzLGUsUyh0aGlzKS52YWwoKSk6bik/dD1cIlwiOlwibnVtYmVyXCI9PXR5cGVvZiB0P3QrPVwiXCI6QXJyYXkuaXNBcnJheSh0KSYmKHQ9Uy5tYXAodCxmdW5jdGlvbihlKXtyZXR1cm4gbnVsbD09ZT9cIlwiOmUrXCJcIn0pKSwocj1TLnZhbEhvb2tzW3RoaXMudHlwZV18fFMudmFsSG9va3NbdGhpcy5ub2RlTmFtZS50b0xvd2VyQ2FzZSgpXSkmJlwic2V0XCJpbiByJiZ2b2lkIDAhPT1yLnNldCh0aGlzLHQsXCJ2YWx1ZVwiKXx8KHRoaXMudmFsdWU9dCkpfSkpOnQ/KHI9Uy52YWxIb29rc1t0LnR5cGVdfHxTLnZhbEhvb2tzW3Qubm9kZU5hbWUudG9Mb3dlckNhc2UoKV0pJiZcImdldFwiaW4gciYmdm9pZCAwIT09KGU9ci5nZXQodCxcInZhbHVlXCIpKT9lOlwic3RyaW5nXCI9PXR5cGVvZihlPXQudmFsdWUpP2UucmVwbGFjZSh4dCxcIlwiKTpudWxsPT1lP1wiXCI6ZTp2b2lkIDB9fSksUy5leHRlbmQoe3ZhbEhvb2tzOntvcHRpb246e2dldDpmdW5jdGlvbihlKXt2YXIgdD1TLmZpbmQuYXR0cihlLFwidmFsdWVcIik7cmV0dXJuIG51bGwhPXQ/dDp2dChTLnRleHQoZSkpfX0sc2VsZWN0OntnZXQ6ZnVuY3Rpb24oZSl7dmFyIHQsbixyLGk9ZS5vcHRpb25zLG89ZS5zZWxlY3RlZEluZGV4LGE9XCJzZWxlY3Qtb25lXCI9PT1lLnR5cGUscz1hP251bGw6W10sdT1hP28rMTppLmxlbmd0aDtmb3Iocj1vPDA/dTphP286MDtyPHU7cisrKWlmKCgobj1pW3JdKS5zZWxlY3RlZHx8cj09PW8pJiYhbi5kaXNhYmxlZCYmKCFuLnBhcmVudE5vZGUuZGlzYWJsZWR8fCFBKG4ucGFyZW50Tm9kZSxcIm9wdGdyb3VwXCIpKSl7aWYodD1TKG4pLnZhbCgpLGEpcmV0dXJuIHQ7cy5wdXNoKHQpfXJldHVybiBzfSxzZXQ6ZnVuY3Rpb24oZSx0KXt2YXIgbixyLGk9ZS5vcHRpb25zLG89Uy5tYWtlQXJyYXkodCksYT1pLmxlbmd0aDt3aGlsZShhLS0pKChyPWlbYV0pLnNlbGVjdGVkPS0xPFMuaW5BcnJheShTLnZhbEhvb2tzLm9wdGlvbi5nZXQociksbykpJiYobj0hMCk7cmV0dXJuIG58fChlLnNlbGVjdGVkSW5kZXg9LTEpLG99fX19KSxTLmVhY2goW1wicmFkaW9cIixcImNoZWNrYm94XCJdLGZ1bmN0aW9uKCl7Uy52YWxIb29rc1t0aGlzXT17c2V0OmZ1bmN0aW9uKGUsdCl7aWYoQXJyYXkuaXNBcnJheSh0KSlyZXR1cm4gZS5jaGVja2VkPS0xPFMuaW5BcnJheShTKGUpLnZhbCgpLHQpfX0seS5jaGVja09ufHwoUy52YWxIb29rc1t0aGlzXS5nZXQ9ZnVuY3Rpb24oZSl7cmV0dXJuIG51bGw9PT1lLmdldEF0dHJpYnV0ZShcInZhbHVlXCIpP1wib25cIjplLnZhbHVlfSl9KSx5LmZvY3VzaW49XCJvbmZvY3VzaW5cImluIEM7dmFyIGJ0PS9eKD86Zm9jdXNpbmZvY3VzfGZvY3Vzb3V0Ymx1cikkLyx3dD1mdW5jdGlvbihlKXtlLnN0b3BQcm9wYWdhdGlvbigpfTtTLmV4dGVuZChTLmV2ZW50LHt0cmlnZ2VyOmZ1bmN0aW9uKGUsdCxuLHIpe3ZhciBpLG8sYSxzLHUsbCxjLGYscD1bbnx8RV0sZD12LmNhbGwoZSxcInR5cGVcIik/ZS50eXBlOmUsaD12LmNhbGwoZSxcIm5hbWVzcGFjZVwiKT9lLm5hbWVzcGFjZS5zcGxpdChcIi5cIik6W107aWYobz1mPWE9bj1ufHxFLDMhPT1uLm5vZGVUeXBlJiY4IT09bi5ub2RlVHlwZSYmIWJ0LnRlc3QoZCtTLmV2ZW50LnRyaWdnZXJlZCkmJigtMTxkLmluZGV4T2YoXCIuXCIpJiYoZD0oaD1kLnNwbGl0KFwiLlwiKSkuc2hpZnQoKSxoLnNvcnQoKSksdT1kLmluZGV4T2YoXCI6XCIpPDAmJlwib25cIitkLChlPWVbUy5leHBhbmRvXT9lOm5ldyBTLkV2ZW50KGQsXCJvYmplY3RcIj09dHlwZW9mIGUmJmUpKS5pc1RyaWdnZXI9cj8yOjMsZS5uYW1lc3BhY2U9aC5qb2luKFwiLlwiKSxlLnJuYW1lc3BhY2U9ZS5uYW1lc3BhY2U/bmV3IFJlZ0V4cChcIihefFxcXFwuKVwiK2guam9pbihcIlxcXFwuKD86LipcXFxcLnwpXCIpK1wiKFxcXFwufCQpXCIpOm51bGwsZS5yZXN1bHQ9dm9pZCAwLGUudGFyZ2V0fHwoZS50YXJnZXQ9biksdD1udWxsPT10P1tlXTpTLm1ha2VBcnJheSh0LFtlXSksYz1TLmV2ZW50LnNwZWNpYWxbZF18fHt9LHJ8fCFjLnRyaWdnZXJ8fCExIT09Yy50cmlnZ2VyLmFwcGx5KG4sdCkpKXtpZighciYmIWMubm9CdWJibGUmJiF4KG4pKXtmb3Iocz1jLmRlbGVnYXRlVHlwZXx8ZCxidC50ZXN0KHMrZCl8fChvPW8ucGFyZW50Tm9kZSk7bztvPW8ucGFyZW50Tm9kZSlwLnB1c2gobyksYT1vO2E9PT0obi5vd25lckRvY3VtZW50fHxFKSYmcC5wdXNoKGEuZGVmYXVsdFZpZXd8fGEucGFyZW50V2luZG93fHxDKX1pPTA7d2hpbGUoKG89cFtpKytdKSYmIWUuaXNQcm9wYWdhdGlvblN0b3BwZWQoKSlmPW8sZS50eXBlPTE8aT9zOmMuYmluZFR5cGV8fGQsKGw9KFkuZ2V0KG8sXCJldmVudHNcIil8fE9iamVjdC5jcmVhdGUobnVsbCkpW2UudHlwZV0mJlkuZ2V0KG8sXCJoYW5kbGVcIikpJiZsLmFwcGx5KG8sdCksKGw9dSYmb1t1XSkmJmwuYXBwbHkmJlYobykmJihlLnJlc3VsdD1sLmFwcGx5KG8sdCksITE9PT1lLnJlc3VsdCYmZS5wcmV2ZW50RGVmYXVsdCgpKTtyZXR1cm4gZS50eXBlPWQscnx8ZS5pc0RlZmF1bHRQcmV2ZW50ZWQoKXx8Yy5fZGVmYXVsdCYmITEhPT1jLl9kZWZhdWx0LmFwcGx5KHAucG9wKCksdCl8fCFWKG4pfHx1JiZtKG5bZF0pJiYheChuKSYmKChhPW5bdV0pJiYoblt1XT1udWxsKSxTLmV2ZW50LnRyaWdnZXJlZD1kLGUuaXNQcm9wYWdhdGlvblN0b3BwZWQoKSYmZi5hZGRFdmVudExpc3RlbmVyKGQsd3QpLG5bZF0oKSxlLmlzUHJvcGFnYXRpb25TdG9wcGVkKCkmJmYucmVtb3ZlRXZlbnRMaXN0ZW5lcihkLHd0KSxTLmV2ZW50LnRyaWdnZXJlZD12b2lkIDAsYSYmKG5bdV09YSkpLGUucmVzdWx0fX0sc2ltdWxhdGU6ZnVuY3Rpb24oZSx0LG4pe3ZhciByPVMuZXh0ZW5kKG5ldyBTLkV2ZW50LG4se3R5cGU6ZSxpc1NpbXVsYXRlZDohMH0pO1MuZXZlbnQudHJpZ2dlcihyLG51bGwsdCl9fSksUy5mbi5leHRlbmQoe3RyaWdnZXI6ZnVuY3Rpb24oZSx0KXtyZXR1cm4gdGhpcy5lYWNoKGZ1bmN0aW9uKCl7Uy5ldmVudC50cmlnZ2VyKGUsdCx0aGlzKX0pfSx0cmlnZ2VySGFuZGxlcjpmdW5jdGlvbihlLHQpe3ZhciBuPXRoaXNbMF07aWYobilyZXR1cm4gUy5ldmVudC50cmlnZ2VyKGUsdCxuLCEwKX19KSx5LmZvY3VzaW58fFMuZWFjaCh7Zm9jdXM6XCJmb2N1c2luXCIsYmx1cjpcImZvY3Vzb3V0XCJ9LGZ1bmN0aW9uKG4scil7dmFyIGk9ZnVuY3Rpb24oZSl7Uy5ldmVudC5zaW11bGF0ZShyLGUudGFyZ2V0LFMuZXZlbnQuZml4KGUpKX07Uy5ldmVudC5zcGVjaWFsW3JdPXtzZXR1cDpmdW5jdGlvbigpe3ZhciBlPXRoaXMub3duZXJEb2N1bWVudHx8dGhpcy5kb2N1bWVudHx8dGhpcyx0PVkuYWNjZXNzKGUscik7dHx8ZS5hZGRFdmVudExpc3RlbmVyKG4saSwhMCksWS5hY2Nlc3MoZSxyLCh0fHwwKSsxKX0sdGVhcmRvd246ZnVuY3Rpb24oKXt2YXIgZT10aGlzLm93bmVyRG9jdW1lbnR8fHRoaXMuZG9jdW1lbnR8fHRoaXMsdD1ZLmFjY2VzcyhlLHIpLTE7dD9ZLmFjY2VzcyhlLHIsdCk6KGUucmVtb3ZlRXZlbnRMaXN0ZW5lcihuLGksITApLFkucmVtb3ZlKGUscikpfX19KTt2YXIgVHQ9Qy5sb2NhdGlvbixDdD17Z3VpZDpEYXRlLm5vdygpfSxFdD0vXFw/LztTLnBhcnNlWE1MPWZ1bmN0aW9uKGUpe3ZhciB0O2lmKCFlfHxcInN0cmluZ1wiIT10eXBlb2YgZSlyZXR1cm4gbnVsbDt0cnl7dD0obmV3IEMuRE9NUGFyc2VyKS5wYXJzZUZyb21TdHJpbmcoZSxcInRleHQveG1sXCIpfWNhdGNoKGUpe3Q9dm9pZCAwfXJldHVybiB0JiYhdC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInBhcnNlcmVycm9yXCIpLmxlbmd0aHx8Uy5lcnJvcihcIkludmFsaWQgWE1MOiBcIitlKSx0fTt2YXIgU3Q9L1xcW1xcXSQvLGt0PS9cXHI/XFxuL2csQXQ9L14oPzpzdWJtaXR8YnV0dG9ufGltYWdlfHJlc2V0fGZpbGUpJC9pLE50PS9eKD86aW5wdXR8c2VsZWN0fHRleHRhcmVhfGtleWdlbikvaTtmdW5jdGlvbiBEdChuLGUscixpKXt2YXIgdDtpZihBcnJheS5pc0FycmF5KGUpKVMuZWFjaChlLGZ1bmN0aW9uKGUsdCl7cnx8U3QudGVzdChuKT9pKG4sdCk6RHQobitcIltcIisoXCJvYmplY3RcIj09dHlwZW9mIHQmJm51bGwhPXQ/ZTpcIlwiKStcIl1cIix0LHIsaSl9KTtlbHNlIGlmKHJ8fFwib2JqZWN0XCIhPT13KGUpKWkobixlKTtlbHNlIGZvcih0IGluIGUpRHQobitcIltcIit0K1wiXVwiLGVbdF0scixpKX1TLnBhcmFtPWZ1bmN0aW9uKGUsdCl7dmFyIG4scj1bXSxpPWZ1bmN0aW9uKGUsdCl7dmFyIG49bSh0KT90KCk6dDtyW3IubGVuZ3RoXT1lbmNvZGVVUklDb21wb25lbnQoZSkrXCI9XCIrZW5jb2RlVVJJQ29tcG9uZW50KG51bGw9PW4/XCJcIjpuKX07aWYobnVsbD09ZSlyZXR1cm5cIlwiO2lmKEFycmF5LmlzQXJyYXkoZSl8fGUuanF1ZXJ5JiYhUy5pc1BsYWluT2JqZWN0KGUpKVMuZWFjaChlLGZ1bmN0aW9uKCl7aSh0aGlzLm5hbWUsdGhpcy52YWx1ZSl9KTtlbHNlIGZvcihuIGluIGUpRHQobixlW25dLHQsaSk7cmV0dXJuIHIuam9pbihcIiZcIil9LFMuZm4uZXh0ZW5kKHtzZXJpYWxpemU6ZnVuY3Rpb24oKXtyZXR1cm4gUy5wYXJhbSh0aGlzLnNlcmlhbGl6ZUFycmF5KCkpfSxzZXJpYWxpemVBcnJheTpmdW5jdGlvbigpe3JldHVybiB0aGlzLm1hcChmdW5jdGlvbigpe3ZhciBlPVMucHJvcCh0aGlzLFwiZWxlbWVudHNcIik7cmV0dXJuIGU/Uy5tYWtlQXJyYXkoZSk6dGhpc30pLmZpbHRlcihmdW5jdGlvbigpe3ZhciBlPXRoaXMudHlwZTtyZXR1cm4gdGhpcy5uYW1lJiYhUyh0aGlzKS5pcyhcIjpkaXNhYmxlZFwiKSYmTnQudGVzdCh0aGlzLm5vZGVOYW1lKSYmIUF0LnRlc3QoZSkmJih0aGlzLmNoZWNrZWR8fCFwZS50ZXN0KGUpKX0pLm1hcChmdW5jdGlvbihlLHQpe3ZhciBuPVModGhpcykudmFsKCk7cmV0dXJuIG51bGw9PW4/bnVsbDpBcnJheS5pc0FycmF5KG4pP1MubWFwKG4sZnVuY3Rpb24oZSl7cmV0dXJue25hbWU6dC5uYW1lLHZhbHVlOmUucmVwbGFjZShrdCxcIlxcclxcblwiKX19KTp7bmFtZTp0Lm5hbWUsdmFsdWU6bi5yZXBsYWNlKGt0LFwiXFxyXFxuXCIpfX0pLmdldCgpfX0pO3ZhciBqdD0vJTIwL2cscXQ9LyMuKiQvLEx0PS8oWz8mXSlfPVteJl0qLyxIdD0vXiguKj8pOlsgXFx0XSooW15cXHJcXG5dKikkL2dtLE90PS9eKD86R0VUfEhFQUQpJC8sUHQ9L15cXC9cXC8vLFJ0PXt9LE10PXt9LEl0PVwiKi9cIi5jb25jYXQoXCIqXCIpLFd0PUUuY3JlYXRlRWxlbWVudChcImFcIik7ZnVuY3Rpb24gRnQobyl7cmV0dXJuIGZ1bmN0aW9uKGUsdCl7XCJzdHJpbmdcIiE9dHlwZW9mIGUmJih0PWUsZT1cIipcIik7dmFyIG4scj0wLGk9ZS50b0xvd2VyQ2FzZSgpLm1hdGNoKFApfHxbXTtpZihtKHQpKXdoaWxlKG49aVtyKytdKVwiK1wiPT09blswXT8obj1uLnNsaWNlKDEpfHxcIipcIiwob1tuXT1vW25dfHxbXSkudW5zaGlmdCh0KSk6KG9bbl09b1tuXXx8W10pLnB1c2godCl9fWZ1bmN0aW9uIEJ0KHQsaSxvLGEpe3ZhciBzPXt9LHU9dD09PU10O2Z1bmN0aW9uIGwoZSl7dmFyIHI7cmV0dXJuIHNbZV09ITAsUy5lYWNoKHRbZV18fFtdLGZ1bmN0aW9uKGUsdCl7dmFyIG49dChpLG8sYSk7cmV0dXJuXCJzdHJpbmdcIiE9dHlwZW9mIG58fHV8fHNbbl0/dT8hKHI9bik6dm9pZCAwOihpLmRhdGFUeXBlcy51bnNoaWZ0KG4pLGwobiksITEpfSkscn1yZXR1cm4gbChpLmRhdGFUeXBlc1swXSl8fCFzW1wiKlwiXSYmbChcIipcIil9ZnVuY3Rpb24gJHQoZSx0KXt2YXIgbixyLGk9Uy5hamF4U2V0dGluZ3MuZmxhdE9wdGlvbnN8fHt9O2ZvcihuIGluIHQpdm9pZCAwIT09dFtuXSYmKChpW25dP2U6cnx8KHI9e30pKVtuXT10W25dKTtyZXR1cm4gciYmUy5leHRlbmQoITAsZSxyKSxlfVd0LmhyZWY9VHQuaHJlZixTLmV4dGVuZCh7YWN0aXZlOjAsbGFzdE1vZGlmaWVkOnt9LGV0YWc6e30sYWpheFNldHRpbmdzOnt1cmw6VHQuaHJlZix0eXBlOlwiR0VUXCIsaXNMb2NhbDovXig/OmFib3V0fGFwcHxhcHAtc3RvcmFnZXwuKy1leHRlbnNpb258ZmlsZXxyZXN8d2lkZ2V0KTokLy50ZXN0KFR0LnByb3RvY29sKSxnbG9iYWw6ITAscHJvY2Vzc0RhdGE6ITAsYXN5bmM6ITAsY29udGVudFR5cGU6XCJhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWQ7IGNoYXJzZXQ9VVRGLThcIixhY2NlcHRzOntcIipcIjpJdCx0ZXh0OlwidGV4dC9wbGFpblwiLGh0bWw6XCJ0ZXh0L2h0bWxcIix4bWw6XCJhcHBsaWNhdGlvbi94bWwsIHRleHQveG1sXCIsanNvbjpcImFwcGxpY2F0aW9uL2pzb24sIHRleHQvamF2YXNjcmlwdFwifSxjb250ZW50czp7eG1sOi9cXGJ4bWxcXGIvLGh0bWw6L1xcYmh0bWwvLGpzb246L1xcYmpzb25cXGIvfSxyZXNwb25zZUZpZWxkczp7eG1sOlwicmVzcG9uc2VYTUxcIix0ZXh0OlwicmVzcG9uc2VUZXh0XCIsanNvbjpcInJlc3BvbnNlSlNPTlwifSxjb252ZXJ0ZXJzOntcIiogdGV4dFwiOlN0cmluZyxcInRleHQgaHRtbFwiOiEwLFwidGV4dCBqc29uXCI6SlNPTi5wYXJzZSxcInRleHQgeG1sXCI6Uy5wYXJzZVhNTH0sZmxhdE9wdGlvbnM6e3VybDohMCxjb250ZXh0OiEwfX0sYWpheFNldHVwOmZ1bmN0aW9uKGUsdCl7cmV0dXJuIHQ/JHQoJHQoZSxTLmFqYXhTZXR0aW5ncyksdCk6JHQoUy5hamF4U2V0dGluZ3MsZSl9LGFqYXhQcmVmaWx0ZXI6RnQoUnQpLGFqYXhUcmFuc3BvcnQ6RnQoTXQpLGFqYXg6ZnVuY3Rpb24oZSx0KXtcIm9iamVjdFwiPT10eXBlb2YgZSYmKHQ9ZSxlPXZvaWQgMCksdD10fHx7fTt2YXIgYyxmLHAsbixkLHIsaCxnLGksbyx2PVMuYWpheFNldHVwKHt9LHQpLHk9di5jb250ZXh0fHx2LG09di5jb250ZXh0JiYoeS5ub2RlVHlwZXx8eS5qcXVlcnkpP1MoeSk6Uy5ldmVudCx4PVMuRGVmZXJyZWQoKSxiPVMuQ2FsbGJhY2tzKFwib25jZSBtZW1vcnlcIiksdz12LnN0YXR1c0NvZGV8fHt9LGE9e30scz17fSx1PVwiY2FuY2VsZWRcIixUPXtyZWFkeVN0YXRlOjAsZ2V0UmVzcG9uc2VIZWFkZXI6ZnVuY3Rpb24oZSl7dmFyIHQ7aWYoaCl7aWYoIW4pe249e307d2hpbGUodD1IdC5leGVjKHApKW5bdFsxXS50b0xvd2VyQ2FzZSgpK1wiIFwiXT0oblt0WzFdLnRvTG93ZXJDYXNlKCkrXCIgXCJdfHxbXSkuY29uY2F0KHRbMl0pfXQ9bltlLnRvTG93ZXJDYXNlKCkrXCIgXCJdfXJldHVybiBudWxsPT10P251bGw6dC5qb2luKFwiLCBcIil9LGdldEFsbFJlc3BvbnNlSGVhZGVyczpmdW5jdGlvbigpe3JldHVybiBoP3A6bnVsbH0sc2V0UmVxdWVzdEhlYWRlcjpmdW5jdGlvbihlLHQpe3JldHVybiBudWxsPT1oJiYoZT1zW2UudG9Mb3dlckNhc2UoKV09c1tlLnRvTG93ZXJDYXNlKCldfHxlLGFbZV09dCksdGhpc30sb3ZlcnJpZGVNaW1lVHlwZTpmdW5jdGlvbihlKXtyZXR1cm4gbnVsbD09aCYmKHYubWltZVR5cGU9ZSksdGhpc30sc3RhdHVzQ29kZTpmdW5jdGlvbihlKXt2YXIgdDtpZihlKWlmKGgpVC5hbHdheXMoZVtULnN0YXR1c10pO2Vsc2UgZm9yKHQgaW4gZSl3W3RdPVt3W3RdLGVbdF1dO3JldHVybiB0aGlzfSxhYm9ydDpmdW5jdGlvbihlKXt2YXIgdD1lfHx1O3JldHVybiBjJiZjLmFib3J0KHQpLGwoMCx0KSx0aGlzfX07aWYoeC5wcm9taXNlKFQpLHYudXJsPSgoZXx8di51cmx8fFR0LmhyZWYpK1wiXCIpLnJlcGxhY2UoUHQsVHQucHJvdG9jb2wrXCIvL1wiKSx2LnR5cGU9dC5tZXRob2R8fHQudHlwZXx8di5tZXRob2R8fHYudHlwZSx2LmRhdGFUeXBlcz0odi5kYXRhVHlwZXx8XCIqXCIpLnRvTG93ZXJDYXNlKCkubWF0Y2goUCl8fFtcIlwiXSxudWxsPT12LmNyb3NzRG9tYWluKXtyPUUuY3JlYXRlRWxlbWVudChcImFcIik7dHJ5e3IuaHJlZj12LnVybCxyLmhyZWY9ci5ocmVmLHYuY3Jvc3NEb21haW49V3QucHJvdG9jb2wrXCIvL1wiK1d0Lmhvc3QhPXIucHJvdG9jb2wrXCIvL1wiK3IuaG9zdH1jYXRjaChlKXt2LmNyb3NzRG9tYWluPSEwfX1pZih2LmRhdGEmJnYucHJvY2Vzc0RhdGEmJlwic3RyaW5nXCIhPXR5cGVvZiB2LmRhdGEmJih2LmRhdGE9Uy5wYXJhbSh2LmRhdGEsdi50cmFkaXRpb25hbCkpLEJ0KFJ0LHYsdCxUKSxoKXJldHVybiBUO2ZvcihpIGluKGc9Uy5ldmVudCYmdi5nbG9iYWwpJiYwPT1TLmFjdGl2ZSsrJiZTLmV2ZW50LnRyaWdnZXIoXCJhamF4U3RhcnRcIiksdi50eXBlPXYudHlwZS50b1VwcGVyQ2FzZSgpLHYuaGFzQ29udGVudD0hT3QudGVzdCh2LnR5cGUpLGY9di51cmwucmVwbGFjZShxdCxcIlwiKSx2Lmhhc0NvbnRlbnQ/di5kYXRhJiZ2LnByb2Nlc3NEYXRhJiYwPT09KHYuY29udGVudFR5cGV8fFwiXCIpLmluZGV4T2YoXCJhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWRcIikmJih2LmRhdGE9di5kYXRhLnJlcGxhY2UoanQsXCIrXCIpKToobz12LnVybC5zbGljZShmLmxlbmd0aCksdi5kYXRhJiYodi5wcm9jZXNzRGF0YXx8XCJzdHJpbmdcIj09dHlwZW9mIHYuZGF0YSkmJihmKz0oRXQudGVzdChmKT9cIiZcIjpcIj9cIikrdi5kYXRhLGRlbGV0ZSB2LmRhdGEpLCExPT09di5jYWNoZSYmKGY9Zi5yZXBsYWNlKEx0LFwiJDFcIiksbz0oRXQudGVzdChmKT9cIiZcIjpcIj9cIikrXCJfPVwiK0N0Lmd1aWQrKytvKSx2LnVybD1mK28pLHYuaWZNb2RpZmllZCYmKFMubGFzdE1vZGlmaWVkW2ZdJiZULnNldFJlcXVlc3RIZWFkZXIoXCJJZi1Nb2RpZmllZC1TaW5jZVwiLFMubGFzdE1vZGlmaWVkW2ZdKSxTLmV0YWdbZl0mJlQuc2V0UmVxdWVzdEhlYWRlcihcIklmLU5vbmUtTWF0Y2hcIixTLmV0YWdbZl0pKSwodi5kYXRhJiZ2Lmhhc0NvbnRlbnQmJiExIT09di5jb250ZW50VHlwZXx8dC5jb250ZW50VHlwZSkmJlQuc2V0UmVxdWVzdEhlYWRlcihcIkNvbnRlbnQtVHlwZVwiLHYuY29udGVudFR5cGUpLFQuc2V0UmVxdWVzdEhlYWRlcihcIkFjY2VwdFwiLHYuZGF0YVR5cGVzWzBdJiZ2LmFjY2VwdHNbdi5kYXRhVHlwZXNbMF1dP3YuYWNjZXB0c1t2LmRhdGFUeXBlc1swXV0rKFwiKlwiIT09di5kYXRhVHlwZXNbMF0/XCIsIFwiK0l0K1wiOyBxPTAuMDFcIjpcIlwiKTp2LmFjY2VwdHNbXCIqXCJdKSx2LmhlYWRlcnMpVC5zZXRSZXF1ZXN0SGVhZGVyKGksdi5oZWFkZXJzW2ldKTtpZih2LmJlZm9yZVNlbmQmJighMT09PXYuYmVmb3JlU2VuZC5jYWxsKHksVCx2KXx8aCkpcmV0dXJuIFQuYWJvcnQoKTtpZih1PVwiYWJvcnRcIixiLmFkZCh2LmNvbXBsZXRlKSxULmRvbmUodi5zdWNjZXNzKSxULmZhaWwodi5lcnJvciksYz1CdChNdCx2LHQsVCkpe2lmKFQucmVhZHlTdGF0ZT0xLGcmJm0udHJpZ2dlcihcImFqYXhTZW5kXCIsW1Qsdl0pLGgpcmV0dXJuIFQ7di5hc3luYyYmMDx2LnRpbWVvdXQmJihkPUMuc2V0VGltZW91dChmdW5jdGlvbigpe1QuYWJvcnQoXCJ0aW1lb3V0XCIpfSx2LnRpbWVvdXQpKTt0cnl7aD0hMSxjLnNlbmQoYSxsKX1jYXRjaChlKXtpZihoKXRocm93IGU7bCgtMSxlKX19ZWxzZSBsKC0xLFwiTm8gVHJhbnNwb3J0XCIpO2Z1bmN0aW9uIGwoZSx0LG4scil7dmFyIGksbyxhLHMsdSxsPXQ7aHx8KGg9ITAsZCYmQy5jbGVhclRpbWVvdXQoZCksYz12b2lkIDAscD1yfHxcIlwiLFQucmVhZHlTdGF0ZT0wPGU/NDowLGk9MjAwPD1lJiZlPDMwMHx8MzA0PT09ZSxuJiYocz1mdW5jdGlvbihlLHQsbil7dmFyIHIsaSxvLGEscz1lLmNvbnRlbnRzLHU9ZS5kYXRhVHlwZXM7d2hpbGUoXCIqXCI9PT11WzBdKXUuc2hpZnQoKSx2b2lkIDA9PT1yJiYocj1lLm1pbWVUeXBlfHx0LmdldFJlc3BvbnNlSGVhZGVyKFwiQ29udGVudC1UeXBlXCIpKTtpZihyKWZvcihpIGluIHMpaWYoc1tpXSYmc1tpXS50ZXN0KHIpKXt1LnVuc2hpZnQoaSk7YnJlYWt9aWYodVswXWluIG4pbz11WzBdO2Vsc2V7Zm9yKGkgaW4gbil7aWYoIXVbMF18fGUuY29udmVydGVyc1tpK1wiIFwiK3VbMF1dKXtvPWk7YnJlYWt9YXx8KGE9aSl9bz1vfHxhfWlmKG8pcmV0dXJuIG8hPT11WzBdJiZ1LnVuc2hpZnQobyksbltvXX0odixULG4pKSwhaSYmLTE8Uy5pbkFycmF5KFwic2NyaXB0XCIsdi5kYXRhVHlwZXMpJiYodi5jb252ZXJ0ZXJzW1widGV4dCBzY3JpcHRcIl09ZnVuY3Rpb24oKXt9KSxzPWZ1bmN0aW9uKGUsdCxuLHIpe3ZhciBpLG8sYSxzLHUsbD17fSxjPWUuZGF0YVR5cGVzLnNsaWNlKCk7aWYoY1sxXSlmb3IoYSBpbiBlLmNvbnZlcnRlcnMpbFthLnRvTG93ZXJDYXNlKCldPWUuY29udmVydGVyc1thXTtvPWMuc2hpZnQoKTt3aGlsZShvKWlmKGUucmVzcG9uc2VGaWVsZHNbb10mJihuW2UucmVzcG9uc2VGaWVsZHNbb11dPXQpLCF1JiZyJiZlLmRhdGFGaWx0ZXImJih0PWUuZGF0YUZpbHRlcih0LGUuZGF0YVR5cGUpKSx1PW8sbz1jLnNoaWZ0KCkpaWYoXCIqXCI9PT1vKW89dTtlbHNlIGlmKFwiKlwiIT09dSYmdSE9PW8pe2lmKCEoYT1sW3UrXCIgXCIrb118fGxbXCIqIFwiK29dKSlmb3IoaSBpbiBsKWlmKChzPWkuc3BsaXQoXCIgXCIpKVsxXT09PW8mJihhPWxbdStcIiBcIitzWzBdXXx8bFtcIiogXCIrc1swXV0pKXshMD09PWE/YT1sW2ldOiEwIT09bFtpXSYmKG89c1swXSxjLnVuc2hpZnQoc1sxXSkpO2JyZWFrfWlmKCEwIT09YSlpZihhJiZlW1widGhyb3dzXCJdKXQ9YSh0KTtlbHNlIHRyeXt0PWEodCl9Y2F0Y2goZSl7cmV0dXJue3N0YXRlOlwicGFyc2VyZXJyb3JcIixlcnJvcjphP2U6XCJObyBjb252ZXJzaW9uIGZyb20gXCIrdStcIiB0byBcIitvfX19cmV0dXJue3N0YXRlOlwic3VjY2Vzc1wiLGRhdGE6dH19KHYscyxULGkpLGk/KHYuaWZNb2RpZmllZCYmKCh1PVQuZ2V0UmVzcG9uc2VIZWFkZXIoXCJMYXN0LU1vZGlmaWVkXCIpKSYmKFMubGFzdE1vZGlmaWVkW2ZdPXUpLCh1PVQuZ2V0UmVzcG9uc2VIZWFkZXIoXCJldGFnXCIpKSYmKFMuZXRhZ1tmXT11KSksMjA0PT09ZXx8XCJIRUFEXCI9PT12LnR5cGU/bD1cIm5vY29udGVudFwiOjMwND09PWU/bD1cIm5vdG1vZGlmaWVkXCI6KGw9cy5zdGF0ZSxvPXMuZGF0YSxpPSEoYT1zLmVycm9yKSkpOihhPWwsIWUmJmx8fChsPVwiZXJyb3JcIixlPDAmJihlPTApKSksVC5zdGF0dXM9ZSxULnN0YXR1c1RleHQ9KHR8fGwpK1wiXCIsaT94LnJlc29sdmVXaXRoKHksW28sbCxUXSk6eC5yZWplY3RXaXRoKHksW1QsbCxhXSksVC5zdGF0dXNDb2RlKHcpLHc9dm9pZCAwLGcmJm0udHJpZ2dlcihpP1wiYWpheFN1Y2Nlc3NcIjpcImFqYXhFcnJvclwiLFtULHYsaT9vOmFdKSxiLmZpcmVXaXRoKHksW1QsbF0pLGcmJihtLnRyaWdnZXIoXCJhamF4Q29tcGxldGVcIixbVCx2XSksLS1TLmFjdGl2ZXx8Uy5ldmVudC50cmlnZ2VyKFwiYWpheFN0b3BcIikpKX1yZXR1cm4gVH0sZ2V0SlNPTjpmdW5jdGlvbihlLHQsbil7cmV0dXJuIFMuZ2V0KGUsdCxuLFwianNvblwiKX0sZ2V0U2NyaXB0OmZ1bmN0aW9uKGUsdCl7cmV0dXJuIFMuZ2V0KGUsdm9pZCAwLHQsXCJzY3JpcHRcIil9fSksUy5lYWNoKFtcImdldFwiLFwicG9zdFwiXSxmdW5jdGlvbihlLGkpe1NbaV09ZnVuY3Rpb24oZSx0LG4scil7cmV0dXJuIG0odCkmJihyPXJ8fG4sbj10LHQ9dm9pZCAwKSxTLmFqYXgoUy5leHRlbmQoe3VybDplLHR5cGU6aSxkYXRhVHlwZTpyLGRhdGE6dCxzdWNjZXNzOm59LFMuaXNQbGFpbk9iamVjdChlKSYmZSkpfX0pLFMuYWpheFByZWZpbHRlcihmdW5jdGlvbihlKXt2YXIgdDtmb3IodCBpbiBlLmhlYWRlcnMpXCJjb250ZW50LXR5cGVcIj09PXQudG9Mb3dlckNhc2UoKSYmKGUuY29udGVudFR5cGU9ZS5oZWFkZXJzW3RdfHxcIlwiKX0pLFMuX2V2YWxVcmw9ZnVuY3Rpb24oZSx0LG4pe3JldHVybiBTLmFqYXgoe3VybDplLHR5cGU6XCJHRVRcIixkYXRhVHlwZTpcInNjcmlwdFwiLGNhY2hlOiEwLGFzeW5jOiExLGdsb2JhbDohMSxjb252ZXJ0ZXJzOntcInRleHQgc2NyaXB0XCI6ZnVuY3Rpb24oKXt9fSxkYXRhRmlsdGVyOmZ1bmN0aW9uKGUpe1MuZ2xvYmFsRXZhbChlLHQsbil9fSl9LFMuZm4uZXh0ZW5kKHt3cmFwQWxsOmZ1bmN0aW9uKGUpe3ZhciB0O3JldHVybiB0aGlzWzBdJiYobShlKSYmKGU9ZS5jYWxsKHRoaXNbMF0pKSx0PVMoZSx0aGlzWzBdLm93bmVyRG9jdW1lbnQpLmVxKDApLmNsb25lKCEwKSx0aGlzWzBdLnBhcmVudE5vZGUmJnQuaW5zZXJ0QmVmb3JlKHRoaXNbMF0pLHQubWFwKGZ1bmN0aW9uKCl7dmFyIGU9dGhpczt3aGlsZShlLmZpcnN0RWxlbWVudENoaWxkKWU9ZS5maXJzdEVsZW1lbnRDaGlsZDtyZXR1cm4gZX0pLmFwcGVuZCh0aGlzKSksdGhpc30sd3JhcElubmVyOmZ1bmN0aW9uKG4pe3JldHVybiBtKG4pP3RoaXMuZWFjaChmdW5jdGlvbihlKXtTKHRoaXMpLndyYXBJbm5lcihuLmNhbGwodGhpcyxlKSl9KTp0aGlzLmVhY2goZnVuY3Rpb24oKXt2YXIgZT1TKHRoaXMpLHQ9ZS5jb250ZW50cygpO3QubGVuZ3RoP3Qud3JhcEFsbChuKTplLmFwcGVuZChuKX0pfSx3cmFwOmZ1bmN0aW9uKHQpe3ZhciBuPW0odCk7cmV0dXJuIHRoaXMuZWFjaChmdW5jdGlvbihlKXtTKHRoaXMpLndyYXBBbGwobj90LmNhbGwodGhpcyxlKTp0KX0pfSx1bndyYXA6ZnVuY3Rpb24oZSl7cmV0dXJuIHRoaXMucGFyZW50KGUpLm5vdChcImJvZHlcIikuZWFjaChmdW5jdGlvbigpe1ModGhpcykucmVwbGFjZVdpdGgodGhpcy5jaGlsZE5vZGVzKX0pLHRoaXN9fSksUy5leHByLnBzZXVkb3MuaGlkZGVuPWZ1bmN0aW9uKGUpe3JldHVybiFTLmV4cHIucHNldWRvcy52aXNpYmxlKGUpfSxTLmV4cHIucHNldWRvcy52aXNpYmxlPWZ1bmN0aW9uKGUpe3JldHVybiEhKGUub2Zmc2V0V2lkdGh8fGUub2Zmc2V0SGVpZ2h0fHxlLmdldENsaWVudFJlY3RzKCkubGVuZ3RoKX0sUy5hamF4U2V0dGluZ3MueGhyPWZ1bmN0aW9uKCl7dHJ5e3JldHVybiBuZXcgQy5YTUxIdHRwUmVxdWVzdH1jYXRjaChlKXt9fTt2YXIgX3Q9ezA6MjAwLDEyMjM6MjA0fSx6dD1TLmFqYXhTZXR0aW5ncy54aHIoKTt5LmNvcnM9ISF6dCYmXCJ3aXRoQ3JlZGVudGlhbHNcImluIHp0LHkuYWpheD16dD0hIXp0LFMuYWpheFRyYW5zcG9ydChmdW5jdGlvbihpKXt2YXIgbyxhO2lmKHkuY29yc3x8enQmJiFpLmNyb3NzRG9tYWluKXJldHVybntzZW5kOmZ1bmN0aW9uKGUsdCl7dmFyIG4scj1pLnhocigpO2lmKHIub3BlbihpLnR5cGUsaS51cmwsaS5hc3luYyxpLnVzZXJuYW1lLGkucGFzc3dvcmQpLGkueGhyRmllbGRzKWZvcihuIGluIGkueGhyRmllbGRzKXJbbl09aS54aHJGaWVsZHNbbl07Zm9yKG4gaW4gaS5taW1lVHlwZSYmci5vdmVycmlkZU1pbWVUeXBlJiZyLm92ZXJyaWRlTWltZVR5cGUoaS5taW1lVHlwZSksaS5jcm9zc0RvbWFpbnx8ZVtcIlgtUmVxdWVzdGVkLVdpdGhcIl18fChlW1wiWC1SZXF1ZXN0ZWQtV2l0aFwiXT1cIlhNTEh0dHBSZXF1ZXN0XCIpLGUpci5zZXRSZXF1ZXN0SGVhZGVyKG4sZVtuXSk7bz1mdW5jdGlvbihlKXtyZXR1cm4gZnVuY3Rpb24oKXtvJiYobz1hPXIub25sb2FkPXIub25lcnJvcj1yLm9uYWJvcnQ9ci5vbnRpbWVvdXQ9ci5vbnJlYWR5c3RhdGVjaGFuZ2U9bnVsbCxcImFib3J0XCI9PT1lP3IuYWJvcnQoKTpcImVycm9yXCI9PT1lP1wibnVtYmVyXCIhPXR5cGVvZiByLnN0YXR1cz90KDAsXCJlcnJvclwiKTp0KHIuc3RhdHVzLHIuc3RhdHVzVGV4dCk6dChfdFtyLnN0YXR1c118fHIuc3RhdHVzLHIuc3RhdHVzVGV4dCxcInRleHRcIiE9PShyLnJlc3BvbnNlVHlwZXx8XCJ0ZXh0XCIpfHxcInN0cmluZ1wiIT10eXBlb2Ygci5yZXNwb25zZVRleHQ/e2JpbmFyeTpyLnJlc3BvbnNlfTp7dGV4dDpyLnJlc3BvbnNlVGV4dH0sci5nZXRBbGxSZXNwb25zZUhlYWRlcnMoKSkpfX0sci5vbmxvYWQ9bygpLGE9ci5vbmVycm9yPXIub250aW1lb3V0PW8oXCJlcnJvclwiKSx2b2lkIDAhPT1yLm9uYWJvcnQ/ci5vbmFib3J0PWE6ci5vbnJlYWR5c3RhdGVjaGFuZ2U9ZnVuY3Rpb24oKXs0PT09ci5yZWFkeVN0YXRlJiZDLnNldFRpbWVvdXQoZnVuY3Rpb24oKXtvJiZhKCl9KX0sbz1vKFwiYWJvcnRcIik7dHJ5e3Iuc2VuZChpLmhhc0NvbnRlbnQmJmkuZGF0YXx8bnVsbCl9Y2F0Y2goZSl7aWYobyl0aHJvdyBlfX0sYWJvcnQ6ZnVuY3Rpb24oKXtvJiZvKCl9fX0pLFMuYWpheFByZWZpbHRlcihmdW5jdGlvbihlKXtlLmNyb3NzRG9tYWluJiYoZS5jb250ZW50cy5zY3JpcHQ9ITEpfSksUy5hamF4U2V0dXAoe2FjY2VwdHM6e3NjcmlwdDpcInRleHQvamF2YXNjcmlwdCwgYXBwbGljYXRpb24vamF2YXNjcmlwdCwgYXBwbGljYXRpb24vZWNtYXNjcmlwdCwgYXBwbGljYXRpb24veC1lY21hc2NyaXB0XCJ9LGNvbnRlbnRzOntzY3JpcHQ6L1xcYig/OmphdmF8ZWNtYSlzY3JpcHRcXGIvfSxjb252ZXJ0ZXJzOntcInRleHQgc2NyaXB0XCI6ZnVuY3Rpb24oZSl7cmV0dXJuIFMuZ2xvYmFsRXZhbChlKSxlfX19KSxTLmFqYXhQcmVmaWx0ZXIoXCJzY3JpcHRcIixmdW5jdGlvbihlKXt2b2lkIDA9PT1lLmNhY2hlJiYoZS5jYWNoZT0hMSksZS5jcm9zc0RvbWFpbiYmKGUudHlwZT1cIkdFVFwiKX0pLFMuYWpheFRyYW5zcG9ydChcInNjcmlwdFwiLGZ1bmN0aW9uKG4pe3ZhciByLGk7aWYobi5jcm9zc0RvbWFpbnx8bi5zY3JpcHRBdHRycylyZXR1cm57c2VuZDpmdW5jdGlvbihlLHQpe3I9UyhcIjxzY3JpcHQ+XCIpLmF0dHIobi5zY3JpcHRBdHRyc3x8e30pLnByb3Aoe2NoYXJzZXQ6bi5zY3JpcHRDaGFyc2V0LHNyYzpuLnVybH0pLm9uKFwibG9hZCBlcnJvclwiLGk9ZnVuY3Rpb24oZSl7ci5yZW1vdmUoKSxpPW51bGwsZSYmdChcImVycm9yXCI9PT1lLnR5cGU/NDA0OjIwMCxlLnR5cGUpfSksRS5oZWFkLmFwcGVuZENoaWxkKHJbMF0pfSxhYm9ydDpmdW5jdGlvbigpe2kmJmkoKX19fSk7dmFyIFV0LFh0PVtdLFZ0PS8oPSlcXD8oPz0mfCQpfFxcP1xcPy87Uy5hamF4U2V0dXAoe2pzb25wOlwiY2FsbGJhY2tcIixqc29ucENhbGxiYWNrOmZ1bmN0aW9uKCl7dmFyIGU9WHQucG9wKCl8fFMuZXhwYW5kbytcIl9cIitDdC5ndWlkKys7cmV0dXJuIHRoaXNbZV09ITAsZX19KSxTLmFqYXhQcmVmaWx0ZXIoXCJqc29uIGpzb25wXCIsZnVuY3Rpb24oZSx0LG4pe3ZhciByLGksbyxhPSExIT09ZS5qc29ucCYmKFZ0LnRlc3QoZS51cmwpP1widXJsXCI6XCJzdHJpbmdcIj09dHlwZW9mIGUuZGF0YSYmMD09PShlLmNvbnRlbnRUeXBlfHxcIlwiKS5pbmRleE9mKFwiYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkXCIpJiZWdC50ZXN0KGUuZGF0YSkmJlwiZGF0YVwiKTtpZihhfHxcImpzb25wXCI9PT1lLmRhdGFUeXBlc1swXSlyZXR1cm4gcj1lLmpzb25wQ2FsbGJhY2s9bShlLmpzb25wQ2FsbGJhY2spP2UuanNvbnBDYWxsYmFjaygpOmUuanNvbnBDYWxsYmFjayxhP2VbYV09ZVthXS5yZXBsYWNlKFZ0LFwiJDFcIityKTohMSE9PWUuanNvbnAmJihlLnVybCs9KEV0LnRlc3QoZS51cmwpP1wiJlwiOlwiP1wiKStlLmpzb25wK1wiPVwiK3IpLGUuY29udmVydGVyc1tcInNjcmlwdCBqc29uXCJdPWZ1bmN0aW9uKCl7cmV0dXJuIG98fFMuZXJyb3IocitcIiB3YXMgbm90IGNhbGxlZFwiKSxvWzBdfSxlLmRhdGFUeXBlc1swXT1cImpzb25cIixpPUNbcl0sQ1tyXT1mdW5jdGlvbigpe289YXJndW1lbnRzfSxuLmFsd2F5cyhmdW5jdGlvbigpe3ZvaWQgMD09PWk/UyhDKS5yZW1vdmVQcm9wKHIpOkNbcl09aSxlW3JdJiYoZS5qc29ucENhbGxiYWNrPXQuanNvbnBDYWxsYmFjayxYdC5wdXNoKHIpKSxvJiZtKGkpJiZpKG9bMF0pLG89aT12b2lkIDB9KSxcInNjcmlwdFwifSkseS5jcmVhdGVIVE1MRG9jdW1lbnQ9KChVdD1FLmltcGxlbWVudGF0aW9uLmNyZWF0ZUhUTUxEb2N1bWVudChcIlwiKS5ib2R5KS5pbm5lckhUTUw9XCI8Zm9ybT48L2Zvcm0+PGZvcm0+PC9mb3JtPlwiLDI9PT1VdC5jaGlsZE5vZGVzLmxlbmd0aCksUy5wYXJzZUhUTUw9ZnVuY3Rpb24oZSx0LG4pe3JldHVyblwic3RyaW5nXCIhPXR5cGVvZiBlP1tdOihcImJvb2xlYW5cIj09dHlwZW9mIHQmJihuPXQsdD0hMSksdHx8KHkuY3JlYXRlSFRNTERvY3VtZW50Pygocj0odD1FLmltcGxlbWVudGF0aW9uLmNyZWF0ZUhUTUxEb2N1bWVudChcIlwiKSkuY3JlYXRlRWxlbWVudChcImJhc2VcIikpLmhyZWY9RS5sb2NhdGlvbi5ocmVmLHQuaGVhZC5hcHBlbmRDaGlsZChyKSk6dD1FKSxvPSFuJiZbXSwoaT1OLmV4ZWMoZSkpP1t0LmNyZWF0ZUVsZW1lbnQoaVsxXSldOihpPXhlKFtlXSx0LG8pLG8mJm8ubGVuZ3RoJiZTKG8pLnJlbW92ZSgpLFMubWVyZ2UoW10saS5jaGlsZE5vZGVzKSkpO3ZhciByLGksb30sUy5mbi5sb2FkPWZ1bmN0aW9uKGUsdCxuKXt2YXIgcixpLG8sYT10aGlzLHM9ZS5pbmRleE9mKFwiIFwiKTtyZXR1cm4tMTxzJiYocj12dChlLnNsaWNlKHMpKSxlPWUuc2xpY2UoMCxzKSksbSh0KT8obj10LHQ9dm9pZCAwKTp0JiZcIm9iamVjdFwiPT10eXBlb2YgdCYmKGk9XCJQT1NUXCIpLDA8YS5sZW5ndGgmJlMuYWpheCh7dXJsOmUsdHlwZTppfHxcIkdFVFwiLGRhdGFUeXBlOlwiaHRtbFwiLGRhdGE6dH0pLmRvbmUoZnVuY3Rpb24oZSl7bz1hcmd1bWVudHMsYS5odG1sKHI/UyhcIjxkaXY+XCIpLmFwcGVuZChTLnBhcnNlSFRNTChlKSkuZmluZChyKTplKX0pLmFsd2F5cyhuJiZmdW5jdGlvbihlLHQpe2EuZWFjaChmdW5jdGlvbigpe24uYXBwbHkodGhpcyxvfHxbZS5yZXNwb25zZVRleHQsdCxlXSl9KX0pLHRoaXN9LFMuZXhwci5wc2V1ZG9zLmFuaW1hdGVkPWZ1bmN0aW9uKHQpe3JldHVybiBTLmdyZXAoUy50aW1lcnMsZnVuY3Rpb24oZSl7cmV0dXJuIHQ9PT1lLmVsZW19KS5sZW5ndGh9LFMub2Zmc2V0PXtzZXRPZmZzZXQ6ZnVuY3Rpb24oZSx0LG4pe3ZhciByLGksbyxhLHMsdSxsPVMuY3NzKGUsXCJwb3NpdGlvblwiKSxjPVMoZSksZj17fTtcInN0YXRpY1wiPT09bCYmKGUuc3R5bGUucG9zaXRpb249XCJyZWxhdGl2ZVwiKSxzPWMub2Zmc2V0KCksbz1TLmNzcyhlLFwidG9wXCIpLHU9Uy5jc3MoZSxcImxlZnRcIiksKFwiYWJzb2x1dGVcIj09PWx8fFwiZml4ZWRcIj09PWwpJiYtMTwobyt1KS5pbmRleE9mKFwiYXV0b1wiKT8oYT0ocj1jLnBvc2l0aW9uKCkpLnRvcCxpPXIubGVmdCk6KGE9cGFyc2VGbG9hdChvKXx8MCxpPXBhcnNlRmxvYXQodSl8fDApLG0odCkmJih0PXQuY2FsbChlLG4sUy5leHRlbmQoe30scykpKSxudWxsIT10LnRvcCYmKGYudG9wPXQudG9wLXMudG9wK2EpLG51bGwhPXQubGVmdCYmKGYubGVmdD10LmxlZnQtcy5sZWZ0K2kpLFwidXNpbmdcImluIHQ/dC51c2luZy5jYWxsKGUsZik6KFwibnVtYmVyXCI9PXR5cGVvZiBmLnRvcCYmKGYudG9wKz1cInB4XCIpLFwibnVtYmVyXCI9PXR5cGVvZiBmLmxlZnQmJihmLmxlZnQrPVwicHhcIiksYy5jc3MoZikpfX0sUy5mbi5leHRlbmQoe29mZnNldDpmdW5jdGlvbih0KXtpZihhcmd1bWVudHMubGVuZ3RoKXJldHVybiB2b2lkIDA9PT10P3RoaXM6dGhpcy5lYWNoKGZ1bmN0aW9uKGUpe1Mub2Zmc2V0LnNldE9mZnNldCh0aGlzLHQsZSl9KTt2YXIgZSxuLHI9dGhpc1swXTtyZXR1cm4gcj9yLmdldENsaWVudFJlY3RzKCkubGVuZ3RoPyhlPXIuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCksbj1yLm93bmVyRG9jdW1lbnQuZGVmYXVsdFZpZXcse3RvcDplLnRvcCtuLnBhZ2VZT2Zmc2V0LGxlZnQ6ZS5sZWZ0K24ucGFnZVhPZmZzZXR9KTp7dG9wOjAsbGVmdDowfTp2b2lkIDB9LHBvc2l0aW9uOmZ1bmN0aW9uKCl7aWYodGhpc1swXSl7dmFyIGUsdCxuLHI9dGhpc1swXSxpPXt0b3A6MCxsZWZ0OjB9O2lmKFwiZml4ZWRcIj09PVMuY3NzKHIsXCJwb3NpdGlvblwiKSl0PXIuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7ZWxzZXt0PXRoaXMub2Zmc2V0KCksbj1yLm93bmVyRG9jdW1lbnQsZT1yLm9mZnNldFBhcmVudHx8bi5kb2N1bWVudEVsZW1lbnQ7d2hpbGUoZSYmKGU9PT1uLmJvZHl8fGU9PT1uLmRvY3VtZW50RWxlbWVudCkmJlwic3RhdGljXCI9PT1TLmNzcyhlLFwicG9zaXRpb25cIikpZT1lLnBhcmVudE5vZGU7ZSYmZSE9PXImJjE9PT1lLm5vZGVUeXBlJiYoKGk9UyhlKS5vZmZzZXQoKSkudG9wKz1TLmNzcyhlLFwiYm9yZGVyVG9wV2lkdGhcIiwhMCksaS5sZWZ0Kz1TLmNzcyhlLFwiYm9yZGVyTGVmdFdpZHRoXCIsITApKX1yZXR1cm57dG9wOnQudG9wLWkudG9wLVMuY3NzKHIsXCJtYXJnaW5Ub3BcIiwhMCksbGVmdDp0LmxlZnQtaS5sZWZ0LVMuY3NzKHIsXCJtYXJnaW5MZWZ0XCIsITApfX19LG9mZnNldFBhcmVudDpmdW5jdGlvbigpe3JldHVybiB0aGlzLm1hcChmdW5jdGlvbigpe3ZhciBlPXRoaXMub2Zmc2V0UGFyZW50O3doaWxlKGUmJlwic3RhdGljXCI9PT1TLmNzcyhlLFwicG9zaXRpb25cIikpZT1lLm9mZnNldFBhcmVudDtyZXR1cm4gZXx8cmV9KX19KSxTLmVhY2goe3Njcm9sbExlZnQ6XCJwYWdlWE9mZnNldFwiLHNjcm9sbFRvcDpcInBhZ2VZT2Zmc2V0XCJ9LGZ1bmN0aW9uKHQsaSl7dmFyIG89XCJwYWdlWU9mZnNldFwiPT09aTtTLmZuW3RdPWZ1bmN0aW9uKGUpe3JldHVybiAkKHRoaXMsZnVuY3Rpb24oZSx0LG4pe3ZhciByO2lmKHgoZSk/cj1lOjk9PT1lLm5vZGVUeXBlJiYocj1lLmRlZmF1bHRWaWV3KSx2b2lkIDA9PT1uKXJldHVybiByP3JbaV06ZVt0XTtyP3Iuc2Nyb2xsVG8obz9yLnBhZ2VYT2Zmc2V0Om4sbz9uOnIucGFnZVlPZmZzZXQpOmVbdF09bn0sdCxlLGFyZ3VtZW50cy5sZW5ndGgpfX0pLFMuZWFjaChbXCJ0b3BcIixcImxlZnRcIl0sZnVuY3Rpb24oZSxuKXtTLmNzc0hvb2tzW25dPSRlKHkucGl4ZWxQb3NpdGlvbixmdW5jdGlvbihlLHQpe2lmKHQpcmV0dXJuIHQ9QmUoZSxuKSxNZS50ZXN0KHQpP1MoZSkucG9zaXRpb24oKVtuXStcInB4XCI6dH0pfSksUy5lYWNoKHtIZWlnaHQ6XCJoZWlnaHRcIixXaWR0aDpcIndpZHRoXCJ9LGZ1bmN0aW9uKGEscyl7Uy5lYWNoKHtwYWRkaW5nOlwiaW5uZXJcIithLGNvbnRlbnQ6cyxcIlwiOlwib3V0ZXJcIithfSxmdW5jdGlvbihyLG8pe1MuZm5bb109ZnVuY3Rpb24oZSx0KXt2YXIgbj1hcmd1bWVudHMubGVuZ3RoJiYocnx8XCJib29sZWFuXCIhPXR5cGVvZiBlKSxpPXJ8fCghMD09PWV8fCEwPT09dD9cIm1hcmdpblwiOlwiYm9yZGVyXCIpO3JldHVybiAkKHRoaXMsZnVuY3Rpb24oZSx0LG4pe3ZhciByO3JldHVybiB4KGUpPzA9PT1vLmluZGV4T2YoXCJvdXRlclwiKT9lW1wiaW5uZXJcIithXTplLmRvY3VtZW50LmRvY3VtZW50RWxlbWVudFtcImNsaWVudFwiK2FdOjk9PT1lLm5vZGVUeXBlPyhyPWUuZG9jdW1lbnRFbGVtZW50LE1hdGgubWF4KGUuYm9keVtcInNjcm9sbFwiK2FdLHJbXCJzY3JvbGxcIithXSxlLmJvZHlbXCJvZmZzZXRcIithXSxyW1wib2Zmc2V0XCIrYV0scltcImNsaWVudFwiK2FdKSk6dm9pZCAwPT09bj9TLmNzcyhlLHQsaSk6Uy5zdHlsZShlLHQsbixpKX0scyxuP2U6dm9pZCAwLG4pfX0pfSksUy5lYWNoKFtcImFqYXhTdGFydFwiLFwiYWpheFN0b3BcIixcImFqYXhDb21wbGV0ZVwiLFwiYWpheEVycm9yXCIsXCJhamF4U3VjY2Vzc1wiLFwiYWpheFNlbmRcIl0sZnVuY3Rpb24oZSx0KXtTLmZuW3RdPWZ1bmN0aW9uKGUpe3JldHVybiB0aGlzLm9uKHQsZSl9fSksUy5mbi5leHRlbmQoe2JpbmQ6ZnVuY3Rpb24oZSx0LG4pe3JldHVybiB0aGlzLm9uKGUsbnVsbCx0LG4pfSx1bmJpbmQ6ZnVuY3Rpb24oZSx0KXtyZXR1cm4gdGhpcy5vZmYoZSxudWxsLHQpfSxkZWxlZ2F0ZTpmdW5jdGlvbihlLHQsbixyKXtyZXR1cm4gdGhpcy5vbih0LGUsbixyKX0sdW5kZWxlZ2F0ZTpmdW5jdGlvbihlLHQsbil7cmV0dXJuIDE9PT1hcmd1bWVudHMubGVuZ3RoP3RoaXMub2ZmKGUsXCIqKlwiKTp0aGlzLm9mZih0LGV8fFwiKipcIixuKX0saG92ZXI6ZnVuY3Rpb24oZSx0KXtyZXR1cm4gdGhpcy5tb3VzZWVudGVyKGUpLm1vdXNlbGVhdmUodHx8ZSl9fSksUy5lYWNoKFwiYmx1ciBmb2N1cyBmb2N1c2luIGZvY3Vzb3V0IHJlc2l6ZSBzY3JvbGwgY2xpY2sgZGJsY2xpY2sgbW91c2Vkb3duIG1vdXNldXAgbW91c2Vtb3ZlIG1vdXNlb3ZlciBtb3VzZW91dCBtb3VzZWVudGVyIG1vdXNlbGVhdmUgY2hhbmdlIHNlbGVjdCBzdWJtaXQga2V5ZG93biBrZXlwcmVzcyBrZXl1cCBjb250ZXh0bWVudVwiLnNwbGl0KFwiIFwiKSxmdW5jdGlvbihlLG4pe1MuZm5bbl09ZnVuY3Rpb24oZSx0KXtyZXR1cm4gMDxhcmd1bWVudHMubGVuZ3RoP3RoaXMub24obixudWxsLGUsdCk6dGhpcy50cmlnZ2VyKG4pfX0pO3ZhciBHdD0vXltcXHNcXHVGRUZGXFx4QTBdK3xbXFxzXFx1RkVGRlxceEEwXSskL2c7Uy5wcm94eT1mdW5jdGlvbihlLHQpe3ZhciBuLHIsaTtpZihcInN0cmluZ1wiPT10eXBlb2YgdCYmKG49ZVt0XSx0PWUsZT1uKSxtKGUpKXJldHVybiByPXMuY2FsbChhcmd1bWVudHMsMiksKGk9ZnVuY3Rpb24oKXtyZXR1cm4gZS5hcHBseSh0fHx0aGlzLHIuY29uY2F0KHMuY2FsbChhcmd1bWVudHMpKSl9KS5ndWlkPWUuZ3VpZD1lLmd1aWR8fFMuZ3VpZCsrLGl9LFMuaG9sZFJlYWR5PWZ1bmN0aW9uKGUpe2U/Uy5yZWFkeVdhaXQrKzpTLnJlYWR5KCEwKX0sUy5pc0FycmF5PUFycmF5LmlzQXJyYXksUy5wYXJzZUpTT049SlNPTi5wYXJzZSxTLm5vZGVOYW1lPUEsUy5pc0Z1bmN0aW9uPW0sUy5pc1dpbmRvdz14LFMuY2FtZWxDYXNlPVgsUy50eXBlPXcsUy5ub3c9RGF0ZS5ub3csUy5pc051bWVyaWM9ZnVuY3Rpb24oZSl7dmFyIHQ9Uy50eXBlKGUpO3JldHVybihcIm51bWJlclwiPT09dHx8XCJzdHJpbmdcIj09PXQpJiYhaXNOYU4oZS1wYXJzZUZsb2F0KGUpKX0sUy50cmltPWZ1bmN0aW9uKGUpe3JldHVybiBudWxsPT1lP1wiXCI6KGUrXCJcIikucmVwbGFjZShHdCxcIlwiKX0sXCJmdW5jdGlvblwiPT10eXBlb2YgZGVmaW5lJiZkZWZpbmUuYW1kJiZkZWZpbmUoXCJqcXVlcnlcIixbXSxmdW5jdGlvbigpe3JldHVybiBTfSk7dmFyIFl0PUMualF1ZXJ5LFF0PUMuJDtyZXR1cm4gUy5ub0NvbmZsaWN0PWZ1bmN0aW9uKGUpe3JldHVybiBDLiQ9PT1TJiYoQy4kPVF0KSxlJiZDLmpRdWVyeT09PVMmJihDLmpRdWVyeT1ZdCksU30sXCJ1bmRlZmluZWRcIj09dHlwZW9mIGUmJihDLmpRdWVyeT1DLiQ9UyksU30pO1xuLy8gRE9NLmV2ZW50Lm1vdmVcbi8vXG4vLyAyLjAuMFxuLy9cbi8vIFN0ZXBoZW4gQmFuZFxuLy9cbi8vIFRyaWdnZXJzICdtb3Zlc3RhcnQnLCAnbW92ZScgYW5kICdtb3ZlZW5kJyBldmVudHMgYWZ0ZXJcbi8vIG1vdXNlbW92ZXMgZm9sbG93aW5nIGEgbW91c2Vkb3duIGNyb3NzIGEgZGlzdGFuY2UgdGhyZXNob2xkLFxuLy8gc2ltaWxhciB0byB0aGUgbmF0aXZlICdkcmFnc3RhcnQnLCAnZHJhZycgYW5kICdkcmFnZW5kJyBldmVudHMuXG4vLyBNb3ZlIGV2ZW50cyBhcmUgdGhyb3R0bGVkIHRvIGFuaW1hdGlvbiBmcmFtZXMuIE1vdmUgZXZlbnQgb2JqZWN0c1xuLy8gaGF2ZSB0aGUgcHJvcGVydGllczpcbi8vXG4vLyBwYWdlWDpcbi8vIHBhZ2VZOiAgICAgUGFnZSBjb29yZGluYXRlcyBvZiBwb2ludGVyLlxuLy8gc3RhcnRYOlxuLy8gc3RhcnRZOiAgICBQYWdlIGNvb3JkaW5hdGVzIG9mIHBvaW50ZXIgYXQgbW92ZXN0YXJ0LlxuLy8gZGlzdFg6XG4vLyBkaXN0WTogICAgIERpc3RhbmNlIHRoZSBwb2ludGVyIGhhcyBtb3ZlZCBzaW5jZSBtb3Zlc3RhcnQuXG4vLyBkZWx0YVg6XG4vLyBkZWx0YVk6ICAgIERpc3RhbmNlIHRoZSBmaW5nZXIgaGFzIG1vdmVkIHNpbmNlIGxhc3QgZXZlbnQuXG4vLyB2ZWxvY2l0eVg6XG4vLyB2ZWxvY2l0eVk6IEF2ZXJhZ2UgdmVsb2NpdHkgb3ZlciBsYXN0IGZldyBldmVudHMuXG5cblxuKGZ1bmN0aW9uKGZuKSB7XG5cdGlmICh0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpIHtcbiAgICAgICAgZGVmaW5lKFtdLCBmbik7XG4gICAgfSBlbHNlIGlmICgodHlwZW9mIG1vZHVsZSAhPT0gXCJ1bmRlZmluZWRcIiAmJiBtb2R1bGUgIT09IG51bGwpICYmIG1vZHVsZS5leHBvcnRzKSB7XG4gICAgICAgIG1vZHVsZS5leHBvcnRzID0gZm47XG5cdH0gZWxzZSB7XG5cdFx0Zm4oKTtcblx0fVxufSkoZnVuY3Rpb24oKXtcblx0dmFyIGFzc2lnbiA9IE9iamVjdC5hc3NpZ24gfHwgd2luZG93LmpRdWVyeSAmJiBqUXVlcnkuZXh0ZW5kO1xuXG5cdC8vIE51bWJlciBvZiBwaXhlbHMgYSBwcmVzc2VkIHBvaW50ZXIgdHJhdmVscyBiZWZvcmUgbW92ZXN0YXJ0XG5cdC8vIGV2ZW50IGlzIGZpcmVkLlxuXHR2YXIgdGhyZXNob2xkID0gODtcblxuXHQvLyBTaGltIGZvciByZXF1ZXN0QW5pbWF0aW9uRnJhbWUsIGZhbGxpbmcgYmFjayB0byB0aW1lci4gU2VlOlxuXHQvLyBzZWUgaHR0cDovL3BhdWxpcmlzaC5jb20vMjAxMS9yZXF1ZXN0YW5pbWF0aW9uZnJhbWUtZm9yLXNtYXJ0LWFuaW1hdGluZy9cblx0dmFyIHJlcXVlc3RGcmFtZSA9IChmdW5jdGlvbigpe1xuXHRcdHJldHVybiAoXG5cdFx0XHR3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lIHx8XG5cdFx0XHR3aW5kb3cud2Via2l0UmVxdWVzdEFuaW1hdGlvbkZyYW1lIHx8XG5cdFx0XHR3aW5kb3cubW96UmVxdWVzdEFuaW1hdGlvbkZyYW1lIHx8XG5cdFx0XHR3aW5kb3cub1JlcXVlc3RBbmltYXRpb25GcmFtZSB8fFxuXHRcdFx0d2luZG93Lm1zUmVxdWVzdEFuaW1hdGlvbkZyYW1lIHx8XG5cdFx0XHRmdW5jdGlvbihmbiwgZWxlbWVudCl7XG5cdFx0XHRcdHJldHVybiB3aW5kb3cuc2V0VGltZW91dChmdW5jdGlvbigpe1xuXHRcdFx0XHRcdGZuKCk7XG5cdFx0XHRcdH0sIDI1KTtcblx0XHRcdH1cblx0XHQpO1xuXHR9KSgpO1xuXG5cdC8vIFNoaW0gZm9yIGN1c3RvbUV2ZW50XG5cdC8vIHNlZSBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9BUEkvQ3VzdG9tRXZlbnQvQ3VzdG9tRXZlbnQjUG9seWZpbGxcblx0KGZ1bmN0aW9uICgpIHtcblx0XHRpZiAoIHR5cGVvZiB3aW5kb3cuQ3VzdG9tRXZlbnQgPT09IFwiZnVuY3Rpb25cIiApIHJldHVybiBmYWxzZTtcblx0XHRmdW5jdGlvbiBDdXN0b21FdmVudCAoIGV2ZW50LCBwYXJhbXMgKSB7XG5cdFx0XHRwYXJhbXMgPSBwYXJhbXMgfHwgeyBidWJibGVzOiBmYWxzZSwgY2FuY2VsYWJsZTogZmFsc2UsIGRldGFpbDogdW5kZWZpbmVkIH07XG5cdFx0XHR2YXIgZXZ0ID0gZG9jdW1lbnQuY3JlYXRlRXZlbnQoICdDdXN0b21FdmVudCcgKTtcblx0XHRcdGV2dC5pbml0Q3VzdG9tRXZlbnQoIGV2ZW50LCBwYXJhbXMuYnViYmxlcywgcGFyYW1zLmNhbmNlbGFibGUsIHBhcmFtcy5kZXRhaWwgKTtcblx0XHRcdHJldHVybiBldnQ7XG5cdFx0fVxuXG5cdFx0Q3VzdG9tRXZlbnQucHJvdG90eXBlID0gd2luZG93LkV2ZW50LnByb3RvdHlwZTtcblx0XHR3aW5kb3cuQ3VzdG9tRXZlbnQgPSBDdXN0b21FdmVudDtcblx0fSkoKTtcblxuXHR2YXIgaWdub3JlVGFncyA9IHtcblx0XHRcdHRleHRhcmVhOiB0cnVlLFxuXHRcdFx0aW5wdXQ6IHRydWUsXG5cdFx0XHRzZWxlY3Q6IHRydWUsXG5cdFx0XHRidXR0b246IHRydWVcblx0XHR9O1xuXG5cdHZhciBtb3VzZWV2ZW50cyA9IHtcblx0XHRtb3ZlOiAgICdtb3VzZW1vdmUnLFxuXHRcdGNhbmNlbDogJ21vdXNldXAgZHJhZ3N0YXJ0Jyxcblx0XHRlbmQ6ICAgICdtb3VzZXVwJ1xuXHR9O1xuXG5cdHZhciB0b3VjaGV2ZW50cyA9IHtcblx0XHRtb3ZlOiAgICd0b3VjaG1vdmUnLFxuXHRcdGNhbmNlbDogJ3RvdWNoZW5kJyxcblx0XHRlbmQ6ICAgICd0b3VjaGVuZCdcblx0fTtcblxuXHR2YXIgcnNwYWNlcyA9IC9cXHMrLztcblxuXG5cdC8vIERPTSBFdmVudHNcblxuXHR2YXIgZXZlbnRPcHRpb25zID0geyBidWJibGVzOiB0cnVlLCBjYW5jZWxhYmxlOiB0cnVlIH07XG5cblx0dmFyIGV2ZW50c1N5bWJvbCA9IHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiA/IFN5bWJvbCgnZXZlbnRzJykgOiB7fTtcblxuXHRmdW5jdGlvbiBjcmVhdGVFdmVudCh0eXBlKSB7XG5cdFx0cmV0dXJuIG5ldyBDdXN0b21FdmVudCh0eXBlLCBldmVudE9wdGlvbnMpO1xuXHR9XG5cblx0ZnVuY3Rpb24gZ2V0RXZlbnRzKG5vZGUpIHtcblx0XHRyZXR1cm4gbm9kZVtldmVudHNTeW1ib2xdIHx8IChub2RlW2V2ZW50c1N5bWJvbF0gPSB7fSk7XG5cdH1cblxuXHRmdW5jdGlvbiBvbihub2RlLCB0eXBlcywgZm4sIGRhdGEsIHNlbGVjdG9yKSB7XG5cdFx0dHlwZXMgPSB0eXBlcy5zcGxpdChyc3BhY2VzKTtcblxuXHRcdHZhciBldmVudHMgPSBnZXRFdmVudHMobm9kZSk7XG5cdFx0dmFyIGkgPSB0eXBlcy5sZW5ndGg7XG5cdFx0dmFyIGhhbmRsZXJzLCB0eXBlO1xuXG5cdFx0ZnVuY3Rpb24gaGFuZGxlcihlKSB7IGZuKGUsIGRhdGEpOyB9XG5cblx0XHR3aGlsZSAoaS0tKSB7XG5cdFx0XHR0eXBlID0gdHlwZXNbaV07XG5cdFx0XHRoYW5kbGVycyA9IGV2ZW50c1t0eXBlXSB8fCAoZXZlbnRzW3R5cGVdID0gW10pO1xuXHRcdFx0aGFuZGxlcnMucHVzaChbZm4sIGhhbmRsZXJdKTtcblx0XHRcdG5vZGUuYWRkRXZlbnRMaXN0ZW5lcih0eXBlLCBoYW5kbGVyKTtcblx0XHR9XG5cdH1cblxuXHRmdW5jdGlvbiBvZmYobm9kZSwgdHlwZXMsIGZuLCBzZWxlY3Rvcikge1xuXHRcdHR5cGVzID0gdHlwZXMuc3BsaXQocnNwYWNlcyk7XG5cblx0XHR2YXIgZXZlbnRzID0gZ2V0RXZlbnRzKG5vZGUpO1xuXHRcdHZhciBpID0gdHlwZXMubGVuZ3RoO1xuXHRcdHZhciB0eXBlLCBoYW5kbGVycywgaztcblxuXHRcdGlmICghZXZlbnRzKSB7IHJldHVybjsgfVxuXG5cdFx0d2hpbGUgKGktLSkge1xuXHRcdFx0dHlwZSA9IHR5cGVzW2ldO1xuXHRcdFx0aGFuZGxlcnMgPSBldmVudHNbdHlwZV07XG5cdFx0XHRpZiAoIWhhbmRsZXJzKSB7IGNvbnRpbnVlOyB9XG5cdFx0XHRrID0gaGFuZGxlcnMubGVuZ3RoO1xuXHRcdFx0d2hpbGUgKGstLSkge1xuXHRcdFx0XHRpZiAoaGFuZGxlcnNba11bMF0gPT09IGZuKSB7XG5cdFx0XHRcdFx0bm9kZS5yZW1vdmVFdmVudExpc3RlbmVyKHR5cGUsIGhhbmRsZXJzW2tdWzFdKTtcblx0XHRcdFx0XHRoYW5kbGVycy5zcGxpY2UoaywgMSk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cdH1cblxuXHRmdW5jdGlvbiB0cmlnZ2VyKG5vZGUsIHR5cGUsIHByb3BlcnRpZXMpIHtcblx0XHQvLyBEb24ndCBjYWNoZSBldmVudHMuIEl0IHByZXZlbnRzIHlvdSBmcm9tIHRyaWdnZXJpbmcgYW4gZXZlbnQgb2YgYVxuXHRcdC8vIGdpdmVuIHR5cGUgZnJvbSBpbnNpZGUgdGhlIGhhbmRsZXIgb2YgYW5vdGhlciBldmVudCBvZiB0aGF0IHR5cGUuXG5cdFx0dmFyIGV2ZW50ID0gY3JlYXRlRXZlbnQodHlwZSk7XG5cdFx0aWYgKHByb3BlcnRpZXMpIHsgYXNzaWduKGV2ZW50LCBwcm9wZXJ0aWVzKTsgfVxuXHRcdG5vZGUuZGlzcGF0Y2hFdmVudChldmVudCk7XG5cdH1cblxuXG5cdC8vIENvbnN0cnVjdG9yc1xuXG5cdGZ1bmN0aW9uIFRpbWVyKGZuKXtcblx0XHR2YXIgY2FsbGJhY2sgPSBmbixcblx0XHQgICAgYWN0aXZlID0gZmFsc2UsXG5cdFx0ICAgIHJ1bm5pbmcgPSBmYWxzZTtcblxuXHRcdGZ1bmN0aW9uIHRyaWdnZXIodGltZSkge1xuXHRcdFx0aWYgKGFjdGl2ZSl7XG5cdFx0XHRcdGNhbGxiYWNrKCk7XG5cdFx0XHRcdHJlcXVlc3RGcmFtZSh0cmlnZ2VyKTtcblx0XHRcdFx0cnVubmluZyA9IHRydWU7XG5cdFx0XHRcdGFjdGl2ZSA9IGZhbHNlO1xuXHRcdFx0fVxuXHRcdFx0ZWxzZSB7XG5cdFx0XHRcdHJ1bm5pbmcgPSBmYWxzZTtcblx0XHRcdH1cblx0XHR9XG5cblx0XHR0aGlzLmtpY2sgPSBmdW5jdGlvbihmbikge1xuXHRcdFx0YWN0aXZlID0gdHJ1ZTtcblx0XHRcdGlmICghcnVubmluZykgeyB0cmlnZ2VyKCk7IH1cblx0XHR9O1xuXG5cdFx0dGhpcy5lbmQgPSBmdW5jdGlvbihmbikge1xuXHRcdFx0dmFyIGNiID0gY2FsbGJhY2s7XG5cblx0XHRcdGlmICghZm4pIHsgcmV0dXJuOyB9XG5cblx0XHRcdC8vIElmIHRoZSB0aW1lciBpcyBub3QgcnVubmluZywgc2ltcGx5IGNhbGwgdGhlIGVuZCBjYWxsYmFjay5cblx0XHRcdGlmICghcnVubmluZykge1xuXHRcdFx0XHRmbigpO1xuXHRcdFx0fVxuXHRcdFx0Ly8gSWYgdGhlIHRpbWVyIGlzIHJ1bm5pbmcsIGFuZCBoYXMgYmVlbiBraWNrZWQgbGF0ZWx5LCB0aGVuXG5cdFx0XHQvLyBxdWV1ZSB1cCB0aGUgY3VycmVudCBjYWxsYmFjayBhbmQgdGhlIGVuZCBjYWxsYmFjaywgb3RoZXJ3aXNlXG5cdFx0XHQvLyBqdXN0IHRoZSBlbmQgY2FsbGJhY2suXG5cdFx0XHRlbHNlIHtcblx0XHRcdFx0Y2FsbGJhY2sgPSBhY3RpdmUgP1xuXHRcdFx0XHRcdGZ1bmN0aW9uKCl7IGNiKCk7IGZuKCk7IH0gOlxuXHRcdFx0XHRcdGZuIDtcblxuXHRcdFx0XHRhY3RpdmUgPSB0cnVlO1xuXHRcdFx0fVxuXHRcdH07XG5cdH1cblxuXG5cdC8vIEZ1bmN0aW9uc1xuXG5cdGZ1bmN0aW9uIG5vb3AoKSB7fVxuXG5cdGZ1bmN0aW9uIHByZXZlbnREZWZhdWx0KGUpIHtcblx0XHRlLnByZXZlbnREZWZhdWx0KCk7XG5cdH1cblxuXHRmdW5jdGlvbiBpc0lnbm9yZVRhZyhlKSB7XG5cdFx0cmV0dXJuICEhaWdub3JlVGFnc1tlLnRhcmdldC50YWdOYW1lLnRvTG93ZXJDYXNlKCldO1xuXHR9XG5cblx0ZnVuY3Rpb24gaXNQcmltYXJ5QnV0dG9uKGUpIHtcblx0XHQvLyBJZ25vcmUgbW91c2Vkb3ducyBvbiBhbnkgYnV0dG9uIG90aGVyIHRoYW4gdGhlIGxlZnQgKG9yIHByaW1hcnkpXG5cdFx0Ly8gbW91c2UgYnV0dG9uLCBvciB3aGVuIGEgbW9kaWZpZXIga2V5IGlzIHByZXNzZWQuXG5cdFx0cmV0dXJuIChlLndoaWNoID09PSAxICYmICFlLmN0cmxLZXkgJiYgIWUuYWx0S2V5KTtcblx0fVxuXG5cdGZ1bmN0aW9uIGlkZW50aWZpZWRUb3VjaCh0b3VjaExpc3QsIGlkKSB7XG5cdFx0dmFyIGksIGw7XG5cblx0XHRpZiAodG91Y2hMaXN0LmlkZW50aWZpZWRUb3VjaCkge1xuXHRcdFx0cmV0dXJuIHRvdWNoTGlzdC5pZGVudGlmaWVkVG91Y2goaWQpO1xuXHRcdH1cblxuXHRcdC8vIHRvdWNoTGlzdC5pZGVudGlmaWVkVG91Y2goKSBkb2VzIG5vdCBleGlzdCBpblxuXHRcdC8vIHdlYmtpdCB5ZXTigKYgd2UgbXVzdCBkbyB0aGUgc2VhcmNoIG91cnNlbHZlcy4uLlxuXG5cdFx0aSA9IC0xO1xuXHRcdGwgPSB0b3VjaExpc3QubGVuZ3RoO1xuXG5cdFx0d2hpbGUgKCsraSA8IGwpIHtcblx0XHRcdGlmICh0b3VjaExpc3RbaV0uaWRlbnRpZmllciA9PT0gaWQpIHtcblx0XHRcdFx0cmV0dXJuIHRvdWNoTGlzdFtpXTtcblx0XHRcdH1cblx0XHR9XG5cdH1cblxuXHRmdW5jdGlvbiBjaGFuZ2VkVG91Y2goZSwgZGF0YSkge1xuXHRcdHZhciB0b3VjaCA9IGlkZW50aWZpZWRUb3VjaChlLmNoYW5nZWRUb3VjaGVzLCBkYXRhLmlkZW50aWZpZXIpO1xuXG5cdFx0Ly8gVGhpcyBpc24ndCB0aGUgdG91Y2ggeW91J3JlIGxvb2tpbmcgZm9yLlxuXHRcdGlmICghdG91Y2gpIHsgcmV0dXJuOyB9XG5cblx0XHQvLyBDaHJvbWUgQW5kcm9pZCAoYXQgbGVhc3QpIGluY2x1ZGVzIHRvdWNoZXMgdGhhdCBoYXZlIG5vdFxuXHRcdC8vIGNoYW5nZWQgaW4gZS5jaGFuZ2VkVG91Y2hlcy4gVGhhdCdzIGEgYml0IGFubm95aW5nLiBDaGVja1xuXHRcdC8vIHRoYXQgdGhpcyB0b3VjaCBoYXMgY2hhbmdlZC5cblx0XHRpZiAodG91Y2gucGFnZVggPT09IGRhdGEucGFnZVggJiYgdG91Y2gucGFnZVkgPT09IGRhdGEucGFnZVkpIHsgcmV0dXJuOyB9XG5cblx0XHRyZXR1cm4gdG91Y2g7XG5cdH1cblxuXG5cdC8vIEhhbmRsZXJzIHRoYXQgZGVjaWRlIHdoZW4gdGhlIGZpcnN0IG1vdmVzdGFydCBpcyB0cmlnZ2VyZWRcblxuXHRmdW5jdGlvbiBtb3VzZWRvd24oZSl7XG5cdFx0Ly8gSWdub3JlIG5vbi1wcmltYXJ5IGJ1dHRvbnNcblx0XHRpZiAoIWlzUHJpbWFyeUJ1dHRvbihlKSkgeyByZXR1cm47IH1cblxuXHRcdC8vIElnbm9yZSBmb3JtIGFuZCBpbnRlcmFjdGl2ZSBlbGVtZW50c1xuXHRcdGlmIChpc0lnbm9yZVRhZyhlKSkgeyByZXR1cm47IH1cblxuXHRcdG9uKGRvY3VtZW50LCBtb3VzZWV2ZW50cy5tb3ZlLCBtb3VzZW1vdmUsIGUpO1xuXHRcdG9uKGRvY3VtZW50LCBtb3VzZWV2ZW50cy5jYW5jZWwsIG1vdXNlZW5kLCBlKTtcblx0fVxuXG5cdGZ1bmN0aW9uIG1vdXNlbW92ZShlLCBkYXRhKXtcblx0XHRjaGVja1RocmVzaG9sZChlLCBkYXRhLCBlLCByZW1vdmVNb3VzZSk7XG5cdH1cblxuXHRmdW5jdGlvbiBtb3VzZWVuZChlLCBkYXRhKSB7XG5cdFx0cmVtb3ZlTW91c2UoKTtcblx0fVxuXG5cdGZ1bmN0aW9uIHJlbW92ZU1vdXNlKCkge1xuXHRcdG9mZihkb2N1bWVudCwgbW91c2VldmVudHMubW92ZSwgbW91c2Vtb3ZlKTtcblx0XHRvZmYoZG9jdW1lbnQsIG1vdXNlZXZlbnRzLmNhbmNlbCwgbW91c2VlbmQpO1xuXHR9XG5cblx0ZnVuY3Rpb24gdG91Y2hzdGFydChlKSB7XG5cdFx0Ly8gRG9uJ3QgZ2V0IGluIHRoZSB3YXkgb2YgaW50ZXJhY3Rpb24gd2l0aCBmb3JtIGVsZW1lbnRzXG5cdFx0aWYgKGlnbm9yZVRhZ3NbZS50YXJnZXQudGFnTmFtZS50b0xvd2VyQ2FzZSgpXSkgeyByZXR1cm47IH1cblxuXHRcdHZhciB0b3VjaCA9IGUuY2hhbmdlZFRvdWNoZXNbMF07XG5cblx0XHQvLyBpT1MgbGl2ZSB1cGRhdGVzIHRoZSB0b3VjaCBvYmplY3RzIHdoZXJlYXMgQW5kcm9pZCBnaXZlcyB1cyBjb3BpZXMuXG5cdFx0Ly8gVGhhdCBtZWFucyB3ZSBjYW4ndCB0cnVzdCB0aGUgdG91Y2hzdGFydCBvYmplY3QgdG8gc3RheSB0aGUgc2FtZSxcblx0XHQvLyBzbyB3ZSBtdXN0IGNvcHkgdGhlIGRhdGEuIFRoaXMgb2JqZWN0IGFjdHMgYXMgYSB0ZW1wbGF0ZSBmb3Jcblx0XHQvLyBtb3Zlc3RhcnQsIG1vdmUgYW5kIG1vdmVlbmQgZXZlbnQgb2JqZWN0cy5cblx0XHR2YXIgZGF0YSA9IHtcblx0XHRcdHRhcmdldDogICAgIHRvdWNoLnRhcmdldCxcblx0XHRcdHBhZ2VYOiAgICAgIHRvdWNoLnBhZ2VYLFxuXHRcdFx0cGFnZVk6ICAgICAgdG91Y2gucGFnZVksXG5cdFx0XHRpZGVudGlmaWVyOiB0b3VjaC5pZGVudGlmaWVyLFxuXG5cdFx0XHQvLyBUaGUgb25seSB3YXkgdG8gbWFrZSBoYW5kbGVycyBpbmRpdmlkdWFsbHkgdW5iaW5kYWJsZSBpcyBieVxuXHRcdFx0Ly8gbWFraW5nIHRoZW0gdW5pcXVlLlxuXHRcdFx0dG91Y2htb3ZlOiAgZnVuY3Rpb24oZSwgZGF0YSkgeyB0b3VjaG1vdmUoZSwgZGF0YSk7IH0sXG5cdFx0XHR0b3VjaGVuZDogICBmdW5jdGlvbihlLCBkYXRhKSB7IHRvdWNoZW5kKGUsIGRhdGEpOyB9XG5cdFx0fTtcblxuXHRcdG9uKGRvY3VtZW50LCB0b3VjaGV2ZW50cy5tb3ZlLCBkYXRhLnRvdWNobW92ZSwgZGF0YSk7XG5cdFx0b24oZG9jdW1lbnQsIHRvdWNoZXZlbnRzLmNhbmNlbCwgZGF0YS50b3VjaGVuZCwgZGF0YSk7XG5cdH1cblxuXHRmdW5jdGlvbiB0b3VjaG1vdmUoZSwgZGF0YSkge1xuXHRcdHZhciB0b3VjaCA9IGNoYW5nZWRUb3VjaChlLCBkYXRhKTtcblx0XHRpZiAoIXRvdWNoKSB7IHJldHVybjsgfVxuXHRcdGNoZWNrVGhyZXNob2xkKGUsIGRhdGEsIHRvdWNoLCByZW1vdmVUb3VjaCk7XG5cdH1cblxuXHRmdW5jdGlvbiB0b3VjaGVuZChlLCBkYXRhKSB7XG5cdFx0dmFyIHRvdWNoID0gaWRlbnRpZmllZFRvdWNoKGUuY2hhbmdlZFRvdWNoZXMsIGRhdGEuaWRlbnRpZmllcik7XG5cdFx0aWYgKCF0b3VjaCkgeyByZXR1cm47IH1cblx0XHRyZW1vdmVUb3VjaChkYXRhKTtcblx0fVxuXG5cdGZ1bmN0aW9uIHJlbW92ZVRvdWNoKGRhdGEpIHtcblx0XHRvZmYoZG9jdW1lbnQsIHRvdWNoZXZlbnRzLm1vdmUsIGRhdGEudG91Y2htb3ZlKTtcblx0XHRvZmYoZG9jdW1lbnQsIHRvdWNoZXZlbnRzLmNhbmNlbCwgZGF0YS50b3VjaGVuZCk7XG5cdH1cblxuXHRmdW5jdGlvbiBjaGVja1RocmVzaG9sZChlLCBkYXRhLCB0b3VjaCwgZm4pIHtcblx0XHR2YXIgZGlzdFggPSB0b3VjaC5wYWdlWCAtIGRhdGEucGFnZVg7XG5cdFx0dmFyIGRpc3RZID0gdG91Y2gucGFnZVkgLSBkYXRhLnBhZ2VZO1xuXG5cdFx0Ly8gRG8gbm90aGluZyBpZiB0aGUgdGhyZXNob2xkIGhhcyBub3QgYmVlbiBjcm9zc2VkLlxuXHRcdGlmICgoZGlzdFggKiBkaXN0WCkgKyAoZGlzdFkgKiBkaXN0WSkgPCAodGhyZXNob2xkICogdGhyZXNob2xkKSkgeyByZXR1cm47IH1cblxuXHRcdHRyaWdnZXJTdGFydChlLCBkYXRhLCB0b3VjaCwgZGlzdFgsIGRpc3RZLCBmbik7XG5cdH1cblxuXHRmdW5jdGlvbiB0cmlnZ2VyU3RhcnQoZSwgZGF0YSwgdG91Y2gsIGRpc3RYLCBkaXN0WSwgZm4pIHtcblx0XHR2YXIgdG91Y2hlcyA9IGUudGFyZ2V0VG91Y2hlcztcblx0XHR2YXIgdGltZSA9IGUudGltZVN0YW1wIC0gZGF0YS50aW1lU3RhbXA7XG5cblx0XHQvLyBDcmVhdGUgYSBtb3Zlc3RhcnQgb2JqZWN0IHdpdGggc29tZSBzcGVjaWFsIHByb3BlcnRpZXMgdGhhdFxuXHRcdC8vIGFyZSBwYXNzZWQgb25seSB0byB0aGUgbW92ZXN0YXJ0IGhhbmRsZXJzLlxuXHRcdHZhciB0ZW1wbGF0ZSA9IHtcblx0XHRcdGFsdEtleTogICAgIGUuYWx0S2V5LFxuXHRcdFx0Y3RybEtleTogICAgZS5jdHJsS2V5LFxuXHRcdFx0c2hpZnRLZXk6ICAgZS5zaGlmdEtleSxcblx0XHRcdHN0YXJ0WDogICAgIGRhdGEucGFnZVgsXG5cdFx0XHRzdGFydFk6ICAgICBkYXRhLnBhZ2VZLFxuXHRcdFx0ZGlzdFg6ICAgICAgZGlzdFgsXG5cdFx0XHRkaXN0WTogICAgICBkaXN0WSxcblx0XHRcdGRlbHRhWDogICAgIGRpc3RYLFxuXHRcdFx0ZGVsdGFZOiAgICAgZGlzdFksXG5cdFx0XHRwYWdlWDogICAgICB0b3VjaC5wYWdlWCxcblx0XHRcdHBhZ2VZOiAgICAgIHRvdWNoLnBhZ2VZLFxuXHRcdFx0dmVsb2NpdHlYOiAgZGlzdFggLyB0aW1lLFxuXHRcdFx0dmVsb2NpdHlZOiAgZGlzdFkgLyB0aW1lLFxuXHRcdFx0aWRlbnRpZmllcjogZGF0YS5pZGVudGlmaWVyLFxuXHRcdFx0dGFyZ2V0VG91Y2hlczogdG91Y2hlcyxcblx0XHRcdGZpbmdlcjogdG91Y2hlcyA/IHRvdWNoZXMubGVuZ3RoIDogMSxcblx0XHRcdGVuYWJsZU1vdmU6IGZ1bmN0aW9uKCkge1xuXHRcdFx0XHR0aGlzLm1vdmVFbmFibGVkID0gdHJ1ZTtcblx0XHRcdFx0dGhpcy5lbmFibGVNb3ZlID0gbm9vcDtcblx0XHRcdFx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcdFx0fVxuXHRcdH07XG5cblx0XHQvLyBUcmlnZ2VyIHRoZSBtb3Zlc3RhcnQgZXZlbnQuXG5cdFx0dHJpZ2dlcihkYXRhLnRhcmdldCwgJ21vdmVzdGFydCcsIHRlbXBsYXRlKTtcblxuXHRcdC8vIFVuYmluZCBoYW5kbGVycyB0aGF0IHRyYWNrZWQgdGhlIHRvdWNoIG9yIG1vdXNlIHVwIHRpbGwgbm93LlxuXHRcdGZuKGRhdGEpO1xuXHR9XG5cblxuXHQvLyBIYW5kbGVycyB0aGF0IGNvbnRyb2wgd2hhdCBoYXBwZW5zIGZvbGxvd2luZyBhIG1vdmVzdGFydFxuXG5cdGZ1bmN0aW9uIGFjdGl2ZU1vdXNlbW92ZShlLCBkYXRhKSB7XG5cdFx0dmFyIHRpbWVyICA9IGRhdGEudGltZXI7XG5cblx0XHRkYXRhLnRvdWNoID0gZTtcblx0XHRkYXRhLnRpbWVTdGFtcCA9IGUudGltZVN0YW1wO1xuXHRcdHRpbWVyLmtpY2soKTtcblx0fVxuXG5cdGZ1bmN0aW9uIGFjdGl2ZU1vdXNlZW5kKGUsIGRhdGEpIHtcblx0XHR2YXIgdGFyZ2V0ID0gZGF0YS50YXJnZXQ7XG5cdFx0dmFyIGV2ZW50ICA9IGRhdGEuZXZlbnQ7XG5cdFx0dmFyIHRpbWVyICA9IGRhdGEudGltZXI7XG5cblx0XHRyZW1vdmVBY3RpdmVNb3VzZSgpO1xuXG5cdFx0ZW5kRXZlbnQodGFyZ2V0LCBldmVudCwgdGltZXIsIGZ1bmN0aW9uKCkge1xuXHRcdFx0Ly8gVW5iaW5kIHRoZSBjbGljayBzdXBwcmVzc29yLCB3YWl0aW5nIHVudGlsIGFmdGVyIG1vdXNldXBcblx0XHRcdC8vIGhhcyBiZWVuIGhhbmRsZWQuXG5cdFx0XHRzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7XG5cdFx0XHRcdG9mZih0YXJnZXQsICdjbGljaycsIHByZXZlbnREZWZhdWx0KTtcblx0XHRcdH0sIDApO1xuXHRcdH0pO1xuXHR9XG5cblx0ZnVuY3Rpb24gcmVtb3ZlQWN0aXZlTW91c2UoKSB7XG5cdFx0b2ZmKGRvY3VtZW50LCBtb3VzZWV2ZW50cy5tb3ZlLCBhY3RpdmVNb3VzZW1vdmUpO1xuXHRcdG9mZihkb2N1bWVudCwgbW91c2VldmVudHMuZW5kLCBhY3RpdmVNb3VzZWVuZCk7XG5cdH1cblxuXHRmdW5jdGlvbiBhY3RpdmVUb3VjaG1vdmUoZSwgZGF0YSkge1xuXHRcdHZhciBldmVudCA9IGRhdGEuZXZlbnQ7XG5cdFx0dmFyIHRpbWVyID0gZGF0YS50aW1lcjtcblx0XHR2YXIgdG91Y2ggPSBjaGFuZ2VkVG91Y2goZSwgZXZlbnQpO1xuXG5cdFx0aWYgKCF0b3VjaCkgeyByZXR1cm47IH1cblxuXHRcdC8vIFN0b3AgdGhlIGludGVyZmFjZSBmcm9tIGdlc3R1cmluZ1xuXHRcdGUucHJldmVudERlZmF1bHQoKTtcblxuXHRcdGV2ZW50LnRhcmdldFRvdWNoZXMgPSBlLnRhcmdldFRvdWNoZXM7XG5cdFx0ZGF0YS50b3VjaCA9IHRvdWNoO1xuXHRcdGRhdGEudGltZVN0YW1wID0gZS50aW1lU3RhbXA7XG5cblx0XHR0aW1lci5raWNrKCk7XG5cdH1cblxuXHRmdW5jdGlvbiBhY3RpdmVUb3VjaGVuZChlLCBkYXRhKSB7XG5cdFx0dmFyIHRhcmdldCA9IGRhdGEudGFyZ2V0O1xuXHRcdHZhciBldmVudCAgPSBkYXRhLmV2ZW50O1xuXHRcdHZhciB0aW1lciAgPSBkYXRhLnRpbWVyO1xuXHRcdHZhciB0b3VjaCAgPSBpZGVudGlmaWVkVG91Y2goZS5jaGFuZ2VkVG91Y2hlcywgZXZlbnQuaWRlbnRpZmllcik7XG5cblx0XHQvLyBUaGlzIGlzbid0IHRoZSB0b3VjaCB5b3UncmUgbG9va2luZyBmb3IuXG5cdFx0aWYgKCF0b3VjaCkgeyByZXR1cm47IH1cblxuXHRcdHJlbW92ZUFjdGl2ZVRvdWNoKGRhdGEpO1xuXHRcdGVuZEV2ZW50KHRhcmdldCwgZXZlbnQsIHRpbWVyKTtcblx0fVxuXG5cdGZ1bmN0aW9uIHJlbW92ZUFjdGl2ZVRvdWNoKGRhdGEpIHtcblx0XHRvZmYoZG9jdW1lbnQsIHRvdWNoZXZlbnRzLm1vdmUsIGRhdGEuYWN0aXZlVG91Y2htb3ZlKTtcblx0XHRvZmYoZG9jdW1lbnQsIHRvdWNoZXZlbnRzLmVuZCwgZGF0YS5hY3RpdmVUb3VjaGVuZCk7XG5cdH1cblxuXG5cdC8vIExvZ2ljIGZvciB0cmlnZ2VyaW5nIG1vdmUgYW5kIG1vdmVlbmQgZXZlbnRzXG5cblx0ZnVuY3Rpb24gdXBkYXRlRXZlbnQoZXZlbnQsIHRvdWNoLCB0aW1lU3RhbXApIHtcblx0XHR2YXIgdGltZSA9IHRpbWVTdGFtcCAtIGV2ZW50LnRpbWVTdGFtcDtcblxuXHRcdGV2ZW50LmRpc3RYID0gIHRvdWNoLnBhZ2VYIC0gZXZlbnQuc3RhcnRYO1xuXHRcdGV2ZW50LmRpc3RZID0gIHRvdWNoLnBhZ2VZIC0gZXZlbnQuc3RhcnRZO1xuXHRcdGV2ZW50LmRlbHRhWCA9IHRvdWNoLnBhZ2VYIC0gZXZlbnQucGFnZVg7XG5cdFx0ZXZlbnQuZGVsdGFZID0gdG91Y2gucGFnZVkgLSBldmVudC5wYWdlWTtcblxuXHRcdC8vIEF2ZXJhZ2UgdGhlIHZlbG9jaXR5IG9mIHRoZSBsYXN0IGZldyBldmVudHMgdXNpbmcgYSBkZWNheVxuXHRcdC8vIGN1cnZlIHRvIGV2ZW4gb3V0IHNwdXJpb3VzIGp1bXBzIGluIHZhbHVlcy5cblx0XHRldmVudC52ZWxvY2l0eVggPSAwLjMgKiBldmVudC52ZWxvY2l0eVggKyAwLjcgKiBldmVudC5kZWx0YVggLyB0aW1lO1xuXHRcdGV2ZW50LnZlbG9jaXR5WSA9IDAuMyAqIGV2ZW50LnZlbG9jaXR5WSArIDAuNyAqIGV2ZW50LmRlbHRhWSAvIHRpbWU7XG5cdFx0ZXZlbnQucGFnZVggPSAgdG91Y2gucGFnZVg7XG5cdFx0ZXZlbnQucGFnZVkgPSAgdG91Y2gucGFnZVk7XG5cdH1cblxuXHRmdW5jdGlvbiBlbmRFdmVudCh0YXJnZXQsIGV2ZW50LCB0aW1lciwgZm4pIHtcblx0XHR0aW1lci5lbmQoZnVuY3Rpb24oKXtcblx0XHRcdHRyaWdnZXIodGFyZ2V0LCAnbW92ZWVuZCcsIGV2ZW50KTtcblx0XHRcdHJldHVybiBmbiAmJiBmbigpO1xuXHRcdH0pO1xuXHR9XG5cblxuXHQvLyBTZXQgdXAgdGhlIERPTVxuXG5cdGZ1bmN0aW9uIG1vdmVzdGFydChlKSB7XG5cdFx0aWYgKGUuZGVmYXVsdFByZXZlbnRlZCkgeyByZXR1cm47IH1cblx0XHRpZiAoIWUubW92ZUVuYWJsZWQpIHsgcmV0dXJuOyB9XG5cblx0XHR2YXIgZXZlbnQgPSB7XG5cdFx0XHRzdGFydFg6ICAgICAgICBlLnN0YXJ0WCxcblx0XHRcdHN0YXJ0WTogICAgICAgIGUuc3RhcnRZLFxuXHRcdFx0cGFnZVg6ICAgICAgICAgZS5wYWdlWCxcblx0XHRcdHBhZ2VZOiAgICAgICAgIGUucGFnZVksXG5cdFx0XHRkaXN0WDogICAgICAgICBlLmRpc3RYLFxuXHRcdFx0ZGlzdFk6ICAgICAgICAgZS5kaXN0WSxcblx0XHRcdGRlbHRhWDogICAgICAgIGUuZGVsdGFYLFxuXHRcdFx0ZGVsdGFZOiAgICAgICAgZS5kZWx0YVksXG5cdFx0XHR2ZWxvY2l0eVg6ICAgICBlLnZlbG9jaXR5WCxcblx0XHRcdHZlbG9jaXR5WTogICAgIGUudmVsb2NpdHlZLFxuXHRcdFx0aWRlbnRpZmllcjogICAgZS5pZGVudGlmaWVyLFxuXHRcdFx0dGFyZ2V0VG91Y2hlczogZS50YXJnZXRUb3VjaGVzLFxuXHRcdFx0ZmluZ2VyOiAgICAgICAgZS5maW5nZXJcblx0XHR9O1xuXG5cdFx0dmFyIGRhdGEgPSB7XG5cdFx0XHR0YXJnZXQ6ICAgIGUudGFyZ2V0LFxuXHRcdFx0ZXZlbnQ6ICAgICBldmVudCxcblx0XHRcdHRpbWVyOiAgICAgbmV3IFRpbWVyKHVwZGF0ZSksXG5cdFx0XHR0b3VjaDogICAgIHVuZGVmaW5lZCxcblx0XHRcdHRpbWVTdGFtcDogZS50aW1lU3RhbXBcblx0XHR9O1xuXG5cdFx0ZnVuY3Rpb24gdXBkYXRlKHRpbWUpIHtcblx0XHRcdHVwZGF0ZUV2ZW50KGV2ZW50LCBkYXRhLnRvdWNoLCBkYXRhLnRpbWVTdGFtcCk7XG5cdFx0XHR0cmlnZ2VyKGRhdGEudGFyZ2V0LCAnbW92ZScsIGV2ZW50KTtcblx0XHR9XG5cblx0XHRpZiAoZS5pZGVudGlmaWVyID09PSB1bmRlZmluZWQpIHtcblx0XHRcdC8vIFdlJ3JlIGRlYWxpbmcgd2l0aCBhIG1vdXNlIGV2ZW50LlxuXHRcdFx0Ly8gU3RvcCBjbGlja3MgZnJvbSBwcm9wYWdhdGluZyBkdXJpbmcgYSBtb3ZlXG5cdFx0XHRvbihlLnRhcmdldCwgJ2NsaWNrJywgcHJldmVudERlZmF1bHQpO1xuXHRcdFx0b24oZG9jdW1lbnQsIG1vdXNlZXZlbnRzLm1vdmUsIGFjdGl2ZU1vdXNlbW92ZSwgZGF0YSk7XG5cdFx0XHRvbihkb2N1bWVudCwgbW91c2VldmVudHMuZW5kLCBhY3RpdmVNb3VzZWVuZCwgZGF0YSk7XG5cdFx0fVxuXHRcdGVsc2Uge1xuXHRcdFx0Ly8gSW4gb3JkZXIgdG8gdW5iaW5kIGNvcnJlY3QgaGFuZGxlcnMgdGhleSBoYXZlIHRvIGJlIHVuaXF1ZVxuXHRcdFx0ZGF0YS5hY3RpdmVUb3VjaG1vdmUgPSBmdW5jdGlvbihlLCBkYXRhKSB7IGFjdGl2ZVRvdWNobW92ZShlLCBkYXRhKTsgfTtcblx0XHRcdGRhdGEuYWN0aXZlVG91Y2hlbmQgPSBmdW5jdGlvbihlLCBkYXRhKSB7IGFjdGl2ZVRvdWNoZW5kKGUsIGRhdGEpOyB9O1xuXG5cdFx0XHQvLyBXZSdyZSBkZWFsaW5nIHdpdGggYSB0b3VjaC5cblx0XHRcdG9uKGRvY3VtZW50LCB0b3VjaGV2ZW50cy5tb3ZlLCBkYXRhLmFjdGl2ZVRvdWNobW92ZSwgZGF0YSk7XG5cdFx0XHRvbihkb2N1bWVudCwgdG91Y2hldmVudHMuZW5kLCBkYXRhLmFjdGl2ZVRvdWNoZW5kLCBkYXRhKTtcblx0XHR9XG5cdH1cblxuXHRvbihkb2N1bWVudCwgJ21vdXNlZG93bicsIG1vdXNlZG93bik7XG5cdG9uKGRvY3VtZW50LCAndG91Y2hzdGFydCcsIHRvdWNoc3RhcnQpO1xuXHRvbihkb2N1bWVudCwgJ21vdmVzdGFydCcsIG1vdmVzdGFydCk7XG5cblxuXHQvLyBqUXVlcnkgc3BlY2lhbCBldmVudHNcblx0Ly9cblx0Ly8galF1ZXJ5IGV2ZW50IG9iamVjdHMgYXJlIGNvcGllcyBvZiBET00gZXZlbnQgb2JqZWN0cy4gVGhleSBuZWVkXG5cdC8vIGEgbGl0dGxlIGhlbHAgY29weWluZyB0aGUgbW92ZSBwcm9wZXJ0aWVzIGFjcm9zcy5cblxuXHRpZiAoIXdpbmRvdy5qUXVlcnkpIHsgcmV0dXJuOyB9XG5cblx0dmFyIHByb3BlcnRpZXMgPSAoXCJzdGFydFggc3RhcnRZIHBhZ2VYIHBhZ2VZIGRpc3RYIGRpc3RZIGRlbHRhWCBkZWx0YVkgdmVsb2NpdHlYIHZlbG9jaXR5WVwiKS5zcGxpdCgnICcpO1xuXG5cdGZ1bmN0aW9uIGVuYWJsZU1vdmUxKGUpIHsgZS5lbmFibGVNb3ZlKCk7IH1cblx0ZnVuY3Rpb24gZW5hYmxlTW92ZTIoZSkgeyBlLmVuYWJsZU1vdmUoKTsgfVxuXHRmdW5jdGlvbiBlbmFibGVNb3ZlMyhlKSB7IGUuZW5hYmxlTW92ZSgpOyB9XG5cblx0ZnVuY3Rpb24gYWRkKGhhbmRsZU9iaikge1xuXHRcdHZhciBoYW5kbGVyID0gaGFuZGxlT2JqLmhhbmRsZXI7XG5cblx0XHRoYW5kbGVPYmouaGFuZGxlciA9IGZ1bmN0aW9uKGUpIHtcblx0XHRcdC8vIENvcHkgbW92ZSBwcm9wZXJ0aWVzIGFjcm9zcyBmcm9tIG9yaWdpbmFsRXZlbnRcblx0XHRcdHZhciBpID0gcHJvcGVydGllcy5sZW5ndGg7XG5cdFx0XHR2YXIgcHJvcGVydHk7XG5cblx0XHRcdHdoaWxlKGktLSkge1xuXHRcdFx0XHRwcm9wZXJ0eSA9IHByb3BlcnRpZXNbaV07XG5cdFx0XHRcdGVbcHJvcGVydHldID0gZS5vcmlnaW5hbEV2ZW50W3Byb3BlcnR5XTtcblx0XHRcdH1cblxuXHRcdFx0aGFuZGxlci5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuXHRcdH07XG5cdH1cblxuXHRqUXVlcnkuZXZlbnQuc3BlY2lhbC5tb3Zlc3RhcnQgPSB7XG5cdFx0c2V0dXA6IGZ1bmN0aW9uKCkge1xuXHRcdFx0Ly8gTW92ZXN0YXJ0IG11c3QgYmUgZW5hYmxlZCB0byBhbGxvdyBvdGhlciBtb3ZlIGV2ZW50c1xuXHRcdFx0b24odGhpcywgJ21vdmVzdGFydCcsIGVuYWJsZU1vdmUxKTtcblxuXHRcdFx0Ly8gRG8gbGlzdGVuIHRvIERPTSBldmVudHNcblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9LFxuXG5cdFx0dGVhcmRvd246IGZ1bmN0aW9uKCkge1xuXHRcdFx0b2ZmKHRoaXMsICdtb3Zlc3RhcnQnLCBlbmFibGVNb3ZlMSk7XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fSxcblxuXHRcdGFkZDogYWRkXG5cdH07XG5cblx0alF1ZXJ5LmV2ZW50LnNwZWNpYWwubW92ZSA9IHtcblx0XHRzZXR1cDogZnVuY3Rpb24oKSB7XG5cdFx0XHRvbih0aGlzLCAnbW92ZXN0YXJ0JywgZW5hYmxlTW92ZTIpO1xuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH0sXG5cblx0XHR0ZWFyZG93bjogZnVuY3Rpb24oKSB7XG5cdFx0XHRvZmYodGhpcywgJ21vdmVzdGFydCcsIGVuYWJsZU1vdmUyKTtcblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9LFxuXG5cdFx0YWRkOiBhZGRcblx0fTtcblxuXHRqUXVlcnkuZXZlbnQuc3BlY2lhbC5tb3ZlZW5kID0ge1xuXHRcdHNldHVwOiBmdW5jdGlvbigpIHtcblx0XHRcdG9uKHRoaXMsICdtb3Zlc3RhcnQnLCBlbmFibGVNb3ZlMyk7XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fSxcblxuXHRcdHRlYXJkb3duOiBmdW5jdGlvbigpIHtcblx0XHRcdG9mZih0aGlzLCAnbW92ZXN0YXJ0JywgZW5hYmxlTW92ZTMpO1xuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH0sXG5cblx0XHRhZGQ6IGFkZFxuXHR9O1xufSk7XG5cbi8vIGpRdWVyeSBNYXNrIFBsdWdpbiB2MS4xNC4xNlxuLy8gZ2l0aHViLmNvbS9pZ29yZXNjb2Jhci9qUXVlcnktTWFzay1QbHVnaW5cbi8vIHZhciAkanNjb21wPSRqc2NvbXB8fHt9OyRqc2NvbXAuc2NvcGU9e307JGpzY29tcC5maW5kSW50ZXJuYWw9ZnVuY3Rpb24oYSxuLGYpe2EgaW5zdGFuY2VvZiBTdHJpbmcmJihhPVN0cmluZyhhKSk7Zm9yKHZhciBwPWEubGVuZ3RoLGs9MDtrPHA7aysrKXt2YXIgYj1hW2tdO2lmKG4uY2FsbChmLGIsayxhKSlyZXR1cm57aTprLHY6Yn19cmV0dXJue2k6LTEsdjp2b2lkIDB9fTskanNjb21wLkFTU1VNRV9FUzU9ITE7JGpzY29tcC5BU1NVTUVfTk9fTkFUSVZFX01BUD0hMTskanNjb21wLkFTU1VNRV9OT19OQVRJVkVfU0VUPSExOyRqc2NvbXAuU0lNUExFX0ZST1VORF9QT0xZRklMTD0hMTtcbi8vICRqc2NvbXAuZGVmaW5lUHJvcGVydHk9JGpzY29tcC5BU1NVTUVfRVM1fHxcImZ1bmN0aW9uXCI9PXR5cGVvZiBPYmplY3QuZGVmaW5lUHJvcGVydGllcz9PYmplY3QuZGVmaW5lUHJvcGVydHk6ZnVuY3Rpb24oYSxuLGYpe2EhPUFycmF5LnByb3RvdHlwZSYmYSE9T2JqZWN0LnByb3RvdHlwZSYmKGFbbl09Zi52YWx1ZSl9OyRqc2NvbXAuZ2V0R2xvYmFsPWZ1bmN0aW9uKGEpe3JldHVyblwidW5kZWZpbmVkXCIhPXR5cGVvZiB3aW5kb3cmJndpbmRvdz09PWE/YTpcInVuZGVmaW5lZFwiIT10eXBlb2YgZ2xvYmFsJiZudWxsIT1nbG9iYWw/Z2xvYmFsOmF9OyRqc2NvbXAuZ2xvYmFsPSRqc2NvbXAuZ2V0R2xvYmFsKHRoaXMpO1xuLy8gJGpzY29tcC5wb2x5ZmlsbD1mdW5jdGlvbihhLG4sZixwKXtpZihuKXtmPSRqc2NvbXAuZ2xvYmFsO2E9YS5zcGxpdChcIi5cIik7Zm9yKHA9MDtwPGEubGVuZ3RoLTE7cCsrKXt2YXIgaz1hW3BdO2sgaW4gZnx8KGZba109e30pO2Y9ZltrXX1hPWFbYS5sZW5ndGgtMV07cD1mW2FdO249bihwKTtuIT1wJiZudWxsIT1uJiYkanNjb21wLmRlZmluZVByb3BlcnR5KGYsYSx7Y29uZmlndXJhYmxlOiEwLHdyaXRhYmxlOiEwLHZhbHVlOm59KX19OyRqc2NvbXAucG9seWZpbGwoXCJBcnJheS5wcm90b3R5cGUuZmluZFwiLGZ1bmN0aW9uKGEpe3JldHVybiBhP2E6ZnVuY3Rpb24oYSxmKXtyZXR1cm4gJGpzY29tcC5maW5kSW50ZXJuYWwodGhpcyxhLGYpLnZ9fSxcImVzNlwiLFwiZXMzXCIpO1xuLy8gKGZ1bmN0aW9uKGEsbixmKXtcImZ1bmN0aW9uXCI9PT10eXBlb2YgZGVmaW5lJiZkZWZpbmUuYW1kP2RlZmluZShbXCJqcXVlcnlcIl0sYSk6XCJvYmplY3RcIj09PXR5cGVvZiBleHBvcnRzJiZcInVuZGVmaW5lZFwiPT09dHlwZW9mIE1ldGVvcj9tb2R1bGUuZXhwb3J0cz1hKHJlcXVpcmUoXCJqcXVlcnlcIikpOmEobnx8Zil9KShmdW5jdGlvbihhKXt2YXIgbj1mdW5jdGlvbihiLGQsZSl7dmFyIGM9e2ludmFsaWQ6W10sZ2V0Q2FyZXQ6ZnVuY3Rpb24oKXt0cnl7dmFyIGE9MCxyPWIuZ2V0KDApLGg9ZG9jdW1lbnQuc2VsZWN0aW9uLGQ9ci5zZWxlY3Rpb25TdGFydDtpZihoJiYtMT09PW5hdmlnYXRvci5hcHBWZXJzaW9uLmluZGV4T2YoXCJNU0lFIDEwXCIpKXt2YXIgZT1oLmNyZWF0ZVJhbmdlKCk7ZS5tb3ZlU3RhcnQoXCJjaGFyYWN0ZXJcIiwtYy52YWwoKS5sZW5ndGgpO2E9ZS50ZXh0Lmxlbmd0aH1lbHNlIGlmKGR8fFwiMFwiPT09ZClhPWQ7cmV0dXJuIGF9Y2F0Y2goQyl7fX0sc2V0Q2FyZXQ6ZnVuY3Rpb24oYSl7dHJ5e2lmKGIuaXMoXCI6Zm9jdXNcIikpe3ZhciBjPVxuLy8gYi5nZXQoMCk7aWYoYy5zZXRTZWxlY3Rpb25SYW5nZSljLnNldFNlbGVjdGlvblJhbmdlKGEsYSk7ZWxzZXt2YXIgZz1jLmNyZWF0ZVRleHRSYW5nZSgpO2cuY29sbGFwc2UoITApO2cubW92ZUVuZChcImNoYXJhY3RlclwiLGEpO2cubW92ZVN0YXJ0KFwiY2hhcmFjdGVyXCIsYSk7Zy5zZWxlY3QoKX19fWNhdGNoKEIpe319LGV2ZW50czpmdW5jdGlvbigpe2Iub24oXCJrZXlkb3duLm1hc2tcIixmdW5jdGlvbihhKXtiLmRhdGEoXCJtYXNrLWtleWNvZGVcIixhLmtleUNvZGV8fGEud2hpY2gpO2IuZGF0YShcIm1hc2stcHJldml1cy12YWx1ZVwiLGIudmFsKCkpO2IuZGF0YShcIm1hc2stcHJldml1cy1jYXJldC1wb3NcIixjLmdldENhcmV0KCkpO2MubWFza0RpZ2l0UG9zTWFwT2xkPWMubWFza0RpZ2l0UG9zTWFwfSkub24oYS5qTWFza0dsb2JhbHMudXNlSW5wdXQ/XCJpbnB1dC5tYXNrXCI6XCJrZXl1cC5tYXNrXCIsYy5iZWhhdmlvdXIpLm9uKFwicGFzdGUubWFzayBkcm9wLm1hc2tcIixmdW5jdGlvbigpe3NldFRpbWVvdXQoZnVuY3Rpb24oKXtiLmtleWRvd24oKS5rZXl1cCgpfSxcbi8vIDEwMCl9KS5vbihcImNoYW5nZS5tYXNrXCIsZnVuY3Rpb24oKXtiLmRhdGEoXCJjaGFuZ2VkXCIsITApfSkub24oXCJibHVyLm1hc2tcIixmdW5jdGlvbigpe2Y9PT1jLnZhbCgpfHxiLmRhdGEoXCJjaGFuZ2VkXCIpfHxiLnRyaWdnZXIoXCJjaGFuZ2VcIik7Yi5kYXRhKFwiY2hhbmdlZFwiLCExKX0pLm9uKFwiYmx1ci5tYXNrXCIsZnVuY3Rpb24oKXtmPWMudmFsKCl9KS5vbihcImZvY3VzLm1hc2tcIixmdW5jdGlvbihiKXshMD09PWUuc2VsZWN0T25Gb2N1cyYmYShiLnRhcmdldCkuc2VsZWN0KCl9KS5vbihcImZvY3Vzb3V0Lm1hc2tcIixmdW5jdGlvbigpe2UuY2xlYXJJZk5vdE1hdGNoJiYhay50ZXN0KGMudmFsKCkpJiZjLnZhbChcIlwiKX0pfSxnZXRSZWdleE1hc2s6ZnVuY3Rpb24oKXtmb3IodmFyIGE9W10sYixjLGUsdCxmPTA7ZjxkLmxlbmd0aDtmKyspKGI9bC50cmFuc2xhdGlvbltkLmNoYXJBdChmKV0pPyhjPWIucGF0dGVybi50b1N0cmluZygpLnJlcGxhY2UoLy57MX0kfF4uezF9L2csXCJcIiksZT1iLm9wdGlvbmFsLFxuLy8gKGI9Yi5yZWN1cnNpdmUpPyhhLnB1c2goZC5jaGFyQXQoZikpLHQ9e2RpZ2l0OmQuY2hhckF0KGYpLHBhdHRlcm46Y30pOmEucHVzaChlfHxiP2MrXCI/XCI6YykpOmEucHVzaChkLmNoYXJBdChmKS5yZXBsYWNlKC9bLVxcL1xcXFxeJCorPy4oKXxbXFxde31dL2csXCJcXFxcJCZcIikpO2E9YS5qb2luKFwiXCIpO3QmJihhPWEucmVwbGFjZShuZXcgUmVnRXhwKFwiKFwiK3QuZGlnaXQrXCIoLipcIit0LmRpZ2l0K1wiKT8pXCIpLFwiKCQxKT9cIikucmVwbGFjZShuZXcgUmVnRXhwKHQuZGlnaXQsXCJnXCIpLHQucGF0dGVybikpO3JldHVybiBuZXcgUmVnRXhwKGEpfSxkZXN0cm95RXZlbnRzOmZ1bmN0aW9uKCl7Yi5vZmYoXCJpbnB1dCBrZXlkb3duIGtleXVwIHBhc3RlIGRyb3AgYmx1ciBmb2N1c291dCBcIi5zcGxpdChcIiBcIikuam9pbihcIi5tYXNrIFwiKSl9LHZhbDpmdW5jdGlvbihhKXt2YXIgYz1iLmlzKFwiaW5wdXRcIik/XCJ2YWxcIjpcInRleHRcIjtpZigwPGFyZ3VtZW50cy5sZW5ndGgpe2lmKGJbY10oKSE9PWEpYltjXShhKTtcbi8vIGM9Yn1lbHNlIGM9YltjXSgpO3JldHVybiBjfSxjYWxjdWxhdGVDYXJldFBvc2l0aW9uOmZ1bmN0aW9uKGEpe3ZhciBkPWMuZ2V0TWFza2VkKCksaD1jLmdldENhcmV0KCk7aWYoYSE9PWQpe3ZhciBlPWIuZGF0YShcIm1hc2stcHJldml1cy1jYXJldC1wb3NcIil8fDA7ZD1kLmxlbmd0aDt2YXIgZz1hLmxlbmd0aCxmPWE9MCxsPTAsaz0wLG07Zm9yKG09aDttPGQmJmMubWFza0RpZ2l0UG9zTWFwW21dO20rKylmKys7Zm9yKG09aC0xOzA8PW0mJmMubWFza0RpZ2l0UG9zTWFwW21dO20tLSlhKys7Zm9yKG09aC0xOzA8PW07bS0tKWMubWFza0RpZ2l0UG9zTWFwW21dJiZsKys7Zm9yKG09ZS0xOzA8PW07bS0tKWMubWFza0RpZ2l0UG9zTWFwT2xkW21dJiZrKys7aD5nP2g9MTAqZDplPj1oJiZlIT09Zz9jLm1hc2tEaWdpdFBvc01hcE9sZFtoXXx8KGU9aCxoPWgtKGstbCktYSxjLm1hc2tEaWdpdFBvc01hcFtoXSYmKGg9ZSkpOmg+ZSYmKGg9aCsobC1rKStmKX1yZXR1cm4gaH0sYmVoYXZpb3VyOmZ1bmN0aW9uKGQpe2Q9XG4vLyBkfHx3aW5kb3cuZXZlbnQ7Yy5pbnZhbGlkPVtdO3ZhciBlPWIuZGF0YShcIm1hc2sta2V5Y29kZVwiKTtpZigtMT09PWEuaW5BcnJheShlLGwuYnlQYXNzS2V5cykpe2U9Yy5nZXRNYXNrZWQoKTt2YXIgaD1jLmdldENhcmV0KCksZz1iLmRhdGEoXCJtYXNrLXByZXZpdXMtdmFsdWVcIil8fFwiXCI7c2V0VGltZW91dChmdW5jdGlvbigpe2Muc2V0Q2FyZXQoYy5jYWxjdWxhdGVDYXJldFBvc2l0aW9uKGcpKX0sYS5qTWFza0dsb2JhbHMua2V5U3Ryb2tlQ29tcGVuc2F0aW9uKTtjLnZhbChlKTtjLnNldENhcmV0KGgpO3JldHVybiBjLmNhbGxiYWNrcyhkKX19LGdldE1hc2tlZDpmdW5jdGlvbihhLGIpe3ZhciBoPVtdLGY9dm9pZCAwPT09Yj9jLnZhbCgpOmIrXCJcIixnPTAsaz1kLmxlbmd0aCxuPTAscD1mLmxlbmd0aCxtPTEscj1cInB1c2hcIix1PS0xLHc9MDtiPVtdO2lmKGUucmV2ZXJzZSl7cj1cInVuc2hpZnRcIjttPS0xO3ZhciB4PTA7Zz1rLTE7bj1wLTE7dmFyIEE9ZnVuY3Rpb24oKXtyZXR1cm4tMTxcbi8vIGcmJi0xPG59fWVsc2UgeD1rLTEsQT1mdW5jdGlvbigpe3JldHVybiBnPGsmJm48cH07Zm9yKHZhciB6O0EoKTspe3ZhciB5PWQuY2hhckF0KGcpLHY9Zi5jaGFyQXQobikscT1sLnRyYW5zbGF0aW9uW3ldO2lmKHEpdi5tYXRjaChxLnBhdHRlcm4pPyhoW3JdKHYpLHEucmVjdXJzaXZlJiYoLTE9PT11P3U9ZzpnPT09eCYmZyE9PXUmJihnPXUtbSkseD09PXUmJihnLT1tKSksZys9bSk6dj09PXo/KHctLSx6PXZvaWQgMCk6cS5vcHRpb25hbD8oZys9bSxuLT1tKTpxLmZhbGxiYWNrPyhoW3JdKHEuZmFsbGJhY2spLGcrPW0sbi09bSk6Yy5pbnZhbGlkLnB1c2goe3A6bix2OnYsZTpxLnBhdHRlcm59KSxuKz1tO2Vsc2V7aWYoIWEpaFtyXSh5KTt2PT09eT8oYi5wdXNoKG4pLG4rPW0pOih6PXksYi5wdXNoKG4rdyksdysrKTtnKz1tfX1hPWQuY2hhckF0KHgpO2shPT1wKzF8fGwudHJhbnNsYXRpb25bYV18fGgucHVzaChhKTtoPWguam9pbihcIlwiKTtjLm1hcE1hc2tkaWdpdFBvc2l0aW9ucyhoLFxuLy8gYixwKTtyZXR1cm4gaH0sbWFwTWFza2RpZ2l0UG9zaXRpb25zOmZ1bmN0aW9uKGEsYixkKXthPWUucmV2ZXJzZT9hLmxlbmd0aC1kOjA7Yy5tYXNrRGlnaXRQb3NNYXA9e307Zm9yKGQ9MDtkPGIubGVuZ3RoO2QrKyljLm1hc2tEaWdpdFBvc01hcFtiW2RdK2FdPTF9LGNhbGxiYWNrczpmdW5jdGlvbihhKXt2YXIgZz1jLnZhbCgpLGg9ZyE9PWYsaz1bZyxhLGIsZV0sbD1mdW5jdGlvbihhLGIsYyl7XCJmdW5jdGlvblwiPT09dHlwZW9mIGVbYV0mJmImJmVbYV0uYXBwbHkodGhpcyxjKX07bChcIm9uQ2hhbmdlXCIsITA9PT1oLGspO2woXCJvbktleVByZXNzXCIsITA9PT1oLGspO2woXCJvbkNvbXBsZXRlXCIsZy5sZW5ndGg9PT1kLmxlbmd0aCxrKTtsKFwib25JbnZhbGlkXCIsMDxjLmludmFsaWQubGVuZ3RoLFtnLGEsYixjLmludmFsaWQsZV0pfX07Yj1hKGIpO3ZhciBsPXRoaXMsZj1jLnZhbCgpLGs7ZD1cImZ1bmN0aW9uXCI9PT10eXBlb2YgZD9kKGMudmFsKCksdm9pZCAwLGIsZSk6ZDtsLm1hc2s9XG4vLyBkO2wub3B0aW9ucz1lO2wucmVtb3ZlPWZ1bmN0aW9uKCl7dmFyIGE9Yy5nZXRDYXJldCgpO2wub3B0aW9ucy5wbGFjZWhvbGRlciYmYi5yZW1vdmVBdHRyKFwicGxhY2Vob2xkZXJcIik7Yi5kYXRhKFwibWFzay1tYXhsZW5ndGhcIikmJmIucmVtb3ZlQXR0cihcIm1heGxlbmd0aFwiKTtjLmRlc3Ryb3lFdmVudHMoKTtjLnZhbChsLmdldENsZWFuVmFsKCkpO2Muc2V0Q2FyZXQoYSk7cmV0dXJuIGJ9O2wuZ2V0Q2xlYW5WYWw9ZnVuY3Rpb24oKXtyZXR1cm4gYy5nZXRNYXNrZWQoITApfTtsLmdldE1hc2tlZFZhbD1mdW5jdGlvbihhKXtyZXR1cm4gYy5nZXRNYXNrZWQoITEsYSl9O2wuaW5pdD1mdW5jdGlvbihnKXtnPWd8fCExO2U9ZXx8e307bC5jbGVhcklmTm90TWF0Y2g9YS5qTWFza0dsb2JhbHMuY2xlYXJJZk5vdE1hdGNoO2wuYnlQYXNzS2V5cz1hLmpNYXNrR2xvYmFscy5ieVBhc3NLZXlzO2wudHJhbnNsYXRpb249YS5leHRlbmQoe30sYS5qTWFza0dsb2JhbHMudHJhbnNsYXRpb24sZS50cmFuc2xhdGlvbik7XG4vLyBsPWEuZXh0ZW5kKCEwLHt9LGwsZSk7az1jLmdldFJlZ2V4TWFzaygpO2lmKGcpYy5ldmVudHMoKSxjLnZhbChjLmdldE1hc2tlZCgpKTtlbHNle2UucGxhY2Vob2xkZXImJmIuYXR0cihcInBsYWNlaG9sZGVyXCIsZS5wbGFjZWhvbGRlcik7Yi5kYXRhKFwibWFza1wiKSYmYi5hdHRyKFwiYXV0b2NvbXBsZXRlXCIsXCJvZmZcIik7Zz0wO2Zvcih2YXIgZj0hMDtnPGQubGVuZ3RoO2crKyl7dmFyIGg9bC50cmFuc2xhdGlvbltkLmNoYXJBdChnKV07aWYoaCYmaC5yZWN1cnNpdmUpe2Y9ITE7YnJlYWt9fWYmJmIuYXR0cihcIm1heGxlbmd0aFwiLGQubGVuZ3RoKS5kYXRhKFwibWFzay1tYXhsZW5ndGhcIiwhMCk7Yy5kZXN0cm95RXZlbnRzKCk7Yy5ldmVudHMoKTtnPWMuZ2V0Q2FyZXQoKTtjLnZhbChjLmdldE1hc2tlZCgpKTtjLnNldENhcmV0KGcpfX07bC5pbml0KCFiLmlzKFwiaW5wdXRcIikpfTthLm1hc2tXYXRjaGVycz17fTt2YXIgZj1mdW5jdGlvbigpe3ZhciBiPWEodGhpcyksZD17fSxlPWIuYXR0cihcImRhdGEtbWFza1wiKTtcbi8vIGIuYXR0cihcImRhdGEtbWFzay1yZXZlcnNlXCIpJiYoZC5yZXZlcnNlPSEwKTtiLmF0dHIoXCJkYXRhLW1hc2stY2xlYXJpZm5vdG1hdGNoXCIpJiYoZC5jbGVhcklmTm90TWF0Y2g9ITApO1widHJ1ZVwiPT09Yi5hdHRyKFwiZGF0YS1tYXNrLXNlbGVjdG9uZm9jdXNcIikmJihkLnNlbGVjdE9uRm9jdXM9ITApO2lmKHAoYixlLGQpKXJldHVybiBiLmRhdGEoXCJtYXNrXCIsbmV3IG4odGhpcyxlLGQpKX0scD1mdW5jdGlvbihiLGQsZSl7ZT1lfHx7fTt2YXIgYz1hKGIpLmRhdGEoXCJtYXNrXCIpLGY9SlNPTi5zdHJpbmdpZnk7Yj1hKGIpLnZhbCgpfHxhKGIpLnRleHQoKTt0cnl7cmV0dXJuXCJmdW5jdGlvblwiPT09dHlwZW9mIGQmJihkPWQoYikpLFwib2JqZWN0XCIhPT10eXBlb2YgY3x8ZihjLm9wdGlvbnMpIT09ZihlKXx8Yy5tYXNrIT09ZH1jYXRjaCh3KXt9fSxrPWZ1bmN0aW9uKGEpe3ZhciBiPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7YT1cIm9uXCIrYTt2YXIgZT1hIGluIGI7ZXx8KGIuc2V0QXR0cmlidXRlKGEsXG4vLyBcInJldHVybjtcIiksZT1cImZ1bmN0aW9uXCI9PT10eXBlb2YgYlthXSk7cmV0dXJuIGV9O2EuZm4ubWFzaz1mdW5jdGlvbihiLGQpe2Q9ZHx8e307dmFyIGU9dGhpcy5zZWxlY3RvcixjPWEuak1hc2tHbG9iYWxzLGY9Yy53YXRjaEludGVydmFsO2M9ZC53YXRjaElucHV0c3x8Yy53YXRjaElucHV0czt2YXIgaz1mdW5jdGlvbigpe2lmKHAodGhpcyxiLGQpKXJldHVybiBhKHRoaXMpLmRhdGEoXCJtYXNrXCIsbmV3IG4odGhpcyxiLGQpKX07YSh0aGlzKS5lYWNoKGspO2UmJlwiXCIhPT1lJiZjJiYoY2xlYXJJbnRlcnZhbChhLm1hc2tXYXRjaGVyc1tlXSksYS5tYXNrV2F0Y2hlcnNbZV09c2V0SW50ZXJ2YWwoZnVuY3Rpb24oKXthKGRvY3VtZW50KS5maW5kKGUpLmVhY2goayl9LGYpKTtyZXR1cm4gdGhpc307YS5mbi5tYXNrZWQ9ZnVuY3Rpb24oYSl7cmV0dXJuIHRoaXMuZGF0YShcIm1hc2tcIikuZ2V0TWFza2VkVmFsKGEpfTthLmZuLnVubWFzaz1mdW5jdGlvbigpe2NsZWFySW50ZXJ2YWwoYS5tYXNrV2F0Y2hlcnNbdGhpcy5zZWxlY3Rvcl0pO1xuLy8gZGVsZXRlIGEubWFza1dhdGNoZXJzW3RoaXMuc2VsZWN0b3JdO3JldHVybiB0aGlzLmVhY2goZnVuY3Rpb24oKXt2YXIgYj1hKHRoaXMpLmRhdGEoXCJtYXNrXCIpO2ImJmIucmVtb3ZlKCkucmVtb3ZlRGF0YShcIm1hc2tcIil9KX07YS5mbi5jbGVhblZhbD1mdW5jdGlvbigpe3JldHVybiB0aGlzLmRhdGEoXCJtYXNrXCIpLmdldENsZWFuVmFsKCl9O2EuYXBwbHlEYXRhTWFzaz1mdW5jdGlvbihiKXtiPWJ8fGEuak1hc2tHbG9iYWxzLm1hc2tFbGVtZW50czsoYiBpbnN0YW5jZW9mIGE/YjphKGIpKS5maWx0ZXIoYS5qTWFza0dsb2JhbHMuZGF0YU1hc2tBdHRyKS5lYWNoKGYpfTtrPXttYXNrRWxlbWVudHM6XCJpbnB1dCx0ZCxzcGFuLGRpdlwiLGRhdGFNYXNrQXR0cjpcIipbZGF0YS1tYXNrXVwiLGRhdGFNYXNrOiEwLHdhdGNoSW50ZXJ2YWw6MzAwLHdhdGNoSW5wdXRzOiEwLGtleVN0cm9rZUNvbXBlbnNhdGlvbjoxMCx1c2VJbnB1dDohL0Nocm9tZVxcL1syLTRdWzAtOV18U2Ftc3VuZ0Jyb3dzZXIvLnRlc3Qod2luZG93Lm5hdmlnYXRvci51c2VyQWdlbnQpJiZcbi8vIGsoXCJpbnB1dFwiKSx3YXRjaERhdGFNYXNrOiExLGJ5UGFzc0tleXM6WzksMTYsMTcsMTgsMzYsMzcsMzgsMzksNDAsOTFdLHRyYW5zbGF0aW9uOnswOntwYXR0ZXJuOi9cXGQvfSw5OntwYXR0ZXJuOi9cXGQvLG9wdGlvbmFsOiEwfSxcIiNcIjp7cGF0dGVybjovXFxkLyxyZWN1cnNpdmU6ITB9LEE6e3BhdHRlcm46L1thLXpBLVowLTldL30sUzp7cGF0dGVybjovW2EtekEtWl0vfX19O2Euak1hc2tHbG9iYWxzPWEuak1hc2tHbG9iYWxzfHx7fTtrPWEuak1hc2tHbG9iYWxzPWEuZXh0ZW5kKCEwLHt9LGssYS5qTWFza0dsb2JhbHMpO2suZGF0YU1hc2smJmEuYXBwbHlEYXRhTWFzaygpO3NldEludGVydmFsKGZ1bmN0aW9uKCl7YS5qTWFza0dsb2JhbHMud2F0Y2hEYXRhTWFzayYmYS5hcHBseURhdGFNYXNrKCl9LGsud2F0Y2hJbnRlcnZhbCl9LHdpbmRvdy5qUXVlcnksd2luZG93LlplcHRvKTtcblxuLyogIGpRdWVyeSBOaWNlIFNlbGVjdCAtIHYxLjEuMFxuICAgIGh0dHBzOi8vZ2l0aHViLmNvbS9oZXJuYW5zYXJ0b3Jpby9qcXVlcnktbmljZS1zZWxlY3RcbiAgICBNYWRlIGJ5IEhlcm7DoW4gU2FydG9yaW8gICovXG5cbihmdW5jdGlvbigkKSB7XG5cbiAgJC5mbi5uaWNlU2VsZWN0ID0gZnVuY3Rpb24obWV0aG9kKSB7XG5cbiAgICAvLyBNZXRob2RzXG4gICAgaWYgKHR5cGVvZiBtZXRob2QgPT0gJ3N0cmluZycpIHtcbiAgICAgIGlmIChtZXRob2QgPT0gJ3VwZGF0ZScpIHtcbiAgICAgICAgdGhpcy5lYWNoKGZ1bmN0aW9uKCkge1xuICAgICAgICAgIHZhciAkc2VsZWN0ID0gJCh0aGlzKTtcbiAgICAgICAgICB2YXIgJGRyb3Bkb3duID0gJCh0aGlzKS5uZXh0KCcubmljZS1zZWxlY3QnKTtcbiAgICAgICAgICB2YXIgb3BlbiA9ICRkcm9wZG93bi5oYXNDbGFzcygnb3BlbicpO1xuXG4gICAgICAgICAgaWYgKCRkcm9wZG93bi5sZW5ndGgpIHtcbiAgICAgICAgICAgICRkcm9wZG93bi5yZW1vdmUoKTtcbiAgICAgICAgICAgIGNyZWF0ZV9uaWNlX3NlbGVjdCgkc2VsZWN0KTtcblxuICAgICAgICAgICAgaWYgKG9wZW4pIHtcbiAgICAgICAgICAgICAgJHNlbGVjdC5uZXh0KCkudHJpZ2dlcignY2xpY2snKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfSBlbHNlIGlmIChtZXRob2QgPT0gJ2Rlc3Ryb3knKSB7XG4gICAgICAgIHRoaXMuZWFjaChmdW5jdGlvbigpIHtcbiAgICAgICAgICB2YXIgJHNlbGVjdCA9ICQodGhpcyk7XG4gICAgICAgICAgdmFyICRkcm9wZG93biA9ICQodGhpcykubmV4dCgnLm5pY2Utc2VsZWN0Jyk7XG5cbiAgICAgICAgICBpZiAoJGRyb3Bkb3duLmxlbmd0aCkge1xuICAgICAgICAgICAgJGRyb3Bkb3duLnJlbW92ZSgpO1xuICAgICAgICAgICAgJHNlbGVjdC5jc3MoJ2Rpc3BsYXknLCAnJyk7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgaWYgKCQoJy5uaWNlLXNlbGVjdCcpLmxlbmd0aCA9PSAwKSB7XG4gICAgICAgICAgJChkb2N1bWVudCkub2ZmKCcubmljZV9zZWxlY3QnKTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbi8vICAgICAgICAgY29uc29sZS5sb2coJ01ldGhvZCBcIicgKyBtZXRob2QgKyAnXCIgZG9lcyBub3QgZXhpc3QuJylcbiAgICAgIH1cbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIC8vIEhpZGUgbmF0aXZlIHNlbGVjdFxuICAgIHRoaXMuaGlkZSgpO1xuXG4gICAgLy8gQ3JlYXRlIGN1c3RvbSBtYXJrdXBcbiAgICB0aGlzLmVhY2goZnVuY3Rpb24oKSB7XG4gICAgICB2YXIgJHNlbGVjdCA9ICQodGhpcyk7XG5cbiAgICAgIGlmICghJHNlbGVjdC5uZXh0KCkuaGFzQ2xhc3MoJ25pY2Utc2VsZWN0JykpIHtcbiAgICAgICAgY3JlYXRlX25pY2Vfc2VsZWN0KCRzZWxlY3QpO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgZnVuY3Rpb24gY3JlYXRlX25pY2Vfc2VsZWN0KCRzZWxlY3QpIHtcbiAgICAgICRzZWxlY3QuYWZ0ZXIoJCgnPGRpdj48L2Rpdj4nKVxuICAgICAgICAuYWRkQ2xhc3MoJ25pY2Utc2VsZWN0JylcbiAgICAgICAgLmFkZENsYXNzKCRzZWxlY3QuYXR0cignY2xhc3MnKSB8fCAnJylcbiAgICAgICAgLmFkZENsYXNzKCRzZWxlY3QuYXR0cignZGlzYWJsZWQnKSA/ICdkaXNhYmxlZCcgOiAnJylcbiAgICAgICAgLmF0dHIoJ3RhYmluZGV4JywgJHNlbGVjdC5hdHRyKCdkaXNhYmxlZCcpID8gbnVsbCA6ICcwJylcbiAgICAgICAgLmh0bWwoJzxzcGFuIGNsYXNzPVwiY3VycmVudFwiPjwvc3Bhbj48dWwgY2xhc3M9XCJsaXN0XCI+PC91bD4nKVxuICAgICAgKTtcblxuICAgICAgdmFyICRkcm9wZG93biA9ICRzZWxlY3QubmV4dCgpO1xuICAgICAgdmFyICRvcHRpb25zID0gJHNlbGVjdC5maW5kKCdvcHRpb24nKTtcbiAgICAgIHZhciAkc2VsZWN0ZWQgPSAkc2VsZWN0LmZpbmQoJ29wdGlvbjpzZWxlY3RlZCcpO1xuXG4gICAgICAkZHJvcGRvd24uZmluZCgnLmN1cnJlbnQnKS5odG1sKCRzZWxlY3RlZC5kYXRhKCdkaXNwbGF5JykgfHzCoCRzZWxlY3RlZC50ZXh0KCkpO1xuXG4gICAgICAkb3B0aW9ucy5lYWNoKGZ1bmN0aW9uKGkpIHtcbiAgICAgICAgdmFyICRvcHRpb24gPSAkKHRoaXMpO1xuICAgICAgICB2YXIgZGlzcGxheSA9ICRvcHRpb24uZGF0YSgnZGlzcGxheScpO1xuXG4gICAgICAgICRkcm9wZG93bi5maW5kKCd1bCcpLmFwcGVuZCgkKCc8bGk+PC9saT4nKVxuICAgICAgICAgIC5hdHRyKCdkYXRhLXZhbHVlJywgJG9wdGlvbi52YWwoKSlcbiAgICAgICAgICAuYXR0cignZGF0YS1kaXNwbGF5JywgKGRpc3BsYXkgfHwgbnVsbCkpXG4gICAgICAgICAgLmFkZENsYXNzKCdvcHRpb24nICtcbiAgICAgICAgICAgICgkb3B0aW9uLmlzKCc6c2VsZWN0ZWQnKSA/ICcgc2VsZWN0ZWQnIDogJycpICtcbiAgICAgICAgICAgICgkb3B0aW9uLmlzKCc6ZGlzYWJsZWQnKSA/ICcgZGlzYWJsZWQnIDogJycpKVxuICAgICAgICAgIC5odG1sKCRvcHRpb24udGV4dCgpKVxuICAgICAgICApO1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgLyogRXZlbnQgbGlzdGVuZXJzICovXG5cbiAgICAvLyBVbmJpbmQgZXhpc3RpbmcgZXZlbnRzIGluIGNhc2UgdGhhdCB0aGUgcGx1Z2luIGhhcyBiZWVuIGluaXRpYWxpemVkIGJlZm9yZVxuICAgICQoZG9jdW1lbnQpLm9mZignLm5pY2Vfc2VsZWN0Jyk7XG5cbiAgICAvLyBPcGVuL2Nsb3NlXG4gICAgJChkb2N1bWVudCkub24oJ2NsaWNrLm5pY2Vfc2VsZWN0JywgJy5uaWNlLXNlbGVjdCcsIGZ1bmN0aW9uKGV2ZW50KSB7XG4gICAgICB2YXIgJGRyb3Bkb3duID0gJCh0aGlzKTtcblxuICAgICAgJCgnLm5pY2Utc2VsZWN0Jykubm90KCRkcm9wZG93bikucmVtb3ZlQ2xhc3MoJ29wZW4nKTtcbiAgICAgICRkcm9wZG93bi50b2dnbGVDbGFzcygnb3BlbicpO1xuXG4gICAgICBpZiAoJGRyb3Bkb3duLmhhc0NsYXNzKCdvcGVuJykpIHtcbiAgICAgICAgJGRyb3Bkb3duLmZpbmQoJy5vcHRpb24nKTtcbiAgICAgICAgJGRyb3Bkb3duLmZpbmQoJy5mb2N1cycpLnJlbW92ZUNsYXNzKCdmb2N1cycpO1xuICAgICAgICAkZHJvcGRvd24uZmluZCgnLnNlbGVjdGVkJykuYWRkQ2xhc3MoJ2ZvY3VzJyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAkZHJvcGRvd24uZm9jdXMoKTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIC8vIENsb3NlIHdoZW4gY2xpY2tpbmcgb3V0c2lkZVxuICAgICQoZG9jdW1lbnQpLm9uKCdjbGljay5uaWNlX3NlbGVjdCcsIGZ1bmN0aW9uKGV2ZW50KSB7XG4gICAgICBpZiAoJChldmVudC50YXJnZXQpLmNsb3Nlc3QoJy5uaWNlLXNlbGVjdCcpLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAkKCcubmljZS1zZWxlY3QnKS5yZW1vdmVDbGFzcygnb3BlbicpLmZpbmQoJy5vcHRpb24nKTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIC8vIE9wdGlvbiBjbGlja1xuICAgICQoZG9jdW1lbnQpLm9uKCdjbGljay5uaWNlX3NlbGVjdCcsICcubmljZS1zZWxlY3QgLm9wdGlvbjpub3QoLmRpc2FibGVkKScsIGZ1bmN0aW9uKGV2ZW50KSB7XG4gICAgICB2YXIgJG9wdGlvbiA9ICQodGhpcyk7XG4gICAgICB2YXIgJGRyb3Bkb3duID0gJG9wdGlvbi5jbG9zZXN0KCcubmljZS1zZWxlY3QnKTtcblxuICAgICAgJGRyb3Bkb3duLmZpbmQoJy5zZWxlY3RlZCcpLnJlbW92ZUNsYXNzKCdzZWxlY3RlZCcpO1xuICAgICAgJG9wdGlvbi5hZGRDbGFzcygnc2VsZWN0ZWQnKTtcblxuICAgICAgdmFyIHRleHQgPSAkb3B0aW9uLmRhdGEoJ2Rpc3BsYXknKSB8fCAkb3B0aW9uLnRleHQoKTtcbiAgICAgICRkcm9wZG93bi5maW5kKCcuY3VycmVudCcpLnRleHQodGV4dCk7XG5cbiAgICAgICRkcm9wZG93bi5wcmV2KCdzZWxlY3QnKS52YWwoJG9wdGlvbi5kYXRhKCd2YWx1ZScpKS50cmlnZ2VyKCdjaGFuZ2UnKTtcbiAgICB9KTtcblxuICAgIC8vIEtleWJvYXJkIGV2ZW50c1xuICAgICQoZG9jdW1lbnQpLm9uKCdrZXlkb3duLm5pY2Vfc2VsZWN0JywgJy5uaWNlLXNlbGVjdCcsIGZ1bmN0aW9uKGV2ZW50KSB7XG4gICAgICB2YXIgJGRyb3Bkb3duID0gJCh0aGlzKTtcbiAgICAgIHZhciAkZm9jdXNlZF9vcHRpb24gPSAkKCRkcm9wZG93bi5maW5kKCcuZm9jdXMnKSB8fCAkZHJvcGRvd24uZmluZCgnLmxpc3QgLm9wdGlvbi5zZWxlY3RlZCcpKTtcblxuICAgICAgLy8gU3BhY2Ugb3IgRW50ZXJcbiAgICAgIGlmIChldmVudC5rZXlDb2RlID09IDMyIHx8IGV2ZW50LmtleUNvZGUgPT0gMTMpIHtcbiAgICAgICAgaWYgKCRkcm9wZG93bi5oYXNDbGFzcygnb3BlbicpKSB7XG4gICAgICAgICAgJGZvY3VzZWRfb3B0aW9uLnRyaWdnZXIoJ2NsaWNrJyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgJGRyb3Bkb3duLnRyaWdnZXIoJ2NsaWNrJyk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgLy8gRG93blxuICAgICAgfSBlbHNlIGlmIChldmVudC5rZXlDb2RlID09IDQwKSB7XG4gICAgICAgIGlmICghJGRyb3Bkb3duLmhhc0NsYXNzKCdvcGVuJykpIHtcbiAgICAgICAgICAkZHJvcGRvd24udHJpZ2dlcignY2xpY2snKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB2YXIgJG5leHQgPSAkZm9jdXNlZF9vcHRpb24ubmV4dEFsbCgnLm9wdGlvbjpub3QoLmRpc2FibGVkKScpLmZpcnN0KCk7XG4gICAgICAgICAgaWYgKCRuZXh0Lmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICRkcm9wZG93bi5maW5kKCcuZm9jdXMnKS5yZW1vdmVDbGFzcygnZm9jdXMnKTtcbiAgICAgICAgICAgICRuZXh0LmFkZENsYXNzKCdmb2N1cycpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAvLyBVcFxuICAgICAgfSBlbHNlIGlmIChldmVudC5rZXlDb2RlID09IDM4KSB7XG4gICAgICAgIGlmICghJGRyb3Bkb3duLmhhc0NsYXNzKCdvcGVuJykpIHtcbiAgICAgICAgICAkZHJvcGRvd24udHJpZ2dlcignY2xpY2snKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB2YXIgJHByZXYgPSAkZm9jdXNlZF9vcHRpb24ucHJldkFsbCgnLm9wdGlvbjpub3QoLmRpc2FibGVkKScpLmZpcnN0KCk7XG4gICAgICAgICAgaWYgKCRwcmV2Lmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICRkcm9wZG93bi5maW5kKCcuZm9jdXMnKS5yZW1vdmVDbGFzcygnZm9jdXMnKTtcbiAgICAgICAgICAgICRwcmV2LmFkZENsYXNzKCdmb2N1cycpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAvLyBFc2NcbiAgICAgIH0gZWxzZSBpZiAoZXZlbnQua2V5Q29kZSA9PSAyNykge1xuICAgICAgICBpZiAoJGRyb3Bkb3duLmhhc0NsYXNzKCdvcGVuJykpIHtcbiAgICAgICAgICAkZHJvcGRvd24udHJpZ2dlcignY2xpY2snKTtcbiAgICAgICAgfVxuICAgICAgLy8gVGFiXG4gICAgICB9IGVsc2UgaWYgKGV2ZW50LmtleUNvZGUgPT0gOSkge1xuICAgICAgICBpZiAoJGRyb3Bkb3duLmhhc0NsYXNzKCdvcGVuJykpIHtcbiAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KTtcblxuICAgIC8vIERldGVjdCBDU1MgcG9pbnRlci1ldmVudHMgc3VwcG9ydCwgZm9yIElFIDw9IDEwLiBGcm9tIE1vZGVybml6ci5cbiAgICB2YXIgc3R5bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJykuc3R5bGU7XG4gICAgc3R5bGUuY3NzVGV4dCA9ICdwb2ludGVyLWV2ZW50czphdXRvJztcbiAgICBpZiAoc3R5bGUucG9pbnRlckV2ZW50cyAhPT0gJ2F1dG8nKSB7XG4gICAgICAkKCdodG1sJykuYWRkQ2xhc3MoJ25vLWNzc3BvaW50ZXJldmVudHMnKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcztcblxuICB9O1xuXG59KGpRdWVyeSkpO1xuKGZ1bmN0aW9uKCQpe1xuXG4gICQuZm4udHdlbnR5dHdlbnR5ID0gZnVuY3Rpb24ob3B0aW9ucykge1xuICAgIHZhciBvcHRpb25zID0gJC5leHRlbmQoe1xuICAgICAgZGVmYXVsdF9vZmZzZXRfcGN0OiAwLjUsXG4gICAgICBvcmllbnRhdGlvbjogJ2hvcml6b250YWwnLFxuICAgICAgYmVmb3JlX2xhYmVsOiAnQmVmb3JlJyxcbiAgICAgIGFmdGVyX2xhYmVsOiAnQWZ0ZXInLFxuICAgICAgbm9fb3ZlcmxheTogZmFsc2UsXG4gICAgICBtb3ZlX3NsaWRlcl9vbl9ob3ZlcjogZmFsc2UsXG4gICAgICBtb3ZlX3dpdGhfaGFuZGxlX29ubHk6IHRydWUsXG4gICAgICBjbGlja190b19tb3ZlOiBmYWxzZVxuICAgIH0sIG9wdGlvbnMpO1xuXG4gICAgcmV0dXJuIHRoaXMuZWFjaChmdW5jdGlvbigpIHtcblxuICAgICAgdmFyIHNsaWRlclBjdCA9IG9wdGlvbnMuZGVmYXVsdF9vZmZzZXRfcGN0O1xuICAgICAgdmFyIGNvbnRhaW5lciA9ICQodGhpcyk7XG4gICAgICB2YXIgc2xpZGVyT3JpZW50YXRpb24gPSBvcHRpb25zLm9yaWVudGF0aW9uO1xuICAgICAgdmFyIGJlZm9yZURpcmVjdGlvbiA9IChzbGlkZXJPcmllbnRhdGlvbiA9PT0gJ3ZlcnRpY2FsJykgPyAnZG93bicgOiAnbGVmdCc7XG4gICAgICB2YXIgYWZ0ZXJEaXJlY3Rpb24gPSAoc2xpZGVyT3JpZW50YXRpb24gPT09ICd2ZXJ0aWNhbCcpID8gJ3VwJyA6ICdyaWdodCc7XG5cblxuICAgICAgY29udGFpbmVyLndyYXAoXCI8ZGl2IGNsYXNzPSd0d2VudHl0d2VudHktd3JhcHBlciB0d2VudHl0d2VudHktXCIgKyBzbGlkZXJPcmllbnRhdGlvbiArIFwiJz48L2Rpdj5cIik7XG4gICAgICBpZighb3B0aW9ucy5ub19vdmVybGF5KSB7XG4gICAgICAgIGNvbnRhaW5lci5hcHBlbmQoXCI8ZGl2IGNsYXNzPSd0d2VudHl0d2VudHktb3ZlcmxheSc+PC9kaXY+XCIpO1xuICAgICAgICB2YXIgb3ZlcmxheSA9IGNvbnRhaW5lci5maW5kKFwiLnR3ZW50eXR3ZW50eS1vdmVybGF5XCIpO1xuICAgICAgICBvdmVybGF5LmFwcGVuZChcIjxkaXYgY2xhc3M9J3R3ZW50eXR3ZW50eS1iZWZvcmUtbGFiZWwnIGRhdGEtY29udGVudD0nXCIrb3B0aW9ucy5iZWZvcmVfbGFiZWwrXCInPjwvZGl2PlwiKTtcbiAgICAgICAgb3ZlcmxheS5hcHBlbmQoXCI8ZGl2IGNsYXNzPSd0d2VudHl0d2VudHktYWZ0ZXItbGFiZWwnIGRhdGEtY29udGVudD0nXCIrb3B0aW9ucy5hZnRlcl9sYWJlbCtcIic+PC9kaXY+XCIpO1xuICAgICAgfVxuICAgICAgdmFyIGJlZm9yZUltZyA9IGNvbnRhaW5lci5maW5kKFwiaW1nOmZpcnN0XCIpO1xuICAgICAgdmFyIGFmdGVySW1nID0gY29udGFpbmVyLmZpbmQoXCJpbWc6bGFzdFwiKTtcbiAgICAgIGNvbnRhaW5lci5hcHBlbmQoXCI8ZGl2IGNsYXNzPSd0d2VudHl0d2VudHktaGFuZGxlJz48L2Rpdj5cIik7XG4gICAgICB2YXIgc2xpZGVyID0gY29udGFpbmVyLmZpbmQoXCIudHdlbnR5dHdlbnR5LWhhbmRsZVwiKTtcbiAgICAgIHNsaWRlci5hcHBlbmQoXCI8c3BhbiBjbGFzcz0ndHdlbnR5dHdlbnR5LVwiICsgYmVmb3JlRGlyZWN0aW9uICsgXCItYXJyb3cnPjwvc3Bhbj5cIik7XG4gICAgICBzbGlkZXIuYXBwZW5kKFwiPHNwYW4gY2xhc3M9J3R3ZW50eXR3ZW50eS1cIiArIGFmdGVyRGlyZWN0aW9uICsgXCItYXJyb3cnPjwvc3Bhbj5cIik7XG4gICAgICBjb250YWluZXIuYWRkQ2xhc3MoXCJ0d2VudHl0d2VudHktY29udGFpbmVyXCIpO1xuICAgICAgYmVmb3JlSW1nLmFkZENsYXNzKFwidHdlbnR5dHdlbnR5LWJlZm9yZVwiKTtcbiAgICAgIGFmdGVySW1nLmFkZENsYXNzKFwidHdlbnR5dHdlbnR5LWFmdGVyXCIpO1xuXG4gICAgICB2YXIgY2FsY09mZnNldCA9IGZ1bmN0aW9uKGRpbWVuc2lvblBjdCkge1xuICAgICAgICB2YXIgdyA9IGJlZm9yZUltZy53aWR0aCgpO1xuICAgICAgICB2YXIgaCA9IGJlZm9yZUltZy5oZWlnaHQoKTtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICB3OiB3K1wicHhcIixcbiAgICAgICAgICBoOiBoK1wicHhcIixcbiAgICAgICAgICBjdzogKGRpbWVuc2lvblBjdCp3KStcInB4XCIsXG4gICAgICAgICAgY2g6IChkaW1lbnNpb25QY3QqaCkrXCJweFwiXG4gICAgICAgIH07XG4gICAgICB9O1xuXG4gICAgICB2YXIgYWRqdXN0Q29udGFpbmVyID0gZnVuY3Rpb24ob2Zmc2V0KSB7XG4gICAgICBcdGlmIChzbGlkZXJPcmllbnRhdGlvbiA9PT0gJ3ZlcnRpY2FsJykge1xuICAgICAgICAgIGJlZm9yZUltZy5jc3MoXCJjbGlwXCIsIFwicmVjdCgwLFwiK29mZnNldC53K1wiLFwiK29mZnNldC5jaCtcIiwwKVwiKTtcbiAgICAgICAgICBhZnRlckltZy5jc3MoXCJjbGlwXCIsIFwicmVjdChcIitvZmZzZXQuY2grXCIsXCIrb2Zmc2V0LncrXCIsXCIrb2Zmc2V0LmgrXCIsMClcIik7XG4gICAgICBcdH1cbiAgICAgIFx0ZWxzZSB7XG4gICAgICAgICAgYmVmb3JlSW1nLmNzcyhcImNsaXBcIiwgXCJyZWN0KDAsXCIrb2Zmc2V0LmN3K1wiLFwiK29mZnNldC5oK1wiLDApXCIpO1xuICAgICAgICAgIGFmdGVySW1nLmNzcyhcImNsaXBcIiwgXCJyZWN0KDAsXCIrb2Zmc2V0LncrXCIsXCIrb2Zmc2V0LmgrXCIsXCIrb2Zmc2V0LmN3K1wiKVwiKTtcbiAgICBcdH1cbiAgICAgICAgY29udGFpbmVyLmNzcyhcImhlaWdodFwiLCBvZmZzZXQuaCk7XG4gICAgICB9O1xuXG4gICAgICB2YXIgYWRqdXN0U2xpZGVyID0gZnVuY3Rpb24ocGN0KSB7XG4gICAgICAgIHZhciBvZmZzZXQgPSBjYWxjT2Zmc2V0KHBjdCk7XG4gICAgICAgIHNsaWRlci5jc3MoKHNsaWRlck9yaWVudGF0aW9uPT09XCJ2ZXJ0aWNhbFwiKSA/IFwidG9wXCIgOiBcImxlZnRcIiwgKHNsaWRlck9yaWVudGF0aW9uPT09XCJ2ZXJ0aWNhbFwiKSA/IG9mZnNldC5jaCA6IG9mZnNldC5jdyk7XG4gICAgICAgIGFkanVzdENvbnRhaW5lcihvZmZzZXQpO1xuICAgICAgfTtcblxuICAgICAgLy8gUmV0dXJuIHRoZSBudW1iZXIgc3BlY2lmaWVkIG9yIHRoZSBtaW4vbWF4IG51bWJlciBpZiBpdCBvdXRzaWRlIHRoZSByYW5nZSBnaXZlbi5cbiAgICAgIHZhciBtaW5NYXhOdW1iZXIgPSBmdW5jdGlvbihudW0sIG1pbiwgbWF4KSB7XG4gICAgICAgIHJldHVybiBNYXRoLm1heChtaW4sIE1hdGgubWluKG1heCwgbnVtKSk7XG4gICAgICB9O1xuXG4gICAgICAvLyBDYWxjdWxhdGUgdGhlIHNsaWRlciBwZXJjZW50YWdlIGJhc2VkIG9uIHRoZSBwb3NpdGlvbi5cbiAgICAgIHZhciBnZXRTbGlkZXJQZXJjZW50YWdlID0gZnVuY3Rpb24ocG9zaXRpb25YLCBwb3NpdGlvblkpIHtcbiAgICAgICAgdmFyIHNsaWRlclBlcmNlbnRhZ2UgPSAoc2xpZGVyT3JpZW50YXRpb24gPT09ICd2ZXJ0aWNhbCcpID9cbiAgICAgICAgICAocG9zaXRpb25ZLW9mZnNldFkpL2ltZ0hlaWdodCA6XG4gICAgICAgICAgKHBvc2l0aW9uWC1vZmZzZXRYKS9pbWdXaWR0aDtcblxuICAgICAgICByZXR1cm4gbWluTWF4TnVtYmVyKHNsaWRlclBlcmNlbnRhZ2UsIDAsIDEpO1xuICAgICAgfTtcblxuXG4gICAgICAkKHdpbmRvdykub24oXCJyZXNpemUudHdlbnR5dHdlbnR5XCIsIGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgYWRqdXN0U2xpZGVyKHNsaWRlclBjdCk7XG4gICAgICB9KTtcblxuICAgICAgdmFyIG9mZnNldFggPSAwO1xuICAgICAgdmFyIG9mZnNldFkgPSAwO1xuICAgICAgdmFyIGltZ1dpZHRoID0gMDtcbiAgICAgIHZhciBpbWdIZWlnaHQgPSAwO1xuICAgICAgdmFyIG9uTW92ZVN0YXJ0ID0gZnVuY3Rpb24oZSkge1xuICAgICAgICBpZiAoKChlLmRpc3RYID4gZS5kaXN0WSAmJiBlLmRpc3RYIDwgLWUuZGlzdFkpIHx8IChlLmRpc3RYIDwgZS5kaXN0WSAmJiBlLmRpc3RYID4gLWUuZGlzdFkpKSAmJiBzbGlkZXJPcmllbnRhdGlvbiAhPT0gJ3ZlcnRpY2FsJykge1xuICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmICgoKGUuZGlzdFggPCBlLmRpc3RZICYmIGUuZGlzdFggPCAtZS5kaXN0WSkgfHwgKGUuZGlzdFggPiBlLmRpc3RZICYmIGUuZGlzdFggPiAtZS5kaXN0WSkpICYmIHNsaWRlck9yaWVudGF0aW9uID09PSAndmVydGljYWwnKSB7XG4gICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICB9XG4gICAgICAgIGNvbnRhaW5lci5hZGRDbGFzcyhcImFjdGl2ZVwiKTtcbiAgICAgICAgb2Zmc2V0WCA9IGNvbnRhaW5lci5vZmZzZXQoKS5sZWZ0O1xuICAgICAgICBvZmZzZXRZID0gY29udGFpbmVyLm9mZnNldCgpLnRvcDtcbiAgICAgICAgaW1nV2lkdGggPSBiZWZvcmVJbWcud2lkdGgoKTtcbiAgICAgICAgaW1nSGVpZ2h0ID0gYmVmb3JlSW1nLmhlaWdodCgpO1xuICAgICAgfTtcbiAgICAgIHZhciBvbk1vdmUgPSBmdW5jdGlvbihlKSB7XG4gICAgICAgIGlmIChjb250YWluZXIuaGFzQ2xhc3MoXCJhY3RpdmVcIikpIHtcbiAgICAgICAgICBzbGlkZXJQY3QgPSBnZXRTbGlkZXJQZXJjZW50YWdlKGUucGFnZVgsIGUucGFnZVkpO1xuICAgICAgICAgIGFkanVzdFNsaWRlcihzbGlkZXJQY3QpO1xuICAgICAgICB9XG4gICAgICB9O1xuICAgICAgdmFyIG9uTW92ZUVuZCA9IGZ1bmN0aW9uKCkge1xuICAgICAgICAgIGNvbnRhaW5lci5yZW1vdmVDbGFzcyhcImFjdGl2ZVwiKTtcbiAgICAgIH07XG5cbiAgICAgIHZhciBtb3ZlVGFyZ2V0ID0gb3B0aW9ucy5tb3ZlX3dpdGhfaGFuZGxlX29ubHkgPyBzbGlkZXIgOiBjb250YWluZXI7XG4gICAgICBtb3ZlVGFyZ2V0Lm9uKFwibW92ZXN0YXJ0XCIsb25Nb3ZlU3RhcnQpO1xuICAgICAgbW92ZVRhcmdldC5vbihcIm1vdmVcIixvbk1vdmUpO1xuICAgICAgbW92ZVRhcmdldC5vbihcIm1vdmVlbmRcIixvbk1vdmVFbmQpO1xuXG4gICAgICBpZiAob3B0aW9ucy5tb3ZlX3NsaWRlcl9vbl9ob3Zlcikge1xuICAgICAgICBjb250YWluZXIub24oXCJtb3VzZWVudGVyXCIsIG9uTW92ZVN0YXJ0KTtcbiAgICAgICAgY29udGFpbmVyLm9uKFwibW91c2Vtb3ZlXCIsIG9uTW92ZSk7XG4gICAgICAgIGNvbnRhaW5lci5vbihcIm1vdXNlbGVhdmVcIiwgb25Nb3ZlRW5kKTtcbiAgICAgIH1cblxuICAgICAgc2xpZGVyLm9uKFwidG91Y2htb3ZlXCIsIGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgfSk7XG5cbiAgICAgIGNvbnRhaW5lci5maW5kKFwiaW1nXCIpLm9uKFwibW91c2Vkb3duXCIsIGZ1bmN0aW9uKGV2ZW50KSB7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICB9KTtcblxuICAgICAgaWYgKG9wdGlvbnMuY2xpY2tfdG9fbW92ZSkge1xuICAgICAgICBjb250YWluZXIub24oJ2NsaWNrJywgZnVuY3Rpb24oZSkge1xuICAgICAgICAgIG9mZnNldFggPSBjb250YWluZXIub2Zmc2V0KCkubGVmdDtcbiAgICAgICAgICBvZmZzZXRZID0gY29udGFpbmVyLm9mZnNldCgpLnRvcDtcbiAgICAgICAgICBpbWdXaWR0aCA9IGJlZm9yZUltZy53aWR0aCgpO1xuICAgICAgICAgIGltZ0hlaWdodCA9IGJlZm9yZUltZy5oZWlnaHQoKTtcblxuICAgICAgICAgIHNsaWRlclBjdCA9IGdldFNsaWRlclBlcmNlbnRhZ2UoZS5wYWdlWCwgZS5wYWdlWSk7XG4gICAgICAgICAgYWRqdXN0U2xpZGVyKHNsaWRlclBjdCk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuXG4gICAgICAkKHdpbmRvdykudHJpZ2dlcihcInJlc2l6ZS50d2VudHl0d2VudHlcIik7XG4gICAgfSk7XG4gIH07XG5cbn0pKGpRdWVyeSk7XG5cbi8qISBqUXVlcnkgVmFsaWRhdGlvbiBQbHVnaW4gLSB2MS4xOS4xIC0gNi8xNS8yMDE5XG4gKiBodHRwczovL2pxdWVyeXZhbGlkYXRpb24ub3JnL1xuICogQ29weXJpZ2h0IChjKSAyMDE5IErDtnJuIFphZWZmZXJlcjsgTGljZW5zZWQgTUlUICovXG4hZnVuY3Rpb24oYSl7XCJmdW5jdGlvblwiPT10eXBlb2YgZGVmaW5lJiZkZWZpbmUuYW1kP2RlZmluZShbXCJqcXVlcnlcIl0sYSk6XCJvYmplY3RcIj09dHlwZW9mIG1vZHVsZSYmbW9kdWxlLmV4cG9ydHM/bW9kdWxlLmV4cG9ydHM9YShyZXF1aXJlKFwianF1ZXJ5XCIpKTphKGpRdWVyeSl9KGZ1bmN0aW9uKGEpe2EuZXh0ZW5kKGEuZm4se3ZhbGlkYXRlOmZ1bmN0aW9uKGIpe2lmKCF0aGlzLmxlbmd0aClyZXR1cm4gdm9pZChiJiZiLmRlYnVnJiZ3aW5kb3cuY29uc29sZSYmY29uc29sZS53YXJuKFwiTm90aGluZyBzZWxlY3RlZCwgY2FuJ3QgdmFsaWRhdGUsIHJldHVybmluZyBub3RoaW5nLlwiKSk7dmFyIGM9YS5kYXRhKHRoaXNbMF0sXCJ2YWxpZGF0b3JcIik7cmV0dXJuIGM/YzoodGhpcy5hdHRyKFwibm92YWxpZGF0ZVwiLFwibm92YWxpZGF0ZVwiKSxjPW5ldyBhLnZhbGlkYXRvcihiLHRoaXNbMF0pLGEuZGF0YSh0aGlzWzBdLFwidmFsaWRhdG9yXCIsYyksYy5zZXR0aW5ncy5vbnN1Ym1pdCYmKHRoaXMub24oXCJjbGljay52YWxpZGF0ZVwiLFwiOnN1Ym1pdFwiLGZ1bmN0aW9uKGIpe2Muc3VibWl0QnV0dG9uPWIuY3VycmVudFRhcmdldCxhKHRoaXMpLmhhc0NsYXNzKFwiY2FuY2VsXCIpJiYoYy5jYW5jZWxTdWJtaXQ9ITApLHZvaWQgMCE9PWEodGhpcykuYXR0cihcImZvcm1ub3ZhbGlkYXRlXCIpJiYoYy5jYW5jZWxTdWJtaXQ9ITApfSksdGhpcy5vbihcInN1Ym1pdC52YWxpZGF0ZVwiLGZ1bmN0aW9uKGIpe2Z1bmN0aW9uIGQoKXt2YXIgZCxlO3JldHVybiBjLnN1Ym1pdEJ1dHRvbiYmKGMuc2V0dGluZ3Muc3VibWl0SGFuZGxlcnx8Yy5mb3JtU3VibWl0dGVkKSYmKGQ9YShcIjxpbnB1dCB0eXBlPSdoaWRkZW4nLz5cIikuYXR0cihcIm5hbWVcIixjLnN1Ym1pdEJ1dHRvbi5uYW1lKS52YWwoYShjLnN1Ym1pdEJ1dHRvbikudmFsKCkpLmFwcGVuZFRvKGMuY3VycmVudEZvcm0pKSwhKGMuc2V0dGluZ3Muc3VibWl0SGFuZGxlciYmIWMuc2V0dGluZ3MuZGVidWcpfHwoZT1jLnNldHRpbmdzLnN1Ym1pdEhhbmRsZXIuY2FsbChjLGMuY3VycmVudEZvcm0sYiksZCYmZC5yZW1vdmUoKSx2b2lkIDAhPT1lJiZlKX1yZXR1cm4gYy5zZXR0aW5ncy5kZWJ1ZyYmYi5wcmV2ZW50RGVmYXVsdCgpLGMuY2FuY2VsU3VibWl0PyhjLmNhbmNlbFN1Ym1pdD0hMSxkKCkpOmMuZm9ybSgpP2MucGVuZGluZ1JlcXVlc3Q/KGMuZm9ybVN1Ym1pdHRlZD0hMCwhMSk6ZCgpOihjLmZvY3VzSW52YWxpZCgpLCExKX0pKSxjKX0sdmFsaWQ6ZnVuY3Rpb24oKXt2YXIgYixjLGQ7cmV0dXJuIGEodGhpc1swXSkuaXMoXCJmb3JtXCIpP2I9dGhpcy52YWxpZGF0ZSgpLmZvcm0oKTooZD1bXSxiPSEwLGM9YSh0aGlzWzBdLmZvcm0pLnZhbGlkYXRlKCksdGhpcy5lYWNoKGZ1bmN0aW9uKCl7Yj1jLmVsZW1lbnQodGhpcykmJmIsYnx8KGQ9ZC5jb25jYXQoYy5lcnJvckxpc3QpKX0pLGMuZXJyb3JMaXN0PWQpLGJ9LHJ1bGVzOmZ1bmN0aW9uKGIsYyl7dmFyIGQsZSxmLGcsaCxpLGo9dGhpc1swXSxrPVwidW5kZWZpbmVkXCIhPXR5cGVvZiB0aGlzLmF0dHIoXCJjb250ZW50ZWRpdGFibGVcIikmJlwiZmFsc2VcIiE9PXRoaXMuYXR0cihcImNvbnRlbnRlZGl0YWJsZVwiKTtpZihudWxsIT1qJiYoIWouZm9ybSYmayYmKGouZm9ybT10aGlzLmNsb3Nlc3QoXCJmb3JtXCIpWzBdLGoubmFtZT10aGlzLmF0dHIoXCJuYW1lXCIpKSxudWxsIT1qLmZvcm0pKXtpZihiKXN3aXRjaChkPWEuZGF0YShqLmZvcm0sXCJ2YWxpZGF0b3JcIikuc2V0dGluZ3MsZT1kLnJ1bGVzLGY9YS52YWxpZGF0b3Iuc3RhdGljUnVsZXMoaiksYil7Y2FzZVwiYWRkXCI6YS5leHRlbmQoZixhLnZhbGlkYXRvci5ub3JtYWxpemVSdWxlKGMpKSxkZWxldGUgZi5tZXNzYWdlcyxlW2oubmFtZV09ZixjLm1lc3NhZ2VzJiYoZC5tZXNzYWdlc1tqLm5hbWVdPWEuZXh0ZW5kKGQubWVzc2FnZXNbai5uYW1lXSxjLm1lc3NhZ2VzKSk7YnJlYWs7Y2FzZVwicmVtb3ZlXCI6cmV0dXJuIGM/KGk9e30sYS5lYWNoKGMuc3BsaXQoL1xccy8pLGZ1bmN0aW9uKGEsYil7aVtiXT1mW2JdLGRlbGV0ZSBmW2JdfSksaSk6KGRlbGV0ZSBlW2oubmFtZV0sZil9cmV0dXJuIGc9YS52YWxpZGF0b3Iubm9ybWFsaXplUnVsZXMoYS5leHRlbmQoe30sYS52YWxpZGF0b3IuY2xhc3NSdWxlcyhqKSxhLnZhbGlkYXRvci5hdHRyaWJ1dGVSdWxlcyhqKSxhLnZhbGlkYXRvci5kYXRhUnVsZXMoaiksYS52YWxpZGF0b3Iuc3RhdGljUnVsZXMoaikpLGopLGcucmVxdWlyZWQmJihoPWcucmVxdWlyZWQsZGVsZXRlIGcucmVxdWlyZWQsZz1hLmV4dGVuZCh7cmVxdWlyZWQ6aH0sZykpLGcucmVtb3RlJiYoaD1nLnJlbW90ZSxkZWxldGUgZy5yZW1vdGUsZz1hLmV4dGVuZChnLHtyZW1vdGU6aH0pKSxnfX19KSxhLmV4dGVuZChhLmV4cHIucHNldWRvc3x8YS5leHByW1wiOlwiXSx7Ymxhbms6ZnVuY3Rpb24oYil7cmV0dXJuIWEudHJpbShcIlwiK2EoYikudmFsKCkpfSxmaWxsZWQ6ZnVuY3Rpb24oYil7dmFyIGM9YShiKS52YWwoKTtyZXR1cm4gbnVsbCE9PWMmJiEhYS50cmltKFwiXCIrYyl9LHVuY2hlY2tlZDpmdW5jdGlvbihiKXtyZXR1cm4hYShiKS5wcm9wKFwiY2hlY2tlZFwiKX19KSxhLnZhbGlkYXRvcj1mdW5jdGlvbihiLGMpe3RoaXMuc2V0dGluZ3M9YS5leHRlbmQoITAse30sYS52YWxpZGF0b3IuZGVmYXVsdHMsYiksdGhpcy5jdXJyZW50Rm9ybT1jLHRoaXMuaW5pdCgpfSxhLnZhbGlkYXRvci5mb3JtYXQ9ZnVuY3Rpb24oYixjKXtyZXR1cm4gMT09PWFyZ3VtZW50cy5sZW5ndGg/ZnVuY3Rpb24oKXt2YXIgYz1hLm1ha2VBcnJheShhcmd1bWVudHMpO3JldHVybiBjLnVuc2hpZnQoYiksYS52YWxpZGF0b3IuZm9ybWF0LmFwcGx5KHRoaXMsYyl9OnZvaWQgMD09PWM/YjooYXJndW1lbnRzLmxlbmd0aD4yJiZjLmNvbnN0cnVjdG9yIT09QXJyYXkmJihjPWEubWFrZUFycmF5KGFyZ3VtZW50cykuc2xpY2UoMSkpLGMuY29uc3RydWN0b3IhPT1BcnJheSYmKGM9W2NdKSxhLmVhY2goYyxmdW5jdGlvbihhLGMpe2I9Yi5yZXBsYWNlKG5ldyBSZWdFeHAoXCJcXFxce1wiK2ErXCJcXFxcfVwiLFwiZ1wiKSxmdW5jdGlvbigpe3JldHVybiBjfSl9KSxiKX0sYS5leHRlbmQoYS52YWxpZGF0b3Ise2RlZmF1bHRzOnttZXNzYWdlczp7fSxncm91cHM6e30scnVsZXM6e30sZXJyb3JDbGFzczpcImVycm9yXCIscGVuZGluZ0NsYXNzOlwicGVuZGluZ1wiLHZhbGlkQ2xhc3M6XCJ2YWxpZFwiLGVycm9yRWxlbWVudDpcImxhYmVsXCIsZm9jdXNDbGVhbnVwOiExLGZvY3VzSW52YWxpZDohMCxlcnJvckNvbnRhaW5lcjphKFtdKSxlcnJvckxhYmVsQ29udGFpbmVyOmEoW10pLG9uc3VibWl0OiEwLGlnbm9yZTpcIjpoaWRkZW5cIixpZ25vcmVUaXRsZTohMSxvbmZvY3VzaW46ZnVuY3Rpb24oYSl7dGhpcy5sYXN0QWN0aXZlPWEsdGhpcy5zZXR0aW5ncy5mb2N1c0NsZWFudXAmJih0aGlzLnNldHRpbmdzLnVuaGlnaGxpZ2h0JiZ0aGlzLnNldHRpbmdzLnVuaGlnaGxpZ2h0LmNhbGwodGhpcyxhLHRoaXMuc2V0dGluZ3MuZXJyb3JDbGFzcyx0aGlzLnNldHRpbmdzLnZhbGlkQ2xhc3MpLHRoaXMuaGlkZVRoZXNlKHRoaXMuZXJyb3JzRm9yKGEpKSl9LG9uZm9jdXNvdXQ6ZnVuY3Rpb24oYSl7dGhpcy5jaGVja2FibGUoYSl8fCEoYS5uYW1lIGluIHRoaXMuc3VibWl0dGVkKSYmdGhpcy5vcHRpb25hbChhKXx8dGhpcy5lbGVtZW50KGEpfSxvbmtleXVwOmZ1bmN0aW9uKGIsYyl7dmFyIGQ9WzE2LDE3LDE4LDIwLDM1LDM2LDM3LDM4LDM5LDQwLDQ1LDE0NCwyMjVdOzk9PT1jLndoaWNoJiZcIlwiPT09dGhpcy5lbGVtZW50VmFsdWUoYil8fGEuaW5BcnJheShjLmtleUNvZGUsZCkhPT0tMXx8KGIubmFtZSBpbiB0aGlzLnN1Ym1pdHRlZHx8Yi5uYW1lIGluIHRoaXMuaW52YWxpZCkmJnRoaXMuZWxlbWVudChiKX0sb25jbGljazpmdW5jdGlvbihhKXthLm5hbWUgaW4gdGhpcy5zdWJtaXR0ZWQ/dGhpcy5lbGVtZW50KGEpOmEucGFyZW50Tm9kZS5uYW1lIGluIHRoaXMuc3VibWl0dGVkJiZ0aGlzLmVsZW1lbnQoYS5wYXJlbnROb2RlKX0saGlnaGxpZ2h0OmZ1bmN0aW9uKGIsYyxkKXtcInJhZGlvXCI9PT1iLnR5cGU/dGhpcy5maW5kQnlOYW1lKGIubmFtZSkuYWRkQ2xhc3MoYykucmVtb3ZlQ2xhc3MoZCk6YShiKS5hZGRDbGFzcyhjKS5yZW1vdmVDbGFzcyhkKX0sdW5oaWdobGlnaHQ6ZnVuY3Rpb24oYixjLGQpe1wicmFkaW9cIj09PWIudHlwZT90aGlzLmZpbmRCeU5hbWUoYi5uYW1lKS5yZW1vdmVDbGFzcyhjKS5hZGRDbGFzcyhkKTphKGIpLnJlbW92ZUNsYXNzKGMpLmFkZENsYXNzKGQpfX0sc2V0RGVmYXVsdHM6ZnVuY3Rpb24oYil7YS5leHRlbmQoYS52YWxpZGF0b3IuZGVmYXVsdHMsYil9LG1lc3NhZ2VzOntyZXF1aXJlZDpcIlRoaXMgZmllbGQgaXMgcmVxdWlyZWQuXCIscmVtb3RlOlwiUGxlYXNlIGZpeCB0aGlzIGZpZWxkLlwiLGVtYWlsOlwiUGxlYXNlIGVudGVyIGEgdmFsaWQgZW1haWwgYWRkcmVzcy5cIix1cmw6XCJQbGVhc2UgZW50ZXIgYSB2YWxpZCBVUkwuXCIsZGF0ZTpcIlBsZWFzZSBlbnRlciBhIHZhbGlkIGRhdGUuXCIsZGF0ZUlTTzpcIlBsZWFzZSBlbnRlciBhIHZhbGlkIGRhdGUgKElTTykuXCIsbnVtYmVyOlwiUGxlYXNlIGVudGVyIGEgdmFsaWQgbnVtYmVyLlwiLGRpZ2l0czpcIlBsZWFzZSBlbnRlciBvbmx5IGRpZ2l0cy5cIixlcXVhbFRvOlwiUGxlYXNlIGVudGVyIHRoZSBzYW1lIHZhbHVlIGFnYWluLlwiLG1heGxlbmd0aDphLnZhbGlkYXRvci5mb3JtYXQoXCJQbGVhc2UgZW50ZXIgbm8gbW9yZSB0aGFuIHswfSBjaGFyYWN0ZXJzLlwiKSxtaW5sZW5ndGg6YS52YWxpZGF0b3IuZm9ybWF0KFwiUGxlYXNlIGVudGVyIGF0IGxlYXN0IHswfSBjaGFyYWN0ZXJzLlwiKSxyYW5nZWxlbmd0aDphLnZhbGlkYXRvci5mb3JtYXQoXCJQbGVhc2UgZW50ZXIgYSB2YWx1ZSBiZXR3ZWVuIHswfSBhbmQgezF9IGNoYXJhY3RlcnMgbG9uZy5cIikscmFuZ2U6YS52YWxpZGF0b3IuZm9ybWF0KFwiUGxlYXNlIGVudGVyIGEgdmFsdWUgYmV0d2VlbiB7MH0gYW5kIHsxfS5cIiksbWF4OmEudmFsaWRhdG9yLmZvcm1hdChcIlBsZWFzZSBlbnRlciBhIHZhbHVlIGxlc3MgdGhhbiBvciBlcXVhbCB0byB7MH0uXCIpLG1pbjphLnZhbGlkYXRvci5mb3JtYXQoXCJQbGVhc2UgZW50ZXIgYSB2YWx1ZSBncmVhdGVyIHRoYW4gb3IgZXF1YWwgdG8gezB9LlwiKSxzdGVwOmEudmFsaWRhdG9yLmZvcm1hdChcIlBsZWFzZSBlbnRlciBhIG11bHRpcGxlIG9mIHswfS5cIil9LGF1dG9DcmVhdGVSYW5nZXM6ITEscHJvdG90eXBlOntpbml0OmZ1bmN0aW9uKCl7ZnVuY3Rpb24gYihiKXt2YXIgYz1cInVuZGVmaW5lZFwiIT10eXBlb2YgYSh0aGlzKS5hdHRyKFwiY29udGVudGVkaXRhYmxlXCIpJiZcImZhbHNlXCIhPT1hKHRoaXMpLmF0dHIoXCJjb250ZW50ZWRpdGFibGVcIik7aWYoIXRoaXMuZm9ybSYmYyYmKHRoaXMuZm9ybT1hKHRoaXMpLmNsb3Nlc3QoXCJmb3JtXCIpWzBdLHRoaXMubmFtZT1hKHRoaXMpLmF0dHIoXCJuYW1lXCIpKSxkPT09dGhpcy5mb3JtKXt2YXIgZT1hLmRhdGEodGhpcy5mb3JtLFwidmFsaWRhdG9yXCIpLGY9XCJvblwiK2IudHlwZS5yZXBsYWNlKC9edmFsaWRhdGUvLFwiXCIpLGc9ZS5zZXR0aW5ncztnW2ZdJiYhYSh0aGlzKS5pcyhnLmlnbm9yZSkmJmdbZl0uY2FsbChlLHRoaXMsYil9fXRoaXMubGFiZWxDb250YWluZXI9YSh0aGlzLnNldHRpbmdzLmVycm9yTGFiZWxDb250YWluZXIpLHRoaXMuZXJyb3JDb250ZXh0PXRoaXMubGFiZWxDb250YWluZXIubGVuZ3RoJiZ0aGlzLmxhYmVsQ29udGFpbmVyfHxhKHRoaXMuY3VycmVudEZvcm0pLHRoaXMuY29udGFpbmVycz1hKHRoaXMuc2V0dGluZ3MuZXJyb3JDb250YWluZXIpLmFkZCh0aGlzLnNldHRpbmdzLmVycm9yTGFiZWxDb250YWluZXIpLHRoaXMuc3VibWl0dGVkPXt9LHRoaXMudmFsdWVDYWNoZT17fSx0aGlzLnBlbmRpbmdSZXF1ZXN0PTAsdGhpcy5wZW5kaW5nPXt9LHRoaXMuaW52YWxpZD17fSx0aGlzLnJlc2V0KCk7dmFyIGMsZD10aGlzLmN1cnJlbnRGb3JtLGU9dGhpcy5ncm91cHM9e307YS5lYWNoKHRoaXMuc2V0dGluZ3MuZ3JvdXBzLGZ1bmN0aW9uKGIsYyl7XCJzdHJpbmdcIj09dHlwZW9mIGMmJihjPWMuc3BsaXQoL1xccy8pKSxhLmVhY2goYyxmdW5jdGlvbihhLGMpe2VbY109Yn0pfSksYz10aGlzLnNldHRpbmdzLnJ1bGVzLGEuZWFjaChjLGZ1bmN0aW9uKGIsZCl7Y1tiXT1hLnZhbGlkYXRvci5ub3JtYWxpemVSdWxlKGQpfSksYSh0aGlzLmN1cnJlbnRGb3JtKS5vbihcImZvY3VzaW4udmFsaWRhdGUgZm9jdXNvdXQudmFsaWRhdGUga2V5dXAudmFsaWRhdGVcIixcIjp0ZXh0LCBbdHlwZT0ncGFzc3dvcmQnXSwgW3R5cGU9J2ZpbGUnXSwgc2VsZWN0LCB0ZXh0YXJlYSwgW3R5cGU9J251bWJlciddLCBbdHlwZT0nc2VhcmNoJ10sIFt0eXBlPSd0ZWwnXSwgW3R5cGU9J3VybCddLCBbdHlwZT0nZW1haWwnXSwgW3R5cGU9J2RhdGV0aW1lJ10sIFt0eXBlPSdkYXRlJ10sIFt0eXBlPSdtb250aCddLCBbdHlwZT0nd2VlayddLCBbdHlwZT0ndGltZSddLCBbdHlwZT0nZGF0ZXRpbWUtbG9jYWwnXSwgW3R5cGU9J3JhbmdlJ10sIFt0eXBlPSdjb2xvciddLCBbdHlwZT0ncmFkaW8nXSwgW3R5cGU9J2NoZWNrYm94J10sIFtjb250ZW50ZWRpdGFibGVdLCBbdHlwZT0nYnV0dG9uJ11cIixiKS5vbihcImNsaWNrLnZhbGlkYXRlXCIsXCJzZWxlY3QsIG9wdGlvbiwgW3R5cGU9J3JhZGlvJ10sIFt0eXBlPSdjaGVja2JveCddXCIsYiksdGhpcy5zZXR0aW5ncy5pbnZhbGlkSGFuZGxlciYmYSh0aGlzLmN1cnJlbnRGb3JtKS5vbihcImludmFsaWQtZm9ybS52YWxpZGF0ZVwiLHRoaXMuc2V0dGluZ3MuaW52YWxpZEhhbmRsZXIpfSxmb3JtOmZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuY2hlY2tGb3JtKCksYS5leHRlbmQodGhpcy5zdWJtaXR0ZWQsdGhpcy5lcnJvck1hcCksdGhpcy5pbnZhbGlkPWEuZXh0ZW5kKHt9LHRoaXMuZXJyb3JNYXApLHRoaXMudmFsaWQoKXx8YSh0aGlzLmN1cnJlbnRGb3JtKS50cmlnZ2VySGFuZGxlcihcImludmFsaWQtZm9ybVwiLFt0aGlzXSksdGhpcy5zaG93RXJyb3JzKCksdGhpcy52YWxpZCgpfSxjaGVja0Zvcm06ZnVuY3Rpb24oKXt0aGlzLnByZXBhcmVGb3JtKCk7Zm9yKHZhciBhPTAsYj10aGlzLmN1cnJlbnRFbGVtZW50cz10aGlzLmVsZW1lbnRzKCk7YlthXTthKyspdGhpcy5jaGVjayhiW2FdKTtyZXR1cm4gdGhpcy52YWxpZCgpfSxlbGVtZW50OmZ1bmN0aW9uKGIpe3ZhciBjLGQsZT10aGlzLmNsZWFuKGIpLGY9dGhpcy52YWxpZGF0aW9uVGFyZ2V0Rm9yKGUpLGc9dGhpcyxoPSEwO3JldHVybiB2b2lkIDA9PT1mP2RlbGV0ZSB0aGlzLmludmFsaWRbZS5uYW1lXToodGhpcy5wcmVwYXJlRWxlbWVudChmKSx0aGlzLmN1cnJlbnRFbGVtZW50cz1hKGYpLGQ9dGhpcy5ncm91cHNbZi5uYW1lXSxkJiZhLmVhY2godGhpcy5ncm91cHMsZnVuY3Rpb24oYSxiKXtiPT09ZCYmYSE9PWYubmFtZSYmKGU9Zy52YWxpZGF0aW9uVGFyZ2V0Rm9yKGcuY2xlYW4oZy5maW5kQnlOYW1lKGEpKSksZSYmZS5uYW1lIGluIGcuaW52YWxpZCYmKGcuY3VycmVudEVsZW1lbnRzLnB1c2goZSksaD1nLmNoZWNrKGUpJiZoKSl9KSxjPXRoaXMuY2hlY2soZikhPT0hMSxoPWgmJmMsYz90aGlzLmludmFsaWRbZi5uYW1lXT0hMTp0aGlzLmludmFsaWRbZi5uYW1lXT0hMCx0aGlzLm51bWJlck9mSW52YWxpZHMoKXx8KHRoaXMudG9IaWRlPXRoaXMudG9IaWRlLmFkZCh0aGlzLmNvbnRhaW5lcnMpKSx0aGlzLnNob3dFcnJvcnMoKSxhKGIpLmF0dHIoXCJhcmlhLWludmFsaWRcIiwhYykpLGh9LHNob3dFcnJvcnM6ZnVuY3Rpb24oYil7aWYoYil7dmFyIGM9dGhpczthLmV4dGVuZCh0aGlzLmVycm9yTWFwLGIpLHRoaXMuZXJyb3JMaXN0PWEubWFwKHRoaXMuZXJyb3JNYXAsZnVuY3Rpb24oYSxiKXtyZXR1cm57bWVzc2FnZTphLGVsZW1lbnQ6Yy5maW5kQnlOYW1lKGIpWzBdfX0pLHRoaXMuc3VjY2Vzc0xpc3Q9YS5ncmVwKHRoaXMuc3VjY2Vzc0xpc3QsZnVuY3Rpb24oYSl7cmV0dXJuIShhLm5hbWUgaW4gYil9KX10aGlzLnNldHRpbmdzLnNob3dFcnJvcnM/dGhpcy5zZXR0aW5ncy5zaG93RXJyb3JzLmNhbGwodGhpcyx0aGlzLmVycm9yTWFwLHRoaXMuZXJyb3JMaXN0KTp0aGlzLmRlZmF1bHRTaG93RXJyb3JzKCl9LHJlc2V0Rm9ybTpmdW5jdGlvbigpe2EuZm4ucmVzZXRGb3JtJiZhKHRoaXMuY3VycmVudEZvcm0pLnJlc2V0Rm9ybSgpLHRoaXMuaW52YWxpZD17fSx0aGlzLnN1Ym1pdHRlZD17fSx0aGlzLnByZXBhcmVGb3JtKCksdGhpcy5oaWRlRXJyb3JzKCk7dmFyIGI9dGhpcy5lbGVtZW50cygpLnJlbW92ZURhdGEoXCJwcmV2aW91c1ZhbHVlXCIpLnJlbW92ZUF0dHIoXCJhcmlhLWludmFsaWRcIik7dGhpcy5yZXNldEVsZW1lbnRzKGIpfSxyZXNldEVsZW1lbnRzOmZ1bmN0aW9uKGEpe3ZhciBiO2lmKHRoaXMuc2V0dGluZ3MudW5oaWdobGlnaHQpZm9yKGI9MDthW2JdO2IrKyl0aGlzLnNldHRpbmdzLnVuaGlnaGxpZ2h0LmNhbGwodGhpcyxhW2JdLHRoaXMuc2V0dGluZ3MuZXJyb3JDbGFzcyxcIlwiKSx0aGlzLmZpbmRCeU5hbWUoYVtiXS5uYW1lKS5yZW1vdmVDbGFzcyh0aGlzLnNldHRpbmdzLnZhbGlkQ2xhc3MpO2Vsc2UgYS5yZW1vdmVDbGFzcyh0aGlzLnNldHRpbmdzLmVycm9yQ2xhc3MpLnJlbW92ZUNsYXNzKHRoaXMuc2V0dGluZ3MudmFsaWRDbGFzcyl9LG51bWJlck9mSW52YWxpZHM6ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5vYmplY3RMZW5ndGgodGhpcy5pbnZhbGlkKX0sb2JqZWN0TGVuZ3RoOmZ1bmN0aW9uKGEpe3ZhciBiLGM9MDtmb3IoYiBpbiBhKXZvaWQgMCE9PWFbYl0mJm51bGwhPT1hW2JdJiZhW2JdIT09ITEmJmMrKztyZXR1cm4gY30saGlkZUVycm9yczpmdW5jdGlvbigpe3RoaXMuaGlkZVRoZXNlKHRoaXMudG9IaWRlKX0saGlkZVRoZXNlOmZ1bmN0aW9uKGEpe2Eubm90KHRoaXMuY29udGFpbmVycykudGV4dChcIlwiKSx0aGlzLmFkZFdyYXBwZXIoYSkuaGlkZSgpfSx2YWxpZDpmdW5jdGlvbigpe3JldHVybiAwPT09dGhpcy5zaXplKCl9LHNpemU6ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5lcnJvckxpc3QubGVuZ3RofSxmb2N1c0ludmFsaWQ6ZnVuY3Rpb24oKXtpZih0aGlzLnNldHRpbmdzLmZvY3VzSW52YWxpZCl0cnl7YSh0aGlzLmZpbmRMYXN0QWN0aXZlKCl8fHRoaXMuZXJyb3JMaXN0Lmxlbmd0aCYmdGhpcy5lcnJvckxpc3RbMF0uZWxlbWVudHx8W10pLmZpbHRlcihcIjp2aXNpYmxlXCIpLnRyaWdnZXIoXCJmb2N1c1wiKS50cmlnZ2VyKFwiZm9jdXNpblwiKX1jYXRjaChiKXt9fSxmaW5kTGFzdEFjdGl2ZTpmdW5jdGlvbigpe3ZhciBiPXRoaXMubGFzdEFjdGl2ZTtyZXR1cm4gYiYmMT09PWEuZ3JlcCh0aGlzLmVycm9yTGlzdCxmdW5jdGlvbihhKXtyZXR1cm4gYS5lbGVtZW50Lm5hbWU9PT1iLm5hbWV9KS5sZW5ndGgmJmJ9LGVsZW1lbnRzOmZ1bmN0aW9uKCl7dmFyIGI9dGhpcyxjPXt9O3JldHVybiBhKHRoaXMuY3VycmVudEZvcm0pLmZpbmQoXCJpbnB1dCwgc2VsZWN0LCB0ZXh0YXJlYSwgW2NvbnRlbnRlZGl0YWJsZV1cIikubm90KFwiOnN1Ym1pdCwgOnJlc2V0LCA6aW1hZ2UsIDpkaXNhYmxlZFwiKS5ub3QodGhpcy5zZXR0aW5ncy5pZ25vcmUpLmZpbHRlcihmdW5jdGlvbigpe3ZhciBkPXRoaXMubmFtZXx8YSh0aGlzKS5hdHRyKFwibmFtZVwiKSxlPVwidW5kZWZpbmVkXCIhPXR5cGVvZiBhKHRoaXMpLmF0dHIoXCJjb250ZW50ZWRpdGFibGVcIikmJlwiZmFsc2VcIiE9PWEodGhpcykuYXR0cihcImNvbnRlbnRlZGl0YWJsZVwiKTtyZXR1cm4hZCYmYi5zZXR0aW5ncy5kZWJ1ZyYmd2luZG93LmNvbnNvbGUmJmNvbnNvbGUuZXJyb3IoXCIlbyBoYXMgbm8gbmFtZSBhc3NpZ25lZFwiLHRoaXMpLGUmJih0aGlzLmZvcm09YSh0aGlzKS5jbG9zZXN0KFwiZm9ybVwiKVswXSx0aGlzLm5hbWU9ZCksdGhpcy5mb3JtPT09Yi5jdXJyZW50Rm9ybSYmKCEoZCBpbiBjfHwhYi5vYmplY3RMZW5ndGgoYSh0aGlzKS5ydWxlcygpKSkmJihjW2RdPSEwLCEwKSl9KX0sY2xlYW46ZnVuY3Rpb24oYil7cmV0dXJuIGEoYilbMF19LGVycm9yczpmdW5jdGlvbigpe3ZhciBiPXRoaXMuc2V0dGluZ3MuZXJyb3JDbGFzcy5zcGxpdChcIiBcIikuam9pbihcIi5cIik7cmV0dXJuIGEodGhpcy5zZXR0aW5ncy5lcnJvckVsZW1lbnQrXCIuXCIrYix0aGlzLmVycm9yQ29udGV4dCl9LHJlc2V0SW50ZXJuYWxzOmZ1bmN0aW9uKCl7dGhpcy5zdWNjZXNzTGlzdD1bXSx0aGlzLmVycm9yTGlzdD1bXSx0aGlzLmVycm9yTWFwPXt9LHRoaXMudG9TaG93PWEoW10pLHRoaXMudG9IaWRlPWEoW10pfSxyZXNldDpmdW5jdGlvbigpe3RoaXMucmVzZXRJbnRlcm5hbHMoKSx0aGlzLmN1cnJlbnRFbGVtZW50cz1hKFtdKX0scHJlcGFyZUZvcm06ZnVuY3Rpb24oKXt0aGlzLnJlc2V0KCksdGhpcy50b0hpZGU9dGhpcy5lcnJvcnMoKS5hZGQodGhpcy5jb250YWluZXJzKX0scHJlcGFyZUVsZW1lbnQ6ZnVuY3Rpb24oYSl7dGhpcy5yZXNldCgpLHRoaXMudG9IaWRlPXRoaXMuZXJyb3JzRm9yKGEpfSxlbGVtZW50VmFsdWU6ZnVuY3Rpb24oYil7dmFyIGMsZCxlPWEoYiksZj1iLnR5cGUsZz1cInVuZGVmaW5lZFwiIT10eXBlb2YgZS5hdHRyKFwiY29udGVudGVkaXRhYmxlXCIpJiZcImZhbHNlXCIhPT1lLmF0dHIoXCJjb250ZW50ZWRpdGFibGVcIik7cmV0dXJuXCJyYWRpb1wiPT09Znx8XCJjaGVja2JveFwiPT09Zj90aGlzLmZpbmRCeU5hbWUoYi5uYW1lKS5maWx0ZXIoXCI6Y2hlY2tlZFwiKS52YWwoKTpcIm51bWJlclwiPT09ZiYmXCJ1bmRlZmluZWRcIiE9dHlwZW9mIGIudmFsaWRpdHk/Yi52YWxpZGl0eS5iYWRJbnB1dD9cIk5hTlwiOmUudmFsKCk6KGM9Zz9lLnRleHQoKTplLnZhbCgpLFwiZmlsZVwiPT09Zj9cIkM6XFxcXGZha2VwYXRoXFxcXFwiPT09Yy5zdWJzdHIoMCwxMik/Yy5zdWJzdHIoMTIpOihkPWMubGFzdEluZGV4T2YoXCIvXCIpLGQ+PTA/Yy5zdWJzdHIoZCsxKTooZD1jLmxhc3RJbmRleE9mKFwiXFxcXFwiKSxkPj0wP2Muc3Vic3RyKGQrMSk6YykpOlwic3RyaW5nXCI9PXR5cGVvZiBjP2MucmVwbGFjZSgvXFxyL2csXCJcIik6Yyl9LGNoZWNrOmZ1bmN0aW9uKGIpe2I9dGhpcy52YWxpZGF0aW9uVGFyZ2V0Rm9yKHRoaXMuY2xlYW4oYikpO3ZhciBjLGQsZSxmLGc9YShiKS5ydWxlcygpLGg9YS5tYXAoZyxmdW5jdGlvbihhLGIpe3JldHVybiBifSkubGVuZ3RoLGk9ITEsaj10aGlzLmVsZW1lbnRWYWx1ZShiKTtcImZ1bmN0aW9uXCI9PXR5cGVvZiBnLm5vcm1hbGl6ZXI/Zj1nLm5vcm1hbGl6ZXI6XCJmdW5jdGlvblwiPT10eXBlb2YgdGhpcy5zZXR0aW5ncy5ub3JtYWxpemVyJiYoZj10aGlzLnNldHRpbmdzLm5vcm1hbGl6ZXIpLGYmJihqPWYuY2FsbChiLGopLGRlbGV0ZSBnLm5vcm1hbGl6ZXIpO2ZvcihkIGluIGcpe2U9e21ldGhvZDpkLHBhcmFtZXRlcnM6Z1tkXX07dHJ5e2lmKGM9YS52YWxpZGF0b3IubWV0aG9kc1tkXS5jYWxsKHRoaXMsaixiLGUucGFyYW1ldGVycyksXCJkZXBlbmRlbmN5LW1pc21hdGNoXCI9PT1jJiYxPT09aCl7aT0hMDtjb250aW51ZX1pZihpPSExLFwicGVuZGluZ1wiPT09YylyZXR1cm4gdm9pZCh0aGlzLnRvSGlkZT10aGlzLnRvSGlkZS5ub3QodGhpcy5lcnJvcnNGb3IoYikpKTtpZighYylyZXR1cm4gdGhpcy5mb3JtYXRBbmRBZGQoYixlKSwhMX1jYXRjaChrKXt0aHJvdyB0aGlzLnNldHRpbmdzLmRlYnVnJiZ3aW5kb3cuY29uc29sZSYmY29uc29sZS5sb2coXCJFeGNlcHRpb24gb2NjdXJyZWQgd2hlbiBjaGVja2luZyBlbGVtZW50IFwiK2IuaWQrXCIsIGNoZWNrIHRoZSAnXCIrZS5tZXRob2QrXCInIG1ldGhvZC5cIixrKSxrIGluc3RhbmNlb2YgVHlwZUVycm9yJiYoay5tZXNzYWdlKz1cIi4gIEV4Y2VwdGlvbiBvY2N1cnJlZCB3aGVuIGNoZWNraW5nIGVsZW1lbnQgXCIrYi5pZCtcIiwgY2hlY2sgdGhlICdcIitlLm1ldGhvZCtcIicgbWV0aG9kLlwiKSxrfX1pZighaSlyZXR1cm4gdGhpcy5vYmplY3RMZW5ndGgoZykmJnRoaXMuc3VjY2Vzc0xpc3QucHVzaChiKSwhMH0sY3VzdG9tRGF0YU1lc3NhZ2U6ZnVuY3Rpb24oYixjKXtyZXR1cm4gYShiKS5kYXRhKFwibXNnXCIrYy5jaGFyQXQoMCkudG9VcHBlckNhc2UoKStjLnN1YnN0cmluZygxKS50b0xvd2VyQ2FzZSgpKXx8YShiKS5kYXRhKFwibXNnXCIpfSxjdXN0b21NZXNzYWdlOmZ1bmN0aW9uKGEsYil7dmFyIGM9dGhpcy5zZXR0aW5ncy5tZXNzYWdlc1thXTtyZXR1cm4gYyYmKGMuY29uc3RydWN0b3I9PT1TdHJpbmc/YzpjW2JdKX0sZmluZERlZmluZWQ6ZnVuY3Rpb24oKXtmb3IodmFyIGE9MDthPGFyZ3VtZW50cy5sZW5ndGg7YSsrKWlmKHZvaWQgMCE9PWFyZ3VtZW50c1thXSlyZXR1cm4gYXJndW1lbnRzW2FdfSxkZWZhdWx0TWVzc2FnZTpmdW5jdGlvbihiLGMpe1wic3RyaW5nXCI9PXR5cGVvZiBjJiYoYz17bWV0aG9kOmN9KTt2YXIgZD10aGlzLmZpbmREZWZpbmVkKHRoaXMuY3VzdG9tTWVzc2FnZShiLm5hbWUsYy5tZXRob2QpLHRoaXMuY3VzdG9tRGF0YU1lc3NhZ2UoYixjLm1ldGhvZCksIXRoaXMuc2V0dGluZ3MuaWdub3JlVGl0bGUmJmIudGl0bGV8fHZvaWQgMCxhLnZhbGlkYXRvci5tZXNzYWdlc1tjLm1ldGhvZF0sXCI8c3Ryb25nPldhcm5pbmc6IE5vIG1lc3NhZ2UgZGVmaW5lZCBmb3IgXCIrYi5uYW1lK1wiPC9zdHJvbmc+XCIpLGU9L1xcJD9cXHsoXFxkKylcXH0vZztyZXR1cm5cImZ1bmN0aW9uXCI9PXR5cGVvZiBkP2Q9ZC5jYWxsKHRoaXMsYy5wYXJhbWV0ZXJzLGIpOmUudGVzdChkKSYmKGQ9YS52YWxpZGF0b3IuZm9ybWF0KGQucmVwbGFjZShlLFwieyQxfVwiKSxjLnBhcmFtZXRlcnMpKSxkfSxmb3JtYXRBbmRBZGQ6ZnVuY3Rpb24oYSxiKXt2YXIgYz10aGlzLmRlZmF1bHRNZXNzYWdlKGEsYik7dGhpcy5lcnJvckxpc3QucHVzaCh7bWVzc2FnZTpjLGVsZW1lbnQ6YSxtZXRob2Q6Yi5tZXRob2R9KSx0aGlzLmVycm9yTWFwW2EubmFtZV09Yyx0aGlzLnN1Ym1pdHRlZFthLm5hbWVdPWN9LGFkZFdyYXBwZXI6ZnVuY3Rpb24oYSl7cmV0dXJuIHRoaXMuc2V0dGluZ3Mud3JhcHBlciYmKGE9YS5hZGQoYS5wYXJlbnQodGhpcy5zZXR0aW5ncy53cmFwcGVyKSkpLGF9LGRlZmF1bHRTaG93RXJyb3JzOmZ1bmN0aW9uKCl7dmFyIGEsYixjO2ZvcihhPTA7dGhpcy5lcnJvckxpc3RbYV07YSsrKWM9dGhpcy5lcnJvckxpc3RbYV0sdGhpcy5zZXR0aW5ncy5oaWdobGlnaHQmJnRoaXMuc2V0dGluZ3MuaGlnaGxpZ2h0LmNhbGwodGhpcyxjLmVsZW1lbnQsdGhpcy5zZXR0aW5ncy5lcnJvckNsYXNzLHRoaXMuc2V0dGluZ3MudmFsaWRDbGFzcyksdGhpcy5zaG93TGFiZWwoYy5lbGVtZW50LGMubWVzc2FnZSk7aWYodGhpcy5lcnJvckxpc3QubGVuZ3RoJiYodGhpcy50b1Nob3c9dGhpcy50b1Nob3cuYWRkKHRoaXMuY29udGFpbmVycykpLHRoaXMuc2V0dGluZ3Muc3VjY2Vzcylmb3IoYT0wO3RoaXMuc3VjY2Vzc0xpc3RbYV07YSsrKXRoaXMuc2hvd0xhYmVsKHRoaXMuc3VjY2Vzc0xpc3RbYV0pO2lmKHRoaXMuc2V0dGluZ3MudW5oaWdobGlnaHQpZm9yKGE9MCxiPXRoaXMudmFsaWRFbGVtZW50cygpO2JbYV07YSsrKXRoaXMuc2V0dGluZ3MudW5oaWdobGlnaHQuY2FsbCh0aGlzLGJbYV0sdGhpcy5zZXR0aW5ncy5lcnJvckNsYXNzLHRoaXMuc2V0dGluZ3MudmFsaWRDbGFzcyk7dGhpcy50b0hpZGU9dGhpcy50b0hpZGUubm90KHRoaXMudG9TaG93KSx0aGlzLmhpZGVFcnJvcnMoKSx0aGlzLmFkZFdyYXBwZXIodGhpcy50b1Nob3cpLnNob3coKX0sdmFsaWRFbGVtZW50czpmdW5jdGlvbigpe3JldHVybiB0aGlzLmN1cnJlbnRFbGVtZW50cy5ub3QodGhpcy5pbnZhbGlkRWxlbWVudHMoKSl9LGludmFsaWRFbGVtZW50czpmdW5jdGlvbigpe3JldHVybiBhKHRoaXMuZXJyb3JMaXN0KS5tYXAoZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5lbGVtZW50fSl9LHNob3dMYWJlbDpmdW5jdGlvbihiLGMpe3ZhciBkLGUsZixnLGg9dGhpcy5lcnJvcnNGb3IoYiksaT10aGlzLmlkT3JOYW1lKGIpLGo9YShiKS5hdHRyKFwiYXJpYS1kZXNjcmliZWRieVwiKTtoLmxlbmd0aD8oaC5yZW1vdmVDbGFzcyh0aGlzLnNldHRpbmdzLnZhbGlkQ2xhc3MpLmFkZENsYXNzKHRoaXMuc2V0dGluZ3MuZXJyb3JDbGFzcyksaC5odG1sKGMpKTooaD1hKFwiPFwiK3RoaXMuc2V0dGluZ3MuZXJyb3JFbGVtZW50K1wiPlwiKS5hdHRyKFwiaWRcIixpK1wiLWVycm9yXCIpLmFkZENsYXNzKHRoaXMuc2V0dGluZ3MuZXJyb3JDbGFzcykuaHRtbChjfHxcIlwiKSxkPWgsdGhpcy5zZXR0aW5ncy53cmFwcGVyJiYoZD1oLmhpZGUoKS5zaG93KCkud3JhcChcIjxcIit0aGlzLnNldHRpbmdzLndyYXBwZXIrXCIvPlwiKS5wYXJlbnQoKSksdGhpcy5sYWJlbENvbnRhaW5lci5sZW5ndGg/dGhpcy5sYWJlbENvbnRhaW5lci5hcHBlbmQoZCk6dGhpcy5zZXR0aW5ncy5lcnJvclBsYWNlbWVudD90aGlzLnNldHRpbmdzLmVycm9yUGxhY2VtZW50LmNhbGwodGhpcyxkLGEoYikpOmQuaW5zZXJ0QWZ0ZXIoYiksaC5pcyhcImxhYmVsXCIpP2guYXR0cihcImZvclwiLGkpOjA9PT1oLnBhcmVudHMoXCJsYWJlbFtmb3I9J1wiK3RoaXMuZXNjYXBlQ3NzTWV0YShpKStcIiddXCIpLmxlbmd0aCYmKGY9aC5hdHRyKFwiaWRcIiksaj9qLm1hdGNoKG5ldyBSZWdFeHAoXCJcXFxcYlwiK3RoaXMuZXNjYXBlQ3NzTWV0YShmKStcIlxcXFxiXCIpKXx8KGorPVwiIFwiK2YpOmo9ZixhKGIpLmF0dHIoXCJhcmlhLWRlc2NyaWJlZGJ5XCIsaiksZT10aGlzLmdyb3Vwc1tiLm5hbWVdLGUmJihnPXRoaXMsYS5lYWNoKGcuZ3JvdXBzLGZ1bmN0aW9uKGIsYyl7Yz09PWUmJmEoXCJbbmFtZT0nXCIrZy5lc2NhcGVDc3NNZXRhKGIpK1wiJ11cIixnLmN1cnJlbnRGb3JtKS5hdHRyKFwiYXJpYS1kZXNjcmliZWRieVwiLGguYXR0cihcImlkXCIpKX0pKSkpLCFjJiZ0aGlzLnNldHRpbmdzLnN1Y2Nlc3MmJihoLnRleHQoXCJcIiksXCJzdHJpbmdcIj09dHlwZW9mIHRoaXMuc2V0dGluZ3Muc3VjY2Vzcz9oLmFkZENsYXNzKHRoaXMuc2V0dGluZ3Muc3VjY2Vzcyk6dGhpcy5zZXR0aW5ncy5zdWNjZXNzKGgsYikpLHRoaXMudG9TaG93PXRoaXMudG9TaG93LmFkZChoKX0sZXJyb3JzRm9yOmZ1bmN0aW9uKGIpe3ZhciBjPXRoaXMuZXNjYXBlQ3NzTWV0YSh0aGlzLmlkT3JOYW1lKGIpKSxkPWEoYikuYXR0cihcImFyaWEtZGVzY3JpYmVkYnlcIiksZT1cImxhYmVsW2Zvcj0nXCIrYytcIiddLCBsYWJlbFtmb3I9J1wiK2MrXCInXSAqXCI7cmV0dXJuIGQmJihlPWUrXCIsICNcIit0aGlzLmVzY2FwZUNzc01ldGEoZCkucmVwbGFjZSgvXFxzKy9nLFwiLCAjXCIpKSx0aGlzLmVycm9ycygpLmZpbHRlcihlKX0sZXNjYXBlQ3NzTWV0YTpmdW5jdGlvbihhKXtyZXR1cm4gYS5yZXBsYWNlKC8oW1xcXFwhXCIjJCUmJygpKissLlxcLzo7PD0+P0BcXFtcXF1eYHt8fX5dKS9nLFwiXFxcXCQxXCIpfSxpZE9yTmFtZTpmdW5jdGlvbihhKXtyZXR1cm4gdGhpcy5ncm91cHNbYS5uYW1lXXx8KHRoaXMuY2hlY2thYmxlKGEpP2EubmFtZTphLmlkfHxhLm5hbWUpfSx2YWxpZGF0aW9uVGFyZ2V0Rm9yOmZ1bmN0aW9uKGIpe3JldHVybiB0aGlzLmNoZWNrYWJsZShiKSYmKGI9dGhpcy5maW5kQnlOYW1lKGIubmFtZSkpLGEoYikubm90KHRoaXMuc2V0dGluZ3MuaWdub3JlKVswXX0sY2hlY2thYmxlOmZ1bmN0aW9uKGEpe3JldHVybi9yYWRpb3xjaGVja2JveC9pLnRlc3QoYS50eXBlKX0sZmluZEJ5TmFtZTpmdW5jdGlvbihiKXtyZXR1cm4gYSh0aGlzLmN1cnJlbnRGb3JtKS5maW5kKFwiW25hbWU9J1wiK3RoaXMuZXNjYXBlQ3NzTWV0YShiKStcIiddXCIpfSxnZXRMZW5ndGg6ZnVuY3Rpb24oYixjKXtzd2l0Y2goYy5ub2RlTmFtZS50b0xvd2VyQ2FzZSgpKXtjYXNlXCJzZWxlY3RcIjpyZXR1cm4gYShcIm9wdGlvbjpzZWxlY3RlZFwiLGMpLmxlbmd0aDtjYXNlXCJpbnB1dFwiOmlmKHRoaXMuY2hlY2thYmxlKGMpKXJldHVybiB0aGlzLmZpbmRCeU5hbWUoYy5uYW1lKS5maWx0ZXIoXCI6Y2hlY2tlZFwiKS5sZW5ndGh9cmV0dXJuIGIubGVuZ3RofSxkZXBlbmQ6ZnVuY3Rpb24oYSxiKXtyZXR1cm4hdGhpcy5kZXBlbmRUeXBlc1t0eXBlb2YgYV18fHRoaXMuZGVwZW5kVHlwZXNbdHlwZW9mIGFdKGEsYil9LGRlcGVuZFR5cGVzOntcImJvb2xlYW5cIjpmdW5jdGlvbihhKXtyZXR1cm4gYX0sc3RyaW5nOmZ1bmN0aW9uKGIsYyl7cmV0dXJuISFhKGIsYy5mb3JtKS5sZW5ndGh9LFwiZnVuY3Rpb25cIjpmdW5jdGlvbihhLGIpe3JldHVybiBhKGIpfX0sb3B0aW9uYWw6ZnVuY3Rpb24oYil7dmFyIGM9dGhpcy5lbGVtZW50VmFsdWUoYik7cmV0dXJuIWEudmFsaWRhdG9yLm1ldGhvZHMucmVxdWlyZWQuY2FsbCh0aGlzLGMsYikmJlwiZGVwZW5kZW5jeS1taXNtYXRjaFwifSxzdGFydFJlcXVlc3Q6ZnVuY3Rpb24oYil7dGhpcy5wZW5kaW5nW2IubmFtZV18fCh0aGlzLnBlbmRpbmdSZXF1ZXN0KyssYShiKS5hZGRDbGFzcyh0aGlzLnNldHRpbmdzLnBlbmRpbmdDbGFzcyksdGhpcy5wZW5kaW5nW2IubmFtZV09ITApfSxzdG9wUmVxdWVzdDpmdW5jdGlvbihiLGMpe3RoaXMucGVuZGluZ1JlcXVlc3QtLSx0aGlzLnBlbmRpbmdSZXF1ZXN0PDAmJih0aGlzLnBlbmRpbmdSZXF1ZXN0PTApLGRlbGV0ZSB0aGlzLnBlbmRpbmdbYi5uYW1lXSxhKGIpLnJlbW92ZUNsYXNzKHRoaXMuc2V0dGluZ3MucGVuZGluZ0NsYXNzKSxjJiYwPT09dGhpcy5wZW5kaW5nUmVxdWVzdCYmdGhpcy5mb3JtU3VibWl0dGVkJiZ0aGlzLmZvcm0oKT8oYSh0aGlzLmN1cnJlbnRGb3JtKS5zdWJtaXQoKSx0aGlzLnN1Ym1pdEJ1dHRvbiYmYShcImlucHV0OmhpZGRlbltuYW1lPSdcIit0aGlzLnN1Ym1pdEJ1dHRvbi5uYW1lK1wiJ11cIix0aGlzLmN1cnJlbnRGb3JtKS5yZW1vdmUoKSx0aGlzLmZvcm1TdWJtaXR0ZWQ9ITEpOiFjJiYwPT09dGhpcy5wZW5kaW5nUmVxdWVzdCYmdGhpcy5mb3JtU3VibWl0dGVkJiYoYSh0aGlzLmN1cnJlbnRGb3JtKS50cmlnZ2VySGFuZGxlcihcImludmFsaWQtZm9ybVwiLFt0aGlzXSksdGhpcy5mb3JtU3VibWl0dGVkPSExKX0scHJldmlvdXNWYWx1ZTpmdW5jdGlvbihiLGMpe3JldHVybiBjPVwic3RyaW5nXCI9PXR5cGVvZiBjJiZjfHxcInJlbW90ZVwiLGEuZGF0YShiLFwicHJldmlvdXNWYWx1ZVwiKXx8YS5kYXRhKGIsXCJwcmV2aW91c1ZhbHVlXCIse29sZDpudWxsLHZhbGlkOiEwLG1lc3NhZ2U6dGhpcy5kZWZhdWx0TWVzc2FnZShiLHttZXRob2Q6Y30pfSl9LGRlc3Ryb3k6ZnVuY3Rpb24oKXt0aGlzLnJlc2V0Rm9ybSgpLGEodGhpcy5jdXJyZW50Rm9ybSkub2ZmKFwiLnZhbGlkYXRlXCIpLnJlbW92ZURhdGEoXCJ2YWxpZGF0b3JcIikuZmluZChcIi52YWxpZGF0ZS1lcXVhbFRvLWJsdXJcIikub2ZmKFwiLnZhbGlkYXRlLWVxdWFsVG9cIikucmVtb3ZlQ2xhc3MoXCJ2YWxpZGF0ZS1lcXVhbFRvLWJsdXJcIikuZmluZChcIi52YWxpZGF0ZS1sZXNzVGhhbi1ibHVyXCIpLm9mZihcIi52YWxpZGF0ZS1sZXNzVGhhblwiKS5yZW1vdmVDbGFzcyhcInZhbGlkYXRlLWxlc3NUaGFuLWJsdXJcIikuZmluZChcIi52YWxpZGF0ZS1sZXNzVGhhbkVxdWFsLWJsdXJcIikub2ZmKFwiLnZhbGlkYXRlLWxlc3NUaGFuRXF1YWxcIikucmVtb3ZlQ2xhc3MoXCJ2YWxpZGF0ZS1sZXNzVGhhbkVxdWFsLWJsdXJcIikuZmluZChcIi52YWxpZGF0ZS1ncmVhdGVyVGhhbkVxdWFsLWJsdXJcIikub2ZmKFwiLnZhbGlkYXRlLWdyZWF0ZXJUaGFuRXF1YWxcIikucmVtb3ZlQ2xhc3MoXCJ2YWxpZGF0ZS1ncmVhdGVyVGhhbkVxdWFsLWJsdXJcIikuZmluZChcIi52YWxpZGF0ZS1ncmVhdGVyVGhhbi1ibHVyXCIpLm9mZihcIi52YWxpZGF0ZS1ncmVhdGVyVGhhblwiKS5yZW1vdmVDbGFzcyhcInZhbGlkYXRlLWdyZWF0ZXJUaGFuLWJsdXJcIil9fSxjbGFzc1J1bGVTZXR0aW5nczp7cmVxdWlyZWQ6e3JlcXVpcmVkOiEwfSxlbWFpbDp7ZW1haWw6ITB9LHVybDp7dXJsOiEwfSxkYXRlOntkYXRlOiEwfSxkYXRlSVNPOntkYXRlSVNPOiEwfSxudW1iZXI6e251bWJlcjohMH0sZGlnaXRzOntkaWdpdHM6ITB9LGNyZWRpdGNhcmQ6e2NyZWRpdGNhcmQ6ITB9fSxhZGRDbGFzc1J1bGVzOmZ1bmN0aW9uKGIsYyl7Yi5jb25zdHJ1Y3Rvcj09PVN0cmluZz90aGlzLmNsYXNzUnVsZVNldHRpbmdzW2JdPWM6YS5leHRlbmQodGhpcy5jbGFzc1J1bGVTZXR0aW5ncyxiKX0sY2xhc3NSdWxlczpmdW5jdGlvbihiKXt2YXIgYz17fSxkPWEoYikuYXR0cihcImNsYXNzXCIpO3JldHVybiBkJiZhLmVhY2goZC5zcGxpdChcIiBcIiksZnVuY3Rpb24oKXt0aGlzIGluIGEudmFsaWRhdG9yLmNsYXNzUnVsZVNldHRpbmdzJiZhLmV4dGVuZChjLGEudmFsaWRhdG9yLmNsYXNzUnVsZVNldHRpbmdzW3RoaXNdKX0pLGN9LG5vcm1hbGl6ZUF0dHJpYnV0ZVJ1bGU6ZnVuY3Rpb24oYSxiLGMsZCl7L21pbnxtYXh8c3RlcC8udGVzdChjKSYmKG51bGw9PT1ifHwvbnVtYmVyfHJhbmdlfHRleHQvLnRlc3QoYikpJiYoZD1OdW1iZXIoZCksaXNOYU4oZCkmJihkPXZvaWQgMCkpLGR8fDA9PT1kP2FbY109ZDpiPT09YyYmXCJyYW5nZVwiIT09YiYmKGFbY109ITApfSxhdHRyaWJ1dGVSdWxlczpmdW5jdGlvbihiKXt2YXIgYyxkLGU9e30sZj1hKGIpLGc9Yi5nZXRBdHRyaWJ1dGUoXCJ0eXBlXCIpO2ZvcihjIGluIGEudmFsaWRhdG9yLm1ldGhvZHMpXCJyZXF1aXJlZFwiPT09Yz8oZD1iLmdldEF0dHJpYnV0ZShjKSxcIlwiPT09ZCYmKGQ9ITApLGQ9ISFkKTpkPWYuYXR0cihjKSx0aGlzLm5vcm1hbGl6ZUF0dHJpYnV0ZVJ1bGUoZSxnLGMsZCk7cmV0dXJuIGUubWF4bGVuZ3RoJiYvLTF8MjE0NzQ4MzY0N3w1MjQyODgvLnRlc3QoZS5tYXhsZW5ndGgpJiZkZWxldGUgZS5tYXhsZW5ndGgsZX0sZGF0YVJ1bGVzOmZ1bmN0aW9uKGIpe3ZhciBjLGQsZT17fSxmPWEoYiksZz1iLmdldEF0dHJpYnV0ZShcInR5cGVcIik7Zm9yKGMgaW4gYS52YWxpZGF0b3IubWV0aG9kcylkPWYuZGF0YShcInJ1bGVcIitjLmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpK2Muc3Vic3RyaW5nKDEpLnRvTG93ZXJDYXNlKCkpLFwiXCI9PT1kJiYoZD0hMCksdGhpcy5ub3JtYWxpemVBdHRyaWJ1dGVSdWxlKGUsZyxjLGQpO3JldHVybiBlfSxzdGF0aWNSdWxlczpmdW5jdGlvbihiKXt2YXIgYz17fSxkPWEuZGF0YShiLmZvcm0sXCJ2YWxpZGF0b3JcIik7cmV0dXJuIGQuc2V0dGluZ3MucnVsZXMmJihjPWEudmFsaWRhdG9yLm5vcm1hbGl6ZVJ1bGUoZC5zZXR0aW5ncy5ydWxlc1tiLm5hbWVdKXx8e30pLGN9LG5vcm1hbGl6ZVJ1bGVzOmZ1bmN0aW9uKGIsYyl7cmV0dXJuIGEuZWFjaChiLGZ1bmN0aW9uKGQsZSl7aWYoZT09PSExKXJldHVybiB2b2lkIGRlbGV0ZSBiW2RdO2lmKGUucGFyYW18fGUuZGVwZW5kcyl7dmFyIGY9ITA7c3dpdGNoKHR5cGVvZiBlLmRlcGVuZHMpe2Nhc2VcInN0cmluZ1wiOmY9ISFhKGUuZGVwZW5kcyxjLmZvcm0pLmxlbmd0aDticmVhaztjYXNlXCJmdW5jdGlvblwiOmY9ZS5kZXBlbmRzLmNhbGwoYyxjKX1mP2JbZF09dm9pZCAwPT09ZS5wYXJhbXx8ZS5wYXJhbTooYS5kYXRhKGMuZm9ybSxcInZhbGlkYXRvclwiKS5yZXNldEVsZW1lbnRzKGEoYykpLGRlbGV0ZSBiW2RdKX19KSxhLmVhY2goYixmdW5jdGlvbihkLGUpe2JbZF09YS5pc0Z1bmN0aW9uKGUpJiZcIm5vcm1hbGl6ZXJcIiE9PWQ/ZShjKTplfSksYS5lYWNoKFtcIm1pbmxlbmd0aFwiLFwibWF4bGVuZ3RoXCJdLGZ1bmN0aW9uKCl7Ylt0aGlzXSYmKGJbdGhpc109TnVtYmVyKGJbdGhpc10pKX0pLGEuZWFjaChbXCJyYW5nZWxlbmd0aFwiLFwicmFuZ2VcIl0sZnVuY3Rpb24oKXt2YXIgYztiW3RoaXNdJiYoYS5pc0FycmF5KGJbdGhpc10pP2JbdGhpc109W051bWJlcihiW3RoaXNdWzBdKSxOdW1iZXIoYlt0aGlzXVsxXSldOlwic3RyaW5nXCI9PXR5cGVvZiBiW3RoaXNdJiYoYz1iW3RoaXNdLnJlcGxhY2UoL1tcXFtcXF1dL2csXCJcIikuc3BsaXQoL1tcXHMsXSsvKSxiW3RoaXNdPVtOdW1iZXIoY1swXSksTnVtYmVyKGNbMV0pXSkpfSksYS52YWxpZGF0b3IuYXV0b0NyZWF0ZVJhbmdlcyYmKG51bGwhPWIubWluJiZudWxsIT1iLm1heCYmKGIucmFuZ2U9W2IubWluLGIubWF4XSxkZWxldGUgYi5taW4sZGVsZXRlIGIubWF4KSxudWxsIT1iLm1pbmxlbmd0aCYmbnVsbCE9Yi5tYXhsZW5ndGgmJihiLnJhbmdlbGVuZ3RoPVtiLm1pbmxlbmd0aCxiLm1heGxlbmd0aF0sZGVsZXRlIGIubWlubGVuZ3RoLGRlbGV0ZSBiLm1heGxlbmd0aCkpLGJ9LG5vcm1hbGl6ZVJ1bGU6ZnVuY3Rpb24oYil7aWYoXCJzdHJpbmdcIj09dHlwZW9mIGIpe3ZhciBjPXt9O2EuZWFjaChiLnNwbGl0KC9cXHMvKSxmdW5jdGlvbigpe2NbdGhpc109ITB9KSxiPWN9cmV0dXJuIGJ9LGFkZE1ldGhvZDpmdW5jdGlvbihiLGMsZCl7YS52YWxpZGF0b3IubWV0aG9kc1tiXT1jLGEudmFsaWRhdG9yLm1lc3NhZ2VzW2JdPXZvaWQgMCE9PWQ/ZDphLnZhbGlkYXRvci5tZXNzYWdlc1tiXSxjLmxlbmd0aDwzJiZhLnZhbGlkYXRvci5hZGRDbGFzc1J1bGVzKGIsYS52YWxpZGF0b3Iubm9ybWFsaXplUnVsZShiKSl9LG1ldGhvZHM6e3JlcXVpcmVkOmZ1bmN0aW9uKGIsYyxkKXtpZighdGhpcy5kZXBlbmQoZCxjKSlyZXR1cm5cImRlcGVuZGVuY3ktbWlzbWF0Y2hcIjtpZihcInNlbGVjdFwiPT09Yy5ub2RlTmFtZS50b0xvd2VyQ2FzZSgpKXt2YXIgZT1hKGMpLnZhbCgpO3JldHVybiBlJiZlLmxlbmd0aD4wfXJldHVybiB0aGlzLmNoZWNrYWJsZShjKT90aGlzLmdldExlbmd0aChiLGMpPjA6dm9pZCAwIT09YiYmbnVsbCE9PWImJmIubGVuZ3RoPjB9LGVtYWlsOmZ1bmN0aW9uKGEsYil7cmV0dXJuIHRoaXMub3B0aW9uYWwoYil8fC9eW2EtekEtWjAtOS4hIyQlJicqK1xcLz0/Xl9ge3x9fi1dK0BbYS16QS1aMC05XSg/OlthLXpBLVowLTktXXswLDYxfVthLXpBLVowLTldKT8oPzpcXC5bYS16QS1aMC05XSg/OlthLXpBLVowLTktXXswLDYxfVthLXpBLVowLTldKT8pKiQvLnRlc3QoYSl9LHVybDpmdW5jdGlvbihhLGIpe3JldHVybiB0aGlzLm9wdGlvbmFsKGIpfHwvXig/Oig/Oig/Omh0dHBzP3xmdHApOik/XFwvXFwvKSg/OlxcUysoPzo6XFxTKik/QCk/KD86KD8hKD86MTB8MTI3KSg/OlxcLlxcZHsxLDN9KXszfSkoPyEoPzoxNjlcXC4yNTR8MTkyXFwuMTY4KSg/OlxcLlxcZHsxLDN9KXsyfSkoPyExNzJcXC4oPzoxWzYtOV18MlxcZHwzWzAtMV0pKD86XFwuXFxkezEsM30pezJ9KSg/OlsxLTldXFxkP3wxXFxkXFxkfDJbMDFdXFxkfDIyWzAtM10pKD86XFwuKD86MT9cXGR7MSwyfXwyWzAtNF1cXGR8MjVbMC01XSkpezJ9KD86XFwuKD86WzEtOV1cXGQ/fDFcXGRcXGR8MlswLTRdXFxkfDI1WzAtNF0pKXwoPzooPzpbYS16XFx1MDBhMS1cXHVmZmZmMC05XS0qKSpbYS16XFx1MDBhMS1cXHVmZmZmMC05XSspKD86XFwuKD86W2EtelxcdTAwYTEtXFx1ZmZmZjAtOV0tKikqW2EtelxcdTAwYTEtXFx1ZmZmZjAtOV0rKSooPzpcXC4oPzpbYS16XFx1MDBhMS1cXHVmZmZmXXsyLH0pKS4/KSg/OjpcXGR7Miw1fSk/KD86W1xcLz8jXVxcUyopPyQvaS50ZXN0KGEpfSxkYXRlOmZ1bmN0aW9uKCl7dmFyIGE9ITE7cmV0dXJuIGZ1bmN0aW9uKGIsYyl7cmV0dXJuIGF8fChhPSEwLHRoaXMuc2V0dGluZ3MuZGVidWcmJndpbmRvdy5jb25zb2xlJiZjb25zb2xlLndhcm4oXCJUaGUgYGRhdGVgIG1ldGhvZCBpcyBkZXByZWNhdGVkIGFuZCB3aWxsIGJlIHJlbW92ZWQgaW4gdmVyc2lvbiAnMi4wLjAnLlxcblBsZWFzZSBkb24ndCB1c2UgaXQsIHNpbmNlIGl0IHJlbGllcyBvbiB0aGUgRGF0ZSBjb25zdHJ1Y3Rvciwgd2hpY2hcXG5iZWhhdmVzIHZlcnkgZGlmZmVyZW50bHkgYWNyb3NzIGJyb3dzZXJzIGFuZCBsb2NhbGVzLiBVc2UgYGRhdGVJU09gXFxuaW5zdGVhZCBvciBvbmUgb2YgdGhlIGxvY2FsZSBzcGVjaWZpYyBtZXRob2RzIGluIGBsb2NhbGl6YXRpb25zL2BcXG5hbmQgYGFkZGl0aW9uYWwtbWV0aG9kcy5qc2AuXCIpKSx0aGlzLm9wdGlvbmFsKGMpfHwhL0ludmFsaWR8TmFOLy50ZXN0KG5ldyBEYXRlKGIpLnRvU3RyaW5nKCkpfX0oKSxkYXRlSVNPOmZ1bmN0aW9uKGEsYil7cmV0dXJuIHRoaXMub3B0aW9uYWwoYil8fC9eXFxkezR9W1xcL1xcLV0oMD9bMS05XXwxWzAxMl0pW1xcL1xcLV0oMD9bMS05XXxbMTJdWzAtOV18M1swMV0pJC8udGVzdChhKX0sbnVtYmVyOmZ1bmN0aW9uKGEsYil7cmV0dXJuIHRoaXMub3B0aW9uYWwoYil8fC9eKD86LT9cXGQrfC0/XFxkezEsM30oPzosXFxkezN9KSspPyg/OlxcLlxcZCspPyQvLnRlc3QoYSl9LGRpZ2l0czpmdW5jdGlvbihhLGIpe3JldHVybiB0aGlzLm9wdGlvbmFsKGIpfHwvXlxcZCskLy50ZXN0KGEpfSxtaW5sZW5ndGg6ZnVuY3Rpb24oYixjLGQpe3ZhciBlPWEuaXNBcnJheShiKT9iLmxlbmd0aDp0aGlzLmdldExlbmd0aChiLGMpO3JldHVybiB0aGlzLm9wdGlvbmFsKGMpfHxlPj1kfSxtYXhsZW5ndGg6ZnVuY3Rpb24oYixjLGQpe3ZhciBlPWEuaXNBcnJheShiKT9iLmxlbmd0aDp0aGlzLmdldExlbmd0aChiLGMpO3JldHVybiB0aGlzLm9wdGlvbmFsKGMpfHxlPD1kfSxyYW5nZWxlbmd0aDpmdW5jdGlvbihiLGMsZCl7dmFyIGU9YS5pc0FycmF5KGIpP2IubGVuZ3RoOnRoaXMuZ2V0TGVuZ3RoKGIsYyk7cmV0dXJuIHRoaXMub3B0aW9uYWwoYyl8fGU+PWRbMF0mJmU8PWRbMV19LG1pbjpmdW5jdGlvbihhLGIsYyl7cmV0dXJuIHRoaXMub3B0aW9uYWwoYil8fGE+PWN9LG1heDpmdW5jdGlvbihhLGIsYyl7cmV0dXJuIHRoaXMub3B0aW9uYWwoYil8fGE8PWN9LHJhbmdlOmZ1bmN0aW9uKGEsYixjKXtyZXR1cm4gdGhpcy5vcHRpb25hbChiKXx8YT49Y1swXSYmYTw9Y1sxXX0sc3RlcDpmdW5jdGlvbihiLGMsZCl7dmFyIGUsZj1hKGMpLmF0dHIoXCJ0eXBlXCIpLGc9XCJTdGVwIGF0dHJpYnV0ZSBvbiBpbnB1dCB0eXBlIFwiK2YrXCIgaXMgbm90IHN1cHBvcnRlZC5cIixoPVtcInRleHRcIixcIm51bWJlclwiLFwicmFuZ2VcIl0saT1uZXcgUmVnRXhwKFwiXFxcXGJcIitmK1wiXFxcXGJcIiksaj1mJiYhaS50ZXN0KGguam9pbigpKSxrPWZ1bmN0aW9uKGEpe3ZhciBiPShcIlwiK2EpLm1hdGNoKC8oPzpcXC4oXFxkKykpPyQvKTtyZXR1cm4gYiYmYlsxXT9iWzFdLmxlbmd0aDowfSxsPWZ1bmN0aW9uKGEpe3JldHVybiBNYXRoLnJvdW5kKGEqTWF0aC5wb3coMTAsZSkpfSxtPSEwO2lmKGopdGhyb3cgbmV3IEVycm9yKGcpO3JldHVybiBlPWsoZCksKGsoYik+ZXx8bChiKSVsKGQpIT09MCkmJihtPSExKSx0aGlzLm9wdGlvbmFsKGMpfHxtfSxlcXVhbFRvOmZ1bmN0aW9uKGIsYyxkKXt2YXIgZT1hKGQpO3JldHVybiB0aGlzLnNldHRpbmdzLm9uZm9jdXNvdXQmJmUubm90KFwiLnZhbGlkYXRlLWVxdWFsVG8tYmx1clwiKS5sZW5ndGgmJmUuYWRkQ2xhc3MoXCJ2YWxpZGF0ZS1lcXVhbFRvLWJsdXJcIikub24oXCJibHVyLnZhbGlkYXRlLWVxdWFsVG9cIixmdW5jdGlvbigpe2EoYykudmFsaWQoKX0pLGI9PT1lLnZhbCgpfSxyZW1vdGU6ZnVuY3Rpb24oYixjLGQsZSl7aWYodGhpcy5vcHRpb25hbChjKSlyZXR1cm5cImRlcGVuZGVuY3ktbWlzbWF0Y2hcIjtlPVwic3RyaW5nXCI9PXR5cGVvZiBlJiZlfHxcInJlbW90ZVwiO3ZhciBmLGcsaCxpPXRoaXMucHJldmlvdXNWYWx1ZShjLGUpO3JldHVybiB0aGlzLnNldHRpbmdzLm1lc3NhZ2VzW2MubmFtZV18fCh0aGlzLnNldHRpbmdzLm1lc3NhZ2VzW2MubmFtZV09e30pLGkub3JpZ2luYWxNZXNzYWdlPWkub3JpZ2luYWxNZXNzYWdlfHx0aGlzLnNldHRpbmdzLm1lc3NhZ2VzW2MubmFtZV1bZV0sdGhpcy5zZXR0aW5ncy5tZXNzYWdlc1tjLm5hbWVdW2VdPWkubWVzc2FnZSxkPVwic3RyaW5nXCI9PXR5cGVvZiBkJiZ7dXJsOmR9fHxkLGg9YS5wYXJhbShhLmV4dGVuZCh7ZGF0YTpifSxkLmRhdGEpKSxpLm9sZD09PWg/aS52YWxpZDooaS5vbGQ9aCxmPXRoaXMsdGhpcy5zdGFydFJlcXVlc3QoYyksZz17fSxnW2MubmFtZV09YixhLmFqYXgoYS5leHRlbmQoITAse21vZGU6XCJhYm9ydFwiLHBvcnQ6XCJ2YWxpZGF0ZVwiK2MubmFtZSxkYXRhVHlwZTpcImpzb25cIixkYXRhOmcsY29udGV4dDpmLmN1cnJlbnRGb3JtLHN1Y2Nlc3M6ZnVuY3Rpb24oYSl7dmFyIGQsZyxoLGo9YT09PSEwfHxcInRydWVcIj09PWE7Zi5zZXR0aW5ncy5tZXNzYWdlc1tjLm5hbWVdW2VdPWkub3JpZ2luYWxNZXNzYWdlLGo/KGg9Zi5mb3JtU3VibWl0dGVkLGYucmVzZXRJbnRlcm5hbHMoKSxmLnRvSGlkZT1mLmVycm9yc0ZvcihjKSxmLmZvcm1TdWJtaXR0ZWQ9aCxmLnN1Y2Nlc3NMaXN0LnB1c2goYyksZi5pbnZhbGlkW2MubmFtZV09ITEsZi5zaG93RXJyb3JzKCkpOihkPXt9LGc9YXx8Zi5kZWZhdWx0TWVzc2FnZShjLHttZXRob2Q6ZSxwYXJhbWV0ZXJzOmJ9KSxkW2MubmFtZV09aS5tZXNzYWdlPWcsZi5pbnZhbGlkW2MubmFtZV09ITAsZi5zaG93RXJyb3JzKGQpKSxpLnZhbGlkPWosZi5zdG9wUmVxdWVzdChjLGopfX0sZCkpLFwicGVuZGluZ1wiKX19fSk7dmFyIGIsYz17fTtyZXR1cm4gYS5hamF4UHJlZmlsdGVyP2EuYWpheFByZWZpbHRlcihmdW5jdGlvbihhLGIsZCl7dmFyIGU9YS5wb3J0O1wiYWJvcnRcIj09PWEubW9kZSYmKGNbZV0mJmNbZV0uYWJvcnQoKSxjW2VdPWQpfSk6KGI9YS5hamF4LGEuYWpheD1mdW5jdGlvbihkKXt2YXIgZT0oXCJtb2RlXCJpbiBkP2Q6YS5hamF4U2V0dGluZ3MpLm1vZGUsZj0oXCJwb3J0XCJpbiBkP2Q6YS5hamF4U2V0dGluZ3MpLnBvcnQ7cmV0dXJuXCJhYm9ydFwiPT09ZT8oY1tmXSYmY1tmXS5hYm9ydCgpLGNbZl09Yi5hcHBseSh0aGlzLGFyZ3VtZW50cyksY1tmXSk6Yi5hcHBseSh0aGlzLGFyZ3VtZW50cyl9KSxhfSk7XG5cblxuJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24gKCkge1xuICAgICQoJ3NlbGVjdCcpLm5pY2VTZWxlY3QoKTtcbiAgICAkKCdbYmFubmVyU2xpZGVyX2pzXScpLmVhY2goZnVuY3Rpb24gKCkge1xuICAgICAgbmV3IFN3aXBlcigkKHRoaXMpWzBdLCB7XG4gICAgICAgIGRpcmVjdGlvbjogJ2hvcml6b250YWwnLFxuICAgICAgICBzbGlkZXNQZXJWaWV3OiAxLFxuICAgICAgICBzcGVlZDogNzAwLFxuICAgICAgICBsb29wOiB0cnVlLFxuICAgICAgICBmYWRlRWZmZWN0OiB7XG4gICAgICAgICAgY3Jvc3NGYWRlOiB0cnVlXG4gICAgICAgIH0sXG4gICAgICAgIGVmZmVjdDogJ2ZhZGUnLFxuICAgICAgICBhdXRvcGxheToge1xuICAgICAgICAgIGRlbGF5OiAzNjAwLFxuICAgICAgICAgIGRpc2FibGVPbkludGVyYWN0aW9uOiBmYWxzZSxcbiAgICAgICAgfSxcbiAgICAgICAgb246IHtcbiAgICAgICAgICBiZWZvcmVJbml0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBjb25zdCBzbGlkZXMgPSB0aGlzLnNsaWRlcy5sZW5ndGg7XG4gICAgICAgICAgICBjb25zdCBzbGlkZXNQZXJWaWV3ID0gdGhpcy5wYXJhbXMuc2xpZGVzUGVyVmlldztcblxuICAgICAgICAgICAgLy8g0J/RgNC+0LLQtdGA0LrQsCDQutC+0LvQuNGH0LXRgdGC0LLQsCDRgdC70LDQudC00L7QslxuICAgICAgICAgICAgaWYgKHNsaWRlcyA8PSBzbGlkZXNQZXJWaWV3KSB7XG4gICAgICAgICAgICAgIHRoaXMucGFyYW1zLmxvb3AgPSBmYWxzZTsgLy8g0J7RgtC60LvRjtGH0LDQtdC8IGxvb3BcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIHRoaXMucGFyYW1zLmxvb3AgPSB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0sXG4gICAgICAgIH0sXG4gICAgICB9KTtcbiAgfSk7XG4gICQoJ1tuZXdzU2xpZGVyX2pzXScpLmVhY2goZnVuY3Rpb24gKCkge1xuICAgIHZhciBzd2lwZXIgPSBuZXcgU3dpcGVyKCQodGhpcylbMF0sIHtcbiAgICAgIGRpcmVjdGlvbjogJ2hvcml6b250YWwnLFxuICAgICAgc2xpZGVzUGVyVmlldzogMS43LFxuICAgICAgc3BhY2VCZXR3ZWVuOiAxNyxcbiAgICAgIHNwZWVkOiA3MDAsXG4gICAgICBzY3JvbGxiYXI6IHtcbiAgICAgICAgZW5hYmxlOiB0cnVlLFxuICAgICAgICBlbDogXCIuc3dpcGVyLXNjcm9sbGJhclwiLFxuICAgICAgICBkcmFnZ2FibGU6IHRydWUsXG4gICAgICAgIGhpZGU6IGZhbHNlLFxuICAgICAgfSxcbiAgICB9KTtcbiAgfSk7XG4gICQoJ1twbHVzU2l6ZVNsaWRlcl9qc10nKS5lYWNoKGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgc3dpcGVyID0gbmV3IFN3aXBlcigkKHRoaXMpWzBdLCB7XG4gICAgICBkaXJlY3Rpb246ICdob3Jpem9udGFsJyxcbiAgICAgIHNsaWRlc1BlclZpZXc6IDEsXG4gICAgICBzcGFjZUJldHdlZW46IDEwLFxuICAgICAgc3BlZWQ6IDcwMCxcbiAgICAgIHNjcm9sbGJhcjoge1xuICAgICAgICBlbmFibGU6IHRydWUsXG4gICAgICAgIGVsOiBcIi5zd2lwZXItc2Nyb2xsXCIsXG4gICAgICAgIGRyYWdnYWJsZTogdHJ1ZSxcbiAgICAgICAgaGlkZTogZmFsc2UsXG4gICAgICB9LFxuICAgICAgbmF2aWdhdGlvbjoge1xuICAgICAgICBuZXh0RWw6ICcuc2VjdGlvbi1wbHVzLXNpemUgLnN3aXBlcl9fbmF2aWdhdGlvbi1idG4tbmV4dCcsXG4gICAgICAgIHByZXZFbDogJy5zZWN0aW9uLXBsdXMtc2l6ZSAuc3dpcGVyX19uYXZpZ2F0aW9uLWJ0bi1wcmV2JyxcbiAgICAgIH0sXG4gICAgICBicmVha3BvaW50czoge1xuICAgICAgICAwOiB7XG4gICAgICAgICAgc2Nyb2xsYmFyOiB7XG4gICAgICAgICAgICBlbmFibGVkOiB0cnVlLFxuICAgICAgICAgIH0sXG4gICAgICAgIH0sXG4gICAgICAgIDc2Nzoge1xuICAgICAgICAgIHNsaWRlc1BlclZpZXc6IDMsXG4gICAgICAgICAgc3BhY2VCZXR3ZWVuOiAxOCxcbiAgICAgICAgICBzY3JvbGxiYXI6IHtcbiAgICAgICAgICAgIGVuYWJsZWQ6IGZhbHNlLFxuICAgICAgICAgIH0sXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgIH0pO1xuICB9KTtcbiAgJCgnW2dhbGxlcnlHcmlkU3dpcGVyX0pTXScpLmVhY2goZnVuY3Rpb24gKCkge1xuICAgIHZhciBzd2lwZXIgPSBuZXcgU3dpcGVyKCQodGhpcylbMF0sIHtcbiAgICAgIHNwZWVkOiAzMDAsXG4gICAgICBzbGlkZXNQZXJWaWV3OiAxLFxuICAgICAgc3BhY2VCZXR3ZWVuOiAxMCxcbiAgICAgIGVmZmVjdDogJ2ZhZGUnLFxuICAgICAgZmFkZUVmZmVjdDoge1xuICAgICAgICBjcm9zc0ZhZGU6IHRydWVcbiAgICAgIH0sXG4gICAgICBuYXZpZ2F0aW9uOiB7XG4gICAgICAgIG5leHRFbDogJy5zd2lwZXItbmF2aWdhdGlvbl9fYnRuLW5leHQnLFxuICAgICAgICBwcmV2RWw6ICcuc3dpcGVyLW5hdmlnYXRpb25fX2J0bi1wcmV2JyxcbiAgICAgIH0sXG4gICAgICBwYWdpbmF0aW9uOiB7XG4gICAgICAgIGVsOiBcIi5zd2lwZXItcGFnaW5hdGlvblwiLFxuICAgICAgICBjbGlja2FibGU6IHRydWUsXG4gICAgICAgIHJlbmRlckJ1bGxldDogZnVuY3Rpb24gKGluZGV4LCBjbGFzc05hbWUpIHtcbiAgICAgICAgICByZXR1cm4gJzxidXR0b24gY2xhc3M9XCInICsgY2xhc3NOYW1lICsgJ1wiPicgKyAoaW5kZXggKyAxKSArICc8L2J1dHRvbj4nO1xuICAgICAgICB9LFxuICAgICAgfSxcbiAgICAgIG9uOiB7XG4gICAgICAgIHNsaWRlQ2hhbmdlOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICBsZXQgZWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2VjdGlvbi1tYWluLWdhbGxlcnknKTtcbiAgICAgICAgICBsZXQgaXNTdGlja3kgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaGVhZGVyLmZpeGVkJyk7XG4gICAgICAgICAgbGV0IGhlYWRlckhlaWdodCA9IDA7XG4gICAgICAgICAgaXNTdGlja3kgPyBoZWFkZXJIZWlnaHQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaGVhZGVyLmZpeGVkJykub2Zmc2V0SGVpZ2h0IDogMDtcbiAgICAgICAgICBjb25zdCBlbGVtZW50VG9wID0gZWwub2Zmc2V0VG9wO1xuICAgICAgICAgIGlmKGVsKSB7XG4gICAgICAgICAgICB3aW5kb3cuc2Nyb2xsVG8oeyB0b3A6IGVsZW1lbnRUb3AgLSBoZWFkZXJIZWlnaHQsIGJlaGF2aW9yOiAnc21vb3RoJyB9KTtcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgIH0pXG4gIH0pXG4gICQoJ1twcm9kdWN0R2FsbGVyeVNsaWRlcl9qc10nKS5lYWNoKGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgc3dpcGVyID0gbmV3IFN3aXBlcigkKHRoaXMpWzBdLCB7XG4gICAgICBkaXJlY3Rpb246ICdob3Jpem9udGFsJyxcbiAgICAgIHNsaWRlc1BlclZpZXc6IDEsXG4gICAgICBzcGFjZUJldHdlZW46IDEwLFxuICAgICAgcGFnaW5hdGlvbjoge1xuICAgICAgICBlbDogXCIuc3dpcGVyLXBhZ2luYXRpb25cIixcbiAgICAgICAgYnVsbGV0czogdHJ1ZSxcbiAgICAgICAgY2xpY2thYmxlOiB0cnVlLFxuICAgICAgfSxcbiAgICB9KVxuICB9KTtcbiAgJCgnW2NhdGVnb3JpZXNTbGlkZXJfanNdJykuZWFjaChmdW5jdGlvbiAoKSB7XG4gICAgdmFyIHN3aXBlciA9IG5ldyBTd2lwZXIoJCh0aGlzKVswXSwge1xuICAgICAgZGlyZWN0aW9uOiAnaG9yaXpvbnRhbCcsXG4gICAgICBzbGlkZXNQZXJWaWV3OiAyLjIsXG4gICAgICBzcGFjZUJldHdlZW46IDY0LFxuICAgICAgc3BlZWQ6IDcwMCxcbiAgICAgIHNjcm9sbGJhcjoge1xuICAgICAgICBlbDogXCIuc3dpcGVyLXNjcm9sbGJhclwiLFxuICAgICAgICBkcmFnZ2FibGU6IHRydWUsXG4gICAgICAgIGhpZGU6IGZhbHNlLFxuICAgICAgfSxcbiAgICAgIC8vIG5hdmlnYXRpb246IHtcbiAgICAgIC8vICAgbmV4dEVsOiAnLnNlY3Rpb24tc2VydGlmaWNhdGVzIC5zd2lwZXJfX25hdmlnYXRpb24tYnRuLW5leHQnLFxuICAgICAgLy8gICBwcmV2RWw6ICcuc2VjdGlvbi1zZXJ0aWZpY2F0ZXMgLnN3aXBlcl9fbmF2aWdhdGlvbi1idG4tcHJldicsXG4gICAgICAvLyB9LFxuICAgICAgYnJlYWtwb2ludHM6IHtcbiAgICAgICAgMDoge1xuICAgICAgICAgIHNsaWRlc1BlclZpZXc6IDIuMixcbiAgICAgICAgICBzcGFjZUJldHdlZW46IDEwLFxuICAgICAgICAgIHNjcm9sbGJhcjoge1xuICAgICAgICAgICAgZW5hYmxlZDogdHJ1ZSxcbiAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgICAgICA3Njc6IHtcbiAgICAgICAgICBmcmVlTW9kZTogdHJ1ZSxcbiAgICAgICAgICBzbGlkZXNQZXJWaWV3OiA0LjUsXG4gICAgICAgICAgc3BhY2VCZXR3ZWVuOiAyMCxcbiAgICAgICAgICBzY3JvbGxiYXI6IHtcbiAgICAgICAgICAgIGVuYWJsZWQ6IGZhbHNlLFxuICAgICAgICAgIH0sXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgIH0pO1xuICB9KTtcblxuICB2YXIgc3dpcGVyTWFycXVlID0gbmV3IFN3aXBlcignLnNlY3Rpb24tcGFydG5lcnNfX3N3aXBlcicsIHtcbiAgICBzbGlkZXNQZXJWaWV3OiAzLFxuICAgIHNwYWNlQmV0d2VlbjogMjAsXG4gICAgc3BlZWQ6IDQ1MDAsXG4gICAgbG9vcDogdHJ1ZSxcbiAgICBhbGxvd1RvdWNoTW92ZTogZmFsc2UsIC8vINC80L7QttC90L4g0LXRidGRINC+0YLQutC70Y7Rh9C40YLRjCDRgdCy0LDQudC/XG4gICAgYXV0b3BsYXk6IHtcbiAgICAgIGRlbGF5OiAwLFxuICAgICAgZGlzYWJsZU9uSW50ZXJhY3Rpb246IGZhbHNlIC8vINC40LvQuCDRgdC00LXQu9Cw0YLRjCDRgtCw0LosINGH0YLQvtCx0Ysg0LLQvtGB0YHRgtCw0L3QsNCy0LvQuNCy0LDQu9GB0Y8gYXV0b3BsYXkg0L/QvtGB0LvQtSDQstC30LDQuNC80L7QtNC10LnRgdGC0LLQuNGPXG4gICAgfSxcbiAgICBicmVha3BvaW50czoge1xuICAgICAgOTkyOiB7XG4gICAgICAgIHNsaWRlc1BlclZpZXc6IDQsXG4gICAgICAgIHNwYWNlQmV0d2VlbjogNTAsXG4gICAgICB9XG4gICAgfVxuICB9KTtcblxuXG5cbiAgY29uc3QgZ2FsbGFyeV9fc3dpcGVyID0gbmV3IFN3aXBlcignLmdhbGxhcnlfX3N3aXBlcicsIHtcbiAgICBzbGlkZXNQZXJWaWV3OiA0LFxuICAgIHNwYWNlQmV0d2VlbjogJzElJyxcbiAgICB3YXRjaFNsaWRlc1Byb2dyZXNzOiB0cnVlLFxuICAgIHNjcm9sbGJhcjoge1xuICAgICAgZWw6IFwiLnN3aXBlci1zY3JvbGxiYXJcIixcbiAgICAgIGRyYWdnYWJsZTogdHJ1ZSxcbiAgICAgIGhpZGU6IGZhbHNlLFxuICAgIH0sXG4gICAgYXV0b3BsYXk6IHtcbiAgICAgICAgZGVsYXk6IDI1MDAsXG4gICAgfSxcbiAgICBwYWdpbmF0aW9uOiB7XG4gICAgICAgIGVsOiBcIi5nYWxsYXJ5X193cmFwcGVyIC5zd2lwZXItcGFnaW5hdGlvblwiLFxuICAgIH0sXG4gICAgYnJlYWtwb2ludHM6e1xuICAgICAgMDp7XG4gICAgICAgIHNsaWRlc1BlclZpZXc6IDEuNSxcbiAgICAgICAgc3BhY2VCZXR3ZWVuOiAnMSUnLFxuICAgICAgICBzY3JvbGxiYXI6IHtcbiAgICAgICAgICBlbmFibGVkOiB0cnVlLFxuICAgICAgICB9LFxuICAgICAgICBwYWdpbmF0aW9uOiB7XG4gICAgICAgICAgZW5hYmxlZDogZmFsc2UsXG4gICAgICAgIH1cbiAgICB9LFxuICAgIDU3ODp7XG4gICAgICBzbGlkZXNQZXJWaWV3OiAyLFxuICAgICAgc3BhY2VCZXR3ZWVuOiAnMSUnLFxuICAgICAgc2Nyb2xsYmFyOiB7XG4gICAgICAgZW5hYmxlZDogdHJ1ZSxcbiAgICAgIH0sXG4gICAgICBwYWdpbmF0aW9uOiB7XG4gICAgICAgIGVuYWJsZWQ6IGZhbHNlLFxuICAgICAgfVxuICAgIH0sXG4gICAgICA3Njc6e1xuICAgICAgICAgIHNsaWRlc1BlclZpZXc6IDQsXG4gICAgICAgICAgc3BhY2VCZXR3ZWVuOiAnMSUnLFxuICAgICAgICAgIHNjcm9sbGJhcjoge1xuICAgICAgICAgICAgZW5hYmxlZDogZmFsc2UsXG4gICAgICAgICAgIH0sXG4gICAgICAgICAgIHBhZ2luYXRpb246IHtcbiAgICAgICAgICAgIGVuYWJsZWQ6IHRydWUsXG4gICAgICAgICAgfVxuICAgICAgfSxcblxuXG4gICAgfVxufSlcblxuICAgICQoJy50YWJzLXNsaWRlcicpLmVhY2goZnVuY3Rpb24gKCkge1xuICAgICAgdmFyICRjb250YWluZXIgPSAkKHRoaXMpLmZpbmQoJy5zd2lwZXItY29udGFpbmVyJyk7XG4gICAgICB2YXIgc3dpcGVyVGFicyA9IG5ldyBTd2lwZXIoJGNvbnRhaW5lciwge1xuICAgICAgICBkaXJlY3Rpb246ICdob3Jpem9udGFsJyxcbiAgICAgICAgZnJlZU1vZGU6IHRydWUsXG4gICAgICAgIHNsaWRlc1BlclZpZXc6ICdhdXRvJyxcbiAgICAgICAgc3BhY2VCZXR3ZWVuOiAxMCxcbiAgICAgICAgdG91Y2hTdGFydEZvcmNlUHJldmVudERlZmF1bHQ6IHRydWUsXG4gICAgICB9KSA7XG4gICAgfSlcblxuICAgICQoJ2JvZHknKS5vbignY2xpY2snLCAnW2FncmVlbWVudENvbnRyb2xfSlNdJywgZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgJHRoaXMgPSAkKHRoaXMpLFxuICAgICAgICAgICAgJGZvcm0gPSAkdGhpcy5jbG9zZXN0KCdmb3JtJyksXG4gICAgICAgICAgICAkaW5wdXQgPSAkZm9ybS5maW5kKCdbYWdyZWVtZW50Q29udHJvbENoZWNrYm94X0pTXScpLFxuICAgICAgICAgICAgJGJ0biA9ICRmb3JtLmZpbmQoJ1thZ3JlZW1lbnRDb250cm9sQnRuX0pTXScpO1xuXG4gICAgICAgIGlmICgkdGhpcy5oYXNDbGFzcygnY2hlY2tlZCcpKSB7XG4gICAgICAgICAgICAkdGhpcy5yZW1vdmVDbGFzcygnY2hlY2tlZCcpO1xuICAgICAgICAgICAgJGlucHV0LnJlbW92ZUF0dHIoJ2NoZWNrZWQnKTtcbiAgICAgICAgICAgICRidG4uYWRkQ2xhc3MoJ2Rpc2FibGVkJyk7XG4gICAgICAgICAgICAkYnRuLmF0dHIoJ2Rpc2FibGVkJywgdHJ1ZSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAkdGhpcy5hZGRDbGFzcygnY2hlY2tlZCcpO1xuICAgICAgICAgICAgJGlucHV0LmF0dHIoJ2NoZWNrZWQnLCAnJyk7XG4gICAgICAgICAgICAkYnRuLnJlbW92ZUNsYXNzKCdkaXNhYmxlZCcpO1xuICAgICAgICAgICAgJGJ0bi5yZW1vdmVBdHRyKCdkaXNhYmxlZCcpO1xuICAgICAgICB9XG4gICAgfSk7XG5cbiAgICAkKCdib2R5Jykub24oJ2NsaWNrJywgJ1tyZWFkTW9yZUJ0bl9KU10nLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciAkYnRuID0gJCh0aGlzKSxcbiAgICAgICAgICAgICRwYXJlbnQgPSAkYnRuLmNsb3Nlc3QoJ1tyZWFkTW9yZUNvbnRhaW5lcl9KU10nKTtcblxuICAgICAgICAkcGFyZW50LmFkZENsYXNzKCdvcGVuJyk7XG4gICAgfSk7XG5cbiAgICAkKFwiW3RvVG9wX0pTXVwiKS5jbGljayhmdW5jdGlvbiAoKSB7XG4gICAgICAgICQoXCJodG1sLCBib2R5XCIpLmFuaW1hdGUoe1xuICAgICAgICAgICAgc2Nyb2xsVG9wOiAwXG4gICAgICAgIH0sIDApO1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfSk7XG5cbiAgICAkKFwiW2FuY2hvckxpbmtfSlNdXCIpLm9uKFwiY2xpY2tcIiwgZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIHZhciBpZCA9ICQodGhpcykuYXR0cignaHJlZicpO1xuXG4gICAgICAgIGlmICgkKHdpbmRvdykuaW5uZXJXaWR0aCgpIDwgNzY5KSB7XG4gICAgICAgICAgICB2YXIgaGVhZGVySGVpZ2h0ID0gJCh3aW5kb3cpLmlubmVyV2lkdGgoKTtcbiAgICAgICAgICAgIGhlYWRlckhlaWdodCA9IChoZWFkZXJIZWlnaHQgLyAxMDApICogMjkuNjg3NTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHZhciBoZWFkZXJIZWlnaHQgPSAkKHdpbmRvdykuaW5uZXJXaWR0aCgpO1xuICAgICAgICAgICAgaGVhZGVySGVpZ2h0ID0gKGhlYWRlckhlaWdodCAvIDEwMCkgKiA1LCAyNTQ4NjA3NDYxOTAyMjU5NTkwMTIwODYxNzk3MTYyO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCQoaWQpLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIHZhciB0b3AgPSAoJChpZCkub2Zmc2V0KCkudG9wKSAtIGhlYWRlckhlaWdodDtcbiAgICAgICAgICAgICQoJ2JvZHksaHRtbCcpLmFuaW1hdGUoe1xuICAgICAgICAgICAgICAgIHNjcm9sbFRvcDogdG9wXG4gICAgICAgICAgICB9LCAxNTAwKTtcbiAgICAgICAgfSBlbHNlIHtcbi8vICAgICAgICAgICAgIGNvbnNvbGUubG9nKDEpO1xuICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBcImluZGV4Lmh0bWxcIiArIGlkO1xuICAgICAgICB9XG4gICAgfSk7XG5cbiAgICB2YXIgaGFzaCA9IHdpbmRvdy5sb2NhdGlvbi5oYXNoO1xuICAgIGlmIChoYXNoICE9IFwiXCIpIHtcblxuICAgICAgICBpZiAoJCh3aW5kb3cpLmlubmVyV2lkdGgoKSA8IDc2OSkge1xuICAgICAgICAgICAgdmFyIGhlYWRlckhlaWdodCA9ICQod2luZG93KS5pbm5lcldpZHRoKCk7XG4gICAgICAgICAgICBoZWFkZXJIZWlnaHQgPSAoaGVhZGVySGVpZ2h0IC8gMTAwKSAqIDI5LjY4NzU7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB2YXIgaGVhZGVySGVpZ2h0ID0gJCh3aW5kb3cpLmlubmVyV2lkdGgoKTtcbiAgICAgICAgICAgIGhlYWRlckhlaWdodCA9IChoZWFkZXJIZWlnaHQgLyAxMDApICogNSwgMjU0ODYwNzQ2MTkwMjI1OTU5MDEyMDg2MTc5NzE2MjtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICgkKGhhc2gpLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIHZhciBvZmZzZXQgPSAkKGhhc2gpLm9mZnNldCgpLnRvcCAtIGhlYWRlckhlaWdodDtcbiAgICAgICAgICAgICQoJ2JvZHksaHRtbCcpLmFuaW1hdGUoe1xuICAgICAgICAgICAgICAgIHNjcm9sbFRvcDogb2Zmc2V0XG4gICAgICAgICAgICB9LCAxNTAwKTtcbiAgICAgICAgfVxuICAgIH07XG5cblxuXG4gICQudmFsaWRhdG9yLmFkZE1ldGhvZCgncGF0dGVybicsIGZ1bmN0aW9uKHZhbHVlLCBlbGVtZW50LCBwYXR0ZXJuKSB7XG4gICAgLy8g0J/RgNC+0LLQtdGA0Y/QtdC8LCDRj9Cy0LvRj9C10YLRgdGPINC70Lgg0LfQvdCw0YfQtdC90LjQtSDQv9GD0YHRgtGL0LwgKNC10YHQu9C4INC/0L7Qu9C1INC90LUg0L7QsdGP0LfQsNGC0LXQu9GM0L3Qvikg0LjQu9C4INGB0L7QvtGC0LLQtdGC0YHRgtCy0YPQtdGCINGA0LXQs9GD0LvRj9GA0L3QvtC80YMg0LLRi9GA0LDQttC10L3QuNGOXG4gICAgcmV0dXJuIHRoaXMub3B0aW9uYWwoZWxlbWVudCkgfHwgcGF0dGVybi50ZXN0KHZhbHVlKTtcbn0sICfQn9C+0LvQtSDRgdC+0LTQtdGA0LbQuNGCINC90LXQutC+0YDRgNC10LrRgtC90L7QtSDQt9C90LDRh9C10L3QuNC1Jyk7XG5cbiAgICAkKCdbZm9ybVZhbGlkYXRlX0pTXScpLmVhY2goZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgZm9ybSA9ICQodGhpcyk7XG4gICAgICAgICQodGhpcykudmFsaWRhdGUoe1xuICAgICAgICAgICAgZXJyb3JDbGFzczogXCJ2YWxpZGF0ZV9lcnJvclwiLFxuICAgICAgICAgICAgcnVsZXM6IHtcbiAgICAgICAgICAgICAgbmFtZToge1xuICAgICAgICAgICAgICAgICAgcmVxdWlyZWQ6IHRydWUsXG4gICAgICAgICAgICAgICAgICBwYXR0ZXJuOiAvXlthLXpBLVrQsC3Rj9CQLdCvXFxzXSskLywgLy8g0JzQtdGC0L7QtCDQv9GA0L7QstC10YDQutC4INCx0YPQutCyINC4INC/0YDQvtCx0LXQu9C+0LJcbiAgICAgICAgICAgICAgICAgIG1pbmxlbmd0aDogMixcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgcGhvbmU6IHtcbiAgICAgICAgICAgICAgICByZXF1aXJlZDogdHJ1ZSxcbiAgICAgICAgICAgICAgICBtaW5sZW5ndGg6IDcsIC8vINCc0LXRgtC+0LQg0L/RgNC+0LLQtdGA0LrQuCDQv9C+0LLRgtC+0YDRj9GO0YnQuNGF0YHRjyDQv9C+0LTRgNGP0LQg0YHQuNC80LLQvtC70L7QslxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBlbWFpbDoge1xuICAgICAgICAgICAgICAgICAgcGF0dGVybjogL14oW2EtekEtWjAtOV8uKy1dKStcXEAoKFthLXpBLVowLTktXSkrXFwuKSsoW2EtekEtWjAtOV17Miw0fSkrJC8sIC8vINCf0YDQvtCy0LXRgNC60LAg0LrQvtGA0YDQtdC60YLQvdC+0YHRgtC4IGVtYWlsXG4gICAgICAgICAgICAgIH0sXG5cbiAgICAgICAgICB9LFxuICAgICAgICAgIGVycm9yUGxhY2VtZW50OiBmdW5jdGlvbiAoZXJyb3IsIGVsZW1lbnQpIHt9LFxuICAgICAgICB9KTtcbiAgICB9KTtcblxuICAgICQoJ1toZWFkZXJCdG5fSlNdJykub24oJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xuICAgICAgaWYgKCQodGhpcykuaGFzQ2xhc3MoJ2FjdGl2ZScpKSB7XG4gICAgICAgIG1lbnVDbG9zZSgpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbWVudU9wZW4oKTtcbiAgICAgIH1cbiAgfSk7XG5cbiQoJy5oZWFkZXJfX25hdiBhJykub24oJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xuICBpZiAoJCgnW2hlYWRlckJ0bl9KU10nKS5oYXNDbGFzcygnb3BlbicpKSB7XG4gICAgbWVudUNsb3NlKCk7XG4gIH1cbn0pO1xuXG4gIGZ1bmN0aW9uIHNsaWRlVG9nZ2xlU2VjdGlvbigpIHtcbiAgICAkKCdbdG9nZ2xlSXRlbV9KU10nKS5lYWNoKGZ1bmN0aW9uKCkge1xuICAgICAgJCh0aGlzKS5yZW1vdmVDbGFzcygnb3BlbicpO1xuICAgICAgJCh0aGlzKS5zaWJsaW5ncygpLmVhY2goZnVuY3Rpb24oKSB7XG4gICAgICAgIGlmICgkKHdpbmRvdykub3V0ZXJXaWR0aCgpIDwgOTkyKSB7XG4gICAgICAgICAgJCh0aGlzKS5jc3MoJ2Rpc3BsYXknLCAnbm9uZScpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICQodGhpcykucmVtb3ZlQXR0cignc3R5bGUnKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfSk7XG4gICAgaWYoJCh3aW5kb3cpLm91dGVyV2lkdGgoKSA8IDk5Mikge1xuICAgICAgJCgnLnByb2R1Y3QtY2FyZCBbdG9nZ2xlSXRlbV9KU10nKS5maXJzdCgpLmFkZENsYXNzKCdvcGVuJyk7XG4gICAgICAkKCcucHJvZHVjdC1jYXJkIFt0b2dnbGVJdGVtX0pTXScpLmZpcnN0KCkuc2libGluZ3MoKS5yZW1vdmVBdHRyKCdzdHlsZScpO1xuICAgIH1cbiAgICByZXR1cm47XG4gIH1cblxuICAkKCdbdG9nZ2xlSXRlbV9KU10nKS5lYWNoKGZ1bmN0aW9uKCkge1xuICAgICQodGhpcykub24oJ2NsaWNrJywgZnVuY3Rpb24oKSB7XG4gICAgICBpZiAoJCh3aW5kb3cpLm91dGVyV2lkdGgoKSA8IDk5Mikge1xuICAgICAgICAkKHRoaXMpLnRvZ2dsZUNsYXNzKCdvcGVuJyk7XG4gICAgICAgICQodGhpcykuc2libGluZ3MoKS5zbGlkZVRvZ2dsZSgpO1xuICAgICAgfVxuICAgIH0pO1xuICB9KTtcbiAgc2xpZGVUb2dnbGVTZWN0aW9uKCk7XG5cblxuXG4gIC8vIERyb3Bkb3duXG4gIGZ1bmN0aW9uIHJpZ2h0RHJvcGRvd24oKSB7XG4gICAgJCgnLm1lbnVfX2l0ZW0uZHJvcGRvd24nKS5lYWNoKGZ1bmN0aW9uICgpIHtcbiAgICAgIHZhciAkc3VibWVudSA9ICQodGhpcykuZmluZCgnLnN1Ym1lbnUnKTtcbiAgICAgIHZhciAkb2Zmc2V0VG9MZWZ0ID0gJHN1Ym1lbnUub2Zmc2V0KCkubGVmdCArICRzdWJtZW51Lm91dGVyV2lkdGgoKTtcbiAgICAgIGlmICgkKHdpbmRvdykub3V0ZXJXaWR0aCgpID4gOTkyKSB7XG4gICAgICAgIGlmKCRvZmZzZXRUb0xlZnQgPiAkKHdpbmRvdykub3V0ZXJXaWR0aCgpKSB7XG4gICAgICAgICAgJHN1Ym1lbnUuY3NzKCd0cmFuc2Zvcm0nLCBgdHJhbnNsYXRlWCgtJHskb2Zmc2V0VG9MZWZ0IC0gJCh3aW5kb3cpLm91dGVyV2lkdGgoKSArIDMwfXB4KWApO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAkc3VibWVudS5yZW1vdmVBdHRyKCdzdHlsZScpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG4gIHJpZ2h0RHJvcGRvd24oKTtcblxuICBsZXQgd2luZG93V2lkdGggPSAkKHdpbmRvdykub3V0ZXJXaWR0aCgpO1xuICAkKHdpbmRvdykub24oJ3Jlc2l6ZScsIGZ1bmN0aW9uKCkge1xuICAgIGlmICgkKHdpbmRvdykub3V0ZXJXaWR0aCgpICE9PSB3aW5kb3dXaWR0aCkge1xuICAgICAgcmlnaHREcm9wZG93bigpO1xuICAgICAgc2xpZGVUb2dnbGVTZWN0aW9uKCk7XG4gICAgfVxuICB9KTtcblxuXG4gICAgJCgnLm1lbnVfX2l0ZW0uZHJvcGRvd24nKS5vbignbW91c2VlbnRlcicsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGlmICgkKHdpbmRvdykub3V0ZXJXaWR0aCgpID4gOTkyKSB7XG4gICAgICAgICQodGhpcykuYWRkQ2xhc3MoJ2lzLWFjdGl2ZScpO1xuICAgICAgICAkKHRoaXMpLmZpbmQoJy5zdWJtZW51JykuYWRkQ2xhc3MoJ2lzLWFjdGl2ZScpO1xuICAgICAgfVxuICAgIH0pO1xuICAgICQoJy5tZW51X19pdGVtLmRyb3Bkb3duJykub24oJ21vdXNlbGVhdmUnLCBmdW5jdGlvbiAoKSB7XG4gICAgICBpZiAoJCh3aW5kb3cpLm91dGVyV2lkdGgoKSA+IDk5Mikge1xuICAgICAgICAkKHRoaXMpLnJlbW92ZUNsYXNzKCdpcy1hY3RpdmUnKTtcbiAgICAgICAgJCh0aGlzKS5maW5kKCcuc3VibWVudScpLnJlbW92ZUNsYXNzKCdpcy1hY3RpdmUnKTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgICQoJy5tZW51X19kcm9wZG93bi1idG4nKS5lYWNoKGZ1bmN0aW9uKCkge1xuICAgICAgJCh0aGlzKS5vbignY2xpY2snLCBmdW5jdGlvbiAoZSkge1xuICAgICAgICBpZiAoJCh3aW5kb3cpLm91dGVyV2lkdGgoKSA8PSA5OTIpIHtcbiAgICAgICAgICB2YXIgJGlzT3BlbiA9ICQodGhpcykuY2xvc2VzdCgnLm1lbnVfX2l0ZW0uZHJvcGRvd24nKS5oYXNDbGFzcygnaXMtYWN0aXZlJyk7XG4gICAgICAgICAgLy8gJCgnLm1lbnVfX2Ryb3Bkb3duLWJ0bicpLmVhY2goZnVuY3Rpb24oKSB7XG4gICAgICAgICAgLy8gICAkKHRoaXMpLmNsb3Nlc3QoJy5tZW51X19pdGVtLmRyb3Bkb3duJykucmVtb3ZlQ2xhc3MoJ2lzLWFjdGl2ZScpO1xuICAgICAgICAgIC8vICAgJCh0aGlzKS5zaWJsaW5ncygnLnN1Ym1lbnUnKS5yZW1vdmVDbGFzcygnaXMtYWN0aXZlJyk7XG4gICAgICAgICAgLy8gICAkKHRoaXMpLnNpYmxpbmdzKCcuc3VibWVudScpLnNsaWRlVXAoKTtcbiAgICAgICAgICAvLyB9KTtcbiAgICAgICAgICBpZigkaXNPcGVuKSB7XG4gICAgICAgICAgICAvLyByZXR1cm47XG4gICAgICAgICAgICAkKHRoaXMpLmNsb3Nlc3QoJy5tZW51X19pdGVtLmRyb3Bkb3duJykucmVtb3ZlQ2xhc3MoJ2lzLWFjdGl2ZScpO1xuICAgICAgICAgICAgJCh0aGlzKS5zaWJsaW5ncygnLnN1Ym1lbnUnKS5yZW1vdmVDbGFzcygnaXMtYWN0aXZlJyk7XG4gICAgICAgICAgICAkKHRoaXMpLnNpYmxpbmdzKCcuc3VibWVudScpLnNsaWRlVXAoKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgJCh0aGlzKS5jbG9zZXN0KCcubWVudV9faXRlbS5kcm9wZG93bicpLmFkZENsYXNzKCdpcy1hY3RpdmUnKTtcbiAgICAgICAgICAgICQodGhpcykuc2libGluZ3MoJy5zdWJtZW51JykuYWRkQ2xhc3MoJ2lzLWFjdGl2ZScpO1xuICAgICAgICAgICAgJCh0aGlzKS5zaWJsaW5ncygnLnN1Ym1lbnUnKS5zbGlkZURvd24oKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfSk7XG4gIH0pO1xuXG4gICAgLy8gJChkb2N1bWVudCkub24oJ2NsaWNrJywgZnVuY3Rpb24gKGUpIHtcbiAgICAvLyAgIGlmICgkKHdpbmRvdykub3V0ZXJXaWR0aCgpIDw9IDk5Mikge1xuICAgIC8vICAgICBpZiAoJChlLnRhcmdldCkuY2xvc2VzdCgnLm1lbnVfX2l0ZW0uZHJvcGRvd24uaXMtYWN0aXZlJykubGVuZ3RoXG4gICAgLy8gICAgICYmICEkKGUudGFyZ2V0KS5jbG9zZXN0KCcubWVudV9fZHJvcGRvd24tYnRuLmlzLWFjdGl2ZScpLmxlbmd0aCkge1xuICAgIC8vICAgICAgICAgLy8g0LrQu9C40Log0LLQvdGD0YLRgNC4INGN0LvQtdC80LXQvdGC0LBcbiAgICAvLyAgICAgICAgIHJldHVybjtcbiAgICAvLyAgICAgfVxuICAgIC8vICAgICAvLyDQutC70LjQuiDRgdC90LDRgNGD0LbQuCDRjdC70LXQvNC10L3RgtCwXG4gICAgLy8gICAgICQoJy5tZW51X19pdGVtLmRyb3Bkb3duLmlzLWFjdGl2ZScpLnJlbW92ZUNsYXNzKCdpcy1hY3RpdmUnKTtcbiAgICAvLyAgICAgJCgnLnN1Ym1lbnUuaXMtYWN0aXZlJykuc2xpZGVVcCgpO1xuICAgIC8vICAgICAkKCcuc3VibWVudS5pcy1hY3RpdmUnKS5yZW1vdmVDbGFzcygnaXMtYWN0aXZlJyk7XG4gICAgLy8gICB9XG4gICAgLy8gfSk7XG5cblxuICAgICQoJ1tsb2FkTW9yZUJ0bl9KU10nKS5vbignY2xpY2snLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICQodGhpcykuY2xvc2VzdCgnW2xvYWRNb3JlQ29udGFpbmVyX0pTXScpLmFkZENsYXNzKCdtZC1hbGwtaXRlbXMtdmlzaWJsZScpO1xuICAgIH0pO1xuXG5cblxuXG5mdW5jdGlvbiBtZW51T3BlbigpIHtcbiAgICAkKCdbaGVhZGVyQnRuX0pTXScpLmFkZENsYXNzKCdhY3RpdmUnKTtcbiAgICAkKCdbaGVhZGVyQnRuX0pTXScpLmNsb3Nlc3QoJ2hlYWRlcicpLmZpbmQoJy5oZWFkZXJfX2JvdHRvbScpLmFkZENsYXNzKCdvcGVuJyk7XG4gICAgJCgnaHRtbCcpLmNzcygnb3ZlcmZsb3cnLCAnaGlkZGVuJyk7XG59XG5cbmZ1bmN0aW9uIG1lbnVDbG9zZSgpIHtcbiAgICAkKCdbaGVhZGVyQnRuX0pTXScpLnJlbW92ZUNsYXNzKCdhY3RpdmUnKTtcbiAgICAkKCdbaGVhZGVyQnRuX0pTXScpLmNsb3Nlc3QoJ2hlYWRlcicpLmZpbmQoJy5oZWFkZXJfX2JvdHRvbScpLnJlbW92ZUNsYXNzKCdvcGVuJyk7XG4gICAgJCgnaHRtbCcpLnJlbW92ZUF0dHIoJ3N0eWxlJyk7XG59XG5cblxuXG5cbiQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uICgpIHtcbiAgICAkKCdib2R5Jykub24oJ2NsaWNrJywgJ1twb3B1cE9wZW5dJywgZnVuY3Rpb24gKCkge1xuICAgICAgICBwb3B1cENsb3NlKCk7XG4gICAgICAgIHZhciAkZWxlbSA9ICQodGhpcyksXG4gICAgICAgICAgICB0YXJnZXQgPSAkZWxlbS5hdHRyKCdwb3B1cE9wZW4nKTtcblxuICAgICAgICBpZiAodGFyZ2V0ID09ICdwcm9tb3Rpb24tcG9wdXAnIHx8IHRhcmdldCA9PSAnc2VydmljZS1wb3B1cCcgfHwgdGFyZ2V0ID09ICdwcm9kdWN0LXBvcHVwJykge1xuICAgICAgICAgICAgdmFyIGlkID0gJGVsZW0uYXR0cignZGF0YS1oaWRkZW4taWQnKTtcblxuICAgICAgICAgICAgJCgnW3BvcHVwSUQ9XCInICsgdGFyZ2V0ICsgJ1wiXScpLmZpbmQoJ1toaWRkZW5WYWx1ZV9KU10nKS5hdHRyKCd2YWx1ZScsIGlkKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHBvcHVwT3Blbih0YXJnZXQpO1xuICAgIH0pO1xuXG5cbiAgICAvLyBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuICAgIC8vICAgcG9wdXBPcGVuKCdtYXJrZXRpbmctbmV3cycpO1xuICAgIC8vIH0sIDMwMDAwKTtcbiAgICAvLyBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuICAgIC8vICAgcG9wdXBPcGVuKCdhZnRlci1zaXh0eScpO1xuICAgIC8vIH0sIDYwMDAwKTtcblxuXG4gICAgJCgnYm9keScpLm9uKCdjbGljaycsICdbcG9wdXBDbG9zZV9KU10nLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHBvcHVwQ2xvc2UoKTtcbiAgICB9KTtcblxuICAgICQoJ2JvZHknKS5hcHBlbmQoJzxkaXYgY2xhc3M9XCJkb3dubG9hZC1wb3B1cC10cmlnZ2VyXCI+PC9kaXY+Jyk7XG5cbiAgICAkKCdib2R5IC5kb3dubG9hZC1wb3B1cC10cmlnZ2VyJykuaG92ZXIoZnVuY3Rpb24gKCkge1xuICAgICAgaWYgKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdkb3dubG9hZFBvcHVwU3RhdGUnKSA9PT0gJ3RydWUnKSB7XG4gICAgICAgIHBvcHVwT3BlbignZG93bmxvYWQtcG9wdXAnKTtcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2Rvd25sb2FkUG9wdXBTdGF0ZScsICdmYWxzZScpO1xuICAgICAgfTtcbiAgICB9KTtcbn0pO1xuXG5pZiAobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2Rvd25sb2FkUG9wdXBTdGF0ZScpID09PSBudWxsKSB7XG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2Rvd25sb2FkUG9wdXBTdGF0ZScsICd0cnVlJylcbn1cblxudmFyIGdhbGxlcnlUaHVtYnNTd2lwZXIgPSBuZXcgU3dpcGVyKCcucHJvZHVjdC1wb3B1cF9fZ2FsbGVyeS1zd2lwZXItdGh1bWJzJywge1xuICAvLyBsb29wOiB0cnVlLFxuICBkaXJlY3Rpb246ICd2ZXJ0aWNhbCcsXG4gIHNwYWNlQmV0d2VlbjogMTAsXG4gIHNsaWRlc1BlclZpZXc6IDQsXG4gIHdhdGNoU2xpZGVzUHJvZ3Jlc3M6IHRydWUsXG4gIHNjcm9sbGJhcjoge1xuICAgIGVsOiBcIi5zd2lwZXItc2Nyb2xsYmFyXCIsXG4gICAgaGlkZTogZmFsc2UsXG4gICAgZHJhZ2dhYmxlOiB0cnVlLFxuICB9LFxuICBicmVha3BvaW50czoge1xuICAgIDc2Nzoge1xuICAgICAgZGlyZWN0aW9uOiAnaG9yaXpvbnRhbCcsXG4gICAgfVxuICB9LFxuICBvbjoge1xuICAgIHJlc2l6ZTogZnVuY3Rpb24oKSB7XG4gICAgICB0aGlzLnVwZGF0ZSgpO1xuICAgIH1cbiAgfVxufSk7XG52YXIgZ2FsbGVyeVN3aXBlciA9IG5ldyBTd2lwZXIoJy5wcm9kdWN0LXBvcHVwX19nYWxsZXJ5LXN3aXBlci1sYXJnZScsIHtcbiAgLy8gbG9vcDogdHJ1ZSxcbiAgc3BhY2VCZXR3ZWVuOiAxMCxcbiAgdGh1bWJzOiB7XG4gICAgc3dpcGVyOiBnYWxsZXJ5VGh1bWJzU3dpcGVyLFxuICB9LFxufSk7XG5cblxudmFyIHBvcHVwQ2xvc2UgPSBmdW5jdGlvbiAoKSB7XG4gICAgJCgnLnBvcHVwLm9wZW4nKS5maW5kKCdpbnB1dCcpLnZhbCgnJyk7XG4gICAgJCgnLnBvcHVwLm9wZW4nKS5maW5kKCd0ZXh0YXJlYScpLnZhbCgnJyk7XG4gICAgJCgnLnBvcHVwLm9wZW4nKS5maW5kKCcuZm9ybS1maWxlJykuZWFjaChmdW5jdGlvbigpe1xuICAgICAgICB2YXIgdGV4dCA9ICQodGhpcykuYXR0cignZGF0YS10ZXh0Jyk7XG5cbiAgICAgICAgJCh0aGlzKS5maW5kKCdkaXYgcCcpLnRleHQodGV4dCk7XG4gICAgfSk7XG4gICAgJCgnLnBvcHVwLm9wZW4nKS5maW5kKCcuZm9ybS1zdGFycyBsYWJlbDpsYXN0LWNoaWxkJykudHJpZ2dlcignY2xpY2snKTtcbiAgICAkKCcucG9wdXAgLnZhbGlkYXRlX2Vycm9yJykuZWFjaChmdW5jdGlvbiAoKSB7XG4gICAgICAgICQodGhpcykucmVtb3ZlQ2xhc3MoJ3ZhbGlkYXRlX2Vycm9yJyk7XG4gICAgfSk7XG4gICAgJCgnaHRtbCcpLnJlbW92ZUF0dHIoJ3N0eWxlJyk7XG4gICAgJCgnLnBvcHVwLm9wZW4nKS5hZGRDbGFzcygnZmFkZScpO1xuICAgICQoJy5wb3B1cC5vcGVuJykucmVtb3ZlQ2xhc3MoJ29wZW4nKTtcbn07XG5cbnZhciBwb3B1cE9wZW4gPSBmdW5jdGlvbiAoZSkge1xuICAgIHBvcHVwQ2xvc2UoKTtcbiAgICB2YXIgdGFyZ2V0ID0gZTtcbiAgICB2YXIgd2lkdGggPSAkKCcucGFnZScpLndpZHRoKCk7XG5cbiAgICAkKCdodG1sJykuY3NzKCdvdmVyZmxvdycsICdoaWRkZW4nKTtcbiAgICAkKCdbcG9wdXBJRD1cIicgKyB0YXJnZXQgKyAnXCJdJykuYWRkQ2xhc3MoJ29wZW4nKTtcbiAgICAkKCdbcG9wdXBJRD1cIicgKyB0YXJnZXQgKyAnXCJdJykucmVtb3ZlQ2xhc3MoJ2ZhZGUnKTtcbiAgICBpZigkKCdbcG9wdXBJRD1cIicgKyB0YXJnZXQgKyAnXCJdJykuaGFzQ2xhc3MoJ3Byb2R1Y3QtcG9wdXAnKSkge1xuICAgICAgLy8gY2xlYXJUaW1lb3V0KGdhbGxlcnlUaHVtYnNTd2lwZXJVcGRhdGVUaW1lb3V0KTtcbiAgICAgIGdhbGxlcnlUaHVtYnNTd2lwZXIudXBkYXRlKCk7XG4gICAgICBpZigkKHdpbmRvdykub3V0ZXJXaWR0aCgpIDw9IDc2Nykge1xuICAgICAgICBzZXRUaW1lb3V0KCBmdW5jdGlvbigpIHtcbiAgICAgICAgICBnYWxsZXJ5VGh1bWJzU3dpcGVyLnVwZGF0ZSgpO1xuICAgICAgICB9LCAxMCk7XG4gICAgICB9XG4gICAgfVxufTtcblxuZnVuY3Rpb24gZml4ZWRIZWFkZXIoKSB7XG4gIHZhciBoZWlnaHQgPSBqUXVlcnkod2luZG93KS5zY3JvbGxUb3AoKTtcbiAgdmFyIGhlYWRlckhlaWdodCA9ICQoJy5oZWFkZXInKS5pbm5lckhlaWdodCgpO1xuXHRpZiAoIGhlaWdodCA+PSBoZWFkZXJIZWlnaHQpIHtcbiAgICBqUXVlcnkoJy5oZWFkZXInKS5hZGRDbGFzcygnZml4ZWQnKTtcbiAgICAvLyAkKCdib2R5JykuY3NzKCdwYWRkaW5nLXRvcCcsICQoJy5oZWFkZXInKS5pbm5lckhlaWdodCgpKTtcbiAgfSBlbHNlIHtcbiAgICBqUXVlcnkoJy5oZWFkZXInKS5yZW1vdmVDbGFzcygnZml4ZWQnKTtcbiAgICAvLyAkKCdib2R5JykuY3NzKCdwYWRkaW5nLXRvcCcsICcwJyk7XG4gIH1cbn1cblxuZml4ZWRIZWFkZXIoKTtcbmpRdWVyeSh3aW5kb3cpLnNjcm9sbChmdW5jdGlvbigkKSB7XG5cdGZpeGVkSGVhZGVyKCk7XG59KTtcbiQod2luZG93KS5vbigncmVzaXplJywgZnVuY3Rpb24oKSB7XG4gIGZpeGVkSGVhZGVyKCk7XG59KTtcblxuXG5cbiQod2luZG93KS5vbignc2Nyb2xsJywgZnVuY3Rpb24oKSB7XG4gIHZhciByYXRpbyA9ICQoZG9jdW1lbnQpLnNjcm9sbFRvcCgpIC8gKCgkKGRvY3VtZW50KS5oZWlnaHQoKSAtICQod2luZG93KS5oZWlnaHQoKSkgLyAxMDApO1xuICAkKCcuaGVhZGVyLXByb2dyZXNzJykud2lkdGgocmF0aW8gKyBcIiVcIik7XG59KTtcblxuJCh3aW5kb3cpLnNjcm9sbChmdW5jdGlvbiAoKSB7XG4gIHZhciBzY3JvbGwgPSAkKHdpbmRvdykuc2Nyb2xsVG9wKCk7XG4gIGlmIChzY3JvbGwgPj0gICQoZG9jdW1lbnQpLmhlaWdodCgpIC8gMykge1xuICAgICAgJCgnW3RvVG9wX0pTXScpLmFkZENsYXNzKCd2aXNpYmxlJyk7XG4gIH0gZWxzZSB7XG4gICAgICAkKCdbdG9Ub3BfSlNdJykucmVtb3ZlQ2xhc3MoJ3Zpc2libGUnKTtcbiAgfTtcblxuICAkKCdbb25TY3JvbGxEaXNwbGF5X0pTXScpLmVhY2goZnVuY3Rpb24gKCkge1xuICAgICAgdmFyIGVsID0gJCh0aGlzKTtcblxuICAgICAgaWYgKGNvbWUoZWwpKSB7XG4gICAgICAgICAgZWwuYWRkQ2xhc3MoJ3Zpc2libGUnKTtcbiAgICAgIH07XG4gIH0pO1xuXG59KTtcblxuJCgnLmhlYWRlcl9fc2VhcmNoLW9wZW4nKS5vbignY2xpY2snLCBmdW5jdGlvbihlKSB7XG4gIGUucHJldmVudERlZmF1bHQoKTtcbiAgJCh0aGlzKS5wYXJlbnRzKCcuc2VhcmNoLWZvcm0nKS50b2dnbGVDbGFzcygnb3BlbicpO1xufSk7XG4kKCcuaGVhZGVyX19zZWFyY2gtY2xvc2UtYnRuJykub24oJ2NsaWNrJywgZnVuY3Rpb24oZSkge1xuICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICQodGhpcykucGFyZW50cygnLnNlYXJjaC1mb3JtJykucmVtb3ZlQ2xhc3MoJ29wZW4nKTtcbiAgJCh0aGlzKS5wYXJlbnRzKCcuc2VhcmNoLWZvcm0nKS5maW5kKCdpbnB1dCcpLnZhbCgnJyk7XG59KTtcblxuXG4vLyAkKCdpbWcnKS5lYWNoKCBmdW5jdGlvbihlKSB7XG4vLyAgICQodGhpcykuYWRkQ2xhc3MoJ2xhenknKTtcbi8vIH0pO1xuLy8gbGV0IGxhenlMb2FkSW5zdGFuY2UgPSBuZXcgTGF6eUxvYWQoKTtcblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG4iXSwiZmlsZSI6ImluZGV4LmpzIn0=
