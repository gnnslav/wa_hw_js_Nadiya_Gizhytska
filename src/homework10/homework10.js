import './homework10.scss';

function svetofor(){
	const switchOnOff = document.querySelector('.switch');
	const lamps = document.querySelectorAll('.lamps');
	const lampRed = document.querySelector('.lamp-red');
	const lampYellow = document.querySelector('.lamp-yellow');
	const lampGreen = document.querySelector('.lamp-green');
	
	function turnOn(lamp){
		
		switchOnOff.classList.toggle('switch-color');
		function colorAdd(lamp){
			lamp.classList.add('lamp-color');
		}

		function colorRemove(lamp){
			lamp.classList.remove('lamp-color');
		}
		
		lampRed.addEventListener('click', function(){
			colorAdd(lampRed);
			colorRemove(lampYellow);
			colorRemove(lampGreen);
		});
		lampYellow.addEventListener('click', function(){
			colorRemove(lampRed);
			colorAdd(lampYellow);
			colorRemove(lampGreen);
		});
		lampGreen.addEventListener('click', function(){
			colorRemove(lampRed);
			colorRemove(lampYellow);
			colorAdd(lampGreen);
		});
	}

	function turnOff(lamp){
		function colorRemoveAll(){
			lamps.forEach(function(lamp){
				lamp.classList.remove('lamp-color');
			});
		}
		colorRemoveAll();	
	}

	function changeLight(lamp){
		turnOn(lamp);
		turnOff(lamp);
	}

	switchOnOff.addEventListener('click', changeLight);
}

svetofor();