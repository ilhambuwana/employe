function addPost() {
    const feed = document.getElementById('feed');
    const postText = document.getElementById('post-text').value;
    const postImage = document.getElementById('post-image').files[0];
    
    if (!postText && !postImage) {
        alert('Please enter some text or choose an image.');
        return;
    }

    const post = document.createElement('div');
    post.className = 'post';

    if (postText) {
        const postTextElement = document.createElement('p');
        postTextElement.innerText = postText;
        post.appendChild(postTextElement);
    }

    if (postImage) {
        const reader = new FileReader();
        reader.onload = function(e) {
            const img = document.createElement('img');
            img.src = e.target.result;
            post.appendChild(img);
        }
        reader.readAsDataURL(postImage);
    }

    const actions = document.createElement('div');
    actions.className = 'post-actions';
    actions.innerHTML = `
        <button onclick="likePost(this)">Like</button>
        <button onclick="commentPost(this)">Comment</button>
        <button onclick="sharePost()">Share</button>
    `;
    post.appendChild(actions);

    const commentSection = document.createElement('div');
    commentSection.className = 'comment-section';
    commentSection.innerHTML = `
        <input type="text" placeholder="Write a comment...">
        <button onclick="addComment(this)">Post</button>
        <div class="comments"></div>
    `;
    post.appendChild(commentSection);

    feed.insertBefore(post, feed.firstChild);

    document.getElementById('post-text').value = '';
    document.getElementById('post-image').value = '';
}

function likePost(button) {
    button.innerText = 'Liked';
    button.disabled = true;
}

function commentPost(button) {
    const commentInput = button.parentElement.nextElementSibling.firstElementChild;
    commentInput.focus();
}

function addComment(button) {
    const commentInput = button.previousElementSibling;
    const commentText = commentInput.value;
    if (!commentText) {
        return;
    }

    const commentsDiv = button.nextElementSibling;
    const comment = document.createElement('div');
    comment.innerText = commentText;
    commentsDiv.appendChild(comment);

    commentInput.value = '';
}

function sharePost() {
    alert('Shared!');
}
