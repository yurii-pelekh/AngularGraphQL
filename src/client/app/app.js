import angular from 'angular';
import uiRouter from 'angular-ui-router';
import Components from './components/components';
import AppComponent from './app.component';

angular
    .module('app', [
        uiRouter,
        Components
    ])
    .component('app', AppComponent);
