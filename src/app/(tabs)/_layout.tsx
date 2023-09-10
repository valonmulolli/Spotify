import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Tabs } from 'expo-router';
import { View, useColorScheme } from 'react-native';
import { useState } from 'react';
import { BottomTabBar } from '@react-navigation/bottom-tabs';
import Colors from '../../constants/Colors';
import Player from '../../components/Player';

function TabBarIcon(props: {
	name: React.ComponentProps<typeof FontAwesome>['name'];
	color: string;
}) {
	return <FontAwesome size={25} style={{ marginBottom: -3 }} {...props} />;
}

export default function TabLayout() {
	const colorScheme = useColorScheme();

	const getTabBarOptions = (route: any) => {
		const isRouteActive = route.state && route.state.index === route.key;
		const activeTintColor = isRouteActive ? Colors.primary : Colors.tertiary;

		return {
			tabBarActiveTintColor: activeTintColor,
			tabBarLabelStyle: {
				fontSize: 12,
			},
		};
	};

	return (
		<Tabs
			screenOptions={({ route }) => getTabBarOptions(route)}
			tabBar={(props) => (
				<View>
					<Player />
					<BottomTabBar {...props} />
				</View>
			)}
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
