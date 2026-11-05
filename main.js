const counterEl = document.getElementById('counter');
const incBtn = document.getElementById('increment');
const decBtn = document.getElementById('decrement');
let count = 0;

incBtn.addEventListener('click', () => {
    count++;
    counterEl.textContent = count;
    counterEl.style.color = 'green';
});

decBtn.addEventListener('click', () => {
    if (count > 0) {
        count--;
        counterEl.textContent = count;
        counterEl.style.color = 'red';
    }
});

const box = document.getElementById('box');

box.addEventListener('mousemove', (e) => {
    const rect = box.getBoundingClientRect();
    const x = Math.floor(e.clientX - rect.left);
    const y = Math.floor(e.clientY - rect.top);
    box.textContent = `x: ${x}, y: ${y}`;
});

const colorInput = document.getElementById('colorInput');

colorInput.addEventListener('input', () => {
    document.body.style.backgroundColor = colorInput.value;
});
