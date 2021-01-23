"use strict";
require("v8-compile-cache");
const { ensureDir } = require("fs-extra");
const { createVSIX } = require("vsce");

/**
 * Package the extension in the cwd into a VSIX file
 * @async
 * @param {object} pkgInfo An object parsed from package.json
 * @returns {Promise} The result promise
 */
module.exports = ({ name, version }) => {
	return ensureDir("out")
		.then(createVSIX({
			packagePath: `out/${name}-v${version}.vsix`
		}))
		.catch((e) => { console.error(e); });
};
