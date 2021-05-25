const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];
console.log(colors);

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const bodyEl = document.querySelector('body');
const BtnEl = document.querySelectorAll('button');
const startBtnEl = BtnEl[0];
const stopBtnEl = BtnEl[1];

let idx = 0;
let idInterval = null;

const timer = {
  isActive: false,
  start() {
    if (this.isActive) {
      return;
    }

    this.isActive = true;
    
    let mainNumber = () => {
        
      idx = randomIntegerFromInterval(0, colors.length - 1);
      console.log(idx);
      console.log(colors[idx]);
      bodyEl.style.backgroundColor = colors[idx];
                  
    };
        
   this.idInterval = setInterval(mainNumber, 1000);
  },
        
  stop() {
    this.isActive = false;
    clearInterval(this.idInterval)
  },
};



startBtnEl.addEventListener('click', timer.start.bind(timer));

stopBtnEl.addEventListener('click', timer.stop.bind(timer));

