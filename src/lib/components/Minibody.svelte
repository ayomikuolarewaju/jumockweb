<script>
  
  
    const cards = [
        {
            img: '/img/video-solid.svg',
            topic:'installation',
            descript:'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Adipisci, officiis fugit accusamus magnam aliquam facilis.'
        },
        {
            img: '/img/video-solid.svg',
            topic:'configuration',
            descript:'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Adipisci, officiis fugit accusamus magnam aliquam facilis.'
        },
        {
            img: '/img/video-solid.svg',
            topic:'maintenance',
            descript:'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Adipisci, officiis fugit accusamus magnam aliquam facilis.'
        },
        {
            img: '/img/video-solid.svg',
            topic:'repair & services',
            descript:'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Adipisci, officiis fugit accusamus magnam aliquam facilis.'
        },
        {
            img: '/img/video-solid.svg',
            topic:'installation',
            descript:'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Adipisci, officiis fugit accusamus magnam aliquam facilis.'
        },
        {
            img: '/img/video-solid.svg',
            topic:'access control',
            descript:'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Adipisci, officiis fugit accusamus magnam aliquam facilis.'
        },
    ]
</script>


   <div class="grid md:grid-cols-3 grid-cols-1 w-[60%] bg-white gap-x-40 gap-y-10 mx-5 mt-10">
       {#each cards as card }
        <div class="w-[200px] h-[300px] bg-blue-300 border-b-4 border-red-500 pt-5 rounded-lg">
            <img src="{card.img}" alt="" srcset="" class="h-[30px] mx-auto">
            <p class="text-center font-bold capitalize">{card.topic}</p>
            <p class="text-start p-3">{card.descript}</p>
        </div>
       {/each}
   </div>
