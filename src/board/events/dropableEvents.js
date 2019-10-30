let filled = []

const dragOver = (e) => {
  e.preventDefault();    
}

// Check methods

const dragEnter = (e) => {
  e.preventDefault();
  if (filled.includes(e.target.id)) {
    return
  } 
}

const dragLeave = (e) => {
  e.preventDefault();
  if (filled.includes(e.target.id)) {
    return
  }
}

const splitClasses = (classString) => {
  const classArray = classString.split(' ');
  classArray.splice(1, 0, 'dropped');
  return classArray.join(' ');
};

const onDrop = (e) => {
  const id = e.dataTransfer.getData('text');
  const child = document.getElementById(id);
  e.target.appendChild(child);
  filled.pop();
  filled.push(e.target.id);
  child.className = splitClasses(child.className);
}

const drop = (e) => {
  e.preventDefault();
  if (filled.includes(e.target.id)) {
    return
  } else if (/^cell/.test(e.target.id)) {
    onDrop(e);
  }
}

// Check methods

export default () => {
  const cells = document.querySelectorAll('.cell');
  for (const cell of cells) {
    cell.addEventListener('dragover', dragOver, false);
    cell.addEventListener('dragenter', dragEnter, false);
    cell.addEventListener('dragleave', dragLeave, false);
    cell.addEventListener('drop', drop, false);
  }
}
