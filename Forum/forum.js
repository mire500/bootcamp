
class User {
    constructor( name, email, password ){
       this.name = name;
       this.email = email;
       this.password = password
    }
}
module.exports = User

class Post {
    constructor(Author, Title, Description) {
        this.Author = Author;
        this.Title - Title;
        this.Description = Description;
        this.Timestamp =  new Date();
    }
}

module.exports = Post

// let myPost = new Post ("Hafsa","What do you think?", "11:30am",)
// console.log(myPost)

class Comment extends Post {
    constructor(User, post, timestamp, comment){
        super(User, post, timestamp);
       this.User = User;
       this.Comment = comment;
       
    }
}

module.exports = Comment