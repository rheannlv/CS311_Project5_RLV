function showMadLib(){

    //select the div that holds the textboxes 
    const textbox = document.getElementById("txtB");

    //get data from text boxes
    const personT = document.getElementById("person");
    const noun1T = document.getElementById("noun1-T");
    const roomT = document.getElementById("room");
    const foodT = document.getElementById("food");
    const adjT = document.getElementById("adj");
    const scentT = document.getElementById("scent");
    const verbT = document.getElementById("verb");
    const noun2T = document.getElementById("noun2-T");
    const tranT = document.getElementById("tran");
    const animalT = document.getElementById("animal");

      //places the data into the textbox div
      textbox.innerText = "I am so excited for Christmas this year! I got " +personT.value+ " a " +noun1T.value+"." +
      " I wrapped their present and hid them in the " +roomT.value+ " so they would not find it." +
      " I made " +foodT.value+ " for everyone to enjoy. It smells " +adjT.value+ " I cannot wait to eat them!" +
      " We picked out the perfect tree and it smells like " +scentT.value+ ". It is my job to "+verbT.value+ " the tree everyday." +
      " I have been hoping for a " +noun2T.value+ " under the tree this year." +
      " Santa is going to drive his " +tranT.value+ " with his " +animalT.value+ "s and deliver all our gifts!"
    
    
}

function resetbutton(){
 location.reload();
  
}










