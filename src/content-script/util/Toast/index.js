import $ from 'jquery'
import('./index.css')
/**
 * 创建对话框
 * @param msg {string} 对话框信息
 * @param confirmCallback {function} 确认后的回调
 * @param cancelCallback {function} 取消后的回调
 */
export default function showToast(msg, confirmCallback = undefined, cancelCallback = undefined) {
  const TOAST_ID = "wtu-optimization-plugin-toast"
  const CONFIRM_BUTTON_ID = "wtu-optimization-plugin-btn-confirm"
  const CANCEL_BUTTON_ID = "wtu-optimization-plugin-btn-cancel"

  const TOAST_HTML = `
  <div class="wtu-relogin-plugin-toast" id="${TOAST_ID}">
    <div class="wtu-relogin-plugin-toast-block">
      <div class="wtu-relogin-plugin-toast-title">
        <span>提示</span>
      </div>
      <div class="wtu-relogin-plugin-toast-content">
        <span>${msg}</span>
      </div>
      <div class="wtu-relogin-plugin-toast-btn-area">
        <button class="wtu-relogin-plugin-btn-confirm" id="${CONFIRM_BUTTON_ID}">确定</button>
        <button class="wtu-relogin-plugin-btn" id="${CANCEL_BUTTON_ID}">取消</button>
      </div>
    </div>
  </div>
  `
  $(document.body).append(TOAST_HTML)

  document.getElementById(CONFIRM_BUTTON_ID).onclick = () => {
    closeToast()
    executeIfExist(confirmCallback)
  }
  document.getElementById(CANCEL_BUTTON_ID).onclick = () => {
    closeToast()
    executeIfExist(cancelCallback)
  }

  const closeToast = () => {
    document.getElementById(TOAST_ID).remove()
  }
}

/**
 * 如果存在则执行该函数
 * @param callback {Function}
 */
function executeIfExist(callback = undefined) {
  callback ? callback() : ''
}
