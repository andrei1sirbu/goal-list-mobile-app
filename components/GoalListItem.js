import { Pressable, StyleSheet, Text, View } from "react-native";

function GoalListItem({ itemData, deleteGoal }) {
	function onDeleteHandler() {
		deleteGoal(itemData.item);
	}

	return (
		<Pressable
			onPress={onDeleteHandler}
			style={({ pressed }) => pressed && styles.goalListItemPressed}
		>
			<View style={styles.goalListItem}>
				<Text style={styles.goalText}>{itemData.item}</Text>
			</View>
		</Pressable>
	);
}

const styles = StyleSheet.create({
	goalListItem: {
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
		marginBottom: 10,
	},
	goalListItemPressed: {
		opacity: 0.5,
	},
	goalText: {
		flex: 1,
		paddingHorizontal: 20,
		paddingVertical: 10,
		borderRadius: 10,
		fontSize: 24,
		fontWeight: "medium",
		color: "white",
		backgroundColor: "#aa00aa",
	},
});

export default GoalListItem;
