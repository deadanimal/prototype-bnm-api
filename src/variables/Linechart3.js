import React, { Component } from "react";
// import "../App.css";
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";

import { Card, CardHeader, CardBody, CardFooter, Row, Col } from "reactstrap";

am4core.useTheme(am4themes_animated);

class Linechart3 extends Component {
  componentDidMount() {
    // Create chart instance
    let chart = am4core.create("linechart3", am4charts.XYChart);
    // let chart = am4core.create("linechart3", am4charts.XYChart);
    // let chart = am4core.create("chartdiv", am4charts.XYChart);

    // Add data
    chart.data = [
      {
        year: "2020-03-01",
        value: 140,
        value1: 130,
        value2: 135
        // germany: 5,
        // uk: 3
      },
      {
        year: "2020-03-02",
        value: 120,
        value1: 124,
        value2: 134
        // germany: 2,
        // uk: 6
      },
      {
        year: "2020-03-03",
        value: 110,
        value1: 143,
        value2: 153
        // germany: 3,
        // uk: 1
      },
      {
        year: "2020-03-04",
        value: 125,
        value1: 143,
        value2: 142
        // germany: 4,
        // uk: 1
      },
      {
        year: "2020-03-05",
        value: 104,
        value1: 123,
        value2: 132
        // germany: 1,
        // uk: 2
      },
      {
        year: "2020-03-06",
        value: 100,
        value1: 123,
        value2: 142
        // germany: 2,
        // uk: 1
      },
      {
        year: "2020-03-07",
        value: 102,
        value1: 129,
        value2: 139
        // germany: 2,
        // uk: 3
      },
      {
        year: "2020-03-08",
        value: 132,
        value1: 142,
        value2: 150
        // germany: 1,
        // uk: 5
      }
    ];

    // Create category axis
    let categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis());
    categoryAxis.dataFields.category = "year";
    categoryAxis.renderer.grid.template.location = 0;
    categoryAxis.renderer.minGridDistance = 30;
    categoryAxis.renderer.labels.template.horizontalCenter = "right";
    categoryAxis.renderer.labels.template.verticalCenter = "middle";
    categoryAxis.renderer.labels.template.rotation = 270;
    // categoryAxis.tooltip.disabled = true;
    // categoryAxis.renderer.opposite = true;

    // Create value axis
    let valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
    // valueAxis.renderer.inversed = true;
    valueAxis.title.text = "Users";
    // valueAxis.renderer.minLabelPosition = 0.01;

    // Create series
    let series1 = chart.series.push(new am4charts.LineSeries());
    series1.dataFields.valueY = "value";
    series1.dataFields.categoryX = "year";
    series1.name = "API Call";
    series1.strokeWidth = 8;
    // series1.tensionX = 0.8;
    // series1.bullets.push(new am4charts.CircleBullet());
    series1.tooltipText = "{name} = {categoryX}: {valueY}";
    series1.legendSettings.valueText = "{valueY}";
    series1.visible = false;

    let series2 = chart.series.push(new am4charts.LineSeries());
    series2.dataFields.valueY = "value1";
    series2.dataFields.categoryX = "year";
    series2.name = "Error";
    series2.strokeWidth = 8;
    // series2.tensionX = 0.8;
    // series2.bullets.push(new am4charts.CircleBullet());
    series2.tooltipText = "{name} = {categoryX}: {valueY}";
    series2.legendSettings.valueText = "{valueY}";
    series2.visible = false;

    let series3 = chart.series.push(new am4charts.LineSeries());
    series3.dataFields.valueY = "value2";
    series3.dataFields.categoryX = "year";
    series3.name = "Latency";
    series3.strokeWidth = 8;
    // series3.tensionX = 0.8;
    // series3.bullets.push(new am4charts.CircleBullet());
    series3.tooltipText = "{name} = {categoryX}: {valueY}";
    series3.legendSettings.valueText = "{valueY}";
    series3.visible = false;

    // let bullet = series1.bullets.push(new am4charts.CircleBullet());
    // bullet.circle.fill = am4core.color("#fff");
    // bullet.circle.strokeWidth = 3;

    // Add cursor
    chart.cursor = new am4charts.XYCursor();
    chart.cursor.fullWidthLineX = true;
    chart.cursor.xAxis = categoryAxis;
    chart.cursor.lineX.strokeWidth = 0;
    chart.cursor.lineX.fill = am4core.color("#000");
    chart.cursor.lineX.fillOpacity = 0.1;

    // Add scrollbar
    // chart.scrollbarX = new am4core.Scrollbar();

    // Add chart cursor
    // chart.cursor = new am4charts.XYCursor();
    chart.cursor.behavior = "zoomY";

    // Add legend
    // chart.legend = new am4charts.Legend();
  }

  render() {
    return (
      <div id="linechart3" style={{ width: "100%", height: "450px" }}></div>
    );
  }
}

export default Linechart3;
