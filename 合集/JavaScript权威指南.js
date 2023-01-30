/*
 * @Author: try try418@163.com
 * @Date: 2023-01-29 14:57:23
 * @Description:
 */
function not(f) {
  return function (...args) {
    const result = f.apply(this, args);
    return !result;
  };
}
