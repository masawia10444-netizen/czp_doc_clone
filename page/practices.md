# Best Practices
เพื่อให้การแสดงผลมีความใกล้เคียง และส่งมอบประสบการณ์ที่ดีให้กับผู้ใช้งานมากที่สุด ทางรัฐได้ออกแบบหน้าจอ และการแสดงผลที่จะช่วยให้การพัฒนาบริการของคุณสะดวกมากยิ่งขึ้น โดยมีหน้าดังต่อไปนี้


## Navigator
Mini App จะใส่ Navbar แบบไหนก็ได้ โดยจะรองรับ Navigator 4 แบบประกอบด้วย
- `Tabs Bar`  : ใช้ในกรณีที่มีการแยกหมวดหมู่ของข้อมูล แนะนำไม่เกิน 3 Tabs
- `Bottom Bar`  : เป็นเหมือนเมนู ในการเปลี่ยนหน้าต่างๆ แนะนำไม่เกิน 5 เมนู
- `Icon Navigator` : เป็นการเรียง Icon ที่หน้าจอ แถวละ 2 icons เหมาะสำหรับ Mini App ที่มี Module เยอะ และแต่ละ Module มีไม่เกิน 2 Levels
- `Floating Icon` : ไอคอนแบบลอย

### Top Bar
<!-- panels:start -->
<!-- div:left-panel -->
```html
    <nav class="navbar is-primary is-fixed-top">
      <div class="navbar-brand">
        <a class="navbar-item is-active">
          ยาของฉัน
        </a>
        <a class="navbar-item">
          ค้นหายา
        </a>
        <a class="navbar-item">
          สแกนคิวอาร์โค้ด
        </a>
      </div>
    </nav>
    
    <section class="section mt-4">
      Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
      standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a
      type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining
      essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum
      passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
    </section>
    
    <section class="section">
      Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
      standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a
      type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining
      essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum
      passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
    </section>
    
    <section class="section">
      Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
      standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a
      type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining
      essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum
      passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
    </section>
    
    <section class="section">
      Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
      standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a
      type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining
      essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum
      passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
    </section>
```
<!-- div:right-panel -->

<div style="border: 1px solid #eee; border-radius: 8px; overflow: hidden; margin: 1em 0;">
  <iframe src="../html/practices/nav" width="100%" height="300px" frameborder="0" style="background: white;"></iframe>
  <div style="background: #f5f5f5; padding: 5px 10px; font-size: 12px; color: #666; text-align: right;">
    <a href="../html/practices/nav" target="_blank" style="text-decoration: none; color: #00D69E;">เปิดหน้าต่างใหม่ ↗</a>
  </div>
</div>
<!-- panels:end -->


### Bottom bar
<!-- panels:start -->
<!-- div:left-panel -->
```html
    <nav class="navbar is-primary is-fixed-bottom">
      <div class="navbar-brand ">
        <a class="navbar-item is-active navbar-center">
          <span class="material-icons-round">
            qr_code
          </span>
        </a>
        <a class="navbar-item navbar-center">
          <span class="material-icons-round">
            bloodtype
          </span>
        </a>
        <a class="navbar-item navbar-center">
          <span class="material-icons-round">
            masks
          </span>
        </a>
        <a class="navbar-item navbar-center">
          <span class="material-icons-round">
            healing
          </span>
        </a>
        <a class="navbar-item navbar-center">
          <span class="material-icons-round">
            self_improvement
          </span>
        </a>
      </div>
    </nav>
    
    <section class="section">
      Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
      standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a
      type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining
      essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum
      passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
    </section>
    
    <section class="section">
      Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
      standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a
      type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining
      essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum
      passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
    </section>
    
    <section class="section">
      Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
      standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a
      type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining
      essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum
      passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
    </section>
    
    <section class="section mb-4">
      Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
      standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a
      type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining
      essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum
      passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
    </section>
```
<!-- div:right-panel -->

<div style="border: 1px solid #eee; border-radius: 8px; overflow: hidden; margin: 1em 0;">
  <iframe src="../html/practices/nav" width="100%" height="300px" frameborder="0" style="background: white;"></iframe>
  <div style="background: #f5f5f5; padding: 5px 10px; font-size: 12px; color: #666; text-align: right;">
    <a href="../html/practices/nav" target="_blank" style="text-decoration: none; color: #00D69E;">เปิดหน้าต่างใหม่ ↗</a>
  </div>
</div>
<!-- panels:end -->


### Icon Menu
<!-- panels:start -->
<!-- div:left-panel -->
```html
  <section class="columns has-text-centered mt-2">
      <div class="column is-half">
        <a class="button is-primary is-multiline is-medium">
          <span class="icon">
            <span class="material-icons-round is-size-1">
              self_improvement
            </span>
          </span>
          <span>Download</span>
        </a>
        <a class="button is-primary is-multiline is-medium">
          <span class="icon">
            <span class="material-icons-round is-size-1">
              self_improvement
            </span>
          </span>
          <span>Download</span>
        </a>
      </div>
    
      <div class="column is-half">
        <a class="button is-primary is-multiline is-medium">
          <span class="icon">
            <span class="material-icons-round is-size-1">
              self_improvement
            </span>
          </span>
          <span>Download</span>
        </a>
        <a class="button is-primary is-multiline is-medium">
          <span class="icon">
            <span class="material-icons-round is-size-1">
              self_improvement
            </span>
          </span>
          <span>Download</span>
        </a>
      </div>
    
      <div class="column is-half">
        <a class="button is-primary is-multiline is-medium">
          <span class="icon">
            <span class="material-icons-round is-size-1">
              self_improvement
            </span>
          </span>
          <span>Download</span>
        </a>
        <a class="button is-primary is-multiline is-medium">
          <span class="icon">
            <span class="material-icons-round is-size-1">
              self_improvement
            </span>
          </span>
          <span>Download</span>
        </a>
      </div>
    
      <div class="column is-half">
        <a class="button is-primary is-multiline is-medium">
          <span class="icon">
            <span class="material-icons-round is-size-1">
              self_improvement
            </span>
          </span>
          <span>Download</span>
        </a>
        <a class="button is-primary is-multiline is-medium">
          <span class="icon">
            <span class="material-icons-round is-size-1">
              self_improvement
            </span>
          </span>
          <span>Download</span>
        </a>
      </div>
    </section>
```
<!-- div:right-panel -->

<div style="border: 1px solid #eee; border-radius: 8px; overflow: hidden; margin: 1em 0;">
  <iframe src="../html/practices/nav" width="100%" height="300px" frameborder="0" style="background: white;"></iframe>
  <div style="background: #f5f5f5; padding: 5px 10px; font-size: 12px; color: #666; text-align: right;">
    <a href="../html/practices/nav" target="_blank" style="text-decoration: none; color: #00D69E;">เปิดหน้าต่างใหม่ ↗</a>
  </div>
</div>
<!-- panels:end -->


### Floating Menu
Floating menu รองรับเมนูสูงสุด 7 เมนู
<!-- panels:start -->
<!-- div:left-panel -->
```html

    <input id="triggerButton" class="triggerButton" type="checkbox" />
    <label for="triggerButton" class="button is-floating is-primary is-medium">
      <span class="material-icons-round">
        menu
      </span> </label>
    <div class="one ">
      <a href="https://www.google.com" >
        <span class="icon menu-icon">
          <span class="material-icons-round">
            search
          </span>
        </span>
        <span class="menu-label">
          <span class="tag  is-dark">Medium</span>
        </span>
      </a>
    </div>
    <div class="two ">
      <span class="icon menu-icon">
        <span class="material-icons-round">
          blender
        </span>
      </span>
      <div class="menu-label">
        <span class="tag  is-dark">Medium 2</span>
      </div>
    </div>
    <div class="three ">
      <span class="icon menu-icon">
        <span class="material-icons-round">
          light
        </span>
      </span>
      <div class="menu-label">
        <span class="tag  is-dark">Medium 3</span>
      </div>
    </div>

    <div class="four">
      <span class="icon menu-icon">
        <span class="material-icons-round">
          coffee_maker
        </span>
      </span>
      <div class="menu-label">
        <span class="tag  is-dark">Medium 4</span>
      </div>
    </div>

    <div class="five ">
      <span class="icon menu-icon">
        <span class="material-icons-round">
          biotech
        </span>
      </span>
      <div class="menu-label">
        <span class="tag  is-dark">Medium 5</span>
      </div>
    </div>

    <div class="six ">
      <span class="icon menu-icon">
        <span class="material-icons-round">
          podcasts
        </span>
      </span>
      <div class="menu-label">
        <span class="tag  is-dark">Medium 6</span>
      </div>
    </div>

    <div class="seven ">
      <span class="icon menu-icon">
        <span class="material-icons-round">
          science
        </span>
      </span>
      <div class="menu-label">
        <span class="tag  is-dark">Medium 7</span>
      </div>
    </div>
```
<!-- div:right-panel -->

<div style="border: 1px solid #eee; border-radius: 8px; overflow: hidden; margin: 1em 0;">
  <iframe src="../html/practices/nav" width="100%" height="300px" frameborder="0" style="background: white;"></iframe>
  <div style="background: #f5f5f5; padding: 5px 10px; font-size: 12px; color: #666; text-align: right;">
    <a href="../html/practices/nav" target="_blank" style="text-decoration: none; color: #00D69E;">เปิดหน้าต่างใหม่ ↗</a>
  </div>
</div>
<!-- panels:end -->



## Screen Message

### Loading
ในการเข้าหน้า Landing Page แนะนำให้ทำหน้า Loading และแสดงข้อความว่ากำลังเชื่อมต่อข้อมูลกับ บริการ หรือหน่วยงานเจ้าของข้อมูล เพื่อให้ผู้ใช้งานเข้าใจว่าระบบกำลังทำงานอยู่
<!-- panels:start -->
<!-- div:left-panel -->
```html
  <body class="container">
        <div class="screen-center">
            <div class="screen-loader">
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div><br>
            กำลังเชื่อมต่อข้อมูลใบสั่ง กับสำนักงานตำรวจแห่งชาติ
        </div>
    </body>
```
<!-- div:right-panel -->

<div style="border: 1px solid #eee; border-radius: 8px; overflow: hidden; margin: 1em 0;">
  <iframe src="../html/practices/screen" width="100%" height="300px" frameborder="0" style="background: white;"></iframe>
  <div style="background: #f5f5f5; padding: 5px 10px; font-size: 12px; color: #666; text-align: right;">
    <a href="../html/practices/screen" target="_blank" style="text-decoration: none; color: #00D69E;">เปิดหน้าต่างใหม่ ↗</a>
  </div>
</div>
<!-- panels:end -->

### Not found Message
ในกรณีที่ไม่พบข้อมูล เช่น ผู้ใช้ไม่มีข้อมูลในระบบประกันสังคม หรือไม่สามารถหาข้อมูล ตามที่ผู้ใช้ค้นหาได้
<!-- panels:start -->
<!-- div:left-panel -->
```html
    <div class="screen-center">
      <span class="icon has-text-warning">
        <span class="material-icons-round is-size-1">search</span>
      </span>
      <h6>ไม่พบข้อมูลของคุณ
      </h6>
      <span>คุณสามารถสอบถามข้อมูลเพิ่มเติมได้ที่ สายด่วนประกันสังคม 1506</span>
    </div>  
```
<!-- div:right-panel -->
  
<div style="border: 1px solid #eee; border-radius: 8px; overflow: hidden; margin: 1em 0;">
  <iframe src="../html/practices/screen" width="100%" height="300px" frameborder="0" style="background: white;"></iframe>
  <div style="background: #f5f5f5; padding: 5px 10px; font-size: 12px; color: #666; text-align: right;">
    <a href="../html/practices/screen" target="_blank" style="text-decoration: none; color: #00D69E;">เปิดหน้าต่างใหม่ ↗</a>
  </div>
</div>
<!-- panels:end -->

### Warning Message
การใช้ Warning Message จะใช้ในกรณีที่ มีคำเตือน หรือเกิดข้อผิดพลาดบางอย่าง ต้องการแจ้งให้ทราบ เช่นระบบกำลังจะปิดปรับปรุงในอนาคต
<!-- panels:start -->
<!-- div:left-panel -->
```html
<div class="screen-center">
      <span class="icon has-text-warning">
        <span class="material-icons-round is-size-1">warning</span>
      </span>
    
      <h6>ขออภัยในความไม่สะดวก</h6>
      <span>ระบบใบสั่งจะทำการปรับปรุงในเวลา </span>
      <br>
      <span>
        12:00 น. - 13:00 น. </span>
      <br>
      <span>กรุณาลองใหม่อีกครั้งภายหลัง</span>
</div> 
```
<!-- div:right-panel -->
  
<div style="border: 1px solid #eee; border-radius: 8px; overflow: hidden; margin: 1em 0;">
  <iframe src="../html/practices/screen" width="100%" height="300px" frameborder="0" style="background: white;"></iframe>
  <div style="background: #f5f5f5; padding: 5px 10px; font-size: 12px; color: #666; text-align: right;">
    <a href="../html/practices/screen" target="_blank" style="text-decoration: none; color: #00D69E;">เปิดหน้าต่างใหม่ ↗</a>
  </div>
</div>
<!-- panels:end -->

### Error Message
ในกรณีที่เกิดข้อผิดพลาด เช่น ไม่สามารถเข้าถึงข้อมูลจากหน่วยงานปลายทาง หรือเกิดข้อผิดพลาดในการดึงข้อมูล สามารถใช้การแสดงผลนี้ช่วยได้
<!-- panels:start -->
<!-- div:left-panel -->
```html
    <div class="screen-center">
      <span class="icon has-text-danger">
        <span class="material-icons-round is-size-1">error</span>
      </span>

      <h6>เกิดข้อผิดพลาด</h6>
      <span>ไม่สามารถเชื่อมต่อกับกรมการปกครองได้ กรุณาลองใหม่อีกครั้ง</span>
    </div>
```
<!-- div:right-panel -->
  
<div style="border: 1px solid #eee; border-radius: 8px; overflow: hidden; margin: 1em 0;">
  <iframe src="../html/practices/screen" width="100%" height="300px" frameborder="0" style="background: white;"></iframe>
  <div style="background: #f5f5f5; padding: 5px 10px; font-size: 12px; color: #666; text-align: right;">
    <a href="../html/practices/screen" target="_blank" style="text-decoration: none; color: #00D69E;">เปิดหน้าต่างใหม่ ↗</a>
  </div>
</div>
<!-- panels:end -->

### Out of services Message
หากอยู่นอกเวลาทำการ สามารถใช้ Out of services Message ในการแจ้งผู้ใช้งานได้
<!-- panels:start -->
<!-- div:left-panel -->
```html
<div class="screen-center">
      <span class="icon has-text-warning">
        <span class="material-icons-round is-size-1">watch_later</span>
      </span>
    
      <h6>ขณะนี้อยู่นอกเวลาทำการ</h6>
      <span>กรุณาลองใหม่อีกครั้ง ในเวลา 7.00 น. - 19.00 น.</span>
    </div>
```
<!-- div:right-panel -->
  
<div style="border: 1px solid #eee; border-radius: 8px; overflow: hidden; margin: 1em 0;">
  <iframe src="../html/practices/screen" width="100%" height="300px" frameborder="0" style="background: white;"></iframe>
  <div style="background: #f5f5f5; padding: 5px 10px; font-size: 12px; color: #666; text-align: right;">
    <a href="../html/practices/screen" target="_blank" style="text-decoration: none; color: #00D69E;">เปิดหน้าต่างใหม่ ↗</a>
  </div>
</div>
<!-- panels:end -->

## Maintenance Announcement
ในกรณีที่ต้องการแจ้งเตือน หากต้องการปิดปรับปรุงบริการ สามารถทำได้ใน 2 รูปแบบคือ
- ปิดปรับปรุงทั้ง Mini App
- ปิดปรับปรุง แค่บางหน้า หรือบาง Module

### Full Service Maintenance  
ในกรณีปิดบริการทั้ง Mini App แนะนำให้แสดงผลด้วย Screen Message แบบเต็มหน้าจอ เหมือนอยู่นอกเวลาทำการ หลังจากผ่านหน้า Landing
<!-- panels:start -->
<!-- div:left-panel -->
```html
<div class="screen-center">
    <span class="icon has-text-warning">
      <span class="material-icons-round is-size-1">watch_later</span>
    </span>

    <h6>ระบบอยู่ระหว่างการปรับปรุง</h6>
    <span>ขออภัย ขณะนี้ระบบกำลังอยู่ในระหว่างการปรับปรุง กรุณาลองใหม่อีกครั้งเวลา 15.00 น.</span>
  </div>
```
<!-- div:right-panel -->

<div style="border: 1px solid #eee; border-radius: 8px; overflow: hidden; margin: 1em 0;">
  <iframe src="../html/practices/annonce" width="100%" height="300px" frameborder="0" style="background: white;"></iframe>
  <div style="background: #f5f5f5; padding: 5px 10px; font-size: 12px; color: #666; text-align: right;">
    <a href="../html/practices/annonce" target="_blank" style="text-decoration: none; color: #00D69E;">เปิดหน้าต่างใหม่ ↗</a>
  </div>
</div>
<!-- panels:end -->

### Partial Maintenance
กรณีปิดบริการแค่บาง Module หรือบางหน้า แนะนำให้ แสดงผลด้วย Screen Message แบบเต็มหน้าจอ เฉพาะหน้านั้นๆ หรือใช้ Notification Bar แปะด้านบนสุด เพื่อให้เห็นข้อความในทุกๆ หน้า
<!-- panels:start -->
<!-- div:left-panel -->
```html
<div class="notification is-warning">
      <button class="delete"></button>
      ระบบใบสั่งจะปิดปรับปรุงการชำระเงินในวันที่ 20 กันยายน 2563 เวลา 22:00 น. - 06:00 น.  โดยช่วงเวลาดังกล่าว คุณจะไม่สามารถชำระเงินได้ กรุณาใช้บริการอีกครั้งภายหลัง
    </div>
```
<!-- div:right-panel -->

<div style="border: 1px solid #eee; border-radius: 8px; overflow: hidden; margin: 1em 0;">
  <iframe src="../html/practices/annonce" width="100%" height="300px" frameborder="0" style="background: white;"></iframe>
  <div style="background: #f5f5f5; padding: 5px 10px; font-size: 12px; color: #666; text-align: right;">
    <a href="../html/practices/annonce" target="_blank" style="text-decoration: none; color: #00D69E;">เปิดหน้าต่างใหม่ ↗</a>
  </div>
</div>
<!-- panels:end -->

## Display Empty Data
การแสดงข้อความ ในกรณีไม่มีข้อมูลที่ได้รับข้อมูลจาก API หรือจาก SDK มา และพบว่าข้อมูลดังกล่าวเป็น `ค่าว่าง`, `null`, หรือ `NaN` ขอแนะนำให้ทำการแปลความหมายของข้อมูลเช่น ไม่ระบุ, ไม่มีข้อมูล, ไม่มีวันหมดอายุ เป็นต้น ยกเว้นข้อมูลประเภท ที่อยู่, เบอร์โทรศัพท์, และอีเมล ที่สามารถใส่ `-` ได้

## Display Static Content
ในการแสดงผลข้อมูลที่เป็น Static Content ที่ไม่ได้อยู่ในรูปแบบฟอร์ม ควรจัดกลุ่มข้อมูล ที่เป็นเรื่องเดียวกันอยู่ด้วยกัน และสามารถแสดงผลได้ 2 แบบตามความเหมาะสม
* แสดงข้อมูลแบบการ์ด
* แสดงข้อมูลผ่าน Table

### Card Display
การแสดงข้อมูลในรูปแบบการ์ด จะวาง Label ด้านบน และข้อมูลด้านล่าง
<!-- panels:start -->
<!-- div:left-panel -->
```html
 <div class="container">
        <div class="card mt-2">
          <header class="card-header">
            <p class="card-header-title">
              ข้อมูลเบื้องต้น
            </p>
          </header>
          <div class="card-content">
            <div class="content">
              <div class="field bar">
                <label class="label">ชื่อ</label>
                <div class="control">
                  น.ส. ทดสอบ นามสกุลดี
                </div>
              </div>
              <div class="field bar">
                <label class="label">เลขประจำตัวประชาชน</label>
                <div class="control">
                  1-1011-00001-xx-x
                </div>
              </div>             

              <div class="field bar">
                <label class="label">วันเกิด</label>
                <div class="control">
                  10 มกราคม 2532 (อายุ 31 ปี)
                </div>
              </div>

              <div class="field bar">
                <label class="label">สัญชาติ</label>
                <div class="control">
                  ไทย
                </div>
              </div>

              <div class="field bar">
                <label class="label">เพศ</label>
                <div class="control">
                  หญิง
                </div>
              </div>

            </div>
          </div>
        </div>

        <div class="card mt-2">
          <header class="card-header">
            <p class="card-header-title">
              ข้อมูลบิดา
            </p>
          </header>
          <div class="card-content">
            <div class="content">
              <div class="field bar">
                <label class="label">ชื่อ</label>
                <div class="control">
                  จารุศรี
                </div>
              </div>
              <div class="field bar">
                <label class="label">เลขประจำตัวประชาชน</label>
                <div class="control">
                  3-1011-00001-xx-x
                </div>
              </div>             

              <div class="field bar">
                <label class="label">สัญชาติ</label>
                <div class="control">
                  ไทย
                </div>
              </div>

            </div>
          </div>
        </div>

        <div class="card mt-2">
          <header class="card-header">
            <p class="card-header-title">
              ข้อมูลมารดา
            </p>
          </header>
          <div class="card-content">
            <div class="content">
              <div class="field bar">
                <label class="label">ชื่อ</label>
                <div class="control">
                  จารุวรรณ
                </div>
              </div>
              <div class="field bar">
                <label class="label">เลขประจำตัวประชาชน</label>
                <div class="control">
                  3-2011-00001-xx-x
                </div>
              </div>             

              <div class="field bar">
                <label class="label">สัญชาติ</label>
                <div class="control">
                  ไทย
                </div>
              </div>

            </div>
          </div>
        </div>

        <div class="card mt-2">
          <header class="card-header">
            <p class="card-header-title">
              ข้อมูลทะเบียนบ้าน
            </p>
          </header>
          <div class="card-content">
            <div class="content">
              <div class="field bar">
                <label class="label">รหัสประจำบ้าน</label>
                <div class="control">
                  1024-032453-6
                </div>
              </div>
              <div class="field bar">
                <label class="label">ที่อยู่</label>
                <div class="control">
                  132 ประชาอุทิศ 19 บางมด เขตทุ่งครุ กรุงเทพมหานคร
                </div>
              </div>             

              <div class="field bar">
                <label class="label">สถานภาพเจ้าบ้าน</label>
                <div class="control">
                  ผู้อาศัย
                </div>
              </div>

              
              <div class="field bar">
                <label class="label">วันที่ย้ายเข้า</label>
                <div class="control">
                  30 พฤศจิกายน 2532
                </div>
              </div>

              <div class="field bar">
                <label class="label">ข้อมูลภูมิลำเนา</label>
                <div class="control">
                  บุคคลนี้มีภูมิลำเนาอยู่ในบ้านนี้
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
```
<!-- div:right-panel -->

<div style="border: 1px solid #eee; border-radius: 8px; overflow: hidden; margin: 1em 0;">
  <iframe src="../html/practices/display" width="100%" height="300px" frameborder="0" style="background: white;"></iframe>
  <div style="background: #f5f5f5; padding: 5px 10px; font-size: 12px; color: #666; text-align: right;">
    <a href="../html/practices/display" target="_blank" style="text-decoration: none; color: #00D69E;">เปิดหน้าต่างใหม่ ↗</a>
  </div>
</div>
<!-- panels:end -->

### Table Display
การแสดงข้อมูลในรูปแบบตาราง จะวาง Label ไว้ที่ Column ซ้าย และข้อมูลไว้ที่ Column ขวา โดยมีการระบุ Alternative Color Row  เพื่อช่วยนำสายตา
<!-- panels:start -->
<!-- div:left-panel -->
```html
  <body>
    <div class="table-container">
      <table class="table is-bordered is-striped  is-hoverable is-fullwidth">
        <tbody>
          <tr>
            <th style="width:120px"><label>เลขที่ใบสั่ง:</label></th>
            <td>02123412xx</td>
          </tr>
          <tr>
            <th><label>วันที่ออกใบสั่ง:</label></th>
            <td>07 มกราคม 2563 09:00 น.</td>
          </tr>
          <tr>
            <th><label>ชื่อ:</label></th>
            <td>นายทดสอบ นามสกุลดี</td>
          </tr>
          <tr>
            <th><label>ทะเบียนรถ:</label></th>
            <td>บบ XXXX ตรัง</td>
          </tr>
          <tr>
            <th><label>สถานที่เกิดเหตุ:</label></th>
            <td>ถนนทางหลวงหมายเลข 41 กิโลเมตรที่ 214 ต.ควนศรี อ.บ้านนาสาร จ.สุราษฎ์ธานี</td>
          </tr>
          <tr>
            <th><label>ออกใบสั่งโดย:</label></th>
            <td>ภจว. ตรัง</td>
          </tr>
          <tr>
            <th><label>สถานะ:</label></th>
            <td>ยังไม่ชำระค่าปรับ</td>
          </tr>
        </tbody>
      </table>
    </div>
  </body>
```
<!-- div:right-panel -->

<div style="border: 1px solid #eee; border-radius: 8px; overflow: hidden; margin: 1em 0;">
  <iframe src="../html/practices/display" width="100%" height="300px" frameborder="0" style="background: white;"></iframe>
  <div style="background: #f5f5f5; padding: 5px 10px; font-size: 12px; color: #666; text-align: right;">
    <a href="../html/practices/display" target="_blank" style="text-decoration: none; color: #00D69E;">เปิดหน้าต่างใหม่ ↗</a>
  </div>
</div>
<!-- panels:end -->

## PDF Preview
ในการแสดงผล PDF แนะนำให้เลือกใช้ Component ในการแสดงผล และปิดไม่ให้สามารถ Download PDF ได้ผ่าน PDF Viewer ของ Web Browser เนื่องจากหากใช้ PDF Viewer จะมีการเปิดใช้งานความสามารถในการดาวน์โหลดโดยอัตโนมัติ ซึ่งในปัจจุบันในการดาวน์โหลด PDF จำเป็นต้องพัฒนาเพิ่ม โดยใช้งาน SDK [Save File to device](/page/javascripts?id=_7-save-file-to-device) หรือ [Save File with name](/page/javascripts?id=_8-save-file-with-name)

## Confirmation Box
ในการทำ Confirmation Box สามารถใช้ Component Modal Message ช่วยในการพัฒนาได้ โดยการวางปุ่ม ให้วางปุ่มตกลง หรือปุ่มถัดไป ไว้ทางด้านขวา และปุ่มยกเลิก หรือ Cancel ไว้ทางด้านซ้าย
<!-- panels:start -->
<!-- div:left-panel -->
```html
    <label class="button is-primary is-fullwidth" for="modal-one">ยื่นคำร้อง</label>
    <input class="modal-open" id="modal-one" type="checkbox" hidden>
    <div class="modal">
      <div class="modal-background"></div>
      <div class="modal-card p-4">
        <header class="modal-card-head">
          <p class="modal-card-title">ยืนยันข้อมูล</p>
          <label class="delete" for="modal-one"></label>
        </header>
        <section class="modal-card-body">
          คุณต้องการยืนคำร้อง เพื่อใช้งานใช่หรือไม่
        </section>
        <footer class="modal-card-foot">
          <label class="button" for="modal-one">ยกเลิก</label>
          <button class="button is-success">บันทึก</button>

        </footer>
      </div>
    </div>
```
<!-- div:right-panel -->

<div style="border: 1px solid #eee; border-radius: 8px; overflow: hidden; margin: 1em 0;">
  <iframe src="../html/practices/confirm" width="100%" height="300px" frameborder="0" style="background: white;"></iframe>
  <div style="background: #f5f5f5; padding: 5px 10px; font-size: 12px; color: #666; text-align: right;">
    <a href="../html/practices/confirm" target="_blank" style="text-decoration: none; color: #00D69E;">เปิดหน้าต่างใหม่ ↗</a>
  </div>
</div>
<!-- panels:end -->
## Sample Screen
### List
การแสดงผลแบบ List แนะนำให้แสดงข้อมูลในรูปแบบการ์ด โดยมีการเรียงความสำคัญของข้อมูลตามความเหมาะสม
<!-- panels:start -->
<!-- div:left-panel -->
```html
 <body class="container">
    <div class="card mt-4">
      <header class="card-header">
        <p class="card-header-title">
          ใบสั่งวันที่ 18 มกราคม 2564
        </p>
      </header>
      <div class="card-content">
        <div class="content">
          <div class="field bar">
            <label class="label">ทะเบียน</label>
            <div class="control">
              2 กก กรุงเทพมหานคร
            </div>
          </div>
          <div class="field bar">
            <label class="label">จำนวนค่าปรับ</label>
            <div class="control">
              500 บาท
            </div>
          </div>
          <div class="field bar">
            <label class="label">สถานที่เกิดเหตุ</label>
            <div class="control">
              ถนนทางหลวงหมายเลข 41 กิโลเมตรที่ 214 แขวงควนศรี อ.บ้านนาสาร สุราษฎร์ธานี
            </div>
          </div>
          <span class="has-text-danger is-italic is-size-7	"
            >* กรุณาชำระค่าปรับภายในวันที่ 5 มีนาคม 2564</span
          >
        </div>
      </div>
      <footer class="card-footer">
        <a class="button is-primary is-medium is-fullwidth">ดูรายละเอียด</a>
      </footer>
    </div>

    <div class="card mt-4">
      <header class="card-header">
        <p class="card-header-title">
          ใบสั่งวันที่ 18 มกราคม 2564
        </p>
      </header>
      <div class="card-content">
        <div class="content">
          <div class="field bar">
            <label class="label">ทะเบียน</label>
            <div class="control">
              2 กก กรุงเทพมหานคร
            </div>
          </div>
          <div class="field bar">
            <label class="label">จำนวนค่าปรับ</label>
            <div class="control">
              500 บาท
            </div>
          </div>
          <div class="field bar">
            <label class="label">สถานที่เกิดเหตุ</label>
            <div class="control">
              ถนนทางหลวงหมายเลข 41 กิโลเมตรที่ 214 แขวงควนศรี อ.บ้านนาสาร สุราษฎร์ธานี
            </div>
          </div>
          <span class="has-text-danger is-italic is-size-7	"
            >* กรุณาชำระค่าปรับภายในวันที่ 5 มีนาคม 2564</span
          >
        </div>
      </div>
      <footer class="card-footer">
        <a class="button is-primary is-medium is-fullwidth">ดูรายละเอียด</a>
      </footer>
    </div>

    <div class="card mt-4">
      <header class="card-header">
        <p class="card-header-title">
          ใบสั่งวันที่ 18 มกราคม 2564
        </p>
      </header>
      <div class="card-content">
        <div class="content">
          <div class="field bar">
            <label class="label">ทะเบียน</label>
            <div class="control">
              2 กก กรุงเทพมหานคร
            </div>
          </div>
          <div class="field bar">
            <label class="label">จำนวนค่าปรับ</label>
            <div class="control">
              500 บาท
            </div>
          </div>
          <div class="field bar">
            <label class="label">สถานที่เกิดเหตุ</label>
            <div class="control">
              ถนนทางหลวงหมายเลข 41 กิโลเมตรที่ 214 แขวงควนศรี อ.บ้านนาสาร สุราษฎร์ธานี
            </div>
          </div>
          <span class="has-text-danger is-italic is-size-7	"
            >* กรุณาชำระค่าปรับภายในวันที่ 5 มีนาคม 2564</span
          >
        </div>
      </div>
      <footer class="card-footer">
        <a class="button is-primary is-medium is-fullwidth">ดูรายละเอียด</a>
      </footer>
    </div>
  </body>
```
<!-- div:right-panel -->

<div style="border: 1px solid #eee; border-radius: 8px; overflow: hidden; margin: 1em 0;">
  <iframe src="../html/practices/page" width="100%" height="300px" frameborder="0" style="background: white;"></iframe>
  <div style="background: #f5f5f5; padding: 5px 10px; font-size: 12px; color: #666; text-align: right;">
    <a href="../html/practices/page" target="_blank" style="text-decoration: none; color: #00D69E;">เปิดหน้าต่างใหม่ ↗</a>
  </div>
</div>
<!-- panels:end -->

### Detail
การแสดงผลหน้ารายละเอียด จะเน้นการแสดงผลข้อมูลโดยจัด Label ไว้ด้านซ้าย และเนื้อหาไว้ด้านขวา
<!-- panels:start -->
<!-- div:left-panel -->
```html
  <div class="container">
        <div class="card mt-2">
          <header class="card-header">
            <p class="card-header-title">
              ข้อมูลเบื้องต้น
            </p>
          </header>
          <div class="card-content">
            <div class="content">
              <div class="field bar">
                <label class="label">ชื่อ</label>
                <div class="control">
                  น.ส. ทดสอบ นามสกุลดี
                </div>
              </div>
              <div class="field bar">
                <label class="label">เลขประจำตัวประชาชน</label>
                <div class="control">
                  1-1011-00001-xx-x
                </div>
              </div>             

              <div class="field bar">
                <label class="label">วันเกิด</label>
                <div class="control">
                  10 มกราคม 2532 (อายุ 31 ปี)
                </div>
              </div>

              <div class="field bar">
                <label class="label">สัญชาติ</label>
                <div class="control">
                  ไทย
                </div>
              </div>

              <div class="field bar">
                <label class="label">เพศ</label>
                <div class="control">
                  หญิง
                </div>
              </div>

            </div>
          </div>
        </div>

        <div class="card mt-2">
          <header class="card-header">
            <p class="card-header-title">
              ข้อมูลบิดา
            </p>
          </header>
          <div class="card-content">
            <div class="content">
              <div class="field bar">
                <label class="label">ชื่อ</label>
                <div class="control">
                  จารุศรี
                </div>
              </div>
              <div class="field bar">
                <label class="label">เลขประจำตัวประชาชน</label>
                <div class="control">
                  3-1011-00001-xx-x
                </div>
              </div>             

              <div class="field bar">
                <label class="label">สัญชาติ</label>
                <div class="control">
                  ไทย
                </div>
              </div>

            </div>
          </div>
        </div>

        <div class="card mt-2">
          <header class="card-header">
            <p class="card-header-title">
              ข้อมูลมารดา
            </p>
          </header>
          <div class="card-content">
            <div class="content">
              <div class="field bar">
                <label class="label">ชื่อ</label>
                <div class="control">
                  จารุวรรณ
                </div>
              </div>
              <div class="field bar">
                <label class="label">เลขประจำตัวประชาชน</label>
                <div class="control">
                  3-2011-00001-xx-x
                </div>
              </div>             

              <div class="field bar">
                <label class="label">สัญชาติ</label>
                <div class="control">
                  ไทย
                </div>
              </div>

            </div>
          </div>
        </div>

        <div class="card mt-2">
          <header class="card-header">
            <p class="card-header-title">
              ข้อมูลทะเบียนบ้าน
            </p>
          </header>
          <div class="card-content">
            <div class="content">
              <div class="field bar">
                <label class="label">รหัสประจำบ้าน</label>
                <div class="control">
                  1024-032453-6
                </div>
              </div>
              <div class="field bar">
                <label class="label">ที่อยู่</label>
                <div class="control">
                  132 ประชาอุทิศ 19 บางมด เขตทุ่งครุ กรุงเทพมหานคร
                </div>
              </div>             

              <div class="field bar">
                <label class="label">สถานภาพเจ้าบ้าน</label>
                <div class="control">
                  ผู้อาศัย
                </div>
              </div>
              
              <div class="field bar">
                <label class="label">วันที่ย้ายเข้า</label>
                <div class="control">
                  30 พฤศจิกายน 2532
                </div>
              </div>

              <div class="field bar">
                <label class="label">ข้อมูลภูมิลำเนา</label>
                <div class="control">
                  บุคคลนี้มีภูมิลำเนาอยู่ในบ้านนี้
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
```
<!-- div:right-panel -->

<div style="border: 1px solid #eee; border-radius: 8px; overflow: hidden; margin: 1em 0;">
  <iframe src="../html/practices/page" width="100%" height="300px" frameborder="0" style="background: white;"></iframe>
  <div style="background: #f5f5f5; padding: 5px 10px; font-size: 12px; color: #666; text-align: right;">
    <a href="../html/practices/page" target="_blank" style="text-decoration: none; color: #00D69E;">เปิดหน้าต่างใหม่ ↗</a>
  </div>
</div>
<!-- panels:end -->

## Taboo
-  ไม่แนะนำให้มี โฆษณา การประกาศวันสำคัญ ก่อนเข้า Mini App เพราะทำให้ Flow การใช้งานของผู้ใช้ติดขัด

