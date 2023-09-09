import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Link, Tabs } from 'expo-router';
import { Pressable, useColorScheme } from 'react-native';

import Colors from '../../constants/Colors';

/**
 * You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
 */
function TabBarIcon(props: {
	name: React.ComponentProps<typeof FontAwesome>['name'];
	color: string;
}) {
	return <FontAwesome size={25} style={{ marginBottom: -3 }} {...props} />;
}

export default function TabLayout() {
	const colorScheme = useColorScheme();

	return (
		<Tabs
			screenOptions={{
			}}
		>
			<Tabs.Screen
				name='home'
				options={{
					title: 'Home',
					tabBarIcon: ({ color }) => <TabBarIcon name='home' color={color} />,
				}}
			/>
			<Tabs.Screen
				name='search'
				options={{
					title: 'Search',
					headerShown: false,
					tabBarIcon: ({ color }) => <TabBarIcon name='search' color={color} />,
				}}
			/>
			<Tabs.Screen
				name='favorites'
				options={{
					title: 'Favorites',
					tabBarIcon: ({ color }) => <TabBarIcon name='heart' color={color} />,
				}}
			/>
		</Tabs>
	);
}
