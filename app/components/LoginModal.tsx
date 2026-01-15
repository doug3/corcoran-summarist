'use client';

export default function Login() {

    const closeModal = () => {
        const modalRoot = document.getElementById("modal-root");
        const loginModal = document.getElementById("login-modal");
        if (modalRoot && loginModal) {
            modalRoot.classList.remove("active");
            loginModal.classList.remove("active");
        }   
    }


  return (
    <div id="login-modal" className="login-modal" onClick={closeModal}>
    <h1>Login Here</h1>
    </div>
  );
}

