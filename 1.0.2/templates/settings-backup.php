<?php

    if (! defined("ABSPATH")) {
        exit;
    }

?>

<div class="wrap">
    <h1>
        <?php esc_html_e('HelloPopup Settings', 'hello-popup'); ?>
    </h1>
    <form id="hello-popup-settings-form">
        <?php wp_nonce_field('hello_popup_settings_nonce', 'hello_popup_settings_nonce_field'); ?>
        <input type="hidden" name="action" value="save_hello_popup_settings">

        <table class="form-table">
            <tr>
                <th scope="row"><?php esc_html_e('Enable Popup', 'hello-popup'); ?></th>
                <td>
                    <input type="checkbox" name="hello_popup_enabled" value="1"
                        <?php checked(1, get_option('hello_popup_enabled', 1)); ?>>
                </td>
            </tr>

            <tr>
  <th scope="row">Auto Show After Page Load</th>
  <td>
    <label>
      <input type="checkbox" name="hello_popup_auto_show" value="1" <?php checked(1, get_option('hello_popup_auto_show', '1')); ?> />
      Enable auto popup on page load
    </label>
  </td>
</tr>


            <tr>
                <th scope="row"><?php esc_html_e('Popup Title', 'hello-popup'); ?></th>
                <td>
                    <input type="text" name="hello_popup_title"
                        value="<?php echo esc_attr(get_option('hello_popup_title')); ?>" class="regular-text">
                </td>
            </tr>

            <tr>
                <th scope="row"><?php __('Popup Message', 'hello-popup'); ?></th>
                <td>
                    <textarea name="hello_popup_message" rows="4"
                        cols="50"><?php echo esc_textarea(stripslashes(get_option('hello_popup_message'))); ?></textarea>
                </td>
            </tr>
         

<tr valign="top">
    <th scope="row"><label for="hello_popup_image">Popup Banner Image</label></th>
    <td>
        <input type="hidden" id="hello_popup_image" name="hello_popup_image"
               value="<?php echo esc_attr(get_option('hello_popup_image')); ?>" />

        <button type="button" class="button button-primary" id="popup_image_button">
            <?php echo get_option('hello_popup_image') ? 'Change Image' : 'Select Image'; ?>
        </button>
        <br>

        <div id="popup_image_preview_container" style="position: relative; display: inline-block; margin-top: 15px;">
            <?php $image = get_option('hello_popup_image'); ?>
            <img id="popup_image_preview"
                 src="<?php echo esc_url($image); ?>"
                 style="max-width: 220px; <?php echo $image ? '' : 'display:none;'; ?> border: 1px solid #ccc; padding: 4px; background: #fff;" />

            <span id="popup_image_remove"
                  class="dashicons dashicons-no-alt hp-img-close"
                  style="<?php echo $image ? '' : 'display:none;'; ?>"></span>
        </div>
    </td>
</tr>



            <tr>
                <th scope="row"><?php esc_html_e('Delay (ms)', 'hello-popup'); ?></th>
                <td>
                    <input type="number" name="hello_popup_delay"
                        value="<?php echo esc_attr(get_option('hello_popup_delay', 1500)); ?>">
                </td>
            </tr>



            <tr valign="top">
    <th scope="row"><label for="hello_popup_cta_text">CTA Button Text</label></th>
    <td>
        <input type="text" id="hello_popup_cta_text" name="hello_popup_cta_text"
               value="<?php echo esc_attr(get_option('hello_popup_cta_text', 'Click Here')); ?>" />
    </td>
</tr>

<tr valign="top">
    <th scope="row"><label for="hello_popup_cta_url">CTA Button URL</label></th>
    <td>
        <input type="url" id="hello_popup_cta_url" name="hello_popup_cta_url"
               value="<?php echo esc_attr(get_option('hello_popup_cta_url', '#')); ?>" style="width: 70%;" />
    </td>
</tr>

<tr valign="top">
    <th scope="row"><label for="hello_popup_cta_color">CTA Button Color</label></th>
    <td>
        <input type="color" id="hello_popup_cta_color" name="hello_popup_cta_color"
               value="<?php echo esc_attr(get_option('hello_popup_cta_color', '#ff6600')); ?>" />
    </td>
</tr>



            <tr>
                <th scope="row"><?php esc_html_e('Popup Shortcode', 'hello-popup'); ?></th>
                <td>
                    <input type="text" name="hello_popup_shortcode"
                        value="<?php echo esc_attr(stripslashes(get_option('hello_popup_shortcode'))); ?>"
                        class="regular-text" placeholder="[contact-form-7 id='123']" />
                    <p class="description">Paste any valid WordPress shortcode (e.g., Contact Form 7, WPForms, etc.)</p>
                </td>
            </tr>


            <tr valign="top">
    <th scope="row">Popup Hide Duration</th>
    <td>
        <input type="number" name="hello_popup_expiry" value="<?php echo esc_attr(get_option('hello_popup_expiry', 24)); ?>" min="1" />
        <p class="description">Hide popup for this many hours after user closes it.</p>
    </td>
</tr>

<tr valign="top">
  <th scope="row">Popup Trigger Class</th>
  <td>
    <p>Add this class to any button or element to trigger the popup manually:</p>
    <div style="display: flex; align-items: center; gap: 8px;">
      <input type="text" id="popup_trigger_class" value="hp-show-popup-btn" readonly style="width: 250px;" />
      <button type="button" class="button" id="copy_trigger_class_btn">Copy</button>
    </div>
    <small>Example: &lt;button class="hp-show-popup-btn"&gt;Show Popup&lt;/button&gt;</small>
  </td>
</tr>






        </table>

        <button type="submit" class="button button-primary">
            <?php esc_html_e('Save Settings', 'hello-popup'); ?>
        </button>
    </form>

    <div id="hello-popup-settings-message"></div>
    <div id="hello-toast-container" style="position: fixed; bottom: 30px; right: 30px; z-index: 9999;"></div>

</div>

<?php


// new backup 
?>
<div class="hp-advanced-settings">
  <div class="hp-advanced-header" id="toggle-advanced-settings">
    <strong><?php esc_html_e('Advanced Settings', 'hello-popup'); ?></strong>
    <span class="dashicons dashicons-arrow-down toggle-icon"></span>
  </div>

  <div class="hp-advanced-content" style="display: none;">
    <p>💡 You can override the default popup styles below using CSS:</p>
    <label for="hello_popup_custom_css"><strong><?php esc_html_e('Custom CSS', 'hello-popup'); ?></strong></label>
    <?php
$default_css = "#hp-modal {}\n.hp-overlay {}\n.hp-container {}\n.hp-content {}\n.hp-cta-button {}\n";
$custom_css = get_option('hello_popup_custom_css', '');
if (empty(trim($custom_css))) {
    $custom_css = $default_css;
}
?>
<textarea id="hello_popup_custom_css" name="hello_popup_custom_css" rows="10" cols="30" class="large-text code"><?php echo esc_textarea($custom_css);  ?></textarea>
  </div>
</div>
