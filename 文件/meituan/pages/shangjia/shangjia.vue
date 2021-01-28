<template>
	<!-- 整体 -->
	<view class="conten_con">
		<!-- 头部 -->
		<view class="conten_content">
			<view class="conten_conv1">
				<image :src="xinxi.url" mode=""  class="conten_conv1_img"></image>
			</view>
			<view class="conten_conv2">
				<view> 
					<text>25分钟|2.4km</text>
				</view>
				<view>
					<text class="txt">公告:大尚全国品牌连锁店，只做高品质外卖，为保证食材的新鲜，本店所有餐品每日新鲜采购，我们坚持来单现做，收到餐如有任何建议餐品遗漏及不满请及时联系我18037279092, 加盟Tel :  4001678010</text>
				</view>
				<view>
					lunbo
				</view>
			</view>
		</view>
		<view>
		    <uni-segmented-control :current="current" :values="items" @clickItem="onClickItem" style-type="button" active-color="#4cd964">
					
			</uni-segmented-control>
		    <view >
		        <view v-if="current === 0">
					<view class="flexrow">
						
						
					<view>
							     
				</view>
				</view>
		  </view>
		            <view v-if="current === 1">
		               评价
		            </view>
		            <view v-if="current === 2">
		                商家
		            </view>
		        </view>
		    </view>
	</view>
</template>

<script>
	import uniSegmentedControl from "@/components/uni-segmented-control/uni-segmented-control.vue"
	export default {
	    components: {uniSegmentedControl},
	    data() {
	        return {
				toView:'',
	            items: ['点餐','评价','商家'],
				a1:['福利','折扣','虾尾','烧烤','龙虾'],
	            current: 0,
				// 商家信息
				xinxi:null
	        }
	    },
		onLoad() {
			this.xinxi= this.$store.state.shangjia
		},
	    methods: { 
			bindToView(data,e){
							// var id = event.currentTarget.dataset.id;
							// console.log(id)
							// this.toView = id;
							console.log(e)
							console.log(data)
						},
	        onClickItem(e) {
	            if (this.current !== e.currentIndex) {
	                this.current = e.currentIndex;
	            }
	        }
	    }
	}
</script>

<style style="scss">
	@import url("../index/index.css");
	.txt{
		display: block;
		overflow: hidden;
		white-space: nowrap;
		text-overflow:ellipsis;
	}
	.ds{
		height: 100px;
	}
	.ds2{
		height: 400px;
	}
	.zuo{
		width: 250rpx;
	}
	.you{
		width: 500rpx;
	}
</style>
