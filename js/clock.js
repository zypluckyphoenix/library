// 设置id='day_show'
// <strong><span class='fas fa-clock'></span>本站已稳定运行:</strong>
// <strong id='day_show'>运行时间</strong>
var now = new Date();
function createtime() {
    var grt = new Date('08/02/2022 00:00:00');
    now.setTime(now.getTime() + 250);
    days = (now - grt) / 1000 / 60 / 60 / 24;
    dnum = Math.floor(days);
    hours = (now - grt) / 1000 / 60 / 60 - (24 * dnum);
    hnum = Math.floor(hours);
    if (String(hnum).length == 1) { hnum = '0' + hnum; }
    minutes = (now - grt) / 1000 / 60 - (24 * 60 * dnum) - (60 * hnum);
    mnum = Math.floor(minutes);
    if (String(mnum).length == 1) { mnum = '0' + mnum; }
    seconds = (now - grt) / 1000 - (24 * 60 * 60 * dnum) - (60 * 60 * hnum) - (60 * mnum);
    snum = Math.round(seconds);
    if (String(snum).length == 1) { snum = '0' + snum; }
    document.getElementById('day_show').innerHTML = dnum + '天' + hnum + '时' + mnum + '分' + snum + '秒';
}
setInterval('createtime()', 250);
//<div id='delay' style='display:none;'>
// function showmsg() { $('#delay').show(); }
// function showmsg() { var element = document.getElementById('delay'); if (element) { element.style.display = 'block';} }
// setInterval(showmsg, 2000); //2秒后显示

/* 方案二 */
{/* <span id='momk' fr-fix-stroke='true'>本站已运行:</span>
<span id='span_dt_dt' fr-fix-stroke='true'>180天18小时13分6秒</span> */}
/* 2022/08/10 */
/* id='span_dt_dt' */

// function show_date_time() {
//     window.setTimeout('show_date_time()', 1e3);
//     var BirthDay = new Date('2022/08/10'), today = new Date
//     timeold = today.getTime() - BirthDay.getTime();
//     msPerDay = 864e5;
//     e_daysold = timeold / msPerDay;
//     daysold = Math.floor(e_daysold);
//     e_hrsold = 24 * (e_daysold - daysold);
//     hrsold = Math.floor(e_hrsold);
//     e_minsold = 60 * (e_hrsold - hrsold);
//     minsold = Math.floor(60 * (e_hrsold - hrsold));
//     seconds = Math.floor(60 * (e_minsold - minsold));
//     span_dt_dt.innerHTML = daysold + '天' + hrsold + '小时' + minsold + '分' + seconds + '秒';
// }
// show_date_time();

/* 方案三 */
{/* <link rel='stylesheet' href='https://lib.lib.luckyphoenix.eu.org/css/fontwaesome.css'></link>
<strong><span class='fas fa-layer-group'></span>本站已稳定运行:</strong>
<strong id='day_show'>载入中...</strong>
<strong><span class='fas fa-clock'></span> 当前时辰:</strong>
<strong id='time_show'>载入中...</strong>
<span>|</span>
<strong><span class='fas fa-heart'></span> 页面载入耗时:</strong>
<strong id='load_show'>载入中...</strong> */}

// var start = new Date().getTime();
// function timestamp() {
//     let outcome = Math.round(new Date().getTime() / 1000).toString();
//     return outcome
// }
// function timer(intDiff) {
//     myTimer = window.setInterval(function () {
//         var day = 0,
//             hour = 0,
//             minute = 0,
//             second = 0;//时间默认值
//         if (intDiff > 0) {
//             day = Math.floor(intDiff / (60 * 60 * 24));
//             hour = Math.floor(intDiff / (60 * 60)) - (day * 24);
//             minute = Math.floor(intDiff / 60) - (day * 24 * 60) - (hour * 60);
//             second = Math.floor(intDiff) - (day * 24 * 60 * 60) - (hour * 60 * 60) - (minute * 60);
//         }
//         if (hour <= 9) hour = '0' + hour;
//         if (minute <= 9) minute = '0' + minute;
//         if (second <= 9) second = '0' + second;

//         $('#day_show').html(day + '天' + hour + '时' + minute + '分' + second + '秒');

//         var now = new Date();
//         var year = now.getFullYear();   // 得到年份
//         var month = now.getMonth();     // 得到月份
//         var date = now.getDate();       // 得到日期
//         var day = now.getDay();         // 得到周几
//         var hour = now.getHours();      // 得到小时
//         var minu = now.getMinutes();    // 得到分钟
//         var sec = now.getSeconds();     // 得到秒钟

//         if (hour > 0 && hour <= 2) text = '丑时';
//         else if (hour > 2 && hour <= 4) text = '寅时';
//         else if (hour > 4 && hour <= 6) text = '卯时';
//         else if (hour > 6 && hour <= 8) text = '辰时';
//         else if (hour > 8 && hour <= 10) text = '巳时';
//         else if (hour > 10 && hour <= 12) text = '午时';
//         else if (hour > 12 && hour <= 14) text = '未时';
//         else if (hour > 14 && hour <= 16) text = '申时';
//         else if (hour > 16 && hour <= 18) text = '酉时';
//         else if (hour > 18 && hour <= 20) text = '戌时';
//         else if (hour > 20 && hour <= 22) text = '亥时';
//         else text = '子时';
//         $('#time_show').html('<a href='https://www.beijing-time.org/shichen' target='_blank' rel='noopener noreferrer'>' + text + '</a>');

//         intDiff++;
//     }, 1000);
// }
// var nowtime = timestamp(); // 现行时间戳
// var mytime = 1570681975; // 设置安装时间（安装日期时间戳）
// timer(nowtime - mytime); // 启动循环

// // 页面加载完成后执行
// $(function () {
//     // $('.footer-new').hide(); // 隐藏底部
//     // $('.footer-new').show(); // 显示底部
//     $('#load_show').html((new Date().getTime() - start) + 'ms');
// });