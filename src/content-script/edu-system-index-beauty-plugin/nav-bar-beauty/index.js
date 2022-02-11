import html from "./html"
import $ from 'jquery'

export default () => {
  replaceNav()
  setTimeout(() => {
    addNavAni()
  }, 100)
}

function replaceNav() {
  // 清空原来的导航栏
  const $nav = $('#myDiv1')
  $nav.empty()
  $nav.append(html())
}

function addNavAni() {
  const BASE_TRANSITION_DISTANCE = 100
  const HEIGHT_RECORD = [360, 165, 145, 477]
  const CONTENT = [`<li><a tabindex="-1" onclick="clickMenu('N102020','/xjyd/xjydsq_cxXjydsq.html','学籍异动申请','null'); return false;" href="javascript:void(0);" target="_blank">学籍异动申请</a></li> <li><a tabindex="-1" onclick="clickMenu('N1053','/fxgl/fxbm_cxXsfxbmIndex.html','双学位(辅修)报名','null'); return false;" href="javascript:void(0);" target="_blank">双学位(辅修)报名</a></li> <li><a tabindex="-1" onclick="clickMenu('N1056','/cxbm/cxbm_cxXscxbmIndex.html','重修报名','null'); return false;" href="javascript:void(0);" target="_blank">重修报名</a></li> <li><a tabindex="-1" onclick="clickMenu('N106204','/xszzy/xszzysqgl_cxXszzysqIndex.html?doType=details','学生转专业申请','null'); return false;" href="javascript:void(0);" target="_blank">学生转专业申请</a></li> <li><a tabindex="-1" onclick="clickMenu('N2510','/kjgl/kjbm_cxXskjbm.html?xmlbfl=1001','考级项目报名','null'); return false;" href="javascript:void(0);" target="_blank">考级项目报名</a></li> <li><a tabindex="-1" onclick="clickMenu('N2511','/jxrwbmgl/jxrwxmbm_cxJxrwxmbmIndex.html','教学项目报名','null'); return false;" href="javascript:void(0);" target="_blank">教学项目报名</a></li> <li><a tabindex="-1" onclick="clickMenu('N306010','/cjxfrdgl/cjxfrdsq_cxCjxfrdsq.html','学生成绩学分认定申请','null'); return false;" href="javascript:void(0);" target="_blank">学生成绩学分认定申请</a></li> <li><a tabindex="-1" onclick="clickMenu('N4755','/xmfzgl/xmfzbm_cxXmfzbmIndex.html','创新创业报名','null'); return false;" href="javascript:void(0);" target="_blank">创新创业报名</a></li> <li><a tabindex="-1" onclick="clickMenu('N783020','/xszgzsgl/xszgzssq_cxXszssqIndex.html','学生资格证书申请','null'); return false;" href="javascript:void(0);" target="_blank">学生资格证书申请</a></li> <li><a tabindex="-1" onclick="clickMenu('N151530','/kcthgl/xskcthsq_cxXskcthIndex.html?sqlx=xnkc','校内课程替代申请','null'); return false;" href="javascript:void(0);" target="_blank">校内课程替代申请</a></li> <li><a tabindex="-1" onclick="clickMenu('N151535','/kcthgl/xskcthsq_cxXskcthIndex.html?sqlx=xnkcxfjd','校内课程学分节点替代申请','null'); return false;" href="javascript:void(0);" target="_blank">校内课程学分节点替代申请</a></li>`,
  `<li><a tabindex="-1" onclick="clickMenu('N100802','/xsxxxggl/xsjhrxxcj_cxXsjhrxxcjIndex.html','学生监护人信息采集','null'); return false;" href="javascript:void(0);" target="_blank">学生监护人信息采集</a></li> <li><a tabindex="-1" onclick="clickMenu('N100808','/xsxxxggl/xsgrxxwh_cxXsGrxxxgIndex.html','学生个人信息维护','null'); return false;" href="javascript:void(0);" target="_blank">学生个人信息维护</a></li> <li><a tabindex="-1" onclick="clickMenu('N1532','/xspyfagl/xspyfaxxwh_cxXsPyfaxxwhIndex.html','个人培养方案','null'); return false;" href="javascript:void(0);" target="_blank">个人培养方案</a></li> <li><a tabindex="-1" onclick="clickMenu('N4770','/xmfzgl/xmfzqr_cxXmfzqrIndex.html','创新创业学分确认','null'); return false;" href="javascript:void(0);" target="_blank">创新创业学分确认</a></li> <li><a tabindex="-1" onclick="clickMenu('N100830','/bdzc/cxxsbdzc_cxXszzbdzcIndex.html','学生自主报到注册','null'); return false;" href="javascript:void(0);" target="_blank">学生自主报到注册</a></li>`,
  `<li><a tabindex="-1" onclick="clickMenu('N253508','/kbcx/xskbcx_cxXskbcxIndex.html','学生课表查询','null'); return false;" href="javascript:void(0);" target="_blank">学生课表查询</a></li> <li><a tabindex="-1" onclick="clickMenu('N253511','/xsxk/tjxkyzb_cxTjxkYzbIndex.html','推荐选课','null'); return false;" href="javascript:void(0);" target="_blank">推荐选课</a></li> <li><a tabindex="-1" onclick="clickMenu('N253512','/xsxk/zzxkyzb_cxZzxkYzbIndex.html','自主选课','null'); return false;" href="javascript:void(0);" target="_blank">自主选课</a></li> <li><a tabindex="-1" onclick="clickMenu('N253520','/xsxk/tjxkyzb_cxXkResultTjxkYzb.html','教材预订','null'); return false;" href="javascript:void(0);" target="_blank">教材预订</a></li>`,
  `<li><a tabindex="-1" onclick="clickMenu('N100801','/xsxxxggl/xsgrxxwh_cxXsgrxx.html','查询个人信息','null'); return false;" href="javascript:void(0);" target="_blank">查询个人信息</a></li> <li><a tabindex="-1" onclick="clickMenu('N214505','/kbdy/bjkbdy_cxBjkbdyIndex.html','推荐课表打印','null'); return false;" href="javascript:void(0);" target="_blank">推荐课表打印</a></li> <li><a tabindex="-1" onclick="clickMenu('N2151','/kbcx/xskbcx_cxXskbcxIndex.html','学生课表查询','null'); return false;" href="javascript:void(0);" target="_blank">学生课表查询</a></li> <li><a tabindex="-1" onclick="clickMenu('N2155','/cdjy/cdjy_cxKxcdlb.html','查询空闲教室','null'); return false;" href="javascript:void(0);" target="_blank">查询空闲教室</a></li> <li><a tabindex="-1" onclick="clickMenu('N2158','/kbcx/xskbqr_cxXskbqrIndex.html?doType=details','学生选课情况确认','null'); return false;" href="javascript:void(0);" target="_blank">学生选课情况确认</a></li> <li><a tabindex="-1" onclick="clickMenu('N255010','/xkcx/xkmdcx_cxXkmdcxIndex.html','选课名单查询','null'); return false;" href="javascript:void(0);" target="_blank">选课名单查询</a></li> <li><a tabindex="-1" onclick="clickMenu('N255720','/cxkccx/cxkccx_cxCxkccxIndex.html','重修课程查询','null'); return false;" href="javascript:void(0);" target="_blank">重修课程查询</a></li> <li><a tabindex="-1" onclick="clickMenu('N305005','/cjcx/cjcx_cxDgXscj.html','学生成绩查询','null'); return false;" href="javascript:void(0);" target="_blank">学生成绩查询</a></li> <li><a tabindex="-1" onclick="clickMenu('N305007','/cjcx/cjcx_cxDgXsxmcj.html','学生成绩明细查询','null'); return false;" href="javascript:void(0);" target="_blank">学生成绩明细查询</a></li> <li><a tabindex="-1" onclick="clickMenu('N358105','/kwgl/kscx_cxXsksxxIndex.html','考试信息查询','null'); return false;" href="javascript:void(0);" target="_blank">考试信息查询</a></li> <li><a tabindex="-1" onclick="clickMenu('N4711','/jcckgl/jcckxs_cxJcckAXsmxIndex.html','学生教材出库明细查询','null'); return false;" href="javascript:void(0);" target="_blank">学生教材出库明细查询</a></li> <li><a tabindex="-1" onclick="clickMenu('N759020','/jcmxcx/jcmxcx_cxJcmxcxIndex.html','教材明细查询','null'); return false;" href="javascript:void(0);" target="_blank">教材明细查询</a></li> <li><a tabindex="-1" onclick="clickMenu('N305516','/xyyjjk/xyyjclcx_cxXyyjclcxxsIndex.html','学业预警处理查询','null'); return false;" href="javascript:void(0);" target="_blank">学业预警处理查询</a></li> <li><a tabindex="-1" onclick="clickMenu('N105515','/xsxy/xsxyqk_cxXsxyqkIndex.html','学生学业情况查询','null'); return false;" href="javascript:void(0);" target="_blank">学生学业情况查询</a></li> <li><a tabindex="-1" onclick="clickMenu('N153540','/jxzxjhgl/jxzxjhck_cxJxzxjhckIndex.html','教学执行计划查看','null'); return false;" href="javascript:void(0);" target="_blank">教学执行计划查看</a></li>`]
  const elements = document.getElementsByClassName('nav-bar-beauty-down-menu-title')
  const $downMenu = $('#nav-bar-beauty-menu')
// false: 不在当前元素上 true: 在当前元素上
  let leaveStatusOnTitle = true
  let leaveStatusOnDownMenu = false
  let onId = -1
  for (let i = 0, len = elements.length; i < len; i++) {
    elements[i].addEventListener('mouseenter', () => {
      onId = i
      leaveStatusOnTitle = true
      $downMenu.addClass('nav-bar-beauty-hide-text')
      $downMenu.html(CONTENT[i])
      window.requestAnimationFrame(() => {
        $downMenu.removeClass('nav-bar-beauty-hide-text')
      })
      toggleDownMenu()
    })
  }
  document.getElementById("nav-bar-beauty-outer").addEventListener('mouseleave', () => {
    leaveStatusOnTitle = false
    hideDownMenu()
  })
  $downMenu.on('mouseout', () => {
    leaveStatusOnDownMenu = false
    hideDownMenu()
  })
  $downMenu.on('mouseover', () => {
    leaveStatusOnDownMenu = true
  })
  function toggleDownMenu() {
    if (!leaveStatusOnTitle) {
      $downMenu.height(500)
    }
    $downMenu.css('transform', `translateX(${onId * BASE_TRANSITION_DISTANCE}px)`)
    $downMenu.height(HEIGHT_RECORD[onId])
  }

  function hideDownMenu() {
    setTimeout(() => {
      console.log(leaveStatusOnTitle, leaveStatusOnDownMenu)
      if (!leaveStatusOnTitle && !leaveStatusOnDownMenu) {
        onId = -1
        leaveStatusOnTitle = true
        leaveStatusOnDownMenu = false
        $downMenu.height(0)
      }
    }, 100)
  }
}
