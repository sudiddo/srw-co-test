import "./App.css";
import { useState } from "react";

function App() {
  const [palindromeWord, setPalindromeWord] = useState("");
  const [palindromeResult, setPalindromeResult] = useState("");
  const [sortedNumArray, setSortedNumArray] = useState([]);
  const [symDiffResult, setSymDiffResult] = useState([]);
  const numArray = [3, 4, 5, 1, 2];
  const symDiffA = [1, 2, 3, 4, 5];
  const symDiffB = [3, 4, 8, 7];

  const checkPalindrome = (e) => {
    e.preventDefault();
    // Step 1. Lowercase the string and use the RegExp to remove unwanted characters from it
    var re = /[\W_]/g; // or var re = /[^A-Za-z0-9]/g;

    var lowRegStr = palindromeWord.toLowerCase().replace(re, "");
    // str.toLowerCase() = "A man, a plan, a canal. Panama".toLowerCase() = "a man, a plan, a canal. panama"
    // str.replace(/[\W_]/g, '') = "a man, a plan, a canal. panama".replace(/[\W_]/g, '') = "amanaplanacanalpanama"
    // var lowRegStr = "amanaplanacanalpanama";

    // Step 2. Use the same chaining methods with built-in functions from the previous article 'Three Ways to Reverse a String in JavaScript'
    var reverseStr = lowRegStr.split("").reverse().join("");
    // lowRegStr.split('') = "amanaplanacanalpanama".split('') = ["a", "m", "a", "n", "a", "p", "l", "a", "n", "a", "c", "a", "n", "a", "l", "p", "a", "n", "a", "m", "a"]
    // ["a", "m", "a", "n", "a", "p", "l", "a", "n", "a", "c", "a", "n", "a", "l", "p", "a", "n", "a", "m", "a"].reverse() = ["a", "m", "a", "n", "a", "p", "l", "a", "n", "a", "c", "a", "n", "a", "l", "p", "a", "n", "a", "m", "a"]
    // ["a", "m", "a", "n", "a", "p", "l", "a", "n", "a", "c", "a", "n", "a", "l", "p", "a", "n", "a", "m", "a"].join('') = "amanaplanacanalpanama"
    // So, "amanaplanacanalpanama".split('').reverse().join('') = "amanaplanacanalpanama";
    // And, var reverseStr = "amanaplanacanalpanama";

    // Step 3. Check if reverseStr is strictly equals to lowRegStr and return a Boolean
    // "amanaplanacanalpanama" === "amanaplanacanalpanama"? => true
    if (reverseStr === lowRegStr) {
      setPalindromeResult("It is a palindrome");
    } else {
      setPalindromeResult("It is not a palindrome");
    }
  };

  const sortAscending = (e) => {
    e.preventDefault();
    const sort = numArray.sort((a, b) => a - b);
    setSortedNumArray(sort);
  };

  function symDiff() {
    var sets = [],
      result = [];
    // make copy of arguments into an array
    var args = Array.prototype.slice.call(arguments, 0);
    // put each array into a set for easy lookup
    args.forEach(function (arr) {
      sets.push(new Set(arr));
    });
    // now see which elements in each array are unique
    // e.g. not contained in the other sets
    args.forEach(function (array, arrayIndex) {
      // iterate each item in the array
      array.forEach(function (item) {
        var found = false;
        // iterate each set (use a plain for loop so it's easier to break)
        for (var setIndex = 0; setIndex < sets.length; setIndex++) {
          // skip the set from our own array
          if (setIndex !== arrayIndex) {
            if (sets[setIndex].has(item)) {
              // if the set has this item
              found = true;
              break;
            }
          }
        }
        if (!found) {
          result.push(item);
        }
      });
    });
    setSymDiffResult(result);
  }

  const SymDiffCount = (e) => {
    e.preventDefault();

    symDiff(symDiffA, symDiffB);
  };

  return (
    <div className="App">
      {/* <header className="App-header">
        <h1>{`SRW&Co Code Test`}</h1>
      </header> */}
      <main>
        <div>
          <form onSubmit={checkPalindrome}>
            <div style={{ marginTop: 50, marginBottom: 10 }}>
              1. Palindrome Test
            </div>
            <div>
              Enter a string:
              <input
                type="text"
                value={palindromeWord}
                onChange={(e) => setPalindromeWord(e.target.value)}
              />
              <input type="submit" value="submit" />
            </div>
          </form>
          <div>{palindromeResult}</div>
          <div style={{ marginTop: 40, marginBottom: 10 }}>
            <form onSubmit={sortAscending}>
              2. Sort Ascending
              <div
                style={{ marginTop: 10 }}
              >{`[${numArray}] = [${sortedNumArray}]`}</div>
              <input style={{ marginTop: 5 }} type="submit" value="submit" />
            </form>
          </div>
          <div style={{ marginTop: 30 }}>
            3. Symmetric Difference
            <form style={{ marginTop: 10 }} onSubmit={SymDiffCount}>
              <div>{`Array 1: ${symDiffA}`}</div>
              <div>{`Array 2: ${symDiffB}`}</div>
              <div>{`Symmetric Difference: ${symDiffResult}`}</div>
              <input style={{ marginTop: 10 }} type="submit" value="submit" />
            </form>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
