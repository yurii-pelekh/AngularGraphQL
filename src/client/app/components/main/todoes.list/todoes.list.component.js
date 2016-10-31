import template from './todoes.list.html';
import controller from './todoes.list.controller';

let todoesListComponent = {
    bindings: {
        todoesItems: '<',
        onAddNewItem: '&'
    },
    controller,
    template,
    restrict: 'E'
};

export default todoesListComponent;
