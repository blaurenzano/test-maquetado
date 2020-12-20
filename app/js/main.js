/**
 * Main
 * @author Pablo Mendoza
 */

import {
    DEBUG,
    HTML, LANG,
} from './config/constants'

import { PageView } from './managers/page'

new PageView(document.querySelector('#view-sale'))