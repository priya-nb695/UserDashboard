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

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve( 
                {
                    id: 1,
                    name: "Anu",
                    email: "anu@example.com"
                }
            );
        }, 1000)
    })

}

const getPosts = (userId) => {

    return new Promise((resolve, reject) => {

        if (userId) {
            setTimeout(() => {
                
                    resolve(
                      [
                        { id: 1, name: "My New Post"},
                        { id: 2,name: "My Second Post"}
                      ]
                   );
               
            }, 1000);
        }
        else {
            reject("User id not found")
        }

    }

    )
}

const getComments = (postId) => {
    return new Promise((resolve, reject) => {

        if (postId) {
            setTimeout(() => {
              resolve (
                [ 
                   { id: 1,name: "Amazing Post"},
                   { id: 2, name: "Stunning Pic"}
                ]
             );
            }, 1000)

        }

        else {
            reject("Post Id not found");
        }

    })

}


