function sorting(arrNumber) {
  // code di sini
  // melakukan looping utk mengambil nilai dan membandingkannya
  for (var i = 0; i < arrNumber.length; i++) {
    for (var j = 0; j < arrNumber.length; j++) {
      // bandingkan antara 2 nilai
      if (arrNumber[j + 1] > arrNumber[j]) {
        var nilaiSmt = arrNumber[j];
        arrNumber[j] = arrNumber[j + 1];
        arrNumber[j + 1] = nilaiSmt;
      }
    }
  }
  // console.log(arrNumber);
  return arrNumber;
}

function getTotal(arrNumber) {
  // code di sini
  if (arrNumber.length > 0) {
    var index = 0;
    while (arrNumber[index] === arrNumber[index + 1]) {
      index++;
    }
    return (index += 1);
  } else {
    return " ";
  }
}

function mostFrequentLargestNumbers(arrNumber) {
  var listSort = sorting(arrNumber);
  var countHighest = getTotal(listSort);
  return countHighest;
}

console.log(mostFrequentLargestNumbers([2, 8, 4, 6, 8, 5, 8, 4]));
//'angka paling besar adalah 8 dan jumlah kemunculan sebanyak 3 kali'

console.log(
  mostFrequentLargestNumbers([122, 122, 130, 100, 135, 100, 135, 150])
);
//'angka paling besar adalah 150 dan jumlah kemunculan sebanyak 1 kali'

console.log(mostFrequentLargestNumbers([1, 1, 1, 1]));
//'angka paling besar adalah 1 dan jumlah kemunculan sebanyak 4 kali'

console.log(mostFrequentLargestNumbers([]));
//''
