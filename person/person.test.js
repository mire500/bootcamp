const  Person = require("./person")

test("Person sets name argument as property", () => {
    const jon = new Person("Jon", 22);
    console.log(jon)
    expect(jon.name).toBe("Jon");
});