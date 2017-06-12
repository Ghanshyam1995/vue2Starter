var express = require("express");
var sql = require("mssql");
const router = express.Router();
const config = {
    user: 'gs',
    password: 'ghanshyam1995',
    server: 'localhost', // You can use 'localhost\\instance' to connect to named instance 
    database: 'SBAdmin3',


}
router.get('/Login', function(req, res, next) {

});
router.post('/Login', (req, res) => {
    sql.connect(config, err => {
        const request = new sql.Request();
        request.query("SELECT * From Users", (err, result) => {
            sql.close();
            res.json(result.recordset);

        })
    })

});


module.exports = router;