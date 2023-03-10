const { Dimensions, StyleSheet } = require("react-native");
// const { CustomStyleProp } = require("./SegmentedControl");
// const { width: ScreenWidth } = Dimensions.get("screen");

const _containerStyle = function(width) {
  return {
    flexDirection: "row",
    alignItems: "center",
  };
};

const _selectedTabStyle = function(
  tabs,
  activeTabColor,
  translateXAnimation,
  width,
) {
  return [
    {
      // ...StyleSheet.absoluteFillObject,
      // borderRadius: 8,
      // marginVertical: 2,
      // marginHorizontal: 2,
      // width: (width ? width - 8 : ScreenWidth - 30) / (tabs ? tabs.length : 1),
      // backgroundColor: activeTabColor,
      // backgroundColor:"red",
      // shadowColor: "#000",
      // shadowOpacity: 0.2,
      // shadowRadius: 3,
      // shadowOffset: {
      //   width: 0,
      //   height: 2,
      // },
    //   elevation: 4,
    //   transform: [
    //     {
    //       translateX: translateXAnimation,
    //     },
    //   ],
    },
  ];
};

module.exports = StyleSheet.create({
  tab: {
    flex: 1,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
  },
  textStyle: {
    fontSize: 18,
    textAlign: "center",
    fontWeight: "500",
  },
});

module.exports._containerStyle = _containerStyle;
module.exports._selectedTabStyle = _selectedTabStyle;