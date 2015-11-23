$(function(){

getEvents();

});

function getEvents() {
	$.get('/api/events', function(res){
		var eventRes = res;
		var template = _.template($("#event-template").html());
		var eventItems = eventRes.map(function(event){
			event.date = moment(event.date).format('MMMM Do YYYY');
			return template(event);
		});

		$("#eventStuff").append(eventItems);
	});
}

