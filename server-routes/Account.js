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
        request.input('Email', sql.NVarChar, req.body.User.Email);
        request.input('Password', sql.NVarChar, req.body.User.Password);
        request.query("SELECT * From Users WHere Email=@Email AND Password=@Password", (err, result) => {
            sql.close();
            if (err)
                res.json(err);
            res.json(result.recordset);

        });

    })

});

router.get("/Users", (req, res) => {
    sql.connect(config, err => {
        const request = new sql.Request();
        request.query("SELECT * From Users", (err, record) => {
            sql.close();
            if (err)
                res.json(err);
            else {
                res.json(record.recordset);
            }
        })
    })
});


module.exports = router;