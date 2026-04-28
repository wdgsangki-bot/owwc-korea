export default function App() {
  const roster = [
    ["FITS", "DPS"],
    ["MN3", "DPS"],
    ["HeeSang", "DPS"],
    ["Mag", "TANK"],
    ["Chiyo", "SUPPORT"],
    ["Fielder", "SUPPORT"],
    ["Haebin", "SUPPORT"],
    ["Rush", "COACH"],
  ];

  return (
    <>
      <style>{`
        * { box-sizing: border-box; }
        html { scroll-behavior: smooth; }
        body { margin: 0; background:#04050a; color:white; font-family: Arial, sans-serif; }
        a { color: inherit; text-decoration: none; }

        .site {
          min-height: 100vh;
          background:
            radial-gradient(circle at 20% 25%, rgba(255,40,55,.35), transparent 28%),
            radial-gradient(circle at 80% 25%, rgba(30,90,255,.32), transparent 30%),
            linear-gradient(180deg, #04050a 0%, #070812 55%, #04050a 100%);
        }

        header {
          position: sticky;
          top: 0;
          z-index: 20;
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 18px 48px;
          background: rgba(0,0,0,.78);
          border-bottom: 1px solid rgba(255,255,255,.12);
          backdrop-filter: blur(10px);
        }

        .logo {
          display: flex;
          align-items: center;
          gap: 12px;
          font-weight: 900;
          letter-spacing: .04em;
        }

        .shield {
          width: 48px;
          height: 56px;
          background: linear-gradient(180deg,#ff3156 0 58%,#123c9c 58% 100%);
          clip-path: polygon(50% 0%, 90% 14%, 90% 72%, 50% 100%, 10% 72%, 10% 14%);
          display:flex;
          align-items:center;
          justify-content:center;
          border:2px solid rgba(255,255,255,.7);
          font-size:13px;
          font-weight:900;
        }

        nav {
          display:flex;
          gap:28px;
          font-size:14px;
          font-weight:700;
          color:rgba(255,255,255,.82);
        }

        nav a:hover { color:white; }

        .hero {
          position: relative;
          min-height: 820px;
          display:flex;
          align-items:flex-end;
          justify-content:center;
          text-align:center;
          padding: 90px 24px 70px;
          overflow:hidden;
          border-bottom:1px solid rgba(255,255,255,.12);
        }

        .players {
          position:absolute;
          top:70px;
          left:50%;
          transform:translateX(-50%);
          display:flex;
          align-items:flex-end;
          justify-content:center;
          gap:14px;
          width:100%;
          pointer-events:none;
          opacity:.92;
        }

        .player {
          position:relative;
          width:160px;
          height:430px;
          border-radius:90px 90px 14px 14px;
          background: linear-gradient(180deg,rgba(255,255,255,.16),rgba(15,18,30,.96));
          border:1px solid rgba(255,255,255,.12);
          box-shadow:0 30px 80px rgba(0,0,0,.45);
          overflow:hidden;
        }

        .player:nth-child(1), .player:nth-child(5) { height:350px; width:130px; opacity:.72; }
        .player:nth-child(2), .player:nth-child(4) { height:410px; width:150px; opacity:.82; }
        .player:nth-child(3) { height:520px; width:200px; }

        .player::before {
          content:"";
          position:absolute;
          left:28%;
          top:10%;
          width:44%;
          height:15%;
          border-radius:50%;
          background:#171c2b;
        }

        .player::after {
          content:"";
          position:absolute;
          left:14%;
          right:14%;
          bottom:0;
          height:66%;
          border-radius:60px 60px 0 0;
          background:linear-gradient(180deg,#20283c,#0f1420);
        }

        .stripe {
          position:absolute;
          bottom:0;
          left:0;
          right:0;
          height:90px;
          background:linear-gradient(180deg,#df304b,#1245b3);
          opacity:.75;
          z-index:2;
        }

        .hero-content {
          position:relative;
          z-index:5;
          max-width:1100px;
        }

        .main-shield {
          margin:0 auto 22px;
          width:150px;
          height:170px;
          background: linear-gradient(180deg,#fff 0 55%,#101d46 55% 100%);
          clip-path: polygon(50% 0%, 90% 14%, 90% 72%, 50% 100%, 10% 72%, 10% 14%);
          display:flex;
          align-items:center;
          justify-content:center;
          color:white;
          font-size:34px;
          font-weight:900;
          letter-spacing:.16em;
          text-shadow:0 3px 8px black;
          border:2px solid white;
        }

        .eyebrow {
          color:#f3c18b;
          font-size:30px;
          font-weight:900;
          letter-spacing:.12em;
          margin-bottom:10px;
        }

        h1 {
          margin:0;
          font-size:86px;
          line-height:.95;
          font-weight:1000;
          letter-spacing:-.06em;
          text-shadow:0 8px 24px rgba(0,0,0,.8);
        }

        .subtitle {
          margin-top:18px;
          font-size:24px;
          letter-spacing:.16em;
          color:rgba(255,255,255,.9);
        }

        .cta {
          display:inline-block;
          margin-top:34px;
          padding:18px 34px;
          border-radius:18px;
          font-size:24px;
          font-weight:900;
          background:linear-gradient(90deg,#9d101e,#d33730,#1645b0);
          border:1px solid rgba(255,255,255,.32);
          box-shadow:0 0 34px rgba(255,50,60,.32);
        }

        section {
          padding:80px 48px;
          border-bottom:1px solid rgba(255,255,255,.1);
        }

        .wrap {
          max-width:1400px;
          margin:0 auto;
        }

        .section-title {
          text-align:center;
          font-size:58px;
          font-weight:1000;
          margin:0 0 42px;
        }

        .about {
          display:grid;
          grid-template-columns:180px 1fr;
          gap:40px;
          align-items:center;
        }

        .about h2 {
          font-size:44px;
          margin:0 0 16px;
        }

        .about p {
          color:rgba(255,255,255,.72);
          line-height:1.8;
          font-size:18px;
          margin:0;
        }

        .roster {
          display:grid;
          grid-template-columns:repeat(4,1fr);
          gap:22px;
        }

        .card {
          min-height:360px;
          border-radius:24px;
          overflow:hidden;
          background:#0b0e17;
          border:1px solid rgba(255,255,255,.15);
          box-shadow:0 22px 60px rgba(0,0,0,.42);
        }

        .card-top {
          position:relative;
          height:285px;
          padding:20px;
          background:
            radial-gradient(circle at 20% 20%,rgba(255,255,255,.12),transparent 22%),
            linear-gradient(135deg,rgba(230,40,55,.34),rgba(25,60,170,.2));
        }

        .card h3 {
          margin:0;
          font-size:34px;
          line-height:1;
        }

        .role {
          margin-top:6px;
          font-size:20px;
          color:rgba(255,255,255,.86);
        }

        .body {
          position:absolute;
          left:50%;
          bottom:0;
          transform:translateX(-50%);
          width:70%;
          height:210px;
          border-radius:60px 60px 0 0;
          background:linear-gradient(180deg,#20283c,#111722);
          border:1px solid rgba(255,255,255,.12);
        }

        .card-bottom {
          padding:18px 20px;
          font-size:22px;
          font-weight:900;
          background:rgba(0,0,0,.42);
        }

        .schedule {
          border-radius:28px;
          overflow:hidden;
          border:1px solid rgba(255,255,255,.12);
          background:rgba(255,255,255,.04);
        }

        .schedule-row {
          display:grid;
          grid-template-columns:190px 1fr 140px;
          gap:20px;
          padding:24px 30px;
          border-bottom:1px solid rgba(255,255,255,.1);
        }

        .schedule-row:last-child { border-bottom:0; }

        .news-grid {
          display:grid;
          grid-template-columns:repeat(3,1fr);
          gap:22px;
        }

        .news {
          border-radius:24px;
          padding:28px;
          background:rgba(255,255,255,.045);
          border:1px solid rgba(255,255,255,.12);
        }

        .tag {
          color:#ff8f9b;
          font-size:13px;
          font-weight:900;
          letter-spacing:.2em;
        }

        .news h3 {
          font-size:24px;
          margin:22px 0 0;
        }

        .contact-box {
          border-radius:32px;
          padding:44px;
          background:linear-gradient(135deg,rgba(160,20,35,.42),rgba(20,40,120,.42));
          border:1px solid rgba(255,255,255,.14);
        }

        .sns {
          display:flex;
          gap:14px;
          margin-top:28px;
        }

        .sns a {
          padding:14px 24px;
          border-radius:16px;
          font-weight:900;
          background:white;
          color:black;
        }

        .sns a:nth-child(2) {
          background:rgba(255,255,255,.08);
          color:white;
          border:1px solid rgba(255,255,255,.2);
        }

        footer {
          padding:34px;
          text-align:center;
          color:rgba(255,255,255,.4);
          font-size:13px;
        }

        @media (max-width: 900px) {
          header { padding:16px 20px; }
          nav { display:none; }
          .hero { min-height:720px; }
          h1 { font-size:48px; }
          .eyebrow { font-size:20px; }
          .subtitle { font-size:14px; }
          .player { width:90px; height:300px; }
          .player:nth-child(3) { width:120px; height:380px; }
          .about { grid-template-columns:1fr; text-align:center; }
          .roster { grid-template-columns:repeat(2,1fr); }
          .news-grid { grid-template-columns:1fr; }
          .schedule-row { grid-template-columns:1fr; }
          section { padding:60px 20px; }
        }
      `}</style>

      <div className="site">
        <header>
          <a className="logo" href="#top">
            <div className="shield">KOR</div>
            <div>
              <div style={{ fontSize: 11, color: "rgba(255,255,255,.45)" }}>
                OVERWATCH WORLD CUP
              </div>
              <div>대한민국 국가대표팀</div>
            </div>
          </a>

          <nav>
            <a href="#about">대표팀 소개</a>
            <a href="#roster">ROSTER</a>
            <a href="#schedule">SCHEDULE</a>
            <a href="#news">NEWS</a>
            <a href="#merch">MERCH</a>
            <a href="#contact">CONTACT</a>
          </nav>
        </header>

        <main id="top">
          <section className="hero">
            <div className="players">
              {["FITS", "MN3", "HeeSang", "Mag", "Chiyo"].map((name) => (
                <div className="player" key={name}>
                  <div className="stripe" />
                </div>
              ))}
            </div>

            <div className="hero-content">
              <div className="main-shield">KOR</div>
              <div className="eyebrow">OVERWATCH WORLD CUP</div>
              <h1>대한민국 국가대표팀</h1>
              <div className="subtitle">
                OVERWATCH WORLD CUP KOREA NATIONAL TEAM
              </div>
              <a className="cta" href="#schedule">
                공지 및 일정 확인하기
              </a>
            </div>
          </section>

          <section id="about">
            <div className="wrap about">
              <div className="main-shield" style={{ width: 120, height: 140 }}>
                KOR
              </div>
              <div>
                <h2>대표팀 소개</h2>
                <p>
                  오버워치 월드컵 대한민국 국가대표팀의 공식 정보를 한 곳에
                  모은 마이크로사이트입니다. 선수단 소개, 공식 공지, 경기 일정,
                  팬 굿즈, SNS 채널을 통합해 팬과 파트너가 가장 빠르게 접근할
                  수 있는 공식 허브로 운영됩니다.
                </p>
              </div>
            </div>
          </section>

          <section id="roster">
            <div className="wrap">
              <h2 className="section-title">ROSTER</h2>
              <div className="roster">
                {roster.map(([name, role]) => (
                  <div className="card" key={name}>
                    <div className="card-top">
                      <h3>{name}</h3>
                      <div className="role">{role}</div>
                      <div className="body" />
                    </div>
                    <div className="card-bottom">TEAM KOREA</div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section id="schedule">
            <div className="wrap">
              <h2 className="section-title">SCHEDULE</h2>
              <div className="schedule">
                {[
                  ["2026.08.12", "대한민국 국가대표 공식 발표", "ONLINE"],
                  ["2026.08.20", "대표팀 미디어 데이", "SEOUL"],
                  ["2026.09.03", "월드컵 그룹 스테이지", "TBD"],
                  ["2026.09.10", "월드컵 플레이오프", "TBD"],
                ].map(([date, title, place]) => (
                  <div className="schedule-row" key={title}>
                    <strong>{date}</strong>
                    <div>{title}</div>
                    <div>{place}</div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section id="news">
            <div className="wrap">
              <h2 className="section-title">NEWS</h2>
              <div className="news-grid">
                {[
                  "공식 사이트 오픈",
                  "국가대표 로스터 공개 예정",
                  "팬 응원 캠페인 안내 예정",
                ].map((title) => (
                  <article className="news" key={title}>
                    <div className="tag">OFFICIAL</div>
                    <h3>{title}</h3>
                  </article>
                ))}
              </div>
            </div>
          </section>

          <section id="merch">
            <div className="wrap">
              <h2 className="section-title">MERCH</h2>
              <p
                style={{
                  maxWidth: 760,
                  margin: "0 auto",
                  textAlign: "center",
                  lineHeight: 1.8,
                  color: "rgba(255,255,255,.72)",
                  fontSize: 18,
                }}
              >
                유니폼, 슬로건 타월, 포토카드, 응원 패키지 등 대표팀 공식
                굿즈 정보를 연결할 수 있습니다.
              </p>
            </div>
          </section>

          <section id="contact">
            <div className="wrap contact-box">
              <div className="tag">CONTACT</div>
              <h2 style={{ fontSize: 48, margin: "16px 0 0" }}>
                대표팀 공식 채널
              </h2>
              <p style={{ color: "rgba(255,255,255,.72)", lineHeight: 1.7 }}>
                최신 공지와 국가대표팀 소식은 공식 SNS에서 확인할 수 있습니다.
              </p>
              <div className="sns">
                <a
                  href="https://www.instagram.com/owwc_teamsouthkorea/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Instagram
                </a>
                <a
                  href="https://x.com/OwwcKoreaTeam"
                  target="_blank"
                  rel="noreferrer"
                >
                  X
                </a>
              </div>
            </div>
          </section>
        </main>

        <footer>
          © 2026 OVERWATCH WORLD CUP KOREA NATIONAL TEAM. ALL RIGHTS RESERVED.
        </footer>
      </div>
    </>
  );
}
