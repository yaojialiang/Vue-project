<template>
    <div class="fl d">
        <label for="datelist"> Listing Date:</label>
        <input type="date" name="" id="datelist" v-model="date" @change="show" :datelist="date" />
    </div>
</template>

<script type="text/javascript">
    export default{
        data(){
            return{
                date:''
            }
        },
        methods:{
            show(){
                this.$emit('showDate',this.date);
            }
        }
    }
</script>