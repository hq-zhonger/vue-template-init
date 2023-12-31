<template>
  <div class="common-layout">
    <el-container>
      <!--左侧菜单-->
      <el-aside>
        左侧菜单
      </el-aside>

      <el-container>
        <el-header>
          顶部
        </el-header>

        <el-main>
          <router-view>路由</router-view>
        </el-main>

        <el-footer>
          底部
        </el-footer>
      </el-container>
    </el-container>
  </div>
</template>


<style scoped lang="less">
/*顶部导航样式*/
.el-header{
  --el-header-padding: 0px;
  --el-header-height: auto;
  height: 80px;
  background-color: #F3F3F3;
}

.el-main{
  background-color: #F3F3F3;
}

.el-container{
  height: 100%;
}

.common-layout{
  width: 99vw;
  height: 98vh;
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
  background-color: white;
  overflow: hidden;
}
</style>