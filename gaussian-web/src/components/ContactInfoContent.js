import React from 'react';
import styled from 'styled-components';

// Reuse the same basic structure styles as Policy Modals
const ContactWrapper = styled.div`
  padding: 1rem 0; // Add some padding
  text-align: center;

  h2 {
    font-size: 1.75rem;
    color: var(--text-color);
    margin-bottom: 1.5rem;
  }
  p {
    font-size: 1.1rem; // Slightly larger text for contact info
    color: var(--text-secondary);
    line-height: 1.8;
    margin-bottom: 1rem;
  }
  a {
    color: var(--light-blue);
    text-decoration: none;
    font-weight: 500;
    &:hover {
        text-decoration: underline;
    }
  }
`;

const ContactInfoContent = () => {
  return (
    <ContactWrapper>
      <h2>Contact Information</h2>
      <p>
        <strong>Email:</strong> <a href="mailto:chahelpaatur@gmail.com">chahelpaatur@gmail.com</a>
      </p>
      <p>
        <strong>Phone:</strong> <a href="tel:9254759513">925-475-9513</a>
      </p>
    </ContactWrapper>
  );
};

export default ContactInfoContent; 