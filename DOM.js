//Question 1
document.getElementById("btn1").addEventListener("click", function(){
	document.getElementById("new-text").innerText="thnx"
	document.getElementById("new-text2").innerText=""
});

document.getElementById("btn2").addEventListener("click", function(){
	document.getElementById("new-text2").innerText="thnx"
	document.getElementById("new-text").innerText=""
});

//Question 2

document.getElementById("hover").addEventListener("mouseover", function(){
	document.getElementById("hover").innerText="plz leave me alone :("}
);

document.getElementById("hover").addEventListener("mouseleave", function(){
	document.getElementById("hover").innerText="Uhh...excuse me?"
});

//Question 3

document.querySelector('html').addEventListener("keypress", function(){
	var key = event.keyCode;
	
	document.getElementById('btnpress').innerHTML=String.fromCharCode(key);
	
})

//Question 4


function checkPassword(name){
	var name = document.getElementById('password').value;
	
	if(name.length<8){
		alert("Password must be 8 characters...lazy");
	}else if(name.length>20){
		alert("Password is too damn long");
	} else if (/\d/.test(name) && /[a-zA-Z]/.test(name)){
        return true;
	} else {

    alert("Password needs number and letters");
	}}
	
function checkUsername(name){
	var name = document.getElementById('username').value
	if(/\d/.test(name)==true){
		return true;
	
}else{
	alert("must contain a number")
}}

function infoChecker(){
	if(checkPassword()==true && checkUsername()==true){
		alert("You Go Girl");
	}else{
		alert("bad job")
	}
}


