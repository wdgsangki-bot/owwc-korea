function KorShieldLogo({ className = "h-24 w-20" }) {
  return (
    <div className={`relative ${className}`}>
      <div className="absolute inset-0 clip-shield border-2 border-white/80 bg-[linear-gradient(180deg,#ffffff_0%,#ffffff_56%,#0f1e46_56%,#0f1e46_100%)] shadow-[0_8px_30px_rgba(0,0,0,0.45)]" />
      <div className="absolute left-1/2 top-[10%] h-[18%] w-[34%] -translate-x-1/2 rounded-b-full bg-[#f19a3e]" />
      <div className="absolute left-1/2 top-[18%] h-[30%] w-[30%] -translate-x-1/2 rounded-full border-[8px] border-[#1f2945]" />
      <div className="absolute left-1/2 top-[33%] h-[16%] w-[16%] -translate-x-1/2 rotate-45 border-b-[8px] border-r-[8px] border-[#1f2945]" />
      <div className="absolute left-[8%] right-[8%] top-[52%] rounded-md border border-white/15 bg-black/88 py-[3%] text-center text-[clamp(10px,1.4vw,22px)] font-black tracking-[0.18em] text-white">
        KOR
      </div>
      <div className="absolute inset-0 clip-shield border border-white/20" />
    </div>
  );
}

function PlayerSilhouette({ name, side = "center", size = "lg" }) {
  const sizeClass =
    size === "sm"
      ? "h-[260px] w-[120px] md:h-[360px] md:w-[165px]"
      : size === "md"
      ? "h-[320px] w-[145px] md:h-[430px] md:w-[195px]"
      : "h-[390px] w-[180px] md:h-[560px] md:w-[250px]";

  const glow =
    side === "left"
      ? "bg-red-500/30"
      : side === "right"
      ? "bg-blue-500/30"
      : "bg-white/12";

  return (
    <div className={`relative ${sizeClass}`}>
      <div className={`absolute inset-0 rounded-t-[999px] ${glow} blur-2xl`} />
      <div className="absolute inset-x-0 bottom-0 top-[6%] overflow-hidden rounded-t-[999px] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.14),rgba(255,255,255,0.03)_35%,rgba(7,10,18,0.92)_100%)] shadow-[0_20px_70px_rgba(0,0,0,0.45)]">
        <div className="absolute inset-x-[24%] top-[11%] h-[16%] rounded-full bg-[linear-gradient(180deg,#1b2030_0%,#0f1421_100%)]" />
        <div className="absolute inset-x-[12%] top-[23%] bottom-[18%] rounded-t-[38%] bg-[linear-gradient(180deg,#181d2c_0%,#0d111b_100%)]" />
        <div className="absolute inset-x-0 bottom-0 h-[28%] bg-[linear-gradient(180deg,rgba(227,49,76,0.92)_0%,rgba(27,75,187,0.92)_100%)] opacity-80" />
        <div className="absolute inset-x-[18%] bottom-[7%] text-center text-[11px] font-black tracking-[0.18em] text-white/72 md:text-sm">
          {name}
        </div>
      </div>
    </div>
  );
}

function RosterCard({ player, idx }) {
  const theme =
    idx % 4 === 0 || idx % 4 === 1
      ? "from-red-500/35 via-red-400/10 to-transparent"
      : "from-blue-500/35 via-blue-400/10 to-transparent";

  return (
    <article className="overflow-hidden rounded-[1.6rem] border border-white/15 bg-[#0a0c14] shadow-[0_18px_50px_rgba(0,0,0,0.42)]">
      <div className="relative h-[320px] bg-[#10131d]">
        <div className={`absolute inset-0 bg-gradient-to-br ${theme}`} />
        <div className="absolute left-4 top-4 z-10">
          <div className="text-[2rem] font-black leading-none tracking-tight">
            {player.name}
          </div>
          <div className="mt-1 text-xl text-white/95">{player.role}</div>
        </div>
        <div className="absolute inset-x-0 bottom-0 flex items-end justify-center">
          <div className="relative h-[250px] w-[72%] overflow-hidden rounded-t-[2rem] border border-white/10 bg-[linear-gradient(180deg,#151b29_0%,#0c1018_100%)]">
            <div className="absolute inset-x-[23%] top-[10%] h-[15%] rounded-full bg-[#1c2234]" />
            <div className="absolute inset-x-[10%] top-[21%] bottom-0 rounded-t-[38%] bg-[linear-gradient(180deg,#20283c_0%,#121722_100%)]" />
          </div>
        </div>
      </div>
      <div className="flex items-center gap-3 border-t border-white/10 bg-black/40 px-4 py-4">
        <div className="flex h-8 w-8 items-center justify-center rounded-full border border-white/20 bg-white/5 text-sm">
          ◉
        </div>
        <div className="text-[2rem] font-black leading-none">{player.sub}</div>
      </div>
    </article>
  );
}

export default function App() {
  const navItems = [
    { label: "대표팀 소개", href: "#about" },
    { label: "공지/업데이트", href: "#news" },
    { label: "공식 굿즈", href: "#merch" },
    { label: "ROSTER", href: "#roster" },
    { label: "SCHEDULE", href: "#schedule" },
    { label: "FAQ", href: "#faq" },
    { label: "CONTACT", href: "#contact" }
  ];

  const roster = [
    { name: "FITS", role: "DPS", sub: "믹신" },
    { name: "MN3", role: "DPS", sub: "덴테논" },
    { name: "HeeSang", role: "DPS", sub: "김정공" },
    { name: "Mag", role: "TANK", sub: "천교손일" },
    { name: "Chiyo", role: "SUPPORT", sub: "현요제" },
    { name: "Fielder", role: "SUPPORT", sub: "임장공" },
    { name: "Haebin", role: "SUPPORT", sub: "손공남" },
    { name: "Rush", role: "COACH", sub: "Rush" }
  ];

  const schedule = [
    { date: "2026.08.12", title: "대한민국 국가대표 공식 발표", place: "ONLINE" },
    { date: "2026.08.20", title: "대표팀 미디어 데이", place: "SEOUL" },
    { date: "2026.09.03", title: "월드컵 그룹 스테이지", place: "TBD" },
    { date: "2026.09.10", title: "월드컵 플레이오프", place: "TBD" }
  ];

  return (
    <div className="min-h-screen overflow-x-hidden bg-[#04050a] text-white">
      <style>{`
        .clip-shield {
          clip-path: polygon(50% 0%, 90% 14%, 90% 72%, 50% 100%, 10% 72%, 10% 14%);
        }
      `}</style>

      <header className="sticky top-0 z-50 border-b border-white/10 bg-black/72 backdrop-blur-md">
        <div className="mx-auto flex max-w-[1600px] items-center justify-between px-4 py-3 md:px-6 lg:px-8">
          <a href="#top" className="flex items-center gap-3">
            <KorShieldLogo className="h-14 w-12" />
            <div className="hidden sm:block">
              <div className="text-[10px] tracking-[0.34em] text-white/45">
                OVERWATCH WORLD CUP
              </div>
              <div className="text-sm font-bold">대한민국 국가대표팀</div>
            </div>
          </a>

          <nav className="hidden items-center gap-8 xl:flex">
            {navItems.map((item, idx) => (
              <a
                key={item.label}
                href={item.href}
                className={`relative text-sm font-semibold ${
                  idx === 0 ? "text-white" : "text-white/80 hover:text-white"
                }`}
              >
                {item.label}
                {idx === 0 && (
                  <span className="absolute -bottom-[18px] left-0 h-[3px] w-12 rounded-full bg-red-500" />
                )}
              </a>
            ))}
          </nav>

          <div className="hidden gap-3 lg:flex">
            <a
              href="https://www.instagram.com/owwc_teamsouthkorea/"
              target="_blank"
              rel="noreferrer"
              className="text-xs font-bold text-white/70 hover:text-white"
            >
              Instagram
            </a>
            <a
              href="https://x.com/OwwcKoreaTeam"
              target="_blank"
              rel="noreferrer"
              className="text-xs font-bold text-white/70 hover:text-white"
            >
              X
            </a>
          </div>
        </div>
      </header>

      <main id="top">
        <section className="relative overflow-hidden border-b border-white/10">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_22%_36%,rgba(255,58,58,0.58),transparent_28%),radial-gradient(circle_at_80%_38%,rgba(82,132,255,0.48),transparent_30%),linear-gradient(180deg,rgba(0,0,0,0.05),rgba(0,0,0,0.46))]" />

          <div className="relative mx-auto max-w-[1600px] px-4 md:px-6 lg:px-8">
            <div className="relative min-h-[820px] md:min-h-[1050px]">
              <div className="pointer-events-none absolute inset-x-0 top-[6%] flex items-end justify-center gap-1 md:gap-4">
                <PlayerSilhouette name="FITS" side="left" size="sm" />
                <PlayerSilhouette name="MN3" side="left" size="md" />
                <PlayerSilhouette name="HeeSang" side="center" size="lg" />
                <PlayerSilhouette name="Mag" side="right" size="md" />
                <PlayerSilhouette name="Chiyo" side="right" size="sm" />
              </div>

              <div className="relative z-10 flex min-h-[820px] flex-col items-center justify-end pb-12 text-center md:min-h-[1050px] md:pb-16">
                <KorShieldLogo className="h-40 w-32 md:h-56 md:w-44" />
                <div className="mt-4 text-[clamp(22px,2.1vw,44px)] font-black tracking-[0.08em] text-[#f2c08b]">
                  OVERWATCH WORLD CUP
                </div>
                <h1 className="mt-2 text-[clamp(58px,7vw,132px)] font-black leading-[0.9] tracking-[-0.04em]">
                  대한민국 국가대표팀
                </h1>
                <div className="mt-4 text-[clamp(18px,1.6vw,34px)] tracking-[0.14em] text-white/95">
                  OVERWATCH WORLD CUP KOREA NATIONAL TEAM
                </div>
                <a
                  href="#schedule"
                  className="mt-7 inline-flex rounded-[1.35rem] border border-red-300/50 bg-[linear-gradient(90deg,rgba(154,12,21,0.98),rgba(205,54,46,0.98),rgba(31,66,176,0.98))] px-8 py-4 text-[clamp(20px,1.6vw,34px)] font-black text-white shadow-[0_0_28px_rgba(255,65,65,0.25)]"
                >
                  공지 및 일정 확인하기
                </a>
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="border-b border-white/10">
          <div className="mx-auto grid max-w-[1600px] items-center gap-8 px-4 py-12 md:px-6 lg:grid-cols-[220px_1fr] lg:px-8">
            <div className="flex justify-center lg:justify-start">
              <KorShieldLogo className="h-36 w-28" />
            </div>
            <div>
              <h2 className="text-[clamp(30px,2.3vw,56px)] font-black">
                대표팀 소개
              </h2>
              <p className="mt-4 max-w-5xl text-base leading-8 text-white/74 md:text-lg">
                오버워치 월드컵 대한민국 국가대표팀의 공식 정보를 한 곳에 모은
                마이크로사이트입니다. 선수단 소개, 공식 공지, 경기 일정, 팬 굿즈,
                FAQ, 문의 정보를 통합한 공식 허브입니다.
              </p>
            </div>
          </div>
        </section>

        <section id="roster" className="mx-auto max-w-[1600px] px-4 py-16 md:px-6 lg:px-8">
          <div className="mb-10 flex items-center justify-center gap-4">
            <div className="h-px w-14 bg-white/20 md:w-28" />
            <h2 className="text-[clamp(42px,3.4vw,88px)] font-black">
              ROSTER
            </h2>
            <div className="h-px w-14 bg-white/20 md:w-28" />
          </div>
          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {roster.map((player, idx) => (
              <RosterCard key={player.name} player={player} idx={idx} />
            ))}
          </div>
        </section>

        <section id="schedule" className="border-y border-white/10 bg-white/[0.02]">
          <div className="mx-auto max-w-[1600px] px-4 py-16 md:px-6 lg:px-8">
            <div className="mb-8 text-center">
              <div className="text-sm font-bold tracking-[0.35em] text-[#f2c08b]">
                SCHEDULE
              </div>
              <h2 className="mt-3 text-[clamp(38px,3vw,72px)] font-black">
                공식 일정
              </h2>
            </div>
            <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-black/25">
              {schedule.map((item, idx) => (
                <div
                  key={item.title}
                  className={`grid gap-3 px-5 py-5 md:grid-cols-[180px_1fr_140px] md:items-center md:px-8 ${
                    idx !== schedule.length - 1 ? "border-b border-white/10" : ""
                  }`}
                >
                  <div className="font-bold">{item.date}</div>
                  <div className="text-xl font-bold">{item.title}</div>
                  <div className="text-sm text-white/55 md:text-right">{item.place}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="news" className="mx-auto max-w-[1600px] px-4 py-16 md:px-6 lg:px-8">
          <div className="text-sm font-bold tracking-[0.35em] text-[#f2c08b]">
            NEWS
          </div>
          <h2 className="mt-3 text-[clamp(38px,3vw,72px)] font-black">
            공지 / 업데이트
          </h2>
          <div className="mt-8 grid gap-5 lg:grid-cols-3">
            {["공식 사이트 오픈", "로스터 공개 예정", "팬 이벤트 안내 예정"].map(
              (title) => (
                <article
                  key={title}
                  className="rounded-[1.8rem] border border-white/10 bg-white/[0.04] p-6"
                >
                  <div className="text-sm font-bold tracking-[0.22em] text-red-300">
                    OFFICIAL
                  </div>
                  <h3 className="mt-5 text-2xl font-black">{title}</h3>
                </article>
              )
            )}
          </div>
        </section>

        <section id="merch" className="border-y border-white/10 bg-white/[0.02]">
          <div className="mx-auto max-w-[1600px] px-4 py-16 md:px-6 lg:px-8">
            <div className="text-sm font-bold tracking-[0.35em] text-[#f2c08b]">
              MERCH
            </div>
            <h2 className="mt-3 text-[clamp(38px,3vw,72px)] font-black">
              공식 굿즈
            </h2>
            <p className="mt-5 max-w-3xl text-base leading-8 text-white/72">
              유니폼, 슬로건 타월, 포토카드, 응원 패키지 등 대표팀 공식 굿즈
              정보를 연결할 수 있습니다.
            </p>
          </div>
        </section>

        <section id="contact" className="mx-auto max-w-[1600px] px-4 py-16 md:px-6 lg:px-8">
          <div className="rounded-[2rem] border border-white/10 bg-[linear-gradient(135deg,rgba(150,20,30,0.35),rgba(20,30,70,0.45))] p-8">
            <div className="text-sm font-bold tracking-[0.35em] text-[#f2c08b]">
              CONTACT
            </div>
            <h2 className="mt-3 text-[clamp(38px,3vw,72px)] font-black">
              대표팀 관련 문의
            </h2>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="https://www.instagram.com/owwc_teamsouthkorea/"
                target="_blank"
                rel="noreferrer"
                className="rounded-2xl bg-white px-6 py-3 text-sm font-black text-black"
              >
                Instagram
              </a>
              <a
                href="https://x.com/OwwcKoreaTeam"
                target="_blank"
                rel="noreferrer"
                className="rounded-2xl border border-white/20 bg-white/10 px-6 py-3 text-sm font-black text-white"
              >
                X
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-white/10 px-4 py-8 text-center text-sm text-white/40">
        © 2026 OVERWATCH WORLD CUP KOREA NATIONAL TEAM. ALL RIGHTS RESERVED.
      </footer>
    </div>
  );
}
