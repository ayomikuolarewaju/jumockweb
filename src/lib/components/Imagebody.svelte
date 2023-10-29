<script>
    export let topic
    export let offer
    export let descrt
    export let btn1
    export let btn2
</script>


<div style="background-image: url('/img/carousel-2.jpg');" class="h-[600px] object-cover">
   <div class="flex flex-col items-center justify-center gap-5 mx-auto my-auto w-[500px] pt-32">
    <div><p class="capitalize font-bold text-white">{topic}</p></div>
    <div><p class="capitalize text-3xl w-[280px] text-bold font-bold text-white text-center">{offer}</p></div>
    <div><p class="text-center text-sm text-white">{descrt}</p></div>
    <div>
        <button class="h-[50px] w-[100px] bg-blue-700 rounded-md text-white font-medium">{btn1}</button>
        <button class="h-[50px] w-[100px] bg-red-700 rounded-md text-white font-medium">{btn2}</button>
    </div>
   </div>
   </div>