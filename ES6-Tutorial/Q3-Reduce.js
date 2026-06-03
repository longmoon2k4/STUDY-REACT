const selectedServices = [
  { serviceName: "Soạn thảo hợp đồng", fee: 500000 },
  { serviceName: "Tư vấn luật doanh nghiệp", fee: 1000000 },
  { serviceName: "Đại diện pháp lý", fee: 2000000 }
];

// Hàm reduce là hàm để tính toán một giá trị tổng hợp từ một mảng, bằng cách áp dụng một hàm callback lên từng phần tử của mảng và tích lũy kết quả lại
// Hàm reduce sẽ trả về một giá trị tổng hợp sau khi đã áp dụng hàm callback lên tất cả các phần tử của mảng
// Cấu trúc như sau hàm reduce như sau: 
// array.reduce(hàm callback, giá trị khởi tạo)

const totalFee= selectedServices.reduce((total, currentFee) => total + currentFee.fee, 0);
console.log(totalFee);