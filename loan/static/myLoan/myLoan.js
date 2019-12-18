var $loan_status=jQuery(".loan_status").text();
console.log($loan_status)
if($loan_status=="正在审核"){
    jQuery(".loan_status").css("color","red");
}

var $money=$("#money").text();
var $interest_rate=$("#interest_rate").text();
var $time=$("#time").text();
var $the_term=$("#the_term").text();
var $progress=$("#progress").text();




