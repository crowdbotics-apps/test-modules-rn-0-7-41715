import React, { useState } from "react"
import {
  Image,
  ImageBackground,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from "react-native"

const cardWidth = 300

const Home = () => {
  const data = [
    {
      id: 1,
      image: require("./assets/voda.jpg"),
      promotionText: "20% off\ninsurance"
    },
    {
      id: 2,
      image: require("./assets/voda.jpg"),
      promotionText: "20% off\ninsurance"
    },
    {
      id: 3,
      image: require("./assets/voda.jpg"),
      promotionText: "20% off\ninsurance"
    },
    {
      id: 4,
      image: require("./assets/voda.jpg"),
      promotionText: "20% off\ninsurance"
    },
    {
      id: 5,
      image: require("./assets/voda.jpg"),
      promotionText: "20% off\ninsurance"
    }
  ]

  const topCardData = [
    {
      title: "Happy",
      description:
        "Your dinner for 2 at Wagamama is waiting for you. Redeem until 24.02.22",
      backgroundImage: require("./assets/pizzacard.jpg")
    },
    {
      title: "Happy",
      description:
        "Your dinner for 2 at Wagamama is waiting for you. Redeem until 24.02.22",
      backgroundImage: require("./assets/pizzacard.jpg")
    },
    {
      title: "Happy",
      description:
        "Your dinner for 2 at Wagamama is waiting for you. Redeem until 24.02.22",
      backgroundImage: require("./assets/pizzacard.jpg")
    }
  ]

  const [selectedStory, setSelectedStory] = useState()
  const [selectedCard, setSelectedCard] = useState()

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

  return (
    <View
      style={[styles.container, styles.paddingVertical20, styles.paddingLeft20]}
    >
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {topCardData.map(item => (
          <ImageBackground
            imageStyle={{ borderRadius: 10 }}
            style={styles.cardBackground}
            source={item.backgroundImage}
          >
            <View
              style={[
                styles.smileIcon,
                styles.alignItems,
                styles.flexRow,
                styles.paddingLeft20,
                styles.gap
              ]}
            >
              <Image
                style={styles.smileImage}
                source={require("./assets/smile.png")}
              />
              <Text style={[styles.happyText, styles.colorWhite]}>
                {item.title}
              </Text>
            </View>
            <Text
              style={[
                styles.cardText,
                styles.colorWhite,
                styles.fontSize14,
                styles.fontWeight,
                styles.paddingVertical20,
                styles.paddingLeft20
              ]}
            >
              {item.description}
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

      <ScrollView
        contentContainerStyle={""}
        horizontal
        showsHorizontalScrollIndicator={false}
      >
        {data.map(item => (
          <Pressable
            onPress={() => setSelectedStory(item.id)}
            style={styles.item}
            key={item.id}
          >
            {selectedStory === item.id && (
              <View style={[styles.offer, styles.shadowProp]}>
                <Text>offer</Text>
              </View>
            )}
            <Image
              source={item.image}
              style={
                selectedStory === item.id ? styles.imageActive : styles.image
              }
            />
            <Text style={styles.promotionText}>{item.promotionText}</Text>
          </Pressable>
        ))}
      </ScrollView>

      <Text style={[styles.highlightText, styles.fontWeight]}>Highlights</Text>
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

const styles = StyleSheet.create({
  cardBackground: {
    height: 210,
    width: cardWidth,
    marginRight: 20
  },
  colorWhite: {
    color: "#fff"
  },
  smileIcon: {
    paddingTop: 20
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
  paddingVertical20: {
    paddingVertical: 20
  },
  happyText: {
    fontSize: 30
  },
  fontSize14: {
    fontSize: 14
  },
  fontWeight: {
    fontWeight: "bold"
  },
  paddingLeft20: {
    paddingLeft: 20
  },
  cardText: {
    width: "50%"
  },
  offer: {
    paddingHorizontal: 20,
    paddingVertical: 5,
    borderRadius: 50,
    backgroundColor: "#fff",
    position: "absolute",
    bottom: 55,
    zIndex: 1
  },
  item: {
    alignItems: "center",
    marginRight: 20,
    paddingVertical: 25,
    position: "relative"
  },
  image: {
    width: 85,
    height: 85,
    borderRadius: 50,
    borderWidth: 5,
    borderColor: "grey"
  },
  imageActive: {
    borderColor: "cyan",
    borderWidth: 5,
    width: 85,
    height: 85,
    borderRadius: 50
  },
  promotionText: {
    marginTop: 5,
    fontSize: 12,
    fontWeight: 600,
    color: "#494457",
    textAlign: "center"
  },
  highlightText: {
    fontSize: 22
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
  cardContainer: {
    paddingTop: 10,
    flexWrap: "wrap"
  },
  invoiceImage: {
    height: 24,
    width: 24
  },
  textHead: {
    fontSize: 16
  },
  gap: {
    gap: 10
  },
  price: {
    fontSize: 26,
    marginVertical: 5
  },
  description: {
    fontSize: 12,
    color: "grey",
    fontWeight: "500"
  }
})
export default Home

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
