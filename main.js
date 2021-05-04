function Cl() {

      

      //call the inputs

      var container = document.getElementsById('container');

      var error = document.getElementById("error");

      var ER = document.getElementById("ER").value;

      var EN = document.getElementById("EN").value;

      var CC = document.getElementById("CC").value;

      var output = document.getElementById("output");

      // calculate the values

   var cal = (ER * 0.25)+(EN * 0.5)+(CC * 0.25);

   //if the note <= 20 than printed if not show warning

   if (cal <= "20") {

      

   output.innerHTML = cal;

}

else{

   error.style.display="block";

   container.style.marginTop="5%";

}

}

