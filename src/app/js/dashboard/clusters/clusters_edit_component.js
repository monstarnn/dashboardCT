/**
 * Created by ilja on 24.10.16.
 */


export class ClastersEditController {
    constructor () {
        this.clustersService; // from html binding
        this.clusterInfo; // from html binding
        if (!this.clusterInfo) {
            this.clusterInfo = {
                // "ID": "mirantis_private",
                "Name": "",
                "Description": "",
                "State": "",
                "DeploymentData": "",
                "Deployment": {
                    "ID": "",
                    "Access": {
                        "CloudProvider": "mirantis",
                        "Host": "https://104.198.101.132",
                        "APIPath": "",
                        "Prefix": "",
                        "Username": "admin",
                        "Password": "ssrBCMpzp5MAuRBj",
                        "BearerToken": "",
                        "Insecure": true,
                        "IsLocal": false
                    },
                    "Provider": "mirantis"
                }
            }
        }
    }

    save () {
        var cluster = this.clusterInfo;
        this.clustersService.Resource
            .then(
                (resource) => {
                    resource.save( cluster )
                        .then((r) => {
                            resource.getById(r.ID , true).then((r) => {
                            });
                        })
                }
            )
            .catch((r) => {
                debugger;
            })
    }

};

export const ClastersEditComponent = {
    bindings : {
        clustersService : '=',
        clusterInfo : '@'
    },
    template : function ($templateCache) {
        return $templateCache.get('dashboard/clusters/clusters_edit_component.html')
    },
    controller : ClastersEditController
};