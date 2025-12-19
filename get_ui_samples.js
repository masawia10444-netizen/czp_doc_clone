const fs = require('fs');
const path = require('path');
const https = require('https');

// ตั้งค่า
const BASE_URL = 'https://czp.dga.or.th/czpdocs/'; // Base URL ของเว็บ
const MARKDOWN_DIR = './page';  // โฟลเดอร์เก็บไฟล์ .md
const HTML_DIR = '.';           // โฟลเดอร์ที่จะวางไฟล์ html (วางที่ root เพื่อให้ path ตรงกัน)

// ฟังก์ชันดาวน์โหลด
const downloadFile = (url, dest) => {
    return new Promise((resolve) => {
        const dir = path.dirname(dest);
        if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });

        // เช็คว่ามีไฟล์อยู่แล้วไหม (จะได้ไม่โหลดซ้ำ)
        if (fs.existsSync(dest)) {
            // console.log(`- ข้าม (มีแล้ว): ${dest}`);
            resolve(true); 
            return;
        }

        const file = fs.createWriteStream(dest);
        https.get(url, (response) => {
            if (response.statusCode !== 200) {
                console.error(`❌ หาไม่เจอ (${response.statusCode}): ${url}`);
                resolve(false);
                return;
            }
            response.pipe(file);
            file.on('finish', () => {
                file.close(() => {
                    console.log(`✅ Downloaded: ${dest}`);
                    resolve(true);
                });
            });
        }).on('error', (err) => {
            fs.unlink(dest, () => {});
            console.error(`Error: ${err.message}`);
            resolve(false);
        });
    });
};

const processFiles = async () => {
    if (!fs.existsSync(MARKDOWN_DIR)) {
        console.error('ไม่พบโฟลเดอร์ page/ ครับ');
        return;
    }

    const files = fs.readdirSync(MARKDOWN_DIR);
    console.log('--- เริ่มดาวน์โหลด UI Samples และแปลงโค้ด ---');

    for (const file of files) {
        if (path.extname(file) === '.md') {
            const filePath = path.join(MARKDOWN_DIR, file);
            let content = fs.readFileSync(filePath, 'utf8');
            let hasChange = false;

            // Regex หา Pattern: <<<-html/path/to/file.html-OPTION->>>
            // Group 1 = path ของไฟล์ html
            // Group 2 = options (ถ้ามี)
            const regex = /<<<-(html\/.*?)(?:-(.*?))?->>>/g;
            
            // ใช้ loop เพื่อรอ download ให้เสร็จก่อนแทนที่
            let match;
            const matches = [];
            while ((match = regex.exec(content)) !== null) {
                matches.push({ full: match[0], path: match[1], options: match[2] });
            }

            for (const m of matches) {
                const fullUrl = BASE_URL + m.path;
                const localDest = path.join(HTML_DIR, m.path);

                // 1. ดาวน์โหลดไฟล์ตัวอย่าง
                await downloadFile(fullUrl, localDest);

                // 2. แปลง Syntax เป็น iframe
                // ปรับความสูง iframe ตามเนื้อหา (คร่าวๆ) หรือ fix ไว้ก่อน
                let height = '300px'; 
                if (m.options && m.options.includes('H:')) {
                    const hMatch = m.options.match(/H:(\d+)/);
                    if (hMatch) height = hMatch[1] + 'px';
                }

                const iframeTag = `
<div style="border: 1px solid #eee; border-radius: 8px; overflow: hidden; margin: 1em 0;">
  <iframe src="../${m.path}" width="100%" height="${height}" frameborder="0" style="background: white;"></iframe>
  <div style="background: #f5f5f5; padding: 5px 10px; font-size: 12px; color: #666; text-align: right;">
    <a href="../${m.path}" target="_blank" style="text-decoration: none; color: #00D69E;">เปิดหน้าต่างใหม่ ↗</a>
  </div>
</div>`;
                
                content = content.replace(m.full, iframeTag);
                hasChange = true;
            }

            // 3. บันทึกไฟล์ .md ทับ (ถ้ามีการแก้ไข)
            if (hasChange) {
                fs.writeFileSync(filePath, content, 'utf8');
                console.log(`📝 อัปเดตไฟล์: ${file}`);
            }
        }
    }
    console.log('--- เสร็จสิ้นทุกขั้นตอน ---');
};

processFiles();