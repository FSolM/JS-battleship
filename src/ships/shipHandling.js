import draggableEvents from './events/draggableEvents';
import dropableEvents from './events/dropableEvents';

export default () => {
  draggableEvents.init();
  dropableEvents();
};
