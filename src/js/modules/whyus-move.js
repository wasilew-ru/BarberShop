const columnRight = document.querySelector('.whyus__info-column--right');
const columnLeft = document.querySelector('.whyus__info-column');

function move () {
    setInterval(function () {
		columnRight.classList.toggle('info-column-move')
        columnLeft.classList.toggle('info-column-move-left')
	}, 2000);
};

export default move;