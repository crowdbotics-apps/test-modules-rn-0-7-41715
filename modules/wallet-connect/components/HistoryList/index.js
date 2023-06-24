import { StyleSheet } from "react-native";
import React from "react";
import { View, Text } from "react-native";

const HistoryItem = props => {
  return <View style={_styles.STvVgwkz}>
        <View style={_styles.LpLFmgyq}>
            <Text style={_styles.OuJzMqjW}>From</Text>
            <Text>{props.title.from}</Text>
        </View>
        <View style={_styles.ziQqGPOg}>
            <Text style={_styles.KEhrFYoY}>To:</Text>
            <Text>{props.title.to}</Text>
        </View>
        <View style={_styles.ENunBxpQ}>
            <Text style={_styles.NRaCKesd}>Amount</Text>
            <Text>{props.title.value}</Text>
        </View>

    </View>;
};

export default HistoryItem;

const _styles = StyleSheet.create({
  STvVgwkz: {
    backgroundColor: "white",
    borderRadius: 2
  },
  LpLFmgyq: {
    display: "flex",
    flexDirection: "row"
  },
  OuJzMqjW: {
    width: "20%"
  },
  ziQqGPOg: {
    display: "flex",
    flexDirection: "row"
  },
  KEhrFYoY: {
    width: "20%"
  },
  ENunBxpQ: {
    display: "flex",
    flexDirection: "row"
  },
  NRaCKesd: {
    width: "20%"
  }
});