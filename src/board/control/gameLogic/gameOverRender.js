import initializer from "../initializer"
import gameInit from './gameInit'

const winningMsg = (player) => {
  if (player){
    return "Player Won!"
  } else {
    return "AI won!"
  }
}

const removeClickListeners = () => {
  const target = document.getElementById('b-board');
  for (let i = 0; i < target.children.length; i += 1) {
    for (let j = 0; j < target.children[i].children.length; j += 1) {
      target.children[i].children[j].classList.add('pointer');
      target.children[i].children[j].removeEventListener('click', gameInit.eventFunction);
    }
  }
}

const displayWinningMsg = (container, player) => {
  let msg = winningMsg(player);
  container.classList.toggle('set-hidden')
  container.innerHTML = `<h1>${msg}</h1>
                         <button id="restart">Resart</button>`;
}

const addRestartListener = () => {
  document.getElementById('restart').addEventListener('click', () => {
    document.querySelector('.winner').classList.toggle('set-hidden');
    initializer();
  })
}

export default (player) => {
  const winnerContainer = document.querySelector('.winner');
  displayWinningMsg(winnerContainer, player);
  removeClickListeners();
  addRestartListener();
}