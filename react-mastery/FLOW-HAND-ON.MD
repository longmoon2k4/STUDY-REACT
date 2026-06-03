# Lộ Trình Phát Triển Toàn Diện Với React (Từ Số 0 Đến Dự Án Chuẩn)

Tài liệu này cung cấp một lộ trình học tập bài bản, chi tiết nhằm chuyển đổi từ tư duy lập trình thuần túy sang kiến trúc Single Page Application (SPA) với React. Mỗi giai đoạn đều đi kèm mục tiêu kiến thức cốt lõi và bài tập thực hành tương ứng để tối ưu hóa khả năng ghi nhớ và vận dụng vào các hệ thống thực tế.

---

## 🎯 Giai Đoạn 1: Nền Tảng JavaScript Hiện Đại (ES6+)
Trước khi bắt đầu với React, việc làm chủ các tính năng của JavaScript hiện đại là bắt buộc để tránh những hiểu lầm về mặt cú pháp và cơ chế vận hành.

### 1. Kiến thức cốt lõi
* **Biến và Phạm vi (Scope):** Hiểu rõ sự khác biệt giữa `let`, `const`, và `var`; cơ chế Block Scope.
* **Hàm mũi tên (Arrow Functions):** Cú pháp ngắn gọn, cách xử lý từ khóa `this`.
* **Destructuring & Rest/Spread Operator:** Kỹ thuật bóc tách dữ liệu từ Object/Array và sao chép vùng nhớ (Shallow copy) với `...`.
* **Phương thức xử lý mảng nâng cao:** `.map()`, `.filter()`, `.reduce()`, `.find()` (đặc biệt là `.map` để render danh sách giao diện).
* **Bất đồng bộ (Asynchronous JS):** Nắm vững cách xử lý dữ liệu từ Server thông qua `Promise` và cú pháp `async/await`.

### 🫵 Bài tập thực hành 1: Data Transformer
* **Yêu cầu:** Viết một file JavaScript thuần (chạy bằng Node.js hoặc Console của trình duyệt). Tạo một mảng các Object chứa thông tin bản ghi dữ liệu thô (ví dụ: danh sách thực thể gồm mã định danh, trạng thái, và một mảng số liệu).
* **Nhiệm vụ:**
    1. Dùng `.filter()` để lọc ra các thực thể có trạng thái hoạt động (`active: true`).
    2. Dùng `.map()` để chuyển đổi cấu trúc mảng cũ thành mảng mới, chuẩn hóa lại định dạng tiêu đề (viết hoa chữ cái đầu) và tính toán giá trị trung bình từ mảng số liệu nội bộ.
    3. Dùng `async/await` để giả lập một hàm gửi mảng đã chuẩn hóa này lên server sau 1.5 giây.

---

## 🎯 Giai Đoạn 2: Những "Viên Gạch" Đầu Tiên Với React
Hiểu cách React xây dựng giao diện dựa trên tư duy chia nhỏ cấu phần (Component-driven) và quản lý dòng chảy dữ liệu.

### 1. Kiến thức cốt lõi
* **Function Component & JSX:** Cách viết cú pháp giống HTML bên trong JavaScript. Hiểu cơ chế chuyển đổi của JSX thành các lời gọi hàm `React.createElement`.
* **Props (Properties):** Cơ chế truyền dữ liệu một chiều (Unidirectional data flow) từ Component cha xuống Component con. Props là bất biến (Read-only).
* **State (`useState`):** Bộ nhớ nội bộ của Component. Hiểu khi nào State thay đổi thì Component sẽ được tái cấu trúc và render lại (Re-render).
* **Conditional Rendering:** Hiển thị giao diện linh hoạt dựa trên điều kiện sử dụng toán tử ba ngôi `? :` hoặc toán tử logic `&&`.
* **List Rendering:** Duyệt mảng dữ liệu để xuất ra JSX. Bắt buộc phải hiểu ý nghĩa của thuộc tính `key` để tối ưu Virtual DOM.

### 🫵 Bài tập thực hành 2: Ứng Dụng Quản Lý Task Giao Việc (Todo App)
* **Yêu cầu:** Tạo một ứng dụng Single Page đơn giản gồm các component: `App`, `Header`, `TaskForm`, `TaskList`, `TaskItem`.
* **Nhiệm vụ:**
    * Thiết lập một state chứa danh sách các task tại component `App`.
    * Truyền hàm xử lý từ `App` xuống `TaskForm` để lấy dữ liệu nhập vào từ ô Input và thêm task mới vào danh sách.
    * Hiển thị danh sách thông qua `TaskList`. Mỗi dòng (`TaskItem`) có nút bấm để đổi trạng thái hoàn thành (gạch ngang chữ) hoặc nút Xóa để loại bỏ task khỏi state.

---

## 🎯 Giai Đoạn 3: Quản Lý Vòng Đời & Hiệu Ứng Phụ (Hooks Cốt Lõi)
Làm chủ cách thức React tương tác với môi trường bên ngoài (Browser API, LocalStorage, Timers).

### 1. Kiến thức cốt lõi
* **`useEffect` (Side Effects):**
    * *Mảng phụ thuộc rỗng `[]`:* Thực thi logic một lần duy nhất sau khi component mount (tương đương componentDidMount).
    * *Mảng có phụ thuộc `[dependency]`:* Thực thi lại mỗi khi giá trị phụ thuộc thay đổi.
    * *Cleanup Function:* Trả về một hàm bên trong `useEffect` để dọn dẹp bộ nhớ (hủy listener, xóa timer) tránh rò rỉ bộ nhớ (Memory Leak).
* **`useRef`:** Lưu trữ giá trị qua các lần render mà không kích hoạt re-render giao diện. Thường dùng để truy cập và tương tác trực tiếp với phần tử DOM thuần.

### 🫵 Bài tập thực hành 3: Đồng Bộ Hóa Trạng Thái Với Bộ Nhớ Trình Duyệt
* **Yêu cầu:** Nâng cấp ứng dụng Todo App ở Giai đoạn 2.
* **Nhiệm vụ:**
    1. Sử dụng `useEffect` để theo dõi sự thay đổi của state danh sách task. Mỗi khi mảng này thay đổi, tự động mã hóa chuỗi JSON và lưu vào `localStorage`.
    2. Sử dụng hàm khởi tạo trạng thái ban đầu của `useState` để đọc dữ liệu từ `localStorage` khi người dùng tải lại trang (F5), đảm bảo dữ liệu được duy trì liên tục.
    3. Sử dụng `useRef` để tự động đưa con trỏ chuột (Focus) vào ô nhập Task ngay khi ứng dụng vừa được mở lên.

---

## 🎯 Giai Đoạn 4: Kiến Trúc Thư Mục Chuẩn & Định Tuyến Hệ Thống
Chuẩn bị cấu trúc mã nguồn sẵn sàng cho các dự án lớn và xử lý chuyển đổi qua lại giữa các phân hệ chức năng.

### 1. Kiến thức cốt lõi
* **Kiến trúc thư mục chuẩn Scalable:**
    ```text
    src/
    ├── assets/          # Hình ảnh, font, styles toàn cục
    ├── components/      # Các component dùng chung cho toàn hệ thống (Button, Input, Modal)
    ├── layouts/         # Khung giao diện cố định (Sidebar, Navbar, Footer)
    ├── pages/           # Các component đại diện cho một trang lớn (Home, Dashboard, Settings)
    ├── routes/          # Cấu hình định tuyến đường dẫn
    ├── services/        # Định nghĩa các hàm gọi API, cấu hình Axios
    ├── utils/           # Các hàm bổ trợ xử lý logic chung (Format ngày tháng, tiền tệ)
    └── App.jsx
    ```
* **React Router DOM (Phiên bản mới nhất):**
    * Cấu hình hệ thống định tuyến bằng `BrowserRouter`, `Routes`, `Route`.
    * Tạo các đường dẫn động với tham số (Dynamic Routing): `/user/:id` và trích xuất bằng `useParams`.
    * Điều hướng lập trình (Programmatic Navigation) bằng hook `useNavigate`.

### 🫵 Bài tập thực hành 4: Khung Giao Diện Quản Trị Hệ Thống (Admin Dashboard Blueprint)
* **Yêu cầu:** Triển khai cấu trúc thư mục như trên và cấu hình React Router DOM.
* **Nhiệm vụ:**
    * Tạo một `MainLayout` chứa thanh điều hướng phía trên (Navbar) và thanh menu bên cạnh (Sidebar).
    * Định nghĩa ít nhất 3 trang: `DashboardPage` (Trang chủ), `UserManagementPage` (Quản lý danh sách), và `UserDetailPage` (Xem chi tiết một người dùng cụ thể).
    * Tạo liên kết để khi nhấn vào một người dùng bất kỳ ở trang Danh sách, hệ thống sẽ chuyển hướng sang trang Chi tiết và hiển thị đúng ID của người dùng đó lên màn hình thông qua URL.

---

## 🎯 Giai Đoạn 5: Kết Nối Backend & Tích Hợp API
Giai đoạn chuyển đổi ứng dụng từ tĩnh (Static dữ liệu giả) sang động (Dynamic dữ liệu thực tế từ hệ thống máy chủ).

### 1. Kiến thức cốt lõi
* **Giao thức HTTP & REST Client:** Sử dụng thư viện **Axios** để thay thế cho Fetch API tiêu chuẩn nhằm tận dụng các tính năng Interceptors (cấu hình token tự động), cấu hình Timeout và Base URL tập trung.
* **Xử lý các trạng thái bất đồng bộ:** Luôn luôn quản lý tối thiểu 3 trạng thái của một tác vụ gọi mạng: `isLoading` (Đang tải), `data` (Dữ liệu nhận về), và `error` (Lỗi phát sinh).
* **Tích hợp đầy đủ các phương thức CRUD:** `GET` (Đọc danh sách/chi tiết), `POST` (Tạo mới bản ghi), `PUT`/`PATCH` (Cập nhật thông tin), `DELETE` (Xóa bản ghi).

### 🫵 Bài tập thực hành 5: Tích Hợp Hệ Thống Quản Lý Dữ Liệu Thực Tế
* **Yêu cầu:** Kết nối trang `UserManagementPage` (ở Giai đoạn 4) với một hệ thống RESTful API thực tế (Có thể tự xây dựng bằng Spring Boot ở cổng `localhost:8080` hoặc sử dụng Mock API như Mockapi.io / JSONPlaceholder).
* **Nhiệm vụ:**
    1. Khi trang được tải, kích hoạt một lệnh gọi `GET` để lấy danh sách dữ liệu thực tế từ Server và render ra bảng (Table). Hiển thị hiệu ứng loading (Spinner/Skeleton) trong lúc đợi kết quả.
    2. Thiết kế một Form nhập liệu để gửi yêu cầu `POST` thêm mới một bản ghi. Xử lý phản hồi từ server: Nếu thành công, tự động cập nhật lại bảng dữ liệu mà không cần tải lại toàn bộ trang web. Nếu thất bại, hiển thị thông báo lỗi trực quan cho người dùng.

---

## 🎯 Giai Đoạn 6: Quản Lý Form Phức Tạp & Trạng Thái Toàn Cục (Global State)
Tối ưu hóa hiệu năng ứng dụng, kiểm soát việc nhập liệu chặt chẽ và chia sẻ dữ liệu xuyên suốt các tầng Component.

### 1. Kiến thức cốt lõi
* **Quản lý Form nâng cao với React Hook Form:** Tránh việc component bị re-render liên tục trên mỗi ký tự nhập vào như cách dùng `useState` thông thường (Uncontrolled components).
* **Xác thực dữ liệu (Validation) với Zod / Yup:** Định nghĩa cấu trúc Schema dữ liệu mong muốn (Bắt buộc nhập, độ dài tối thiểu, định dạng email, khớp mật khẩu) và tự động bắt lỗi ngay ở Frontend trước khi gửi lên Server.
* **Global State Management (Quản lý trạng thái tập trung):**
    * *Context API:* Phù hợp cho các trạng thái ít thay đổi, phạm vi hẹp (ví dụ: Cấu hình giao diện Sáng/Tối, Ngôn ngữ hệ thống).
    * *Zustand hoặc Redux Toolkit:* Phù hợp cho các trạng thái thay đổi liên tục, cấu trúc dữ liệu phức tạp cần chia sẻ giữa các trang không có quan hệ cha-con (ví dụ: Session đăng nhập của User, Giỏ hàng mua sắm, Trạng thái thông báo thời gian thực).

### 🫵 Bài tập thực hành 6: Đăng Nhập & Giỏ Hàng Toàn Hệ Thống
* **Yêu cầu:** Triển khai giải pháp quản lý trạng thái tập trung bảo mật cao.
* **Nhiệm vụ:**
    1. **Form Đăng Nhập:** Tạo trang `LoginPage`. Dùng *React Hook Form* + *Zod* để kiểm tra tính hợp lệ của email và mật khẩu. Gửi API đăng nhập, nhận về Token (JWT) từ server.
    2. **State Toàn Cục:** Sử dụng *Zustand* để lưu trữ thông tin User đã đăng nhập và trạng thái Token này.
    3. **Ứng Dụng Thực Tế:** Cho phép người dùng chuyển qua lại giữa các trang khác nhau. Trên thanh điều hướng (Navbar) cố định, luôn hiển thị đúng Tên của người dùng đang đăng nhập và số lượng sản phẩm hiện tại trong giỏ hàng được lấy ra từ Global Store của Zustand. Nếu Token hết hạn hoặc bấm Đăng xuất, xóa dữ liệu trong Store và tự động đẩy người dùng về lại trang `LoginPage`.