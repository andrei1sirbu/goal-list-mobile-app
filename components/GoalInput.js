import {
	View,
	TextInput,
	Button,
	StyleSheet,
	Modal,
	Image,
} from "react-native";
import { useState } from "react";
import GoalImage from "../assets/images/goal.png";

function GoalInput({ setGoals, visible, closeModal }) {
	const [input, setInput] = useState("");

	const addGoal = () => {
		setGoals((prev) => [...prev, input]);
		setInput("");
	};

	return (
		<Modal visible={visible} animationType="slide">
			<View style={styles.modalContainer}>
				<View style={styles.imageContainer}>
					<Image source={GoalImage} style={styles.goalImage} />
				</View>
				<TextInput
					placeholder="Enter a goal here"
					placeholderTextColor={"#999999"}
					value={input}
					onChangeText={(value) => setInput(value)}
					style={styles.inputContainer}
				/>
				<View style={styles.buttonContainer}>
					<Button
						title="Add Goal"
						onPress={() => {
							addGoal();
							closeModal();
						}}
						color={"#f31282"}
					/>
					<Button title="Cancel" onPress={closeModal} color={"#aa00aa"} />
				</View>
			</View>
		</Modal>
	);
}

const styles = StyleSheet.create({
	modalContainer: {
		flex: 1,
		gap: 10,
		padding: 16,
		justifyContent: "center",
		backgroundColor: "#311b6b",
	},
	inputContainer: {
		marginBottom: 16,
		padding: 16,
		fontSize: 24,
		borderWidth: 1,
		borderColor: "#999999",
		color: "white",
		borderRadius: 10,
	},
	buttonContainer: {
		flexDirection: "row",
		justifyContent: "flex-start",
		gap: 10,
	},
	imageContainer: {
		alignItems: "center",
	},
	goalImage: {
		width: 200,
		height: 200,
	},
});

export default GoalInput;
