globalThis.process ??= {}; globalThis.process.env ??= {};
import { j as jsxRuntimeExports } from './footer_CHr-kCVz.mjs';
import { a as reactExports } from './_@astro-renderers_VrUcrLHV.mjs';
import { c as createLucideIcon } from './createLucideIcon_oJSg50Um.mjs';

/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */


const __iconNode$2 = [
  ["path", { d: "m5 12 7-7 7 7", key: "hav0vg" }],
  ["path", { d: "M12 19V5", key: "x0mq9r" }]
];
const ArrowUp = createLucideIcon("arrow-up", __iconNode$2);

/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */


const __iconNode$1 = [
  [
    "path",
    {
      d: "M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719",
      key: "1sd12s"
    }
  ]
];
const MessageCircle = createLucideIcon("message-circle", __iconNode$1);

/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */


const __iconNode = [
  [
    "path",
    {
      d: "M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384",
      key: "9njp5v"
    }
  ]
];
const Phone = createLucideIcon("phone", __iconNode);

function FloatingButtons() {
  const [showScrollTop, setShowScrollTop] = reactExports.useState(false);
  const [isOpen, setIsOpen] = reactExports.useState(false);
  reactExports.useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 500);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50 flex flex-col items-end gap-3", children: [
    showScrollTop && /* @__PURE__ */ jsxRuntimeExports.jsx(
      "button",
      {
        onClick: scrollToTop,
        className: "p-3 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 text-white hover:bg-white/20 transition-all animate-fade-in",
        "aria-label": "Scroll to top",
        children: /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowUp, { className: "w-5 h-5" })
      }
    ),
    isOpen && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-2 animate-slide-up", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "a",
        {
          href: "https://m.me/Clubsharephoto",
          target: "_blank",
          rel: "noopener noreferrer",
          onClick: () => {
            if (typeof window !== "undefined" && window.gtag) {
              window.gtag("event", "contact_click", {
                event_category: "engagement",
                event_label: "messenger",
                value: 1
              });
            }
          },
          className: "flex items-center gap-3 px-4 py-3 rounded-full bg-[#0084FF] text-white hover:scale-105 transition-transform",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(MessageCircle, { className: "w-5 h-5" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-medium", children: "Messenger" })
          ]
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "a",
        {
          href: "tel:0800416403",
          onClick: () => {
            if (typeof window !== "undefined" && window.gtag) {
              window.gtag("event", "contact_click", {
                event_category: "engagement",
                event_label: "phone_call",
                value: 1
              });
            }
          },
          className: "flex items-center gap-3 px-4 py-3 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 text-white hover:bg-white/20 transition-all",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Phone, { className: "w-5 h-5" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-medium", children: "Call" })
          ]
        }
      )
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "button",
      {
        onClick: () => setIsOpen(!isOpen),
        className: `p-4 rounded-full transition-all duration-300 ${isOpen ? "bg-white/20 border border-white/30 rotate-45" : "bg-[--color-primary] hover:scale-110 hover-glow"}`,
        style: { backgroundColor: isOpen ? void 0 : "#FF6B35" },
        "aria-label": "Contact options",
        children: /* @__PURE__ */ jsxRuntimeExports.jsx(MessageCircle, { className: "w-6 h-6 text-white" })
      }
    )
  ] });
}

export { FloatingButtons as F };
