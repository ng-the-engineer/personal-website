// AutoBid
const modalAutobid = document.getElementById("modalAutobid");
document.getElementById("allPrjAutobid").onclick = () => modalAutobid.style.display = "block";
document.getElementById("closeModalAutobid").onclick = () => modalAutobid.style.display = "none";

// Travie
const modalTravie = document.getElementById("modalTravie");
document.getElementById("allPrjTravie").onclick = () => modalTravie.style.display = "block";
// document.getElementById("travie_hist").onclick = () => modalTravie.style.display = "block";
document.getElementById("closeModalTravie").onclick = () => modalTravie.style.display = "none";

window.onclick = (event) => {
    switch(event.target) {
      case modalAutobid:
        modalAutobid.style.display = "none";
      case modalTravie:
        modalTravie.style.display = "none";
    }
  };