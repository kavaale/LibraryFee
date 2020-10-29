$(document).ready(function () {

    $("#calculateFee").click(calcReturn);
    $("#showFee").click(showTotal);
    var totalFee = 0;

    function calcReturn() {
        var returnType = $("#returntype").val();
        var late = $("#late").val();
        if(returnType==0) {
            totalFee = totalFee + 0.25 * late;
        }
        else {
            totalFee = totalFee + 0.50 * late;
        }
    };

    function showTotal() {
        $("#lateTotal").text(totalFee);
    }

});