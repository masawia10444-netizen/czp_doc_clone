# Columns

## Layout
แนวทางการพัฒนา Miniapp ในทางรัฐ จะรองรับการใช้ columns layout ผ่านการระบุ class `columns` เป็นเสมือน container และ `column` เป็นกล่องที่อยู่ภายใน ซึ่งสามารถระบุได้มากเท่าที่ต้องการ


<div style="border: 1px solid #eee; border-radius: 8px; overflow: hidden; margin: 1em 0;">
  <iframe src="../html/columns/layout.html" width="100%" height="300px" frameborder="0" style="background: white;"></iframe>
  <div style="background: #f5f5f5; padding: 5px 10px; font-size: 12px; color: #666; text-align: right;">
    <a href="../html/columns/layout.html" target="_blank" style="text-decoration: none; color: #00D69E;">เปิดหน้าต่างใหม่ ↗</a>
  </div>
</div>

```html
<div class="columns">
      <div class="column">
        <p class="has-background-success-light is-size-4 has-text-centered p-3">First column</p>
      </div>
      <div class="column">
        <p class="has-background-success-light is-size-4 has-text-centered p-3">Second column</p>
      </div>
      <div class="column">
        <p class="has-background-success-light is-size-4 has-text-centered p-3">Third column</p>
      </div>
      <div class="column">
        <p class="has-background-success-light is-size-4 has-text-centered p-3">Fourth column</p>
      </div>
    </div>
```

## Sizes
เนื่องจากการใช้ Column สามารถระบุขนาดที่แตกต่างกันไป โดยสามารถปรับใช้ได้ตามความเหมาะสม


<div style="border: 1px solid #eee; border-radius: 8px; overflow: hidden; margin: 1em 0;">
  <iframe src="../html/columns/size.html" width="100%" height="600px" frameborder="0" style="background: white;"></iframe>
  <div style="background: #f5f5f5; padding: 5px 10px; font-size: 12px; color: #666; text-align: right;">
    <a href="../html/columns/size.html" target="_blank" style="text-decoration: none; color: #00D69E;">เปิดหน้าต่างใหม่ ↗</a>
  </div>
</div>

```html
    <div class="columns">
      <div class="column is-four-fifths"><p class="has-background-success-light is-size-6 has-text-centered p-3">is-four-fifths</p></div>      
      <div class="column"><p class="has-background-success-light is-size-6 has-text-centered p-3">Auto</p></div>
      <div class="column"><p class="has-background-success-light is-size-6 has-text-centered p-3">Auto</p></div>
    </div>
    
    <div class="columns">
      <div class="column is-three-quarters"><p class="has-background-success-light is-size-6 has-text-centered p-3">is-three-quarters</p></div>      
      <div class="column"><p class="has-background-success-light is-size-6 has-text-centered p-3">Auto</p></div>
      <div class="column"><p class="has-background-success-light is-size-6 has-text-centered p-3">Auto</p></div>
    </div>
    
    <div class="columns">
      <div class="column is-two-thirds"><p class="has-background-success-light is-size-6 has-text-centered p-3">is-two-thirds</p></div>      
      <div class="column"><p class="has-background-success-light is-size-6 has-text-centered p-3">Auto</p></div>
      <div class="column"><p class="has-background-success-light is-size-6 has-text-centered p-3">Auto</p></div>
    </div>
    
    <div class="columns">
      <div class="column is-three-fifths"><p class="has-background-success-light is-size-6 has-text-centered p-3">is-three-fifths</p></div>      
      <div class="column"><p class="has-background-success-light is-size-6 has-text-centered p-3">Auto</p></div>
      <div class="column"><p class="has-background-success-light is-size-6 has-text-centered p-3">Auto</p></div>
    </div>
    
    <div class="columns">
      <div class="column is-half"><p class="has-background-success-light is-size-6 has-text-centered p-3">is-half</p></div>      
      <div class="column"><p class="has-background-success-light is-size-6 has-text-centered p-3">Auto</p></div>
      <div class="column"><p class="has-background-success-light is-size-6 has-text-centered p-3">Auto</p></div>
    </div>
    
    <div class="columns">
      <div class="column is-two-fifths"><p class="has-background-success-light is-size-6 has-text-centered p-3">is-two-fifths</p></div>      
      <div class="column"><p class="has-background-success-light is-size-6 has-text-centered p-3">Auto</p></div>
      <div class="column"><p class="has-background-success-light is-size-6 has-text-centered p-3">Auto</p></div>
    </div>
    
    <div class="columns">
      <div class="column is-one-third"><p class="has-background-success-light is-size-6 has-text-centered p-3">is-one-third</p></div>      
      <div class="column"><p class="has-background-success-light is-size-6 has-text-centered p-3">Auto</p></div>
      <div class="column"><p class="has-background-success-light is-size-6 has-text-centered p-3">Auto</p></div>
    </div>
    
    <div class="columns">
      <div class="column is-one-quarter"><p class="has-background-success-light is-size-6 has-text-centered p-3">is-one-quarter</p></div>      
      <div class="column"><p class="has-background-success-light is-size-6 has-text-centered p-3">Auto</p></div>
      <div class="column"><p class="has-background-success-light is-size-6 has-text-centered p-3">Auto</p></div>
    </div>
    
    <div class="columns">
      <div class="column is-one-fifth"><p class="has-background-success-light is-size-6 has-text-centered p-3">is-one-fifth</p></div>      
      <div class="column"><p class="has-background-success-light is-size-6 has-text-centered p-3">Auto</p></div>
      <div class="column"><p class="has-background-success-light is-size-6 has-text-centered p-3">Auto</p></div>
    </div>
    
```

## Gap
หากต้องการตัดช่องว่างระหว่าง column สามารถใส่ `is-gapless` ตามหลัง class `columns` ได้


<div style="border: 1px solid #eee; border-radius: 8px; overflow: hidden; margin: 1em 0;">
  <iframe src="../html/columns/gapless.html" width="100%" height="300px" frameborder="0" style="background: white;"></iframe>
  <div style="background: #f5f5f5; padding: 5px 10px; font-size: 12px; color: #666; text-align: right;">
    <a href="../html/columns/gapless.html" target="_blank" style="text-decoration: none; color: #00D69E;">เปิดหน้าต่างใหม่ ↗</a>
  </div>
</div>

```html
    <div class="columns is-gapless">
      <div class="column"><p class="has-background-success-light is-size-6 has-text-centered p-3">Auto</p></div>
      <div class="column"><p class="has-background-success-light is-size-6 has-text-centered p-3">Auto</p></div>
      <div class="column"><p class="has-background-success-light is-size-6 has-text-centered p-3">Auto</p></div>
    </div>
```

หากต้องการรองรับการแสดงผลหลายบรรทัด ก็สามารถเติม class `is-multiline` คู่ไปได้


<div style="border: 1px solid #eee; border-radius: 8px; overflow: hidden; margin: 1em 0;">
  <iframe src="../html/columns/multiline.html" width="100%" height="300px" frameborder="0" style="background: white;"></iframe>
  <div style="background: #f5f5f5; padding: 5px 10px; font-size: 12px; color: #666; text-align: right;">
    <a href="../html/columns/multiline.html" target="_blank" style="text-decoration: none; color: #00D69E;">เปิดหน้าต่างใหม่ ↗</a>
  </div>
</div>

```html
    <div class="columns is-gapless is-multiline">
      <div class="column is-one-quarter"><p class="has-background-success-light is-size-6 has-text-centered p-3">is-one-quarter</p></div>
      <div class="column is-one-quarter"><p class="has-background-success-light is-size-6 has-text-centered p-3">is-one-quarter</p></div>
      <div class="column is-one-quarter"><p class="has-background-success-light is-size-6 has-text-centered p-3">is-one-quarter</p></div>
      <div class="column is-one-quarter"><p class="has-background-success-light is-size-6 has-text-centered p-3">is-one-quarter</p></div>

      <div class="column is-half"><p class="has-background-success-light is-size-6 has-text-centered p-3">is-half</p></div>
      <div class="column is-half"><p class="has-background-success-light is-size-6 has-text-centered p-3">is-half</p></div>

      <div class="column is-one-quarter"><p class="has-background-success-light is-size-6 has-text-centered p-3">is-one-quarter</p></div>
      <div class="column is-one-quarter"><p class="has-background-success-light is-size-6 has-text-centered p-3">is-one-quarter</p></div>
      <div class="column is-one-quarter"><p class="has-background-success-light is-size-6 has-text-centered p-3">is-one-quarter</p></div>
      <div class="column is-one-quarter"><p class="has-background-success-light is-size-6 has-text-centered p-3">is-one-quarter</p></div>

    </div>
```



## Variable gap
ในการใช้ Columns คุณสามารถใส่ class modifiers ให้กับ class `columns` ได้ เพื่อปรับ Gap ในการแสดงผลของแต่ละ columns
- `is-0` จะทำการลบ Gap ทั้งหมด (แสดงผลเหมือน `is-gapless`)
- `is-3` เป็น default value ของการแสดงผล (เว้นระยะ `0.7rem`)
- `is-8` เป็น gap ที่กว้างที่สุด ที่สามารถแสดงผลได้ (เว้นระยะ `2rem`)
