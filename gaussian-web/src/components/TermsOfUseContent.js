import React from 'react';
import styled from 'styled-components';

// Reuse the same basic structure styles as Privacy Policy
const PolicyWrapper = styled.div`
  h2 {
    font-size: 1.75rem;
    color: var(--text-color);
    margin-bottom: 1.5rem;
    padding-right: 2rem;
  }
  h3 {
    font-size: 1.25rem;
    color: var(--text-secondary);
    margin-top: 1.5rem;
    margin-bottom: 0.75rem;
  }
  p {
    font-size: 0.95rem;
    color: var(--text-secondary);
    line-height: 1.6;
    margin-bottom: 1rem;
  }
  ul {
    list-style: disc;
    margin-left: 1.5rem;
    margin-bottom: 1rem;
    li {
      margin-bottom: 0.5rem;
      color: var(--text-secondary);
    }
  }
  strong {
    color: var(--text-color);
    font-weight: 600;
  }
`;

const TermsOfUseContent = () => {
  return (
    <PolicyWrapper>
      <h2>Terms of Use</h2>
      <p><strong>Last Updated:</strong> {new Date().toLocaleDateString()}</p>

      <p>Welcome to Gaussian Language! These Terms of Use ("Terms") govern your access to and use of our website located at [Your Website URL] (the "Site") and the software, including the Gaussian interpreter and related tools (collectively, the "Software"), offered by Gaussian Language (["we", "us", "our"]).</p>

      <p>By accessing or using the Site or Software, you agree to be bound by these Terms. If you disagree with any part of the terms, then you may not access the Site or use the Software.</p>

      <h3>Use License (Software)</h3>
      <p>Permission is granted to download and use the Software provided on the Site for personal, educational, and non-commercial experimental purposes, subject to the terms of the specific license under which the Software is distributed (e.g., MIT License, specify license here). This is the grant of a license, not a transfer of title, and under this license you may not:</p>
      <ul>
        <li>Modify or copy the materials for commercial purposes not permitted by the license;</li>
        <li>Attempt to decompile or reverse engineer any software contained on the Site, except as permitted by the license or applicable law;</li>
        <li>Remove any copyright or other proprietary notations from the materials;</li>
         {/* Add other license restrictions if applicable */} 
      </ul>
      <p>This license shall automatically terminate if you violate any of these restrictions and may be terminated by us at any time.</p>

      <h3>Use of the Site</h3>
      <p>You agree not to use the Site:</p>
      <ul>
        <li>In any way that violates any applicable federal, state, local, or international law or regulation.</li>
        <li>For the purpose of exploiting, harming, or attempting to exploit or harm minors in any way.</li>
        <li>To transmit, or procure the sending of, any advertising or promotional material, including any "junk mail," "chain letter," "spam," or any other similar solicitation.</li>
        <li>To impersonate or attempt to impersonate Gaussian Language, an employee, another user, or any other person or entity.</li>
        <li>To engage in any other conduct that restricts or inhibits anyone's use or enjoyment of the Site, or which, as determined by us, may harm us or users of the Site or expose them to liability.</li>
      </ul>

      <h3>Disclaimer</h3>
      <p>The materials and Software on the Site are provided on an 'as is' basis. We make no warranties, expressed or implied, and hereby disclaim and negate all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.</p>
      <p>Further, we do not warrant or make any representations concerning the accuracy, likely results, or reliability of the use of the materials on its website or otherwise relating to such materials or on any sites linked to this site. The Software is provided as a beta version for experimental purposes and may contain bugs or errors.</p>

      <h3>Limitations</h3>
      <p>In no event shall Gaussian Language or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials or Software on the Site, even if we or an authorized representative has been notified orally or in writing of the possibility of such damage.</p>

      <h3>Accuracy of Materials</h3>
      <p>The materials appearing on the Site could include technical, typographical, or photographic errors. We do not warrant that any of the materials on its website are accurate, complete or current. We may make changes to the materials contained on its website at any time without notice. However, we do not make any commitment to update the materials.</p>

      <h3>Links</h3>
      <p>We have not reviewed all of the sites linked to its website and are not responsible for the contents of any such linked site. The inclusion of any link does not imply endorsement by us of the site. Use of any such linked website is at the user's own risk.</p>

      <h3>Modifications</h3>
      <p>We may revise these Terms of Use for its website at any time without notice. By using this website, you are agreeing to be bound by the then current version of these Terms of Use.</p>

      <h3>Governing Law</h3>
      <p>These terms and conditions are governed by and construed in accordance with the laws of [Your Jurisdiction, e.g., California, USA] and you irrevocably submit to the exclusive jurisdiction of the courts in that State or location.</p>

    </PolicyWrapper>
  );
};

export default TermsOfUseContent; 