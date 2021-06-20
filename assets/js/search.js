let preQuery = ""; // 上一次搜索的内容
let wrapDom = document.getElementById("search_zone"); // 搜索区域的dom元素

function searchFn(dom, query) {
  let wrap = wrapDom || document.querySelector(dom);
  let innerHTML = wrap.innerHTML;
  if (!preQuery) {
    let preReg = new RegExp(
      '<span style="color: #000; background-color: #e3e4e5">' +
        preQuery +
        "</span>",
      "g"
    );
    innerHTML = innerHTML.replace(preReg, preQuery);
  }
  if (query) {
    query = scriptFilter(query);
    let reg = new RegExp(query, "g");
    innerHTML = innerHTML.replace(
      reg,
      '<span style="color: #000; background-color: #e3e4e5">' +
        query +
        "</span>"
    );
  }
  wrap.innerHTML = innerHTML;
  preQuery = query;
}

function scriptFilter(s) {
  var pattern = new RegExp(
    "[%--`~!@#$^&*()=|{}':;',\\[\\].<>/?~！@#￥……&*（）——|{}【】‘；：”“'。，、？]"
  ); //格式 RegExp("[在中间定义特殊过滤字符]")
  var rs = "";
  for (var i = 0; i < s.length; i++) {
    rs = rs + s.substr(i, 1).replace(pattern, "");
  }
  return rs;
}

document.getElementById("search_btn").addEventListener("click", function () {
  searchFn(void 0, document.getElementById("search_input").value);
});
