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
		eventRes[0].date = moment(eventRes[0].date).format('MMMM Do YYYY');
		//display time nicely-
		var hour = eventRes[0].time.slice(0, 2);
		var minute = eventRes[0].time.slice(3, 5);
		if (hour === '00') {
			eventRes[0].time = '12:' + minute + 'am';
		} else if (parseInt(hour) < 12) {
			eventRes[0].time = hour + ':' + minute + 'am';
		} else if (parseInt(hour) === 12) {
			eventRes[0].time = '12:' + minute + 'pm';
		} else {
			eventRes[0].time = (parseInt(hour) - 12) + ':' + minute + 'pm';
		}
		if (eventRes[0].time === '0') {
			eventRes[0].time = eventRes[0].time.slice(1, 7);
		}
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
			$("#slotStuff").append("<li id='emptySlot" + i + "'>" + (i + 1) + ".  Sign up for this audition!   Monologue:  <input type='text' name='slot[piece]' id='monologueForm" + i + "' placeholder='character, play'><button class='btn btnRed btn-sm btnNav' id='slotInputBtn" + i + "'>sign up</button></li>");
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
				window.location.reload();				
			});
	});
	$("#slotInputBtn1").click(function(){
		var piece = $("#monologueForm1").val();
		console.log(piece);
		// ajax POST request to server
		$.post("/slots", {piece: piece, id: eventRes[0]._id})
			.done(function(res){
				window.location.reload();
			});
	});
	$("#slotInputBtn2").click(function(){
		var piece = $("#monologueForm2").val();
		console.log(piece);
		// ajax POST request to server
		$.post("/slots", {piece: piece, id: eventRes[0]._id})
			.done(function(res){
				window.location.reload();
				
			});
	});
	$("#slotInputBtn3").click(function(){
		var piece = $("#monologueForm3").val();
		console.log(piece);
		// ajax POST request to server
		$.post("/slots", {piece: piece, id: eventRes[0]._id})
			.done(function(res){
				window.location.reload();
				
			});
	});
	$("#slotInputBtn4").click(function(){
		var piece = $("#monologueForm4").val();
		console.log(piece);
		// ajax POST request to server
		$.post("/slots", {piece: piece, id: eventRes[0]._id})
			.done(function(res){
				window.location.reload();
				
			});
	});
	$("#slotInputBtn5").click(function(){
		var piece = $("#monologueForm5").val();
		console.log(piece);
		// ajax POST request to server
		$.post("/slots", {piece: piece, id: eventRes[0]._id})
			.done(function(res){
				window.location.reload();
				
			});
	});
	$("#slotInputBtn6").click(function(){
		var piece = $("#monologueForm6").val();
		console.log(piece);
		// ajax POST request to server
		$.post("/slots", {piece: piece, id: eventRes[0]._id})
			.done(function(res){
				window.location.reload();
				
			});
	});
	$("#slotInputBtn7").click(function(){
		var piece = $("#monologueForm7").val();
		console.log(piece);
		// ajax POST request to server
		$.post("/slots", {piece: piece, id: eventRes[0]._id})
			.done(function(res){
				window.location.reload();
				
			});
	});
	$("#slotInputBtn8").click(function(){
		var piece = $("#monologueForm8").val();
		console.log(piece);
		// ajax POST request to server
		$.post("/slots", {piece: piece, id: eventRes[0]._id})
			.done(function(res){
				window.location.reload();
				
			});
	});
	$("#slotInputBtn9").click(function(){
		var piece = $("#monologueForm9").val();
		console.log(piece);
		// ajax POST request to server
		$.post("/slots", {piece: piece, id: eventRes[0]._id})
			.done(function(res){
				window.location.reload();

			});
	});
}