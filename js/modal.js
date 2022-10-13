// AutoBid
const modalAutobid = document.getElementById("modalAutobid");
document.getElementById("allPrjAutobid").onclick = () => modalAutobid.style.display = "block";
document.getElementById("closeModalAutobid").onclick = () => modalAutobid.style.display = "none";

window.onclick = (event) => {
    switch(event.target) {
      case modalAutobid:
        modalAutobid.style.display = "none";
    }
  };