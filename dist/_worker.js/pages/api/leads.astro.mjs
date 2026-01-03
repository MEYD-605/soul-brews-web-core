globalThis.process ??= {}; globalThis.process.env ??= {};
import { c as captureLead, l as logEvent } from '../../chunks/db_BuLW2--I.mjs';
export { r as renderers } from '../../chunks/_@astro-renderers_VrUcrLHV.mjs';

const ORACLE_URL = "http://localhost:8088/generate";
async function askOracle(prompt, model = "thinker") {
  try {
    const response = await fetch(ORACLE_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        model,
        prompt,
        max_tokens: 1024,
        temperature: 0.7
      })
    });
    if (!response.ok) throw new Error(`Oracle Error: ${response.statusText}`);
    const data = await response.json();
    return data.text;
  } catch (error) {
    console.error("Failed to connect to Oracle:", error);
    return "Oracle is currently in deep meditation. Please try again later. 🔱";
  }
}
async function scoreLead(message) {
  const prompt = `System: You are the Oracle. Analyze this photography lead message.
    Score it from 0-100 based on conversion probability. 
    Provide a 1-sentence insight in Thai.
    Format your response as JSON: {"score": number, "insight": "string"}
    
    Message: "${message}"`;
  try {
    const raw = await askOracle(prompt);
    const jsonMatch = raw.match(/\{.*\}/s);
    if (jsonMatch) {
      return JSON.parse(jsonMatch[0]);
    }
    return { score: 50, insight: "AI วิเคราะห์เบื้องต้น: มีความสนใจทั่วไปครับบอส" };
  } catch {
    return { score: 0, insight: "ไม่สามารถประเมินได้ในขณะนี้" };
  }
}

const prerender = false;
const POST = async ({ request, locals, clientAddress }) => {
  try {
    const data = await request.formData();
    const honey = data.get("_honey")?.toString();
    if (honey) {
      return new Response(JSON.stringify({ success: true, message: "Processed (spam)" }), {
        status: 200,
        headers: { "Content-Type": "application/json" }
      });
    }
    const name = data.get("name")?.toString();
    const email = data.get("email")?.toString();
    const phone = data.get("phone")?.toString();
    const service = data.get("service")?.toString();
    const message = data.get("message")?.toString();
    const source = data.get("source")?.toString() || "web_form";
    if (!name || !email) {
      return new Response(JSON.stringify({ error: "Missing required fields" }), {
        status: 400,
        headers: { "Content-Type": "application/json" }
      });
    }
    const db = locals.runtime?.env?.DB;
    if (!db) {
      console.warn("D1 Database binding 'DB' not found. Check wrangler.toml.");
      return new Response(JSON.stringify({
        success: true,
        message: "Provisionally recorded (Mock mode)"
      }), {
        status: 200,
        headers: { "Content-Type": "application/json" }
      });
    }
    let priority_score = 0;
    let oracle_insight = "Pending analysis...";
    try {
      const evaluation = await scoreLead(message || "No message provided.");
      priority_score = evaluation.score;
      oracle_insight = evaluation.insight;
    } catch (e) {
      console.warn("Oracle scoring failed, proceeding without score:", e);
    }
    const result = await captureLead(db, {
      name,
      email,
      phone,
      service_type: service,
      message,
      source,
      client_ip: clientAddress,
      priority_score,
      oracle_insight
    });
    await logEvent(db, "NEW_LEAD", "info", `Source: ${source} | AI Score: ${priority_score}`, clientAddress);
    return new Response(JSON.stringify({
      success: true,
      id: result.id
    }), {
      status: 200,
      headers: { "Content-Type": "application/json" }
    });
  } catch (error) {
    console.error("API Error in leads.ts:", error);
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
      headers: { "Content-Type": "application/json" }
    });
  }
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    POST,
    prerender
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
