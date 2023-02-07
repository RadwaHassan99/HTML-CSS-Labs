function getLoc() {
  navigator.geolocation.getCurrentPosition(showLoc, showErr, options);
}
function showLoc(e) {
  var long = e.coords.longitude;
  var lat = e.coords.latitude;
  console.log(e, long, lat);
  location.assign("http://maps.google.com/maps?q" + lat + ",+" + long);
}
function showErr(x) {
  switch (x.code) {
    case 0:
      console.log(x.message);
      break;
    case 1:
      console.log(x.message);
      break;
    case 2:
      console.log(x.message);
      break;
    case 3:
      console.log("no time");
      break;
  }
}
var options = {
  enableHighAccuracy:true
};













