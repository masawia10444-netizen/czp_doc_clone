# ใช้ Nginx ตัวเล็กสุด (Alpine) เป็นฐาน
FROM nginx:alpine

# ก๊อปปี้ไฟล์โปรเจคทั้งหมดในเครื่องเรา ไปใส่ในโฟลเดอร์เว็บของ Nginx ใน Container
COPY . /usr/share/nginx/html

# (Optional) สร้างไฟล์ Config Nginx พื้นฐานเพื่อให้รองรับ Docsify ได้ดีขึ้น
# แต่ถ้าเป็น Docsify เดิมๆ ไม่ต้องแก้ก็ได้ครับ ใช้ Default ได้เลย

# เปิด Port 80 (ใน Container)
EXPOSE 80