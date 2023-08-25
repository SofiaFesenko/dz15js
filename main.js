// 1
let temp = Number(prompt())
let weather = {
    'temperature': temp,
    'humidity': 0,
    'windSpeed': 0,
    'check': function() {
        if (this.temperature < 0) {
            console.log('true', 'температура нижче 0 градусів Цельсія')
            
        }
        else if (this.temperature >= 0) {
            console.log('false')
        }
    }
}
weather.check()


// 2
function checkIfLowercase(text) {
    let regExp = /[A-Z]/;
    let isMatch = regExp.test(text)
    return isMatch ? "Yes" : "No";
}

let name = prompt('name')
let email = prompt('email')
let password = prompt('password')
let user = {
    'name': name,
    'email': email,
    'password': password,
    'login': () => {
        if (email.includes('@', '.com') && password.length >= 13 && checkIfLowercase(password) == 'Yes') {
            alert('успєх удача')
        }
        else {
            alert('ні')
        }
    }
}
user.login()


// 3
let p = document.querySelector('.p')
let rate = Number(prompt())
let movie = {
    'title': 'csercd',
    'director': 'cservbfds',
    'year': 10,
    'rating': rate,
    'check': function() {
        if (this.rating > 8) {
            console.log(true)
            p.style.color = 'green'
        }
        else if (this.rating <= 8) {
            console.log(false)
        }
    }
}

movie.check()







// // 1
// function logItems(array) {
//     for (let i = 0; i < array.length; i++) {
//         console.log(`${i + 1} - ${array[i]}`)
//     }
// }
// logItems(['Mango', 'Poly', 'Ajax'])


// // 2
// function calculateEngravingPrice(message, pricePerWord) {
//     let arr = message.split(' ')
//     let sum = 0
//     for (let _ of arr) { 
//         sum += pricePerWord
//     }
//     console.log(sum)
// }
// calculateEngravingPrice('ch h j h', 5)


// // 3
// function findLongestWord(string) {
//     let arr = string.split(' ')

//     arr.reduce(function(a, b) {
//         if (a > b) {
//             console.log(b)
//         }
//     });
// }
// findLongestWord('denwjkhe aaa djewkd')


// // 4
// function formatString(string) {
//     if (string.length <= 40) {
//         return string
//     } 
//     else {
//        return string.slice(0, 40) + '...'
//     }
// }
// console.log(formatString('cwedcefcaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'));


// // 5
// function checkForSpam(message) {
//     return message.includes('spam', 'sale')
// }
// console.log(checkForSpam('cbdhcsbe spam nfuernif'));


// // 6
// let a
// let numbers = []
// let total = 0

// do {
//     a = Number(prompt())
//     numbers.push(a)
// } while (a != 0);

// for (const i of numbers) {
//     total += i
// }

// console.log(`сума: ${total}`)


// // 7
// let but = document.querySelector('.but')
// but.addEventListener('click', () => {
//     alert('aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaajjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjddddddddddddddddddddddddddddppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppucbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeoooooooooooooooooooooooooobnnnnnnnnnnnnnnnnnnnnnndxnujidwusuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuu')
// })


// // 8
// let inp = document.querySelector('.inp')
// let but2 = document.querySelector('.but2')

// but2.addEventListener('click', () => {
//     let numb = Math.floor(Math.random() * 100)
//     let ans = (Number(inp.value) === numb) ? "correct" : "incorrect";
//     alert(ans);
// })


// // 9
// let i = 0
// document.addEventListener('click', () => {
//     i++
//     console.log(i);
// })


// // 10
// let applyCallbackToEachElement = (arr, callback) => {
//     let newArray = []
//     for (let i of arr) {
//         newArray.push(callback(i))
//     }
//     return newArray
// }

// let arr = [1, 2, 3, 4, 5];

// let squareCallback = (i) => {
//     return Math.pow(i, 2)
// };

// let result = applyCallbackToEachElement(arr, squareCallback); 
// console.log(result);


// // 11
// let calculateDiscountedPrice = (price, discount, callback) => {
//     let discountedPrice = price - ((price * discount) / 100)
//     callback(discountedPrice)
// }

// let showDiscountedPrice = discountedPrice => {
//     console.log(`discounted price: ${discountedPrice}`);
// };

// calculateDiscountedPrice(100, 10, showDiscountedPrice);