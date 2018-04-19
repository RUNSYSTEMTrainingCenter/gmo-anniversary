angular.module("App", []).controller('Image', function ($scope) {

    $scope.name = "Nguyễn Văn A";
    $scope.year = 5;
    $scope.branch = "Ha Noi Branch";
    $scope.position = "iOS Developer";

    $scope.getYear = function (y) {
      var d = new Date();
      $scope.year = d.getFullYear() - parseInt(y.split("/")[2]);
      console.log(d);
    };

    $scope.nth = function(d) {
        if(d>3 && d<21) return 'th'; // thanks kennebec
        switch (d % 10) {
            case 1:  return "st";
            case 2:  return "nd";
            case 3:  return "rd";
            default: return "th";
        }
    };

    $scope.submit = function(e) {
        e.preventDefault();
        html2canvas(document.querySelector("#capture")).then(function (canvas) {
            canvas.toBlob(function(blob) {
                saveAs(blob, $scope.name+ "_" +$scope.year+".png");
            });
        });
    };

    function readURL(input) {

        if (input.files && input.files[0]) {
            var reader = new FileReader();

            reader.onload = function(e) {
                $('img').attr('src', e.target.result);
            };

            reader.readAsDataURL(input.files[0]);
        }
    }

    $("#file").change(function() {
        readURL(this);
    });
});
