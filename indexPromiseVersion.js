let loadButton = document.querySelector(".load-button");
let loader = document.querySelector(".loader");
let userInfoSection = document.querySelector(".user-info-section");
let postSection = document.querySelector(".posts-section");
let loaderSection = document.querySelector(".loader-section");

loadButton.addEventListener("click", () => {
    loader.style.display = "flex";
    document.querySelector(".loading-text").innerHTML = "Loading...";
    const fullObj={};
    getUser()
    .then((user)=> {
        fullObj.user = user;
        return  getPosts(user.id)
    })
    .then((posts)=> {
        fullObj.posts = posts;
       return  getComments(posts[0].id)
    })
    .then((comments)=>{
        fullObj.comments = comments;

                if (Object.entries(fullObj.user).length > 0) {
                    userInfoSection.style.display = 'block';
                    document.querySelector(".name").innerHTML = fullObj.user.name;
                    document.querySelector(".email").innerHTML = fullObj.user.email;
                }

                if (fullObj.posts.length > 0) {
                    postSection.style.display = 'block';
                    document.querySelector(".post-title").innerHTML = fullObj.posts[0].name;

                }

                if (fullObj.comments.length > 0) {
                    const commentsItem = document.querySelectorAll(".comments li");
                    commentsItem.forEach((item, index) => {
                        item.innerHTML = fullObj.comments[index].name;
                    })
                }

                if (Object.entries(fullObj).length > 0) {
                    let emptySection = document.querySelector(".empty-section");
                    emptySection.style.display = 'none';
                    loader.style.display = "none";
                }
         })
   
})

const getUser = () => {

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const user = {
                id: 1,
                name: "Anu",
                email: "anu@example.com"
            }
            resolve(user);
        }, 1000)
    })

}

const getPosts = (userId) => {

    return new Promise((resolve, reject) => {

        if (userId) {
            setTimeout(() => {
                
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
                    resolve(posts);
               
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
                const comments = [
                    {
                        id: 1,
                        name: "Amazing Post",
                    },
                    {
                        id: 2,
                        name: "Stunning Pic",
                    }
                ]
                resolve(comments);
            }, 1000)

        }

        else {
            reject("Post Id not found");
        }

    })

}


