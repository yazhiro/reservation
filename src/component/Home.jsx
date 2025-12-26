import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();

  return (
    <div style={{ padding: 20 }}>
      <h2>送信方法を選択</h2>

      <div style={{ display: "flex", gap: 12 }}>
        <button onClick={() => navigate("/mail")}>
          📧 メール
        </button>

        <button onClick={() => navigate("/sms")}>
          📱 SMS
        </button>
      </div>
    </div>
  );
}