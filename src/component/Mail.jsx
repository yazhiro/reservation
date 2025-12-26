import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Mail() {
    const navigate = useNavigate();
    const [mail, setMail] = useState("");
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
  
    const isValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(mail);
  
    const handleSend = async () => {
      if (!isValid || loading) return;
  
      setLoading(true);
      setError("");
  
      try {
        const res = await fetch("https://xlkbn0o4ll.execute-api.ap-northeast-1.amazonaws.com/dev/sendSES", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email: mail,
            
          }),
        });
  
        if (!res.ok) {
          throw new Error("送信に失敗しました");
        }
  
        // ✅ 成功 → 完了画面へ（戻れないようにする）
        navigate("/mailSend", { replace: true });
      } catch (e) {
        setError(e.message);
      } finally {
        setLoading(false);
      }
    };
  
    return (
      <div style={{ padding: 20, maxWidth: 360 }}>
        <h2>メール送信</h2>
  
        <label>
          メールアドレス
          <input
            type="tel"
            value={mail}
            onChange={(e) => setMail(e.target.value)}
            placeholder="aaaa@outlook.jp"
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