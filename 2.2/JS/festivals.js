var dateDay = new Date().getDate();
var dateMonth = new Date().getMonth();
var dateYear = new Date().getFullYear();
console.log(dateDay);//输出到控制台
console.log(dateMonth);
console.log(dateYear);

//获取时间
if (dateMonth == 0, dateDay == 1) {
    newYear();//执行newYear
}
if (dateMonth >= 0, dateMonth < 2) {
    springFestival();
}
//判定
function keyDown() {
    var value = event.keyCode;
    var key = String.fromCharCode(event.keyCode);
    console.log(" 键: " + key + "值: " + value);
    if (value == 221) {
        var turnOn = prompt('输入触发节日');
        if (turnOn == "元旦节") {
            newYear();
        }
        if (turnOn == "春节") {
            springFestival();
        }
    }
}
//调试使用，输入对应节日代号触发
function newYear() {//定义newYear
    alert('老阿特祝您元旦快乐，给您拜年啦\!\n\ \ 老阿特还会继续更新的哦\!');//弹出窗口
}
//元旦节
function springFestival() {
    document.getElementById('backImg').src = "https://s4.ax1x.com/2022/02/25/bEUC79.jpg";//红灯笼背景
    document.getElementById('ssk').placeholder = "→输入并搜索，春节快乐呀~";
    document.getElementById('imgMoon').style.display = 'none';//月亮图片
    document.getElementById('imgSun').style.display = 'block';//日光图片
    document.getElementById('imgBlack').style.display = 'none';//图片下载黑
    document.getElementById('imgWhite').style.display = 'block';//图片下载白
}
//春节