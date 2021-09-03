/**
 * Fix: lint-staged not running on pre-commit
 * @see {@link https://stackoverflow.com/questions/50048717/lint-staged-not-running-on-precommit/66903558#66903558}
 */
module.exports = {
  hooks: {
    'pre-commit': 'lint-staged',
    'commit-msg': 'commitlint -e $HUSKY_GIT_PARAMS',
  },
};
