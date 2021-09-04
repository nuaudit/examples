import React, { useEffect, useState } from 'react';
import { Record as NuauditRecord } from 'nuaudit-browser-autogen';
import Nuaudit from 'nuaudit-browser-sdk';
import './App.css';

/* 
* WARNING! 
* Embedding an API key directly in frontend code will allow users
* to view and copy the key from their browser.
* The API key should be provided to the browser via secure mechanism.
*/

const API_KEY = "API_KEY_SECRET";
const ORGANIZATION_ID = "ORGANIZATION_ID";
const TRAIL_ID = "TRAIL_ID";

function App() {
  const [status, setStatus] = useState<string>("Initialising...")
  const [records, setRecords] = useState<NuauditRecord[]>([])

  useEffect(() => {
    (async () => {
      setStatus("Loading...")
      try {
        const nuaudit = new Nuaudit(
          API_KEY,
          ORGANIZATION_ID,
          TRAIL_ID
        )
        const records = await nuaudit.listRecords()
        
        setRecords(records)
        setStatus("Loaded!")
      } catch(e) {
        setStatus(`Error! ${JSON.stringify(e)}`)
      }
    })()
  }, [])
  
  return (
    <>
      <h1>Nuaudit Browser SDK Example</h1>
      <p><strong>Status:</strong> {status}</p>
      <h2>Records</h2>
      <ul>
        {records.map(record => (
          <>
            <li>
              <strong>{record.description}</strong> {JSON.stringify(record.resourceRecord.data)}
            </li>
            <br />
          </>
        ))}
      </ul>
      
    </>
  );
}

export default App;
