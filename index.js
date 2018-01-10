const express = require("express");
const passport=require("passport")
const cookieSession=require("cookie-session")
const keys = require("./server/config/keys");
const mongoose=require("mongoose");
mongoose.connect(keys.mongoURI);
require("./models/User");
require("./services/passport")
const app = express();

app.use(
    cookieSession({
        maxAge:12*30*24*60*60*1000,
        keys:[keys.cookieKey]
    })
)

app.use(passport.initialize());
app.use(passport.session());
require("./routes/authRoutes")(app);

const PORT = process.env.PORT || 5000;
app.listen(PORT);
