function changeName() {
          let text;
          let person = prompt("What's your name?", "Kong");
          if (person == null || person == "") {
            text = "User cancelled the prompt.";
          } else {
            text = "Hello!" + person;
          }  
          document.getElementById("inputName").innerHTML = text;
}
