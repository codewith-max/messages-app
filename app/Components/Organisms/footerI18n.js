/** Footer copy per locale — fallback English when code missing */

export const LANGUAGE_OPTIONS = [
  { code: 'en', label: 'English' },
  { code: 'sl', label: 'slovenščina' },
  { code: 'es', label: 'Español' },
  { code: 'fr', label: 'Français' },
  { code: 'de', label: 'Deutsch' },
  { code: 'it', label: 'Italiano' },
  { code: 'pt', label: 'Português (Brasil)' },
  { code: 'nl', label: 'Nederlands' },
  { code: 'ar', label: 'العربية' },
  { code: 'hi', label: 'हिन्दी' },
  { code: 'ur', label: 'اردو' },
  { code: 'tr', label: 'Türkçe' },
  { code: 'id', label: 'Bahasa Indonesia' },
  { code: 'vi', label: 'Tiếng Việt' },
  { code: 'th', label: 'ไทย' },
  { code: 'pl', label: 'Polski' },
  { code: 'ru', label: 'Русский' },
  { code: 'ja', label: '日本語' },
  { code: 'ko', label: '한국어' },
  { code: 'zh', label: '简体中文' },
  { code: 'sv', label: 'Svenska' },
  { code: 'da', label: 'Dansk' },
  { code: 'fi', label: 'Suomi' },
  { code: 'nb', label: 'Norsk (bokmål)' },
  { code: 'cs', label: 'Čeština' },
  { code: 'uk', label: 'Українська' },
  { code: 'ro', label: 'Română' },
  { code: 'el', label: 'Ελληνικά' },
  { code: 'he', label: 'עברית' },
  { code: 'ms', label: 'Bahasa Melayu' },
  { code: 'fil', label: 'Filipino' },
];

const EN_SECTIONS = [
  {
    title: 'What we do',
    links: ['Features', 'Blog', 'Security', 'For Business'],
  },
  {
    title: 'Who we are',
    links: ['About us', 'Careers', 'Brand Center', 'Privacy'],
  },
  {
    title: 'Use WhatsApp',
    links: ['Android', 'iPhone', 'Mac/PC', 'WhatsApp Web'],
  },
  {
    title: 'Need help?',
    links: ['Contact Us', 'Help Center', 'Apps', 'Security Advisories'],
  },
];

export const FOOTER_TRANSLATIONS = {
  en: {
    download: 'Download',
    terms: 'Terms & Privacy Policy',
    sitemap: 'Sitemap',
    sections: EN_SECTIONS,
  },
  sl: {
    download: 'Prenos',
    terms: 'Pogoji in Pravilnik o zasebnosti',
    sitemap: 'Zemljevid mesta',
    sections: [
      {
        title: 'Kaj delamo',
        links: ['Funkcije', 'Blog', 'Varnost', 'Za podjetje'],
      },
      {
        title: 'Kdo smo',
        links: ['O nas', 'Zaposlitve', 'Središče za znamke', 'Zasebnost'],
      },
      {
        title: 'Uporabite WhatsApp',
        links: ['Android', 'iPhone', 'Mac/osebni računalnik', 'WhatsApp Web'],
      },
      {
        title: 'Potrebujete pomoč?',
        links: ['Stik z nami', 'Središče za pomoč', 'Aplikacije', 'Varnostne svetovalnice'],
      },
    ],
  },
  es: {
    download: 'Descargar',
    terms: 'Términos y Política de privacidad',
    sitemap: 'Mapa del sitio',
    sections: [
      { title: 'Qué hacemos', links: ['Funciones', 'Blog', 'Seguridad', 'Para empresas'] },
      { title: 'Quiénes somos', links: ['Acerca de', 'Empleos', 'Centro de marca', 'Privacidad'] },
      { title: 'Usa WhatsApp', links: ['Android', 'iPhone', 'Mac/PC', 'WhatsApp Web'] },
      { title: '¿Necesitas ayuda?', links: ['Contáctanos', 'Centro de ayuda', 'Apps', 'Avisos de seguridad'] },
    ],
  },
  fr: {
    download: 'Télécharger',
    terms: 'Conditions et Politique de confidentialité',
    sitemap: 'Plan du site',
    sections: [
      { title: 'Ce que nous faisons', links: ['Fonctionnalités', 'Blog', 'Sécurité', 'Pour les entreprises'] },
      { title: 'Qui nous sommes', links: ['À propos', 'Carrières', 'Centre de la marque', 'Confidentialité'] },
      { title: 'Utiliser WhatsApp', links: ['Android', 'iPhone', 'Mac/PC', 'WhatsApp Web'] },
      { title: 'Besoin d’aide ?', links: ['Nous contacter', 'Centre d’aide', 'Applis', 'Conseils sécurité'] },
    ],
  },
  de: {
    download: 'Herunterladen',
    terms: 'Nutzungsbedingungen & Datenschutzrichtlinie',
    sitemap: 'Sitemap',
    sections: [
      { title: 'Was wir tun', links: ['Funktionen', 'Blog', 'Sicherheit', 'Für Unternehmen'] },
      { title: 'Wer wir sind', links: ['Über uns', 'Karrieren', 'Markenzentrum', 'Datenschutz'] },
      { title: 'WhatsApp nutzen', links: ['Android', 'iPhone', 'Mac/PC', 'WhatsApp Web'] },
      { title: 'Brauchst du Hilfe?', links: ['Kontakt', 'Hilfe-Center', 'Apps', 'Sicherheitshinweise'] },
    ],
  },
  it: {
    download: 'Scarica',
    terms: 'Termini e Informativa sulla privacy',
    sitemap: 'Mappa del sito',
    sections: [
      { title: 'Cosa facciamo', links: ['Funzioni', 'Blog', 'Sicurezza', 'Per le aziende'] },
      { title: 'Chi siamo', links: ['Chi siamo', 'Lavora con noi', 'Brand Center', 'Privacy'] },
      { title: 'Usa WhatsApp', links: ['Android', 'iPhone', 'Mac/PC', 'WhatsApp Web'] },
      { title: 'Serve aiuto?', links: ['Contattaci', 'Centro di assistenza', 'App', 'Avvisi di sicurezza'] },
    ],
  },
  pt: {
    download: 'Baixar',
    terms: 'Termos e Política de Privacidade',
    sitemap: 'Mapa do site',
    sections: [
      { title: 'O que fazemos', links: ['Recursos', 'Blog', 'Segurança', 'Para empresas'] },
      { title: 'Quem somos', links: ['Sobre nós', 'Carreiras', 'Central da marca', 'Privacidade'] },
      { title: 'Usar o WhatsApp', links: ['Android', 'iPhone', 'Mac/PC', 'WhatsApp Web'] },
      { title: 'Precisa de ajuda?', links: ['Fale conosco', 'Central de ajuda', 'Apps', 'Comunicados de segurança'] },
    ],
  },
  nl: {
    download: 'Downloaden',
    terms: 'Voorwaarden en Privacybeleid',
    sitemap: 'Sitemap',
    sections: [
      { title: 'Wat we doen', links: ['Functies', 'Blog', 'Beveiliging', 'Voor bedrijven'] },
      { title: 'Wie we zijn', links: ['Over ons', 'Carrière', 'Brand Center', 'Privacy'] },
      { title: 'WhatsApp gebruiken', links: ['Android', 'iPhone', 'Mac/PC', 'WhatsApp Web'] },
      { title: 'Hulp nodig?', links: ['Neem contact op', 'Helpcentrum', "Apps", 'Beveiligingsadviezen'] },
    ],
  },
  ar: {
    download: 'تنزيل',
    terms: 'الشروط وسياسة الخصوصية',
    sitemap: 'خريطة الموقع',
    sections: [
      { title: 'ما الذي نقدمه', links: ['الميزات', 'المدونة', 'الأمان', 'للأعمال'] },
      { title: 'من نحن', links: ['من نحن', 'وظائف', 'مركز العلامة', 'الخصوصية'] },
      { title: 'استخدم واتساب', links: ['أندرويد', 'آيفون', 'ماك/كمبيوتر', 'واتساب ويب'] },
      { title: 'تحتاج مساعدة؟', links: ['اتصل بنا', 'مركز المساعدة', 'التطبيقات', 'إشعارات الأمان'] },
    ],
  },
  hi: {
    download: 'डाउनलोड करें',
    terms: 'नियम व गोपनीयता नीति',
    sitemap: 'साइटमैप',
    sections: [
      { title: 'हम क्या करते हैं', links: ['फ़ीचर्स', 'ब्लॉग', 'सुरक्षा', 'व्यवसाय के लिए'] },
      { title: 'हम कौन हैं', links: ['हमारे बारे में', 'करियर', 'ब्रांड सेंटर', 'गोपनीयता'] },
      { title: 'WhatsApp इस्तेमाल करें', links: ['Android', 'iPhone', 'Mac/PC', 'WhatsApp Web'] },
      { title: 'मदद चाहिए?', links: ['संपर्क करें', 'सहायता केंद्र', 'ऐप्स', 'सुरक्षा सलाह'] },
    ],
  },
  ur: {
    download: 'ڈاؤن لوڈ',
    terms: 'شرائط اور پرائیویسی پالیسی',
    sitemap: 'سائٹ کا نقشہ',
    sections: [
      { title: 'ہم کیا کرتے ہیں', links: ['فیچرز', 'بلاگ', 'سیکیورٹی', 'کاروبار کے لیے'] },
      { title: 'ہم کون ہیں', links: ['ہمارے بارے میں', 'کیریئرز', 'برانڈ سینٹر', 'پرائیویسی'] },
      { title: 'واٹس ایپ استعمال کریں', links: ['Android', 'iPhone', 'Mac/PC', 'WhatsApp Web'] },
      { title: 'مدد درکار ہے؟', links: ['رابطہ کریں', 'ہیلپ سنٹر', 'ایپس', 'سیکیورٹی مشورے'] },
    ],
  },
  tr: {
    download: 'İndir',
    terms: 'Şartlar ve Gizlilik İlkesi',
    sitemap: 'Site haritası',
    sections: [
      { title: 'Neler yapıyoruz', links: ['Özellikler', 'Blog', 'Güvenlik', 'İşletmeler için'] },
      { title: 'Biz kimiz', links: ['Hakkımızda', 'Kariyer', 'Marka merkezi', 'Gizlilik'] },
      { title: 'WhatsApp kullanın', links: ['Android', 'iPhone', 'Mac/PC', 'WhatsApp Web'] },
      { title: 'Yardıma mı ihtiyacınız var?', links: ['Bize ulaşın', 'Yardım merkezi', 'Uygulamalar', 'Güvenlik duyuruları'] },
    ],
  },
  id: {
    download: 'Unduh',
    terms: 'Syarat & Kebijakan Privasi',
    sitemap: 'Peta situs',
    sections: [
      { title: 'Apa yang kami lakukan', links: ['Fitur', 'Blog', 'Keamanan', 'Untuk bisnis'] },
      { title: 'Siapa kami', links: ['Tentang kami', 'Karier', 'Pusat merek', 'Privasi'] },
      { title: 'Gunakan WhatsApp', links: ['Android', 'iPhone', 'Mac/PC', 'WhatsApp Web'] },
      { title: 'Butuh bantuan?', links: ['Hubungi kami', 'Pusat bantuan', 'Aplikasi', 'Nasihat keamanan'] },
    ],
  },
  vi: {
    download: 'Tải xuống',
    terms: 'Điều khoản & Chính sách bảo mật',
    sitemap: 'Sơ đồ trang web',
    sections: [
      { title: 'Chúng tôi làm gì', links: ['Tính năng', 'Blog', 'Bảo mật', 'Dành cho doanh nghiệp'] },
      { title: 'Chúng tôi là ai', links: ['Giới thiệu', 'Tuyển dụng', 'Trung tâm thương hiệu', 'Bảo mật'] },
      { title: 'Dùng WhatsApp', links: ['Android', 'iPhone', 'Mac/PC', 'WhatsApp Web'] },
      { title: 'Cần trợ giúp?', links: ['Liên hệ', 'Trung tâm trợ giúp', 'Ứng dụng', 'Cảnh báo bảo mật'] },
    ],
  },
  th: {
    download: 'ดาวน์โหลด',
    terms: 'ข้อกำหนดและนโยบายความเป็นส่วนตัว',
    sitemap: 'แผนผังเว็บไซต์',
    sections: [
      { title: 'สิ่งที่เราทำ', links: ['คุณสมบัติ', 'บล็อก', 'ความปลอดภัย', 'สำหรับธุรกิจ'] },
      { title: 'เราเป็นใคร', links: ['เกี่ยวกับเรา', 'ร่วมงาน', 'ศูนย์แบรนด์', 'ความเป็นส่วนตัว'] },
      { title: 'ใช้ WhatsApp', links: ['Android', 'iPhone', 'Mac/PC', 'WhatsApp Web'] },
      { title: 'ต้องการความช่วยเหลือ?', links: ['ติดต่อเรา', 'ศูนย์ช่วยเหลือ', 'แอป', 'คำแนะนำด้านความปลอดภัย'] },
    ],
  },
  pl: {
    download: 'Pobierz',
    terms: 'Warunki i Polityka prywatności',
    sitemap: 'Mapa strony',
    sections: [
      { title: 'Co robimy', links: ['Funkcje', 'Blog', 'Bezpieczeństwo', 'Dla firm'] },
      { title: 'Kim jesteśmy', links: ['O nas', 'Kariera', 'Centrum marki', 'Prywatność'] },
      { title: 'Korzystaj z WhatsApp', links: ['Android', 'iPhone', 'Mac/PC', 'WhatsApp Web'] },
      { title: 'Potrzebujesz pomocy?', links: ['Skontaktuj się', 'Centrum pomocy', 'Aplikacje', 'Biuletyny bezpieczeństwa'] },
    ],
  },
  ru: {
    download: 'Скачать',
    terms: 'Условия и Политика конфиденциальности',
    sitemap: 'Карта сайта',
    sections: [
      { title: 'Что мы делаем', links: ['Функции', 'Блог', 'Безопасность', 'Для бизнеса'] },
      { title: 'Кто мы', links: ['О нас', 'Карьера', 'Центр бренда', 'Конфиденциальность'] },
      { title: 'Используйте WhatsApp', links: ['Android', 'iPhone', 'Mac/PC', 'WhatsApp Web'] },
      { title: 'Нужна помощь?', links: ['Связаться', 'Справочный центр', 'Приложения', 'Уведомления о безопасности'] },
    ],
  },
  ja: {
    download: 'ダウンロード',
    terms: '利用規約とプライバシーポリシー',
    sitemap: 'サイトマップ',
    sections: [
      { title: '私たちの取り組み', links: ['機能', 'ブログ', 'セキュリティ', 'ビジネス向け'] },
      { title: '会社概要', links: ['会社について', '採用情報', 'ブランドセンター', 'プライバシー'] },
      { title: 'WhatsApp を使う', links: ['Android', 'iPhone', 'Mac/PC', 'WhatsApp Web'] },
      { title: 'サポート', links: ['お問い合わせ', 'ヘルプセンター', 'アプリ', 'セキュリティ情報'] },
    ],
  },
  ko: {
    download: '다운로드',
    terms: '약관 및 개인정보처리방침',
    sitemap: '사이트맵',
    sections: [
      { title: '제공 서비스', links: ['기능', '블로그', '보안', '비즈니스용'] },
      { title: '회사 소개', links: ['회사 정보', '채용', '브랜드 센터', '개인정보 보호'] },
      { title: 'WhatsApp 사용', links: ['Android', 'iPhone', 'Mac/PC', 'WhatsApp Web'] },
      { title: '도움이 필요하신가요?', links: ['문의하기', '고객센터', '앱', '보안 공지'] },
    ],
  },
  zh: {
    download: '下载',
    terms: '条款和隐私政策',
    sitemap: '网站地图',
    sections: [
      { title: '我们的服务', links: ['功能', '博客', '安全', '商业用途'] },
      { title: '关于我们', links: ['关于我们', '招聘', '品牌中心', '隐私'] },
      { title: '使用 WhatsApp', links: ['Android', 'iPhone', 'Mac/电脑', 'WhatsApp 网页版'] },
      { title: '需要帮助？', links: ['联系我们', '帮助中心', '应用', '安全公告'] },
    ],
  },
  sv: {
    download: 'Ladda ner',
    terms: 'Villkor och integritetspolicy',
    sitemap: 'Webbplatskarta',
    sections: [
      { title: 'Vad vi gör', links: ['Funktioner', 'Blogg', 'Säkerhet', 'För företag'] },
      { title: 'Vilka vi är', links: ['Om oss', 'Karriär', 'Brand Center', 'Integritet'] },
      { title: 'Använd WhatsApp', links: ['Android', 'iPhone', 'Mac/PC', 'WhatsApp Web'] },
      { title: 'Behöver du hjälp?', links: ['Kontakta oss', 'Hjälpcenter', 'Appar', 'Säkerhetsmeddelanden'] },
    ],
  },
  da: {
    download: 'Download',
    terms: 'Vilkår og privatlivspolitik',
    sitemap: 'Sitemap',
    sections: [
      { title: 'Hvad vi laver', links: ['Funktioner', 'Blog', 'Sikkerhed', 'Til virksomheder'] },
      { title: 'Hvem vi er', links: ['Om os', 'Karriere', 'Brand Center', 'Privatliv'] },
      { title: 'Brug WhatsApp', links: ['Android', 'iPhone', 'Mac/PC', 'WhatsApp Web'] },
      { title: 'Brug for hjælp?', links: ['Kontakt os', 'Hjælpecenter', 'Apps', 'Sikkerhedsmeddelelser'] },
    ],
  },
  fi: {
    download: 'Lataa',
    terms: 'Ehdot ja tietosuojakäytäntö',
    sitemap: 'Sivukartta',
    sections: [
      { title: 'Mitä teemme', links: ['Ominaisuudet', 'Blogi', 'Turvallisuus', 'Yrityksille'] },
      { title: 'Keitä me olemme', links: ['Tietoa meistä', 'Ura', 'Brand Center', 'Yksityisyys'] },
      { title: 'Käytä WhatsAppia', links: ['Android', 'iPhone', 'Mac/PC', 'WhatsApp Web'] },
      { title: 'Tarvitsetko apua?', links: ['Ota yhteyttä', 'Ohjekeskus', 'Sovellukset', 'Turvallisuustiedotteet'] },
    ],
  },
  nb: {
    download: 'Last ned',
    terms: 'Vilkår og personvernregler',
    sitemap: 'Nettstedkart',
    sections: [
      { title: 'Hva vi gjør', links: ['Funksjoner', 'Blogg', 'Sikkerhet', 'For bedrifter'] },
      { title: 'Hvem vi er', links: ['Om oss', 'Karriere', 'Brand Center', 'Personvern'] },
      { title: 'Bruk WhatsApp', links: ['Android', 'iPhone', 'Mac/PC', 'WhatsApp Web'] },
      { title: 'Trenger du hjelp?', links: ['Kontakt oss', 'Hjelpesenter', 'Apper', 'Sikkerhetsvarsler'] },
    ],
  },
  cs: {
    download: 'Stáhnout',
    terms: 'Podmínky a zásady ochrany osobních údajů',
    sitemap: 'Mapa stránek',
    sections: [
      { title: 'Co děláme', links: ['Funkce', 'Blog', 'Zabezpečení', 'Pro firmy'] },
      { title: 'Kdo jsme', links: ['O nás', 'Kariéra', 'Brand Center', 'Soukromí'] },
      { title: 'Používejte WhatsApp', links: ['Android', 'iPhone', 'Mac/PC', 'WhatsApp Web'] },
      { title: 'Potřebujete pomoc?', links: ['Kontaktujte nás', 'Nápověda', 'Aplikace', 'Bezpečnostní upozornění'] },
    ],
  },
  uk: {
    download: 'Завантажити',
    terms: 'Умови та політика конфіденційності',
    sitemap: 'Карта сайту',
    sections: [
      { title: 'Що ми робимо', links: ['Функції', 'Блог', 'Безпека', 'Для бізнесу'] },
      { title: 'Хто ми', links: ['Про нас', 'Кар’єра', 'Brand Center', 'Конфіденційність'] },
      { title: 'Користуйтеся WhatsApp', links: ['Android', 'iPhone', 'Mac/ПК', 'WhatsApp Web'] },
      { title: 'Потрібна допомога?', links: ['Зв’яжіться з нами', 'Довідковий центр', 'Додатки', 'Поради з безпеки'] },
    ],
  },
  ro: {
    download: 'Descarcă',
    terms: 'Termeni și politica de confidențialitate',
    sitemap: 'Harta site-ului',
    sections: [
      { title: 'Ce facem', links: ['Funcții', 'Blog', 'Securitate', 'Pentru afaceri'] },
      { title: 'Cine suntem', links: ['Despre noi', 'Cariere', 'Brand Center', 'Confidențialitate'] },
      { title: 'Folosiți WhatsApp', links: ['Android', 'iPhone', 'Mac/PC', 'WhatsApp Web'] },
      { title: 'Aveți nevoie de ajutor?', links: ['Contactați-ne', 'Centru de ajutor', 'Aplicații', 'Sfaturi de securitate'] },
    ],
  },
  el: {
    download: 'Λήψη',
    terms: 'Όροι και πολιτική απορρήτου',
    sitemap: 'Χάρτης ιστότοπου',
    sections: [
      { title: 'Τι κάνουμε', links: ['Δυνατότητες', 'Ιστολόγιο', 'Ασφάλεια', 'Για επιχειρήσεις'] },
      { title: 'Ποιοι είμαστε', links: ['Σχετικά με εμάς', 'Καριέρα', 'Brand Center', 'Απόρρητο'] },
      { title: 'Χρησιμοποιήστε το WhatsApp', links: ['Android', 'iPhone', 'Mac/PC', 'WhatsApp Web'] },
      { title: 'Χρειάζεστε βοήθεια;', links: ['Επικοινωνήστε', 'Κέντρο βοήθειας', 'Εφαρμογές', 'Συμβουλές ασφαλείας'] },
    ],
  },
  he: {
    download: 'הורדה',
    terms: 'תנאים ומדיניות פרטיות',
    sitemap: 'מפת אתר',
    sections: [
      { title: 'מה אנחנו עושים', links: ['תכונות', 'בלוג', 'אבטחה', 'לעסקים'] },
      { title: 'מי אנחנו', links: ['אודותינו', 'קריירה', 'Brand Center', 'פרטיות'] },
      { title: 'להשתמש ב-WhatsApp', links: ['Android', 'iPhone', 'Mac/PC', 'WhatsApp Web'] },
      { title: 'צריכים עזרה?', links: ['צרו קשר', 'מרכז העזרה', 'אפליקציות', 'עדכוני אבטחה'] },
    ],
  },
  ms: {
    download: 'Muat turun',
    terms: 'Terma & Dasar Privasi',
    sitemap: 'Peta laman',
    sections: [
      { title: 'Apa yang kami lakukan', links: ['Ciri', 'Blog', 'Keselamatan', 'Untuk perniagaan'] },
      { title: 'Siapa kami', links: ['Tentang kami', 'Kerjaya', 'Brand Center', 'Privasi'] },
      { title: 'Gunakan WhatsApp', links: ['Android', 'iPhone', 'Mac/PC', 'WhatsApp Web'] },
      { title: 'Perlukan bantuan?', links: ['Hubungi kami', 'Pusat bantuan', 'Apl', 'Nasihat keselamatan'] },
    ],
  },
  fil: {
    download: 'I-download',
    terms: 'Mga Tuntunin at Patakaran sa Privacy',
    sitemap: 'Mapa ng site',
    sections: [
      { title: 'Ano ang ginagawa namin', links: ['Mga feature', 'Blog', 'Seguridad', 'Para sa negosyo'] },
      { title: 'Sino kami', links: ['Tungkol sa amin', 'Careers', 'Brand Center', 'Privacy'] },
      { title: 'Gamitin ang WhatsApp', links: ['Android', 'iPhone', 'Mac/PC', 'WhatsApp Web'] },
      { title: 'Kailangan ng tulong?', links: ['Makipag-ugnayan', 'Help Center', 'Mga app', 'Mga payo sa seguridad'] },
    ],
  },
};

export function getFooterStrings(code) {
  return FOOTER_TRANSLATIONS[code] || FOOTER_TRANSLATIONS.en;
}
