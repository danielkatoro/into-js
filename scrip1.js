var  participants = ["Yaiko","Nagato","Konan","Diadara","Orushimaru","Hashirama","Tobirama","Sarutobi","Minato","Tsunade",
"Kakashi","Gaara","Sasule","Jiraya","Madara","Shiyui"];

var participantsRestants = participants.slice(0); 
//dupliquer les tableau pour tirage avec suppression

var huitAleatoires1 = []; 
//pousser un elt de rang aleatoire dans le tableau tant que sa longeur est inferieur a 8

while(huitAleatoires1.length < 8)
	huitAleatoires1.push(participantsRestants.splice(Math.floor(Math.random() * participantsRestants.length),1)[0]);
	//console.table(huitAleatoires1);
	//console.table(participantsRestants);

	//var resultat=[[huitAleatoires1],[participantsRestants]];

	//console.table(resultat);

document.getElementById('tirer').onclick=function afficherListe() {
	element1="";
	element2="";

	for (var i = 0; i < huitAleatoires1.length; i++) {
		element1 += "<ol class='list-group-flush'> <li class='list-group-item'>" + huitAleatoires1[i] + "</li> </ol>"
		element2 += "<ol class='list-group-flush'> <li class='list-group-item'>" + participantsRestants[i] + "</li> </ol>"
	}
document.getElementById('affiche3').innerHTML=element1;
document.getElementById('affiche4').innerHTML=element2;
}



//slice() : renvoie un objet tableau, contenant une copie superficielle d'une portion est 
//definie par un indice de debut et un indice de fin (exclus), le tableau original ne sera pas modifie

//splice () modifie le contenue d'un tableau en retirant des elements et/ou en ajoutant de nouveaux 
//elements a meme le tableau. on peut ainsi vider ou remplacer une partie d'un tableau