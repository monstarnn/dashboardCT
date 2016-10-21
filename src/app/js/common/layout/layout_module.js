/**
 * Created by ilja on 21.10.16.
 */

import ContentHeader from './content_header/content_header_module'

export default angular
    .module('common.layout', [
        ContentHeader.name
    ])