/** @flow */

type TrafficLight = 'green' | 'yellow' | 'red';

// Works
function sayMyFavouriteTrafficLight() : TrafficLight {
	return 'green';
}

// Error
// function sayMyFavouriteTrafficLight() : TrafficLight {
// 	return 'orange';
// }
