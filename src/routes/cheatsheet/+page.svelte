<script>
    export const prerender = true;
    export const ssr = false;
    import Item from '../../lib/Item.svelte';
    import Icon from '../../lib/Icon.svelte';
    import ClassFilters from '../../lib/ClassFilters.svelte';
    import { onMount } from 'svelte';
    import {slug} from '../../utils.js';
	import RoleFilters from '$lib/RoleFilters.svelte';
    import gods from '../../json/gods.json'

    let class_filter = 'all';
    let role_filter = 'all';

    let filtered = [];
    function filter_both(){
                   
    }
 
    function contains_role(role, builds){
        if (role === "all"){
            return true
        }
        let g = builds.filter(e => e["role"] === role);
        if (g.length > 0){
            return true
        }else{
            return
        }

    }

     export let data


</script>
  
    <main>
     
        <h1><span class="glow">
            <span class="magic-star">
                <Icon name="star" />
            </span>
            <span class="magic-star">                
                <Icon name="star" />
            </span>
            <span class="magic-star">                
                <Icon name="star" />
            </span>
            <span class="glow-text">SMITE</span>
        </span> Cheatsheet</h1>
      
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
                {#each Object.entries(gods) as [god, god_info]}
                    {#if (class_filter === god_info["class"] || class_filter === 'all') && contains_role(role_filter, god_info["builds"])}
                        <div>
                            <h2><img class="god-img" src="/gods/{god}.png" alt="{god}" />{god}</h2>
                        {#each god_info["builds"] as buildinfo}
                            {#if role_filter === buildinfo["role"] || role_filter === 'all'}
                                <div class="itemrow">
                                {#each buildinfo["build"] as item}
                                    <Item {item} />
                                {/each}
                                </div>
                            {/if}
                        {/each}
                        </div>
                    {/if}
                {/each}
            </div>

            <div id="explain">
                
            </div>

        </div>

    </main>



<style>

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
#role-filter > *{
    transition:all .5s ease-in-out;
    fill:#626788;
}

#role-filter #base{
    fill-opacity:1;
    fill:#888;
}

#role-filter > *:hover, #role-filter > *.selected{
    fill:#ccc;
    fill-opacity:1;
}

svg > #support:hover{
    fill:var(--ocean-green);
}

#role-filter{
    height:100%;
}

.role{
    border-radius:20%;
    border-color:transparent;
}

.role:active, .class:active{
    transform:scale(0.90);
}




.class svg{
    height:24px;
    z-index:3;
}


.class:hover, .role:hover{
    opacity:1;
    border-color:transparent;
}

.class:hover::before, .class:active::before, .class.selected::before, .role:hover::before{
    opacity:0.5;
}

.role.selected, .class.selected{
    opacity:1.0;
    border-color:transparent;
}


#explain{
    grid-area:🧠;
}
#explain > *:nth-child(2){
    margin-top:20px;
}

#build-picker{
    grid-area:💥;
    
}


/* 💥💥💥💥
/* 💥 Build Section */
/* 💥💥💥💥*/


#build-picker > div{
    transition: all 0.6s, transform 300ms ease;
    cursor:pointer;
    margin-bottom:20px;
    padding:10px;
    opacity:0.5;
}

#build-picker > div.hidden-build{
    visibility:hidden;
    opacity:0;
    transition: all 1s;
    transform: translateX(-200%);
    height:0;
    display:none;
}

#build-picker > .active-build{
    opacity:1;
}

#build-picker > div:hover:not(.active-build){
    transform:translateY(-2px)
}

#build-picker h2{
    margin-top:0;
    font-size:28px;
}

#build-picker:hover > div:hover{
    opacity:1;
}

#build-picker h2>img{
    vertical-align: middle;
    margin-right:8px;
}


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