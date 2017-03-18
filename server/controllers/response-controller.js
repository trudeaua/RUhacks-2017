export default {
    sendError(res, err){
        res.json({
            success: false,
            error: true,
            err: err
        });
    },
    sendFailure(res, msg) {
        res.json({
            success: false,
            error: false,
            message: msg
        });
    },
    sendMessage(res, msg){
        res.json({
            success: true,
            error: false,
            message: msg
        });
    },
    sendObject(res, name, val){
        let response = {
            success: true,
            error: false,
        };
        response[name] = val;
        res.json(response)
    }
}