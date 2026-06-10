import PolicyLayout from "@/components/ui/policy-layout";

export const metadata = { title: "Hướng dẫn mua hàng – Quỳnh Anh Premium Accounts" };

export default function Page() {
  return (
    <PolicyLayout title="Hướng dẫn mua hàng">
      <Section title="Bước 1 — Chọn sản phẩm">
        <p>Duyệt qua các danh mục hoặc tìm kiếm sản phẩm bạn cần. Nhấn vào card sản phẩm để xem chi tiết tính năng, giá cả và các gói thời hạn.</p>
      </Section>

      <Section title="Bước 2 — Chọn gói thời hạn">
        <p>Trên trang chi tiết sản phẩm, chọn gói thời hạn phù hợp (1 tháng, 3 tháng, 6 tháng hoặc 1 năm). Gói dài hạn có giá ưu đãi hơn.</p>
      </Section>

      <Section title="Bước 3 — Liên hệ đặt mua">
        <p>Nhấn nút <strong>"Đặt mua ngay qua Zalo"</strong> và nhắn tin cho chúng tôi với nội dung:</p>
        <ul>
          <li>Tên sản phẩm muốn mua</li>
          <li>Gói thời hạn đã chọn</li>
          <li>Số lượng (nếu mua nhiều)</li>
        </ul>
      </Section>

      <Section title="Bước 4 — Thanh toán">
        <p>Chúng tôi hỗ trợ các hình thức thanh toán:</p>
        <ul>
          <li>Chuyển khoản ngân hàng (Vietcombank, MB Bank, Techcombank...)</li>
          <li>Ví điện tử MoMo, ZaloPay, VNPay</li>
          <li>Thanh toán qua QR code</li>
        </ul>
      </Section>

      <Section title="Bước 5 — Nhận tài khoản">
        <p>Sau khi xác nhận thanh toán, tài khoản sẽ được giao trong <strong>5–15 phút</strong>. Chúng tôi gửi thông tin đăng nhập qua Zalo hoặc Messenger theo yêu cầu.</p>
      </Section>

      <Section title="Lưu ý quan trọng">
        <ul>
          <li>Không thay đổi mật khẩu để tránh mất bảo hành</li>
          <li>Liên hệ ngay nếu gặp sự cố — hỗ trợ 8:00–23:00 mỗi ngày</li>
          <li>Lưu lại thông tin đơn hàng để tiện bảo hành sau này</li>
        </ul>
      </Section>
    </PolicyLayout>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="mb-7">
      <h2 className="text-base font-bold text-gray-900 mb-3">{title}</h2>
      <div className="text-gray-600 text-sm leading-relaxed space-y-2 [&_ul]:list-disc [&_ul]:pl-5 [&_ul]:space-y-1 [&_ol]:list-decimal [&_ol]:pl-5 [&_ol]:space-y-1">
        {children}
      </div>
    </div>
  );
}
