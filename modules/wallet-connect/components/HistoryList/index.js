import { StyleSheet } from "react-native";
import React from "react";
import { View, Text } from "react-native";

const HistoryItem = props => {
  return <View style={_styles.KeDIMDeM}>
        <View style={_styles.uIQASlvD}>
            <Text style={_styles.VqBvcnNR}>From</Text>
            <Text>{props.title.from}</Text>
        </View>
        <View style={_styles.YdJKkzjd}>
            <Text style={_styles.gQfhwpYL}>To:</Text>
            <Text>{props.title.to}</Text>
        </View>
        <View style={_styles.LkIcEOzE}>
            <Text style={_styles.nTDmwTlj}>Amount</Text>
            <Text>{props.title.value}</Text>
        </View>

    </View>;
};

export default HistoryItem;

const _styles = StyleSheet.create({
  KeDIMDeM: {
    backgroundColor: "white",
    borderRadius: 2
  },
  uIQASlvD: {
    display: "flex",
    flexDirection: "row"
  },
  VqBvcnNR: {
    width: "20%"
  },
  YdJKkzjd: {
    display: "flex",
    flexDirection: "row"
  },
  gQfhwpYL: {
    width: "20%"
  },
  LkIcEOzE: {
    display: "flex",
    flexDirection: "row"
  },
  nTDmwTlj: {
    width: "20%"
  }
});