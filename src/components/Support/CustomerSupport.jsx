import React from 'react';

function CustomerSupport() {
  return (
    <div>
      <h1>Customer Support</h1>
      <h2>FAQs</h2>
      <ul>
        <li>How do I register?</li>
        <li>How can I reset my password?</li>
        <li>What payment methods are accepted?</li>
      </ul>
      <h2>Contact Us</h2>
      <p>If you have any issues, please reach out to our support team at support@farmerswebapp.com.</p>
      <h2>Report an Issue</h2>
      <form>
        <label htmlFor="issue">Describe your issue:</label>
        <textarea id="issue" name="issue" rows="4" required></textarea>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default CustomerSupport;