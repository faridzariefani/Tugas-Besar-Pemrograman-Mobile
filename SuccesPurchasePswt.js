import * as React from "react";
import { StyleSheet, View, Image, Pressable, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontSize, Color, FontFamily, Border } from "../GlobalStyles";

const SuccesfullPurchase = () => {
  const navigation = useNavigation();

  return (
    <View style={[styles.succesfullPurchase, styles.iconLayout]}>
      <View style={[styles.succesfullPurchaseChild, styles.barPosition]} />
      <Image
        style={styles.succesfullPurchaseItem}
        resizeMode="cover"
        source={require("../assets/ellipse-17.png")}
      />
      <Image
        style={styles.ficheckCircleIcon}
        resizeMode="cover"
        source={require("../assets/ficheckcircle.png")}
      />
      <View
        style={[styles.succesfullPurchaseInner, styles.firstItemShadowBox]}
      />
      <View style={[styles.up, styles.upLayout]}>
        <Pressable
          style={[styles.fichevronLeft, styles.upLayout]}
          onPress={() => navigation.navigate("Home")}
        >
          <Image
            style={[styles.icon, styles.iconLayout]}
            resizeMode="cover"
            source={require("../assets/fichevronleft3.png")}
          />
        </Pressable>
        <Image
          style={[styles.upChild, styles.childPosition]}
          resizeMode="cover"
          source={require("../assets/arrow-4.png")}
        />
        <Text style={styles.bali}>Bali</Text>
        <Text style={[styles.mon13Juni, styles.juniTypo]}>
          Mon, 13 Juni 2021
        </Text>
      </View>
      <View style={[styles.tabBar, styles.barPosition]}>
        <View style={styles.shape} />
        <View style={[styles.tabBarChild, styles.childPosition]} />
        <Text style={[styles.transactionHasBeen, styles.passangerFlexBox]}>
          Transaction has been successfull
        </Text>
      </View>
      <Text style={[styles.thu10Juni, styles.juniTypo]}>Thu, 10 Juni 2021</Text>
      <View style={[styles.parent, styles.viewLayout, styles.firstLayout]}>
        <View style={[styles.view, styles.viewLayout]}>
          <View style={[styles.first, styles.viewLayout, styles.firstLayout]}>
            <View
              style={[styles.firstChild, styles.viewLayout, styles.firstLayout]}
            />
            <View
              style={[
                styles.firstItem,
                styles.firstItemLayout,
                styles.firstItemShadowBox,
              ]}
            />
            <Text
              style={[
                styles.passanger,
                styles.passangerLayout,
                styles.seatTypo,
                styles.passangerFlexBox,
              ]}
            >
              Passanger
            </Text>
            <Text style={styles.mrDias}>Mr. Dias</Text>
            <Text style={styles.rp580000}>Rp 580.000</Text>
          </View>
          <View style={styles.flights3}>
            <Image
              style={styles.flights3Child}
              resizeMode="cover"
              source={require("../assets/arrow-1.png")}
            />
            <Text style={[styles.text, styles.textLayout, styles.textFlexBox1]}>
              12:45
            </Text>
            <Text style={[styles.text1, styles.textFlexBox]}>14:30</Text>
            <Text style={[styles.sin, styles.sinTypo]}>SIN</Text>
            <Text style={[styles.cgk, styles.sinTypo]}>CGK</Text>
            <Text style={[styles.seatFlight, styles.seatTypo]}>
              Seat / Flight No
            </Text>
            <Text style={[styles.d, styles.dPosition, styles.dTypo]}>3D</Text>
            <Text style={[styles.jk759, styles.dPosition, styles.dTypo]}>
              JK759
            </Text>
            <View
              style={[styles.flights3Item, styles.itemLayout, styles.dPosition]}
            />
            <Image
              style={[styles.uplaneFlyIcon, styles.uplaneIconLayout]}
              resizeMode="cover"
              source={require("../assets/uplanefly4.png")}
            />
            <Image
              style={[styles.barcodePng1Icon, styles.barcodeIconLayout]}
              resizeMode="cover"
              source={require("../assets/barcodepng-1.png")}
            />
            <Image
              style={[styles.unnamed1Icon, styles.unnamed1IconLayout]}
              resizeMode="cover"
              source={require("../assets/unnamed-1.png")}
            />
          </View>
          <Image
            style={[styles.ticketIcon, styles.firstItemLayout]}
            resizeMode="cover"
            source={require("../assets/ticket.png")}
          />
        </View>
        <View style={[styles.view1, styles.viewLayout]}>
          <View style={[styles.first, styles.viewLayout, styles.firstLayout]}>
            <View
              style={[styles.firstChild, styles.viewLayout, styles.firstLayout]}
            />
            <View
              style={[
                styles.firstItem,
                styles.firstItemLayout,
                styles.firstItemShadowBox,
              ]}
            />
            <Text
              style={[
                styles.passanger,
                styles.passangerLayout,
                styles.seatTypo,
                styles.passangerFlexBox,
              ]}
            >
              Passanger
            </Text>
            <Text style={styles.mrDias}>Mr. Dias</Text>
            <Text style={styles.rp580000}>Rp 590.000</Text>
          </View>
          <View style={styles.flights1}>
            <Image
              style={styles.flights1Child}
              resizeMode="cover"
              source={require("../assets/arrow-11.png")}
            />
            <Text
              style={[styles.text2, styles.textLayout, styles.textFlexBox1]}
            >
              12:45
            </Text>
            <Text style={[styles.text3, styles.textFlexBox]}>14:50</Text>
            <Text style={[styles.sin1, styles.sinTypo]}>SIN</Text>
            <Text style={[styles.cgk1, styles.sinTypo]}>CGK</Text>
            <Text style={[styles.seatFlight1, styles.seatTypo]}>
              Seat / Flight No
            </Text>
            <Text style={[styles.a, styles.aPosition, styles.dTypo]}>1A</Text>
            <Text style={[styles.jk798, styles.aPosition, styles.dTypo]}>
              JK798
            </Text>
            <View
              style={[styles.flights1Item, styles.aPosition, styles.itemLayout]}
            />
            <Text style={[styles.mon14Juni, styles.juniTypo]}>
              Mon, 14 Juni 2021
            </Text>
            <Image
              style={[styles.uplaneFlyIcon1, styles.uplaneIconLayout]}
              resizeMode="cover"
              source={require("../assets/uplanefly5.png")}
            />
            <Image
              style={[styles.unnamed1Icon1, styles.unnamed1IconLayout]}
              resizeMode="cover"
              source={require("../assets/unnamed-11.png")}
            />
            <Image
              style={[styles.barcodePng1Icon1, styles.barcodeIconLayout]}
              resizeMode="cover"
              source={require("../assets/barcodepng-11.png")}
            />
          </View>
          <Image
            style={[styles.ticketIcon, styles.firstItemLayout]}
            resizeMode="cover"
            source={require("../assets/ticket-2.png")}
          />
        </View>
      </View>
      <View style={[styles.statusBar, styles.barPosition]}>
        <Image
          style={[styles.connectionsIcon, styles.passangerLayout]}
          resizeMode="cover"
          source={require("../assets/connections.png")}
        />
        <View style={[styles.time, styles.textLayout]}>
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
  barPosition: {
    width: 375,
    left: 0,
    position: "absolute",
  },
  firstItemShadowBox: {
    elevation: 8,
    shadowRadius: 8,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: -6,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
  },
  upLayout: {
    height: 35,
    width: 35,
    position: "absolute",
  },
  childPosition: {
    display: "none",
    position: "absolute",
  },
  juniTypo: {
    letterSpacing: -0.2,
    fontSize: FontSize.size_base,
    textAlign: "center",
    color: Color.black,
    fontFamily: FontFamily.comfortaa,
    display: "none",
    position: "absolute",
  },
  passangerFlexBox: {
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
  },
  viewLayout: {
    height: 432,
    position: "absolute",
  },
  firstLayout: {
    width: 338,
    height: 432,
  },
  firstItemLayout: {
    height: 39,
    position: "absolute",
  },
  passangerLayout: {
    height: 16,
    position: "absolute",
  },
  seatTypo: {
    color: Color.gray_1100,
    fontSize: FontSize.size_lg,
    letterSpacing: -0.2,
    textAlign: "center",
    fontFamily: FontFamily.comfortaa,
  },
  textLayout: {
    height: 23,
    position: "absolute",
  },
  textFlexBox1: {
    width: 52,
    height: 23,
    letterSpacing: 1.4,
    top: 33,
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    textAlign: "center",
    color: Color.black,
    fontFamily: FontFamily.comfortaa,
    fontSize: FontSize.size_3xl,
  },
  textFlexBox: {
    width: 49,
    height: 23,
    letterSpacing: 1.4,
    top: 33,
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    textAlign: "center",
    color: Color.black,
    fontFamily: FontFamily.comfortaa,
    fontSize: FontSize.size_3xl,
    position: "absolute",
  },
  sinTypo: {
    fontSize: FontSize.size_7xl,
    letterSpacing: -0.4,
    textAlign: "center",
    color: Color.black,
    fontFamily: FontFamily.comfortaa,
    top: 0,
    position: "absolute",
  },
  dPosition: {
    top: 103,
    position: "absolute",
  },
  dTypo: {
    fontSize: FontSize.size_xl,
    letterSpacing: -0.2,
    textAlign: "center",
    color: Color.black,
    fontFamily: FontFamily.comfortaa,
  },
  itemLayout: {
    width: 1,
    borderRadius: Border.br_6xs,
    height: 17,
    backgroundColor: Color.black,
  },
  uplaneIconLayout: {
    height: 29,
    width: 29,
    top: 0,
    position: "absolute",
    overflow: "hidden",
  },
  barcodeIconLayout: {
    height: 81,
    width: 248,
    position: "absolute",
  },
  unnamed1IconLayout: {
    height: 94,
    width: 126,
    left: 0,
    position: "absolute",
  },
  aPosition: {
    top: 105,
    position: "absolute",
  },
  succesfullPurchaseChild: {
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
    backgroundColor: Color.white,
  },
  succesfullPurchaseItem: {
    top: 110,
    left: 152,
    width: 63,
    height: 63,
    position: "absolute",
  },
  ficheckCircleIcon: {
    top: 116,
    left: 158,
    width: 50,
    height: 50,
    position: "absolute",
    overflow: "hidden",
  },
  succesfullPurchaseInner: {
    top: 314,
    left: -5,
    backgroundColor: Color.gray_400,
    width: 383,
    height: 551,
    position: "absolute",
    borderRadius: Border.br_2xl,
  },
  icon: {
    height: "100%",
    overflow: "hidden",
  },
  fichevronLeft: {
    top: 0,
    left: 0,
  },
  upChild: {
    top: 81,
    left: 155,
    width: 19,
    height: 0,
  },
  bali: {
    left: 168,
    letterSpacing: -0.3,
    textAlign: "center",
    color: Color.black,
    fontFamily: FontFamily.comfortaa,
    fontSize: FontSize.size_3xl,
    top: 8,
    display: "none",
    position: "absolute",
  },
  mon13Juni: {
    top: 32,
    left: 50,
  },
  up: {
    top: 63,
    left: 21,
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
    top: "-20.48%",
    right: "14.4%",
    bottom: "65.06%",
    left: "14.13%",
    borderRadius: Border.br_lg,
    backgroundColor: Color.gray_500,
  },
  transactionHasBeen: {
    width: "56.53%",
    top: "-627.71%",
    left: "21.87%",
    fontSize: FontSize.size_6xl,
    letterSpacing: -0.4,
    alignItems: "center",
    display: "flex",
    textAlign: "center",
    color: Color.black,
    fontFamily: FontFamily.comfortaa,
    position: "absolute",
  },
  tabBar: {
    bottom: 0,
    height: 83,
  },
  thu10Juni: {
    top: 270,
    left: 208,
  },
  firstChild: {
    borderRadius: Border.br_xl,
    top: 0,
    left: 0,
    backgroundColor: Color.white,
  },
  firstItem: {
    left: 164,
    width: 156,
    top: 22,
    borderRadius: Border.br_xl,
    backgroundColor: Color.gray_500,
  },
  passanger: {
    left: 34,
    width: 80,
    top: 22,
  },
  mrDias: {
    top: 48,
    left: 35,
    width: 64,
    height: 17,
    fontSize: FontSize.size_xl,
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    letterSpacing: -0.2,
    textAlign: "center",
    color: Color.black,
    fontFamily: FontFamily.comfortaa,
    position: "absolute",
  },
  rp580000: {
    left: 183,
    color: Color.gray_100,
    width: 115,
    height: 19,
    letterSpacing: 1.4,
    top: 33,
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    textAlign: "center",
    fontFamily: FontFamily.comfortaa,
    fontSize: FontSize.size_3xl,
    position: "absolute",
  },
  first: {
    left: 17,
    top: 0,
  },
  flights3Child: {
    top: 40,
    left: 120,
    width: 92,
    height: 7,
    position: "absolute",
  },
  text: {
    left: 43,
  },
  text1: {
    left: 236,
  },
  sin: {
    left: 233,
  },
  cgk: {
    left: 29,
  },
  seatFlight: {
    top: 80,
    left: 177,
    position: "absolute",
  },
  d: {
    left: 201,
  },
  jk759: {
    left: 245,
  },
  flights3Item: {
    left: 232,
  },
  uplaneFlyIcon: {
    left: 148,
  },
  barcodePng1Icon: {
    top: 203,
    left: 41,
  },
  unnamed1Icon: {
    top: 50,
  },
  flights3: {
    top: 113,
    width: 296,
    height: 284,
    left: 21,
    position: "absolute",
  },
  ticketIcon: {
    top: 253,
    width: 372,
    left: 0,
  },
  view: {
    left: -17,
    width: 372,
    top: 0,
  },
  flights1Child: {
    top: 44,
    left: 115,
    width: 91,
    height: 0,
    position: "absolute",
  },
  text2: {
    left: 40,
  },
  text3: {
    left: 234,
  },
  sin1: {
    left: 38,
  },
  cgk1: {
    left: 226,
  },
  seatFlight1: {
    top: 82,
    left: 174,
    position: "absolute",
  },
  a: {
    left: 200,
  },
  jk798: {
    left: 242,
  },
  flights1Item: {
    left: 231,
  },
  mon14Juni: {
    top: 91,
    left: 169,
  },
  uplaneFlyIcon1: {
    left: 145,
  },
  unnamed1Icon1: {
    top: 52,
  },
  barcodePng1Icon1: {
    top: 205,
    left: 37,
  },
  flights1: {
    top: 111,
    left: 25,
    width: 293,
    height: 286,
    position: "absolute",
  },
  view1: {
    left: 384,
    width: 372,
    top: 0,
  },
  parent: {
    top: 342,
    left: 19,
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
    height: 23,
    top: 8,
    left: 21,
  },
  statusBar: {
    height: 44,
    top: 0,
  },
  succesfullPurchase: {
    flex: 1,
    height: 812,
    overflow: "hidden",
    backgroundColor: Color.white,
    borderRadius: Border.br_2xl,
  },
});

export default SuccesfullPurchase;
