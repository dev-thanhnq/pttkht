<template>
    <el-container>
        <el-header class="header" height="50px">
            <div class="logoWrap">
                <img @click="backToHome" v-if="domain == 'cms.ilivingcosmetic.com'" src="../../../../Zent/easy-shop-webapp/src/assets/images/logo/Iliving.png" alt="">
                <img @click="backToHome" v-else src="../assets/images/kma.jpg" alt="">
            </div>
            <div class="headerRightWrap">
                <el-dropdown>
                    <el-avatar
                    size="medium"
                    shape="circle"
                    icon="el-icon-user-solid"
                    />
                    <el-dropdown-menu slot="dropdown">
                    <el-dropdown-item @click.native="Profile"
                        >Thông tin tài khoản</el-dropdown-item
                    >
                    <el-dropdown-item @click.native="changePassword"
                        >Đổi mật khẩu</el-dropdown-item
                    >
                    <el-dropdown-item divided @click.native="logout">
                        Đăng xuất
                    </el-dropdown-item>
                    </el-dropdown-menu>
                </el-dropdown>
            </div>
        </el-header>
        <el-main>
            <router-view />
        </el-main>
    </el-container>
</template>

<script>
import router from "@/router";
import { mapActions } from "vuex";

export default {
    name: "SaleLayout",
    data () {
      return {
        domain: window.location.host,
      }
    },
    methods: {
        ...mapActions("auth", ["logout"]),
        backToHome() {
            if (router.currentRoute.name !== "Home") {
                return router.push({ name: "Home" });
            }
        },
        Profile() {
            if (router.currentRoute.name !== "Profile") {
                return router.push({ name: "Profile" });
            }
        },
        changePassword() {
            if (router.currentRoute.name !== "ChangePassword") {
                return router.push({ name: "ChangePassword" });
            }
        },
    }
}
</script>

<style lang="scss" scoped>
@import "../../../../Zent/easy-shop-webapp/src/assets/styles/variables";

.header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px solid $colorStroke;
    width: 100%;
    background: $colorHeaderBg;
    padding: 0 24px;

    .logoWrap {
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;

        img {
            width: 112px;
            height: 50px;
        }
    }

  .headerRightWrap {
    height: 100%;
    .el-dropdown {
        height: 50px;
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
  }
}

.el-main {
  height: 92vh;
  padding: 20px;
  background: $colorMainBg;
}
</style>