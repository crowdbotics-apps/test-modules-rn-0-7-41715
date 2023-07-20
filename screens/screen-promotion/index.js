import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  ImageBackground,
  TouchableOpacity,
  Pressable
} from "react-native"
import React, { useState } from "react"

const cardWidth = 300
const Promotion = () => {
  const CardData = [
    {
      id: 1,
      image: require("./assets/invoice.png"),
      title: "Next Bill",
      price: "52.9€",
      description: "Pay by 25th Mar",
      imageActive: require("./assets/invoicewhite.png")
    },
    {
      id: 2,
      image: require("./assets/invoice.png"),
      title: "Next Bill",
      price: "52.9€",
      description: "Pay by 25th Mar",
      imageActive: require("./assets/invoicewhite.png")
    },
    {
      id: 3,
      image: require("./assets/invoice.png"),
      title: "Next Bill",
      price: "52.9€",
      description: "Pay by 25th Mar",
      imageActive: require("./assets/invoicewhite.png")
    },
    {
      id: 4,
      image: require("./assets/invoice.png"),
      title: "Next Bill",
      price: "52.9€",
      description: "Pay by 25th Mar",
      imageActive: require("./assets/invoicewhite.png")
    }
  ]
  const [selectedCard, setSelectedCard] = useState()
  return (
    <View>
      <View style={styles.header}>
        <View>
          <Text style={[styles.whiteText, styles.welcomeText]}>
            Welcome Alex
          </Text>
          <Text style={[styles.whiteText, styles.tagLine]}>Good Morning</Text>
        </View>
        <Image
          style={styles.userImg}
          source={require("./assets/user.png")}
        />
      </View>
      <Text style={styles.heading}>Latest for you</Text>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.paddingLeft20}
      >
        {[1, 2].map(el => (
          <ImageBackground
            imageStyle={{ borderRadius: 10 }}
            style={styles.cardBackground}
            source={require("./assets/vodafone.jpg")}
            resizeMode="cover"
          >
            <View style={[styles.smileIcon, styles.alignItems, styles.flexRow]}>
              <Text style={[styles.happyText, styles.colorWhite]}>Happy</Text>
            </View>
            <Text
              style={[
                styles.cardText,
                styles.colorWhite,
                styles.fontSize14,
                styles.fontWeight,
                styles.paddingLeft20
              ]}
            >
              Your dinner for 2 at Wagamama is waiting for you. Redeem until
              24.02.22
            </Text>
            <TouchableOpacity
              style={[styles.alignItems, styles.flexRow, styles.paddingLeft20]}
            >
              <Text style={[styles.colorWhite, styles.fontSize14]}>
                Learn More
              </Text>
              <Image
                style={styles.arrowImage}
                source={require("./assets/rightchevron.png")}
              />
            </TouchableOpacity>
          </ImageBackground>
        ))}
      </ScrollView>
      <View
        style={[
          styles.cardContainer,
          styles.flexRow,
          styles.alignItems,
          styles.gap
        ]}
      >
        {CardData.map(item => (
          <DataCard
            selectedCard={selectedCard}
            setSelectedCard={setSelectedCard}
            item={item}
          />
        ))}
      </View>
    </View>
  )
}
export default Promotion
const styles = StyleSheet.create({
  header: {
    backgroundColor: "#A80202",
    paddingHorizontal: 20,
    paddingVertical: 40,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },
  whiteText: {
    color: "#fff"
  },
  welcomeText: {
    fontSize: 24,
    fontWeight: "800"
  },
  tagLine: {
    fontSize: 18,
    fontWeight: "600"
  },
  userImg: {
    width: 50,
    height: 50,
    borderRadius: 50
  },
  heading: {
    fontSize: 24,
    fontWeight: "bold",
    paddingHorizontal: 20,
    paddingVertical: 25,
    color: "#000"
  },
  cardBackground: {
    height: 180,
    width: cardWidth,
    marginRight: 20
  },
  smileIcon: {
    paddingLeft: 20,
    paddingTop: 5
  },
  flexRow: {
    flexDirection: "row"
  },
  alignItems: {
    alignItems: "center"
  },
  smileImage: {
    height: 24,
    width: 24
  },
  arrowImage: {
    height: 14,
    width: 14
  },
  happyText: {
    fontSize: 30
  },
  cardText: {
    width: "50%",
    paddingBottom: 15
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
  cardContainer: {
    paddingTop: 30,
    paddingLeft: 20,
    flexWrap: "wrap"
  },
  cardItem: {
    width: "46%",
    borderRadius: 10,
    height: 120,
    backgroundColor: "#fff",
    padding: 20
  },
  cardItemActive: {
    backgroundColor: "#A80202"
  },
  shadowProp: {
    shadowColor: "#171717",
    shadowOffset: { width: -2, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 1
  },
  invoiceImage: {
    height: 24,
    width: 24
  },
  textHead: {
    fontSize: 16
  },
  price: {
    fontSize: 26,
    marginVertical: 5
  },
  description: {
    fontSize: 12,
    color: "grey",
    fontWeight: "500"
  },
  gap: {
    gap: 10
  }
})
const DataCard = ({ item, selectedCard, setSelectedCard }) => {
  return (
    <Pressable
      onPress={() => setSelectedCard(item.id)}
      style={[
        styles.cardItem,
        styles.shadowProp,
        selectedCard === item.id && styles.cardItemActive
      ]}
    >
      <View style={[styles.alignItems, styles.flexRow, styles.gap]}>
        <Image
          style={styles.invoiceImage}
          source={selectedCard === item.id ? item.imageActive : item.image}
        />
        <Text
          style={[
            styles.textHead,
            styles.fontWeight,
            selectedCard === item.id && styles.colorWhite
          ]}
        >
          {item.title}
        </Text>
      </View>
      <Text
        style={[
          styles.price,
          styles.fontWeight,
          selectedCard === item.id && styles.colorWhite
        ]}
      >
        {item.price}
      </Text>
      <Text
        style={[
          styles.description,
          selectedCard === item.id && styles.colorWhite
        ]}
      >
        {item.description}
      </Text>
    </Pressable>
  )
}
