function getNumbers(str) {
    const arrsymbols = str.split('');
    const arrNum = [];
    arrsymbols.forEach(symbol => {
        if (!isNaN(+symbol)) {
            arrNum.push(symbol);
        }
    });
    return arrNum;
}
getNumbers('n1um3ber95');

function findTypes(...par) {
    const typesObject = [];

    par.forEach(param => {
        const t_of_param = typeof param;

        if (typesObject[t_of_param]) {
            typesObject[t_of_param]++;
        } else {
            typesObject[t_of_param] = 1;
        }
    });
    return typesObject;
}
findTypes(null, 5, 'hello');

function executeForEach(arr, f) {
    arr.forEach(elem => {
        f(elem);
    });
}
executeForEach([1, 2, 3], function (el) {
    console.log(el);
});


function mapArray(arr, f) {
    const new_arr = [];
    executeForEach(arr, elem => {
        new_arr.push(f(elem));
    });
    return new_arr;
}
mapArray([2, 5, 8], function (el) {
    return el + 3;
});

function filterArray(arr, f) {
    const new_arr = [];
    executeForEach(arr, elem => {
        if (f(elem)) {
            new_arr.push(elem);
        }
    });
    return new_arr;
}
filterArray([2, 5, 8], function (el) {
    return el > 3;
});

function showFormattedDate(input_date) {
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    let number_of_month = input_date.getMonth();
    let formatted_date = 'Date: '+ months[number_of_month] +' '+ input_date.getDate() +' '+ input_date.getFullYear();
    return formatted_date;
}
showFormattedDate(new Date('2019-01-27T01:10:00'));

function canConvertToDate(str) {
    if (Date.parse(str)) {
        return true;
    }
    return false;
}
canConvertToDate('2016-13-18T00:00:00');
canConvertToDate('2016-03-18T00:00:00');

function daysBetween(d_first, d_second) {
    const hours = 24, minutes = 60, seconds = 60, miliseconds = 1000;
    if (d_first > d_second) {
        return Math.round((d_first - d_second) / (hours*minutes*seconds*miliseconds))
    } else {
        return Math.round((d_second - d_first) / (hours*minutes*seconds*miliseconds))
    }
}
daysBetween(new Date('2016-03-18T00:00:00'), new Date('2016-04-19T00:00:00'));

let data = [
    {
        '_id': '5b5e3168c6bf40f2c1235cd6',
        'index': 0,
        'birthday': '2016-03-18T00:00:00',
        'eyeColor': 'green',
        'name': 'Stein',
        'favoriteFruit': 'apple'
    },
    {
        '_id': '5b5e3168e328c0d72e4f27d8',
        'index': 1,
        'birthday': '1991-02-11T00:00:00',
        'eyeColor': 'blue',
        'name': 'Cortez',
        'favoriteFruit': 'strawberry'
    },
    {
        '_id': '5b5e3168cc79132b631c666a',
        'index': 2,
        'birthday': '1984-04-17T00:00:00',
        'eyeColor': 'blue',
        'name': 'Suzette',
        'favoriteFruit': 'apple'
    },
    {
        '_id': '5b5e31682093adcc6cd0dde5',
        'index': 3,
        'birthday': '1994-04-17T00:00:00',
        'eyeColor': 'green',
        'name': 'George',
        'favoriteFruit': 'banana'
    }
];

function getAmountOfAdultPeople(Data) {
    let kst_persons = 0;
    const daysInYear = 365;
    const amount = 18;
    filterArray(Data, function (e) {
        if (daysBetween(Date.now(), +new Date(e.birthday)) / daysInYear > amount) {
           kst_persons++;
        }
    });
    return kst_persons;
}
getAmountOfAdultPeople(data);

function keys(objects) {
    let arr = [];
    for (let key in objects) {
        if (objects.hasOwnProperty(key)) {
            arr.push(key);
        }
    }
    return arr;
}
keys({keyOne: 1, keyTwo: 2, keyThree: 3});

function values(objects) {
    const arr = [];
    for (let key in objects) {
        if (objects.hasOwnProperty(key)) {
            arr.push(objects[key]);
        }
    }
    return arr;
}
values({keyOne: 1, keyTwo: 2, keyThree: 3});