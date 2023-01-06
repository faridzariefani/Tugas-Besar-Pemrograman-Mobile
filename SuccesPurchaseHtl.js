import * as React from "react";
import { StyleSheet, View, Text, Image, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, Border, FontSize, FontFamily } from "../GlobalStyles";

const SuccessfullBooking = () => {
  const navigation = useNavigation();

  return (
    <View style={[styles.successfullBooking, styles.successfullBg]}>
      <View
        style={[
          styles.successfullBookingChild,
          styles.barLayout,
          styles.successfullShadowBox,
        ]}
      />
      <View
        style={[
          styles.successfullBookingItem,
          styles.lineViewBorder,
          styles.barLayout,
          styles.successfullShadowBox,
          styles.successfullBg,
        ]}
      />
      <View style={styles.bookingId}>
        <Text style={[styles.bookingId1, styles.time1FlexBox]}>Booking ID</Text>
        <Text style={[styles.text, styles.textLayout, styles.textFlexBox]}>
          5734382365
        </Text>
        <Text
          style={[
            styles.adults1Children,
            styles.guest1Typo,
            styles.guest1Position,
          ]}
        >
          2 Adults, 1 Children
        </Text>
        <Text style={[styles.wifi, styles.wifiTypo]}>Wifi</Text>
        <Text style={[styles.insurances, styles.guest1Typo]}>Insurances</Text>
        <Text style={[styles.swimmingPool, styles.guest1Typo]}>
          Swimming Pool
        </Text>
        <Text style={[styles.guest, styles.guestTypo, styles.guestTypo1]}>
          Guest
        </Text>
        <Text style={[styles.standardRoom, styles.roomTypo]}>
          Standard Room
        </Text>
        <Text style={[styles.roomType, styles.roomTypo]}>Room Type</Text>
        <Text style={[styles.guest1, styles.guest1Typo, styles.guest1Position]}>
          Guest
        </Text>
        <Text style={[styles.includes, styles.wifiTypo]}>Includes</Text>
        <Text style={[styles.bookingDetails, styles.mon13JuniTypo]}>
          Booking Details
        </Text>
        <Text style={[styles.intercontinentalBandung, styles.mon13JuniTypo]}>
          Intercontinental, Bandung
        </Text>
        <Text
          style={[styles.mDiasRamadhan, styles.guestTypo, styles.guestTypo1]}
        >
          M Dias Ramadhan
        </Text>
        <View style={[styles.bookingIdChild, styles.bookingChildLayout]} />
        <View style={[styles.bookingIdItem, styles.bookingChildLayout]} />
        <View style={[styles.bookingIdInner, styles.bookingChildLayout]} />
        <View style={[styles.starView, styles.bookingChildLayout]} />
        <View style={[styles.bookingIdChild1, styles.bookingChildLayout]} />
        <View style={[styles.lineView, styles.lineViewBorder]} />
        <View style={[styles.line, styles.lineLayout, styles.linePosition]}>
          <Text style={[styles.checkIn, styles.guestTypo]}>{`Check-in `}</Text>
          <Text style={[styles.thu10June, styles.juneTypo]}>
            Thu, 10 June 2021
          </Text>
          <Text style={[styles.text1, styles.textTypo]}>15:00</Text>
          <Image
            style={[styles.uhistoryIcon, styles.iconLayout]}
            resizeMode="cover"
            source={require("../assets/uhistory3.png")}
          />
          <View style={[styles.lineChild, styles.lineLayout]} />
        </View>
        <View style={[styles.line1, styles.lineLayout, styles.linePosition]}>
          <Text style={[styles.checkIn, styles.guestTypo]}>{`Check-out `}</Text>
          <Text style={[styles.fri11June, styles.juneTypo]}>
            Fri, 11 June 2021
          </Text>
          <Text style={[styles.text2, styles.textTypo]}>12:00</Text>
          <Image
            style={[styles.uhistoryIcon, styles.iconLayout]}
            resizeMode="cover"
            source={require("../assets/uhistory3.png")}
          />
          <View style={[styles.lineChild, styles.lineLayout]} />
        </View>
      </View>
      <View style={styles.up}>
        <Image
          style={styles.upChild}
          resizeMode="cover"
          source={require("../assets/arrow-4.png")}
        />
        <Text style={styles.transactionHasBeen}>
          Transaction has been Succesfull
        </Text>
        <Text style={[styles.bali, styles.baliTypo]}>Bali</Text>
        <Text style={[styles.mon13Juni, styles.mon13JuniTypo]}>
          Mon, 13 Juni 2021
        </Text>
        <Image
          style={styles.upItem}
          resizeMode="cover"
          source={require("../assets/ellipse-171.png")}
        />
        <Image
          style={styles.ficheckCircleIcon}
          resizeMode="cover"
          source={require("../assets/ficheckcircle1.png")}
        />
      </View>
      <View style={[styles.tabBar, styles.barLayout]}>
        <View style={styles.shape} />
        <Pressable
          style={styles.tabBarChild}
          onPress={() => navigation.navigate("Home")}
        />
        <Text style={[styles.backToHome, styles.baliTypo, styles.textFlexBox]}>
          Back to home
        </Text>
      </View>
      <View style={[styles.statusBar, styles.barLayout]}>
        <Image
          style={[styles.connectionsIcon, styles.iconLayout]}
          resizeMode="cover"
          source={require("../assets/connections.png")}
        />
        <View style={[styles.time, styles.textLayout]}>
          <Text style={[styles.time1, styles.time1FlexBox]}>9:27</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  successfullBg: {
    backgroundColor: Color.white,
    borderRadius: Border.br_2xl,
  },
  barLayout: {
    width: 375,
    left: 0,
  },
  successfullShadowBox: {
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: -6,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    width: 375,
  },
  lineViewBorder: {
    borderStyle: "solid",
    position: "absolute",
  },
  time1FlexBox: {
    textAlign: "center",
    color: Color.black,
    position: "absolute",
  },
  textLayout: {
    height: 23,
    position: "absolute",
  },
  textFlexBox: {
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
  },
  guest1Typo: {
    letterSpacing: -0.2,
    fontSize: FontSize.size_xs,
    textAlign: "center",
    color: Color.black,
    fontFamily: FontFamily.comfortaa,
    position: "absolute",
  },
  guest1Position: {
    top: 330,
    fontSize: FontSize.size_xs,
  },
  wifiTypo: {
    top: 346,
    letterSpacing: -0.2,
    fontSize: FontSize.size_xs,
    textAlign: "center",
    color: Color.black,
    fontFamily: FontFamily.comfortaa,
    position: "absolute",
  },
  guestTypo: {
    fontSize: FontSize.size_sm,
    letterSpacing: -0.2,
    textAlign: "center",
    color: Color.black,
    fontFamily: FontFamily.comfortaa,
    position: "absolute",
  },
  guestTypo1: {
    top: 283,
    fontSize: FontSize.size_sm,
    fontWeight: "700",
  },
  roomTypo: {
    top: 314,
    letterSpacing: -0.2,
    fontSize: FontSize.size_xs,
    textAlign: "center",
    color: Color.black,
    fontFamily: FontFamily.comfortaa,
    position: "absolute",
  },
  mon13JuniTypo: {
    fontSize: FontSize.size_base,
    letterSpacing: -0.2,
    textAlign: "center",
    color: Color.black,
    fontFamily: FontFamily.comfortaa,
    position: "absolute",
  },
  bookingChildLayout: {
    height: 20,
    width: 20,
    backgroundColor: Color.gold,
    borderRadius: Border.br_7xs,
    top: 121,
    position: "absolute",
  },
  lineLayout: {
    height: 56,
    position: "absolute",
  },
  linePosition: {
    top: 161,
    height: 56,
  },
  juneTypo: {
    top: 19,
    fontSize: FontSize.size_base,
    letterSpacing: -0.2,
    textAlign: "center",
    color: Color.black,
    fontFamily: FontFamily.comfortaa,
    position: "absolute",
  },
  textTypo: {
    top: 43,
    fontSize: FontSize.size_sm,
    letterSpacing: -0.2,
    textAlign: "center",
    color: Color.black,
    fontFamily: FontFamily.comfortaa,
    position: "absolute",
  },
  iconLayout: {
    height: 16,
    position: "absolute",
  },
  baliTypo: {
    fontSize: FontSize.size_3xl,
    letterSpacing: -0.3,
    textAlign: "center",
    fontFamily: FontFamily.comfortaa,
    position: "absolute",
  },
  successfullBookingChild: {
    top: -288,
    borderRadius: Border.br_2xs,
    backgroundColor: Color.beige_100,
    shadowRadius: 0,
    elevation: 0,
    height: 732,
    position: "absolute",
  },
  successfullBookingItem: {
    top: 216,
    shadowRadius: 4,
    elevation: 4,
    borderColor: "rgba(0, 0, 0, 0.35)",
    borderWidth: 1,
    height: 596,
  },
  bookingId1: {
    left: 2,
    fontSize: FontSize.size_7xl,
    letterSpacing: -0.4,
    fontFamily: FontFamily.comfortaa,
    textAlign: "center",
    top: 0,
  },
  text: {
    top: 45,
    fontSize: 33,
    letterSpacing: 2.5,
    color: Color.turquoise,
    width: 222,
    fontWeight: "700",
    height: 23,
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    textAlign: "center",
    fontFamily: FontFamily.comfortaa,
    left: 0,
  },
  adults1Children: {
    left: 140,
  },
  wifi: {
    left: 140,
  },
  insurances: {
    top: 377,
    left: 140,
  },
  swimmingPool: {
    top: 361,
    left: 140,
  },
  guest: {
    left: 8,
  },
  standardRoom: {
    left: 140,
  },
  roomType: {
    left: 8,
  },
  guest1: {
    left: 8,
  },
  includes: {
    left: 8,
  },
  bookingDetails: {
    top: 255,
    left: 8,
  },
  intercontinentalBandung: {
    top: 103,
    left: 4,
  },
  mDiasRamadhan: {
    left: 140,
  },
  bookingIdChild: {
    left: 1,
  },
  bookingIdItem: {
    left: 24,
  },
  bookingIdInner: {
    left: 47,
  },
  starView: {
    left: 70,
  },
  bookingIdChild1: {
    left: 93,
  },
  lineView: {
    top: 303,
    borderColor: "#000",
    borderTopWidth: 1,
    width: 287,
    height: 1,
    left: 8,
  },
  checkIn: {
    left: 8,
    top: 0,
  },
  thu10June: {
    left: 8,
  },
  text1: {
    left: 30,
  },
  uhistoryIcon: {
    top: 40,
    width: 16,
    left: 8,
    overflow: "hidden",
  },
  lineChild: {
    backgroundColor: Color.beige_200,
    width: 2,
    top: 0,
    left: 0,
  },
  line: {
    left: 5,
    width: 128,
  },
  fri11June: {
    left: 9,
  },
  text2: {
    left: 31,
  },
  line1: {
    left: 177,
    width: 117,
  },
  bookingId: {
    top: 267,
    left: 35,
    width: 294,
    height: 389,
    position: "absolute",
  },
  upChild: {
    top: 81,
    left: 155,
    width: 19,
    height: 0,
    display: "none",
    position: "absolute",
  },
  transactionHasBeen: {
    top: 67,
    fontSize: FontSize.size_5xl,
    letterSpacing: -0.3,
    width: 206,
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    textAlign: "center",
    color: Color.black,
    fontFamily: FontFamily.comfortaa,
    left: 0,
    position: "absolute",
  },
  bali: {
    top: -3,
    left: 104,
    display: "none",
    color: Color.black,
    fontSize: FontSize.size_3xl,
  },
  mon13Juni: {
    top: 21,
    left: -14,
    display: "none",
  },
  upItem: {
    left: 79,
    width: 47,
    height: 47,
    top: 0,
    position: "absolute",
  },
  ficheckCircleIcon: {
    top: 4,
    left: 83,
    width: 38,
    height: 38,
    position: "absolute",
    overflow: "hidden",
  },
  up: {
    top: 74,
    left: 85,
    height: 111,
    width: 206,
    position: "absolute",
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
  tabBarChild: {
    height: "55.42%",
    width: "71.47%",
    top: "-21.69%",
    right: "14.13%",
    bottom: "66.27%",
    left: "14.4%",
    borderRadius: Border.br_lg,
    backgroundColor: Color.gray_500,
    position: "absolute",
  },
  backToHome: {
    width: "47.73%",
    top: "-6.02%",
    left: "26.4%",
    color: Color.white,
  },
  tabBar: {
    bottom: 0,
    height: 83,
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
    fontSize: FontSize.size_lg,
    letterSpacing: 0,
    fontWeight: "600",
    fontFamily: FontFamily.sFProText,
    width: 54,
    left: 0,
  },
  time: {
    top: 8,
    left: 21,
    width: 56,
  },
  statusBar: {
    height: 44,
    top: 0,
    position: "absolute",
  },
  successfullBooking: {
    flex: 1,
    width: "100%",
    height: 812,
    overflow: "hidden",
  },
});

export default SuccessfullBooking;
