<template>
  <div class="about">
    <p>
      This is a project done by following the course from Udemy - Vue JS 3 Modern Web
      Development with Vuex and Vue Router, with adaptations and optimizations.
    </p>
  </div>
</template>

<script>
export default {
  name: 'AboutView',
};
</script>

<style>
.about {
  margin: 0;
  position: absolute;
  top: 180px;
  left: 50%;
  margin-right: -50%;
  transform: translate(-50%, -50%);
}
p {
  width: 400px;
  line-height: 1.6;
  text-align: center;
}
</style>
