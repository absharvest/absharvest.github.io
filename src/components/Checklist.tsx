'use client';

import { useEffect, useState } from 'react';

type Check = { id: string; title: string; text: string };
type Props = { checks: Check[]; progress: string; completeAll: string; reset: string; privacy: string };

const KEY = 'absHiveChecklist';
const TIME_KEY = 'absHiveChecklistTime';
const ONE_HOUR = 60 * 60 * 1000;

/** Hive inspection checklist. Saved only in this browser, cleared after one hour. */
export function Checklist({ checks, progress, completeAll, reset, privacy }: Props) {
  const [done, setDone] = useState<Record<string, boolean>>({});

  useEffect(() => {
    try {
      const saved = Number(localStorage.getItem(TIME_KEY) || 0);
      if (saved && Date.now() - saved < ONE_HOUR) setDone(JSON.parse(localStorage.getItem(KEY) || '{}'));
      else { localStorage.removeItem(KEY); localStorage.removeItem(TIME_KEY); }
    } catch {}
  }, []);

  const save = (next: Record<string, boolean>) => {
    setDone(next);
    try {
      localStorage.setItem(KEY, JSON.stringify(next));
      localStorage.setItem(TIME_KEY, String(Date.now()));
    } catch {}
  };

  const count = checks.filter((c) => done[c.id]).length;
  const pct = Math.round((count / checks.length) * 100);

  return (
    <div className="check">
      <div className="check-progress" aria-live="polite">
        <span>{progress.replace('{c}', String(count)).replace('{n}', String(checks.length))}</span>
        <div className="check-track" role="progressbar" aria-valuemin={0} aria-valuemax={checks.length} aria-valuenow={count}>
          <div style={{ width: `${pct}%` }} />
        </div>
      </div>
      <ol className="check-list">
        {checks.map((c, i) => (
          <li key={c.id}>
            <label className="check-item">
              <input type="checkbox" checked={!!done[c.id]} onChange={(e) => save({ ...done, [c.id]: e.target.checked })} />
              <span className="check-box" aria-hidden="true" />
              <span className="check-num" aria-hidden="true">{String(i + 1).padStart(2, '0')}</span>
              <span className="check-text">
                <strong>{c.title}</strong>
                {c.text}
              </span>
            </label>
          </li>
        ))}
      </ol>
      <div className="check-actions">
        <button type="button" className="btn btn-dark" onClick={() => save(Object.fromEntries(checks.map((c) => [c.id, true])))}>{completeAll}</button>
        <button type="button" className="btn btn-line" onClick={() => save({})}>{reset}</button>
      </div>
      <p className="check-note">{privacy}</p>
    </div>
  );
}
