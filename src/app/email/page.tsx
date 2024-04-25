import React from "react";
import Head from 'next/head';
    
import BackButton from  '../../components/BackButton'

const EmailSignupPage = () => {
  return (
    <div style={{ marginLeft: '-600px' }}>
      <iframe src="https://www.emeraldnecklace.org/contact/sign-up-for-enews/" width="300%" height="650px" frameBorder="0"></iframe>
      <BackButton></BackButton>
    </div>
  );
};

export default EmailSignupPage;