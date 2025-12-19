# ใช้ Nginx ตัวเดิม
FROM nginx:alpine

# --- แก้ตรงนี้ครับ ---
# เดิม: COPY . /usr/share/nginx/html
# ใหม่: สร้างโฟลเดอร์ชื่อ czp-doc-clone ซ้อนเข้าไป
COPY . /usr/share/nginx/html/czp-doc-clone

# แก้พอร์ตเป็น 8080 เหมือนเดิม
RUN sed -i 's/listen       80;/listen       8080;/' /etc/nginx/conf.d/default.conf

# เปิดพอร์ต 8080
EXPOSE 8080