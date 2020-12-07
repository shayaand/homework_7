function gettingJSON(){
    //Display the forecast
    // Your code here.
    var forecast = document.querySelector("#forecast").style.display = 'block';

    //Set default location if one isn't provided
    if (document.getElementById("location").value == '')
    {
        var location = "Ann Arbor";
    }
    else {
        var location = document.getElementById("location").value;
    }
    // Your code here.
    console.log("Location is : " + location);
    var location = location.replace(/ /g, "+")

    //set default temperature format if one isn't provided
    // Your code here.
    var format = "Imperial";
    if (document.getElementById("fahrenheit").checked)
    {
    var format = "Imperial";
    }
    if (document.getElementById("celcius").checked)
    {
    var format = "Metric";
    }
  
    console.log("Format is " + format);

    //set the query  
    // Your code here. 
    var letter = location.substr(0,1);
    var bool = Number.isInteger(letter);
    console.log("User entered a zip code: " + bool);
    
    if (bool) 
    {
        var query = "https://api.openweathermap.org/data/2.5/weather?zip="+location+"&units="+format+"&appid=1cde239d077984d60aee33de101961a9";   
    }
    else {
        var query = "https://api.openweathermap.org/data/2.5/weather?q="+location+"&units="+format+"&appid=1cde239d077984d60aee33de101961a9";
    }
    console.log("Query is :" + query);

    //Create and set variables for each of the elements you
    //need to update, location, temp, the image, etc.

   
    var loc = document.querySelector("#loc").value;
    var temp = document.querySelector("#temp").value;
    var condition = document.querySelector("#condition").value;
    var tempImg = document.querySelector("#tempImg").src;
    
    // Your code here.


    $.getJSON(query,function(json){
        //Use returned json to update the values of the three 
        //elements in HTML.  
        //I would print the JSON to the console
        // Your code here.
        var loc = json.name;
        document.querySelector("#loc").innerHTML = loc;
        var temp = json.main.temp;
        console.log("Temp is " +temp);
        document.querySelector("#temp").innerHTML = temp;
        var condition = json.weather[0].description;
        document.querySelector("#condition").innerHTML = condition;
        console.log("Condition is " + condition);
        var tempImg = json.weather[0].icon;
        var tempImg = "http://openweathermap.org/img/wn/"+tempImg+".png";
        document.querySelector("#tempImg").src = tempImg;
        document.querySelecter("#tempImg").alt = condition;

        console.log(JSON.stringify(json));
        
        

	
    });
}
