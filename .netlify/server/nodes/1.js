

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.18d1b151.js","_app/immutable/chunks/scheduler.2e68f25b.js","_app/immutable/chunks/index.69a7026e.js","_app/immutable/chunks/stores.d65d13f8.js","_app/immutable/chunks/singletons.796f510f.js"];
export const stylesheets = [];
export const fonts = [];
