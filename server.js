require('dotenv').config();

const express = require('express');
const app = express();


app.get('/calcquery/:num1/:num2', (request, response) => {
	if(request.query.operation === "add"){
		response.send("Sum is " + (parseInt(request.params.num1) + parseInt(request.params.num2) + "."))
	}else if(request.query.operation === "multiply"){
		response.send("Product is " + (parseInt(request.params.num1) * parseInt(request.params.num2) + "."))
	}else if(request.query.operation === "divide"){
		response.send("Quotient is " + (parseInt(request.params.num1) / parseInt(request.params.num2) + "."))
	}else if(request.query.operation === "subtraction"){
		response.send("Difference is " + (parseInt(request.params.num1) - parseInt(request.params.num2) + "."))
	}else if(request.query.operation === "exponent"){
		response.send("Exponent is " + (parseInt(request.params.num1) ** parseInt(request.params.num2) + "."))
	}else {
		response.send("No operation!")
	}
  })


app.listen(process.env.PORT, () => {
    console.log(`listening to port ${process.env.PORT}`)
})




//Ternary Operator

// app.get('/calquery/:num1/:num2', (req, res) => {
//     req.query.operation === "add" ? res.send("The sum is " + (parseInt(req.params.num1) + parseInt(req.params.num2) + ".")) : "no operation"
//     req.query.operation === "multiply" ? res.send("The total is " + (parseInt(req.params.num1) * parseInt(req.params.num2) + ".")) : "no operation"
//     req.query.operation === "subtraction" ? res.send("The total is " + (parseInt(req.params.num1) - parseInt(req.params.num2) + ".")) : "no operation"
//     req.query.operation === "division" ? res.send("The total is " + (parseInt(req.params.num1) / parseInt(req.params.num2) + ".")) : "no operation"
//     req.query.operation === "exponents" ? res.send("The total is " + (parseInt(req.params.num1) ** parseInt(req.params.num2) + ".")) : "no operation"
// })