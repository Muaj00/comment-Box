//step 1 add event listener
document.getElementById('Submit-comment').addEventListener('click', function() {

    //step 2 call input text
    const commentBox = document.getElementById('new-comment');
    const userComment = commentBox.value;

    //Step 3 Create Comment Paragraph
    const newComment = document.createElement('p');
    newComment.innerText = userComment;

    //Step 4 append comment
    const commentBoxContainer = document.getElementById('comment-box');
    commentBoxContainer.appendChild(newComment);

    //step 5 clean the comment box

    commentBox.value = '';

})