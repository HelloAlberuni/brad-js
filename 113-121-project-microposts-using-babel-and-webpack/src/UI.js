class UI{
    constructor(){
        this.posts = document.querySelector('#posts');
        this.titleInput = document.querySelector('#title');
        this.bodyInput = document.querySelector('#body');
        this.submiBtn = document.querySelector('.post-submit');
        this.posts = document.querySelector('#posts');
        this.postsContainer = document.querySelector('.postsContainer');
        this.card = document.querySelector('.card');
        this.edit = document.querySelector('.edit');
        this.idInput = document.querySelector('#id');
        this.forSate = 'add'; // Default state of the app
    }

    displayPosts(posts){
        let output = '';

        posts.forEach((post) => {
            output += `
                <div class ="card-mb-3">
                    <div class ="card-body">
                        <h4 class ="card-title">${post.title}</h4>
                        <p class ="card-text">${post.body}</p>
                        <a href="#" class="edit card-link" data-id="${post.id}"><i class="fa fa-pencil"></i></a>
                        <a href="#" class="delete card-link" data-id="${post.id}"><i class="fa fa-remove"></i></a>
                    </div>
                </div>
            `;
        });

        this.posts.innerHTML = output;
    }

    addPost(post){
        let output = '';

        output += `
            <div class ="card-mb-3">
                <div class ="card-body">
                    <h4 class ="card-title">${post.title}</h4>
                    <p class ="card-text">${post.body}</p>
                    <a href="#" class="edit card-link" data-id="${post.id}"><i class="fa fa-pencil"></i></a>
                    <a href="#" class="delete card-link" data-id="${post.id}"><i class="fa fa-remove"></i></a>
                </div>
            </div>
        `;

        this.posts.append(output);
    }

    displayError(msg, cls){
        let div = document.createElement('div');
        div.className = cls;
        div.textContent = msg;

        this.postsContainer.insertBefore(div, this.card)
    }

    // Fill the form with existing data when click on edit icon
    fillForm(id, title, desc){
        this.idInput.value = id;
        this.titleInput.value = title;
        this.bodyInput.value = desc;
    }
}

export const ui = new UI();