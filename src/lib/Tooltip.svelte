<script>
    import items from "$lib/itemdetails";
    import prices from "$lib/itemprices";
	import { attr } from "svelte/internal";
    import { fade, fly } from 'svelte/transition';
	export let thing = 's_bumbas';
	let isHovered = false;
	let x;
	let y;
	
	function mouseOver(event) {
		isHovered = true;
		//x = event.pageX + 5;
		//y = event.pageY + 5;
	}
	function mouseMove(event) {
		x = event.pageX + 5;
		y = event.pageY + 5;
	}
	function mouseLeave() {
		isHovered = false;
	}
</script>

<div id="root">
    <div
	on:mouseover={mouseOver}
    on:mouseleave={mouseLeave}>
	    <slot />
    </div>

{#if isHovered && items[thing]}
	<div style="top: {y}px; left: {x}px;" class="tooltip" in:fade="{{duration: 100}}" out:fade="{{duration: 100}}">
        <div class="tt-head">
            <h3 class="name">{items[thing].name}</h3>

            {#if prices[thing] && prices[thing] > 0}
                <p class="price">{prices[thing]}</p>
            {/if}
        </div>
        {#if items[thing].details}
            {#each Object.entries(items[thing].details) as [attr, num]}
            <p class="stat">{num} <span>{attr}</span></p>
            {/each}
        {/if}
        {#if items[thing].passive}
            <h4 class="passiveh5"><strong>PASSIVE</strong></h4>
            <p class="passive">{items[thing].passive}</p>
        {/if}
        {#if items[thing].glyph && items[thing].base}
            
            {#each Object.entries(items[items[thing].base].details) as [attr, num]}
            <p class="stat">{num} <span >{attr}</span></p>
            {/each}
            {#if items[items[thing].base].passive}
                <h4 class="passiveh5"><strong>PASSIVE</strong></h4>
                <p class="passive">{items[items[thing].base].passive}</p>
            {/if}

            <h4 class="passiveh5 glyph"><strong>GLYPH</strong></h4>
            <p class="passive glyph">{items[thing].glyph}</p>
        {/if}
        {#if items[thing].active}
            <h4 class="passiveh5"><strong>ACTIVE</strong></h4>
            <p class="passive">{items[thing].active}</p>
        {/if}
    </div>
{/if}
</div>

<style>
    #root{
        position:relative;
        display:inline-block;
    }
	.tooltip {
		background: rgba(34, 34, 38, 0.97);
        box-shadow:0px 1px 4px rgba(0,0,0,0.7);
		padding: 10px 12px 15px;
		position: absolute;
        border-radius:2px;
        width:max-content;
        z-index:3;
	}
    .tooltip >*{
        margin:0;
    }
    .tooltip > *:not(:last-child){
        margin-bottom:4px;
    }
    .tt-head{
        display:flex;
        justify-content: space-between;
        align-items:center;
        gap:20px;
    }
    .tt-head > *{
        margin:0;
    }

    .tooltip > h4.passiveh5{
        margin-top:14px;
        margin-bottom:4px;
        font-size:0.7rem;
        color: #77e;
        text-transform: uppercase;
        letter-spacing: 0.1em;

    }
    .tooltip > h4.passiveh5.glyph{
        color:yellow;
    }
    .price{
        font-size:0.6rem;
        color:var(--maximum-yellow-red);
        /*
        color:#fff;
        font-weight:bold;
        background: url("https://s2.svgbox.net/pen-brushes.svg?ic=brush-2&color=ffbf49");
        background-size: 99% 49%;
        background-repeat: no-repeat;
        background-position:center 100%;
        padding:0px 4px;
        text-shadow:0px 0px 3px rgba(0,0,0,0.4);
        */
    }
    .stat{
        font-size:0.8rem;
        line-height:1.2rem;
    }
    .stat span{
        color:#aaa;
    }
    h5:not(strong){
        color:#fff;
        letter-spacing:0;
    }
    .passive{
        font-size:0.7rem;
        max-width:250px;
        line-height:1rem;
    }
</style>