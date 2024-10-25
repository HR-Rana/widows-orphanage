const app = require("./app");
const DB_connection = require("./config/db.config");
const port = 5000











app.listen(port, ()=>{
    console.log(`server is listening on ${port}`);
    DB_connection();

})