import { Link } from "expo-router";
import { Text, View } from "react-native";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Link href={'/login'}>
        <Text style={{ fontFamily: "outfit-bold", fontSize: 40 }}>Go to login</Text>
      </Link>
    </View>
  );
}
