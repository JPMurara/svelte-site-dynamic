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
  })} <main class="max-w-7xl container section prose prose-primary prose-lg pt-40"><h1 class="!text-5xl" data-svelte-h="svelte-dfhuyk">Our Terms of Use</h1> <ol><li><strong data-svelte-h="svelte-xke5oi">Introduction and Acceptance of Terms of Use.</strong> ${escape(company.name)} offers you a wide range of content, communication tools, forums,
      and information about its products and services (&quot;Materials&quot;) via this web
      site. By using this web site, you are agreeing to accept and comply with the
      terms and conditions of use as stated below (&quot;Terms of Use&quot;), which ${escape(company.name)}
      may update at any time without notice. You should visit this page periodically
      to review the then-current Terms of Use. Please note that
      ${escape(company.name)} may, at its sole discretion, terminate your access to this web
      site at any time without notice.</li> <li><strong data-svelte-h="svelte-1kk3vxy">Limited Right to Use.</strong>
      This web site is owned and operated by ${escape(company.name)}. Unless otherwise
      specified, all Materials on this web site are the property of ${escape(company.name)}
      and are protected by the copyright laws of Australia and, throughout the world
      by the applicable copyright laws. You may, view, print and/or download one
      copy of the Materials from this web site on any single computer solely for
      your personal, informational, non-commercial use, provided you keep intact
      all copyright and other proprietary notices. No Materials published by ${escape(company.name)}
      on this web site, in whole or in part, may be copied, reproduced, modified,
      republished, uploaded, posted, transmitted, or distributed in any form or by
      any means without prior written permission from ${escape(company.name)}. The use of
      any such Materials on any other web site or networked computer environment
      or for any other purpose is strictly prohibited and such unauthorized use
      may violate copyright, trademark and other similar laws.</li> <li><strong data-svelte-h="svelte-164bxsh">Communications.</strong>
      Except for any disclosure by you for technical support purposes, or as specified
      in our Privacy Statement, all communications from you to this web site will
      be considered non-confidential and non-proprietary. You agree that any and
      all comments, information, feedback and ideas regarding our company, products
      or services that you communicate to ${escape(company.name)} (&quot;Feedback&quot;) will be deemed,
      at the time of communication to ${escape(company.name)}, the property of
      ${escape(company.name)}, and ${escape(company.name)} shall be entitled to full rights of ownership,
      including without limitation, unrestricted right to use or disclose such Feedback
      in any form, medium or technology now known or later developed, and for any
      purpose, commercial or otherwise, without compensation to you. You are solely
      responsible for the content of your communications and their legality under
      all laws and regulations. You agree not to use this web site to distribute,
      link to or solicit content that is defamatory, harassing, unlawful, libellous,
      harmful to minors, threatening, obscene, false, misleading, or infringing a
      third party intellectual or privacy rights.</li> <li data-svelte-h="svelte-djfo8g"><strong>Access to Password Protected or Secured Areas.</strong>
      Access to and use of password protected or secured areas of this web site is
      restricted to authorized users only. You will be asked to provide accurate
      and current information on all registration forms on this web site. You are
      solely responsible for maintaining the confidentiality of any username and
      password that you choose or is chosen by your web administrator on your behalf,
      to access this web site as well as any activity that occur under your username/password.
      You will not misuse or share your username or password, misrepresent your identity
      or your affiliation with an entity, impersonate any person or entity, or misstate
      the origin of any Materials you are exposed to through this web site.</li> <li><strong data-svelte-h="svelte-1sjhu4y">Monitoring.</strong>
      Although ${escape(company.name)} is not obligated to do so, it will have the right to
      review your communications on this web site to determine whether you comply
      with our Terms of Use. Maintenance Plumbing Melbourne will not have any liability
      or responsibility for the content of any communications you post to this web
      site, or for any errors or violations of any laws or regulations by you. Maintenance
      Plumbing Melbourne will comply with any court order in disclosing the identity
      of any person posting communications on this web site. It is advisable that
      you review our Privacy Policy before posting any such communications. Please
      note that when you conduct transactions with other companies providing content
      via this web site, you will also be subject to their privacy policies.</li> <li><strong data-svelte-h="svelte-5lyde8">Links to Other Sites.</strong>
      The linked sites are not under the control of ${escape(company.name)} and they are not
      responsible for the content of any linked site or any link contained in a linked
      site. Maintenance Plumbing Melbourne reserves the right to terminate any link
      at any time. ${escape(company.name)}
      may provide links from this web site to other sites as a convenience to you
      and in no way should this be interpreted as an endorsement of any company,
      content or products to which it links. If you decide to access any of the third
      party sites linked to this web site, you do this entirely at your own risk.
      ${escape(company.name)} DISCLAIMS ANY AND ALL WARRANTIES, EXPRESS OR IMPLIED, TO ANY
      SUCH LINKED SITES, INCLUDING BUT NOT LIMITED TO ANY TERMS AS TO THE ACCURACY,
      OWNERSHIP, VALIDITY OR LEGALITY OF ANY CONTENT OF A LINKED SITE.</li> <li><strong data-svelte-h="svelte-5qc0n4">Trademarks.</strong>
      The trademarks, service marks and logos of ${escape(company.name)} and others used in
      this web site (&quot;Trademarks&quot;) are the property of ${escape(company.name)} and their respective
      owners. You have no right to use any such Trademarks, and nothing contained
      in this web site or the Terms of Use grants any right to use (by implication,
      waiver, estoppel or otherwise) any Trademarks without the prior written permission
      of ${escape(company.name)} or the respective owner.</li> <li><strong data-svelte-h="svelte-fx7drt">Indemnity.</strong>
      You agree to indemnify, defend and hold ${escape(company.name)} harmless from and against
      any and all third party claims, liabilities, damages, losses or expenses (including
      reasonable attorney&#39;s fees and costs) arising out of, based on or in connection
      with your access and/or use of this web site.</li> <li><strong data-svelte-h="svelte-gb9k6k">Limitation of Liability.</strong>
      IN NO EVENT SHALL ${escape(company.name)} OR ITS SUPPLIERS BE LIABLE FOR ANY DIRECT,
      INDIRECT, SPECIAL, INCIDENTAL OR CONSEQUENTIAL DAMAGES INCLUDING, WITHOUT LIMITATION,
      LOSS PROFITS OR REVENUES, COSTS OF REPLACEMENT GOODS, LOSS OR DAMAGE TO DATA
      ARISING OUT OF THE USE OR INABILITY TO USE THIS WEB SITE OR ANY LINKED SITE,
      DAMAGES RESULTING FROM USE OF OR RELIANCE ON THE INFORMATION OR MATERIALS PRESENTED
      ON THIS WEB SITE, WHETHER BASED ON WARRANTY, CONTRACT, TORT OR ANY OTHER LEGAL
      THEORY EVEN IF ${escape(company.name)} OR ITS SUPPLIERS HAVE BEEN ADVISED OF THE POSSIBILITY
      OF SUCH DAMAGES.</li> <li><strong data-svelte-h="svelte-10yf7br">Disclaimer.</strong> ${escape(company.name)} assumes no responsibility for accuracy, correctness, timeliness,
      or content of the Materials provided on this web site. You should not assume
      that the Materials on this web site are continuously updated or otherwise contain
      current information. Maintenace Plumbing Melbourne is not responsible for supplying
      content or materials from the web site that have expired or have been removed.
      THE MATERIALS PROVIDED AT THIS WEB SITE ARE PROVIDED &quot;AS IS&quot; AND ANY WARRANTY
      (EXPRESS OR IMPLIED), CONDITION OR OTHER TERM OF ANY KIND, INCLUDING WITHOUT
      LIMITATION, ANY WARRANTY OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE,
      NON-INFRINGEMENT OR TITLE IS HEREBY EXCLUDED.</li> <li data-svelte-h="svelte-xhn7tc"><strong>Applicable Laws.</strong>
      These Terms of Use are governed by the law in force in the State of Queensland,
      Australia, and the parties irrevocably submit to the non-exclusive jurisdiction</li></ol></main>`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-BNgvoK3c.js.map
