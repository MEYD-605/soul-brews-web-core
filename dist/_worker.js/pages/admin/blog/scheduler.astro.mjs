globalThis.process ??= {}; globalThis.process.env ??= {};
import { c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead, b as addAttribute } from '../../../chunks/astro/server_DU12jbRN.mjs';
import { g as getCollection } from '../../../chunks/_astro_content_DGs__zLs.mjs';
import { $ as $$BaseLayout } from '../../../chunks/createLucideIcon_oJSg50Um.mjs';
import { N as Navbar, F as Footer } from '../../../chunks/footer_CHr-kCVz.mjs';
export { r as renderers } from '../../../chunks/_@astro-renderers_VrUcrLHV.mjs';

const prerender = false;
const $$Scheduler = createComponent(async ($$result, $$props, $$slots) => {
  const allPosts = await getCollection("blog");
  const sortedPosts = allPosts.sort((a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf());
  const statusColors = {
    "published": "bg-green-500 text-white",
    "scheduled": "bg-blue-500 text-white",
    "draft": "bg-zinc-600 text-zinc-300"
  };
  const now = /* @__PURE__ */ new Date();
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "Blog Scheduler | ClubsxAI", "description": "Manage your content calendar and scheduling." }, { "default": async ($$result2) => renderTemplate` ${renderComponent($$result2, "Navbar", Navbar, { "client:load": true, "client:component-hydration": "load", "client:component-path": "/root/maw-workspace/clubs-xno1/src/components/navbar", "client:component-export": "default" })} ${maybeRenderHead()}<main class="min-h-screen pt-24 bg-black text-white p-6"> <div class="container mx-auto"> <header class="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-12"> <div> <nav class="flex items-center gap-2 text-sm text-zinc-500 mb-2"> <a href="/admin" class="hover:text-white transition-colors">Dashboard</a> <span>/</span> <span class="text-white/40">Blog Scheduler</span> </nav> <h1 class="text-4xl font-bold bg-gradient-to-r from-white to-white/40 bg-clip-text text-transparent italic">
Content Calendar 📅
</h1> </div> <div class="flex gap-3"> <button class="px-6 py-2 rounded-xl bg-[#FF6B35] text-white text-sm hover:brightness-110 transition-all font-bold">
+ New Masterpiece
</button> </div> </header> <div class="grid grid-cols-1 gap-6"> ${sortedPosts.map((post) => {
    const isUpcoming = post.data.pubDate > now;
    const status = post.data.status || (isUpcoming ? "scheduled" : "published");
    return renderTemplate`<div class="glass-card p-6 rounded-3xl border border-white/10 flex flex-col md:flex-row gap-6 items-start md:items-center hover:border-[#FF6B35]/20 transition-all group"> <div class="w-24 h-24 rounded-2xl overflow-hidden bg-white/5 shrink-0"> ${post.data.image ? renderTemplate`<img${addAttribute(post.data.image, "src")} alt="" class="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500">` : renderTemplate`<div class="w-full h-full flex items-center justify-center text-2xl opacity-20">📝</div>`} </div> <div class="flex-grow"> <div class="flex items-center gap-3 mb-2"> <span${addAttribute(`px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-widest ${statusColors[status]}`, "class")}> ${status} </span> <span class="text-xs text-zinc-500 font-mono">
Release: ${post.data.pubDate.toLocaleDateString("th-TH")} </span> </div> <h3 class="text-xl font-bold group-hover:text-[#FF6B35] transition-colors">${post.data.title}</h3> <p class="text-sm text-zinc-500 line-clamp-1 mt-1">${post.data.description}</p> </div> <div class="flex gap-2 shrink-0 self-end md:self-center"> <button class="p-3 rounded-xl bg-white/5 hover:bg-white/10 transition-colors border border-white/5"> <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z"></path><path d="m15 5 4 4"></path></svg> </button> <button class="p-3 rounded-xl bg-white/5 hover:bg-white/10 transition-colors border border-white/5"> <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="18" height="18" x="3" y="4" rx="2" ry="2"></rect><line x1="16" x2="16" y1="2" y2="6"></line><line x1="8" x2="8" y1="2" y2="6"></line><line x1="3" x2="21" y1="10" y2="10"></line><path d="m9 16 2 2 4-4"></path></svg> </button> </div> </div>`;
  })} </div> <div class="mt-12 p-8 rounded-3xl border border-dashed border-white/10 bg-white/[0.02] text-center"> <p class="text-zinc-500 mb-4 italic">"Content is King, but Scheduling is the Empire."</p> <div class="flex justify-center gap-4"> <div class="flex flex-col items-center"> <span class="text-2xl font-bold">${sortedPosts.filter((p) => p.data.status === "scheduled").length}</span> <span class="text-[10px] uppercase tracking-widest text-zinc-600">Scheduled</span> </div> <div class="w-px h-8 bg-white/10 mt-2"></div> <div class="flex flex-col items-center"> <span class="text-2xl font-bold">${sortedPosts.filter((p) => p.data.status === "published").length}</span> <span class="text-[10px] uppercase tracking-widest text-zinc-600">Published</span> </div> </div> </div> </div> </main> ${renderComponent($$result2, "Footer", Footer, { "client:load": true, "client:component-hydration": "load", "client:component-path": "/root/maw-workspace/clubs-xno1/src/components/footer", "client:component-export": "default" })} ` })}`;
}, "/root/maw-workspace/clubs-xno1/src/pages/admin/blog/scheduler.astro", void 0);

const $$file = "/root/maw-workspace/clubs-xno1/src/pages/admin/blog/scheduler.astro";
const $$url = "/admin/blog/scheduler";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Scheduler,
  file: $$file,
  prerender,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
