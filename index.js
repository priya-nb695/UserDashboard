let loadButton = document.querySelector(".load-button");
let loader = document.querySelector(".loader");
let userInfoSection = document.querySelector(".user-info-section");
let postSection = document.querySelector(".posts-section");

loadButton.addEventListener("click", () => {
    loader.style.display = "flex";
    document.querySelector(".loading-text").innerHTML = "Loading...";
    const obj = getUser(getPosts);
    console.log(obj);

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
    }
})
//need to add error cases n fail cases
const getUser = (getPosts) => {
    const userObj = {
        id: 1,
        name: "Anu",
        email: "anu@example.com"
    }

    const fullPostObject = getPosts(userObj.id, getComments);
    const fullUserObject = {
        user: userObj,
        posts: fullPostObject.posts,
        comments: fullPostObject.comments,
    }

    return fullUserObject;
}

const getPosts = (userId, getComments) => {
    if (userId) {

        const posts = [
            {
                id: 1,
                name: "My New Post",
            },
            // {
            //     id: 2,
            //     name: "My Second Post",
            // },
        ]

        const comments = getComments(posts[0].id);
        fullPostObject = {
            posts: posts,
            comments: comments
        }

        return fullPostObject;
    }
    else {
        return null;
    }

}

const getComments = (postId) => {
    if (postId) {
        return ([
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
//  getUser1((user)=>{
//     getPosts1(pos)
//  })

