import { Routes, Route } from "react-router-dom";
import Home from "./component/Home";
import Mail from "./component/Mail";
import Sms from "./component/Sms";
import SmsComplete from "./component/SmsComplete";
import MailSend from "./component/MailSend";
import Reserve from "./component/Reserve";



export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/mail" element={<Mail />} />
      <Route path="/mailSend" element={<MailSend />} />
      <Route path="/sms" element={<Sms />} />
      <Route path="/smsComplete" element={<SmsComplete />} />
      <Route path="/reservation" element={<Reserve />} />
    </Routes>
  );
}