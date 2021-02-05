// var personnages=['yaiko','nagato','konan','diadara',
// 				'orushimaru','hashirama','tobirama','sarutobi',
// 				'minato','tsunade','kakashi','gaara','sasule',
// 				'jiraya','madara','shiyui','inata'];

// 	var dejaAffiche =[];

// 	document.getElementById('tirer').onclick=function () {
// 		var personneAfficher= personnages[Math.floor(Math.random() * 10)];
// 		if (dejaAffiche.includes(personneAfficher)) {
// 			document.getElementById('affiche').innerHTML='alredy exist';
// 		} else {
// 			document.getElementById('affiche').innerHTML=personneAfficher;
// 			dejaAffiche.push(personneAfficher);
// 		}
// 	}


	var personnages=['yaiko','nagato','konan','diadara',
				'orushimaru','hashirama','tobirama','sarutobi',
				'minato','tsunade','kakashi','gaara','sasule',
				'jiraya','madara','shiyui','inata'];

	var dejaAffiche1 =[];
	var dejaAffiche2 =[];

	document.getElementById('tirer').onclick=function () {
		var personneAfficher1= personnages[Math.floor(Math.random() * 17)];
		var personneAfficher2= personnages[Math.floor(Math.random() * 17)];
		 
		 if (dejaAffiche1.includes(personneAfficher1) || dejaAffiche2.includes(personneAfficher2) || dejaAffiche1.includes(personneAfficher2) || dejaAffiche2.includes(personneAfficher1) ) {
			
		} else {

			dejaAffiche1.push(personneAfficher1);
			dejaAffiche2.push(personneAfficher2);
			document.getElementById('affiche1').innerHTML=dejaAffiche1 +'</br>';
			document.getElementById('affiche2').innerHTML=dejaAffiche2 +'</br>';
			

		}
	}

