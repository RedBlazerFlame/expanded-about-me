<script lang="ts">
	import Scrollable from '$lib/Scrollable.svelte';
	import { clamp, lerp, normalize } from '$lib/math_utils';
	import { onMount } from 'svelte';
	import { height, width } from './screen_info';
    import stars from "$lib/assets/stars.svg";
	import { COLORS } from '$lib/colors';
</script>

<Scrollable
	scrollFn={(scrollPos) => {
		let t = normalize(0, $height, scrollPos);
        console.log(t);

		if(t < 1) return [0, 0];
        else return [0, -0.25 * (t - 1)];
	}}
>
    <img src={stars} style={`background-color: var(--background-shade-5); width: 100vw; height: 100vh;`} alt="">
</Scrollable>

<Scrollable
	scrollFn={(scrollPos) => {
		let t = normalize(0, $height, scrollPos);

		if(t <= 1) return [0, 0];
        else return [0, -(t - 1)];
	}}
    styleFn={(scrollPos) => {
        let base = "width: 100vw; height: 100vh; display: flex; flex-direction: column; align-items: center; justify-content: center; color: white;";
        let t = normalize(0, $height, scrollPos);
        if(t <= 1) return base;
        return `${base}opacity: ${clamp(0, 1, 2 * (1.5 - t))};`}
    }
>
	<h1>ProtonDecay314</h1>
    <div style="text-align: center;">
        <p>Scroll Down<br><span class="down_arrow">&DownArrow;</span></p>
    </div>
</Scrollable>

<style>
    h1 {
        font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    }

    @keyframes hover_arrow {
        to {
            top: 5px;
        }
    }

    .down_arrow {
        position: relative;
        top: -5px;

        animation: hover_arrow 1s ease-in-out 0s infinite alternate-reverse;
    }
</style>