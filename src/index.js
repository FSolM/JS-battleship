console.log("Working")
document.querySelector('.square').addEventListener('dragstart', (e) => {
  // e.preventDefault();
  console.log(e.target);
  e.target.classList.add('dragenter');
})

document.querySelector('.cell').addEventListener('dragover', (e) => {
  // e.preventDefault();
  console.log(e.target);
})

document.querySelector('.cell').addEventListener('drop', (e) => {
  e.preventDefault();
})