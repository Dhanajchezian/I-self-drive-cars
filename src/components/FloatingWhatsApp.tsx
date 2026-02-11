import { getWhatsAppLink } from '@/data/vehicles';

const FloatingWhatsApp = () => {
  return (
    <a
      href={getWhatsAppLink('Hi, I would like to book a self drive car in Chennai.')}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-40 w-14 h-14 rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform animate-float"
      style={{ backgroundColor: '#25D366' }}
      aria-label="Chat on WhatsApp"
    >
      <svg viewBox="0 0 32 32" width="28" height="28" fill="white">
        <path d="M16.004 0h-.008C7.174 0 0 7.176 0 16c0 3.5 1.128 6.744 3.046 9.378L1.054 31.29l6.118-1.962A15.91 15.91 0 0016.004 32C24.826 32 32 24.822 32 16S24.826 0 16.004 0zm9.32 22.616c-.39 1.1-1.932 2.014-3.162 2.28-.844.18-1.946.324-5.66-1.216-4.75-1.97-7.804-6.8-8.04-7.114-.226-.314-1.9-2.532-1.9-4.83s1.2-3.428 1.628-3.898c.39-.428.916-.624 1.216-.624.152 0 .29.008.414.014.428.018.642.042.924.716.352.842 1.212 2.952 1.318 3.166.108.214.214.504.064.804-.14.308-.262.5-.476.77-.214.27-.45.478-.664.716-.214.238-.436.492-.188.92s1.102 1.82 2.37 2.95c1.632 1.452 3.008 1.902 3.436 2.116.428.214.678.18.926-.108.256-.298 1.088-1.268 1.378-1.702.29-.434.578-.362.976-.216.398.148 2.508 1.182 2.936 1.396.428.214.716.322.822.5.108.18.108 1.028-.282 2.128z" />
      </svg>
    </a>
  );
};

export default FloatingWhatsApp;
