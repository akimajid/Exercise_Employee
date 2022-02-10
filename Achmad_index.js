// Duplicate indexOf

const indexOf = (arr, val) => {
    for (let i = 0; i < arr.length; i++) {
      if (val === arr[i]) {
        return i;
      }
    }
  };

const books = ["LOTR", "Naruto", "One Piece", "Naruto", "Sherlock"]

// Mencari index Naruto yang terakhir
let index = books.indexOf("Naruto", 2)

console.log(index)


// Duplicate find()

const age = [10, 15, 20, 25, 30]
let resultAge = []

checkAge = (age) => {
    return age > 15
}

for (i = 0; i < age.length; i++) {
    if (checkAge(age[i])) {
        resultAge.push(age[i])
    }
}

let umur = checkAge(age, 20)

console. log(umur)




