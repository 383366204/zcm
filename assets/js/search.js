let preQuery = ''; // 上一次搜索的内容
let wrapDom = ''; // 搜索区域的dom元素
function searchFn(dom, query) {
  let wrap = wrapDom || document.querySelector(dom);
  let innerHTML = wrap.innerHTML;
  if (!preQuery) {
    let preReg = new RegExp('<span style="color: #000; background-color: #e3e4e5">' + preQuery + '</span>', 'g');
    innerHTML = innerHTML.replace(preReg, preQuery);
  }
  if (query) {
    let reg = new RegExp(query, 'g');
    innerHTML = innerHTML.replace(reg, '<span style="color: #000; background-color: #e3e4e5">' + query + '</span>');
  }
  wrap.innerHTML = innerHTML;
  preQuery = query;
}