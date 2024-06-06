import React from "react";

const MenuIcon: React.FC = () => {
  return (
    <div className="background">
      <div className="menu__icon">
        <span></span>
        <span></span>
        <span></span>
      </div>

      <style jsx>{`
        /* <reset-style> ============================ */
        button {
          border: none;
          background: none;
          padding: 0;
          margin: 0;
          cursor: pointer;
          font-family: inherit;
        }
        /* ============================ */
        /* <style for bg> ======== */
        .background {
          border-radius: 16px;
          border: 1px solid transparent;
          background: transparent;
          mix-blend-mode: luminosity;
          box-shadow: 0px 0px 0px 1px rgba(0, 0, 0, 0.2);
          backdrop-filter: blur(15px);
          width: 50px; /* Adjust the width */
          height: 50px; /* Adjust the height */
          display: flex;
          justify-content: center;
          align-items: center;
        }

        /* <style for menu__icon> ======== */
        .menu__icon {
          width: 32px;
          height: 32px;
          padding: 4px;
        }

        .menu__icon span {
          display: block;
          width: 100%;
          height: 0.125rem;
          border-radius: 2px;
          background-color: rgb(0, 122, 255);
          box-shadow: 0 0.5px 2px 0 hsla(0, 0%, 0%, 0.2);
          transition: background-color 0.4s;
          position: relative;
        }

        .menu__icon span + span {
          margin-top: 0.375rem;
        }

        .menu__icon span:nth-child(1) {
          animation: ease 0.8s menu-icon-top-2 forwards;
        }

        .menu__icon span:nth-child(2) {
          animation: ease 0.8s menu-icon-scaled-2 forwards;
        }

        .menu__icon span:nth-child(3) {
          animation: ease 0.8s menu-icon-bottom-2 forwards;
        }

        .menu__icon:hover span:nth-child(1) {
          animation: ease 0.8s menu-icon-top forwards;
        }

        .menu__icon:hover span:nth-child(2) {
          animation: ease 0.8s menu-icon-scaled forwards;
        }

        .menu__icon:hover span:nth-child(3) {
          animation: ease 0.8s menu-icon-bottom forwards;
          background-color: rgb(255, 59, 48);
        }

        @keyframes menu-icon-top {
          0% {
            top: 0;
            transform: rotate(0);
          }

          50% {
            top: 0.5rem;
            transform: rotate(0);
          }

          100% {
            top: 0.5rem;
            transform: rotate(45deg);
          }
        }

        @keyframes menu-icon-top-2 {
          0% {
            top: 0.5rem;
            transform: rotate(45deg);
          }

          50% {
            top: 0.5rem;
            transform: rotate(0);
          }

          100% {
            top: 0;
            transform: rotate(0);
          }
        }

        @keyframes menu-icon-bottom {
          0% {
            bottom: 0;
            transform: rotate(0);
          }

          50% {
            bottom: 0.5rem;
            transform: rotate(0);
          }

          100% {
            bottom: 0.5rem;
            transform: rotate(135deg);
          }
        }

        @keyframes menu-icon-bottom-2 {
          0% {
            bottom: 0.5rem;
            transform: rotate(135deg);
          }

          50% {
            bottom: 0.5rem;
            transform: rotate(0);
          }

          100% {
            bottom: 0;
            transform: rotate(0);
          }
        }

        @keyframes menu-icon-scaled {
          50% {
            transform: scale(0);
          }

          100% {
            transform: scale(0);
          }
        }

        @keyframes menu-icon-scaled-2 {
          0% {
            transform: scale(0);
          }

          50% {
            transform: scale(0);
          }

          100% {
            transform: scale(1);
          }
        }
      `}</style>
    </div>
  );
};

export default MenuIcon;
