import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

interface Props {
  label: string;

  position?: "left" | "right";

  onPress?: () => void;
  onLongPress?: () => void;
}

export default function FAB({ label, position, onPress, onLongPress }: Props) {
  return (
    <TouchableOpacity
      style={position === "right" ? styles.floatingButton : styles.floatingLeft}
      onPress={onPress}
      onLongPress={onLongPress}
    >
      <Text style={{ color: "white" }}>+1</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  textHuge: {
    fontSize: 120,
    fontWeight: 100,
  },
  floatingButton: {
    position: "absolute",
    bottom: 20,
    right: 20,
    backgroundColor: "#65558F",
    padding: 20,
    borderRadius: 15,
    shadowColor: "#000",
    shadowOpacity: 0.3,
  },
  floatingLeft: {
    position: "absolute",
    bottom: 20,
    left: 20,
    backgroundColor: "#65558F",
    padding: 20,
    borderRadius: 15,
    shadowColor: "#000",
    shadowOpacity: 0.3,
  },
});
