import { registerBlockType } from "@wordpress/blocks";
import { useBlockProps, InspectorControls, RichText } from "@wordpress/block-editor";
import { PanelBody, SelectControl, TextControl } from "@wordpress/components";
import { __ } from "@wordpress/i18n";

import metadata from "../../../blocks/alert/block.json";

registerBlockType(metadata.name, {
  ...metadata,

  edit({ attributes, setAttributes }) {
    const blockProps = useBlockProps();
    const { type, title, message } = attributes;

    return (
      <>
        <InspectorControls>
          <PanelBody title={__("Alert Settings", "sage")}>
            <SelectControl
              label={__("Alert Type", "sage")}
              value={type}
              options={[
                { label: "Info", value: "info" },
                { label: "Success", value: "success" },
                { label: "Warning", value: "warning" },
                { label: "Error", value: "error" },
              ]}
              onChange={(value) => setAttributes({ type: value })}
            />
            <TextControl
              label={__("Title", "sage")}
              value={title}
              onChange={(value) => setAttributes({ title: value })}
              placeholder={__("Optional title...", "sage")}
              __nextHasNoMarginBottom
            />
          </PanelBody>
        </InspectorControls>

        <div {...blockProps}>
          <custom-alert type={type} title={title}>
            <RichText
              tagName="div"
              value={message}
              onChange={(value) => setAttributes({ message: value })}
              placeholder={__("Alert message...", "sage")}
            />
          </custom-alert>
        </div>
      </>
    );
  },

  save() {
    return null;
  },
});
