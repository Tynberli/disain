document.addEventListener('DOMContentLoaded', () => {
	const accordions = document.querySelectorAll('.accordion');

	accordions.forEach(el => {
		el.addEventListener('click', (e) => {
			const self = e.currentTarget;
			const control = self.querySelector('.accordion__control');
			const content = self.querySelector('.accordion__content');

			self.classList.toggle('open');

			// если открыт аккордеон
			if (self.classList.contains('open')) {
				control.setAttribute('aria-expanded', true);
				content.setAttribute('aria-hidden', false);
                content.style.maxHeight = content.scrollHeight + 'px';
			} else {
				control.setAttribute('aria-expanded', false);
				content.setAttribute('aria-hidden', true);
                // content.style.maxHeight = null;
			}
		});
	});
});

document.addEventListener('DOMContentLoaded', () => {
window.onload = function () {
	var box=document.getElementsByClassName('accordion');
	var btn=document.getElementById('button');
	for (let i=4;i<box.length;i++) {
		box[i].style.display = "none";
	}

	var countD = 2;
	btn.addEventListener("click", function() {
		var box=document.getElementsByClassName('accordion');
		countD += 2;
		if (countD <= box.length){
			for(let i=0;i<countD;i++){
				box[i].style.display = "block";
			}
		}

	})
}})