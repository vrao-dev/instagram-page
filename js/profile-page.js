

const leela = {
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

const charan = {
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

const siddith = {
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

const karthik = {
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

const teja = {
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
    
const venky = {
    id:'venky',
    username:'venkatesh_naidu_ande',
    name:'ꪜꫀ᭢ƙꪗ',
    dp:'venky-dp',
    followers:'274',
    following:'256',
    posts:'0',
    bio:'',
    number:'8125631523',
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

         console.log(inputElement1);
         console.log(input1);

         let users =[venky,leela,karthik,siddith,teja,charan];

         users.forEach((username) => {

            if(username.username || username.number===inputElement1)
                {
                   if(username.number===input1){ 
                    let accuser_1=username.id;
                   
                    localStorage.setItem('currentUser', accuser_1);
                    window.location.href = "profile-page.html";
                   }   
                } 
                    else{       
                     document.querySelector('.incorrect-password').innerHTML=`<p>${'Incorrect Username or password'}</p>`;
                    } 

        });

        return username;
        return inputElement1;

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
        const users = [venky, leela, karthik, siddith, teja, charan];
        const userObj = users.find(u => u.id === storedUserId);
        if (userObj) {
            user(userObj);
        }
    }
});


