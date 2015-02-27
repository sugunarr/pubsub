/*!
* NAME OF THE FILE (e.g. filter.client.js)
* This file contains the code for the Filter controls.
* 
* @project   PROJECT NAME
* @date      YYYY-MM-DD 
* @author    YOUR NAME, SapientNitro <YOUREMAIL@sapient.com>
* @licensor  CLIENTNAME
* @site      PROJECTNAME
*
*/
(function (MODULE, $, undefined) {
    'use strict';

    /**
     * Logging function, for debugging mode
     */
	$.log = function (message) {
        if (MODULE.config.debug && (typeof window.console !== 'undefined' && typeof window.console.log !== 'undefined') && console.debug) {
            console.debug(message);
        } /*else {
            alert(message);
        }*/
    };

	/**
     * Angus Croll awesome typeof fix from http://goo.gl/GtvsU
     */
	$.toType = (function toType(global) {
		return function (obj) {
			if (obj === global) {
				return 'global';
			}
			return ({}).toString.call(obj).match(/\s([a-z|A-Z]+)/)[1].toLowerCase();
		};
	}(this));

	
	/*
     * Singletons serve as a namespace provider which isolate implementation code
     * from the global namespace so as to provide a single point of access for functions,
     * this is useful for organizing code into logical sections.
     * It is possible to put parentheses around this structure to instantiate it immediately after it's parsed.
     * This way it's always present when the script is executed and doesn't have to be instantiated separately.
	*/
    MODULE.subModule = (function () {
        function _subModule() {

            /**
            * In non-strict mode, 'this' is bound to the global scope when it isn't bound to anything else.
            * In strict mode it is 'undefined'. That makes it an error to use it outside of a method.
            */

            /*jshint validthis: true */
            var _this = this;
            /* Store this to avoid scope conflicts */

            this.cartFunc = function () {
                /**
                 * This code loads the SDK asynchronously so it does not block loading other elements of your page. This is particularly important to ensure fast page loads for users and SEO robots.
                 */
               console.log("Hurray!! It is loading..");
            };
           
            /**
             * Init call
             */
            this.init = function () {
                _this.cartFunc();
                return this; /*this refer to MODULE.subModule*/
            };

            return this.init(); /*initialize the init()*/
        }
        return new _subModule(); /*creating a new object of subModule rather then a funtion*/
    }());

/**
 * Check to evaluate whether 'MODULE' exists in the global namespace - if not, assign window.MODULE an object literal
 */
}(window.MODULE = window.MODULE || {}, jQuery));