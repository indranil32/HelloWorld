function mOver(obj) {
    obj.innerHTML = "HELLO WORLD"
    let R = [Math.floor(Math.random() * 255) + 1];
    let G = [Math.floor(Math.random() * 255) + 1];
    let B = [Math.floor(Math.random() * 255) + 1];
    const randomNumb = `rgb(${R}, ${G}, ${B})`;
    obj.style.backgroundColor = randomNumb;
    
  }
  
  function mOut(obj) {
    obj.innerHTML = "Hello world"
  }