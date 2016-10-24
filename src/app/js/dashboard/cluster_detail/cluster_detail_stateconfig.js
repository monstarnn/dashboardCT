/**
 * Created by ilja on 24.10.16.
 */


export default  function ($stateProvider) {
    $stateProvider
        .state('group.cluster.detail', {
            url: '/clusters/:clusterId',
            parent: 'group',
            views : {
                "" : {
                    // template :
                }
            }

        })
}