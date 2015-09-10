$(function(){
getEvent();

});

function getEvent() {
	$.get('/api/events', function(res){
		var eventRes = res
		var template = _.template($("#event-template").html());
		var eventData = template(eventRes[0]);
		$("header").append(eventData);
	});
}