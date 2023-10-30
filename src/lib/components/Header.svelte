<script>
    import { Medal} from 'lucide-svelte';
    const tags = [
        {index:1,link:'#/',title:'Home'},
        {index:2,link:'#about',title:'About Us'},
        {index:3,link:'#service',title:'Our Services'},
        {index:4,link:'#team',title:'Our Team'},
        {index:5,link:'#contact',title:'Contact Us'},
        {index:6,link:'#gallery',title:'Our Gallery'},

    ]
</script>
<div class=" flex w-[100%]  h-[70px] justify-between px-5 pt-5 bg-blue-700">
    <div><img src="/img/video-solid.svg" alt="" srcset="" class="h-[40px] text-white"></div>
    <div>
        <nav >
            <ul class="md:flex justify-between gap-10 font-bold hidden">
             {#each tags as tag (tag.index)}
             <li class="hover:border-b-4 border-solid border-orange-500 hover:pb-5 text-white">
                <a href={tag.link}>{tag.title}</a>
            </li>
             {/each}
            </ul>
        </nav>
    </div>
    <div class="flex items-center font-medium p-5 text-white mb-5">
        <a href="/contact" class="flex mb-3 mx-auto mt-3">
            <img src="/img/whats.png" alt="" srcset="" class="text-white items-center justify-center mx-auto w-[40px] h-[40px]">
        </a>
    </div>
</div>