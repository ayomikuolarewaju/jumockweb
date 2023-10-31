<script>
    import Carousel from '$lib/components/Carousel.svelte';
    import { fail } from '@sveltejs/kit'
    import { Star,Medal } from 'lucide-svelte';
    import Minibody from '$lib/components/Minibody.svelte';
    import Teamtag from '$lib/components/Teamtag.svelte';
    import Allpagestag from '$lib/components/Allpagestag.svelte';
    import { fade, blur, fly, slide, scale } from "svelte/transition";
    import { quintOut } from "svelte/easing";
    export let form
    $: console.log(form)
  </script>
  
  <div class="flex flex-col h-[100%]">
    <div class="relative flex flex-col">
      <section id="/" in:scale out:fly> 
       
        <div>
          <Carousel/>
        </div>
       
      </section>
       <section id="about" class="flex flex-col mt-10 text-white" in:scale out:fade>
        <Allpagestag loc ={'About Us'}/>
        <div class="md:flex flex-row-reverse w-[80%] rounded-md p-5 items-center justify-around bg-blue-700 gap-10 md:mt-10 px-10 mx-auto" >
          <div>
           <img src="/img/about.jpg" alt="" srcset="">
          </div>
          <div class="flex flex-col flex-1 text-start gap-3 ">
            <h4 class="text-white text-start mt-2">ABOUT US</h4>
            <div>
              <p class="text-3xl text-white font-bold capitalize w-full text-start">We offer quality CCTV systems & services</p>
            </div>
            <div class="font-semibold text-start">
             <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Adipisci, officiis fugit accusamus magnam aliquam facilis.</p>
            </div>
            <div>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati hic saepe excepturi ipsum. Itaque perferendis nemo nisi esse dolores quidem sunt culpa, explicabo officiis quia?</p>
            </div>
            <div class="md:flex md:gap-5 items-center justify-center mx-auto">
             <button class="bg-blue-500 h-[120px] w-[200px] mx-auto border-b-4 border-red-800 rounded-lg mb-3">
             <svelte:component this="{Star}" class="text-white items-center justify-center mx-auto" />
             <p class="text-white font-semibold capitalize">16 years exprience</p>
             </button>
             <button class="bg-red-500 h-[120px] w-[200px] border-b-4 border-blue-800 rounded-lg mb-3">
              <svelte:component this="{Medal}" class="text-white items-center justify-center mx-auto"/>
              <p class="text-white font-semibold capitalize">Award winning</p>
             </button>
            </div>
          </div>
        </div>

       </section>
       <section id="service" class="flex flex-col mt-5 text-white gap-5" in:scale out:fly>
        <Allpagestag loc ={'Our Services'} />
        <div class="md:flexflex-col w-[80%] items-center bg-blue-700 gap-20 px-10 mx-auto py-3 rounded-md">
          <div>
           <img src="/img/carousel-2.jpg" alt="" srcset="">
          </div>
          <div class="flex flex-col flex-1 md:text-start gap-5 ">
            <h4 class="text-white text-start mt-10">Our Services</h4>
            <div>
              <p class="text-3xl text-white font-bold capitalize w-full text-start">We offer quality CCTV systems & services</p>
            </div>
            <div class="font-semibold text-start">
             <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Adipisci, officiis fugit accusamus magnam aliquam facilisLorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati hic saepe excepturi ipsum. Itaque perferendis nemo nisi esse dolores quidem sunt culpa, explicabo officiis quia?</p>
            </div> 
            <div class="md:flex md:gap-5 items-center justify-center mx-auto">
             <button class="bg-blue-500 h-[120px] w-[200px] mx-auto border-b-4 border-red-800 rounded-lg mb-3">
             <svelte:component this="{Star}" class="text-white items-center justify-center mx-auto" />
             <p class="text-white font-semibold capitalize">16 years exprience</p>
             </button>
             <button class="bg-red-500 h-[120px] w-[200px] border-b-4 border-blue-800 rounded-lg mb-3">
              <svelte:component this="{Medal}" class="text-white items-center justify-center mx-auto"/>
              <p class="text-white font-semibold capitalize">Award winning</p>
             </button>
            </div>
            <div class="flex ">
              <Minibody/>
            </div>
          </div>
        </div>
       
      </section>
  <section id="team" class="flex flex-col mt-10" in:scale out:fade>
    <Allpagestag loc ={'Our Team'}/>
    <div class="flex flex-col w-[80%] items-center justify-center mx-auto mt-3 bg-blue-700 p-5 rounded-lg">
      <div class="flex flex-col items-center justify-center w-[400px] ">
        <h4 class="text-white">Our Dependable Team</h4>
        <div>
          <p class="text-3xl text-white font-bold capitalize w-full text-center">Our professional team members</p>
        </div>
      </div>
      <div>
        <Teamtag/>
      </div>
  </div>
  </section>
  <section id="contact" class="flex flex-col mt-10" in:scale out:fade>
    <Allpagestag loc ={'Contact Us'}/>
    <div class="md:flex bg-blue-700 mx-auto gap-10 mt-5 mb-5 rounded-lg w-[80%]">
      <div class=" flex flex-col flex-1  text-white ml-10 p-5 justify-around w-[80%]">
          <form action="?/post&/thanks" method="POST" class="flex-col w-full text-bold text-start text-sm ">
              <label for="name" class=" font-bold text-lg text-start mb-5">Name</label><br>
              <input type="text" name="name" class:border-red-800 = {form?.name} class="w-full h-[50px] p-5 text-lg text-black mt-5 mb-5 rounded-md"><br>
              <label for="name" class=" font-bold text-lg text-start">Email</label><br>
              <input type="email" name="email" class:border-red-800 = {form?.email}  class="w-full h-[50px] p-5 text-lg text-black mt-5 rounded-md"><br>
              <button type="submit" class="bg-blue-300 h-[50px] w-[150px] text-lg text-white p-3 my-5 rounded-lg hover:bg-blue-700 hover:text-white hover:font-semibold" >Submit</button>
            
          </form>
      </div>
      <div class="bg-white rounded-lg flex flex-col text-blue-700 md:w-[50%] w-[70%] md:m-5 p-5 mb-5 ml-10">
       <h4 class="text-2xl text-start font-bold">Office Address</h4>
       <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laboriosam sit dicta rem necessitatibus! Fuga illum quisquam quas nobis natus voluptatem!</p>
      </div>
  </section>
    </div>
  </div>

