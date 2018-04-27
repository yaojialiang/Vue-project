<template>
    <div>
        <datagrid :config="config"></datagrid>
    </div>
</template>

<script>
    import datagrid from './userTb/datalist.vue'

    export default {
        components: {
            datagrid
        },
        data(){
            return {
                config: {
                    showapi: this.$store.state.common.baseurl+'getuser',
                    delapi:this.$store.state.common.baseurl+'delusers',
                    params: {},
                    cols: ['_id'],
                    select:0
                }
            }
        }
    }
</script>