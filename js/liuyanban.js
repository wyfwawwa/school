//获取文本框和按钮
var text = document.querySelector('textarea')
var button = document.querySelector('button')
//获取留言板
var ul = document.querySelector('ul')
//按钮点击事件
button.onclick = function () {
    if (text.value === '') {
        alert('不可空输入哦！')
        return false
    } else {
        //创建新节点
        var li = document.createElement('li')
        //将新节点附上值 然后新节点添加进去
        li.innerHTML = text.value + "<a href='#'>删除</a>"
        ul.insertBefore(li, ul.children[0])
        text.value = ''
        //获取删除链接‘’
        var as = document.querySelectorAll('a')
        //删除操作
        for (var i = 0; i < as.length; i++) {
            as[i].onclick = function () {
                ul.removeChild(this.parentNode)
            }
        }
    }
}
