/**
 * Created by richard.g on 19/03/2017.
 */

let map = new Map([["name", "Nicholas"], ["age", 25]]);

map.forEach(function (value, key, ownerMap) {
    console.log(key + " " + value);
    console.log(ownerMap === map);
});



