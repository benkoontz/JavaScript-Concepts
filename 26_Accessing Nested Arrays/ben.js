// accessing nested arrays

var plants = [
    {
        type: "flowers",
        list: [
            "rose",
            "tulip",
            "rose"
        ]
    },
    {
        type: "trees",
        list: [
            "fir",
            "pine",
            "birch"
        ]
    }
];

var secondTTree = plants[1].list[1];
console.log(secondTTree) // prints pine
