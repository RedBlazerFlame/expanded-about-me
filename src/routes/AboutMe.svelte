<script>
	import { normalize } from "$lib/math_utils";
	import { height, width } from "./screen_info";
	import Scrollable from "$lib/Scrollable.svelte";

</script>

<!-- Spacer -->
<Scrollable
    scrollFn={(scrollPos) => {
        let t = normalize(4 * $height, 5 * $height, scrollPos);

        return [0, -t];
    }}
>
<div class="tight" style="background-color:var(--background-shade-1); min-height: 100vh; min-width: 100vw;"></div>
</Scrollable>

<!-- Content -->
<Scrollable
    scrollFn={(scrollPos) => {
        let t = normalize(5 * $height, 6 * $height, scrollPos);

        return [0, -t];
    }}
>
<div class="tight" style="background-color:var(--background-shade-3); min-height: 200vh; min-width: 100vw; padding: 10px;">
    <h1>
        About Me
    </h1>
</div>
</Scrollable>