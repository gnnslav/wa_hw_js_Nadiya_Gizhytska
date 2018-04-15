import './homework9.scss';

const btn1 = document.querySelector('#button1');
const output1 = document.querySelector('#output1');

const btn8 = document.querySelector('#button8');
const output8 = document.querySelector('#output8');

const btn11 = document.querySelector('#button11');
const output11 = document.querySelector('#output11');


function randomInteger(min, max){
	max = document.querySelector('#inputMax').value;
	min = document.querySelector('#inputMin').value;
	return output1.innerHTML = Math.round(Math.random() * (min - max) + min);
}
btn1.addEventListener('click', randomInteger);

// Task 2

const user = [];
console.log(user);
user.name = 'Вася';
console.log(user.name);
user.surname = 'Петров';
console.log(user.surname);
user.name = 'Сергей';
console.log(user.name);
delete user.name;
console.log('name' in user);

// Task 3

function isEmpty(obj){
	for(let key in obj){
		if(obj.length === 0){
			return true;
		} else{
			return false;
		}
	}	
}

isEmpty(user);
console.log(isEmpty(user));


//Task 4

const salaries = {
	John: 400,
	Jack: 20000,
	test: 'asdasdasd'
}


function calcSalaries(obj){
	let summa = 0;
	for(let key in obj){
		if(obj.length === 0){
			summa = 0;
		} else	if(typeof obj[key] === 'number'){
			summa = summa + obj[key];
		}
	}
	return summa;

}
console.log(calcSalaries(salaries));

// Task 5
const maxsumma = function(obj){
	let max = 0;
	for(let key in obj){
		if(typeof obj[key] === 'number'){
			max = key + ' - ' + Math.max(obj[key]);
		}
	}
	return max;
}

function maxSalaries(obj){
	let maxsumma = 0;
	for(let key in obj){
		if(obj.length === 0){
			console.log('нет сотрудников');
		} else	if(typeof obj[key] === 'number'){
			maxsumma = key + ' - ' + Math.max(obj[key]);

		}
	};
	return maxsumma;
}
console.log(maxsumma(salaries));
console.log(maxSalaries(salaries));

// Task 6

const test = {
	one: 1,
	two: 2,
	thre: "fff"

}
function multyplyNumeric(test){

	for(let key in test){
		if(typeof test[key] === 'number'){
			test[key] *= 2;
			
		}
	}	
}
multyplyNumeric(test);
console.log(test);

//Task 7

const array = [1, 2, 3, 4, 5];

const randomIndex = Math.round(Math.random() * array.length);
console.log(randomIndex);

//Task 8
const itemArr = [ ];

btn8.onclick = function(){
	const elem = document.querySelector('#item').value;
	itemArr.push(elem);
	output8.innerHTML = itemArr;

	const itemSum = itemArr.reduce(function(sum, elem){
  		return (+sum) + (+elem);
	});	
	console.log(itemArr);
	console.log(itemSum);
	output8.innerHTML = (!elem) ? itemSum : itemArr; 
}

//Task 9

const arr = [1, 2, 3, 4, 5]

function find(arr, value){
	console.log(arr.indexOf(value));
}
find(arr, 3);
find(arr, 7);

//Task 10

function filterRange(arr, a, b){
	const arrnew = arr.filter(function(element){
		return element >= a && element <= b;
	});
	console.log(arrnew);
}

filterRange(arr, 2, 5)

//Task 11

function pow(x, n){
	x = document.querySelector('#number').value;
	n = document.querySelector('#degree').value;
	return output11.innerHTML = Math.pow(x, n);
}

btn11.addEventListener('click', pow);

//Task 12

const dateTask12 = new Date(2012, 1, 20, 3, 12);
console.log(dateTask12);

//Task 13

const dateTask13 = new Date(2012, 0, 3);

function getWeekDay(dateTask13){
	let options = {
		 weekday: 'short'
	}	
	console.log(dateTask13.toLocaleString("ru", options) );
}

getWeekDay(dateTask13);

//Task 14

function getLocalDay(date){
	console.log(date.getDate());
}
getLocalDay(dateTask13);

//Task 15

function getDateAgo(date, days){
	date.setDate(date.getDate() - days);
}
getDateAgo(dateTask13, 10);
console.log(dateTask13);
