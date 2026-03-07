let loadButton = document.querySelector(".load-button");
let loader = document.querySelector(".loader");
let userInfoSection = document.querySelector(".user-info-section");
let postSection = document.querySelector(".posts-section");
let loaderSection = document.querySelector(".loader-section");

loadButton.addEventListener("click", () => {
    loader.style.display = "flex";
    document.querySelector(".loading-text").innerHTML = "Loading...";
    // const obj = getUser(getPosts);
    getUser((user)=>{
    console.log("the user",user);
    getPosts(user.id,(posts)=>{
        console.log("the posts",posts);
        getComments(posts[0].id,(comments)=>{
            console.log("the comments",comments);

            
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
                const comments=document.querySelectorAll(".comments li");
                comments.forEach((item ,index)=> {
                        item.innerHTML=obj.comments[index].name;
                })
                }

                if(Object.entries(obj).length>0){
                    let emptySection = document.querySelector(".empty-section");
                    emptySection.style.display='none';
                    loaderSection.style.display = "none";
                }
      
            })
    })
})

})

const getUser = (callback) => {

    setTimeout(()=>{
        const user = {
        id: 1,
        name: "Anu",
        email: "anu@example.com"
     }
     callback(user);
    },1000)
  
}

const getPosts = (userId,callback) => {
    if (userId) {

        setTimeout(()=>{
         const posts = [
            {
                id: 1,
                name: "My New Post",
            },
            {
                id: 2,
                name: "My Second Post",
            },
          ]
          callback(posts);
        },1000)
   
    }
    else {
        return null;
    }

}


const getComments = (postId,callback) => {
    if (postId) {
        setTimeout(()=>{
            const comments= [
            {
                id: 1,
                name: "Amazing Post",
            },
            {
                id: 2,
                name: "Stunning Pic",
            }
        ]
        callback(comments);
        },1000)
        
    }

    else {
        return  null;
    }

}

//callback is passed as params to another function

