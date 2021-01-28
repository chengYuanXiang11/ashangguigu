<script>
export default {
	onLaunch: function() {
		window.addEventListener('beforeunload', ()=>{
							console.log('1')
							sessionStorage.setItem('state', JSON.stringify(this.$store.state))
						})
	},
	onShow: function() {
		console.log('App Show');
	},
	onHide: function() {
		console.log('App Hide');
	}

	      
	        
};
</script>

<style>
	    /* ::-webkit-scrollbar {
	        display: none;  
	        width: 0 !important;  
	        height: 0 !important;  
	        -webkit-appearance: none;  
	        background: transparent;  
	    } */
/* 解决头条小程序组件内引入字体不生效的问题 */
/* #ifdef MP-TOUTIAO */
@font-face {
	font-family: uniicons;
	src: url('/static/uni.ttf');
}
/* #endif */
</style>
