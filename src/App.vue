<template>
  <nav>
    <router-link class="button-54" to="/">New Order</router-link>
    <router-link class="button-54" to="/orderList">Order List</router-link>
    <router-link class="button-54" to="/about">About</router-link>
  </nav>
  <router-view />
</template>

<style>
nav {
  position: absolute;
  padding: 10px;
  left: calc(50% - 170px);
}
.button-54 {
  font-family: 'Open Sans', sans-serif;
  font-size: 13px;
  letter-spacing: 2px;
  text-decoration: none;
  text-transform: uppercase;
  color: #727272;
  cursor: pointer;
  border: 3px solid;
  padding: 0.25em 0.5em;
  box-shadow: 1px 1px 0px 0px, 2px 2px 0px 0px, 3px 3px 0px 0px, 4px 4px 0px 0px,
    5px 5px 0px 0px;
  position: relative;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
}

.button-54:active {
  box-shadow: 0px 0px 0px 0px;
  top: 5px;
  left: 5px;
}

@media (min-width: 768px) {
  .button-54 {
    padding: 0.25em 0.75em;
  }
}
</style>
