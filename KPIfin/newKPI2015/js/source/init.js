define(function(require, exports, module) {
    //---引用定义区----------------------------------
    var $ = require("jquery");
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
                    color: [
                        [0.2, '#2ec7c9'],
                        [0.8, '#5ab1ef'],
                        [1, '#d87a80']
                    ],
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
    var _this = {
        DOM: {}, //节点容器
        objs: {}, //组件容器
        DOM_eventFun: { //DOM事件行为容器
        },
        ajaxCanshu: function(id) {
            var _id = $(id);
            var way = _id.data("way");
            var _type = _id.data("type");
            var _time = _id.data("time");
            var _mode = _id.data("mode");
            $.ajax({
                type: "POST",
                url: "/show/get_" + way + "?type=" + _type + "&t=" + _time + "&mode=" + _mode,
                success: function(res) {
                    _this.charsRing(id, res);
                    _this.charsYear(id, res);
                    _this.layerTableData(id, res);
                },
                error: function(e) {
                    console.log(e);
                }
            });
        },
        charsYear: function(id, res) {
            var _id = $(id);
            var _time = _id.data("time");
            var idChars = $(id).parents("div[data-parent=kpi]").find(".tarCanvas");
            var idButton = $(id).parents("div[data-parent=kpi]").find(".detailButton");
            var $id = idChars.next("ul");
            //详细数据按钮显示隐藏
            if (_time == "d") {
                idButton.css("display", "none");
            } else {
                idButton.css("display", "block");
            };

            if (_time == "y") {
                //画年玫瑰图
                //获取length里面的data
                var lenData = [];
                var len = res.list.legend.data.length;
                var item = "";
                for (var i = 0; i < len; i++) {
                    item = res.list.legend.data[i];
                    lenData.push(item);
                }
                //获取series里面的data数据 分为value和name 
                var seriesData = [];
                for (var i = 0, _len = res.list.series.length; i < _len; i++) {
                    var item = {};
                    item.value = res.list.series[i].data;
                    item.name = res.list.series[i].name;
                    seriesData.push(item);
                }
                // console.log(seriesData);
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
                    series: [{
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
                    }, ]
                };

                ($id).css("display", "block");
                _this.sortYear(id, res);


            } else if (_time == "q") {
                //条形堆积图
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
                    yAxis: [{
                        type: 'value'
                    }],
                    xAxis: [{
                        type: 'category',
                        data: xAxisData
                    }],

                    series: seriesData
                };
                ($id).css("display", "none");
            } else {
                //堆积折线图
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
                if (_time == "d") {
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
                    xAxis: [{
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

                    }],
                    yAxis: [{
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
                    }],
                    series: seriesData,
                    dataZoom: dataZoom
                };
                //隐藏年度排行
                ($id).css("display", "none");
            };
            // 为echarts对象加载数据 
            var idChars = $(id).parents("div[data-parent=kpi]").find(".tarCanvas")[0];
            var myChart = echarts.init(idChars);
            myChart.setTheme(_chartTheme);
            myChart.setOption(option);
        },
        //年表排序
        sortYear: function(id, res) {
            var idChars = $(id).parents("div[data-parent=kpi]").find(".tarCanvas");
            var $id = idChars.next("ul");
            var len = "";
            len = res.list.series.length;
            (len > 5) ? len = 5: len;
            var sortYearLi = "";
            for (var i = 0; i < len; i++) {
                sortYearLi += '<li class="sortItem"><i class="sortColor_block' + (i + 1) + '"></i><span class="sortText">top' + (i + 1) + '：' + res.list.series[i].name + '</span></li>'
            };
            ($id).html(sortYearLi);
        },
        layerTableData: function(id, res) {
            var _id = $(id);
            var way = _id.data("way");
            var type = _id.data("type");
            var time = _id.data("time");
            var mode = _id.data("mode");
            // console.log(res);
            //console.log(JSON.stringify(res));
            //表格有多少条数据
            var len = "";
            if (res.list_d) {
                len = res.list_d.series.length;
            } else {
                len = res.list.series.length;
            };
            if (len > 9) {
                var total_page = Math.ceil(len / 8);
                //console.log(total_page);
                //将页码加弹层
                var pageNum = "";
                for (var i = 1; i <= total_page; i++) {
                    pageNum += '<a  class="page_Num" data-page=' + i + '  href="#">' + i + '</a>';
                }
                console.log(pageNum);
                len = 8;

            };
            //定义表格第一列
            var firstTd = [];
            for (var n = 0; n < len; n++) {
                var dataName = "";
                if (len == 8) {
                    dataName = res.list_d.series[n].name;
                    firstTd.push(dataName);
                } else {
                    dataName = res.list.series[n].name;
                    firstTd.push(dataName);
                };
            };
            //定义数据及百分比
            var dataNum = [];
            var dataPre = [];
            for (var i = 0; i < len; i++) {
                var data0 = "";
                var pre0 = "";
                if (len == 8) {
                    for (var j = 0; j < res.list_d.series[i].data.length; j++) {
                        data0 = res.list_d.series[i].data[j]
                        dataNum.push(data0);
                        pre0 = res.list_d.series[i].pre[j];
                        dataPre.push(pre0);
                    }
                } else {
                    for (var j = 0; j < res.list.series[i].data.length; j++) {
                        data0 = res.list.series[i].data[j]
                        dataNum.push(data0);
                        pre0 = res.list.series[i].pre[j];
                        dataPre.push(pre0);
                    }
                };

            };
            //console.log(dataNum);
            //定义表格的题目
            var tableTitle = "";
            //定义表格第一行
            var firstTr = ""
                //判断何种方式
            var wayTitle = "";
            if (way == "way") {
                wayTitle = "分推广方式";
            } else if (way == "channel") {
                if (mode == '1') {
                    wayTitle = "分内部渠道";
                } else if (mode == '2') {
                    wayTitle = "分外部渠道";
                } else {
                    wayTitle = "分渠道";
                };
            } else {
                wayTitle = "分业务线";
            };
            //判断点击还是线索量
            var typeTitle = "";
            if (type == "c") {
                typeTitle = "点击";
            } else {
                typeTitle = "线索量";
            };
            //根据时间显示表格标题及第一行
            if (time == "y") {
                tableTitle = "按全年" + wayTitle + typeTitle + "报告";
                firstTr = '<td >' + wayTitle + '</td><td>' + typeTitle + '</td><td>占比</td>';
            } else {
                if (time == "q") {
                    tableTitle = "按季度" + wayTitle + typeTitle + "报告";
                } else {
                    tableTitle = "按月份" + wayTitle + typeTitle + "报告";
                }
                //定义表格第一行数组 
                firstTr = '<td>时间</td>';
                var timeTitleLink = "";
                for (var i = 0; i < res.list.xAxis.data.length; i++) {
                    firstTr += '<td>' + res.list.xAxis.data[i] + '</td>';
                }
                //console.log(firstTr);
            };
            _this.layerTable(id, tableTitle, firstTr, firstTd, dataNum, dataPre, pageNum);
        },
        layerPagingShow: function(id) {
            var _id = $(id);
            var pageNumber = _id.data("page");
            var $idInfor = $(id).parents("div[data-parent=kpi]").find("input:checked");
            console.log($idInfor.val());
            var way = $idInfor.data("way");
            var type = $idInfor.data("type");
            var time = $idInfor.data("time");
            var mode = $idInfor.data("mode");
            $.ajax({
                type: "POST",
                url: "/show/get_" + way + "?type=" + type + "&t=" + time + "&mode=" + mode,
                success: function(res) {
                    //console.log(JSON.stringify(res));
                    var len = "";
                    len = res.list_d.series.length;
                    //判断最后一页显示的条数
                    var dataLen = pageNumber * 8;
                    (dataLen > len) ? dataLen = len: dataLen = dataLen;
                    //console.log(dataLen);
                    //加页码
                    var total_page = Math.ceil(len / 8);
                    var pageNum = "";
                    for (var i = 1; i <= total_page; i++) {
                        pageNum += '<a  class="page_Num" data-page=' + i + '  href="#">' + i + '</a>';
                    }
                    //定义表格第一列
                    var firstTd = [];
                    for (var n = (pageNumber - 1) * 8; n < dataLen; n++) {
                        dataName = res.list_d.series[n].name;
                        firstTd.push(dataName);
                    };
                    //console.log(firstTd);
                    //定义数据及百分比
                    var dataNum = [];
                    var dataPre = [];
                    for (var i = (pageNumber - 1) * 8; i < dataLen; i++) {
                        var data0 = "";
                        var pre0 = "";
                        for (var j = 0; j < res.list_d.series[i].data.length; j++) {
                            data0 = res.list_d.series[i].data[j]
                            dataNum.push(data0);
                            pre0 = res.list_d.series[i].pre[j];
                            dataPre.push(pre0);
                        }

                    };
                    //console.log(dataNum);
                    //定义表格的题目
                    var tableTitle = "";
                    //定义表格第一行
                    var firstTr = ""
                        //判断何种方式
                    var wayTitle = "";
                    if (way == "way") {
                        wayTitle = "分推广方式";
                    } else if (way == "channel") {
                        if (mode == '1') {
                            wayTitle = "分内部渠道";
                        } else if (mode == '2') {
                            wayTitle = "分外部渠道";
                        } else {
                            wayTitle = "分渠道";
                        };
                    } else {
                        wayTitle = "分业务线";
                    };
                    //判断点击还是线索量
                    var typeTitle = "";
                    if (type == "c") {
                        typeTitle = "点击";
                    } else {
                        typeTitle = "线索量";
                    };
                    //根据时间显示表格标题及第一行
                    if (time == "y") {
                        tableTitle = "按全年" + wayTitle + typeTitle + "报告";
                        firstTr = '<td >' + wayTitle + '</td><td>' + typeTitle + '</td><td>占比</td>';
                    } else {
                        if (time == "q") {
                            tableTitle = "按季度" + wayTitle + typeTitle + "报告";
                        } else {
                            tableTitle = "按月份" + wayTitle + typeTitle + "报告";
                        }
                        //定义表格第一行数组 
                        firstTr = '<td>时间</td>';
                        var timeTitleLink = "";
                        for (var i = 0; i < res.list.xAxis.data.length; i++) {
                            firstTr += '<td>' + res.list.xAxis.data[i] + '</td>';
                        }
                    }
                    _this.layerTable($idInfor, tableTitle, firstTr, firstTd, dataNum, dataPre, pageNum)
                },
                error: function(e) {
                    console.log(e);
                }
            });
        },
        layerTable: function(id, tableTitle, firstTr, firstTd, dataNum, dataPre, pageNum) {
            var _id = $(id);
            var time = _id.data("time");
            console.log(time);
            var tr = "";
            tr += '<tr class="firstTableTr">' + firstTr + '</tr>';
            //console.log(firstTd);
            if (time == "y") {
                for (var i = 0; i < firstTd.length; i++) {
                    var td = "";
                    var tdFin = [];
                    for (var k = 0; k < dataNum.length; k++) {
                        td = '<td>' + dataNum[k] + '</td><td>' + dataPre[k] + '</td>';
                        tdFin.push(td)
                    };
                    tr += '<tr><td>' + firstTd[i] + '</td>' + tdFin[i] + '</tr>';
                }
            } else {
                for (var i = 0; i < firstTd.length; i++) {
                    //循环出来每一个td的数据
                    var tdData = [];
                    var data1 = "";
                    var tdData = [];
                    for (var j = 0; j < dataNum.length; j++) {
                        data1 = dataNum[j] + "</br>(" + dataPre[j] + ")";
                        tdData.push(data1);
                    }
                    //循环数据td
                    //季度的表格，将数据分为4个一组
                    if (time == "q") {
                        var tdFin = [];
                        for (var k = 0; k < (tdData.length) / 4; k++) {
                            var td = "";
                            for (var n = 0; n < 4; n++) {
                                td += '<td>' + tdData[4 * k + n] + '</td>';
                            }
                            tdFin.push(td);
                        }
                        //console.log(tdFin);
                        console.log(tdFin);
                    } else {
                        //月份表格 将数据分为12个一组
                        var tdFin = [];
                        for (var k = 0; k < (tdData.length) / 12; k++) {
                            var td = "";
                            for (var n = 0; n < 12; n++) {
                                td += '<td>' + tdData[12 * k + n] + '</td>';
                            }
                            tdFin.push(td);
                        }
                    };
                    tr += '<tr><td>' + firstTd[i] + '</td>' + tdFin[i] + '</tr>';
                    //console.log(tr);
                }
            };
            len = firstTd.length;
            var layerStyle = "";
            if (time == "m") {
                layerHight = len * 43 + 100;
                layerStyle = 'position: absolute;background-color: #fff;left: 50%;top: 50%;width: 900px;height: ' + layerHight + 'px;margin-left: -450px;margin-top: -' + layerHight / 2 + 'px;border: 1px #CCCCCC solid;'
            } else if (time == "y") {
                layerHight = len * 30 + 110;
                layerStyle = 'position: absolute;background-color: #fff;left: 50%;top: 50%;width: 450px;height: ' + layerHight + 'px;margin-left: -225px;margin-top: -' + layerHight / 2 + 'px;border: 1px #CCCCCC solid;'
            } else {
                layerHight = len * 43 + 100;
                layerStyle = 'position: absolute;background-color: #fff;left: 50%;top: 50%;width: 620px;height: ' + layerHight + 'px;margin-left: -310px;margin-top: -' + layerHight / 2 + 'px;border: 1px #CCCCCC solid;'
            };
            //弹层退出键
            var layerExit = "";
            layerExit = '<i class="layerExit">x</i>';
            var table = '<table class="table"  cellpadding="0" cellspacing="0" >' + tr + '</table>';
            //判断是否有分页
            pageNum = pageNum ? pageNum : "";
            //汇总弹层
            var layerFin = '<div style="' + layerStyle + '">' + layerExit + '<h3 class="layerTitle">' + tableTitle + '</h3>' + table + '<div class="pagingNumber" >' + pageNum + '</div></div>';
            var $idChars = $(id).parents("div[data-parent=kpi]").find(".layerTable");
            $idChars.html(layerFin);
        },
        charsRing: function(id) {
            var _id = $(id);
            var _type = _id.data("type");
            var $idData = _id.parents("div[data-ring=topRing]").find(".dataDetails");
            $.ajax({
                type: "POST",
                url: "/show/get_total?type=" + _type + "&t=q",
                success: function(res) {
                    console.log()
                    var dataToally = parseFloat(res.list.series[0].data[0]) + parseFloat(res.list.series[0].data[1]) + parseFloat(res.list.series[0].data[2]) + parseFloat(res.list.series[0].data[3]);
                    $idData.html(dataToally);
                    var dataToallyPre = "";
                    var colorDiff = "";
                    var nameDiff = "";
                    if (_type == "c") {
                        colorDiff = "#0C7CB3";
                        nameDiff = "点击完成率"
                        dataToallyPre = parseInt((dataToally / 80000000) * 100);
                    } else {
                        colorDiff = "#009476";
                        nameDiff = "LEADS完成率"
                        console.log(dataToally);
                        dataToallyPre = parseInt((dataToally / 800000) * 100);
                    };
                    var $id = _id[0];
                    var myChart = echarts.init($id);
                    var labelTop = {
                        normal: {
                            color: colorDiff,
                            label: {
                                show: true,
                                position: 'center',
                                formatter: '{b}',
                                textStyle: {
                                    baseline: 'top',
                                    color: colorDiff,
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
                                formatter: function(params) {
                                    return 100 - params.value + '%'
                                },
                                textStyle: {
                                    baseline: 'bottom',
                                    fontWeight: 'bolder',
                                    fontSize: '20',
                                    color: colorDiff
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
                        series: [{
                            type: 'pie',
                            center: ['50%', '48%'],
                            radius: radius,
                            itemStyle: labelFromatter,
                            data: [{
                                name: 'other',
                                value: 100 - dataToallyPre,
                                itemStyle: labelBottom
                            }, {
                                name: nameDiff,
                                value: dataToallyPre,
                                itemStyle: labelTop
                            }]
                        }]
                    };
                    myChart.setOption(option);
                },
                error: function(e) {
                    console.log(e);
                }
            });
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
    var argsCheck = function(node) {
        if (node == null) {
            throw "[]:argsCheck()-The param node is not a DOM node.";
        } else {
            _this.DOM = node;
        }
    };
    //-------------------------------------------

    //---模块的初始化方法定义区-------------------------
    var initPlugins = function() {

        _this.ajaxCanshu(targetTotal);
        _this.ajaxCanshu(targetPopu);
        _this.ajaxCanshu(targetChan);
        _this.ajaxCanshu(targetBus);
        _this.charsRing(leftPic);
        _this.charsRing(rightPic);

    };
    //-------------------------------------------

    //---DOM事件绑定方法定义区-------------------------
    var bindDOM = function() {
        $('.kpiTopRight').on('click', function() {
            $(".leadsDetails").css("display", "block");
            $(".targetDetails").css("display", "none");
            _this.ajaxCanshu(leadsTotal);
            _this.ajaxCanshu(leadsPopu);
            _this.ajaxCanshu(leadsIn);
            _this.ajaxCanshu(leadsEx);
            _this.ajaxCanshu(leadsBus);
        });
        $('.kpiTopLeft').on('click', function() {
            $(".leadsDetails").css("display", "none");
            $(".targetDetails").css("display", "block");
        });

        $('body').on('click', 'input[data-event=click]', function() {
            _this.ajaxCanshu(this);
            $(this).parents("div[data-parent=kpi]").find(".layerTable").css("display", "none");
        });

        //弹层退出按钮
        $('body').on('click', '.layerExit', function() {
            $(this).parents("div[data-parent=kpi]").find(".layerTable").css("display", "none");
        });
        //翻页
        $('body').on('click', '.page_Num', function() {
            event.preventDefault();
            _this.layerPagingShow(this);
            console.log($(this));
        });

        //详细信息按钮
        $('.detailButton').on('click', function() {
            $(this).parents("div[data-parent=kpi]").find(".layerTable").css("display", "block");
        });
        //更多
        $('.tarmoreBt').on('click', function() {
            var $idDiv = $(this).parents("div[data-parent=kpiMore]").find(".none");
            ($idDiv).toggle();
            var $idText = $(this).parents("div[data-parent=kpiMore]").find(".moreWord");
            if (($idText).text() == "更多") {
                ($idText).text("收起");
                ($idText).next("i").addClass("packUp");
            } else {
                ($idText).text("更多");
                ($idText).next("i").removeClass("packUp");
            };

        });

    };
    //-------------------------------------------

    //---自定义事件绑定方法定义区------------------------
    var bindCustEvt = function() {

    };
    //-------------------------------------------

    //---广播事件绑定方法定义区------------------------
    var bindListener = function() {

    };
    //-------------------------------------------

    var initChoosen = function() {

    };

    //---组件公开方法的定义区---------------------------
    init.prototype.destroy = function() {
        if (_this) {
            $.foreach(_this.objs, function(o) {
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
