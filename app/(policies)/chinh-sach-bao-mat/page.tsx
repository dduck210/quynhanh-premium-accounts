import PolicyLayout from "@/components/ui/policy-layout";

export const metadata = { title: "Chính sách bảo mật – Quỳnh Anh Premium Accounts" };

export default function Page() {
  return (
    <PolicyLayout title="Chính sách bảo mật">
      <Section title="1. Thông tin chúng tôi thu thập">
        <ul>
          <li>Tên, số điện thoại, email khi bạn liên hệ đặt hàng</li>
          <li>Lịch sử giao dịch và sản phẩm đã mua</li>
          <li>Thông tin thiết bị và địa chỉ IP khi truy cập website</li>
        </ul>
      </Section>

      <Section title="2. Mục đích sử dụng thông tin">
        <ul>
          <li>Xử lý đơn hàng và giao tài khoản cho bạn</li>
          <li>Hỗ trợ kỹ thuật và bảo hành sản phẩm</li>
          <li>Thông báo khuyến mãi và sản phẩm mới (nếu bạn đồng ý)</li>
          <li>Cải thiện chất lượng dịch vụ</li>
        </ul>
      </Section>

      <Section title="3. Bảo vệ thông tin">
        <p>Thông tin của bạn được mã hóa và lưu trữ an toàn. Chúng tôi không bán, cho thuê hoặc chia sẻ thông tin cá nhân với bên thứ ba vì mục đích thương mại.</p>
      </Section>

      <Section title="4. Quyền của bạn">
        <ul>
          <li>Yêu cầu xem, chỉnh sửa hoặc xóa thông tin cá nhân</li>
          <li>Hủy đăng ký nhận thông báo marketing bất kỳ lúc nào</li>
          <li>Khiếu nại nếu thông tin bị sử dụng sai mục đích</li>
        </ul>
      </Section>

      <Section title="5. Liên hệ">
        <p>Mọi thắc mắc về bảo mật, vui lòng liên hệ: <strong>support@quynhanhpremium.vn</strong></p>
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
