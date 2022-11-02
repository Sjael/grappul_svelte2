<script>
    export const prerender = true;
    export const ssr = false;
    import Item from '../lib/Item.svelte';
    import Icon from '../lib/Icon.svelte'
    import { onMount } from 'svelte';
    import {slug} from '../utils.js';


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

    // Click Build
    const showBuild = (god) => {
        let old = document.getElementsByClassName("active-build");
        if (old.length > 0){
            old[0].classList.remove("active-build");
        }
        god.classList.add('active-build');
        console.log(god);
        fetch('./' + god.dataset.build + '.html')
            .then((response) => response.text())
            .then(text=> document.getElementById('explain').innerHTML = text);
    }

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
                <div id="class-bar">
                    <div class="class" data-class="warrior">
                        <svg id="Layer_1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><polygon points="30.47 41.72 51.68 20.51 53.28 10.87 43.65 12.47 22.43 33.68 26.45 37.7 30.47 41.72"/><polygon points="29.93 51.2 32.86 48.26 24.38 39.78 15.89 31.29 12.95 34.23 18.75 42.73 13.8 47.68 9.18 46.49 6.47 49.19 10.72 53.44 14.96 57.68 17.66 54.98 16.48 50.35 21.43 45.41 29.93 51.2"/></svg>
                    </div>
                    <div class="class" data-class="assassin">
                        <svg id="Layer_1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><g><polygon points="7.05 50.95 32.34 26 31.63 21.84 30.77 21.22 19.3 33.87 27.74 19.05 26.83 18.39 22.73 19.1 7.05 50.95"/><polygon points="29.91 19.09 35.76 23.29 36.42 20.31 33.38 18.13 39.21 10 38.59 7 35.6 7.41 29.77 15.54 26.81 13.41 24.23 15.01 25.17 15.69 29.91 19.09"/></g><g><polygon points="26.3 60.41 48.99 33.08 47.88 29.01 46.95 28.48 36.8 42.21 43.73 26.62 42.75 26.05 38.74 27.16 26.3 60.41"/><polygon points="45.89 26.44 52.13 30.04 52.49 27.01 49.25 25.14 54.24 16.48 53.33 13.56 50.39 14.26 45.4 22.92 42.24 21.1 39.83 22.95 40.84 23.53 45.89 26.44"/></g></svg>
                    </div>
                    <div class="class" data-class="mage">
                        <svg id="Layer_5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><path d="M43.24,22.73c.45,2.5,1.22,6.03,1.45,9.01-1.49-1.2-6.74-6.6-10.83-12.51,0-.07,.01-.16,.02-.23-.06,0-.12,0-.18,0-2.61-3.81-4.71-7.8-4.98-11-7.24,5.26-5.35,17.27-2.71,25.97-2.83-.57-8.12-2.61-7.37-9.37-3.21,3.33-5.19,7.86-5.19,12.85,0,10.24,8.3,18.55,18.55,18.55s18.55-8.3,18.55-18.55c0-6.01-2.87-11.34-7.3-14.72Zm-7.97,25.63c-5.65-.48-8.57-3.41-7.64-3.27,3.53,.5,8.51-6.65,8.73-13.09,1.92,4.55,8.73,8.73,8.73,8.73,0,0-3.59,8.17-9.82,7.64Z"/></svg>
                    </div>
                    <div class="class" data-class="guardian">
                        <svg id="Layer_3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><path d="M51.88,19l-19.88-8L12.06,19s-2.92,27.21,19.94,35.6c22.79-8.4,19.88-35.6,19.88-35.6Zm-19.89,25.6c-12.37-4.54-10.79-19.27-10.79-19.27l10.79-4.33,10.76,4.33s1.57,14.73-10.76,19.27Z"/></svg>
                    </div>
                    <div class="class" data-class="hunter">
                        <svg id="Layer_2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><path d="M26.22,30.71l-7.1-7.1c4.35-2.57,9.85-2.68,14.58-.38l4.41-4.41c-7.33-4.43-16.53-4.32-23.34,.45l-1.28-1.28-4.24,4.24,12.73,12.73,4.24-4.24Z"/><polygon points="39.66 13.03 43.9 17.27 22.69 38.49 17.74 37.78 9.96 45.56 16.59 47.41 18.44 54.04 26.22 46.26 25.51 41.31 46.73 20.1 50.97 24.34 53.8 10.2 39.66 13.03"/><path d="M45.19,25.88l-4.41,4.41c2.3,4.73,2.19,10.23-.38,14.58l-7.1-7.1-4.24,4.24,12.73,12.73,4.24-4.24-1.28-1.28c4.77-6.81,4.88-16.01,.45-23.34Z"/></svg>
                    </div>  
                </div>   
                <div id="role-bar">   
                    <svg id="Layer_7" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
                        <g id="base"><rect x="10.79" y="10.79" width="42.43" height="42.43" transform="translate(-13.25 32) rotate(-45)"/></g>
                        <g id="jungle" class="role" data-role="jungle">
                            <polygon points="37 16.9 37 47.1 52.1 32 37 16.9"/>
                            <polygon points="27 47.1 27 16.9 11.9 32 27 47.1"/>
                        </g>
                        <polygon id="adc" class="role" data-role="adc" points="32 52.1 32 62 62 32 52.1 32 32 52.1"/>
                        <polygon id="support" class="role" data-role="support" points="32 11.9 52.1 32 62 32 32 2 32 11.9"/>
                        <polygon id="solo"class="role" data-role="solo" points="11.9 32 32 11.9 32 2 2 32 32 62 32 52.1 11.9 32"/>
                        <polygon id="mid" class="role" data-role="mid"points="27 7 27 57 32 62 37 57 37 7 32 2 27 7"/>
                    </svg>
                </div>     
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



