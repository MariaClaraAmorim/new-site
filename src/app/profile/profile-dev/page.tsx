'use client';

import css from "./style.module.css";

export default function Profile()  {
  return (
    <>

      <div className={css.codeItem}>
        <div>
          <div data-aos={css.zoomIn}>
            <span className={css.comment}></span>
            <span className={css.purple}>.infos</span> {"\u007B"}
            <div>
              nome: <span className={css.blue}>Maria Clara;</span>
            </div>
            <div>
              sobrenome: <span className={css.blue}>Amorim;</span>
            </div>
            <div>
              idade: <span className={css.blue}>20 anos;</span>
            </div>
            {"\u007D"}
          </div>

          <div data-aos={css.zoomIn}>
            <span className={css.comment}></span>
            <span className={css.purple}>.formação</span> {"\u007B"}
            <div>
              curso: <span className={css.blue}>Técnico em Informática;</span>
            </div>
            <div>
              local: <span className={css.blue}>IFBA;</span>
            </div>
            {"\u007D"}
          </div>
        
          <div data-aos={css.zoomIn}>
            <span className={css.comment}></span>
            <span className={css.purple}>.experiência</span> {"\u007B"}
            <div>
              função: <span className={css.blue}>Dev Front-end;</span>
            </div>
            <div>
              local: <span className={css.blue}>Dantas Eletro;</span>
            </div>
            {"\u007D"}
          </div>

          <div data-aos={css.zoomIn}>
            <span className={css.comment}></span>
            <span className={css.purple}>.conhecimentos</span> {"\u007B"}
            <div>
              front-end:{" "}
              <span className={css.blue}>
                HTML, CSS, JavaScript, ReactJS, TypeScript;
              </span>
            </div>
            <div>
              back-end: <span className={css.blue}>PHP, MySQL;</span>
            </div>
            {"\u007D"}
          </div>
        </div>
        </div>
    </>
  );
}
