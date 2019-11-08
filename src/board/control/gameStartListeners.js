import gameStart from './functions/gameStart';



export default (target) => {

  target.disabled = true;
  target.addEventListener('click', () => {
    gameStart();
  });
};
