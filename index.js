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

function getUser1(getPosts1){
    setTimeout(()=>{
        const user={
            id:1,
            name:"anuu",
        }
      //callback(user);
      getPosts1(user.id,(post) => {console.log("the posts are ",post)});
    },1000)
}

// getUser1((user)=>{console.log("the user is",user)});

function getPosts1(userID,callback){
     setTimeout(()=>{
        if(userID){
        const post=[
           {
            id:1,
            name:"first post",
           },
           {
            id:1,
            name:"second post",
           }
        ]
           callback(post);
        }
       
     
    },1000);
}
getUser1(getPosts1);

