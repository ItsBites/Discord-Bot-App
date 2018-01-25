const {remote} = require('electron');
const $ = require("jquery");

var win = remote.getCurrentWindow();

$(function() {
  $("#CloseButton").click(function() {
    win.close();
  });

  $(".bot-add").click(function() {
    $(".botAddShow").css("visibility","visible");
  });
  $("#black").click(function() {
    $(".botAddShow").css("visibility","hidden");
  });
});
