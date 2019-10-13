$(document).ready(function(){
    $path = window.location.href;
    $('nav li a').each(function(){
        var $this = $(this);
        if($this.attr('href') === $path || $this.attr('href') === location.hash){
            $this.parent().addClass('active');
            }
    })
})
