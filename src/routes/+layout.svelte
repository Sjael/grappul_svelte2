<script>
	import Header from '$lib/Header.svelte';
	import '../app.css';
</script>

<Header />
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com">
<main data-sveltekit-prefetch>
	<slot />
</main>