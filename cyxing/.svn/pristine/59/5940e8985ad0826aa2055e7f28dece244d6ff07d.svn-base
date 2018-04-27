/* 
* @Author: Marte
* @Date:   2018-04-16 21:55:29
* @Last Modified by:   Marte
* @Last Modified time: 2018-04-16 22:07:23
*/

var db = require('../db');



module.exports={
    reg(app){
        //获取用户通讯录好友
        app.get('/getaddresslist',(req,res)=>{
            let userid = req.query.userid;
            
            var sql = `select * from addresslist where id = ${userid}`;
            db.DBHelper.compile(sql,(result)=>{
                res.send(apiResult(true,result));
            })
        })
        
    }
}