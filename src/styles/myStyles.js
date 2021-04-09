import { StyleSheet, Platform } from "react-native";
import theme from "./theme";

export const myStyles = StyleSheet.create({
  mainContainer: {
    flexDirection: "row",
    marginTop: 0,
    paddingTop: 25,
    padding: 10,
    backgroundColor: theme.colors.dark,
  },
  texts: {
    color: theme.colors.snow,
    paddingHorizontal: 5,
    paddingVertical: 5,
  },
  itemContainer: {
    backgroundColor: theme.colors.snow,
    paddingHorizontal: 5,
    paddingVertical: 5,
    flexDirection: "column",
  },
  buttonStyle: {
    marginHorizontal: 5,
    marginVertical: 5,
  },
  figuresContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    paddingVertical: 10,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    paddingVertical: 10,
    paddingHorizontal: 10,
  },

  detailsContainer: {
    flexDirection: "column",
    marginHorizontal: 10,
  },
  imageStyle: {
    width: 50,
    height: 50,
    borderRadius: 5,
  },
  languageStyle: {
    alignSelf: "flex-start",
    backgroundColor: theme.colors.primary,
    color: theme.colors.snow,
    borderRadius: 5,
    marginVertical: 3,
    paddingVertical: 5,
    paddingHorizontal: 5,
  },
  separator: {
    height: 10,
  },
  infoContainer: {
    flexDirection: "row",
    marginHorizontal: 5
  },
  textPadding: {
    marginVertical: 3,
  },
  textStyle: {
    alignSelf: "flex-start",
    flexDirection: "row",
    flexWrap: "wrap",
    paddingRight: 20,
    fontSize: theme.fontSizes.subheading
  },

  itemSeparator: {
    marginBottom: 10,
  },
  itemPadding: {
    marginVertical: 15,
  },
  formContainer: {
    paddingVertical: 15,
    paddingHorizontal: 15,
    backgroundColor: theme.colors.snow,
  },
  errorText: {
    marginVertical: 2,
    color: theme.colors.danger,
  },
  container: {
    flexGrow: 1,
    flexShrink: 1,
    backgroundColor: theme.colors.grey,
  },
  textContainer: {
    flexDirection: "column",
    marginHorizontal: 10,
  },
  circle: {
    paddingTop: 7,
    textAlign: "center",
    alignSelf: "flex-start",
    flexDirection: "row",
    flexWrap: "wrap",
    borderStyle: "solid",
    borderColor: "blue",
    borderWidth: 2,
    width: 35,
    height: 35,
    borderRadius: 35 / 2,
  },
  text: {
    color: theme.colors.textPrimary,
    fontSize: theme.fontSizes.body,
    fontFamily: Platform.select({
      default: theme.fonts.main,
      android: theme.fonts.android,
      ios: theme.fonts.ios,
      fontWeight: theme.fontWeights.normal,
    }),
  },
  colorTextSecondary: {
    color: theme.colors.textSecondary,
  },
  colorPrimary: {
    color: theme.colors.primary,
  },
  colorDanger: {
    color: theme.colors.danger,
  },
  fontSizeSubheading: {
    fontSize: theme.fontSizes.subheading,
  },
  fontWeightBold: {
    fontWeight: theme.fontWeights.bold,
  },
  inputStyle: {
    padding: 20,
    borderColor: theme.colors.grey,
    borderWidth: 1,
    borderStyle: "solid",
    borderRadius: 10,
    marginVertical: 10,
  },
  inputError: {
    borderColor: theme.colors.danger,
  },
});
