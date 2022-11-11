<script>
	import {default as I} from '$lib/Item.svelte';
	import {default as Ab} from '$lib/Ability.svelte';
	import Icon from '$lib/Icon.svelte';
    import itemprices from "$lib/itemprices";
    import builds from '../json/builds.json';
	import tips from '../json/tips.json';
	import skillorders from '../json/skill_order.json';
	import skills from '../json/skills.json';
    import {unslug} from '../utils.js';


	export let god = "chaac";
	export let role = "mid";
	$: info = get_build(god);
	
	function get_build(god) {
		let new_info = {};
		new_info.tips = [];
		if (builds[god]){
			for (let build of builds[god]){
				new_info = build
				if (build["role"] === role){
					new_info = build
				}
				if (tips[god]){
					new_info.tips = tips[god]
				}
				if (skillorders[god]){
					new_info.skillorder = skillorders[god]
				}
				if (skills[god]){
					new_info.skills = skills[god]
				}
			}
		}
		return new_info
	}

    let timeline_space = [0];
    let build_total = 0;
    $ :{
		build_total = 0;
		timeline_space = [0];
        for (const key in info.timeline){
            info.timeline[key].forEach((item, i) => {
                if (key !== "0"){
                    let item_price = 1;
                    item_price = itemprices[item]
					if (key === "1"){
						item_price -= 600;
					}
                    if (item_price > 1){
                        build_total += item_price
                    }
                    timeline_space.push(build_total);
                }
            })
        }
    }
</script>

<div class="explain-top" >
	<div><img class="god-img" src="/gods/{god}.png" alt={god}/></div>
	<div class="explain-title" >
		<div>
			<h1>{unslug(god)}</h1>
			<h4>{info.role}</h4>
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
			<I item="{info.timeline[0][0]}" s/>
			<I item="{info.timeline[0][1]}" s/>
			<Icon name="arrow"/>
			<I item="{info.timeline[1][0]}" s/>
		</div>
	</div>
	<div>
		<h5>Relics</h5>
		<div class="itemrow">
			<I item="{info.relics[0]}" s/>
			<Icon name="arrow"/>
			<I item="{info.relics[1]}" s/>
		</div>
	</div>
</div>

<h5>Full build</h5>
<div class="itemrow">
	{#each info.build as item}
		<I {item} s/>
	{/each}
</div>

{#if info.skillorder && info.skills}
	<h5>Skill Order</h5>
	<div class="grid_hold">
	{#each info.skills as skill, skillslot}
	<div class="skillrow">
		<div class="labelrow">
			<Ab ab={skill} i/>
			<p>{skill}</p>
		</div>
		<div class="rowpoints">
			{#each Array(20) as _, i}
				{#if skillslot+1 === info.skillorder[i]}
				<div class="point level">
					{i + 1}
				</div>
				{:else}				
				<div class="point"></div>
				{/if}
			{/each}
		</div>
	</div>
	{/each}
</div>
{/if}

<h5>Timeline</h5>
<div class="timeline">
	{#each info.timeline as buys, i}
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
	{#if info.tips}
		{#each info.tips as tip}
		<li>{tip}</li>
		{/each}
	{/if}
    <li>Don't Waterspout 
		<Ab ab="waterspout" i/> instantly into Ult
		<Ab ab="crushingwave" i />, you will go under the enemy</li>
    <li>Save River<Ab ab="river" i/>to cleanse slows or you're throwing</li>
    <li>If you can, use Water Cannon<Ab ab="watercannon" i/>
		before ulting<Ab ab="crushingwave" i/></li>
    <li>Crushing Wave<Ab ab="crushingwave" i/> + Bancrofts<I item="bancrofts" i />gives 1/2 of your health back if low</li> 
</ul>

<style>
	.explain-title > div:first-child > *{
		text-transform: capitalize;
	}

	.grid_hold{
		display:grid;
	}
	.skillrow{
		display:flex;
		margin-bottom:6px;
		flex-direction: row;
	}
	.rowpoints, .labelrow{
		display:flex;
	}
	.labelrow{
		flex:1;
		align-items:center;
		background:#222226;
		border-radius:3px;
		font-size:0.8rem;
	}
	.labelrow p{
		margin:0;
		margin-left:6px;
		opacity:0.9;
	}
	.point{
		height:24px;
		width:24px;
		background:#333;
		margin-left:6px;
		display:flex;
		align-items: center;
		justify-content: center;
		border-radius:3px;
		font-weight:bold;
		font-size:0.6rem;
		cursor:default;
	}
	.point.level{
		background:#444684;
	}
</style>
