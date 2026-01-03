declare module "astro:actions" {
	type Actions = typeof import("/root/maw-workspace/soul-brews-web-core/src/actions/index.ts")["server"];

	export const actions: Actions;
}