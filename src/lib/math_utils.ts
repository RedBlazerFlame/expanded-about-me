export const normalizeFn = (n1: number, n2: number) => (t: number) => (t - n1) / (n2 - n1);
export const normalize = (n1: number, n2: number, t: number) => (t - n1) / (n2 - n1);
export const lerp = (n1: number, n2: number, t: number) => t * n2 + (1 - t) * n1;
export const clamp = (n1: number, n2: number, t: number) => Math.max(n1, Math.min(n2, t));