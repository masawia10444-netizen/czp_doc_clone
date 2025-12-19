# Component

## Card
Card สามารถช่วยให้การแสดงผล เป็นสัดส่วน และจัดกลุ่มข้อมูลต่างๆให้อ่านได้ง่ายมากขึ้น โดย Card จะประกอบไปด้วยส่วนต่างๆดังนี้
 * `card` คือ container หลัก
    * `card-header` ส่วน header ของ card
        * `card-header-title` แสดง title ของการ์ด จะแสดงผลชิดซ้าย และเป็นตัวหนา
        * `card-header-icon` พื้นที่สำหรับแสดง icon ต่างๆทางด้านขวา
    * `card-image` แสดงผลรูปภาพ รองรับการแสดงแบบ responsive
    * `card-content` สามาถรแสดงข้อมูลสำคัญต่างๆบริเวณนี้
    * `card-footer` รองรับการแสดง footer มักใช้ใส่ปุ่มต่างๆ
        * `card-footer-item` ช่วยแบ่ง item ใน footer เป็นขนาดเท่าๆกัน

<!-- panels:start -->
<!-- div:left-panel -->
```html
    <div class="card">
      <header class="card-header">
        <p class="card-header-title">
          Card header
        </p>
        <button class="card-header-icon" aria-label="more options">
          <span class="icon">
            <span class="material-icons-round">
              expand_more
            </span>
          </span>
        </button>
      </header>
    
      <div class="card-image">
        <figure class="image is-4by3">
          <img
            src="https://images.unsplash.com/photo-1587899576587-766a2afea5c6?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fHVuaWNvcm58ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
            alt="Placeholder image">
        </figure>
      </div>
      <div class="card-content">
        <div class="content">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Phasellus nec iaculis mauris. <a>@bulmaio</a>.
          <a href="#">#css</a> <a href="#">#responsive</a>
          <br>
          <time datetime="2016-1-1">11:09 PM - 1 Jan 2016</time>
        </div>
      </div>
      <footer class="card-footer">
        <a href="#" class="card-footer-item">Save</a>
        <a href="#" class="card-footer-item">Edit</a>
        <a href="#" class="card-footer-item">Delete</a>
      </footer>
    </div>
```
<!-- div:right-panel -->
  
<div style="border: 1px solid #eee; border-radius: 8px; overflow: hidden; margin: 1em 0;">
  <iframe src="../html/components/card.html" width="100%" height="300px" frameborder="0" style="background: white;"></iframe>
  <div style="background: #f5f5f5; padding: 5px 10px; font-size: 12px; color: #666; text-align: right;">
    <a href="../html/components/card.html" target="_blank" style="text-decoration: none; color: #00D69E;">เปิดหน้าต่างใหม่ ↗</a>
  </div>
</div>
<!-- panels:end -->


## Modal
You can place trigger button wherever you want.

<!-- panels:start -->
<!-- div:left-panel -->
```html
    <div class="section">
      <h1 class="is-size-4">Click to show popup</h1>
      <br>
      <label class="button" for="modal-one">Popup</label>
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
          <footer class="modal-card-foot has-text-right">
            <label class="button" for="modal-one">ยกเลิก</label>
            <button class="button is-success">บันทึก</button>
    
          </footer>
        </div>
      </div>
    </div>
```
<!-- div:right-panel -->
  
<div style="border: 1px solid #eee; border-radius: 8px; overflow: hidden; margin: 1em 0;">
  <iframe src="../html/components/modal.html" width="100%" height="300px" frameborder="0" style="background: white;"></iframe>
  <div style="background: #f5f5f5; padding: 5px 10px; font-size: 12px; color: #666; text-align: right;">
    <a href="../html/components/modal.html" target="_blank" style="text-decoration: none; color: #00D69E;">เปิดหน้าต่างใหม่ ↗</a>
  </div>
</div>
<!-- panels:end -->



## Tabs
หากต้องการการแสดงผลด้วย Tabs สามารถทำได้ดังนี้

<!-- panels:start -->
<!-- div:left-panel -->
```html
    <div  class="tabs-with-content">
      <div class="tabs is-toggle is-fullwidth">
        <ul>
          <li><a>Pictures</a></li>
          <li><a>Music</a></li>
          <li><a>Videos</a></li>
        </ul>
      </div>
      <div>
        <section class="tab-content">Pictures content</section>
        <section class="tab-content">Music content</section>
        <section class="tab-content">Videos content</section>
      </div>
    </div>
```
โดยในการแสดงผล Tabs นั้นจำเป็นจะต้องติดตั้ง Javascript เพิ่มด้วย

```js
 <script type="text/javascript">
      let tabsWithContent = (function () {
        let tabs = document.querySelectorAll('.tabs li');
        let tabsContent = document.querySelectorAll('.tab-content');

        let deactvateAllTabs = function () {
          tabs.forEach(function (tab) {
            tab.classList.remove('is-active');
          });
        };

        let hideTabsContent = function () {
          tabsContent.forEach(function (tabContent) {
            tabContent.classList.remove('is-active');
          });
        };

        let activateTabsContent = function (tab) {
          tabsContent[getIndex(tab)].classList.add('is-active');
        };

        let getIndex = function (el) {
          return [...el.parentElement.children].indexOf(el);
        };

        tabs.forEach(function (tab) {
          tab.addEventListener('click', function () {
            deactvateAllTabs();
            hideTabsContent();
            tab.classList.add('is-active');
            activateTabsContent(tab);
          });
        })

        tabs[0].click();
      })();

    </script>
```
<!-- div:right-panel -->
  
<div style="border: 1px solid #eee; border-radius: 8px; overflow: hidden; margin: 1em 0;">
  <iframe src="../html/components/tabs.html" width="100%" height="300px" frameborder="0" style="background: white;"></iframe>
  <div style="background: #f5f5f5; padding: 5px 10px; font-size: 12px; color: #666; text-align: right;">
    <a href="../html/components/tabs.html" target="_blank" style="text-decoration: none; color: #00D69E;">เปิดหน้าต่างใหม่ ↗</a>
  </div>
</div>
<!-- panels:end -->
