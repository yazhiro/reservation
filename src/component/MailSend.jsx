import { useNavigate } from "react-router-dom";

export default function Mail() {
   const navigate = useNavigate();

  return (
    <div style={{ padding: 20, textAlign: "center" }}>
      <h2>送信完了</h2>
      <p>メールの送信が完了しました。</p>

      <button onClick={() => navigate("/")}>
        トップへ戻る
      </button>
    </div>
  );
}
