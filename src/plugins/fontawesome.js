import Vue from 'vue';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faEdit, faEraser, faSignOutAlt, faCheck, faSpinner, faExclamation } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
 
library.add(faEdit, faEraser, faSignOutAlt, faCheck, faSpinner, faExclamation)
 
Vue.component('font-awesome-icon', FontAwesomeIcon)