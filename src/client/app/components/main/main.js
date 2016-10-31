import angular from 'angular';
import MainComponent from './main.component';
import TodoesListComponent from './todoes.list/todoes.list.component';
import MainService from './main.service';

const mainModule = angular
    .module('app.main', [])
    .component('main', MainComponent)
    .component('todoesList', TodoesListComponent)
    .service('MainService', MainService)
    .config(($stateProvider, $urlRouterProvider) => {
        'ngInject';

        $urlRouterProvider.otherwise('/');

        $stateProvider
            .state('main', {
                url     : '/',
                component: 'main'
            });
    })
    .name;

export default mainModule;
