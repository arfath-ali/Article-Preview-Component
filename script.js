const shareButton1 = document.getElementsByClassName("article__share-button-1")[0];
const shareButton2 = document.getElementsByClassName("article__share-button-2")[0];
const share = document.getElementsByClassName("article__share-meta")[0];

shareButton1.addEventListener("click", () => {
    if (share.classList.contains("article--share-meta-hidden")) {
        share.classList.remove("article--share-meta-hidden");
    }
})

shareButton2.addEventListener("click", () => {
    share.classList.add("article--share-meta-hidden");
})

