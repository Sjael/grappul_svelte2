<script>
	import {default as I} from '$lib/Item.svelte';
	import {default as Ab} from '$lib/Ability.svelte';
	import Icon from '$lib/Icon.svelte';
	import { end_hydrating } from 'svelte/internal';

	let full_build = [
		's_bumbasspear',
		'bancroftsclaw',
		'spearmagus',
		'pythags',
		'typhons',
		'obshard'
	]

	let timeline = {
		"0" : ['s_bumbas', 'tinytrink'],
		"20": ['bancrofts'],
		"30": ['spearmagus'],
		"40" : ['pythags'],
		"60" : ['typhons'],
		"70" : ['bancroftsclaw'],
		"80" : ['s_bumbasspear'],
		"90" : ['obshard']
	}
</script>

<div id="guide-title">
    <div class="guide-top">
        <img class="god-img" src="/gods/he_bo.png"/>
        <h1>He Bo</h1>
    </div>
    <h4>Jungle</h4>
</div>


<h5>At Level 1</h5>
<div class="itemrow">
	<I item="s_bumbas" />
	<I item="tinytrink" />
    <Icon name="arrow"/>
	<I item="bancrofts" />
</div>

<h5>Full build</h5>
<div class="itemrow">
	{#each full_build as item}
		<I {item} />
	{/each}
</div>

<h2>Pros</h2>
<ol >
    <li>Full Lifesteal - your best defense is a good offense on He Bo.</li>
    <li>Spear of the Magus<I item="spearmagus" i /> gives us massive damage after Waterspout<Ab ab="waterspout" i/></li>
    <li>Full % Penetration for damage on tanks</li> 
    <li>Bumba's Spear<I item="s_bumbasspear" i /> gives great Fire Giant Secure</li> 
</ol>

<h2>Timeline</h2>
<div class="timeline">
	{#each Object.entries(timeline) as [left, buys]}
    <div style="left:{left}%" class="entry">
        <div class="tick-h">
            <div class="tick"></div>
			{#each buys as item}
			<I {item} i />
			{/each}
        </div>
    </div>
	{/each}
</div>

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
