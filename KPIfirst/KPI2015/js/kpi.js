define(function(require, exports, module) {
  // // 路径配置
  //       require.config({
  //           paths: {
  //               echarts: '../js/base'
  //           }
  //       });
        
  //       // 使用
  //       require(
  //           [
  //               'echarts',
  //               'echarts/chart/bar' // 使用柱状图就加载bar模块，按需加载
  //           ],
            function (ec) {
                // 基于准备好的dom，初始化echarts图表
                var myChart = ec.init(document.getElementById('main')); 
                
                var option = {
                    tooltip: {
                        show: true
                    },
                    legend: {
                        data:['总点击量']
                    },
                    xAxis : [
                        {
                            type : 'category',
                            data : ["一季度","二季度","三季度","四季度"]
                        }
                    ],
                    yAxis : [
                        {
                            type : 'value'
                        }
                    ],
                    series : [
                        {
                            "name":"总点击量",
                            "type":"bar",
                            "data":[5000000, 20000000, 4555550, 10666666, 222210, 25545550]
                        }
                    ]
                };
        
                // 为echarts对象加载数据 
                myChart.setOption(option); 
            }
     
 module.exports =  charts;


})