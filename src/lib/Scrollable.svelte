<script lang="ts">
	import { scroll, width, height } from "../routes/screen_info";

    export let scrollFn: (t: number) => [number, number];
    export let styleFn: (t: number) => string = (t: number) => "";
    let pos: [number, number] = [0, 0];
    export let positioningType: "fixed" | "absolute" | "relative" = "fixed";
    let style: string = "";

    $: pos = scrollFn($scroll);
    $: style = styleFn($scroll);
</script>

<div style:transform={`translate3d(${pos[0] * $width}px, ${pos[1] * $height}px, 0)`} style={`${style}position: ${positioningType};`}>
    <slot />
</div>

<style>
    div {
        padding: 0px;
        margin: 0px;

        display: flex;
        flex-direction: row;
    }
</style>