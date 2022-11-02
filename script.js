function resizeAdjust() {
	if (window.innerWidth < 992) {
		document.getElementById("h1").innerHTML = "Advanced&nbsp;Programming";
		document.getElementById("pjs").innerHTML = "Projects";
		document.getElementById("python-logo").setAttribute("width", "100%");
		document.getElementById("python-logo").setAttribute("height", "75%");
	} else {
		document.getElementById("h1").innerHTML = "Advanced&nbsp;Programming&nbsp;Course";
		document.getElementById("pjs").innerHTML = "Final&nbsp;Projects";
		document.getElementById("python-logo").setAttribute("width", "75%");
		document.getElementById("python-logo").setAttribute("height", "100%");
	}
}

resizeAdjust();

window.addEventListener('resize', function (event) {
	resizeAdjust();
}, true);

function setupTypewriter(t) {
	var HTML = t.innerHTML;
	t.innerHTML = "";
	var cursorPosition = 0,
		tag = "",
		writingTag = false,
		tagOpen = false,
		typeSpeed = 100,
		tempTypeSpeed = 0;

	var type = function () {
		if (writingTag === true) {
			tag += HTML[cursorPosition];
		}
		if (HTML[cursorPosition] === "<") {
			tempTypeSpeed = 0;
			if (tagOpen) {
				tagOpen = false;
				writingTag = true;
			} else {
				tag = "";
				tagOpen = true;
				writingTag = true;
				tag += HTML[cursorPosition];
			}
		}
		if (!writingTag && tagOpen) {
			tag.innerHTML += HTML[cursorPosition];
		}
		if (!writingTag && !tagOpen) {
			if (HTML[cursorPosition] === " ") {
				tempTypeSpeed = 0;
			}
			else {
				tempTypeSpeed = (Math.random() * typeSpeed) + 50;
			}
			t.innerHTML += HTML[cursorPosition];
		}
		if (writingTag === true && HTML[cursorPosition] === ">") {
			tempTypeSpeed = (Math.random() * typeSpeed) + 50;
			writingTag = false;
			if (tagOpen) {
				var newSpan = document.createElement("span");
				t.appendChild(newSpan);
				newSpan.innerHTML = tag;
				tag = newSpan.firstChild;
			}
		}
		cursorPosition += 1;
		if (cursorPosition < HTML.length - 1) {
			setTimeout(type, tempTypeSpeed);
		} else {
			const myDefaultAllowList = bootstrap.Popover.Default.allowList;
			myDefaultAllowList.svg = ['path', 'width', 'height', 'xmlns', 'viewBox'];
			myDefaultAllowList.path = ['fill', 'd', 'opacity'];
			myDefaultAllowList.a = ['href', 'target', 'rel'];
			myDefaultAllowList.div = ['class'];
			document.getElementById("dr-socials").innerHTML = `<a tabindex="0" role="button" data-bs-toggle="popover" data-bs-trigger="focus" data-bs-custom-class="custom-popover" data-bs-placement="top" data-bs-html="true" data-bs-title="<b>Dr. Sadegh Eskandari</b>" data-bs-content="<div class='d-flex justify-content-around'><a href='https://www.linkedin.com/in/sadegh-eskandari-3b87797a' target='_blank' rel='noopener noreferrer'><svg fill='#000000' xmlns='http://www.w3.org/2000/svg'  viewBox='0 0 64 64' width='64px' height='64px'><path d='M48,8H16c-4.418,0-8,3.582-8,8v32c0,4.418,3.582,8,8,8h32c4.418,0,8-3.582,8-8V16C56,11.582,52.418,8,48,8z M24,47h-5V27h5 V47z M24.029,23.009C23.382,23.669,22.538,24,21.5,24c-1.026,0-1.865-0.341-2.519-1.023S18,21.458,18,20.468 c0-1.02,0.327-1.852,0.981-2.498C19.635,17.323,20.474,17,21.5,17c1.038,0,1.882,0.323,2.529,0.969 C24.676,18.615,25,19.448,25,20.468C25,21.502,24.676,22.349,24.029,23.009z M47,47h-5V35.887C42,32.788,40.214,31,38,31 c-1.067,0-2.274,0.648-2.965,1.469S34,34.331,34,35.594V47h-5V27h5v3.164h0.078c1.472-2.435,3.613-3.644,6.426-3.652 C44.5,26.5,47,29.5,47,34.754V47z'/></svg></a><a href='https://github.com/Sadegh28' target='_blank' rel='noopener noreferrer'><svg fill='#000000' xmlns='http://www.w3.org/2000/svg'  viewBox='0 0 64 64' width='64px' height='64px'><path d='M32 6C17.641 6 6 17.641 6 32c0 12.277 8.512 22.56 19.955 25.286-.592-.141-1.179-.299-1.755-.479V50.85c0 0-.975.325-2.275.325-3.637 0-5.148-3.245-5.525-4.875-.229-.993-.827-1.934-1.469-2.509-.767-.684-1.126-.686-1.131-.92-.01-.491.658-.471.975-.471 1.625 0 2.857 1.729 3.429 2.623 1.417 2.207 2.938 2.577 3.721 2.577.975 0 1.817-.146 2.397-.426.268-1.888 1.108-3.57 2.478-4.774-6.097-1.219-10.4-4.716-10.4-10.4 0-2.928 1.175-5.619 3.133-7.792C19.333 23.641 19 22.494 19 20.625c0-1.235.086-2.751.65-4.225 0 0 3.708.026 7.205 3.338C28.469 19.268 30.196 19 32 19s3.531.268 5.145.738c3.497-3.312 7.205-3.338 7.205-3.338.567 1.474.65 2.99.65 4.225 0 2.015-.268 3.19-.432 3.697C46.466 26.475 47.6 29.124 47.6 32c0 5.684-4.303 9.181-10.4 10.4 1.628 1.43 2.6 3.513 2.6 5.85v8.557c-.576.181-1.162.338-1.755.479C49.488 54.56 58 44.277 58 32 58 17.641 46.359 6 32 6zM33.813 57.93C33.214 57.972 32.61 58 32 58 32.61 58 33.213 57.971 33.813 57.93zM37.786 57.346c-1.164.265-2.357.451-3.575.554C35.429 57.797 36.622 57.61 37.786 57.346zM32 58c-.61 0-1.214-.028-1.813-.07C30.787 57.971 31.39 58 32 58zM29.788 57.9c-1.217-.103-2.411-.289-3.574-.554C27.378 57.61 28.571 57.797 29.788 57.9z'/></svg></a></div>">"Dr. Sadegh Eskandari"</a>`;
			const popoverTriggerList = document.querySelectorAll('[data-bs-toggle="popover"]');
			const popoverList = [...popoverTriggerList].map(popoverTriggerEl => new bootstrap.Popover(popoverTriggerEl));
		}
	};

	return {
		type: type
	};
}

var typer = document.getElementById('typewriter');
typewriter = setupTypewriter(typewriter);
typewriter.type();

new Splide('.splide', {
	type: 'loop',
	perPage: 4,
	perMove: 1,
	pagination: false,
	breakpoints: {
		992: {
			perPage: 3,
		},
		768: {
			perPage: 1,
		},
	},
}).mount();
