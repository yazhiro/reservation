import { useNavigate } from "react-router-dom";

export default function Mail() {
  const navigate = useNavigate();

  const mailSend = () => {
    window.location.href ="mailto:example@example.com";
    navigate('/mailSend');
  }

  return (
    <div style={{ padding: 20 }}>
      <h2>メール送信画面</h2>

      <button
        onClick={() =>
         mailSend()
        }
      >
        メール送信
      </button>

      <hr />

      <button onClick={() => navigate(-1)}>
        ← 戻る
      </button>
    </div>
  );
}