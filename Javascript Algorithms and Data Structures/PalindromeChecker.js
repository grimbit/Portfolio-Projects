function palindrome(str) {

    let a = str.toLowerCase();
    let b;
    //removes non-alphanumerics
    b = a.replace(/[\W+_]/gi, '') 
    //compares the reversed to the original
    return  b == b.split('').reverse().join('') ? true : false;
    };
    
    palindrome("eye");