<template>
    <div>
        <datagrid :config="config" ></datagrid>
    </div>
</template>

<script>
    import datagrid from '../datagrid/datagrid.vue'
    import http from '../../utils/httpclient.js'
    export default {
        components: {
            datagrid
        },
        data(){
            return {
                config: {
                    showapi:this.$store.state.common.baseurl+'goods',
                    delapi:this.$store.state.common.baseurl+'delgoods',
                    cols: ['_id','url','dis'],
                    select:0
                }
            }
        }
               
    }

    //过滤掉不要的字段
    //默认没有 cols 为全部
    //中英文切换
    //翻页
</script>