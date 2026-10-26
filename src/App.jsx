import { Fragment, useEffect, useState } from 'react';
import { collapsedJobStart, languageLevels, resumeIdentity, translations } from './content.js';
import { githubIcon, gitlabIcon, linkedinIcon } from './icons.js';
import { buildAtsResumePdf } from './pdf.js';
import { downloadResumeTxt } from './txt.js';

function JobArticle({ job, extraClass }) {
    return (
        <article className={extraClass ? `job-item ${extraClass}` : 'job-item'}>
            <div className="job-year">{job.year}</div>
            <h3 className="job-title">{job.title}</h3>
            <p className="job-company">{job.company}</p>
            {job.descriptions.map((desc, index) => (
                <Fragment key={`${job.company}-${index}`}>
                    {index > 0 ? <div className="job-description-spacer" /> : null}
                    <p className="job-description">{desc}</p>
                </Fragment>
            ))}
        </article>
    );
}

function ContactItem({ icon, svg, value, href }) {
    return (
        <div className="contact-item">
            {svg ? (
                <span className="icon" dangerouslySetInnerHTML={{ __html: svg }} />
            ) : (
                <span className="icon">{icon}</span>
            )}
            {' '}
            {href ? (
                <a href={href} {...(href.startsWith('mailto:') ? {} : { target: '_blank', rel: 'noopener noreferrer' })}>
                    {value}
                </a>
            ) : value}
        </div>
    );
}

export default function App() {
    const [language, setLanguage] = useState('en');
    const [compressed, setCompressed] = useState(true);
    const copy = translations[language];
    const recentJobs = copy.jobItems.slice(0, collapsedJobStart);
    const olderJobs = copy.jobItems.slice(collapsedJobStart);

    useEffect(() => {
        document.documentElement.lang = language;
    }, [language]);

    const downloadPdf = () => {
        const root = document.querySelector('.content-wrapper');
        const suffix = language === 'es' ? '_ES' : '_EN';
        buildAtsResumePdf(root).save(`Kevin_Campos_Resume_${suffix}_${new Date().getFullYear()}.pdf`);
    };

    return (
        <>
            <div id="top-controls">
                <div id="language-selector">
                    <button
                        id="lang-en"
                        type="button"
                        className={language === 'en' ? 'lang-btn active' : 'lang-btn'}
                        title="Flag of the United States"
                        onClick={() => setLanguage('en')}
                    >
                        <span className="flag">🇺🇸</span>
                    </button>
                    <button
                        id="lang-es"
                        type="button"
                        className={language === 'es' ? 'lang-btn active' : 'lang-btn'}
                        title="Flag of Spain"
                        onClick={() => setLanguage('es')}
                    >
                        <span className="flag">🇪🇸</span>
                    </button>
                </div>
                <div id="download-container">
                    <button id="downloadBtn" type="button" onClick={downloadPdf}>{copy.downloadBtn}</button>
                    <button id="downloadTxtBtn" type="button" onClick={() => downloadResumeTxt(language, compressed)}>
                        {copy.downloadTxtBtn}
                    </button>
                </div>
            </div>

            <main className="content-wrapper">
                <header className="header">
                    <h1>{resumeIdentity.name}</h1>
                    <p className="subtitle">{copy.subtitle}</p>
                </header>

                <section className="profile">
                    {copy.profile.map(paragraph => (
                        <p key={paragraph}>{paragraph}</p>
                    ))}
                </section>

                <div className="separator" />

                <div className="main-content">
                    <aside className="left-column">
                        <section className="contact">
                            <h2>{copy.contact}</h2>
                            <ContactItem icon="📞" value={resumeIdentity.phone} />
                            <ContactItem icon="✉️" value={resumeIdentity.email} href={`mailto:${resumeIdentity.email}`} />
                            <ContactItem icon="📍" value={resumeIdentity.location} />
                            <ContactItem svg={githubIcon} value="github.com/mravenec" href={resumeIdentity.github} />
                            <ContactItem svg={gitlabIcon} value="gitlab.com/kcamposgo90" href={resumeIdentity.gitlab} />
                            <ContactItem svg={linkedinIcon} value="linkedin.com/in/kevincamposgonzalez" href={resumeIdentity.linkedin} />
                        </section>

                        <section className="education">
                            <h2>{copy.education}</h2>
                            {copy.educationItems.map(item => (
                                <article className="education-item" key={`${item.year}-${item.title}`}>
                                    <div className="education-year">{item.year}</div>
                                    <h3 className="education-title">{item.title}</h3>
                                    <p className="education-school">{item.school}</p>
                                </article>
                            ))}
                        </section>

                        <section className="skills">
                            <h2>{copy.technicalSkills}</h2>
                            <div className="skills-section">
                                {copy.skillCategories.map(category => (
                                    <div className="skill-category" key={category.header}>
                                        <h3 className="skills-subheader">{category.header}</h3>
                                        <p className="skills-list">{category.list}</p>
                                    </div>
                                ))}
                            </div>
                        </section>
                    </aside>

                    <section className="right-column">
                        <section className="experience">
                            <h2>{copy.workExperience}</h2>
                            {recentJobs.map(job => (
                                <JobArticle key={`${job.company}-${job.year}`} job={job} />
                            ))}
                            <div id="experience-toggle-container" className={compressed ? 'compressed-mode' : undefined}>
                                <button
                                    id="experience-toggle-header"
                                    className={compressed ? 'toggle-btn collapsed' : 'toggle-btn'}
                                    type="button"
                                    onClick={() => setCompressed(open => !open)}
                                >
                                    <span className="toggle-icon">{compressed ? '▶' : '▼'}</span>
                                </button>
                                <div id="original-jobs-group" style={{ display: compressed ? 'none' : 'block' }}>
                                    {olderJobs.map(job => (
                                        <JobArticle key={`${job.company}-${job.year}`} job={job} />
                                    ))}
                                </div>
                                <div id="summary-job-group" style={{ display: compressed ? 'block' : 'none' }}>
                                    <JobArticle job={copy.summaryJob} extraClass="summary-item" />
                                </div>
                            </div>
                        </section>
                    </section>
                </div>

                <section className="ai-experience">
                    <h2>{copy.generativeAI}</h2>
                    {copy.aiDescription.map(paragraph => (
                        <p className="ai-description" key={paragraph}>{paragraph}</p>
                    ))}
                </section>

                <section className="languages">
                    <h2>{copy.languages}</h2>
                    <div className="languages-horizontal">
                        {copy.languageNames.map((name, index) => (
                            <div className="language-block" key={name}>
                                <div className="language-bar-container">
                                    <div className="language-bar" style={{ width: `${languageLevels[index] || 0}%` }} />
                                </div>
                                <div className="language-name">{name}</div>
                            </div>
                        ))}
                    </div>
                </section>

                <div className="separator" />
            </main>
        </>
    );
}
