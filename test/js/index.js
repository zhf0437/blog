// JavaScript Document
$(function(){
    var num = 0;
    // var DataList = [];
    var onoff = true;
    // var Media = document.getElementsByClassName('.video1');
    getData();
    auto();
    function auto(){
        getData();
    }



    var swiper = new Swiper('.swiper-container', {
        pagination: '.swiper-pagination',
        paginationClickable: true,
        direction: 'vertical',

        onSlideNextStart: function(swiper){
            getData();
            num++;

        },
        onSlidePrevStart: function(swiper){
            // alert('上滑;');
        },
    });

    // // if(num==0){

    //  // $('.slide1 img').attr('src',DataList[0].mvPic);
    //  console.log(DataList[0])
    //  // }


    function getData(){
        $.ajax({
            type: "GET",
            url: "http://fuli.vivcms.com/api.php",
            dataType: "json",
            success: function(res){
                DataList.push(res.data);
                var _src = res.data.mvPic;
                var _tit = res.data.mvTitle;
                var _userpic = res.data.userHeadUrl;
                var _userName = res.data.userName;
                var _videoUrl = res.data.mvUrl;
                swiper.appendSlide('<div class="swiper-slide">' +
                    '<div class="topzz">' +
                    '<div class="userpic"><img src='+_userpic+' alt=""></div>' +
                    '<span class="userName">'+_userName+'</span>' +
                    '</div>'+
                     '<img src='+_src+' class="pic" alt="">' +
                     '<img src="images/globalPlayBig.png" class="start" alt="">'+

//                    '<video class="video1" src='+desc(_videoUrl)+' controls poster='+_src+' loop></video>' +
                    '<div class="bottomzz">' +
                    '<h3 class="title">'+_tit+'</h3>' +
                    '<div class="opera">' +
                    '<span>喜欢</span>' +
                    '<span>评论</span>' +
                    '<span>分享</span>' +
                    '</div>' +
                    '</div></div>');
                // console.log(swiper.activeIndex)

                console.log(DataList)
            }
        });
    }


    $(document).on('click',".pic,.start",function(e){
            $('.pic,.start').hide();
            onoff = false;

            var Media = $(this).siblings('.video1');

            Media.play(); //播放

            Media.pause(); //暂停
    });

});
