

วิธีการลง

git clone https://github.com/copygof/demoStock.git

cd demoStock

npm install

จากนั้น เขียนโค้ดตามโจทย์ หรือ เรียกใช้ function ตัวเองใน index.js เช่น console.log(getCategory())

เพื่อ ทำหาร debug ให้ทำการ comment ในส่วนของ export

```

// export {
//   tableCategory,
//   tableBook,
//   tableStock,
//   getCategory,
//   getCategoryById,
//   addCategory,
//   updateCategoryById,
//   deleteCategoryById,
// }


```
แล้วใช้คำสั่ง node src/index.js เพื่อ ทำหาร debug

หาก เสร๊จแล้วอยากตรวจ ให้เอา comment ตรง export

```

export {
  tableCategory,
  tableBook,
  tableStock,
  getCategory,
  getCategoryById,
  addCategory,
  updateCategoryById,
  deleteCategoryById,
}

```

แล้วรัน npm run test

