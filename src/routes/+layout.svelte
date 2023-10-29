<script>
	
  import "../app.css";
  import Header from "$lib/components/Header.svelte";
  import Footer from "$lib/components/Footer.svelte";

</script>
  
  <main class="flex flex-col justify-between h-[100%]">
    <div class="sticky top-0 z-50"><Header/></div>
    
    <slot />
    <Footer/>
  </main>
