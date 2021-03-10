import React, { Component } from "react";
// import "../App.css";
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";
// import am4themes_kelly from "@amcharts/amcharts4/themes/kelly";

import { Card, CardHeader, CardBody, CardFooter, Row, Col } from "reactstrap";
// am4core.useTheme(am4themes_kelly);

am4core.useTheme(am4themes_animated);

class barchart4 extends Component {
  componentDidMount() {
    // import * as am4core from "@amcharts/amcharts4/core";
    // import * as am4charts from "@amcharts/amcharts4/charts";
    // import am4themes_animated from "@amcharts/amcharts4/themes/animated";

    // /* Chart code */
    // // Themes begin
    // am4core.useTheme(am4themes_animated);
    // // Themes end

    // Create chart instance
    let chart = am4core.create("barchart4barchart4", am4charts.XYChart);
    chart.hiddenState.properties.opacity = 0; // this creates initial fade-in

    chart.data = [
      {
        category: "Fri 17",
        value1: 1100,
        value2: 1500,
        value3: 1300,
        value4: 1202
      },
      {
        category: "Sat 18",
        value1: 1200,
        value2: 1520,
        value3: 1322,
        value4: 1421
      },
      {
        category: "Sun 19",
        value1: 1223,
        value2: 1445,
        value3: 1323,
        value4: 1522
      },
      {
        category: "Mon 20",
        value1: 1214,
        value2: 1225,
        value3: 1236,
        value4: 1211
      },
      {
        category: "Tue 21",
        value1: 1231,
        value2: 1234,
        value3: 1422,
        value4: 1212
      },
      {
        category: "Wed 22",
        value1: 1232,
        value2: 1322,
        value3: 1290,
        value4: 1423
      },
      {
        category: "Thu 23",
        value1: 1232,
        value2: 1322,
        value3: 1290,
        value4: 1423
      }
    ];

    chart.colors.step = 2;
    // chart.padding(30, 30, 10, 30);
    chart.legend = new am4charts.Legend();

    let categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis());
    categoryAxis.dataFields.category = "category";
    categoryAxis.renderer.grid.template.location = 0;
    categoryAxis.renderer.minGridDistance = 30;
    categoryAxis.renderer.labels.template.horizontalCenter = "right";
    categoryAxis.renderer.labels.template.verticalCenter = "middle";
    categoryAxis.renderer.labels.template.rotation = 270;
    categoryAxis.tooltip.disabled = true;

    let valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
    valueAxis.min = 0;
    valueAxis.max = 100;
    valueAxis.strictMinMax = true;
    valueAxis.calculateTotals = true;
    valueAxis.renderer.minWidth = 50;

    let series1 = chart.series.push(new am4charts.ColumnSeries());
    series1.columns.template.width = am4core.percent(80);
    series1.columns.template.tooltipText =
      "{name}: {valueY.totalPercent.formatNumber('#.00')}%";
    series1.name = "Alert API";
    series1.dataFields.categoryX = "category";
    series1.dataFields.valueY = "value1";
    series1.dataFields.valueYShow = "totalPercent";
    series1.dataItems.template.locations.categoryX = 0.5;
    series1.stacked = true;
    series1.tooltip.pointerOrientation = "vertical";
    let bullet1 = series1.bullets.push(new am4charts.LabelBullet());
    bullet1.interactionsEnabled = false;
    bullet1.label.text = "{valueY.totalPercent.formatNumber('#.00')}%";
    bullet1.label.fill = am4core.color("#ffffff");
    bullet1.locationY = 0.5;

    let series2 = chart.series.push(new am4charts.ColumnSeries());
    series2.columns.template.width = am4core.percent(80);
    series2.columns.template.tooltipText =
      "{name}: {valueY.totalPercent.formatNumber('#.00')}%";
    series2.name = "Config API";
    series2.dataFields.categoryX = "category";
    series2.dataFields.valueY = "value2";
    series2.dataFields.valueYShow = "totalPercent";
    series2.dataItems.template.locations.categoryX = 0.5;
    series2.stacked = true;
    series2.tooltip.pointerOrientation = "vertical";
    let bullet2 = series2.bullets.push(new am4charts.LabelBullet());
    bullet2.interactionsEnabled = false;
    bullet2.label.text = "{valueY.totalPercent.formatNumber('#.00')}%";
    bullet2.locationY = 0.5;
    bullet2.label.fill = am4core.color("#ffffff");

    let series3 = chart.series.push(new am4charts.ColumnSeries());
    series3.columns.template.width = am4core.percent(80);
    series3.columns.template.tooltipText =
      "{name}: {valueY.totalPercent.formatNumber('#.00')}%";
    series3.name = "Heartbeat API";
    series3.dataFields.categoryX = "category";
    series3.dataFields.valueY = "value3";
    series3.dataFields.valueYShow = "totalPercent";
    series3.dataItems.template.locations.categoryX = 0.5;
    series3.stacked = true;
    series3.tooltip.pointerOrientation = "vertical";
    let bullet3 = series3.bullets.push(new am4charts.LabelBullet());
    bullet3.interactionsEnabled = false;
    bullet3.label.text = "{valueY.totalPercent.formatNumber('#.00')}%";
    bullet3.locationY = 0.5;
    bullet3.label.fill = am4core.color("#ffffff");

    let series4 = chart.series.push(new am4charts.ColumnSeries());
    series4.columns.template.width = am4core.percent(80);
    series4.columns.template.tooltipText =
      "{name}: {valueY.totalPercent.formatNumber('#.00')}%";
    series4.name = "Integration Action API";
    series4.dataFields.categoryX = "category";
    series4.dataFields.valueY = "value3";
    series4.dataFields.valueYShow = "totalPercent";
    series4.dataItems.template.locations.categoryX = 0.5;
    series4.stacked = true;
    series4.tooltip.pointerOrientation = "vertical";
    let bullet4 = series4.bullets.push(new am4charts.LabelBullet());
    bullet4.interactionsEnabled = false;
    bullet4.label.text = "{valueY.totalPercent.formatNumber('#.00')}%";
    bullet4.locationY = 0.5;
    bullet4.label.fill = am4core.color("#ffffff");

    // chart.scrollbarX = new am4core.Scrollbar();
  }

  render() {
    return (
      <div
        id="barchart4barchart4"
        style={{ width: "100%", height: "400px" }}
      ></div>
    );
  }
}

export default barchart4;
