Vue.component("my-component",{
	template:`
		<ul class="ul">
		<li><a href="#">推荐</a></li>
		<li><a href="#">视频</a></li>
		<li><a href="#">热点</a></li>
		<li><a href="#">娱乐</a></li>
		<li><a href="#">时尚</a></li>
		<li><a href="#">+</a></li>
	</ul>
	`
})

Vue.component("my-con",{
	template:
	`
	<div class="div">
		<img src="images/1_03.jpg">
		<input type="text">
		<input type="submit" value="百度一下">
	</div>
	`
})
Vue.component("my-ghs",{
	props:["imgsrc","f"],
	template:`
	<li>
	<img :src="imgsrc" :alt="imgsrc">
		<h4>{{f}}</h4>
	</li>
`
})
Vue.component("fag",{
	props:["title","s","time","ims","top","a","q","z","x","v","t","show","seen"],
	template:`
		<div class="dv">
		<div class="ee">
			<h1>{{title}}</h1>
			<span>{{s}}</span>
			<span>{{time}}</span>
			<a href="#" v-if="show">{{top}}</a>
			<span>{{t}}</span>
			</div>
			<div class="dd">
			<h1>{{a}}</h1>
			<img :src="ims">
			<span>{{q}}</span>
			<span>{{z}}</span>
			<a href="#" v-if="seen">{{x}}</a>
			<span>{{v}}</span>
			</div>
		</div>

	`
})
Vue.component("hg",{
	template:`
		<div>
		<ul>
			<li><img src="images/16_48.jpg" alt="">
			<span>正在加载</span>
			</li>
			<li><img src="images/17_52.jpg" alt="">
			<span>用户体验</span>
			</li>
		</ul>
		<p>使用百度前必读Baidu 京ICP证030173号</p>
		<p><img src="images/18_56.jpg" alt="">京公网安备11000002000001号</p>
	</div>
	`
})
new Vue({
	el:"#app",
	data:{
		lists:[
			{imgsrc:"images/2_07.jpg",f:"关注"},
			{imgsrc:"images/3_10.jpg",f:"新闻"},
			{imgsrc:"images/4_12.jpg",f:"小说"},
			{imgsrc:"images/5_14.jpg",f:"视频"},
			{imgsrc:"images/6_17.jpg",f:"糯米"},
			{imgsrc:"images/8_10.jpg",f:"地图"}
		],
		fsl:[
			{title:"习近平用这5句话介绍中国“新时代”",s:"央广网",time:"11-19",top:"置顶",a:"农村大集鲫鱼鲤鱼铺满地，鱼的来源让人太生气，最好别吃",ims:"images/10_32.jpg",q:"河北乡土",z:"11-19",x:"图集",v:"打开手机百度",show:true,seen:false},
			{title:"女人情到深处时，才会这样称呼你，你可曾被如此称呼过",s:"宇宙用户精选",time:"11-19",top:"图集",t:"打开手机百度",a:"超神学院：曾经的雄兵终于集合了，真是不容易啊！",ims:"images/11_35.jpg",q:"透明的车玻璃",z:"11-19",v:"打开手机百度",show:true,seen:false},
			{title:"烤鱼店生意红火 秘方：用漏斗过滤剩菜后的口水油",s:"南方都市报",time:"07:27",top:"热点",a:"刘鑫称她也不记得当时有没有反锁门，现在是百口莫辩解释不清了",ims:"images/12_37.jpg",q:"娱七杂八话天下",z:"11-19",v:"打开手机百度",show:true,seen:false},
			{title:"结婚70周年!英国女王庆祝白金婚 王室发布合影",s:"新浪娱乐",time:"11-19",a:"女兵在操作时想上厕所怎么办，原来还有这种操作",q:"军人魂",z:"11-18",show:false,seen:false},
			{title:"专家发现：女人有没有生过孩子，看下面就知道，非常“与众不同”",s:"只要你愿意等",time:"11-19",a:"日本女星Shinozaki沙滩游玩，太漂亮了",ims:"images/13_39.jpg",q:"精选影片",z:"11-17",x:"图集",v:"打开手机百度"},
			{title:"农村孤寡老人没钱装暖气，施工人员牵走他家羊炖了，还拆掉壁挂炉",s:"闻舞视界",time:"11-19",top:"图集",t:"打开手机百度",a:"马未都：我为什么不佩戴文玩，说出来你们不要觉得恶心",ims:"images/14_41.jpg",q:"百家人和文",z:"11-18",v:"打开手机百度",show:true,seen:false},
			{title:"红色越野车正开走 警察突然瞄见副驾驶把手上有手铐",s:"网易新闻",time:"11-19",top:"热点",a:"泰版《命中注定我爱你》最终帕乌面临死亡，妮子应该不会难受吧",ims:"images/15_43.jpg",q:"军旅中的生涯",z:"11-18",v:"打开手机百度",show:true,seen:false},
			{title:"中国造出“地表最强”两栖战车 多项性能居世界第一",s:"新华网",time:"11-19",a:"徐州下雪了，今夜淮北地区有雨夹雪",q:"东方头条",z:"11-19",show:false,seen:false},	
			{title:"成都10岁男孩在家上学：做德语主播 写万字英文小说",s:"凤凰新闻",time:"11-19",a:"潘玮柏在访谈现场被逼问感情生活 他是这样回答吴昕知道吗",ims:"images/16_45.jpg",q:"楚秀网综合",z:"11-19",v:"打开手机百度",show:false,seen:false},
			{title:"观众席有人挂出“藏独”旗蓄意挑衅 中国球员在德退场抗议",s:"网易新闻",time:"00.31",show:false,seen:false}
		]
	}
})