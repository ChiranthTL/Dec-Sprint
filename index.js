const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.json());
// app.use("/api/users",require('./routes/api/Users'))S

app.listen(PORT, (error) => {
    console.log('listen :' + PORT)
    if (!error)
        console.log("Server is Successfully Running, and App is listening on port " + PORT)
    else
        console.log("Error occurred, server can't start", error);
});