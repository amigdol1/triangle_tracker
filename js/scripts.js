$(function() {
  $("form#triangle").submit(function(event) {
    event.preventDefault();
    var a = parseInt($("#a").val());
    console.log(a);
    var b = parseInt($("#b").val());
    console.log(b);
    var c = parseInt($("#c").val());
    console.log(c);
    var result;
    if ((a === b) && (b === c)) {
      result = "Equilateral";
    } else if (((a === b) && (a !=c)) || ((b === c) && (b != a)) || ((c === a) && (c != b))) {
      result = "Isosceles";
    } else if (((a + b) <= c) || ((b + c) <= a) || ((c + a) <= b)) {
      result = "NOT a triangle. Try again!";
    } else {
      result = "Scalene";
    }
    $("#result").text(result);
  });
});
