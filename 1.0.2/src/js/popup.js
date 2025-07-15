import "../css/popup.css";


 document?.addEventListener("DOMContentLoaded",  () =>{


  const popup = document.getElementById("hp-modal");
  if (!popup || !HelloPopupData?.enabled) return;

 // console.log("HelloPopupData:", HelloPopupData);

  const currentPageId = Number (HelloPopupData?.current_page_id); 
const selectedPages = (HelloPopupData?.selected_pages || []).map(Number);

if (!selectedPages.includes(currentPageId)) return; 
  

  const delay = parseInt(popup.getAttribute("data-delay") || HelloPopupData?.delay || 1500);
  const expiryHours = parseInt(HelloPopupData?.popup_expiry || 24);
  const expiryMs = expiryHours * 60 * 60 * 1000;
  const lastClosed = localStorage.getItem("helloPopupClosedAt");


const showPopup = () => {
  popup.classList.add("hp-show");
};

const closePopup = () => {
  popup.classList.remove("hp-show");
  localStorage.setItem("helloPopupClosedAt", Date.now().toString());
};


  // ✅ Only auto show if enabled and not expired
  if (HelloPopupData.auto_show === "1") {
    
    let shouldShow = true;

    if (lastClosed) {
      const now = Date.now();
      const diff = now - parseInt(lastClosed, 10);
      if (diff < expiryMs) {
        shouldShow = false;
      }
    }

    if (shouldShow) {
         setTimeout(showPopup, delay);

    }
  }

  // Manual trigger (skip expiry check)
  document.querySelectorAll(".hp-show-popup-btn").forEach((btn) => {
    btn?.addEventListener("click", () => {
      showPopup();
    });
  });

  // Close handlers
  popup.querySelector(".hp-close")?.addEventListener("click", closePopup);
  popup.querySelector(".hp-overlay")?.addEventListener("click", closePopup);

});



  

