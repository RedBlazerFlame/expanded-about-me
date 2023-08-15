<script lang="ts">
	import { clamp, normalize } from '$lib/math_utils';
	import { height, scroll, width } from './screen_info';
	import Scrollable from '$lib/Scrollable.svelte';
	import Icon from '@iconify/svelte';
	import Button from '$lib/Button.svelte';
	// let curOpacity: number;
	// let t: number;
	// $: t = normalize(7 * $height - 250, 8 * $height - 250, $scroll);
	// $: curOpacity = (() => {
	// 	if (t < 1 / 6) return 3 * t;
	// 	// else if (t > 2 / 3) return 3 - 3 * t;
	// 	else return 1;
	// })();
</script>

<Scrollable
	scrollFn={(scrollPos) => {
		let t = normalize(7 * $height - 2, 8 * $height - 2, scrollPos);

		return [0, -t];
	}}
>
	<div
		class="tight"
		style="background-color:var(--background-shade-4); height: calc(500vh - 8px); min-width: 100vw; padding: 30px;"
	>
		<Scrollable
			scrollFn={(scrollPos) => [0, 0]}
			positioningType="relative"
			styleFn={(scrollPos) => {
				let t = normalize(7 * $height - 350, 8 * $height - 350, scrollPos);
				return `opacity: ${clamp(0, 1, 3 * t)};`;
			}}
		>
			<div class="container">
				<h1>Skills and Hobbies</h1>
				<p>
					Most of the time, you could find me <b>programming</b>. I spend some of my free time in
					<b>competitive programming contests</b>. I also work on <b>software projects</b>.
				</p>
				<div class="card programming_card">
                    <h2>Programming</h2>
					<div class="programming_language_list">
						<Icon width="60" icon="mdi:language-html5" />
						<Icon width="60" icon="mdi:language-css3" />
						<Icon width="60" icon="mdi:language-javascript" />
						<Icon width="60" icon="mdi:language-python" />
						<Icon width="60" icon="mdi:nodejs" />
						<Icon width="60" icon="mdi:language-cpp" />
						<Icon width="60" icon="mdi:language-typescript" />
						<Icon width="60" icon="mdi:react" />
						<Icon width="60" icon="mdi:language-java" />
                        <Icon width="60" icon="material-symbols:flutter" />
						<Icon width="60" icon="simple-icons:svelte" />
					</div>
                    <p>
                        I started my programming journey when I was in grade 3.
                        I learned hopscotch, which was a drag-and-drop based programming language (similar to scratch).
                        In grades 4-6, I learned HTML, CSS, and JavaScript and made a few websites.
                        Most of my projects during this time were HTML5 canvas projects. <br><br>

                        At around grade 7-8, I learned Python and Node.JS.
                        I made my first multiplayer game (based off of "would you rather") during this time. <br><br>
                        
                        In grade 8, I created my first Neural Network in JavaScript. At the time, I didn't know about
                        automatic differentiation, so I hardcoded the formulas for the derivative of a layer with respect to the next layer. <br><br>

                        I also began working on generative models (Variational Auto-Encoders, Generative Adversarial Networks) during this time.
                        I made an AI that generates anime faces. <br><br>

                        In grade 9, I started my journey in <b>competitive programming</b>.
                        I joined the NOI.PH 2022 eliminations and got 10th place.
                        I got until the Finals that year, where I was eliminated at 18th place. <br><br>

                        I joined a lot of contests in Codeforces. In the summer between grades 9 and 10, I became a specialist. <br><br>

                        In grade 10, I learned C++ in-depth and started using this in competitive programming.
                        This time around, I made it until the in-house round, where I got 5th place.
                        I was very close to making it to the Philippine IOI team. <br><br>

                        Aside from competitive programming, I also learned Java in school. I created a chess game using JavaFX. I also learned React and Next.js in my free time.<br><br>

                        In the summer between grades 10-11, I did my internship at Achieve Without Borders, Inc. I learned Odoo and Flutter in that time. <br><br>

                        At the end of summer of 2023, I started writing this expanded about me. This was the first time I used Svelte. <br><br>
                    </p>
                    <Button onClick={(ev) => {alert("The page is still in progress")}} style="background-color:var(--background-shade-4);align-self: flex-end;">
                        <p slot="text">My Projects &UpperRightArrow;</p>
                    </Button>
				</div>
			</div>
		</Scrollable>
	</div>
</Scrollable>

<style>
	.container {
		display: flex;
		flex-direction: column;
		align-items: center;
		width: 100%;
	}

	.card {
		margin: 20px 40px;
		padding: 20px;

		border: 0px solid transparent;

		box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.3), 0px 2px 20px rgba(0, 0, 0, 0.5);

		border-radius: 10px;
		background-color: var(--background-shade-1);
	}

    .programming_card {
        display: flex;
        flex-direction: column;
        /* justify-content: center; */
        align-items: center;
    }

	.programming_language_list {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        flex-wrap: wrap;
    }
</style>
