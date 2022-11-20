<script>
	import {default as I} from '$lib/Item.svelte';
	import {default as Ab} from '$lib/Ability.svelte';
    export let god=""
</script>
{#if god !== ""}
<h5>Pros</h5>
<ol >
    {#if god === "agni"}
    <li>Flat Pen early for wave clear and easy kills</li>
    <li>Spear of the Magus <I item="spearmagus" i /> because our main damage is from combos</li> 
    <li>Calamitous <I item="tahuti_calamitous" i /> for our Fumes <Ab ab="fumes" i /> combo</li> 
    <li>Myrdin <I item="myrdin" i /> for ult-initiating gods, perfect 
        for Meteor <Ab ab="meteor" i /></li> 
    <li>If the enemy team has any healing whatsoever, 
        Divine <I item="divine" i /> first is needed, and its a cheap easy spike</li>

    {:else if god ==="he_bo"}
    <li>Full Lifesteal - your best defense is a good offense on He Bo</li>
    <li>Spear of the Magus <I item="spearmagus" i /> gives us massive damage after Waterspout <Ab ab="waterspout" i /></li>
    <li>Full % Penetration for damage on tanks</li>
    <li>Bumba's Spear <I item="s_bumbasspear" i /> gives great Fire Giant Secure</li>
        
    {:else if god ==="cliodhna"}
        
    {/if}
</ol>
{/if}