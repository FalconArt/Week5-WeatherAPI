$('#clickBtn').click(function(){
	//$("#title").css("display","none");
	$.getJSON("api.openweathermap.org/data/2.5/weather?zip=" + $("#inputZip").val() + , function(result){
		for (var i = 0; i < result.length; i++){
			$('#swatchPanel').append('<div class = "forecast">' + result.coord[i].lon + '</div>' );

		}
	});
	$("#clickBtn").val("Check Another Location?");
});

skrollr.init();