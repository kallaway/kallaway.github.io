$(document).ready(function() {
	$(".expand").on("click", function() {
		$(".learn").delay(100).hide();
		$("#short-bio").delay(200).show();
		$("#online-presence").delay(300).show();
		$("#abilities").show();
	});
});
