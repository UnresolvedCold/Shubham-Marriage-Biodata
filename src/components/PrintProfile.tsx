import { profile as p } from '../data/profile';
import { DetailList, Photo } from './Elements';

function SectionTitle({ children }: { children: string }) {
  return (
    <h2>
      <span aria-hidden="true" />
      {children}
    </h2>
  );
}

// Screen and print use this same sheet, keeping every visible fact consistent.
export function PrintProfile() {
  return (
    <article className="biodata-sheet" aria-label={`${p.name}'s matrimonial biodata`}>
      <div className="auspicious-header" aria-label="Shri Ganeshaya Namah">
        <span aria-hidden="true">◆</span>
        <span>Shri Ganeshaya Namah</span>
        <span aria-hidden="true">◆</span>
      </div>

      <header className="profile-header">
        <div className="identity">
          <p className="document-label">Matrimonial Biodata</p>
          <h1>{p.name}</h1>
          <p className="headline">
            Software Development Engineer 3
            <span>GreyOrange Robotics · Gurugram</span>
          </p>
        </div>
        <Photo />
      </header>

      <div className="primary-grid">
        <section className="biodata-section">
          <SectionTitle>Personal Details</SectionTitle>
          <DetailList items={p.personal} />
        </section>

        <div className="right-column">
          <section className="biodata-section">
            <SectionTitle>Education</SectionTitle>
            <DetailList items={p.education} />
          </section>

          <section className="biodata-section">
            <SectionTitle>Professional Details</SectionTitle>
            <DetailList items={p.profession} />
          </section>
        </div>
      </div>

      <section className="biodata-section family-section">
        <SectionTitle>Family Details</SectionTitle>
        <div className="family-grid">
          {p.family.map((member) => (
            <div className="family-member" key={member.relation}>
              <span>{member.relation}</span>
              <strong>{member.name}</strong>
              <small>{member.detail}</small>
            </div>
          ))}
        </div>
      </section>

      <div className="narrative-grid">
        <section className="biodata-section narrative-section">
          <SectionTitle>About Me</SectionTitle>
          <p>{p.about}</p>
        </section>
        <section className="biodata-section narrative-section">
          <SectionTitle>Partner Preference</SectionTitle>
          <p>{p.partnerPreference}</p>
        </section>
      </div>

      <footer className="contact-section">
        <SectionTitle>Contact Details</SectionTitle>
        <DetailList items={p.contact} />
        <div className="web-presence" aria-label="Online profiles">
          {p.webPresence.map((item) => (
            <a key={item.label} href={item.href} target="_blank" rel="noreferrer">
              <span>{item.label}</span>
              {item.value}
            </a>
          ))}
        </div>
      </footer>
    </article>
  );
}
