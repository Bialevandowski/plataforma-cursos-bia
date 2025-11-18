import { useEffect, useState } from "react";
import NotificationService from "../services/NotificationService";

export default function Notification() {
    const [notif, setNotif] = useState(null);

    useEffect(() => {
        NotificationService.subscribe((data) => {
            setNotif(data);
            setTimeout(() => setNotif(null), 3000);
        });
    }, []);

    if (!notif) return null;

    return (
        <div style={{
            position: "fixed",
            top: 20,
            right: 20,
            background: "#333",
            color: "#fff",
            padding: "10px 20px",
            borderRadius: "8px",
            zIndex: 9999
        }}>
            {notif.message}
        </div>
    );
}
