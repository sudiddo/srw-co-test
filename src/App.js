import "./App.css";
import { useState } from "react";

function App() {
  const [palindromeWord, setPalindromeWord] = useState("");
  const [palindromeResult, setPalindromeResult] = useState("");
  const [sortedNumArray, setSortedNumArray] = useState([]);
  const [diySortedNumArray, setDiySortedNumArray] = useState("");
  const [diySortedNumArrayResult, setDiySortedNumArrayResult] = useState([]);
  const [diySortedErrorMessage, setDiySortedErrorMessage] = useState("");
  const [symDiffResult, setSymDiffResult] = useState([]);
  const numArray = [3, 4, 5, 1, 2];
  const symDiffA = [1, 2, 3, 4, 5];
  const symDiffB = [3, 4, 8, 7];
  const [diyDiffSymA, setDiyDiffSymA] = useState("");
  const [diyDiffSymB, setDiyDiffSymB] = useState("");
  const [diySymDiffResult, setDiySymDiffResult] = useState([]);

  const checkPalindrome = (e) => {
    e.preventDefault();
    const re = /[\W_]/g;

    const lowRegStr = palindromeWord.toLowerCase().replace(re, "");

    const reverseStr = lowRegStr.split("").reverse().join("");

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

  const sortDIYAscending = (e) => {
    e.preventDefault();
    const isValid = /^[0-9,.]*$/.test(diySortedNumArray);
    console.log("regex", isValid);
    if (isValid) {
      const split = diySortedNumArray.split(",").map(function (item) {
        return parseInt(item, 10);
      });
      const sort = split.sort((a, b) => a - b);

      setDiySortedNumArrayResult(sort);
    } else {
      setDiySortedErrorMessage("Please only input number and comma");
    }
  };

  function symDiff() {
    const sets = [],
      result = [];
    const isDIY = arguments[0];
    const args = Array.prototype.slice.call(arguments, 1);
    args.forEach(function (arr) {
      sets.push(new Set(arr));
    });

    args.forEach(function (array, arrayIndex) {
      array.forEach(function (item) {
        let found = false;
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
    if (isDIY) {
      setDiySymDiffResult(result);
    } else {
      setSymDiffResult(result);
    }
  }

  const SymDiffCount = (e) => {
    e.preventDefault();

    symDiff(false, symDiffA, symDiffB);
  };

  const DiySymDiffCount = (e) => {
    e.preventDefault();
    const aIsValid = /^[0-9,.]*$/.test(diyDiffSymA);
    const bIsValid = /^[0-9,.]*$/.test(diyDiffSymB);
    if (aIsValid && bIsValid) {
      const splitA = diyDiffSymA.split(",").map(function (item) {
        return parseInt(item, 10);
      });
      const splitB = diyDiffSymB.split(",").map(function (item) {
        return parseInt(item, 10);
      });
      symDiff(true, splitA, splitB);
    }
  };

  return (
    <div className="bg-gray-600 text-white">
      <header>
        <h1 className="p-12 text-white text-center font-bold text-4xl">{`SRW&Co Technical Test`}</h1>
      </header>
      <main className="justify-center">
        <div className="grid lg:grid-cols-3 grid-rows-2 gap-3 mx-2 lg:pb-0 pb-28">
          <div>
            <form
              className="bg-red-900 py-6 lg:px-5 px-3 h-full w-full rounded-md"
              onSubmit={checkPalindrome}
            >
              <h3 className="text-xl">1. Palindrome Test</h3>
              <div>
                Enter words:
                <input
                  placeholder="Example race car"
                  className="bg-gray-200 ml-3 rounded-md py-1 text-black mt-5 px-1"
                  type="text"
                  value={palindromeWord}
                  onChange={(e) => setPalindromeWord(e.target.value)}
                />
              </div>
              <input
                className="bg-gray-200 float-right rounded-md text-black mt-5 px-3 py-1"
                type="submit"
                value="Submit Palindrome"
              />
            </form>
            {palindromeResult !== "" ? (
              <div className="mt-5 border border-white px-5 py-2 rounded-md text-l">
                {palindromeResult}
              </div>
            ) : null}
          </div>
          <div className="flex flex-col justify-start ">
            <div className="bg-gray-900 h-full lg:px-10 px-5 py-6 rounded-md">
              <form onSubmit={sortAscending}>
                <h3 className="text-xl">2. Sort Ascending</h3>
                <div className="text-center mt-5">{`[${numArray}] = [${sortedNumArray}]`}</div>
                <input
                  className="bg-gray-200  float-right rounded-md text-black mt-5 px-5 py-1"
                  type="submit"
                  value="Sort"
                />
              </form>

              <form
                className="border border-white p-3 mt-20 rounded-md"
                onSubmit={sortDIYAscending}
              >
                <h5> Input your own number! (please seperate with comma)</h5>
                <div>
                  <div>
                    <input
                      placeholder="Example 7,3,4,5"
                      className="bg-gray-200 rounded-md py-1 text-black mt-5 px-1 lg:w-56 w-36"
                      type="text"
                      value={diySortedNumArray}
                      onChange={(e) => setDiySortedNumArray(e.target.value)}
                    />
                    {` = [${diySortedNumArrayResult}]`}
                  </div>
                </div>
                <div className="flex justify-end">
                  <input
                    className="bg-gray-200 mt-5 rounded-md text-black px-5 py-1"
                    type="submit"
                    value="Sort"
                  />
                </div>
                <div style={{ color: "red", marginTop: 5 }}>
                  {diySortedErrorMessage}
                </div>
              </form>
            </div>
          </div>
          <div className=" flex flex-col justify-start ">
            <div className="bg-red-900 py-6 px-3 rounded-md">
              <h3 className="text-xl">3. Symmetric Difference</h3>
              <form
                style={{ marginTop: 10, marginBottom: 20 }}
                onSubmit={SymDiffCount}
              >
                <div>{`Array 1: ${symDiffA}`}</div>
                <div>{`Array 2: ${symDiffB}`}</div>
                <div>{`Symmetric Difference: ${symDiffResult}`}</div>
                <input
                  className="bg-gray-200 float-right rounded-md text-black mt-5 px-5 py-1"
                  type="submit"
                  value="Calculate"
                />
              </form>
              <form className="mt-20" onSubmit={DiySymDiffCount}>
                <h5> Input your own number! (please seperate with comma)</h5>
                <div>
                  {`Array 1: `}
                  <input
                    placeholder="Example 7,3,4,5"
                    className="bg-gray-200 ml-3 rounded-md py-1 text-black mt-5 px-1"
                    type="text"
                    value={diyDiffSymA}
                    onChange={(e) => setDiyDiffSymA(e.target.value)}
                  />
                </div>
                <div>
                  {`Array 2: `}
                  <input
                    placeholder="Example 7,3,4,5"
                    className="bg-gray-200 ml-3 rounded-md py-1 text-black mt-5 px-1"
                    type="text"
                    value={diyDiffSymB}
                    onChange={(e) => setDiyDiffSymB(e.target.value)}
                  />
                </div>
                <div
                  style={{ marginTop: 10 }}
                >{`Symmetric Difference: ${diySymDiffResult}`}</div>
                <input
                  className="bg-gray-200 float-right rounded-md text-black mt-5 px-5 py-1"
                  type="submit"
                  value="Calculate"
                />
              </form>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
