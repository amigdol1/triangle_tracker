

$(function() {
  $("forms#triangle").submit(function() {
    event.preventDefault();
    var a = parseInt($("#a").val());
    var b = parseInt($("#b").val());
    var c = parseInt($("#c").val());
    var result;
    if ((a === b) && (b === c)) {
      result = "equilateral";
    } else if (((a === b) && (a !=c)) || ((b === c) && (b != a)) || ((c === a) && (c != b))) {
      result = "isosceles";
    } else if (((a + b) <= c) || ((b + c) <= a) || ((c + a) <= b)) {
      result = "NOT a triangle. Try again!";
    } else {
      result = "scalene";
    }
    $("#result").text(result);
  });
});
