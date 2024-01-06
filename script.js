
let timer = 0;
let timerID;

const Id = document.getElementById('parentID')
const newId=document.getElementById('newTime');

const start = () => {
  timerID = setInterval(() => {
    Id.innerHTML = ++timer
  },1000)
}

const stop = () => {
  clearInterval(timerID)
}

const lap = () =>{
  var lapItem=document.createElement('p');
  lapItem.textContent= timer;
  newId.appendChild(lapItem);
}