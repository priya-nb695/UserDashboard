let loadButton = document.querySelector(".load-button");
let loader = document.querySelector(".loader");
let userInfoSection = document.querySelector(".user-info-section");
let postSection = document.querySelector(".posts-section");

loadButton.addEventListener("click", () => {
    loader.style.display = "flex";
    document.querySelector(".loading-text").innerHTML = "Loading..."
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
            {
                id: 2,
                name: "My Second Post",
            },
        ]

        const comments = getComments(posts[0].id);
        fullPostObject = {
            posts: posts,
            comments: comments
        }

        return fullPostObject;
    }
    else {
        return ({ message: "Post not found" })
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
        return ({ message: "Post not found" })
    }

}

const obj = getUser(getPosts);
console.log(obj);



