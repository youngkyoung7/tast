$(document).ready(function(){
    
   
    $('.shoesColor>li').on('click',function(e){
        e.preventDefault();
        $(this).addClass('on')
        .siblings().removeClass('on');
        
               let i = $(this).index();
                console.log(i);
        
        $('.content_wrap').children('img').eq(i).show()
        .siblings().hide();
        $('.btn_warp').children('div').eq(i).show()
        .siblings().hide();
   
        if(i == 0){
        $('.left').css({'background-color': '#4882D2'})
       }else{
        $('.left').css({'background-color': '#305E44'})
       }
    
    
    
    });
        


    
    
})//document
