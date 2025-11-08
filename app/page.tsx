"use client";

import React, { useState, useEffect } from 'react';
import { 
  Play, 
  Star, 
  CheckCircle, 
  Users, 
  Building2, 
  GraduationCap,
  FileText,
  Share2,
  Brain,
  ChevronDown,
  ChevronUp,
  ArrowRight,
  Gift,
  Twitter,
  Linkedin,
  Mail,
  Phone
} from 'lucide-react';

interface Segment {
  icon: React.ReactNode;
  title: string;
  description: string;
}

interface Feature {
  icon: React.ReactNode;
  title: string;
  description: string;
}

interface Testimonial {
  company: string;
  logo?: string;
  name: string;
  role: string;
  content: string;
  rating: number;
}

interface FAQItem {
  question: string;
  answer: string;
}

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

const LinerTeamsLanding: React.FC = () => {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [formData, setFormData] = useState({
    company: '',
    email: '',
    teamSize: '',
    phoneNumber: ''
  });
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  // Countdown timer effect
  useEffect(() => {
    const calculateTimeLeft = () => {
      const targetDate = new Date('2025-11-20T00:00:00').getTime();
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60)
        });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);
    return () => clearInterval(timer);
  }, []);

  const formatNumber = (num: number): string => {
    return num.toString().padStart(2, '0');
  };

  // Segments data
  const segments: Segment[] = [
    {
      icon: <GraduationCap size={32} />,
      title: '연구자용',
      description: '논문 리서치와 문헌 검토를 AI로 10배 빠르게'
    },
    {
      icon: <Users size={32} />,
      title: '학회용',
      description: '팀 단위 지식 공유와 협업을 한 곳에서'
    },
    {
      icon: <Building2 size={32} />,
      title: '스타트업용',
      description: '시장 조사와 경쟁사 분석을 스마트하게'
    }
  ];

  // Features data
  const features: Feature[] = [
    {
      icon: <Brain size={24} />,
      title: '정확성 1위',
      description: 'SimpleQA 벤치마크에서 95.3점으로 1위 (Perplexity Pro: 90.6점, GPT-4o: 38.4점)'
    },
    {
      icon: <FileText size={24} />,
      title: '문장 단위 인용',
      description: 'Line-by-Line 인용과 APA/MLA/Chicago 원클릭 서지로, 모든 응답에 문장 단위 출처 제공'
    },
    {
      icon: <Share2 size={24} />,
      title: '팀 워크스페이스',
      description: '자료는 한 곳에 태그·권한·버전으로, 딥 리서치는 \'문헌→핵심→표/인용\' 템플릿화로 2분 재탐색'
    }
  ];

  // Testimonials data
  const testimonials: Testimonial[] = [
    {
      company: 'Seoul National University',
      name: '김교수',
      role: '의학과 교수',
      content: '연구실 전체가 사용 중입니다. 논문 리뷰 시간이 절반으로 줄었어요.',
      rating: 5
    },
    {
      company: 'Startup A',
      name: '이대표',
      role: 'CEO',
      content: '시장 조사에 걸리는 시간을 크게 단축시켰습니다. 필수 툴이에요.',
      rating: 5
    },
    {
      company: 'Research Institute',
      name: '박연구원',
      role: '선임연구원',
      content: '팀 협업이 정말 편해졌습니다. 모든 자료를 한 곳에서 관리해요.',
      rating: 4.5
    }
  ];

  // FAQ data
  const faqItems: FAQItem[] = [
    {
      question: '스타벅스 기프티콘은 어떻게 받나요?',
      answer: '구독 후 7일 이내에 인증 양식을 제출하시면, 검토 후 1좌석당 스타벅스 기프티콘 1개를 지급해드립니다. 최소 2인 이상 팀 구독 시 적용됩니다.'
    },
    {
      question: '기존 개인 구독자도 기프티콘 대상인가요?',
      answer: '이번 프로모션은 신규 팀즈 구독자를 대상으로 합니다. 기존 개인 구독에서 팀즈로 업그레이드하는 경우도 포함됩니다.'
    },
    {
      question: '팀즈 플랜의 장점은 무엇인가요?',
      answer: '무제한 AI 요약, 팀 워크스페이스, 공유 라이브러리, 관리자 대시보드, 우선 고객 지원 등 협업에 최적화된 기능을 제공합니다.'
    },
    {
      question: '최소 구독 기간이 있나요?',
      answer: '월 단위 구독이 가능하며, 연간 구독 시 20% 할인이 적용됩니다. 기프티콘 프로모션은 1개월 이상 구독 유지 시 적용됩니다.'
    }
  ];

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        size={16}
        className={i < Math.floor(rating) ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}
      />
    ));
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  const isFormValid = formData.company.trim() !== '' && 
                       formData.email.trim() !== '' && 
                       formData.teamSize.trim() !== '' && 
                       formData.phoneNumber.trim() !== '';

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!isFormValid) return;

    try {
      const response = await fetch('/api/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      if (!response.ok) {
        throw new Error('Subscription failed');
      }

      setShowPopup(false);
      setFormData({ company: '', email: '', teamSize: '', phoneNumber: '' });
      // 즉시 성공 메시지 표시 (자동 리다이렉션 없음)
      setShowSuccess(true);
    } catch (error) {
      console.error('Error:', error);
      alert('환급 신청 중 오류가 발생했습니다. 다시 시도해주세요.');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-academic-50 via-white to-scholarly-50">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-xl border-b border-academic-200/50 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center space-x-3">
              <span className="text-2xl font-serif font-semibold tracking-tight text-academic-900">INSIDERS</span>
              <span className="text-academic-300">×</span>
              <span className="text-2xl font-serif font-semibold tracking-tight text-academic-900">LINER</span>
            </div>
            
            <div className="hidden md:flex items-center space-x-10">
              <button onClick={() => scrollToSection('about-liner')} className="text-sm font-medium text-academic-600 hover:text-academic-900 transition tracking-academic">
                라이너 소개
              </button>
              <button onClick={() => scrollToSection('about')} className="text-sm font-medium text-academic-600 hover:text-academic-900 transition tracking-academic">
                기능
              </button>
              <button onClick={() => scrollToSection('benefits')} className="text-sm font-medium text-academic-600 hover:text-academic-900 transition tracking-academic">
                혜택
              </button>
              <button onClick={() => scrollToSection('faq')} className="text-sm font-medium text-academic-600 hover:text-academic-900 transition tracking-academic">
                FAQ
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section - Enhanced with Visual Layers */}
      {/* 
        Final Polish by Designer:
        1. Micro-interactions: hover/focus states refined
        2. Visual hierarchy: size, weight, spacing optimized
        3. Color harmony: yellow accent with proper contrast
        4. Breathing room: generous spacing for premium feel
        5. Accessibility: ARIA labels, focus indicators enhanced
      */}
      <section className="vignette relative overflow-hidden bg-gradient-to-br from-academic-900 via-academic-800 to-academic-950 text-white min-h-screen flex items-center">
        {/* Gaussian Blur Orbs - 배경 심도 보강 레이어 */}
        <div className="blur-orb blur-orb-1" aria-hidden="true"></div>
        <div className="blur-orb blur-orb-2" aria-hidden="true"></div>
        
        {/* Bloom Layer - 브랜드 무드 발광 블롭 */}
        <div className="bloom" style={{ top: '10%', left: '20%' }} aria-hidden="true"></div>
        
        {/* Existing Background Layers */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-academic-700/20 via-transparent to-transparent"></div>
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgyNTUsMjU1LDI1NSwwLjAzKSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-40"></div>
        
        <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-24">
          <div className="readability-zone text-center">
            {/* Countdown Timer - Premium Glass Card */}
            <div className="mb-12 flex justify-center animate-fadeIn">
              <div className="glass inline-flex items-center rounded-2xl px-10 py-5 elev-2 hover:elev-3 transition-all duration-300">
                <span className="text-sm font-semibold mr-8 text-academic-900 tracking-wider uppercase">남은 시간</span>
                <div className="flex items-center space-x-4 text-lg font-mono">
                  <div className="flex flex-col items-center min-w-[3rem]">
                    <span className="text-3xl font-bold text-academic-700 tabular-nums">{formatNumber(timeLeft.days)}</span>
                    <span className="text-xs text-academic-600 mt-1.5 font-medium">일</span>
                  </div>
                  <span className="text-academic-400 text-2xl font-light">:</span>
                  <div className="flex flex-col items-center min-w-[3rem]">
                    <span className="text-3xl font-bold text-academic-700 tabular-nums">{formatNumber(timeLeft.hours)}</span>
                    <span className="text-xs text-academic-600 mt-1.5 font-medium">시간</span>
                  </div>
                  <span className="text-academic-400 text-2xl font-light">:</span>
                  <div className="flex flex-col items-center min-w-[3rem]">
                    <span className="text-3xl font-bold text-academic-700 tabular-nums">{formatNumber(timeLeft.minutes)}</span>
                    <span className="text-xs text-academic-600 mt-1.5 font-medium">분</span>
                  </div>
                  <span className="text-academic-400 text-2xl font-light">:</span>
                  <div className="flex flex-col items-center min-w-[3rem]">
                    <span className="text-3xl font-bold text-academic-700 tabular-nums">{formatNumber(timeLeft.seconds)}</span>
                    <span className="text-xs text-academic-600 mt-1.5 font-medium">초</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Limited Time Badge */}
            <div className="inline-flex items-center bg-gradient-to-r from-yellow-500/20 to-orange-500/20 backdrop-blur-sm rounded-full px-6 py-3 mb-12 border border-yellow-400/30 shadow-lg animate-fadeIn">
              <Gift className="mr-3 text-yellow-300" size={20} />
              <span className="text-sm font-bold tracking-wider uppercase text-yellow-100">Limited Time Offer</span>
            </div>
            
            {/* Main Heading - Hero Title */}
            <h1 className="balance text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-sans font-bold mb-6 tracking-tight leading-[1.05] animate-fadeIn">
              <span className="block text-white/90 mb-2">팀즈 좌석 구독 시 1좌석당</span>
              <span className="block font-sans text-yellow-300 font-extrabold drop-shadow-[0_4px_16px_rgba(253,224,71,0.6)] text-6xl sm:text-7xl md:text-8xl lg:text-9xl">
                스타벅스 기프티콘 1개
              </span>
              <span className="inline-block ml-3 text-6xl sm:text-7xl md:text-8xl animate-bounce">🎁</span>
            </h1>
            
            {/* Subtitle - Brand Statement */}
            <p className="measure text-2xl md:text-3xl text-white/80 mb-6 mx-auto font-semibold tracking-tight leading-snug animate-fadeIn" style={{ animationDelay: '0.1s' }}>
              정확한 출처 기반 AI 리서치 협업 툴, 라이너 팀즈
            </p>
            
            {/* Fine Print - Terms */}
            <p className="measure text-sm md:text-base text-white/60 mb-14 mx-auto font-light leading-relaxed animate-fadeIn" style={{ animationDelay: '0.2s' }}>
              ※ 기간 한정 | 주어진 공식 결제 링크에서 팀 플랜 결제 | 결제 확인 후 일괄 지급
            </p>
            
            {/* CTA Buttons - Premium Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center animate-fadeIn" style={{ animationDelay: '0.3s' }}>
              <button 
                onClick={() => setShowPopup(true)}
                className="glow focus-ring group relative inline-flex items-center px-12 py-5 bg-white text-academic-900 font-bold text-lg rounded-2xl hover:bg-yellow-50 transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 shadow-2xl overflow-hidden"
                aria-label="지금 구독하고 스타벅스 기프티콘 받기"
              >
                {/* Button shine effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                <span className="relative">지금 구독하기</span>
                <ArrowRight className="relative ml-3 group-hover:translate-x-2 transition-transform duration-300" size={22} />
              </button>
              
              <button 
                onClick={() => scrollToSection('video')}
                className="focus-ring group inline-flex items-center px-12 py-5 bg-white/10 backdrop-blur-md border-2 border-white/30 text-white font-semibold text-lg rounded-2xl hover:bg-white/20 hover:border-white/40 transition-all duration-300 shadow-xl"
                aria-label="데모 영상 보기"
              >
                <Play className="mr-3 group-hover:scale-110 transition-transform" size={22} />
                <span>데모 보기</span>
              </button>
            </div>

            {/* Social Proof Badges */}
            <div className="mt-16 flex flex-wrap justify-center items-center gap-8 text-white/60 text-sm animate-fadeIn" style={{ animationDelay: '0.4s' }}>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <span className="font-medium">1,100만+ 글로벌 사용자</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className="font-medium">95% 정보 정확도</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
                <span className="font-medium">10배 빠른 리서치</span>
              </div>
            </div>
          </div>
        </div>
        
        {/* Wave decoration */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg className="w-full h-24" viewBox="0 0 1440 120" fill="none" preserveAspectRatio="none">
            <path d="M0 120L60 105C120 90 240 60 360 45C480 30 600 30 720 37.5C840 45 960 60 1080 67.5C1200 75 1320 75 1380 75L1440 75V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="white"/>
          </svg>
        </div>
      </section>

      {/* LINER Introduction Section */}
      <section id="about-liner" className="pt-32 pb-28 bg-gradient-to-b from-white to-scholarly-50/30 relative">
        {/* Background Decoration */}
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-academic-200 to-transparent"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Main Title */}
          <div className="text-center mb-24">
            <div className="inline-flex items-center gap-3 bg-academic-100/50 rounded-full px-6 py-3 mb-8 border border-academic-200 shadow-sm">
              <div className="w-2 h-2 rounded-full bg-academic-600 animate-pulse"></div>
              <span className="text-sm font-semibold text-academic-700 tracking-wider uppercase">Why LINER?</span>
            </div>
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-serif font-semibold text-academic-900 mb-8 tracking-tight leading-[1.1]">
              전 세계가 선택한<br />AI 리서치 파트너
            </h2>
            <div className="section-divider mb-8"></div>
            <p className="text-xl md:text-2xl text-academic-600 max-w-3xl mx-auto font-light leading-relaxed">
              1,100만 명의 연구자와 기업이 LINER와 함께<br className="hidden sm:block" />
              더 빠르고 정확한 인사이트를 얻고 있습니다
            </p>
          </div>

          {/* Metrics Cards */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-8">
            <div className="group bg-white rounded-3xl p-8 lg:p-10 text-center shadow-elegant hover:shadow-elegant-lg transition-all duration-500 border border-academic-100 hover:border-academic-300 hover:-translate-y-2">
              <div className="text-5xl md:text-6xl font-serif font-bold text-academic-700 mb-4 group-hover:scale-110 transition-transform duration-500">1,100만+</div>
              <div className="h-1 w-16 mx-auto mb-4 bg-gradient-to-r from-transparent via-academic-400 to-transparent rounded-full"></div>
              <div className="text-academic-600 font-medium tracking-academic text-sm">글로벌 사용자</div>
            </div>
            <div className="group bg-white rounded-3xl p-8 lg:p-10 text-center shadow-elegant hover:shadow-elegant-lg transition-all duration-500 border border-academic-100 hover:border-emerald-200 hover:-translate-y-2">
              <div className="text-5xl md:text-6xl font-serif font-bold text-emerald-700 mb-4 group-hover:scale-110 transition-transform duration-500">2억+</div>
              <div className="h-1 w-16 mx-auto mb-4 bg-gradient-to-r from-transparent via-emerald-400 to-transparent rounded-full"></div>
              <div className="text-academic-600 font-medium tracking-academic text-sm">학술 논문 DB</div>
            </div>
            <div className="group bg-white rounded-3xl p-8 lg:p-10 text-center shadow-elegant hover:shadow-elegant-lg transition-all duration-500 border border-academic-100 hover:border-purple-200 hover:-translate-y-2">
              <div className="text-5xl md:text-6xl font-serif font-bold text-purple-700 mb-4 group-hover:scale-110 transition-transform duration-500">95%</div>
              <div className="h-1 w-16 mx-auto mb-4 bg-gradient-to-r from-transparent via-purple-400 to-transparent rounded-full"></div>
              <div className="text-academic-600 font-medium tracking-academic text-sm">정보 정확도</div>
            </div>
            <div className="group bg-white rounded-3xl p-8 lg:p-10 text-center shadow-elegant hover:shadow-elegant-lg transition-all duration-500 border border-academic-100 hover:border-amber-200 hover:-translate-y-2">
              <div className="text-5xl md:text-6xl font-serif font-bold text-amber-700 mb-4 group-hover:scale-110 transition-transform duration-500">10x</div>
              <div className="h-1 w-16 mx-auto mb-4 bg-gradient-to-r from-transparent via-amber-400 to-transparent rounded-full"></div>
              <div className="text-academic-600 font-medium tracking-academic text-sm">리서치 속도</div>
            </div>
          </div>
        </div>
        
        {/* Bottom Decoration */}
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-academic-200 to-transparent"></div>
      </section>

      {/* About Section */}
      <section id="about" className="pt-32 pb-28 bg-scholarly-50/30 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute top-0 right-0 w-1/3 h-full opacity-5">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-academic-400 to-transparent"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center">
            <div>
              {/* Section Label */}
              <div className="flex items-center gap-3 mb-6">
                <span className="text-sm font-semibold text-academic-600 tracking-wider uppercase">왜 LINER Teams인가?</span>
                <div className="h-px flex-1 bg-gradient-to-r from-academic-300 to-transparent"></div>
              </div>
              
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-semibold text-academic-900 mb-10 tracking-tight leading-tight">
                강력한 AI 기능으로
                <br />
                <span className="gradient-text">팀 생산성 10배 향상</span>
              </h2>
              
              <div className="space-y-8">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-start group">
                    <div className="relative">
                      <div className="w-16 h-16 bg-gradient-to-br from-academic-100 to-academic-50 rounded-2xl flex items-center justify-center text-academic-700 mr-6 flex-shrink-0 group-hover:from-academic-200 group-hover:to-academic-100 transition-all duration-300 shadow-sm border border-academic-200 group-hover:scale-110 group-hover:shadow-elegant">
                        {feature.icon}
                      </div>
                      {index < features.length - 1 && (
                        <div className="absolute top-16 left-8 w-px h-8 bg-gradient-to-b from-academic-200 to-transparent"></div>
                      )}
                    </div>
                    <div className="flex-1 pt-1">
                      <h3 className="font-semibold text-xl text-academic-900 mb-3 tracking-academic group-hover:text-academic-700 transition-colors">
                        {feature.title}
                      </h3>
                      <p className="text-academic-600 leading-relaxed text-base">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="mt-12 p-8 bg-gradient-to-br from-academic-900 to-academic-800 rounded-3xl border border-academic-700 shadow-elegant-lg relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-academic-700 rounded-full blur-3xl opacity-30"></div>
                <div className="relative">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-1 h-12 bg-gradient-to-b from-yellow-400 to-amber-500 rounded-full"></div>
                    <p className="text-4xl font-serif font-bold text-white">
                      1000만명 이상
                    </p>
                  </div>
                  <p className="text-academic-200 leading-relaxed text-lg font-light pl-6">
                    글로벌 팀이 LINER Teams를 사용 중입니다
                  </p>
                </div>
              </div>
            </div>
            
            <div className="relative lg:pl-10">
              {/* Decorative Elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-academic-100 rounded-3xl -z-10 transform rotate-12"></div>
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-scholarly-100 rounded-3xl -z-10 transform -rotate-12"></div>
              
              <div className="aspect-square bg-gradient-to-br from-academic-100 via-scholarly-100 to-academic-50 rounded-3xl p-12 shadow-elegant-lg border border-academic-200 relative overflow-hidden">
                {/* Grid Pattern Overlay */}
                <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAwIDEwIEwgNDAgMTAgTSAxMCAwIEwgMTAgNDAgTSAwIDIwIEwgNDAgMjAgTSAyMCAwIEwgMjAgNDAgTSAwIDMwIEwgNDAgMzAgTSAzMCAwIEwgMzAgNDAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgxMDIsMTE1LDE1MSwwLjA1KSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-30"></div>
                
                <img 
                  src="/dashboard-mockup.png" 
                  alt="LINER Teams Dashboard"
                  className="w-full h-full object-contain opacity-90 relative z-10 drop-shadow-2xl"
                />
              </div>
              
              {/* Floating Badge */}
              <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 bg-white px-8 py-4 rounded-2xl shadow-elegant-lg border border-academic-200">
                <div className="flex items-center gap-3">
                  <div className="flex -space-x-2">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-academic-400 to-academic-600 border-2 border-white"></div>
                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-emerald-400 to-emerald-600 border-2 border-white"></div>
                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-purple-400 to-purple-600 border-2 border-white"></div>
                  </div>
                  <div className="text-sm">
                    <p className="font-semibold text-academic-900">1,100만+ 사용자</p>
                    <p className="text-academic-600 text-xs">글로벌 신뢰도</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section id="video" className="pt-32 pb-28 bg-white relative">
        {/* Decorative Top Border */}
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-academic-300 to-transparent"></div>
        
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            {/* Section Number */}
            <div className="flex items-center justify-center gap-3 mb-8">
              <div className="h-px w-20 bg-gradient-to-r from-transparent to-academic-300"></div>
              <span className="text-sm font-semibold text-academic-600 tracking-wider uppercase">데모 영상</span>
              <div className="h-px w-20 bg-gradient-to-l from-transparent to-academic-300"></div>
            </div>
            
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-semibold text-academic-900 mb-6 tracking-tight">
              1분만에 알아보는<br />LINER Teams
            </h2>
            <div className="section-divider mb-6"></div>
            <p className="text-lg md:text-xl text-academic-600 font-light">
              실제 사용 모습을 확인해보세요
            </p>
          </div>
          
          <div className="relative aspect-video bg-academic-900 rounded-3xl overflow-hidden shadow-elegant-lg border-2 border-academic-200 group">
            {/* Decorative Corner Elements */}
            <div className="absolute top-4 left-4 w-12 h-12 border-t-2 border-l-2 border-academic-300/30 rounded-tl-lg"></div>
            <div className="absolute top-4 right-4 w-12 h-12 border-t-2 border-r-2 border-academic-300/30 rounded-tr-lg"></div>
            <div className="absolute bottom-4 left-4 w-12 h-12 border-b-2 border-l-2 border-academic-300/30 rounded-bl-lg"></div>
            <div className="absolute bottom-4 right-4 w-12 h-12 border-b-2 border-r-2 border-academic-300/30 rounded-br-lg"></div>
            
            {!isVideoPlaying ? (
              <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-academic-800 via-academic-900 to-academic-950">
                {/* Background Pattern */}
                <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgyNTUsMjU1LDI1NSwwLjAzKSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-40"></div>
                
                <button
                  onClick={() => setIsVideoPlaying(true)}
                  className="group/play relative z-10"
                >
                  <div className="absolute inset-0 bg-white rounded-full scale-100 group-hover/play:scale-110 animate-ping opacity-20"></div>
                  <div className="relative w-28 h-28 bg-white rounded-full flex items-center justify-center shadow-elegant-lg group-hover/play:scale-110 group-hover/play:shadow-2xl transition-all duration-300">
                    <Play size={40} className="text-academic-800 ml-2" />
                  </div>
                  <div className="absolute -bottom-12 left-1/2 transform -translate-x-1/2 whitespace-nowrap">
                    <span className="text-white/80 text-sm font-medium">영상 재생하기</span>
                  </div>
                </button>
              </div>
            ) : (
              <video className="w-full h-full" controls autoPlay>
                <source src="/demo-video.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            )}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section id="benefits" className="pt-32 pb-28 bg-gradient-to-br from-scholarly-50/50 to-academic-50/30 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            {/* Section Number */}
            <div className="flex items-center justify-center gap-3 mb-8">
              <div className="h-px w-20 bg-gradient-to-r from-transparent to-academic-300"></div>
              <span className="text-sm font-semibold text-academic-600 tracking-wider uppercase">프로모션 안내</span>
              <div className="h-px w-20 bg-gradient-to-l from-transparent to-academic-300"></div>
            </div>
            
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-semibold text-academic-900 mb-6 tracking-tight">
              스타벅스 기프티콘<br />프로모션 안내
            </h2>
            <div className="section-divider mb-6"></div>
            <p className="text-lg md:text-xl text-academic-600 font-light">
              간단한 절차로 기프티콘을 받으세요
            </p>
          </div>
          
          <div className="bg-white rounded-3xl shadow-elegant-lg p-10 md:p-16 border-2 border-academic-100 relative overflow-hidden">
            {/* Decorative Background Elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-academic-50 to-transparent rounded-full blur-3xl opacity-50"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-tr from-scholarly-50 to-transparent rounded-full blur-3xl opacity-50"></div>
            
            <div className="grid md:grid-cols-2 gap-16 relative">
              <div>
                <div className="flex items-center gap-3 mb-10">
                  <div className="w-1 h-8 bg-gradient-to-b from-academic-600 to-academic-400 rounded-full"></div>
                  <h3 className="text-3xl font-serif font-semibold text-academic-900 tracking-tight">
                    환급 절차
                  </h3>
                </div>
                <ol className="space-y-8">
                  <li className="flex items-start group">
                    <div className="relative">
                      <div className="w-12 h-12 bg-gradient-to-br from-academic-700 to-academic-600 text-white rounded-2xl flex items-center justify-center mr-5 flex-shrink-0 font-bold shadow-elegant group-hover:scale-110 transition-transform duration-300">
                        1
                      </div>
                      <div className="absolute top-12 left-6 w-px h-8 bg-gradient-to-b from-academic-300 to-transparent"></div>
                    </div>
                    <div className="flex-1 pt-1">
                      <p className="font-semibold text-lg text-academic-900 mb-2 tracking-academic">팀즈 플랜 구독</p>
                      <p className="text-academic-600 leading-relaxed">최소 2인 이상 팀 구독 신청</p>
                    </div>
                  </li>
                  <li className="flex items-start group">
                    <div className="relative">
                      <div className="w-12 h-12 bg-gradient-to-br from-academic-700 to-academic-600 text-white rounded-2xl flex items-center justify-center mr-5 flex-shrink-0 font-bold shadow-elegant group-hover:scale-110 transition-transform duration-300">
                        2
                      </div>
                      <div className="absolute top-12 left-6 w-px h-8 bg-gradient-to-b from-academic-300 to-transparent"></div>
                    </div>
                    <div className="flex-1 pt-1">
                      <p className="font-semibold text-lg text-academic-900 mb-2 tracking-academic">인증 양식 제출</p>
                      <p className="text-academic-600 leading-relaxed">구독 후 7일 이내 제출</p>
                    </div>
                  </li>
                  <li className="flex items-start group">
                    <div className="w-12 h-12 bg-gradient-to-br from-academic-700 to-academic-600 text-white rounded-2xl flex items-center justify-center mr-5 flex-shrink-0 font-bold shadow-elegant group-hover:scale-110 transition-transform duration-300">
                      3
                    </div>
                    <div className="flex-1 pt-1">
                      <p className="font-semibold text-lg text-academic-900 mb-2 tracking-academic">기프티콘 지급</p>
                      <p className="text-academic-600 leading-relaxed">검토 후 7일 이내 지급</p>
                    </div>
                  </li>
                </ol>
              </div>
              
              <div>
                <div className="flex items-center gap-3 mb-10">
                  <div className="w-1 h-8 bg-gradient-to-b from-emerald-600 to-emerald-400 rounded-full"></div>
                  <h3 className="text-3xl font-serif font-semibold text-academic-900 tracking-tight">
                    적용 조건
                  </h3>
                </div>
                <ul className="space-y-6">
                  <li className="flex items-start group">
                    <div className="w-6 h-6 rounded-lg bg-emerald-100 flex items-center justify-center mr-4 flex-shrink-0 mt-1 group-hover:bg-emerald-200 transition-colors">
                      <CheckCircle className="text-emerald-600" size={16} />
                    </div>
                    <span className="text-academic-700 leading-relaxed text-lg">최소 2인 이상 팀 구독</span>
                  </li>
                  <li className="flex items-start group">
                    <div className="w-6 h-6 rounded-lg bg-emerald-100 flex items-center justify-center mr-4 flex-shrink-0 mt-1 group-hover:bg-emerald-200 transition-colors">
                      <CheckCircle className="text-emerald-600" size={16} />
                    </div>
                    <span className="text-academic-700 leading-relaxed text-lg">1좌석당 스타벅스 기프티콘 1개</span>
                  </li>
                  <li className="flex items-start group">
                    <div className="w-6 h-6 rounded-lg bg-emerald-100 flex items-center justify-center mr-4 flex-shrink-0 mt-1 group-hover:bg-emerald-200 transition-colors">
                      <CheckCircle className="text-emerald-600" size={16} />
                    </div>
                    <span className="text-academic-700 leading-relaxed text-lg">1개월 이상 구독 유지</span>
                  </li>
                  <li className="flex items-start group">
                    <div className="w-6 h-6 rounded-lg bg-emerald-100 flex items-center justify-center mr-4 flex-shrink-0 mt-1 group-hover:bg-emerald-200 transition-colors">
                      <CheckCircle className="text-emerald-600" size={16} />
                    </div>
                    <span className="text-academic-700 leading-relaxed text-lg">2025년 11월 20일까지 신청</span>
                  </li>
                </ul>
                
                {/* Call to Action Box */}
                <div className="mt-10 p-6 bg-gradient-to-br from-academic-900 to-academic-800 rounded-2xl border border-academic-700">
                  <div className="flex items-center gap-3 mb-3">
                    <Gift className="text-yellow-400" size={24} />
                    <p className="text-white font-semibold text-lg">지금 바로 신청하세요!</p>
                  </div>
                  <p className="text-academic-200 text-sm leading-relaxed">
                    프로모션 기간이 얼마 남지 않았습니다
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* FAQ Section */}
      <section id="faq" className="pt-32 pb-28 bg-scholarly-50/30 relative">
        {/* Decorative Top Border */}
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-academic-300 to-transparent"></div>
        
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            {/* Section Number */}
            <div className="flex items-center justify-center gap-3 mb-8">
              <div className="h-px w-20 bg-gradient-to-r from-transparent to-academic-300"></div>
              <span className="text-sm font-semibold text-academic-600 tracking-wider uppercase">FAQ</span>
              <div className="h-px w-20 bg-gradient-to-l from-transparent to-academic-300"></div>
            </div>
            
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-semibold text-academic-900 mb-6 tracking-tight">
              자주 묻는 질문
            </h2>
            <div className="section-divider mb-6"></div>
            <p className="text-lg md:text-xl text-academic-600 font-light">
              궁금한 점이 있으신가요?
            </p>
          </div>
          
          <div className="space-y-4">
            {faqItems.map((item, index) => (
              <div 
                key={index}
                className="bg-white rounded-2xl shadow-elegant overflow-hidden border-2 border-academic-100 hover:border-academic-300 transition-all duration-300 group"
              >
                <button
                  onClick={() => setOpenFAQ(openFAQ === index ? null : index)}
                  className="w-full px-8 py-6 text-left flex items-center justify-between hover:bg-academic-50/50 transition-colors"
                >
                  <span className="font-semibold text-academic-900 tracking-academic text-lg pr-4">
                    {item.question}
                  </span>
                  <div className={`transform transition-transform duration-300 flex-shrink-0 ${openFAQ === index ? 'rotate-180' : ''}`}>
                    {openFAQ === index ? (
                      <ChevronUp className="text-academic-600" size={24} />
                    ) : (
                      <ChevronDown className="text-academic-400" size={24} />
                    )}
                  </div>
                </button>
                
                {openFAQ === index && (
                  <div className="px-8 pb-6 text-academic-600 leading-relaxed border-t border-academic-100 pt-6 bg-academic-50/30 animate-fadeIn">
                    <p className="text-base">{item.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
          
          {/* Contact Box */}
          <div className="mt-20 relative">
            <div className="absolute inset-0 bg-gradient-to-br from-academic-900 to-academic-800 rounded-3xl blur-xl opacity-20"></div>
            <div className="relative bg-gradient-to-br from-academic-900 to-academic-800 rounded-3xl p-10 border border-academic-700 shadow-elegant-lg">
              <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                <div className="text-center md:text-left">
                  <p className="text-white font-semibold text-xl mb-2">더 궁금한 점이 있으신가요?</p>
                  <p className="text-academic-200 font-light">언제든지 문의해 주세요. 빠르게 답변드리겠습니다.</p>
                </div>
                <button className="flex items-center gap-3 px-8 py-4 bg-white text-academic-900 font-semibold rounded-xl hover:bg-academic-50 transition-all duration-300 shadow-elegant hover:scale-105 whitespace-nowrap">
                  <Mail size={20} />
                  <span>이메일로 문의하기</span>
                </button>
              </div>
              
              <div className="mt-8 pt-8 border-t border-academic-700/50 flex flex-col sm:flex-row items-center justify-center gap-6 text-academic-300 text-sm">
                <div className="flex items-center gap-2">
                  <Mail size={16} />
                  <span>iamsage9346@gmail.com</span>
                </div>
                <div className="hidden sm:block w-px h-4 bg-academic-700"></div>
                <div className="flex items-center gap-2">
                  <Phone size={16} />
                  <span>010-4670-9346</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-academic-950 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-12">
            <div>
              <div className="flex items-center space-x-3 mb-6">
                <span className="text-xl font-serif font-semibold tracking-tight">INSIDERS</span>
                <span className="text-academic-500">×</span>
                <span className="text-xl font-serif font-semibold tracking-tight">LINER</span>
              </div>
              <p className="text-academic-400 text-sm leading-relaxed font-light">
                AI로 팀의 리서치 속도를 혁신하세요
              </p>
            </div>  
            
            <div>
              <h4 className="font-semibold mb-6 tracking-academic text-academic-200">문의</h4>
              <div className="space-y-3 text-academic-400 text-sm">
                <p className="flex items-center font-light">
                  <Mail className="mr-3" size={16} />
                  iamsage9346@gmail.com
                </p>
                <p className="flex items-center font-light">
                  <Phone className="mr-3" size={16} />
                  010-4670-9346
                </p>
              </div>
              
              <div className="flex space-x-4 mt-6">
              </div>
            </div>
          </div>
          
          <div className="border-t border-academic-800 mt-12 pt-10 text-center text-academic-400 text-sm">
            <p className="font-light">© 2025 LINER Teams. All rights reserved.</p>
            <p className="mt-3 font-light">
              본 프로모션은 INSIDERS와 LINER의 공식 파트너십으로 진행됩니다.
            </p>
          </div>
        </div>
      </footer>

      {/* Popup Modal */}
      {showPopup && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-academic-950/60 backdrop-blur-md">
          <div className="bg-white rounded-3xl p-10 max-w-md w-full mx-4 shadow-elegant-lg border border-academic-200">
            <h3 className="text-3xl font-serif font-semibold text-academic-900 mb-4 tracking-tight">
              지금 바로 시작하세요! 🚀
            </h3>
            <p className="text-academic-600 mb-8 leading-relaxed">
              팀 정보를 입력하고 환급 혜택을 받으세요.
            </p>
            
            <form onSubmit={handleSubscribe} className="space-y-5">
              <input
                type="text"
                placeholder="회사/기관명"
                value={formData.company}
                onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                className="w-full px-5 py-4 border border-academic-300 rounded-xl focus:outline-none focus:border-academic-600 focus:ring-2 focus:ring-academic-200 transition"
                required
              />
              <input
                type="email"
                placeholder="업무용 이메일"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full px-5 py-4 border border-academic-300 rounded-xl focus:outline-none focus:border-academic-600 focus:ring-2 focus:ring-academic-200 transition"
                required
              />
              <input
                type="number"
                placeholder="팀 인원 수"
                value={formData.teamSize}
                onChange={(e) => setFormData({ ...formData, teamSize: e.target.value })}
                className="w-full px-5 py-4 border border-academic-300 rounded-xl focus:outline-none focus:border-academic-600 focus:ring-2 focus:ring-academic-200 transition"
                required
              />
              <input
                type="text"
                placeholder="전화번호 (숫자만 입력)"
                value={formData.phoneNumber}
                onChange={(e) => setFormData({ ...formData, phoneNumber: e.target.value.replace(/[^0-9]/g, '') })}
                className="w-full px-5 py-4 border border-academic-300 rounded-xl focus:outline-none focus:border-academic-600 focus:ring-2 focus:ring-academic-200 transition"
                required
              />
              
              <button
                type="submit"
                disabled={!isFormValid}
                className={`w-full py-4 font-semibold rounded-xl transition shadow-elegant ${
                  isFormValid
                    ? 'bg-academic-700 text-white hover:bg-academic-800 cursor-pointer'
                    : 'bg-academic-200 text-academic-400 cursor-not-allowed'
                }`}
              >
                구독 시작하기
              </button>
            </form>
            
            <button
              onClick={() => setShowPopup(false)}
              className="mt-5 w-full py-3 text-academic-600 hover:text-academic-900 transition font-medium"
            >
              나중에 하기
            </button>
          </div>
        </div>
      )}

      {/* Success Alert */}
      {showSuccess && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-academic-950/60 backdrop-blur-md">
          <div className="bg-white rounded-3xl p-10 max-w-md w-full mx-4 shadow-elegant-lg text-center border border-academic-200">
            <div className="text-6xl mb-6">✅</div>
            <h3 className="text-3xl font-serif font-semibold text-academic-900 mb-4 tracking-tight">
              신청이 완료되었습니다!
            </h3>
            <p className="text-academic-600 mb-8 leading-relaxed">
              아래 링크에서 팀즈 플랜을 결제하면<br />스타벅스 기프티콘이 지급됩니다.
            </p>
            
            <a
              href="https://hey.liner.com/d1ngazm"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full block py-4 bg-academic-700 text-white font-semibold rounded-xl hover:bg-academic-800 transition mb-4 shadow-elegant"
            >
              지금 결제하러 가기 →
            </a>

            <button
              onClick={() => setShowSuccess(false)}
              className="w-full py-3 text-academic-600 hover:text-academic-900 transition font-medium"
            >
              닫기
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default LinerTeamsLanding;
