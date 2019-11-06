import randomizePositions from './functions/randomizePositions';

export default (target) => {
  target.addEventListener('click', () => {
    randomizePositions();
  });
};
