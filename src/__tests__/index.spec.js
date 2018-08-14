import {
  tableCategory,
  tableBook,
  tableStock,
  getCategory,
  getCategoryById,
  addCategory,
  updateCategoryById,
  deleteCategoryById,
} from '../index'

describe('ทดสอบฟังก์ชัน category', () => {
  it('ควรที่จะ สามารถ getCategory ดึงข้อมูล category มาทั้งหมดได้', () => {
    expect(getCategory()).toMatchSnapshot()
  })

  it('ควรที่จะ สามารถ getCategoryById ดึงข้อมูล category ตาม id ได้', () => {
    expect(getCategoryById('category:001')).toMatchSnapshot()
    expect(getCategoryById('category:002')).toMatchSnapshot()
    expect(getCategoryById('category:003')).toMatchSnapshot()
    expect(getCategoryById('category:004')).toMatchSnapshot()
  })

  it('ควรที่จะ สามารถ addCategory เพิ่มข้อมูล category ใหม่ได้', () => {
    expect(addCategory('คอมพิวเตอร์')).toMatchSnapshot()
  })

  it('ควรที่จะ สามารถ addCategory เพิ่มข้อมูล category ใหม่ได้', () => {
    expect(addCategory('คอมพิวเตอร์')).toMatchSnapshot()
  })

  it('ควรที่จะ สามารถ updateCategoryById อัพเดพข้อมูล category ตาม id ได้', () => {
    expect(updateCategoryById('หมวดหมู่หนังสือเรียน', 'category:001')).toMatchSnapshot()
    expect(updateCategoryById('หมวดหมู่หนังสือนิยาย', 'category:002')).toMatchSnapshot()
    expect(updateCategoryById('หมวดหมู่หนังสือบันเทิง', 'category:003')).toMatchSnapshot()
    expect(updateCategoryById('หมวดหมู่หนังสือการเงิน', 'category:004')).toMatchSnapshot()
  })

  it('ควรที่จะ สามารถ deleteCategoryById ลบข้อมูล category ตาม id ได้', () => {
    expect(deleteCategoryById('category:001')).toMatchSnapshot()
    expect(deleteCategoryById('category:002')).toMatchSnapshot()
    expect(deleteCategoryById('category:003')).toMatchSnapshot()
    expect(deleteCategoryById('category:004')).toMatchSnapshot()
  })
})
