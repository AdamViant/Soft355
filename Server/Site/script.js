$(document).ready(function() {
  $.get("http://localhost:9000/", {}, function(res) {
    let data = res
    for (i=0; i<data.length; i++) {
      let stops = data[i].stops;
      $("container").append(
        "<h3 class=\"categoryName\">" + data[i].categoryName + </h3>"
      ")
  }
}
// let destination = stops[stops.length-1];
// let stops = data[i].stops;
// let destination = stops[stops.length-1];
// $("#services").append("<tr><td class=\"departs\">"
// + data[i].departs + "</td><td class=\"destination\">"
// + destination.name + "</td><td class=\"platform\">"
// + data[i].platform + "</td></tr>");
