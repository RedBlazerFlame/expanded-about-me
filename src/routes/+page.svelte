<script lang="ts">
	import Scrollable from "$lib/Scrollable.svelte";
	import { lerp, normalize } from "$lib/math_utils";

	let scroll: number;
    let height: number;
    let width: number;
</script>

<svelte:window bind:scrollY={scroll} bind:innerHeight={height} bind:innerWidth={width}/>

<Scrollable scrollFn={(scrollPos) => {
    let t = normalize(0, height, scrollPos);

    return [0, lerp(1, 0, t)];
}}>
    <p>Still immature and clumsy...</p>
</Scrollable>

<Scrollable scrollFn={(scrollPos) => {
    let t = normalize(20, height * 2 + 20, scrollPos);

    return [0, lerp(1, 0, t)];
}}>
    <p>Fragile and Lacking</p>
</Scrollable>

<style lang="scss">
    :global(html) {
        min-height: 2000px;
    }
</style>