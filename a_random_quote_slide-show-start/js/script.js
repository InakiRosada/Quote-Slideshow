/******************************************
 *      CSIS 3380 - 002
 * Assignment 1 - Quote Slideshow
 * Author: Inaki Rosada - 300347489
 * Date: 9/15/2023
*****************************************/

/*** 
 * `quotes` array 
 * below are the list of quote placed in an object, then those quotes are then placed in an array called quotes.
***/
const quote1 = { 
    quote: "A rose by any other name would smell as sweet.", 
    source: "William Shakespeare", 
    citation: "Romeo and Juliet", 
    year: "1597"
}

const quote2 = {
    quote:"Knowledge is power",
    source: "Sir Francis Bacon",
    citation: "Meditationes Sacrae",
    year: 1597
}

const quote3 = {
    quote:"The best preparation for tomorrow is doing your best today.",
    source: "H. Jackson Brown, Jr",
    citation: "Brainy Quote",
    year: 1940
}


const quote4 = {
    quote:"No act of kindness, no matter how small, is ever wasted",
    source: "Aesop",
    citation: "Aesop's Fables",
    year: 1814
}


const quote5 = {
    quote:"No matter what people tell you, words and ideas can change the world.",
    source: "Robin Williams",
    citation: "Brainy Quote",
    year: 1951
}


const quote6 = {
    quote:"When you have a dream, you've got to grab it and never let go.",
    source: "Carol Burnett",
    citation: "Brainy Quote",
    year: 2023
}


const quote7 = {
    quote:"If you lose 10 games in a row in a single night, don't even try to win a few games more, just give up and go to sleep.",
    source: "Inaki Rosada",
    citation: "Self",
    year: 2023
}

const quotes = [quote1, quote2, quote3, quote4, quote5, quote6, quote7]


/***
 * `getRandomQuote` function
 * The idea is to generate a random number and then use that number as an index to grab
 * a random quote from quotes array.
***/
function getRandomQuote(quote) {
    len = quotes.length
    let rand = Math.floor(Math.random()  * len)
    return quotes[rand]
}



/***
 * `printQuote` function
 * the idea is to use the getRandomQuote() function to generate a random quote
 * then replace the quotes in quote-box div.
***/
function printQuote(quotes) {
    let x = getRandomQuote(quotes)
 
    // grabs the quote-box container changes the <p> content 
    const container = document.querySelector(`.quote-box`)
    
    const content = (page, sources, citation, year) => `<p class="quote">${page}</p>
    <p class="source">${sources}<span class="citation">${citation}</span><span class="year">${year}</span></p>`
    
    // variables to store the values of properties x.citation and x.year
    var citationVar
    var yearVar

     // checks if the citation property exists for quotes
    if (x.hasOwnProperty('citation') == true) {
        citationVar = x.citation
    }
    else{ // if the citation doesn't exist then the value will be "Unowkn"
        citationVar = "Unkown"
    }

    // checks if the year property exist
    if(x.hasOwnProperty('year') == true){
        yearVar = x.year
    }
    else { // if year property doesn't exist then the value will be Unkown
        yearVar = "Unkown"        
    }
    // container.innerHTML = content(x.quote)
    container.innerHTML = content(x.quote, x.source, citationVar, yearVar)
}

/***
 * click event listener for the print quote button
 * The code will look like the following. You need to complete it.
 * the Idea behind the nextQuoteEvent function is that it uses the printQuote function
 * and then whenever 'next Quote' button is clicked then the nextQuoteEvent is called.
***/

function nextQuoteEvent(e) {
    e.preventDefault()
    printQuote(quotes)
}
document.getElementById("load-quote").addEventListener(`click`, nextQuoteEvent)
