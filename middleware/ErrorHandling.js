function errorHandling(err, req, res, next){
    if(err || res.statusCode >= 100) {
        res.json({
            status: err.status || res.statusCode || 200,
            msg: 'An error occurred. Please try again later.'
        })
    }else {
        next()
    }
}
export {
    errorHandling
}