import { writable } from "svelte/store";

export let scroll = writable<number>(0);
export let height = writable<number>(0);
export let width = writable<number>(0);