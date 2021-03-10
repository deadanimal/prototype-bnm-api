import React, { Component } from "react";
// import "../App.css";
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";

import { Card, CardHeader, CardBody, CardFooter, Row, Col } from "reactstrap";

am4core.useTheme(am4themes_animated);

class Barchart2 extends Component {
  componentDidMount() {
    // import * as am4core from "@amcharts/amcharts4/core";
    // import * as am4charts from "@amcharts/amcharts4/charts";
    // import am4themes_animated from "@amcharts/amcharts4/themes/animated";

    // /* Chart code */
    // // Themes begin
    // am4core.useTheme(am4themes_animated);
    // // Themes end

    // Create chart instance
    let chart = am4core.create("barchart2", am4charts.XYChart);
    // chart.scrollbarX = new am4core.Scrollbar();
    chart.paddingBottom = 30;
    chart.angle = 35;

    // Add data
    chart.data = [
      {
        country: "Jan",
        jobs: 1500
      },
      {
        country: "Feb",
        jobs: 1882
      },
      {
        country: "May",
        jobs: 1809
      },
      {
        country: "Jun",
        jobs: 1322
      },
      {
        country: "Jul",
        jobs: 1122
      },
      {
        country: "Aug",
        jobs: 1114
      },
      {
        country: "Sep",
        jobs: 984
      },
      {
        country: "Oct",
        jobs: 1200
      },
      {
        country: "Nov",
        jobs: 1500
      },
      {
        country: "Dec",
        jobs: 1700
      }
    ];

    let categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis());
    categoryAxis.dataFields.category = "country";
    categoryAxis.renderer.grid.template.location = 0;
    categoryAxis.renderer.minGridDistance = 20;
    categoryAxis.renderer.inside = true;
    categoryAxis.renderer.grid.template.disabled = true;

    let labelTemplate = categoryAxis.renderer.labels.template;
    labelTemplate.rotation = -90;
    labelTemplate.horizontalCenter = "left";
    labelTemplate.verticalCenter = "middle";
    labelTemplate.dy = 10; // moves it a bit down;
    labelTemplate.inside = false; // this is done to avoid settings which are not suitable when label is rotated

    let valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
    valueAxis.renderer.grid.template.disabled = true;

    // Create series
    let series = chart.series.push(new am4charts.ConeSeries());
    series.dataFields.valueY = "jobs";
    series.dataFields.categoryX = "country";

    let columnTemplate = series.columns.template;
    columnTemplate.adapter.add("fill", function(fill, target) {
      return chart.colors.getIndex(target.dataItem.index);
    });

    columnTemplate.adapter.add("stroke", function(stroke, target) {
      return chart.colors.getIndex(target.dataItem.index);
    });
  }

  render() {
    return (
      <div id="barchart2" style={{ width: "100%", height: "400px" }}></div>
    );
  }
}

export default Barchart2;
