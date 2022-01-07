

(function (){
    var myChart3 = echarts.init(document.getElementById('echart3'));
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
        grid:{x:50},
        legend: {
            textStyle: {fontsize:18, color:'#ffffff'},
            data: ['财务-资产(万)' , '增速']
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
                name: '增速',
                min: -24,
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
                color: '#ff8302',
                type: 'bar',
                barWidth:'40%',
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
                                fontSize: 12
                            }
                        },
                        barBorderRadius: 11,
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
                name: '增速',
                color: '#F6E331',
                type: 'line',
                smooth:true,//设置折线图平滑
                yAxisIndex: 1,
                data: [2.4, 11.11,3.09,1.67,7.53,5.26],
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
})();

(function (){
    var myChart4 = echarts.init(document.getElementById('echart4'));
    option = {
        tooltip: {
            trigger: 'axis',
            axisPointer: {type: 'cross',
                crossStyle: {
                    color: '#ffffff'}}
        },
        grid:{x:50},
        legend: {
            textStyle: {fontsize:18, color:'#ffffff'},
            data: ['业务-AUM(万)' , '增速']
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
                axisTick: {show: false},
                splitLine: {show:false}
            }
        ],
        yAxis: [
            {
                type: 'value',
                name: '业务-AUM(万)',
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
                name: '增速',
                min: -30,
                max: 14,
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
                name: '业务-AUM(万)',
                color: '#ff8302',
                type: 'bar',
                barWidth:'40%',
                data: [68.21,74.14,82.38,87.93,89.40,92.5],
                itemStyle: {
                    normal: {
                        label: {
                            show: true,		//开启显示
                            position: 'top',	//在上方显示
                            textStyle: {	    //数值样式
                                color: 'white', fontSize: 12
                            }
                        },
                        barBorderRadius: 11,
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
                name: '增速',
                color: '#F6E331',
                type: 'line',
                smooth:true,//设置折线图平滑
                yAxisIndex: 1,
                data: [1.2, 8.7,11.11,3.09,5.26,4.2],
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
    myChart4.setOption(option);
    tools.loopShowTooltip(myChart4, option, {
        loopSeries: true
    });
})();
