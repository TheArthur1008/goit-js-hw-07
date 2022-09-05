import { galleryItems } from './gallery-items.js';
// Change code below this line

// console.log(galleryItems);

const galleryEl = document.querySelector('.gallery');

function makeGalleryImgMarkup({ preview, original, description }) {
    return `<div class="gallery__item">
        <a class="gallery__link" href="${original}">
            <img class="gallery__image" src="${preview}" data-source="${original}" alt="${description}"/>
        </a>
    </div>`;
};

function makeGalleryMarkup(array) {
    return array.map(makeGalleryImgMarkup).join('');
};

function renderMarkup(markup) {
	galleryEl.insertAdjacentHTML('afterbegin', markup);
};

const galleryMarkup = makeGalleryMarkup(galleryItems);
renderMarkup(galleryMarkup);

galleryEl.addEventListener('click', gellaryImgClick);

function gellaryImgClick(element) {
	if (element.target.nodeName !== 'IMG') {
		return;
	}
	element.preventDefault();
	const modalOptions = {
		onShow: () => {
			window.addEventListener('keydown', onEscapeKeyDown);
		},
		onClose: () => {
			window.removeEventListener('keydown', onEscapeKeyDown);
		},
    };
    
	const modal = basicLightbox.create(`<img  src="${element.target.dataset.source}"width="1400" height="900">`, modalOptions);

	function onEscapeKeyDown(element) {
		if (element.code === 'Escape') {
			modal.close();
		}
	}
	modal.show();
};









