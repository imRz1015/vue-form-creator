<template>
  <div class="app-header flex-between">
    <a-space>
      <img class="logo" src="../../assets/logo.png" alt="logo" />
      <a class="title" :href="githubLinkUrl">Vue Form Creator</a>
    </a-space>
    <div class="app-header-right flex-center">
      <span class="link-item" @click="handleRedirectGithub">Gitee</span>
      <GithubOutlined class="github-icon" @click="handleRedirectGithub" />
    </div>
  </div>
</template>

<script>
import { GithubOutlined } from '@ant-design/icons-vue'

export default {
  name: 'app-header',
  components: { GithubOutlined },
  setup() {
    const githubLinkUrl = `https://github.com/imRz1015/vue-form-creator`
    const handleRedirectGithub = () => {
      window.open(githubLinkUrl)
    }
    return { githubLinkUrl, handleRedirectGithub }
  }
}
</script>

<style lang="less" scoped>
@import '../../styles/variable';

.app-header {
  .logo {
    width: 44px;
    height: 44px;
    vertical-align: middle;
  }

  .title {
    margin-left: 16px;
    color: rgba(0, 0, 0, 0.85);
    font-size: 18px;
    font-family: Avenir, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, 'Noto Sans', sans-serif, 'Apple Color Emoji',
      'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji', sans-serif;
    line-height: 64px;
    white-space: nowrap;
    text-decoration: none;
    font-weight: 500;
  }

  &-right {
    font-weight: 500;
    color: #000000;
    cursor: pointer;

    .link-item {
      font-size: 16px;
      margin-right: 24px;
      transition: all 0.3s;

      &:hover {
        color: @themeColor;
      }
    }

    .github-icon {
      transition: all 0.3s;
      font-size: 28px;

      &:hover {
        color: @themeColor;
      }
    }
  }
}
</style>
