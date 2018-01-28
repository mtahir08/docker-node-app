const express = require("express");

const app = express();
const users = [
    { name: 'user1', email: 'user1@gmail.com' },
    { name: 'user2', email: 'user2@gmail.com' },
    { name: 'user3', email: 'user3@gmail.com' },
    { name: 'user4', email: 'user4@gmail.com' },
    { name: 'user5', email: 'user5@gmail.com' },
    { name: 'user6', email: 'user6@gmail.com' }
]

app.get("/users", (req, res) => {
    res.json(users)
})

app.get("/user/:userId", (req, res) => {
    console.log()
    res.send(users[req.params.userId])
})
app.get("*", (req, res) => {
    res.send("<h1> Hello Docker</h1>")
})

app.listen(3000, (error) => {
    if (error) {
        console.log(error);
        return
    }
    console.log("SERVER IS RUNNING!!");
})