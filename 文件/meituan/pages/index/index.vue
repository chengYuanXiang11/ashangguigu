<template>
	<view class="container">
		<!-- 位置信息 -->
		<uni-nav-bar>
			 <view slot="left" v-if="!navbar"  >
					<text >{{city}}</text>
			 </view>
			<view slot="left" v-if="navbar">
			<navigator url="" class=" search" >
				<form @submit="" @reset="">
					<input type="text" value="dd" />
				</form>
				</navigator> 
			
			</view>
		 </uni-nav-bar>
		<!-- 顶部位置以及搜索 -->
	
			<!-- 当前城市 -->
	<!-- 	<navigator url="" class=" city">
			<button type="default" >{{city}}</button>
		</navigator> -->
	
			
			
	<!-- 导航栏 -->
		<view>
			<scroll-view 
			:scroll-x="true" class="header_content">
				<view class="demo1" >
						<view v-for="(item,index) in sfen" :key="index">
							<navigator url="/pages/meishi/meishi" class="vi">
							<view>
								<img class="imge" src="../../static/c1.png" alt="">
							</view>
							<view>
								{{item}}
							</view>
								
								</navigator>
						</view>
					
					
				</view>
				
			</scroll-view>
		</view>
		<!-- 核心内容 -->
		<view class="content">
			<view class="center">----附近商家-----</view>
			 <view >
				 <view>
					 	 <ul  class="content_header">
				 	<li class="cont_zh" >
						<view @tap="zong()">
							<text>综合排序</text>
						</view>
						
					</li>
				 	<li class="cont_xl">
						<text>销量最高</text>
					</li>
				 	<li class="cont_jl">
				 		<text>距离最高</text>
				 	</li>
				 	<li class="cont_sx" >
				 		<text>筛选</text>
				 	</li>
				 </ul>
				 <!-- /综合排序 -->
						<view class="zonghe" v-show="zongh">
							<ul>
								<li  v-for="(item,index) in zonghe" :key="index">
									<navigator url="">
										<view>
											<text>{{item.id}} </text>
										</view>
									</navigator>
								</li>
							</ul>
						</view>
				 </view>
				 <!-- 筛选信息 -->
				 
			<!-- 商家信息 -->
				 <view class="conten_con">
					<view v-for="(item,index) in content_data" :key="index" >
						<view class="conten_content" @tap="shangjia(item)">
							<view class="conten_conv1">
								<image :src="item.url" mode="" class="conten_conv1_img"></image>
							</view>
							<view class="conten_conv2">
								<view>{{item.name}} </view>
								<view>
									<text>5.0</text>
									<text>{{item.salesvolume}}</text>
								</view>
								<view>
									<text class="">{{item.del}}</text>
									<text>{{item.price}}</text>
								</view>
								<view>
									{{item.jname}}
								</view>
							</view>
						</view>
					</view>
					<view v-show="jiazai" @tap="jiaza">
						点击加载更多
					</view>
				 </view>
				
			 </view>
		</view>
		<view class="foot">
			<!-- foot -->
		</view>
	  <!--定义页面结构，可以使用地图组件也能使用其他组件 -->
	
		 <!-- <map :latitude="addrDel.latitude"
		            :longitude="addrDel.longitude"
		            style="width: 100%; height: 1500rpx;"
		            scale="16" 
					:markers="covers"
		           :show-location="true"
		     
		            >
		            </map> -->
		
	</view>
</template>

<script>
	import uniList from "@/components/uni-list/uni-list.vue"
	import uniListItem from "@/components/uni-list-item/uni-list-item.vue"
	import uniNavBar from "@/components/uni-nav-bar/uni-nav-bar.vue"
	import amapFile from '../../libs/amap-wx.js'
	export default {
		data() {
			return {
					jiazai:true,
				page: 1,										//当前请求数据是第几页
					pageSize: 10,									//每页数据条数
					hasMoreData: true,								//上拉时是否继续请求数据，即是否还有更多数据
					contentlist: [],								//获取的数据列表，以追加的形式添加进去
				zonghe:[
					{
					id:'综合排序',
					url:'',
					},
					{
					id:'速度最快',
					url:'',
					},
					{
					id:'评分最高',
					url:'',
					},
					{
					id:'起送价最低',
					url:'',
					},
					{
					id:'配送价最低',
					url:'',
					},
					{
					id:'人均高到低',
					url:'',
					},
					{
					id:'人均低到高',
					url:'',
					}],
				shaixuan:false,
				zongh:false,
				city:'',//当前地址
				navbar:false,//显示地址还是搜索
				sfen:['美食','超市','生鲜果蔬','美团专送','快食简餐',
				'美食','超市','生鲜果蔬','美团专送','快食简餐',
				'下午茶','汉堡披萨','家常菜','小吃馆','鲜花蛋糕',
				'下午茶','汉堡披萨','家常菜','小吃馆','鲜花蛋糕'],
				content_data:[],
				   addrDel:{},
				                mapInfo: [],
				                markd: {
								
								},
								 covers: [],
				                mapKey: '8db07d8a4db0d81b1fb2070d5eb4cb62'
			
			}
		},
		components: {uniNavBar,uniList,uniListItem},
		onLoad:function(){
			
			var that = this;  
			 var myAmapFun = new amapFile.AMapWX({key:'8db07d8a4db0d81b1fb2070d5eb4cb62'});
			 uni.request({
			 	url: 'http://localhost:3001/api/data/shou',
			 	method: 'GET',
			 	data: { page: that.page, count: that.pageSize },
			 	success: res => {
					console.log(res.data)
					this.content_data = res.data.article
					this.content_data.length<res.data.articelleng?this.jiazai=true:this.jiazai=false
				},
			 	fail: () => {},
			 	complete: () => {}
			 });
			// 显示地图
	// uni.getLocation({
	// 			    type: 'gcj02',
	// 				geocode:true,//设置该参数为true可直接获取经纬度及城市信息
	// 			    success: function (res) {
					
	// 					that.addrDel = res;
	// 						console.log(res)
	// 					console.log('东经' + that.addrDel.longitude)
	// 					console.log('北纬' + that.addrDel.latitude)
	// 			    },
	// 				fail: function () {
	// 					uni.showToast({
	// 					    title: '获取地址失败，将导致部分功能不可用',
	// 						icon:'none'
	// 					});
	// 				}
	// 			});
	//显示周边
	 
	  //   myAmapFun.getPoiAround({
	  //     success: function(data){
	  //       console.log(data)
	  //     },
	  //     fail: function(info){
	  //       //失败回调
	  //       console.log(info)
			// console.log('gg')
	  //     }
	  //   });
	  // //显示位置
		 myAmapFun.getRegeo({
		      success: function(data){
				
		        	that.addrDel = data[0];
					
					that.city = that.addrDel.desc;
				
					that.covers[0]={};
					that.covers[0].latitude =data[0].latitude
					that.covers[0].longitude = data[0].longitude 
					that.covers[0].iconPath = '../../static/c1.png'
					
				// console.log(that.covers)
		      }, 
		      fail: function(info){
		        //失败回调
		        console.log(info)
		      }
		    })
		      
		    },
	methods:{
		// 跳转商家店铺商品
		shangjia(e){
			this.$store.commit("shangjia",{shangjia:e})
			console.log(this.$store.state.dingdan)
			uni.navigateTo({
				url: '/pages/shangjia/goodsList_scroll',
				success: res => {},
				fail: () => {},
				complete: () => {}
			});
		},
		zong(){
					console.log('1')
					this.zongh = !this.zongh
					console.log(this.zongh)
				},
		jiaza(){
					this.page+=1;
					uni.request({
						url: 'http://localhost:3001/api/data/shou',
						method: 'GET',
						data: { page: this.page, count: this.pageSize },
						success: res => {
										this.content_data.push.apply(this.content_data,res.data.article)
										if(this.content_data.length<res.data.articelleng){
											this.jiazai=true
										}else{
											this.jiazai=false
										}
										console.log(res.data.article)
										console.log(res.data.articelleng)
									console.log(this.jiazai)
									},
						fail: () => {},
						complete: () => {}
					});
				}
			}
			}
</script>

<style>
	@import url("./index.css");


</style>
