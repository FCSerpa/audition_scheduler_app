$(function(){
getEvent();

});

function getEvent() {
	$.get('/api/events', function(res){
		var eventRes = res
		var template = _.template($("#event-template").html());
		var eventData = template(eventRes[0]);
		$("header").append(eventData);
		//fillSlots();
		
			for(i = 0; i < 10; i++){
				if (eventRes[0].slot[i]){
					$("#slotList").append(eventRes[0].slot[i]);
				} else {
					$("#slotList").append("<li id='emptySlot'>Sign up for this audition: <input type='text' name='slot[piece]'><button id='slotInputBtn'></li>");
				}
			}
	});
}
/*
function fillSlots(){
	for(i = 0; i <= 10; i++){
		if (eventData.Slots[i].name){
			$("#slotList").append(eventData[i].Slots);
		} else {
			$("#slotList").append("<li id='emptySlot'>Sign up for this audition: <input type='text' name='slot[piece]'><button id='slotInputBtn'></li>");
		}
	}
}
*/
function getSlotData(){
	//key listener on button
	//get value from field
	//push slot
	//re-render slots(removing old slots)
}