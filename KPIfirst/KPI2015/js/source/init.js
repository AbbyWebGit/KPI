define(function (require, exports, module) {
    //---引用定义区----------------------------------
    var $ = require("jquery");
    var dBase = require('../source/data');

    //---常量定义区----------------------------------

    //----------------------------------------------

    //---构造函数----------------------------------
    function init() {
        // argsCheck();
        initPlugins();
        bindDOM();
        bindCustEvt();
        bindListener();
        initChoosen();
    }

    //----------------------------------------------

    //---变量量定义区----------------------------------

    var _choose;

    var _postData = {},
        _timeChoose,
        _select;


    //默认echars的参数 需要给每个表格都加入
    var _chartTheme = {
        // 默认色板
        color: [
        '#62B5DE', '#8FB671', '#EFC17E', '#FE9C72', '#d87a80',
        '#8D98B3', '#E5CF0D', '#97B552', '#95706D', '#DC69AA'
            //'#0069C5', '#1FD78E', '#008DFF', '#1DB0C9', '#8EC511',
            //'#FFDA01', '#FAB418', '#EE440B', '#C12058', '#9300FF',
            //'#3F3FB1'

            ],
        // 图表标题
        title: {
            textStyle: {
                fontWeight: 'normal',
                color: '#008acd' // 主标题文字颜色
            }
        },
        // 值域
        dataRange: {
            itemWidth: 15,
            color: ['#5ab1ef', '#e0ffff']
        },

        // 工具箱
        toolbox: {
            color: ['#1e90ff', '#1e90ff', '#1e90ff', '#1e90ff'],
            effectiveColor: '#ff4500',
            feature: {
                dataZoom: {
                    show: true
                }
            }
        },



        // 提示框
        tooltip: {
            backgroundColor: 'rgba(50,50,50,0.5)', // 提示背景颜色，默认为透明度为0.7的黑色
            axisPointer: { // 坐标轴指示器，坐标轴触发有效
                type: 'line', // 默认为直线，可选为：'line' | 'shadow'
                lineStyle: { // 直线指示器样式设置
                    color: '#008acd'
                },
                crossStyle: {
                    color: '#008acd'
                },
                shadowStyle: { // 阴影指示器样式设置
                    color: 'rgba(200,200,200,0.2)'
                }
            }
        },
        backgroundColor: "#f5f5f5",
        // 区域缩放控制器
        dataZoom: {
            dataBackgroundColor: '#efefff', // 数据背景颜色
            fillerColor: 'rgba(182,162,222,0.2)', // 填充颜色
            handleColor: '#008acd' // 手柄颜色
        },

        // 网格
        grid: {
            borderColor: '#F0F0F0',
            backgroundColor: '#fff',
            x2: "100",
            y: "80"
        },

        // 类目轴
        categoryAxis: {
            axisLine: { // 坐标轴线
                lineStyle: { // 属性lineStyle控制线条样式
                    color: '#008acd'

                }
            },
            splitLine: { // 分隔线
                lineStyle: { // 属性lineStyle（详见lineStyle）控制线条样式
                    color: ['#eee'],
                    width: 0
                }
            }
        },

        // 数值型坐标轴默认参数
        valueAxis: {
            axisLine: { // 坐标轴线
                lineStyle: { // 属性lineStyle控制线条样式
                    color: '#008acd'
                }
            },
            splitArea: {
                show: false,
                areaStyle: {
                    color: ['rgba(250,250,250,0.1)', 'rgba(200,200,200,0.1)']
                }
            },
            splitLine: { // 分隔线
                lineStyle: { // 属性lineStyle（详见lineStyle）控制线条样式
                    color: ['#eee']
                }
            }
        },

        polar: {
            axisLine: { // 坐标轴线
                lineStyle: { // 属性lineStyle控制线条样式
                    color: '#ddd'
                }
            },
            splitArea: {
                show: true,
                areaStyle: {
                    color: ['rgba(250,250,250,0.2)', 'rgba(200,200,200,0.2)']
                }
            },
            splitLine: {
                lineStyle: {
                    color: '#ddd'
                }
            }
        },

        timeline: {
            lineStyle: {
                color: '#008acd'
            },
            controlStyle: {
                normal: {
                    color: '#008acd'
                },
                emphasis: {
                    color: '#008acd'
                }
            },
            symbol: 'emptyCircle',
            symbolSize: 3
        },

        // 柱形图默认参数
        bar: {
            itemStyle: {
                normal: {
                    barBorderRadius: 3
                },
                emphasis: {
                    barBorderRadius: 3
                }
            }
        },

        // 折线图默认参数
        line: {
            smooth: true,
            symbol: 'emptyCircle', // 拐点图形类型
            symbolSize: 3, // 拐点图形大小


        },

        // K线图默认参数
        k: {
            itemStyle: {
                normal: {
                    color: '#d87a80', // 阳线填充颜色
                    color0: '#2ec7c9', // 阴线填充颜色
                    lineStyle: {
                        color: '#d87a80', // 阳线边框颜色
                        color0: '#2ec7c9' // 阴线边框颜色
                    }
                }
            }
        },

        // 散点图默认参数
        scatter: {
            symbol: 'circle', // 图形类型
            symbolSize: 4 // 图形大小，半宽（半径）参数，当图形为方向或菱形则总宽度为symbolSize * 2
        },

        // 雷达图默认参数
        radar: {
            symbol: 'emptyCircle', // 图形类型
            symbolSize: 3
                //symbol: null,         // 拐点图形类型
                //symbolRotate : null,  // 图形旋转控制
        },

        map: {
            itemStyle: {
                normal: {
                    borderColor: 'lightgreen',
                    areaStyle: {
                        color: '#cdd1d2'
                    },
                    label: {
                        textStyle: {
                            color: '#666'
                        }
                    }
                },
                emphasis: { // 也是选中样式
                    areaStyle: {
                        color: '#67dbff'
                    },
                    label: {
                        textStyle: {
                            color: '#353c55'
                        }
                    }
                }
            }
        },

        force: {
            itemStyle: {
                normal: {
                    linkStyle: {
                        color: '#1e90ff'
                    }
                }
            }
        },

        chord: {
            itemStyle: {
                normal: {
                    borderWidth: 1,
                    borderColor: 'rgba(128, 128, 128, 0.5)',
                    chordStyle: {
                        lineStyle: {
                            color: 'rgba(128, 128, 128, 0.5)'
                        }
                    }
                },
                emphasis: {
                    borderWidth: 1,
                    borderColor: 'rgba(128, 128, 128, 0.5)',
                    chordStyle: {
                        lineStyle: {
                            color: 'rgba(128, 128, 128, 0.5)'
                        }
                    }
                }
            }
        },

        gauge: {
            axisLine: { // 坐标轴线
                lineStyle: { // 属性lineStyle控制线条样式
                    color: [[0.2, '#2ec7c9'], [0.8, '#5ab1ef'], [1, '#d87a80']],
                    width: 10
                }
            },
            axisTick: { // 坐标轴小标记
                splitNumber: 10, // 每份split细分多少段
                length: 15, // 属性length控制线长
                lineStyle: { // 属性lineStyle控制线条样式
                    color: 'auto'
                }
            },
            splitLine: { // 分隔线
                length: 22, // 属性length控制线长
                lineStyle: { // 属性lineStyle（详见lineStyle）控制线条样式
                    color: 'auto'
                }
            },
            pointer: {
                width: 5
            }
        },

        textStyle: {
            fontFamily: '微软雅黑, Arial, Verdana, sans-serif'
        }
    };

    var Contect = {
        //ajax解析
        getData: function (id, way, type, time, mode, callback, callTable) {
            $.ajax({
                type: "POST",
                url: "/show/get_" + way + "?type=" + type + "&t=" + time + "&mode=" + mode,
                success: function (res) {
                    if (!!callback && typeof callback === 'function') {
                        callback(id, res, time);
                    }
                    if (!!callTable && typeof callTable === 'function') {
                        callTable(id, res, way, type, mode, time);
                    }

                },


                error: function (e) {
                    console.log(e);
                }
            })
        },


        //按季度表格  堆积条形图
        charsQuar: function (id, res) {
            //console.log(JSON.stringify(res));
            var $id = document.getElementById(id)
            var myChart = echarts.init($id);
            //获取series里面的data数据 分为value和name 
            var seriesData = [];
            for (var i = 0, _len = res.list.series.length; i < _len; i++) {
                var item = {};
                item.name = res.list.series[i].name;
                item.type = 'bar';
                item.stack = '总量'
                item.itemStyle = {
                    normal: {
                        label: {
                            position: 'insideRight'
                        }
                    }
                };
                item.data = res.list.series[i].data;
                seriesData.push(item);
            }
            //console.log(seriesData);
            //获取length里面的data
            var lenData = [];
            var len = res.list.legend.data.length;
            var item = "";
            for (var i = 0; i < len; i++) {
                item = res.list.legend.data[i];
                lenData.push(item);
            }
            //console.log(lenData);

            //获取xAxis里面的data
            var xAxisData = [];
            var len = res.list.xAxis.data.length;
            var item = "";
            for (var i = 0; i < len; i++) {
                item = res.list.xAxis.data[i];
                xAxisData.push(item);
            }
            //console.log(xAxisData);

            var option = {
                tooltip: {
                    trigger: 'axis',
                    ayisPointer: { // 坐标轴指示器，坐标轴触发有效
                        type: 'line' // 默认为直线，可选为：'line' | 'shadow'
                    }
                },
                legend: {

                    data: lenData
                },

                calculable: true,
                yAxis: [
                    {
                        type: 'value'
    }
    ],
                xAxis: [
                    {
                        type: 'category',
                        data: xAxisData
    }
    ],

                series: seriesData
            };
            myChart.setTheme(_chartTheme);
            myChart.setOption(option);
        },

        //按年表格  玫瑰图
        charsYear: function (id, res) {
            // console.log(id);
            //console.log(JSON.stringify(res));
            // console.log(res.list.series[0].name);
            // console.log(res.list.legend.data[0]);

            //获取length里面的data
            var lenData = [];
            var len = res.list.legend.data.length;
            var item = "";
            for (var i = 0; i < len; i++) {
                item = res.list.legend.data[i];
                lenData.push(item);
            }
            //console.log(lenData);

            //获取series里面的data数据 分为value和name 
            var seriesData = [];
            for (var i = 0, _len = res.list.series.length; i < _len; i++) {
                var item = {};
                item.value = res.list.series[i].data;
                item.name = res.list.series[i].name;
                seriesData.push(item);
            }
            // console.log(seriesData);

            var $id = document.getElementById(id)
            var myChart = echarts.init($id);

            var option = {
                tooltip: {
                    trigger: 'item',
                    formatter: "{a} <br/>{b} : {c} ({d}%)"
                },
                //图例  data要与下面的name对应
                legend: {
                    x: 'center',
                    y: 'top',
                    data: lenData
                },


                calculable: true,
                series: [
                    {
                        name: '面积模式',
                        type: 'pie',
                        radius: [30, 110],
                        center: ['30%', 200],
                        roseType: 'area',
                        itemStyle: {
                            normal: {
                                label: {
                                    show: true
                                },
                                labelLine: {
                                    show: true
                                }
                            },
                            emphasis: {
                                label: {
                                    show: true
                                },
                                labelLine: {
                                    show: true
                                }
                            }
                        },
                        data: seriesData

            },

            ]
            };
            // 为echarts对象加载数据 
            myChart.setTheme(_chartTheme);
            myChart.setOption(option);
            Contect.sortYear(id, res);

        },
        //年表排序
        sortYear: function (id, res) {
            $id = $("#" + id).next("ul");
            //console.log(res);
            var len = "";
            // if (res.list_d) {
            //     len = res.list_d.series.length;
            // } else {
            //     len = res.list.series.length
            // }
            len = res.list.series.length;
            (len > 5) ? len = 5: len;

            var sortYearLi = "";
            for (var i = 0; i < len; i++) {

                sortYearLi += '<li class="sortItem"><i class="sortColor_block' + (i + 1) + '"></i><span class="sortText">top' + (i + 1)+'：' + res.list.series[i].name + '</span></li>'
            };
            //console.log(sortYearLi);
            ($id).html(sortYearLi);

        },


        //按日 月表月  堆积折线图
        charsMouth: function (id, res, time) {
          
            var $id = document.getElementById(id)
            var myChart = echarts.init($id);

            //获取series里面的data数据 分为value和name 
            var seriesData = [];
            for (var i = 0, _len = res.list.series.length; i < _len; i++) {
                var item = {};
                item.name = res.list.series[i].name;
                item.type = 'bar';
                item.stack = '总量'
                item.itemStyle = {
                    normal: {
                        areaStyle: {
                            type: 'default'
                        }
                    }
                };
                item.data = res.list.series[i].data;
                seriesData.push(item);
            }
            //console.log(seriesData);


            //获取length里面的data
            var lenData = [];
            var len = res.list.legend.data.length;
            var item = "";
            for (var i = 0; i < len; i++) {
                item = res.list.legend.data[i];
                lenData.push(item);
            }
            //console.log(lenData);

            var seriesData = [];
            for (var i = 0, _len = res.list.series.length; i < _len; i++) {
                var item = {};
                item.name = res.list.series[i].name;
                item.type = 'line';
                item.stack = '总量'
                item.itemStyle = {
                    normal: {
                        areaStyle: {
                            type: 'default'
                        }
                    }
                };
                item.data = res.list.series[i].data;
                seriesData.push(item);
            }
            //console.log(seriesData);


            //获取xAxis里面的data
            var xAxisData = [];
            var len = res.list.xAxis.data.length;
            var item = "";
            for (var i = 0; i < len; i++) {
                item = res.list.xAxis.data[i];
                xAxisData.push(item);
            }
            //console.log(xAxisData);

            if (time == "d") {
                //计算30天占整个横轴的百分比  下面滑动条的开始  为了只显示一个月的数据
                var percentStart = Math.round((res.list.xAxis.data.length - 30) / res.list.xAxis.data.length * 100);
                if (percentStart < 0) {
                    percentStart = 0;
                } else {
                    percentStart = percentStart;
                }

                var dataZoom;
                dataZoom = { //数据区域缩放
                    show: true,

                    realtime: true, //缩放变化是否实时显示，在不支持Canvas的浏览器中该值自动强制置为false。
                    y: 400, //垂直安放位置，默认为根据grid参数适配，纵向布局默认下方，可指定 {number}（左上角y坐标，单位px）
                    height: 30, //指定高度，纵向布局时默认为根据grid参数适配，横向布局是默认为30，可指定 {number}（高度，单位px）
                    start: percentStart, //数据缩放，选择起始比例，默认为0（%），从首个数据起选择。
                    end: 100 //数据缩放，选择结束比例，默认为100（%），到最后一个数据选择结束。
                }

            }

            var option = {
                tooltip: {
                    trigger: 'axis'
                },
                legend: {
                    data: lenData
                },


                calculable: true,
                xAxis: [
                    {
                        type: 'category',
                        boundaryGap: false,
                        data: xAxisData,
                        name: '',
                        axisLine: {
                            lineStyle: {
                                color: '#DEE2E5',
                                width: 1
                            }
                        },
                        axisTick: {
                            show: false
                        }

                }
                ],
                yAxis: [
                    {
                        type: 'value',
                        name: '',
                        axisLabel: {
                            //formatter: that._formatter
                        },
                        axisLine: {
                            lineStyle: {
                                color: '#DEE2E5',
                                width: 1
                            }
                        },
                        axisTick: {
                            show: false
                        }
                    }
                    ],
                series: seriesData,
                dataZoom: dataZoom
            };



            myChart.setTheme(_chartTheme);
            myChart.setOption(option);
        },

    };



    var _this = {

        DOM: {}, //节点容器
        objs: {}, //组件容器
        DOM_eventFun: { //DOM事件行为容器
        },
        //点击隐藏div
        clickDiv: function (id) {
            console.log($(id));
            $(id).show();
            $(id).siblings("div").hide();

        },
        //点击隐藏按钮
        clickButton: function (id) {
            console.log($(id));
            $(id).show();
            $(id).siblings("a").hide();

        },
        //分页部分
        fillTable: function (id, series, tr,layerTitleFin,layerExit) {
            //console.log(series);
            var page = 0;
            var pageTableTr = "";
            var finTable = "";
            for (var i in series) {
                if (i % 8 === 0) {
                    page++;
                }
                //给每一行都加上class,代表该行属于哪一页
                pageTableTr += '<tr class="p p_' + page + '"><td>' + series[i].name + '</td><td>' + series[i].data[0] + '</td><td>' + series[i].pre[0] + '</td></tr>';
            }
            //console.log(pageTableTr);
              var len=8;
              var layerHight="";
             layerHight=len*28+134;
             var layerStyle='position: absolute;background-color: #fff;left: 50%;top: 50%;width: 450px;height: '+layerHight+'px;margin-left: -225px;margin-top: -'+layerHight/2+'px;border: 1px #CCCCCC solid;'
             var firstTr = tr;
             var table = '<table class="table"  cellpadding="0" cellspacing="0" >' + firstTr + pageTableTr + '</table>';
             var layerExit=layerExit;
             var layerTitleFin=layerTitleFin;
               //汇总弹层
               var layerFin='<div style="'+layerStyle+'">'+layerExit+layerTitleFin+table+'</div>';
               //console.log(layerFin);

            // var firstTr = tr;
            // finTable = '<table class="table"  cellpadding="0" cellspacing="0">' + firstTr + pageTableTr + '</table>';
            // $(id).html(finTable);
           $(id).html(layerFin);
            _this.paging(id, series);


        },
        paging: function (id, series) {
            //console.log($(id));
            var pageNum = "";
            var pageDiv = "";
            var page_size = 8;
            var page_now;
            var total_page = Math.ceil(series.length / 8);
            //console.log(total_page);
            for (var i = 1; i <= total_page; i++) {
                pageNum += '<a  class="pageNum"  href="#">' + i + '</a>';
                // $(".page-num").append('<a href="#">' + i + '</a>');
            }
            // pageDiv='<div class="pageDiv">'+pageNum+'</div>';
            pageDiv = pageNum;

            $(id).next("div").html(pageDiv);

        },

        //年度详细弹层表格
        yearTable: function (id, res, way, type, mode) {
            //console.log($(id));
            // console.log(JSON.stringify(res));
            //console.log(way);
            // console.log(res.list.xAxis.data);
            var tr = ""; //每次循环之前先清空原来的数据 ，避免叠加
            //定义表格第一行数组 
            var firstTr = "";
            //定义弹层的表头 分各种方式
            var layerTitleWay="";
            //表格第一行中第一列  分不同方式展现表格
            var wayTitle = "";
            if (way == "way") {
            layerTitleWay=wayTitle = "分推广方式";
            } else if (way == "channel") {
                if (mode == '1') {
            layerTitleWay=wayTitle = "分内部渠道";
                } else if (mode == '2') {
           layerTitleWay=wayTitle = "分外部渠道";
                } else {
            layerTitleWay=wayTitle = "分渠道";
                };
            } else {
            layerTitleWay=wayTitle = "分业务线";
            };
          
            //表格第一行中第二列  分点击or线索量展示
            var typeTitle = "";
            //定义弹层的表头 分点击or线索量展示
            var layerTitleType="";

            if (type == "c") {
                layerTitleType=typeTitle = "点击";
            } else {
                layerTitleType=typeTitle = "线索量";
            };
           
            //拼接第一行
            firstTr = '<td >' + wayTitle + '</td><td>' + typeTitle + '</td><td>占比</td>';
            //将第一行加入到tr中
            tr += '<tr class="firstTableTr">' + firstTr + '</tr>';
            //拼接弹层表头
               var layerTitleFin="";
               layerTitleFin ='<p class="layerTitle">全年'+layerTitleWay+layerTitleType+'报告</p>';
               //console.log(layerTitleFin);
               //弹层退出键
               var layerExit="";
               layerExit='<i class="layerExit">x</i>';

            //表格有多少条数据
            var len = "";
            if (way == "bline" || mode == "2") {
                len = res.list_d.series.length;
            } else {
                len = res.list.series.length
            }
            (len > 9) ? len = 9: len;
            //判断是否用分页  分页的为分业务线数据 或者 分外部渠道
            if (len == 9) {
                len = 1;
                _this.fillTable(id, res.list_d.series, tr,layerTitleFin,layerExit);
            } else {

                //不用分页的全部及分页的第一页数据
                for (var i = 0; i < len; i++) {
                    //循环出来第一列
                    var firstTd = [];
                    var dataName = "";
                    //循环出来数据
                    var dataNum = [];
                    //循环出来百分比
                    var dataPre = [];

                    //除了以上两种情况的其他详细数据
                    for (var n = 0; n < len; n++) {
                        var dataName = res.list.series[n].name;
                        firstTd.push(dataName);
                    }
                    for (var j = 0; j < res.list.series[i].data.length; j++) {
                        //console.log(res.list_d.series[0].data.length);
                        var data0 = res.list.series[i].data[j]
                        dataNum.push(data0);
                        var data1 = res.list.series[i].pre[j];
                        dataPre.push(data1);

                    }
                    // };
                    //console.log(dataPre);   
                    //循环数据td
                    var td = ""; //每次循环之前先清空原来的数据，避免叠加
                    for (var k = 0; k < dataNum.length; k++) {
                        td += '<td>' + dataNum[k] + '</td><td>' + dataPre[k] + '</td>';
                    };
                    tr += '<tr><td>' + firstTd[i] + '</td>' + td + '</tr>';
                }
            //自定义弹层表格高度
             var layerHight="";
             layerHight=len*28+134;
             var layerStyle='position: absolute;background-color: #fff;left: 50%;top: 50%;width: 450px;height: '+layerHight+'px;margin-left: -225px;margin-top: -'+layerHight/2+'px;border: 1px #CCCCCC solid;'

              var table = '<table class="table"  cellpadding="0" cellspacing="0" >' + tr + '</table>';
               //汇总弹层
               var layerFin='<div style="'+layerStyle+'">'+layerExit+layerTitleFin+table+'</div>';
               //console.log(layerFin);


                $(id).html(layerFin);
                //console.log(table);
                //$divID = $(id).parent("div");
                // $divID.attr("class", "");
                // $divID.addClass("inforYearClass");
            }
        },

        //季度详细弹层表格
        quarTable: function (id, res, way, type, mode, time) {
            //定义弹层的表头 分各种方式
            var layerTitleWay="";
            //表格第一行中第一列  分不同方式展现表格
            var wayTitle = "";
            if (way == "way") {
               layerTitleWay= "分推广方式";
            } else if (way == "channel") {
                 if (mode == '1') {
                layerTitleWay= "分内部渠道";
                    } else if (mode == '2') {
                    layerTitleWay="分外部渠道";
                } else {
                  layerTitleWay="分渠道";
                };
            } else if (way == "total"){
            layerTitleWay="总体";
            }else {
            layerTitleWay="分业务线";
            };
          console.log(layerTitleWay);
          //定义弹层的表头 分点击or线索量展示
            var layerTitleType="";

            if (type == "c") {
                layerTitleType= "点击";
            } else {
                layerTitleType= "线索量";
            };
            //自定义弹层高度
             var layerHight="";
             var len="";
             len = res.list.series.length;
             layerHight=len*40+134;
             var layerStyle='position: absolute;background-color: #fff;left: 50%;top: 50%;width: 450px;height: '+layerHight+'px;margin-left: -225px;margin-top: -'+layerHight/2+'px;border: 1px #CCCCCC solid;'
           

           //弹层表头  季度or月份
           var  layerTitleTime="";
           if (time == "q") {
               layerTitleTime="季度";
               layerHight=len*40+130;
              var layerStyle='position: absolute;background-color: #fff;left: 50%;top: 50%;width: 450px;height: '+layerHight+'px;margin-left: -225px;margin-top: -'+layerHight/2+'px;border: 1px #CCCCCC solid;'
           
            } else {
                layerTitleTime="月份";
                layerHight=len*40+130;
               var layerStyle='position: absolute;background-color: #fff;left: 50%;top: 50%;width: 900px;height: '+layerHight+'px;margin-left: -450px;margin-top: -'+layerHight/2+'px;border: 1px #CCCCCC solid;'
           
            };
            //汇总弹层表头
              var layerTitleFin="";
               layerTitleFin ='<p class="layerTitle">按'+layerTitleTime+layerTitleWay+layerTitleType+'报告</p>';
               console.log(layerTitleFin);
               //弹层退出键
               var layerExit="";
            layerExit='<i class="layerExit">x</i>';

            var tr = ""; //每次循环之前先清空原来的数据 ，避免叠加
            //定义表格第一行数组       
            var timeTitleLink = "";
            var cc = "";
            for (var i = 0; i < res.list.xAxis.data.length; i++) {
                timeTitleLink = res.list.xAxis.data[i];
                if (i == 0) {
                    cc += '<td>时间</td>';
                };
                cc += '<td>' + timeTitleLink + '</td>';
            }

            tr += '<tr class="firstTableTr">' + cc + '</tr>';
            // console.log(timeTitle);
            for (var i = 0; i < res.list.series.length; i++) {
                //循环出来第一列
                var aa = [];
                var dataName = "";
                //console.log(res.list.series[0].name);
                for (var n = 0; n < res.list.series.length; n++) {
                    var dataName = res.list.series[n].name;
                    aa.push(dataName);

                }
                //console.log(aa); 
                //循环出来数据
                var ee = [];
                var data1 = "";
                for (var j = 0; j < res.list.series[i].data.length; j++) {
                    var data1 = res.list.series[i].data[j] + "</br>" + res.list.series[i].pre[j];
                    ee.push(data1);

                }
                //console.log(JSON.stringify(res));  
                //循环数据td
                var td = ""; //每次循环之前先清空原来的数据，避免叠加
                for (var k = 0; k < ee.length; k++) {
                    td += '<td>' + ee[k] + '</td>';
                };
                //console.log(td);
                tr += '<tr><td>' + aa[i] + '</td>' + td + '</tr>';
                //console.log(tr);
            }

            var table = '<table class="table"  cellpadding="0" cellspacing="0" >' + tr + '</table>';
               //汇总弹层
            var layerFin='<div style="'+layerStyle+'">'+layerExit+layerTitleFin+table+'</div>';
            $(id).html(layerFin);
            //console.log(table);
            //console.log(id);
            // console.log($(id).parent("div"));

            // $divID = $(id).parent("div");
            // nowTime = time;
            // $divID.attr("class", "");
           

            //$divID.addClass("inforQuarClass");

        },

        //环形图
        huanLeft: function (id, res, time) {

            var dataToally = parseFloat(res.list.series[0].data[0]) + parseFloat(res.list.series[0].data[1]) + parseFloat(res.list.series[0].data[2]) + parseFloat(res.list.series[0].data[3]);
            //console.log(dataToally);
            $("#tarToalData").html(dataToally);
            var dataToallyPre = parseInt((dataToally / 80000000) * 100);
            //console.log(dataToallyPre);

            var $id = document.getElementById(id)

            var myChart = echarts.init($id);
            var labelTop = {
                normal: {
                    color: '#0C7CB3',
                    label: {
                        show: true,
                        position: 'center',
                        formatter: '{b}',
                        textStyle: {
                            baseline: 'top',
                            color: '#0C7CB3',
                            fontSize: '12'
                        }
                    },
                    labelLine: {
                        show: false
                    }
                }
            };


            var labelFromatter = {
                normal: {
                    label: {
                        formatter: function (params) {
                            return 100 - params.value + '%'
                        },
                        textStyle: {
                            baseline: 'bottom',
                            fontWeight: 'bolder',
                            fontSize: '20',
                            color: '#0C7CB3'
                        }
                    }
                }
            };


            var labelBottom = {
                normal: {
                    color: '#374A60',
                    label: {
                        show: true,
                        position: 'center'
                    },
                    labelLine: {
                        show: false
                    }
                }

            };


            var radius = [55, 50];
            var option = {

                series: [
                    {
                        type: 'pie',
                        center: ['50%', '48%'],
                        radius: radius,
                        itemStyle: labelFromatter,
                        data: [
                            {
                                name: 'other',
                                value: 100 - dataToallyPre,
                                itemStyle: labelBottom
                            },
                            {
                                name: '点击完成率',
                                value: dataToallyPre,
                                itemStyle: labelTop
                            }
            ]
        }]
            };

            myChart.setOption(option);
        },
        //环形图右边
        huanrRight: function (id, res, time) {

            var dataToally = parseFloat(res.list.series[0].data[0]) + parseFloat(res.list.series[0].data[1]) + parseFloat(res.list.series[0].data[2]) + parseFloat(res.list.series[0].data[3]);
            //console.log(dataToally);
            $("#leadsToalData").html(dataToally);
            var dataToallyPre = parseInt((dataToally / 800000) * 100);
            //console.log(dataToallyPre);

            var $id = document.getElementById(id)

            var myChart = echarts.init($id);
            var labelTop = {
                normal: {
                    color: '#009476',
                    label: {
                        show: true,
                        position: 'center',
                        formatter: '{b}',
                        textStyle: {
                            baseline: 'top',
                            color: '#009476',
                            fontSize: '12'
                        }
                    },
                    labelLine: {
                        show: false
                    }
                }
            };


            var labelFromatter = {
                normal: {
                    label: {
                        formatter: function (params) {
                            return 100 - params.value + '%'
                        },
                        textStyle: {
                            baseline: 'bottom',
                            fontWeight: 'bold',
                            fontSize: '20',
                            color: '#009476'
                        }
                    }
                }
            };


            var labelBottom = {
                normal: {
                    color: '#374A60',
                    label: {
                        show: true,
                        position: 'center'
                    },
                    labelLine: {
                        show: false
                    }
                }

            };


            var radius = [55, 50];
            var option = {

                series: [
                    {
                        type: 'pie',
                        center: ['50%', '48%'],
                        radius: radius,
                        itemStyle: labelFromatter,
                        data: [
                            {
                                name: 'other',
                                value: 100 - dataToallyPre,
                                itemStyle: labelBottom
                            },
                            {
                                name: 'LEADS完成率',
                                value: dataToallyPre,
                                itemStyle: labelTop
                            }
            ]
        }]
            };

            myChart.setOption(option);
        },

    };
    //----------------------------------------------
    //---自定义事件绑定的回调函数定义区--------------------
    var bindCustEvtFuns = {};
    //----------------------------------------------

    //---广播事件绑定的回调函数定义区---------------------
    var bindListenerFuns = {};
    //-------------------------------------------

    //---参数的验证方法定义区---------------------------
    var argsCheck = function (node) {
        if (node == null) {
            throw "[]:argsCheck()-The param node is not a DOM node.";
        } else {
            _this.DOM = node;
        }
    };
    //-------------------------------------------

    //---模块的初始化方法定义区-------------------------
    var initPlugins = function () {
        //头部环形
        Contect.getData('targetCan', 'total', 'c', 'q', '', _this.huanLeft);
        Contect.getData('leadsCan', 'total', 'l', 'q', '', _this.huanrRight);

        //点击目标  默认页面
        //点击总体完成情况

        Contect.getData('tarTotalQuarter', 'total', 'c', 'q', '', Contect.charsQuar);
        Contect.getData('#tarTotalQuarInfor', 'total', 'c', 'q', '', null, _this.quarTable);
        //点击分推广方式完成情况
        Contect.getData('tarPopuYear', 'way', 'c', 'y', '', Contect.charsYear);
        Contect.getData('#tarPopuQuarInfor', 'way', 'c', 'y', '', null, _this.yearTable);
        //点击分渠道完成情况
        Contect.getData('tarChanYear', 'channel', 'c', 'y', '', Contect.charsYear);
        Contect.getData('#tarChanQuarInfor', 'channel', 'c', 'y', '', null, _this.yearTable);
        // //点击分业务线完成情况
        Contect.getData('tarBusYear', 'bline', 'c', 'y', '', Contect.charsYear);
        Contect.getData('#tarBusQuarInfor', 'bline', 'c', 'y', '', null, _this.yearTable);




    };
    //-------------------------------------------

    //---DOM事件绑定方法定义区-------------------------
    var bindDOM = function () {


        //点击总体完情况

        //点击总体完情况 按季度点击
        $('#tarTotalQuarterRadio').on("click", function () {
                //显示详细信息按钮
                $('#tarTotalInformation').show();
                //隐藏具体表格
                $('#tarTotalQuardetInformation').hide();
                //显示出来季度的button
                _this.clickButton("#tarTotalQuarButton");
                //显示出来将要装季度的echars的div
                _this.clickDiv("#tarTotalQuarter");
                //画季度的echars
                Contect.getData('tarTotalQuarter', 'total', 'c', 'q', '', Contect.charsQuar);
                //总体季度的详细的表格 
                Contect.getData('#tarTotalQuarInfor', 'total', 'c', 'q', '', null, _this.quarTable);
            })
            //点击总体完情况 季度详细
        $('#tarTotalQuarButton').on("click", function () {
            $('#tarTotalQuardetInformation').show();


        })

        //点击总体完情况 按月点击
        $('#tarTotalMonthRadio').on("click", function () {
            //显示详细信息按钮
            $('#tarTotalInformation').show();
            $('#tarTotalQuardetInformation').hide();
            _this.clickButton("#tarTotalMouthButton");
            _this.clickDiv("#tarTotalMonth");
            Contect.getData('tarTotalMonth', 'total', 'c', 'm', '', Contect.charsMouth);
            Contect.getData('#tarTotalQuarInfor', 'total', 'c', 'm', '', null, _this.quarTable);
        })

        //点击总体完情况 月份详细
        $('#tarTotalMouthButton').on("click", function () {
            $('#tarTotalQuardetInformation').show();
        })

        //点击总体完情况 按日点击
        $('#tarTotalDayRadio').on("click", function () {
            //显示详细信息按钮
            $('#tarTotalInformation').hide();
            //隐藏关于详细信息部分的div
            $('#tarTotalQuardetInformation').hide();
            _this.clickDiv("#tarTotalDay");
            Contect.getData('tarTotalDay', 'total', 'c', 'd', '', Contect.charsMouth);
        })




        //点击分推广情况 按年点击
        $('#tarPopuYearRadio').on("click", function () {
            //显示年度排行
            $('#tarPopuSortYear').show();
            //显示详细信息按钮最外层
            $('#tarPopuInformation').show();
            //详细信息隐藏
            $('#tarPopuQuardetInformation').hide();
            //显示出来年度的button
            _this.clickButton("#tarPopuYearButton");
            //显示出来将要装年度的echars的div
            _this.clickDiv("#tarPopuYear");
            //画年度的echars
            Contect.getData('tarPopuYear', 'way', 'c', 'y', '', Contect.charsYear);
            //总体年度的详细的表格
            Contect.getData('#tarPopuQuarInfor', 'way', 'c', 'y', '', null, _this.yearTable);
        });


        //年度详细信息按钮
        $('#tarPopuYearButton').on("click", function () {
            $('#tarPopuQuardetInformation').show();
        })


        //点击分推广情况 季度详细
        $('#tarPopuQuarterRadio').on("click", function () {
            //隐藏年度排行
            $('#tarPopuSortYear').hide();
            //显示详细信息按钮最外层
            $('#tarPopuInformation').show();
            //详细信息隐藏
            $('#tarPopuQuardetInformation').hide();
            //显示出来季度的button
            _this.clickButton("#tarPopuQuarButton");
            //显示出来将要装季度的echars的div
            _this.clickDiv("#tarPopuQuarter");
            //画季度的echars
            Contect.getData('tarPopuQuarter', 'way', 'c', 'q', '', Contect.charsQuar);
            //总体季度的详细的表格
            Contect.getData('#tarPopuQuarInfor', 'way', 'c', 'q', '', null, _this.quarTable);
        })

        //季度详细信息按钮
        $('#tarPopuQuarButton').on("click", function () {
            $('#tarPopuQuardetInformation').show();
        })


        //点击分推广情况 月份详细
        $('#tarPopuMonthRadio').on("click", function () {
            //隐藏年度排行
            $('#tarPopuSortYear').hide();
            //显示详细信息按钮最外层
            $('#tarPopuInformation').show();
            //详细信息隐藏
            $('#tarPopuQuardetInformation').hide();
            //显示出来月度的button
            _this.clickButton("#tarPopuMouthButton");
            //显示出来将要装月度的echars的div
            _this.clickDiv("#tarPopuMonth");
            //画月度的echars
            Contect.getData('tarPopuMonth', 'way', 'c', 'm', '', Contect.charsMouth);
            //月度的详细的表格
            Contect.getData('#tarPopuQuarInfor', 'way', 'c', 'm', '', null, _this.quarTable);
        })

        //月份详细信息按钮
        $('#tarPopuMouthButton').on("click", function () {
            $('#tarPopuQuardetInformation').show();
        });

        //点击分推广情况   按日情况
        $('#tarPopuDayRadio').on("click", function () {
            //隐藏年度排行
            $('#tarPopuSortYear').hide();
            //隐藏关于详细信息部分的div
            $('#tarPopuQuardetInformation').hide();
            //详细信息隐藏按钮
            $('#tarPopuInformation').hide();

            _this.clickDiv("#tarPopuDay");
            Contect.getData('tarPopuDay', 'way', 'c', 'd', '', Contect.charsMouth);
        });





        //点击渠道情况 按年点击
        $('#tarChanYearRadio').on("click", function () {
            //显示年度排行
            $('#tarChanSortYear').show();
            //显示详细信息按钮最外层
            $('#tarChanInformation').show();
            //详细信息隐藏
            $('#tarChanQuardetInformation').hide();
            //显示出来年度的button
            _this.clickButton("#tarChanYearButton");
            //显示出来将要装年度的echars的div
            _this.clickDiv("#tarChanYear");
            //画年度的echars
            Contect.getData('tarChanYear', 'channel', 'c', 'y', '', Contect.charsYear);
            //总体年度的详细的表格
            Contect.getData('#tarChanQuarInfor', 'channel', 'c', 'y', '', null, _this.yearTable);
        });


        //年度详细信息按钮
        $('#tarChanYearButton').on("click", function () {
            $('#tarChanQuardetInformation').show();
        });


        //点击渠道情况 季度详细
        $('#tarChanQuarRadio').on("click", function () {
            //隐藏年度排行
            $('#tarChanSortYear').hide();
            //显示详细信息按钮最外层
            $('#tarChanInformation').show();
            //详细信息隐藏
            $('#tarChanQuardetInformation').hide();
            //显示出来季度的button
            _this.clickButton("#tarChanQuarButton");
            //显示出来将要装季度的echars的div
            _this.clickDiv("#tarChanQuarter");
            //画季度的echars
            Contect.getData('tarChanQuarter', 'channel', 'c', 'q', '', Contect.charsQuar);
            //总体季度的详细的表格
            Contect.getData('#tarChanQuarInfor', 'channel', 'c', 'q', '', null, _this.quarTable);
        })

        //季度详细信息按钮
        $('#tarChanQuarButton').on("click", function () {
            $('#tarChanQuardetInformation').show();
        })


        //月份详细
        $('#tarChanMonthRadio').on("click", function () {
            //隐藏年度排行
            $('#tarChanSortYear').hide();
            //显示详细信息按钮最外层
            $('#tarChanInformation').show();
            //详细信息隐藏
            $('#tarChanQuardetInformation').hide();
            //显示出来月度的button
            _this.clickButton("#tarChanMouthButton");
            //显示出来将要装月度的echars的div
            _this.clickDiv("#tarChanMonth");
            //画月度的echars
            Contect.getData('tarChanMonth', 'way', 'c', 'm', '', Contect.charsMouth);
            //月度的详细的表格
            Contect.getData('#tarChanQuarInfor', 'way', 'c', 'm', '', null, _this.quarTable);
        })

        //月份详细信息按钮
        $('#tarChanMouthButton').on("click", function () {
            $('#tarChanQuardetInformation').show();
        });





        //点击业务情况 按年点击
        $('#tarBusYearRadio').on("click", function () {
            //显示年度排行
            $('#tarBusSortYear').show();
            //显示详细信息按钮最外层
            $('#tarBusInformation').show();
            //详细信息隐藏
            $('#tarBusQuardetInformation').hide();
            //显示出来年度的button
            _this.clickButton("#tarBusYearButton");
            //显示出来将要装年度的echars的div
            _this.clickDiv("#tarBusYear");
            //画年度的echars
            Contect.getData('tarBusYear', 'bline', 'c', 'y', '', Contect.charsYear);
            //总体年度的详细的表格
            Contect.getData('#tarBusQuarInfor', 'bline', 'c', 'y', '', null, _this.yearTable);
        });


        //年度详细信息按钮
        $('#tarBusYearButton').on("click", function () {
            $('#tarBusQuardetInformation').show();
        });


        // 季度详细
        $('#tarBusQuarRadio').on("click", function () {
            //隐藏年度排行
            $('#tarBusSortYear').hide();
            //隐藏下面分页
            $('.page-num').hide();
            //详细信息隐藏
            $('#tarBusQuardetInformation').hide();
            //显示详细信息按钮最外层
            $('#tarBusInformation').show();
            //显示出来季度的button
            _this.clickButton("#tarBusQuarButton");
            //显示出来将要装季度的echars的div
            _this.clickDiv("#tarBusQuarter");
            //画季度的echars
            Contect.getData('tarBusQuarter', 'bline', 'c', 'q', '', Contect.charsQuar);
            //总体季度的详细的表格
            Contect.getData('#tarBusQuarInfor', 'bline', 'c', 'q', '', null, _this.quarTable);
        })

        //季度详细信息按钮
        $('#tarBusQuarButton').on("click", function () {
            $('#tarBusQuardetInformation').show();
        })


        //月份详细
        $('#tarBusMonthRadio').on("click", function () {
            //隐藏下面分页
            $('.page-num').hide();
            //年度排行
            $('#tarBusSortYear').hide();
            //显示详细信息按钮最外层
            $('#tarBusInformation').show();
            //详细信息隐藏
            $('#tarBusQuardetInformation').hide();
            //显示出来月度的button
            _this.clickButton("#tarBusMouthButton");
            //显示出来将要装月度的echars的div
            _this.clickDiv("#tarBusMonth");
            //画月度的echars
            Contect.getData('tarBusMonth', 'bline', 'c', 'm', '', Contect.charsMouth);
            //月度的详细的表格
            Contect.getData('#tarBusQuarInfor', 'bline', 'l', 'm', '', null, _this.quarTable);
        })

        //月份详细信息按钮
        $('#tarBusMouthButton').on("click", function () {
            $('#tarBusQuardetInformation').show();
        });




        //线索量总体情况 按季度点击
        $('#leadsTotaQuarterRadio').on("click", function () {
                //显示详细信息按钮
                $('#leadsTotaInformation').show();
                //详细信息表格隐藏  
                $('#leadsTotaQuarInformation').hide();
                //显示出来季度的button
                _this.clickButton("#leadsTotaQuarButton");
                //显示出来将要装季度的echars的div
                _this.clickDiv("#leadsTotaQuarter");
                //画季度的echars
                Contect.getData('leadsTotaQuarter', 'total', 'l', 'q', '', Contect.charsQuar);
                //总体季度的详细的表格 
                Contect.getData('#leadsTotaQuarInfor', 'total', 'l', 'q', '', null, _this.quarTable);
            })
            //总体完情况 季度详细
        $('#leadsTotaQuarButton').on("click", function () {
            $('#leadsTotaQuarInformation').show();
        })

        //总体完情况 按月点击
        $('#leadsTotaMonthRadio').on("click", function () {
            //显示详细信息按钮
            $('#leadsTotaInformation').show();
            $('#leadsTotaQuarInformation').hide();
            _this.clickButton("#leadsTotaMouthButton");
            _this.clickDiv("#leadsTotaMonth");
            Contect.getData('leadsTotaMonth', 'total', 'l', 'm', '', Contect.charsMouth);
            Contect.getData('#leadsTotaQuarInfor', 'total', 'l', 'm', '', null, _this.quarTable);
        })

        //总体完情况 月份详细
        $('#leadsTotaMouthButton').on("click", function () {
            $('#leadsTotaQuarInformation').show();
        })

        //总体完情况 按日点击
        $('#leadsTotaDayRadio').on("click", function () {
            //隐藏关于详细信息部分的div
            $('#leadsTotaQuarInformation').hide();
            $('#leadsTotaInformation').hide();
            _this.clickDiv("#leadsTotaDay");
            Contect.getData('leadsTotaDay', 'total', 'l', 'd', '', Contect.charsMouth);
        })





        //线索量分推广完情况 按年点击
        $('#leadsPopuYearRadio').on("click", function () {
            //年度排行
            $('#leadsPopuSortYear').show();
            //显示详细信息按钮最外层
            $('#leadsPopuInformation').show();
            //详细信息隐藏
            $('#leadsPopuQuarInformation').hide();
            //显示出来年度的button
            _this.clickButton("#leadsPopuYearButton");
            //显示出来将要装年度的echars的div
            _this.clickDiv("#leadsPopuYear");
            //画年度的echars
            Contect.getData('leadsPopuYear', 'way', 'l', 'y', '', Contect.charsYear);
            //总体年度的详细的表格
            Contect.getData('#tarBusQuarInfor', 'way', 'l', 'y', '', null, _this.yearTable);
        })


        //年度详细信息按钮
        $('#leadsPopuYearButton').on("click", function () {
            $('#leadsPopuQuarInformation').show();
        })


        //分推广情况 季度详细
        $('#leadsPopuQuarterRadio').on("click", function () {
            //年度排行
            $('#leadsPopuSortYear').hide();
            //显示详细信息按钮最外层
            $('#leadsPopuInformation').show();
            //详细信息隐藏
            $('#leadsPopuQuarInformation').hide();
            //显示出来季度的button
            _this.clickButton("#leadsPopuQuarButton");
            //显示出来将要装季度的echars的div
            _this.clickDiv("#leadsPopuQuarter");
            //画季度的echars
            Contect.getData('leadsPopuQuarter', 'way', 'l', 'q', '', Contect.charsQuar);
            //总体季度的详细的表格
            Contect.getData('#leadsPopuQuarInfor', 'way', 'l', 'q', '', null, _this.quarTable);
        })

        //季度详细信息按钮
        $('#leadsPopuQuarButton').on("click", function () {
            $('#leadsPopuQuarInformation').show();
        })



        //分推广情况 月份详细
        $('#leadsPopuMonthRadio').on("click", function () {
            //年度排行
            $('#leadsPopuSortYear').hide();
            //显示详细信息按钮最外层
            $('#leadsPopuInformation').show();
            //详细信息隐藏
            $('#leadsPopuQuarInformation').hide();
            //显示出来月度的button
            _this.clickButton("#leadsPopuMouthButton");
            //显示出来将要装月度的echars的div
            _this.clickDiv("#leadsPopuMonth");
            //画月度的echars
            Contect.getData('leadsPopuMonth', 'way', 'l', 'm', '', Contect.charsMouth);
            //月度的详细的表格
            Contect.getData('#leadsPopuQuarInfor', 'way', 'l', 'm', '', null, _this.quarTable);
        })

        //月份详细信息按钮
        $('#leadsPopuMouthButton').on("click", function () {
            $('#leadsPopuQuarInformation').show();
        });

        //分推广情况   按日情况
        $('#leadsPopuDayRadio').on("click", function () {
            //隐藏年度排行
            $('#leadsPopuSortYear').hide();
            //隐藏关于详细信息部分的div
            $('#leadsPopuInformation').hide();
            //详细信息隐藏
            $('#leadsPopuQuarInformation').hide();

            _this.clickDiv("#leadsPopuDay");
            Contect.getData('leadsPopuDay', 'way', 'l', 'd', '', Contect.charsMouth);
        });






        //线索量分内部情况 按年点击
        $('#leadsInYearRadio').on("click", function () {
            //显示年度排行
            $('#leadsInSortYear').show();
            //显示详细信息按钮最外层
            $('#leadsInInformation').show();
            //详细信息隐藏
            $('#leadsInQuarInformation').hide();
            //显示出来年度的button
            _this.clickButton("#leadsInYearButton");
            //显示出来将要装年度的echars的div
            _this.clickDiv("#leadsInYear");
            //画年度的echars
            Contect.getData('leadsInYear', 'channel', 'l', 'y', '1', Contect.charsYear);
            //总体年度的详细的表格
            Contect.getData('#leadsInQuarInfor', 'channel', 'l', 'y', '1', null, _this.yearTable);
        });


        //年度详细信息按钮
        $('#leadsInYearButton').on("click", function () {
            $('#leadsInQuarInformation').show();
        });


        //内部渠道情况 季度详细
        $('#leadsInQuarRadio').on("click", function () {
            //显示年度排行
            $('#leadsInSortYear').hide();
            //显示详细信息按钮最外层
            $('#leadsInInformation').show();
            //详细信息隐藏
            $('#leadsInQuarInformation').hide();
            //显示出来季度的button
            _this.clickButton("#leadsInQuarButton");
            //显示出来将要装季度的echars的div
            _this.clickDiv("#leadsInQuarter");
            //画季度的echars
            Contect.getData('leadsInQuarter', 'channel', 'l', 'q', '1', Contect.charsQuar);
            //总体季度的详细的表格
            Contect.getData('#leadsInQuarInfor', 'channel', 'l', 'q', '1', null, _this.quarTable);
        })

        //季度详细信息按钮
        $('#leadsInQuarButton').on("click", function () {
            $('#leadsInQuarInformation').show();
        })


        //月份详细
        $('#leadsInMonthRadio').on("click", function () {
            //显示年度排行
            $('#leadsInSortYear').hide();
            //显示详细信息按钮最外层
            $('#leadsInInformation').show();
            //详细信息隐藏
            $('#leadsInQuarInformation').hide();
            //显示出来月度的button
            _this.clickButton("#leadsInMouthButton");
            //显示出来将要装月度的echars的div
            _this.clickDiv("#leadsInMonth");
            //画月度的echars
            Contect.getData('leadsInMonth', 'channel', 'l', 'm', '1', Contect.charsMouth);
            //月度的详细的表格
            Contect.getData('#tarChanQuarInfor', 'channel', 'l', 'm', '1', null, _this.quarTable);
        })


        //月份详细信息按钮
        $('#leadsInMouthButton').on("click", function () {
            $('#leadsInQuarInformation').show();
        });





        //线索量分外部情况 按年点击
        $('#leadsExYearRadio').on("click", function () {
            //显示年度排行
            $('#leadsExSortYear').show();
            //显示详细信息按钮最外层
            $('#leadsExInformation').show();
            //详细信息隐藏
            $('#leadsExQuarInformation').hide();
            //显示出来年度的button
            _this.clickButton("#leadsExYearButton");
            //显示出来将要装年度的echars的div
            _this.clickDiv("#leadsExYear");
            //画年度的echars
            Contect.getData('leadsExYear', 'channel', 'l', 'y', '2', Contect.charsYear);
            //总体年度的详细的表格
            Contect.getData('#leadsExQuarInfor', 'channel', 'l', 'y', '2', null, _this.yearTable);
        });


        //年度详细信息按钮
        $('#leadsExYearButton').on("click", function () {
            $('#leadsExQuarInformation').show();
        });


        //渠道情况 季度详细
        $('#leadsExQuarRadio').on("click", function () {
            //隐藏下面分页
            $('.page-num').hide();
            //年度排行
            $('#leadsExSortYear').hide();
            //显示详细信息按钮最外层
            $('#leadsExInformation').show();
            //详细信息隐藏
            $('#leadsExQuarInformation').hide();
            //显示出来季度的button
            _this.clickButton("#leadsExQuarButton");
            //显示出来将要装季度的echars的div
            _this.clickDiv("#leadsExQuarter");
            //画季度的echars
            Contect.getData('leadsExQuarter', 'channel', 'l', 'q', '2', Contect.charsQuar);
            //总体季度的详细的表格
            Contect.getData('#leadsExQuarInfor', 'channel', 'l', 'q', '2', null, _this.quarTable);
        })

        //季度详细信息按钮
        $('#leadsExQuarButton').on("click", function () {
            $('#leadsExQuarInformation').show();
        })



        //月份详细
        $('#leadsExMonthRadio').on("click", function () {
            //隐藏下面分页
            $('.page-num').hide();
            //年度排行
            $('#leadsExSortYear').hide();
            //显示详细信息按钮最外层
            $('#leadsExInformation').show();
            //详细信息隐藏
            $('#leadsExQuarInformation').hide();
            //显示出来月度的button
            _this.clickButton("#leadsExMouthButton");
            //显示出来将要装月度的echars的div
            _this.clickDiv("#leadsExMonth");
            //画月度的echars
            Contect.getData('leadsExMonth', 'channel', 'l', 'm', '2', Contect.charsMouth);
            //月度的详细的表格
            Contect.getData('#tarChanQuarInfor', 'channel', 'l', 'm', '2', null, _this.quarTable);
        })

        //月份详细信息按钮
        $('#leadsExMouthButton').on("click", function () {
            $('#leadsExQuarInformation').show();
        });






        //线索量业务情况 按年点击
        $('#leadsBusYearRadio').on("click", function () {
            //显示年度排行
            $('#leadsBustYear').show();
            //显示详细信息按钮最外层
            $('#leadsBusInformation').show();
            //详细信息隐藏
            $('#leadsBusQuarInformation').hide();
            //显示出来年度的button
            _this.clickButton("#leadsBusYearButton");
            //显示出来将要装年度的echars的div
            _this.clickDiv("#leadsBusYear");
            //画年度的echars
            Contect.getData('leadsBusYear', 'bline', 'l', 'y', '', Contect.charsYear);
            //总体年度的详细的表格
            Contect.getData('#leadsBusQuarInfor', 'bline', 'l', 'y', '', null, _this.yearTable);
        });


        //年度详细信息按钮
        $('#leadsBusYearButton').on("click", function () {
            $('#leadsBusQuarInformation').show();
        });


        // 季度详细
        $('#leadsBusQuarRadio').on("click", function () {
            //隐藏年度排行
            $('#leadsBustYear').hide();
            //隐藏下面分页
            $('.page-num').hide();
            //显示详细信息按钮最外层
            $('#leadsBusInformation').show();
            //详细信息隐藏
            $('#leadsBusQuarInformation').hide();
            //显示出来季度的button
            _this.clickButton("#leadsBusQuarButton");
            //显示出来将要装季度的echars的div
            _this.clickDiv("#leadsBusQuarter");
            //画季度的echars
            Contect.getData('leadsBusQuarter', 'bline', 'l', 'q', '', Contect.charsQuar);
            //总体季度的详细的表格
            Contect.getData('#leadsBusQuarInfor', 'bline', 'l', 'q', '', null, _this.quarTable);
        })

        //季度详细信息按钮
        $('#leadsBusQuarButton').on("click", function () {
            $('#leadsBusQuarInformation').show();
        })


        //月份详细
        $('#leadsBusMonthRadio').on("click", function () {
            //隐藏年度排行
            $('#leadsBustYear').hide();
            //隐藏下面分页
            $('.page-num').hide();
            //显示详细信息按钮最外层
            $('#leadsBusInformation').show();
            //详细信息隐藏
            $('#leadsBusQuarInformation').hide();
            //显示出来月度的button
            _this.clickButton("#leadsBusMouthButton");
            //显示出来将要装月度的echars的div
            _this.clickDiv("#leadsBusMonth");
            //画月度的echars
            Contect.getData('leadsBusMonth', 'bline', 'l', 'm', '', Contect.charsMouth);
            //月度的详细的表格
            Contect.getData('#leadsBusQuarInfor', 'bline', 'l', 'm', '', null, _this.quarTable);
        })

        //月份详细信息按钮
        $('#leadsBusMouthButton').on("click", function () {
            $('#leadsBusQuarInformation').show();
        });


        //查看详情按钮点击

        $('#targetCan_Details').on("click", function () {
            //console.log("5655656")
            $('.targetDetails').show();
            $('.leadsDetails').hide();

        });



        $('#leadsCan_Details').on("click", function () {
            //console.log("7878787878")
            $('.leadsDetails').show();
            $('.targetDetails').hide();

            //线索量总体完情况 默认页面
            //点击总体完成情况
            Contect.getData('leadsTotaQuarter', 'total', 'l', 'q', '', Contect.charsQuar);
            Contect.getData('#leadsTotaQuarInfor', 'total', 'l', 'q', '', null, _this.quarTable);
            //点击分推广方式完成情况
            Contect.getData('leadsPopuYear', 'way', 'l', 'y', '', Contect.charsYear, null);
            Contect.getData('#leadsPopuQuarInfor', 'way', 'l', 'y', '', null, _this.yearTable);
            //点击分渠道完成情况
            Contect.getData('leadsInYear', 'channel', 'l', 'y', '1', Contect.charsYear);
            Contect.getData('#leadsInQuarInfor', 'channel', 'l', 'y', '1', null, _this.yearTable);

            Contect.getData('leadsExYear', 'channel', 'l', 'y', '2', Contect.charsYear);
            Contect.getData('#leadsExQuarInfor', 'channel', 'l', 'y', '2', null, _this.yearTable);
            //点击分业务线完成情况
            Contect.getData('leadsBusYear', 'bline', 'l', 'y', '', Contect.charsYear);
            Contect.getData('#leadsBusQuarInfor', 'bline', 'l', 'y', '', null, _this.yearTable);

        });






        //分页下面的 123 页
        $(".page-num").on("click", "a", function () {
            event.preventDefault();
            var p = parseInt($(this).html());
            console.log(p);
            $(".p").hide(); //所有的行隐藏
            $(".p_" + p).show(); //某一个页的行被显示
        });



        //更多
        $("#tarMoreBtn").on("click", function () {
            $('#tarhiddenText').toggle();
            console.log($("#tarMoreBtn  span").text());
            if ($("#tarMoreBtn  span").text()=="更多") {
                $("#tarMoreBtn  span").text("收起");
                $("#tarMoreBtn  i").addClass("packUp");

            }else{
                 $("#tarMoreBtn  span").text("更多");
                $("#tarMoreBtn  i").removeClass("packUp");
            };
        });


        $("#leadsMoreBut").on("click", function () {
            $('#leadsHiddenText').toggle();
              console.log($("#tarMoreBtn  span").text());
            if ($("#leadsMoreBut  span").text()=="更多") {
                $("#leadsMoreBut  span").text("收起");
                $("#leadsMoreBut  i").addClass("packUp");

            }else{
                 $("#leadsMoreBut  span").text("更多");
                $("#leadsMoreBut  i").removeClass("packUp");
            };
        });




       $(".detInformation").on("click", "i", function () {
           //$(this).parent("div").hide();
           $(".detInformation").hide();
       });


    };
    //-------------------------------------------

    //---自定义事件绑定方法定义区------------------------
    var bindCustEvt = function () {

    };
    //-------------------------------------------

    //---广播事件绑定方法定义区------------------------
    var bindListener = function () {

    };
    //-------------------------------------------

    var initChoosen = function () {

    };

    //---组件公开方法的定义区---------------------------
    init.prototype.destroy = function () {
        if (_this) {
            $.foreach(_this.objs, function (o) {
                if (o && o.destroy) {
                    o.destroy();
                }
            });
            _this = null;
        }
    };
    //-------------------------------------------
    //---组件的初始化方法定义区-------------------------
    // var init = function() {
    // };
    //-------------------------------------------

    //---组件公开属性或方法的赋值区----------------------
    module.exports = init;
    //-------------------------------------------
});