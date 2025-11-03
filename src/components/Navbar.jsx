import { useState, useRef, useEffect, useMemo } from "react";
import { Link, useLocation } from "react-router-dom";
import { useLanguage } from "../contexts/LanguageContext";
import { useTranslation } from "../hooks/useTranslation";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLanguageOpen, setIsLanguageOpen] = useState(false);
  const [isLanguageOpenMobile, setIsLanguageOpenMobile] = useState(false);
  const languageDropdownRef = useRef(null);
  const languageDropdownRefMobile = useRef(null);
  const location = useLocation();
  const { language, setLanguage } = useLanguage();
  const { t } = useTranslation();

  const isActive = (path) => location.pathname === path;

  const navLinks = useMemo(
    () => [
      { path: "/", label: t("nav.home") },
      { path: "/about", label: t("nav.about") },
      { path: "/services", label: t("nav.services") },
      { path: "/portfolio", label: t("nav.portfolio") },
      { path: "/contact", label: t("nav.contact") },
    ],
    [language]
  );

  const languages = [
    { code: "ko", name: "한국어", flag: "🇰🇷" },
    { code: "en", name: "English", flag: "🇺🇸" },
    { code: "th", name: "ไทย", flag: "🇹🇭" },
  ];

  const currentLanguage = languages.find((lang) => lang.code === language) || languages[0];

  // 외부 클릭 시 드롭다운 닫기 (데스크톱)
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (languageDropdownRef.current && !languageDropdownRef.current.contains(event.target)) {
        setIsLanguageOpen(false);
      }
    };

    if (isLanguageOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isLanguageOpen]);

  // 외부 클릭 시 드롭다운 닫기 (모바일)
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (languageDropdownRefMobile.current && !languageDropdownRefMobile.current.contains(event.target)) {
        setIsLanguageOpenMobile(false);
      }
    };

    if (isLanguageOpenMobile) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isLanguageOpenMobile]);

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 bg-white border-b border-gray-100 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
          <div className="flex justify-between items-center h-16 md:h-20">
            <Link to="/" className="flex items-center">
              <span className="text-xl md:text-2xl font-semibold text-navy-900 tracking-tight">Company</span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`px-2 py-2 text-sm font-medium transition-colors ${
                    isActive(link.path) ? "text-navy-900 border-b-2 border-navy-900" : "text-gray-600 hover:text-navy-900"
                  }`}
                >
                  {link.label}
                </Link>
              ))}

              {/* Language Selector - Desktop */}
              <div className="relative" ref={languageDropdownRef}>
                <button
                  onClick={() => setIsLanguageOpen(!isLanguageOpen)}
                  className="flex items-center space-x-2 px-3 py-2 text-sm font-medium text-gray-700 hover:text-navy-900 border border-gray-300 rounded-md hover:bg-gray-50 transition-colors"
                  aria-label="언어 선택"
                >
                  <span className="text-lg">{currentLanguage.flag}</span>
                  <span className="hidden lg:inline">{currentLanguage.name}</span>
                  <svg className={`w-4 h-4 transition-transform ${isLanguageOpen ? "rotate-180" : ""}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                  </svg>
                </button>

                {isLanguageOpen && (
                  <div className="absolute right-0 mt-2 w-40 bg-white border border-gray-200 rounded-md shadow-lg z-50">
                    {languages.map((lang) => (
                      <button
                        key={lang.code}
                        onClick={(e) => {
                          e.preventDefault();
                          e.stopPropagation();
                          console.log("Language clicked (desktop):", lang.code);
                          setLanguage(lang.code);
                          setIsLanguageOpen(false);
                        }}
                        className={`w-full flex items-center space-x-3 px-4 py-2 text-sm text-left hover:bg-gray-50 transition-colors ${
                          language === lang.code ? "bg-navy-50 text-navy-900" : "text-gray-700"
                        }`}
                      >
                        <span className="text-lg">{lang.flag}</span>
                        <span>{lang.name}</span>
                        {language === lang.code && (
                          <svg className="w-4 h-4 ml-auto text-navy-900" fill="currentColor" viewBox="0 0 20 20">
                            <path
                              fillRule="evenodd"
                              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                              clipRule="evenodd"
                            />
                          </svg>
                        )}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>

            {/* Mobile menu button and language selector */}
            <div className="md:hidden flex items-center space-x-2">
              {/* Language Selector - Mobile */}
              <div className="relative" ref={languageDropdownRef}>
                <button
                  onClick={() => setIsLanguageOpen(!isLanguageOpen)}
                  className="flex items-center p-2 text-gray-700 hover:text-navy-900 focus:outline-none rounded-md hover:bg-gray-100 transition-colors"
                  aria-label="언어 선택"
                >
                  <span className="text-lg">{currentLanguage.flag}</span>
                </button>

                {isLanguageOpen && (
                  <div className="absolute right-0 mt-2 w-40 bg-white border border-gray-200 rounded-md shadow-lg z-50">
                    {languages.map((lang) => (
                      <button
                        key={lang.code}
                        onClick={(e) => {
                          e.preventDefault();
                          e.stopPropagation();
                          console.log("Language clicked (mobile):", lang.code);
                          setLanguage(lang.code);
                          setIsLanguageOpen(false);
                        }}
                        className={`w-full flex items-center space-x-3 px-4 py-2 text-sm text-left hover:bg-gray-50 transition-colors ${
                          language === lang.code ? "bg-navy-50 text-navy-900" : "text-gray-700"
                        }`}
                      >
                        <span className="text-lg">{lang.flag}</span>
                        <span>{lang.name}</span>
                        {language === lang.code && (
                          <svg className="w-4 h-4 ml-auto text-navy-900" fill="currentColor" viewBox="0 0 20 20">
                            <path
                              fillRule="evenodd"
                              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                              clipRule="evenodd"
                            />
                          </svg>
                        )}
                      </button>
                    ))}
                  </div>
                )}
              </div>

              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="inline-flex items-center justify-center p-2 text-gray-700 hover:text-navy-900 focus:outline-none rounded-md hover:bg-gray-100 transition-colors"
                aria-label={isMenuOpen ? "메뉴 닫기" : "메뉴 열기"}
                aria-expanded={isMenuOpen}
              >
                <svg className="h-6 w-6" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                  {isMenuOpen ? <path d="M6 18L18 6M6 6l12 12" /> : <path d="M4 6h16M4 12h16M4 18h16" />}
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`md:hidden fixed inset-0 top-16 bg-white border-t border-gray-100 transform transition-transform duration-300 ease-in-out z-40 ${
            isMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="px-4 pt-4 pb-6 space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsMenuOpen(false)}
                className={`block px-4 py-3 text-base font-medium rounded-md transition-colors ${
                  isActive(link.path) ? "text-navy-900 bg-gray-50" : "text-gray-600 hover:text-navy-900 hover:bg-gray-50"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && <div className="md:hidden fixed inset-0 bg-black bg-opacity-50 z-30 top-16" onClick={() => setIsMenuOpen(false)} />}
    </>
  );
};

export default Navbar;
