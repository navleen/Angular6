module.exports = function (app, server_detail, path,console) {
    console.info("welcome to routes")
   
    
    // api route setting ends ---

    // ui routes setting --
    app.get('/', function (req, res) {
        console.info("from /")
        res.render('index');
    })


};
