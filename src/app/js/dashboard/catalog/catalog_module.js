
import {catalogListComponent} from './catalog_list_component'
import {catalogListItemComponent} from './catalog_list_item_conponent'
import stateConfig from './catalog_stateconfig'
import Core from '../../core/module'

export default angular
    .module('dashboard.catalog', [
        'ui.router',
        Core.name
    ])
    .config(stateConfig)
    .component('mctCatalogList', catalogListComponent)
    .component('mctCatalogListItem', catalogListItemComponent)
    .factory('ApiResourceCatalog', getApiResourceCatalog)

function getApiResourceCatalog (ApiResource) {
    return ApiResource.resource('catalog');
}
