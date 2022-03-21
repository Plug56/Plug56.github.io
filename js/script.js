let Button = document.querySelectorAll('.add-btn');

const showElem= function(evt)
{
	let parentButton = evt.target.parentNode;
	let Element = parentButton.querySelector('.choose-elem');
	Element.classList.toggle('hidden');
};	

Button.forEach(function(but)
{
	but.addEventListener('click',showElem);
}
);

const chageLayoutHadler= function(evt) {
	const newloayt=evt.target.value;

	const layoutel=document.querySelector('.layout');
	layoutel.classList.remove('layout--landing');
	layoutel.classList.remove('layout--blog');
	layoutel.classList.remove('layout--shop');
	layoutel.classList.add('layout--'+newloayt);
}
document.querySelector('.grid-select').addEventListener('change',chageLayoutHadler);



const buttonDeleteHadler=function (evt) {
	const element =evt.target.parentNode;
	const wrapper=element.parentNode;
	const block=wrapper.parentNode;
	element.remove();
	
	const fraperchtoto=wrapper.querySelectorAll('.element');
	if ( fraperchtoto.length === 0) {
		if (block.classList.contains('header')) {
			block.classList.add('header--empty');
		}
		
		if (block.classList.contains('content')) {
			block.classList.add('content--empty');
		}
		
		if (block.classList.contains('footer')) {
			block.classList.add('footer--empty');
		}
	}
};

const editContentHandler= function (evt) {
	const editedElement = evt.target;
	
	let currentvalue;
	
	if (editedElement.target === 'IMG') {
		currentvalue=editedElement.src;
	} else {
		currentvalue=editedElement.textContent;
	}
	
	const newvalue=window.prompt('Вы хотите поменять значение?', currentvalue);
	
	if (editedElement.tagName ==='IMG') {
		editedElement.src=newvalue;
	} else {
		editedElement.textContent=newvalue;
	}
};

const chooseButtonElements = document.querySelectorAll('.choose-elem__btn');

const addEventHandler = function (evt)
{
	const clickedbtn = evt.target;
	const addmenuelement = clickedbtn.parentNode;
	addmenuelement.classList.add('hidden');
	
	const blockType=clickedbtn.dataset.type;
	console.log(blockType);
	
	const blockconteiner=clickedbtn.dataset.container;
	console.log(blockconteiner);
	
	const template= document.querySelector('#'+blockType+'-template').content;
	const templateelement=template.cloneNode(true);
	const blockelement=templateelement.querySelector('.element');
	
	const containerwrapperelement= document.querySelector('.'+blockconteiner+'__elements-wrapper');
	containerwrapperelement.append(blockelement);
	
	if (blockconteiner.includes('content')) {
		containerwrapperelement.parentElement.classList.remove('content--empty');
	} else {
		containerwrapperelement.parentElement.classList.remove(blockconteiner+'--empty');
	}
	
	blockelement.querySelector('.delete-btn').addEventListener('click',buttonDeleteHadler);
	blockelement.querySelector('.template-content').addEventListener('dblclick',editContentHandler);
	
};

chooseButtonElements.forEach (function (item) {
	return item.addEventListener('click' , addEventHandler);
});

