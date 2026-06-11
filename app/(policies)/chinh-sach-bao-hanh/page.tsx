import PolicyLayout from "@/components/ui/policy-layout";

export const metadata = {
  title: "Chính sách bảo hành – Quỳnh Anh Premium Accounts",
};

export default function Page() {
  return (
    <PolicyLayout title="Chính sách bảo hành">
      <Section title="1. Cam kết bảo hành">
        <p>
          Quỳnh Anh Premium Accounts cam kết bảo hành toàn bộ tài khoản trong
          suốt thời hạn sử dụng đã mua. Nếu tài khoản gặp sự cố do lỗi từ phía
          nhà cung cấp, chúng tôi sẽ hỗ trợ khắc phục hoặc thay thế miễn phí.
        </p>
      </Section>

      <Section title="2. Phạm vi bảo hành">
        <ul>
          <li>Tài khoản bị lỗi đăng nhập do hệ thống nhà cung cấp</li>
          <li>Tài khoản bị thu hồi không do lỗi người dùng</li>
          <li>Tài khoản không hoạt động đúng tính năng đã mô tả</li>
          <li>Gói premium bị hạ cấp không rõ lý do</li>
        </ul>
      </Section>

      <Section title="3. Trường hợp không được bảo hành">
        <ul>
          <li>Tự ý thay đổi mật khẩu, thông tin tài khoản</li>
          <li>Chia sẻ tài khoản cho người khác dẫn đến bị khóa</li>
          <li>Vi phạm điều khoản sử dụng của nhà cung cấp dịch vụ</li>
          <li>Tài khoản hết hạn theo thời gian đã mua</li>
        </ul>
      </Section>

      <Section title="4. Quy trình bảo hành">
        <ol>
          <li>Liên hệ hỗ trợ qua Zalo hoặc Messenger và mô tả sự cố</li>
          <li>Cung cấp thông tin đơn hàng (tên sản phẩm, ngày mua)</li>
          <li>Chúng tôi xác nhận và xử lý trong vòng 2–24 giờ</li>
          <li>Nhận tài khoản mới hoặc được gia hạn tương đương</li>
        </ol>
      </Section>

      <Section title="5. Liên hệ hỗ trợ">
        <p>
          Hotline Zalo: <strong>0339.502.155</strong> — Hỗ trợ từ 8:00 đến 23:00
          mỗi ngày.
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
