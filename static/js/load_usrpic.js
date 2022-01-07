<script>
    $(document).ready(function () {
    $.get('/radar', function (html) {
        //获取左侧的雷达图
        $(".left_index").html(html);
    })
});

</script>