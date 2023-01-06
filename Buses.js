import * as React from "react";
import { Text, StyleSheet, View, Image, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Border, Color, FontFamily, FontSize } from "../GlobalStyles";

const Buses = () => {
  const navigation = useNavigation();

  return (
    <View style={[styles.buses, styles.busesLayout]}>
      <View style={styles.mayParent}>
        <View style={[styles.may, styles.mayPosition]}>
          <Text style={[styles.may2021, styles.busFlexBox, styles.may2021Typo]}>
            May 2021
          </Text>
          <View style={[styles.view, styles.viewLayout3]}>
            <View style={styles.child} />
            <View style={[styles.item, styles.itemShadowBox]} />
            <View style={styles.inner} />
            <Image
              style={[
                styles.ubusIcon,
                styles.iconLayout1,
                styles.iconPosition1,
              ]}
              resizeMode="cover"
              source={require("../assets/ubus.png")}
            />
            <Text
              style={[
                styles.bookingId7764437234Container,
                styles.jakartaFlexBox,
                styles.bookingPosition,
              ]}
            >
              <Text style={styles.bookingId7764437234Container1}>
                <Text style={styles.bookingId}>{`Booking ID  `}</Text>
                <Text style={styles.text}>7764437234</Text>
              </Text>
            </Text>
            <Text style={[styles.rp99000, styles.rp99000Typo]}>Rp 99.000</Text>
            <Image
              style={[styles.arrowIcon, styles.childLayout1]}
              resizeMode="cover"
              source={require("../assets/arrow-5.png")}
            />
            <Text
              style={[styles.bandung, styles.bandungPosition]}
            >{`Bandung `}</Text>
            <Text style={[styles.jakarta, styles.jakartaFlexBox]}>Jakarta</Text>
            <Image
              style={[
                styles.fiuserIcon,
                styles.iconLayout,
                styles.fiuserIconPosition,
              ]}
              resizeMode="cover"
              source={require("../assets/fiuser.png")}
            />
          </View>
          <View style={[styles.view1, styles.viewLayout3]}>
            <View style={styles.child} />
            <View style={[styles.item, styles.itemShadowBox]} />
            <View style={styles.inner} />
            <Image
              style={[
                styles.ubusIcon,
                styles.iconLayout1,
                styles.iconPosition1,
              ]}
              resizeMode="cover"
              source={require("../assets/ubus.png")}
            />
            <Text
              style={[
                styles.bookingId7764437234Container,
                styles.jakartaFlexBox,
                styles.bookingPosition,
              ]}
            >
              <Text style={styles.bookingId7764437234Container1}>
                <Text style={styles.bookingId}>{`Booking ID  `}</Text>
                <Text style={styles.text}>7700486555</Text>
              </Text>
            </Text>
            <Text style={[styles.rp99000, styles.rp99000Typo]}>Rp 100.000</Text>
            <Image
              style={[styles.child3, styles.childLayout1]}
              resizeMode="cover"
              source={require("../assets/arrow-5.png")}
            />
            <Text style={[styles.bandung, styles.bandungPosition]}>
              Jakarta
            </Text>
            <Text style={[styles.bandung1, styles.jakartaFlexBox]}>
              Bandung
            </Text>
            <Image
              style={[
                styles.fiuserIcon,
                styles.iconLayout,
                styles.fiuserIconPosition,
              ]}
              resizeMode="cover"
              source={require("../assets/fiuser.png")}
            />
          </View>
        </View>
        <View style={[styles.april, styles.mayPosition]}>
          <Text style={[styles.may2021, styles.busFlexBox, styles.may2021Typo]}>
            April 2021
          </Text>
          <View style={[styles.view2, styles.viewLayout2]}>
            <View style={styles.child} />
            <View style={[styles.item, styles.itemShadowBox]} />
            <View style={styles.inner} />
            <Image
              style={[
                styles.uplaneFlyIcon,
                styles.iconLayout1,
                styles.iconPosition1,
              ]}
              resizeMode="cover"
              source={require("../assets/uplanefly.png")}
            />
            <Text
              style={[
                styles.bookingId5423564399,
                styles.jakartaFlexBox,
                styles.bookingPosition,
              ]}
            >
              Booking ID 5423564399
            </Text>
            <Text style={[styles.rp400000, styles.rp99000Typo]}>
              Rp 400.000
            </Text>
            <Image
              style={[styles.child7, styles.childLayout1]}
              resizeMode="cover"
              source={require("../assets/arrow-5.png")}
            />
            <Text style={[styles.bandung, styles.bandungPosition]}>
              Jogyakarta
            </Text>
            <Text style={[styles.jakarta2, styles.jakartaFlexBox]}>
              Jakarta
            </Text>
            <Image
              style={[
                styles.fiuserIcon,
                styles.iconLayout,
                styles.fiuserIconPosition,
              ]}
              resizeMode="cover"
              source={require("../assets/fiuser.png")}
            />
          </View>
          <View style={[styles.view3, styles.viewLayout2]}>
            <View style={styles.child} />
            <View style={[styles.item, styles.itemShadowBox]} />
            <View style={styles.inner} />
            <Image
              style={[
                styles.uplaneFlyIcon,
                styles.iconLayout1,
                styles.iconPosition1,
              ]}
              resizeMode="cover"
              source={require("../assets/uplanefly.png")}
            />
            <Text
              style={[
                styles.bookingId5423564399,
                styles.jakartaFlexBox,
                styles.bookingPosition,
              ]}
            >
              Booking ID 5664753894
            </Text>
            <Text style={[styles.rp400000, styles.rp99000Typo]}>
              Rp 380.000
            </Text>
            <Image
              style={[styles.child11, styles.childLayout1]}
              resizeMode="cover"
              source={require("../assets/arrow-5.png")}
            />
            <Text style={[styles.jakarta3, styles.bandungPosition]}>
              Jakarta
            </Text>
            <Text style={[styles.jogyakarta1, styles.jakarta4Typo]}>
              Jogyakarta
            </Text>
            <Image
              style={[
                styles.fiuserIcon,
                styles.iconLayout,
                styles.fiuserIconPosition,
              ]}
              resizeMode="cover"
              source={require("../assets/fiuser.png")}
            />
          </View>
          <View style={[styles.view4, styles.viewPosition]}>
            <View style={styles.child} />
            <View style={[styles.child13, styles.itemShadowBox]} />
            <View style={styles.inner} />
            <Image
              style={[styles.ubedIcon, styles.iconPosition]}
              resizeMode="cover"
              source={require("../assets/ubed.png")}
            />
            <Text
              style={[
                styles.bookingId5423564399,
                styles.jakartaFlexBox,
                styles.bookingPosition,
              ]}
            >
              Booking ID 7000154324
            </Text>
            <Text style={[styles.rp400000, styles.rp99000Typo]}>
              Rp 580.000
            </Text>
            <Text style={[styles.holidayInn, styles.bandungPosition]}>
              Holiday Inn
            </Text>
          </View>
          <View style={[styles.view5, styles.viewPosition]}>
            <View style={styles.child} />
            <View style={[styles.item, styles.itemShadowBox]} />
            <View style={styles.inner} />
            <Image
              style={[
                styles.umetroIcon,
                styles.iconPosition,
                styles.iconLayout1,
              ]}
              resizeMode="cover"
              source={require("../assets/umetro1.png")}
            />
            <Text
              style={[
                styles.bookingId5423564399,
                styles.jakartaFlexBox,
                styles.bookingPosition,
              ]}
            >
              Booking ID 7112256347
            </Text>
            <Text style={[styles.rp400000, styles.rp99000Typo]}>
              Rp 380.000
            </Text>
            <Image
              style={[styles.child18, styles.childLayout1]}
              resizeMode="cover"
              source={require("../assets/arrow-59.png")}
            />
            <Text style={[styles.jakarta3, styles.bandungPosition]}>
              Bandung
            </Text>
            <Text style={[styles.jakarta4, styles.jakarta4Typo]}>Jakarta</Text>
            <Image
              style={[
                styles.fiuserIcon,
                styles.iconLayout,
                styles.fiuserIconPosition,
              ]}
              resizeMode="cover"
              source={require("../assets/fiuser9.png")}
            />
          </View>
        </View>
        <View style={[styles.view6, styles.viewLayout1]}>
          <View style={[styles.child19, styles.viewLayout1]} />
          <Text style={[styles.from, styles.fromFlexBox, styles.fromPosition]}>
            From
          </Text>
          <Text
            style={[
              styles.bandungIndonesia,
              styles.juneFlexBox,
              styles.may2021Typo,
            ]}
          >
            <Text style={styles.bookingId7764437234Container1}>
              <Text style={styles.juneTypo}>{`Bandung, `}</Text>
              <Text style={styles.indonesia}>Indonesia</Text>
            </Text>
          </Text>
          <Image
            style={[
              styles.iconplacesairportShuttle24,
              styles.iconLayout,
              styles.fiuserIconPosition,
            ]}
            resizeMode="cover"
            source={require("../assets/iconplacesairport-shuttle-24px.png")}
          />
          <View style={[styles.lineView, styles.childLayout]} />
          <View style={[styles.child20, styles.childLayout]} />
          <View style={[styles.child21, styles.childLayout]} />
          <View style={[styles.child22, styles.childLayout]} />
        </View>
        <View style={[styles.view7, styles.viewLayout1]}>
          <View style={[styles.child19, styles.viewLayout1]} />
          <Text style={[styles.from, styles.fromFlexBox, styles.fromPosition]}>
            From
          </Text>
          <Text
            style={[
              styles.jakartaSingapore,
              styles.busPosition,
              styles.juneFlexBox,
            ]}
          >
            <Text style={styles.bookingId7764437234Container1}>
              <Text style={styles.juneTypo}>{`Jakarta, `}</Text>
              <Text style={styles.singapore}>Singapore</Text>
            </Text>
          </Text>
          <Image
            style={[styles.iconplacesairportShuttle241, styles.iconLayout]}
            resizeMode="cover"
            source={require("../assets/iconplacesairport-shuttle-24px1.png")}
          />
          <View style={[styles.timePosition, styles.childLayout]} />
          <View style={[styles.child25Position, styles.childLayout]} />
          <View style={[styles.child26, styles.childLayout]} />
          <View style={[styles.child27, styles.childLayout]} />
        </View>
        <View style={[styles.view8, styles.viewLayout]}>
          <Image
            style={[styles.uusersAltIcon, styles.iconLayout]}
            resizeMode="cover"
            source={require("../assets/uusersalt1.png")}
          />
          <Text style={[styles.passengers, styles.classFlexBox]}>
            Passengers
          </Text>
          <View style={[styles.child28, styles.child28Layout]} />
          <Text style={[styles.text2, styles.text2Typo]}>1</Text>
          <Text style={[styles.text3, styles.textTypo]}>-</Text>
          <Text style={[styles.text4, styles.textTypo]}>+</Text>
        </View>
        <View style={[styles.view9, styles.viewLayout]}>
          <Image
            style={[
              styles.utransactionIcon,
              styles.iconPosition,
              styles.iconLayout,
            ]}
            resizeMode="cover"
            source={require("../assets/utransaction3.png")}
          />
          <Text style={[styles.class, styles.classFlexBox]}>Class</Text>
          <View style={[styles.child28, styles.child28Layout]} />
          <Text style={[styles.business, styles.fromFlexBox]}>Business</Text>
        </View>
        <View style={[styles.view10, styles.viewLayout1]}>
          <View style={[styles.child19, styles.viewLayout1]} />
          <Text
            style={[styles.departure, styles.fromFlexBox, styles.fromPosition]}
          >
            Departure
          </Text>
          <Text
            style={[
              styles.tue1June,
              styles.busPosition,
              styles.juneFlexBox,
              styles.juneTypo,
            ]}
          >
            Tue, 1 June 2021
          </Text>
          <View style={[styles.lineView, styles.childLayout]} />
          <View style={[styles.child20, styles.childLayout]} />
          <View style={[styles.child21, styles.childLayout]} />
          <View style={[styles.child22, styles.childLayout]} />
          <Image
            style={[styles.uscheduleIcon, styles.uscheduleIconPosition]}
            resizeMode="cover"
            source={require("../assets/uschedule.png")}
          />
        </View>
        <View style={[styles.view11, styles.viewLayout1]}>
          <View style={[styles.child19, styles.viewLayout1]} />
          <Text
            style={[
              styles.return,
              styles.returnLayout,
              styles.fromFlexBox,
              styles.fromPosition,
            ]}
          >
            Return
          </Text>
          <Text
            style={[
              styles.wed2June,
              styles.juneFlexBox,
              styles.juneTypo,
              styles.may2021Typo,
            ]}
          >
            Wed, 2 June 2021
          </Text>
          <View style={styles.childLayout} />
          <View style={styles.childLayout} />
          <View style={[styles.child26, styles.childLayout]} />
          <View style={[styles.child27, styles.childLayout]} />
          <Image
            style={[styles.uscheduleIcon1, styles.uscheduleIconPosition]}
            resizeMode="cover"
            source={require("../assets/uschedule.png")}
          />
        </View>
        <Image
          style={[styles.switchIcon, styles.returnLayout]}
          resizeMode="cover"
          source={require("../assets/switch.png")}
        />
      </View>
      <Image
        style={[
          styles.menuBelowIcon,
          styles.menuBelowIconLayout,
          styles.tabBarChildPosition,
        ]}
        resizeMode="cover"
        source={require("../assets/menu-below6.png")}
      />
      <View style={[styles.tabBar, styles.barPosition]}>
        <View
          style={[
            styles.tabBarChild,
            styles.tabBarChildPosition,
            styles.busesLayout,
          ]}
        />
        <View style={styles.shape} />
      </View>
      <View style={[styles.up, styles.barPosition]}>
        <View style={[styles.upChild, styles.upItemShadowBox]} />
        <View style={[styles.upItem, styles.upItemShadowBox]} />
        <View style={[styles.upInner, styles.upInnerBg]} />
        <Text style={[styles.roundTrip, styles.oneWayTypo]}>Round Trip</Text>
        <Text style={[styles.oneWay, styles.oneWayTypo]}>One way</Text>
        <Text style={[styles.bus, styles.busPosition, styles.busFlexBox]}>
          Bus
        </Text>
      </View>
      <Pressable
        style={[styles.fichevronLeft, styles.child28Layout]}
        onPress={() => navigation.navigate("Home")}
      >
        <Image
          style={styles.icon}
          resizeMode="cover"
          source={require("../assets/fichevronleft1.png")}
        />
      </Pressable>
      <Image
        style={[styles.iconlylightOutlinefilter, styles.menuBelowIconLayout]}
        resizeMode="cover"
        source={require("../assets/iconlylightoutlinefilter.png")}
      />
      <View style={[styles.busesChild, styles.upInnerBg]} />
      <Text style={[styles.search, styles.text2Typo]}>Search</Text>
      <View style={[styles.statusBar, styles.barPosition]}>
        <Image
          style={[styles.connectionsIcon, styles.child25Position]}
          resizeMode="cover"
          source={require("../assets/connections.png")}
        />
        <View style={[styles.time, styles.timePosition]}>
          <Text style={[styles.time1, styles.busFlexBox, styles.mayPosition]}>
            9:27
          </Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  busesLayout: {
    borderRadius: Border.br_2xl,
    backgroundColor: Color.white,
  },
  mayPosition: {
    left: 0,
    position: "absolute",
  },
  busFlexBox: {
    textAlign: "center",
    color: Color.black,
  },
  may2021Typo: {
    fontFamily: FontFamily.comfortaa,
    position: "absolute",
  },
  viewLayout3: {
    height: 91,
    width: 400,
    left: 4,
    position: "absolute",
  },
  itemShadowBox: {
    height: 64,
    width: 110,
    left: 171,
    top: 27,
    borderWidth: 1,
    borderColor: "rgba(0, 0, 0, 0.35)",
    borderStyle: "solid",
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    borderRadius: Border.br_xs,
    position: "absolute",
  },
  iconLayout1: {
    height: 20,
    width: 20,
  },
  iconPosition1: {
    left: 12,
    height: 20,
    position: "absolute",
    overflow: "hidden",
  },
  jakartaFlexBox: {
    height: 21,
    alignItems: "center",
    display: "flex",
    textAlign: "left",
    fontFamily: FontFamily.comfortaa,
    position: "absolute",
  },
  bookingPosition: {
    color: Color.gray_600,
    top: 5,
    width: 212,
    alignItems: "center",
    display: "flex",
    textAlign: "left",
    left: 15,
  },
  rp99000Typo: {
    letterSpacing: 1.9,
    top: 65,
    color: Color.white,
    fontSize: FontSize.size_sm,
    height: 21,
    width: 212,
    alignItems: "center",
    display: "flex",
    textAlign: "left",
    fontFamily: FontFamily.comfortaa,
    position: "absolute",
  },
  childLayout1: {
    height: 0,
    top: 43,
    width: 20,
    position: "absolute",
  },
  bandungPosition: {
    left: 45,
    letterSpacing: -0.2,
    fontSize: FontSize.size_sm,
    height: 21,
    alignItems: "center",
    display: "flex",
    textAlign: "left",
    top: 33,
    color: Color.black,
    fontFamily: FontFamily.comfortaa,
    position: "absolute",
  },
  iconLayout: {
    width: 24,
    height: 24,
  },
  fiuserIconPosition: {
    top: 10,
    width: 24,
    position: "absolute",
  },
  viewLayout2: {
    width: 398,
    height: 91,
    left: 4,
    position: "absolute",
  },
  jakarta4Typo: {
    width: 84,
    letterSpacing: -0.2,
    fontSize: FontSize.size_sm,
    height: 21,
    alignItems: "center",
    display: "flex",
    textAlign: "left",
    top: 33,
    color: Color.black,
    fontFamily: FontFamily.comfortaa,
    position: "absolute",
  },
  viewPosition: {
    left: 2,
    width: 398,
    height: 91,
    position: "absolute",
  },
  iconPosition: {
    left: 14,
    position: "absolute",
    overflow: "hidden",
  },
  viewLayout1: {
    height: 73,
    width: 315,
    position: "absolute",
  },
  fromFlexBox: {
    justifyContent: "center",
    fontSize: FontSize.size_base,
    letterSpacing: -0.2,
    alignItems: "center",
    display: "flex",
    textAlign: "center",
    fontFamily: FontFamily.comfortaa,
  },
  fromPosition: {
    top: 17,
    justifyContent: "center",
    color: Color.gray_1100,
  },
  juneFlexBox: {
    top: 42,
    alignItems: "center",
    display: "flex",
    textAlign: "left",
  },
  childLayout: {
    height: 6,
    width: 1,
    borderRightWidth: 1,
    borderColor: "rgba(0, 0, 0, 0.5)",
    left: 24,
    borderStyle: "solid",
  },
  busPosition: {
    left: 74,
    fontFamily: FontFamily.comfortaa,
    position: "absolute",
  },
  viewLayout: {
    height: 79,
    top: 198,
    width: 144,
    position: "absolute",
  },
  classFlexBox: {
    width: 90,
    top: 4,
    justifyContent: "center",
    fontSize: FontSize.size_base,
    letterSpacing: -0.2,
    alignItems: "center",
    display: "flex",
    textAlign: "center",
    color: Color.black,
    fontFamily: FontFamily.comfortaa,
    position: "absolute",
  },
  child28Layout: {
    height: 43,
    position: "absolute",
  },
  text2Typo: {
    fontSize: FontSize.size_3xl,
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    textAlign: "center",
    fontFamily: FontFamily.comfortaa,
    letterSpacing: -0.3,
    position: "absolute",
  },
  textTypo: {
    letterSpacing: -0.5,
    fontSize: FontSize.size_8xl,
    justifyContent: "center",
    color: Color.gray_1100,
    width: 24,
    alignItems: "center",
    display: "flex",
    textAlign: "center",
    fontFamily: FontFamily.comfortaa,
    position: "absolute",
  },
  juneTypo: {
    fontSize: FontSize.size_base,
    color: Color.black,
  },
  uscheduleIconPosition: {
    left: 22,
    height: 24,
    width: 24,
    position: "absolute",
    overflow: "hidden",
  },
  returnLayout: {
    width: 57,
    position: "absolute",
  },
  menuBelowIconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  tabBarChildPosition: {
    left: "0%",
    bottom: "0%",
    right: "0%",
    display: "none",
    width: "100%",
  },
  barPosition: {
    width: 375,
    left: 0,
    position: "absolute",
  },
  upItemShadowBox: {
    elevation: 0,
    shadowRadius: 0,
    width: 375,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    left: 0,
    position: "absolute",
    borderRadius: Border.br_2xl,
  },
  upInnerBg: {
    backgroundColor: Color.gray_500,
    position: "absolute",
  },
  oneWayTypo: {
    top: 171,
    fontSize: FontSize.size_base,
    letterSpacing: -0.2,
    textAlign: "center",
    fontFamily: FontFamily.comfortaa,
    position: "absolute",
  },
  child25Position: {
    top: 15,
    position: "absolute",
  },
  timePosition: {
    top: 8,
    position: "absolute",
  },
  may2021: {
    fontSize: FontSize.size_4xl,
    letterSpacing: -0.3,
    textAlign: "center",
    fontFamily: FontFamily.comfortaa,
    top: 0,
    left: 0,
  },
  child: {
    height: 59,
    width: 282,
    borderWidth: 1,
    borderColor: "rgba(0, 0, 0, 0.35)",
    borderStyle: "solid",
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    borderRadius: Border.br_xs,
    top: 0,
    left: 0,
    position: "absolute",
    backgroundColor: Color.white,
  },
  item: {
    backgroundColor: Color.turquoise,
  },
  inner: {
    backgroundColor: Color.gray_400,
    height: 32,
    top: 27,
    width: 282,
    borderWidth: 1,
    borderColor: "rgba(0, 0, 0, 0.35)",
    borderStyle: "solid",
    borderRadius: Border.br_xs,
    left: 0,
    position: "absolute",
  },
  ubusIcon: {
    top: 33,
  },
  bookingId: {
    fontSize: FontSize.size_sm,
  },
  text: {
    fontSize: FontSize.size_2xs,
  },
  bookingId7764437234Container1: {
    lineBreak: "anywhere",
    width: "100%",
  },
  bookingId7764437234Container: {
    width: 212,
    letterSpacing: "-1.5%",
  },
  rp99000: {
    left: 188,
    color: Color.white,
  },
  arrowIcon: {
    left: 110,
  },
  bandung: {
    letterSpacing: -0.2,
    width: 212,
  },
  jakarta: {
    left: 138,
    width: 48,
    letterSpacing: -0.2,
    fontSize: FontSize.size_sm,
    top: 33,
    color: Color.black,
  },
  fiuserIcon: {
    left: 18,
    height: 24,
    display: "none",
    overflow: "hidden",
  },
  view: {
    top: 36,
  },
  child3: {
    left: 102,
  },
  bandung1: {
    width: 64,
    left: 134,
    letterSpacing: -0.2,
    fontSize: FontSize.size_sm,
    top: 33,
    color: Color.black,
  },
  view1: {
    top: 132,
  },
  may: {
    top: 143,
    width: 404,
    height: 223,
    display: "none",
  },
  uplaneFlyIcon: {
    top: 34,
  },
  bookingId5423564399: {
    letterSpacing: -0.2,
    fontSize: FontSize.size_sm,
    width: 212,
  },
  rp400000: {
    left: 186,
    color: Color.white,
  },
  child7: {
    left: 123,
  },
  jakarta2: {
    width: 68,
    left: 154,
    letterSpacing: -0.2,
    fontSize: FontSize.size_sm,
    top: 33,
    color: Color.black,
  },
  view2: {
    top: 36,
  },
  child11: {
    left: 103,
  },
  jakarta3: {
    width: 85,
    letterSpacing: -0.2,
  },
  jogyakarta1: {
    left: 134,
  },
  view3: {
    top: 133,
  },
  child13: {
    backgroundColor: Color.brown,
  },
  ubedIcon: {
    top: 31,
    height: 24,
    width: 20,
    left: 14,
  },
  holidayInn: {
    width: 71,
    letterSpacing: -0.2,
  },
  view4: {
    top: 230,
  },
  umetroIcon: {
    top: 33,
  },
  child18: {
    left: 112,
  },
  jakarta4: {
    left: 143,
  },
  view5: {
    top: 327,
  },
  april: {
    top: 252,
    width: 402,
    height: 418,
    display: "none",
  },
  child19: {
    borderWidth: 1,
    borderColor: "rgba(0, 0, 0, 0.35)",
    borderStyle: "solid",
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    width: 315,
    borderRadius: Border.br_xs,
    top: 0,
    left: 0,
    backgroundColor: Color.white,
  },
  from: {
    left: 71,
    width: 41,
    color: Color.gray_1100,
    position: "absolute",
  },
  indonesia: {
    fontSize: FontSize.size_xs,
    color: Color.gray_1100,
  },
  bandungIndonesia: {
    left: 72,
    width: 131,
    letterSpacing: "-1.5%",
  },
  iconplacesairportShuttle24: {
    left: 21,
    height: 24,
  },
  lineView: {
    top: 39,
    position: "absolute",
  },
  child20: {
    top: 46,
    position: "absolute",
  },
  child21: {
    top: 53,
    position: "absolute",
  },
  child22: {
    top: 60,
    position: "absolute",
  },
  view6: {
    top: 19,
    left: -12,
  },
  singapore: {
    color: Color.gray_1000,
    fontSize: FontSize.size_xs,
  },
  jakartaSingapore: {
    width: 147,
    letterSpacing: "-1.5%",
  },
  iconplacesairportShuttle241: {
    left: 23,
    top: 39,
    height: 24,
    position: "absolute",
  },
  child26: {
    top: 22,
    position: "absolute",
  },
  child27: {
    top: 29,
    position: "absolute",
  },
  view7: {
    top: 95,
    left: -12,
  },
  uusersAltIcon: {
    left: 11,
    height: 24,
    top: 0,
    position: "absolute",
    overflow: "hidden",
  },
  passengers: {
    left: 38,
  },
  child28: {
    width: 144,
    height: 43,
    borderWidth: 1,
    borderColor: "rgba(0, 0, 0, 0.35)",
    borderStyle: "solid",
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    borderRadius: Border.br_xs,
    top: 36,
    left: 0,
    backgroundColor: Color.white,
  },
  text2: {
    top: 47,
    left: 30,
    fontWeight: "700",
    width: 81,
    color: Color.black,
  },
  text3: {
    top: 35,
    left: 15,
    letterSpacing: -0.5,
    fontSize: FontSize.size_8xl,
  },
  text4: {
    left: 104,
    top: 39,
  },
  view8: {
    left: -12,
  },
  utransactionIcon: {
    height: 24,
    top: 0,
  },
  class: {
    left: 23,
  },
  business: {
    top: 49,
    left: 25,
    width: 94,
    color: Color.black,
    position: "absolute",
  },
  view9: {
    left: 159,
  },
  departure: {
    left: 70,
    width: 78,
    color: Color.gray_1100,
    position: "absolute",
  },
  tue1June: {
    width: 203,
    letterSpacing: -0.2,
  },
  uscheduleIcon: {
    top: 12,
  },
  view10: {
    top: 308,
    left: -12,
  },
  return: {
    left: 69,
    color: Color.gray_1100,
  },
  wed2June: {
    left: 75,
    width: 155,
    letterSpacing: -0.2,
  },
  uscheduleIcon1: {
    top: 36,
  },
  view11: {
    top: 384,
    left: -12,
  },
  switchIcon: {
    top: 70,
    left: 224,
    height: 54,
  },
  mayParent: {
    top: 213,
    left: 41,
    width: 432,
    height: 541,
    position: "absolute",
  },
  menuBelowIcon: {
    height: "14.04%",
    top: "85.96%",
  },
  tabBarChild: {
    height: "108.43%",
    top: "-8.43%",
    position: "absolute",
    backgroundColor: Color.white,
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
  },
  upChild: {
    height: 164,
    top: 36,
    backgroundColor: Color.white,
  },
  upItem: {
    backgroundColor: Color.beige_100,
    height: 155,
    top: 0,
  },
  upInner: {
    top: 167,
    width: 106,
    height: 25,
    left: 186,
    borderRadius: Border.br_xs,
    backgroundColor: Color.gray_500,
  },
  roundTrip: {
    left: 202,
    color: Color.white,
  },
  oneWay: {
    left: 95,
    color: Color.black,
  },
  bus: {
    top: 82,
    fontSize: FontSize.size_7xl,
    letterSpacing: -0.4,
  },
  up: {
    height: 200,
    top: 0,
  },
  icon: {
    height: "100%",
    overflow: "hidden",
    width: "100%",
  },
  fichevronLeft: {
    top: 75,
    width: 43,
    left: 21,
  },
  iconlylightOutlinefilter: {
    height: "2.96%",
    width: "6.4%",
    top: "19.95%",
    right: "23.47%",
    bottom: "77.09%",
    left: "70.13%",
  },
  busesChild: {
    top: 710,
    left: 52,
    borderRadius: Border.br_lg,
    width: 268,
    height: 46,
  },
  search: {
    top: 723,
    width: 65,
    left: 154,
    color: Color.white,
  },
  connectionsIcon: {
    right: 14,
    height: 16,
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
  },
  time: {
    width: 56,
    height: 23,
    left: 21,
  },
  statusBar: {
    height: 44,
    top: 0,
  },
  buses: {
    flex: 1,
    height: 812,
    overflow: "hidden",
    width: "100%",
    backgroundColor: Color.white,
  },
});

export default Buses;
