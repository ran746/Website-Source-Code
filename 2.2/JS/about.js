//建站时间
function setUpTime() {
    var time = new Date().getTime();
    var cha = time - 1628179200000;
    var TIME = parseInt(cha / 86400000);
    var greeting = "本站已经运行" + TIME + "天了呢！"
    document.getElementById('about1').innerHTML = greeting;
    document.getElementById('about2').innerHTML = '网站使用Apache2.0开源许可证，转载、使用、修改请标明原网站和原作者: 阿特小屋Dotl';
    document.getElementById('about3').innerHTML = '声明\:本网站仅供学习使用，不作任何商业用途，与本网站有关纠纷，作者及热铁盒官方不负任何责任。';
    document.getElementById('about4').innerHTML = 'GitHub\:https\:\/\/github.com/ran746/Website-Source-Code';
    document.getElementById('about5').innerHTML = '项目已停止在gitee更新';
    document.getElementById('about6').innerHTML = '新版本不稳定，bug多，感谢您来提出宝贵的建议!\n|随缘更新|';
    // 获取弹窗
    var modal = document.getElementById('window');
    // 打开弹窗的按钮对象
    var btn = document.getElementById("myBtn");
    // 获取 <span> 元素，用于关闭弹窗
    var span = document.querySelector('.close');
    // 点击按钮打开弹窗
    btn.onclick = function() {
        modal.style.display = "block";
    }
    // 点击 <span> (x), 关闭弹窗
    span.onclick = function() {
        modal.style.display = "none";
    }
    // 在用户点击其他地方时，关闭弹窗
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
}
function close() {
    modal.style.display = "none";
}