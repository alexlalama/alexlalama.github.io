var newImage = new Array();
var captionArray = ['Darlene Sitting In The Grass','Darlene Doing Her Hair In The Mirror','Pretty Lavender Flowers','Squirrel On A Fence','Darlene\'s Reflect In The Mirror' ,'Darlene Being Serious','Darlene With A Polo Hat','Darlene In Green']
function init()
{
    var numImg = document.getElementById('imgHolder').getElementsByTagName('img').length;
    for(var i=1; i <=numImg; i++)
        {
            newImage[i] = new Image();
            newImage[i].src = "./assets/imgs/photo0"+i+".png";
        }
    document.getElementById('cap').innerHTML = captionArray[0];
}

// Picture swapping
function changeMe(dom)
{
    console.log(dom);
    var start = dom.src.indexOf('/photo0')+7;
    var end = dom.src.indexOf('.png');
    var num = dom.src.substring(start, end);
    document.getElementById('bigPic').src = newImage[num].src;
    document.getElementById('cap').innerHTML = captionArray[parseInt(num)-1];
}