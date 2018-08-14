require("babel-core").transform("code")

const tableCategory = [
  { _id: 'category:001', category: 'หนังสือเรียน' },
  { _id: 'category:002', category: 'หนังสือนิยาย' },
  { _id: 'category:003', category: 'หนังสือบันเทิง' },
  { _id: 'category:004', category: 'หนังสือการเงิน' },
]

const tableBook = [
  { _id: 'book:001', book_name: 'พ่อรวยสอนลูก',  category_id: 'category:004' },
  { _id: 'book:002', book_name: 'เตรียมสอบโทิก', category_id: 'category:001' },
  { _id: 'book:003', book_name: 'เม้าหมอยดารา', category_id: 'category:004' },
  { _id: 'book:004', book_name: 'นิโปเลียน',     category_id: 'category:004' },
  { _id: 'book:004', book_name: 'เพลิงประนาง',  category_id: 'category:004' },
]

const tableStock = [
  { _id: 'stock:001', book_id: 'book:001', total: 12, sale: 2, balance: 10, createAt: '', updateAt: '', },
]

// ระบบ บริหารจัดการสต๊อก
// 1.การจัดการข้อมูล หมวดหมู่หนังสือ (tableCategory) ต้องสามารถ เรียกดู, เพิ่ม, แก้ไข, ลบ ได้
// 2.การจัดการข้อมูล หนังสือ (tableCategory) ต้องสามารถ เรียกดู, เพิ่ม, แก้ไข, ลบ ได้
// 3.การจัดการข้อมูล สต๊อก (tableStock) ต้องสามารถ เรียกดู, เพิ่ม, แก้ไข, ลบ ได้

// 1.การจัดการข้อมูล หมวดหมู่หนังสือ

// Start of Category

/**
 * Function getCategory
 * -------
 * เป็นฟังก์ชันที่ไม่รับ augments
 * แล้วจะ return ข้อมูลของ category ทั้งหมดที่มีอยู่ใน database
 * 
 * @returns {object} all category data
*/
function getCategory() {
  return tableCategory
}

/**
 * Function getCategoryById
 * -------
 * เป็นฟังก์ชันที่รับ augments มา 1 ตัวคือ categoryId เป็น string
 * แล้วจะ return ข้อมูลของ category นั้นๆที่มีอยู่ใน database
 * 
 * @augments string categoryId
 * @returns {object} category data
*/
function getCategoryById(categoryId) {
  // Do somathing...

  return
}

/**
 * Function addCategory
 * -------
 * เป็นฟังก์ชันที่รับ augments เป็น string คือ ชื่อหมวดหมู่
 * แล้วจะ return ข้อมูลของ category ทั้งหมด ที่มีอันล่าสุดเพิ่มเข้าไปด้วย
 * 
 * @augments string augments
 * @returns {object} all category data
*/
function addCategory(category) {
  // Do somathing...
  
  return 
}

/**
 * Function updateCategoryById
 * -------
 * เป็นฟังก์ชันที่รับ augments มา 2 ตัวคือ
 * 1 - category คือ ขื่อ category ที่ต้องการจะแก้ไข เป็น string
 * 2 - categoryId เป็น string
 * แล้วจะ return ข้อมูลของ category ทั้งหมด ที่มีอันล่าสุดที่แก้เข้าไปด้วย
 * 
 * @augments string augments
 * @returns {object} all category data
*/
function updateCategoryById(category, categoryId) {
  // Do somathing...
  return 
}

/**
 * Function deleteCategoryById
 * -------
 * เป็นฟังก์ชันที่รับ augments มา 1 ตัวคือ categoryId เป็น string
 * แล้วจะ return ข้อมูลของ category ทั้งหมด ล่าสุดที่จะต้องไม่มีข้อมูลที่พึ่งลบไป
 * 
 * @augments string augments
 * @returns {object} all category data
*/
function deleteCategoryById(categoryId) {
  // Do somathing...
  return 
}

// End of Category


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

