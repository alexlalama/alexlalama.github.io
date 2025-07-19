console.clear();
var row;
var col;
for(let row = 0; row < 3; row++){
    var letter = document.createElement('p');
    var holder = document.getElementById("search-holder");
    holder.append(letter);
    letter.classList.add("letters"); // class name
    for(let col = 0; col < 3; col++){
        letter = document.createElement('p');
        letter.classList.add("letters"); // class name 
        letter.innerText = 'letters';
        console.log("log");
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
