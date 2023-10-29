<script>

    import Imagebody from '$lib/components/Allpagestag.svelte';
    import {page} from '$app/stores'
    $: locs = $page.url.pathname.toString().trim()
    $: loc = locs.slice(1,locs.length)
    const images =[
    {
        tag:'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ex, ad dolor! Delectus optio itaque assumenda?',
        pic:'/img/carousel-1.jpg'},
    {
        tag:'Rorem, ipsum dolor sit amet consectetur adipisicing elit. Ex, ad dolor! Delectus optio itaque assumenda?',
        pic:'/img/carousel-2.jpg'},
    {
        tag:'Zorem, ipsum dolor sit amet consectetur adipisicing elit. Ex, ad dolor! Delectus optio itaque assumenda?',
        pic:'/img/carousel-3.jpg'}
    ]
    let count = 0
    const counter =()=>{   
      count < 2 ? count++ : count = 0
    }
    setInterval(()=>{
        count < 2 ? count++ : count = 0
        
    },3000)
    
</script>


<div class="mb-60">
    <Imagebody {loc} />
</div>

<div class="flex justify-center items-center mx-auto h-[300px] w-full relative mb-64">
    <button on:click={()=>{counter()}} class ="flex text-5xl z-50 absolute left-10 text-white">
        &RightAngleBracket;
    </button>
    <p class="absolute top-[200px] mx-auto my-auto z-50 text-white text-2xl w-[600px]">{images[count].tag}</p>
    <img src='{images[count].pic}' alt="" srcset="" class="object-contain"><br/>
    <button on:click={()=>{counter()}} class ="flex text-5xl z-50 absolute right-10 text-white">
        &LeftAngleBracket;
    </button>
</div>
