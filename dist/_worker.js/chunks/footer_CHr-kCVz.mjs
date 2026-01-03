globalThis.process ??= {}; globalThis.process.env ??= {};
import { a as reactExports } from './_@astro-renderers_VrUcrLHV.mjs';
import { c as createLucideIcon } from './createLucideIcon_oJSg50Um.mjs';

/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */


const __iconNode$2 = [["path", { d: "m6 9 6 6 6-6", key: "qrunsl" }]];
const ChevronDown = createLucideIcon("chevron-down", __iconNode$2);

/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */


const __iconNode$1 = [
  ["path", { d: "M4 5h16", key: "1tepv9" }],
  ["path", { d: "M4 12h16", key: "1lakjw" }],
  ["path", { d: "M4 19h16", key: "1djgab" }]
];
const Menu = createLucideIcon("menu", __iconNode$1);

/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */


const __iconNode = [
  ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
  ["path", { d: "m6 6 12 12", key: "d8bk6v" }]
];
const X = createLucideIcon("x", __iconNode);

var jsxRuntime = {exports: {}};

var reactJsxRuntime_production = {};

/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var hasRequiredReactJsxRuntime_production;

function requireReactJsxRuntime_production () {
	if (hasRequiredReactJsxRuntime_production) return reactJsxRuntime_production;
	hasRequiredReactJsxRuntime_production = 1;
	var REACT_ELEMENT_TYPE = Symbol.for("react.transitional.element"),
	  REACT_FRAGMENT_TYPE = Symbol.for("react.fragment");
	function jsxProd(type, config, maybeKey) {
	  var key = null;
	  void 0 !== maybeKey && (key = "" + maybeKey);
	  void 0 !== config.key && (key = "" + config.key);
	  if ("key" in config) {
	    maybeKey = {};
	    for (var propName in config)
	      "key" !== propName && (maybeKey[propName] = config[propName]);
	  } else maybeKey = config;
	  config = maybeKey.ref;
	  return {
	    $$typeof: REACT_ELEMENT_TYPE,
	    type: type,
	    key: key,
	    ref: void 0 !== config ? config : null,
	    props: maybeKey
	  };
	}
	reactJsxRuntime_production.Fragment = REACT_FRAGMENT_TYPE;
	reactJsxRuntime_production.jsx = jsxProd;
	reactJsxRuntime_production.jsxs = jsxProd;
	return reactJsxRuntime_production;
}

var hasRequiredJsxRuntime;

function requireJsxRuntime () {
	if (hasRequiredJsxRuntime) return jsxRuntime.exports;
	hasRequiredJsxRuntime = 1;
	{
	  jsxRuntime.exports = requireReactJsxRuntime_production();
	}
	return jsxRuntime.exports;
}

var jsxRuntimeExports = requireJsxRuntime();

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = reactExports.useState(false);
  const [isScrolled, setIsScrolled] = reactExports.useState(false);
  const [isMoreOpen, setIsMoreOpen] = reactExports.useState(false);
  reactExports.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "header",
    {
      className: `fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? "bg-black/95 backdrop-blur-sm shadow-md py-3" : "bg-transparent py-6"}`,
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "container mx-auto px-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between items-center", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: "/", className: "text-2xl font-bold text-white", children: [
            "Clubsx",
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-orange-400", children: "AI" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("nav", { className: "hidden md:flex space-x-8", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "/", className: "relative text-white hover:text-orange-400 transition-colors", children: "Home" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "/about", className: "relative text-white hover:text-orange-400 transition-colors", children: "About" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "/gallery", className: "relative text-white hover:text-orange-400 transition-colors", children: "Gallery" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "/services", className: "relative text-white hover:text-orange-400 transition-colors", children: "Services" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "/blog", className: "relative text-white hover:text-orange-400 transition-colors", children: "Blog" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative group", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "button",
                {
                  className: "flex items-center text-white hover:text-orange-400 transition-colors",
                  onClick: () => setIsMoreOpen(!isMoreOpen),
                  children: [
                    "More ",
                    /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronDown, { className: "ml-1 h-4 w-4" })
                  ]
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "div",
                {
                  className: `absolute right-0 mt-2 w-48 bg-zinc-900/95 backdrop-blur-xl rounded-xl shadow-lg py-2 transition-all duration-200 border border-white/10 ${isMoreOpen ? "opacity-100 visible" : "opacity-0 invisible"} group-hover:opacity-100 group-hover:visible`,
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "a",
                      {
                        href: "/bartender",
                        className: "block px-4 py-2 text-zinc-300 hover:bg-zinc-800 hover:text-orange-400",
                        onClick: () => setIsMoreOpen(false),
                        children: "Bartender"
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "a",
                      {
                        href: "/ai-lab",
                        className: "block px-4 py-2 text-zinc-300 hover:bg-zinc-800 hover:text-orange-400",
                        onClick: () => setIsMoreOpen(false),
                        children: "AI Lab"
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "a",
                      {
                        href: "/command-center",
                        className: "block px-4 py-2 text-orange-400 hover:bg-zinc-800",
                        onClick: () => setIsMoreOpen(false),
                        children: "Command Center"
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "a",
                      {
                        href: "/free-tools",
                        className: "block px-4 py-2 text-zinc-300 hover:bg-zinc-800 hover:text-orange-400",
                        onClick: () => setIsMoreOpen(false),
                        children: "Free Tools"
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "a",
                      {
                        href: "/gear",
                        className: "block px-4 py-2 text-zinc-300 hover:bg-zinc-800 hover:text-orange-400",
                        onClick: () => setIsMoreOpen(false),
                        children: "Bo's Gear"
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "border-t border-white/10 my-2" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "a",
                      {
                        href: "https://www.facebook.com/Clubsharephoto",
                        target: "_blank",
                        rel: "noopener noreferrer",
                        className: "flex items-center gap-2 px-4 py-2 text-zinc-300 hover:bg-zinc-800 hover:text-orange-400",
                        onClick: () => setIsMoreOpen(false),
                        children: "📘 Facebook"
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "a",
                      {
                        href: "https://instagram.com/clubsbybo",
                        target: "_blank",
                        rel: "noopener noreferrer",
                        className: "flex items-center gap-2 px-4 py-2 text-zinc-300 hover:bg-zinc-800 hover:text-orange-400",
                        onClick: () => setIsMoreOpen(false),
                        children: "📷 Instagram"
                      }
                    )
                  ]
                }
              )
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              className: "md:hidden text-white",
              onClick: () => setIsMenuOpen(!isMenuOpen),
              "aria-label": isMenuOpen ? "Close menu" : "Open menu",
              children: isMenuOpen ? /* @__PURE__ */ jsxRuntimeExports.jsx(X, { size: 24 }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Menu, { size: 24 })
            }
          )
        ] }) }),
        isMenuOpen && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "md:hidden absolute top-full left-0 right-0 bg-zinc-900/95 backdrop-blur-xl shadow-lg rounded-b-3xl border-t border-white/10", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("nav", { className: "flex flex-col py-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "/", className: "px-4 py-3 text-white hover:bg-zinc-800", onClick: () => setIsMenuOpen(false), children: "Home" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "/about", className: "px-4 py-3 text-white hover:bg-zinc-800", onClick: () => setIsMenuOpen(false), children: "About" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "/gallery", className: "px-4 py-3 text-white hover:bg-zinc-800", onClick: () => setIsMenuOpen(false), children: "Gallery" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "/services", className: "px-4 py-3 text-white hover:bg-zinc-800", onClick: () => setIsMenuOpen(false), children: "Services" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "/blog", className: "px-4 py-3 text-white hover:bg-zinc-800", onClick: () => setIsMenuOpen(false), children: "Blog" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "border-t border-white/10 my-2" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "px-4 py-2 text-zinc-500 text-sm", children: "More" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "/bartender", className: "px-4 py-3 text-white hover:bg-zinc-800", onClick: () => setIsMenuOpen(false), children: "Bartender" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "/ai-lab", className: "px-4 py-3 text-white hover:bg-zinc-800", onClick: () => setIsMenuOpen(false), children: "AI Lab" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "/command-center", className: "px-4 py-3 text-orange-400 hover:bg-zinc-800", onClick: () => setIsMenuOpen(false), children: "Command Center" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "/free-tools", className: "px-4 py-3 text-white hover:bg-zinc-800", onClick: () => setIsMenuOpen(false), children: "Free Tools" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "/gear", className: "px-4 py-3 text-white hover:bg-zinc-800", onClick: () => setIsMenuOpen(false), children: "Bo's Gear" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "border-t border-white/10 my-2" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "https://www.facebook.com/Clubsharephoto", target: "_blank", rel: "noopener noreferrer", className: "px-4 py-3 text-white hover:bg-zinc-800 flex items-center gap-2", onClick: () => setIsMenuOpen(false), children: "📘 Facebook" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "https://instagram.com/clubsbybo", target: "_blank", rel: "noopener noreferrer", className: "px-4 py-3 text-white hover:bg-zinc-800 flex items-center gap-2", onClick: () => setIsMenuOpen(false), children: "📷 Instagram" })
        ] }) })
      ]
    }
  );
}

function Footer() {
  const currentYear = (/* @__PURE__ */ new Date()).getFullYear();
  return /* @__PURE__ */ jsxRuntimeExports.jsx("footer", { className: "bg-zinc-950 text-white py-12 border-t border-zinc-800", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container mx-auto px-4", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-8", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h3", { className: "text-xl font-bold mb-4", children: [
          "Clubsx",
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-orange-400", children: "AI" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-zinc-400 mb-6", children: "Premium portrait photography for bold, creative individuals." }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex space-x-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "https://instagram.com/clubsbybo", target: "_blank", rel: "noopener noreferrer", className: "text-zinc-400 hover:text-white transition-colors", children: "Instagram" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "https://facebook.com/Clubsharephoto", target: "_blank", rel: "noopener noreferrer", className: "text-zinc-400 hover:text-white transition-colors", children: "Facebook" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "https://tiktok.com/@clubsbybo", target: "_blank", rel: "noopener noreferrer", className: "text-zinc-400 hover:text-white transition-colors", children: "TikTok" })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-lg font-bold mb-4", children: "Quick Links" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "space-y-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "/about", className: "text-zinc-400 hover:text-white transition-colors", children: "About" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "/gallery", className: "text-zinc-400 hover:text-white transition-colors", children: "Gallery" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "/services", className: "text-zinc-400 hover:text-white transition-colors", children: "Services" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "/blog", className: "text-zinc-400 hover:text-white transition-colors", children: "Blog" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "/contact", className: "text-zinc-400 hover:text-white transition-colors", children: "Contact" }) })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-lg font-bold mb-4", children: "Contact" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "space-y-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-center text-zinc-400", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "mr-2", children: "Email:" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "mailto:barboxar.khunbo@gmail.com", className: "hover:text-white transition-colors", children: "barboxar.khunbo@gmail.com" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-center text-zinc-400", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "mr-2", children: "Phone:" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "tel:0800416403", className: "hover:text-white transition-colors", children: "080-041-6403" })
          ] })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "border-t border-zinc-800 mt-8 pt-8 text-center text-zinc-500", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { children: [
        "© ",
        currentYear,
        " ClubsxAI. All rights reserved."
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm mt-2", children: "Design & Technology by Clubs Tech" })
    ] })
  ] }) });
}

export { Footer as F, Navbar as N, X, jsxRuntimeExports as j };
