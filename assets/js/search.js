let preQuery = ""; // 上一次搜索的内容
let wrapDom = document.getElementById("search_zone"); // 搜索区域的dom元素

function searchFn(dom, query) {
  let wrap = wrapDom || document.querySelector(dom);
  let innerHTML = wrap.innerHTML;
  if (!preQuery) {
    let preReg = new RegExp(
      '<span>' +
      preQuery +
      "</span>"
    );
    innerHTML = innerHTML.replace(preReg, preQuery);
  }
  if (query) {
    query = scriptFilter(query);
    let reg = new RegExp(query);
    innerHTML = innerHTML.replace(
      reg,
      '<span id="search_result">' +
      query +
      "</span>"
    );
  }
  wrap.innerHTML = innerHTML;
  preQuery = query;

  let targetElement = document.getElementById('search_result')
  let scrollHeight = targetElement.getBoundingClientRect().top + window.scrollY - 200;

  window.scroll({
    top: scrollHeight,
    behavior: 'smooth'
  });

  bindSearch();
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

function bindSearch() {
  let searchBtn = document.getElementById("search_btn")

  searchBtn.removeEventListener("click", function () {
    console.log('remove');
  });

  searchBtn.addEventListener("click", function () {
    let searchInput = document.getElementById("search_input");

    searchFn(void 0, searchInput.value);
  })
}

bindSearch();
