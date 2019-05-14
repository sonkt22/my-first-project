$(document).ready(function () {
	$("ul#myTab li").click(function (e) {
		if (!$(this).hasClass("active")) {
			var tabNum = $(this).index();
			var nthChild = tabNum + 1;
			$("ul#myTab li.active").removeClass("active");
			$(this).addClass("active");
			$("ul#myTab-left li.active").removeClass("active");
			$("ul#myTab-left li:nth-child(" + nthChild + ")").addClass("active");
			$("#myTab a").tab('show');
		}
	});
});
$(document).ready(function () {
	$("ul#myTab-left li").click(function (e) {
		if (!$(this).hasClass("active")) {
			var tabNum = $(this).index();
			var nthChild = tabNum + 1;
			$("ul#myTab-left li.active").removeClass("active");
			$(this).addClass("active");
			$("ul#myTab li.active").removeClass("active");
			$("ul#myTab li:nth-child(" + nthChild + ")").addClass("active");
			$("#myTab-left a").tab('show');
		}
	});
});