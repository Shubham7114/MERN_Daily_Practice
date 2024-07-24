
    // -------------- USING :- split('') reverse() join('')  -------------------------

    function reverseString(str) {
        return str.split('').reverse().join('');
    }

    const originalstr = "Javascript is my love"
    console.log(originalstr);
    const reversed = reverseString(originalstr);
    console.log(reversed);         // Outputs: "olleh"

    // -------------- USING :- for loop  -------------------------

    function reverseString(str) {
        let newString = "";
        for (let i = str.length - 1; i >= 0; i--) {
            newString += str[i];
        }
        return newString;
    }
    const reversedstr1 = reverseString("hello");
    console.log(reversedstr1); // Outputs: "olleh"



    


