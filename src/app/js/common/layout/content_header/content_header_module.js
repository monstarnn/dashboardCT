/**
 * Created by ilja on 21.10.16.
 */

import Template from '../../../core/templates'
import {ContentHeaderComponent} from './content_header_component'
import {ContentHeaderTitleComponent} from './content_header_title_component'
import {ContentHeaderActionComponent} from './content_header_action_component'

export default angular
    .module('layout.content.header', [
        'ui.router',
        Template.name
    ])
    .component('layoutContentHeader', ContentHeaderComponent)
    .component('layoutContentHeaderTitle', ContentHeaderTitleComponent)
    .component('layoutContentHeaderAction', ContentHeaderActionComponent)