

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
    number:'8125631523',
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






function incorrect (){
  
         let input = document.querySelector('.input-password');
         let input1=input.value;
         let password = document.querySelector('.incorrect-password');

}

function accountPage(){


         let input = document.querySelector('.input-password');
         let input1=input.value;
         let inputElement = document.querySelector('.input-username');
         let inputElement1=inputElement.value;

         let users =[user_1,user_2,user_3,user_4,user_5,user_6,user_7,user_8,];
         let account;

         users.forEach((account) => {
            

            if (account.username === inputElement1 || account.number === inputElement1)
                {
                   if( account.number === input1 ){
                    let accuser_1=account.id;
                   
                   
                    localStorage.setItem('currentUser', accuser_1);
                    window.location.href = "profile-page.html";
                    document.querySelector('.incorrect-password').innerHTML=`<p>${''}</p>`;
 
                    
                } 
                  
            }

            else  if(input1===''){
                
                setTimeout(() => {
            document.querySelector('.incorrect-password').innerHTML=`<p>${'Enter Password'}</p>`;

            }, 1500);

         }
            else{   
                  setTimeout(() => {

                    document.querySelector('.incorrect-password').innerHTML=`<p>${'Incorrect Username or Password'}</p>`;

                 }, 1500);
                    
            }
           });

}


function user (accuser){
   
    accuser ;

    document.getElementById("profile-dp").src  = `dps/${accuser.dp}.jpg` 
    document.getElementById("nav-profile-dp").src  = `dps/${accuser.dp}.jpg`;
    document.getElementById("account-username").innerHTML=`${accuser.username}`;
    document.getElementById("account-name").innerHTML=`${accuser.name}`;
    document.getElementById("posts").innerHTML=`Posts ${accuser.posts}`;
    document.getElementById("followers").innerHTML=`Followers ${accuser.followers}`;
    document.getElementById("following").innerHTML=`Following  ${accuser.following}`;
    document.getElementById("bio").innerHTML=`${accuser.bio}`;
     
}


function colorchange (){
    
    document.getElementById('loginButton').innerHTML=`<img class="loading-img" src="images/loading-icon.png" alt="">`;
     setTimeout(() => {
            
        document.getElementById('loginButton').innerHTML=`Log in`;
            
    }, 2000);

    }


    document.getElementById('logout-button').addEventListener('click', function() {  
    document.getElementById('popup').classList.toggle('active-logout-popup-div');
    document.getElementById('main-profile-div').classList.toggle('blur-background');
 
});

document.addEventListener('DOMContentLoaded', () => {
    const storedUserId = localStorage.getItem('currentUser');
    if (storedUserId) {
        const users = [user_1,user_2,user_3,user_4,user_5,user_6,user_7,user_8];
        const userObj = users.find(u => u.id === storedUserId);
        if (userObj) {
            user(userObj);
        }
    }
});


