const axios = require('axios');
const cherio = require('cherio');

axios.get('https://www.logicalposition.com/')
    .then((response) => {
        
        // Load the response into Cherio and prep link array
        let $ = cherio.load(response.data);
        let links = [];

        // Find all elements with an href attr, then push them to the array
        $('[href]').each((i, element) => {
            links.push(element.attribs.href);
        });

        // Log it for some reason
        console.log(links);

    }).catch((error) => {
        console.log(error);
    });

// Testing async
console.log('this is the last line of code.');