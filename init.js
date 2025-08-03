const mongoose = require("mongoose");
const Chat = require("./models/chat.js");

main()
    .then(()=>{console.log("Connection Successful")})
    .catch((err)=>{console.log(err)});

async function main(){
    await mongoose.connect("mongodb://127.0.0.1:27017/whatsapp");
}

let allChats = [
    { from: "neha", to: "priya", msg: "Hello", created_at: new Date() },
    { from: "ajay", to: "rohit", msg: "Hey, what's up?", created_at: new Date() },
    { from: "simran", to: "neha", msg: "How are you?", created_at: new Date() },
    { from: "rohit", to: "ajay", msg: "All good, you?", created_at: new Date() },
    { from: "priya", to: "neha", msg: "Let's meet tomorrow!", created_at: new Date() },
    { from: "amit", to: "raj", msg: "Project completed?", created_at: new Date() },
    { from: "raj", to: "amit", msg: "Almost done!", created_at: new Date() },
    { from: "kiran", to: "tina", msg: "Happy Birthday!", created_at: new Date() },
    { from: "tina", to: "kiran", msg: "Thank you!", created_at: new Date() },
    { from: "vijay", to: "arun", msg: "Call me ASAP", created_at: new Date() },
    { from: "arun", to: "vijay", msg: "On it!", created_at: new Date() }
];

Chat.insertMany(allChats);

