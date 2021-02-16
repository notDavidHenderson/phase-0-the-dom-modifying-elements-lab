// Write your code here!
const main = document.getElementById("main"); //no longer has dom node main
main.remove();

// has new header var that points to h1#vic
const newHeader = document.createElement("h1");
newHeader.id="victory"; 
newHeader.innerHTML="David is the champion";
