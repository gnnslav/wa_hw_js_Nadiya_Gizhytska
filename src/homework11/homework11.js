import './homework11.scss';

function dropdownbox(dropdownElement, listContent){
 	let isOpened = dropdownElement.classList.contains('active');
	
	function opened(){
		isOpened = true;
		dropdownElement.classList.add('active');
		document.addEventListener('click', closed);
	}

	function closed(){
		isOpened = false;
		dropdownElement.classList.remove('active');
		document.removeEventListener('click', closed);
	}

	function openedList(dropdownElement){
		dropdownElement.stopPropagation();
		if (isOpened){
			closed();
		} else{
			opened();
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
console.log(dropdownList1);

dropdownbox(document.querySelector('#dropdownBox1'), dropdownList1);
dropdownbox(document.querySelector('#dropdownBox2'), dropdownList2);
dropdownbox(document.querySelector('#dropdownBox3'), dropdownList3);
dropdownbox(document.querySelector('#dropdownBox4'), dropdownList4);






