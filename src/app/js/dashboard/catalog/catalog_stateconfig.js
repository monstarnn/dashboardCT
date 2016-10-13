/**
 * Created by ilja on 07.10.16.
 */
import CatalogController from './catalog_controller'

export default function ($stateProvider) {

    $stateProvider
        .state ('Group.Catalog', {
                url : "/catalog",
                parent : 'Group',
                resolve: {
                    'catalogList': resolveApiResourceCatalog,
                },
                views:{
                    "": {
                        templateProvider: function($templateCache){
                            return $templateCache.get('dashboard/catalog/catalog.html');
                        },
                        controller : CatalogController,
                        controllerAs : '$ctrl'
                    }
                }
            }
        )
}

function resolveApiResourceCatalog(ApiResourceCatalog) {
    return ApiResourceCatalog.query().$promise;
}