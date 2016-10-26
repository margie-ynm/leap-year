//business logic
var calculator = function(squirrel) {
  if ((squirrel % 4 === 0) && (squirrel % 100 !== 0) || (squirrel % 400 === 0))  {
    return true;
  } else {
    return false;
  }

};



//user-interface
$(document).ready(function() {
  $("form#leap-form").submit(function(event) {
    event.preventDefault();
    var yearInput = parseInt($("#leap-year").val());
    var result = calculator(yearInput);
    $("#result p").text(result);
  });
});
