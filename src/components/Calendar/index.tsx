import "./index.css";

export default function Calendar() {
  return (
    <div className="calendar-container">
      <h2>Calendar</h2>
      <iframe src="https://calendar.google.com/calendar/embed?wkst=2&ctz=Europe%2FBerlin&bgcolor=%23c7e1e3&showNav=0&showPrint=0&showTabs=0&showCalendars=0&src=Y18zYWQ3YTNlYzE2OGI0ZTY4YTMxOGZlMDEwN2ZmOTc0MzZhMWQ5YTAwMzEyZDhhYzQ1ZWFmYzVjZTBlODA1MTYxQGdyb3VwLmNhbGVuZGFyLmdvb2dsZS5jb20" />
    </div>
  );
}
