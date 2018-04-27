/* 
* @Author: Marte
* @Date:   2018-03-14 17:40:25
* @Last Modified by:   Marte
* @Last Modified time: 2018-03-14 18:12:30
*/
export default{
    page(data,g,numpage,active,cb){
        var g=g;
        var fen=[];
        var numpage=0;
        var n=Math.floor(data.length/g);
        var nl=data.length%g;
        var num=0;
        for(var i=1;i<=n;i++){
            
            fen.push(data.slice(num,num+g));
            num+=g;
        }
        fen.push(data.slice(n*g,data.length+1));
        if(fen.length>5){
            numpage=5
        }else{
            numpage=fen.length;
        }
        cb({fen,numpage});
    }
}