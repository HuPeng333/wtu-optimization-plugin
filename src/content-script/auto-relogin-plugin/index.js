import showToast from "../../util/Toast"

function preCheck() {
  const LOGIN_URL_REGX = /jwglxt.wtu.edu.cn\/xtgl\/login_slogin.html/
  // 关闭内置的重新登录页面
  const url = window.location.href
  if (LOGIN_URL_REGX.exec(url)) {
    window.close()
  }
}

function startObserver () {
  const RE_LOGIN_URL = 'http://ehall.wtu.edu.cn/appShow?appId=5271578965812781'
  const MASK_ID = 'statusModal'
  const observer = new MutationObserver(() => {
    const mask = document.getElementById(MASK_ID)
    if (mask) {
      // 删除蒙层
      mask.remove()
      showToast('登录已过期，是否需要重新登录?', () => {
        window.open(RE_LOGIN_URL)
        showToast('正在重新登录，请等待新打开的窗口加载完毕！')
      })
    }
  })

  observer.observe(document.body, {
    childList: true
  })
}

preCheck()
startObserver()
