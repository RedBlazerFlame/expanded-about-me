<script>
	import Scrollable from '$lib/Scrollable.svelte';
	import { lerp, normalize } from '$lib/math_utils';
	import { height } from './screen_info';
</script>

<Scrollable
	scrollFn={(scrollPos) => {
		let t = normalize(0, $height, scrollPos);

		return [0, 0];
	}}
>
    <canvas style="width: 100vw; height: 100vh; margin: 0px; padding: 0px; background-color: var(--background-shade-5);">
    </canvas>
</Scrollable>

<Scrollable
	scrollFn={(scrollPos) => {
		let t = normalize(0, $height, scrollPos);

		return [0, lerp(1, 0, t)];
	}}
>
	<p>Still immature and clumsy...</p>
</Scrollable>
