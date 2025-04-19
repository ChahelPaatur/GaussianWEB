import React from 'react';
import styled from 'styled-components';

const PolicyWrapper = styled.div`
  h2 {
    font-size: 1.75rem;
    color: var(--text-color);
    margin-bottom: 1.5rem;
    padding-right: 2rem; // Space for close button if needed
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

const PrivacyPolicyContent = () => {
  return (
    <PolicyWrapper>
      <h2>Privacy Policy</h2>
      <p><strong>Last Updated:</strong> {new Date().toLocaleDateString()}</p>
      
      <p>Your privacy is important to us. This Privacy Policy explains how Gaussian Language we collect, use, disclose, and protect your information when you visit our website [Your Website URL], including any other media form, media channel, mobile website, or mobile application related or connected thereto (collectively, the "Site"). Please read this privacy policy carefully. If you do not agree with the terms of this privacy policy, please do not access the site.</p>
      
      <h3>Collection of Your Information</h3>
      <p>We may collect information about you in a variety of ways. The information we may collect on the Site includes:</p>
      <ul>
        <li><strong>Personal Data:</strong> Personally identifiable information, such as your name, email address, that you voluntarily give to us when you register with the Site or when you choose to participate in various activities related to the Site, such as downloads, contact forms, or newsletter subscriptions.</li>
        <li><strong>Derivative Data:</strong> Information our servers automatically collect when you access the Site, such as your IP address, your browser type, your operating system, your access times, and the pages you have viewed directly before and after accessing the Site.</li>
        <li><strong>Usage Data:</strong> Information about how you use the Site, such as download attempts, pages visited, features used. This is typically collected via analytics services.</li>
      </ul>
      
      <h3>Use of Your Information</h3>
      <p>Having accurate information about you permits us to provide you with a smooth, efficient, and customized experience. Specifically, we may use information collected about you via the Site to:</p>
      <ul>
        <li>Manage downloads and provide access to requested files.</li>
        <li>Improve the efficiency and operation of the Site.</li>
        <li>Monitor and analyze usage and trends to improve your experience with the Site.</li>
        <li>Respond to your comments and questions and provide customer service.</li>
        <li>Send you technical notices, updates, security alerts, and support messages.</li>
        {/* Add other uses relevant to your project */} 
      </ul>

      <h3>Disclosure of Your Information</h3>
      <p>We may share information we have collected about you in certain situations. Your information may be disclosed as follows:</p>
      <ul>
        <li><strong>By Law or to Protect Rights:</strong> If we believe the release of information about you is necessary to respond to legal process, to investigate or remedy potential violations of our policies, or to protect the rights, property, and safety of others, we may share your information as permitted or required by any applicable law, rule, or regulation.</li>
        <li><strong>Third-Party Service Providers:</strong> We may share your information with third parties that perform services for us or on our behalf, including data analysis, hosting services, customer service, and marketing assistance. STRIPE</li>
         {/* Add other disclosures */} 
      </ul>
      
      <h3>Security of Your Information</h3>
      <p>We use administrative, technical, and physical security measures to help protect your personal information. While we have taken reasonable steps to secure the personal information you provide to us, please be aware that despite our efforts, no security measures are perfect or impenetrable, and no method of data transmission can be guaranteed against any interception or other type of misuse.</p>
      
      <h3>Policy for Children</h3>
      <p>We do not knowingly solicit information from or market to children under the age of 13. If you become aware of any data we have collected from children under age 13, please contact us using the contact information provided below.</p>
      
      <h3>Changes to This Privacy Policy</h3>
      <p>We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page. You are advised to review this Privacy Policy periodically for any changes.</p>

      <h3>Contact Us</h3>
      <p>If you have questions or comments about this Privacy Policy, please contact us at: chahelpaatur@gmail.com</p>
    </PolicyWrapper>
  );
};

export default PrivacyPolicyContent; 