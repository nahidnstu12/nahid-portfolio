// Polyfill localStorage for Bun/Node.js SSR environment
// Bun provides a localStorage object but it's not a proper Storage implementation
if (typeof window === 'undefined') {
	const storage: Storage = {
		getItem: () => null,
		setItem: () => { },
		removeItem: () => { },
		clear: () => { },
		get length() { return 0; },
		key: () => null,
	};

	// Replace Bun's broken localStorage with proper implementation
	if (typeof global !== 'undefined') {
		(global as any).localStorage = storage;
	}
	// Also handle Bun's global scope
	if (typeof globalThis !== 'undefined') {
		(globalThis as any).localStorage = storage;
	}
}
