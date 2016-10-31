class MainService {
    constructor($http) {
        'ngInject';

        this._$http = $http;
    }

    async getTodoesList(query, vars) {
        const self = this;

        const response = await self._$http
            .post('/api/graphql', {
                query,
                vars
            });

        return response.data;
    }

    async addTodoItem(query, vars) {
        const self = this;

        const response = await self._$http
            .post('/api/graphql', {
                query,
                vars
            });

        return response.data;
    }
}

export default MainService;