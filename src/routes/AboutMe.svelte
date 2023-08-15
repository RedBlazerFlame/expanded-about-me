<script lang="ts">
	import { clamp, normalize } from '$lib/math_utils';
	import { height, scroll, width } from './screen_info';
	import Scrollable from '$lib/Scrollable.svelte';
	import WaveDivider from '$lib/WaveDivider.svelte';
	import { COLORS } from '$lib/colors';
	import pfp from '$lib/assets/coco-night.png';
	import Icon from '@iconify/svelte';
	import ButtonWithIcon from '$lib/ButtonWithIcon.svelte';

	let curOpacity: number;
	let t: number;
	$: t = normalize(5 * $height - 250, 6 * $height - 250, $scroll);
	$: curOpacity = (() => {
		if (t < 1 / 6) return 3 * t;
		// else if (t > 2 / 3) return 3 - 3 * t;
		else return 1;
	})();
</script>

<!-- Spacer -->
<Scrollable
	scrollFn={(scrollPos) => {
		let t = normalize(4 * $height, 5 * $height, scrollPos);

		return [0, -t];
	}}
>
	<div
		class="tight"
		style="background-color:var(--background-shade-1); min-height: 100vh; min-width: 100vw;"
	/>
</Scrollable>

<Scrollable
	scrollFn={(scrollPos) => {
		let t = normalize(5 * $height - $width / 2, 6 * $height - $width / 2, scrollPos);

		return [0, -t];
	}}
>
	<WaveDivider color={COLORS.BACKGROUND_SHADE_3} />
</Scrollable>

<!-- Content -->
<Scrollable
	scrollFn={(scrollPos) => {
		let t = normalize(5 * $height, 6 * $height, scrollPos);

		return [0, -t];
	}}
>
	<div
		class="tight"
		style="background-color:var(--background-shade-3); height: 170vh; min-width: 100vw; padding: 30px;"
	>
		<div class="container">
			<img
				src={pfp}
				class="icon"
				alt="my profile picture"
				style={`transform: scale(${clamp(0, 1, 1 - Math.pow(4 * Math.min(t, 0), 2))});`}
			/>
			<h1 class="header" style={`opacity: ${curOpacity};`}>About Me</h1>
			<p class="long_desc" style={`opacity: ${curOpacity};`}>
				Hi! I'm <b>Gabee De Vera</b>. In the internet, I am known as <b>ProtonDecay314</b>. I am
				interested in programming, photography, and Japanese music. I am also an active member of
				the Lantaka Youth Club and the Church!
			</p>
			<div class="socials">
				<ButtonWithIcon
                    onClick={(ev) => {
                        window.location.href = "https://discordapp.com/users/562625732988370957";
                    }}
					style={`background-color: var(--background-shade-1); transform: scale(${(() => {
						let adjusted = clamp(0, 7 / 6, t);
						if (adjusted < 1 / 3) return 3 * adjusted;
						// else if (adjusted > 5 / 6) return 3.5 - 3 * adjusted;
						else return 1;
					})()});`}
				>
					<Icon width="30" icon="bi:discord" slot="icon" />
					<p slot="text">Discord</p>
				</ButtonWithIcon>
				<ButtonWithIcon
                    onClick={(ev) => {
                        window.location.href = "https://github.com/RedBlazerFlame";
                    }}
					style={`background-color: var(--background-shade-1); transform: scale(${(() => {
						let adjusted = clamp(0, 7 / 6, t - 0.05);
						if (adjusted < 1 / 3) return 3 * adjusted;
						// else if (adjusted > 5 / 6) return 3.5 - 3 * adjusted;
						else return 1;
					})()});`}
				>
					<Icon width="30" icon="bi:github" slot="icon" />
					<p slot="text">Github</p>
				</ButtonWithIcon>
				<ButtonWithIcon
                    onClick={(ev) => {
                        window.location.href = "https://codeforces.com/profile/ProtonDecay314";
                    }}
					style={`background-color: var(--background-shade-1); transform: scale(${(() => {
						let adjusted = clamp(0, 7 / 6, t - 0.1);
						if (adjusted < 1 / 3) return 3 * adjusted;
						// else if (adjusted > 5 / 6) return 3.5 - 3 * adjusted;
						else return 1;
					})()});`}
				>
					<Icon width="30" icon="bi:code" slot="icon" />
					<p slot="text">Codeforces</p>
				</ButtonWithIcon>
				<ButtonWithIcon
					onClick={(ev) => {
						window.location.href = 'https://atcoder.jp/users/ProtonDecay314';
					}}
					style={`background-color: var(--background-shade-1); transform: scale(${(() => {
						let adjusted = clamp(0, 7 / 6, t - 0.15);
						if (adjusted < 1 / 3) return 3 * adjusted;
						// else if (adjusted > 5 / 6) return 3.5 - 3 * adjusted;
						else return 1;
					})()});`}
				>
					<Icon width="30" icon="bi:code" slot="icon" />
					<p slot="text">AtCoder</p>
				</ButtonWithIcon>
				<ButtonWithIcon
                    onClick={(ev) => {
                        window.location.href = "https://www.facebook.com/ProtonDecay314/";
                    }}
					style={`background-color: var(--background-shade-1); transform: scale(${(() => {
						let adjusted = clamp(0, 7 / 6, t - 0.2);
						if (adjusted < 1 / 3) return 3 * adjusted;
						// else if (adjusted > 5 / 6) return 3.5 - 3 * adjusted;
						else return 1;
					})()});`}
				>
					<Icon width="30" icon="bi:messenger" slot="icon" />
					<p slot="text">Messenger</p>
				</ButtonWithIcon>
				<ButtonWithIcon
                    onClick={(ev) => {
                        window.location.href = "https://open.spotify.com/user/8t1a4oz9vf56g3v6y8usaikmb";
                    }}
					style={`background-color: var(--background-shade-1); transform: scale(${(() => {
						let adjusted = clamp(0, 7 / 6, t - 0.25);
						if (adjusted < 1 / 3) return 3 * adjusted;
						// else if (adjusted > 1) return 3.5 - 3 * adjusted;
						else return 1;
					})()});`}
				>
					<Icon width="30" icon="bi:spotify" slot="icon" />
					<p slot="text">Spotify</p>
				</ButtonWithIcon>
			</div>
		</div>
	</div>
</Scrollable>

<style lang="scss">
	.container {
		display: grid;
		grid-template-columns: repeat(1fr);
		grid-template-rows: 2fr 1fr auto auto;
		grid-template-areas:
			'icon'
			'header'
			'long_desc'
			'socials'
			'spacer';
	}

	.icon {
		grid-area: icon;
		justify-self: center;
		align-self: center;

		padding: 0px;
		width: 20vw;
		border-radius: 50%;
	}

	.header {
		grid-area: header;
		justify-self: center;
		align-self: center;
	}

	.short_desc {
		grid-area: short_desc;
	}

	.long_desc {
		grid-area: long_desc;
	}

	.socials {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));

		align-items: center;
		justify-content: center;
	}

	p[slot='text'] {
		font-family: 'Bricolage Grotesque', sans-serif;
	}
</style>
