$(function () {
    var flagU=false;
    var flagPsd=false;
    var flagPsdAgn=false;
    $("#registeBtn").click(function () {
        //检验Email是否被注册

        var psd=$("#rePassword").val();
        var reg=/^(?![0-9]+$)(?![A-Za-z]+$).{6,}/;
        if(!reg.test(psd)){
            $("#psdInfo").html("请输入至少六位密码且必须同时包含数字和字母");
            flagPsd=false;
        }
        else {
            flagPsd=true;
        }

        var psdAgn=$("#rePassword2").val();
        if(psdAgn!=psd){
            $("#psdAgnInfo").html("两次密码输入不一致");
            flagPsdAgn=false;
        }
        else {
            flagPsdAgn=true;
        }

    })
})