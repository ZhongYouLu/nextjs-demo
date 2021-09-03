module.exports = {
  extends: ['@commitlint/config-conventional'],
};

/**
 * @commitlint/config-conventional
 * - build：修改專案構建系統(例如 glup，webpack，rollup 的配置等)
 * - ci：修改專案持續集成流程(例如 Travis，Jenkins，GitLab CI，Circle等)
 * - docs：文件更新 (documentation)
 * - feat：新增功能 (feature)
 * - merge：分支合併 Merge branch ? of ?
 * - fix：修補 bug (bug fix)
 * - perf：改善效能 (A code change that improves performance)
 * - refactor：重構 (既不是新增功能，也不是修補 bug 的程式碼變動)
 * - style：不影響程式邏輯的修改(修改空白字符，格式縮進，補全缺失的分號等)
 * - test：新增測試用例或是更新現有測試
 * - revert：撤銷回覆先前的 commit 例如：revert: type(scope): subject (回覆版本：xxxx)
 * - chore：建構程序或輔助工具的變動 (maintain)
 */
