# Helpers

## Color Helper
คุณสามารถแก้ไขสีในการแสดงผลส่วนต่างๆได้ 

### Text color
คุณสามารถเลือกสีในการแสดงผลข้อความได้ 10 สี และสามารถระบุ modifier `*-light` หรือ `*-dark` เพื่อปรับสีให้มีความหลากหลายมากยิ่งขึ้น


<div style="border: 1px solid #eee; border-radius: 8px; overflow: hidden; margin: 1em 0;">
  <iframe src="../html/helpers/color/text.html" width="100%" height="1000px" frameborder="0" style="background: white;"></iframe>
  <div style="background: #f5f5f5; padding: 5px 10px; font-size: 12px; color: #666; text-align: right;">
    <a href="../html/helpers/color/text.html" target="_blank" style="text-decoration: none; color: #00D69E;">เปิดหน้าต่างใหม่ ↗</a>
  </div>
</div>  


### Background color
คุณสามารถเลือกสีในการแสดงผล background ได้ 10 สี และสามารถระบุ modifier `*-light` หรือ `*-dark` เพื่อปรับสีให้มีความหลากหลายมากยิ่งขึ้น


<div style="border: 1px solid #eee; border-radius: 8px; overflow: hidden; margin: 1em 0;">
  <iframe src="../html/helpers/color/background.html" width="100%" height="1000px" frameborder="0" style="background: white;"></iframe>
  <div style="background: #f5f5f5; padding: 5px 10px; font-size: 12px; color: #666; text-align: right;">
    <a href="../html/helpers/color/background.html" target="_blank" style="text-decoration: none; color: #00D69E;">เปิดหน้าต่างใหม่ ↗</a>
  </div>
</div>


## Spacing
คุณสามารถกำหนด margin ผ่าน `m*` และ padding ผ่าน `p*` พร้อมกับระบุทิศทาง ดังต่อไปนี้
* `*t` สำหรับด้านบน
* `*r` สำหรับด้านขวา
* `*l` สำหรับด้านซ้าย
* `*b` สำหรับด้านล่าง
* `*x` สำหรับด้านซ้าย และขวา
* `*y` สำหรับด้านบน และล่าง

เช่น `mt-3` สำหรับกำหนด margin-top-3 , `pb-2` สำหรับกำหนด padding-bottom-2

<div style="border: 1px solid #eee; border-radius: 8px; overflow: hidden; margin: 1em 0;">
  <iframe src="../html/helpers/color/background.html" width="100%" height="700px" frameborder="0" style="background: white;"></iframe>
  <div style="background: #f5f5f5; padding: 5px 10px; font-size: 12px; color: #666; text-align: right;">
    <a href="../html/helpers/color/background.html" target="_blank" style="text-decoration: none; color: #00D69E;">เปิดหน้าต่างใหม่ ↗</a>
  </div>
</div>

## Typography 
คุณสามารถจัดการตัวอักษรได้ดังต่อไปนี้

### Size
สามารถจัดการขนาดได้ผ่านการระบุ class ดังต่อไปนี้

<div style="border: 1px solid #eee; border-radius: 8px; overflow: hidden; margin: 1em 0;">
  <iframe src="../html/helpers/color/background.html" width="100%" height="500px" frameborder="0" style="background: white;"></iframe>
  <div style="background: #f5f5f5; padding: 5px 10px; font-size: 12px; color: #666; text-align: right;">
    <a href="../html/helpers/color/background.html" target="_blank" style="text-decoration: none; color: #00D69E;">เปิดหน้าต่างใหม่ ↗</a>
  </div>
</div>


### Alignment
สามารถจัดการการแสดงตำแหน่งของข้อความได้ด้วย class ดังต่อไปนี้

| #   |      Class      |   |
|----------|:-------------:|------:|
| 1. |  `has-text-centered` | แสดงข้อความตรงกลาง |
| 2. |  `has-text-justified	` | แสดงข้อความแบบ justified |
| 3. |  `has-text-left` | แสดงข้อความชิดซ้าย |
| 4. |  `has-text-right` | แสดงข้อความชิดขวา |
    
### Text transformation
สามารถจัดการการรูปแบบการแสดงผลข้อความได้ดังต่อไปนี้

| #   |      Class      |   |
|----------|:-------------:|------:|
| 1. |  `is-capitalized` | ตัวอักษรแรกของแต่ละคำจะเป็นตัวใหญ่ |
| 2. |  `is-lowercase	` | ตัวอักษรทุกตัวเป็นตัวเล็ก |
| 3. |  `is-uppercase` | ตัวอักษรทุกตัวเป็นตัวใหญ่ |
| 4. |  `is-italic` | ตัวอักษรเป็นตัวเอียง |

### Text weight
สามารถจัดการการรูปแบบความหนา ได้ดังต่อไปนี้

| #   |      Class      |   |
|----------|:-------------:|------:|
| 1. |  `has-text-weight-light` | ตัวอักษรเป็นตัวบาง |
| 2. |  `has-text-weight-normal	` | ตัวอักษรความหนาปกติ |
| 3. |  `has-text-weight-medium` | ตัวอักษรความหนาแบบ medium |
| 4. |  `has-text-weight-semibold` | ตัวอักษรความหนาแบบ semi-bold |
| 5. |  `has-text-weight-bold` | ตัวอักษรเป็นตัวหนา |
    
