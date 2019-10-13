/*
 * Welcome to your app's main JavaScript file!
 *
 * We recommend including the built version of this JavaScript file
 * (and its CSS file) in your base layout (base.html.twig).
 */

console.log('Hello Webpack Encore! Edit me in assets/js/app.js');
// any CSS you require will output into a single css file (app.css in this case)
require('../css/app.css');
require('../css/carousel.css');


'use strict';

require('./layout');

import Vue from 'vue';

import CustomHeader from '../components/CustomHeader';
import Test from '../components/Test';
import HomePost from "../components/HomePost";
import HomePersonRight from '../components/HomePersonRight'
import HomePersonLeft from '../components/HomePersonLeft'

new Vue({
    el: '#app',
    components: {
        CustomHeader,
        Test,
        HomePost,
        HomePersonRight,
        HomePersonLeft
    }
}).$mount('#app');

// Need jQuery? Install it with "yarn add jquery", then uncomment to require it.
// const $ = require('jquery');
