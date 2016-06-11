import Hotels from '/imports/api/hotels';

const seed = () => {
	if(Hotels.find().fetch().length == 0) {
		let hotels = [
			{
				name: "Maria Isabel"
			
			}, {
				name: "Fox Sport"
			}, {
				name: "Alexis"
			}, {
				name: "Fiesta Inn"
			}, {
				name: "Hotel Ceballos"
			}
		];
		hotels.forEach((hotel) => {
			Hotels.insert(hotel);
		});
	}
}

export default seed;