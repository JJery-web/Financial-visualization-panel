$(function (){
    var myChart1 = echarts.init(document.getElementById('business1'));
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
            data: ['存款规模(万)' , '变化率(%)']
        },
        grid:{x:55, x2:50},
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
                name: '存款规模(万)',
                min: 0,
                max: 600,
                splitNumber : 5,
                nameTextStyle: {
                    color: 'rgba(255,255,255,0.5)',
                    fontFamily: 'Source Han Sans CN', // 字体
                    fontSize: 12, // 大小
                    // padding: [0, 0, 20, 0]
                },
                axisLabel: {
                    textStyle: {fontsize:18, color:'rgba(255,255,255,0.5)'},
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
                name: '变化率(%)',
                min: 0,
                max: 10,
                splitNumber : 5,
                nameTextStyle: {
                    color: 'rgba(255,255,255,0.5)',
                    fontFamily: 'Source Han Sans CN', // 字体
                    fontSize: 12, // 大小
                    // padding: [0, 0, 20, 0]
                },
                axisLabel: {
                    textStyle: {fontsize:5, color:'rgba(255,255,255,0.5)'},
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
                name: '存款规模(万)',
                color: '#ff8302',
                type: 'bar',
                barWidth:'40%',
                data: [
                    443.95, 466.68, 491.25, 512.30,527.10, 544.31
                ],
                itemStyle: {
                    normal: {
                        label: {
                            show: true,		//开启显示
                            position: 'top',	//在上方显示
                            textStyle: {	    //数值样式
                                color: 'white',
                                fontSize: 14
                            }
                        },
                          barBorderRadius: 5,
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
                name: '变化率(%)',
                color: '#F6E331',
                type: 'line',
                smooth:true,//设置折线图平滑
                yAxisIndex: 1,
                data: [3.22, 5.12, 5.26, 5.4,7.30,3.27],
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
            }
        ]
    };
    myChart1.setOption(option);
    // tools.loopShowTooltip(myChart1, option, {
    //   loopSeries: true
    // });
});

//  -----------

$(function (){
    var myChart2 = echarts.init(document.getElementById('business2'));
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
            data: ['交易额(万亿)' , '变化率(%)']
        },
        grid:{x:55, x2:50},
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
                name: '交易额(万亿)',
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
                    textStyle: {fontsize:18, color:'rgba(255,255,255,0.5)'},
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
                name: '变化率(%)',
                min: 0,
                max: 20,
                splitNumber : 5,
                nameTextStyle: {
                    color: 'rgba(255,255,255,0.5)',
                    fontFamily: 'Source Han Sans CN', // 字体
                    fontSize: 12, // 大小
                    // padding: [0, 0, 20, 0]
                },
                axisLabel: {
                    textStyle: {fontsize:5, color:'rgba(255,255,255,0.5)'},
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
                name: '交易额(万亿)',
                color: '#ff8302',
                type: 'bar',
                barWidth:'40%',
                data: [
                    1.32, 1.48, 1.61, 1.67,1.75,2.04
                ],
                itemStyle: {
                    normal: {
                        label: {
                            show: true,		//开启显示
                            position: 'top',	//在上方显示
                            textStyle: {	    //数值样式
                                color: 'white',
                                fontSize: 15
                            }
                        },
                           barBorderRadius: 5,
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
                name: '变化率(%)',
                color: '#F6E331',
                type: 'line',
                smooth:true,//设置折线图平滑
                yAxisIndex: 1,
                data: [12.50, 12.36, 10.42,8.70, 8.70,16.28],
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
            }
        ]
    };
    myChart2.setOption(option);
    // tools.loopShowTooltip(myChart2, option, {
    //   loopSeries: true
    // });
});

//  -----------

$(function (){
    var myChart3 = echarts.init(document.getElementById('business3'));
    option = {
        tooltip: {
            trigger: 'item',
            axisPointer: {
                type: 'cross',
                crossStyle: {
                    color: '#ffffff'
                }
            }
        },
        legend: {
            top: '5%',
            left: 'center',
            textStyle: { color: "#ffffff" },
        },
        series: [
            {
                name: '业务收入',
                type: 'pie',
                radius: ['40%', '70%'],
                center: ['50%', '60%'],
                avoidLabelOverlap: false,
                label:{            //饼图图形上的文本标签
                    normal:{
                        show:false,
                        position:'center', //标签的位置
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
                    { value: 11397087, name: "贷款" },
                    { value: 1069091, name: "拆借、存放等同业业务" },
                    { value: 2660274, name: "债券投资" },
                    { value: 1119883, name: "其他业务" }
                ],
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
            }
        ]
    };
    myChart3.setOption(option);
    tools.loopShowTooltip(myChart3, option, {
        loopSeries: true
    });
});



// -----右侧-----------------

$(function (){
    var myChart4 = echarts.init(document.getElementById('business4'));
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
        toolbox: {
            feature: {
                dataView: { show: false, readOnly: false },
                magicType: { show: false, type: ['line', 'bar'] },
                restore: { show: false },
                saveAsImage: { show: false }
            }
        },
        legend: {
            data: ['高级客户数', '零售客户数', '总AUM'],
            textStyle:{color:'#ffffff'}
        },
        xAxis: [
            {
                type: 'category',
                data: ["1月", "2月", "3月", "4月", "5月","6月"],
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
                    show: false
                }
            }
        ],
        yAxis: [
            {
                type: 'value',
                name: '客户规模(万)',
                min: 0,
                max: 2000,
                interval: 1000,
                nameTextStyle: {
                    color: 'rgba(255,255,255,0.5)',
                    fontFamily: 'Source Han Sans CN', // 字体
                    fontSize: 12 // 大小
                    // padding: [0, 0, 20, 0]
                },
                axisLabel: {
                    textStyle: {fontsize:18, color:'rgba(255,255,255,0.5)'},
                    formatter: '{value} '
                },
                axisTick: {
                    show: false
                },
                splitLine: {
                    show: false
                }
            },
            {
                type: 'value',
                name: 'AUM(万)',
                min: 500,
                max: 800,
                interval: 200,
                nameTextStyle: {
                    color: 'rgba(255,255,255,0.5)',
                    fontFamily: 'Source Han Sans CN', // 字体
                    fontSize: 12 // 大小
                    // padding: [0, 0, 20, 0]
                },
                axisLabel: {
                    textStyle: {fontsize:18, color:'rgba(255,255,255,0.5)'},
                    formatter: '{value} '
                },
                axisTick: {
                    show: false
                },
                splitLine: {
                    show: false
                }
            }
        ],
        series: [
            {
                name: '高级客户数',
                type: 'bar',
                barWidth:'40%',
                data: [123, 154, 163,193, 241, 301],
                itemStyle: {
                    normal: {
                        color:'#ff7c09',
                        label: {
                            show: true, //开启显示
                            position: 'top', //在上方显示
                            textStyle: {
                                //数值样式
                                color: 'white',
                                fontSize: 16
                            }
                        },
                         barBorderRadius: 5,
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
                name: '零售客户数',
                type: 'bar',
                barWidth:'40%',
                data: [1290, 1350, 1380,1430, 1500, 1580],
                itemStyle: {
                    normal: {
                      color:'#7FC668',
                        label: {
                            show: true, //开启显示
                            position: 'top', //在上方显示
                            textStyle: {
                                //数值样式
                                color: 'white',
                                fontSize: 16
                            }
                        },
                         barBorderRadius: 5,
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
                name: '总AUM',
                type: 'line',
                smooth:true,//设置折线图平滑
                yAxisIndex: 1,
                data: [573.26, 623.11, 650.21,692.34, 713.75, 751.32],
                itemStyle: {
                    normal: {
                       color:'#fffb6c',
                        label: {
                            show: false, //开启显示
                            position: 'top', //在上方显示
                            textStyle: {
                                //数值样式
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
    // tools.loopShowTooltip(myChart4, option, {
    //   loopSeries: true
    // });
});

//  -----------

$(function (){
    var myChart5 = echarts.init(document.getElementById('business5'));
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
            data: ['投资金额(亿)' , '变化率(%)']
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
                name: '投资金额(亿)',
                min: 0,
                max: 5,
                splitNumber : 5,
                nameTextStyle: {
                    color: 'rgba(255,255,255,0.5)',
                    fontFamily: 'Source Han Sans CN', // 字体
                    fontSize: 12, // 大小
                    // padding: [0, 0, 20, 0]
                },
                axisLabel: {
                    textStyle: {fontsize:18, color:'rgba(255,255,255,0.5)'},
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
                name: '变化率(%)',
                min: 0,
                max: 30,
                splitNumber : 5,
                nameTextStyle: {
                    color: 'rgba(255,255,255,0.5)',
                    fontFamily: 'Source Han Sans CN', // 字体
                    fontSize: 12, // 大小
                    // padding: [0, 0, 20, 0]
                },
                axisLabel: {
                    textStyle: {fontsize:5, color:'rgba(255,255,255,0.5)'},
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
                name: '投资金额(亿)',
                color: '#ff8302',
                type: 'bar',
                barWidth:'40%',
                data: [
                    2.36, 2.77,3.12,3.5,3.99,4.7
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
                         barBorderRadius: 5,
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
                name: '变化率(%)',
                color: '#F6E331',
                type: 'line',
                smooth:true,//设置折线图平滑
                yAxisIndex: 1,
                data: [17.10, 17.65,12.56,15.63,28.21,17.65],
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
            }
        ]
    };
    myChart5.setOption(option);
    // tools.loopShowTooltip(myChart5, option, {
    //   loopSeries: true
    // });
});

//  -----------

$(function (){
    var myChart6 = echarts.init(document.getElementById('business6'));
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
                name: 'App各类型交易金额占比(%)',
                type: 'pie',
                radius: ['40%', '70%'],
                center: ['50%', '60%'],
                avoidLabelOverlap: false,
                label:{            //饼图图形上的文本标签
                    normal:{
                        show:false,
                        position:'center', //标签的位置
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
                    { value: 36, name: "转账" },
                    { value: 29, name: "理财" },
                    { value: 16, name: "生活缴费" },
                    { value: 14, name: "支付" },
                    { value: 3, name: "其他" },
                    { value: 2, name: "外汇" }
                ],
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
            }
        ]
    };
    myChart6.setOption(option);
    tools.loopShowTooltip(myChart6, option, {
        loopSeries: true
    });
});

