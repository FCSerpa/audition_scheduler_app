$(function(){

getEvent();

});

var eventRes;
var num = document.URL.split("");
num = num.splice((num.length - 24), 24);
num = num.join(separator = '');

//AJAX event data
function getEvent() {
	$.get('/api/events/' + num, function(res){
		eventRes = res
		var template = _.template($("#event-template").html());
		var eventData = template(eventRes[0]);
		$("#eventStuff").empty();
		$("#slotStuff").empty();
		$("#eventStuff").append(eventData);
		renderSlots();
		getSlotData();
	});
}

//render info for taken slots, and forms for available slots
function renderSlots(){
	for(i = 0; i < 10; i++){
		if (eventRes[0].slot[i]){
			$("#slotStuff").append("<li>" + (i + 1) + ". Actor name: " + eventRes[0].slot[i].name + ". Monologue: " + eventRes[0].slot[i].piece + ". Email: " + eventRes[0].slot[i].email + ".</li>")
		} else {
			$("#slotStuff").append("<li id='emptySlot" + i + "'>" + (i + 1) + ".  Sign up for this audition!   Monologue:  <input type='text' name='slot[piece]' id='monologueForm" + i + "' placeholder='character, play'><button id='slotInputBtn" + i + "'>sign up</button></li>");
		}
	}
}

//when someone signs up for an audition slot, put their info into the database
function getSlotData(){
	$("#slotInputBtn0").click(function(){
		var piece = $("#monologueForm0").val();
		console.log(piece);
		// ajax POST request to server
		$.post("/slots", {piece: piece, id: eventRes[0]._id})
			.done(function(res){
				getEvent();
			});
	});
	$("#slotInputBtn1").click(function(){
		var piece = $("#monologueForm1").val();
		console.log(piece);
		// ajax POST request to server
		$.post("/slots", {piece: piece, id: eventRes[0]._id})
			.done(function(res){
				getEvent();
			});
	});
	$("#slotInputBtn2").click(function(){
		var piece = $("#monologueForm2").val();
		console.log(piece);
		// ajax POST request to server
		$.post("/slots", {piece: piece, id: eventRes[0]._id})
			.done(function(res){
				getEvent();
			});
	});
	$("#slotInputBtn3").click(function(){
		var piece = $("#monologueForm3").val();
		console.log(piece);
		// ajax POST request to server
		$.post("/slots", {piece: piece, id: eventRes[0]._id})
			.done(function(res){
				getEvent();
			});
	});
	$("#slotInputBtn4").click(function(){
		var piece = $("#monologueForm4").val();
		console.log(piece);
		// ajax POST request to server
		$.post("/slots", {piece: piece, id: eventRes[0]._id})
			.done(function(res){
				getEvent();
			});
	});
	$("#slotInputBtn5").click(function(){
		var piece = $("#monologueForm5").val();
		console.log(piece);
		// ajax POST request to server
		$.post("/slots", {piece: piece, id: eventRes[0]._id})
			.done(function(res){
				getEvent();
			});
	});
	$("#slotInputBtn6").click(function(){
		var piece = $("#monologueForm6").val();
		console.log(piece);
		// ajax POST request to server
		$.post("/slots", {piece: piece, id: eventRes[0]._id})
			.done(function(res){
				getEvent();
			});
	});
	$("#slotInputBtn7").click(function(){
		var piece = $("#monologueForm7").val();
		console.log(piece);
		// ajax POST request to server
		$.post("/slots", {piece: piece, id: eventRes[0]._id})
			.done(function(res){
				getEvent();
			});
	});
	$("#slotInputBtn8").click(function(){
		var piece = $("#monologueForm8").val();
		console.log(piece);
		// ajax POST request to server
		$.post("/slots", {piece: piece, id: eventRes[0]._id})
			.done(function(res){
				getEvent();
			});
	});
	$("#slotInputBtn9").click(function(){
		var piece = $("#monologueForm9").val();
		console.log(piece);
		// ajax POST request to server
		$.post("/slots", {piece: piece, id: eventRes[0]._id})
			.done(function(res){
				getEvent();
			});
	});
}