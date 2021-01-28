<template>
	<view class="container">
		<!-- 顶部面板 -->
		<view class="top--panel conten_con">
			<!-- 顶部面板，可添加所需要放在页面顶部的内容代码。比如banner图 -->
			<view style="background-color: #ffaa00;text-align: center;font-size: 28rpx;padding: 10px 0;color: #fff;">
				<view class="conten_content">
					<view conten_conv1>
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
			</view>
		</view>
		  <uni-segmented-control :current="current" :values="items" class="content" @clickItem="onClickItem" style-type="button" active-color="#4cd964"></uni-segmented-control>
		            <view v-if="current === 0" >
						<view  class="container ">
							<!-- 滚动区域 -->
								<view class="scroll-panel" >
									<view class="list-box">
										<view class="left">
											<scroll-view scroll-y="true" 
												:style="{ 'height':scrollHeight + 'px' }" 
												:scroll-into-view="leftIntoView"
												>
												<view class="item" 
													v-for="(item,index) in a1"
													:key="index" 
													:class="{ 'active':index==leftIndex }" 
													:id="'left-'+index"
													:data-index="index"
													@tap="leftTap"
												>{{item.dishes}}</view>
									        </scroll-view>
										</view>
										<view class="main">
											<scroll-view  scroll-y="true" :style="{ 'height':scrollHeight + 'px' }" @scroll="mainScroll" :scroll-into-view="scrollInto" scroll-with-animation="true">
												<view class="item main-item" v-for="(item,index) in a1" :key="index" :id="'item-'+index">
													<view class="title">
														<view>{{item.dishes}}</view>
													</view>
													<view class="goods" v-for="(item2,index2) in item.foot" :key="index2">
														<image src="/static/logo.png" mode=""></image>
														<view>
															<view>{{item2.name}}</view>
															<view class="describe">月售{{item2.salesVolume}} 赞{{item2.praise}}</view>
															<view class="money">{{item2.Price}}元</view>
															<view class="money" v-if="norms(item2.norms)">
															<!-- 选规格 -->
																<uni-icons type="contact" size="30" @tap="jia2(item2)"></uni-icons>
																<!-- <button type="default" @tap="jia2(item2)">1</button> -->
															</view>
															<!-- 直接添加 -->
															<view v-if="!norms(item2.norms)">
																<uni-icons type="plusempty"  size="30" @tap="jia1(item2)"></uni-icons>
																<text v-show="!jiagou(item2.count)">{{item2.count}}</text>
																<button type="default" v-show="!jiagou(item2.count)" @tap="jianshao(item2)">-</button>
															</view>
															
														</view>
													</view>
												</view>
												<view class="fill-last" :style="{ 'height':fillHeight + 'px' }"></view>
											</scroll-view>
										</view>
									</view>
								</view>
							<!-- 订单区域 -->
							 <!-- v-show="yin" -->
								
								<!-- 购物车面板 -->
								<view class="bottom-panel">
									<!-- 购物车栏目 -->
									<view style="background-color: #ffaa00;text-align: center;font-size: 28rpx;padding: 10px 0;color: #fff;">
										<view class="gouwu">  
										<view @tap="qing">
											<text>清空</text>
											<uni-icons type="trash-filled" ></uni-icons>
										</view>
											<view class="gouwuche">
												<view class="di"  v-for="(n,index) in this.gouwuche[this.xinxi.name]" :key="index">
													<view class="han1">
														<image :src="n.img" mode=""></image>
													</view>
													<view class="han2">
														<view class="han2_1">
															<view class="han2_1_1">
																<view>
																{{n.name}}
																</view>
																<view >
																	<text  v-for="(m,index) in n.norms" :key="index">
																		<text v-for="(i,index) in m" :key="index">
																			{{i}}
																		</text>
																	</text>
																</view>
																<view>
																	{{n.Price}}
																</view>
															</view>
															<view class="han2_1_2">
																<view>
																	共{{n.Zprice}}元
																</view> 
																<view class="icon"> 
																	<view>
																		<uni-icons type="back" @tap="ujia1(n)" size="30"></uni-icons>
																	</view>
																
																	{{n.number}}
																	<view>
																		<uni-icons type="forward" @tap="ujian1(n)" size="30"></uni-icons>
																	</view>
																</view>
															
															</view>
														</view>
														<view class="han2_2"></view>
													</view>
												</view>
											</view>
											{{marax}}
										</view>
									</view>
								</view>
						</view>	
						<view class="ding"  v-show="yin" @tap="d1">
							<!-- v-show="yin" -->
							<view class="guige" :style="{'margin-top':dheight+'px'}" v-cloak>
							<view class="dingdan"  @tap.stop="d2">
								<view class="d_header">{{this.$store.state.dingdan.name}}</view>
								
									 <scroll-view 
									 scroll-y="true"
									 class="d_scroll"
									 >
										<view v-for="(n,index) in this.$store.state.dingdan.norms" :key="index" class="guige1">
											<view class="d_g1">
												{{n.name}}
											</view>
											<view class="d_g2">
											<view v-for="(c,index) in n.shuju" :key="index">
												
													<button type="default" :class="{ctive:dite(n.name,c.n_name)}" @tap="dis(n.name,index,c.n_name)">
													{{c.n_name}}
													</button>
												</view>
												
											</view>
										</view>
									</scroll-view>
								<view v-for="(d,index) in this.guigee" :key="index">
									<view v-for="(v,index) in d" :key="index">
										{{v}}
									</view>
								</view>
								{{number}}
								<uni-icons type="plusempty" size="30" @tap="jiaru"></uni-icons>
							</view>
						</view>	
						</view>	
					</view>
		            <view v-if="current === 1">
		            </view>
		            <view v-if="current === 2">
		                选项卡3的内容
		            </view>
		<!-- 滚动区域 -->
	<!-- 	<view class="scroll-panel" id="scroll-panel">
			<view class="list-box">
				<view class="left">
					<scroll-view scroll-y="true" 
						:style="{ 'height':scrollHeight + 'px' }" 
						:scroll-into-view="leftIntoView"
						>
						<view class="item" 
							v-for="(item,index) in a1"
							:key="index" 
							:class="{ 'active':index==leftIndex }" 
							:id="'left-'+index"
							:data-index="index"
							@tap="leftTap"
						>{{item.dishes}}</view>
			        </scroll-view>
				</view>
				<view class="main">
					<scroll-view  scroll-y="true" :style="{ 'height':scrollHeight + 'px' }" @scroll="mainScroll" :scroll-into-view="scrollInto" scroll-with-animation="true">
						<view class="item main-item" v-for="(item,index) in a1" :key="index" :id="'item-'+index">
							<view class="title">
								<view>{{item.dishes}}</view>
							</view>
							<view class="goods" v-for="(item2,index2) in item.foot" :key="index2">
								<image src="/static/logo.png" mode=""></image>
								<view>
									<view>{{item2.name}}</view>
									<view class="describe">月售{{item2.salesVolume}} 赞{{item2.praise}}</view>
									<view class="money">{{item2.Price}}元</view>
									<view class="money" v-if="norms(item2.norms)"> -->
									<!-- 选规格 -->
										<!-- <uni-icons type="contact" size="30" @tap="jia2(item2)"></uni-icons> -->
										<!-- <button type="default" @tap="jia2(item2)">1</button> -->
									<!-- </view> -->
									<!-- 直接添加 -->
				<!-- 					<view v-if="!norms(item2.norms)">
										<uni-icons type="plusempty" size="30" @tap="jia1(item2)"></uni-icons>
										<button type="default" @tap="jian1(item2)">{{item2.count}}</button>
									</view>
									
								</view>
							</view>
						</view>
						<view class="fill-last" :style="{ 'height':fillHeight + 'px' }"></view>
					</scroll-view>
				</view>
			</view>
		</view> -->
	<!-- 订单区域 -->
		<!-- <view  v-show="yin">
			<view>{{this.$store.state.dingdan.name}}</view>	
			<view v-for="(n,index) in this.$store.state.dingdan.norms" :key="index">
				{{n.name}}
				<view v-for="(c,index) in n.shuju" :key="index">
					<button type="default" :class="{ctive:dite(n.name,c.n_name)}" @tap="dis(n.name,index,c.n_name)">
					{{c.n_name}}
					</button>
				</view>
			</view>
			
			<view v-for="(d,index) in this.guigee" :key="index">
				<view v-for="(v,index) in d" :key="index">
					{{v}}
				</view>
			</view>
			{{number}}
			<uni-icons type="plusempty" size="30" @tap="jiaru"></uni-icons>
		</view> -->
		<!-- 购物车面板 -->
		<!-- <view class="bottom-panel"> -->
			<!-- 购物车栏目 -->
			<!-- <view style="background-color: #ffaa00;text-align: center;font-size: 28rpx;padding: 10px 0;color: #fff;">
				<view class="gouwu">  
				<view @tap="qing">
					<text>清空</text>
					<uni-icons type="trash-filled" ></uni-icons>
				</view>
					<view class="gouwuche">
						<view class="di"  v-for="(n,index) in this.gouwuche[this.xinxi.name]" :key="index">
							<view class="han1">
								<image :src="n.img" mode=""></image>
							</view>
							<view class="han2">
								<view class="han2_1">
									<view class="han2_1_1">
										<view>
										{{n.name}}
										</view>
										<view >
											<text  v-for="(m,index) in n.norms" :key="index">
												<text v-for="(i,index) in m" :key="index">
													{{i}}
												</text>
											</text>
										</view>
										<view>
											{{n.Price}}
										</view>
									</view>
									<view class="han2_1_2">
										<view>
											共{{n.Zprice}}元
										</view> 
										<view class="icon"> 
											<view>
												<uni-icons type="back" @tap="ujia1(n)" size="30"></uni-icons>
											</view>
										
											{{n.number}}
											<view>
												<uni-icons type="forward" @tap="ujian1(n)" size="30"></uni-icons>
											</view>
										</view>
									
									</view>
								</view>
								<view class="han2_2"></view>
							</view>
						</view>
					</view>
					{{marax}}
				</view>
			</view>
		</view> -->
	</view>
	
</template>

<script>
	import uniIcons from "@/components/uni-icons/uni-icons.vue"
	import uniSegmentedControl from "@/components/uni-segmented-control/uni-segmented-control.vue"
	export default {
		data() {
			return {
				dheight:0,
				//该类商品数量
					number:0,
				// 总价格
				marax:0,
				dingdan:false,
				 current:0,
				// 购物车信息
				gouwuche:{},
				// 所有商品信息
				shangpin:[],
				// 当前商品信息
				sp:{
					name:'',
					number:0
				},
				// 记录什么时候添加新菜
				ke:0,
				guigee:{},
				name:null,
				guig:null,
				jiage:null,
				yin:false,
				toView:'',
				items: ['点餐','评价','商家'],
				a1:[
					{
					dishes:'推荐',
					foot:[
						{
							// 商品名
							name:'半只特酥烤鸭',
							// 商品图
							img:'/static/logo.png',
							// 商品介绍
							jie:'这是半只烤鸭',
							// 商品销量
							salesVolume:'9000+',
							// 商品点赞
							praise:'1008',
							// 商品价格
							Price:'24',
							// 客人点餐数量
							count:0,
							//商品一次点餐参数
							number:1
						},
					{
						name:'烤鸭',
						img:'/static/logo.png',
						jie:'这是烤鸭',
						salesVolume:'9000+',
						praise:'1008',
						Price:'48',
						//商品规格
						norms:[
										{
										name:'规格',
										shuju:[
											{
												n_name:'一只(500g)',
												// 客人点餐数量
												count:0,
												//商品一次点餐参数
												number:1
											},{
												n_name:'两只',
												// 客人点餐数量
												count:0,
												//商品一次点餐参数
												number:2
											},{
												n_name:'三只',
												// 客人点餐数量
												count:0,
												//商品一次点餐参数
												number:3
											},{
												n_name:'四只',
												// 客人点餐数量
												count:0,
												//商品一次点餐参数
												number:4
											}
										]
										},
										{
											name:'口味',
											shuju:[{
												n_name:'酥脆',
												// 客人点餐数量
												count:0,
												//商品一次点餐参数
												number:1
											},{
												n_name:'特酥',
												// 客人点餐数量
												count:0,
												//商品一次点餐参数
												number:2
											}]
										}
									]
					},
						{
							name:'烤鸭肠(10起)',
							jie:'这是鸭肠',
							salesVolume:'90+',
							praise:'18',
							Price:'0.48',
							norms:[
											{
											name:'规格',
											shuju:['10份'],
											count:10
											},
											{
												name:'口味',
												shuju:['微辣','特辣'],
											}
										]
						},
						{
							name:'麻辣炒虾尾',
							jie:'张老四麻辣炒虾尾历经20年对配方的调整，从千余种辣椒中选取3种进行搭配秘制，充分释放辣椒的香、辣、色等特性！本菜品限时订购，起订50个，欢迎新老客户前来品购。',
							salesVolume:'980+',
							praise:'108',
							Price:'88',
							norms:[
										{
										name:'规格',
										shuju:['1份'],
										count:1
										},
										{
											name:'口味',
											shuju:['微辣','特辣'],
										}
									]
						}
						]
					},
					{
						dishes:'折扣',
						foot:[
						{
							name:'烤鸭肠(40起)',
							salesVolume:'9000+',
							praise:'1008',
							Price:'0.48',
							norms:[	{
								n_name:'微辣',
								count:0
								},{
									n_name:'特辣',
										count:0
								}]
						},
						{
							name:'烤鸭肠(40起)',
							salesVolume:'9000+',
							praise:'1008',
							Price:'0.48',
							
							norms:[	{
								n_name:'微辣',
								count:0
								},{
									n_name:'特辣',
										count:0
								}]
						},
						{
							name:'烤鸭肠(40起)',
							salesVolume:'9000+',
							praise:'1008',
							Price:'0.48',
							norms:[	{
								n_name:'微辣',
								count:0
								},{
									n_name:'特辣',
										count:0
								}]
						}
						]
					},
					{
						dishes:'秘制虾尾',
						foot:[
						{
							name:'烤鸭肠(40起)',
							salesVolume:'9000+',
							praise:'1008',
							Price:'0.48',
							norms:[	{
								n_name:'微辣',
								count:0
								},{
									n_name:'特辣',
										count:0
								}]
						},
						{
							name:'烤鸭肠(40起)',
							salesVolume:'9000+',
							praise:'1008',
							Price:'0.48',
							norms:[	{
								n_name:'微辣',
								count:0
								},{
									n_name:'特辣',
										count:0
								}]
						},
						{
							name:'烤鸭肠(40起)',
							salesVolume:'9000+',
							praise:'1008',
							Price:'0.48',
							norms:[	{
								n_name:'微辣',
								count:0
								},{
									n_name:'特辣',
										count:0
								}]
						},
						{
							name:'烤鸭肠(40起)',
							salesVolume:'9000+',
							praise:'1008',
							Price:'0.48',
							norms:[	{
								n_name:'微辣',
								count:0
								},{
									n_name:'特辣',
										count:0
								}]
						},
						{
							name:'烤鸭肠(40起)',
							salesVolume:'9000+',
							praise:'1008',
							Price:'0.48',
							norms:[	{
								n_name:'微辣',
								count:0
								},{
									n_name:'特辣',
										count:0
								}]
						},
						{
							name:'烤鸭肠(40起)',
							salesVolume:'9000+',
							praise:'1008',
							Price:'0.48',
							norms:[	{
								n_name:'微辣',
								count:0
								},{
									n_name:'特辣',
										count:0
								}]
						},
						{
							name:'烤鸭肠(40起)',
							salesVolume:'9000+',
							praise:'1008',
							Price:'0.48',
						norms:[	{
							n_name:'微辣',
							count:0
							},{
								n_name:'特辣',
									count:0
							}]
						}
						]
					},
				],
				current: 0,
				// 商家信息
				xinxi:null,
				scrollHeight:400,
				scrollTopSize:0,
				fillHeight:0,	// 填充高度，用于最后一项低于滚动区域时使用
				leftArray:[],
				mainArray:[],
				topArr:[],
				leftIndex:0,
				scrollInto:''
			}
		},
		components: {
			uniIcons,
			uniSegmentedControl
		  },
		computed:{
			/* 计算左侧滚动位置定位 */
			leftIntoView(){
				return `left-${this.leftIndex > 3 ? (this.leftIndex-3):0}`;
			}
		},
		onLoad() {	
		
			if(this.$store.state.dingdan == null){
				this.$store.commit("dingdan",{dingdan:{}})
			}
			this.xinxi= this.$store.state.shangjia
			console.log(this.$store.state.gouwuche[this.xinxi.name])
				if( this.$store.state.gouwuche[this.xinxi.name] == undefined){
					this.gouwuche[this.xinxi.name] = undefined
				}else{
					this.gouwuche[this.xinxi.name] = this.$store.state.gouwuche[this.xinxi.name]
				
			for(let m of this.gouwuche[this.xinxi.name]){
				console.log(m)
				for(let i of this.a1){
					for(let n of i.foot){
						if(n.norms !== undefined){
						if(n.name === m.name & n.img === m.img){
								n.norms[0].count = m.number
							}
						}else{
							if(n.name === m.name & n.img === m.img){
									n.count = m.number
								}
						}
					}
				}
			}
			}
			// this.$store.commit("gouwuche")
			},
		mounted(){
			console.log(this.a1)
			/* 等待DOM挂载完成 */
			this.$nextTick(()=>{
				/* 在非H5平台，nextTick回调后有概率获取到错误的元素高度，则添加200ms的延迟来减少BUG的产生 */
				setTimeout(()=>{
					/* 等待滚动区域初始化完成 */
					this.initScrollView().then(()=>{
						/* 获取列表数据，你的代码从此处开始 */
						this.getListData();
					})
				},200);
			})
		},
		onUnload(){
				this.$store.commit("sj0")
		},
		methods: {
			d1(){
				console.log('d1')
			},
			d2(){
				console.log('d2')
			},
			// s是否显示加入购物车这个按钮
			jiagou(count){
				if(count<=0){
					return true
				}else{
					return false
				}
			},
			// 切换分段器
			   onClickItem(e) {
			            if (this.current !== e.currentIndex) {
			                this.current = e.currentIndex;
			            }
			        },
			ujia1(e){
				e.number+=1
				e.Zprice = e.number * e.Price
				this.max()
				this.num()
				this.duiqi()
				
			},
			ujian1(e){
				for(let [el, i] of this.gouwuche[this.xinxi.name].entries()){
						if(i.name === e.name& JSON.stringify(i.norms)  === JSON.stringify(e.norms)){
								if(i.number<=1){
									i.number=0
									this.gouwuche[this.xinxi.name].splice(el,1)
								}else{
										i.number-=1
										i.Zprice=i.Price*i.number
								}
							}
				}
				this.max()
				this.num()
				this.duiqi()
			},
			// 购物车与表单数据对齐
			duiqi(){
				for(let m of this.gouwuche[this.xinxi.name]){
				console.log(m)
				for(let i of this.a1){
					for(let n of i.foot){
						if(n.norms !== undefined){
							// console.log(n.name)
							// console.log(m.name)
							// console.log(n.img)
							// console.log(m.img)
						if(n.name === m.name & n.img === m.img){
							console.log(n)
								console.log(n.norms[0])
								n.norms[0].count = m.number
							}
						}else{
							if(n.name === m.name & n.img === m.img){
								console.log(n)
									n.count = m.number
								}
						}
						
						
					
					}
				}
			}
				// this.$forceUpdate()
			},
			// 当前选择类型商品购物车中有多少
			num(){
				for(let [a,b] of this.$store.state.gouwuche[this.xinxi.name].entries()){
					if(JSON.stringify(b.norms) === JSON.stringify(this.guigee)){
						this.number= String(b.number)
						break;
					}else{
						this.number = 0
					}
				}
			},
			// 类型是否选中
			dite(e1,e2){
					if(this.guigee[e1] == undefined){
						return false
					}else{
						if(String( this.guigee[e1][0]) == e2){
						return true
						}else{
							return false
						}
					}
				
					
			},
			//切换规格数据
			dis(n,inde,c){
					let arr = []
					arr=[]
					arr.push({n_name:c})
					delete(this.guigee[n],0)
					 this.$set(this.guigee[n],0,c)
					this.$forceUpdate()
					console.log(this.guigee)
					 this.num()
					 	console.log(this.guigee)
			},
			max(){
			
				if( this.gouwuche[this.xinxi.name] == undefined){
					this.marax = 0
				}else{	
					let arr = []
					for(let a of this.gouwuche[this.xinxi.name]){
						arr.push(a.Zprice)
					}
					if(arr[0] == undefined){
						this.marax = 0
					}else{
						const reducer = (accumulator, currentValue) => accumulator + currentValue;
						this.marax = arr.reduce(reducer)
					}
					
				}
					console.log(this.marax)
			},
		 // 加减数量	
		  jia1(e){
		 			this.guige1(e)
		 },
		 jia2(e){
			this.guige2(e)
		 },
	
			// 清空购物车
			qing(){
				console.log('触发qing')
					console.log(this.gouwuche[this.xinxi.name])
				this.$store.commit("sj0")
				this.gouwuche[this.xinxi.name]=undefined
				this.$store.commit("gouwuche",{
												gouwuche:this.gouwuche[this.xinxi.name],
												name:this.xinxi.name,
												})
											sessionStorage.setItem("state",JSON.stringify(this.$store.state));
				for(let i of this.a1){
					for(let n of i.foot){
						if(n.count == undefined){
								for(let c of n.norms){
									console.log(c.count)
							c.count = 0
						}
						}else{
							n.count = 0
						}
					
					}
				}
				this.maraxe()
			},
			norms(e){
				if(e){
					return true
				}else{
					return false
				}
			},

			jiaru(e){
				this.yin = !this.yin
				this.sp.name = this.$store.state.dingdan.name
				this.sp.img= this.$store.state.dingdan.img
				this.sp.Price =  this.$store.state.dingdan.Price
				this.sp.number = 0
				this.sp.norms = this.guigee
				// 添加到购物车
				if(this.gouwuche[this.xinxi.name] == undefined){
						this.gouwuche[this.xinxi.name] = []
				}
				if(this.gouwuche[this.xinxi.name][0] == undefined){
					// if(this.$store.state.sj<0){
					// 	this.$store.state.sj = 0
					// }
						this.sp.number=1
						this.sp.Zprice=this.sp.Price*this.sp.number	
						this.gouwuche[this.xinxi.name].push( JSON.parse(JSON.stringify(this.sp) ) )
						this.sp.name = '1'
				}else{
							for(let i of this.gouwuche[this.xinxi.name]){
						if(i.name === this.sp.name& JSON.stringify(i.norms)  === JSON.stringify(this.sp.norms)){
							i.number+=1
								i.Zprice=i.Price*i.number
							this.ke =0
							break;
						}else{
							this.ke += 1;
							if(this.ke === this.gouwuche[this.xinxi.name].length){
							this.gouwuche[this.xinxi.name].push(JSON.parse(JSON.stringify(this.sp) ))
							this.ke =0
						}
						}
				}
				}
				this.$store.commit("gouwuche",{
												gouwuche:this.gouwuche[this.xinxi.name],
												name:this.xinxi.name
												})
												console.log(this.xinxi)
												console.log(this.gouwuche)
												console.log(this.$store.state)
				sessionStorage.setItem("state",JSON.stringify(this.$store.state));
				this.sp = {}
				this.guigee = {}
				this.max()
				this.num()
				this.duiqi()
			},
			jianshao(e){
				this.sp.name = e.name
				this.sp.Price =  e.Price
				this.sp.img = e.img
				console.log(this.sp)
				for(let [el, i] of this.gouwuche[this.xinxi.name].entries()){
						console.log(i)
						if(i.name === this.sp.name& i.Price === this.sp.Price & i.img === this.sp.img){
							console.log('ok')
							console.log(i.number)
								if(i.number<=1){
									i.number=0
									this.duiqi()
									this.gouwuche[this.xinxi.name].splice(el,1)
									console.log(i.number)
								}else{
									
										i.number-=1
										i.Zprice=i.Price*i.number
										this.duiqi()
								}
								break;
							}
						// }else{
						// 	this.ke += 1;
						// 	if(this.ke === this.gouwuche[this.xinxi.name].length){
						// 	this.gouwuche[this.xinxi.name].push(JSON.parse(JSON.stringify(this.sp) ))
						// 	this.ke =0
						// }
						// }
				}
				this.$store.commit("gouwuche",{
												gouwuche:this.gouwuche[this.xinxi.name],
												name:this.xinxi.name
												})
											this.sp = {}
											this.guigee = {}
											this.max()
			},
			guige1(e){
				console.log(e)
				this.yin = !this.yin
				this.$store.commit("dingdan",{dingdan:e})
				this.jiaru(e)
				
			},
			// 获取规格
			guige2(e){	
				this.$store.commit("dingdan",{dingdan:e})
				this.yin = !this.yin
				if(this.guigee == null){
					this.guigee = {}
				}e
				// 赋予guigee第一个值
					for(let [i,e] of this.$store.state.dingdan.norms.entries()){
						this.guigee[e.name]=[]
						this.guigee[e.name][0] = e.shuju[0].n_name
					}
					this.num()
			},
		
			/* 初始化滚动区域 */
			//整体高度减去顶部高度
			initScrollView(){
				
				return new Promise((resolve, reject)=>{
					let view2 = uni.createSelectorQuery().select('.conten_con');
					let view3 = uni.createSelectorQuery().select('.content');
					let v1,v2,v3=null
					//整体高度
					// let that = this
					// let v4=0
					// 	let view4 = uni.createSelectorQuery().select('.guige');
					// 	view4.boundingClientRect(res => {
					// 			v4 = res.height
					// 	}).exec();
					// 	uni.getSystemInfo({
					// 	    success: function (res) {
					// 		 that.dheight = res. screenHeight/2 - v4/2
							
					// 	    }
					// 	});
					uni.getSystemInfo({
					    success: function (res) {
					       v1 = res.screenHeight
					    }
					});
					//顶部高度
					view2.boundingClientRect(res => {
							v2 = res.height
					}).exec();
					view3.boundingClientRect(res => {
							v3 = res.height
					}).exec();
					resolve([v1,v2,v3])
				}).then((v1)=>{
					
					this.scrollHeight =v1.reduce(function(total, num){
						 return total - num;
					});
				
				})
			},
			/* 获取列表数据 */
			getListData(){
			
					// DOM 挂载后 再调用 getElementTop 获取高度的方法。
					this.$nextTick(()=>{
						this.getElementTop();
					});
					
				// });
			},
			/* 获取元素顶部信息 */
			getElementTop(){
				new Promise((resolve,reject)=>{
					let view = uni.createSelectorQuery().selectAll('.main-item');
					view.boundingClientRect(data => {
						resolve(data);
					}).exec();
						
				}).then((res)=>{
					let topArr = res.map((item)=>{
						return item.top - this.scrollTopSize;	/* 减去滚动容器距离顶部的距离 */
					});
					this.topArr = topArr;
					
					/* 获取最后一项的高度，设置填充高度。判断和填充时做了 +-20 的操作，是为了滚动时更好的定位 */
					let last = res[res.length-1].height;			
					if(last - 20 < this.scrollHeight){
						this.fillHeight = this.scrollHeight - last + 20;
					}
				});
			},
			/* 主区域滚动监听 */
			mainScroll(e){
				let top =e.detail.scrollTop;
				let index=0;
				/* 查找当前滚动距离 */
				for(let i = (this.topArr.length-1);i>=0;i--){
					/* 在部分安卓设备上，因手机逻辑分辨率与rpx单位计算不是整数，滚动距离与有误差，增加2px来完善该问题 */
					if((top+2)>=this.topArr[i]){
						index = i;
						break;
					}
				}
				this.leftIndex=(index < 0 ? 0: index);
			},
			/* 左侧导航点击 */
			leftTap(e){
				let index=e.currentTarget.dataset.index;
				this.scrollInto=`item-${index}`;
			}
		}
	}
</script>

<style lang="scss">
	[v-cloak]{
	    display: none;
	}
	@import url("../index/index.css");
	.ctive{
		      background-color: red!important;
	}
	.sort{
		border: none;
	}
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

/* 容器 */
.container{
	display: flex;
	flex-direction: column;
	flex-wrap: nowrap;
	justify-content: flex-start;
	align-items: flex-start;
	align-content: flex-start;
	
	&>view{
		width: 100%;
	}
	
	.scroll-panel{
		flex-grow: 1;
		overflow: hidden;
	}
	
	.bottom-panel{
		padding-bottom: 0;
		padding-bottom: constant(safe-area-inset-bottom);  
		padding-bottom: env(safe-area-inset-bottom);		
	}
}
	
	
.list-box{
	display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: flex-start;
    align-items: flex-start;
    align-content: flex-start;
	font-size: 28rpx;
	
	.left{
		width: 200rpx;
		background-color: #f6f6f6;
		line-height: 80rpx;
		box-sizing: border-box;
		font-size: 32rpx;
		
		.item{
			padding-left: 20rpx;
			position: relative;
			&:not(:first-child) {
				margin-top: 1px;
			
				&::after {
					content: '';
					display: block;
					height: 0;
					border-top: #d6d6d6 solid 1px;
					width: 620upx;
					position: absolute;
					top: -1px;
					right: 0;
					transform:scaleY(0.5);	/* 1px像素 */
				}
			}
			
			&.active{
				color: #42b983;
				background-color: #fff;
			}
		}
		
		.fill-last{
			height: 0;
			width: 100%;
			background: none;
		}
	}
	.main{
		background-color: #fff;
		padding-left: 20rpx;
		width: 0;
		flex-grow: 1;
		box-sizing: border-box;
		
		
		
		.title{
			line-height: 64rpx;
			font-size: 24rpx;
			font-weight: bold;
			color: #666;
			background-color: #fff;
			position: sticky;
			top: 0;
			z-index: 19;
		}
		
		.item{
			padding-bottom: 10rpx;
			border-bottom: #eee solid 1px;
		}
		.zhong{
			position: absolute;
			margin: auto;
			top: 0;
			left: 0;
			right: 0;
			bottom: 0;
		}
		.goods{
			display: flex;
			flex-direction: row;
			flex-wrap: nowrap;
			justify-content: flex-start;
			align-items: center;
			align-content: center;
			margin-bottom: 10rpx;
			
			&>image{
				width: 120rpx;
				height: 120rpx;
				margin-right: 16rpx;
				margin-left: 2px;
			}
			
			.describe{
				font-size: 24rpx;
				color: #999;
			}
			
			.money{
				font-size: 24rpx;
				color: #efba21;
			}
		}
	}
}
.uni-radio-input{display: none!important;}
</style>