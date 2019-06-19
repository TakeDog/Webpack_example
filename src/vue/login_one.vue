<style scored>
    p{color:red;}
</style>
<template>
    <div id="one">
        <p>这里是login的one子页面</p>
        <van-button type="primary" @click="showLog">{{btn_text}}</van-button>
        <van-field v-model="aa" placeholder="请输入用户名" />
    </div>
</template>
<script>
    import {Dialog,Button,Field} from "vant"
    //console.log(Button.name);
    export default {
        data:()=>{
            return {
                btn_text:"按钮文字",
                aa:1
            }
        },
        methods:{
            showLog(){
               Dialog.alert({
                    message: '弹窗内容'
                });
            }
        },
        components: {
           [Button.name]: Button,
           [Field.name]:Field
        }
    }
</script>


