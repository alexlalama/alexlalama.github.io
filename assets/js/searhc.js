console.clear();
var row;
var col;
var colletter;
document.getElementById("four").addEventListener("click", generate_four);
var ranWord = Math.floor(Math.random() * 5);

function generate_four(){
    for(let row = 0; row < 3; row++){
        var letter = document.createElement('div');
        var holder = document.getElementById("search-holder");
        holder.append(letter);
        letter.innerHTML = 'ls';
        letter.classList.add("letters"); // class name
        for(let col = 0; col < 3; col++){
            colletter = document.createElement('div');
            // colletter.classList.add("letters"); // class name 
            colletter.innerHTML = 'col';
        }
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
