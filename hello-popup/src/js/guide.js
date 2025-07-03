import { driver } from 'driver.js';
import 'driver.js/dist/driver.css';

const driverInstance = driver({
  showProgress: true,
  allowClose: true,
  nextBtnText: 'Next',
  prevBtnText: 'Back',
  doneBtnText: 'Finish',
  animate: true,
    

  steps: [
    {
      element: '#enable-toggle',
      popover: {
        title: 'Enable Popup',
        description: 'Turn this switch on to enable the popup globally.',
      },
    },

    {
      element: '#hello_popup_title',
      popover: {
        title: 'Popup Title',
        description: 'Set the title for your popup. This is the main heading.',
      },
    },
    {
      element: '#hello_popup_message',
      popover: {
        title: 'Popup Description',
        description: 'Set the description text for your popup.',
      },
    },
    {
      element: '#popup_image_button',
      popover: {
        title: 'Upload Image',
        description: 'Upload or change the popup banner image here.',
      },
    },
    {
      element: '#hello_popup_cta_text',
      popover: {
        title: 'CTA Button Title',
        description: 'Set the text shown on your popup CTA button.',
      },
    },
    {
        element: '#hello_popup_cta_url',
        popover: {
            title: 'CTA Button Link',
            description: 'Set the URL where the CTA button will redirect users.',
        },
        },
    {
        element: '#hello_popup_cta_color',
        popover: {
            title: 'Background Color',
            description: 'Set the background color for your popup CTA button.',
        },
    },
    {
      element: '#hello_popup_shortcode',
      popover: {
        title: 'Shortcode',
        description: 'Add any valid shortcode to display the popup.',
      },
    },

    // for showing the popup on specific pages
    {
      element: '.hp-multiselect-wrapper',
      popover: {
        title: 'Show on Specific Pages',
        description: 'Select the pages where you want the popup to appear.',
      },
    },

    {
      element: '#hello_popup_delay',
      popover: {
        title: 'Popup Delay',
        description: 'Set the delay (in milliseconds) before the popup appears.',
      },
    },
    {
      element: '#hello_popup_expiry',
      popover: {
        title: 'Popup Expiry',
        description: 'Set how long (in hours) to hide the popup after it is closed.',
      },
    },

    {
      element: '#popup_trigger_class',
      popover: {
        title: 'Button Trigger',
        description: 'Add  this class to any button to trigger the popup.',
      },
    },
       

    {
      element: '#save-settings',
      popover: {
        title: 'Update Settings',
        description: 'Click here to save your changes.',
      },
    },
  ],
});

// Start the tour on button click
document.getElementById('start-tour-btn')?.addEventListener('click', () => {
  driverInstance.drive(); 
});


// Automatically start tour if URL contains `guide=1`
const urlParams = new URLSearchParams(window.location.search);

if (urlParams.get('guide') === '1') {
  window.addEventListener('load', () => {
    setTimeout(() => {
      driverInstance.drive();
    }, 500); 
  });
}
