<template>
    <div>
        <datagrid :api="api+'goods'" kind="guntong"></datagrid>
    </div>
</template>

<script>

    import datagrid from '../datagrid/datagrid.vue'
    export default {
        components:{
            datagrid
        },
        data(){
            return{
                api:this.$store.state.common.baseurl
            }
        }
    }
</script>