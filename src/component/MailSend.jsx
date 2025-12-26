import { useNavigate } from "react-router-dom";

export default function Mail() {
  const navigate = useNavigate();



  return (
    <div style={{ padding: 20 }}>
      <h2>予約リンク送信案内</h2>

<p>メールソフトから空メールを送信してください。
    空メールを受け付けた後、
    予約情報リンクを送信いたします。
</p>

      <button onClick={() => navigate('/')}>
         TOP
      </button>
    </div>
  );
}