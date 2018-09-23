/**
 * Created by Administrator on 2018/9/24.
 */



export function show(filedsWrap,direction){
  //1、定义一片雪花模板
  var flake = $("<div>").css({
    "position": "absolute",
    "color": "#000"
  }).html("❄");
  var color=["red","orange","yellow","green","pink","blue","black","gray"]
  flake= $('<p class="tinyBall" style="background:#000"></p>')

  //获取页面的宽度，利用这个数来算出，雪花开始时left的值
  var documentWidth = $(document).width();

  //获取页面的高度 相当于雪花下落结束时Y轴的位置
  var documentHieght = $(document).height();

  //定义生成一片雪花的毫秒数
  var millisec = 180;
  var ll = 3
  var vanish=2000
  //2、设置第一个定时器，周期性定时器，每隔一段时间（millisec）生成一片雪花；
  var timer=setInterval(function() {
    //随机生成雪花下落 开始 时left的值，相当于开始时X轴的位置
    var startLeft = Math.random() * 10;
    setTimeout(()=>{
      clearInterval(timer)
      if(direction != 0){
        filedsWrap.remove()
      }else{
        //filedsWrap.css("opacity",1)

      }
    },vanish)
    //随机生成雪花下落 结束 时left的值，相当于结束时X轴的位置
    //var endLeft = Math.random() * 300;
    var endLeft =parseInt(Math.random()*100+(-50))
    var endTop =parseInt(Math.random()*100+(-50))

    //随机生成雪花大小
    var flakeSize = 5 + 20 * Math.random();

    //随机生成雪花下落持续时间
    //var durationTime = 5000 * Math.random();
    var durationTime =1000;

    //随机生成雪花下落 开始 时的透明度
    var startOpacity = 0.7 + 0.3 * Math.random();

    //随机生成雪花下落 结束 时的透明度
    var endOpacity = 0.2 + 0.2 * Math.random();

    //3、克隆一个雪花模板,定义雪花的初始样式，拼接到页面中



    flake.clone().appendTo(filedsWrap).css({
      "left": direction==1 ? 0 :endLeft,
      "opacity": startOpacity,
      //"font-size": flakeSize,
      "top": direction==1 ? 0 :endTop,
      "background":color[parseInt(Math.random()*color.length-1)]
    }).animate({ //执行动画
      "left":direction==1 ? endLeft :0,
      "opacity": endOpacity,
      "top": direction==1 ? endTop :0,
    }, durationTime, function() {
      $(this).remove();
    });
  }, millisec);

  return vanish

}