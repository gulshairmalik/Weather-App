
var api="https://fcc-weather-api.glitch.me/api/current?";

function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(getPosition);
    } else {
        alert("Geolocation is not supported by this browser.");
    }
}
// Get postion and API Data
function getPosition(position) {
   var lat=position.coords.latitude;
   var lng=position.coords.longitude;
   //Get JSON with JQuery
   $(document).ready(function(){
    $.getJSON(api+"lat="+lat+"&lon="+lng,function(data){
	  $("#desc").html(data.weather[0].description);
      $("#temp").html(""+data.main.temp+"°C");
      $("#icon").attr("src",data.weather[0].icon);
      $("#loc").html(""+data.name+", "+data.sys.country+"");
      //Temp Conversion Cel to Fah
      var F=0;
      $( "#cel" ).click(function() {
        if ($(this).html() == "Fahrenheit") 
        { 
          F=(((data.main.temp)*1.8)+32.0);
          $("#temp").html(""+F+"°F");
          $(this).html("Celsius"); 
        } 
        else if ($(this).html() == "Celsius") 
        {
          $("#temp").html(""+data.main.temp+"°C");
          $(this).html("Fahrenheit"); 
        } 
      });
    });
  });
}
