import { writable, derived } from 'svelte/store';

export const builds = writable({});
export const gods = writable({});

const fetch_builds = async () =>{
    const response = await fetch('/json/builds.json');
    builds.set(await response.json())
}
const fetch_gods = async () =>{
    const response = await fetch('/json/gods.json');
    gods.set(await response.json())
}

fetch_builds()
fetch_gods()

