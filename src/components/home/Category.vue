<template>
  <nav>
    <div class="menu-item"><a href="">THIẾT BỊ ĐEO TAY</a></div>
    <div class="menu-item"><a href="">NGHE/NHÌN</a></div>
    <div class="menu-item"><a href="">LINH KIỆN PC</a></div>
    <div class="menu-item"><a href="">MÁY TÍNH</a></div>
    <div class="menu-item"><a href="">GAMING GEAR</a></div>
    <div class="menu-item"><a href="">CAMERA</a></div>
    <div class="menu-item"><a href="">PHỤ KIỆN</a></div>
  </nav>
</template>

<script>
export default {
  name: "Category",
};
</script>

<style scoped>
nav {
  display: flex;
  align-items: center;
  justify-content: center;
}
nav .menu-item {
  color: black;
  padding: 10px 20px;
  position: relative;
  text-align: center;
  border-bottom: 3px solid transparent;
  display: flex;
  transition: 0.4s;
}
nav .menu-item.active,
nav .menu-item:hover {
  border-bottom-color: blue;
}
nav .menu-item a {
  text-decoration: none;
}
</style>