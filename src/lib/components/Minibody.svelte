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


   <div class="grid md:grid-cols-3 grid-cols-1 gap-x-40 gap-y-5 mx-5 mt-5 p-5">
       {#each cards as card }
        <div class="w-[250px] h-[300px] bg-white border-b-4 border-red-500 pt-2 rounded-lg">
            <img src="{card.img}" alt="" srcset="" class="h-[60px] p-3 text-white text-start items-start">
            <p class="text-start font-bold capitalize p-3 text-blue-700">{card.topic}</p>
            <p class="text-start p-3 text-blue-700">{card.descript}</p>
        </div>
       {/each}
   </div>
