let loadButton=document.querySelector(".load-button");
let loader=document.querySelector(".loader");
let userInfoSection=document.querySelector(".user-info-section");
let postSection=document.querySelector(".posts-section");

loadButton.addEventListener("click",()=>{
    loader.style.display="flex";
    document.querySelector(".loading-text").innerHTML="Loading..."
    
    
})

const getUser = (getposts)=>{
    const  userObj={
            id:1,
            name:"Anu",
            email:"anu@example.com"
        }

    
  
       getPosts(userObj.id,getComments);
    } 

 const getPosts = (userId,getComments)=>{
            if(userId){
                   
                 const  posts=[
                    {
                        id:1,
                        name:"My New Post",
                    },
                    {
                        id:2,
                        name:"My Second Post",
                    },
                    ]

                    getComments(posts[0].id)
            }
            else{
                return ({message:"Post not found"})
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
     



