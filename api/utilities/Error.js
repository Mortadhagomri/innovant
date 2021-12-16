module.exports = (code, message, res) => {
    return res.status(code).send({
        message,
        code
    })
}