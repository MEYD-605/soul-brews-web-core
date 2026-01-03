globalThis.process ??= {}; globalThis.process.env ??= {};
import { d as defineMiddleware, s as sequence } from './chunks/index_DDOFLyhA.mjs';
import { l as logEvent } from './chunks/db_BuLW2--I.mjs';
import './chunks/astro-designed-error-pages_BSd5Ysk4.mjs';
import './chunks/astro/server_DU12jbRN.mjs';

const onRequest$2 = defineMiddleware(async (context, next) => {
  const { url, locals } = context;
  let clientAddress = "";
  try {
    clientAddress = context.clientAddress;
  } catch (e) {
  }
  if (url.pathname.startsWith("/_assets/") || url.pathname.includes(".")) {
    return next();
  }
  const startTime = Date.now();
  const campaignAction = url.searchParams.get("utm_campaign") || (url.pathname.includes("/services/") ? "SEO_SERVICE_PAGE" : null);
  if (url.pathname.startsWith("/admin") || url.pathname.startsWith("/command-center") || url.pathname.startsWith("/api/admin")) {
    context.request.headers.get("Authorization") || url.searchParams.get("token") || context.cookies.get("admin_token")?.value;
    locals.runtime?.env?.ADMIN_SECRET || "CLUBSXAI_DEV_PROTECT";
  }
  const response = await next();
  const db = locals.runtime?.env?.DB;
  if (db) {
    const duration = Date.now() - startTime;
    const logDetails = `Path: ${url.pathname} | Latency: ${duration}ms | UserAgent: ${context.request.headers.get("user-agent")} | Campaign: ${campaignAction || "Organic"}`;
    const waitUntil = locals.runtime?.waitUntil;
    const task = logEvent(db, campaignAction === "SEO_SERVICE_PAGE" ? "SEO_HIT" : "PAGE_VISIT", "info", logDetails, clientAddress);
    if (waitUntil) {
      waitUntil(task);
    }
  }
  response.headers.set("X-ClubsxAI-Version", "2026.Oracle.Elite");
  response.headers.set("X-Frame-Options", "DENY");
  response.headers.set("X-Content-Type-Options", "nosniff");
  return response;
});

const onRequest$1 = (context, next) => {
  if (context.isPrerendered) {
    context.locals.runtime ??= {
      env: process.env
    };
  }
  return next();
};

const onRequest = sequence(
	onRequest$1,
	onRequest$2
	
);

export { onRequest };
