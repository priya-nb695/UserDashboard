let loadButton=document.querySelector(".load-button");
let loader=document.querySelector(".loader");
let userInfoSection=document.querySelector(".user-info-section");
let postSection=document.querySelector(".posts-section");

loadButton.addEventListener("click",()=>{
    loader.style.display="flex";
    document.querySelector(".loading-text").innerHTML="Loading..."
    
    
})

const getUser = ()=>{
    const userObj={};
    setTimeout(()=>{
        userObj={
            id:1,
            name:"Anu",
            email:"anu@example.com"
        }
    },1000);
  const userPosts=getPosts(userObj.id);

     
}

const getPosts = (userId)=>{
      if(userId){
            return ({
            data:[
            {
                id:1,
                name:"My New Post",
            },
            {
                id:2,
                name:"My Second Post",
            },
        ]})
      }
      else{
        return ({message:"User not found"})
      }
     

}
const getComments = (postId)=>{
    if(postId){
            return ([
        {
            id:1,
            name:"Amazing Post",
        },
        {
            id:2,
            name:"Stunning Pic",
        }
     ])
    }

    else{
         return ({message:"Post not found"})
    }
 
    
 
}