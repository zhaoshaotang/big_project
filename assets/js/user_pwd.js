$(function () {
    // 自定义规则
    layui.form.verify({
        pwd: [
            /^[\S]{6,12}$/
            ,'密码必须6到12位，且不能出现空格'
          ] ,
        same: function (value) {
            if (value === $('[name=oldPwd]').val()) {
                  return "2次密码不能相同"
              }
          },
        rePwd: function (value) {
            if (value !== $('[name=newPwd]').val()) {
                  return '2次密码不一致'
              }
          }
        })
         
    //重置密码
    $('.layui-form').on('submit', function (e) {
       e.preventDefault()
       $.ajax({
        type:'POST',
        url: '/my/updatepwd',
         data: $(this).serialize(),
        success: function (res) {
            if (res.status !== 0) {
                 layui.layer.msg(res.message)
            }
            layui.layer.msg(res.message)
            $('.layui-form')[0].reset()
         }
      }) 
   }) 
    })