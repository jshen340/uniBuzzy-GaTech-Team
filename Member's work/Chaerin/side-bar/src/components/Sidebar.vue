<template>
  <div class="sidebar">
      <div class="title">
          Simple Sidebar
      </div>
      <div class="menu-items">
          <router-link to="/" active-class="active" exact class="side-btn" custom v-slot="{ navigate, isActive, isExactActive }">
              <button role="link" @click="navigate" :class="{ active: isActive, 'exact-active': isExactActive }">
                  <div class="link-container">
                      Overview
                  </div>
              </button>
          </router-link>
          <router-link to="/messages" active-class="active" exact class="side-btn" custom v-slot="{ navigate, isActive, isExactActive }">
              <button role="link" @click="navigate" :class="{ active: isActive, 'exact-active': isExactActive }">
                  <div class="link-container">
                      Messages
                  </div>
              </button>
          </router-link>
          <router-link to="/profile" active-class="active" exact class="side-btn" custom v-slot="{ navigate, isActive, isExactActive }">
              <button role="link" @click="navigate" :class="{ active: isActive, 'exact-active': isExactActive }">
                  <div class="link-container">
                      Profile
                  </div>
              </button>
          </router-link>
          <router-link to="/settings" active-class="active" exact class="side-btn" custom v-slot="{ navigate, isActive, isExactActive }">
              <button role="link" @click="navigate" :class="{ active: isActive, 'exact-active': isExactActive }">
                  <div class="link-container">
                      Settings
                  </div>
              </button>
          </router-link>
      </div>
  </div>
</template>

<script>
  export default {

  }
</script>

<style scoped>
  .title {
      color: white;
      font-size: 24px;
      margin-top: 10px;
  }

  .menu-items {
      display: flex;
      flex-direction: column;
      margin-top: 40px;
  }

  .menu-items > * {
      margin-top: 60px;
  }

  .side-btn:focus {
      outline: none;
  }
  
  .side-btn.active {
      position: relative;
      background-color: white;
      color: teal;
      font-weight: 500;
      margin-left: 10px;
      border-radius: 30px 0 0 30px;
  }

  .side-btn.active::before {
      position: absolute;
      content: "";
      top: -30px;
      right: 0;
      height: 30px;
      width: 30px;
      background-color: white 
  }

  .side-btn.active::after {
      position: absolute;
      content: "";
      bottom: -30px;
      right: 0;
      height: 30px;
      width: 30px;
      background-color: white 
  }

  .side-btn {
      border: none;
      padding: 16px 0px;
      cursor: pointer;
      font-size: 16px;
      color: white;
      background-color: transparent;
  }

  .side-btn.active .link-container::before {
      position: absolute;
      top: -60px;
      right: 0;
      content: "";
      height: 60px;
      width: 60px;
      border-radius: 50%;
      background-color: teal;
  }

  .side-btn.active .link-container::after {
      position: absolute;
      bottom: -60px;
      right: 0;
      content: "";
      height: 60px;
      width: 60px;
      border-radius: 50%;
      background-color: teal;
      z-index: 99;
  }
</style>