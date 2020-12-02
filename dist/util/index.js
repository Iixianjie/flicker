/** 与@lxjx/sass-base同步，用于js代码的常用屏幕尺寸 */
var SM = 576;
var MD = 768;
var LG = 992;
var XL = 1200;
/** 与@lxjx/sass-base同步，用于js代码的z-index预设值 */

var Z_INDEX = 1000;
var Z_INDEX_DRAWER = 1400;
var Z_INDEX_MODAL = 1800;
var Z_INDEX_MESSAGE = 2200;
/** 禁止冒泡的便捷扩展对象 */

var stopPropagation = {
  onClick: function onClick(e) {
    e.stopPropagation();
  }
};
/** throw error */

function throwError(errorMsg, namespace) {
  throw new Error("M78 -> ".concat(namespace ? "".concat(namespace, " -> ") : '', " ").concat(errorMsg));
}
function sendWarning(msg, namespace) {
  console.log("M78 -> ".concat(namespace ? "".concat(namespace, " -> ") : '', " ").concat(msg));
}

export { LG, MD, SM, XL, Z_INDEX, Z_INDEX_DRAWER, Z_INDEX_MESSAGE, Z_INDEX_MODAL, sendWarning, stopPropagation, throwError };
