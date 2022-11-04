<script context="module">
    import pathsByName from "./iconpaths"
    export const iconOptions = Object.keys(pathsByName)
    export const directions = ["n", "ne", "e", "se", "s", "sw", "w", "nw"]
</script>
  
  <script>
    export let name = "arrow"
    export let direction = "n"
    export let size = 25;
  
    $: paths = pathsByName[name] || []
    $: rotation = directions.indexOf(direction) * 45
  </script>
  
  <svg
    class="c"
    viewBox="0 0 {size} {size}"
    style="{`transform: rotate(${rotation}deg)`}">
    {#each paths as path}
      <path d="{path}"></path>
    {/each}
  </svg>
  
  <style>
    .c {
      width: 1em;
      height: 1em;
      fill: #fff;
      transition: all 0.3s ease-out;
      overflow: visible;
    }
  </style>
  