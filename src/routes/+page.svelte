<script>
    export const prerender = true;
    export const ssr = false;
    import Item from '../lib/Item.svelte';
    import Icon from '../lib/Icon.svelte';
    import ClassFilters from '../lib/ClassFilters.svelte';
	import RoleFilters from '$lib/RoleFilters.svelte';
    import Explain from '$lib/explain.svelte';
    import { onMount } from 'svelte';
    import {slug} from '../utils.js';
    import gods from '../json/gods.json';
    import builds from '../json/builds.json';



    let class_filter = 'all';
    let role_filter = 'all';
    let god_filter = 'all';

    let explain_post;
    let explain2;


    function set_god_filter(x){        
        if (x !== god_filter){
            god_filter = x;
        } else{
            god_filter = "all";
        }
    }



</script>
  
     
        <h1>Quick 
            <!--<span class="glow">
            <span class="magic-star">
                <Icon name="star" />
            </span>
            <span class="magic-star">                
                <Icon name="star" />
            </span>
            <span class="magic-star">                
                <Icon name="star" />
            </span>-->
            <span class="glow-text">SMITE</span>
        <!--</span>--> Guides</h1>
      
        <div class="grid_con">
            <div id="filter">
                <ClassFilters bind:class_filter />
                <RoleFilters bind:role_filter />
            </div>

            <div id="build-picker">
                <!--{#each Object.entries(data) as [god, builds]}
                    <h1>{god}</h1>
                    <h1>{builds}</h1>
                {/each}-->
                <div class="god-grid">
                {#each Object.entries(gods) as [god, god_info]}
                    {#if (class_filter === god_info["class"] || class_filter === 'all') && (god_info["roles"].includes(role_filter) || role_filter === "all")}
                     
                    <div class="god" on:click={() => set_god_filter(god)} class:selected="{god_filter === god}">
                        <img src="/gods/{god}.png" alt="{god}" />
                    </div>
                    {/if}
                {/each}
                </div>
            </div>

            <div id="explain">
                {#if god_filter !== "all"}
                    <Explain god={god_filter} role={role_filter} /> 
                {/if}
            </div>

        </div>


<style>
.god-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(4rem, 1fr));
  grid-auto-rows: 1fr;
}

.god-grid::before {
  content: '';
  width: 0;
  padding-bottom: 100%;
  grid-row: 1 / 1;
  grid-column: 1 / 1;
}

.god:first-child {
  grid-row: 1 / 1;
  grid-column: 1 / 1;
}

/* Just to make the grid visible */

.god {
  background: rgba(0,0,0,0.1);
  border: 1px transparent solid;
}
.god-grid img{
    height: 100%;
    width:100%;
}

.god{
    transition: all 0.6s, transform 300ms ease;
    cursor:pointer;
    margin-bottom:20px;
    padding:5px;
    opacity:0.5;
}


.god:hover:not(.active-build), .god.selected{
    transform:translateY(-2px)
}



.god:hover, .god.selected{
    opacity:1;
}


/*  💯 💯 💯 💯
/* ❤ 💯 Filter Section */
/* 💯 💯 💯 💯 */

#filter{
    grid-area:❤;
    display:flex;
    flex-direction: row;
    gap:10px;
    height:clamp(40px, 15vh, 140px);
    align-items:center;
}


#explain{
    grid-area:🧠;
}


#build-picker{
    grid-area:💥;
    
}


/* 💥💥💥💥
/* 💥 Build Section */
/* 💥💥💥💥*/





/* 🧠🧠🧠🧠
/* 🧠 Explain Section */
/* 🧠🧠🧠🧠*/

.itemrow > img:not(:last-child){
    margin-right:8px;
}

.role{
    display:flex;
    flex-direction: row;
    justify-content: center;
    align-content: center;
}

.magical {
    color:blue;
}
.physical {
    color: red;
}
.itemrow{
    display:flex;         
    justify-content: center;
    align-items: center;       
}
.itemrow img{
    height:60px;
    width:60px;
}

.itemrow i{
    margin-right:8px;
}

.god-img{
    height: 40px;
    width:40px;
    margin-right:6px;
}
h2{
    text-transform:uppercase;
    margin-bottom: 10px;                
}

span.green{
    background:var(--highlight-green);
}

ul {
    list-style-type: "⬩ ";
    padding-left:8px;
}
li{
    padding-left:8px;
    line-height: 2em;
}

h5{
    text-transform: uppercase;
    letter-spacing: 3px;
    opacity:0.7;
    margin-top:50px;
}

h2{
    margin-top:50px;
}

.img-inline{
    display:inline;
    margin:auto 6px;
    height:1.5em;
    vertical-align: middle;
}

.itemrow{
    justify-content: left;
}

#guide-title{
    display:flex;
    justify-content: space-between;
    align-items:center;
}
#guide-title>*{
    margin:0;
}
#guide-title img{
    vertical-align: middle;
}

.guide-top{
    display:flex;
    justify-content:center;
    align-items:center;
}

.timeline{
    margin:65px 0px 50px;
    width:100%;
    height:10px;
    background: var(--highlight-green);
    box-sizing:border-box;
    background-size: 100% 100%;
    position:relative;
    padding-right:40px;
}
.timeline .entry{
    position:absolute;
    transform:translate(0%, -85%);
    height:50px;
    z-index:-1;
}

.timeline  img{
    height:30px;
    width:30px;
}

.tick-h{
    position:relative;
    height:100%;
    width:100%;
}

.tick {
    background:#6cd77b;
    width:3px;
    height:10px;
    position:absolute;
    bottom:0%;
    left:50%;
    transform:translate(-50%,-50%);
}

</style>


