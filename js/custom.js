(function(){

    // jQpup
    window.jQpup = function( opt ) {
        var jp = {
            $this     : $('<div class="jQpup"></div>'),
            $close    : $('<div class="el-popup-close attr-popup-close">X</div>'),
            $overview : $('<div class="el-popup-overview">'),
            body      : document.body
        };

        jp.Open = function () {

            // Append jQpup
            if ($('.jQpup').length === 0) $(jp.body).append(jp.$this.prepend(jp.$close));

            // Remove scroll from body
            $(jp.body).css('overflow','hidden');

            // Show jQpup
            jp.$this.addClass('inline-block');

            // Add overview
            $(jp.body).append(jp.$overview);

            // Append content
            opt.content.clone(true).show().appendTo( jp.$this );

            // Add event
            jp.AddEvent();
        };

        jp.AddEvent = function() {

            // Close & Overview
            $('.attr-popup-close, .el-popup-overview').one('click', jp.Close);

            // Resize position
            jp.Position();
            $(window).resize(jp.Position);
        };

        jp.RemoveEvent = function() {

            // Off resize position
            $(window).off('resize');
        };

        jp.Position = function() {
            // Get dimension
            var dH = $(window).height(),
                dW = $(window).width(),
                Ptop  = (dH - jp.$this.height()) / 2,
                Pleft = (dW - jp.$this.width())  / 2;

            // Overview height
            $('.el-popup-overview').height(dH);

            // Set dimension jQpup
            jp.$this.css({
                'top' : Ptop + $(document).scrollTop(),
                'left': Pleft
            });
        };

        jp.Close = function () {

            // Remove jQpup
            $('.jQpup').remove();

             // Remove scroll from body
            $(jp.body).removeAttr('style');

            // Remove wrapper
            $('.el-popup-overview').remove();

            // Remove Event
            jp.RemoveEvent();
        }

        return {
            open  : jp.Open,
            close : jp.Close
        }

    };

}());

$(function(){

    // init jQpup
    $('.img').click(function(){
        jQpup({ content: $('.jQpup-content') }).open();
    });


});