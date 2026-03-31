const btn = document.getElementById("btn");
const text = document.querySelector("p#text");
const time = document.getElementById("time");
const rect = btn.getBoundingClientRect();
const btnW = rect.width;
const btnH = rect.height;
let count = 0;
let counttime = 0;
let timeID = null;
let potision = 0

const update = () => {
    text.style.top = `${potision}px`;
    potision += 2;

    if (potision > window.innerHeight) {
        potision = -text.offsetHeight;
    }
}
const animate = () => {
    update();
    requestAnimationFrame(animate);
}

const teleport = () => {
    count++
    const randomX = Math.floor(Math.random()*(window.innerWidth - btnW));
    const randomY = Math.floor(Math.random()*(window.innerHeight - btnH));
    btn.style.top = `${randomY}px`;
    btn.style.left = `${randomX}px`;
    btn.style.transform = "none";

    if (!timeID) {
        timeID = setInterval(() => {
            counttime++;
            time.innerHTML = `time: ${counttime}s`;
        }, 1000);
    }


    if (count === 5) {
        alert("หมูก็งี้นิ้วอ้วน🥴");
        btn.style.scale = 0.2;
    } else if (count === 10) {
        alert("อีกนิดเดียวจร้าา😙😙");
        btn.style.scale = Math.floor(Math.random()* 6)+ 1;
    } else if (count === 15) {
        alert("หมูตัวอ้วนนิ้วสั้น🥴")
        btn.style.animation = "swing 0.1s ease-out forwards infinite";
        btn.style.scale = Math.floor(Math.random()* 6)+ 1;
    } else if (count === 20) {
        alert(`เริ่ด กว่าจะกดโดนต้องกดถึง${count}รอบเลย ใช้เวลาไปตั้ง${counttime}s🐷🐷`);
        btn.removeEventListener("touchstart", teleport);  
        btn.removeEventListener("mouseover", teleport);
        btn.style.visibility = "hidden";
        text.style.visibility = "visible";
        requestAnimationFrame(animate);
        clearInterval(timeID);
    }
      
    console.log(count);
    console.log(randomX, randomY);
}

btn.addEventListener("mouseover", teleport);
btn.addEventListener("touchstart", teleport);


