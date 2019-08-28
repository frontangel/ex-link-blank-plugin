(function($) {
    $('a').each(function(e){
        if(extractHostname(this.href) !== window.location.hostname) $(this).attr('target', '_blank')
    })
})(jQuery)

function extractHostname(url) {
    let hostname = ''
    url.indexOf("//") > -1 ? hostname = url.split('/')[2] : hostname = url.split('/')[0]
    hostname = hostname.split(':')[0]
    hostname = hostname.split('?')[0]
    return hostname
}