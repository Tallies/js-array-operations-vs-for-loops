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
    name: "Justing Gatlin",
    fastest: 9.74
}, {
    name: "Christian Coleman",
    fastest: 9.76
}]

const runnersByTenOfASecond = [
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
        max: 9.979,
        runners: [{
            name: "Asafa Powell",
            fastest: 9.72
        }, {
            name: "Justing Gatlin",
            fastest: 9.74
        }, {
            name: "Christian Coleman",
            fastest: 9.76
        }]
    }
];

export { runners, runnersByTenOfASecond}
export default runners;