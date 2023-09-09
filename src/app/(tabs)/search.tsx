import { FlatList, StyleSheet, Text, TextInput, View } from 'react-native';
import TrackListItem from '../../components/TrackListItem';
import { tracks } from '../../../assets/data/tracks';
import { SafeAreaView } from 'react-native-safe-area-context';
import { FontAwesome } from '@expo/vector-icons';
import COLORS from '../../constants/Colors';
import { useState } from 'react';

export default function Search() {
	const [search, setSearch] = useState(' ');

	return (
		<SafeAreaView>
			<View style={styles.header}>
				{/* Header */}
				<FontAwesome name='search' size={22} color={COLORS.gray2} />
				<TextInput
					value={search}
					onChangeText={setSearch}
					placeholder='Search'
					style={styles.Input}
				/>
				<Text
					onPress={() => setSearch('')}
					style={{ fontSize: 16, color: COLORS.white }}
				>
					Cancel
				</Text>
			</View>
			<FlatList
				data={tracks}
				renderItem={({ item }) => <TrackListItem track={item} />}
				showsVerticalScrollIndicator={false}
			/>
		</SafeAreaView>
	);
}

const styles = StyleSheet.create({
	header: {
		flexDirection: 'row',
		alignItems: 'center',
		padding: 10,
	},
	Input: {
		flex: 1,
		backgroundColor: COLORS.lightWhite,
		padding: 8,
		marginHorizontal: 10,
		borderRadius: 5,
		color: COLORS.gray,
	},
	title: {
		fontSize: 20,
		fontWeight: 'bold',
	},
});
