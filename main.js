const span = `<span class="wrap"></span>`;
const TxtType = function (el, toRotate) {
	this.toRotate = toRotate;
	this.el = el;
	this.loopNum = 0;
	this.txt = "";
	this.tick();
	this.isDeleting = false;
};

TxtType.prototype.tick = function () {
	var i = this.loopNum % this.toRotate.length;
	var fullTxt = this.toRotate[i];

	if (this.isDeleting) {
		this.txt = fullTxt.substring(0, this.txt.length - 1);
	} else {
		this.txt = fullTxt.substring(0, this.txt.length + 1);
	}

	this.el.innerHTML = this.txt + span;

	if (!this.isDeleting && this.txt === fullTxt) {
		this.isDeleting = true;
	} else if (this.isDeleting && this.txt === "") {
		this.isDeleting = false;
		this.loopNum++;
	}

	setTimeout(() => {
		this.tick();
	}, 100);
};

const textArr = [
	" Converting Coffee into Code ! ",
	" Developing with Nice Music  !",
];
new TxtType(document.getElementsByClassName("typewrite")[0], textArr);

$(".trigger").click(function () {
	$(this).parents(".page-about").toggleClass("show-info");
});
