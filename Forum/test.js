
const User  = require("./user");
const Post  = require("./post");
const Post  = require("./comment");


test("can create user", () => {
    const   user1 = new User("Hafsa");
    expect(user1.name).toBe("Hafsa");
});

test("User can create a post", () => {
    let post1 = new Post("j.k","whats?", "this is it.");
    expect(post1.author).toBe("j.k");
    expect(post1.title).toBe("whats?");
    expect(post1.description).toBe("this is it.");
});


test("User respect Create comment", () => {
    let comment1 = new comment("huda","Epic!");
    expect(comment1.User).toBe("huda");
});


