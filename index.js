const app = require("./server.js");


const PORT = process.env.PORT || 8081;


app.listen(
    PORT, 
    () => console.log(`server ruing in port ${PORT}`)
)