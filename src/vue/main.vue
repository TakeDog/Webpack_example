<template>
    <div id="body">
        这里是主页
        <br>
        <router-link to="/login">登录页</router-link>
        <br>
        <router-link to="/register">注册页</router-link>  
        <router-view></router-view>
    </div>    
</template>

<style scoped>
#body{padding:20px;}
</style>

<script>

</script>

