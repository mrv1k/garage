const nestUnderBasePath = ({ page, actions }, options) => {
  const { createPage, deletePage } = actions;
  const { basePath } = options;

  // kind of fragile, assumes that base path will match 1 to 1 with folder structure
  if (page.componentPath.includes(basePath)) {
    const newPage = { ...page };
    deletePage(page);
    newPage.path = `${basePath}${newPage.path}`;
    // path already starts with a slash
    createPage(newPage);
  }
};

module.exports = nestUnderBasePath;
