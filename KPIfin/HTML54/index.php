<!DOCTYPE HTML>
<html lang="en" class="no-js">

<head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>测试--2015年精准广告平台中心目标及完成情况</title>
    <meta name="description" content="" />
    <meta name="keywords" content="" />
    <?php $this->load->view('common.php') ?>
        <!--common php 不加载  把样式直接拿到页面-->
  <link rel="stylesheet" href="http://bigstatic.bitautoimg.com/apps/newKPI2015/css/kpi.css">

</head>

<body>
    <div class="kpi">
        <div class="kpiTop">
            <div class="kpiTopMain">
                <div class="kpiTitle">
                    <h1>2015精准广告平台中心</h1>
                    <h3>目标及完成情况</h3>
                </div>
                <div class="kpiTopPic ">
                    <div class="kpiTopLeft" data-ring="topRing">
                        <div class="leftPic"  id="leftPic" data-type="c"></div>
                        <div class="tarWord">
                            <p>目标点击量：80,000,000</p>
                            <p class="leftSpeWord">完成点击量：<span class="dataDetails">0000</span></p>
                        </div>
                        <p class="CheckDetails">查看详情</p>
                    </div>
                    <div class="kpiTopRight" data-ring="topRing">
                        <div class="rightPic"  id="rightPic" data-type="l"></div>
                        <div class="leadsWord">
                            <p>目标线索量：800,000</p>
                            <p class="rightSpeWord">完成线索量：<span class="dataDetails">0000</span></p>
                        </div>
                        <p class="CheckDetails">查看详情</p>
                    </div>
                </div>
            </div>
            <div class="kpiTopBottom"></div>
        </div>
        <!-- kpi内容 -->
        <div class="kpiMain">
            <!-- 点击详细 -->
            <div class="targetDetails">
                <div class="targetTotality" data-parent="kpi">
                    <p class="canvasText">点击总体完成情况</p>
                    <div  class="radio">
                        <label>
                            <input  id="targetTotal" data-event="click" data-type="c" data-time="q" data-way="total" name="totalityTar" type="radio" value="quarter" checked="checked" />按季度</label>
                        <label>
                            <input  data-event="click" data-type="c" data-time="m" data-way="total" name="totalityTar" type="radio" value="month" />按月 </label>
                        <label>
                            <input  data-event="click" data-type="c" data-time="d" data-way="total" name="totalityTar" type="radio" value="day" />按日</label>
                    </div>
                    <div class="layer">
                    <div class="tarCanvas"></div>
                    <ul class="sortYear"></ul>                
                    <a class="detailButton">详细数据</a>
                    <div class="layerTable"></div>
                    </div>
                </div>
                <div class="targetPopularize" data-parent="kpi">
                    <p class="canvasText">点击分推广方式完成情况</p>
                    <div class="radio">
                        <label>
                            <input  id="targetPopu" data-event="click" data-type="c" data-time="y" data-way="way" name="popularizeTar" type="radio" value="year" checked="checked" />按年</label>
                        <label>
                            <input  data-event="click" data-type="c" data-time="q" data-way="way"name="popularizeTar" type="radio" value="quarter" />按季度</label>
                        <label>
                            <input  data-event="click" data-type="c" data-time="m" data-way="way"name="popularizeTar" type="radio" value="month" />按月 </label>
                        <label>
                            <input  data-event="click" data-type="c" data-time="d" data-way="way"name="popularizeTar" type="radio" value="day" />按日 </label>
                    </div>
                    <div class="layer">
                    <div class="tarCanvas"></div>
                    <ul class="sortYear"></ul>                
                    <a class="detailButton">详细数据</a>
                    <div class="layerTable"></div>
                    </div>

                </div>

                <div class="targetChannele" data-parent="kpi">
                    <p class="canvasText">点击分渠道完成情况</p>
                    <div class="radio">
                        <label>
                            <input id="targetChan" data-event="click" data-type="c" data-time="y" data-way="channel" name="channelTar" type="radio" value="year" checked="checked" />按年</label>
                        <label>
                            <input data-event="click" data-type="c" data-time="q" data-way="channel" name="channelTar" type="radio" value="quarter" />按季度</label>
                        <label>
                            <input data-event="click" data-type="c" data-time="m" data-way="channel" name="channelTar" type="radio" value="month" />按月 </label>
                    </div>
                    <div class="layer">
                    <div class="tarCanvas"></div>
                    <ul class="sortYear"></ul>                
                    <a class="detailButton">详细数据</a>
                    <div class="layerTable"></div>
                    </div>
                </div>
                <div class="targetBusiness" data-parent="kpi">
                    <p class="canvasText">点击分业务线完成情况</p>
                    <div class="radio">
                        <label>
                            <input id="targetBus" data-event="click" data-type="c" data-time="y" data-way="bline"  name="businessTar" type="radio" value="year" checked="checked" />按年</label>
                        <label>
                            <input  data-event="click" data-type="c" data-time="q" data-way="bline" name="businessTar" type="radio" value="quarter" />按季度</label>
                        <label>
                            <input  data-event="click" data-type="c" data-time="m" data-way="bline" name="businessTar" type="radio" value="month" />按月 </label>
                    </div>
                     <div class="layer">
                    <div class="tarCanvas"></div>
                    <ul class="sortYear"></ul>                
                    <a class="detailButton">详细数据</a>
                    <div class="layerTable"></div>
                    </div>
                </div>
                <div class="more" data-parent="kpiMore">
                    <div class="moreText" >
                        <p>上图为精准广告平台中心2015年完成点击量的情况，统计范围包括易车自有媒体上应用精准广告技术和内容推荐的广告所产生的点击量，并分别从“渠道”和“业务线”两个层面展现按日和按月的数据报告。</p>
                        <p class="none"> 内投广告指应用精准广告系统推广的广告、动态广告&购车页广告项目以及固定位广告项目；内容推荐指易车APP与报价大全的活动频道以及内容推荐广告位以及频道。业务线的点击数据分别来源于本中心通过监测技术获得的点击报告以及各业务线每日反馈的邮件报告。</p>
                    </div>
                    <div class="moreBt">
                        <div class="tarmoreBt">
                            <span class="moreWord">更多</span>
                            <i class="downIcon"></i>
                        </div>
                    </div>
                </div>
            </div>
            <!-- 线索量详细 -->
            <div class="leadsDetails">
                <div class="leadsTotality" data-parent="kpi">
                  <p class="canvasText">线索量总体完成情况</p>
                    <div class="radio">
                        <label>
                            <input  id="leadsTotal" data-event="click" data-type="l" data-time="q" data-way="total" name="totalityLeads" type="radio" value="quarter" checked="checked" />按季度</label>
                        <label>
                            <input  data-event="click" data-type="l" data-time="m" data-way="total" name="totalityLeads" type="radio" value="month" />按月 </label>
                        <label>
                            <input data-event="click" data-type="l" data-time="d" data-way="total" name="totalityLeads" type="radio" value="day" />按日 </label>
                    </div>
                      <div class="layer">
                    <div class="tarCanvas"></div>
                    <ul class="sortYear"></ul>                
                    <a class="detailButton">详细数据</a>
                    <div class="layerTable"></div>
                    </div>
                </div>
                <div class="leadsPopularize" data-parent="kpi">
                    <p class="canvasText">线索量分推广方式完成情况</p>
                    <div class="radio">
                        <label>
                            <input  id="leadsPopu" data-event="click" data-type="l" data-time="y" data-way="way" name="popularizeLeads" type="radio" value="year" checked="checked" />按年</label>
                        <label>
                            <input  data-event="click" data-type="l" data-time="q" data-way="way" name="popularizeLeads" type="radio" value="quarter" />按季度</label>
                        <label>
                            <input  data-event="click" data-type="l" data-time="m" data-way="way" name="popularizeLeads" type="radio" value="month" />按月 </label>
                        <label>
                            <input  data-event="click" data-type="l" data-time="d" data-way="way" name="popularizeLeads" type="radio" value="day" />按日 </label>
                    </div>
                    <div class="layer">
                    <div class="tarCanvas"></div>
                    <ul class="sortYear"></ul>                
                    <a class="detailButton">详细数据</a>
                    <div class="layerTable"></div>
                    </div>
                </div>
                <div class="leadsInside" data-parent="kpi">
                    <p class="canvasText">线索量分内部渠道完成情况</p>
                    <div class="radio">
                        <div class="radio">
                        <label>
                            <input id="leadsIn" data-event="click" data-type="l" data-time="y" data-way="channel" data-mode="1" name="insideLeads" type="radio" value="year" checked="checked" />按年</label>
                        <label>
                            <input data-event="click" data-type="l" data-time="q" data-way="channel" data-mode="1" name="insideLeads" type="radio" value="quarter" />按季度</label>
                        <label>
                            <input data-event="click" data-type="l" data-time="m" data-way="channel" data-mode="1" name="insideLeads" type="radio" value="month" />按月 </label>
                    </div>
                    </div>
                    <div class="layer">
                    <div class="tarCanvas"></div>
                    <ul class="sortYear"></ul>                
                    <a class="detailButton">详细数据</a>
                    <div class="layerTable"></div>
                    </div>
                </div>
                <div class="leadsExternal" data-parent="kpi">
                    <p class="canvasText">线索量分外部渠道完成情况</p>
                    <div class="radio">
                        <label>
                            <input id="leadsEx" data-event="click" data-type="l" data-time="y" data-way="channel" data-mode="2" name="externalLeads" type="radio" value="year" checked="checked" />按年</label>
                        <label>
                            <input data-event="click" data-type="l" data-time="q" data-way="channel" data-mode="2" name="externalLeads" type="radio" value="quarter" />按季度</label>
                        <label>
                            <input  data-event="click" data-type="l" data-time="m" data-way="channel" data-mode="2" name="externalLeads" type="radio" value="month" />按月 </label>
                    </div>
                    <div class="layer">
                    <div class="tarCanvas"></div>
                    <ul class="sortYear"></ul>                
                    <a class="detailButton">详细数据</a>
                    <div class="layerTable"></div>
                    </div>
                </div>
                <div class="leadsBusiness" data-parent="kpi">
                    <p class="canvasText">线索量分业务线完成情况</p>
                    <div class="radio">
                        <label>
                            <input id="leadsBus" data-event="click" data-type="l" data-time="y" data-way="bline" name="businessLeads" type="radio" value="year" checked="checked" />按年</label>
                        <label>
                            <input data-event="click" data-type="l" data-time="q" data-way="bline"  name="businessLeads" type="radio" value="quarter" />按季度</label>
                        <label>
                            <input data-event="click" dat-type="l" data-time="m" data-way="bline"  name="businessLeads" type="radio" value="month" />按月 </label>
                    </div>
                   <div class="layer">
                    <div class="tarCanvas"></div>
                    <ul class="sortYear"></ul>                
                    <a class="detailButton">详细数据</a>
                    <div class="layerTable"></div>
                    </div>
                </div>

               <div class="more" data-parent="kpiMore">
                    <div class="moreText" >
                        <p>上图为精准广告平台中心2015年完成Leads数量的情况，统计范围包括通过易车内部以及外部渠道推广的易车活动所收集的线索数量，并分别从“渠道”和“业务线”两个层面展现按日和按月的数据报告。</p>
                        <p class="none"> 以上Leads数据分别来源于本中心通过监测技术生成的线索统计报告以及各业务线、各渠道每日反馈的邮件报告。
其中，内投广告指应用精准广告系统推广的广告、动态广告&amp;购车页广告项目以及固定位广告项目；内容推荐广告包含易车APP与报价大全的活动频道；外投广告包含微信、新意精准、广点通、今日头条、百度SEM等外部渠道投放的广告。</p>
                    </div>
                    <div class="moreBt">
                        <div class="tarmoreBt">
                            <span class="moreWord">更多</span>
                            <i class="downIcon"></i>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </div>

    <script src="http://bigstatic.bitautoimg.com/apps/newKPI2015/js/base/echarts-all.js"></script>
    <script src="http://bigstatic.bitautoimg.com/apps/newKPI2015/js/base/sea.js"></script>
    <script>
        seajs.config({
            base: "http://bigstatic.bitautoimg.com/apps/newKPI2015/js/base",
            alias: {
                "jquery": "jquery.js"
            },
        });
        seajs.use("http://bigstatic.bitautoimg.com/apps/newKPI2015/js/main");
    </script>
</body>

</html>