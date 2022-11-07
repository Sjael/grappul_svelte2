<script>
	import Item, {default as I} from '$lib/Item.svelte';
	import {default as Ab} from '$lib/Ability.svelte';
	import Icon from '$lib/Icon.svelte';
    import itemprices from "$lib/itemprices";
    export const prices = Object.keys(itemprices);

	let full_build = [
		'jotunnsvigor',
		'trans',
		'souleater',
		'heartseeker',
		'titans',
		'crusher'
	]

	let timeline = [
		['s_warriors', 'mace'],
		['jotunns'],
		['trans'],
		['souleater'],
		['heartseeker'],
		['jotunnsvigor'],
		['titans'],
		['crusher']
	]
	let timeline_space = [0];
	let build_total = 0;
	for (const key in timeline){
		console.log(key);
			console.log(timeline[key])
		timeline[key].forEach((item, i) => {
			console.log(item)
			if (key !== "0"){
				let item_price = 1;
				item_price = itemprices[item]
				console.log('price')
				console.log(item_price)
				if (item_price > 1){
					build_total += item_price
				}
				timeline_space.push(build_total);
			}
		})
	}
</script>

<div class="explain-top" >
	<div><img class="god-img" src="/gods/chaac.png"/></div>
	<div class="explain-title" >
		<div>
			<h1>Chaac</h1>
			<h4>Mid</h4>
		</div>
		<div>
			<h4>Current as of</h4>
			<h2>9.10</h2>
		</div>
	</div>
</div>

<div class="frow">
	<div>
		<h5>Start</h5>
		<div class="itemrow">
			<I item="{timeline[0][0]}" s/>
			<I item="{timeline[0][1]}" s/>
			<Icon name="arrow"/>
			<I item="{timeline[1][0]}" s/>
		</div>
	</div>
	<div>
		<h5>Relics</h5>
		<div class="itemrow">
			<I item="blink" s/>
			<Icon name="arrow"/>
			<I item="beads" s/>
		</div>
	</div>
</div>

<h5>Full build</h5>
<div class="itemrow">
	{#each full_build as item}
		<I {item} s/>
	{/each}
</div>


<h5>Timeline</h5>
<div class="timeline">
	{#each timeline as buys, i}
    <div style="left:{timeline_space[i] / (build_total + 2000) * 100}%" class="entry">
        <div class="tick-h">
            <div class="tick"></div>
			{#each buys as item}
			<I {item} i />
			{/each}
        </div>
    </div>
	{/each}
	<p>{build_total}g</p>
</div>

<h5>Pros</h5>
<ol >
    <li>Full Lifesteal - your best defense is a good offense on He Bo.</li>
    <li>Spear of the Magus<I item="spearmagus" i /> gives us massive damage after Waterspout<Ab ab="waterspout" i/></li>
    <li>Full % Penetration for damage on tanks</li> 
    <li>Bumba's Spear<I item="s_bumbasspear" i /> gives great Fire Giant Secure</li> 
</ol>


<h2>Tips and Tricks</h2>
<ul class="dia">
    <li>Don't Waterspout 
		<Ab ab="waterspout" i/> instantly into Ult
		<Ab ab="crushingwave" i />, you will go under the enemy</li>
    <li>Save River<Ab ab="river" i/>to cleanse slows or you're throwing</li>
    <li>If you can, use Water Cannon<Ab ab="watercannon" i/>
		before ulting<Ab ab="crushingwave" i/></li>
    <li>Crushing Wave<Ab ab="crushingwave" i/> + Bancrofts<I item="bancrofts" i />gives 1/2 of your health back if low</li> 
</ul>

<style>

</style>
