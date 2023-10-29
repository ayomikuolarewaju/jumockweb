<script>
    const datas = [
        {id:1,img:'/img/team-1.jpg',name:'fullname',pos:'Manager'},
        {id:2,img:'/img/team-2.jpg',name:'fullname',pos:'Manager'},
        {id:3,img:'/img/team-3.jpg',name:'fullname',pos:'Manager'},
    ]
</script>


<div class="md:flex my-10 flex-1 justify-center items-center mx-auto relative gap-x-20 gap-y-20">
  {#each datas as data (data.id)}
  <div class="">
    <img src="{data.img}" alt="" srcset="">
    <h3 class="text-center font-bold text-2xl text-white bg-blue-800 p-2">{data.name} <br></h3>
    <p class="text-center font-sm text-2xl text-white bg-blue-800 p-1 border-b-4 border-red-800 rounded-b-lg">{data.pos}</p>
  </div>

  {/each}
</div>