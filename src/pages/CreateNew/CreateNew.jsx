import React from 'react';
import { Link } from 'react-router-dom';
import { Globe } from 'lucide-react';
import './CreateNew.css';

const translations = {
  en: {
    alreadyUser: 'Already using Fluxvell?',
    signInWorkspace: 'Sign in to an existing workspace',
    title: 'First, enter your email',
    subtitle: 'We suggest using the email address you use at work.',
    inputPlaceholder: 'name@work-email.com',
    btnPrimary: 'Continue',
    divider: 'OR',
    fineprint: 'By continuing, you\'re agreeing to our Main Services Agreement, User Terms of Service, and Fluxvell Supplemental Terms. Additional disclosures are available in our Privacy Policy and Cookie Policy.',
    privacyTerms: 'Privacy & Terms',
    contactUs: 'Contact Us',
    changeRegion: 'Change region',
    modalDesc: 'Selecting a different region will change the language and content of Fluxvell.com.'
  },
  es: {
    alreadyUser: '¿Ya usas Fluxvell?',
    signInWorkspace: 'Inicia sesión en un espacio de trabajo existente',
    title: 'Primero, introduce tu correo electrónico',
    subtitle: 'Te sugerimos usar el correo electrónico que usas en el trabajo.',
    inputPlaceholder: 'nombre@correo-trabajo.com',
    btnPrimary: 'Continuar',
    divider: 'O',
    fineprint: 'Al continuar, aceptas nuestro Acuerdo principal de servicios, las Condiciones del usuario y las Condiciones adicionales de Fluxvell. Consulta nuestra Política de privacidad y la Política de cookies para ver información adicional.',
    privacyTerms: 'Privacidad y Condiciones',
    contactUs: 'Contacto',
    changeRegion: 'Cambiar región',
    modalDesc: 'Al seleccionar una región diferente, cambiará el idioma y el contenido de Fluxvell.com.'
  },
  pt: {
    alreadyUser: 'Já usa o Fluxvell?',
    signInWorkspace: 'Inicie sessão em um espaço de trabalho existente',
    title: 'Primeiro, digite seu e-mail',
    subtitle: 'Sugerimos usar o e-mail que você usa no trabalho.',
    inputPlaceholder: 'nome@email-trabalho.com',
    btnPrimary: 'Continuar',
    divider: 'OU',
    fineprint: 'Ao continuar, você aceita o nosso Contrato de serviços principais, os Termos de serviço do usuário e os Termos suplementares do Fluxvell. Divulgações adicionais estão disponíveis em nossa Política de privacidade e na Política de cookies.',
    privacyTerms: 'Privacidade e Termos',
    contactUs: 'Fale conosco',
    changeRegion: 'Alterar região',
    modalDesc: 'A seleção de uma região diferente alterará o idioma e o conteúdo do Fluxvell.com.'
  },
  de: {
    alreadyUser: 'Verwenden Sie Fluxvell bereits?',
    signInWorkspace: 'Melden Sie sich bei einem bestehenden Workspace an',
    title: 'Geben Sie zuerst Ihre E-Mail-Adresse ein',
    subtitle: 'Wir empfehlen die Verwendung Ihrer geschäftlichen E-Mail-Adresse.',
    inputPlaceholder: 'name@arbeits-email.de',
    btnPrimary: 'Weiter',
    divider: 'ODER',
    fineprint: 'Durch das Fortfahren stimmen Sie unserem Hauptvertrag für Dienstleistungen, den Nutzungsbedingungen und den ergänzenden Bedingungen von Fluxvell zu. Weitere Informationen finden Sie in unserer Datenschutzerklärung und in unserer Cookie-Richtlinie.',
    privacyTerms: 'Datenschutz & Bedingungen',
    contactUs: 'Kontakt',
    changeRegion: 'Region ändern',
    modalDesc: 'Durch die Auswahl einer anderen Region werden Sprache und Inhalt von Fluxvell.com geändert.'
  },
  fr: {
    alreadyUser: 'Vous utilisez déjà Fluxvell ?',
    signInWorkspace: 'Connectez-vous à un espace de travail existant',
    title: 'Commencez par saisir votre e-mail',
    subtitle: 'Nous vous suggérons d\'utiliser votre adresse e-mail professionnelle.',
    inputPlaceholder: 'nom@e-mail-professionnel.com',
    btnPrimary: 'Continuer',
    divider: 'OU',
    fineprint: 'En continuant, vous acceptez notre Contrat de services principal, nos Conditions d\'utilisation et nos Conditions supplémentaires de Fluxvell. D\'autres informations sont disponibles dans notre Politique de confidentialité et notre Politique relative aux cookies.',
    privacyTerms: 'Confidentialité et conditions',
    contactUs: 'Nous contacter',
    changeRegion: 'Changer de région',
    modalDesc: 'Le fait de choisir une autre région modifie la langue et le contenu de Fluxvell.com.'
  },
  it: {
    alreadyUser: 'Usi già Fluxvell?',
    signInWorkspace: 'Accedi a un\'area di lavoro esistente',
    title: 'Per prima cosa inserisci la tua email',
    subtitle: 'Ti consigliamo di utilizzare l\'indirizzo email che usi al lavoro.',
    inputPlaceholder: 'nome@email-lavoro.com',
    btnPrimary: 'Continua',
    divider: 'OPPURE',
    fineprint: 'Continuando, accetti il nostro Contrato principale sui servizi, i Termini di servizio dell\'utente e i Termini supplementari di Fluxvell. Ulteriori informative sono disponibili nella nostra Informativa sulla privacy e nell\'Informativa sui cookie.',
    privacyTerms: 'Privacy e condizioni',
    contactUs: 'Contattaci',
    changeRegion: 'Cambia area geografica',
    modalDesc: 'La selezione di un\'area geografica diversa comporterà la modifica della lingua e del contenuto di Fluxvell.com.'
  },
  zh: {
    alreadyUser: '已在使用 Fluxvell？',
    signInWorkspace: '登录到现有工作区',
    title: '首先，输入你的电子邮箱',
    subtitle: '建议使用你在工作时使用的电子邮箱。',
    inputPlaceholder: 'name@work-email.com',
    btnPrimary: '继续',
    divider: '或',
    fineprint: '继续操作即表示你同意我们的《主要服务协议》、《用户服务条款》和《Fluxvell 补充条款》。其他披露信息请参见我们的《隐私政策》和《Cookie 政策》。',
    privacyTerms: '隐私与条款',
    contactUs: '联系我们',
    changeRegion: '更改地区',
    modalDesc: '选择其他地区将更改 Fluxvell.com 的语言和内容。'
  },
  ja: {
    alreadyUser: 'すでに Fluxvell を使用中ですか？',
    signInWorkspace: '既存のワークスペースにサインインする',
    title: 'まず、メールアドレスを入力してください',
    subtitle: 'お仕事で使用しているメールアドレスの入力をおすすめします。',
    inputPlaceholder: 'name@work-email.com',
    btnPrimary: '続行',
    divider: 'または',
    fineprint: '続行すると、本サービス基本合意書、ユーザー利用規約、および Fluxvell 追加利用規約に同意したことになります。詳細については、プライバシーポリシーおよびクッキーポリシーをご確認ください。',
    privacyTerms: 'プライバシーと利用規約',
    contactUs: 'お問い合わせ',
    changeRegion: '地域を変更',
    modalDesc: '異なる地域を選択すると、Fluxvell.com の言語とコンテンツが変更されます。'
  },
  ko: {
    alreadyUser: '이미 Fluxvell을 사용 중이신가요?',
    signInWorkspace: '기존 워크스페이스에 로그인',
    title: '먼저 이메일을 입력하세요',
    subtitle: '회사에서 사용하는 이메일 주소를 입력하는 것이 좋습니다.',
    inputPlaceholder: 'name@work-email.com',
    btnPrimary: '계속',
    divider: '또는',
    fineprint: '계속하면 주요 서비스 계약, 사용자 서비스 약관 및 Fluxvell 추가 약관에 동의하는 것입니다. 추가 공지 사항은 개인정보 보호 정책 및 쿠키 정책에서 확인할 수 있습니다.',
    privacyTerms: '개인정보 보호 및 약관',
    contactUs: '문의하기',
    changeRegion: '지역 변경',
    modalDesc: '다른 지역을 선택하면 Fluxvell.com의 언어와 콘텐츠가 변경됩니다.'
  }
};

const getLangCode = (region) => {
  if (region.includes('Español')) return 'es';
  if (region.includes('Português')) return 'pt';
  if (region.includes('Deutsch')) return 'de';
  if (region.includes('Français')) return 'fr';
  if (region.includes('italiano')) return 'it';
  if (region.includes('中文')) return 'zh';
  if (region.includes('日本語')) return 'ja';
  if (region.includes('한국어')) return 'ko';
  return 'en';
};

const CreateNew = () => {
  const [showRegions, setShowRegions] = React.useState(false);
  const [selectedRegion, setSelectedRegion] = React.useState('United States (English)');
  const regionRef = React.useRef(null);

  React.useEffect(() => {
    function handleClickOutside(event) {
      if (regionRef.current && !regionRef.current.contains(event.target)) {
        setShowRegions(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const lang = getLangCode(selectedRegion);
  const t = translations[lang] || translations.en;

  return (
    <div className="createnew-container">
      {/* Top Right Actions */}
      <div className="createnew-header">
        <div className="createnew-new-user">
          <span className="text-gray">{t.alreadyUser}</span>
          <Link to="/signin" className="signin-link">{t.signInWorkspace}</Link>
        </div>
      </div>

      {/* Main Content */}
      <div className="createnew-main">
        <div className="createnew-logo">
          <img src="/Fluxvell_logo_black.png" alt="Fluxvell Logo" style={{ height: '80px', display: 'block' }} />
        </div>

        <h1 className="createnew-title">{t.title}</h1>
        <p className="createnew-subtitle">{t.subtitle}</p>

        <form className="createnew-form" onSubmit={(e) => e.preventDefault()}>
          <input
            type="email"
            placeholder={t.inputPlaceholder}
            className="createnew-input"
            required
          />
          <button type="submit" className="createnew-btn-primary">
            {t.btnPrimary}
          </button>
        </form>

        <div className="createnew-divider">
          <span>{t.divider}</span>
        </div>

        <div className="createnew-social">
          <button className="createnew-btn-outline">
            <svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="18" height="18" style={{ display: 'block' }}>
              <path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.7 17.74 9.5 24 9.5z"></path>
              <path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"></path>
              <path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"></path>
              <path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"></path>
              <path fill="none" d="M0 0h48v48H0z"></path>
            </svg>
            Google
          </button>
          <button className="createnew-btn-outline">
            <svg viewBox="0 0 384 512" width="18" height="18" xmlns="http://www.w3.org/2000/svg" style={{ display: 'block' }}>
              <path fill="#000000" d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z" />
            </svg>
            Apple
          </button>
        </div>

        <div className="createnew-fineprint">
          {t.fineprint}
        </div>
      </div>

      {/* Footer */}
      <div className="createnew-footer">
        <a href="#">{t.privacyTerms}</a>
        <a href="#">{t.contactUs}</a>
        <div className="region-container" ref={regionRef}>
          <button
            className="region-link"
            onClick={() => setShowRegions(true)}
            aria-haspopup="true"
            aria-expanded={showRegions}
          >
            <Globe size={14} />
            {t.changeRegion} ({selectedRegion})
          </button>

          {showRegions && (
            <div className="region-modal-overlay">
              <div className="region-modal-content">
                <button className="region-modal-close" onClick={() => setShowRegions(false)}>&times;</button>
                <h2>{t.changeRegion}</h2>
                <p className="region-modal-desc">{t.modalDesc}</p>

                <div className="region-modal-grid">
                  <div className="region-modal-column">
                    <h3>Americas</h3>
                    <button className="region-modal-item" onClick={() => { setSelectedRegion('Latinoamérica (Español)'); setShowRegions(false); }}>Latinoamérica (Español)</button>
                    <button className="region-modal-item" onClick={() => { setSelectedRegion('Brasil (Português)'); setShowRegions(false); }}>Brasil (Português)</button>
                    <button className="region-modal-item" onClick={() => { setSelectedRegion('United States (English)'); setShowRegions(false); }}>United States (English)</button>
                  </div>

                  <div className="region-modal-column">
                    <h3>Europe</h3>
                    <button className="region-modal-item" onClick={() => { setSelectedRegion('Deutschland (Deutsch)'); setShowRegions(false); }}>Deutschland (Deutsch)</button>
                    <button className="region-modal-item" onClick={() => { setSelectedRegion('España (Español)'); setShowRegions(false); }}>España (Español)</button>
                    <button className="region-modal-item" onClick={() => { setSelectedRegion('France (Français)'); setShowRegions(false); }}>France (Français)</button>
                    <button className="region-modal-item" onClick={() => { setSelectedRegion('Italia (italiano)'); setShowRegions(false); }}>Italia (italiano)</button>
                    <button className="region-modal-item" onClick={() => { setSelectedRegion('United Kingdom (English)'); setShowRegions(false); }}>United Kingdom (English)</button>
                  </div>

                  <div className="region-modal-column">
                    <h3>Asia Pacific</h3>
                    <button className="region-modal-item" onClick={() => { setSelectedRegion('简体中文'); setShowRegions(false); }}>简体中文</button>
                    <button className="region-modal-item" onClick={() => { setSelectedRegion('繁體中文'); setShowRegions(false); }}>繁體中文</button>
                    <button className="region-modal-item" onClick={() => { setSelectedRegion('India (English)'); setShowRegions(false); }}>India (English)</button>
                    <button className="region-modal-item" onClick={() => { setSelectedRegion('日本 (日本語)'); setShowRegions(false); }}>日本 (日本語)</button>
                    <button className="region-modal-item" onClick={() => { setSelectedRegion('한국어'); setShowRegions(false); }}>한국어</button>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CreateNew;
