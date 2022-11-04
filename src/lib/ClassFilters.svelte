<script>
    import Icon from '../lib/Icon.svelte';
    export let class_filter = "all";

    function set_filter(x){
        if (x !== class_filter){
            class_filter = x;
        } else{
            class_filter = "all";
        }
    }

    let classes = ['warrior', 'assassin', 'mage', 'guardian', 'hunter'];
</script>

<!--<div id="class-bar">-->
    {#each classes as god_class}
        <div class="class" class:selected="{class_filter === god_class}" on:click={() => set_filter(god_class)}>
            <Icon name="{god_class}" size={64}/>
        </div>
    {/each}
<!-- </div> -->
<style>
    .class{
        padding:10px;
        height:clamp(20px, 3vw, 40px);
        color:#fff;
        display:flex;
        align-items:center;
        justify-content: center;
        background:#222226;
        opacity:.5;
        transition:all 400ms ease-in-out, transform 200ms ease;
        position:relative;    
    }
    .class:active{
        transform:scale(0.90);
    }
    .class:hover{
        opacity:1;
        border-color:transparent;
    }
    .class::before{
        content: "";
        width: 100%;
        height: 100%;
        border-radius:inherit;
        position: absolute;
        left: 0;
        opacity:0.1;
        transition:all 400ms ease;
        z-index:2;
    }
    .class:hover::before, .class:active::before, .class.selected::before{
        opacity:0.5;
    }
    .class.selected{
        opacity:1.0;
        border-color:transparent;
    }

    #class-bar{
        display:flex;
        align-items:center;
    }
</style>