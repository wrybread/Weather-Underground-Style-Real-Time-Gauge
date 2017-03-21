


// where is your live_data.json file?
var path_to_live_data = "../live_data/live_data.json";






// a couple of global variables to keep track of things between updates
var last_update;
var last_bearing;


function update_wu_gauge() {

    $.getJSON(

        path_to_live_data,  // location of the live_data.json file

        // callback fired after live_data.json is loaded
        function(data){ 


            /////////////////////////////////////////////////////////////////
            // process some of the variables we just got from live_data.json
            /////////////////////////////////////////////////////////////////

            //console.log(data);

            // see here for good explanation of the variables: http://wiki.sandaysoft.com/a/Realtime.txt


            //var wspeed = data["wspeed"]; // average wind speed
            var wspeed = data["wlatest"];  // latest wind speed reading

            var wgust = data["wgust"]; // 10 minute high gust
            var today_max_gust = data["wgustTM"]; // today's high gust

            var bearing = data["bearing"];

            var bearing_compass = convert.toCompass(bearing); // convert to compass point using the function below

            // convert the MPH to knots (comment out to leave as MPH)
            var wspeed = Math.round(wspeed * 0.868976);
            var wgust = Math.round(wgust * 0.868976);




            //////////////////////////////////
            // set the blurb below the circle
            //////////////////////////////////

            var blurb = "Wind from <span class='highlight'><b>"+bearing_compass+"</b></span>";
            blurb += "<br>Gusts <span class='highlight'><b>"+wgust+"</b></span> knots";


            // set the blurb below the circle
            $('#windCircleSummary').html(blurb);






            /////////////////////////////////////////
            // set the wind speed in middle of circle
            /////////////////////////////////////////

            $('#windCircleSpeed').html(wspeed);







            ////////////////////////////////////////////////////////////////////
            // animate the circle so the arrow points towards the wind direction
            ////////////////////////////////////////////////////////////////////

            var start_degree = last_bearing;
            var end_degree = bearing;


            $({deg: start_degree}).animate({deg: end_degree}, {
            step: function(now, fx){
                $("#windCircleGraphic").css({
                     transform: "rotate(" + now + "deg)"
                });
            }
            });

            last_bearing = bearing; // keep track so we animate from the last position






            ////////////////////////////////////////////////////////////////////
            // if there's new data, turn the text and graphic green for a moment
            ////////////////////////////////////////////////////////////////////

            var current_update_time = data["timeUTC"]; // timestamp of data

            if (current_update_time != last_update) {

                    
                    last_update = current_update_time;

                    period = 1000;  // how long to change colors for

                    
                    $el = $(".highlight");				
                    $el.css("color", "#007000");  // the element becomes this color when there's new data
                    setTimeout(function(){
                      $el.css("color", "black"); // then returns to this color
                    }, period);
                    


                    $el2 = $("#windCircleGraphic");				
                    $el2.attr("src", "images/circle-on.png");  // the element becomes this src when there's new data
                    setTimeout(function(){
                      $el2.attr("src", "images/circle-off.png"); // then returns to this src
                    }, period);


                    //console.log("done");
            }



    }); // end getJSON

}




// start the intervals when the page is loaded
$(document).ready(function () {

    update_wu_gauge();

    setInterval(update_wu_gauge,2000);

});





// convert degrees to compass points
var convert = {
    toCompass: function(degrees)
    {
        return ['N', 'NNE', 'NE', 'ENE', 'E', 'ESE', 'SE', 'SSE', 'S', 'SSW', 'SW', 'WSW', 'W', 'WNW', 'NW', 'NNW', 'N'][Math.round(degrees / 11.25 / 2)];
    }
}
