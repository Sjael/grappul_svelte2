<script>
    import items from "$lib/itemdetails";
    import prices from "$lib/itemprices";
	import { attr } from "svelte/internal";
	export let thing = 's_bumbas';
	let isHovered = false;
	let x;
	let y;
	
	function mouseOver(event) {
		isHovered = true;
		x = event.pageX + 5;
		y = event.pageY + 5;
	}
	function mouseMove(event) {
		x = event.pageX + 5;
		y = event.pageY + 5;
	}
	function mouseLeave() {
		isHovered = false;
	}
</script>

<div id="root"
	on:mouseover={mouseOver}
  on:mouseleave={mouseLeave}
	on:mousemove={mouseMove}>
	<slot />
</div>

{#if isHovered && items[thing]}
	<div style="top: {y}px; left: {x}px;" class="tooltip">
        <h3>{items[thing].name}</h3>
        {#if prices[thing]}
            <p class="price">{prices[thing]}</p>
        {/if}
        {#if items[thing].details}
            {#each Object.entries(items[thing].details) as [attr, num]}
            <p>+{num} <span style="color:#888">{attr}</span></p>
            {/each}
        {/if}
    </div>
{/if}

<style>
    #root{
        display:contents;
    }
	.tooltip {
		background: #222226;
		padding: 14px;
		position: absolute;
        transform:translate(-10%, -20%);
	}
    .tooltip >*{
        margin:0;
    }
    .tooltip > *:not(:last-child){
        margin-bottom:5px;
    }
    .price{
        font-size:0.6rem;
        font-weight:bold;
        color:var(--maximum-yellow-red);
    }
</style>