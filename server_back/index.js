const express = require('express');
const app = express();

const cors = require('cors')
app.use(express.json());
app.use(cors());


const db = require("./models");


//routers
const postRouter = require('./routes/posts')
app.use("/posts", postRouter)
const commentsRouter = require('./routes/comments')
app.use("/comments", commentsRouter)
const usersRouter = require('./routes/Users')
app.use("/auth", usersRouter )
const likesRouter = require("./routes/Likes");
app.use("/likes", likesRouter);

db.sequelize.sync({alter: true}).then(() => {
    app.listen(3002, () => {
        console.log("server running port on 3002");
    });

});

