/** @flow */

class User {
	name: string;
	active: boolean;
	eyes: string;

	constructor(name: string, active: boolean, eyes: 'green' | 'blue' | 'brown') {
		this.name = name;
		this.active = active;
		this.eyes = eyes;
	}

	get name(): string {
		return this.name;
	}

	set name(name: string) {
		this.name = name;
	}

	get eyes(): string {
		return this.eyes;
	}

	set eyes(eyes: 'green' | 'blue' | 'brown') {
		this.eyes = eyes;
	}
}

module.exports = User;
