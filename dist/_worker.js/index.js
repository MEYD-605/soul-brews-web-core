globalThis.process ??= {}; globalThis.process.env ??= {};
import { r as renderers } from './chunks/_@astro-renderers_VrUcrLHV.mjs';
import { c as createExports, s as serverEntrypointModule } from './chunks/_@astrojs-ssr-adapter_ByTzcCi8.mjs';
import { manifest } from './manifest_Uq-U-PFy.mjs';

const serverIslandMap = new Map();;

const _page0 = () => import('./pages/_image.astro.mjs');
const _page1 = () => import('./pages/404.astro.mjs');
const _page2 = () => import('./pages/about.astro.mjs');
const _page3 = () => import('./pages/admin/blog/scheduler.astro.mjs');
const _page4 = () => import('./pages/admin/bookings.astro.mjs');
const _page5 = () => import('./pages/admin/leads.astro.mjs');
const _page6 = () => import('./pages/admin.astro.mjs');
const _page7 = () => import('./pages/ai-lab.astro.mjs');
const _page8 = () => import('./pages/api/leads.astro.mjs');
const _page9 = () => import('./pages/api/og.astro.mjs');
const _page10 = () => import('./pages/bartender.astro.mjs');
const _page11 = () => import('./pages/blog.astro.mjs');
const _page12 = () => import('./pages/blog/_---slug_.astro.mjs');
const _page13 = () => import('./pages/command-center.astro.mjs');
const _page14 = () => import('./pages/contact.astro.mjs');
const _page15 = () => import('./pages/free-tools.astro.mjs');
const _page16 = () => import('./pages/gallery.astro.mjs');
const _page17 = () => import('./pages/gear.astro.mjs');
const _page18 = () => import('./pages/services/premium-portrait-bangkok.astro.mjs');
const _page19 = () => import('./pages/services.astro.mjs');
const _page20 = () => import('./pages/index.astro.mjs');
const pageMap = new Map([
    ["node_modules/@astrojs/cloudflare/dist/entrypoints/image-endpoint.js", _page0],
    ["src/pages/404.astro", _page1],
    ["src/pages/about.astro", _page2],
    ["src/pages/admin/blog/scheduler.astro", _page3],
    ["src/pages/admin/bookings.astro", _page4],
    ["src/pages/admin/leads.astro", _page5],
    ["src/pages/admin/index.astro", _page6],
    ["src/pages/ai-lab.astro", _page7],
    ["src/pages/api/leads.ts", _page8],
    ["src/pages/api/og.ts", _page9],
    ["src/pages/bartender.astro", _page10],
    ["src/pages/blog/index.astro", _page11],
    ["src/pages/blog/[...slug].astro", _page12],
    ["src/pages/command-center.astro", _page13],
    ["src/pages/contact.astro", _page14],
    ["src/pages/free-tools.astro", _page15],
    ["src/pages/gallery.astro", _page16],
    ["src/pages/gear.astro", _page17],
    ["src/pages/services/premium-portrait-bangkok.astro", _page18],
    ["src/pages/services.astro", _page19],
    ["src/pages/index.astro", _page20]
]);

const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    actions: () => import('./noop-entrypoint.mjs'),
    middleware: () => import('./_astro-internal_middleware.mjs')
});
const _args = undefined;
const _exports = createExports(_manifest);
const __astrojsSsrVirtualEntry = _exports.default;
const _start = 'start';
if (Object.prototype.hasOwnProperty.call(serverEntrypointModule, _start)) {
	serverEntrypointModule[_start](_manifest, _args);
}

export { __astrojsSsrVirtualEntry as default, pageMap };
