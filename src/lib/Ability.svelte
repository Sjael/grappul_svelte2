<script>
    export let ab;
    export let i = false;
</script>
<img src="/abilities/{ab}.png" alt={ab} class:inline="{i}">

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