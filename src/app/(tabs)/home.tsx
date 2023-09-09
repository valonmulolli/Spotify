import { View, StyleSheet, FlatList } from 'react-native';
import { tracks } from '../../../assets/data/tracks';
import TrackListItem from '../../components/TrackListItem';

export default function Home() {
	return (
		<FlatList
			data={tracks}
			renderItem={({ item }) => <TrackListItem track={item} />}
			showsVerticalScrollIndicator={false}
		/>
	);
}

const styles = StyleSheet.create({});
