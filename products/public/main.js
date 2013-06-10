function fetchItemInfo(itemId, callback) {
  $.getJSON("/items/" + itemId, function (data) {
    callback(data);
  });
}

function popupItemInfo(x, y, info) {
  $("#popup").css({
    display: "inline-block",
    left: x,
    top: y
  });
  $("#popup .name").text(info.name);
  $("#popup .description").text(info.description);
  setTimeout(function () {
    $("#popup").hide();
  }, 4000);
}

$(document.body).on("click", ".more-info", function (e) {
  e.preventDefault();
  fetchItemInfo($(this).attr("data-id"), function (info) {
    popupItemInfo(e.pageX, e.pageY, info);
  });
});
