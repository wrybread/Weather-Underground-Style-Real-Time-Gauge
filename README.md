# Weather Underground Style Real Time Gauge

An ajax-based wind gauge similar to the one on Weather Underground. See a live demo here:

http://sinkingsensation.com/wu_gauge

You can compare that to the wind indicator on our page on Weather Underground here:

http://wunderground.com/cgi-bin/findweather/getForecast?query=pws:KCAPETAL93

How it works:

- uses the live_data.json file created by the Real Time Gauge extension in the weeWX program for personal weather stations (PWS). Should work with any weather program that creates and uploads the live_data.json file for use by "Real Time Gauges".

To install:

- upload the files to your webserver

- open js/scripts-wu-gauge.js and set the path to your live_data.json file.

Note that the CSS is probably a bit wonky since it's not really my thing. If you clean it up, please let me know so I can update it.

wrybread@gmail.com

