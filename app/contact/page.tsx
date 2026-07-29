import type { Metadata } from 'next';
import { Chrome, SiteFooter, Arrow } from '../../components/chrome';
import { Faq, ContactForm } from '../../components/faq';

export const metadata: Metadata = {
  title: 'Contact — Atomenos',
  description: 'Start a conversation.'
};

export default function ContactPage() {
  return (
    <>
      <Chrome index="07" />
      <main>
        <section className="contact section reveal" style={{ minHeight: '58vh', paddingTop: '20vh' }}>
          <div className="contact__glow" />
          <p className="section-tag"><i /> 07 — START A CONVERSATION</p>
          <h2>LET&rsquo;S LOOK AT<br />HOW YOU<br /><em>OPERATE.</em></h2>
          <a className="contact__mail" href="mailto:hello@atomenos.com">HELLO@ATOMENOS.COM <Arrow /></a>
          <div className="social-row">
            <span>LINKEDIN &middot; SOON</span>
            <span>X / TWITTER &middot; SOON</span>
            <span>INSTAGRAM &middot; SOON</span>
          </div>
        </section>

        <section className="contact-page__form section reveal">
          <div className="section-tag"><i /> BUSINESS INQUIRY</div>
          <h2>TELL US<br /><em>WHAT&rsquo;S SLOWING<br />YOU DOWN.</em></h2>
          <div className="form-grid">
            <ContactForm />

            <div className="map-box">
              <video
                className="contact-video"
                autoPlay
                muted
                loop
                playsInline
                preload="auto"
                aria-hidden="true"
              >
                <source src="/contactgif.mp4" type="video/mp4" />
              </video>

              <span className="map-label">
                ATOMENOS &middot; INDIA / GLOBAL
              </span>
            </div>
          </div>
        </section>

        <section className="faq section reveal">
          <div className="section-tag"><i /> FREQUENTLY ASKED</div>
          <h2>QUESTIONS<br /><em>WE GET A LOT.</em></h2>
          <Faq />
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
