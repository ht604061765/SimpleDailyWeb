<template>
    <div class="common-footer">
        <el-link class="footer-link-fight" type="info">©2020 HanPP</el-link>
    </div>
</template>

<script>
export default {
    name: 'commonFooter',
    data() {
        return {
        }
    },

    methods: {
        // 跳转到导航页面
        routeToNavigation() {
            this.$router.replace('/index')
        },
    }
}
</script>

<style scoped>
.footer-link-fight {
    color: #bbb;
}

.common-footer {
    width: 100%;
    min-width: 1250px;
    position: fixed;
    z-index: 302;
    bottom: 0;
    left: 0;
    height: 40px;
    overflow: hidden;
    zoom: 1;
    margin: 0;
    background-color: #fbfbfb;
    text-align: center;
    line-height: 40px;
}
</style>
