// 校验 SNOWCLAD products.json 的图片完整性
// 用法: node scripts/check-products.js [products.json路径] [public目录]
// 默认: src/data/products.json 与 public
const fs = require("fs");
const path = require("path");

const dataPath =
  process.argv[2] || path.join(__dirname, "..", "src", "data", "products.json");
const publicDir = process.argv[3] || path.join(__dirname, "..", "public");

const data = JSON.parse(fs.readFileSync(dataPath, "utf8"));

let ok = 0;
let missing = 0;
const problems = [];
const asins = new Set();

for (const family of data.products) {
  for (const variant of family.variants) {
    // ASIN 唯一性
    if (asins.has(variant.asin)) {
      problems.push(`重复 ASIN: ${variant.asin} (${family.slug}/${variant.imagesDir})`);
    }
    asins.add(variant.asin);

    // 主图 image_1.jpg
    const imgPath = path.join(
      publicDir,
      "images",
      "products",
      family.slug,
      variant.imagesDir,
      "image_1.jpg"
    );
    if (fs.existsSync(imgPath)) {
      ok++;
    } else {
      missing++;
      problems.push(`缺失主图: images/products/${family.slug}/${variant.imagesDir}/image_1.jpg`);
    }
  }
}

console.log(`\n产品族: ${data.products.length} | SKU: ${asins.size}`);
console.log(`✅ 主图齐全: ${ok} | ❌ 缺失: ${missing}`);
if (problems.length) {
  console.log("\n问题明细:");
  problems.forEach((p) => console.log("  - " + p));
} else {
  console.log("\n🎉 所有 SKU 主图均已就位");
}
process.exit(missing > 0 || problems.length ? 1 : 0);
