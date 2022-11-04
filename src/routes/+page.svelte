<script>
    export const prerender = true;
    export const ssr = false;
    import Item from '../lib/Item.svelte';
    import Icon from '../lib/Icon.svelte';
    import ClassFilters from '../lib/ClassFilters.svelte';
    import { onMount } from 'svelte';
    import {slug} from '../utils.js';
	import RoleFilters from '$lib/RoleFilters.svelte';
    import gods from '../json/gods.json'

    let class_filter = 'all';
    let role_filter = 'all';

    let filtered = [];
    function filter_both(){
                   
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
                    <div>
                        <h2><img class="god-img" src="/gods/{god}.png" alt="{god}" />{god}</h2>
                    {#each god_info["builds"] as buildinfo}
                        {#if (role_filter === buildinfo["role"] || role_filter === 'all') && (class_filter === god_info["class"] || class_filter === 'all')}
                            <div class="itemrow">
                            {#each buildinfo["build"] as item}
                                <Item {item} />
                            {/each}
                            </div>
                        {/if}
                    {/each}
                    </div>
                {/each}
            </div>

            <div id="explain">
                
            </div>

        </div>

    </main>



