$(function(){

getEvents();

});

function getEvents() {
	$.get('/api/events', function(res){
		var eventRes = res;
		var template = _.template($("#event-template").html());
		var eventItems = eventRes.map(function(event){
			return template(event)
		});

		$("#eventStuff").append(eventItems);
	});
}

