

const user_1 = {
    id:'leela',
    username:'leela_7997',
    name:'leela_7997',
    dp:'leela-dp',
    followers:'171',
    following:'172',
    posts:'0',
    bio:'',
    number:'9347582189',
}

const user_2 = {
    id:'charan',
    username:'_c_h_a_r_a_n_7_',
    name:'CHARAN 😎',
    dp:'charan-dp',
    followers:'404',
    following:'410',
    posts:'0',
    bio:'@pawankalyan <br> @mahi7781,@ruutu.131',
    number:'9121669869',
}

const user_3 = {
    id:'siddith',
    username:'__siddhu_17__',
    name:'',
    dp:'siddith-dp',
    followers:'228',
    following:'162',
    posts:'0',
    bio:'',
    number:'9133185815',
}

const user_4 = {
    id:'karthik',
    username:'karthik_bethu_',
    name:'Kᴀʀᴛʜɪᴋ Nᴀɪᴅᴜ❤️‍🔥',
    dp:'karthik-dp',
    followers:'422',
    following:'245',
    posts:'0',
    bio:'🇰 🇦 🇷 🇲 🇦 🥀',
    number:'8074778900',
}

const user_5 = {
    id:'teja',
    username:'venkat_teja_9848',
    name:'VENKAT TEJA❤️‍🔥',
    dp:'teja-dp',
    followers:'604',
    following:'516',
    posts:'3',
    bio:"Dhanam Moolam Idam Jagath 💸<br>Trade today, inspire tomorrow📈",
    number:'7569926788',
}
    
const user_6 = {
    id:'venky',
    username:"venkatesh_naidu_ande",
    name:'ꪜꫀ᭢ƙꪗ',
    dp:'venky-dp',
    followers:'274',
    following:'256',
    posts:'0',
    bio:'',
    number:'8125',
}
const user_7 = {
    id:'raju',
    username:'kallauru_raja122',
    name:'𝙍𝘼𝙅𝘼',
    dp:'raju-dp',
    followers:'288',
    following:'910',
    posts:'33',
    bio:'🇷‌🇦‌🇯‌🇦 <br> HEARTLESS MONSTER 😈<br> 𝙄 𝘿𝙊𝙉𝙏 𝙎𝘼𝙔 𝙈𝙐𝘾𝙃,𝙄 𝙇𝙄𝙎𝙏𝙀𝙉<br> WISH ME ON JUNE 5<br>MEGASTAR FAN<br>@chenna_kesava_reddy_vennapusa 🫂',
    number:'6304153338',
}
const user_8 = {
    id:'mani',
    username:'poornamanideep',
    name:'Poornamanideep',
    dp:'mani-dp',
    followers:'612',
    following:'738',
    posts:'6',
    bio:'G.PoOrNaMaNiDeEp',
    number:'9845133940',
}
const user_9 = {
    id:'sweety',
    username:'queen_of_heart_sup',
    name:'𝓢𝓾𝓹𝓻𝓲𝔂𝓪 𝓖𝓪𝓲𝓴𝔀𝓪𝓭',
    dp:'sweety-dp',
    followers:'388',
    following:'596',
    posts:'395',
    bio:'I make the future of students 🌟. Assistant Professor✍️<br>Daddys_Girl♥️<br>♾️',
    number:'8308224906',
}






function incorrect (){
  
         let input = document.querySelector('.input-password');
         let input1=input.value;
         let password = document.querySelector('.incorrect-password');
        
         if(input1===''){
            password.innerHTML=`<p>${'Enter Password'}</p>`;
         }

         
}


function accountPage(){
   
         let input = document.querySelector('.input-password');
         let input1=input.value;
         let inputElement = document.querySelector('.input-username');
         let inputElement1=inputElement.value;

        

         //let users =[venky,leela,karthik,siddith,teja,charan,raju];
         let users =[user_1,user_2,user_3,user_4,user_5,user_6,user_7,user_8,user_9];
         let account;

         users.forEach((account) => {
            

            if (account.username === inputElement1 || account.number === inputElement1)
                {
                   if( account.number === input1 ){
                    let accuser_1=account.id;
                    
                   
                    localStorage.setItem('currentUser', accuser_1);
                    window.location.href = "profile-page.html";
                    document.querySelector('.incorrect-password').innerHTML=`<p>${null}</p>`;
                    
                } 
                  
            }
            else       
                    document.querySelector('.incorrect-password').innerHTML=`<p>${'Incorrect Username or password'}</p>`;
                    
            
           
            
        });
        
         
        
         

    

}




function user (accuser){
   
    
    accuser ;
   
    let dpic = document.getElementById("profile-dp"); 
    dpic.src  = `dps/${accuser.dp}.jpg`;

    let smalldpic = document.getElementById("nav-profile-dp"); 
    smalldpic.src  = `dps/${accuser.dp}.jpg`;


     let username =document.getElementById("account-username"); 
     username.innerHTML=`${accuser.username}`;

     let name =document.getElementById("account-name"); 
     name.innerHTML=`${accuser.name}`;

     let posts =document.getElementById("posts"); 
     posts.innerHTML=`Posts ${accuser.posts}`;

     let followers =document.getElementById("followers"); 
     followers.innerHTML=`Followers ${accuser.followers}`;

     let following =document.getElementById("following"); 
     following.innerHTML=`Following  ${accuser.following}`;

     let bio =document.getElementById("bio"); 
     bio.innerHTML=`${accuser.bio}`;
     
}

document.addEventListener('DOMContentLoaded', () => {
    const storedUserId = localStorage.getItem('currentUser');
    if (storedUserId) {
        const users = [user_1,user_2,user_3,user_4,user_5,user_6,user_7,user_8,user_9];
        const userObj = users.find(u => u.id === storedUserId);
        if (userObj) {
            user(userObj);
        }
    }
});


