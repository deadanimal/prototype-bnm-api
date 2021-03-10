import React, { Component } from "react";
// import "../App.css";
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";
// import am4themes_kelly from "@amcharts/amcharts4/themes/kelly";

import { Card, CardHeader, CardBody, CardFooter, Row, Col } from "reactstrap";
// am4core.useTheme(am4themes_kelly);

am4core.useTheme(am4themes_animated);

class Barchart5 extends Component {
  componentDidMount() {
    // import * as am4core from "@amcharts/amcharts4/core";
    // import * as am4charts from "@amcharts/amcharts4/charts";
    // import am4themes_animated from "@amcharts/amcharts4/themes/animated";

    // /* Chart code */
    // // Themes begin
    // am4core.useTheme(am4themes_animated);
    // // Themes end

    // Create chart instance
    let chart = am4core.create("barchart5", am4charts.XYChart);
    // let chart = am4core.create("chartdiv", am4charts.XYChart);

    // let data = [];
    // let value = 120;

    chart.data = [
      {
        category: "Jan",
        value: 1100
      },
      {
        category: "Feb",
        value: 1200
      },
      { category: "Mar", value: 1322 },
      { category: "Apr", value: 1321 },
      { category: "May", value: 1245 },
      { category: "Jun", value: 1423 },
      { category: "Jul", value: 1333 },
      { category: "Aug", value: 1232 },
      { category: "Sep", value: 1322 },
      { category: "Oct", value: 1111 },
      { category: "Nov", value: 1444 },
      { category: "Dec", value: 1222 }
    ];

    // for (var i = 0; i < names.length; i++) {
    //   value += Math.round((Math.random() < 0.5 ? 1 : -1) * Math.random() * 5);
    //   data.push({ category: names[i], value: value });
    // }

    // chart.data = data;
    let categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis());
    categoryAxis.renderer.grid.template.location = 0;
    categoryAxis.dataFields.category = "category";
    categoryAxis.renderer.minGridDistance = 15;
    categoryAxis.renderer.grid.template.location = 0.5;
    categoryAxis.renderer.grid.template.strokeDasharray = "1,3";
    categoryAxis.renderer.labels.template.rotation = -90;
    categoryAxis.renderer.labels.template.horizontalCenter = "left";
    categoryAxis.renderer.labels.template.location = 0.5;

    categoryAxis.renderer.labels.template.adapter.add("dx", function(
      dx,
      target
    ) {
      return -target.maxRight / 2;
    });

    let valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
    valueAxis.tooltip.disabled = true;
    valueAxis.renderer.ticks.template.disabled = true;
    valueAxis.renderer.axisFills.template.disabled = true;

    let series = chart.series.push(new am4charts.ColumnSeries());
    series.dataFields.categoryX = "category";
    series.dataFields.valueY = "value";
    series.tooltipText = "{valueY.value}";
    series.sequencedInterpolation = true;
    series.fillOpacity = 0;
    series.strokeOpacity = 1;
    series.strokeDashArray = "1,3";
    series.columns.template.width = 0.01;
    series.tooltip.pointerOrientation = "horizontal";

    let bullet = series.bullets.create(am4charts.CircleBullet);

    chart.cursor = new am4charts.XYCursor();

    // chart.scrollbarX = new am4core.Scrollbar();
    // chart.scrollbarY = new am4core.Scrollbar();
    // }
  }

  render() {
    return (
      <div id="barchart5" style={{ width: "100%", height: "400px" }}></div>
    );
  }
}

export default Barchart5;
