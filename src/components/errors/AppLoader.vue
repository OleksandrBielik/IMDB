<template>
  <i />
</template>

<script>
export default {
  name: 'AppLoader',
}
</script>

<style lang="scss" scoped>
  $font-size:1.5;
i{
  height:$font-size+em;
  width:$font-size+em;
  border-radius:100%;
  background: $white;
  display:block;
  margin:10em auto;
  position:absolute;
  left:50%;
  animation:spin 2s ease infinite;
  &:before, &:after{
    content:'';
    display:block;
    position:absolute;
    height:inherit;
    width:inherit;
    background:inherit;
    border-radius:inherit;
    animation:spin 2s ease infinite;
  }
  &:before{
    left:-($font-size*1.15)+em;
  }
  &:after{
    left:($font-size*1.15)+em;  
  }
}

@keyframes spin{
  0%{
    top:0;
    transform:rotate(0deg);
  }
  50%{
    top:-($font-size*2)+em;
    transform:rotate(-180deg);
  }
  100%{
    top:0;
    transform:rotate(-360deg);
  }
}
</style>