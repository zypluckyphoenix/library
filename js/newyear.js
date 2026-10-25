// 新年倒计时
{/* <div class="gn_box">
    <h2>
        <font color="#E80017">2</font>
        <font color="#D1002E">0</font>
        <font color="#BA0045">2</font>
        <font color="#A3005C">3</font>
        <font color="#8C0073">年</font>
        <font color="#E80088">&lt;</font>
        <font color="#4a0080">元</font>
        <font color="#470099">宵</font>
        <font color="#3e00b3">节</font>
        <font color="#3000cc">倒</font>
        <font color="#1b00e6">计</font>
        <font color="#0000ff">时&gt;</font>
    </h2>
    <center>
        <div id="CountMsg" class="HotDate">
            <h2>
                <font face="楷体_GB2312" color="#b2da11" size="4.8">
                    <span id="t_d">36 天</span>
                    <span id="t_h">05 时</span>
                    <span id="t_m">46 分</span>
                    <span id="t_s">53 秒</span>
                </font>
            </h2>
        </div>
    </center>
    <font face="楷体_GB2312" color="#b2da11" size="4.8">
        <script type="text/javascript"> */}
function getRTime() {
    var NowTime = new Date()
    var EndTime = new Date(parseInt(NowTime.getFullYear()) + '-02-05 00:00:00')
    var lefttime = parseInt((EndTime.getTime() - NowTime.getTime()) / 1000)
    var d = parseInt(lefttime / (24 * 60 * 60))
    var h = parseInt(lefttime / (60 * 60) % 24)
    var m = parseInt(lefttime / 60 % 60)
    var s = parseInt(lefttime % 60)
    d = addZero(d)
    h = addZero(h)
    m = addZero(m)
    s = addZero(s)
    var day = document.getElementById("t_d")
    if (day != null) {
        day.innerHTML = d + " 天"
    }
    var hour = document.getElementById("t_h")
    if (hour != null) {
        hour.innerHTML = h + " 时"
    }
    var min = document.getElementById("t_m")
    if (min != null) {
        min.innerHTML = m + " 分"
    }
    var sec = document.getElementById("t_s")
    if (sec != null) {
        sec.innerHTML = s + " 秒"
    }
}
function addZero(i) {
    return i < 10 ? "0" + i : i + ""
}
//             setInterval(getRTime, 1000)
//         </script>
//     </font>
// </div>