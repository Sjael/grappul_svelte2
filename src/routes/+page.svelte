<script>
    export const prerender = true;
    export const ssr = false;
    import Item from '../lib/Item.svelte';
    import Icon from '../lib/Icon.svelte';
    import ClassFilters from '../lib/ClassFilters.svelte';
    import { onMount } from 'svelte';
    import {slug} from '../utils.js';
	import RoleFilters from '$lib/RoleFilters.svelte';
	import { getDepOptimizationConfig } from 'vite';

    let class_filter = 'all';
    let role_filter = 'all';

    let filtered = [];
    function filter_both(){
                   
    }
 

     async function loading_info(){
        let response = await fetch('/json/gods.json');
		let result = await response.json();
        let response2 = await fetch('/json/builds.json');
		let result2 = await response2.json();
        console.log({result2, result});
        return {
            "builds" : result2,
            "gods": result
        };
    }
    let info_promise = loading_info();


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
                {#await info_promise}
                    <p>loading builds</p>
                {:then base}
                    {#each Object.entries(base["gods"]) as [god, info]}
                        <div data-build="{god}" data-build-class={info["class"]} data-build-role={info["role"]} >
                            <h2><img class="god-img" src="/gods/{god}.png" alt="{god}" />{god}</h2>
                            <div class="itemrow">
                                {#each base["builds"][god.toString()] as build}
                                    <Item item={build} />
                                {/each}
                            </div>
                        </div>
                    {/each}
                {:catch err}
                    <h2>Error while loading the builds</h2>
                {/await}   
                
            </div>

            <div id="explain">
                
            </div>

        </div>

    </main>



