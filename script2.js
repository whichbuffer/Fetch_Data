
async function catchRainbow(){
   const response = await fetch('rainbow.jpg');
   const blob = await response.blob();
   document.getElementById('rainbow').src = URL.createObjectURL(blob)
   
}


async function catchPoem(){
    const response = await fetch('https://raw.githubusercontent.com/CodingTrain/Intro-to-Data-APIs-JS/source/module1/01a_fetch_exercise_text/poem.txt')
    return await response.text();
}

async function getJson(){
    
    const response = await fetch('https://randomuser.me/api/?results=10');
    const data = await response.json(); 
    
    console.log(data.results);
    for(let i=0;i<data.results.length;i++){
        document.getElementById('authors').innerHTML +=("<br>" + data.results[i].name.first + " "  + data.results[i].name.last + "<br>")
    }


}

getJson().catch(error => {
    console.log("error!");
    console.error(error);
});


catchPoem().then(poem => {
    document.getElementById('poem').innerHTML = poem;
    
}).catch(error => {
    console.log('error !');
    console.error(error);
})


catchRainbow().catch(error => {
    console.log("error!");
    console.error(error);
});


/*
fetch('rainbow.jpg').then(response => {
    console.log(response);
    return response.blob();
}).then(blob => {
    console.log(blob);
    document.getElementById('rainbow').src = URL.createObjectURL(blob)
}).catch(error => {
    console.log("error!");
    console.error(error);
});
*/



