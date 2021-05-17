import React, { useContext, useState } from 'react';
import Fade from 'react-reveal/Fade';
import { Container } from 'react-bootstrap';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import PortfolioContext from '../../context/context';
import Title from '../Title/Title';

const Contact = () => {
  const { contact } = useContext(PortfolioContext);
  const { cta, btn, email } = contact;

  const [copied, setCopied] = useState(false);

  const copyAlert = () => {
    setCopied(false);
    return <p>Successfully copied to clipboard ! </p>;
  };

  return (
    <section id="contact">
      <Container>
        <Title title="Contact" />
        <Fade bottom duration={1000} delay={800} distance="30px">
          <div className="contact-wrapper">
            <p className="contact-wrapper__text">{cta}</p>
            <CopyToClipboard text={email} onCopy={() => setCopied(true)}>
              <p className="contact-wrapper__text cta-btn cta-btn--resume">{btn}</p>
            </CopyToClipboard>
            <p className="text-clipboard">{copied ? copyAlert() : null}</p>
          </div>
        </Fade>
      </Container>
    </section>
  );
};

export default Contact;
