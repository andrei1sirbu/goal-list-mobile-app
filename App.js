import { useState } from "react";
import { Button, FlatList, StyleSheet, View } from "react-native";
import GoalInput from "./components/GoalInput";
import GoalListItem from "./components/GoalListItem";

export default function App() {
	const [goals, setGoals] = useState([]);
	const [modalOpen, setModalOpen] = useState(false);

	const deleteGoal = (value) => {
		setGoals((prev) => prev.filter((goal) => goal !== value));
	};

	const openModal = () => {
		setModalOpen(true);
	};

	const closeModal = () => {
		setModalOpen(false);
	};

	return (
		<View style={styles.appContainer}>
			{/* You can make a custom button using the pressable component */}
			<Button title="Add New Goal" color={"#5e0acc"} onPress={openModal} />
			<GoalInput
				setGoals={setGoals}
				visible={modalOpen}
				closeModal={closeModal}
			/>
			<View style={styles.goalsContainer}>
				<FlatList
					alwaysBounceVertical={false}
					data={goals}
					renderItem={(itemData) => {
						return (
							// renderItem sets the keys to the list items by searching for the key property of that object
							// and setting the key to that value
							<GoalListItem itemData={itemData} deleteGoal={deleteGoal} />
						);
					}}
					// if the object does not have a key property you can "extract" the key from the id field of that object
					// keyExtractor={(item, index) => {
					// 	return item.id
					// }}
				/>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	appContainer: {
		flex: 1,
		gap: 10,
		paddingTop: 60,
		paddingHorizontal: 16,
	},
	goalsContainer: {
		flex: 5,
	},
});
