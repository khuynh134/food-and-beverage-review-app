import Realm from "realm";

class RestaurantSchema extends Realm.Object {}
RestaurantSchema.schema = {
    name: 'Restaurant',
    properties: {
        RestaurantName: 'string'
    }
};

let addRestaurant = (_RestaurantName) => {
    realm.write(() => {
        const restaurant = realm.create('Restaurant', {
            RestaurantName: _RestaurantName
        });
    });
}

//pass string into getAllRestaurants & return objects based on name (a string in RestaurantSchema for the name of the restaurant)
let getAllRestaurants = () => {
    return realm.objects('Restaurant');
}

let deleteAllRestaurants = () => {
    realm.write(() => {
        realm.delete(getAllRestaurants());
    })
}

class BrandSchema extends Realm.Object {}
BrandSchema.schema = {
    name: 'Brand',
    properties: {
        BrandName: 'string'
    }
};

let addBrand = (_BrandName) => {
    realm.write(() => {
        const brand = realm.create('Brand', {
            BrandName: _BrandName
        });
    });
}

let getAllBrands = () => {
    return realm.objects('Brand');
}

let deleteAllBrands = () => {
    realm.write(() => {
        realm.delete(getAllBrands());
    })
}

export {addRestaurant,
        getAllRestaurants,
        deleteAllRestaurants,
        addBrand,
        getAllBrands,
        deleteAllBrands
    }

let realm = new Realm({schema: [RestaurantSchema, BrandSchema], schemaVersion: 2});

export default realm;