// Fetch random advice from API
function getAdvice() {
  fetch('https://api.adviceslip.com/advice')
  .then(response => response.json())
  .then(data => showAdvice(data));
} 

function showAdvice(data) {
  const advice = data.slip;
  document.querySelector('#advice-id').innerHTML = advice.id;
  document.querySelector('.advice').textContent = advice.advice;
}

getAdvice();

document.querySelector('.die').addEventListener('click', getAdvice);


