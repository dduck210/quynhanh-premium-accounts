import PolicyLayout from "@/components/ui/policy-layout";

export const metadata = {
  title: "Chính sách hoàn tiền – Quỳnh Anh Premium Accounts",
};

export default function Page() {
  return (
    <PolicyLayout title="Chính sách hoàn tiền">
      <Section title="1. Điều kiện hoàn tiền">
        <p>Chúng tôi chấp nhận hoàn tiền trong các trường hợp sau:</p>
        <ul>
          <li>
            Tài khoản không hoạt động ngay sau khi nhận và không thể khắc phục
            trong 24 giờ
          </li>
          <li>Sản phẩm không đúng mô tả, thiếu tính năng đã cam kết</li>
          <li>
            Thanh toán bị trừ tiền nhưng chưa nhận được tài khoản sau 30 phút
          </li>
        </ul>
      </Section>

      <Section title="2. Trường hợp không hoàn tiền">
        <ul>
          <li>Đã sử dụng tài khoản bình thường (dù chỉ 1 lần)</li>
          <li>Lỗi do người dùng tự gây ra (đổi mật khẩu, vi phạm TOS)</li>
          <li>Yêu cầu sau 7 ngày kể từ ngày mua</li>
          <li>Sản phẩm đã được bảo hành thay thế trước đó</li>
        </ul>
      </Section>

      <Section title="3. Quy trình yêu cầu hoàn tiền">
        <ol>
          <li>Liên hệ hỗ trợ trong vòng 7 ngày kể từ ngày mua</li>
          <li>Cung cấp bằng chứng lỗi (ảnh chụp màn hình, mô tả chi tiết)</li>
          <li>Bộ phận kỹ thuật xác minh trong 1–3 ngày làm việc</li>
          <li>Hoàn tiền qua phương thức thanh toán ban đầu trong 3–5 ngày</li>
        </ol>
      </Section>

      <Section title="4. Liên hệ">
        <p>
          Zalo: <strong>0339.502.155</strong> | Email:{" "}
          <strong>support@quynhanhpremium.vn</strong>
        </p>
      </Section>
    </PolicyLayout>
  );
}

function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="mb-7">
      <h2 className="text-base font-bold text-gray-900 mb-3">{title}</h2>
      <div className="text-gray-600 text-sm leading-relaxed space-y-2 [&_ul]:list-disc [&_ul]:pl-5 [&_ul]:space-y-1 [&_ol]:list-decimal [&_ol]:pl-5 [&_ol]:space-y-1">
        {children}
      </div>
    </div>
  );
}
