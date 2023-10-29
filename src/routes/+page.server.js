import { fail, redirect } from '@sveltejs/kit'

export const actions = {
    post:async({request})=>{
     const data = await request.formData()
     const name = await data.get('name')
     const email = await data.get('email')
     if(!name){
        return fail(404,{name:'name is require'})
     }
     if(!email){
        return fail(404,{email:'email is require'})
     }
     const res = await fetch('http://127.0.0.1:3000/postdata',{ 
        method:'POST',
        headers:{
         'Content-Type':'application/json', 
        },
        body:JSON.stringify({
         name,
         email,
      }),
     })
     if(res.ok){
      throw redirect(303,'/thanks')
     }else{
      return
     }

    }
}


