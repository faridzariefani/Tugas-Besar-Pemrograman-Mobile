import * as React from "react";
import { StyleSheet, View, Image, Text, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Border, Color, FontFamily, FontSize } from "../GlobalStyles";

const BookingSummary = () => {
  const navigation = useNavigation();

  return (
    <View style={[styles.bookingSummary, styles.iconLayout1]}>
      <View style={[styles.bookingSummaryChild, styles.barLayout]} />
      <View style={[styles.bookingSummaryItem, styles.itemShadowBox]} />
      <View style={styles.flights1}>
        <Image
          style={[
            styles.flights1Child,
            styles.flights2Layout,
            styles.flights2ItemLayout,
          ]}
          resizeMode="cover"
          source={require("../assets/arrow-1.png")}
        />
        <Text style={[styles.text, styles.textFlexBox]}>13:00</Text>
        <Text style={[styles.text1, styles.textFlexBox1, styles.textTypo]}>
          14:50
        </Text>
        <Text style={[styles.sin, styles.sinTypo]}>SIN</Text>
        <Text style={[styles.cgk, styles.sinTypo]}>CGK</Text>
        <Text style={[styles.seatFlight, styles.seatTypo]}>
          Seat / Flight No
        </Text>
        <Text style={[styles.a, styles.aTypo, styles.aPosition]}>1A</Text>
        <Text style={[styles.jk798, styles.aTypo, styles.aPosition]}>
          JK798
        </Text>
        <View
          style={[
            styles.flights1Item,
            styles.flights1ItemLayout,
            styles.aPosition,
          ]}
        />
        <Text style={[styles.mon14Juni, styles.juniTypo]}>
          Mon, 14 Juni 2021
        </Text>
        <Image
          style={[styles.uplaneFlyIcon, styles.uplaneIconLayout]}
          resizeMode="cover"
          source={require("../assets/uplanefly4.png")}
        />
      </View>
      <View style={styles.flights2}>
        <View style={styles.flights2Child} />
        <Image
          style={[
            styles.flights2Item,
            styles.flights2Layout,
            styles.flights2ItemLayout,
          ]}
          resizeMode="cover"
          source={require("../assets/arrow-1.png")}
        />
        <Image
          style={[styles.flights2Inner, styles.flights2Layout]}
          resizeMode="cover"
          source={require("../assets/arrow-2.png")}
        />
        <Text style={[styles.text2, styles.text2Position, styles.textFlexBox]}>
          12:45
        </Text>
        <Text style={[styles.text3, styles.textFlexBox1, styles.textTypo]}>
          14:30
        </Text>
        <Text style={[styles.sin1, styles.sinTypo]}>SIN</Text>
        <Text style={[styles.cgk1, styles.sinTypo]}>CGK</Text>
        <Text style={[styles.seatFlight1, styles.seatTypo]}>
          Seat / Flight No
        </Text>
        <Text style={[styles.d, styles.dPosition, styles.aTypo]}>3D</Text>
        <Text style={[styles.jk759, styles.dPosition, styles.aTypo]}>
          JK759
        </Text>
        <View
          style={[
            styles.rectangleView,
            styles.dPosition,
            styles.flights1ItemLayout,
          ]}
        />
        <Image
          style={[styles.uplaneFlyIcon1, styles.uplaneIconLayout]}
          resizeMode="cover"
          source={require("../assets/uplanefly4.png")}
        />
        <Image
          style={[styles.unnamed1Icon, styles.iconLayout]}
          resizeMode="cover"
          source={require("../assets/unnamed-1.png")}
        />
        <Image
          style={[styles.unnamed2Icon, styles.iconLayout]}
          resizeMode="cover"
          source={require("../assets/unnamed-1.png")}
        />
      </View>
      <View style={[styles.up, styles.upLayout]}>
        <Pressable
          style={[styles.fichevronLeft, styles.upLayout, styles.upItemPosition]}
          onPress={() => navigation.navigate("Seat")}
        >
          <Image
            style={[styles.icon, styles.iconLayout1]}
            resizeMode="cover"
            source={require("../assets/fichevronleft3.png")}
          />
        </Pressable>
        <Image
          style={styles.upChild}
          resizeMode="cover"
          source={require("../assets/arrow-4.png")}
        />
        <Text style={[styles.bookingSummary1, styles.baliTypo]}>
          Booking Summary
        </Text>
        <Text style={[styles.bali, styles.baliTypo]}>Bali</Text>
        <Text style={[styles.mon13Juni, styles.juniTypo]}>
          Mon, 13 Juni 2021
        </Text>
      </View>
      <View style={[styles.up1, styles.up1Layout]}>
        <View
          style={[
            styles.upItem,
            styles.up1Layout,
            styles.upItemPosition,
            styles.itemShadowBox,
          ]}
        />
        <View
          style={[styles.upInner, styles.upInnerBg, styles.itemShadowBox]}
        />
        <Pressable
          style={[styles.rectanglePressable, styles.upInnerBg]}
          onPress={() => navigation.navigate("SuccesfullPurchase")}
        />
        <Text
          style={[styles.confirmPurchase, styles.baliTypo, styles.textFlexBox1]}
        >
          Confirm Purchase
        </Text>
        <Text
          style={[
            styles.passanger,
            styles.passangerLayout,
            styles.seatTypo,
            styles.textFlexBox1,
          ]}
        >
          Passanger
        </Text>
        <Text
          style={[
            styles.paymentVia,
            styles.passangerLayout,
            styles.seatTypo,
            styles.textFlexBox1,
          ]}
        >
          Payment Via
        </Text>
        <Text style={[styles.mrDias, styles.aTypo, styles.textFlexBox1]}>
          Mr. Dias
        </Text>
        <Text style={[styles.text4, styles.aTypo, styles.textFlexBox1]}>
          **** **** **** 4538
        </Text>
        <Text style={[styles.rp1170000, styles.textFlexBox1, styles.textTypo]}>
          Rp 1.170.000
        </Text>
      </View>
      <View style={[styles.tabBar, styles.barLayout]}>
        <View style={styles.shape} />
      </View>
      <Text style={[styles.thu10Juni, styles.juniTypo]}>Thu, 10 Juni 2021</Text>
      <Image
        style={[styles.mastercardVrtPos92px2x1Icon, styles.text2Position]}
        resizeMode="cover"
        source={require("../assets/mastercard-vrt-pos-92px-2x-1.png")}
      />
      <View style={[styles.statusBar, styles.upItemPosition, styles.barLayout]}>
        <Image
          style={[styles.connectionsIcon, styles.passangerLayout]}
          resizeMode="cover"
          source={require("../assets/connections.png")}
        />
        <View style={styles.time}>
          <Text style={styles.time1}>9:27</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  iconLayout1: {
    overflow: "hidden",
    width: "100%",
  },
  barLayout: {
    width: 375,
    position: "absolute",
  },
  itemShadowBox: {
    elevation: 8,
    shadowRadius: 8,
    borderRadius: Border.br_xl,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: -6,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
  },
  flights2Layout: {
    height: 7,
    position: "absolute",
  },
  flights2ItemLayout: {
    width: 92,
    top: 40,
    height: 7,
  },
  textFlexBox: {
    width: 52,
    height: 23,
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    textAlign: "center",
    color: Color.black,
    fontFamily: FontFamily.comfortaa,
    letterSpacing: 1.4,
    fontSize: FontSize.size_3xl,
    top: 33,
  },
  textFlexBox1: {
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
  },
  textTypo: {
    textAlign: "center",
    fontFamily: FontFamily.comfortaa,
    letterSpacing: 1.4,
    fontSize: FontSize.size_3xl,
    top: 33,
    alignItems: "center",
    display: "flex",
    position: "absolute",
  },
  sinTypo: {
    letterSpacing: -0.4,
    fontSize: FontSize.size_7xl,
    top: 0,
    textAlign: "center",
    color: Color.black,
    fontFamily: FontFamily.comfortaa,
    position: "absolute",
  },
  seatTypo: {
    color: Color.gray_1100,
    letterSpacing: -0.2,
    fontSize: FontSize.size_lg,
    textAlign: "center",
    fontFamily: FontFamily.comfortaa,
  },
  aTypo: {
    fontSize: FontSize.size_xl,
    letterSpacing: -0.2,
    textAlign: "center",
    color: Color.black,
    fontFamily: FontFamily.comfortaa,
  },
  aPosition: {
    top: 105,
    position: "absolute",
  },
  flights1ItemLayout: {
    width: 1,
    borderRadius: Border.br_6xs,
    height: 17,
    backgroundColor: Color.black,
  },
  juniTypo: {
    fontSize: FontSize.size_base,
    display: "none",
    letterSpacing: -0.2,
    textAlign: "center",
    color: Color.black,
    fontFamily: FontFamily.comfortaa,
    position: "absolute",
  },
  uplaneIconLayout: {
    height: 29,
    width: 29,
    top: 0,
    position: "absolute",
    overflow: "hidden",
  },
  text2Position: {
    left: 37,
    position: "absolute",
  },
  dPosition: {
    top: 103,
    position: "absolute",
  },
  iconLayout: {
    height: 94,
    width: 126,
    position: "absolute",
  },
  upLayout: {
    height: 35,
    position: "absolute",
  },
  upItemPosition: {
    top: 0,
    left: 0,
  },
  baliTypo: {
    letterSpacing: -0.3,
    textAlign: "center",
    fontFamily: FontFamily.comfortaa,
    fontSize: FontSize.size_3xl,
    position: "absolute",
  },
  up1Layout: {
    height: 319,
    width: 358,
    position: "absolute",
  },
  upInnerBg: {
    backgroundColor: Color.gray_500,
    position: "absolute",
  },
  passangerLayout: {
    height: 16,
    position: "absolute",
  },
  bookingSummaryChild: {
    top: -288,
    borderRadius: Border.br_2xs,
    backgroundColor: Color.beige_100,
    shadowRadius: 0,
    elevation: 0,
    height: 502,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: -6,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    width: 375,
    left: 0,
  },
  bookingSummaryItem: {
    top: 130,
    left: -5,
    width: 383,
    height: 735,
    position: "absolute",
    backgroundColor: Color.white,
  },
  flights1Child: {
    left: 80,
  },
  text: {
    left: 1,
    height: 23,
    position: "absolute",
  },
  text1: {
    left: 194,
    width: 59,
    height: 23,
    color: Color.black,
  },
  sin: {
    left: 0,
  },
  cgk: {
    left: 191,
  },
  seatFlight: {
    top: 82,
    left: 139,
    position: "absolute",
  },
  a: {
    left: 165,
  },
  jk798: {
    left: 207,
  },
  flights1Item: {
    left: 196,
    height: 17,
  },
  mon14Juni: {
    top: 91,
    left: 134,
    display: "none",
  },
  uplaneFlyIcon: {
    left: 110,
  },
  flights1: {
    top: 349,
    left: 62,
    width: 258,
    height: 123,
    position: "absolute",
  },
  flights2Child: {
    height: "0.22%",
    width: "90%",
    top: "31.84%",
    right: "-0.17%",
    bottom: "67.94%",
    left: "10.17%",
    borderStyle: "solid",
    borderColor: "#000",
    borderTopWidth: 1,
    position: "absolute",
  },
  flights2Item: {
    left: 121,
  },
  flights2Inner: {
    top: 453,
    width: 15,
    left: 246,
  },
  text2: {
    height: 23,
  },
  text3: {
    left: 243,
    width: 49,
    height: 23,
    color: Color.black,
  },
  sin1: {
    left: 240,
  },
  cgk1: {
    left: 30,
  },
  seatFlight1: {
    top: 80,
    left: 178,
    position: "absolute",
  },
  d: {
    left: 202,
  },
  jk759: {
    left: 246,
  },
  rectangleView: {
    left: 233,
    height: 17,
  },
  uplaneFlyIcon1: {
    left: 149,
  },
  unnamed1Icon: {
    top: 50,
    left: 0,
  },
  unnamed2Icon: {
    top: 222,
    left: 3,
  },
  flights2: {
    height: "56.28%",
    width: "80%",
    top: "22.04%",
    right: "13.87%",
    bottom: "21.67%",
    left: "6.13%",
    position: "absolute",
  },
  icon: {
    height: "100%",
  },
  fichevronLeft: {
    width: 35,
  },
  upChild: {
    top: 81,
    left: 155,
    width: 19,
    height: 0,
    display: "none",
    position: "absolute",
  },
  bookingSummary1: {
    left: 49,
    top: 8,
    color: Color.black,
  },
  bali: {
    left: 168,
    top: 8,
    display: "none",
    color: Color.black,
  },
  mon13Juni: {
    top: 32,
    left: 50,
    display: "none",
  },
  up: {
    top: 63,
    width: 216,
    left: 21,
  },
  upItem: {
    backgroundColor: Color.white,
  },
  upInner: {
    left: 187,
    width: 156,
    height: 39,
    top: 22,
  },
  rectanglePressable: {
    height: "14.42%",
    width: "74.86%",
    top: "59.25%",
    right: "12.85%",
    bottom: "26.33%",
    left: "12.29%",
    borderRadius: Border.br_lg,
  },
  confirmPurchase: {
    width: "50%",
    top: "63.32%",
    left: "24.86%",
    color: Color.white,
  },
  passanger: {
    left: 28,
    width: 80,
    top: 22,
  },
  paymentVia: {
    top: 89,
    left: 23,
    width: 105,
  },
  mrDias: {
    top: 48,
    left: 29,
    width: 64,
    height: 17,
    position: "absolute",
  },
  text4: {
    top: 124,
    left: 87,
    width: 133,
    height: 17,
    position: "absolute",
  },
  rp1170000: {
    left: 206,
    color: Color.gray_100,
    width: 115,
    height: 19,
  },
  up1: {
    top: 523,
    left: 9,
  },
  shape: {
    height: "6.02%",
    width: "36%",
    top: "84.34%",
    right: "32%",
    bottom: "9.64%",
    left: "32%",
    borderRadius: Border.br_4xs,
    backgroundColor: Color.black,
    position: "absolute",
  },
  tabBar: {
    bottom: 0,
    height: 83,
    left: 0,
  },
  thu10Juni: {
    top: 270,
    left: 208,
    display: "none",
  },
  mastercardVrtPos92px2x1Icon: {
    top: 633,
    width: 44,
    height: 38,
  },
  connectionsIcon: {
    top: 15,
    right: 14,
    width: 68,
  },
  time1: {
    marginTop: -5.5,
    top: "50%",
    letterSpacing: 0,
    fontWeight: "600",
    fontFamily: FontFamily.sFProText,
    width: 54,
    fontSize: FontSize.size_lg,
    textAlign: "center",
    color: Color.black,
    left: 0,
    position: "absolute",
  },
  time: {
    width: 56,
    top: 8,
    left: 21,
    height: 23,
    position: "absolute",
  },
  statusBar: {
    height: 44,
  },
  bookingSummary: {
    borderRadius: Border.br_2xl,
    flex: 1,
    height: 812,
    backgroundColor: Color.white,
  },
});

export default BookingSummary;
