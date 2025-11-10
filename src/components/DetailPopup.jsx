import React from "react";

const DetailPopup = ({ selected, onClose }) => {
  if (!selected) return null;

  return (
    <div
      className="popup-overlay"
      onClick={onClose}
      style={{
        position: "fixed",
        top: 0, left: 0, right: 0, bottom: 0,
        background: "rgba(0,0,0,0.5)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        zIndex: 1000
      }}
    >
      <div
        className="popup"
        onClick={(e) => e.stopPropagation()}
        style={{
          background: "rgba(0,0,0,0.5)",
          padding: "2rem",
          borderRadius: "12px",
          maxWidth: "500px",
          width: "90%",
          boxShadow: "0 0 20px rgba(0,0,0,0.5)",
          position: "relative"
        }}
      >
        <button
          onClick={onClose}
          style={{
            position: "absolute",
            top: "1rem",
            right: "1rem",
            background: "none",
            border: "none",
            fontSize: "1.2rem",
            cursor: "pointer"
          }}
        >
          ×
        </button>
        <img
          className="detail-image"
          src={selected.fullImage}
          alt={selected.title}
          style={{ width: "100%", marginBottom: "1rem" }}
        />
        <h2 className="detail-title">{selected.title}</h2>
        <p className="detail-description">{selected.description}</p>
        {selected.dimensions && (
          <p className="detail-dimensions">{selected.dimensions}</p>
        )}
      </div>
    </div>
  );
};

export default DetailPopup;
