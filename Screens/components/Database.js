import Realm from "realm";

class RestaurantSchema extends Realm.Object {}
RestaurantSchema.schema = {
    name: 'Restaurant',
    properties: {
        RestaurantName: 'string',
        Menu: 'string'
    }
};

let realm = new Realm({schema: [RestaurantSchema], schemaVersion: 1});

export default realm;

//pass string into getAllRestaurants & return objects based on name (a string in RestaurantSchema for the name of the restaurant)
let getAllRestaurants = () => {
    return realm.objects('Restaurant');
}

export {getAllRestaurants}

