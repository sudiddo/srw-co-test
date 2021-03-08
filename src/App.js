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
    var re = /[\W_]/g;

    var lowRegStr = palindromeWord.toLowerCase().replace(re, "");

    var reverseStr = lowRegStr.split("").reverse().join("");

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
    var args = Array.prototype.slice.call(arguments, 0);
    args.forEach(function (arr) {
      sets.push(new Set(arr));
    });

    args.forEach(function (array, arrayIndex) {
      array.forEach(function (item) {
        var found = false;
        for (var setIndex = 0; setIndex < sets.length; setIndex++) {
          if (setIndex !== arrayIndex) {
            if (sets[setIndex].has(item)) {
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
