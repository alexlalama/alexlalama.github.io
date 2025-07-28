console.clear();

function generate_four(){
    for(let row = 0; row < 3; row++){
        var letter = document.createElement('div');
        var holder = document.getElementById("search-holder");
        holder.append(letter);
        letter.innerHTML = 'col';
        letter.classList.add("letters"); // class name
        for(let col = 0; col < 3; col++){
            var colletter = document.createElement('div');
            letter.append(colletter);
            // colletter.classList.add("letters"); // class name 
            colletter.innerHTML = 'row';
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
