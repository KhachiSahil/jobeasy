const fs = require("fs")
const path = require("path")

function saveToFile(filename, data) {
  const filePath = path.join(__dirname, "..", "..", "data", filename);

  fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
  console.log(`✅ Saved to ${filePath}`);
}

module.exports = saveToFile
