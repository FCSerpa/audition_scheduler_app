$(function(){

	knowUser();
	
});

function knowUser() {	
	$.get("/api/users/current", function(user){
		console.log(isUser(user));
		$("div#navInUpBtns").toggleClass("hidden", isUser(user));
		$("#eventCreateBtn").toggleClass("hidden", !isUser(user));
		$("div#navOutBtns").toggleClass("hidden", !isUser(user));
		$("p#userOnly").toggleClass("hidden", isUser(user));
	})
};

function isUser(user) {
	if (user) {
		return true;
	} else {
		return false;
	}
};