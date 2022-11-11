<script>
    export let ab;
    export let i = false;
    import {simplify} from '../utils.js';
	import aliases from '../json/aliases.json';
</script>
{#if aliases[ab.toLowerCase()]}
<img src="/abilities/{aliases[ab.toLowerCase()]}.png" alt={ab} class:inline="{i}">
{:else}
<img src="/abilities/{simplify(ab)}.png" alt={ab} class:inline="{i}">
{/if}

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