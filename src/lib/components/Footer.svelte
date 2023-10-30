<script>
  import { Facebook, LucideInstagram, Twitter } from "lucide-svelte";
    
</script>
<footer class="flex flex-col bg-blue-700 justify-center items-center text-white p-10">
    <div class="flex justify-center items-center gap-32 w-full">
     <div class="flex flex-col w-[550px]">
        <h5 class="font-bold mt-1 mb-1 text-white">Quick Link</h5>
        <nav >
            <ul class="flex flex-col justify-between gap-2 font-bold ">
                <li >
                    <a href="/">Home</a>
                </li>
                <li >
                    <a href="/about">About Us</a>
                </li>
                <li >
                    <a href="/services">Our Services</a>
                </li>
                <li >
                    <a href="/contact">Contact Us</a>
                </li>
                <li>
                    <a href="/gallery">Our Gallery</a>
                </li>
            </ul>
        </nav>
     </div>
   
     <div class="flex flex-col gap-5 w-[300px]">
        <h5 class="font-bold text-white mt-1 mb-1 capitalize"> engage us our social media handles</h5>
        <ul class="flex gap-5">
            <li class="w-[50px] h-[50px] bg-gray-500 rounded-full aspect-square text-center flex items-center mx-auto justify-center"><a href="/"><svelte:component this="{Facebook}" class="text-white"/></a></li>
            <li class="w-[50px] h-[50px] bg-gray-500 rounded-full aspect-square text-center flex items-center mx-auto justify-center"><a href="/"><svelte:component this="{Twitter}" class="text-white "/></a></li>
            <li class="w-[50px] h-[50px] bg-gray-500 rounded-full aspect-square text-center flex items-center mx-auto justify-center"><a href="/"><svelte:component this="{LucideInstagram}" class="text-white"/></a></li>
        </ul>
     </div>
    </div>
    <div class="h-[50px] bg-blue-400 flex justify-between w-full text-center px-10 py-3 text-white font-bold mt-3 rounded-xl">
           <div>goood thinking</div>
           <div>good services</div>
    </div>
</footer>