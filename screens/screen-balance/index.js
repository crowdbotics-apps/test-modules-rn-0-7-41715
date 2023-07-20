import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

const Home = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image
          resizeMode="contain"
          style={styles.logo}
          source={require("./assets/logo.png")}
        />
        <Text>Good morning, Phil</Text>
      </View>

      <View style={[styles.dataCard, styles.shadowProp]}>
        <View style={styles.dataArea}>
          <View style={styles.area}>
            <Image
              resizeMode="contain"
              style={styles.downloadImage}
              source={require("./assets/download.png")}
            />
            <Text style={[styles.dataText, styles.fontWeight]}>My Data</Text>
          </View>
          <Image
            resizeMode="contain"
            style={styles.moreImage}
            source={require("./assets/more.png")}
          />
        </View>
        <View style={styles.dataView}>
          <Text style={[styles.GBremaining]}>
            30.5<Text style={styles.GB}>GB</Text>
            <Text style={styles.fontSize14}> left of 50GB bundle</Text>
          </Text>
        </View>
        <View style={styles.progress}>
          <View style={styles.progressActive}></View>
        </View>
        <Text style={[styles.fontSize14, styles.expireText]}>
          Expires in 14 days
        </Text>
      </View>

      <View style={[styles.main, styles.gap]}>
        <View style={[styles.left, styles.shadowProp]}>
          <View style={[styles.flexRow, styles.alignItems, styles.gap]}>
            <Image
              style={styles.invoiceImage}
              source={require("./assets/invoice.png")}
            />
            <Text style={[styles.textHead, styles.fontWeight]}>Next Bill</Text>
          </View>
          <Text style={[styles.fontSize13, styles.currentText]}>
            Your Current spend is:
          </Text>
          <Text style={[styles.priceText]}>
            52.9<Text style={styles.euro}>€</Text>
          </Text>
          <Text style={[styles.fontSize12, styles.padding5]}>
            To be paid till 25th Jan
          </Text>
        </View>
        <View style={styles.right}>
          <View style={styles.offerCard}>
            <View style={[styles.flexRow, styles.alignItems, styles.gap]}>
              <Image
                style={styles.invoiceImage}
                source={require("./assets/giftbox.png")}
              />
              <Text
                style={[styles.textHead, styles.fontWeight, styles.colorWhite]}
              >
                My Offers
              </Text>
            </View>
            <Text
              style={[styles.fontSize14, styles.colorWhite, styles.padding5]}
            >
              View all
            </Text>
          </View>
          <View style={[styles.TopUpCard, styles.shadowProp]}>
            <View style={[styles.flexRow, styles.alignItems, styles.gap]}>
              <Image
                style={styles.invoiceImage}
                source={require("./assets/balance.png")}
              />
              <Text style={[styles.textHead, styles.fontWeight]}>Top-up</Text>
            </View>
            <View style={[styles.flexRow, styles.justifyContent]}>
              <Text style={[styles.fontSize12, styles.padding3]}>12.5€</Text>
              <Text style={[styles.fontSize12, styles.padding3]}>
                Lily's Phone
              </Text>
            </View>
          </View>
        </View>
      </View>
      <View
        style={[
          styles.flexRow,
          styles.gap,
          styles.justifyContentCenter,
          styles.padding5,
          styles.alignItems
        ]}
      >
        <Text style={styles.greyColor}>25 min since last Update</Text>
        <Image
          style={styles.invoiceImage}
          source={require("./assets/refreshing.png")}
        />
      </View>
      <Text style={[styles.fontWeight, styles.discover]}>Discover</Text>
      <Image
        resizeMode="cover"
        style={styles.discoverImages}
        source={require("./assets/phone.jpeg")}
      />
    </View>
  );
};
export default Home;
const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    paddingVertical: 20
  },
  padding3: {
    paddingTop: 3
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },
  justifyContent: {
    justifyContent: "space-between"
  },
  justifyContentCenter: {
    justifyContent: "center"
  },
  logo: {
    height: 40,
    width: 40
  },
  greyColor: {
    color: "#b9b9b9"
  },
  dataCard: {
    marginTop: 25,
    padding: 10,
    backgroundColor: "#fff",
    borderRadius: 4
  },
  dataArea: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },
  main: {
    flexDirection: "row"
  },
  dataText: {
    fontSize: 14
  },
  area: {
    flexDirection: "row",
    margin: 5
  },
  fontSize13: {
    fontSize: 13
  },
  priceText: {
    fontSize: 30,
    paddingTop: 10
  },
  shadowProp: {
    shadowColor: "#171717",
    shadowOffset: {
      width: -2,
      height: 4
    },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 1
  },
  fontSize12: {
    fontSize: 12,
    color: "grey"
  },
  padding5: {
    paddingTop: 7
  },
  left: {
    marginVertical: 10,
    padding: 12,
    paddingVertical: 20,
    backgroundColor: "#fff",
    borderRadius: 4,
    width: "48%"
  },
  currentText: {
    fontWeight: "500",
    paddingTop: 10
  },
  moreImage: {
    width: 30,
    height: 30
  },
  downloadImage: {
    height: 20,
    width: 24
  },
  expireText: {
    color: "grey",
    paddingTop: 20,
    paddingBottom: 10
  },
  euro: {
    fontSize: 22
  },
  whiteText: {
    color: "#fff"
  },
  welcomeText: {
    fontSize: 24,
    fontWeight: "800"
  },
  flexRow: {
    flexDirection: "row"
  },
  alignItems: {
    alignItems: "center"
  },
  colorWhite: {
    color: "#fff"
  },
  fontSize14: {
    fontSize: 14
  },
  fontWeight: {
    fontWeight: "bold"
  },
  paddingVertical20: {
    paddingVertical: 20
  },
  paddingLeft20: {
    paddingLeft: 20
  },
  shadowProp: {
    shadowColor: "#171717",
    shadowOffset: {
      width: -2,
      height: 4
    },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 1
  },
  invoiceImage: {
    height: 24,
    width: 24,
    marginRight: 10
  },
  textHead: {
    fontSize: 16
  },
  gap: {
    margin: 10
  },
  dataView: {
    marginTop: 10
  },
  GBremaining: {
    fontSize: 29
  },
  GB: {
    fontSize: 22
  },
  progress: {
    marginTop: 10,
    height: 5,
    backgroundColor: "#bfbfbf",
    borderRadius: 10
  },
  progressActive: {
    height: 5,
    backgroundColor: "#c70404",
    borderRadius: 10,
    width: "50%"
  },
  offerCard: {
    backgroundColor: "#c70404",
    borderRadius: 4,
    marginVertical: 10,
    padding: 10,
    marginLeft: 5
  },
  TopUpCard: {
    backgroundColor: "#fff",
    borderRadius: 4,
    padding: 10,
    marginLeft: 5
  },
  right: {
    width: "49%"
  },
  discover: {
    fontSize: 22,
    marginTop: 30
  },
  discoverImages: {
    width: "100%",
    height: 150,
    borderRadius: 10,
    marginTop: 10
  }
});