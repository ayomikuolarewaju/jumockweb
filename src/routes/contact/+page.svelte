<script>
	import Imagebody from '$lib/components/Allpagestag.svelte';
    import {page} from '$app/stores'

    $: locs = $page.url.pathname.toString().trim()
    $: loc = locs.slice(1,locs.length)
    
</script>



<Imagebody {loc} />
<!-- <div class="flex w-[1200px] items-center justify-center h-[500px] bg-gray-700 mx-auto gap-20 mt-5 rounded-t-lg">
    <div class=" flex flex-col text-white w-[400px] ml-10 p-5 justify-around">
        <form action="?/post&/thanks" method="POST" class="flex-col text-bold text-start text-sm ">
            <label for="name" class=" font-bold text-lg text-start mb-5">Name</label>
            <input type="text" name="name" class:border-red-800 = {fail?.name} class="w-[500px] h-[50px] p-5 text-lg text-black mt-5 mb-5 rounded-md">
            <label for="name" class=" font-bold text-lg text-start">Email</label>
            <input type="email" name="email" class:border-red-800 = {fail?.email}  class="w-[500px] h-[50px] p-5 text-lg text-black mt-5 rounded-md">
            <button type="submit" class="bg-gray-500 h-[50px] w-[150px] text-lg text-white p-3 my-5 rounded-lg hover:bg-gray-300 hover:text-gray-800">Submit</button>
        </form>
    </div>
    <div class="bg-gray-500 flex flex-col text-white w-[400px] m-10 justify-center items-center mx-auto mr-10">
     <h4 class="text-2xl font-bold">Office Address</h4>
    </div>
</div> -->