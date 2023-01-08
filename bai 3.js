const restaurent ={
    name: 'Quynh Thuy',
    location: '19 tuoi, Nam Dinh ',
    categories: ['pho', 'banh mi', 'nem chu', 'nhan nong'],
    starterMenu: ['Hang', 'Trung Duc', 'Trung', 'Huy', 'Thien Duc'],
    mainMenu: ['pizza', 'chicken', 'Pasta'],
    order: function(starterIndex,mainIndex){
        return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
    }
}
const arr = [2,3,4];
const a = arr[0];
const b = arr[1];
const c = arr[2];

const [x,y,z] = arr;
console.log(x,y,z);
// const [first, ,second] =restaurent.categories;
// console.log(first, second);
let [main, secondary] =restaurent.categories;
console.log(main, secondary);
//
// const temp = main;
// main = secondary;
// secondary= temp;
// console.log(main, secondary);
[main, secondary] = [secondary, main];
console.log(main, secondary);
//function
const [starter, mainCourse] = restaurent.order(2,0);
console.log(starter, mainCourse);
// huy nồng
const nested =[2,4, [5, 6]];
// const [i, ,j] = nested;
const [i, ,[j, k]] = nested;
console.log(i, j, k);
//
const[p=1,q=1,r=1]=[8];
console.log(p,q,r)

