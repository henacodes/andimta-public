import * as server from '../entries/pages/bible/_page.server.js';

export const index = 3;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/bible/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/bible/+page.server.js";
export const imports = ["_app/immutable/nodes/3.5534bc0d.js","_app/immutable/chunks/scheduler.2e68f25b.js","_app/immutable/chunks/index.69a7026e.js","_app/immutable/chunks/LoadingModal.a30b1b70.js","_app/immutable/chunks/singletons.796f510f.js","_app/immutable/chunks/stores.d65d13f8.js","_app/immutable/chunks/navigation.26cb777a.js"];
export const stylesheets = [];
export const fonts = [];
