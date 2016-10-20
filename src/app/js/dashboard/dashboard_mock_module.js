import mockApi from '../mock/mock_api'

let mock = angular.module('dashboard.mock', ['dashboard', 'ngMockE2E']);

mockApi(mock);

export default mock;
