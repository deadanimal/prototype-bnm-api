import React, { Component } from "react";
// import "../App.css";
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";

import { Card, CardHeader, CardBody, CardFooter, Row, Col } from "reactstrap";

am4core.useTheme(am4themes_animated);

class Barchartcompare extends Component {
  componentDidMount() {
    // import * as am4core from "@amcharts/amcharts4/core";
    // import * as am4charts from "@amcharts/amcharts4/charts";
    // import am4themes_animated from "@amcharts/amcharts4/themes/animated";

    // /* Chart code */
    // // Themes begin
    // am4core.useTheme(am4themes_animated);
    // // Themes end

    // Create chart instance
    let chart = am4core.create("barchartcompare", am4charts.XYChart);
    chart.data = [
      {
        year: "Jan",
        get: 25,
        post: 25,
        delete: 21,
        put: 15
      },
      {
        year: "Feb",
        get: 26,
        post: 27,
        delete: 22,
        put: 12
      },
      {
        year: "Mar",
        get: 10,
        post: 12,
        delete: 24,
        put: 10
      },
      {
        year: "Apr",
        get: 20,
        post: 17,
        delete: 14,
        put: 25
      },
      {
        year: "May",
        get: 18,
        post: 19,
        delete: 19,
        put: 25
      },
      {
        year: "Jun",
        get: 23,
        post: 22,
        delete: 25,
        put: 18
      },
      {
        year: "Jul",
        get: 25,
        post: 21,
        delete: 20,
        put: 19
      },
      {
        year: "Aug",
        get: 24,
        post: 20,
        delete: 21,
        put: 17
      },
      {
        year: "Sep",
        get: 24,
        post: 23,
        delete: 21,
        put: 15
      },
      {
        year: "Oct",
        get: 21,
        post: 24,
        delete: 20,
        put: 10
      },
      {
        year: "Nov",
        get: 29,
        post: 24,
        delete: 22,
        put: 19
      },
      {
        year: "Dec",
        get: 28,
        post: 27,
        delete: 24,
        put: 12
      }
    ];

    // Create axes
    let categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis());
    categoryAxis.dataFields.category = "year";
    categoryAxis.renderer.grid.template.location = 0;
    categoryAxis.renderer.minGridDistance = 15;
    categoryAxis.renderer.grid.template.strokeDasharray = "1,3";
    categoryAxis.renderer.labels.template.rotation = -90;
    categoryAxis.renderer.labels.template.horizontalCenter = "left";
    categoryAxis.renderer.labels.template.location = 0;

    let valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
    valueAxis.renderer.inside = true;
    valueAxis.renderer.labels.template.disabled = true;
    valueAxis.min = 0;

    // Create series
    function createSeries(field, name) {
      // Set up series
      let series = chart.series.push(new am4charts.ColumnSeries());
      series.name = name;
      series.dataFields.valueY = field;
      series.dataFields.categoryX = "year";
      series.sequencedInterpolation = true;

      // Make it stacked
      series.stacked = true;

      // Configure columns
      series.columns.template.width = am4core.percent(60);
      series.columns.template.tooltipText =
        "[bold]{name}[/]\n[font-size:14px]{categoryX}: {valueY}";

      // Add label
      let labelBullet = series.bullets.push(new am4charts.LabelBullet());
      labelBullet.label.text = "{valueY}";
      labelBullet.locationY = 0.5;
      labelBullet.label.hideOversized = true;

      return series;
    }

    createSeries("get", "GET");
    createSeries("post", "POST");
    createSeries("delete", "DELETE");
    createSeries("put", "PUT");

    // Legend
    chart.legend = new am4charts.Legend();
  }

  render() {
    return (
      <div
        id="barchartcompare"
        style={{ width: "100%", height: "400px" }}
      ></div>
    );
  }
}

export default Barchartcompare;
