import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

import commonStyles from '../commonStyles';

export default props => {
	return (
		<View>
			<Text>{props.desc}</Text>
			<Text>{props.estimateAt + ""}</Text>
			<Text>{props.doneAt + ""}</Text>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {},
});
