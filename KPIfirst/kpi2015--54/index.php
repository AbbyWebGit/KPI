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
        <link rel="stylesheet" href="http://bigstatic.bitautoimg.com/apps/KPI2015/css/page/kpi.css">

</head>

<body>
    <div class="topKpi">
        <div class="topTitle">
            <p class="titleFirst">2015精准广告平台中心</p>
            <p class="titleSecond">目标及完成情况</p>
        </div>

        <div class="targetCompletion">
            <div id="targetCan_Details" class="targetHits">
                <div id="targetCan" style="height:148px;" class="targetCan"></div>
                <div class="tarText">
                    <p>目标点击量：80,000,000</p>
                    <p class="tarSpeText">完成点击量：<span id="tarToalData">hehehe</span></p>
                </div>
                <span class="checkDetails">查看详情</span>
            </div>
            <div id="leadsCan_Details" class="leadsHits">
                <div id="leadsCan" style="height:148px" class="leadsCan"></div>
                <div class="tarText">
                    <p>目标线索量：800,000</p>
                    <p class="leadsSpeText">完成线索量：<span id="leadsToalData">hehehe</span></p>
                </div>
                <span class="checkDetails">查看详情</span>

            </div>
        </div>

    </div>
    <div class="line"></div>




    <!-- 目标点击量 -->
    <div class="kpiMain clearfix">
        
            <div class="targetDetails">
                <!-- 点击总体情况 -->
                <div class="targetTotality">
                    <p class="tarTotaText">点击总体完成情况</p>
                    <!-- 点击总体情况三个单选按钮 -->
                    <div class="radio">
                        <label class="radioText">
                            <input id="tarTotalQuarterRadio" name="totalityTar" type="radio" value="quarter" checked="checked" />按季度</label>
                        <label class="radioText">
                            <input id="tarTotalMonthRadio" name="totalityTar" type="radio" value="month" />按月 </label>
                        <label class="radioText">
                            <input id="tarTotalDayRadio" name="totalityTar" type="radio" value="day" />按日 </label>
                    </div>

                    <!-- 点击总体情况三个画布 -->
                    <div class="clickHidden">
                        <div id="tarTotalQuarter" style="height:430px;" class="tarTotalQuarter"></div>
                        <div id="tarTotalMonth" style="height:430px;display:none;" class="tarTotalMonth"></div>
                        <div id="tarTotalDay" style="height:430px;display:none" class="tarTotalDay"></div>
                    </div>

                    <!-- 点击总体情况两个详细按钮 -->
                  <div id="tarTotalInformation">                 
                      <a id="tarTotalQuarButton"  class="tarTotalInformation">详细信息</a>
                      <a id="tarTotalMouthButton"  class="tarTotalInformation" style="display:none">详细信息</a>
                  </div>

              <!--       <label id="tarTotalInformation">
                        <input id="tarTotalQuarButton" class="tarTotalQuarButton" type="button" value="详细信息" />
                        <input id="tarTotalMouthButton" class="tarTotalQuarButton" style="display:none" type="button" value="详细信息" />
                    </label> -->

                    <div id="tarTotalQuardetInformation" class="detInformation"style="display:none;">
                        <div id="tarTotalQuarInfor" class="tarTotalQuarInfor"></div>
                    </div>


                </div>




                <!-- 点击分推广式完成情况 -->
                <div class="targetPopularize">
                    <p class="tarTotaText">点击分推广方式完成情况</p>
                    <div class="radio">
                        <label class="radioText">
                            <input id="tarPopuYearRadio" name="popularizeTar" type="radio" value="year" checked="checked" />按年</label>
                        <label class="radioText">
                            <input id="tarPopuQuarterRadio" name="popularizeTar" type="radio" value="quarter" />按季度</label>
                        <label class="radioText">
                            <input id="tarPopuMonthRadio" name="popularizeTar" type="radio" value="month" />按月 </label>
                        <label class="radioText">
                            <input id="tarPopuDayRadio" name="popularizeTar" type="radio" value="day" />按日 </label>
                    </div>
                    <div class="clickHidden" style="position: relative;">
                        <div id="tarPopuYear" style="height:430px;" class="tarPopuYear">
                        </div>
                        <ul id="tarPopuSortYear" class="tarPopuSortYear"></ul>
                        <div id="tarPopuQuarter" style="height:430px;" class="tarPopuQuarter"></div>
                        <div id="tarPopuMonth" style="height:430px;display:none" class="tarPopuMonth"></div>
                        <div id="tarPopuDay" style="height:430px;display:none" class="tarPopuDay"></div>
                    </div>



                 <!-- 点击分推广式情况详细按钮 -->
                  <div id="tarPopuInformation">                 
                      <a id="tarPopuYearButton"  class="tarTotalInformation">详细信息</a>
                      <a id="tarPopuQuarButton" class="tarTotalInformation" style="display:none">详细信息</a>
                      <a id="tarPopuMouthButton" class="tarTotalInformation" style="display:none">详细信息</a>
                  </div>

                   <!--  <label id="tarPopuInformation">
                        <input id="tarPopuYearButton" class="tarTotalQuarButton" type="button" value="详细信息" />
                        <input id="tarPopuQuarButton" class="tarTotalQuarButton" style="display:none" type="button" value="详细信息" />
                        <input id="tarPopuMouthButton" class="tarTotalQuarButton" style="display:none" type="button" value="详细信息" />
                    </label> -->

                    <div id="tarPopuQuardetInformation" class="detInformation">
                        <div id="tarPopuQuarInfor" class="tarTotalQuarInfor"></div>
                    </div>


                </div>


                <div class="targetChannele" style="position: relative;">
                    <p class="tarTotaText">点击分渠道完成情况</p>
                    <div class="radio">
                        <label class="radioText">
                            <input id="tarChanYearRadio" name="channelTar" type="radio" value="year" checked="checked" />按年</label>
                        <label class="radioText">
                            <input id="tarChanQuarRadio" name="channelTar" type="radio" value="quarter" />按季度</label>
                        <label class="radioText">
                            <input id="tarChanMonthRadio" name="channelTar" type="radio" value="month" />按月 </label>
                    </div>
                    <div class="clickHidden">
                        <div id="tarChanYear" style="height:430px" class="tarChanYear"></div>
                        <ul id="tarChanSortYear" class="tarPopuSortYear"></ul>
                        <div id="tarChanQuarter" style="height:430px;display:none" class="tarChanQuarter"></div>
                        <div id="tarChanMonth" style="height:430px;display:none" class="tarChanMonth"></div>
                    </div>

                    <!-- 点击分渠道式情况详细按钮 -->
                 <div id="tarChanInformation">                 
                      <a id="tarChanYearButton"  class="tarTotalInformation">详细信息</a>
                      <a id="tarChanQuarButton" class="tarTotalInformation" style="display:none">详细信息</a>
                      <a id="tarChanMouthButton" class="tarTotalInformation" style="display:none">详细信息</a>
                  </div>

                   <!--  <label id="tarChanInformation">
                        <input id="tarChanYearButton" class="tarTotalQuarButton" type="button" value="详细信息" />
                        <input id="tarChanQuarButton" class="tarTotalQuarButton" style="display:none" type="button" value="详细信息" />
                        <input id="tarChanMouthButton" class="tarTotalQuarButton" style="display:none" type="button" value="详细信息" />
                    </label> -->
                    <div id="tarChanQuardetInformation" class="detInformation" style="display:none">
                        <div id="tarChanQuarInfor" class="tarTotalQuarInfor"></div>
                    </div>
                </div>


                <div class="targetBusiness" style="position: relative;">
                    <p class="tarTotaText">点击分业务线完成情况</p>
                    <div class="radio">
                        <label class="radioText">
                            <input id="tarBusYearRadio" name="businessTar" type="radio" value="year" checked="checked" />按年</label>
                        <label class="radioText">
                            <input id="tarBusQuarRadio" name="businessTar" type="radio" value="quarter" />按季度</label>
                        <label class="radioText">
                            <input id="tarBusMonthRadio" name="businessTar" type="radio" value="month" />按月 </label>
                    </div>
                    <div class="clickHidden">
                        <div id="tarBusYear" style="height:700px" class="tarBusYear"></div>
                        <ul id="tarBusSortYear" class="tarPopuSortYear"></ul>
                        <div id="tarBusQuarter" style="height:430px;display:none" class="tarBusQuarter"></div>
                        <div id="tarBusMonth" style="height:430px;display:none" class="tarBusMonth"></div>
                    </div>
                    <!-- 点击业务线情况详细按钮 -->
                <div id="tarBusInformation">                 
                      <a  id="tarBusYearButton"  class="tarTotalInformation">详细信息</a>
                      <a  id="tarBusQuarButton" class="tarTotalInformation" style="display:none">详细信息</a>
                      <a  id="tarBusMouthButton" class="tarTotalInformation" style="display:none">详细信息</a>
                  </div>

                   <!--  <label id="tarBusInformation">
                        <input id="tarBusYearButton" class="tarTotalQuarButton" type="button" value="详细信息" />
                        <input id="tarBusQuarButton" class="tarTotalQuarButton" style="display:none" type="button" value="详细信息" />
                        <input id="tarBusMouthButton" class="tarTotalQuarButton" style="display:none" type="button" value="详细信息" />
                    </label> -->
                    <div id="tarBusQuardetInformation" class="detInformation"  style="display:none">
                        <div id="tarBusQuarInfor" class="tarTotalQuarInfor"></div>
                        <div class="page-num"></div>
                    </div>
                </div>

                <div class="tarText">
                  <div class="tarTextInfor">
                    <p>上图为精准广告平台中心2015年完成点击量的情况，统计范围包括易车自有媒体上应用精准广告技术和内容推荐的广告所产生的点击量，并分别从“渠道”和“业务线”两个层面展现按日和按月的数据报告。</p>
                    <p id="tarhiddenText" style="display:none;">内投广告指应用精准广告系统推广的广告、动态广告&购车页广告项目以及固定位广告项目；内容推荐指易车APP与报价大全的活动频道以及内容推荐广告位以及频道。业务线的点击数据分别来源于本中心通过监测技术获得的点击报告以及各业务线每日反馈的邮件报告。
                    </p>
                  </div>
                  <div class="moreBtn">
                    <span id="tarMoreBtn" class="tarMoreBtn">
                        <span class="moreUp">更多</span>
                        <i></i>
                    </span>  
                  </div>
                </div>

            </div>


            <!-- 线索点击量 -->

            <div class="leadsDetails" style="display:none">

                <div class="leadsTotality" style="position: relative;">
                    <p class="tarTotaText">线索量总体完情况</p>
                    <div class="radio">
                        <label class="radioText">
                            <input id="leadsTotaQuarterRadio" name="totalityLeads" type="radio" value="quarter" checked="checked" />按季度</label>
                        <label class="radioText">
                            <input id="leadsTotaMonthRadio" name="totalityLeads" type="radio" value="month" />按月 </label>
                        <label class="radioText">
                            <input id="leadsTotaDayRadio" name="totalityLeads" type="radio" value="day" />按日 </label>
                    </div>
                    <div class="clickHidden">
                        <div id="leadsTotaQuarter" style="height:430px;" class="leadsTotaQuarter"></div>
                        <div id="leadsTotaMonth" style="height:430px;display:none" class="leadsTotaMonth"></div>
                        <div id="leadsTotaDay" style="height:430px;display:none" class="leadsTotasDay"></div>
                    </div>

                    <!-- 线索量总体情况两个详细按钮 -->
                    <div id="leadsTotaInformation">                 
                      <a  id="leadsTotaQuarButton" class="tarTotalInformation">详细数据</a>
                      <a  id="leadsTotaMouthButton" class="tarTotalInformation" style="display:none">详细数据</a>
                  </div>

                 <!--    <label id="leadsTotaInformation">
                        <input id="leadsTotaQuarButton" class="tarTotalQuarButton" type="button" value="详细信息" />
                        <input id="leadsTotaMouthButton" class="tarTotalQuarButton" style="display:none" type="button" value="详细信息" />
                    </label> -->
                    <div id="leadsTotaQuarInformation" class="detInformation" style="display:none">
                        <div id="leadsTotaQuarInfor" class="tarTotalQuarInfor"></div>
                    </div>

                </div>


                <div class="leadsPopularize" style="position: relative;">
                    <p class="tarTotaText">线索量分推广式完成情况</p>
                    <div class="radio">
                        <label class="radioText">
                            <input id="leadsPopuYearRadio" name="popularizeLeads" type="radio" value="year" checked="checked" />按年</label>
                        <label class="radioText">
                            <input id="leadsPopuQuarterRadio" name="popularizeLeads" type="radio" value="quarter" />按季度</label>
                        <label class="radioText">
                            <input id="leadsPopuMonthRadio" name="popularizeLeads" type="radio" value="month" />按月 </label>
                        <label class="radioText">
                            <input id="leadsPopuDayRadio" name="popularizeLeads" type="radio" value="day" />按日 </label>
                    </div>
                    <div class="clickHidden">
                        <div id="leadsPopuYear" style="height:700px;" class="leadsPopuYear"></div>
                        <ul id="leadsPopuSortYear" class="tarPopuSortYear"></ul>
                        <div id="leadsPopuQuarter" style="height:430px;display:none" class="leadsPopuQuarter"></div>
                        <div id="leadsPopuMonth" style="height:430px;display:none" class="leadsPopuMonth"></div>
                        <div id="leadsPopuDay" style="height:430px;display:none" class="leadsPopuDay"></div>
                    </div>

                    <!-- 线索量分推广式情况详细按钮 -->
                    <div  id="leadsPopuInformation">                 
                      <a  id="leadsPopuYearButton" class="tarTotalInformation">详细数据</a>
                      <a  id="leadsPopuQuarButton" class="tarTotalInformation" style="display:none">详细数据</a>
                      <a  id="leadsPopuMouthButton" class="tarTotalInformation" style="display:none">详细数据</a>
                   </div>

                    <!-- <label id="leadsPopuInformation">
                        <input id="leadsPopuYearButton" class="tarTotalQuarButton" type="button" value="详细信息" />
                        <input id="leadsPopuQuarButton" class="tarTotalQuarButton" style="display:none" type="button" value="详细信息" />
                        <input id="leadsPopuMouthButton" class="tarTotalQuarButton" style="display:none" type="button" value="详细信息" />
                    </label> -->
                    <div id="leadsPopuQuarInformation" class="detInformation" style="display:none">
                        <div id="leadsPopuQuarInfor" class="tarTotalQuarInfor"></div>
                    </div>

                </div>



                <div class="leadsInside" style="position: relative;">
                    <p class="tarTotaText">线索量分内部渠道完成情况</p>
                    <div class="radio">
                        <label class="radioText">
                            <input id="leadsInYearRadio" name="insideLeads" type="radio" value="year" checked="checked" />按年</label>
                        <label class="radioText">
                            <input id="leadsInQuarRadio" name="insideLeads" type="radio" value="quarter" />按季度</label>
                        <label class="radioText">
                            <input id="leadsInMonthRadio" name="insideLeads" type="radio" value="month" />按月 </label>
                    </div>
                    <div class="clickHidden">
                        <div id="leadsInYear" style="height:700px" class="leadsInYear"></div>
                        <ul id="leadsInSortYear" class="tarPopuSortYear"></ul>
                        <div id="leadsInQuarter" style="height:430px;display:none" class="leadsInQuarter"></div>
                        <div id="leadsInMonth" style="height:430px;display:none" class="leadsInMonth"></div>
                    </div>
                    <!-- 线索分内部渠道式情况详细按钮 -->
                  <div   id="leadsInInformation">                 
                      <a  id="leadsInYearButton" class="tarTotalInformation">详细数据</a>
                      <a  id="leadsInQuarButton" class="tarTotalInformation" style="display:none">详细数据</a>
                      <a  id="leadsInMouthButton" class="tarTotalInformation" style="display:none">详细数据</a>
                   </div>

    <!--                 <label id="leadsInInformation">
                        <input id="leadsInYearButton" class="tarTotalQuarButton" type="button" value="详细信息" />
                        <input id="leadsInQuarButton" class="tarTotalQuarButton" style="display:none" type="button" value="详细信息" />
                        <input id="leadsInMouthButton" class="tarTotalQuarButton" style="display:none" type="button" value="详细信息" />
                    </label> -->
                    <div id="leadsInQuarInformation" class="detInformation" style="display:none">
                        <div id="leadsInQuarInfor" class="tarTotalQuarInfor"></div>
                    </div>

                </div>

                <div class="leadsExternal" style="position: relative;">
                    <p class="tarTotaText">线索量分外部渠道完成情况</p>
                    <div class="radio">
                        <label class="radioText">
                            <input id="leadsExYearRadio" name="externalLeads" type="radio" value="year" checked="checked" />按年</label>
                        <label class="radioText">
                            <input id="leadsExQuarRadio" name="externalLeads" type="radio" value="quarter" />按季度</label>
                        <label class="radioText">
                            <input id="leadsExMonthRadio" name="externalLeads" type="radio" value="month" />按月 </label>
                    </div>

                    <div class="clickHidden">
                        <div id="leadsExYear" style="height:400px" class="leadsExYear"></div>
                        <ul id="leadsExSortYear" class="tarPopuSortYear"></ul>
                        <div id="leadsExQuarter" style="height:430px;display:none" class="leadsExQuarter"></div>
                        <div id="leadsExMonth" style="height:430px;display:none" class="leadsExMonth"></div>
                    </div>
                    <!-- 线索量分外部渠道式情况详细按钮 -->
                    <div  id="leadsExInformation">                 
                      <a  id="leadsExYearButton" class="tarTotalInformation">详细数据</a>
                      <a  id="leadsExQuarButton" class="tarTotalInformation" style="display:none">详细数据</a>
                      <a  id="leadsExMouthButton" class="tarTotalInformation" style="display:none">详细数据</a>
                   </div>

                <!--     <label id="leadsExInformation">
                        <input id="leadsExYearButton" class="tarTotalQuarButton" type="button" value="详细信息" />
                        <input id="leadsExQuarButton" class="tarTotalQuarButton" style="display:none" type="button" value="详细信息" />
                        <input id="leadsExMouthButton" class="tarTotalQuarButton" style="display:none" type="button" value="详细信息" />
                    </label> -->
                    <div id="leadsExQuarInformation" class="detInformation">
                        <div id="leadsExQuarInfor" class="tarTotalQuarInfor"></div>
                        <div class="page-num"></div>
                    </div>
                </div>


                <div class="leadsBusiness" style="position: relative;">
                    <p class="tarTotaText">线索量分业务线完成情况</p>
                    <div class="radio">
                        <label class="radioText">
                            <input id="leadsBusYearRadio" name="businessLeads" type="radio" value="year" checked="checked" />按年</label>
                        <label class="radioText">
                            <input id="leadsBusQuarRadio" name="businessLeads" type="radio" value="quarter" />按季度</label>
                        <label class="radioText">
                            <input id="leadsBusMonthRadio" name="businessLeads" type="radio" value="month" />按月 </label>
                    </div>
                    <div class="clickHidden">
                        <div id="leadsBusYear" style="height:400px" class="leadsBusYear"></div>
                        <ul id="leadsBustYear" class="tarPopuSortYear"></ul>
                        <div id="leadsBusQuarter" style="height:430px;display:none" class="leadsBusQuarter"></div>
                        <div id="leadsBusMonth" style="height:430px;display:none" class="leadsBusMonth"></div>
                    </div>
                    <!-- 线索量业务详细 -->
                   <div  id="leadsBusInformation">                 
                      <a  id="leadsBusYearButton" class="tarTotalInformation">详细数据</a>
                      <a  id="leadsBusQuarButton" class="tarTotalInformation" style="display:none">详细数据</a>
                      <a  id="leadsBusMouthButton" class="tarTotalInformation" style="display:none">详细数据</a>
                   </div>
                  <!--   <label id="leadsBusInformation">
                        <input id="leadsBusYearButton" class="tarTotalQuarButton" type="button" value="详细信息" />
                        <input id="leadsBusQuarButton" class="tarTotalQuarButton" style="display:none" type="button" value="详细信息" />
                        <input id="leadsBusMouthButton" class="tarTotalQuarButton" style="display:none" type="button" value="详细信息" />
                    </label> -->
                    <div id="leadsBusQuarInformation" class="detInformation" >
                        <div id="leadsBusQuarInfor" class="tarTotalQuarInfor"></div>
                        <div class="page-num"></div>

                    </div>


                </div>
                
                <div class="tarText">
                  <div class="tarTextInfor">
                    <p>上图为精准广告平台中心2015年完成点击量的情况，统计范围包括易车自有媒体上应用精准广告技术和内容推荐的广告所产生的点击量，并分别从“渠道”和“业务线”两个层面展现按日和按月的数据报告。</p>
                    <p id="leadsHiddenText" style="display:none;">内投广告指应用精准广告系统推广的广告、动态广告&购车页广告项目以及固定位广告项目；内容推荐指易车APP与报价大全的活动频道以及内容推荐广告位以及频道。业务线的点击数据分别来源于本中心通过监测技术获得的点击报告以及各业务线每日反馈的邮件报告。
                    </p>
                  </div>
                  <div class="moreBtn">
                    <span id="leadsMoreBut" class="tarMoreBtn">
                        <span class="moreUp">更多</span>
                        <i></i>
                    </span>  
                  </div>
                </div>

               <!--  <div class="tarText">
                    <p>上图为精准广告平台中心2015年完成Leads数量的情况，统计范围包括通过易车内部以及外部渠道推广的易车活动所收集的线索数量，并分别从“渠道”和“业务线”两个层面展现按日和按月的数据报告。 以上Leads数据分别来源于本中心通过监测技术生成的线索统计报告以及各业务线、各渠道每日反馈的邮件报告。</p>
                    <p id="leadsHiddenText" style="display:none">其中，内投广告指应用精准广告系统推广的广告、动态广告&购车页广告项目以及固定位广告项目；内容推荐广告包含易车APP与报价大全的活动频道；外投广告包含微信、新意精准、广点通、今日头条、百度SEM等外部渠道投放的广告。</p>
                    <input type="button"  class="MoreBut" value="更多" />
                </div> -->
            </div>


    </div>

    <script src="http://bigstatic.bitautoimg.com/apps/KPI2015/js/base/echarts-all.js"></script>
    <script src="http://bigstatic.bitautoimg.com/apps/KPI2015/js/base/sea.js"></script>
    <script>
        seajs.config({
            base: "http://bigstatic.bitautoimg.com/apps/KPI2015/js/base",
            alias: {
                "jquery": "jquery.js"
            },
        });
        seajs.use("http://bigstatic.bitautoimg.com/apps/KPI2015/js/main");
    </script>
</body>

</html>