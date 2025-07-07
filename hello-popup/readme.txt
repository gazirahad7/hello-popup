=== Hello Popup ===

Contributors: gazirahad7
Tags: popup, alert, modal, notification, marketing
Requires at least: 5.2
Tested up to: 6.8
Requires PHP: 7.2
Stable tag: 1.0.2
License: GPLv3
License URI: https://www.gnu.org/licenses/gpl-3.0.html

A lightweight and customizable popup plugin to engage visitors, highlight offers, and boost conversions with ease.

== Description ==

**Hello Popup** is a modern, minimal, and powerful popup plugin for WordPress. Display announcements, CTAs, marketing banners, or custom messages anywhere on your site — with full control from an intuitive admin panel.

Whether you're looking to increase engagement, promote offers, or guide users, Hello Popup helps you do it beautifully.

== Installation ==

1. Upload the plugin files to the `/wp-content/plugins/hello-popup` directory, or install the plugin through the WordPress admin screen.
2. Activate the plugin through the "Plugins" screen in WordPress.
3. Go to "Hello Popup" in the WordPress admin menu to configure your settings.

== Frequently Asked Questions ==

= How do I enable the popup? =
Go to "Hello Popup" settings and check the "Enable Popup" option.

= Can I show the popup automatically on page load? =
Yes, enable the “Auto Popup on Page Load” toggle and set a delay time.

= Can I show the popup only on specific pages? =
Yes, you can select specific pages from the admin settings panel where the popup should appear.

= Does this plugin store cookies or local data? =
It uses localStorage to remember if the user has closed the popup, based on the expiry duration you set.

== Features ==

🎯 **General Features**
- Enable or disable popup globally
- Custom delay before showing popup (ms)
- Set expiry duration to control reappearance
- Upload custom image for popup
- Customize title and message content
- Add CTA button with custom text, link, and color
- Use shortcodes inside the popup content
- Customize popup close button icon color 

📄 **Page Targeting**
- Select specific pages for popup display
- Home page selected by default
- Popup shows only on the selected pages

🚀 **Auto Show & Manual Trigger**
- Automatically display popup after page load delay
- Disable auto-popup when needed
- Trigger popup manually using `.hp-show-popup-btn` class on buttons or links

🔒 **Popup Memory**
- LocalStorage-based memory to prevent repeated popup during expiry time
- Respects expiry setting (in hours) before re-displaying

⚙️ **Admin Panel**
- User-friendly admin settings under "Hello Popup"
- AJAX-based save functionality (no page reload)
- Nonce validation for secure save operations
- Input sanitization and validation for all fields

✨ **UI/UX**
- Smooth fade-in and fade-out animation
- Fully responsive on all devices
- Popup closes on overlay or close (×) icon click

🌐 **Translation Ready**
- Supports localization via `hello-popup` text domain

== Screenshots ==

1. Popup preview on the frontend
2. Popup settings page in admin dashboard
3. Page selection option for popup display

== Changelog ==

= 1.0.0 =
* Initial release with full popup settings, page targeting, shortcode support, and fade animations.

