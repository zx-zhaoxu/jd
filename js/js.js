/**
 * Created by ���� on 2017/5/30.
 */

$(window).scroll(
    function(){
        //��ֱ�����������ľ���
        var a=$(window).scrollTop();


        //�жϹ����������ľ���
        if(a>=100){
            //    Ҫʵ�ֵ���ʽ
            $("header").css("background","rgba(255,0,0,0.8)")
        }
        if(a<100){
            //    Ҫʵ�ֵ���ʽ
            $("header").css("background","none")
        }
    }
);
var t=18000;
setInterval(function(){
    t=t-1;
    var h=parseInt(t/3600);
    var m=parseInt(t%3600/60);
    var s=parseInt(t%3600%60);
    var h1=parseInt(h/10);
    var h2=parseInt(h%10);
    var m1=parseInt(m/10);
    var m2=parseInt(m%10);
    var s1=parseInt(s/10);
    var s2=parseInt(s%10);
    $(".h1").text(h1);
    $(".m1").text(m1);
    $(".s1").text(s1);
    $(".h2").text(h2);
    $(".m2").text(m2);
    $(".s2").text(s2)
},1000);