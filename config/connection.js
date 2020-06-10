var mysql = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "password",
    database: "burgers_db"
});
// making the conneciton
connection.connect(function(err) {
    if (err){
    console.error(`error connecting: ${err.stack}`);
    return:
    }
    console.log(`connected as id ${connection.threadId}`);
});

module.exports = connection;