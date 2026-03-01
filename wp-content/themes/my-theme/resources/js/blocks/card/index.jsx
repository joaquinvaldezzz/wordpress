import { registerBlockType } from "@wordpress/blocks";
import {
  useBlockProps,
  InspectorControls,
  MediaUpload,
  MediaUploadCheck,
  RichText,
} from "@wordpress/block-editor";
import { PanelBody, Button, TextControl } from "@wordpress/components";
import { __ } from "@wordpress/i18n";

import metadata from "../../../blocks/card/block.json";

registerBlockType(metadata.name, {
  ...metadata,

  edit({ attributes, setAttributes }) {
    const blockProps = useBlockProps({ className: "card-block" });
    const { imageUrl, imageId, imageAlt, title, description, linkUrl, linkText } = attributes;

    const onSelectImage = (media) => {
      setAttributes({
        imageUrl: media.url,
        imageId: media.id,
        imageAlt: media.alt || "",
      });
    };

    const onRemoveImage = () => {
      setAttributes({
        imageUrl: "",
        imageId: 0,
        imageAlt: "",
      });
    };

    return (
      <>
        <InspectorControls>
          <PanelBody title={__("Link Settings", "sage")}>
            <TextControl
              label={__("Link URL", "sage")}
              value={linkUrl}
              onChange={(value) => setAttributes({ linkUrl: value })}
              __nextHasNoMarginBottom
            />
            <TextControl
              label={__("Link Text", "sage")}
              value={linkText}
              onChange={(value) => setAttributes({ linkText: value })}
              __nextHasNoMarginBottom
            />
          </PanelBody>
        </InspectorControls>

        <div className="overflow-hidden rounded-2xl bg-white shadow-md" {...blockProps}>
          <div className="card-block__image">
            <MediaUploadCheck>
              <MediaUpload
                onSelect={onSelectImage}
                allowedTypes={["image"]}
                value={imageId}
                render={({ open }) =>
                  imageUrl ? (
                    <div className="card-block__image-preview">
                      <img src={imageUrl} alt={imageAlt} />
                      <div className="card-block__image-actions">
                        <Button onClick={open} variant="secondary" size="small">
                          {__("Replace", "sage")}
                        </Button>
                        <Button onClick={onRemoveImage} isDestructive size="small">
                          {__("Remove", "sage")}
                        </Button>
                      </div>
                    </div>
                  ) : (
                    <Button onClick={open} variant="secondary" className="card-block__upload-btn">
                      {__("Select Image", "sage")}
                    </Button>
                  )
                }
              />
            </MediaUploadCheck>
          </div>

          <div className="p-6">
            <RichText
              tagName="h3"
              className="text-4xl font-semibold tracking-tight"
              value={title}
              onChange={(value) => setAttributes({ title: value })}
              placeholder={__("Card Title...", "sage")}
            />

            <RichText
              tagName="p"
              className="text-xl text-gray-600"
              value={description}
              onChange={(value) => setAttributes({ description: value })}
              placeholder={__("Card description...", "sage")}
            />

            {linkText && (
              <span className="inline-block rounded-xl bg-amber-600 px-4 py-3 text-amber-50 no-underline!">
                {linkText}
              </span>
            )}
          </div>
        </div>
      </>
    );
  },

  save() {
    return null;
  },
});
