// Fetch API
// the fetch API provides as interface for fetching (sending/receiving)resourses.
// It uses request and response objects.
// the fetch() method is used to fetch a resource(data)
// fetch API syntax:let promise=fetch(url,[options])

const URL="https://cat-fact.herokuapp.com/facts";
let para=document.querySelector("#para");
let btn=document.querySelector("#btn");

const getFacts=async ()=>{
    console.log("getting data.....");
    let response = await fetch(URL);
    console.log(response);
    let data=await response.json(); // using json() method to convert data to js obejct usefull data. 
    para.innerText= ((data[4].text));
    // console.log(data[1].text);
};
btn.addEventListener("click",getFacts)

// UNDERSTANDING TERMS
// AJAX:is Asynchronus js and xml
// JSON:is javascript object notation.
// json()method:returns a second promise that resolves with the result of parsing the response body text as json.(input is json,output is js object)

// Request and Response
// Http verbs
// Response status code
// *http response headers also contain details about the responses,such as content type,http status code etc.










































































































