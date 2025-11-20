'use client';
import ThemeSwitch from 'components/themeSwitch';

import { FaBluesky, FaSquareXTwitter } from 'react-icons/fa6';
import { SiPixiv } from 'react-icons/si';

interface WorkItem {
  company: string;
  project: string;
}

interface WorkRecord {
  [year: string]: WorkItem[];
}

const work: WorkRecord = {
  "2025": [
    {
      "company": "カバー株式会社 (COVER Corp)",
      "project": "Kurukuru Cruise",
    }
  ],
  "2024": [
    {
      "company": "ぶいすぽっ! (VSPO!)",
      "project": "Narin Mikure membership illustration",
    },
    {
      "company": "いちプロ (FIRST STAGE PRODUCTION EN)",
      "project": "ネマ・フィルナ situation voice illustration",
    }
  ]
  
}

export default function App() {

  return (
    <>
      <header>
        <h1 className="sr-only">fcjfior - Illustrator</h1>
        <nav className="sr-only">
          <a href="#about">About</a>
          <a href="#links">Links</a>
          <a href="#work">Portfolio</a>
        </nav>
      </header>
      <main>

        <section id="about" aria-label="About">
          <img className="avatar" src="img/avatar-transparent.png" alt="avatar" draggable='false'/>
          <p>Contact: fcjfior@gmail.com</p>
          <p className='comment'>EN ◎ | CN ◎ | JP ○ </p>
          <p className='comment'>{"(Currently not considering individual requests)"}</p>

        </section>

        <section id="links" className='unselectable' aria-label="Links">
          <a href={'https://twitter.com/fcjfior'} target="_blank">
            <FaSquareXTwitter className='icon' />
          </a>
          <a href={'https://bsky.app/profile/fcjfior.bsky.social'} target="_blank">
            <FaBluesky className='icon' />
          </a>
          <a href={'https://www.pixiv.net/en/users/107401557'} target="_blank">
            <SiPixiv className='icon' />
          </a>
          <a href={'https://vgen.co/fcjfior'} target="_blank">
            <img className='icon icon-filter' src="icon/vgen-badge-outline.png" alt="vgen" />
          </a>
        </section>


        <section id="work">
          <h2 className="sr-only" aria-label="Work">Work</h2>
          {Object.entries(work).map(([year, items], index) => (
          <div key={index}>
            <h3 className='comment'>{year}</h3>
            <ul>
              {items.map((item, index) => (
                <li className='work-item' key={index}>
                  <strong>{item.company}</strong> - {item.project}
                </li>
              ))}
            </ul>
          </div>
          ))}
        </section>

      </main>
      
      <footer className='comment'>
        <p>© <span>2024-{new Date().getFullYear()}</span> fcjfior. All rights reserved.</p>
      </footer>

      <ThemeSwitch className='theme-icon'/>
      
    </>
  );
}