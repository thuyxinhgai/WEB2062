const restaurent ={
    name: 'Quynh Thuy',
    location: '19 tuoi, Nam Dinh ',
    categories: ['pho', 'banh mi', 'nem chu', 'nhan nong'],
    starterMenu: ['Hang', 'Trung Duc', 'Trung', 'Huy', 'Thien Duc'],
    mainMenu: ['pizza', 'chicken', 'Pasta'],
    openingHours: {
        thu: {
            open: 12,
            close: 22,
        },
        tri: {
            open: 11,
            close: 23,
        },
        sat: {
            open: 0,
            close: 24,
        },
    },
    order: function(starterIndex,mainIndex){
        return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
    },
    orderDelivery: function({starterIndex = 1, mainIndex = 0, time = '20:00', address}){
        console.log(
            `Order received! ${this.starterMenu [starterIndex] }and ${this.mainMenu[mainIndex]}
            will be delivered to ${address} at ${time}`
        );
    },
};
restaurent.orderDelivery({
    time: '22:30',
    address: 'giao thuy, nam dinh',
    mainIndex: 2,
    starterIndex: 2,
});
restaurent.orderDelivery({
    address: 'giao thuy, nam dinh',
    starterIndex: 1,
});
const {name, openingHours, categories} = restaurent;
console.log (name, openingHours, categories);

const { name: restaurentName, openingHours: hours, categories: tags} = restaurent;
console.log(restaurentName, hours, tags);

const {menu =[], starterMenu: starters=[]} = restaurent;
console.log(menu, starters);

let a = 111;
let b = 999;
const obj ={a: 23, b: 7, c: 14};
({a,b}=obj);
console.log(a,b);

const{
    tri: {open, close},
} = openingHours;
console.log(open, close);
// const arr = [2,3,4];
// const a = arr[0];
// const b = arr[1];
// const c = arr[2];

// const [x,y,z] = arr;
// console.log(x,y,z);
// // const [first, ,second] =restaurent.categories;
// // console.log(first, second);
// let [main, secondary] =restaurent.categories;
// console.log(main, secondary);
// //
// // const temp = main;
// // main = secondary;
// // secondary= temp;
// // console.log(main, secondary);
// [main, secondary] = [secondary, main];
// console.log(main, secondary);
// //function
// const [starter, mainCourse] = restaurent.order(2,0);
// console.log(starter, mainCourse);
// // huy nồng
// const nested =[2,4, [5, 6]];
// // const [i, ,j] = nested;
// const [i, ,[j, k]] = nested;
// console.log(i, j, k);
// //
// const[p=1,q=1,r=1]=[8];
// console.log(p,q,r)

