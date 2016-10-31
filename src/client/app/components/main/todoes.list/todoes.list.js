import angular from 'angular';
import TodoesListComponent from './todoes.list.component';

const todoesListModule = angular
    .module('app.main.todoes.list', [])
    .component('todoesList', TodoesListComponent)
    .name;

export default todoesListModule;
