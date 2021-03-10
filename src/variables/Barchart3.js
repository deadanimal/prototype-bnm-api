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
        month: "Jan",
        value: 1500
      },
      {
        month: "Feb",
        value: 1882
      },
      {
        month: "May",
        value: 1809
      },
      {
        month: "Jun",
        value: 1322
      },
      {
        month: "Jul",
        value: 1122
      },
      {
        month: "Aug",
        value: 1114
      },
      {
        month: "Sep",
        value: 984
      },
      {
        month: "Oct",
        value: 1200
      },
      {
        month: "Nov",
        value: 1500
      },
      {
        month: "Dec",
        value: 1700
      }
    ];

    let categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis());
    categoryAxis.dataFields.category = "month";
    categoryAxis.renderer.labels.template.rotation = 270;
    categoryAxis.renderer.labels.template.hideOversized = false;
    categoryAxis.renderer.minGridDistance = 20;
    categoryAxis.renderer.labels.template.horizontalCenter = "right";
    categoryAxis.renderer.labels.template.verticalCenter = "middle";
    categoryAxis.tooltip.label.rotation = 270;
    categoryAxis.tooltip.label.horizontalCenter = "right";
    categoryAxis.tooltip.label.verticalCenter = "middle";

    let valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
    // valueAxis.title.text = "Month";
    // valueAxis.title.fontWeight = "bold";

    // Create series
    let series = chart.series.push(new am4charts.ColumnSeries3D());
    series.dataFields.valueY = "value";
    series.dataFields.categoryX = "month";
    series.name = "value";
    series.tooltipText = "{categoryX}: [bold]{valueY}[/]";
    series.columns.template.fillOpacity = 0.8;

    let columnTemplate = series.columns.template;
    columnTemplate.strokeWidth = 2;
    columnTemplate.strokeOpacity = 1;
    columnTemplate.stroke = am4core.color("#FFFFFF");

    columnTemplate.adapter.add("fill", function(fill, target) {
      return chart.colors.getIndex(target.dataItem.index);
    });

    columnTemplate.adapter.add("stroke", function(stroke, target) {
      return chart.colors.getIndex(target.dataItem.index);
    });

    chart.cursor = new am4charts.XYCursor();
    chart.cursor.lineX.strokeOpacity = 0;
    chart.cursor.lineY.strokeOpacity = 0;
  }

  render() {
    return (
      <div id="barchart2" style={{ width: "100%", height: "400px" }}></div>
    );
  }
}

export default Barchart2;
