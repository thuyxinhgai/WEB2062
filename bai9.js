const rest1 ={
    name: 'Capri',
    // numGuests: 20.
    numGuests: 0.
};
const rest2 ={
    name: 'La Pizza',
    owner: 'Giovanni Rossi',
};
// or
// rest1.numGuests = rest1.numGuests || 10;
// rest2.numGuests = rest2.numGuests || 10;

// rest1.numGuests ||= 10;
// rest2.numGuests ||= 10;
//nullish
rest1.numGuests ??= 10;
rest2.numGuests ??= 10;
// AND
// rest1.owner = rest1.owner && '<ANONYMONUS>';
// rest2.owner = rest2.owner && '<ANONYMONUS>';
rest1.owner &&= '<ANONYMONUS>';
rest2.owner &&= '<ANONYMONUS>';
console.log(rest1);
console.log(rest2);