:root {
  --teal: #1996a6;
  --teal-dark: #0f6b78;
  --teal-light: #dceef0;
  --bg: #f5f8f8;
  --ink: #1c2b2e;
  --gray: #5b6b6d;
  --white: #ffffff;
  --danger: #c0392b;
  --ok: #2e8b57;
  --radius: 14px;
  --shadow: 0 2px 10px rgba(15, 107, 120, 0.12);
}

* { box-sizing: border-box; }

body {
  margin: 0;
  font-family: -apple-system, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
  background: var(--bg);
  color: var(--ink);
}

.topbar {
  background: var(--teal-dark);
  color: white;
  padding: 14px 18px;
  display: flex;
  align-items: center;
  gap: 12px;
  position: sticky;
  top: 0;
  z-index: 10;
  box-shadow: var(--shadow);
}

.topbar .brand {
  font-weight: 700;
  font-size: 18px;
  letter-spacing: 0.3px;
}

.topbar .agente-chip {
  margin-left: auto;
  font-size: 13px;
  background: rgba(255,255,255,0.15);
  padding: 6px 10px;
  border-radius: 999px;
}

.back-btn {
  background: none;
  border: none;
  color: white;
  font-size: 20px;
  cursor: pointer;
  padding: 4px 8px;
  display: none;
}
.back-btn.show { display: inline-block; }

main {
  max-width: 720px;
  margin: 0 auto;
  padding: 18px 16px 60px;
}

.screen { display: none; }
.screen.active { display: block; animation: fadeIn .18s ease; }

@keyframes fadeIn { from { opacity: 0; transform: translateY(4px);} to { opacity: 1; transform: none; } }

h1.page-title {
  font-size: 20px;
  color: var(--teal-dark);
  margin: 6px 0 18px;
}

.card {
  background: var(--white);
  border-radius: var(--radius);
  box-shadow: var(--shadow);
  padding: 18px;
  margin-bottom: 16px;
}

.grid-menu {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 14px;
}

.menu-btn {
  background: var(--white);
  border: 2px solid var(--teal-light);
  border-radius: var(--radius);
  padding: 22px 12px;
  text-align: center;
  font-weight: 600;
  font-size: 16px;
  color: var(--teal-dark);
  cursor: pointer;
  box-shadow: var(--shadow);
  transition: transform .12s ease, border-color .12s ease;
}
.menu-btn:active { transform: scale(0.97); }
.menu-btn:hover { border-color: var(--teal); }
.menu-btn .sub { display:block; font-weight: 400; font-size: 12px; color: var(--gray); margin-top: 4px; }

.list-submenu { display: flex; flex-direction: column; gap: 10px; }
.list-submenu button {
  text-align: left;
  padding: 16px;
  border-radius: var(--radius);
  border: 1px solid #e1e8e8;
  background: var(--white);
  font-size: 15px;
  font-weight: 600;
  color: var(--ink);
  cursor: pointer;
  box-shadow: var(--shadow);
}
.list-submenu button:hover { border-color: var(--teal); }

label {
  display: block;
  font-size: 13px;
  color: var(--gray);
  margin: 12px 0 4px;
  font-weight: 600;
}
input, select {
  width: 100%;
  padding: 12px;
  border-radius: 10px;
  border: 1px solid #cfd8d8;
  font-size: 15px;
  background: #fbfdfd;
}
input:focus, select:focus { outline: 2px solid var(--teal); border-color: var(--teal); }

.btn-primary {
  width: 100%;
  padding: 14px;
  margin-top: 20px;
  border: none;
  border-radius: 12px;
  background: var(--teal-dark);
  color: white;
  font-size: 16px;
  font-weight: 700;
  cursor: pointer;
}
.btn-primary:active { background: var(--teal); }

.btn-secondary {
  width: 100%;
  padding: 12px;
  margin-top: 10px;
  border: 1px solid var(--teal-dark);
  border-radius: 12px;
  background: transparent;
  color: var(--teal-dark);
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
}

.msg {
  margin-top: 14px;
  padding: 12px 14px;
  border-radius: 10px;
  font-size: 14px;
  font-weight: 600;
  display: none;
}
.msg.ok { display: block; background: #e5f5ec; color: var(--ok); border: 1px solid #bfe5cd; }
.msg.warn { display: block; background: #fdecea; color: var(--danger); border: 1px solid #f6c1ba; }

.result-row {
  padding: 12px;
  border: 1px solid #e1e8e8;
  border-radius: 10px;
  margin-bottom: 10px;
}
.result-row .estado { font-size: 12px; color: var(--gray); margin-top: 4px; }
.tag { display: inline-block; padding: 2px 8px; border-radius: 999px; font-size: 11px; font-weight: 700; margin-right: 6px; }
.tag.si { background: #e5f5ec; color: var(--ok); }
.tag.no { background: #f0f0f0; color: var(--gray); }

.kpis { display: grid; grid-template-columns: repeat(2, 1fr); gap: 12px; margin-bottom: 16px; }
.kpi { background: var(--white); border-radius: var(--radius); padding: 16px; box-shadow: var(--shadow); text-align: center; }
.kpi .num { font-size: 26px; font-weight: 800; color: var(--teal-dark); }
.kpi .lbl { font-size: 12px; color: var(--gray); margin-top: 2px; }

canvas { max-width: 100%; }

.footer-note { text-align: center; color: var(--gray); font-size: 12px; margin-top: 30px; }

@media (min-width: 640px) {
  .kpis { grid-template-columns: repeat(4, 1fr); }
}
