import { Text, View, StyleSheet } from "@react-pdf/renderer";
import { TextListProps } from "../../types/MyDocumentsTypes";

const styles = StyleSheet.create({
  text: {
    textIndent: "20px",
    textAlign: "justify",
  },
});

const TextList = ({ data }: TextListProps) => {
  return (
    <View>
      {data.map((elem) => {
        return <Text style={styles.text}>{elem}</Text>;
      })}
    </View>
  );
};

export default TextList;
