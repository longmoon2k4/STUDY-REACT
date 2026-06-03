const userQueries = [
  { id: 1, content: "Thủ tục ly hôn cần những gì?", isResolved: true },
  { id: 2, content: "Làm sao để giải quyết tranh chấp đất đai?", isResolved: false },
  { id: 3, content: "Quy trình thành lập công ty TNHH?", isResolved: false }
];

// Hàm filter là hàm để lọc ra những phần tử thỏa mãn điều kiện nào đó
// Hàm filter sẽ trả về mảng mới thỏa mãn điều kiện được truyền vào trong hàm callback của filter
// Cấu trúc như sau hàm filter như sau: 
// array.filter(hàm callback)

const resolveQueries = userQueries.filter(query => !query.isResolved);
console.log(resolveQueries);

