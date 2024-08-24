const fetch = require('node-fetch');
const readline = require("readline-sync");

let allpopluationdata;

// Fetch data (GET)
function loadAllData() {
    return new Promise((resolve, reject) => {
        fetch('http://localhost:8081/allpopulationdata')
            .then(response => response.json())
            .then(function (data) {
                resolve(data);
            });
    });
}

function displayData() {
    allpopluationdata.forEach((data, index) => {
        console.log(`Result ${index + 1}:`);
        console.log("Country: " + data.Country);
        console.log("Population: " + data.Population);
        console.log("GDP Per Capital: " + data.GDPpercapital);
        console.log("----------------------------");
    });
}


Promise.all([loadAllData()])
    .then((results) => {
        allpopluationdata = results[0];
        displayData();
    })
    .catch((error) => {
        console.log("Error, Program Exited");
    });
