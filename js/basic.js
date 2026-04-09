function showpassword(){
   let image='';

   const img = document.getElementById("show-img");
   const input = document.getElementById("password");

   if(input.type==="password"){
      input.type="text";
      image='show';      
   }
   else{
      input.type="password";
      image='hide';
   }
   img.src=`images/${image}.png`;
}



   
function keydown(event){

   if (event.key==='Enter'){
      incorrect();
      accountPage();
      colorchange();

   }
}
