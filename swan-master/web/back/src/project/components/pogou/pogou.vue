<template>
    <div id="pop">
        <div id="popmask">
            <img src="../../libs/gou.jpg" width="100" height="100" id="goup"/>
            <h5>操作成功</h5>
        </div>
    </div>
</template>
<script type="text/javascript">
    import './pogou.scss'
    import $ from 'jquery'
    import http from '../../utils/httpclient.js'
    export default{
        mounted(){
            var wid=(window.innerWidth-350)/2;
            var hei=(window.innerHeight-200)/2;
            $('#popmask').css('left',wid).css('top',hei);
            window.onresize=function(){
                var wid=(window.innerWidth-300)/2;
                var hei=(window.innerHeight-500)/2;
                $('#popmask').css('left',wid).css('top',hei);
            }
            setTimeout(() => {
                this.$emit('showgou');
            },1000)
            
        }
    }
</script>