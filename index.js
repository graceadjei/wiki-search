const axios = require("axios");
const url = "https://en.wikipedia.org/wiki/";
const cheerio = require("cheerio");

async function fetchData(input){
    let jsonOut = (await axios.get(url+input.toLowerCase())).data;
    return jsonOut
}

async function displayOutput(){
    let htm = await fetchData("computer")
    const $ = cheerio.load(htm);
    return $('body').html()
   
}


displayOutput().then(console.log)