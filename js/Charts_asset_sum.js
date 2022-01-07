$(function (){
    var myChart1 = echarts.init(document.getElementById('asset_1'));
    option = {
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'cross',
                crossStyle: {
                    color: '#ffffff'
                }
            }
        },
        legend: {
            textStyle: {fontsize:18, color:'#ffffff'},
            data: ['财务-资产(万)' , '增长率(%)']
        },
        xAxis: [
            {
                type: 'category',
                data: ['1月', '2月', '3月', '4月', '5月','6月'],
                axisPointer: {
                    type: 'shadow'
                },
                axisLabel:{
                    textStyle: {fontsize:18, color:'#ffffff'}
                },
                axisTick: {
                    show: false
                },
                splitLine: {
                    show:false
                }
            }
        ],
        yAxis: [
            {
                type: 'value',
                name: '财务-资产(万)',
                min: 0,
                max: 120,
                splitNumber : 5,
                nameTextStyle: {
                    color: 'rgba(255,255,255,0.5)',
                    fontFamily: 'Source Han Sans CN', // 字体
                    fontSize: 12, // 大小
                    // padding: [0, 0, 20, 0]
                },
                axisLabel: {
                    textStyle: {fontsize:18, color:'#ffffff'},
                    formatter: '{value}'
                },
                axisTick: {
                    show: false
                },
                splitLine: {
                    show:false
                }
            },
            {
                type: 'value',
                name: '增长率(%)',
                min: -20,
                max: 12,
                splitNumber : 5,
                nameTextStyle: {
                    color: 'rgba(255,255,255,0.5)',
                    fontFamily: 'Source Han Sans CN', // 字体
                    fontSize: 12, // 大小
                    // padding: [0, 0, 20, 0]
                },
                axisLabel: {
                    textStyle: {fontsize:5, color:'#ffffff'},
                    formatter: '{value}%'
                },
                axisTick: {
                    show: false
                },
                splitLine: {
                    show:false
                }
            }
        ],
        series: [
            {
                name: '财务-资产(万)',
                // color: '#ff8302',
                type: 'bar',
                barWidth:'50%',
                data: [
                    60.67,67.41,69.50,70.99,74.73,78.66
                ],
                itemStyle: {
                    normal: {
                        label: {
                            show: true,		//开启显示
                            position: 'top',	//在上方显示
                            textStyle: {	    //数值样式
                                color: 'white',
                                fontSize: 16
                            }
                        },
                        barBorderRadius: 25,
                            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                            {
                                offset: 0,
                                color: '#fccb05'
                            },
                            {
                                offset: 1,
                                color: '#f5804d'
                            }
                        ]),
                    }
                }
            },
            {
                name: '增长率(%)',
                color: '#F6E331',
                type: 'line',
                smooth:true,//设置折线图平滑
                yAxisIndex: 1,
                data: [2.1, 11.11,3.09,6.2,7.53,5.26],
                itemStyle: {
                    normal: {
                        label: {
                            show: false,		//开启显示
                            position: 'top',	//在上方显示
                            textStyle: {	    //数值样式
                                color: 'white',
                                fontSize: 16
                            }
                        }
                    }
                }
            },
        ]
    };
    myChart1.setOption(option);
    tools.loopShowTooltip(myChart1, option, {
        loopSeries: true
    });
});


$(function (){
    var myChart2 = echarts.init(document.getElementById('asset_2'));
    option = {
        tooltip: {
            trigger: 'item'
        },
        legend: {
            top: '5%',
            left: 'center',
            textStyle: { color: "#ffffff" },
        },
        series: [
            {
                name: '资产',
                type: 'pie',
                radius: ['40%', '70%'],
                avoidLabelOverlap: false,
                label:{            //饼图图形上的文本标签
                    normal:{
                        show:true,
                        position:'inner', //标签的位置
                        textStyle : {
                            fontWeight : 300 ,
                            fontSize : 16    //文字的字体大小
                        },
                        formatter:'{d}%'
                    }
                },
                emphasis: {
                    label: {
                        show: false,
                        fontSize: '40',
                        fontWeight: 'bold',
                        color: "#ffac11"
                    }
                },
                labelLine: {
                    show: false
                },
                data: [
                    { value: 57, name: "发放贷款及垫款" },
                    { value: 22, name: "存放同业款项" },
                    { value: 10, name: "现金" },
                    { value: 6, name: "金融投资" },
                    { value: 5, name: "其他" }
                ],
                itemStyle: {
                    normal: {
                        label: {
                            show: true,		//开启显示
                            position: 'top',	//在上方显示
                            textStyle: {	    //数值样式
                                color: 'white',
                                fontSize: 16
                            }
                        }
                    }
                }
            }
        ]
    };
    myChart2.setOption(option);
    tools.loopShowTooltip(myChart2, option, {
        loopSeries: true
    });
});

// ----------------------

$(function (){
    var myChart3 = echarts.init(document.getElementById('asset_3'));
    option = {
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'cross',
                crossStyle: {
                    color: '#ffffff'
                }
            }
        },
        legend: {
            textStyle: {fontsize:18, color:'#ffffff'},
            data: ['营业收入(万)' , '增长率(%)']
        },
        xAxis: [
            {
                type: 'category',
                data: ['1月', '2月', '3月', '4月', '2021.5', '6月'],
                axisPointer: {
                    type: 'shadow'
                },
                axisLabel:{
                    textStyle: {fontsize:18, color:'#ffffff'}
                },
                axisTick: {
                    show: false
                },
                splitLine: {
                    show:false
                }
            }
        ],
        yAxis: [
            {
                type: 'value',
                name: '营业收入(万)',
                min: 0,
                max: 2.5,
                splitNumber : 5,
                nameTextStyle: {
                    color: 'rgba(255,255,255,0.5)',
                    fontFamily: 'Source Han Sans CN', // 字体
                    fontSize: 12, // 大小
                    // padding: [0, 0, 20, 0]
                },
                axisLabel: {
                    textStyle: {fontsize:18, color:'#ffffff'},
                    formatter: '{value}'
                },
                axisTick: {
                    show: false
                },
                splitLine: {
                    show:false
                }
            },
            {
                type: 'value',
                name: '增长率(%)',
                min: -20,
                max: 10,
                splitNumber : 5,
                nameTextStyle: {
                    color: 'rgba(255,255,255,0.5)',
                    fontFamily: 'Source Han Sans CN', // 字体
                    fontSize: 12, // 大小
                    // padding: [0, 0, 20, 0]
                },
                axisLabel: {
                    textStyle: {fontsize:5, color:'#ffffff'},
                    formatter: '{value}%'
                },
                axisTick: {
                    show: false
                },
                splitLine: {
                    show:false
                }
            }
        ],
        series: [
            {
                name: '营业收入(万)',
                color: '#ff8302',
                type: 'bar',
                barWidth:'50%',
                data: [
                    1.78, 1.82, 1.89,2.08, 2.16, 2.23
                ],
                itemStyle: {
                    normal: {
                        label: {
                            show: true,		//开启显示
                            position: 'top',	//在上方显示
                            textStyle: {	    //数值样式
                                color: 'white',
                                fontSize: 16
                            }
                        },
                         barBorderRadius: 25,
                            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                            {
                                offset: 0,
                                color: '#fccb05'
                            },
                            {
                                offset: 1,
                                color: '#f5804d'
                            }
                        ]),
                    }

                }
            },
            {
                name: '增长率(%)',
                color: '#F6E331',
                type: 'line',
                smooth:true,//设置折线图平滑
                yAxisIndex: 1,
                data: [1.09, 2.04,4.17,9.89,4.17,3.09],
                itemStyle: {
                    normal: {
                        label: {
                            show: false,		//开启显示
                            position: 'top',	//在上方显示
                            textStyle: {	    //数值样式
                                color: 'white',
                                fontSize: 16
                            }
                        }
                    }
                }
            },
        ]
    };
    myChart3.setOption(option);
    tools.loopShowTooltip(myChart3, option, {
        loopSeries: true
    });
});

$(function (){
    var myChart4 = echarts.init(document.getElementById('asset_4'));
    option = {
        tooltip: {
            trigger: 'item'
        },
        legend: {
            top: '5%',
            left: 'center',
            textStyle: { color: "#ffffff" },
        },
        series: [
            {
                name: '营收来源(%)',
                type: 'pie',
                radius: ['40%', '70%'],
                avoidLabelOverlap: false,
                label:{            //饼图图形上的文本标签
                    normal:{
                        show:true,
                        position:'inner', //标签的位置
                        textStyle : {
                            fontWeight : 300 ,
                            fontSize : 16    //文字的字体大小
                        },
                        formatter:'{d}%'
                    }
                },
                emphasis: {
                    label: {
                        show: false,
                        fontSize: '40',
                        fontWeight: 'bold',
                        color: "#ffac11"
                    }
                },
                labelLine: {
                    show: false
                },
                data: [
                    { value: 57, name: '华南区' },
                    { value: 22, name: '华中区' },
                    { value: 21, name: '华北区' }
                ],
                itemStyle: {
                    normal: {
                        label: {
                            show: true,		//开启显示
                            position: 'top',	//在上方显示
                            textStyle: {	    //数值样式
                                color: 'white',
                                fontSize: 16
                            }
                        }
                    }
                }
            }
        ]
    };
    myChart4.setOption(option);
    tools.loopShowTooltip(myChart4, option, {
        loopSeries: true
    });
});

// ----------------------

$(function (){
    var myChart5 = echarts.init(document.getElementById('asset_5'));
    option = {
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'cross',
                crossStyle: {
                    color: '#ffffff'
                }
            }
        },
        legend: {
            textStyle: {fontsize:18, color:'#ffffff'},
            data: ['净利润(元)' , '增长率(%)']
        },
        xAxis: [
            {
                type: 'category',
                data: ['1月', '2月', '3月', '4月', '5月', '6月'],
                axisPointer: {
                    type: 'shadow'
                },
                axisLabel:{
                    textStyle: {fontsize:18, color:'#ffffff'}
                },
                axisTick: {
                    show: false
                },
                splitLine: {
                    show:false
                }
            }
        ],
        yAxis: [
            {
                type: 'value',
                name: '净利润(元)',
                min: 0,
                max: 8000,
                splitNumber : 5,
                nameTextStyle: {
                    color: 'rgba(255,255,255,0.5)',
                    fontFamily: 'Source Han Sans CN', // 字体
                    fontSize: 12, // 大小
                    // padding: [0, 0, 20, 0]
                },
                axisLabel: {
                    textStyle: {fontsize:18, color:'#ffffff'},
                    formatter: '{value}'
                },
                axisTick: {
                    show: false
                },
                splitLine: {
                    show:false
                }
            },
            {
                type: 'value',
                name: '增长率(%)',
                min: -25,
                max: 15,
                splitNumber : 5,
                nameTextStyle: {
                    color: 'rgba(255,255,255,0.5)',
                    fontFamily: 'Source Han Sans CN', // 字体
                    fontSize: 12, // 大小
                    // padding: [0, 0, 20, 0]
                },
                axisLabel: {
                    textStyle: {fontsize:5, color:'#ffffff'},
                    formatter: '{value}%'
                },
                axisTick: {
                    show: false
                },
                splitLine: {
                    show:false
                }
            }
        ],
        series: [
            {
                name: '净利润(元)',
                color: '#ff8302',
                type: 'bar',
                barWidth:'50%',
                data: [
                    5417,5527,5943,6391,6872,7389
                ],
                itemStyle: {
                    normal: {
                        label: {
                            show: true,		//开启显示
                            position: 'top',	//在上方显示
                            textStyle: {	    //数值样式
                                color: 'white',
                                fontSize: 16
                            }
                        },
                        barBorderRadius: 25,
                         color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                            {
                                offset: 0,
                                color: '#fccb05'
                            },
                            {
                                offset: 1,
                                color: '#f5804d'
                            }
                        ]),
                    }

                }

            },
            {
                name: '增长率(%)',
                color: '#F6E331',
                type: 'line',
                smooth:true,//设置折线图平滑
                yAxisIndex: 1,
                data: [1.5, 2.04,7.53,7.53,7.53,7.53],
                itemStyle: {
                    normal: {
                        label: {
                            show: false,		//开启显示
                            position: 'top',	//在上方显示
                            textStyle: {	    //数值样式
                                color: 'white',
                                fontSize: 16
                            }
                        }
                    }
                }
            },
        ]
    };
    myChart5.setOption(option);
    tools.loopShowTooltip(myChart5, option, {
        loopSeries: true
    });
});

$(function (){
    var myChart6 = echarts.init(document.getElementById('asset_6'));
    option = {
        tooltip: {
            trigger: 'item'
        },
        legend: {
            top: '5%',
            left: 'center',
            textStyle: { color: "#ffffff" },
        },
        series: [
            {
                name: '利润来源',
                type: 'pie',
                radius: ['40%', '70%'],
                avoidLabelOverlap: false,
                label:{            //饼图图形上的文本标签
                    normal:{
                        show:true,
                        position:'inner', //标签的位置
                        textStyle : {
                            fontWeight : 300 ,
                            fontSize : 16    //文字的字体大小
                        },
                        formatter:'{d}%'
                    }
                },
                emphasis: {
                    label: {
                        show: false,
                        fontSize: '40',
                        fontWeight: 'bold',
                        color: "#ffac11"
                    }
                },
                labelLine: {
                    show: false
                },
                data: [
                    { value: 52, name: '利息' },
                    { value: 34, name: '手续费及佣金' },
                    { value: 14, name: '其他' }
                ],
                itemStyle: {
                    normal: {
                        label: {
                            show: true,		//开启显示
                            position: 'top',	//在上方显示
                            textStyle: {	    //数值样式
                                color: 'white',
                                fontSize: 16
                            }
                        }
                    }
                }
            }
        ]
    };
    myChart6.setOption(option);
    tools.loopShowTooltip(myChart6, option, {
        loopSeries: true
    });
});

// ----------------------

$(function (){
    var myChart7 = echarts.init(document.getElementById('asset_7'));
    option = {
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'cross',
                crossStyle: {
                    color: '#ffffff'
                }
            }
        },
        legend: {
            textStyle: {fontsize:18, color:'#ffffff'},
            data: ['存贷比率(%)' , '不良率(%)']
        },
        xAxis: [
            {
                type: 'category',
                data: ['1月', '2月', '3月', '4月', '5月', '6月'],
                axisPointer: {
                    type: 'shadow'
                },
                axisLabel:{
                    textStyle: {fontsize:18, color:'#ffffff'}
                },
                axisTick: {
                    show: false
                },
                splitLine: {
                    show:false
                }
            }
        ],
        yAxis: [
            {
                type: 'value',
                name: '存贷比率(%)',
                min: 0.6,
                max: 1,
                splitNumber : 3,
                nameTextStyle: {
                    color: 'rgba(255,255,255,0.5)',
                    fontFamily: 'Source Han Sans CN', // 字体
                    fontSize: 12, // 大小
                    // padding: [0, 0, 20, 0]
                },
                axisLabel: {
                    textStyle: {fontsize:18, color:'#ffffff'},
                    formatter: '{value}'
                },
                axisTick: {
                    show: false
                },
                splitLine: {
                    show:false
                }
            },
            {
                type: 'value',
                name: '不良率(%)',
                min: 0.6,
                max: 1.5,
                splitNumber : 3,
                nameTextStyle: {
                    color: 'rgba(255,255,255,0.5)',
                    fontFamily: 'Source Han Sans CN', // 字体
                    fontSize: 12, // 大小
                    // padding: [0, 0, 20, 0]
                },
                axisLabel: {
                    textStyle: {fontsize:5, color:'#ffffff'},
                    formatter: '{value}'
                },
                axisTick: {
                    show: false
                },
                splitLine: {
                    show:false
                }
            }
        ],
        series: [
            {
                name: '存贷比率(%)',
                color: '#ff8302',
                type: 'line',
                barWidth:'50%',
                data: [
                    0.77,0.77,0.78,0.80,0.81,0.83
                ],
                itemStyle: {
                    normal: {
                        label: {
                            show: true,		//开启显示
                            position: 'top',	//在上方显示
                            textStyle: {	    //数值样式
                                color: 'white',
                                fontSize: 16
                            }
                        },
                         barBorderRadius: 25,
                            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                            {
                                offset: 0,
                                color: '#fccb05'
                            },
                            {
                                offset: 1,
                                color: '#f5804d'
                            }
                        ]),
                    }

                }
            },
            {
                name: '不良率(%)',
                color: '#F6E331',
                type: 'line',
                smooth:true,//设置折线图平滑
                yAxisIndex: 1,
                data: [1.35, 1.35, 1.32, 1.27, 1.23,1.19],
                itemStyle: {
                    normal: {
                        label: {
                            show: true,		//开启显示
                            position: 'top',	//在上方显示
                            textStyle: {	    //数值样式
                                color: 'white',
                                fontSize: 16
                            }
                        }
                    }
                }
            },
        ]
    };
    myChart7.setOption(option);
    tools.loopShowTooltip(myChart7, option, {
        loopSeries: true
    });
});

$(function (){
    var myChart8 = echarts.init(document.getElementById('asset_8'));
    var markLineData = [];
    var source =  [
        ['贷款等级情况', '2015', '2016'],
        ['正常', 98.12],
        ['关注', 0.81],
        ['次级', 0.29],
        ['可疑', 0.44],
        ['损失', 0.34]
    ];

    // 添加“其他”
    addOtherData(source,4);

    option = {
        legend: {
            textStyle: { color: "#ffffff" },
        },
        tooltip: {},
        dataset: {
            source: source
        },
        series: [{
            type: 'pie',
            radius: "50%",
            center: ['25%', '50%'],
            label:{            //饼图图形上的文本标签
                normal:{
                    show:true,
                    position:'inner', //标签的位置
                    textStyle : {
                        fontWeight : 300 ,
                        fontSize : 16    //文字的字体大小
                    },
                    formatter:'{d}%'
                }
            },
            startAngle: 45, // 起始角度 45
            clockwise: false, // 逆时针
            markLine:{
                lineStyle: {
                    type: 'solid',
                    color:"#ffffff"
                },
                symbol: 'none',
                data:markLineData
            }
        },
            {
                type: 'pie',
                radius: "30%",
                center: ['75%', '50%'],
                encode: {
                    itemName: '贷款等级情况',
                    value: '2016',
                },
                label: {
                    show: true,
                    position: "inside"
                },
            }
        ]
    };

// 获取表标线 对应点坐标
    function getMarkLineData(percent) {
        // 1.获取画布 width,height
        let height = myChart8.getHeight();
        let width = myChart8.getWidth() ;

        // 2.  根据 series[0].center 获取圆心坐标
        let x0 = width*0.25 ;// 圆心x轴坐标

        //3.圆边上点坐标
        // let x1   =   x0   +   r   *   cos(ao   *   3.14   /180   )
        // let y1   =   y0   +   r   *   sin(ao   *   3.14   /180   )

        // “其他” 终点坐标series[0].startAngle 45
        let x1 = x0 + (height/4) * Math.cos(45 * 3.14 / 180);
        let y1 = (height*0.5)   -   (height/4)   *   Math.sin(45   *   3.14   /180   );

        let ao = 360 * (percent/100) ;// 扇形角度

        let ao1 = 0 ;// 用来计算的坐标角度
        ao1=(ao<=45)?(45-ao):(360-(ao-45));
        if(ao1<270 && ao1>45)ao1=270 ;// 角度当270用，要不样式不好看

        let x2=0,y2=0;
        x2=x0 + (height/4) * Math.cos(ao1 * 3.14 / 180);
        y2 = (height*0.5)  -   (height/4)   *   Math.sin(ao1   *   3.14   /180   );

        return [[{x:x1,y:y1},{x: "75%", y: "35%"}],[{x:x2,y:y2},{x: "75%", y: "65%"}]]
    }
// 添加其他
    function addOtherData(datasetSource,len){
        let percent = 0;
        let sum=0 ;// 总计
        datasetSource.forEach((data,rowIndex)=>{
            if(rowIndex>0){ // 第一行数据不算
                let count=0;
                for(let key of data){
                    let value = isNaN(key)?0:Number(key);
                    if(count===1)sum+=value;
                    count++
                }
            }
        });
        let endData = datasetSource.slice(datasetSource.length-len);
        let other = ["异常"];
        for(let i=0;i<endData.length;i++){
            let j=0;
            for(let key of endData[i]){
                let value = isNaN(key)?0:key;
                if(j)other[j]?(other[j]+=value):other.push(value);
                j++
            }
            endData[i].splice(1,0,"")
        }
        datasetSource.push(other);
        // "其他"占比
        percent = sum?((other[1]/sum)*100).toFixed(2):100;
        markLineData = getMarkLineData(percent)
    }
    myChart8.setOption(option);
    tools.loopShowTooltip(myChart8, option, {
        loopSeries: true
    });

});