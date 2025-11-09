import React, { useState, useRef } from 'react';

// Main App Component
const App = () => {
  // State management for form inputs
  const [monHoc, setMonHoc] = useState('');
  const [khoiLop, setKhoiLop] = useState<number | null>(null);
  const [phuLuc, setPhuLuc] = useState<string | null>(null); // 'pl1', 'pl3', or 'pl4'
  const [fileName, setFileName] = useState('');
  const [generatedPrompt, setGeneratedPrompt] = useState('');
  const [error, setError] = useState('');

  const fileInputRef1 = useRef<HTMLInputElement>(null);
  const fileInputRef3 = useRef<HTMLInputElement>(null);
  const fileInputRef4 = useRef<HTMLInputElement>(null);

  // Prompt templates
  const promptTemplate1 = `Tạo **PHỤ LỤC 1: TÍCH HỢP NĂNG LỰC SỐ VÀO KẾ HOẠCH DẠY HỌC (Dành cho Tổ chuyên môn)**

**Bối cảnh:**
Bạn là chuyên gia giáo dục Việt Nam, am hiểu sâu sắc Chương trình GDPT 2018. Nhiệm vụ của bạn là hỗ trợ Tổ chuyên môn môn **\`${monHoc}\`** xây dựng một phụ lục tích hợp Năng lực số (NLS), trong đó **diễn giải chi tiết** hoạt động thực tế để hình thành NLS cho học sinh khối **\`${khoiLop}\`**.

**Tài liệu nguồn (BẮT BUỘC):**
1.  **\`Thông tư 02/2025/TT-BGDĐT\` (Khung NLS):** Tài liệu gốc để hiểu bản chất của từng năng lực.
2.  **\`Công văn 405/SGDĐT-GDTrH Quảng Ngãi\`:** Đây là tài liệu định hướng để xác định **MỨC ĐỘ** năng lực phù hợp cho từng khối lớp, được quy định rõ trong Phụ lục đính kèm Công văn 405. Cụ thể:
    *   **Lớp 1, 2:** Ưu tiên mức **"Cơ bản 1"** (tương ứng cột L1-L2).
    *   **Lớp 3, 4, 5:** Ưu tiên mức **"Cơ bản 2"** (tương ứng cột L3-L4-L5).
    *   **Lớp 6, 7:** Ưu tiên mức **"Trung cấp 1"** (tương ứng cột L6-L7).
    *   **Lớp 8, 9:** Ưu tiên mức **"Trung cấp 2"** (tương ứng cột L8-L9).
    *   **Lớp 10, 11, 12:** Ưu tiên mức **"Nâng cao 1"** (tương ứng cột L10-L11-L12).
    *   *Lưu ý: Có thể linh hoạt sử dụng mức độ cao hơn nếu nội dung bài học đòi hỏi.*
3.  **\`${fileName}\` (Kế hoạch dạy học đính kèm):** Tài liệu chính để phân tích nội dung bài học.

**Yêu cầu chi tiết về quy trình (CỰC KỲ QUAN TRỌNG):**

1.  **Phân tích KHDH:** Từ file **\`${fileName}\`**, xác định các tiết học (PP) phù hợp để tích hợp NLS.
2.  **Xác định NLS và CHỈ BÁO:**
    *   Với mỗi tiết học đã chọn, tìm đến Năng lực thành phần tương ứng trong Thông tư 02 (ví dụ: 1.1).
    *   Dựa vào định hướng mức độ cho khối **\`${khoiLop}\`** từ Công văn 405, xác định đúng cột mức độ trong bảng mô tả của Thông tư 02.
    *   Trong cột đó, có nhiều **chỉ báo được đánh dấu bằng gạch đầu dòng (-)**. Bạn phải **chọn ra MỘT chỉ báo (một gạch đầu dòng)** cụ thể, phù hợp nhất với hoạt động dạy học.
3.  **DIỄN GIẢI HOẠT ĐỘNG THỰC TẾ:**
    *   Đây là yêu cầu then chốt. Dựa trên chỉ báo đã chọn, hãy **diễn giải nó thành một hoạt động học tập cụ thể, sinh động, gắn chặt với bài học của tiết đó**.
    *   **Ví dụ (Lớp 6):** Nếu chọn chỉ báo "- Giải thích được nhu cầu thông tin" cho bài "Chạy cự li ngắn", bạn phải diễn giải thành: **"TC 1.1.a: HS được giao nhiệm vụ tìm kiếm video về 'kỹ thuật chạy giữa quãng 60m' để hiểu rõ hơn về cách duy trì tốc độ."**
4.  **Trình bày kết quả:**
    *   Ghi kết quả vào bảng theo định dạng yêu cầu.
    *   Phần "Năng lực số hình thành" phải bắt đầu bằng mã viết tắt (CB, TC, NC, CS) + mã năng lực + ký hiệu chỉ báo (a,b,c...), theo sau là phần diễn giải thực tế.

**Định dạng đầu ra:**

**PHỤ LỤC 1: TÍCH HỢP NĂNG LỰC SỐ VÀO KẾ HOẠCH DẠY HỌC MÔN \`${monHoc}\` - KHỐI \`${khoiLop}\`**
*(Phiên bản diễn giải chi tiết cho Tổ chuyên môn)*

| Tiết PP | Chủ đề/Bài học | Năng lực số hình thành |
| :--- | :--- | :--- |
| *(Dữ liệu do bạn tạo ra)* |

**Lưu ý:**
File Kế hoạch dạy học đính kèm có tên là **\`${fileName}\`**. Hãy xác nhận đã nhận và phân tích được file này trước khi bắt đầu.`;

  const promptTemplate3 = `Tạo **PHỤ LỤC 3: NĂNG LỰC SỐ CẦN HÌNH THÀNH TRONG MÔN HỌC (Dành cho Kế hoạch giáo dục của giáo viên)**

**Bối cảnh:**
Bạn là chuyên gia giáo dục Việt Nam. Nhiệm vụ của bạn là hỗ trợ tôi, một giáo viên môn **\`${monHoc} ${khoiLop}\`**, xây dựng một phụ lục đính kèm Kế hoạch giáo dục cá nhân. Phụ lục này cần **trích dẫn nguyên văn và chính xác tuyệt đối** các chỉ báo năng lực số (NLS) được hình thành trong năm học.

**Tài liệu nguồn (BẮT BUỘC):**
1.  **\`Thông tư 02/2025/TT-BGDĐT\` (Khung NLS):** Tài liệu gốc để tra cứu và **sao chép nguyên văn** mô tả của từng chỉ báo.
2.  **\`Công văn 405/SGDĐT-GDTrH Quảng Ngãi\`:** Đây là tài liệu định hướng để xác định **MỨC ĐỘ** năng lực phù hợp cho từng khối lớp, được quy định rõ trong Phụ lục đính kèm Công văn 405. Cụ thể:
    *   **Lớp 1, 2:** Ưu tiên mức **"Cơ bản 1"** (tương ứng cột L1-L2).
    *   **Lớp 3, 4, 5:** Ưu tiên mức **"Cơ bản 2"** (tương ứng cột L3-L4-L5).
    *   **Lớp 6, 7:** Ưu tiên mức **"Trung cấp 1"** (tương ứng cột L6-L7).
    *   **Lớp 8, 9:** Ưu tiên mức **"Trung cấp 2"** (tương ứng cột L8-L9).
    *   **Lớp 10, 11, 12:** Ưu tiên mức **"Nâng cao 1"** (tương ứng cột L10-L11-L12).
3.  **\`${fileName}\` (Kế hoạch dạy học đính kèm):** Tài liệu chính để phân tích nội dung bài học.

**Yêu cầu chi tiết về quy trình (CỰC KỲ QUAN TRỌNG):**

1.  **Phân tích KHDH:** Từ file **\`${fileName}\`**, xác định các tiết học (PP) phù hợp để tích hợp NLS.
2.  **Xác định NLS và CHỈ BÁO:**
    *   Với mỗi tiết học đã chọn, tìm đến Năng lực thành phần tương ứng trong Thông tư 02 (ví dụ: 1.1).
    *   Dựa vào định hướng mức độ cho khối **\`${khoiLop}\`** từ Công văn 405, xác định đúng cột mức độ trong bảng mô tả của Thông tư 02.
    *   Trong cột đó, bạn phải **chọn ra MỘT chỉ báo (nội dung của một gạch đầu dòng "-")** cụ thể, phù hợp nhất với hoạt động dạy học.
3.  **TRÍCH DẪN NGUYÊN VĂN:**
    *   Đây là yêu cầu then chốt. Bạn phải **sao chép chính xác từng từ** của chỉ báo đã chọn từ Thông tư 02 vào bảng kết quả. **TUYỆT ĐỐI KHÔNG** diễn giải, tóm tắt hay thay đổi bất kỳ từ ngữ nào.
4.  **Trình bày kết quả:**
    *   Ghi kết quả vào bảng theo định dạng yêu cầu.
    *   Phần "Năng lực số hình thành" phải bắt đầu bằng mã viết tắt (CB, TC, NC, CS) + mã năng lực + ký hiệu chỉ báo (a,b,c...), theo sau là phần mô tả được sao chép nguyên văn.

**Định dạng đầu ra:**

**PHỤ LỤC 3: NĂNG LỰC SỐ CẦN HÌNH THÀNH TRONG MÔN \`${monHoc} ${khoiLop}\` - KHỐI \`${khoiLop}\`**
*(Phiên bản trích dẫn nguyên văn theo Thông tư)*

| Tiết PP | Chủ đề/Bài học | Năng lực số hình thành |
| :--- | :--- | :--- |
| *(Dữ liệu do bạn tạo ra. Ví dụ: "TC 1.1.a: Giải thích được nhu cầu thông tin.")* |

**Lưu ý:**
File Kế hoạch dạy học đính kèm có tên là **\`${fileName}\`**. Hãy xác nhận đã nhận và phân tích được file này trước khi bắt đầu.`;
  
  const promptTemplate4 = `Nâng cấp Kế hoạch dạy học: Tích hợp sâu Năng lực số

**Bối cảnh:**
Bạn là một chuyên gia sư phạm hiện đại, bậc thầy về việc tích hợp Năng lực số (NLS) vào Kế hoạch dạy học (KHDH) theo Chương trình GDPT 2018. Nhiệm vụ của bạn là **KHÔNG** tạo ra một phụ lục mới, mà là **TRỰC TIẾP CHỈNH SỬA VÀ BỔ SUNG** nội dung vào file KHDH **\`${fileName}\`** mà tôi cung cấp. Bạn sẽ làm giàu KHDH bằng cách thêm các mục tiêu NLS và các hoạt động tích hợp cụ thể.

**Tài liệu nguồn (BẮT BUỘC):**
1.  **\`Thông tư 02/2025/TT-BGDĐT\` (Khung NLS):** Tài liệu gốc để tra cứu và **trích dẫn nguyên văn** các chỉ báo năng lực.
2.  **\`Công văn 405/SGDĐT-GDTrH Quảng Ngãi\` (knls.pdf):** Tài liệu định hướng để xác định **MỨC ĐỘ** năng lực phù hợp cho khối **\`${khoiLop}\`**.
3.  **\`${fileName}\` (Kế hoạch dạy học gốc):** Đây là tài liệu chính bạn cần đọc, phân tích và chỉnh sửa.

**Quy trình thực hiện (TUÂN THỦ TUYỆT ĐỐI):**

**Bước 1: Phân tích toàn diện**
*   Đọc kỹ toàn bộ KHDH trong file **\`${fileName}\`** để nắm vững mục tiêu, nội dung và chuỗi hoạt động của bài học.
*   Đối chiếu với Công văn 405 để xác định các mức độ NLS phù hợp với khối **\`${khoiLop}\`**.

**Bước 2: Xác định và lựa chọn NLS phù hợp**
*   Dựa trên nội dung bài học, chọn ra những Năng lực thành phần (ví dụ: 1.1, 3.4, 5.2) và các **chỉ báo cụ thể (gạch đầu dòng)** từ Thông tư 02 mà bài học này có thể hình thành cho học sinh.

**Bước 3: Chỉnh sửa mục "I. Mục tiêu"**
*   Tìm đến mục **\`+ Các năng lực số:\`** trong KHDH.
*   Bên dưới dòng này, hãy liệt kê các chỉ báo NLS bạn đã chọn ở Bước 2.
*   **YÊU CẦU:** Mỗi chỉ báo phải được trình bày theo định dạng: \`[Mã chỉ báo]: [Trích dẫn nguyên văn mô tả từ Thông tư 02]\`.
*   *Ví dụ:* \`5.2TC1a: Chỉ ra được những nhu cầu được xác định rõ ràng và thường xuyên.\`

**Bước 4: Chỉnh sửa mục "III. Tiến trình dạy học" (CỰC KỲ CHI TIẾT)**
*   Đi đến mục **\`III. Tiến trình dạy học\`**.
*   Với **TỪNG HOẠT ĐỘNG** (ví dụ: \`1. Hoạt động 1: Khởi động\`, \`2. Hoạt động 2: Hình thành kiến thức mới\`, v.v.), bạn phải thực hiện tuần tự như sau:
    1.  **Phân tích nội dung hoạt động:** Đọc kỹ các mục \`a) Mục tiêu\`, \`b) Nội dung\`, \`c) Sản phẩm\`, và \`d) Tổ chức thực hiện\` của hoạt động đó để hiểu rõ giáo viên và học sinh sẽ làm gì.
    2.  **Liên kết với NLS:** Xác định xem hoạt động này có thể hình thành hoặc củng cố Năng lực số nào bạn đã chọn ở Bước 2.
    3.  **Chèn nội dung tích hợp:**
        *   Tìm vị trí **cuối cùng** của hoạt động hiện tại (ngay trước khi bắt đầu hoạt động tiếp theo, ví dụ: ngay trước \`2. Hoạt động 2:...\`).
        *   Tại vị trí đó, chèn một mục mới, bắt đầu bằng **\`* Tích hợp năng lực số:\`** (in đậm và có dấu sao).
        *   **QUAN TRỌNG:** Nội dung bạn viết ở đây phải là một **gợi ý sư phạm cụ thể, một hành động thực tế** mà giáo viên có thể tổ chức cho học sinh. Nó phải **diễn giải** chỉ báo NLS thành ngôn ngữ dạy học, **TUYỆT ĐỐI KHÔNG** được trích dẫn lại chỉ báo một cách máy móc.
        *   **Ví dụ minh họa cấu trúc:**
            *   **KHDH gốc (một phần):**
                \`\`\`
                d) Tổ chức thực hiện: ... (nội dung của hoạt động 1).
                2. Hoạt động 2: Hình thành kiến thức mới
                \`\`\`
            *   **Bạn phải sửa thành:**
                \`\`\`
                d) Tổ chức thực hiện: ... (nội dung của hoạt động 1).
                * Tích hợp năng lực số: Học sinh liệt kê và mô tả được các bước tuần tự trong quy trình thuật toán (ví dụ: nấu cơm, bật quạt, v.v.).
                2. Hoạt động 2: Hình thành kiến thức mới
                \`\`\`
        *   **Lưu ý:** Mục \`* Tích hợp năng lực số:\` phải được đặt bên trong phạm vi của hoạt động đó, nhưng là phần tử cuối cùng trước khi sang hoạt động mới.

**Bước 5: Trả về kết quả**
*   Sau khi hoàn thành tất cả các bước chỉnh sửa, hãy trả về **TOÀN BỘ NỘI DUNG CỦA KẾ HOẠCH DẠY HỌC ĐÃ ĐƯỢC CẬP NHẬT**.
*   Sử dụng định dạng Markdown để văn bản dễ đọc và dễ sao chép. Đảm bảo giữ nguyên cấu trúc gốc của KHDH và chỉ thêm vào những phần được yêu cầu.

**Xác nhận:**
Hãy xác nhận bạn đã nhận đủ 3 file và hiểu rõ nhiệm vụ chỉnh sửa trực tiếp file **\`${fileName}\`** trước khi bắt đầu.`;

  // Handle file selection
  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setFileName(file.name);
    }
  };

  // Handle appendix selection
  const handlePhuLucChange = (value: 'pl1' | 'pl3' | 'pl4') => {
    if (phuLuc === value) {
      setPhuLuc(null); // Deselect if clicked again
      setFileName('');
    } else {
      setPhuLuc(value);
      setFileName(''); // Reset filename when switching
    }
  };

  // Handle prompt generation
  const handleGeneratePrompt = () => {
    if (!monHoc || !khoiLop || !phuLuc || !fileName) {
      setError('Vui lòng điền đầy đủ thông tin: Môn học, Khối lớp, Phụ lục và chọn file.');
      setGeneratedPrompt('');
      return;
    }
    setError('');
    const prompt = phuLuc === 'pl1' ? promptTemplate1 : (phuLuc === 'pl3' ? promptTemplate3 : promptTemplate4);
    setGeneratedPrompt(prompt);
  };

  // Handle copy to clipboard
  const handleCopy = () => {
    if (generatedPrompt) {
      navigator.clipboard.writeText(generatedPrompt);
      alert('Đã sao chép vào bộ nhớ tạm!');
    }
  };
  
  const KHOI_LOP = Array.from({ length: 12 }, (_, i) => i + 1);

  const isFormValid = monHoc && khoiLop && phuLuc && fileName;

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4 sm:p-6 lg:p-8 font-sans">
      <main className="w-full max-w-4xl mx-auto space-y-8">
        <header className="text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-red-600">Trợ lý Năng lực số dành cho Giáo viên</h1>
          <p className="mt-3 text-lg text-teal-700 font-medium">Tạo prompt tích hợp năng lực số cho kế hoạch dạy học.</p>
        </header>

        {/* Form Section */}
        <section className="bg-white p-6 sm:p-8 rounded-2xl shadow-lg border border-gray-200">
          <h2 className="text-2xl font-bold text-gray-700 mb-6">Thông tin</h2>
          <div className="space-y-6">
            {/* Tên môn học */}
            <div>
              <label htmlFor="mon-hoc" className="block text-lg font-medium text-gray-700 mb-2">
                Tên môn học
              </label>
              <input
                type="text"
                id="mon-hoc"
                value={monHoc}
                onChange={(e) => setMonHoc(e.target.value)}
                placeholder="VD: Toán"
                className="w-full px-4 py-3 text-lg border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition duration-200"
              />
            </div>

            {/* Khối lớp */}
            <div>
              <label className="block text-lg font-medium text-gray-700 mb-2">
                Khối lớp
              </label>
              <div className="grid grid-cols-3 sm:grid-cols-6 gap-3">
                {KHOI_LOP.map((lop) => (
                  <button
                    key={lop}
                    onClick={() => setKhoiLop(lop)}
                    className={`px-4 py-3 text-lg font-semibold rounded-lg border-2 transition-all duration-200 ${
                      khoiLop === lop
                        ? 'bg-teal-500 border-teal-500 text-white shadow-md'
                        : 'bg-white border-gray-300 text-gray-700 hover:bg-teal-50 hover:border-teal-400'
                    }`}
                  >
                    {lop}
                  </button>
                ))}
              </div>
            </div>

            {/* Chọn Phụ lục */}
            <div>
              <label className="block text-lg font-medium text-gray-700 mb-2">
                Chọn Phụ lục
              </label>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4">
                {/* Phụ lục 1 */}
                <div className="flex items-center space-x-3">
                  <input
                    type="checkbox"
                    id="phu-luc-1"
                    checked={phuLuc === 'pl1'}
                    onChange={() => handlePhuLucChange('pl1')}
                    className="h-6 w-6 text-teal-600 border-gray-300 rounded focus:ring-teal-500"
                  />
                  <label htmlFor="phu-luc-1" className="text-lg text-gray-800">Phụ lục 1</label>
                   {phuLuc === 'pl1' && (
                   <div className="flex-grow">
                    <button
                      onClick={() => fileInputRef1.current?.click()}
                      className="w-full sm:w-auto px-6 py-3 text-lg font-semibold text-black bg-white border-2 border-gray-400 rounded-lg hover:bg-gray-100 transition duration-200"
                    >
                      {fileName || 'Chọn File KHDH'}
                    </button>
                    <input
                      type="file"
                      ref={fileInputRef1}
                      onChange={handleFileChange}
                      className="hidden"
                      accept=".doc,.docx,.pdf"
                    />
                  </div>
                )}
                </div>
               
                 {/* Phụ lục 3 */}
                 <div className="flex items-center space-x-3">
                  <input
                    type="checkbox"
                    id="phu-luc-3"
                    checked={phuLuc === 'pl3'}
                    onChange={() => handlePhuLucChange('pl3')}
                    className="h-6 w-6 text-teal-600 border-gray-300 rounded focus:ring-teal-500"
                  />
                  <label htmlFor="phu-luc-3" className="text-lg text-gray-800">Phụ lục 3</label>
                  {phuLuc === 'pl3' && (
                  <div className="flex-grow">
                     <button
                        onClick={() => fileInputRef3.current?.click()}
                        className="w-full sm:w-auto px-6 py-3 text-lg font-semibold text-black bg-white border-2 border-gray-400 rounded-lg hover:bg-gray-100 transition duration-200"
                      >
                        {fileName || 'Chọn File KHDH'}
                      </button>
                      <input
                        type="file"
                        ref={fileInputRef3}
                        onChange={handleFileChange}
                        className="hidden"
                        accept=".doc,.docx,.pdf"
                      />
                  </div>
                )}
                </div>

                 {/* Phụ lục 4 */}
                 <div className="flex items-center space-x-3">
                  <input
                    type="checkbox"
                    id="phu-luc-4"
                    checked={phuLuc === 'pl4'}
                    onChange={() => handlePhuLucChange('pl4')}
                    className="h-6 w-6 text-teal-600 border-gray-300 rounded focus:ring-teal-500"
                  />
                  <label htmlFor="phu-luc-4" className="text-lg text-gray-800">Phụ lục 4</label>
                  {phuLuc === 'pl4' && (
                  <div className="flex-grow">
                     <button
                        onClick={() => fileInputRef4.current?.click()}
                        className="w-full sm:w-auto px-6 py-3 text-lg font-semibold text-black bg-white border-2 border-gray-400 rounded-lg hover:bg-gray-100 transition duration-200"
                      >
                        {fileName || 'Chọn File KHDH'}
                      </button>
                      <input
                        type="file"
                        ref={fileInputRef4}
                        onChange={handleFileChange}
                        className="hidden"
                        accept=".doc,.docx,.pdf"
                      />
                  </div>
                )}
                </div>

              </div>
            </div>

            <hr className="border-t border-gray-200" />

            {/* Submit Button */}
            <div className="text-center">
              <button
                onClick={handleGeneratePrompt}
                disabled={!isFormValid}
                className="px-8 py-4 text-xl font-bold text-white bg-teal-600 rounded-lg shadow-md hover:bg-teal-700 focus:outline-none focus:ring-4 focus:ring-teal-300 transition-transform transform hover:scale-105 disabled:bg-gray-400 disabled:cursor-not-allowed disabled:transform-none disabled:shadow-none"
              >
                Tạo câu lệnh
              </button>
            </div>
          </div>
        </section>
        
        {/* Attachment Button */}
        <div className="text-center">
            <a
                href="https://banlongschool-my.sharepoint.com/:f:/g/personal/hung_bl_edu_vn/EnSMjwPIzAlCnxR29QPqamMBnpDILp2XvN55Ln8x16ZUhQ?e=3fMucW"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-8 py-4 text-xl font-bold text-white bg-gray-600 rounded-lg shadow-md hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-300 transition-transform transform hover:scale-105"
            >
                File đính kèm
            </a>
        </div>

        {/* Error Message */}
        {error && <p className="text-center text-red-600 text-lg font-semibold">{error}</p>}
        
        {/* Result Section */}
        {generatedPrompt && (
          <section className="bg-gray-800 p-6 sm:p-8 rounded-2xl shadow-lg relative">
            <h2 className="text-2xl font-bold text-white mb-4">Kết quả</h2>
            <button
              onClick={handleCopy}
              className="absolute top-6 right-6 px-4 py-2 text-md font-semibold text-gray-800 bg-gray-200 rounded-lg hover:bg-gray-300 transition duration-200"
            >
              Sao chép
            </button>
            <pre className="bg-gray-900 text-white text-lg p-6 rounded-lg overflow-x-auto whitespace-pre-wrap">
              <code>{generatedPrompt}</code>
            </pre>
          </section>
        )}

        {/* Instructions Section */}
        <section className="bg-white p-6 sm:p-8 rounded-2xl shadow-lg border border-gray-200">
            <h2 className="text-2xl font-bold text-teal-700 mb-6">Hướng dẫn sử dụng</h2>
            <ol className="list-decimal list-inside space-y-4 text-lg text-gray-700">
                <li>Nhập Tên môn học và chọn Khối lớp.</li>
                <li>Chọn Phụ lục 1, Phụ lục 3, hoặc Phụ lục 4.</li>
                <li>Nhấn để chọn file Kế hoạch dạy học tương ứng.</li>
                <li>Nhấn nút "Tạo câu lệnh" và xem kết quả.</li>
                <li>Nhấn nút "Sao chép" ở mục kết quả.</li>
                <li>Mở AI (ChatGPT, Gemini...), dán prompt vào.</li>
                <li>
                    Click vào nút "File đính kèm" để download 2 file&nbsp;
                    <a href="https://banlongschool-my.sharepoint.com/:b:/g/personal/hung_bl_edu_vn/EWxI5o-ggiFPmMZGwfh8xYcBTMS0zLnhvFzVWUkgtD6MEQ?e=d0SbDc" target="_blank" rel="noopener noreferrer" className="font-semibold text-teal-600 hover:underline">TT02.pdf</a> và&nbsp;
                    <a href="https://banlongschool-my.sharepoint.com/:b:/g/personal/hung_bl_edu_vn/EeXTCMQ_HPFLjRfWNN62JI0Bew4K5k4n9QsWXKZZK25s4Q?e=JwgyoX" target="_blank" rel="noopener noreferrer" className="font-semibold text-teal-600 hover:underline">knls.pdf</a> về máy.
                </li>
                <li>Đính kèm vào khung chat của Ai cùng câu lệnh vừa dán: 2 file TT02.pdf, knls.pdf vừa down về trong "File đính kèm" ở bước 7 và 1 file là kế hoạch dạy học vừa up ở bước 3 (tổng cộng là 3 file up lên cho Ai) và gửi đi.</li>
                <li>Hưởng thụ thành quả.</li>
            </ol>
        </section>

      </main>
      <footer className="w-full max-w-4xl mx-auto text-center py-6 text-gray-600 text-lg">
        <p>
          By <a href="https://www.facebook.com/hungquoc9" target="_blank" rel="noopener noreferrer" className="font-semibold text-teal-600 hover:underline">
            Quốc Hưng
          </a>
        </p>
        <div className="flex items-center justify-center space-x-2 mt-2">
            <span>Số lượt truy cập:</span>
            <a href="https://www.hitwebcounter.com" target="_blank" rel="noopener noreferrer">
              <img 
                src="https://hitwebcounter.com/counter/counter.php?page=nls_rho_vercel_app&style=0006&nbdigits=7" 
                title="Total Website Hits" 
                alt="Visitor Counter" 
                // @ts-ignore
                border="0" 
              />
            </a>
        </div>
      </footer>
    </div>
  );
};

export default App;
