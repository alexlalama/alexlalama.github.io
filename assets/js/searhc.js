console.clear();
var row;
var col;
var button_four = document.getElementById('');
var colletter;

var ranWord = Math.floor(Math.random() * 5);
function generateFour(){
    /* */
    
}

for(let row = 0; row < 3; row++){
    var letter = document.createElement('p');
    var holder = document.getElementById("search-holder");
    holder.append(letter);
    letter.innerHTML = 'l';
    letter.classList.add("letters"); // class name
    for(let col = 0; col < 3; col++){
        colletter = document.createElement('p');
        letter.append(colletter);
        colletter.classList.add("letters"); // class name 
        colletter.innerHTML = 'l';

        }
}

    // if  button selected, choose random word with number 
/*file = open("./../words.txt");
    for(word in file){
        for(letter in each word){
        letter.innerHTML = letter;

        }
    }
    
*/
