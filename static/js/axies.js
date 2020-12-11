$.ajax({
    url: _root + '/email_apply/?option=trash&id=' + id,
    type: 'POST',
    dataType: 'json',
    data: { 'status': false, 'id': id },
    headers: {
        'Content-Type': 'application/json;charset=utf8'
    },
    beforeSend:function(xhr, settings){
        xhr.setRequestHeader("X-CSRFToken", $("input[name='csrfmiddlewaretoken']").val() );
    },
    success: function (e) {
        _trashDone(id)
        console.log('删除成功')
    }
})