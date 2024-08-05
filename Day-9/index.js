const convert = require('js-convert-case');
const uuid = require('uuid');
let usersArray = [
    {uname :  "steve jobs", email :  "STevE@gmail.com",  cartId  :  ""},
    {uname :  "smith jobs", email :  "SmIth@gmail.com",  cartId  :  ""},
    {uname :  "Jones", email :  "JoneS@gmail.com",  cartId  :  ""},
];
usersArray.forEach((element) => {
    element.cartId = uuid.v6();
    const name = convert.toHeaderCase(element.uname);
    console.log(` user id : ${name} , email : ${element.email.toLowerCase()} , cartId : ${element.cartId.toUpperCase()}`);
})