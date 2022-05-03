const createSlice = function ({ initialState, reducer, prefix }) {
	const actions = Object.keys(reducer)
		.map((shortName) => `@${prefix}/${shortName}`)
		.map((fullName) => Symbol.for(fullName))
		.map((type) => {
			const actionCreator = function (payload) {
				return { type, payload };
			};

			actionCreator.type = type;

			return actionCreator;
		});

	return null;
};

createSlice({
	initialState: 0,
	prefix: 'example',
	reducer: {
		set: (payload, slice) => {
			return payload;
		},
		inc: (payload, slice) => {
			return ++slice;
		},
		dec: (payload, slice) => {
			return --slice;
		}
	}
});

export default function applicationReducer() {
	return null;
}
