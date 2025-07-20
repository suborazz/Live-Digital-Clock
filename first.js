const timer = document.getElementById("root");

function timming() {
  const now = new Date(); 
  const indianTime = now.toLocaleTimeString("en-IN", { hour12: false });
  timer.innerHTML = indianTime;
}

setInterval(timming, 1000);
