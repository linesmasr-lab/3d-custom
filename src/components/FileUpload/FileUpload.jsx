import { useId, useState } from 'react';

// A file input styled as a drop area that shows the chosen file's name.
function FileUpload({ name, label, required = false }) {
  const id = useId();
  const [fileName, setFileName] = useState('');

  return (
    <div className="form-field">
      <span className="form-label" id={`${id}-label`}>
        {label} {required && <span className="form-hint">(required)</span>}
      </span>
      <label className="upload">
        <input
          type="file"
          name={name}
          aria-labelledby={`${id}-label`}
          required={required}
          onChange={(event) => setFileName(event.target.files?.[0]?.name ?? '')}
        />
        <svg
          className="upload__icon"
          width="22"
          height="22"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.6"
          aria-hidden="true"
        >
          <path d="M12 16V4M7 9l5-5 5 5M4 16v3a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1v-3" />
        </svg>
        <span className="upload__text">
          <span>Add a File</span>
          <span className="upload__name">{fileName || 'No file chosen'}</span>
        </span>
      </label>
    </div>
  );
}

export default FileUpload;
