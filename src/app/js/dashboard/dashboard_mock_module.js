import dashboard from './dashboard_module'
import mockApi from '../mock/mock_api'

let dashboardMock = angular.module('dashboardmock', ['ngMockE2E', dashboard.name]);

mockApi(dashboardMock);

export default dashboardMock;
