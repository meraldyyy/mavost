import { useEffect } from 'react';

const SITE_URL = 'https://mavost.id';
const DEFAULT_IMAGE = `${SITE_URL}/og-image.svg`;

type SEOProps = {
  title: string;
  description: string;
  path: string;
  image?: string;
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

export default function SEO({ title, description, path, image = DEFAULT_IMAGE, structuredData }: SEOProps) {
  useEffect(() => {
    const url = `${SITE_URL}${path}`;

    document.title = title;
    document.documentElement.lang = 'en';

    setMeta('name', 'description', description);
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
    };
  }, [description, image, path, structuredData, title]);

  return null;
}

