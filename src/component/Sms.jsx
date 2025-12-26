import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Sms() {
  const navigate = useNavigate();
  const [phone, setPhone] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const isValid = /^\+\d{10,15}$/.test(phone) && phone.length >= 10;

  const handleSend = async () => {
    if (!isValid || loading) return;

    setLoading(true);
    setError("");

    try {
      const res = await fetch("https://xlkbn0o4ll.execute-api.ap-northeast-1.amazonaws.com/dev/sendSNS", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          phoneNumber: phone.replace(/-/g, ""),
          message: '予約情報受け付けました',
        }),
      });

      if (!res.ok) {
        throw new Error("送信に失敗しました");
      }

      // ✅ 成功 → 完了画面へ（戻れないようにする）
      navigate("/smsComplete", { replace: true });
    } catch (e) {
      setError(e.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ padding: 20, maxWidth: 360 }}>
      <h2>SMS送信</h2>

      <label>
        電話番号
        <input
          type="tel"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          placeholder="090-1234-5678"
          style={{ width: "100%", marginTop: 6 }}
        />
      </label>

      {error && (
        <p style={{ color: "red", marginTop: 8 }}>{error}</p>
      )}

      <button
        onClick={handleSend}
        disabled={!isValid || loading}
        style={{ marginTop: 12, width: "100%" }}
      >
        {loading ? "送信中..." : "送信"}
      </button>
      <br>
      </br>
       <button onClick={() => navigate("/")} style={{ marginTop: 12, width: "100%" }}>
        戻る
      </button>
    </div>
  );
}
