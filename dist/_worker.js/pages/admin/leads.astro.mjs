globalThis.process ??= {}; globalThis.process.env ??= {};
import { d as createAstro, c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead, b as addAttribute } from '../../chunks/astro/server_DU12jbRN.mjs';
import { $ as $$BaseLayout } from '../../chunks/createLucideIcon_oJSg50Um.mjs';
import { N as Navbar, F as Footer } from '../../chunks/footer_CHr-kCVz.mjs';
import { a as getAllLeads } from '../../chunks/db_BuLW2--I.mjs';
export { r as renderers } from '../../chunks/_@astro-renderers_VrUcrLHV.mjs';

const $$Astro = createAstro("https://clubsxai.com");
const prerender = false;
const $$Leads = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Leads;
  const db = Astro2.locals.runtime?.env?.DB;
  let leads = [];
  if (db) {
    leads = await getAllLeads(db);
  } else {
    leads = [
      { id: 1, name: "Jessica Smith", email: "jessica@example.com", phone: "+66 89 123 4567", service_type: "Premium Portrait", created_at: "2026-01-03 15:30", status: "new", priority_score: 85, oracle_insight: "High conversion likely: Specific date mentioned." },
      { id: 2, name: "Michael Chen", email: "chen@tech.com", phone: "+66 81 222 3333", service_type: "Commercial Product", created_at: "2026-01-03 14:15", status: "contacted", priority_score: 45, oracle_insight: "Informational inquiry about equipment." },
      { id: 3, name: "Somsak P.", email: "somsak@bangkok.th", phone: "+66 85 999 8888", service_type: "Event Coverage", created_at: "2026-01-03 10:00", status: "new", priority_score: 92, oracle_insight: "Urgent: Wedding event in 2 weeks!" }
    ];
  }
  const statusColors = {
    "new": "bg-[#FF6B35] text-black",
    "contacted": "bg-blue-500 text-white",
    "booked": "bg-purple-500 text-white",
    "completed": "bg-green-500 text-white",
    "cancelled": "bg-zinc-700 text-zinc-400"
  };
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "Leads Management | ClubsxAI", "description": "Manage your business leads and inquiries." }, { "default": async ($$result2) => renderTemplate` ${renderComponent($$result2, "Navbar", Navbar, { "client:load": true, "client:component-hydration": "load", "client:component-path": "/root/maw-workspace/clubs-xno1/src/components/navbar", "client:component-export": "default" })} ${maybeRenderHead()}<main class="min-h-screen pt-24 bg-black text-white p-6"> <div class="container mx-auto"> <header class="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-12"> <div> <nav class="flex items-center gap-2 text-sm text-zinc-500 mb-2"> <a href="/admin" class="hover:text-white transition-colors">Dashboard</a> <span>/</span> <span class="text-white/40">Leads</span> </nav> <h1 class="text-4xl font-bold bg-gradient-to-r from-white to-white/40 bg-clip-text text-transparent italic">
Leads Management 📈
</h1> </div> <div class="flex gap-3"> <button class="px-6 py-2 rounded-xl bg-white/5 border border-white/10 text-sm hover:bg-white/10 transition-all font-medium">Filter</button> <button class="px-6 py-2 rounded-xl bg-white text-black text-sm hover:bg-zinc-200 transition-all font-bold">Export CSV</button> </div> </header> <!-- Leads Table Container --> <div class="glass-card rounded-3xl border border-white/10 overflow-hidden"> <div class="overflow-x-auto"> <table class="w-full text-left"> <thead> <tr class="text-zinc-500 text-xs uppercase tracking-widest bg-white/5 border-b border-white/5"> <th class="px-6 py-5">Full Name</th> <th class="px-6 py-5">Contact Info</th> <th class="px-6 py-5">Interest</th> <th class="px-6 py-5">Oracle AI Priority</th> <th class="px-6 py-5">Date Received</th> <th class="px-6 py-5 text-center">Status</th> <th class="px-6 py-5"></th> </tr> </thead> <tbody class="divide-y divide-white/5"> ${leads.map((lead) => renderTemplate`<tr class="hover:bg-white/[0.02] transition-colors group"> <td class="px-6 py-6"> <div class="font-bold text-base">${lead.name}</div> <div class="text-xs text-[#FF6B35] font-medium tracking-tight">VIP CLIENT</div> </td> <td class="px-6 py-6 font-mono text-xs"> <div class="text-zinc-300">${lead.email}</div> <div class="text-zinc-500 mt-1">${lead.phone}</div> </td> <td class="px-6 py-6"> <span class="text-zinc-400 text-sm">${lead.service_type}</span> </td> <td class="px-6 py-6"> <div class="flex flex-col"> <div class="flex items-center gap-2 mb-1"> <div class="h-1.5 w-16 bg-white/5 rounded-full overflow-hidden"> <div${addAttribute(`h-full ${lead.priority_score > 80 ? "bg-[#FF6B35]" : lead.priority_score > 50 ? "bg-blue-400" : "bg-zinc-600"}`, "class")}${addAttribute(`width: ${lead.priority_score}%`, "style")}></div> </div> <span${addAttribute(`text-xs font-bold font-mono ${lead.priority_score > 80 ? "text-[#FF6B35]" : "text-white"}`, "class")}>${lead.priority_score}%</span> </div> <div class="text-[10px] text-zinc-500 max-w-[180px] leading-tight italic line-clamp-2">
"${lead.oracle_insight || "Analysis pending..."}"
</div> </div> </td> <td class="px-6 py-6 font-mono text-xs text-zinc-500"> ${new Date(lead.created_at).toLocaleString("th-TH")} </td> <td class="px-6 py-6 text-center"> <span${addAttribute(`px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider ${statusColors[lead.status.toLowerCase()]}`, "class")}> ${lead.status} </span> </td> <td class="px-6 py-6 text-right"> <button class="text-white/40 hover:text-white transition-colors"> <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="1"></circle><circle cx="19" cy="12" r="1"></circle><circle cx="5" cy="12" r="1"></circle></svg> </button> </td> </tr>`)} </tbody> </table> </div> </div> <!-- Pagination Placeholder --> <div class="mt-8 flex justify-center items-center gap-4 text-sm"> <button class="p-2 rounded-lg border border-white/10 text-white/40 hover:text-white disabled:opacity-30" disabled>Previous</button> <span class="text-zinc-500">Page <span class="text-white">1</span> of 12</span> <button class="p-2 rounded-lg border border-white/10 hover:bg-white/5 transition-all">Next</button> </div> </div> </main> ${renderComponent($$result2, "Footer", Footer, { "client:load": true, "client:component-hydration": "load", "client:component-path": "/root/maw-workspace/clubs-xno1/src/components/footer", "client:component-export": "default" })} ` })}`;
}, "/root/maw-workspace/clubs-xno1/src/pages/admin/leads.astro", void 0);

const $$file = "/root/maw-workspace/clubs-xno1/src/pages/admin/leads.astro";
const $$url = "/admin/leads";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Leads,
  file: $$file,
  prerender,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
