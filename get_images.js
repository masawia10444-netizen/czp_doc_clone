const fs = require('fs');
const path = require('path');
const https = require('https');

// ตั้งค่า URL ต้นทาง
const BASE_URL = 'https://czp.dga.or.th/czpdocs/';
// โฟลเดอร์ที่เก็บไฟล์ .md ของคุณ
const MARKDOWN_DIR = './page';
// โฟลเดอร์ที่จะเซฟรูป
const MEDIA_DIR = './_media';

// ฟังก์ชันดาวน์โหลดไฟล์
const downloadFile = (url, dest) => {
    return new Promise((resolve, reject) => {
        // สร้างโฟลเดอร์ปลายทางถ้ายังไม่มี
        const dir = path.dirname(dest);
        if (!fs.existsSync(dir)){
            fs.mkdirSync(dir, { recursive: true });
        }

        const file = fs.createWriteStream(dest);
        https.get(url, (response) => {
            // เช็คว่าไฟล์มีอยู่จริงไหม (Status 200)
            if (response.statusCode !== 200) {
                console.error(`❌ หาไม่เจอ (Status ${response.statusCode}): ${url}`);
                response.resume(); // consume response data to free up memory
                return; 
            }

            response.pipe(file);
            file.on('finish', () => {
                file.close(() => {
                    console.log(`✅ Downloaded: ${dest}`);
                    resolve();
                });
            });
        }).on('error', (err) => {
            fs.unlink(dest, () => {}); // ลบไฟล์ที่เสียทิ้ง
            console.error(`Error downloading ${url}: ${err.message}`);
            reject(err.message);
        });
    });
};

// ฟังก์ชันอ่านไฟล์ MD และหาลิงก์รูป
const scanAndDownload = async () => {
    if (!fs.existsSync(MARKDOWN_DIR)) {
        console.error('ไม่พบโฟลเดอร์ page/ กรุณาสร้างและย้ายไฟล์ .md เข้าไปก่อนครับ');
        return;
    }

    const files = fs.readdirSync(MARKDOWN_DIR);
    
    console.log('--- เริ่มค้นหารูปภาพในไฟล์ Markdown ---');

    for (const file of files) {
        if (path.extname(file) === '.md') {
            const content = fs.readFileSync(path.join(MARKDOWN_DIR, file), 'utf8');
            // Regex หา Pattern: ![alt](../_media/...)
            const regex = /!\[.*?\]\(\.\.\/(_media\/.*?)\)/g;
            let match;
            
            while ((match = regex.exec(content)) !== null) {
                const imagePath = match[1]; // เช่น _media/android/1.jpg
                const fullUrl = BASE_URL + imagePath;
                const localDest = path.join('.', imagePath); // เซฟลง ./_media/...
                
                // ตรวจสอบว่ามีไฟล์หรือยัง จะได้ไม่โหลดซ้ำ
                if (!fs.existsSync(localDest)) {
                    await downloadFile(fullUrl, localDest);
                } else {
                    console.log(`- ข้าม (มีแล้ว): ${imagePath}`);
                }
            }
        }
    }
    console.log('--- เสร็จสิ้น ---');
};

scanAndDownload();