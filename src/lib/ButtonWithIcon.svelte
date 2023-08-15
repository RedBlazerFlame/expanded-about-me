<script lang="ts">
	import type { MouseEventHandler } from "svelte/elements";

    export let style: string;
    export let onClick: MouseEventHandler<HTMLButtonElement> = (ev) => {};
</script>

<button on:click={onClick} style={`width: auto; font-family: 'Bricolage Grotesque', sans-serif; border-radius: 10px;${style}`} class="card">
    <div style="padding: 0px; margin: 0px;" class="icon">
        <slot name="icon"></slot>
    </div>
    <div class="text"><slot name="text"></slot></div>
</button>

<style>
    .card {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;

        margin: 10px;
        padding: 5px;

        border: 0px solid transparent;
        
        box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.3), 0px 1px 8px rgba(0, 0, 0, 0.5);
    }

    .card:hover {
        box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.3), 0px 2px 20px rgba(0, 0, 0, 0.5);
    }

    .card:active {
        box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.3), 0px 1px 8px rgba(0, 0, 0, 0.5);
    }

    .icon {
        grid-area: icon;
        justify-self: center;
        align-self: center;
    }

    .text {
        grid-area: text;
        align-self: center;
        margin-left: 20px;
        font-family: 'Bricolage Grotesque', sans-serif;
        font-size: larger;
    }
</style>