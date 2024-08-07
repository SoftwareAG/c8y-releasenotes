var main = (function ($) {
  function initializer() {

    $('#dropdownVersionButton').hide();

    // add banner
    if (true) {
          offset = 64;
          $('<div/>', {
            id: 'cd-banner',
            style: 'position: sticky; top: 0; left: 0; width: 100%; background-color: #ffbc60; padding: 10px 5px; z-index: 50;'
          }).prependTo('body');

          cdURL = "https://cumulocity.com/docs/change-logs/";

          $('<p style="text-align: center; vertical-align: center; margin-bottom:0;">This website holds the release notes for Cumulocity IoT releases 10.18 and earlier.<br>For all later changes, click <a href="' + cdURL + '">here</a>. The release notes for Release 2024 can be found <a href="https://cumulocity.com/docs/2024/change-logs/">here</a>. </p>').appendTo('#cd-banner');

          $('.main-top-bar').css('top', offset);
          $('.main-nav.navbar').css('top', offset);
          $('.dropdown.version').css('top', (offset + 10));
        }

    // apply Highlight js
    hljs.initHighlightingOnLoad();

    //Toggle side navigation
    $('.sidebar-toggle').click(function(){
      $('body').toggleClass('open');
    });

    $('.cover').click(function(){
      $('body').removeClass('open');
    });

    // Set current Guide on navigator guides dropdown
    $('#current-dropdown-toggle').text($('.current-app').text());

    // scroll to the top of the page
    $('.to-the-top').click(function(e) {
      e.preventDefault();
      $('body, html').animate({scrollTop: 0}, 500, 'swing');
    });

    // CLIPBOARD
    // copy current window location and add anchor with data-clipboard-text
    var clipboard = new Clipboard('.bookmark', {
      text: function (trigger) {
        return window.location.href.split('#')[0] + trigger.getAttribute('data-clipboard-text');
      }
    });
    // display clipboard success event
    clipboard.on('success', function (e) {
      $(e.trigger).addClass('copied');
      setTimeout(function () {
        $(e.trigger).removeClass('copied');
      }, 1500);
    });


    // set zomm in every image without '.nozoom' class
    $('img:not(.no-zoom)').each(function(){
      if($(this).closest('table').length < 1){
        $(this).addClass('img-responsive').attr('data-action', 'zoom');
      }
    });

    // wrap tables with div '.table-responsive' for small viewports
    $('table').each(function(){
      var $this = $(this);
      if( $this.closest('.table-responsive').length < 1 ){
        $this.wrap( "<div class='table-responsive'></div>" );
      }
    });



    // Filter for device list
    if($('.device-list').length){

      $('.device-list .device-slot').each(function(){
        var $this = $(this);
        $this.data('text', $this.text().toLowerCase());
        $this.data('$l', $this.parent());
      });

      $('#filter-devices').on('keyup input', function(k){
        var $str = $(this).val().toLowerCase();
        //$str.length ? $titles.hide() : $titles.show();
        $('.device-list .device-slot').each(function(){
          var $this = $(this);
          if( $this.data('text').indexOf($str) > -1){
            $this.show();
          }else{
            $this.hide();
          }
        })
      });
    }

  }
  return {
    init: initializer
  };

})(jQuery);

main.init();
