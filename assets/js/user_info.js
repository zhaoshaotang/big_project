$(function () {
    layui.form.verify({
        nickname: function (value) {
            if (value.length > 6) {
                return "必须在1~6位之间"
            }
        }
    })

    initUserinfo()
     
    //获取用户信息并渲染到表单
    function initUserinfo() {
        $.ajax({
            url:'/my/userinfo',
            success: function (res) {
                if (res.status !== 0) {
                    layui.layer.msg(res.message)
                }
                // layui.layer.msg(res.message)
                // console.log(res);
                layui.form.val('formUserInfo',res.data)
            }
        })
    }
       
    // 重置
    $('#btnReset').on('click', function (e) {
        // 阻止按钮默认重置行为,当前type为reset
        e.preventDefault()
          //获取用户信息并重新渲染表单
          initUserinfo()
    })

    //提交表单用户数据
    $('.layui-form').on('submit', function (e) {
        e.preventDefault()
        $.ajax({
            type: 'POST',
            url:'/my/userinfo',
            data:$(this).serialize(),
            success: function (res) {
                if (res.status !== 0) {
                     layui.layer.msg(res.message)
                }
                layui.layer.msg(res.message)
              window.parent.getUserInfo()
            }
        })
    })
})