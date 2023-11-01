<script>
 

   const images =[
    {
        tag:'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ex, ad dolor! Delectus optio itaque assumenda?',
        pic:'/img/carousel-1.jpg',
         btn:'Grip Offer'},
    {
        tag:'Rorem, ipsum dolor sit amet consectetur adipisicing elit. Ex, ad dolor! Delectus optio itaque assumenda?',
        pic:'/img/carousel-2.jpg',
        btn:'Grip Offer'},
    {
        tag:'Zorem, ipsum dolor sit amet consectetur adipisicing elit. Ex, ad dolor! Delectus optio itaque assumenda?',
        pic:'/img/carousel-3.jpg',
        btn:'Grip Offer'},
    {
        tag: 'CCTV OFFER save 50% on your first service order',
        pic:'/img/carousel-1.jpg',
        btn:'Grip Offer'}
    ]
    let count = 0
    const counter =()=>{   
      count < 3 ? count++ : count = 0
    }
    setInterval(()=>{
        count < 3 ? count++ : count = 0
        
    },3000)
    
    
</script>

<div class="flex justify-center items-center mx-auto h-[300px] w-full relative mb-12">
    <!-- <button on:click={()=>{counter()}} class ="flex text-5xl z-50 absolute left-10 text-white">
        &RightAngleBracket;
    </button> -->
    <p class="absolute top-[200px] mx-auto my-auto z-10 text-white md:text-2xl text-lg w-[300px]  md:w-[600px]">{images[count].tag}</p>
    <img src='{images[count].pic}' alt="" srcset="" class="object-contain"><br/>
    <button class=" absolute -bottom-16 z-10 capitalize font-bold text-white text-xl drop-shadow-lg bg-blue-400 rounded-md p-4 hover:bg-blue-700"><a href="#contact">{images[count].btn}</a></button>
    <!-- <button on:click={()=>{counter()}} class ="flex text-5xl z-50 absolute right-10 text-white">
        &LeftAngleBracket;
    </button> -->
</div>

