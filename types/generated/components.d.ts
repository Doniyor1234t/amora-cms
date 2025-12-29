import type { Schema, Struct } from '@strapi/strapi';

export interface ProductProductVariant extends Struct.ComponentSchema {
  collectionName: 'components_product_product_variants';
  info: {
    displayName: 'ProductVariant';
  };
  attributes: {
    color: Schema.Attribute.String;
    image: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
    isAvailable: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<true>;
    price: Schema.Attribute.Decimal &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMax<
        {
          min: 0;
        },
        number
      >;
    size: Schema.Attribute.Relation<'oneToOne', 'api::size.size'>;
    sku: Schema.Attribute.String & Schema.Attribute.Unique;
    stock: Schema.Attribute.Integer;
    weight: Schema.Attribute.String;
  };
}

export interface SectionCta extends Struct.ComponentSchema {
  collectionName: 'components_section_ctas';
  info: {
    displayName: 'cta';
  };
  attributes: {
    banners: Schema.Attribute.Relation<'oneToMany', 'api::banner.banner'>;
    layout: Schema.Attribute.Enumeration<['two-column', 'grid', 'carousel']>;
    title: Schema.Attribute.String;
  };
}

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
      'product.product-variant': ProductProductVariant;
      'section.cta': SectionCta;
      'seo.shared-seo': SeoSharedSeo;
    }
  }
}
