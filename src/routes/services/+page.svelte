<script>
    import Imagebody from '$lib/components/Allpagestag.svelte';
    import {page} from '$app/stores'
    $: locs = $page.url.pathname.toString().trim()
    $: loc = locs.slice(1,locs.length)
</script>


<Imagebody {loc} />