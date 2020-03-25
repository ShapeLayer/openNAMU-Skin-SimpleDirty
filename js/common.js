function setCookie (name, value, expires) {
    document.cookie = name + '=' + value + ';expires=' + expires + ';path=/'
}

function getCookie (name) {
    let value = document.cookie.match('(^|;) ?' + name + '=([^;]*)(;|$)')
    return value? value[2] : null
}

function removeCookie (name) {
    let date = new Date()
    document.cookie = name + '=' + '; expires=' + date.toUTCString() + '; path=/'
}