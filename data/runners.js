const runners = [{
    name: "Usain Bolt",
    fastest: 9.58,
}, {
    name: "Tyson Gay",
    fastest: 9.69
},
{
    name: "Yohan Blake",
    fastest: 9.69
}, {
    name: "Asafa Powell",
    fastest: 9.72
}, {
    name: "Justin Gatlin",
    fastest: 9.74
}, {
    name: "Christian Coleman",
    fastest: 9.76
}];

const runnersByTenthsOfASecond = [
    {
        min: 9.5,
        max: 9.59,
        runners: [{
            name: "Usain Bolt",
            fastest: 9.58,
            }]
    },{
            min: 9.6,
            max: 9.69,
            runners: [{
                name: "Tyson Gay",
                fastest: 9.69
            }, {
                name: "Yohan Blake",
                fastest: 9.69
            }]
    }, {
        min: 9.7,
        max: 9.79,
        runners: [{
            name: "Asafa Powell",
            fastest: 9.72
        }, {
            name: "Justin Gatlin",
            fastest: 9.74
        }, {
            name: "Christian Coleman",
            fastest: 9.76
        }]
    }
];

export { runners, runnersByTenthsOfASecond}
export default runners;