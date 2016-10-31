class MainController {
    constructor($scope, MainService) {
        'ngInject';

        this._$scope = $scope;
        this._MainService = MainService;

        this.todoesItems = [];
    }

    async $onInit() {
        const self = this;
        const response = await self._MainService.getTodoesList('{items}');

        self.todoesItems = response.data.items;

        self._$scope.$apply();
    }

    async onAddNewItem($event) {
        const self = this;
        const { newTodoItem } = $event;
        const response = await self._MainService.addTodoItem(`mutation _ {item: addItem(item: "${newTodoItem}")}`);

        self.todoesItems = self.todoesItems.concat(response.data.item);

        self._$scope.$apply();
    }
}

export default MainController;