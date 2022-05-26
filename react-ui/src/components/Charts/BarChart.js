import React, { Component } from "react";
import Card from "components/Card/Card";
import Chart from "react-apexcharts";
import { Flex, Text } from "@chakra-ui/react";
import { barChartData, barChartOptions } from "variables/charts";

class BarChart extends Component {
    constructor(props) {
        super(props);
        this.state = {
            chartData: [],
            chartOptions: {},
        };
    }

    componentDidMount() {
        this.setState({
            chartData: barChartData,
            chartOptions: barChartOptions,
        });
    }

    render() {
        return (
            <Card
                py="1rem"
                width="100%"
                height="1000px"
                bg="linear-gradient(81.62deg, #313860 2.25%, #151928 79.87%)"
                position="relative"
            >
                <Flex
                    flexDirection="row"
                    align="center"
                    justify="flex-end"
                    w="100%"
                >
                    <Text fontWeight="bold" color="gray.400">
                        82,357
                    </Text>
                    <Text color="gray.400" marginLeft="3px">
                        {" "}
                        response
                    </Text>
                </Flex>

                <Chart
                    options={this.state.chartOptions}
                    series={this.state.chartData}
                    type="bar"
                    width="100%"
                    height="100%"
                />
            </Card>
        );
    }
}

export default BarChart;
