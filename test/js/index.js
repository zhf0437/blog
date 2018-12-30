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

        onSlideChangeStart: function(swiper){
            var provid = $('#v'+num);
            // provid.pause();
        },

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
                // console.log(res)
                // DataList.push(res.data);
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
                    // '<img src='+_src+' class="pic" alt="">' +
                    // '<img src="images/globalPlayBig.png" class="start" alt="">'+

                    '<video class="video1" src="http://106.38.183.45/yoo.tc.qq.com/A01A048MwmFHMiQazlBWkfU_1DvbIRSOLFK7GHjXHTj0/d0788duuv5p.mp4?sdtfrom=v7156&guid=866e53b09bdfd96f096ca20dc5045d85&vkey=5FC170A374D7E4D185FC68A68FBB14D33124975F33989B8DDC3284D1F77B596A90FFC11326ED58F67F70A6EBBA1A04E5584DAEF727415BEC7093A12066BC8C5B349D64E5F1C46ABE4C14B8E31DBEE5A7786844601E1A2A49BD6E773AF71008D375EB2A8E2662AF0AA50B0AF6A7C6AE32&platform=2" controls poster='+_src+' loop id=v'+num+'></video>' +
                    // '<video class="video1" src='+desc(_videoUrl)+' controls poster='+_src+' loop></video>' +
                    '<div class="bottomzz">' +
                    '<h3 class="title">'+_tit+'</h3>' +
                    '<div class="opera">' +
                    '<span>喜欢</span>' +
                    '<span>评论</span>' +
                    '<span>分享</span>' +
                    '</div>' +
                    '</div></div>');
                // console.log(swiper.activeIndex)

                // console.log(DataList)
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
