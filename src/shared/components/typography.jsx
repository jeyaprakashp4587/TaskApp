import { Font } from "@/constants/font";
import { Text } from "react-native";

const BaseText = ({ children, style, color = "#000", numberOfLines }) => {
  return (
    <Text
      numberOfLines={numberOfLines}
      style={[
        {
          fontFamily: Font.Regular,
          fontSize: 10,
          color,
        },
        style,
      ]}
    >
      {children}
    </Text>
  );
};

export const Title = ({ children, style, color = "#000", numberOfLines }) => {
  return (
    <BaseText
      color={color}
      numberOfLines={numberOfLines}
      style={[
        {
          fontSize: 16,
          fontFamily: Font.Bold,
          lineHeight: 20,
        },
        style,
      ]}
    >
      {children}
    </BaseText>
  );
};

export const Heading = ({ children, style, color = "#000", numberOfLines }) => {
  return (
    <BaseText
      color={color}
      numberOfLines={numberOfLines}
      style={[
        {
          fontSize: 13,
          fontFamily: Font.SemiBold,
          lineHeight: 20,
        },
        style,
      ]}
    >
      {children}
    </BaseText>
  );
};

export const Body = ({ children, style, color = "#000", numberOfLines }) => {
  return (
    <BaseText
      color={color}
      numberOfLines={numberOfLines}
      style={[
        {
          fontSize: 12,
          fontFamily: Font.Regular,
          lineHeight: 18,
        },
        style,
      ]}
    >
      {children}
    </BaseText>
  );
};

export const Caption = ({ children, style, color = "#666", numberOfLines }) => {
  return (
    <BaseText
      color={color}
      numberOfLines={numberOfLines}
      style={[
        {
          fontSize: 11,
          fontFamily: Font.Light,
        },
        style,
      ]}
    >
      {children}
    </BaseText>
  );
};
