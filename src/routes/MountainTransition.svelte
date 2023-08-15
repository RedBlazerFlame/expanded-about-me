<script>
	import { normalize } from "$lib/math_utils";
	import { height, width } from "./screen_info";
    import mountain1 from "$lib/assets/mountain-layer-1.svg";
    import mountain2 from "$lib/assets/mountain-layer-2.svg";
    import mountain3 from "$lib/assets/mountain-layer-3.svg";
    import mountain4 from "$lib/assets/mountain-layer-4.svg";
	import Scrollable from "$lib/Scrollable.svelte";

</script>
<Scrollable
    scrollFn={(scrollPos) => {
        let t = normalize(4 * $height - $width * 2 / 3, 5 * $height - $width * 2 / 3, scrollPos);

        return [0, -(t) * 0.35];
    }}
>
<img src={mountain1} style={`min-width: ${$width}px;`} alt="">
</Scrollable>
<Scrollable
    scrollFn={(scrollPos) => {
        let t = normalize(4 * $height - $width * 2 / 3, 5 * $height - $width * 2 / 3, scrollPos);

        return [0, -(t) * 0.55];
    }}
>
<img src={mountain2} style={`min-width: ${$width}px;`} alt="">
</Scrollable>

<Scrollable
    scrollFn={(scrollPos) => {
        let t = normalize(4 * $height - $width * 2 / 3, 5 * $height - $width * 2 / 3, scrollPos);

        return [0, -(t) * 0.75];
    }}
>
<img src={mountain3} style={`min-width: ${$width}px;`} alt="">
</Scrollable>

<Scrollable
    scrollFn={(scrollPos) => {
        let t = normalize(4 * $height - $width * 2 / 3, 5 * $height - $width * 2 / 3, scrollPos);

        return [0, -t];
    }}
>
<img src={mountain4} style={`min-width: ${$width}px; height: ${$width * 2 / 3}px; padding: 0px;`} alt="">
</Scrollable>