// src/data/products.js
export const categories = [
    { id: 'all', name: 'ทั้งหมด' },
    { id: 'electronics', name: 'อิเล็กทรอนิกส์' },
    { id: 'clothing', name: 'เสื้อผ้า' },
    { id: 'books', name: 'หนังสือ' },
    { id: 'foods', name: 'อาหาร'  },
    { id: 'shoes', name: 'รองเท้า'  }
];

// ข้อมูลสินค้าพื้นฐาน - นักศึกษาจะเพิ่มเติมใน Challenge
export const products = [
    {
        id: 1,
        name: 'iPhone 15 Pro',
        category: 'electronics',
        originalPrice: 45900,
        discount:41900,
        image: 'https://placehold.co/300x300/007bff/ffffff?text=iPhone+15',
        description: 'สมาร์ทโฟนล่าสุดจาก Apple',
        inStock: true,
        rating: 4.8
    },
    {
        id: 2,
        name: 'T-Shirt',
        category: 'clothing',
        originalPrice: 299,
        discount:180,
        image: 'https://placehold.co/300x300/ffc107/000000?text=T-Shirt',
        description: 'เสื้อยืดผ้าฝ้าย 100% นุ่มสบาย',
        inStock: true,
        rating: 4.2
    },
    {
        id: 3,
        name: 'หนังสือ React.js Guide',
        category: 'books',
        originalPrice: 650,
        discount:399,
        image: 'https://placehold.co/300x300/c1e7ff/000000?text=React+Book',
        description: 'คู่มือเรียนรู้ React.js ฉบับสมบูรณ์',
        inStock: false,
        rating: 4.7
    },
    {
        id: 4,
        name: 'Airpods Gen 3',
        category: 'electronics',
        originalPrice: 4790,
        discount:4200,
        image: 'https://placehold.co/300x300/FF8F00/000000?text=Airpods+Gen+3',
        description: 'หูฟังไร้สาย TWS รุ่นใหม่ล่าสุดของ Apple',
        inStock: false,
        rating: 4.6
    },
    {
        id: 5,
        name: 'Fried Chicken',
        category: 'foods',
        originalPrice: 140,
        discount: 98,
        image: 'https://placehold.co/300x300/17a2b8/ffffff?text=Fried+Chicken',
        description: 'อกไก่ทอดกรอบ ไม่อบน้ำมัน',
        inStock: false,
        rating: 4.4
    },
    {
        id: 6,
        name: 'Nike Air Jordan 4',
        category: 'shoes',
        originalPrice: 5200,
        discount :4799,
        image: 'https://placehold.co/300x300/43A047/ffffff?text=Nike+Air+Jordan+4',
        description: 'รองเท้าวิ้ง Nike รุ่น Air Jordan ยอดนิยม',
        inStock: false,
        rating: 4.9
    },
    {
        id: 7,
        name: 'GQ Perfect Pants',
        category: 'clothing',
        originalPrice: 1390,
        discount :890,
        image: 'https://placehold.co/300x300/7B1FA2/ffffff?text=GQ+Perfect+Pants',
        description: 'กางเกงสแล็คขายาวที่พร้อมพาคุณก้าวข้ามทุกปัญหา ด้วยนวัตกรรมผ้ายืด สะท้อนน้ำ เอวปรับได้ จบเรื่องเป้าแตก ขาเปื้อน เอวปริ ',
        inStock: false,
        rating: 4.5
    },
    {
        id: 8,
        name: 'Adidas Samba OG',
        category: 'shoes',
        originalPrice: 3800,
        discount :2900,
        image: 'https://placehold.co/300x300/0288D1/ffffff?text=Adidas+Samba+OG',
        description: 'รองเท้า Samba ถือกำเนิดขึ้นบนสนามฟุตบอล รูปทรงรองเท้าคู่นี้ยังคงเอกลักษณ์ตามแบบต้นฉบับเอาไว้ มาพร้อมอัปเปอร์หนังสัมผัสนุ่มสุดคลาสสิก โอเวอร์เลย์หนังซูเอด และพื้นยาง ซึ่งทําให้รองเท้าคู่นี้กลายเป็นไอเทมสำหรับในและนอกสนามที่ทุกคนต้องมีติดตู้',
        inStock: false,
        rating: 4.8
    }
];