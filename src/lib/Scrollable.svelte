<script lang="ts">
    export let scrollFn: (t: number) => [number, number];
    let pos: [number, number] = [0, 0];

    let scroll: number;
    let innerHeight: number;
    let innerWidth: number;

    $: pos = scrollFn(scroll);
</script>

<svelte:window bind:scrollY={scroll} bind:innerHeight={innerHeight} bind:innerWidth={innerWidth}/>

<div style:transform={`translate3d(${pos[0] * innerWidth}px, ${pos[1] * innerHeight}px, 0)`}>
    <slot />
</div>

<style>
    div {
        position: fixed;
        padding: 0px;
        margin: 0px;
    }
</style>