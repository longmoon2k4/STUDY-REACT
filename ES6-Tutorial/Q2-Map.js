const lawDocuments = [
  { code: "LDS_2015", name: "Bộ luật Dân sự 2015", effectiveDate: "01/01/2017" },
  { code: "LHS_2015", name: "Bộ luật Hình sự 2015", effectiveDate: "01/01/2018" },
  { code: "LDD_2024", name: "Luật Đất đai 2024", effectiveDate: "01/01/2025" }
];

// Hàm map là hàm để biến đổi một mảng thành một mảng mới với các phần tử đã được biến đổi theo một quy tắc nào đó
// Hàm map sẽ trả về một mảng mới với các phần tử đã được biến đổi theo quy tắc được truyền vào trong hàm callback của map
// Cấu trúc như sau hàm map như sau: 
// array.map(hàm callback)

const nameLaw = lawDocuments.map(document => document.name);
console.log(nameLaw);
