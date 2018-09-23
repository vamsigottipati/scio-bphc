export default (to , from, next) => {
    if(sessionStorage.getItem('pagename') != '/') {
        next()
    }else {
        next('/')
    }
}