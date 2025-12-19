const fs = require('fs');
const path = require('path');
const https = require('https');

// URL ของ CSS ที่ DGA ใช้ (เอามาจาก development.md)
const cssUrl = 'https://czp.dga.or.th/cportal/sdk/css/v1/trunks.min.css';
const outputDir = './css';
const fileName = 'trunks.min.css';

const downloadCSS = () => {
    // 1. สร้างโฟลเดอร์ css ถ้ายังไม่มี
    if (!fs.existsSync(outputDir)){
        fs.mkdirSync(outputDir);
    }

    const filePath = path.join(outputDir, fileName);
    const file = fs.createWriteStream(filePath);

    console.log(`⏳ กำลังดาวน์โหลด CSS จาก: ${cssUrl}`);

    https.get(cssUrl, (response) => {
        if (response.statusCode !== 200) {
            console.error(`❌ ดาวน์โหลดไม่สำเร็จ (Status ${response.statusCode})`);
            return;
        }

        response.pipe(file);

        file.on('finish', () => {
            file.close(() => {
                console.log(`✅ สำเร็จ! เซฟไฟล์ไว้ที่: ${filePath}`);
            });
        });
    }).on('error', (err) => {
        fs.unlink(filePath, () => {});
        console.error(`Error: ${err.message}`);
    });
};

downloadCSS();