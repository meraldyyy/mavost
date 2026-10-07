import { useEffect } from 'react';
import type { Language } from '../i18n';

const SITE_URL = 'https://mavost.id';
const DEFAULT_IMAGE = `${SITE_URL}/og-image.svg`;
const SEO_KEYWORDS = 'Mavost, Mavost ID, Jasa Pembuatan Website, Web Developer Indonesia, Jasa Desain Web, Frontend Developer, Fullstack Web Development, Solusi Digital Bisnis, Portofolio Web Developer';

type SEOProps = {
  title: string;
  description: string;
  path: string;
  image?: string;
  language?: Language;
  structuredData?: Record<string, unknown>;
};

function setMeta(attribute: 'name' | 'property', key: string, content: string) {
  let element = document.head.querySelector<HTMLMetaElement>(`meta[${attribute}="${key}"]`);

  if (!element) {
    element = document.createElement('meta');
    element.setAttribute(attribute, key);
    document.head.appendChild(element);
  }

  element.content = content;
}

function setCanonical(url: string) {
  let element = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]');

  if (!element) {
    element = document.createElement('link');
    element.rel = 'canonical';
    document.head.appendChild(element);
  }

  element.href = url;
}

function setAlternate(hreflang: string, url: string) {
  let element = document.head.querySelector<HTMLLinkElement>(`link[data-mavost-alternate="${hreflang}"]`);

  if (!element) {
    element = document.createElement('link');
    element.rel = 'alternate';
    element.dataset.mavostAlternate = hreflang;
    document.head.appendChild(element);
  }

  element.hreflang = hreflang;
  element.href = url;
}

export default function SEO({ title, description, path, image = DEFAULT_IMAGE, language, structuredData }: SEOProps) {
  useEffect(() => {
    const url = `${SITE_URL}${path}`;
    const pathWithoutLanguage = path.replace(/^\/(en|id)(?=\/|$)/, '') || '/';
    const localizedUrl = (nextLanguage: Language) =>
      `${SITE_URL}/${nextLanguage}${pathWithoutLanguage === '/' ? '' : pathWithoutLanguage}`;

    document.title = title;
    document.documentElement.lang = language ?? document.documentElement.lang ?? 'en';

    setMeta('name', 'description', description);
    setMeta('name', 'keywords', SEO_KEYWORDS);
    setMeta('name', 'author', 'Mavost');
    setMeta('property', 'og:title', title);
    setMeta('property', 'og:description', description);
    setMeta('property', 'og:url', url);
    setMeta('property', 'og:type', 'website');
    setMeta('property', 'og:image', image);
    setMeta('property', 'og:image:alt', title);
    setMeta('name', 'twitter:title', title);
    setMeta('name', 'twitter:description', description);
    setMeta('name', 'twitter:image', image);
    setCanonical(url);
    setAlternate('en', localizedUrl('en'));
    setAlternate('id', localizedUrl('id'));
    setAlternate('x-default', localizedUrl('en'));

    const existingSchema = document.head.querySelector<HTMLScriptElement>('script[data-mavost-schema]');
    existingSchema?.remove();

    if (structuredData) {
      const schema = document.createElement('script');
      schema.type = 'application/ld+json';
      schema.dataset.mavostSchema = 'true';
      schema.textContent = JSON.stringify(structuredData);
      document.head.appendChild(schema);
    }

    return () => {
      document.head.querySelector<HTMLScriptElement>('script[data-mavost-schema]')?.remove();
      document.head.querySelectorAll('link[data-mavost-alternate]').forEach((link) => link.remove());
    };
  }, [description, image, language, path, structuredData, title]);

  return null;
}
