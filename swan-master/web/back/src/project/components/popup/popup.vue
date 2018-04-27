<template>
    <div id="pop">
        <div id="popmask">
            <img src="../../libs/wen.jpg" width="100" height="100" />
            <h5>确认操作</h5>
            <div><input type="button" value="确定" @click="make" /><input type="button" value="取消" @click="cancel"/></div>
        </div>
    </div>
</template>
<script type="text/javascript">
    import './popup.scss'
    import $ from 'jquery'
    import http from '../../utils/httpclient.js'
    export default{
        methods:{   
            make:function(){
                http.get(this.sub.api,this.sub.data).then((res) => {
                    if(res.data.status){
                        this.$emit('showset',this.sub.idx);
                    }
                })
                
            },
            cancel:function(){
                this.$emit('showset');
            }
        },
        props:['sub'],
        mounted(){
            var wid=(window.innerWidth-350)/2;
            var hei=(window.innerHeight-200)/2;
            $('#popmask').css('left',wid).css('top',hei);
            window.onresize=function(){
                var wid=(window.innerWidth-300)/2;
                var hei=(window.innerHeight-500)/2;
                $('#popmask').css('left',wid).css('top',hei);
            }
        }
    }
</script>