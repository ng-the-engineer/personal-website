// Nationwide
const modalNationwide = document.getElementById("modalNationwide");
document.getElementById("allPrjNationwide").onclick = () => modalNationwide.style.display = "block";
document.getElementById("closeModalNationwide").onclick = () => modalNationwide.style.display = "none";

// Sainsburys Banks
const modalSainsburysBank = document.getElementById("modalSainsburysBank");
document.getElementById("allPrjSainsburysBank").onclick = () => modalSainsburysBank.style.display = "block";
document.getElementById("closeModalSainsburysBank").onclick = () => modalSainsburysBank.style.display = "none";

// SC
const modalSC = document.getElementById("modalSC");
document.getElementById("allPrjSC").onclick = () => modalSC.style.display = "block";
document.getElementById("closeModalSC").onclick = () => modalSC.style.display = "none";

// AutoBid
const modalAutobid = document.getElementById("modalAutobid");
document.getElementById("allPrjAutobid").onclick = () => modalAutobid.style.display = "block";
document.getElementById("closeModalAutobid").onclick = () => modalAutobid.style.display = "none";

// Travie
const modalTravie = document.getElementById("modalTravie");
document.getElementById("allPrjTravie").onclick = () => modalTravie.style.display = "block";
document.getElementById("closeModalTravie").onclick = () => modalTravie.style.display = "none";

// DMX
const modalDmx = document.getElementById("modalDmx");
document.getElementById("allPrjDmx").onclick = () => modalDmx.style.display = "block";
document.getElementById("closeModalDmx").onclick = () => modalDmx.style.display = "none";

window.onclick = (event) => {
    switch(event.target) {
      case modalAutobid:
        modalAutobid.style.display = "none";
      case modalTravie:
        modalTravie.style.display = "none";
      case modalSainsburysBank:
        modalSainsburysBank.style.display = "none";
      case modalSC:
        modalSC.style.display = "none";
      case modalDmx:
        modalDmx.style.display = "none";
      case modalNationwide:
        modalNationwide.style.display = "none";
    }
  };