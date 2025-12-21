import type { Schema, Struct } from '@strapi/strapi';

export interface SeoSharedSeo extends Struct.ComponentSchema {
  collectionName: 'components_seo_shared_seos';
  info: {
    displayName: 'shared.seo';
  };
  attributes: {
    appleTouchIcon: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    canonicalURL: Schema.Attribute.String;
    favicon: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    metaDescription: Schema.Attribute.String;
    metaImage: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    metaKeywords: Schema.Attribute.String;
    metaRobots: Schema.Attribute.Enumeration<
      ['index', 'follow', 'noindex', 'nofollow']
    >;
    metaTitle: Schema.Attribute.String;
    structuredData: Schema.Attribute.JSON;
    webManifest: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'seo.shared-seo': SeoSharedSeo;
    }
  }
}
