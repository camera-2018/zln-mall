<script setup>
import { ref, computed } from 'vue'
import { useRouter } from 'vue-router'
const router = useRouter()
function onClickLeft() {
  router.back()
}
const images = [
  'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fp8.itc.cn%2Fq_70%2Fimages03%2F20210625%2F5879754872724a6d8760f6e471dc549c.jpeg&refer=http%3A%2F%2Fp8.itc.cn&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1650118502&t=ed2ca64427050adab9e2c09bc9a6139f',
  'https://img1.baidu.com/it/u=3084854033,3309496715&fm=253&fmt=auto&app=138&f=JPEG?w=750&h=500',
];
const currentRateyls = ref(0);
const currentRateshui = ref(0);
const currentRatetd = ref(0);
const textyls = computed(() => currentRateyls.value.toFixed(0) + '%');
const textshui = computed(() => currentRateshui.value.toFixed(0) + '%');
const texttd = computed(() => currentRatetd.value.toFixed(0) + '%');
</script>

<template>
  <van-nav-bar title="详情" left-text="返回" left-arrow @click-left="onClickLeft">
    <template #right>
      <van-icon name="search" size="18" />
    </template>
  </van-nav-bar>
  <van-swipe :autoplay="6000" lazy-render>
    <van-swipe-item v-for="image in images" :key="image">
      <img :src="image" class="w-[100vw] h-[30vh]" />
    </van-swipe-item>
    <template #indicator="{ active, total }">
      <div class="custom-indicator">{{ active + 1 }}/{{ total }}</div>
    </template>
  </van-swipe>
  <van-grid :column-num="1">
    <van-grid-item>
      <div id="grid">
        <div class="color-red" id="price">¥29.9-35.9</div>
        <div class="color-gray p-5px" id="title">【买一斤送半斤】春季限定 乐山青梅</div>
        <van-grid :column-num="2">
          <van-grid-item icon="like-o" text="推荐" />
          <van-grid-item icon="share-o" text="分享" />
        </van-grid>
      </div>
      <van-cell title="库存" is-link value="3555箱" />
      <van-cell title="农户距你" is-link value="3.5km" />
      <van-cell center title="评价" is-link label="评价信息" />
      <van-cell title="详情" center />
    </van-grid-item>
  </van-grid>
  <van-cell>
    <br>
    <div class="pl-200px p-1 color-#2E8B57 ">本品叶绿素含量</div>
    <van-progress :percentage="71" pivot-color="SeaGreen " color="SeaGreen "/>
    <div class="flex" >
      <div class="p-1 pr-53px">112mg/cm²</div> 
      <div class="p-1 pr-53px color-#2E8B57 ">适宜叶绿素含量</div>
      <div class="p-1 ">156mg/cm²</div>
    </div>
  </van-cell>
  <van-cell>
    <br>
    <div class="pl-185px p-1 color-blue ">本品水分含量</div>
    <van-progress :percentage="65" pivot-color="blue " color="blue "/>
    <div class="flex" >
      <div class="p-1 pr-75px">0.45ml/g</div> 
      <div class="p-1 pr-75px color-blue ">适宜水分含量</div>
      <div class="p-1 ">0.65ml/g</div>
    </div>
  </van-cell>
  <van-cell>
    <br>
    <div class="pl-273px p-1 color-orange ">本品甜度</div>
    <van-progress :percentage="87" pivot-color="orange " color="orange "/>
    <div class="flex" >
      <div class="p-1 pr-136px">0</div> 
      <div class="p-1 pr-136px color-orange ">适宜甜度</div>
      <div class="p-1 ">1</div>
    </div>
  </van-cell>
  <br>
  <van-cell title="生长周期" />
  <van-steps direction="vertical" :active="0">
    <van-step>
      <h3>装箱</h3>
      <p>2022-3-17</p>
    </van-step>
    <van-step>
      <h3>成熟</h3>
      <p>2022-3-11</p>
    </van-step>
    <van-step>
      <h3>播种</h3>
      <p>2021-09-10</p>
    </van-step>
  </van-steps>
  <br />
  <br />
  <br />
  <van-action-bar>
    <van-action-bar-icon icon="chat-o" text="客服" dot />
    <van-action-bar-icon icon="cart-o" text="购物车" badge="5" />
    <van-action-bar-icon icon="shop-o" text="店铺" badge="12" />
    <van-action-bar-button type="warning" text="加入购物车" />
    <van-action-bar-button type="danger" text="立即购买" />
  </van-action-bar>
</template>

<style scoped>
.custom-indicator {
  position: absolute;
  right: 5px;
  bottom: 5px;
  padding: 2px 5px;
  font-size: 12px;
  color: white;
  background: rgba(0, 0, 0, 0.1);
}
#price {
  font-size: 30px;
  color: #ff5a5f;
  font-weight: lighter;
}
#title {
  font-size: 25px;
  color: #333;
  font-weight: lighter;
}
#grid {
  display: flex;
  width: 100%;
  flex-direction: column;
  justify-content: flex-start;
}
</style>
