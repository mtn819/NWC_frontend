import React from 'react';
import styles from './PDFViewer.module.css';
import { Link, useParams, useHistory } from 'react-router-dom';
import { Document, Page } from 'react-pdf/dist/esm/entry.webpack';
import VARIABLES from '../../config/.env';
import samplePDF from './res/sample.pdf';

function PDFViewer() {
  // will be made const when... i figure out how useParams works.
  // Black_Womens_Plan_8cbb565e0e.pdf
  let { pdffile } = useParams();
  const history = useHistory();

  return (
    <main className={styles.pdf}>
      <p className={styles.pdf__back} onClick={() => history.goBack()}>
        <div className={styles.pdf__larr}>&larr;</div> Back To Previous Page
      </p>
      <Document
        className={styles.pdf__document}
        file={`${VARIABLES.fetchBaseUrl}/uploads/${pdffile}`}
      >
        <Page pageNumber={1} />
        <Page pageNumber={1} />
      </Document>
    </main>
  );
}

export default PDFViewer;
