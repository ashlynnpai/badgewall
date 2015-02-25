
(function() {
var name = "ashlynnpai", treehouseURL = "http://teamtreehouse.com/" + name + ".json", treepoints = [], displaypoints = [];
  $.getJSON(treehouseURL).done(function( data ) {
      $.each( data.points, function (k,v) {
        treepoints.push([k,v]);  
      });
      $.each( data.badges, function( i, badge ) {
        $( "<img>" ).attr( "src", badge.icon_url ).appendTo( "#treehouse-badges" );
      });
      for (i in treepoints){
        displaypoints.push("<li>");
        displaypoints.push("<strong>" + treepoints[i][0] + ":  " + "</strong>");
        displaypoints.push("<span><strong>" + treepoints[i][1]  + "</strong></span>");
        displaypoints.push("</li>");  
            
        $( "#treehousepoints").html(displaypoints);
      }
    });
})();


 