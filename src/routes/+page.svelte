<script lang="ts">
	import { page } from "$app/stores";
	import Scrollable from "$lib/Scrollable.svelte";
	import { lerp, normalize } from "$lib/math_utils";
	import FrontPage from "./FrontPage.svelte";
	import { height, scroll, width } from "./screen_info";
</script>

<svelte:window bind:scrollY={$scroll} bind:innerHeight={$height} bind:innerWidth={$width}/>

<FrontPage></FrontPage>

<style lang="scss">
    :global(html) {
        --background-shade-1: #031329;
        --background-shade-2: #071C38;
        --background-shade-3: #0B2547;
        --background-shade-4: #0F2E56;
        --background-shade-5: #123665;
        
        min-height: 2000px;
    }

    :global(body) {
        margin: 0px;
        padding: 0px;
    }
</style>