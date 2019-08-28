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
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJleGNsaWNrcGx1Z2luLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbigkKSB7XG4gICAgJCgnYScpLmVhY2goZnVuY3Rpb24oZSl7XG4gICAgICAgIGlmKGV4dHJhY3RIb3N0bmFtZSh0aGlzLmhyZWYpICE9PSB3aW5kb3cubG9jYXRpb24uaG9zdG5hbWUpICQodGhpcykuYXR0cigndGFyZ2V0JywgJ19ibGFuaycpXG4gICAgfSlcbn0pKGpRdWVyeSlcblxuZnVuY3Rpb24gZXh0cmFjdEhvc3RuYW1lKHVybCkge1xuICAgIGxldCBob3N0bmFtZSA9ICcnXG4gICAgdXJsLmluZGV4T2YoXCIvL1wiKSA+IC0xID8gaG9zdG5hbWUgPSB1cmwuc3BsaXQoJy8nKVsyXSA6IGhvc3RuYW1lID0gdXJsLnNwbGl0KCcvJylbMF1cbiAgICBob3N0bmFtZSA9IGhvc3RuYW1lLnNwbGl0KCc6JylbMF1cbiAgICBob3N0bmFtZSA9IGhvc3RuYW1lLnNwbGl0KCc/JylbMF1cbiAgICByZXR1cm4gaG9zdG5hbWVcbn0iXSwiZmlsZSI6ImV4Y2xpY2twbHVnaW4uanMifQ==
