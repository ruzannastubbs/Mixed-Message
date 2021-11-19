
const message_div = document.getElementById("message_div");
const btn = document.getElementById("btn");

btn.addEventListener("click", function(){
   let pronouns = ['my', 'your', 'his', 'her', 'our', 'their'];
   let adjectives = ['impossible', 'imaginary', 'glorious', 'hilarious', 'historical', 'witty'];
   let nouns = ['friend', 'neighbour', 'chair', 'sparrow', 'giant', 'humor'];
   
   function message(array){
       return (array[Math.floor(Math.random()*array.length)]);
   }
   let mixedMessages = message(pronouns) + " " + message(adjectives) + " " + message(nouns); 
    message_div.innerHTML = mixedMessages;
});
