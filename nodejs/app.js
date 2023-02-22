const util = require('util');
const os = require('os');
const http = require('http');
const bodyParser = require("body-parser");
const express = require("express");
const app = express();


const mysql = require('mysql');
const connection = mysql.createConnection({
  host: 'vikdb.cnfmgqhcxpad.us-east-1.rds.amazonaws.com',
  user: 'vik',
  password: 'vikkeypair123',
  database: 'employee'
});

connection.connect((err) => {
  if (err) throw err;
  console.log('Connected to MySQL Server!');
});

app.use(express.static(__dirname));

// get our app to use body parser
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json());

app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.get("/", (req,res) => {
	res.redirect("/listEmployees");
});

app.get("/listEmployees",(req,res) => {
    connection.query('SELECT * from employees ', (err, rows) => {
        if(err) throw err;
        console.log('The data from users table are: \n', rows);
	res.render('employee-list', { title: 'Employees List', hname: os.hostname(), dbRows: rows});    });
});

app.post("/addEmployee", (req, res) =>  {
	console.log("Query params", req.body);
	var sql = util.format("INSERT INTO employees (LastName, FirstName, Email, City) VALUES ('%s', '%s', '%s', '%s')", req.body.lname, req.body.fname, req.body.email, req.body.city);
	connection.query(sql, (err, result) => {
    	if (err) throw err;
	res.redirect("/listEmployees");
	});
});


app.get("/deleteEmployee", (req, res) =>  {
	console.log("Delete request:", req.query.empID);
	var sql = util.format("DELETE FROM employees where empID=%s", req.query.empID);
	connection.query(sql, (err, result) => {
          if (err) throw err;
          res.redirect("/listEmployees");
        });
});


const server = http.createServer(app);
server.listen(8080);

