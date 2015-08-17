var quotes = [{
	text: "Cool quote bro!",
	author: "me!"},
{
	text: "Moar Quotes!",
	author: "Einstein"
}]
$( window ).load( insertRandomQuote );

function insertRandomQuote(){
  quote = quotes[Math.floor(Math.random() * quotes.length)];
  insertQuote(quote);
}

function insertQuote(quote){
  $(".quote").html(quote.text);
  $(".author").html(quote.author);
}
