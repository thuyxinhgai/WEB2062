const restaurent = {
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
    order: function (starterIndex, mainIndex) {
        return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
    },
    orderDelivery: function ({ starterIndex = 1, mainIndex = 0, time = '20:00', address }) {
        console.log(
            `Order received! ${this.starterMenu[starterIndex]}and ${this.mainMenu[mainIndex]}
            will be delivered to ${address} at ${time}`
        );
    },
    orderPasta: function (ing1, ing2, ing3) {
        console.log(`Here is your declicious pasta with ${ing1}, ${ing2} and ${ing3}`);
    },
    orderPizza: function (mainIngredients, ...othersIngredients) {
        console.log(mainIngredients);
        console.log(othersIngredients);
    },
};
const game ={
    team1: 'Bayern Munich',
    team2: 'Borrussia Dortmund',
    players: [
        [
            'Neuer','Pavard','Martinez','Alaba','Davies','Kimmich','Goretzka','Coman','Muller','Gnarby','Lewandowski',
        ],
        [
            'Burki','Schulz','Hummels','Akanji','Hakimi','Weigl','Witsel','Hazard','Brandt','Sancho','Gotze',
        ],
    ],
    score: '4:0',
    scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
    date : 'Nov 9th, 2037',
    odds:{
        team1:1.33,
        x : 3.23,
        team2:6.5,

    },
};
//1
const[ players1, players2] = game.players;
console.log(players1, players2);
//2
const[ gk, ...fieldPlayers] = players1;
console.log( gk,fieldPlayers);
//3
const allPlayers = [...players1,...players2];
console.log(allPlayers);
//4
const playersFinal = [...players1,'Thiago','Coutinho','Periscic'];
//5
const {odds: {team1, x= draw, team2}} = game;
console.log(team1, draw, team2);
//6
const printGoals = function(...players){
    console.log(players);
    console.log(`$(players.length) goals were scored`)
}
// printGoals('Davies','Muller','Lewandowski','kimmich');
// printGoals('Davies','Muller');
printGoals(...game.scored);
//7
team1 < team2 && console.log('Team 1 is more likely to win');
team1 > team2 && console.log('Team 1 is more likely to win');
// const rest1 ={
//     name: 'Capri',
//     // numGuests: 20.
//     numGuests: 0.
// };
// const rest2 ={
//     name: 'La Pizza',
//     owner: 'Giovanni Rossi',
// };
// // or
// // rest1.numGuests = rest1.numGuests || 10;
// // rest2.numGuests = rest2.numGuests || 10;

// // rest1.numGuests ||= 10;
// // rest2.numGuests ||= 10;
// //nullish
// rest1.numGuests ??= 10;
// rest2.numGuests ??= 10;
// // AND
// // rest1.owner = rest1.owner && '<ANONYMONUS>';
// // rest2.owner = rest2.owner && '<ANONYMONUS>';
// rest1.owner &&= '<ANONYMONUS>';
// rest2.owner &&= '<ANONYMONUS>';
// console.log(rest1);
// console.log(rest2);
// restaurent.numGuests = 0;
// const guests = restaurent.numGuests || 10;
// console.log(guests);
// //
// const guestCorrect= restaurent.numGuests ?? 10;
// console.log(guestCorrect);
// console.log('---- OR ----');
// console.log(3 || 'Jonas');
// console.log('' || 'Jonas');
// console.log(true || 0);
// console.log(undefined|| null);
// console.log(undefined || 0 || '' || 'Hello' || 23 || null);
// restaurent.numGuests = 23;
// const guests1 = restaurent.numGuests ? restaurent.numGuests: 10;
// console.log(guests1);
// const guests2 = restaurent.numGuests || 10;
// console.log(guests2);
// console.log('---- AND ----');
// console.log(0 && 'Jonas');
// console.log(7 && 'Jonas');
// console.log('Hello' && 23 && null && 'Jonas');
// if(restaurent.orderPizza){
//     restaurent.orderPizza('mushrooms', 'spinach');
// }
// restaurent.orderPizza && restaurent.orderPizza('mushrooms','spinach');
// const arr = [1, 2, ...[3, 4]];
// const [a, b, ...others] = [1, 2, 3, 4, 5];
// console.log[a, b, others];

// const [pizza, , chicken, ...othersFood] = [...restaurent.mainMenu, ...restaurent.starterMenu,];
// console.log(pizza, chicken, othersFood);
// //obj

// const { sat, ...weekdays } = restaurent.openingHours;
// console.log(weekdays);
// //function

// const add = function (...numbers) {
//     let sum = 0;
//     for (let i = 0; i < numbers.length; i++) sum += numbers[i];
//     console.log(numbers);
// };

// add(2, 3);
// add(5, 3, 7, 2);
// add(8, 2, 5, 3, 2, 1, 4);
// const x = [23, 5, 7];
// add(...x);
// restaurent.orderPizza('mushrooms', 'onion', 'olives', 'spinach');
// const arr = [7,8,9];
// const badNewArr =[1,2,arr[0], arr[1], arr[2]];
// console.log(badNewArr);

// const newArr = [1,2,...arr];
// console.log(newArr);

// console.log(...newArr);
// console.log(1,2,7,8,9);

// const newMenu =[...restaurent.mainMenu, 'Gnocci'];
// console.log(newMenu);
// //copy
// const mainMenuCopy =[...restaurent.mainMenu];

// // join 2 arrays
// const menu = [...restaurent.starterMenu, ...restaurent.mainMenu];
// console.log(menu);
// //
// const str = 'Jonas';
// const letters = [...str,'','S.'];
// console.log(letters);
// console.log(...str);
// //
// const ingredients =[
//     prompt("Let's make pasta! Ingredien 1?"),
//     prompt('Ingredien 2?'),
//     prompt('Ingredien 3'),
// ];
// console.log(ingredients);
// restaurent.orderPasta(ingredients[0], ingredients[1], ingredients[2]);
// restaurent.orderPasta(...ingredients);
// //obj
// const newRestaurant = {foundedIn: 1998, ... restaurent, founder: 'Guiseppe'};
// console.log(newRestaurant);
// const restaurentCopy ={...restaurent};
// restaurentCopy.name ='Ristorante Roma';
// console.log(restaurent.name);
// console.log(restaurent.name);
// restaurent.orderDelivery({
//     time: '22:30',
//     address: 'giao thuy, nam dinh',
//     mainIndex: 2,
//     starterIndex: 2,
// });
// restaurent.orderDelivery({
//     address: 'giao thuy, nam dinh',
//     starterIndex: 1,
// });
// const {name, openingHours, categories} = restaurent;
// console.log (name, openingHours, categories);

// const { name: restaurentName, openingHours: hours, categories: tags} = restaurent;
// console.log(restaurentName, hours, tags);

// const {menu =[], starterMenu: starters=[]} = restaurent;
// console.log(menu, starters);

// let a = 111;
// let b = 999;
// const obj ={a: 23, b: 7, c: 14};
// ({a,b}=obj);
// console.log(a,b);

// const{
//     tri: {open, close},
// } = openingHours;
// console.log(open, close);
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

