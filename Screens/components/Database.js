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

let getRestaurantByName = ( _RestaurantName) => {
    return realm.objects('Restaurant').filtered('RestaurantName =${_RestaurantName}');
}

let deleteRestaurant = (_RestaurantName) => {
    realm.write(() => {
        realm.delete(realm.objects('Restaurant').filtered('RestaurantName LIKE[c] $0', _RestaurantName));
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

let deleteBrand = (_BrandName) => {
    realm.write(() => {
        realm.delete(realm.objects('Brand').filtered('BrandName LIKE[c] $0', _BrandName));
    })
}


class ReviewSchema extends Realm.Object {}
ReviewSchema.schema = {
    name: 'Review',
    properties: {
        ItemName: 'string',
        Type: 'string',
        TypeName: 'string',
        Rating: 'int',
        Notes: 'string?',
        ImageIndex: 'int'
    }
};

let addReview = (_ItemName, _Type, _TypeName, _Rating, _Notes = null, _ImageIndex) => {
    realm.write(() => {
        const review = realm.create('Review', {
            ItemName: _ItemName,
            Type: _Type,
            TypeName: _TypeName,
            Rating: _Rating,
            Notes: _Notes,
            ImageIndex: _ImageIndex
        });
    });
}

let getAllReviews = () => {
    return realm.objects('Review');
}

let getReviewsByTypeName = (_TypeName) => {
    return realm.objects('Review').filtered('TypeName LIKE[c] $0', _TypeName);
}

let getReviewsByTypeNameAndItemName = (_TypeName, _ItemName) => {
    return realm.objects('Review').filtered('TypeName LIKE[c] $0 && ItemName LIKE[c] $1', _TypeName, _ItemName);
}

let deleteAllReviews = () => {
    realm.write(() => {
        realm.delete(getAllReviews());
    })
}

let deleteReview = (_TypeName, _ItemName) => {
    realm.write(() => {
        realm.delete(realm.objects('Review').filtered('TypeName LIKE[c] $0 && ItemName LIKE[c] $1', _TypeName, _ItemName));
    })
}

export {addRestaurant,
        getAllRestaurants,
        deleteAllRestaurants,
        getRestaurantByName,
        deleteRestaurant,
        addBrand,
        getAllBrands,
        deleteAllBrands,
        deleteBrand,
        addReview,
        getAllReviews,
        getReviewsByTypeName,
        getReviewsByTypeNameAndItemName,
        deleteAllReviews,
        deleteReview
    }

let realm = new Realm({schema: [RestaurantSchema, BrandSchema, ReviewSchema], schemaVersion: 4});

export default realm;