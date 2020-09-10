<template>
  <div>
    <Navbar></Navbar>
    <Footerbar></Footerbar>
  </div>
</template>

<script>
// @ is an alias to /src
import Navbar from '../../components/Navbar.vue';
import Footerbar from '../../components/Footerbar.vue';

export default {
  components: {
    Navbar,
    Footerbar,
  },
};
</script>

<style lang="scss">
</style>
