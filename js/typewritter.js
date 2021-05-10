const text = 'Hi, I am a developer';
const normalSpeed = 150; // in milliseconds
const pauseSpeed = 400; // in milliseconds

let i = 0;

function typeWriter() {
  if (i < text.length) {
    
    document.getElementById("demo").innerHTML += text.charAt(i);
    i++;
    setTimeout(typeWriter, (text.charAt(i)===' ') ? pauseSpeed : normalSpeed);
  }
}
typeWriter();
