# Elements


## Block
Block คือเครื่องมือใช้แสดงผลการเว้นวรรคอย่างง่าย เพื่อให้เนื้อหาและข้อความดูสวยงามมากขึ้นได้ โดยการเพิ่มคำว่า `block` ใน class ของ `<div>`

<!-- panels:start -->
<!-- div:left-panel -->
```html
    <section class="section">
      <div class="block">
        This text is within a <strong>block</strong>.
      </div>
      <div class="block">
        This text is within a <strong>second block</strong>. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
        efficitur sit amet massa fringilla egestas. Nullam condimentum luctus turpis.
      </div>
      <div class="block">
        This text is within a <strong>third block</strong>. This block has no margin at the bottom.
      </div>
    
      <div>
        This text is <em>not</em> within a <strong>block</strong>.
      </div>
      <div>
        This text <em>isn't</em> within a <strong>block</strong> either. Lorem ipsum dolor sit amet, consectetur adipiscing
        elit. Aenean efficitur sit amet massa fringilla egestas. Nullam condimentum luctus turpis.
      </div>
      <div>
        This text is also <em>not</em> within a <strong>block</strong>.
      </div>
    
    </section>
```
<!-- div:right-panel -->

<div style="border: 1px solid #eee; border-radius: 8px; overflow: hidden; margin: 1em 0;">
  <iframe src="../html/elements/block/basic.html" width="100%" height="300px" frameborder="0" style="background: white;"></iframe>
  <div style="background: #f5f5f5; padding: 5px 10px; font-size: 12px; color: #666; text-align: right;">
    <a href="../html/elements/block/basic.html" target="_blank" style="text-decoration: none; color: #00D69E;">เปิดหน้าต่างใหม่ ↗</a>
  </div>
</div>
<!-- panels:end -->

## Box
เครื่องมือที่่มีลักษณะเป็น Container สามารถใส่เนื้อหาที่ข้อความหรือรูปได้ พร้อมกับแสดงผลด้วยเงาและพื้นหลังสีขาว 

<!-- panels:start -->
<!-- div:left-panel -->
```html
  <section class="section">
    <div class="box">
      I'm in a box.
    </div>

    <form class="box">
      <div class="field">
        <label class="label">Email</label>
        <div class="control">
          <input class="input" type="email" placeholder="e.g. alex@example.com">
        </div>
      </div>

      <div class="field">
        <label class="label">Password</label>
        <div class="control">
          <input class="input" type="password" placeholder="********">
        </div>
      </div>

      <button class="button is-primary">Sign in</button>
    </form>
  </section>
```
<!-- div:right-panel -->

<div style="border: 1px solid #eee; border-radius: 8px; overflow: hidden; margin: 1em 0;">
  <iframe src="../html/elements/box/basic.html" width="100%" height="300px" frameborder="0" style="background: white;"></iframe>
  <div style="background: #f5f5f5; padding: 5px 10px; font-size: 12px; color: #666; text-align: right;">
    <a href="../html/elements/box/basic.html" target="_blank" style="text-decoration: none; color: #00D69E;">เปิดหน้าต่างใหม่ ↗</a>
  </div>
</div>
<!-- panels:end -->



## Button
Button คือเครื่องมือที่่ใช้ตอบโต้กับผู้ใช้บ่อยที่สุด สามารถนำไปใช้งานได้หลากหลายรูปแบบ ควบคุมการทำงานด้วยคำสั่ง รวมทั้งปรับแต่งได้หลายสีและหลายขนาด

<!-- panels:start -->
<!-- div:left-panel -->
```html
   <section class="section">
    <div class="buttons">
      <button class="button">Button</button>
    </div>
    <div class="buttons">
      <a class="button">Anchor</a>
    </div>
    <div class="buttons">
      <button class="button">Button</button>
    </div>
    <div class="buttons">
      <input class="button" type="submit" value="Submit input">
    </div>
    <div class="buttons">
      <input class="button" type="reset" value="Reset input">
    </div>
  </section>
```
<!-- div:right-panel -->

<div style="border: 1px solid #eee; border-radius: 8px; overflow: hidden; margin: 1em 0;">
  <iframe src="../html/elements/button/basic.html" width="100%" height="300px" frameborder="0" style="background: white;"></iframe>
  <div style="background: #f5f5f5; padding: 5px 10px; font-size: 12px; color: #666; text-align: right;">
    <a href="../html/elements/button/basic.html" target="_blank" style="text-decoration: none; color: #00D69E;">เปิดหน้าต่างใหม่ ↗</a>
  </div>
</div>
<!-- panels:end -->


### Colors
Button สามารถปรับแต่งสีได้หลายแบบ โดยการเพิ่ม `is-` ตามด้วยชื่อของสีใน class ของแท็ก `<button>`

<!-- panels:start -->
<!-- div:left-panel -->
```html
  <section class="section">
    <div class="buttons">
      <button class="button is-white">White</button>
      <button class="button is-light">Light</button>
      <button class="button is-dark">Dark</button>
      <button class="button is-black">Black</button>
      <button class="button is-text">Text</button>
      <button class="button is-ghost">Ghost</button>
    </div>
    <div class="buttons">
      <button class="button is-primary">Primary</button>
      <button class="button is-link">Link</button>
    </div>
    <div class="buttons">
      <button class="button is-info">Info</button>
      <button class="button is-success">Success</button>
      <button class="button is-warning">Warning</button>
      <button class="button is-danger">Danger</button>
    </div>
    <div class="buttons">
      <button class="button is-primary is-light">Primary</button>
      <button class="button is-link is-light">Link</button>
    </div>
  
    <div class="buttons">
      <button class="button is-info is-light">Info</button>
      <button class="button is-success is-light">Success</button>
      <button class="button is-warning is-light">Warning</button>
      <button class="button is-danger is-light">Danger</button>
    </div>
  </section>
```
<!-- div:right-panel -->

<div style="border: 1px solid #eee; border-radius: 8px; overflow: hidden; margin: 1em 0;">
  <iframe src="../html/elements/button/color.html" width="100%" height="300px" frameborder="0" style="background: white;"></iframe>
  <div style="background: #f5f5f5; padding: 5px 10px; font-size: 12px; color: #666; text-align: right;">
    <a href="../html/elements/button/color.html" target="_blank" style="text-decoration: none; color: #00D69E;">เปิดหน้าต่างใหม่ ↗</a>
  </div>
</div>
<!-- panels:end -->


### Sizes
ฺButton สามารถปรับขนาดได้ 4 แบบ โดยค่าเริ่มต้นจะเป็นขนาดปกติ และสามารถปรับขนาดได้โดยการเพิ่ม `is-` ตามด้วยชื่อขนาด `small` `medium` และ `large` ใน class ของแท็ก `<button>`


<!-- panels:start -->
<!-- div:left-panel -->
```html
  <section class="section">
    <div class="buttons">
      <button class="button is-small">Small</button>
      <button class="button">Default</button>
      <button class="button is-normal">Normal</button>
      <button class="button is-medium">Medium</button>
      <button class="button is-large">Large</button>
    </div>
  </section>
```
<!-- div:right-panel -->

<div style="border: 1px solid #eee; border-radius: 8px; overflow: hidden; margin: 1em 0;">
  <iframe src="../html/elements/button/size.html" width="100%" height="300px" frameborder="0" style="background: white;"></iframe>
  <div style="background: #f5f5f5; padding: 5px 10px; font-size: 12px; color: #666; text-align: right;">
    <a href="../html/elements/button/size.html" target="_blank" style="text-decoration: none; color: #00D69E;">เปิดหน้าต่างใหม่ ↗</a>
  </div>
</div>
<!-- panels:end -->


### Displays
<!-- panels:start -->
<!-- div:left-panel -->
```html
  <section class="section">
    <div class="buttons">
      <button class="button is-small is-fullwidth">Small</button>
      <button class="button is-fullwidth">Normal</button>
      <button class="button is-medium is-fullwidth">Medium</button>
      <button class="button is-large is-fullwidth">Large</button>
    </div>
  </section>
```
<!-- div:right-panel -->

<div style="border: 1px solid #eee; border-radius: 8px; overflow: hidden; margin: 1em 0;">
  <iframe src="../html/elements/button/display.html" width="100%" height="300px" frameborder="0" style="background: white;"></iframe>
  <div style="background: #f5f5f5; padding: 5px 10px; font-size: 12px; color: #666; text-align: right;">
    <a href="../html/elements/button/display.html" target="_blank" style="text-decoration: none; color: #00D69E;">เปิดหน้าต่างใหม่ ↗</a>
  </div>
</div>
<!-- panels:end -->


### Styles
<!-- panels:start -->
<!-- div:left-panel -->
```html
  <section class="section">
    <h4 class="is-size-4">Outlined</h4>
    <div class="buttons">
      <button class="button is-outlined">Outlined</button>
      <button class="button is-primary is-outlined">Outlined</button>
      <button class="button is-link is-outlined">Outlined</button>
      <button class="button is-info is-outlined">Outlined</button>
      <button class="button is-success is-outlined">Outlined</button>
      <button class="button is-danger is-outlined">Outlined</button>
    </div>
  
    <h4 class="is-size-4">Inverted </h4>
    <div class="buttons">
      <button class="button is-primary is-inverted">Inverted</button>
      <button class="button is-link is-inverted">Inverted</button>
      <button class="button is-info is-inverted">Inverted</button>
      <button class="button is-success is-inverted">Inverted</button>
      <button class="button is-danger is-inverted">Inverted</button>
    </div>
  
    <h4 class="is-size-4">Invert Outlined </h4>
    <div class="buttons">
      <button class="button is-primary is-inverted is-outlined">Invert Outlined</button>
      <button class="button is-link is-inverted is-outlined">Invert Outlined</button>
      <button class="button is-info is-inverted is-outlined">Invert Outlined</button>
      <button class="button is-success is-inverted is-outlined">Invert Outlined</button>
      <button class="button is-danger is-inverted is-outlined">Invert Outlined</button>
    </div>
  
    <h4 class="is-size-4">Rounded buttons </h4>
    <div class="buttons">
      <button class="button is-rounded">Rounded</button>
      <button class="button is-primary is-rounded">Rounded</button>
      <button class="button is-link is-rounded">Rounded</button>
      <button class="button is-info is-rounded">Rounded</button>
      <button class="button is-success is-rounded">Rounded</button>
      <button class="button is-danger is-rounded">Rounded</button>
    </div>
  </section>
```
<!-- div:right-panel -->

<div style="border: 1px solid #eee; border-radius: 8px; overflow: hidden; margin: 1em 0;">
  <iframe src="../html/elements/button/styles.html" width="100%" height="300px" frameborder="0" style="background: white;"></iframe>
  <div style="background: #f5f5f5; padding: 5px 10px; font-size: 12px; color: #666; text-align: right;">
    <a href="../html/elements/button/styles.html" target="_blank" style="text-decoration: none; color: #00D69E;">เปิดหน้าต่างใหม่ ↗</a>
  </div>
</div>
<!-- panels:end -->

### Disabled
หากต้องการปิดการใช้งานของ Button สามารถเพิ่มคำว่า `disabled` ในแท็ก `<button>`


<!-- panels:start -->
<!-- div:left-panel -->
```html
  <section class="section">
    <div class="buttons">
      <button class="button" title="Disabled button" disabled>Disabled</button>
      <button class="button is-primary" title="Disabled button" disabled>Disabled</button>
      <button class="button is-link" title="Disabled button" disabled>Disabled</button>
      <button class="button is-info" title="Disabled button" disabled>Disabled</button>
      <button class="button is-success" title="Disabled button" disabled>Disabled</button>
      <button class="button is-warning" title="Disabled button" disabled>Disabled</button>
      <button class="button is-danger" title="Disabled button" disabled>Disabled</button>
    </div>
  </section>
```
<!-- div:right-panel -->

<div style="border: 1px solid #eee; border-radius: 8px; overflow: hidden; margin: 1em 0;">
  <iframe src="../html/elements/button/disabled.html" width="100%" height="300px" frameborder="0" style="background: white;"></iframe>
  <div style="background: #f5f5f5; padding: 5px 10px; font-size: 12px; color: #666; text-align: right;">
    <a href="../html/elements/button/disabled.html" target="_blank" style="text-decoration: none; color: #00D69E;">เปิดหน้าต่างใหม่ ↗</a>
  </div>
</div>
<!-- panels:end -->

### Icon
ฺButton สามารถปรับแต่งเพิ่ม icon เพื่อให้แสดงผลได้สวยงามขึ้นได้ด้วย Font Awesome โดยการเพิ่มชื่อ icon ใน class ของแท็ก `<i>` ที่อยู่ภายในแท็ก `<span>`

<!-- panels:start -->
<!-- div:left-panel -->
```html
  <section class="section">
    <div class="buttons">
      <p class="buttons">
        <button class="button">
          <span class="icon ">
            <span class="material-icons-round">
              format_bold
            </span>
          </span>
        </button>
        <button class="button">
          <span class="icon ">
            <span class="material-icons-round">
              format_italic
            </span>
          </span>
        </button>
        <button class="button">
          <span class="icon ">
            <span class="material-icons-round">
              format_underlined
            </span>
          </span>
        </button>
  
        <button class="button">
          <span class="icon">
            <span class="material-icons-round">
              sim_card_alert
            </span>
            <i class="fab fa-github"></i>
          </span>
          <span>Documents</span>
        </button>
      </p>
    </div>
  </section>
```
<!-- div:right-panel -->

<div style="border: 1px solid #eee; border-radius: 8px; overflow: hidden; margin: 1em 0;">
  <iframe src="../html/elements/button/icon.html" width="100%" height="300px" frameborder="0" style="background: white;"></iframe>
  <div style="background: #f5f5f5; padding: 5px 10px; font-size: 12px; color: #666; text-align: right;">
    <a href="../html/elements/button/icon.html" target="_blank" style="text-decoration: none; color: #00D69E;">เปิดหน้าต่างใหม่ ↗</a>
  </div>
</div>
<!-- panels:end -->


### Loading
คุณสามารถสร้างรูปภาพเคลื่อนไหว Loading ใน Button ได้โดยการเพิ่มคำว่า `is-loading` ใน class ของแท็ก `<button>` โดยไม่จำเป็นต้องลบข้อความออก


<!-- panels:start -->
<!-- div:left-panel -->
```html
  <section class="section">
    <div class="buttons">
      <button class="button is-loading">Loading</button>
      <button class="button is-primary is-loading">Loading</button>
      <button class="button is-link is-loading">Loading</button>
      <button class="button is-info is-loading">Loading</button>
      <button class="button is-success is-loading">Loading</button>
      <button class="button is-warning is-loading">Loading</button>
      <button class="button is-danger is-loading">Loading</button>
    </div>
  </section>
```
<!-- div:right-panel -->

<div style="border: 1px solid #eee; border-radius: 8px; overflow: hidden; margin: 1em 0;">
  <iframe src="../html/elements/button/loading.html" width="100%" height="300px" frameborder="0" style="background: white;"></iframe>
  <div style="background: #f5f5f5; padding: 5px 10px; font-size: 12px; color: #666; text-align: right;">
    <a href="../html/elements/button/loading.html" target="_blank" style="text-decoration: none; color: #00D69E;">เปิดหน้าต่างใหม่ ↗</a>
  </div>
</div>
<!-- panels:end -->

## Delete
คุณสามารถเปลี่ยน Button เป็นปุ่ม Delete ได้ง่ายๆโดยการเพิ่มคำว่า `delete` ใน class ของแท็ก `<button>`

<!-- panels:start -->
<!-- div:left-panel -->
```html
<button class="delete"></button>
```
<!-- div:right-panel -->

<div style="border: 1px solid #eee; border-radius: 8px; overflow: hidden; margin: 1em 0;">
  <iframe src="../html/elements/delete/basic.html" width="100%" height="300px" frameborder="0" style="background: white;"></iframe>
  <div style="background: #f5f5f5; padding: 5px 10px; font-size: 12px; color: #666; text-align: right;">
    <a href="../html/elements/delete/basic.html" target="_blank" style="text-decoration: none; color: #00D69E;">เปิดหน้าต่างใหม่ ↗</a>
  </div>
</div>
<!-- panels:end -->


### Sizes
Button ปุ่ม Delete สามารถปรับขนาดได้ 4 แบบ โดยค่าเริ่มต้นจะเป็นขนาดปกติ และสามารถปรับขนาดได้โดยการเพิ่ม `is-` ตามด้วยชื่อขนาด `small` `medium` และ `large` ใน class ของแท็ก `<button>`
<!-- panels:start -->
<!-- div:left-panel -->
```html
<button class="delete is-small"></button>
<button class="delete"></button>
<button class="delete is-medium"></button>
<button class="delete is-large"></button>
```
<!-- div:right-panel -->

<div style="border: 1px solid #eee; border-radius: 8px; overflow: hidden; margin: 1em 0;">
  <iframe src="../html/elements/delete/size.html" width="100%" height="300px" frameborder="0" style="background: white;"></iframe>
  <div style="background: #f5f5f5; padding: 5px 10px; font-size: 12px; color: #666; text-align: right;">
    <a href="../html/elements/delete/size.html" target="_blank" style="text-decoration: none; color: #00D69E;">เปิดหน้าต่างใหม่ ↗</a>
  </div>
</div>
<!-- panels:end -->


### Use with block
สามารถใช้งานปุ่ม Delete ร่วมกับ Block ได้และสามารถปรับขนาดได้ 4 แบบ โดยค่าเริ่มต้นจะเป็นขนาดปกติ และสามารถปรับขนาดได้โดยการเพิ่ม `is-` ตามด้วยชื่อขนาด `small` `medium` และ `large` ใน class ของแท็ก `<button>`
<!-- panels:start -->
<!-- div:left-panel -->
```html
<div class="block">
  <span class="tag is-success">
    Hello World
    <button class="delete is-small"></button>
  </span>
</div>

<div class="notification is-danger">
  <button class="delete"></button>
  Lorem ipsum dolor sit amet, consectetur adipiscing elit lorem ipsum dolor sit amet, consectetur adipiscing elit
</div>

<article class="message is-info">
  <div class="message-header">
    Info
    <button class="delete"></button>
  </div>
  <div class="message-body">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque risus mi, tempus quis placerat ut, porta nec nulla. Vestibulum rhoncus ac ex sit amet fringilla. Nullam gravida purus diam, et dictum felis venenatis efficitur. Aenean ac eleifend lacus, in mollis lectus. Donec sodales, arcu et sollicitudin porttitor, tortor urna tempor ligula, id porttitor mi magna a neque. Donec dui urna, vehicula et sem eget, facilisis sodales sem.
  </div>
</article>
```
<!-- div:right-panel -->

<div style="border: 1px solid #eee; border-radius: 8px; overflow: hidden; margin: 1em 0;">
  <iframe src="../html/elements/delete/block.html" width="100%" height="300px" frameborder="0" style="background: white;"></iframe>
  <div style="background: #f5f5f5; padding: 5px 10px; font-size: 12px; color: #666; text-align: right;">
    <a href="../html/elements/delete/block.html" target="_blank" style="text-decoration: none; color: #00D69E;">เปิดหน้าต่างใหม่ ↗</a>
  </div>
</div>
<!-- panels:end -->



## Image
Because images can take a few seconds to load (or not at all), use the `image` container to specify a precisely sized container so that your layout isn't broken because of image loading or image errors.

<!-- panels:start -->
<!-- div:left-panel -->
```html
<figure class="image is-128x128">
  <img src="https://bulma.io/images/placeholders/128x128.png">
</figure>
```
<!-- div:right-panel -->

<div style="border: 1px solid #eee; border-radius: 8px; overflow: hidden; margin: 1em 0;">
  <iframe src="../html/elements/image/basic.html" width="100%" height="300px" frameborder="0" style="background: white;"></iframe>
  <div style="background: #f5f5f5; padding: 5px 10px; font-size: 12px; color: #666; text-align: right;">
    <a href="../html/elements/image/basic.html" target="_blank" style="text-decoration: none; color: #00D69E;">เปิดหน้าต่างใหม่ ↗</a>
  </div>
</div>
<!-- panels:end -->


<div style="border: 1px solid #eee; border-radius: 8px; overflow: hidden; margin: 1em 0;">
  <iframe src="../html/elements/image/fixed.html" width="100%" height="500px" frameborder="0" style="background: white;"></iframe>
  <div style="background: #f5f5f5; padding: 5px 10px; font-size: 12px; color: #666; text-align: right;">
    <a href="../html/elements/image/fixed.html" target="_blank" style="text-decoration: none; color: #00D69E;">เปิดหน้าต่างใหม่ ↗</a>
  </div>
</div>
### Rounded images
คุณสามารถสร้างรูปภาพที่แสดงผลแบบวงกลมได้ โดยการเพิ่ม `is-rounded` ใน class ของแท็ก `<img>`


<!-- panels:start -->
<!-- div:left-panel -->
```html
<figure class="image is-128x128">
  <img class="is-rounded" src="https://bulma.io/images/placeholders/128x128.png">
</figure>
```
<!-- div:right-panel -->

<div style="border: 1px solid #eee; border-radius: 8px; overflow: hidden; margin: 1em 0;">
  <iframe src="../html/elements/image/rounded.html" width="100%" height="300px" frameborder="0" style="background: white;"></iframe>
  <div style="background: #f5f5f5; padding: 5px 10px; font-size: 12px; color: #666; text-align: right;">
    <a href="../html/elements/image/rounded.html" target="_blank" style="text-decoration: none; color: #00D69E;">เปิดหน้าต่างใหม่ ↗</a>
  </div>
</div>
<!-- panels:end -->

### Retina images
Because the image is fixed in size, you can use an image that is four times as big. So for example, in a `128x128` container, you can use a `256x256` image, but resized to `128x128` pixels.

<!-- panels:start -->
<!-- div:left-panel -->
```html
<figure class="image is-128x128">
  <img src="https://bulma.io/images/placeholders/256x256.png">
</figure>
```
<!-- div:right-panel -->

<div style="border: 1px solid #eee; border-radius: 8px; overflow: hidden; margin: 1em 0;">
  <iframe src="../html/elements/image/retina.html" width="100%" height="300px" frameborder="0" style="background: white;"></iframe>
  <div style="background: #f5f5f5; padding: 5px 10px; font-size: 12px; color: #666; text-align: right;">
    <a href="../html/elements/image/retina.html" target="_blank" style="text-decoration: none; color: #00D69E;">เปิดหน้าต่างใหม่ ↗</a>
  </div>
</div>
<!-- panels:end -->


## Table
คุณสามารถสร้างตารางให้สวยงามได้ โดยใช้ CSS เป็นองค์ประกอบของแท็ก <table> ด้วยโครงสร้างต่อไปนี้: 

 * `<table class="table">` as the main container
  * `thead` the optional top part of the table
  * `tfoot` the optional bottom part of the table
  * `tbody` the main content of the table
    * `tr` each table row
      * `th` a table cell heading
      * `td` a table cell
You can set a table row as selected by appending the `is-selected` modifier on a `<tr>`


<!-- panels:start -->
<!-- div:left-panel -->
```html
    <div class="table-container">
      <table class="table is-bordered is-striped  is-hoverable is-fullwidth">
        <thead>
          <tr>
            <th><abbr title="Position">Pos</abbr></th>
            <th>Team</th>
            <th><abbr title="Played">Pld</abbr></th>
            <th><abbr title="Won">W</abbr></th>
            <th><abbr title="Drawn">D</abbr></th>
            <th><abbr title="Lost">L</abbr></th>
            <th><abbr title="Goals for">GF</abbr></th>
            <th><abbr title="Goals against">GA</abbr></th>
            <th><abbr title="Goal difference">GD</abbr></th>
            <th><abbr title="Points">Pts</abbr></th>
          </tr>
        </thead>
        <tfoot>
          <tr>
            <th><abbr title="Position">Pos</abbr></th>
            <th>Team</th>
            <th><abbr title="Played">Pld</abbr></th>
            <th><abbr title="Won">W</abbr></th>
            <th><abbr title="Drawn">D</abbr></th>
            <th><abbr title="Lost">L</abbr></th>
            <th><abbr title="Goals for">GF</abbr></th>
            <th><abbr title="Goals against">GA</abbr></th>
            <th><abbr title="Goal difference">GD</abbr></th>
            <th><abbr title="Points">Pts</abbr></th>
          </tr>
        </tfoot>
        <tbody>
          <tr>
            <th>1</th>
            <td>Leicester City</td>
            <td>38</td>
            <td>23</td>
            <td>12</td>
            <td>3</td>
            <td>68</td>
            <td>36</td>
            <td>+32</td>
            <td>81</td>
          </tr>
          <tr>
            <th>2</th>
            <td>Arsenal</td>
            <td>38</td>
            <td>20</td>
            <td>11</td>
            <td>7</td>
            <td>65</td>
            <td>36</td>
            <td>+29</td>
            <td>71</td>
          </tr>
          <tr>
            <th>3</th>
            <td>Tottenham Hotspur</td>
            <td>38</td>
            <td>19</td>
            <td>13</td>
            <td>6</td>
            <td>69</td>
            <td>35</td>
            <td>+34</td>
            <td>70</td>
          </tr>
          <tr class="is-selected">
            <th>4</th>
            <td>Manchester City</td>
            <td>38</td>
            <td>19</td>
            <td>9</td>
            <td>10</td>
            <td>71</td>
            <td>41</td>
            <td>+30</td>
            <td>66</td>
          </tr>
          <tr>
            <th>5</th>
            <td>Manchester United</td>
            <td>38</td>
            <td>19</td>
            <td>9</td>
            <td>10</td>
            <td>49</td>
            <td>35</td>
            <td>+14</td>
            <td>66</td>
          </tr>
        </tbody>
      </table>
    </div>
```
<!-- div:right-panel -->

<div style="border: 1px solid #eee; border-radius: 8px; overflow: hidden; margin: 1em 0;">
  <iframe src="../html/elements/table/basic.html" width="100%" height="300px" frameborder="0" style="background: white;"></iframe>
  <div style="background: #f5f5f5; padding: 5px 10px; font-size: 12px; color: #666; text-align: right;">
    <a href="../html/elements/table/basic.html" target="_blank" style="text-decoration: none; color: #00D69E;">เปิดหน้าต่างใหม่ ↗</a>
  </div>
</div>
<!-- panels:end -->


## Tags
Tags เป็นเครื่องมือคล้าย Box ขนาดเล็ก ใช้งานร่วมกับเครื่องมืออื่นๆได้หลากหลายและมีประโยชน์ ง่ายต่อการแสดงตัวเลขหรือสัญลักษณ์ โดยค่าเริ่มต้น Tag จะมีความสูงอยู่ที่ 1.5rem

<!-- panels:start -->
<!-- div:left-panel -->
```html
<span class="tag">
  Tag label
</span>

```
<!-- div:right-panel -->

<div style="border: 1px solid #eee; border-radius: 8px; overflow: hidden; margin: 1em 0;">
  <iframe src="../html/elements/tag/basic.html" width="100%" height="300px" frameborder="0" style="background: white;"></iframe>
  <div style="background: #f5f5f5; padding: 5px 10px; font-size: 12px; color: #666; text-align: right;">
    <a href="../html/elements/tag/basic.html" target="_blank" style="text-decoration: none; color: #00D69E;">เปิดหน้าต่างใหม่ ↗</a>
  </div>
</div>
<!-- panels:end -->

### Colors
Tags สามารถปรับแต่งสีได้หลายแบบ โดยการเพิ่ม `is-` ตามด้วยชื่อของสีใน class ของแท็ก `<span>`

<!-- panels:start -->
<!-- div:left-panel -->
```html
  <section class="section">
    <div class="tags">
      <span class="tag is-black">Black</span>
      <span class="tag is-dark">Dark</span>
      <span class="tag is-light">Light</span>
      <span class="tag is-white">White</span>
      <span class="tag is-primary">Primary</span>
      <span class="tag is-link">Link</span>
      <span class="tag is-info">Info</span>
      <span class="tag is-success">Success</span>
      <span class="tag is-warning">Warning</span>
      <span class="tag is-danger">Danger</span>
  
      <span class="tag is-primary is-light">Primary</span>
      <span class="tag is-link is-light">Link</span>
      <span class="tag is-info is-light">Info</span>
      <span class="tag is-success is-light">Success</span>
      <span class="tag is-warning is-light">Warning</span>
      <span class="tag is-danger is-light">Danger</span>
    </div>
  </section>

```
<!-- div:right-panel -->

<div style="border: 1px solid #eee; border-radius: 8px; overflow: hidden; margin: 1em 0;">
  <iframe src="../html/elements/tag/color.html" width="100%" height="300px" frameborder="0" style="background: white;"></iframe>
  <div style="background: #f5f5f5; padding: 5px 10px; font-size: 12px; color: #666; text-align: right;">
    <a href="../html/elements/tag/color.html" target="_blank" style="text-decoration: none; color: #00D69E;">เปิดหน้าต่างใหม่ ↗</a>
  </div>
</div>
<!-- panels:end -->

### Sizes
Tags สามารถปรับขนาด 3 แบบโดยค่าเริ่มต้นจะเป็นขนาดปกติ และสามารถปรับขนาดได้โดยการเพิ่ม `is-medium` และ `is-large` ใน class ของแท็ก `<span>`

<!-- panels:start -->
<!-- div:left-panel -->
```html
  <section class="section">
    <span class="tag is-link is-normal">Normal</span>
    <span class="tag is-primary is-medium">Medium</span>
    <span class="tag is-info is-large">Large</span>
  </section>
```
<!-- div:right-panel -->

<div style="border: 1px solid #eee; border-radius: 8px; overflow: hidden; margin: 1em 0;">
  <iframe src="../html/elements/tag/size.html" width="100%" height="300px" frameborder="0" style="background: white;"></iframe>
  <div style="background: #f5f5f5; padding: 5px 10px; font-size: 12px; color: #666; text-align: right;">
    <a href="../html/elements/tag/size.html" target="_blank" style="text-decoration: none; color: #00D69E;">เปิดหน้าต่างใหม่ ↗</a>
  </div>
</div>
<!-- panels:end -->


## Title and Subtitle
สามารถสร้างข้อความและเนื้อหาของเพจให้มีมิติและสวยงามมากขึ้นได้ด้วย class `title` และ `subtitle`


<!-- panels:start -->
<!-- div:left-panel -->
```html
<h1 class="title">Title</h1>
<h2 class="subtitle">Subtitle</h2>
```
<!-- div:right-panel -->

<div style="border: 1px solid #eee; border-radius: 8px; overflow: hidden; margin: 1em 0;">
  <iframe src="../html/elements/title/basic.html" width="100%" height="300px" frameborder="0" style="background: white;"></iframe>
  <div style="background: #f5f5f5; padding: 5px 10px; font-size: 12px; color: #666; text-align: right;">
    <a href="../html/elements/title/basic.html" target="_blank" style="text-decoration: none; color: #00D69E;">เปิดหน้าต่างใหม่ ↗</a>
  </div>
</div>
<!-- panels:end -->

### Sizes
สามารถปรับขนาดได้หลายขนาด โดยค่าเริ่มต้นจะเป็นขนาดปกติ และสามารถปรับขนาดได้โดยการเพิ่ม `is-` ตามด้วยตัวเลข
<!-- panels:start -->
<!-- div:left-panel -->
```html
<h1 class="title is-1">Title 1</h1>
<h2 class="title is-2">Title 2</h2>
<h3 class="title is-3">Title 3</h3>
<h4 class="title is-4">Title 4</h4>
<h5 class="title is-5">Title 5</h5>
<h6 class="title is-6">Title 6</h6>

<h1 class="subtitle is-1">Subtitle 1</h1>
<h2 class="subtitle is-2">Subtitle 2</h2>
<h3 class="subtitle is-3">Subtitle 3</h3>
<h4 class="subtitle is-4">Subtitle 4</h4>
<h5 class="subtitle is-5">Subtitle 5</h5>
<h6 class="subtitle is-6">Subtitle 6</h6>
```
<!-- div:right-panel -->

<div style="border: 1px solid #eee; border-radius: 8px; overflow: hidden; margin: 1em 0;">
  <iframe src="../html/elements/title/size.html" width="100%" height="300px" frameborder="0" style="background: white;"></iframe>
  <div style="background: #f5f5f5; padding: 5px 10px; font-size: 12px; color: #666; text-align: right;">
    <a href="../html/elements/title/size.html" target="_blank" style="text-decoration: none; color: #00D69E;">เปิดหน้าต่างใหม่ ↗</a>
  </div>
</div>
<!-- panels:end -->

### Title with space
เมื่อใช้การแสดงผลด้วย Title และ Subtitle แนะนำให้ใช้ขนาดที่แตกต่างกัน โดยให้ขนาดห่างกัน 2 ขนาด ยกตัวอย่างเช่น Title เลือกใช้ขนาด `is-1` และ SubTitle ใช้ขนาด `is-3`

<!-- panels:start -->
<!-- div:left-panel -->
```html
<p class="title is-1">Title 1</p>
<p class="subtitle is-3">Subtitle 3</p>

<p class="title is-2">Title 2</p>
<p class="subtitle is-4">Subtitle 4</p>

<p class="title is-3">Title 3</p>
<p class="subtitle is-5">Subtitle 5</p>

```
<!-- div:right-panel -->

<div style="border: 1px solid #eee; border-radius: 8px; overflow: hidden; margin: 1em 0;">
  <iframe src="../html/elements/title/combine.html" width="100%" height="300px" frameborder="0" style="background: white;"></iframe>
  <div style="background: #f5f5f5; padding: 5px 10px; font-size: 12px; color: #666; text-align: right;">
    <a href="../html/elements/title/combine.html" target="_blank" style="text-decoration: none; color: #00D69E;">เปิดหน้าต่างใหม่ ↗</a>
  </div>
</div>
<!-- panels:end -->

