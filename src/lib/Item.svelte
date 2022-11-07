<script>
    export let item;
    export let i = false;
    export let s = false;
	import Tooltip from '$lib/Tooltip.svelte';
</script>
<Tooltip thing={item}>
<img src="/items/{item}.png" alt={item} class:inline="{i}" class:small="{s}">
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

    .small{
        height:3em;
        width:3em;
    }

</style>