<script>
    export let role_filter = 'all';

    let roles = ['jungle', 'adc', 'support', 'solo', 'mid']

    function set_filter(x){
        if (x !== role_filter){
            role_filter = x;
        } else{
            role_filter = "all";
        }
    }
</script>

<svg id="role-filter" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
    <g id="base"><rect x="10.79" y="10.79" width="42.43" height="42.43" transform="translate(-13.25 32) rotate(-45)"/></g>
    <g id="jungle" class="role" class:selected="{role_filter === roles[0]}" on:click={()=> set_filter(roles[0])}>
        <path d="M37 16.9 37 47.1 52.1 32 37 16.9z" />
        <path d="M27 47.1 27 16.9 11.9 32 27 47.1z" />
    </g>
    <path id="adc" class="role" class:selected="{role_filter === roles[1]}" on:click={()=> set_filter(roles[1])} d="M32 52.1 32 62 62 32 52.1 32 32 52.1z" />
    <path id="support" class="role" class:selected="{role_filter === roles[2]}" on:click={()=> set_filter(roles[2])} d="M32 11.9 52.1 32 62 32 32 2 32 11.9z" />
    <path id="solo"class="role" class:selected="{role_filter === roles[3]}" on:click={()=> set_filter(roles[3])} d="M11.9 32 32 11.9 32 2 2 32 32 62 32 52.1 11.9 32z" />
    <path id="mid" class="role" class:selected="{role_filter === roles[4]}" on:click={()=> set_filter(roles[4])} d="M27 7 27 57 32 62 37 57 37 7 32 2 27 7z" />
</svg> 

<style>
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


.role:active, .class:active{
    transform:scale(0.90);
}
</style>