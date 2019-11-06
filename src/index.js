import shipHandling from './ships/shipHandling';
import boardRender from './board/boardRender';
import renderUserOptions from './board/control/renderUserOptions';

boardRender();
renderUserOptions(document.getElementById('user-options'));
shipHandling();
