// 1.Berilgan qatorni sozlash uchun faqat raqamlar 
// va harflarni saqlab, boshqa barcha belgilarni olib tashlang.
function sanitizeString(str) {
        // return str.replace(/[^a-zA-Z0-9]/g, '');
    let result = str.split('').filter(item => /[a-zA-Z0-9]/.test(item)).join('');
    return result
}

console.log(sanitizeString("he@llo! w0rld#")); // "hello0rld"


// 2.Berilgan massiv ichidagi musbat va manfiy sonlarni alohida 
// massivlarga ajratib, natijani obyekt sifatida qaytaring.

function separatePositivesAndNegatives(arr) {
    let arr2 = arr.filter((item) => item > 0)
    let arr3 = arr.filter((item) => item < 0)
    return {
        positives : arr2,
        negatives : arr3
    }
      
 }
 
 console.log(separatePositivesAndNegatives([1, -2, 3, -4, 5])); 
 // { positives: [1, 3, 5], negatives: [-2, -4] }


//  3.Berilgan massiv ichida faqat bir marta uchraydigan 
//  birinchi elementni toping.
function firstUniqueElement(arr) {
    let arr5 = arr.filter((item) => {
        return arr.indexOf(item) === arr.lastIndexOf(item);
    });
    return arr5
}
 
 console.log(firstUniqueElement([2, 3, 4, 2, 3, 5, 4])); // 5

//  4.Berilgan massiv ichidagi har bir elementning takrorlanish 
//  sonini qaytaruvchi obyektni yarating.
function elementCounts(arr) {
   
let count = {};
arr.forEach(function (i) {
    count[i] = (count[i] || 0) + 1;
})
    return count;
}


console.log(elementCounts([1, 2, 2, 3, 3, 3, 4, 4, 4, 4]));
// { 1: 1, 2: 2, 3: 3, 4: 4 }

// 5.Berilgan massiv ichida k indeksdagi elementni oxirgi
//  indeksdagi element bilan almashtiring.
function swapElements(arr, k) {
 arr.push(...arr.splice(k,1, arr.pop()))
 return arr
}

console.log(swapElements([1, 2, 3, 4, 5], 2)); // [1, 2, 5, 4, 3]