import { c as create_ssr_component, i as subscribe, v as validate_component, k as escape } from './exports-Bs1Z8H2x.js';
import { p as page } from './stores-DmVCp768.js';
import { H as Head } from './Head-D0eqEAG6.js';
import './env-C5O8tkwu.js';

const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let company;
  let meta;
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  company = $page.data.company;
  meta = {
    metaTitle: `${company.name} - Terms & Conditions`,
    metaDescription: "Our terms and conditions"
  };
  $$unsubscribe_page();
  return `${validate_component(Head, "Head").$$render($$result, { data: meta }, {}, {
    default: () => {
      return `<title>${escape(meta.metaTitle)}</title>`;
    }
  })} <main class="max-w-7xl container section prose prose-lg pt-40"><h2 data-svelte-h="svelte-i4ndia">Our Privacy Policy</h2> <p><strong>${escape(company.name)}</strong> respects your privacy and is committed to
    protecting your personal information that you provide to us. This statement
    explains our policies and practices regarding the use and disclosure of your
    personal information by ${escape(company.name)}. Please note that, ${escape(company.name)} reviews
    and updates this Privacy Policy from time to time as needed without notice. Therefore,
    you should review the terms of this policy periodically to make sure that you
    are aware of how ${escape(company.name)} collects and uses personal information. By using
    our website, you consent to the collection and use of your personal information
    by ${escape(company.name)} as explained below.</p> <h3 data-svelte-h="svelte-1egoly2">Personal Information</h3> <p data-svelte-h="svelte-10n9cjr">You have complete control over your personal information. In general, you
    can visit our web site without providing us with any personal information.
    However, there are instances where we must have your personal information in
    order for us to grant you an access to our protected and secured sites. This
    information may include registration data (your name, address, email
    address, phone number, title, etc.), information request data and response
    data (&quot;User Information&quot;). When you receive your confirmation email or when
    you receive any email from the list server, you will be given instructions
    on how to remove yourself from the list.</p> <h3 data-svelte-h="svelte-18hipih">Use of User Information</h3> <p>We intend to use such information for purposes of supporting your and your
    employers relationship with ${escape(company.name)} by designing a web site content that
    is suitable to your needs and alerting you to new product and service offerings
    as they become available. This User Information may be retained by ${escape(company.name)}
    to verify compliance with the agreement between ${escape(company.name)}
    and your employer, to keep track of the domains from which people visit us, to
    create a user profile to better serve you and your employer, or to simply contact
    you either electronically or otherwise. If you decide that we should not use
    your personal User Information to contact you, please let us know and we will
    not use that information for such purpose. However, please do not submit any
    User Information if you are less than 18 years of age.</p> <h3 data-svelte-h="svelte-1dqrlez">Disclosure of User Information.</h3> <p>${escape(company.name)} does not sell, trade or transfer User Information to third parties.
    However, we may share User Information with our PARTNERS for marketing, advertising
    or product/service offering purposes. For example, we provide User Information
    to our PARTNERS for direct emailing of our newsletters, online surveys or notifications
    on Maintenance Plumbing Melbourne Offerings to our viewers. We also disclose
    User Information if: we have your consent; we need to share it in order to provide
    you with the products and/or services you requested; we respond to a court order
    or you violate our Terms of Use. You may separately agree to provide your personal
    information to third parties that provide content for Maintenance Plumbing Melbourne
    Offerings, in order to access and/or use their products and/or services. If you
    agree to provide such information to these third parties, then your personal
    information will be subject to their privacy policies.</p> <h3 data-svelte-h="svelte-ere3gw">Accuracy and Security.</h3> <p>The accuracy and security of the User Information is important to
    Maintenance Plumbing Melbourne. Currently, you may review and request
    updates to your User Information retained by contacting ${escape(company.name)}. If
    you contact us to correct your User Information, we will attempt to correct
    such inaccuracies in a timely manner. ${escape(company.name)}
    is concerned with the security of your User Information and is committed to taking
    reasonable steps to protect it from unauthorised access and use of that personal
    information. To that end, we put in place the appropriate physical, electronic
    and managerial policies and procedures to secure your personal User Information.
    We also continue to implement procedures to maintain accurate, complete and current
    User Information.</p> <h3 data-svelte-h="svelte-1s22f5s">Usernames and Passwords</h3> <p>Access to certain content on our web site may be allowed under a written
    agreement between you or your employer and ${escape(company.name)} and will require a
    username and/or password. In some cases, failure to provide personal information
    may prevent you from accessing certain
    ${escape(company.name)} web pages containing certain confidential information, products,
    services, or promotional offers (&quot;${escape(company.name)} Offerings&quot;). By accessing and
    using our protected and secured web site(s), you agree to maintain the confidentiality
    of the username and password you selected to access such site(s) and consent
    to our Terms of Use.</p> <h3 data-svelte-h="svelte-1tzxplf">Cookies</h3> <p>${escape(company.name)} uses &quot;cookies&quot;. A cookie is a small data file that a web site
    can transfer to a visitor&#39;s hard drive to keep records of the visits to such
    site. A cookie contains information such as your username and password that helps
    us recognize the pages you have visited and improve future visits, but the only
    personal information a cookie can contain is the information that you provide
    yourself. A cookie cannot read data off of your hard drive or read cookie files
    created by other sites. Information stored in cookies may be encrypted, however,
    we do not store your credit card number in cookies. If you prefer not to accept
    a cookie, you can set your web browser (Microsoft Internet Explorer or Netscape
    Navigator) to warn you before accepting cookies or you can refuse all cookies
    by turning them off in your web browser. However, access to some of our secured
    web site(s) may require the use of cookies, which you must enable only cookies
    that get sent back to the originating server. Otherwise, you can still access
    most of the features on our web site even without accepting a cookie.</p> <p></p> <h3 data-svelte-h="svelte-16uxugm">External Links</h3> <p>${escape(company.name)} web site provides links to other third party web sites. Even if
    the third party is affiliated with ${escape(company.name)} through a business partnership
    or otherwise, ${escape(company.name)}
    is not responsible for the privacy policies or practices or the content of such
    external links. These links are provided to you for convenience purposes only
    and you access them at your own risk.</p> <h3 data-svelte-h="svelte-1qa7c47">Terms of Use</h3> <p>Please also see our Terms of Use, which describes the restrictions,
    disclaimers, indemnification and limitation of liability governing the use
    of the entire ${escape(company.name)} web site.</p> <h3 data-svelte-h="svelte-14c8lla">General</h3> <p>If you have questions regarding our Privacy Statement, please contact ${escape(company.name)}
    via our
    <a href="/contact" data-svelte-h="svelte-ebij3d">Contact Us</a> page</p></main>`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-BH1nKCXA.js.map
