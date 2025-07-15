import "./../css/admin.css";

/*
jQuery(document).ready(function ($) {
    if (typeof wp !== 'undefined' && wp.codeEditor) {
        const settings = wp.codeEditor.defaultSettings ? _.clone(wp.codeEditor.defaultSettings) : {};
        settings.codemirror = Object.assign({}, settings.codemirror, {
            mode: 'css',
            lineNumbers: true,
            indentUnit: 2,
            tabSize: 2,
        });

    window.helloPopupCssEditor = wp.codeEditor.initialize('hello_popup_custom_css', settings);
    }
});


*/

document?.addEventListener('DOMContentLoaded', () => {

if (typeof wp !== 'undefined' && wp.codeEditor) {
  const cssTextarea = document.getElementById('hello_popup_custom_css');
  if (!cssTextarea) return;

  const settings = wp.codeEditor.defaultSettings ? _.clone(wp.codeEditor.defaultSettings) : {};
  settings.codemirror = Object.assign({}, settings.codemirror, {
    mode: 'css',
    lineNumbers: true,
    indentUnit: 2,
    tabSize: 2,
  });

  const editorWrapper = wp.codeEditor.initialize(cssTextarea, settings);

  // ✅ Make sure it's stored globally so you can call .save() later
  window.helloPopupCssEditor = editorWrapper.codemirror;
}


    //
    const form = document.getElementById('hello-popup-settings-form');
    const messageBox = document.getElementById('hello-popup-settings-message');
    if (!form) return;

    const cssField = document.getElementById('hello_popup_custom_css');
    const MAX_LENGTH = 10000;

    form?.addEventListener('submit', async (e) => {
        e.preventDefault();
        messageBox.textContent = 'Saving...';
        messageBox.style.color = 'gray';
        // ✅ Sync CodeMirror content back to textarea
    if (window.helloPopupCssEditor && typeof window.helloPopupCssEditor.save === 'function') {
    window.helloPopupCssEditor.save(); // Proper sync
  }

        if (cssField && cssField.value.length > MAX_LENGTH) {
  
          showToast(`Custom CSS must be less than ${MAX_LENGTH} characters. Currently: ${cssField.value.length}`, 'error');
          cssField.focus();
          return false;
        }

 
        const formData = new FormData(form);
     //  console.log('Form Data:', Object.fromEntries(formData.entries()));      
        try {
            const response = await fetch(ajaxurl, {
                method: 'POST',
                body: formData,
                credentials: 'same-origin'
            });
            const result = await response.json();

            if (result.success) {
                messageBox.textContent = 'Settings saved successfully!';
                messageBox.style.color = 'green';
                showToast('Settings saved successfully!', 'success');
            } else {
                messageBox.textContent = result?.data?.message || 'Failed to save settings.';
                messageBox.style.color = 'red';
                showToast(result?.data?.message || 'Failed to save settings.', 'error');
            }
        } catch (error) {
            console.error('AJAX error:', error);
            messageBox.textContent = 'An unexpected error occurred.';
            messageBox.style.color = 'red';

            showToast('An unexpected error occurred.', 'error');
        }
        setTimeout(() => {
            messageBox.textContent = '';
        }, 3000);
    });


// Function to show toast notifications
function showToast(message, type = 'success') {
  const container = document.getElementById('hello-toast-container');
  if (!container) return;

  const toast = document.createElement('div');
  toast.className = 'hello-toast';

  if (type === 'error') {
    toast.style.backgroundColor = '#dc3545';
  } else if (type === 'success') {
    toast.style.backgroundColor = '#28a745';
  } else if (type === 'info') {
    toast.style.backgroundColor = '#007bff';
  }

  toast.textContent = message;
  container.appendChild(toast);

  setTimeout(() => {
    toast.remove();
  }, 3000);
}

});





document?.addEventListener("DOMContentLoaded", () => {
    const selectBtn = document.getElementById("popup_image_button");
    const removeBtn = document.getElementById("popup_image_remove");
    const previewImg = document.getElementById("popup_image_preview");
    const hiddenInput = document.getElementById("hello_popup_image");

    let frame;

    selectBtn?.addEventListener("click", () => {
        if (frame) {
            frame.open();
            return;
        }

        frame = wp.media({
            title: "Select or Upload Popup Image",
            button: { text: "Use this image" },
            multiple: false
        });

        frame.on("select", () => {
            const attachment = frame.state().get("selection").first().toJSON();
            previewImg.src = attachment.url;
            previewImg.style.display = "block";
            removeBtn.style.display = "block";
            hiddenInput.value = attachment.url;
            selectBtn.textContent = "Change Image";
        });

        frame.open();
    });

    removeBtn?.addEventListener("click", () => {
        previewImg.src = "";
        previewImg.style.display = "none";
        removeBtn.style.display = "none";
        hiddenInput.value = "";
        selectBtn.textContent = "Select Image";
    });

    // copy trigger class functionality
      const btn = document.getElementById("copy_trigger_class_btn");
  const input = document.getElementById("popup_trigger_class");

  if (btn && input) {
    btn.addEventListener("click", function (e) {
      input.select();
      input.setSelectionRange(0, 99999);
      document.execCommand("copy");

      const originalText = btn.textContent;
      btn.textContent = "Copied!";
      setTimeout(() => {
        btn.textContent = originalText;
      }, 1500);
    });
  }

  // remove localStorage item on button click
   const autoShowCheckbox = document.getElementById('hello_popup_auto_show');

    if (autoShowCheckbox) {
      autoShowCheckbox.addEventListener('change', () => {
        if (!autoShowCheckbox.checked) {
          // Remove localStorage key if auto show is turned off
          localStorage.removeItem('helloPopupClosedAt');
        }
      });
    }
});


//


document.addEventListener('DOMContentLoaded', () => {
  const saveBtn = document?.getElementById('save-settings');
   if (!saveBtn) return;
  let lastScrollY = window?.scrollY;

  window?.addEventListener('scroll', () => {
    const currentScrollY = window.scrollY;

    if (currentScrollY < lastScrollY && currentScrollY > 300) {
      // Scrolling up
      saveBtn.classList.add('sticky');
    } else if (currentScrollY > lastScrollY || currentScrollY < 200) {
      // Scrolling down or too high
      saveBtn.classList.remove('sticky');
    }

    lastScrollY = currentScrollY;
  });
});

