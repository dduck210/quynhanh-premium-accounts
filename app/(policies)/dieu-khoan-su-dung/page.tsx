import PolicyLayout from "@/components/ui/policy-layout";

export const metadata = { title: "Điều khoản sử dụng – Quỳnh Anh Premium Accounts" };

export default function Page() {
  return (
    <PolicyLayout title="Điều khoản sử dụng">
      <Section title="1. Chấp nhận điều khoản">
        <p>Khi mua và sử dụng sản phẩm từ Quỳnh Anh Premium Accounts, bạn đồng ý tuân thủ các điều khoản dưới đây. Nếu không đồng ý, vui lòng không sử dụng dịch vụ.</p>
      </Section>

      <Section title="2. Quy định sử dụng tài khoản">
        <ul>
          <li>Tài khoản chỉ dành cho mục đích cá nhân, không được bán lại hoặc chuyển nhượng</li>
          <li>Không thay đổi mật khẩu, email hoặc thông tin tài khoản</li>
          <li>Không sử dụng đồng thời trên nhiều thiết bị vượt quá giới hạn cho phép</li>
          <li>Không dùng tài khoản cho mục đích thương mại hoặc vi phạm pháp luật</li>
        </ul>
      </Section>

      <Section title="3. Quyền sở hữu">
        <p>Tất cả tài khoản được cung cấp là tài sản của nhà cung cấp dịch vụ gốc (Spotify, Netflix, v.v.). Quỳnh Anh Premium Accounts chỉ là đơn vị phân phối hợp pháp.</p>
      </Section>

      <Section title="4. Giới hạn trách nhiệm">
        <p>Chúng tôi không chịu trách nhiệm với các thiệt hại phát sinh do người dùng vi phạm điều khoản sử dụng của nhà cung cấp gốc hoặc sử dụng tài khoản sai mục đích.</p>
      </Section>

      <Section title="5. Thay đổi điều khoản">
        <p>Chúng tôi có quyền cập nhật điều khoản bất kỳ lúc nào. Thông báo sẽ được đăng trên website trước 7 ngày khi có thay đổi quan trọng.</p>
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
