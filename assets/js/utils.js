export function getRandomListItem(list = []){
    if(list.length > 0){
        let randomIndex = Math.floor(Math.random() * list.length);
        console.log('randomIndex: ', randomIndex);
        return list[randomIndex];
    }
    return;
}

