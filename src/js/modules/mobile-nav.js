function mobileNav() {
	const navBtn = document.querySelector('.mobile-nav-btn');
	const nav = document.querySelector('.mobile-nav');
	const menuIcon = document.querySelector('.nav-icon');
	const navLi = document.querySelectorAll('[data-nav]')
	const navContent = document.querySelector('.mobile-nav_content')

	navBtn.onclick = function () {
		nav.classList.toggle('mobile-nav--open');
		menuIcon.classList.toggle('nav-icon--active');
		document.body.classList.toggle('no-scroll');

		navContent.addEventListener('click', function (e) {
            e.stopPropagation();
        });
	};
	// закрытие при клике по навигации
	navLi.forEach(function (item) {
		item.addEventListener('click', function() {
			nav.classList.toggle('mobile-nav--open');
			menuIcon.classList.toggle('nav-icon--active');
			document.body.classList.toggle('no-scroll');
			
		})
	})
	// закрытие по клику на фон
	nav.onclick = function () {
		nav.classList.toggle('mobile-nav--open');
		menuIcon.classList.toggle('nav-icon--active');
		document.body.classList.toggle('no-scroll');
	};
}

export default mobileNav;