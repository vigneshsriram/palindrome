const express = require("express")
const router = express.Router()
const data = require("../data")
const postData = data.palindrome

router.get("/", (req, res) => {
    res.render("palindrome/static")
})

router.post("/result", (req, res) => {
    //res.render("palindrome/result")

    let bigPostData = req.body;
    var input = bigPostData.palindrome
 console.log(input);
    var PalindromeChecker = postData.isPalindrome(input)

    if(PalindromeChecker){
        res.render("palindrome/result" , {palindrome : input , title : "Results" , testclass: "success" , res: "It is a palindrome"})
    }
    else{
        res.render("palindrome/result" , {palindrome : input , title : "Results" , testclass: "fail" , res: "It is not a palindrome"})
    }
})

module.exports = router;