//地图容器
var chart = echarts.init(document.getElementById('map'));
//34个省、市、自治区的名字拼音映射数组
var provinces = {
    //23个省
    "台湾": "taiwan",
    "河北": "hebei",
    "山西": "shanxi",
    "辽宁": "liaoning",
    "吉林": "jilin",
    "黑龙江": "heilongjiang",
    "江苏": "jiangsu",
    "浙江": "zhejiang",
    "安徽": "anhui",
    "福建": "fujian",
    "江西": "jiangxi",
    "山东": "shandong",
    "河南": "henan",
    "湖北": "hubei",
    "湖南": "hunan",
    "广东": "guangdong",
    "海南": "hainan",
    "四川": "sichuan",
    "贵州": "guizhou",
    "云南": "yunnan",
    "陕西": "shanxi1",
    "甘肃": "gansu",
    "青海": "qinghai",
    //5个自治区
    "新疆": "xinjiang",
    "广西": "guangxi",
    "内蒙古": "neimenggu",
    "宁夏": "ningxia",
    "西藏": "xizang",
    //4个直辖市
    "北京": "beijing",
    "天津": "tianjin",
    "上海": "shanghai",
    "重庆": "chongqing",
    //2个特别行政区
    "香港": "xianggang",
    "澳门": "aomen"
};

//直辖市和特别行政区-只有二级地图，没有三级地图
var special = ["北京","天津","上海","重庆","香港","澳门"];
var mapdata = [];
//绘制全国地图
$.getJSON('../static/map/china.json', function(data){
	d = [];
	for( var i=0;i<data.features.length;i++ )
	{
		d.push({
			name:data.features[i].properties.name,
            value: data.features[i].properties.value
            // value:data.features[i].properties.value;
		})
	}
	mapdata = d;
	//注册地图
	echarts.registerMap('China', data);
	//绘制地图
	renderMap('china',d);
});

//地图点击事件
chart.on('click', function (params) {
    // alert(params.value);  弹窗
	console.log(params);
	if( params.name in provinces ){
		//如果点击的是34个省、市、自治区，绘制选中地区的二级地图
        //对应地getjson省份的信息
		$.getJSON('../static/map/province/'+ provinces[params.name] +'.json', function(data){
			echarts.registerMap( params.name, data);
			var d = [];
			for( var i=0;i<data.features.length;i++ ){
				d.push({
					name:data.features[i].properties.name,
                    value: data.features[i].properties.value
                    // value2:data.features[i].properties.value2

				})
			}
			renderMap(params.name,d);
		});
	// }else if( params.seriesName in provinces ){
	// 	//如果是【直辖市/特别行政区】只有二级下钻，返回China的第一个地图
	// 	if(  special.indexOf( params.seriesName ) >=0  ){
	// 		renderMap('china',mapdata);
	// 	}else{
	// 		//显示县级地图，进入city的地图
	// 		$.getJSON('../static/map/city/'+ cityMap[params.name] +'.json', function(data){
	// 			echarts.registerMap( params.name, data);
	// 			var d = [];
	// 			for( var i=0;i<data.features.length;i++ ){
	// 				d.push({
	// 					name:data.features[i].properties.name,
    //                     value: data.features[i].properties.value
	// 				})
	// 			}
	// 			renderMap(params.name,d);
	// 		});
	// 	}
		//返回China的地图
	}else{
		renderMap('china',mapdata);
	}
});

//初始化绘制全国地图配置
var option_map = {
	backgroundColor: 'rgba(128,128,128,0)', // 背景颜色透明

    title : {
        text: '银行客户规模',
        // link:'http://www.ldsun.com',
        left: 'center',  // 标题居中
        textStyle: {
                        color: '#fff'
                    },
    },
    tooltip: {
        trigger: 'item',
        formatter: '{b}'   // 鼠标滑过的title
    },
    animationDuration:1000,
	animationEasing:'cubicOut',
	animationDurationUpdate:1000
     
};
function renderMap(map,data){
    option_map.tooltip= {
        trigger: "item"
    },
    option_map.visualMap=

        {
            left: 'left',
            top: "top",
            show: true, //是否显示 visualMap-continuous 组件。如果设置为 false，不会显示，但是数据映射的功能还存在
            type: 'piecewise', // 定义为分段型 visualMap
            splitNumber: 5, //对于连续型数据，自动平均切分成几段。默认为5段
            pieces: [ //自定义『分段式视觉映射组件（visualMapPiecewise）』的每一段的范围，以及每一段的文字，以及每一段的特别的样式
                {min: 901, max: 1500,  "color": '#ff8302'},
                {min: 301, max: 900,  "color": '#ffac11'},
                {min: 101, max: 300,  "color": '#ffd722'},///"label": "C",
                {min: 0, max: 100,  "color": '#fffb6c'}
            ],
              textStyle: {
                        color: '#fff'
                    },
        },
    option_map.series = [
		{
            name: map,
            type: 'map',
            mapType: map,
            roam: false,
            nameMap:{
			    'China':'中国'
			},
            label: {
	            normal:{
					show:false,
					textStyle:{
						color:'#000000', // 地图上的字体颜色
						fontSize:12   // 地图上的字体大小
					}
	            },
	            emphasis: {
	                show: true,
	                textStyle:{
						color:'white', // 选中状态
						fontSize:12
					}
	            }
	        },
	        itemStyle: {
	            normal: {
	                areaColor: '#323c48',  // 没滑过颜色
	                borderColor: 'dodgerblue' // 模块边线颜色
	            },
	            emphasis: {
	                areaColor: 'darkorange'  // 鼠标滑过模块颜色
	            }
	        },
            data:data
        }


    ];
    //渲染地图
    chart.setOption(option_map);
    tools.loopShowTooltip(chart, option_map, {
    loopSeries: true
  });
}