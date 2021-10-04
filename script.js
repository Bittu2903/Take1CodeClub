function handleTypeWriter({ startFrom, textTowrite, speed, selector }) {
  if (startFrom <= textTowrite.length) {
    setTimeout(() => {
      document.querySelector(selector).innerHTML += textTowrite.charAt(
        startFrom++
      );
      handleTypeWriter({ startFrom, textTowrite, speed, selector });
    }, speed);
  } else {
    document.querySelector(selector).innerHTML = "";

    handleTypeWriter({ startFrom: 0, textTowrite, speed, selector });
  }
}
handleTypeWriter({
  startFrom: 0,
  textTowrite: "WELCOME TO T1CC",
  speed: 200,
  selector: "#welcome_text",
});

var myIndex = 0;
carousel();

function carousel() {
  var i;
  var x = document.getElementsByClassName("mySlides");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  myIndex++;
  if (myIndex > x.length) {
    myIndex = 1;
  }
  x[myIndex - 1].style.display = "block";
  setTimeout(carousel, 2000); // Change image every 2 seconds
}

// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("submit");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal
// btn.onclick = function () {
//   modal.style.display = "block";
// };

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
  modal.style.display = "none";
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};

const modelVisible = (e) => {
  console.log(e);
};
