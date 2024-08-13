// step-1: add eventListener in comment button
document.getElementById("button").addEventListener("click", function(){
    // step-2: get the comment (inside the textarea)
    // 1. get the textarea
    // 2. get the textarea text (using value)
    const commentBox = document.getElementById("textarea");
    const newComment = commentBox.value;
    // step-3: set new comment inside the comment container
    // 1. get the comment container
    // 2. crate new section
    // 3. crate new h3
    // 4. set the new comment inside h3
    // 5. add section to comment container
    // 6. add h3 to comment container
    const commentContainer = document.getElementById("comment-container");
    const createNewSection = document.createElement("section");
    const createNewH3 = document.createElement("h3");
    createNewH3.innerText = newComment;
    commentContainer.appendChild(createNewSection);
    createNewSection.appendChild(createNewH3);
    // step-4: clear the textarea (for another new comment)
    commentBox.value = '';
})