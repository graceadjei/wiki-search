const axios = require("axios");
const url = "https://en.wikipedia.org/wiki/";
const cheerio = require("cheerio");


async function fetchData(input){
    let jsonOut = (await axios.get(url+input.toLowerCase())).data;
    return jsonOut
}

async function displayOutput(){
    let htm = await fetchData("cars")
    const $ = cheerio.load(htm);
    return $('body').html()
   
}

async function getImages(){
    let body = await displayOutput();
    const $ = cheerio.load(body);
    return [...$('img')].map(el=>{
        let $ = cheerio.load(el);
        return $('img').attr('src')
    })
}

async function getLinks(){
    let body = await displayOutput();
    const $ = cheerio.load(body);
    return [...$('a')].map(el=>{
        let $ = cheerio.load(el);
        return $('a').attr('href')
    })
}


displayOutput().then(console.log)
getImages().then(console.log)
getLinks().then(console.log)