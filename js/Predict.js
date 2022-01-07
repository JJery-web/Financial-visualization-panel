$(function (){
    var myChart1 = echarts.init(document.getElementById('predict1'));
    var option = {
        title: {
            text: '2022年贷款分析（预测）',
            left: 'center',
            textStyle: { fontsize: 18, color: '#ffffff' }
        },
        // backgroundColor: '#323a5e',
        backgroundColor: "transparent",
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                // 坐标轴指示器，坐标轴触发有效
                type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
            }
        },
        grid: {
            left: '2%',
            right: '8%',
            bottom: '14%',
            top: '16%',
            containLabel: true
        },
        legend: {
            data: ['2022预测贷款', '2022实际贷款',  '2022预测贷款(调整)'],
            right: 10,
            bottom: 12,
            textStyle: {
                color: '#fff'
            },
            itemWidth: 12,
            itemHeight: 10
            // itemGap: 35
        },
        xAxis: {
            type: 'category',
            data: [
                '1月',
                '2月',
                '3月',
                '4月',
                '5月',
                '6月',
                '7月',
                '8月',
                '9月',
                '10月',
                '11月',
                '12月'
            ],
            axisLine: {
                lineStyle: {
                    color: 'white'
                }
            },
            axisLabel: {
                // interval: 0,
                // rotate: 40,
                textStyle: {
                    fontFamily: 'Microsoft YaHei'
                }
            },
            axisTick: {
                show: false
            },
            splitLine: {
                show: false
            }
        },

        yAxis: {
            type: 'value',
            max: '600',
            axisLine: {
                show: true,
                lineStyle: {
                    color: 'white'
                }
            },
            // splitLine: {
            //   show: true,
            //   lineStyle: {
            //     color: 'rgba(255,255,255,0.3)'
            //   }
            // },
            axisTick: {
                show: true
            },
            splitLine: {
                show: false
            }
        },
        dataZoom: [
            {
                show: true,
                height: 12,
                xAxisIndex: [0],
                bottom: '8%',
                start: 0,
                end: 100,
                handleIcon:
                    'path://M306.1,413c0,2.2-1.8,4-4,4h-59.8c-2.2,0-4-1.8-4-4V200.8c0-2.2,1.8-4,4-4h59.8c2.2,0,4,1.8,4,4V413z',
                handleSize: '110%',
                handleStyle: {
                    color: '#d3dee5'
                },
                textStyle: {
                    color: '#fff'
                },
                borderColor: '#90979c'
            },
            {
                type: 'inside',
                show: true,
                height: 15,
                start: 1,
                end: 35
            }
        ],
        series: [
            {
                name: '2022预测贷款',
                type: 'line',
                barWidth: '25%',
                smooth: true, // 线条是否平滑
                symbol: 'none', // 是否显示节点
                areaStyle: {
                    opacity: 0.25
                },
                barGap: '0%',
                itemStyle: {
                    normal: {
                        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                            {
                                offset: 0,
                                color: '#248ff7'
                            },
                            {
                                offset: 1,
                                color: '#6851f1'
                            }
                        ]),
                        barBorderRadius: 11
                    }
                },
                data: [450, 469, 429, 487, 404, 441, 455, 497, 443, 406, 403, 450]
            },
            {
                name: '2022实际贷款',
                type: 'bar',
                barWidth: '25%',
                itemStyle: {
                    normal: {
                        label: {
                            show: true, //开启显示
                            position: 'top', //在上方显示
                            textStyle: {
                                //数值样式
                                color: 'white',
                                fontSize: 16
                            }
                        },
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
                        barBorderRadius: 12
                    }
                },
                data: [403, 498, 406, 432, 486, 407, null, null, null, null, null, null],
            },

            {
                name: '2022预测贷款(调整)',
                type: 'bar',
                barWidth: '25%',
                itemStyle: {
                    normal: {
                        label: {
                            show: true, //开启显示
                            position: 'top', //在上方显示
                            textStyle: {
                                //数值样式
                                color: 'white',
                                fontSize: 16
                            }
                        },
                        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                            {
                                offset: 0,
                                color: '#8bd46e'
                            },
                            {
                                offset: 1,
                                color: '#09bcb7'
                            }
                        ]),
                        barBorderRadius: 11
                    }
                },
                data: [null, null, null, null, null, null, 431, 492, 445, 482, 398, 418]
            }
        ]
    };


    myChart1.setOption(option);
    tools.loopShowTooltip(myChart1, option, {
        loopSeries: true
    });
});

//  -----------

$(function (){
    var myChart2 = echarts.init(document.getElementById('predict2'));
    option = {
        title : {
            text: '贷款增长率（调整前、后）',
            left: 'center',
            textStyle: {fontsize:18, color:'#ffffff'}
        },
        backgroundColor: "transparent",
        //浮动框
        tooltip: {},
        //图例
        legend: {
            right: '12%',
            bottom: '4%',
            textStyle: {
                color: "white",
                fontSize: '13',
            },
            itemGap: 20,
            itemWidth: 10,
            itemHeight: 10,
            icon: 'circle',
            data: [ 'data'],
        },
        grid: {
            left: '8%',
            top: '15%',
            bottom: '14%',
            width: '86%',
        },
        visualMap: [
            {
                type: 'piecewise',
                show: false,
                pieces: [
                    {
                        gt: -15,
                        lte: 0,
                        color: '#ff7c09',
                    },
                    {
                        gte: 0,
                        color: '#01F6F9',
                    },
                ],
                seriesName: '增长率',
                seriesIndex: 0,
            },
            {
                type: 'piecewise',
                show: false,
                pieces: [
                    {
                        gt: -15,
                        lte: 0,
                        color: '#ff7c09',
                    },
                    {
                        gte: 0,
                        color: '#01F6F9',
                    },
                ],
                seriesName: 'CO2',
                seriesIndex: 1,
            },
        ],
        //x轴
        xAxis: {
            axisLine: {
                lineStyle: {
                    color: 'white',
                },
            },
            axisLabel: {
                textStyle: {
                    color: '#FFF',
                    fontSize: 12,
                },
            },
            //刻度线
            axisTick: {
                show: false,
            },
            //坐标轴显示值
            data: ['1月', '2月', '3月', '4月', '5月', '6月','7月', '8月', '9月', '10月', '11月', '12月'],
        },
        //y轴
        yAxis: {
            min: -25,
            max: 25,
            axisLabel: {
                //  改变y轴字体颜色和大小
                //formatter: '{value} m³ ', //  给y轴添加单位
                textStyle: {
                    color: '#fff',
                    fontSize: 12,
                },
            },
            //坐标轴线
            axisLine: {
                show: false,
                lineStyle: {
                    color: 'white',
                },
            },
            //刻度线
            axisTick: {
                show: false,
            },
            //在grid区域中的分隔线
            splitLine: {
                show: false,
                lineStyle: {
                    color: '#132987',
                },
            },
        },

        //
        series: [
            {
                name: 'data',
                type: 'line',
                symbolSize: [0, 0],
                data: [3.32,7.2,-2,1.73,-5.3,2.21,-13.32,-5.2,2.0,18.73,-4.43,-7.21],
                itemStyle: {
                    normal: {
                        label: {
                            show: true,		//开启显示
                            position: 'top',	//在上方显示
                            textStyle: {	    //数值样式
                                color: 'white',
                                fontSize: 13
                            },
                            formatter: function(v) {
                                var val = v.data;
                                return val +'%';

                            },
                        },

                    },

                }
            },
            {
                //水波纹点
                name: 'data',
                type: 'effectScatter',
                symbolSize: [5, 5],
                rippleEffect: {
                    period: 1,
                    scale: 5,
                    brushType: 'fill',
                },
                itemStyle: {
                    color: new echarts.graphic.RadialGradient(0.4, 0.3, 1, [
                        {
                            offset: 0,
                            // color: '#69dbf7',
                            color: '#01F6F9',
                        },
                        {
                            offset: 1,
                            // color: '#aefbc3',
                            color: '#01F6F9',
                        },
                    ]),
                },
                markLine: {
                    symbol: 'none',
                    label: {
                        normal: {
                            show: false,
                        },
                    },
                    lineStyle: {
                        type: 'solid',
                        color: '#ff7c09',
                        width: 2,
                    },
                    data: [
                        {
                            yAxis: 0,
                        },
                    ],
                },
                data: [3.32,7.2,-2,1.73,-5.3,2.21,-13.32,-5.2,2.0,18.73,-4.43,-7.21],
            },
        ],
    };
    myChart2.setOption(option);
    tools.loopShowTooltip(myChart2, option, {
        loopSeries: true
    });
});

$(function (){
    var myChart3 = echarts.init(document.getElementById('predict3'));
var option = {
        series: [{
            type: 'liquidFill',
            radius: '90%',
            itemStyle: {
                normal: {
                    color: '#43b3ef',
                    opacity: 0.8,
                    shadowColor: '#43b3ef',
                    shadowBlur: 20
                }
            },
            backgroundStyle: {
                shadowColor: 'rgba(255, 255, 255, 0.5)',
                shadowBlur: 20
            },
            data: [{
                value: 0.98,
                waveLength: 180
            }],
            label: {
                fontSize: 18,
                color: '#43b3ef',
                insideColor: '#ffffff'
            },
            outline: {
                show: false
            }
        }]
    };


    myChart3.setOption(option);

});
