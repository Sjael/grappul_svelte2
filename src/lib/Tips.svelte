<script>
	import {default as I} from '$lib/Item.svelte';
	import {default as Ab} from '$lib/Ability.svelte';
    export let god=""
</script>
{#if god !== ""}
<h5>Tips and Tricks</h5>
<ul class="dia">
    {#if god === "agni"}
    <li>Late game, dont use Meteor <Ab ab="meteor" i /> 
        to clear if Fire Giant is being contested, as you will lose 
        Myrdin <I item="myrdin" i /> buff for the fight</li>
    <li>In Conquest, start red and ditch speed to 
        Dash <Ab ab="fdash" i /> first wave safely</li>


    {:else if god ==="he_bo"}
    <li>Don't Waterspout <Ab ab="waterspout" i/> 
        instantly into Ult<Ab ab="crushingwave" i />, you will go under the enemy</li>
    <li>Save River<Ab ab="river" i/> to cleanse slows or you're throwing</li>
    <li>If you can, use Water Cannon<Ab ab="watercannon" i/>
        before ulting<Ab ab="crushingwave" i/></li>
    <li>Crushing Wave<Ab ab="crushingwave" i/> + Bancrofts<I item="bancrofts" i /> gives 1/2 of your health back if low</li> 

    {/if}
</ul>
{/if}