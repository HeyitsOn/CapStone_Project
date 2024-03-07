function errorHandling(err, req, res, next){
    if(err || res.statusCode >= 200) {
        res.json({
            status: err.status || res.statusCode || 300,
            msg: 'An error occurred. Please try again later.'
        })
    }else {
        next()
    }
}
export {
    errorHandling
}