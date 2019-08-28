(function($) {
    $('a').each(function(){
        let domainName = extractHostname(this.href)
        if(domainName !== 'inventure.com.ua') $(this).attr('target', '_blank')
    })
})(jQuery)

function extractHostname(url) {
    var hostname;
    //find & remove protocol (http, ftp, etc.) and get hostname
    if (url.indexOf("//") > -1) {
        hostname = url.split('/')[2];
    }
    else {
        hostname = url.split('/')[0];
    }
    //find & remove port number
    hostname = hostname.split(':')[0];
    //find & remove "?"
    hostname = hostname.split('?')[0];
    return hostname;
}
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJleGNsaWNrcGx1Z2luLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbigkKSB7XG4gICAgJCgnYScpLmVhY2goZnVuY3Rpb24oKXtcbiAgICAgICAgbGV0IGRvbWFpbk5hbWUgPSBleHRyYWN0SG9zdG5hbWUodGhpcy5ocmVmKVxuICAgICAgICBpZihkb21haW5OYW1lICE9PSAnaW52ZW50dXJlLmNvbS51YScpICQodGhpcykuYXR0cigndGFyZ2V0JywgJ19ibGFuaycpXG4gICAgfSlcbn0pKGpRdWVyeSlcblxuZnVuY3Rpb24gZXh0cmFjdEhvc3RuYW1lKHVybCkge1xuICAgIHZhciBob3N0bmFtZTtcbiAgICAvL2ZpbmQgJiByZW1vdmUgcHJvdG9jb2wgKGh0dHAsIGZ0cCwgZXRjLikgYW5kIGdldCBob3N0bmFtZVxuICAgIGlmICh1cmwuaW5kZXhPZihcIi8vXCIpID4gLTEpIHtcbiAgICAgICAgaG9zdG5hbWUgPSB1cmwuc3BsaXQoJy8nKVsyXTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIGhvc3RuYW1lID0gdXJsLnNwbGl0KCcvJylbMF07XG4gICAgfVxuICAgIC8vZmluZCAmIHJlbW92ZSBwb3J0IG51bWJlclxuICAgIGhvc3RuYW1lID0gaG9zdG5hbWUuc3BsaXQoJzonKVswXTtcbiAgICAvL2ZpbmQgJiByZW1vdmUgXCI/XCJcbiAgICBob3N0bmFtZSA9IGhvc3RuYW1lLnNwbGl0KCc/JylbMF07XG4gICAgcmV0dXJuIGhvc3RuYW1lO1xufSJdLCJmaWxlIjoiZXhjbGlja3BsdWdpbi5qcyJ9
