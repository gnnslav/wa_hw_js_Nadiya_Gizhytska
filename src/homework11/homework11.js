import './homework11.scss';

function dropdownbox(dropdownElement, listContent){
	
 	let isOpened = dropdownElement.classList.contains('active');

	function opened(){	
		dropdownElement.classList.add('active');
		isOpened = true;
		document.addEventListener('click', closed);
	}

	function closed(){
		dropdownElement.classList.remove('active');
		document.removeEventListener('click', closed);
		isOpened = false;
	}

	function closeAll(){
		const dropdownElements = document.querySelectorAll('.dropdown');
		const dropdownElementsArr = Array.from(dropdownElements).filter(function(dropdownElement){
			return dropdownElement.classList.contains('active');
		});
		dropdownElementsArr.forEach(function(dropdownElement){
			dropdownElement.classList.remove('active');
		});
	}
	
	function openedList(dropdownElement){
		dropdownElement.stopPropagation();
		if (!isOpened){
			closeAll();
			opened();
		} else{
			closed();
			console.log(isOpened);
		}
	}

	dropdownElement.addEventListener('click', openedList);

	function renderTitle(){
		const title = document.createElement('h1');
		title.classList.add('dropdown__title');
		title.textContent = listContent[0];
		dropdownElement.appendChild(title);
	}

	function renderText(){
		const text = document.createElement('p');
		text.classList.add('dropdown__list');
		listContent.forEach(function(paragraph){
			text.textContent = paragraph;
		})
		dropdownElement.appendChild(text);
	}
	function renderDropdown(listContent){
		dropdownElement.classList.add('dropdown');
		renderTitle(listContent);
		renderText(listContent);
	}
	renderDropdown(listContent);
}

const dropdownList1 = ['Title 1', 'lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium ut natus velit dolores repudiandae veniam rerum, eligendi fugit ratione voluptatibus'];
const dropdownList2 = ['Title 2', 'lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium ut natus velit dolores repudiandae veniam rerum, eligendi fugit ratione voluptatibus'];
const dropdownList3 = ['Title 3', 'lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium ut natus velit dolores repudiandae veniam rerum, eligendi fugit ratione voluptatibus'];
const dropdownList4 = ['Title 4', 'lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium ut natus velit dolores repudiandae veniam rerum, eligendi fugit ratione voluptatibus'];

dropdownbox(document.querySelector('#dropdownBox1'), dropdownList1);
dropdownbox(document.querySelector('#dropdownBox2'), dropdownList2);
dropdownbox(document.querySelector('#dropdownBox3'), dropdownList3);
dropdownbox(document.querySelector('#dropdownBox4'), dropdownList4);

