import { View, Text, Dimensions } from "react-native";
import { ProgressChart } from "react-native-chart-kit";

export const PieChart = () => {
  const chartConfig = {
    color: (opacity = 1) => `rgba(0, 8, 255, ${opacity})`,
    backgroundGradientFrom: "#ffffff",
    backgroundGradientFromOpacity: 0,
    backgroundGradientTo: "#ffffff",
    backgroundGradientToOpacity: 0,
  };

  const data = {
    labels: ["Trips made"],
    data: [0.6],
  };

  const { width } = Dimensions.get("screen");

  return (
    <View>
      <ProgressChart
        data={data}
        width={width / 2}
        height={100}
        strokeWidth={16}
        radius={32}
        chartConfig={chartConfig}
        hideLegend={true}
      />
    </View>
  );
};

export const AmountSpendGraph = () => {
  const chartConfig = {
    color: (opacity = 1) => `rgba(0, 123, 255, ${opacity})`,
    backgroundGradientFrom: "#ffffff",
    backgroundGradientFromOpacity: 0,
    backgroundGradientTo: "#ffffff",
    backgroundGradientToOpacity: 0,
  };

  const data = {
    labels: ["Trips made"],
    data: [0.3],
  };

  const { width } = Dimensions.get("screen");

  return (
    <View>
      <ProgressChart
        data={data}
        width={width / 2}
        height={100}
        strokeWidth={16}
        radius={32}
        chartConfig={chartConfig}
        hideLegend={true}
      />
    </View>
  );
};
