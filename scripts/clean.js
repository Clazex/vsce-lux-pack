"use strict";
require("v8-compile-cache");
const { emptyDir } = require("fs-extra");

/**
 * Empty the `out` dir
 * @async
 * @returns {Promise} The result promise
 */
module.exports = () => {
	return emptyDir("out")
		.catch((e) => { console.error(e); });
};
