import {
	View,
	Text,
	FlatList,
	ActivityIndicator,
} from 'react-native';
import TrackListItem from '../../components/TrackListItem';
import { gql, useQuery } from '@apollo/client';
import COLORS from '../../constants/Colors';

const query = gql`
	query MyQuery($genres: String!) {
		recommendations(seed_genres: $genres) {
			tracks {
				id
				name
				preview_url
				artists {
					id
					name
				}
				album {
					id
					name
					images {
						url
						height
						width
					}
				}
			}
		}
	}
`;

export default function Home() {
	const { data, loading, error } = useQuery(query, {
		variables: { genres: 'hip-hop,house,pop' },
	});

	if (loading) {
		return <ActivityIndicator />;
	}

	if (error) {
		return <Text style={{color : COLORS.white}}>Failed to fetch recommendations</Text>;
	}

	const tracks = data?.recommendations?.tracks || [];

	return (
		<FlatList
			data={tracks}
			renderItem={({ item }) => <TrackListItem track={item} />}
			showsVerticalScrollIndicator={false}
		/>
	);
}
