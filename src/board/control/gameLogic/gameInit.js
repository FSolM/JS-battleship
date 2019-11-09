import currentTurn from './currentTurn';

export default (() => {
  const eventFunction = (e) => {
    const position = e.target.id;
    currentTurn(true, position);
    e.target.classList.remove('pointer');
    e.target.removeEventListener('click', eventFunction);
  };
  
  const addClickListeners = () => {
    const target = document.getElementById('b-board');
    for (let i = 1; i < target.children.length; i += 1) {
      for (let j = 0; j < target.children[i].children.length; j += 1) {
        target.children[i].children[j].classList.add('pointer');
        target.children[i].children[j].addEventListener('click', eventFunction);
      }
    }
  };

  const init = () => { 
    addClickListeners();
  };
  
  return {init, eventFunction}
})();
