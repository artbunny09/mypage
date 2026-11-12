import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  ArrowDown,
  Mail,
  Phone,
  Check,
  Copy,
  FolderDot,
  Briefcase,
  Layers,
  Sparkles,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { SubtleBackground } from '@/components/SubtleBackground';
import { BotanicalBranch, BotanicalLeafBadge } from '@/components/BotanicalLineArt';

export default function App() {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  const copyToClipboard = (text: string, type: 'email' | 'phone') => {
    navigator.clipboard.writeText(text);
    if (type === 'email') {
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2000);
    } else {
      setCopiedPhone(true);
      setTimeout(() => setCopiedPhone(false), 2000);
    }
  };

  const clientList = [
    'IBM',
    '국민은행',
    '삼성디자인연구소',
    '네슬레코리아',
    '(주)한국3M',
    'DAKS',
    '휘닉스파크',
    'HSBC은행',
    '(주)SK증권',
    '현대캐피탈',
    '(주)LG생활건강',
    '(주)LG패션',
    '(주)다음커뮤니케이션',
    '(주)나무커뮤니케이션',
    '국립현대미술관',
    '(주)캠브리지',
    '(주)신한카드',
    '(주)SK텔레콤',
    '(주)에리트베이직',
    '(주)형지어패럴',
    '(주)JWT',
    '(주)우성 I&C',
    '브로앤시스',
    '마더스마일러브',
    'GIGL',
    '그라놀로지',
    '북촌문화센터(문화다움)',
  ];

  const careerMilestones = [
    {
      period: '2017 ~ Present',
      title: '마더스마일러브 대표',
      description: 'GIGL, 문화다움 북촌문화센터 콘텐츠 디자인, 그라놀로지 BI 및 패키지 리뉴얼 등',
      highlight: true,
    },
    {
      period: '2005 ~ 2014',
      title: '마더네이처 대표',
      description: '',
      highlight: false,
    },
    {
      period: '2004',
      title: '디자인밸류 크리에이터 수료',
      description: '독일 및 이태리 연수',
      highlight: false,
    },
    {
      period: '2003',
      title: '깐느 그래픽어워드 파이널리스트',
      description: '',
      highlight: false,
    },
    {
      period: '2001 ~ 2004',
      title: '디자인블루 커뮤니케이션 디자인팀 팀장',
      description: '',
      highlight: false,
    },
  ];

  return (
    <div className="relative min-h-screen bg-[#0d0f11] text-[#e2e8f0] selection:bg-[#a3e635] selection:text-[#0d0f11] overflow-x-hidden">
      {/* Top Header / Navigation Bar */}
      <header className="fixed top-0 left-0 right-0 z-50 border-b border-white/10 bg-[#0d0f11]/90 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <a
            href="#intro"
            className="flex items-center gap-2.5 font-bold tracking-tight text-sm sm:text-base text-[#e2e8f0] hover:text-[#a3e635] transition-colors"
          >
            <span className="w-2.5 h-2.5 rounded-full bg-[#a3e635]" />
            <span>KIM KYUNG AH</span>
            <span className="text-[#94a3b8] font-normal">/</span>
            <span className="text-[#94a3b8] font-normal text-xs sm:text-sm">Art Director</span>
          </a>

          <nav className="hidden md:flex items-center gap-7 text-xs font-medium text-[#94a3b8]">
            <a href="#about" className="hover:text-[#a3e635] transition-colors">
              About Me
            </a>
            <a href="#career" className="hover:text-[#a3e635] transition-colors">
              Career & History
            </a>
            <a href="#clients" className="hover:text-[#a3e635] transition-colors">
              Clients & Projects
            </a>
            <a href="#philosophy" className="hover:text-[#a3e635] transition-colors">
              Philosophy
            </a>
          </nav>

          <div className="flex items-center gap-2">
            <Button
              variant="outline"
              size="sm"
              className="text-xs border-white/10 hover:border-[#a3e635]/40 hover:text-[#a3e635]"
              onClick={() => copyToClipboard('langmni@naver.com', 'email')}
            >
              {copiedEmail ? (
                <>
                  <Check className="w-3.5 h-3.5 mr-1.5 text-[#a3e635]" />
                  복사됨
                </>
              ) : (
                <>
                  <Mail className="w-3.5 h-3.5 mr-1.5 text-[#a3e635]" />
                  이메일 문의
                </>
              )}
            </Button>
          </div>
        </div>
      </header>

      {/* [Section 01] Intro / Splash (첫인상) */}
      <section
        id="intro"
        className="relative min-h-screen flex flex-col justify-between pt-28 pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto overflow-hidden"
      >
        <SubtleBackground />

        {/* Botanical Line Art Accent Floating in Background */}
        <div className="pointer-events-none absolute right-2 sm:right-10 top-24 sm:top-20 text-[#a3e635]/20 select-none">
          <BotanicalBranch size={340} className="w-56 h-56 sm:w-80 sm:h-80 lg:w-96 lg:h-96" />
        </div>

        <div className="relative z-10 my-auto py-12 md:py-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="flex items-center gap-3 mb-6"
          >
            <Badge variant="accent" className="px-3 py-1 text-xs uppercase tracking-wider font-semibold">
              <Sparkles className="w-3 h-3 mr-1.5 text-[#a3e635]" />
              Art Director Portfolio
            </Badge>
            <span className="text-xs text-[#94a3b8] tracking-widest uppercase">
              KIM KYUNG AH
            </span>
          </motion.div>

          {/* Main Title - Responsive clamp typography so it stays large on small screens */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
            className="space-y-3 sm:space-y-4"
          >
            <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-black tracking-tight text-[#e2e8f0] leading-[1.05]">
              LIFE IS
              <br />
              BEAUTIFUL.
            </h1>
            <p className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-[#a3e635]">
              Sensibility & Experience Designer
            </p>
          </motion.div>

          <Separator className="my-8 max-w-md bg-white/10" />

          {/* Sub Copy */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: 'easeOut' }}
            className="max-w-2xl"
          >
            <p className="text-base sm:text-lg md:text-xl text-[#cbd5e1] font-normal leading-relaxed break-keep">
              “감성과 경험을 디자인하고 생활의 진정한 가치를 찾아 차별화된 아이덴티티를 형상화합니다.”
            </p>
          </motion.div>
        </div>

        {/* Action: Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.7 }}
          className="relative z-10 flex items-center justify-between pt-6 border-t border-white/10 text-xs text-[#94a3b8]"
        >
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#a3e635] animate-ping" />
            <span>Editorial & Gallery Style</span>
          </div>
          <a
            href="#about"
            className="inline-flex items-center gap-2 text-xs font-semibold text-[#e2e8f0] hover:text-[#a3e635] transition-colors group"
          >
            <span>Scroll Down</span>
            <ArrowDown className="w-4 h-4 text-[#a3e635] group-hover:translate-y-1 transition-transform" />
          </a>
        </motion.div>
      </section>

      {/* [Section 02] About Me (정체성과 철학) */}
      <section id="about" className="py-28 md:py-36 lg:py-44 border-t border-white/10 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-3 mb-10"
          >
            <Badge variant="outline" className="text-xs font-mono tracking-wider">
              [Section 02]
            </Badge>
            <h2 className="text-sm font-semibold tracking-widest text-[#a3e635] uppercase">
              About Me
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            {/* Left Column: Profile Catchphrase & Visual Accent */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="lg:col-span-5 space-y-6"
            >
              <div className="space-y-4">
                <div className="inline-block">
                  <span className="text-xs font-mono text-[#a3e635] tracking-widest uppercase block mb-1">
                    Identity & Philosophy
                  </span>
                  <h3 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-[#e2e8f0] leading-tight">
                    VERY CREATIVE,
                    <br />
                    <span className="text-[#a3e635]">VERY HOT</span>
                  </h3>
                </div>
              </div>

              {/* Decorative Geometric Card Frame */}
              <div className="p-6 rounded-xl border border-white/10 bg-[#14171a] space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <BotanicalLeafBadge size={28} className="text-[#a3e635]" />
                    <span className="text-xs font-bold text-[#e2e8f0]">ART DIRECTOR</span>
                  </div>
                  <span className="text-xs font-mono text-[#94a3b8]">PORTFOLIO</span>
                </div>
                <Separator className="bg-white/10" />
                <div className="space-y-2 text-xs text-[#94a3b8]">
                  <div className="flex justify-between">
                    <span>이름</span>
                    <span className="text-[#e2e8f0] font-medium">김경아 (KIM KYUNG AH)</span>
                  </div>
                  <div className="flex justify-between">
                    <span>직무</span>
                    <span className="text-[#a3e635] font-medium">Art Director</span>
                  </div>
                </div>
              </div>

              {/* Contact Info Card */}
              <Card className="border-white/10 bg-[#14171a]">
                <CardHeader className="p-5 pb-3">
                  <CardTitle className="text-xs font-mono text-[#a3e635] tracking-wider uppercase">
                    Contact Info
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-5 pt-0 space-y-3">
                  <div className="flex items-center justify-between p-3 rounded-lg bg-[#0d0f11] border border-white/10">
                    <div className="flex items-center gap-3">
                      <Mail className="w-4 h-4 text-[#a3e635]" />
                      <span className="text-xs sm:text-sm font-medium text-[#e2e8f0] select-all">
                        langmni@naver.com
                      </span>
                    </div>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="h-7 px-2 text-xs text-[#94a3b8] hover:text-[#a3e635]"
                      onClick={() => copyToClipboard('langmni@naver.com', 'email')}
                    >
                      {copiedEmail ? <Check className="w-3.5 h-3.5 text-[#a3e635]" /> : <Copy className="w-3.5 h-3.5" />}
                    </Button>
                  </div>

                  <div className="flex items-center justify-between p-3 rounded-lg bg-[#0d0f11] border border-white/10">
                    <div className="flex items-center gap-3">
                      <Phone className="w-4 h-4 text-[#a3e635]" />
                      <span className="text-xs sm:text-sm font-medium text-[#e2e8f0] select-all">
                        010-9035-1803
                      </span>
                    </div>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="h-7 px-2 text-xs text-[#94a3b8] hover:text-[#a3e635]"
                      onClick={() => copyToClipboard('010-9035-1803', 'phone')}
                    >
                      {copiedPhone ? <Check className="w-3.5 h-3.5 text-[#a3e635]" /> : <Copy className="w-3.5 h-3.5" />}
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Right Column: Editorial Body Text */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="lg:col-span-7 space-y-6"
            >
              <Card className="border-white/10 bg-[#14171a] p-8 sm:p-10 space-y-8">
                <div className="space-y-4">
                  <div className="w-8 h-1 bg-[#a3e635]" />
                  <p className="text-lg sm:text-xl md:text-2xl font-bold text-[#e2e8f0] leading-snug break-keep">
                    디자인을 사랑하고 언제나 새로운 것을 꿈꾸는 지루할 틈이 없는 아트디렉터
                  </p>
                </div>

                <Separator className="bg-white/10" />

                <div className="space-y-6 text-[#cbd5e1] leading-relaxed break-keep text-base sm:text-lg">
                  <p className="p-4 rounded-lg bg-[#0d0f11]/60 border-l-2 border-[#a3e635]">
                    작은 것에 기뻐하고 소소함에 즐거워하며 예쁜 것에 열광하는 스몰사이즈 빅 커뮤니케이터
                  </p>
                  <p className="text-[#94a3b8]">
                    상호 커뮤니케이션을 통해 아이디어 전개 방향을 설정하고, 컨셉에 부합되는 명확한 가이드로 브랜드를 상징화합니다.
                  </p>
                </div>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* [Section 03] Career & History (프로페셔널 여정) */}
      <section id="career" className="py-28 md:py-36 lg:py-44 border-t border-white/10 bg-[#0d0f11]/60 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-3 mb-10"
          >
            <Badge variant="outline" className="text-xs font-mono tracking-wider">
              [Section 03]
            </Badge>
            <h2 className="text-sm font-semibold tracking-widest text-[#a3e635] uppercase">
              Career & History
            </h2>
          </motion.div>

          <div className="mb-14">
            <h3 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-[#e2e8f0]">
              Key Milestones
            </h3>
          </div>

          {/* Timeline Archive */}
          <div className="relative border-l border-white/10 ml-3 sm:ml-6 pl-6 sm:pl-10 space-y-10">
            {careerMilestones.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="relative group"
              >
                {/* Node indicator */}
                <div
                  className={`absolute -left-[31px] sm:-left-[47px] top-1.5 w-4 h-4 rounded-full border-2 transition-colors ${
                    item.highlight
                      ? 'bg-[#a3e635] border-[#0d0f11] ring-4 ring-[#a3e635]/20'
                      : 'bg-[#14171a] border-white/20 group-hover:border-[#a3e635]'
                  }`}
                />

                <Card className="border-white/10 bg-[#14171a] hover:border-white/20 transition-all">
                  <CardHeader className="p-6 pb-2">
                    <div className="flex flex-wrap items-center gap-3 mb-2">
                      <span className="font-mono text-xs sm:text-sm font-bold text-[#a3e635]">
                        {item.period}
                      </span>
                      {item.highlight && (
                        <Badge variant="accent" className="text-[10px] py-0 px-2">
                          Current
                        </Badge>
                      )}
                    </div>
                    <CardTitle className="text-lg sm:text-xl font-bold text-[#e2e8f0]">
                      {item.title}
                    </CardTitle>
                  </CardHeader>
                  {item.description && (
                    <CardContent className="p-6 pt-2">
                      <p className="text-sm sm:text-base text-[#94a3b8] break-keep leading-relaxed">
                        {item.description}
                      </p>
                    </CardContent>
                  )}
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* [Section 04] Major Clients & Projects (주요 클라이언트 & 협업 브랜드) */}
      <section id="clients" className="py-28 md:py-36 lg:py-44 border-t border-white/10 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-3 mb-10"
          >
            <Badge variant="outline" className="text-xs font-mono tracking-wider">
              [Section 04]
            </Badge>
            <h2 className="text-sm font-semibold tracking-widest text-[#a3e635] uppercase">
              Major Clients & Projects
            </h2>
          </motion.div>

          {/* Recent Focus Projects Sub-section */}
          <div className="mb-20">
            <div className="flex items-center gap-3 mb-6">
              <FolderDot className="w-5 h-5 text-[#a3e635]" />
              <h3 className="text-2xl sm:text-3xl font-black tracking-tight text-[#e2e8f0]">
                Recent Focus Projects
              </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Project 1 */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.6 }}
              >
                <Card className="h-full border-white/10 bg-[#14171a] p-8 flex flex-col justify-between hover:border-[#a3e635]/40 transition-colors">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-mono text-[#a3e635]">PROJECT 01</span>
                      <Briefcase className="w-4 h-4 text-[#94a3b8]" />
                    </div>
                    <h4 className="text-xl sm:text-2xl font-black text-[#e2e8f0] tracking-tight">
                      북촌문화센터(문화다움)
                    </h4>
                    <Separator className="bg-white/10" />
                    <p className="text-sm sm:text-base text-[#cbd5e1] leading-relaxed break-keep">
                      SNS 채널 콘텐츠 디자인 (인스타그램 카드뉴스, 광고, 뉴스레터, 웹전단, 웹진) 및 오프라인 배너, 포스터, 리플렛 제작
                    </p>
                  </div>
                </Card>
              </motion.div>

              {/* Project 2 */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.6, delay: 0.15 }}
              >
                <Card className="h-full border-white/10 bg-[#14171a] p-8 flex flex-col justify-between hover:border-[#a3e635]/40 transition-colors">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-mono text-[#a3e635]">PROJECT 02</span>
                      <Layers className="w-4 h-4 text-[#94a3b8]" />
                    </div>
                    <h4 className="text-xl sm:text-2xl font-black text-[#e2e8f0] tracking-tight">
                      그라놀로지
                    </h4>
                    <Separator className="bg-white/10" />
                    <p className="text-sm sm:text-base text-[#cbd5e1] leading-relaxed break-keep">
                      BI 리뉴얼, 패키지 리뉴얼, 홈페이지 및 홍보 제작물 총괄
                    </p>
                  </div>
                </Card>
              </motion.div>
            </div>
          </div>

          {/* Client List Grid */}
          <div>
            <div className="flex items-center justify-between mb-8">
              <h3 className="text-2xl sm:text-3xl font-black tracking-tight text-[#e2e8f0]">
                Client List
              </h3>
              <span className="text-xs font-mono text-[#94a3b8]">
                TOTAL {clientList.length} BRANDS
              </span>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 sm:gap-4">
              {clientList.map((client, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-20px' }}
                  transition={{ duration: 0.4, delay: (index % 10) * 0.04 }}
                  className="p-4 sm:p-5 rounded-lg border border-white/10 bg-[#14171a] hover:border-[#a3e635]/40 hover:bg-[#1a1e22] transition-all flex items-center justify-center text-center group"
                >
                  <span className="text-xs sm:text-sm font-medium text-[#cbd5e1] group-hover:text-[#a3e635] transition-colors break-keep">
                    {client}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* [Section 05] Philosophy & Outro (마무리) */}
      <section id="philosophy" className="py-28 md:py-36 lg:py-44 border-t border-white/10 relative overflow-hidden">
        {/* Subtle background botanical accent */}
        <div className="pointer-events-none absolute left-1/2 -translate-x-1/2 bottom-10 text-[#a3e635]/15 select-none">
          <BotanicalBranch size={360} className="w-72 h-72 sm:w-96 sm:h-96" />
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 space-y-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6 }}
            className="flex justify-center"
          >
            <Badge variant="outline" className="text-xs font-mono tracking-wider">
              [Section 05] Philosophy
            </Badge>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            <h2 className="text-4xl sm:text-6xl md:text-7xl font-black tracking-tight text-[#e2e8f0]">
              LIFE IS BEAUTIFUL
            </h2>
            <div className="w-12 h-1 bg-[#a3e635] mx-auto" />
            <p className="text-lg sm:text-xl md:text-2xl text-[#cbd5e1] font-normal leading-relaxed break-keep max-w-2xl mx-auto">
              아름답고, 멋있는, 가치 있는 삶을 산다는 것은 끊임없는 도전으로 만들어집니다.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="pt-6"
          >
            <Card className="inline-block border-white/10 bg-[#14171a] p-6 sm:p-8 text-left max-w-md w-full">
              <div className="flex items-center gap-2 mb-3">
                <span className="w-2 h-2 rounded-full bg-[#a3e635]" />
                <span className="text-xs font-mono text-[#94a3b8] uppercase tracking-wider">
                  Contact
                </span>
              </div>
              <div className="flex items-center justify-between gap-4">
                <span className="text-sm sm:text-base font-bold text-[#e2e8f0]">
                  langmni@naver.com
                </span>
                <Button
                  variant="default"
                  size="sm"
                  onClick={() => copyToClipboard('langmni@naver.com', 'email')}
                >
                  {copiedEmail ? '복사 완료' : '이메일 복사'}
                </Button>
              </div>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 py-10 bg-[#0a0c0e] text-[#94a3b8] text-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p>© 2026 KIM KYUNG AH. All Rights Reserved.</p>
          <p className="font-mono text-[#cbd5e1]">Contact: langmni@naver.com</p>
        </div>
      </footer>
    </div>
  );
}
