# Form controls

## Basic form
หากคุณต้องการแสดงข้อมูลเกี่ยวกับ Form ต่างๆ โดยมีโครงสร้างดังต่อไปนี้
 * `field` คือ container โดยภายใต้จะมี
    * `label` สำหรับระบุหัวข้อ 
    * `control` สำหรับ input form ต่างๆ
    * `help` ในกรณีที่ต้องการระบุ help text

<!-- panels:start -->
<!-- div:left-panel -->
```html
    <section class="section">
      <div class="field">
        <label class="label">Name</label>
        <div class="control">
          <input class="input" type="text" placeholder="Text input">
        </div>
      </div>
    
      <div class="field">
        <label class="label">Username</label>
        <div class="control has-icons-left has-icons-right">
          <input class="input is-success" type="text" placeholder="Text input" value="bulma">
          <span class="icon  is-left">
            <span class="material-icons-round">
              person
            </span>
          </span>
          <span class="icon is-right">
            <span class="material-icons-round">
              done
            </span>
          </span>
        </div>
        <p class="help is-success">This username is available</p>
      </div>
    
      <div class="field">
        <label class="label">Email</label>
        <div class="control has-icons-left has-icons-right">
          <input class="input is-danger" type="email" placeholder="Email input" value="hello@">
          <span class="icon  is-left">
            <span class="material-icons-round">
              email
            </span>
          </span>
          <span class="icon is-small is-right">
            <span class="material-icons-round">
              warning
            </span>
          </span>
        </div>
        <p class="help is-danger">This email is invalid</p>
      </div>
    
      <div class="field">
        <label class="label">Subject</label>
        <div class="control">
          <div class="select">
            <select>
              <option>Select dropdown</option>
              <option>With options</option>
            </select>
          </div>
        </div>
      </div>
    
      <div class="field">
        <label class="label">Message</label>
        <div class="control">
          <textarea class="textarea" placeholder="Textarea"></textarea>
        </div>
      </div>
    
      <div class="field">
        <div class="control">
          <label class="checkbox">
            <input type="checkbox">
            I agree to the <a href="#">terms and conditions</a>
          </label>
        </div>
      </div>
    
      <div class="field">
        <div class="control">
          <label class="radio">
            <input type="radio" name="question">
            Yes
          </label>
          <label class="radio">
            <input type="radio" name="question">
            No
          </label>
        </div>
      </div>
    
      <div class="field is-grouped">
        <div class="control">
          <button class="button is-link">Submit</button>
        </div>
        <div class="control">
          <button class="button is-link is-light">Cancel</button>
        </div>
      </div>
    </section>
```
<!-- div:right-panel -->

<div style="border: 1px solid #eee; border-radius: 8px; overflow: hidden; margin: 1em 0;">
  <iframe src="../html/forms/basic.html" width="100%" height="300px" frameborder="0" style="background: white;"></iframe>
  <div style="background: #f5f5f5; padding: 5px 10px; font-size: 12px; color: #666; text-align: right;">
    <a href="../html/forms/basic.html" target="_blank" style="text-decoration: none; color: #00D69E;">เปิดหน้าต่างใหม่ ↗</a>
  </div>
</div>
<!-- panels:end -->

### Disabled form
หากต้องการปิดการใช้งานของ form ทั้งหมด สามารถกำหนด attribute `disabled` ที่ระดับ fieldset ได้
<!-- panels:start -->
<!-- div:left-panel -->
```html
  <section class="section">
      <fieldset disabled>
        <div class="field">
          <label class="label">Name</label>
          <div class="control">
            <input class="input" type="text" placeholder="e.g Alex Smith">
          </div>
        </div>
        <div class="field">
          <label class="label">Email</label>
          <div class="control">
            <input class="input" type="email" placeholder="e.g. alexsmith@gmail.com">
          </div>
        </div>
        </fieldset>
    </section>
```
<!-- div:right-panel -->

<div style="border: 1px solid #eee; border-radius: 8px; overflow: hidden; margin: 1em 0;">
  <iframe src="../html/forms/disabled.html" width="100%" height="300px" frameborder="0" style="background: white;"></iframe>
  <div style="background: #f5f5f5; padding: 5px 10px; font-size: 12px; color: #666; text-align: right;">
    <a href="../html/forms/disabled.html" target="_blank" style="text-decoration: none; color: #00D69E;">เปิดหน้าต่างใหม่ ↗</a>
  </div>
</div>
<!-- panels:end -->

## Input
### Colors
ในการใช้ input คุณสามารถกำหนดสีของตัว element ได้ตามที่ต้องการ โดยใช้ class `is-white`, ` is-black`, ` is-light`, ` is-dark`, ` is-primary`, ` is-link`, ` is-info`, ` is-success`, ` is-warning` หรือ ` is-danger` ได้
<!-- panels:start -->
<!-- div:left-panel -->
```html
  <section class="section">
      <div class="field">
        <label class="label">is-primary</label>
        <div class="control">
          <input class="input is-primary" type="text" placeholder="is-primary">
        </div>
      </div>

      <div class="field">
        <label class="label">is-link</label>
        <div class="control">
          <input class="input is-link" type="text" placeholder="is-link">
        </div>
      </div>

      <div class="field">
        <label class="label">is-info</label>
        <div class="control">
          <input class="input is-info" type="text" placeholder="is-info">
        </div>
      </div>

      <div class="field">
        <label class="label">is-success</label>
        <div class="control">
          <input class="input is-success" type="text" placeholder="is-success">
        </div>
      </div>

      <div class="field">
        <label class="label">is-warning</label>
        <div class="control">
          <input class="input is-warning" type="text" placeholder="is-warning">
        </div>
      </div>

      <div class="field">
        <label class="label">is-danger</label>
        <div class="control">
          <input class="input is-danger" type="text" placeholder="is-danger">
        </div>
      </div>
  </section>  
```
<!-- div:right-panel -->

<div style="border: 1px solid #eee; border-radius: 8px; overflow: hidden; margin: 1em 0;">
  <iframe src="../html/forms/input/colors.html" width="100%" height="300px" frameborder="0" style="background: white;"></iframe>
  <div style="background: #f5f5f5; padding: 5px 10px; font-size: 12px; color: #666; text-align: right;">
    <a href="../html/forms/input/colors.html" target="_blank" style="text-decoration: none; color: #00D69E;">เปิดหน้าต่างใหม่ ↗</a>
  </div>
</div>
<!-- panels:end -->

### Sizes
ในการใช้ input คุณสามารถกำหนดขนาดของตัว element ได้ตามที่ต้องการ โดยใช้ class `is-small`, `is-normal`, `is-medium`, หรือ `is-large` ได้

<!-- panels:start -->
<!-- div:left-panel -->
```html
    <section class="section">
      <div class="field">
        <label class="label is-small">Small input</label>
        <div class="control has-icons-left has-icons-right">
          <input class="input is-small" type="email" placeholder="is-small">
          <span class="icon is-left">
            <span class="material-icons-round">
              email
            </span>
          </span>
          <span class="icon is-right">
            <span class="material-icons-round">
              check
            </span>
          </span>
        </div>
      </div>
    
      <div class="field">
        <label class="label">Normal input</label>
        <div class="control has-icons-left has-icons-right">
          <input class="input" type="email" placeholder="">
          <span class="icon is-left">
            <span class="material-icons-round">
              email
            </span>
          </span>
          <span class="icon is-right">
            <span class="material-icons-round">
              check
            </span>
          </span>
        </div>
      </div>
    
      <div class="field">
        <label class="label is-medium">Medium input</label>
        <div class="control has-icons-left has-icons-right">
          <input class="input is-medium" type="email" placeholder="is-medium">
          <span class="icon is-left">
            <span class="material-icons-round">
              email
            </span>
          </span>
          <span class="icon is-right">
            <span class="material-icons-round">
              check
            </span>
          </span>
        </div>
      </div>
    
      <div class="field">
        <label class="label is-large">Large input</label>
        <div class="control has-icons-left has-icons-right">
          <input class="input is-large" type="email" placeholder="is-large">
          <span class="icon is-medium is-left">
            <span class="material-icons-round">
              email
            </span>
          </span>
          <span class="icon is-medium is-right">
            <span class="material-icons-round">
              check
            </span>
          </span>
        </div>
      </div>
    </section>
```
<!-- div:right-panel -->

<div style="border: 1px solid #eee; border-radius: 8px; overflow: hidden; margin: 1em 0;">
  <iframe src="../html/forms/input/size.html" width="100%" height="300px" frameborder="0" style="background: white;"></iframe>
  <div style="background: #f5f5f5; padding: 5px 10px; font-size: 12px; color: #666; text-align: right;">
    <a href="../html/forms/input/size.html" target="_blank" style="text-decoration: none; color: #00D69E;">เปิดหน้าต่างใหม่ ↗</a>
  </div>
</div>
<!-- panels:end -->

### Styles
คุณสามารถกำหนดให้ input ได้ผ่านการใช้ class `is-rounded`

<!-- panels:start -->
<!-- div:left-panel -->
```html
    <section class="section">
      <div class="field">
        <label class="label">Username</label>
        <input class="input is-rounded" type="text" placeholder="Rounded input">
      </div>
      </div>
    </section>  
```
<!-- div:right-panel -->

<div style="border: 1px solid #eee; border-radius: 8px; overflow: hidden; margin: 1em 0;">
  <iframe src="../html/forms/input/styles.html" width="100%" height="300px" frameborder="0" style="background: white;"></iframe>
  <div style="background: #f5f5f5; padding: 5px 10px; font-size: 12px; color: #666; text-align: right;">
    <a href="../html/forms/input/styles.html" target="_blank" style="text-decoration: none; color: #00D69E;">เปิดหน้าต่างใหม่ ↗</a>
  </div>
</div>
<!-- panels:end -->

### Loading
คุณสามารถกำหนดให้ input มี Loading Icon ขึ้นมาได้ผ่านการกำหนด class `is-loading` ใน class `control`
<!-- panels:start -->
<!-- div:left-panel -->
```html
<div class="field">
  <div class="control is-small is-loading">
    <input class="input is-small" type="text" placeholder="Small loading input">
  </div>
</div>
<div class="field">
  <div class="control is-loading">
    <input class="input" type="text" placeholder="Normal loading input">
  </div>
</div>
<div class="field">
  <div class="control is-medium is-loading">
    <input class="input is-medium" type="text" placeholder="Medium loading input">
  </div>
</div>
<div class="field">
  <div class="control is-large is-loading">
    <input class="input is-large" type="text" placeholder="Large loading input">
  </div>
</div>  
```
<!-- div:right-panel -->

<div style="border: 1px solid #eee; border-radius: 8px; overflow: hidden; margin: 1em 0;">
  <iframe src="../html/forms/input/loading.html" width="100%" height="300px" frameborder="0" style="background: white;"></iframe>
  <div style="background: #f5f5f5; padding: 5px 10px; font-size: 12px; color: #666; text-align: right;">
    <a href="../html/forms/input/loading.html" target="_blank" style="text-decoration: none; color: #00D69E;">เปิดหน้าต่างใหม่ ↗</a>
  </div>
</div>
<!-- panels:end -->


## Textarea
<!-- panels:start -->
<!-- div:left-panel -->
```html
   <section class="section">
      <div class="field">
        <label class="label">Basic Textarea</label>
        <div class="control">
          <textarea class="textarea" placeholder="e.g. Hello world"></textarea>
        </div>
      </div>
    
      <div class="field">
        <label class="label">Basic Textarea</label>
        <div class="control">
          <textarea class="textarea" placeholder="10 lines of textarea" rows="10"></textarea>
        </div>
      </div>
    </section>
```
<!-- div:right-panel -->

<div style="border: 1px solid #eee; border-radius: 8px; overflow: hidden; margin: 1em 0;">
  <iframe src="../html/forms/textarea/basic.html" width="100%" height="300px" frameborder="0" style="background: white;"></iframe>
  <div style="background: #f5f5f5; padding: 5px 10px; font-size: 12px; color: #666; text-align: right;">
    <a href="../html/forms/textarea/basic.html" target="_blank" style="text-decoration: none; color: #00D69E;">เปิดหน้าต่างใหม่ ↗</a>
  </div>
</div>
<!-- panels:end -->

### Colors
ในการใช้ Text area คุณสามารถกำหนดสีของตัว element ได้ตามที่ต้องการ โดยใช้ class `is-white`, ` is-black`, ` is-light`, ` is-dark`, ` is-primary`, ` is-link`, ` is-info`, ` is-success`, ` is-warning` หรือ ` is-danger` ได้
<!-- panels:start -->
<!-- div:left-panel -->
```html
  <section class="section">
      <div class="field">
        <label class="label">is-primary</label>
        <div class="control">
          <textarea class="textarea is-primary" placeholder="Primary textarea"></textarea>
        </div>
      </div>

      <div class="field">
        <label class="label">is-link</label>
        <div class="control">
          <textarea class="textarea is-link" placeholder="Link textarea"></textarea>
        </div>
      </div>

      <div class="field">
        <label class="label">is-info</label>
        <div class="control">
          <textarea class="textarea is-info" placeholder="Info textarea"></textarea>        </div>
      </div>

      <div class="field">
        <label class="label">is-success</label>
        <div class="control">
          <textarea class="textarea is-success" placeholder="Success textarea"></textarea>
        </div>
      </div>

      <div class="field">
        <label class="label">is-warning</label>
        <div class="control">
          <textarea class="textarea is-warning" placeholder="Warning textarea"></textarea>
        </div>
      </div>

      <div class="field">
        <label class="label">is-danger</label>
        <div class="control">
          <textarea class="textarea is-danger" placeholder="Danger textarea"></textarea>
                </div>
      </div>
      
  </section>  
```
<!-- div:right-panel -->

<div style="border: 1px solid #eee; border-radius: 8px; overflow: hidden; margin: 1em 0;">
  <iframe src="../html/forms/textarea/colors.html" width="100%" height="300px" frameborder="0" style="background: white;"></iframe>
  <div style="background: #f5f5f5; padding: 5px 10px; font-size: 12px; color: #666; text-align: right;">
    <a href="../html/forms/textarea/colors.html" target="_blank" style="text-decoration: none; color: #00D69E;">เปิดหน้าต่างใหม่ ↗</a>
  </div>
</div>
<!-- panels:end -->

### Sizes
ในการใช้  Text area คุณสามารถกำหนดขนาดของตัว element ได้ตามที่ต้องการ โดยใช้ class `is-small`, `is-normal`, `is-medium`, หรือ `is-large` ได้
<!-- panels:start -->
<!-- div:left-panel -->
```html
    <section class="section">
      <div class="field">
        <div class="control">
          <textarea class="textarea is-small" placeholder="Small textarea"></textarea>
        </div>
      </div>
      <div class="field">
        <div class="control">
          <textarea class="textarea" placeholder="Normal textarea"></textarea>
        </div>
      </div>
      <div class="field">
        <div class="control">
          <textarea class="textarea is-medium" placeholder="Medium textarea"></textarea>
        </div>
      </div>
      <div class="field">
        <div class="control">
          <textarea class="textarea is-large" placeholder="Large textarea"></textarea>
        </div>
      </div>
    </section>  
```
<!-- div:right-panel -->

<div style="border: 1px solid #eee; border-radius: 8px; overflow: hidden; margin: 1em 0;">
  <iframe src="../html/forms/textarea/size.html" width="100%" height="300px" frameborder="0" style="background: white;"></iframe>
  <div style="background: #f5f5f5; padding: 5px 10px; font-size: 12px; color: #666; text-align: right;">
    <a href="../html/forms/textarea/size.html" target="_blank" style="text-decoration: none; color: #00D69E;">เปิดหน้าต่างใหม่ ↗</a>
  </div>
</div>
<!-- panels:end -->

### Loading
คุณสามารถกำหนดให้ Text area มี Loading Icon ขึ้นมาได้ผ่านการกำหนด class `is-loading` ใน class `control`
<!-- panels:start -->
<!-- div:left-panel -->
```html
  <section class="section">
      <div class="field">
        <div class="control is-small is-loading">
          <textarea class="textarea is-small" placeholder="Small loading textarea"></textarea>
        </div>
      </div>
      <div class="field">
        <div class="control is-loading">
          <textarea class="textarea" placeholder="Normal loading textarea"></textarea>
        </div>
      </div>
      <div class="field">
        <div class="control is-medium is-loading">
          <textarea class="textarea is-medium" placeholder="Medium loading textarea"></textarea>
        </div>
      </div>
      <div class="field">
        <div class="control is-large is-loading">
          <textarea class="textarea is-large" placeholder="Large loading textarea"></textarea>
        </div>
      </div>
    </section>  
```
<!-- div:right-panel -->

<div style="border: 1px solid #eee; border-radius: 8px; overflow: hidden; margin: 1em 0;">
  <iframe src="../html/forms/textarea/loading.html" width="100%" height="300px" frameborder="0" style="background: white;"></iframe>
  <div style="background: #f5f5f5; padding: 5px 10px; font-size: 12px; color: #666; text-align: right;">
    <a href="../html/forms/textarea/loading.html" target="_blank" style="text-decoration: none; color: #00D69E;">เปิดหน้าต่างใหม่ ↗</a>
  </div>
</div>
<!-- panels:end -->



## Select
<!-- panels:start -->
<!-- div:left-panel -->
```html
    <section class="section">
      <div class="field">
        <label class="label">Select</label>
        <div class="control">
          <div class="select">
            <select>
              <option>Select dropdown</option>
              <option>With options</option>
            </select>
          </div>
        </div>
      </div>

      <div class="field">
        <label class="label">Multi Select</label>
        <div class="control">
          <div class="select is-multiple">
            <select multiple size="8">
              <option value="Argentina">Argentina</option>
              <option value="Bolivia">Bolivia</option>
              <option value="Brazil">Brazil</option>
              <option value="Chile">Chile</option>
              <option value="Colombia">Colombia</option>
              <option value="Ecuador">Ecuador</option>
              <option value="Guyana">Guyana</option>
              <option value="Paraguay">Paraguay</option>
              <option value="Peru">Peru</option>
              <option value="Suriname">Suriname</option>
              <option value="Uruguay">Uruguay</option>
              <option value="Venezuela">Venezuela</option>
            </select>
          </div>
        </div>
      </div>
    </section>  
```
<!-- div:right-panel -->

<div style="border: 1px solid #eee; border-radius: 8px; overflow: hidden; margin: 1em 0;">
  <iframe src="../html/forms/select/basic.html" width="100%" height="300px" frameborder="0" style="background: white;"></iframe>
  <div style="background: #f5f5f5; padding: 5px 10px; font-size: 12px; color: #666; text-align: right;">
    <a href="../html/forms/select/basic.html" target="_blank" style="text-decoration: none; color: #00D69E;">เปิดหน้าต่างใหม่ ↗</a>
  </div>
</div>
<!-- panels:end -->

### Colors
ในการใช้ Select คุณสามารถกำหนดสีของตัว element ได้ตามที่ต้องการ โดยใช้ class `is-white`, ` is-black`, ` is-light`, ` is-dark`, ` is-primary`, ` is-link`, ` is-info`, ` is-success`, ` is-warning` หรือ ` is-danger` ได้
<!-- panels:start -->
<!-- div:left-panel -->
```html
    <section class="section">
      <div class="field">
        <label class="label">is-primary</label>
        <div class="control">
          <div class="select is-primary">
            <select>
              <option>Select dropdown</option>
              <option>With options</option>
            </select>
          </div>
    
        </div>
      </div>
    
      <div class="field">
        <label class="label">is-link</label>
        <div class="control">
          <div class="select is-link">
            <select>
              <option>Select dropdown</option>
              <option>With options</option>
            </select>
          </div>
        </div>
      </div>
    
      <div class="field">
        <label class="label">is-info</label>
        <div class="control">
          <div class="select is-info">
            <select>
              <option>Select dropdown</option>
              <option>With options</option>
            </select>
          </div>
        </div>
      </div>
    
      <div class="field">
        <label class="label">is-success</label>
        <div class="control">
          <div class="select is-success">
            <select>
              <option>Select dropdown</option>
              <option>With options</option>
            </select>
          </div>
        </div>
      </div>
    
      <div class="field">
        <label class="label">is-warning</label>
        <div class="control">
          <div class="select is-warning">
            <select>
              <option>Select dropdown</option>
              <option>With options</option>
            </select>
          </div>
        </div>
      </div>
    
      <div class="field">
        <label class="label">is-danger</label>
        <div class="control">
          <div class="select is-danger">
            <select>
              <option>Select dropdown</option>
              <option>With options</option>
            </select>
          </div>
        </div>
      </div>
    
    </section>  
```
<!-- div:right-panel -->

<div style="border: 1px solid #eee; border-radius: 8px; overflow: hidden; margin: 1em 0;">
  <iframe src="../html/forms/select/colors.html" width="100%" height="300px" frameborder="0" style="background: white;"></iframe>
  <div style="background: #f5f5f5; padding: 5px 10px; font-size: 12px; color: #666; text-align: right;">
    <a href="../html/forms/select/colors.html" target="_blank" style="text-decoration: none; color: #00D69E;">เปิดหน้าต่างใหม่ ↗</a>
  </div>
</div>
<!-- panels:end -->


### Sizes
ในการใช้  Select คุณสามารถกำหนดขนาดของตัว element ได้ตามที่ต้องการ โดยใช้ class `is-small`, `is-normal`, `is-medium`, หรือ `is-large` ได้
<!-- panels:start -->
<!-- div:left-panel -->
```html
    <section class="section">
      <div class="field">
        <div class="control">
          <div class="select is-small">
            <select>
              <option>Select dropdown</option>
              <option>With options</option>
            </select>
          </div>
        </div>
      </div>
      <div class="field">
        <div class="control">
          <div class="select is-normal">
            <select>
              <option>Select dropdown</option>
              <option>With options</option>
            </select>
          </div>
        </div>
      </div>
      <div class="field">
        <div class="control">
          <div class="select is-medium">
            <select>
              <option>Select dropdown</option>
              <option>With options</option>
            </select>
          </div>
        </div>
      </div>
      <div class="field">
        <div class="control">
          <div class="select is-large">
            <select>
              <option>Select dropdown</option>
              <option>With options</option>
            </select>
          </div>
        </div>
      </div>
    </section>
```
<!-- div:right-panel -->

<div style="border: 1px solid #eee; border-radius: 8px; overflow: hidden; margin: 1em 0;">
  <iframe src="../html/forms/select/size.html" width="100%" height="300px" frameborder="0" style="background: white;"></iframe>
  <div style="background: #f5f5f5; padding: 5px 10px; font-size: 12px; color: #666; text-align: right;">
    <a href="../html/forms/select/size.html" target="_blank" style="text-decoration: none; color: #00D69E;">เปิดหน้าต่างใหม่ ↗</a>
  </div>
</div>
<!-- panels:end -->


### Styles
คุณสามารถกำหนดให้ Select ได้ผ่านการใช้ class `is-rounded`
<!-- panels:start -->
<!-- div:left-panel -->
```html
    <section class="section">
      <div class="field">
        <label class="label">Rounded</label>
        <div class="select is-rounded">
          <select>
            <option>Rounded dropdown</option>
            <option>With options</option>
          </select>
        </div>
      </div>
      </div>
    </section>
```
<!-- div:right-panel -->

<div style="border: 1px solid #eee; border-radius: 8px; overflow: hidden; margin: 1em 0;">
  <iframe src="../html/forms/select/styles.html" width="100%" height="300px" frameborder="0" style="background: white;"></iframe>
  <div style="background: #f5f5f5; padding: 5px 10px; font-size: 12px; color: #666; text-align: right;">
    <a href="../html/forms/select/styles.html" target="_blank" style="text-decoration: none; color: #00D69E;">เปิดหน้าต่างใหม่ ↗</a>
  </div>
</div>
<!-- panels:end -->


### Loading
คุณสามารถกำหนดให้ Select มี Loading Icon ขึ้นมาได้ผ่านการกำหนด class `is-loading` ใน class `control`
<!-- panels:start -->
<!-- div:left-panel -->
```html
    <section class="section">
      <div class="field">
        <div class="select is-loading">
          <select>
            <option>Select dropdown</option>
            <option>With options</option>
          </select>
        </div>
      </div>
    </section>  
```
<!-- div:right-panel -->

<div style="border: 1px solid #eee; border-radius: 8px; overflow: hidden; margin: 1em 0;">
  <iframe src="../html/forms/select/loading.html" width="100%" height="300px" frameborder="0" style="background: white;"></iframe>
  <div style="background: #f5f5f5; padding: 5px 10px; font-size: 12px; color: #666; text-align: right;">
    <a href="../html/forms/select/loading.html" target="_blank" style="text-decoration: none; color: #00D69E;">เปิดหน้าต่างใหม่ ↗</a>
  </div>
</div>
<!-- panels:end -->

## Checkbox
Checkbox รองรับการตั้งค่า default โดยสามารถใช้ html attribue `checked` ในการกำหนดได้ และรองรับการอ่าน disabled  attribute 
<!-- panels:start -->
<!-- div:left-panel -->
```html
    <section class="section">
      <div class="field">
        <label class="checkbox">
          <input type="checkbox">
          Remember me
        </label>
      </div>
    
      <div class="field">
        <label class="checkbox">
          <input type="checkbox">
          I agree to the <a href="#">terms and conditions</a>
        </label>
      </div>

      <div class="field">
        <label class="checkbox" disabled>
          <input type="checkbox" disabled>
          Save my preferences
        </label>
      </div>
    </section>  
```
<!-- div:right-panel -->

<div style="border: 1px solid #eee; border-radius: 8px; overflow: hidden; margin: 1em 0;">
  <iframe src="../html/forms/checkbox/basic.html" width="100%" height="300px" frameborder="0" style="background: white;"></iframe>
  <div style="background: #f5f5f5; padding: 5px 10px; font-size: 12px; color: #666; text-align: right;">
    <a href="../html/forms/checkbox/basic.html" target="_blank" style="text-decoration: none; color: #00D69E;">เปิดหน้าต่างใหม่ ↗</a>
  </div>
</div>
<!-- panels:end -->

## Radio
Radio รองรับการตั้งค่า default โดยสามารถใช้ html attribue `checked` ในการกำหนดได้ และรองรับการอ่าน disabled  attribute 
<!-- panels:start -->
<!-- div:left-panel -->
```html
  <section class="section">
      <div class="field">
        <label class="label">Radio</label>
        <div class="control">
          <label class="radio">
            <input type="radio" name="answer">
            Yes
          </label>
          <label class="radio">
            <input type="radio" name="answer">
            No
          </label>
        </div>
      </div>
    
      <div class="field">
        <label class="label">Default Value</label>
        <div class="control">
          <label class="radio">
            <input type="radio" name="foobar">
            Foo
          </label>
          <label class="radio">
            <input type="radio" name="foobar" checked>
            Bar
          </label>
        </div>
      </div>

      <div class="field">
        <label class="label">Disabled</label>
        <div class="control">
          <label class="radio">
            <input type="radio" name="rsvp">
            Going
          </label>
          <label class="radio">
            <input type="radio" name="rsvp">
            Not going
          </label>
          <label class="radio" disabled>
            <input type="radio" name="rsvp" disabled>
            Maybe
          </label>
        </div>
      </div>
    </section>  
```
<!-- div:right-panel -->

<div style="border: 1px solid #eee; border-radius: 8px; overflow: hidden; margin: 1em 0;">
  <iframe src="../html/forms/radio/basic.html" width="100%" height="300px" frameborder="0" style="background: white;"></iframe>
  <div style="background: #f5f5f5; padding: 5px 10px; font-size: 12px; color: #666; text-align: right;">
    <a href="../html/forms/radio/basic.html" target="_blank" style="text-decoration: none; color: #00D69E;">เปิดหน้าต่างใหม่ ↗</a>
  </div>
</div>
<!-- panels:end -->

## File
Fileupload จะมีโครงสร้างในการวาง class ดังต่อไปนี้
* `file` คือ container หลัก
  * `file-label` พื้นที่ที่ผู้ใช้งานสามารถกดได้
    * `file-input` ใส่กับ element file input
    * `file-cta` พื้นที่ที่เป็น call to action
      * `file-icon` ไอคอนสำหรับใส่ประกอบปุ่มอัพโหลด
      * `file-label` ข้อความที่แสดงคำว่า "Choose a file…"
    * `file-name` พื้นที่ที่ไว้แสดงชื่อไฟล์

<!-- panels:start -->
<!-- div:left-panel -->
```html
    <section class="section">
      <div class="field">
        <label class="label">Basic fileupload</label>
        <div class="control">
          <div class="file">
            <label class="file-label">
              <input class="file-input" type="file" name="resume">
              <span class="file-cta">
                <span class="file-icon">
                  <span class="material-icons-round">
                    backup
                  </span>
                </span>
                <span class="file-label">
                  Choose a file…
                </span>
              </span>
            </label>
          </div>
        </div>
      </div>
    
      <div class="field">
        <label class="label">Fileupload with filename</label>
        <div class="control">
          <div class="file has-name">
            <label class="file-label">
              <input class="file-input" type="file" name="resume">
              <span class="file-cta">
                <span class="file-icon">
                  <span class="material-icons-round">
                    backup
                  </span>
                </span>
                <span class="file-label">
                  Choose a file…
                </span>
              </span>
              <span class="file-name">
                Screen Shot 2017-07-29 at 15.54.25.png
              </span>
            </label>
          </div>
        </div>
      </div>
    
      <div class="field">
        <label class="label">Fileupload with left filename</label>
        <div class="control">
          <div class="file has-name is-right">
            <label class="file-label">
              <input class="file-input" type="file" name="resume">
              <span class="file-cta">
                <span class="file-icon">
                  <span class="material-icons-round">
                    backup
                  </span>
                </span>
                <span class="file-label">
                  Choose a file…
                </span>
              </span>
              <span class="file-name">
                Screen Shot 2017-07-29 at 15.54.25.png
              </span>
            </label>
          </div>
        </div>
      </div>
    
      <div class="field">
        <label class="label">Box Fileupload</label>
        <div class="control">
          <div class="file is-boxed">
            <label class="file-label">
              <input class="file-input" type="file" name="resume">
              <span class="file-cta">
                <span class="file-icon">
                  <span class="material-icons-round">
                    backup
                  </span>
                </span>
                <span class="file-label">
                  Choose a file…
                </span>
              </span>
            </label>
          </div>
        </div>
      </div>
    
      <div class="field">
        <label class="label">Box Fileupload with filename</label>
        <div class="control">
          <div class="file has-name is-boxed">
            <label class="file-label">
              <input class="file-input" type="file" name="resume">
              <span class="file-cta">
                <span class="file-icon">
                  <span class="material-icons-round">
                    backup
                  </span>
                </span>
                <span class="file-label">
                  Choose a file…
                </span>
              </span>
              <span class="file-name">
                Screen Shot 2017-07-29 at 15.54.25.png
              </span>
            </label>
          </div>
        </div>
      </div>
    </section>
```
<!-- div:right-panel -->

<div style="border: 1px solid #eee; border-radius: 8px; overflow: hidden; margin: 1em 0;">
  <iframe src="../html/forms/file/basic.html" width="100%" height="300px" frameborder="0" style="background: white;"></iframe>
  <div style="background: #f5f5f5; padding: 5px 10px; font-size: 12px; color: #666; text-align: right;">
    <a href="../html/forms/file/basic.html" target="_blank" style="text-decoration: none; color: #00D69E;">เปิดหน้าต่างใหม่ ↗</a>
  </div>
</div>
<!-- panels:end -->

### Colors
ในการใช้ Fileupload คุณสามารถกำหนดสีของตัว element ได้ตามที่ต้องการ โดยใช้ class ทั้งหมด 10 class ประกอบด้วย `is-white`, ` is-black`, ` is-light`, ` is-dark`, ` is-primary`, ` is-link`, ` is-info`, ` is-success`, ` is-warning` และ ` is-danger`ได้
<!-- panels:start -->
<!-- div:left-panel -->
```html
  <section class="section">
    <div class="field">
      <label class="label">is-primary</label>
      <div class="control">
        <div class="file is-primary">
          <label class="file-label">
            <input class="file-input" type="file" name="resume">
            <span class="file-cta">
              <span class="file-icon">
                <span class="material-icons-round">
                  backup
                </span>
              </span>
              <span class="file-label">
                Primary file…
              </span>
            </span>
          </label>
        </div>
      </div>
    </div>
  
    <div class="field">
      <label class="label">is-info</label>
      <div class="control">
        <div class="file is-info has-name">
          <label class="file-label">
            <input class="file-input" type="file" name="resume">
            <span class="file-cta">
              <span class="file-icon">
                <span class="material-icons-round">
                  backup
                </span>
              </span>
              <span class="file-label">
                Info file…
              </span>
            </span>
            <span class="file-name">
              Screen Shot 2017-07-29 at 15.54.25.png
            </span>
          </label>
        </div>
      </div>
  
      <div class="field">
        <label class="label">is-warning</label>
        <div class="control">
          <div class="file is-warning is-boxed">
            <label class="file-label">
              <input class="file-input" type="file" name="resume">
              <span class="file-cta">
                <span class="file-icon">
                  <span class="material-icons-round">
                    backup
                  </span>
                </span>
                <span class="file-label">
                  Warning file…
                </span>
              </span>
            </label>
          </div>
        </div>
      </div>
  
      <div class="field">
        <label class="label">is-danger</label>
        <div class="control">
          <div class="file is-danger has-name is-boxed">
            <label class="file-label">
              <input class="file-input" type="file" name="resume">
              <span class="file-cta">
                <span class="file-icon">
                  <span class="material-icons-round">
                    backup
                  </span>
                </span>
                <span class="file-label">
                  Danger file…
                </span>
              </span>
              <span class="file-name">
                Screen Shot 2017-07-29 at 15.54.25.png
              </span>
            </label>
          </div>
        </div>
      </div>
  
  </section>
```
<!-- div:right-panel -->

<div style="border: 1px solid #eee; border-radius: 8px; overflow: hidden; margin: 1em 0;">
  <iframe src="../html/forms/file/colors.html" width="100%" height="300px" frameborder="0" style="background: white;"></iframe>
  <div style="background: #f5f5f5; padding: 5px 10px; font-size: 12px; color: #666; text-align: right;">
    <a href="../html/forms/file/colors.html" target="_blank" style="text-decoration: none; color: #00D69E;">เปิดหน้าต่างใหม่ ↗</a>
  </div>
</div>
<!-- panels:end -->


### Sizes
ในการใช้ Fileupload คุณสามารถกำหนดขนาดของตัว element ได้ตามที่ต้องการ โดยใช้ class `is-small`, `is-normal` (default), `is-medium`, หรือ `is-large` ได้
<!-- panels:start -->
<!-- div:left-panel -->
```html
    <section class="section">
      <div class="field">
        <div class="control">
          <div class="file is-small">
            <label class="file-label">
              <input class="file-input" type="file" name="resume">
              <span class="file-cta">
                <span class="file-icon">
                  <span class="material-icons-round">
                    backup
                  </span>
                </span>
                <span class="file-label">
                  Small file…
                </span>
              </span>
            </label>
          </div>
        </div>
      </div>
      <div class="field">
        <div class="control">
          <div class="file is-normal">
            <label class="file-label">
              <input class="file-input" type="file" name="resume">
              <span class="file-cta">
                <span class="file-icon">
                  <span class="material-icons-round">
                    backup
                  </span>
                </span>
                <span class="file-label">
                  Normal file…
                </span>
              </span>
            </label>
          </div>
        </div>
      </div>
      <div class="field">
        <div class="control">
          <div class="file is-medium">
            <label class="file-label">
              <input class="file-input" type="file" name="resume">
              <span class="file-cta">
                <span class="file-icon">
                  <span class="material-icons-round">
                    backup
                  </span>
                </span>
                <span class="file-label">
                  Medium file…
                </span>
              </span>
            </label>
          </div>
        </div>
      </div>
      <div class="field">
        <div class="control">
          <div class="file is-large">
            <label class="file-label">
              <input class="file-input" type="file" name="resume">
              <span class="file-cta">
                <span class="file-icon">
                  <span class="material-icons-round">
                    backup
                  </span>
                </span>
                <span class="file-label">
                  Large file…
                </span>
              </span>
            </label>
          </div>
        </div>
      </div>
    </section>
```
<!-- div:right-panel -->

<div style="border: 1px solid #eee; border-radius: 8px; overflow: hidden; margin: 1em 0;">
  <iframe src="../html/forms/file/size.html" width="100%" height="300px" frameborder="0" style="background: white;"></iframe>
  <div style="background: #f5f5f5; padding: 5px 10px; font-size: 12px; color: #666; text-align: right;">
    <a href="../html/forms/file/size.html" target="_blank" style="text-decoration: none; color: #00D69E;">เปิดหน้าต่างใหม่ ↗</a>
  </div>
</div>
<!-- panels:end -->



### JavaScript
ในการแสดงชื่อไฟล์ จำเป็นจะต้องใช้ Javascript มาช่วย โดยสามารถใช้ Javascript ดังต่อไปนี้ เพื่อดึงชื่อไฟล์ขึ้นมาแสดงได้เลย
<!-- panels:start -->
<!-- div:left-panel -->
```html
    <section class="section">
      <div class="field">
        <div class="control ">
          <div id="file-js-example" class="file has-name">
            <label class="file-label">
              <input class="file-input" type="file" name="resume">
              <span class="file-cta">
                <span class="file-icon">
                  <span class="material-icons-round">
                    backup
                  </span>
                </span>
                <span class="file-label">
                  Choose a file…
                </span>
              </span>
              <span class="file-name">
                No file uploaded
              </span>
            </label>
          </div>
        </div>
      </div>
    </section>
    
    <script>
      const fileInput = document.querySelector('#file-js-example input[type=file]');
      fileInput.onchange = () => {
        if (fileInput.files.length > 0) {
          const fileName = document.querySelector('#file-js-example .file-name');
          fileName.textContent = fileInput.files[0].name;
        }
      }
    </script>
```
<!-- div:right-panel -->

<div style="border: 1px solid #eee; border-radius: 8px; overflow: hidden; margin: 1em 0;">
  <iframe src="../html/forms/file/javascript.html" width="100%" height="300px" frameborder="0" style="background: white;"></iframe>
  <div style="background: #f5f5f5; padding: 5px 10px; font-size: 12px; color: #666; text-align: right;">
    <a href="../html/forms/file/javascript.html" target="_blank" style="text-decoration: none; color: #00D69E;">เปิดหน้าต่างใหม่ ↗</a>
  </div>
</div>
<!-- panels:end -->

### Extension
Fileupload รองรับ HTML5 Accept filter โดยสามารถกำหนด attribute Accept เพื่อให้ Browser ช่วย Filter ไฟล์ที่ต้องการได้ โดยให้ระบุ Accept ด้วย Mime type เพื่อให้รองรับการใช้งานได้ทั้ง Android และ iOS โดยรองรับ Mimetype ดังนี้

<!-- panels:start -->
<!-- div:left-panel -->
| | Name |  Mime Type |
| --- | --------- | --------- |
| 1. | JPEG | image/jpeg
| 2. | PNG | image/png
| 3. | WEBP | image/webp
| 4. | ไฟล์ PDF | application/pdf 
| 5. | ไฟล์ DOCX | application/vnd.openxmlformats-officedocument.wordprocessingml.document
| 6. | ไฟล์ DOC | application/msword
| 8. | ไฟล์ XLSX | application/vnd.openxmlformats-officedocument.spreadsheetml.sheet
| 9. | ไฟล์ XLS | application/vnd.ms-excel
| 10. | ไฟล์ PPTX | application/vnd.openxmlformats-officedocument.presentationml.presentation
| 11. | ไฟล์ PPT | application/vnd.ms-powerpoint
```html
    <section class="section">
      <div class="field">
        <label class="label">รองรับไฟล์ภาพ</label>
        <div class="control">
          <div class="file">
            <label class="file-label">
              <input
                class="file-input"
                type="file"
                name="resume"
                accept="image/jpeg,image/png,image/webp"
              />
              <span class="file-cta">
                <span class="file-label"> Choose a file… </span>
              </span>
            </label>
          </div>
        </div>
      </div>

      <div class="field">
        <label class="label">รองรับไฟล์เอกสารต่างๆ</label>
        <div class="control">
          <div class="file">
            <label class="file-label">
              <input
                class="file-input"
                type="file"
                name="resume"
                accept="application/pdf,application/vnd.openxmlformats-officedocument.wordprocessingml.document,application/vnd.openxmlformats-officedocument.spreadsheetml.sheet,application/vnd.openxmlformats-officedocument.presentationml.presentation"
              />
              <span class="file-cta">
                <span class="file-label"> Choose a file… </span>
              </span>
            </label>
          </div>
        </div>
      </div>
    </section>
```
<!-- div:right-panel -->

<div style="border: 1px solid #eee; border-radius: 8px; overflow: hidden; margin: 1em 0;">
  <iframe src="../html/forms/file/extension.html" width="100%" height="300px" frameborder="0" style="background: white;"></iframe>
  <div style="background: #f5f5f5; padding: 5px 10px; font-size: 12px; color: #666; text-align: right;">
    <a href="../html/forms/file/extension.html" target="_blank" style="text-decoration: none; color: #00D69E;">เปิดหน้าต่างใหม่ ↗</a>
  </div>
</div>
<!-- panels:end -->
### Multiple Files Upload
Multiple Files Upload รองรับใน HTML5 โดยสามารถกำหนด attribute multiple  เพื่อให้ Browser อนุญาตให้เข้าถึงการเลือกไฟล์ได้หลาย ๆ ไฟล์
<!-- panels:start -->
<!-- div:left-panel -->
```html
    <section class="section">
      <div class="field">
        <label class="label">เลือกไฟล์</label>
        <div class="control">
          <div class="file">
            <label class="file-label">
              <input
                class="file-input"
                type="file"
                name="resume"
                multiple
              />
              <span class="file-cta">
                <span class="file-label"> Choose a file… </span>
              </span>
            </label>
          </div>
        </div>
      </div>
    </section>
```
<!-- div:right-panel -->

<div style="border: 1px solid #eee; border-radius: 8px; overflow: hidden; margin: 1em 0;">
  <iframe src="../html/forms/file/multiple.html" width="100%" height="300px" frameborder="0" style="background: white;"></iframe>
  <div style="background: #f5f5f5; padding: 5px 10px; font-size: 12px; color: #666; text-align: right;">
    <a href="../html/forms/file/multiple.html" target="_blank" style="text-decoration: none; color: #00D69E;">เปิดหน้าต่างใหม่ ↗</a>
  </div>
</div>
<!-- panels:end -->