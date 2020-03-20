function changeVocals(str) {
  //code di sini
  // buat variabel isi kamus dan penampung baru
  var kamus = ["aiueoAIUEO", "bjvfpBJVFB"];
  var newStr = "";
  // lakukan looping untuk mengambil nilai dan membadingkannya
  for (var i = 0; i < str.length; i++) {
    for (var j = 0; j < kamus[0].length; j++) {
      if (str[i] === kamus[0][j]) {
        newStr += kamus[1][j];
        break;
      }
      if (j === kamus[0].length - 1) {
        newStr += str[i];
      }
    }
  }
  //   console.log(newStr);
  return newStr;
}

function reverseWord(str) {
  //code di sini
  var newStr = "";
  for (var i = 0; i < str.length; i++) {
    newStr += str[str.length - i - 1];
  }
  return newStr;
}

function setLowerUpperCase(str) {
  //code di sini
  // buat  variabel kamus
  var kamus = ["abcdefghijklmnopqrstuvwxyz", "ABCDEFGHIJKLMNOPQRSTUVWXYZ"];
  var newStr = "";
  // lakukan looping untuk melihat dan mengambil nilai
  for (var i = 0; i < str.length; i++) {
    for (var j = 0; j < kamus[0].length; j++) {
      if (str[i] === kamus[0][j]) {
        newStr += kamus[1][j];
        break;
      } else if (str[i] === kamus[1][j]) {
        newStr += kamus[0][j];
        break;
      }
      if (j === kamus[0].length - 1) {
        newStr += str[i];
      }
    }
  }
  return newStr;
}

function removeSpaces(str) {
  //code di sini
  var newStr = "";
  for (var i = 0; i < str.length; i++) {
    if (str[i] !== " ") {
      newStr += str[i];
    }
  }
  return newStr;
}

function passwordGenerator(name) {
  //code di sini
  if (name.length < 5) {
    return "Minimal karakter yang diinputkan adalah 5 karakter";
  } else {
    return removeSpaces(setLowerUpperCase(reverseWord(changeVocals(name))));
  }
}

console.log(passwordGenerator("Sergei Dragunov")); // 'VPNVGBRdJFGRFs'
console.log(passwordGenerator("Dimitri Wahyudiputra")); // 'BRTVPJDVYHBwJRTJMJd'
console.log(passwordGenerator("Alexei")); // 'JFXFLb'
console.log(passwordGenerator("Alex")); // 'Minimal karakter yang diinputkan adalah 5 karakter'
