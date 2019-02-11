<template>
  <div class="iframcss">
    <!-- <iframe src= "Users/a/Downloads/测试上传.pdf" width="800px" height="800px" scrolling="yes" /> -->
   <span class="fa fa-user"></span>
   <a href="">aa</a>
  </div>
</template>

<script>
    export default {
      name: "iframetest",
      data(){
        return{
          url:"http://192.168.0.119:9010/WebReport/ReportServer?reportlet=pmis%2Frz.cpt&isucd=",
          parameter:"xuxing"
        }
      }
    }
</script>

<style scoped>
.iframcss{
  width: 100%;
  height: 100%;
  display:flex;
  justify-content: center;
  align-content: center;
}
</style>
