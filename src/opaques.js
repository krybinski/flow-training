/** @flow */

opaque type ID = number;

function identity(id: ID): ID {
	return id;
};

opaque type NumberType = number;

function toNumberType(x: number): NumberType {
	return x;
}
