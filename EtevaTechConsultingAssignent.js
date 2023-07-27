let arr_1 = ["Hyderabad",  "Bangalore" , "Chennai" , "Delhi" , "Pune" , "Kolkata"];
let arr_2 = ["Gujarat" , "Pune" , "Rajasthan" , "Bangalore" , "Vizag" , "Delhi"];

//1.Get unique set of users from arr_1 which are not in arr_2

let arr_1_uniques = [];

for(let city of arr_1){
    let state = false;
    for (let city_1 of arr_2){
        if (city === city_1) {
            state = true;
            break;
        }
    }
    if (!state){
        arr_1_uniques.push(city);
    }
}
console.log(arr_1_uniques);


//2.Get unique set of users from arr_2 which are not in arr_1

let arr_2_uniques = [];

for(let city of arr_2){
    let state = false;
    for (let city_1 of arr_1){
        if (city === city_1) {
            state = true;
            break;
        }
    }
    if (!state){
        arr_2_uniques.push(city);
    }
}
console.log(arr_2_uniques);


//3.Get a set of users  who are present in arr_1 and arr_2 both

let common_cities = [];

for(let city of arr_1){
    let state = false;
    for (let city_1 of arr_2){
        if (city === city_1) {
            state = true;
            break;
        }
    }
    if (state){
        common_cities.push(city);
    }
}
console.log(common_cities);