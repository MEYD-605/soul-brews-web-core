globalThis.process ??= {}; globalThis.process.env ??= {};
import { d as createAstro, c as createComponent, a as renderTemplate, u as unescapeHTML, b as addAttribute, k as renderScript, l as renderSlot, n as renderHead, r as renderComponent } from './astro/server_DU12jbRN.mjs';
/* empty css                         */
import { a as reactExports } from './_@astro-renderers_VrUcrLHV.mjs';

const SITE_DOMAIN = "https://clubsxai.com";
const OG_IMAGE_ENDPOINT = "/api/og";
function toAbsoluteUrl(maybePath) {
  if (/^https?:\/\//i.test(maybePath)) return maybePath;
  return new URL(maybePath.startsWith("/") ? maybePath : `/${maybePath}`, SITE_DOMAIN).toString();
}
function getOGImageUrl(titleOrParams, description, imagePath) {
  const params = typeof titleOrParams === "string" ? { title: titleOrParams, description: description ?? "", imagePath } : titleOrParams;
  const url = new URL(OG_IMAGE_ENDPOINT, SITE_DOMAIN);
  url.searchParams.set("title", params.title);
  url.searchParams.set("description", params.description);
  if (params.imagePath) url.searchParams.set("image", toAbsoluteUrl(params.imagePath));
  return url.toString();
}

var __freeze$1 = Object.freeze;
var __defProp$1 = Object.defineProperty;
var __template$1 = (cooked, raw) => __freeze$1(__defProp$1(cooked, "raw", { value: __freeze$1(cooked.slice()) }));
var _a$1;
const $$Astro$2 = createAstro("https://clubsxai.com");
const $$EnhancedSchema = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$EnhancedSchema;
  const {
    title = "ClubsxAI",
    description = "A Space Where Creativity Meets Precision",
    image = "/images/bo_snake_portrait_hero.jpg",
    articleDate
  } = Astro2.props;
  const siteUrl = "https://clubsxai.com";
  const canonicalUrl = new URL(Astro2.url.pathname, siteUrl);
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "PhotographyBusiness",
        "@id": `${siteUrl}/#localBusiness`,
        "name": "ClubsxAI",
        "url": siteUrl,
        "logo": {
          "@type": "ImageObject",
          "@id": `${siteUrl}/#logo`,
          "inLanguage": "th-TH",
          "url": `${siteUrl}/images/bo_red_neon_portrait.png`,
          "width": 512,
          "height": 512,
          "caption": "ClubsxAI Studio"
        },
        "image": {
          "@type": "ImageObject",
          "@id": `${siteUrl}/#image`,
          "url": `${siteUrl}/images/bo_snake_portrait_hero.jpg`,
          "caption": "ClubsxAI Premium Studio"
        },
        "sameAs": [
          "https://instagram.com/clubsbybo",
          "https://facebook.com/Clubsharephoto",
          "https://tiktok.com/@clubsbybo"
        ],
        "priceRange": "\u0E3F\u0E3F",
        "telephone": "0800416403",
        "email": "barboxar.khunbo@gmail.com",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Bangkok",
          "addressLocality": "Bangkok",
          "addressRegion": "BM",
          "postalCode": "10310",
          "addressCountry": "TH"
        },
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": 13.7563,
          "longitude": 100.5018
        },
        "openingHoursSpecification": [
          {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
            "opens": "09:00",
            "closes": "22:00"
          }
        ],
        "hasOfferCatalog": {
          "@type": "OfferCatalog",
          "name": "Photography Services",
          "itemListElement": [
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Portrait Photography",
                "description": "Premium personal branding and portrait session."
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Wedding & Event",
                "description": "Professional coverage for weddings and corporate events."
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "AI Studio Lab",
                "description": "Futuristic AI-enhanced creative imaging."
              }
            }
          ]
        },
        "description": "ClubsxAI - \u0E2A\u0E15\u0E39\u0E14\u0E34\u0E42\u0E2D\u0E16\u0E48\u0E32\u0E22\u0E20\u0E32\u0E1E\u0E23\u0E30\u0E14\u0E31\u0E1A\u0E1E\u0E23\u0E35\u0E40\u0E21\u0E35\u0E22\u0E21\u0E43\u0E19\u0E01\u0E23\u0E38\u0E07\u0E40\u0E17\u0E1E\u0E2F \u0E41\u0E25\u0E30 AI Creative Lab. \u0E23\u0E31\u0E1A\u0E16\u0E48\u0E32\u0E22\u0E20\u0E32\u0E1E Portrait, Event \u0E41\u0E25\u0E30\u0E07\u0E32\u0E19 Commercial \u0E14\u0E49\u0E27\u0E22\u0E2A\u0E44\u0E15\u0E25\u0E4C Neo-Brutalism x Soft Elegance."
      },
      {
        "@type": "WebSite",
        "@id": `${siteUrl}/#website`,
        "url": siteUrl,
        "name": "ClubsxAI",
        "description": description,
        "publisher": { "@id": `${siteUrl}/#organization` },
        "inLanguage": "th-TH"
      },
      {
        "@type": "Person",
        "@id": `${siteUrl}/#person`,
        "name": "Bo",
        "image": {
          "@type": "ImageObject",
          "@id": `${siteUrl}/#personImage`,
          "url": `${siteUrl}/images/bo_snake_portrait_hero.jpg`,
          "caption": "Bo"
        },
        "jobTitle": "Founder",
        "worksFor": { "@id": `${siteUrl}/#organization` }
      }
    ]
  };
  if (articleDate) {
    schema["@graph"].push({
      "@type": "BlogPosting",
      "@id": `${canonicalUrl}/#article`,
      "headline": title,
      "datePublished": articleDate,
      "dateModified": articleDate,
      "author": { "@id": `${siteUrl}/#person` },
      "publisher": { "@id": `${siteUrl}/#organization` },
      "description": description,
      "mainEntityOfPage": { "@id": canonicalUrl },
      "image": {
        "@type": "ImageObject",
        "url": image.startsWith("http") ? image : `${siteUrl}${image}`
      }
    });
  }
  return renderTemplate(_a$1 || (_a$1 = __template$1(['<script type="application/ld+json">', "<\/script>"])), unescapeHTML(JSON.stringify(schema)));
}, "/root/maw-workspace/clubs-xno1/src/components/EnhancedSchema.astro", void 0);

const $$Astro$1 = createAstro("https://clubsxai.com");
const $$ClientRouter = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$ClientRouter;
  const { fallback = "animate" } = Astro2.props;
  return renderTemplate`<meta name="astro-view-transitions-enabled" content="true"><meta name="astro-view-transitions-fallback"${addAttribute(fallback, "content")}>${renderScript($$result, "/root/maw-workspace/clubs-xno1/node_modules/astro/components/ClientRouter.astro?astro&type=script&index=0&lang.ts")}`;
}, "/root/maw-workspace/clubs-xno1/node_modules/astro/components/ClientRouter.astro", void 0);

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Astro = createAstro("https://clubsxai.com");
const $$BaseLayout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$BaseLayout;
  const {
    title = "ClubsxAI | Premium Portrait Photography by Bo",
    description = "ClubsxAI | Premium Portrait Photography by Bo. We don't shoot photos, we shoot feelings.",
    keywords = "\u0E0A\u0E48\u0E32\u0E07\u0E20\u0E32\u0E1E, Portrait, Premium, Bangkok, Photographer, ClubsxAI, ClubsxAI",
    image = "/images/bo_snake_portrait_hero.jpg"
  } = Astro2.props;
  const ogImageUrl = getOGImageUrl(title, description, image);
  return renderTemplate(_a || (_a = __template(['<html lang="th" class="dark"> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><title>', '</title><meta name="description"', '><meta name="keywords"', '><link rel="canonical"', '><!-- Open Graph / Facebook --><meta property="og:type" content="website"><meta property="og:url"', '><meta property="og:title"', '><meta property="og:description"', '><meta property="og:image"', '><!-- Twitter --><meta property="twitter:card" content="summary_large_image"><meta property="twitter:url"', '><meta property="twitter:title"', '><meta property="twitter:description"', '><meta property="twitter:image"', '><!-- Fonts --><link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Sarabun:wght@300;400;500;700&display=swap" rel="stylesheet"><!-- Favicon --><link rel="icon" type="image/svg+xml" href="/favicon.svg"><!-- Schema.org -->', "<!-- Astro View Transitions (ClientRouter) -->", `<!-- Google Analytics (GA4) --><script async src="https://www.googletagmanager.com/gtag/js?id=G-67TZPJY9LF"><\/script><script>
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'G-67TZPJY9LF');
    <\/script>`, '</head> <body class="bg-black text-white font-sans antialiased selection:bg-white/10"> ', " </body></html>"])), title, addAttribute(description, "content"), addAttribute(keywords, "content"), addAttribute(Astro2.url, "href"), addAttribute(Astro2.url, "content"), addAttribute(title, "content"), addAttribute(description, "content"), addAttribute(ogImageUrl, "content"), addAttribute(Astro2.url, "content"), addAttribute(title, "content"), addAttribute(description, "content"), addAttribute(ogImageUrl, "content"), renderComponent($$result, "EnhancedSchema", $$EnhancedSchema, { "title": title, "description": description, "image": image }), renderComponent($$result, "ClientRouter", $$ClientRouter, {}), renderHead(), renderSlot($$result, $$slots["default"]));
}, "/root/maw-workspace/clubs-xno1/src/layouts/BaseLayout.astro", void 0);

/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const toKebabCase = (string) => string.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase();
const toCamelCase = (string) => string.replace(
  /^([A-Z])|[\s-_]+(\w)/g,
  (match, p1, p2) => p2 ? p2.toUpperCase() : p1.toLowerCase()
);
const toPascalCase = (string) => {
  const camelCase = toCamelCase(string);
  return camelCase.charAt(0).toUpperCase() + camelCase.slice(1);
};
const mergeClasses = (...classes) => classes.filter((className, index, array) => {
  return Boolean(className) && className.trim() !== "" && array.indexOf(className) === index;
}).join(" ").trim();
const hasA11yProp = (props) => {
  for (const prop in props) {
    if (prop.startsWith("aria-") || prop === "role" || prop === "title") {
      return true;
    }
  }
};

/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

var defaultAttributes = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round"
};

/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */


const Icon = reactExports.forwardRef(
  ({
    color = "currentColor",
    size = 24,
    strokeWidth = 2,
    absoluteStrokeWidth,
    className = "",
    children,
    iconNode,
    ...rest
  }, ref) => reactExports.createElement(
    "svg",
    {
      ref,
      ...defaultAttributes,
      width: size,
      height: size,
      stroke: color,
      strokeWidth: absoluteStrokeWidth ? Number(strokeWidth) * 24 / Number(size) : strokeWidth,
      className: mergeClasses("lucide", className),
      ...!children && !hasA11yProp(rest) && { "aria-hidden": "true" },
      ...rest
    },
    [
      ...iconNode.map(([tag, attrs]) => reactExports.createElement(tag, attrs)),
      ...Array.isArray(children) ? children : [children]
    ]
  )
);

/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */


const createLucideIcon = (iconName, iconNode) => {
  const Component = reactExports.forwardRef(
    ({ className, ...props }, ref) => reactExports.createElement(Icon, {
      ref,
      iconNode,
      className: mergeClasses(
        `lucide-${toKebabCase(toPascalCase(iconName))}`,
        `lucide-${iconName}`,
        className
      ),
      ...props
    })
  );
  Component.displayName = toPascalCase(iconName);
  return Component;
};

export { $$BaseLayout as $, createLucideIcon as c };
