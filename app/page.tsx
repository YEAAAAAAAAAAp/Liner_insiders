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
    bank: '',
    accountNumber: ''
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
      description: 'SimpleQA 벤치마크에서 93.7로 1위 (Perplexity Pro·Gemini·GPT-4o 대비)'
    },
    {
      icon: <FileText size={24} />,
      title: '문장 단위 인용',
      description: 'Scholar Mode에서 Line-by-Line 인용과 APA/MLA/Chicago 원클릭 서지 제공'
    },
    {
      icon: <Share2 size={24} />,
      title: '출처가 보이는 답변',
      description: '답변-증거-참고문헌까지 한 흐름으로 팀 내 검증·재사용 속도 빠름'
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
      question: '환급은 어떻게 받나요?',
      answer: '구독 후 30일 이내에 인증 양식을 제출하시면, 검토 후 1인당 5,000원을 환급해드립니다. 최소 2인 이상 팀 구독 시 적용됩니다.'
    },
    {
      question: '기존 개인 구독자도 환급 대상인가요?',
      answer: '이번 프로모션은 신규 팀즈 구독자를 대상으로 합니다. 기존 개인 구독에서 팀즈로 업그레이드하는 경우도 포함됩니다.'
    },
    {
      question: '팀즈 플랜의 장점은 무엇인가요?',
      answer: '무제한 AI 요약, 팀 워크스페이스, 공유 라이브러리, 관리자 대시보드, 우선 고객 지원 등 협업에 최적화된 기능을 제공합니다.'
    },
    {
      question: '최소 구독 기간이 있나요?',
      answer: '월 단위 구독이 가능하며, 연간 구독 시 20% 할인이 적용됩니다. 환급 프로모션은 1개월 이상 구독 시 적용됩니다.'
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
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  const isFormValid = formData.company.trim() !== '' && 
                       formData.email.trim() !== '' && 
                       formData.teamSize.trim() !== '' && 
                       formData.bank.trim() !== '' &&
                       formData.accountNumber.trim() !== '';

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
      setFormData({ company: '', email: '', teamSize: '', bank: '', accountNumber: '' });
      // 즉시 성공 메시지 표시 (자동 리다이렉션 없음)
      setShowSuccess(true);
    } catch (error) {
      console.error('Error:', error);
      alert('환급 신청 중 오류가 발생했습니다. 다시 시도해주세요.');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <span className="text-xl font-bold text-gray-900">INSIDERS</span>
              <span className="text-gray-400">×</span>
              <span className="text-xl font-bold text-gray-900">LINER</span>
            </div>
            
            <div className="hidden md:flex items-center space-x-8">
              <button onClick={() => scrollToSection('segments')} className="text-gray-600 hover:text-gray-900 transition">
                솔루션
              </button>
              <button onClick={() => scrollToSection('about')} className="text-gray-600 hover:text-gray-900 transition">
                기능
              </button>
              <button onClick={() => scrollToSection('benefits')} className="text-gray-600 hover:text-gray-900 transition">
                혜택
              </button>
              <button onClick={() => scrollToSection('testimonials')} className="text-gray-600 hover:text-gray-900 transition">
                후기
              </button>
              <button onClick={() => scrollToSection('faq')} className="text-gray-600 hover:text-gray-900 transition">
                FAQ
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-600 via-blue-700 to-purple-700 text-white">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
          <div className="text-center">
            {/* Countdown Timer */}
            <div className="mb-6 flex justify-center">
              <div className="inline-flex items-center bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 border border-white/20">
                <span className="text-sm font-medium mr-4">남은 시간</span>
                <div className="flex items-center space-x-2 text-lg font-mono">
                  <span className="text-yellow-300">{formatNumber(timeLeft.days)}</span>
                  <span className="text-white/70">일</span>
                  <span className="text-yellow-300">:</span>
                  <span className="text-yellow-300">{formatNumber(timeLeft.hours)}</span>
                  <span className="text-white/70">시간</span>
                  <span className="text-yellow-300">:</span>
                  <span className="text-yellow-300">{formatNumber(timeLeft.minutes)}</span>
                  <span className="text-white/70">분</span>
                  <span className="text-yellow-300">:</span>
                  <span className="text-yellow-300">{formatNumber(timeLeft.seconds)}</span>
                  <span className="text-white/70">초</span>
                </div>
              </div>
            </div>

            <div className="inline-flex items-center bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
              <Gift className="mr-2" size={20} />
              <span className="text-sm font-medium">LIMITED TIME OFFER</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              팀즈 좌석 구독 시 1인당
              <br />
              <span className="text-yellow-300">5,000원 환급</span> 🎁
            </h1>
            
            <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-2xl mx-auto">
              AI 리서치 협업 툴, 라이너 팀즈
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={() => setShowPopup(true)}
                className="inline-flex items-center px-8 py-4 bg-white text-blue-700 font-semibold rounded-lg hover:bg-gray-100 transition transform hover:scale-105 shadow-xl"
              >
                지금 구독하기
                <ArrowRight className="ml-2" size={20} />
              </button>
              <button 
                onClick={() => scrollToSection('video')}
                className="inline-flex items-center px-8 py-4 bg-transparent border-2 border-white text-white font-semibold rounded-lg hover:bg-white/10 transition"
              >
                <Play className="mr-2" size={20} />
                데모 보기
              </button>
            </div>
          </div>
        </div>
        
        {/* Wave decoration */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg className="w-full h-20" viewBox="0 0 1440 120" fill="none">
            <path d="M0 120L60 105C120 90 240 60 360 45C480 30 600 30 720 37.5C840 45 960 60 1080 67.5C1200 75 1320 75 1380 75L1440 75V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="white"/>
          </svg>
        </div>
      </section>

      {/* Segments Section */}
      <section id="segments" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              모든 팀을 위한 AI 리서치 솔루션
            </h2>
            <p className="text-lg text-gray-600">
              당신의 팀에 맞는 완벽한 솔루션을 찾아보세요
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {segments.map((segment, index) => (
              <div 
                key={index}
                className="group bg-white border border-gray-200 rounded-2xl p-8 hover:shadow-2xl hover:border-blue-500 transition-all duration-300 cursor-pointer"
              >
                <div className="w-16 h-16 bg-blue-100 rounded-xl flex items-center justify-center text-blue-600 mb-6 group-hover:bg-blue-600 group-hover:text-white transition">
                  {segment.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {segment.title}
                </h3>
                <p className="text-gray-600">
                  {segment.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                강력한 AI 기능으로
                <br />
                팀 생산성 10배 향상
              </h2>
              
              <div className="space-y-6">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-start">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600 mr-4 flex-shrink-0">
                      {feature.icon}
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">
                        {feature.title}
                      </h3>
                      <p className="text-gray-600">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="mt-8 p-6 bg-blue-50 rounded-xl">
                <p className="text-2xl font-bold text-blue-900 mb-2">
                  1000만명 이상
                </p>
                <p className="text-gray-700">
                  글로벌 팀이 LINER Teams를 사용 중입니다
                </p>
              </div>
            </div>
            
            <div className="relative">
              <div className="aspect-square bg-gradient-to-br from-blue-100 to-purple-100 rounded-2xl p-8">
                <img 
                  src="/dashboard-mockup.png" 
                  alt="LINER Teams Dashboard"
                  className="w-full h-full object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section id="video" className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              1분만에 알아보는 LINER Teams
            </h2>
            <p className="text-lg text-gray-600">
              실제 사용 모습을 확인해보세요
            </p>
          </div>
          
          <div className="relative aspect-video bg-gray-900 rounded-2xl overflow-hidden shadow-2xl">
            {!isVideoPlaying ? (
              <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-blue-600 to-purple-600">
                <button
                  onClick={() => setIsVideoPlaying(true)}
                  className="group relative"
                >
                  <div className="absolute inset-0 bg-white rounded-full scale-110 animate-ping opacity-25"></div>
                  <div className="relative w-24 h-24 bg-white rounded-full flex items-center justify-center shadow-2xl group-hover:scale-110 transition">
                    <Play size={36} className="text-blue-600 ml-2" />
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
      <section id="benefits" className="py-20 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              환급 프로모션 상세 안내
            </h2>
            <p className="text-lg text-gray-600">
              간단한 절차로 환급받으세요
            </p>
          </div>
          
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-6">
                  환급 절차
                </h3>
                <ol className="space-y-4">
                  <li className="flex items-start">
                    <span className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center mr-3 flex-shrink-0 text-sm font-semibold">
                      1
                    </span>
                    <div>
                      <p className="font-medium text-gray-900">팀즈 플랜 구독</p>
                      <p className="text-gray-600 text-sm mt-1">최소 2인 이상 팀 구독 신청</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center mr-3 flex-shrink-0 text-sm font-semibold">
                      2
                    </span>
                    <div>
                      <p className="font-medium text-gray-900">인증 양식 제출</p>
                      <p className="text-gray-600 text-sm mt-1">구독 후 7일 이내 제출</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center mr-3 flex-shrink-0 text-sm font-semibold">
                      3
                    </span>
                    <div>
                      <p className="font-medium text-gray-900">환급금 지급</p>
                      <p className="text-gray-600 text-sm mt-1">검토 후 7일 이내 지급</p>
                    </div>
                  </li>
                </ol>
              </div>
              
              <div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-6">
                  적용 조건
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <CheckCircle className="text-green-500 mr-3 flex-shrink-0 mt-0.5" size={20} />
                    <span className="text-gray-700">최소 2인 이상 팀 구독</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="text-green-500 mr-3 flex-shrink-0 mt-0.5" size={20} />
                    <span className="text-gray-700">1좌석당 5,000원 환급</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="text-green-500 mr-3 flex-shrink-0 mt-0.5" size={20} />
                    <span className="text-gray-700">2025년 11월 20일까지 신청</span>
                  </li>
                </ul>
                
                <div className="mt-6 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
                  <p className="text-sm text-yellow-800">
                    <strong>💡 Tip:</strong> 연간 구독 시 환급금과 별도로 20% 추가 할인!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              이미 많은 팀이 사용 중입니다
            </h2>
            <p className="text-lg text-gray-600">
              실제 사용자들의 생생한 후기
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div 
                key={index}
                className="bg-gray-50 rounded-2xl p-8 hover:shadow-lg transition"
              >
                <div className="flex items-center mb-4">
                  {renderStars(testimonial.rating)}
                </div>
                
                <p className="text-gray-700 mb-6 italic">
                  "{testimonial.content}"
                </p>
                
                <div className="border-t pt-4">
                  <p className="font-semibold text-gray-900">
                    {testimonial.name}
                  </p>
                  <p className="text-sm text-gray-600">
                    {testimonial.role} · {testimonial.company}
                  </p>
                </div>
              </div>
            ))}
          </div>
          
          {/* Logo Cloud */}
          <div className="mt-16">
            <p className="text-center text-gray-600 mb-8">
              신뢰하는 기업 및 기관
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-items-center opacity-60">
              {['SKT에이닷', 'BC카드', 'LG U+', 'Lenovo'].map((company, index) => (
                <div key={index} className="text-2xl font-bold text-gray-400">
                  {company}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-20 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              자주 묻는 질문
            </h2>
            <p className="text-lg text-gray-600">
              궁금한 점이 있으신가요?
            </p>
          </div>
          
          <div className="space-y-4">
            {faqItems.map((item, index) => (
              <div 
                key={index}
                className="bg-white rounded-xl shadow-sm overflow-hidden"
              >
                <button
                  onClick={() => setOpenFAQ(openFAQ === index ? null : index)}
                  className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition"
                >
                  <span className="font-medium text-gray-900">
                    {item.question}
                  </span>
                  {openFAQ === index ? (
                    <ChevronUp className="text-gray-400" size={20} />
                  ) : (
                    <ChevronDown className="text-gray-400" size={20} />
                  )}
                </button>
                
                {openFAQ === index && (
                  <div className="px-6 pb-4 text-gray-600">
                    {item.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <p className="text-gray-600 mb-4">
              더 궁금한 점이 있으신가요?
            </p>
            <button className="inline-flex items-center text-blue-600 font-medium hover:text-blue-700 transition">
              <Mail className="mr-2" size={18} />
              iamsage9346@gmail.com로 문의하기
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <span className="text-xl font-bold">INSIDERS</span>
                <span className="text-gray-500">×</span>
                <span className="text-xl font-bold">LINER</span>
              </div>
              <p className="text-gray-400 text-sm">
                AI로 팀의 리서치 속도를 혁신하세요
              </p>
            </div>  
            
            <div>
              <h4 className="font-semibold mb-4">문의</h4>
              <div className="space-y-2 text-gray-400 text-sm">
                <p className="flex items-center">
                  <Mail className="mr-2" size={16} />
                  iamsage9346@gmail.com
                </p>
                <p className="flex items-center">
                  <Phone className="mr-2" size={16} />
                  010-4670-9346
                </p>
              </div>
              
              <div className="flex space-x-4 mt-4">
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400 text-sm">
            <p>© 2025 LINER Teams. All rights reserved.</p>
            <p className="mt-2">
              본 프로모션은 INSIDERS와 LINER의 공식 파트너십으로 진행됩니다.
            </p>
          </div>
        </div>
      </footer>

      {/* Popup Modal */}
      {showPopup && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
          <div className="bg-white rounded-2xl p-8 max-w-md w-full mx-4 shadow-2xl">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              지금 바로 시작하세요! 🚀
            </h3>
            <p className="text-gray-600 mb-6">
              팀 정보를 입력하고 환급 혜택을 받으세요.
            </p>
            
            <form onSubmit={handleSubscribe} className="space-y-4">
              <input
                type="text"
                placeholder="회사/기관명"
                value={formData.company}
                onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                required
              />
              <input
                type="email"
                placeholder="업무용 이메일"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                required
              />
              <input
                type="number"
                placeholder="팀 인원 수"
                value={formData.teamSize}
                onChange={(e) => setFormData({ ...formData, teamSize: e.target.value })}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                required
              />
              <input
                type="text"
                placeholder="은행명 (예: 국민은행, 신한은행)"
                value={formData.bank}
                onChange={(e) => setFormData({ ...formData, bank: e.target.value })}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                required
              />
              <input
                type="text"
                placeholder="계좌번호"
                value={formData.accountNumber}
                onChange={(e) => setFormData({ ...formData, accountNumber: e.target.value })}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                required
              />
              
              <button
                type="submit"
                disabled={!isFormValid}
                className={`w-full py-3 font-semibold rounded-lg transition ${
                  isFormValid
                    ? 'bg-blue-600 text-white hover:bg-blue-700 cursor-pointer'
                    : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                }`}
              >
                구독 시작하기
              </button>
            </form>
            
            <button
              onClick={() => setShowPopup(false)}
              className="mt-4 w-full py-2 text-gray-600 hover:text-gray-900 transition"
            >
              나중에 하기
            </button>
          </div>
        </div>
      )}

      {/* Success Alert */}
      {showSuccess && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
          <div className="bg-white rounded-2xl p-8 max-w-md w-full mx-4 shadow-2xl text-center">
            <div className="text-5xl mb-4">✅</div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              환급 신청이 완료되었습니다!
            </h3>
            <p className="text-gray-600 mb-6">
              아래 링크에서 팀즈 플랜을 결제하면<br />자동으로 환급 혜택이 적용됩니다.
            </p>
            
            <a
              href="https://hey.liner.com/d1ngazm"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full block py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition mb-3"
            >
              지금 결제하러 가기 →
            </a>

            <button
              onClick={() => setShowSuccess(false)}
              className="w-full py-2 text-gray-600 hover:text-gray-900 transition"
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
