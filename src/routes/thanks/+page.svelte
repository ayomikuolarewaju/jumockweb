<script>
	import Imagebody from '$lib/components/Allpagestag.svelte';
    import {page} from '$app/stores'
    $: locs = $page.url.pathname.toString().trim()
    $: loc = locs.slice(1,locs.length)

</script>



<Imagebody {loc} />

<p class="text-2xl font-medium capitalize w-[300px] h-[100px] flex justify-center mx-auto items-center">thanks for patronizing us</p>

