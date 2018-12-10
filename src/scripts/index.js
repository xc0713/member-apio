$.ajax({
    url: '/user/getlist',
    dataType: 'json',
    success: function(rs) {
        console.log(rs)
    }
});