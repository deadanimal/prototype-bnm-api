import React, { Component } from "react";
// import "../App.css";
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";

import { Card, CardHeader, CardBody, CardFooter, Row, Col } from "reactstrap";

am4core.useTheme(am4themes_animated);

class Linechart1 extends Component {
  componentDidMount() {
    // Create chart instance
    let chart = am4core.create("linechart1", am4charts.XYChart);
    // let chart = am4core.create("linechart1", am4charts.XYChart);
    // let chart = am4core.create("chartdiv", am4charts.XYChart);

    // Add data
    chart.data = [
      {
        year: "Jan",
        value: 140
        // germany: 5,
        // uk: 3
      },
      {
        year: "Feb",
        value: 120
        // germany: 2,
        // uk: 6
      },
      {
        year: "Mar",
        value: 110
        // germany: 3,
        // uk: 1
      },
      {
        year: "Apr",
        value: 125
        // germany: 4,
        // uk: 1
      },
      {
        year: "May",
        value: 104
        // germany: 1,
        // uk: 2
      },
      {
        year: "Jun",
        value: 90
        // germany: 2,
        // uk: 1
      },
      {
        year: "Jul",
        value: 102
        // germany: 2,
        // uk: 3
      },
      {
        year: "Aug",
        value: 132
        // germany: 1,
        // uk: 5
      },
      {
        year: "Sep",
        value: 145
        // germany: 5,
        // uk: 2
      },
      {
        year: "Oct",
        value: 129
        // germany: 3,
        // uk: 6
      },
      {
        year: "Nov",
        value: 100
        // germany: 5,
        // uk: 2
      },
      {
        year: "Dec",
        value: 105
        // germany: 5,
        // uk: 2
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
    // valueAxis.title.text = "Spatial Data Extracted";
    // valueAxis.renderer.minLabelPosition = 0.01;

    // Create series
    let series1 = chart.series.push(new am4charts.LineSeries());
    series1.dataFields.valueY = "value";
    series1.dataFields.categoryX = "year";
    series1.name = "Value";
    series1.strokeWidth = 2;
    series1.tensionX = 0.8;
    series1.bullets.push(new am4charts.CircleBullet());
    series1.tooltipText = "{name} = {categoryX}: {valueY}";
    series1.legendSettings.valueText = "{valueY}";
    series1.visible = false;

    let bullet = series1.bullets.push(new am4charts.CircleBullet());
    bullet.circle.fill = am4core.color("#fff");
    bullet.circle.strokeWidth = 3;

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
      <div id="linechart1" style={{ width: "100%", height: "450px" }}></div>
    );
  }
}

export default Linechart1;
