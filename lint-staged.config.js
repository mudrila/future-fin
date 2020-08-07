module.exports = {
  "{,!(node_modules)/**/}!(.storybook)!(.next)/*.{js,jsx}": [
    "node_modules/.bin/prettier --write",
    "eslint --fix --max-warnings=0",
    "git add"
  ]
};
