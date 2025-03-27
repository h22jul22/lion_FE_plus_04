const section = document.querySelector('#calc-app');
const xInput = section.querySelector('.x-input');
const yInput = section.querySelector('.y-input');
const submitInput = section.querySelector('.submit-input');
const resultSpan = section.querySelector('.result-span');

// 초기화
submitInput.onclick = (event) => {
    event.preventDefault();
    const x = parseInt(xInput.value);
    const y = parseInt(yInput.value);
    const result = x + y;
    resultSpan.textContent = result;
};
