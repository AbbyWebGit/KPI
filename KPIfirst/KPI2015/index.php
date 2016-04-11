<!DOCTYPE HTML>
<html lang="en" class="no-js">
	<head>
		<meta charset="UTF-8" />
		<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
		<meta name="viewport" content="width=device-width, initial-scale=1.0">
		<title>2015年精准广告平台中心目标及完成情况</title>
		<meta name="description" content="" />
		<meta name="keywords" content="" />
		<?php $this->load->view('common.php') ?>
		<!--common php 不加载  把样式直接拿到页面-->
		
jingjing test		
	</head>
	<body>
    <!-- 为ECharts准备一个具备大小（宽高）的Dom -->
    <button id="btn-getData">获取数据heheh</button>
    <div id="main" style="height:400px"></div>
    <!-- ECharts单文件引入 -->
    <script src="http://echarts.baidu.com/build/dist/echarts.js"></script>
    <script type="text/javascript">
        // 路径配置
        require.config({
            paths: {
                echarts: 'http://echarts.baidu.com/build/dist'
            }
        });
        
        // 使用
        require(
            [
                'echarts',
                'echarts/chart/bar' // 使用柱状图就加载bar模块，按需加载
            ],
            function (ec) {
                // 基于准备好的dom，初始化echarts图表
                var myChart = ec.init(document.getElementById('main')); 
                
              var zrColor = require('zrender/tool/color');
var colorList = [
  '#000000','#87cefa','#da70d6','#32cd32','#6495ed',
  '#ff69b4','#ba55d3','#cd5c5c','#ffa500','#40e0d0'
];
var itemStyle = {
    normal: {
        color: function(params) {
          if (params.dataIndex < 0) {
            // for legend
            return zrColor.lift(
              colorList[colorList.length - 1], params.seriesIndex * 0.1
            );
          }
          else {
            // for bar
            return zrColor.lift(
              colorList[params.dataIndex], params.seriesIndex * 0.1
            );
          }
        }
    }
};
option = {
    title: {
        text: '2010-2013年中国城镇居民家庭人均消费构成（元）',
        subtext: '数据来自国家统计局',
        sublink: 'http://data.stats.gov.cn/search/keywordlist2?keyword=%E5%9F%8E%E9%95%87%E5%B1%85%E6%B0%91%E6%B6%88%E8%B4%B9'
    },
    tooltip: {
        trigger: 'axis',
        backgroundColor: 'rgba(255,255,255,0.7)',
        axisPointer: {
            type: 'shadow'
        },
        formatter: function(params) {
            // for text color
            var color = colorList[params[0].dataIndex];
            var res = '<div style="color:' + color + '">';
            res += '<strong>' + params[0].name + '消费（元）</strong>'
            for (var i = 0, l = params.length; i < l; i++) {
                res += '<br/>' + params[i].seriesName + ' : ' + params[i].value 
            }
            res += '</div>';
            return res;
        }
    },
    legend: {
        x: 'right',
        data:['2010','2011','2012','2013']
    },
    toolbox: {
        show: true,
        orient: 'vertical',
        y: 'center',
        feature: {
            mark: {show: true},
            dataView: {show: true, readOnly: false},
            restore: {show: true},
            saveAsImage: {show: true}
        }
    },
    calculable: true,
    grid: {
        y: 80,
        y2: 40,
        x2: 40
    },
    xAxis: [
        {
            type: 'category',
            data: ['食品', '衣着', '居住', '家庭设备及用品', '医疗保健', '交通和通信', '文教娱乐服务', '其他']
        }
    ],
    yAxis: [
        {
            type: 'value'
        }
    ],
    series: [
        {
            name: '2010',
            type: 'bar',
            itemStyle: itemStyle,
            data: [4804.7,1444.3,1332.1,908,871.8,1983.7,1627.6,499.2]
        },
        {
            name: '2011',
            type: 'bar',
            itemStyle: itemStyle,
            data: [5506.3,1674.7,1405,1023.2,969,2149.7,1851.7,581.3]
        },
        {
            name: '2012',
            type: 'bar',
            itemStyle: itemStyle,
            data: [6040.9,1823.4,1484.3,1116.1,1063.7,2455.5,2033.5,657.1]
        },
        {
            name: '2013',
            type: 'bar',
            itemStyle: itemStyle,
            data: [6311.9,1902,1745.1,1215.1,1118.3,2736.9,2294,699.4]
        }
    ]
};
                // 为echarts对象加载数据 
                myChart.setOption(option); 
            }
        );
    </script>
     <script src="http://192.168.56.91/apps/KPI2015/js/base/jquery.js"></script>
    <script type="text/javascript">
        var Contect={
            
            getData:function(callback){
                 $.ajax({
                    type:"POST",
                    url:"/show/get_total?type=c&t=d&1451132555199",

                    success:function(res){
                         callback(res);
                    },
                    error:function(e){
                        console.log(e);
                    }
                })
            },
             getData1:function(type,t,callback){
                 $.ajax({
                    type:"POST",
                    url:"/show/get_total?type=c&t=d&1451132555199",

                    success:function(res){
                         callback(res);
                    },
                    error:function(e){
                        console.log(e);
                    }
                })
            }
        };

        function consoleLog(res){
          
            console.log(JSON.stringify(res));

        }


        var contect=Contect;

        $('#btn-getData').click(function(){
            contect.getData(consoleLog);
        });
    </script>
</body>
</html>
