const track = (url, element) => {

  navigator.sendBeacon("https://backend-ng-the-engineer.cloud.okteto.net/visit", JSON.stringify({ 
    // "url": "https://anthony.ng",
    // "element": "cv"
    url, element
   }));

}