import { fail, redirect } from '@sveltejs/kit'
import nodemailer from 'nodemailer'

export const actions = {
    post:async({request})=>{
     const data = await request.formData()
     const name = await data.get('name')
     const email = await data.get('email')
     if(!name){
       throw redirect(303,'/noaction')
     }
     if(!email){
       throw redirect(303,'/noaction')
     }

      const transporter = nodemailer.createTransport({
              service: 'gmail',
              auth: {
                 user: 'jumockintegrated@gmail.com',
                pass: 'jumockintegrated1#'
              }
         });
            
             const mailOptions = {
               from: 'jumockintegrated@gmail.com',
               to: 'ayomiku@ymail.com',
              subject: 'Sending Email using website',
              text: email  +  name,
            };
            
             transporter.sendMail(mailOptions, function(error, info){
              if (error) {
                console.log(error);
              } else {
                 console.log('Email sent: ' + info.response);
    }})
     
     if(name && email){
      throw redirect(303,'/thanks')
     }else{
      throw redirect(303,'/noaction')
     }

    }
}


