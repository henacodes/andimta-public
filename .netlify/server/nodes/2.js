

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/2.ebb41130.js","_app/immutable/chunks/scheduler.2e68f25b.js","_app/immutable/chunks/index.69a7026e.js","_app/immutable/chunks/navigation.26cb777a.js","_app/immutable/chunks/singletons.796f510f.js"];
export const stylesheets = [];
export const fonts = [];
