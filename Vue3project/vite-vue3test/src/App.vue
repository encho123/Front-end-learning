<template>
  <router-view />
</template>

<script setup lang="ts">
import { onMounted } from "vue";
import request from "./utils/request";
//挂载完毕发一个请求试试
onMounted(() => {
  request({
    url: "/user/login",
    method: "post",
    data: {
      username: "admin",
      password: "11111",
    },
  }).then(
    (res) => {
      console.log(res);
    },
    (err) => {
      console.log(err);
    }
  );
});
</script>

<style lang="scss" scoped></style>
