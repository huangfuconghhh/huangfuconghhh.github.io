$(document).ready(function(){
	$("#side-out-btn").sideNav();
	$("#side-out-btn").click(function(){
		$(this).sideNav("show");
		alert("00");
	});
});