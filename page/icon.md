# Icon
ทางรัฐรองรับการใช้งานไอคอน โดยขอแนะนำให้ใช้งานไอคอนต่างๆจาก [Google font](https://fonts.google.com/icons?icon.query=warning) โดยรูปแบบไอคอนที่จะใช้จะเป็นแบบ round ซึ่งคุณสามารถระบุ icon ที่ต้องการภายใต้ class `icon` หรือหากต้องการเติมข้อความตามหลังไอคอน สามารถใช้ class `icon-text` ร่วมด้วยได้

<!-- panels:start -->
<!-- div:left-panel -->
```html
 <div class="field">
      <span class="icon">
        <span class="material-icons-round">home</span>
      </span>
    </div>
    <div class="field">
      <span class="icon-text">
        <span class="icon">
          <span class="material-icons-round">home</span>
        </span>
        <span>Home</span>
      </span>
    </div>
```
<!-- div:right-panel -->

<div style="border: 1px solid #eee; border-radius: 8px; overflow: hidden; margin: 1em 0;">
  <iframe src="../html/icons/icon.html" width="100%" height="300px" frameborder="0" style="background: white;"></iframe>
  <div style="background: #f5f5f5; padding: 5px 10px; font-size: 12px; color: #666; text-align: right;">
    <a href="../html/icons/icon.html" target="_blank" style="text-decoration: none; color: #00D69E;">เปิดหน้าต่างใหม่ ↗</a>
  </div>
</div>
<!-- panels:end -->

## Colors
หากคุณต้องการใส่สีให้กับ icon สามารถใช้ color helpers เช่น `has-text-info`, `has-text-success`, `has-text-warning` มาช่วยในการเปลี่ยนสี icon ต่างๆได้
<!-- panels:start -->
<!-- div:left-panel -->
```html
    <span class="icon has-text-info">
      <span class="material-icons-round">home</span>
    </span>
    <span class="icon has-text-success">
      <span class="material-icons-round">check_box</span>
    </span>
    <span class="icon has-text-warning">
      <span class="material-icons-round">warning</span>
    </span>
    <span class="icon has-text-danger">
      <span class="material-icons-round">block</span>
    </span>
    <br>
    <br>
    <div class="field">
      <span class="icon-text has-text-info">
        <span class="icon">
          <span class="material-icons-round">info</span>
        </span>
        <span>Info</span>
      </span>
    </div>
    <div class="field">
      <span class="icon-text has-text-success">
        <span class="icon">
          <span class="material-icons-round">check_box</span>
        </span>
        <span>Success</span>
      </span>
      <br>
    </div>
    <div class="field">
      <span class="icon-text has-text-warning">
        <span class="icon">
          <span class="material-icons-round">warning</span>
        </span>
        <span>Warning</span>
      </span>
      <br>
    </div>
    <div class="field">
      <span class="icon-text has-text-danger">
        <span class="icon">
          <span class="material-icons-round">block</span>
        </span>
        <span>Danger</span>
      </span>
    </div>
```
<!-- div:right-panel -->

<div style="border: 1px solid #eee; border-radius: 8px; overflow: hidden; margin: 1em 0;">
  <iframe src="../html/icons/color.html" width="100%" height="300px" frameborder="0" style="background: white;"></iframe>
  <div style="background: #f5f5f5; padding: 5px 10px; font-size: 12px; color: #666; text-align: right;">
    <a href="../html/icons/color.html" target="_blank" style="text-decoration: none; color: #00D69E;">เปิดหน้าต่างใหม่ ↗</a>
  </div>
</div>
<!-- panels:end -->

## Sizes
หากต้องการเพิ่มขนามของภาพ สามารถเติม class `is-size-1`, `is-size-2`, `is-size-3`, `is-size-4`, `is-size-5`, หรือ `is-size-6` เพื่อปรับขนาดตามที่ต้องการได้

<div style="border: 1px solid #eee; border-radius: 8px; overflow: hidden; margin: 1em 0;">
  <iframe src="../html/icons/size.html" width="100%" height="500px" frameborder="0" style="background: white;"></iframe>
  <div style="background: #f5f5f5; padding: 5px 10px; font-size: 12px; color: #666; text-align: right;">
    <a href="../html/icons/size.html" target="_blank" style="text-decoration: none; color: #00D69E;">เปิดหน้าต่างใหม่ ↗</a>
  </div>
</div>

