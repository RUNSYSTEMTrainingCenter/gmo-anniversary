angular.module("App", []).controller('Image', function ($scope) {

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
