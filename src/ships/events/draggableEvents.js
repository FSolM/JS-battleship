const dragStart = (e) => {
  e.target.classList.add('drag-start');
  e.dataTransfer.setData('text', e.target.id);
  setTimeout(() => (e.target.classList.add('invisible')),0);
}

const dragEnd = (e) => {
  e.target.classList.remove('invisible');
  e.target.classList.remove('drag-start');
}

const rotate = (e) => {
  e.target.classList.forEach((cssClass) => {
    if (/^horizontal/.test(cssClass)) {
      e.target.classList.remove(cssClass);
      const newClass = 'vertical' + cssClass.substring(10);
      e.target.classList.add(newClass);
      return;
    } else if (/^vertical/.test(cssClass)) {
      e.target.classList.remove(cssClass);
      const newClass = 'horizontal' + cssClass.substring(8);
      e.target.classList.add(newClass);
      return;
    }
  });
  if (e.target.classList.contains('horizontal')) {
    e.target.classList.remove('horizontal');
    e.target.classList.add('vertical');
  } else
  if (e.target.classList.contains('vertical')) {
    e.target.classList.remove('vertical');
    e.target.classList.add('horizontal');
  }
}

export default () => {
  const ships =  document.querySelectorAll('*[class^="ship"]');
  for (const ship of ships){
    ship.addEventListener('dragstart', dragStart, false);
    ship.addEventListener('dragend', dragEnd, false);
    ship.addEventListener('click', rotate, false);
  }
}
