<script lang="ts">
	import { page } from "$app/stores";
	import Scrollable from "$lib/Scrollable.svelte";
	import { lerp, normalize } from "$lib/math_utils";
	import AboutMe from "./AboutMe.svelte";
	import Header from "./Header.svelte";
	import MountainTransition from "./MountainTransition.svelte";
	import { height, scroll, width } from "./screen_info";
</script>

<svelte:window bind:scrollY={$scroll} bind:innerHeight={$height} bind:innerWidth={$width}/>

<Header></Header>
<MountainTransition></MountainTransition>
<AboutMe></AboutMe>

<style lang="scss">
    @import url('https://fonts.googleapis.com/css2?family=Space+Mono&display=swap');

    :global(html) {
        --background-shade-1: #031329;
        --background-shade-2: #071C38;
        --background-shade-3: #0B2547;
        --background-shade-4: #0F2E56;
        --background-shade-5: #123665;
        
        min-height: 100000px;
    }

    :global(body) {
        margin: 0px;
        padding: 0px;

        background-color: var(--background-shade-1);
    }

    :global(h1, h2, h3, h4, h5, h6) {
        font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        color: white;
    }

    :global(*) {
        font-family: 'Space Mono', monospace;
        box-sizing: border-box;
        color: white;
    }

    :global(.tight) {
        margin: 0px;
    }

    // :global(.content_box) {
    //     display: flex;
    //     flex-direction: row;
    // }
</style>