$(function () {
    //获取用户信息,渲染头像和用户名
    getUserInfo()
})

// function getUserInfo() {
//     $.ajax({
//         url: '/my/userinfo',
//         headers: {
//             Authorization: localStorage.getItem('token')
//             || ""
//         },
//         success: function (res) {
//               console.log(res);
//         }
        
//      })
// }


function getUserInfo() {
    $.ajax({
        type: 'GET',
        url: '/my/userinfo',
        // headers: {
        //     Authorization:localStorage.getItem('token') || ""
        // },
        success: function (res) {
            console.log(res);
            if (res.status !== 0) {
                return layui.layer.msg("获取用户信息失败")
            }
            renderAvatar(res.data)
        }
    })
}

function renderAvatar(user) {
    name = user.nickname || user.username
    $('.welcome').html('欢迎&nbsp;&nbsp;' + name)
    if (user.user_pic !== null) {
          $('.layui-nav-img').show().attr('src',user.user_pic)
          $('.user-avatar').hide()
    } else {
        $('.layui-nav-img').hide()
        var text = name[0].toUpperCase()
        $('.user-avatar').show().html(text)
       
    
    }
    
}