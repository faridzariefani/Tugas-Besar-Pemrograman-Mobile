import * as React from "react";
import { StyleSheet, View, Text, Image, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Border, FontSize, FontFamily, Color } from "../GlobalStyles";

const BookingSummary1 = () => {
  const navigation = useNavigation();

  return (
    <View style={[styles.bookingSummary, styles.iconLayout]}>
      <View style={[styles.bookingSummaryChild, styles.barLayout]} />
      <View style={[styles.bookingSummaryItem, styles.itemShadowBox]} />
      <View style={styles.flights1}>
        <Text style={styles.intercontinental}>Intercontinental</Text>
        <Text
          style={[
            styles.xStandardRoom,
            styles.timeLayout,
            styles.textFlexBox,
            styles.rp2120000Typo,
          ]}
        >
          (1x) Standard Room
        </Text>
        <Text style={[styles.guestsRoom, styles.kingBedTypo]}>
          2 guest(s) / room
        </Text>
        <Text style={[styles.kingBed, styles.kingBedTypo]}>1 king bed</Text>
        <Text style={[styles.childrenCanStay, styles.checkTypo]}>
          Children can stay WITHOUT CHARGES
        </Text>
        <Text style={[styles.checkInCheckOut, styles.checkTypo]}>
          Check-in / Check-out Time
        </Text>
        <Text style={[styles.addOns, styles.checkTypo]}>Add-ons</Text>
        <Text style={[styles.checkIn, styles.checkInTypo]}>{`Check-in `}</Text>
        <Text style={[styles.checkOut, styles.checkOutTypo]}>Check-out</Text>
        <Text
          style={[
            styles.covid19Insurance,
            styles.insurancePosition,
            styles.checkTypo,
          ]}
        >
          Covid-19 Insurance
        </Text>
        <Text
          style={[
            styles.travelInsurance,
            styles.insurancePosition,
            styles.checkTypo,
          ]}
        >
          Travel Insurance
        </Text>
        <Text style={[styles.thur10June, styles.checkInTypo]}>
          Thur, 10 June 2021 ( 15 : 00 )
        </Text>
        <Text style={[styles.fri11June, styles.checkOutTypo]}>
          Fri, 11 June 2021 ( 12 : 00 )
        </Text>
        <Image
          style={styles.uusersAltIcon}
          resizeMode="cover"
          source={require("../assets/uusersalt4.png")}
        />
        <Image
          style={styles.ubedDoubleIcon}
          resizeMode="cover"
          source={require("../assets/ubeddouble.png")}
        />
        <Image
          style={[styles.ficheckCircleIcon, styles.ficheckIconLayout]}
          resizeMode="cover"
          source={require("../assets/ficheckcircle2.png")}
        />
        <Image
          style={[styles.ficheckCircleIcon1, styles.ficheckIconLayout]}
          resizeMode="cover"
          source={require("../assets/ficheckcircle2.png")}
        />
      </View>
      <View style={[styles.up, styles.upLayout]}>
        <Pressable
          style={[styles.fichevronLeft, styles.upLayout, styles.upItemPosition]}
          onPress={() => navigation.navigate("PickARoom")}
        >
          <Image
            style={[styles.icon, styles.iconLayout]}
            resizeMode="cover"
            source={require("../assets/fichevronleft3.png")}
          />
        </Pressable>
        <Image
          style={styles.upChild}
          resizeMode="cover"
          source={require("../assets/arrow-4.png")}
        />
        <Text
          style={[
            styles.bookingSummary1,
            styles.baliTypo,
            styles.insurancePosition,
          ]}
        >
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
        <View style={[styles.upInner, styles.itemShadowBox]} />
        <Pressable
          style={styles.rectanglePressable}
          onPress={() => navigation.navigate("SuccessfullBooking")}
        />
        <Text
          style={[styles.confirmPurchase, styles.baliTypo, styles.textFlexBox]}
        >
          Confirm Purchase
        </Text>
        <Text style={[styles.guest, styles.guestLayout, styles.guestTypo]}>
          Guest
        </Text>
        <Text style={[styles.paymentVia, styles.guestLayout, styles.guestTypo]}>
          Payment Via
        </Text>
        <Text style={[styles.mrParis, styles.textTypo]}>Mr. Paris</Text>
        <Text style={[styles.text, styles.textTypo, styles.textFlexBox]}>
          **** **** **** 4538
        </Text>
        <Text
          style={[styles.rp2120000, styles.textFlexBox, styles.rp2120000Typo]}
        >
          Rp 2.120.000
        </Text>
      </View>
      <View style={[styles.tabBar, styles.barLayout]}>
        <View style={styles.shape} />
      </View>
      <Text style={[styles.thu10Juni, styles.juniTypo]}>Thu, 10 Juni 2021</Text>
      <Image
        style={styles.mastercardVrtPos92px2x1Icon}
        resizeMode="cover"
        source={require("../assets/mastercard-vrt-pos-92px-2x-1.png")}
      />
      <View style={[styles.statusBar, styles.upItemPosition, styles.barLayout]}>
        <Image
          style={[styles.connectionsIcon, styles.guestLayout]}
          resizeMode="cover"
          source={require("../assets/connections.png")}
        />
        <View style={[styles.time, styles.timeLayout]}>
          <Text style={styles.time1}>9:27</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  iconLayout: {
    width: "100%",
    overflow: "hidden",
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
  timeLayout: {
    height: 23,
    position: "absolute",
  },
  textFlexBox: {
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
  },
  rp2120000Typo: {
    letterSpacing: 1.4,
    fontSize: FontSize.size_3xl,
    alignItems: "center",
    display: "flex",
    textAlign: "center",
    fontFamily: FontFamily.comfortaa,
  },
  kingBedTypo: {
    letterSpacing: -0.2,
    fontSize: FontSize.size_xs,
    textAlign: "center",
    color: Color.black,
    fontFamily: FontFamily.comfortaa,
    position: "absolute",
  },
  checkTypo: {
    fontSize: FontSize.size_sm,
    letterSpacing: -0.2,
    textAlign: "center",
    fontFamily: FontFamily.comfortaa,
    position: "absolute",
  },
  checkInTypo: {
    top: 172,
    fontSize: FontSize.size_sm,
    letterSpacing: -0.2,
    textAlign: "center",
    color: Color.black,
    fontFamily: FontFamily.comfortaa,
    position: "absolute",
  },
  checkOutTypo: {
    top: 190,
    fontSize: FontSize.size_sm,
    letterSpacing: -0.2,
    textAlign: "center",
    color: Color.black,
    fontFamily: FontFamily.comfortaa,
    position: "absolute",
  },
  insurancePosition: {
    left: 49,
    color: Color.black,
  },
  ficheckIconLayout: {
    height: 24,
    width: 24,
    left: 12,
    position: "absolute",
    overflow: "hidden",
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
    fontSize: FontSize.size_3xl,
    textAlign: "center",
    fontFamily: FontFamily.comfortaa,
    position: "absolute",
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
  up1Layout: {
    height: 319,
    width: 358,
    position: "absolute",
  },
  guestLayout: {
    height: 16,
    position: "absolute",
  },
  guestTypo: {
    color: Color.gray_1100,
    height: 16,
    fontSize: FontSize.size_lg,
    letterSpacing: -0.2,
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    textAlign: "center",
    fontFamily: FontFamily.comfortaa,
  },
  textTypo: {
    fontSize: FontSize.size_xl,
    letterSpacing: -0.2,
    textAlign: "center",
    color: Color.black,
    fontFamily: FontFamily.comfortaa,
    position: "absolute",
  },
  bookingSummaryChild: {
    top: -288,
    borderRadius: Border.br_2xs,
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
    backgroundColor: Color.beige_100,
    left: 0,
  },
  bookingSummaryItem: {
    top: 130,
    left: -5,
    borderStyle: "solid",
    borderColor: "rgba(0, 0, 0, 0.35)",
    borderWidth: 1,
    width: 383,
    height: 735,
    position: "absolute",
    backgroundColor: Color.white,
  },
  intercontinental: {
    fontSize: FontSize.size_7xl,
    letterSpacing: -0.4,
    textAlign: "center",
    fontFamily: FontFamily.comfortaa,
    color: Color.black,
    left: 9,
    top: 0,
    position: "absolute",
  },
  xStandardRoom: {
    top: 34,
    width: 222,
    color: Color.black,
    left: 0,
  },
  guestsRoom: {
    top: 76,
    left: 32,
  },
  kingBed: {
    top: 94,
    left: 33,
  },
  childrenCanStay: {
    top: 114,
    color: Color.green,
    left: 11,
  },
  checkInCheckOut: {
    top: 149,
    left: 10,
    color: Color.black,
  },
  addOns: {
    top: 224,
    left: 10,
    color: Color.black,
  },
  checkIn: {
    left: 15,
  },
  checkOut: {
    left: 15,
  },
  covid19Insurance: {
    top: 253,
  },
  travelInsurance: {
    top: 282,
  },
  thur10June: {
    left: 123,
  },
  fri11June: {
    left: 124,
  },
  uusersAltIcon: {
    top: 75,
    width: 15,
    height: 15,
    left: 10,
    position: "absolute",
    overflow: "hidden",
  },
  ubedDoubleIcon: {
    top: 93,
    width: 14,
    height: 14,
    left: 11,
    position: "absolute",
    overflow: "hidden",
  },
  ficheckCircleIcon: {
    top: 247,
  },
  ficheckCircleIcon1: {
    top: 276,
  },
  flights1: {
    top: 169,
    left: 28,
    width: 279,
    height: 300,
    position: "absolute",
  },
  icon: {
    height: "100%",
    overflow: "hidden",
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
    top: 8,
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
    backgroundColor: Color.beige_100,
    shadowRadius: 8,
    borderRadius: Border.br_xl,
    position: "absolute",
  },
  rectanglePressable: {
    height: "14.42%",
    width: "74.86%",
    top: "59.25%",
    right: "12.85%",
    bottom: "26.33%",
    left: "12.29%",
    borderRadius: Border.br_lg,
    backgroundColor: Color.gray_500,
    position: "absolute",
  },
  confirmPurchase: {
    width: "50%",
    top: "63.32%",
    left: "24.86%",
    color: Color.white,
  },
  guest: {
    width: 80,
    top: 22,
    left: 10,
  },
  paymentVia: {
    top: 89,
    left: 23,
    width: 105,
  },
  mrParis: {
    top: 47,
    left: 27,
  },
  text: {
    top: 124,
    left: 87,
    width: 133,
    height: 17,
  },
  rp2120000: {
    top: 33,
    left: 202,
    color: Color.gray_100,
    width: 123,
    height: 19,
    position: "absolute",
  },
  up1: {
    top: 523,
    left: 9,
    height: 319,
    width: 358,
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
  },
  mastercardVrtPos92px2x1Icon: {
    top: 633,
    left: 37,
    width: 44,
    height: 38,
    position: "absolute",
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
  },
  statusBar: {
    height: 44,
  },
  bookingSummary: {
    borderRadius: Border.br_2xl,
    flex: 1,
    height: 812,
    overflow: "hidden",
    backgroundColor: Color.white,
  },
});

export default BookingSummary1;
