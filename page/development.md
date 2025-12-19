# เครื่องมือในการพัฒนา
ในกระบวนการพัฒนาบริการ (Mini App) เพื่อติดตั้งในแอปพลิเคชันทางรัฐจะต้องถูกพัฒนาขึ้นด้วย Web Application และติดตั้งขึ้นไปยัง Server ของหน่วยงานเอง โดยแอปพลิเคชันทางรัฐได้มีการออกแบบวิธีการเข้าถึงข้อมูลให้มีความปลอดภัย และกำหนดแนวทางในการพัฒนา เพื่อให้รูปแบบของแต่ละบริการ ให้มีหน้าตาใกล้เคียงและสอดคล้องกัน โดยสามารถเริ่มต้นพัฒนาได้ตามขั้นตอนต่อไปนี้

### Installation
1. คุณสามารถติดตั้ง Code ดังต่อไปนี้ไว้ที่ Header ของไฟล์ HTML เพื่อใช้หน้าตาของบริการ (Theme) อยู่ในรูปแบบเดียวกันในแอปพลิเคชันทางรัฐ   
==* Citizen portal CSS framework ทำการ fork มาจาก [Bulma](https://bulma.io/) ซึ่งคุณสามารถศึกษา Component อื่นๆเพิ่มเติมได้ที่ [Bulma](https://bulma.io/)==

```html
<meta name="viewport" content="width=device-width, initial-scale=1">
<link rel="stylesheet" href="https://czp.dga.or.th/cportal/sdk/css/v1/trunks.min.css"/>
<link rel="preconnect" href="https://fonts.gstatic.com">
<link href="https://fonts.googleapis.com/css2?family=Prompt:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500;1,600;1,700&display=swap" rel="stylesheet">    
<link href="https://fonts.googleapis.com/css?family=Material+Icons|Material+Icons+Round" rel="stylesheet">
```
<br>2. ติดตั้ง [Javascript SDK](/page/javascripts.md "Javascript SDK") เพื่อเข้าถึงตัวช่วยในการติดต่ออุปกรณ์ต่างๆ และการเข้าถึงข้อมูล Token ที่เกี่ยวข้อง

```html
 <script src="https://czp.dga.or.th/cportal/sdk/iu/v3/sdk.js"></script>  
```  
<br>3. ทางรัฐมีการเปิด API ที่ช่วยให้พัฒนาบริการได้สะดวกยิ่งขึ้น ([Postman](/page/postman.md "Postman")) โดยปัจจุบันรองรับการเรียก API ดังต่อไปนี้
  * [Authentication](/page/authentication.md "Authentication"): วิธียืนยันตัวก่อนเรียก API 
  * [Access Sensitive data](/page/sensitivedata.md "Access Sensitive data"): วิธีเข้าถึงข้อมูลส่วนบุคคล
  * [Notification](/page/notification.md "Notification"): การใช้งาน Notification Service
  * [Virtual Card](/page/virtualcard.md "Virtual Card"): การสร้างคิวอาร์โค้ด ใน Virtual Card