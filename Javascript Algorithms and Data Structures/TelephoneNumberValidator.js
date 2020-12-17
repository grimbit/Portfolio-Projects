function telephoneCheck(str) {
    if (str.length >= 10 && str.length <= 16){
      return (/^(1\s?)?(\(\d{3}\)|\d{3})[\s\-]?\d{3}[\s\-]?\d{4}$/.test(str));
  } else {
      return false
  } }
    telephoneCheck("555-555-5555");