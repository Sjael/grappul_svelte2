<script>
    export let ab;
    export let i = false;
    import {simplify} from '../utils.js';
	import aliases from '../json/aliases.json';
	import Tooltip from '$lib/Tooltip.svelte';
</script>
<Tooltip thing="">
    {#if aliases[simplify(ab)]}
    <img src="/abilities/{aliases[simplify(ab)]}.png" alt={ab} class:inline="{i}">
    {:else}
    <img src="/abilities/{simplify(ab)}.png" alt={ab} class:inline="{i}">
    {/if}
</Tooltip>
<style>
    img{
        width:64px;
        height:64px;
    }

    .inline{
        display:inline;
        height:1.5em;
        width:1.5em;
        vertical-align: middle;
    }

</style>