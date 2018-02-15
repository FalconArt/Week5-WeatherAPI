var url = "http://api.openweathermap.org/data/2.5/weather?appid=ffbaed99f10375462add667213061774&units=imperial&zip=";

$('#checkBtn').click(function(){
	if( $("#inputZip").val().length == 5){
		$.getJSON(url + $("#inputZip").val(), function(result){	
			$("#weatherIcon").css("display","block");
			$("#cityName").html(result.name);
			$("#conditions").html(result.weather[0].description);
			$("#temp").html(result.main.temp + "°");
			var d = new Date();
			$("#time").html(d.toDateString() + "<br />" + d.toLocaleTimeString());
			$("#weatherIcon").attr("src","http://openweathermap.org/img/w/" + result.weather[0].icon + ".png");
	});

	}else {
			alert ("Please enter a valid zip code");
			$("#inputZip").val() = "";
	}
			$("#checkBtn").val("Check Another Location?");
});

skrollr.init();