var myChart = echarts.init(document.getElementById('main'));
var option = {
    title: {
        text: '信用等级评分',
        x: 'center',
    },
    tooltip: {},
    legend: {
        data: ['各项得分'],
        x:'600px'
    },
    radar: [
        {
            indicator: [
                { text: '客户属性' },
                { text: '可用额度' },
                { text: '法人年龄' },
                { text: '负债率' },
                { text: '月收入' },
                { text: '信贷数量' },
                { text: '固定资产贷款量' }
            ],
            center: ['50%', '50%'],
            radius: 120,
            startAngle: 90,
            splitNumber: 4,
            shape: 'circle',
            name: {
                formatter:'【{value}】',
                textStyle: {
                    color:'#72ACD1'
                }
            },
            splitArea: {
                areaStyle: {
                    color: ['rgba(114, 172, 209, 0.2)',
                        'rgba(114, 172, 209, 0.4)', 'rgba(114, 172, 209, 0.6)',
                        'rgba(114, 172, 209, 0.8)', 'rgba(114, 172, 209, 1)'],
                    shadowColor: 'rgba(0, 0, 0, 0.3)',
                    shadowBlur: 10
                }
            },
            axisLine: {
                lineStyle: {
                    color: 'rgba(255, 255, 255, 0.5)'
                }
            },
            splitLine: {
                lineStyle: {
                    color: 'rgba(255, 255, 255, 0.5)'
                }
            }
        }
    ],
    series: [
        {
            name: '雷达图',
            type: 'radar',
            itemStyle: {
                emphasis: {
                    // color: 各异,
                    lineStyle: {
                        width: 4
                    }
                }
            },
            data: [
                {
                    value: [-22, 1, 27, 2, 0, 90, 61],
                    name: '各项得分',
                    symbol: 'rect',
                    symbolSize: 5,
                    lineStyle: {
                        normal: {
                            type: 'dashed'
                        }
                    }
                }
            ]
        }
    ]
};

myChart.setOption(option);