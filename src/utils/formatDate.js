export function formatTime(dateString) {
    const d = new Date(dateString);
    return d.toLocaleDateString() + " " + d.toLocaleTimeString();
}
