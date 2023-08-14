<script lang="ts">
	import { scroll, width, height } from "../routes/screen_info";

    export let scrollFn: (t: number) => [number, number];
    let pos: [number, number] = [0, 0];

    $: pos = scrollFn($scroll);
</script>

<div style:transform={`translate3d(${pos[0] * $width}px, ${pos[1] * $height}px, 0)`}>
    <slot />
</div>

<style>
    div {
        position: fixed;
        padding: 0px;
        margin: 0px;
    }
</style>