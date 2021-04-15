$(function(){

	$("button").click(function(){
		var chkYN = $("#chkAgree").prop("checked");
		/*$("#res").text("chkYN : " + chkYN);*/

		var msg = "";
		if(chkYN == true) {
			msg = "유효성 검사를 통과했습니다.";
		} else {
			msg = "체크사항은 필수입니다!";
		}
		$("#res").text(msg);
	});

});
