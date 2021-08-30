const nestUnderBasePath = require("../tools/shared-gatsby-node");

exports.onCreatePage = (params, options) => {
  nestUnderBasePath(params, options);
};
