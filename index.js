let loadButton = document.querySelector(".load-button");
let loader = document.querySelector(".loader");
let userInfoSection = document.querySelector(".user-info-section");
let postSection = document.querySelector(".posts-section");
let loaderSection = document.querySelector(".loader-section");

loadButton.addEventListener("click", async () => {
    loader.style.display = "flex";
    document.querySelector(".loading-text").innerHTML = "Loading...";

   const user = await getUser();

   const posts = await getPosts(user.id);

   const comments = await getComments(posts[0].id);
   
        const obj = {
            user: user,
            posts: posts,
            comments:comments,
        }

        if(Object.entries(obj.user).length>0){
            userInfoSection.style.display='block';
            document.querySelector(".name").innerHTML=obj.user.name;
            document.querySelector(".email").innerHTML=obj.user.email;
        }

        if(obj.posts.length>0){
            postSection.style.display='block';
            document.querySelector(".post-title").innerHTML=obj.posts[0].name;
        
        }

        if(obj.comments.length>0){
        const commentsItem=document.querySelectorAll(".comments li");
        commentsItem.forEach((item ,index)=> {
                item.innerHTML=obj.comments[index].name;
        })
        }

        if(Object.entries(obj).length>0){
            let emptySection = document.querySelector(".empty-section");
            emptySection.style.display='none';
            loader.style.display = "none";
        }

})

const getUser = () => {
  
    return  ({
        id: 1,
        name: "Anu",
        email: "anu@example.com"
     })
      
}

const getPosts = (userId) => {
    if (userId) {

         return ([
            {
                id: 1,
                name: "My New Post",
            },
            {
                id: 2,
                name: "My Second Post",
            },
          ])
    
    }
    else {
        return null;
    }

}


const getComments = (postId) => {
    if (postId) {
  
           return ( [
            {
                id: 1,
                name: "Amazing Post",
            },
            {
                id: 2,
                name: "Stunning Pic",
            }
        ])
        
    }

    else {
        return  null;
    }

}


