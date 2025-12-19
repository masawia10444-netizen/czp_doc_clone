# UI Guideline
ในการพัฒนา Mini App ในแอปฯ ทางรัฐ คุณสามารถใช้ Citizen Portal CSS Framework เพื่อให้รูปแบบการแสดงผล เป็นไปในทิศทางเดียวกัน และง่ายต่อการพัฒนา โดยสามารถติดตั้ง Code ดังต่อไปนี้ไว้ที่ Header ของไฟล์ HTML เพื่อเริ่มใช้ CSS Framework

```html
<meta name="viewport" content="width=device-width, initial-scale=1">
<link rel="stylesheet" href="https://czp.dga.or.th/cportal/sdk/css/v1/trunks.min.css"/>
<link rel="preconnect" href="https://fonts.gstatic.com">
<link href="https://fonts.googleapis.com/css2?family=Prompt:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500;1,600;1,700&display=swap" rel="stylesheet">    
<link href="https://fonts.googleapis.com/css?family=Material+Icons|Material+Icons+Round" rel="stylesheet">

``` 

โดย UI Guideline สามารถแบ่งออกเป็นรายการดังต่อไปนี้
* [Best Practices](/page/practices.md) : ตัวอย่างหน้าจอ และการจัดวางการแสดงผลในแต่ละรูปแบบของกิจกรรม
* [Columns](/page/columns.md) : การใช้งาน Columns เพื่อรองรับการจัด Layout ที่รองรับขนาดหน้าจอทุกรูปแบบ
* [Elements](/page/elements.md) : ชิ้นส่วนต่างๆ ที่สามารถนำไปใช้ในการออกแบบเช่น ปุ่ม, Table, Tag เป็นต้น
* [Components](/page/components.md) : เครื่องมือสำเร็จที่จะช่วยให้คุณทำงานง่ายขึ้น เช่น Message Box, Cards
* [Forms](/page/forms.md) : รูปแบบ Input ที่ใช้ในการทำ Form รับข้อมูล
* [Helpers](/page/helpers.md) : Modifier ที่จะช่วยให้ CSS Class ของคุณมีความหลากหลายมากขึ้น
* [Icon](/page/icon.md ) : วิธีการใช้งาน Icon