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
        <div class="tt-head">
            <h3>{items[thing].name}</h3>

            {#if prices[thing] && prices[thing] > 0}
                <p class="price">{prices[thing]}</p>
            {/if}
        </div>
        {#if items[thing].details}
            {#each Object.entries(items[thing].details) as [attr, num]}
            <p>+{num} <span style="color:#888">{attr}</span></p>
            {/each}
        {/if}
        {#if items[thing].passive}
            <h5 class="passiveh5"><strong>PASSIVE</strong></h5>
            <p class="passive">{items[thing].passive}</p>
        {/if}
        {#if items[thing].glyph && items[thing].base}
            
            {#each Object.entries(items[items[thing].base].details) as [attr, num]}
            <p>+{num} <span style="color:#888">{attr}</span></p>
            {/each}
            {#if items[items[thing].base].passive}
                <h5 class="passiveh5"><strong>PASSIVE</strong></h5>
                <p class="passive">{items[items[thing].base].passive}</p>
            {/if}

            <h5 class="passiveh5"><strong>GLYPH</strong></h5>
            <p class="passive glyph">{items[thing].glyph}</p>
        {/if}
        {#if items[thing].active}
            <h5 class="passiveh5"><strong>ACTIVE</strong></h5>
            <p class="passive">{items[thing].active}</p>
        {/if}
    </div>
{/if}

<style>
    #root{
        display:contents;
    }
    .tt-head{
        display:flex;
        justify-content: space-between;
        align-items:center;
    }
    .tt-head > *{
        margin:0;
    }
	.tooltip {
		background: #222226;
		padding: 14px;
		position: absolute;
        transform:translate(10%, -20%);
        max-width:300px;
	}
    .tooltip >*{
        margin:0;
        line-height: normal;
    }
    .tooltip > *:not(:last-child){
        margin-bottom:5px;
    }
    .price{
        font-size:0.6rem;
        font-weight:bold;
        color:var(--maximum-yellow-red);
    }
    .tooltip .passiveh5{
        margin:12px 0px 5px !important;
    }
    h5:not(strong){
        color:#fff;
        letter-spacing:0;
    }
    .passive{
        font-size:0.7rem;
    }
    .passive.glyph{
        color: yellow;
    }
</style>