import { c as create_ssr_component, i as subscribe, j as add_attribute, k as escape } from './exports-Bs1Z8H2x.js';
import { p as page } from './stores-DmVCp768.js';
import { a as assetURL } from './env-C5O8tkwu.js';

const Head = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let metaTitle;
  let metaDescription;
  let company;
  let tokens;
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  let { data } = $$props;
  const favicon = `${assetURL}/images/icon.svg`;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0) $$bindings.data(data);
  metaTitle = data.metaTitle !== null ? data.metaTitle : `${$page.data.business_name}`;
  metaDescription = data.metaDescription;
  company = $page.data.company;
  tokens = $page.data.tokens;
  $$unsubscribe_page();
  return `${$$result.head += `<!-- HEAD_svelte-ul7yw3_START --><meta charset="utf-8"><meta http-equiv="x-ua-compatible" content="ie=edge"><meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no">${slots.default ? slots.default({}) : ``}<meta name="description"${add_attribute("content", metaDescription, 0)}><link rel="icon"${add_attribute("href", favicon, 0)} sizes=""><meta property="og:type" content=""><meta property="og:title"${add_attribute("content", metaTitle, 0)}><meta property="og:description"${add_attribute("content", metaDescription, 0)}><meta property="og:image"${add_attribute("content", favicon, 0)}><meta property="og:site_name"${add_attribute("content", `${company.name}`, 0)}>${tokens.wildjar ? `<script async src="${"https://trkcall.com/scripts/" + escape(tokens.wildjar, true) + ".js"}"><\/script>` : ``}<script defer src="https://cdn.jsdelivr.net/gh/ProbityWeb/reviews-embed@main/dist/index.js" data-svelte-h="svelte-jsmsmt"><\/script><link href="https://cdn.jsdelivr.net/gh/ProbityWeb/reviews-embed@main/dist/index.css" rel="stylesheet">${tokens.gtag ? `<script async src="${"https://www.googletagmanager.com/gtag/js?id=" + escape(tokens.gtag, true)}"><\/script> <script data-svelte-h="svelte-znozul">window.dataLayer = window.dataLayer || [];
      function gtag() {
        dataLayer.push(arguments);
      }
      gtag('js', new Date());
      gtag('config', 'G-0RLCQC5KKX');<\/script>` : ``}<script type="application/ld+json" data-svelte-h="svelte-rnz5hs">{
  "@context": "http://schema.org/",
  "@graph": [
    {
      "@type": "LocalBusiness",
      "name": "Get Performing",
      "url": "https://www.getperforming.com/",
      "logo": "https://cdn.staging.oregon.platform-os.com/instances/11163/assets/images/logo-devl.svg",
      "image": "https://cdn.staging.oregon.platform-os.com/instances/11163/assets/images/logo-devl.svg",
      "priceRange": "$80",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "suburb",
        "addressRegion": "state",
        "postalCode": "postcode",
        "streetAddress": "address",
        "addressCountry": "AU"
      },
      "areaServed": [
        { "@type": "Place", "name": "Melbourne" },
        { "@type": "Place", "name": "Adelaide" },
        { "@type": "Place", "name": "Gold Coast" },
        { "@type": "Place", "name": "Sydney" },
        { "@type": "Place", "name": "Brisbane" },
        { "@type": "Place", "name": "Sunshine Coast" },
        { "@type": "Place", "name": "Hobart" },
        { "@type": "Place", "name": "Canberra" }
      ],
      "telephone": "0435 253 716",
      "contactPoint": [
        {
          "@type": "ContactPoint",
          "telephone": "0435 253 716",
          "contactType": "customer service",
          "email": "success@getperforming.com",
          "availableLanguage": "English"
        }
      ],
      "founder": {
        "@type": "Person",
        "name": "Jerome Lamarque"
      },
      "sameAs": [
        "https://www.facebook.com/getperforming?kuid=7df26021-02e5-4e24-a504-29b54b0cefe5&kref=DFRJZtoq2ECp",
        "https://www.instagram.com/jerome.lamarque_gp/?kuid=7df26021-02e5-4e24-a504-29b54b0cefe5&kref=DFRJZtoq2ECp",
        "https://www.linkedin.com/in/lamarquejerome/?kuid=7df26021-02e5-4e24-a504-29b54b0cefe5&kref=DFRJZtoq2ECp&original_referer=https%3A%2F%2Fwww.jeromelamarque.com%2F"
      ],
      "memberOf": [
        "https://abr.business.gov.au/ABN/View?id=59603449663",
        "https://connectonline.asic.gov.au/RegistrySearch/faces/landing/panelSearch.jspx?searchType=OrgAndBusNm&searchText=603449663"
      ],
      "openingHours": [
        "Monday 00:00-23:59",
        "Tuesday 00:00-23:59",
        "Wednesday 00:00-23:59",
        "Thursday 00:00-23:59",
        "Friday 00:00-23:59",
        "Saturday 00:00-23:59",
        "Sunday 00:00-23:59"
      ]
    },
    {
      "@type": "Service",
      "@additionalType": "http://www.productontology.org/doc/Coaching",
      "serviceType": "Personal Development",
      "name": "Life Coach",
      "description": "Transform your life with personalised coaching. Our life coach helps you set and achieve your goals for personal development and fulfilment.",
      "provider": {
        "@id": "https://www.getperforming.com/#organization"
      },
      "potentialAction": {
        "@type": "ReserveAction",
        "target": {
          "@type": "EntryPoint",
          "urlTemplate": "https://www.getperforming.com/contact"
        },
        "result": {
          "@type": "Reservation",
          "name": "Life Coaching Session"
        }
      }
    },
    {
      "@type": "Service",
      "@additionalType": "http://www.productontology.org/doc/Leadership",
      "serviceType": "Leadership Development",
      "name": "Leadership Coach",
      "description": "Develop effective leadership skills with our experienced coach. We offer coaching to enhance your leadership capabilities and drive success.",
      "provider": {
        "@id": "https://www.getperforming.com/#organization"
      },
      "potentialAction": {
        "@type": "ReserveAction",
        "target": {
          "@type": "EntryPoint",
          "urlTemplate": "https://www.getperforming.com/contact"
        },
        "result": {
          "@type": "Reservation",
          "name": "Leadership Coaching Session"
        }
      }
    },
    {
      "@type": "Service",
      "@additionalType": "http://www.productontology.org/doc/Business",
      "serviceType": "Business Development",
      "name": "Business Coach",
      "description": "Elevate your business with expert coaching in strategy and growth. Our business coach provides tailored advice to boost your performance and success.",
      "provider": {
        "@id": "https://www.getperforming.com/#organization"
      },
      "potentialAction": {
        "@type": "ReserveAction",
        "target": {
          "@type": "EntryPoint",
          "urlTemplate": "https://www.getperforming.com/contact"
        },
        "result": {
          "@type": "Reservation",
          "name": "Business Coaching Session"
        }
      }
    },
    {
      "@type": "Service",
      "@additionalType": "http://www.productontology.org/doc/Motivational_speaker",
      "serviceType": "Inspirational and Public Speaking",
      "name": "Motivational Speaker",
      "description": "Energise your audience with impactful and inspiring speeches. Our motivational speaker delivers engaging talks that inspire and motivate.",
      "provider": {
        "@id": "https://www.getperforming.com/#organization"
      },
      "potentialAction": {
        "@type": "ReserveAction",
        "target": {
          "@type": "EntryPoint",
          "urlTemplate": "https://www.getperforming.com/contact"
        },
        "result": {
          "@type": "Reservation",
          "name": "Motivational Speaker Session"
        }
      }
    }
  ]
}<\/script><!-- HEAD_svelte-ul7yw3_END -->`, ""}`;
});

export { Head as H };
//# sourceMappingURL=Head-D0eqEAG6.js.map
