const fs = require("fs");

function getConstantTerm(filePath) {
  // Step 1: Load JSON
  const data = JSON.parse(fs.readFileSync(filePath, "utf8"));

  const n = data.keys.n;
  const k = data.keys.k;
  const m = k - 1; // degree

  // Step 2: Gather first k roots (sorted by numeric keys)
  const roots = Object.keys(data)
    .filter((key) => /^\d+$/.test(key)) // only digit keys
    .map((key) => parseInt(key))
    .sort((a, b) => a - b)
    .slice(0, k)
    .map((key) => {
      const entry = data[key];
      return parseInt(entry.value, parseInt(entry.base));
    });

  // Step 3: Compute constant term = product(roots) * (-1)^m
  let constant = 1n; // use BigInt for safety
  for (const r of roots) {
    constant *= BigInt(r);
  }
  constant *= BigInt((-1) ** m);

  // Step 4: Print
  console.log(`Using first ${k} roots (n=${n}, degree m=${m}):`, roots);
  console.log(`Constant term (c) = ${constant.toString()}`);
}

// CLI usage: node find_constant.js input.json
if (process.argv.length < 3) {
  console.log("Usage: node find_constant.js <input.json>");
  process.exit(1);
}

getConstantTerm(process.argv[2]);
