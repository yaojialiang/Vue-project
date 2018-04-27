var db = require('../db');
var apiResult = require('../utils/apiResult');
const filter = require('../utils/filter');
var async = require('async');

module.exports={
    reg(app){
        // 增加浏览量
        app.post('/addView',(req,res)=>{
            let id = req.body.id;
            sql = `update cynews set see=see+1 where id=${id}`;
            db.DBHelper.compile(sql,result=>{
                res.send(apiResult(true));
            })
        })
    }
}