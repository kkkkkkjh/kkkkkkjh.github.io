$(document).ready(function() {
/***********
control,body animate
***********/
    $('#control').click(function(){
        if(!$(this).hasClass('on')) {
            $('#about').animate({
                left: "-50%"
            }, 400,'swing');
            $('#track').animate({
                left: "-50%"
            }, 400,'swing');
            $('#project').animate({
                left: "0%"
            }, 400,'swing');
            $(this).addClass('on');
            $('#control span').css('transform','rotate('+180+'deg)');
            
        } else {
            $('#about').animate({
                left: "0"
            }, 400,'swing');
            $('#track').animate({
                left: "49.6%"
            }, 400,'swing');
            $('#project').animate({
                left: "50%"
            }, 400,'swing');
            $('.left').css({
            });
            $(this).removeClass('on');
            $('#control span').css('transform','rotate('+0+'deg)');
        }
    });
/***********
track animate
***********/
    $("#track ul").click(function(event) {
        var y = event.pageY;
        $('.fill').animate({
            top:y 
        }, 400);
    });
/***********
right content
***********/
 var content = $('ul.content'),
     contentList = $('ul.content li').height(),
     itemList = $('ul.item li'),
     itemHeight = itemList.height(),
     contentHeight = content.height(),
     contentResult = contentHeight/10,
     index = itemList.index( this );
/*track nav*/
    $('ul.item li').click(function(event) {
        $('ul').children().removeClass('change');
        $(this).closest('li').addClass('change');
    });
/*project content*/    
    $('ul.item li:first-child').click(function(event) {
        if($(this).hasClass('change')) {
           $('ul.content li:first-child').css({
               'margin-top':0,
                transition :'0.5s ease-in-out' 
           });
          $(this).removeClass('change');
        }
    });
    $('ul.item li:nth-child(2)').click(function(event) {
        if(!$(this).hasClass('change')) {
            $('ul.content li:first-child').css({
                'margin-top':contentList,
                 transition : '0.5s ease-in-out' 
            });
            $(this).removeClass('change');
        }else{
            $('ul.content li:first-child').css({
                'margin-top':-contentList,
                 transition : '0.5s ease-in-out'
            });
            $(this).addClass('change');
        }
    });
    $('ul.item li:nth-child(3)').click(function(event) {
        if(!$(this).hasClass('change')) {
            $('ul.content li:first-child').css({
                'margin-top':contentList,
                transition : '0.5s ease-in-out'
            });
            $(this).removeClass('change');
        }else{
            $('ul.content li:first-child').css({
                'margin-top':-contentList*2,
                transition : '0.5s ease-in-out'
            });
            $(this).addClass('change');
        }
    });
    $('ul.item li:nth-child(4)').click(function(event) {
        if(!$(this).hasClass('change')) {
            $('ul.content li:first-child').css({
                'margin-top':contentList,
                transition : '0.5s ease-in-out'
            });
            $(this).removeClass('change');
        }else{
            $('ul.content li:first-child').css({
                'margin-top':-contentList*3,
                transition : '0.5s ease-in-out'
            });
            $(this).addClass('change');
        }
    });
    $('ul.item li:nth-child(5)').click(function(event) {
        if(!$(this).hasClass('change')) {
            $('ul.content li:first-child').css({
                'margin-top':contentList,
                transition : '0.5s ease-in-out'
            });
            $(this).removeClass('change');
        }else{
            $('ul.content li:first-child').css({
                'margin-top':-contentList*4,
                 transition : '0.5s ease-in-out'
            });
            $(this).addClass('change');
        }
    });
    $('ul.item li:nth-child(6)').click(function(event) {
        if(!$(this).hasClass('change')) {
            $('ul.content li:first-child').css({
                'margin-top':contentList,
                 transition : '0.5s ease-in-out'});
            $(this).removeClass('change');
        }else{
            $('ul.content li:first-child').css({
                'margin-top':-contentList*5,
                transition : '0.5s ease-in-out'});
            $(this).addClass('change');
        }
    });
    $('ul.item li:nth-child(7)').click(function(event) {
        if(!$(this).hasClass('change')) {
            $('ul.content li:first-child').css({
                'margin-top':contentList,
                transition : '0.5s ease-in-out'
            });
            $(this).removeClass('change');
        }else{
            $('ul.content li:first-child').css({
                'margin-top':-contentList*6,
                transition : '0.5s ease-in-out'});
            $(this).addClass('change');
        }
    });
    $('ul.item li:nth-child(8)').click(function(event) {
        if(!$(this).hasClass('change')) {
            $('ul.content li:first-child').css({
                'margin-top':contentList,
                transition : '0.5s ease-in-out'
            });
            $(this).removeClass('change');
        }else{
            $('ul.content li:first-child').css({
                'margin-top':-contentList*7,
                transition : '0.5s ease-in-out'});
            $(this).addClass('change');
        }
    });
    $('ul.item li:nth-child(9)').click(function(event) {
        if(!$(this).hasClass('change')) {
            $('ul.content li:first-child').css({
                'margin-top':contentList,
                transition : '0.5s ease-in-out'});
            $(this).removeClass('change');
        }else{
            $('ul.content li:first-child').css({
                'margin-top':-contentList*8,
                transition : '0.5s ease-in-out'});
            $(this).addClass('change');
        }
    });
    $('ul.item li:nth-child(10)').click(function(event) {
        if(!$(this).hasClass('change')) {
            $('ul.content li:first-child').css({
                'margin-top':contentList,
                transition : '0.5s ease-in-out'});
            $(this).removeClass('change');
        }else{
            $('ul.content li:first-child').css({
                'margin-top':-contentList*9,
                transition : '0.5s ease-in-out'});
            $(this).addClass('change');
        }
    });

});