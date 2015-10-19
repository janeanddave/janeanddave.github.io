$(document).ready(function () {

  var updateWeddingMoment = function () {
    var result = moment("20160409", "YYYYMMDD").fromNow();
    $("#wedding-moment").text(result);
  };

  updateWeddingMoment();

  setInterval(updateWeddingMoment, 60 * 1000);

});
