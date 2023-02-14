<template>
  <nav>
    <router-link class="button-54" to="/">Home</router-link>
    <router-link class="button-54" to="/about">About</router-link>
  </nav>
  <router-view/>
</template>

<style>
/* <!-- HTML !-->
<button class="button-54" role="button">Button 54</button> */

/* CSS */
nav {
  position: absolute;
  padding: 10px;
  left: calc(50% - 400px);
}
.button-54 {
  font-family: "Open Sans", sans-serif;
  font-size: 16px;
  letter-spacing: 2px;
  text-decoration: none;
  text-transform: uppercase;
  color: #727272;
  cursor: pointer;
  border: 3px solid;
  padding: 0.25em 0.5em;
  box-shadow: 1px 1px 0px 0px, 2px 2px 0px 0px, 3px 3px 0px 0px, 4px 4px 0px 0px, 5px 5px 0px 0px;
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
