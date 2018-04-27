<template>
    <div>
        <datagrid api="http://10.3.136.10:8080/goods" kind="drs"></datagrid>
    </div>
</template>

<script>
    import datagrid from '../datagrid/datagrid.vue'
    export default {
        components:{
            datagrid
        }
    }
</script>