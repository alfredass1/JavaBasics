/*let spalvos = ["red, green, blue, white,  ,black ,orange ,purple ,brown ,yellow, grey" ];


for (let i=0; i<spalvos.length;i++){
console.log(spalvos[i]);
*/

/*

let dalykai = prompt("keli dalykai")
let dalykas = []
let ivertinimas = []
let reiksme

for (let i=0; i<dalykai;i++) {
   dalykas.push(prompt('dalykas?'))
   ivertinimas.push(prompt('ivertinimas?'))
}

for (let i=0; i<dalykai;i++){	
	if (ivertinimas[i] == 10){reiksme = "desimt"}
     else if (ivertinimas[i] == 9){reiksme = "devyni"}		
		 else if (ivertinimas[i] == 8){reiksme = "astuoni"}		   
          else if (ivertinimas[i] == 7){reiksme = "septyni"}
           else if (ivertinimas[i] == 6){reiksme = "sesi"}		   
            else if (ivertinimas[i] == 5){reiksme = "penki"}
			 else if (ivertinimas[i] == 4){reiksme = "keturi"}		   
              else if (ivertinimas[i] == 3){reiksme = "trys"} 
                else if (ivertinimas[i] == 2){reiksme = "du"}  
                 else if (ivertinimas[i] == 1){reiksme = "vienas"}  

        console.log(dalykas[i],ivertinimas[i],reiksme);
}

*/


let knygos =
[
    {
       'grozine': [
      
            {
                ISBN: '9786098120463',
                leidimoMetai: '2019',
                pavadinimas: 'fgfgfgfgf',
                puslapiuSkaicius: '220'
            }
            ,
            {
                ISBN: '9771392155005',
                leidimoMetai: '2019',
                pavadinimas: 'dddgdgdg',
                puslapiuSkaicius: '200'
            }
            ,
            {
                ISBN: '9786094674044',
                leidimoMetai: '2016',
                pavadinimas: 'gfdgfgfgf',
                puslapiuSkaicius: '350'
            }
            ,
            {
                ISBN: '9786094664373',
                leidimoMetai: '2017',
                pavadinimas: 'fgfgfgfgf',
                puslapiuSkaicius: '200'
            }
        ]
    },
    {
       'fantastika': [
                  
            {
                ISBN: '9786094273902',
                leidimoMetai: '2018',
                pavadinimas: 'fgfgkk',
                puslapiuSkaicius: '470'
            }
            ,
            {
                ISBN: '9786094273872',
                leidimoMetai: '2019',
                pavadinimas: 'jjjjkkj',
                puslapiuSkaicius: '318'
            }
            ,
            {
                ISBN: '9789955138303',
                leidimoMetai: '2019',
                pavadinimas: 'edetghtgh',
                puslapiuSkaicius: '315'
            }
            ,
            {
                ISBN: '9786090135631',
                leidimoMetai: '2019',
                pavadinimas: 'hhghghg',
                puslapiuSkaicius: '320'
              }
            ]
        },
        {

         'detektyvai': [
           
              {
                  ISBN: '9786090138823',
                  leidimoMetai:'2019' ,
                  pavadinimas: 'jjjjjjj',
                  puslapiuSkaicius: '464'
              }
              ,
              {
                  ISBN: '9789955138556',
                  leidimoMetai: '2019',
                  pavadinimas: 'gfhhghgh',
                  puslapiuSkaicius: '480'
              }
              ,
              {
                  ISBN: '9789955267065',
                  leidimoMetai: '2018',
                  pavadinimas: 'jyjjuyjuu',
                  puslapiuSkaicius: '408'
              }
              ,
              {
                  ISBN: '9786094443046',
                  leidimoMetai: '2019',
                  pavadinimas: 'hgjyjyjy',
                  puslapiuSkaicius: '320'
              }
          ]
      }
  ]
  
for (kateg of knygos){
  for (kategorija in kateg){
            console.log("kategorija: "+kategorija )

            for (kiek in kategorija){
              for (bookInfo in kateg[kategorija][kiek]){

            if (bookInfo != "leidimoMetai"){
                console.log(bookInfo+ "  :  " +kateg[kategorija][kiek][bookInfo])
            }

             if (bookInfo == "leidimoMetai") {
                let condition = kateg[kategorija][kiek][bookInfo] == '2019'  ?  ' nauja knyga!' :  ''
                     console.log(bookInfo+ "  :  " +kateg[kategorija][kiek][bookInfo]+condition)
 


              }
         


}
}           
}
}


