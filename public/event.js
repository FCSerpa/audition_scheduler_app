$(function(){
getEvent();
});

var eventRes;

//AJAX event data
function getEvent() {
	$.get('/api/events/55f0f18f050e250b862d3f6e', function(res){
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
			console.log(eventRes[0].slot[i].name)
			$("#slotStuff").append("<li>" + (i + 1) + ". Actor name: " + eventRes[0].slot[i].name + ", Monologue: " + eventRes[0].slot[i].piece + ", Email: " + eventRes[0].slot[i].email + ".</li>")
		} else {
			$("#slotStuff").append("<li id='emptySlot" + i + "'>" + (i + 1) + "Sign up for this audition!  monologue:  <input type='text' name='slot[piece]' id='monologueForm" + i + "' placeholder='character, play'><button id='slotInputBtn" + i + "'>sign up</button></li>");
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
}