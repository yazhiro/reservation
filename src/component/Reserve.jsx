import React, { useMemo, useState } from "react";

export default function Reserve() {
  const [jobId, setJobId] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");

  // 業務マスタ（ID + 名前）
  const jobs = [
    { id: 1, name: "打ち合わせ" },
    { id: 2, name: "訪問作業" },
    { id: 3, name: "オンライン対応" },
  ];

  // 今月の「今日以降」の日付
  const dates = useMemo(() => {
    const now = new Date();
    const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());

    const y = today.getFullYear();
    const m = today.getMonth();
    const lastDay = new Date(y, m + 1, 0).getDate();

    const pad2 = (n) => String(n).padStart(2, "0");
    const mm = pad2(m + 1);

    const list = [];
    for (let d = 1; d <= lastDay; d++) {
      const current = new Date(y, m, d);
      if (current < today) continue;

      list.push(`${y}-${mm}-${pad2(d)}`);
    }
    return list;
  }, []);

  // 09:00 ～ 18:00（1時間ごと）
  const times = useMemo(() => {
    const pad2 = (n) => String(n).padStart(2, "0");
    const list = [];
    for (let h = 9; h <= 18; h++) {
      list.push(`${pad2(h)}:00`);
    }
    return list;
  }, []);

  const handleSubmit = () => {
    if (!jobId || !date || !time) {
      alert("業務・日付・時間をすべて選択してください");
      return;
    }

    // API送信用データ（実務で使う形）
    const payload = {
      job_id: Number(jobId),
      date,
      time,
    };

    console.log("送信データ", payload);
    alert("予約を登録しました");
  };

  return (
    <div style={{ width: 320, display: "grid", gap: 12 }}>
      <h2>予約登録</h2>

      {/* 業務 */}
      <label>
        業務
        <select value={jobId} onChange={(e) => setJobId(e.target.value)}>
          <option value="">選択してください</option>
          {jobs.map((job) => (
            <option key={job.id} value={job.id}>
              {job.name}
            </option>
          ))}
        </select>
      </label>

      {/* 日付 */}
      <label>
        日付（今日以降）
        <select value={date} onChange={(e) => setDate(e.target.value)}>
          <option value="">選択してください</option>
          {dates.map((d) => (
            <option key={d} value={d}>{d}</option>
          ))}
        </select>
      </label>

      {/* 時間 */}
      <label>
        時間（09:00〜18:00）
        <select value={time} onChange={(e) => setTime(e.target.value)}>
          <option value="">選択してください</option>
          {times.map((t) => (
            <option key={t} value={t}>{t}</option>
          ))}
        </select>
      </label>

      <button onClick={handleSubmit}>予約登録</button>
    </div>
  );
}
