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

import metadata from "../../../blocks/hero/block.json";

registerBlockType(metadata.name, {
  ...metadata,

  edit({ attributes, setAttributes }) {
    const blockProps = useBlockProps({
      className: "hero-block relative overflow-hidden rounded-3xl bg-slate-950 text-white",
    });

    const { heading, subheading, buttonText, buttonUrl, imageUrl, imageId, imageAlt } = attributes;

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
          <PanelBody title={__("Hero Media", "sage")}>
            <MediaUploadCheck>
              <MediaUpload
                onSelect={onSelectImage}
                allowedTypes={["image"]}
                value={imageId}
                render={({ open }) =>
                  imageUrl ? (
                    <div className="space-y-3">
                      <Button onClick={open} variant="secondary" size="small">
                        {__("Replace Image", "sage")}
                      </Button>
                      <Button onClick={onRemoveImage} isDestructive size="small">
                        {__("Remove Image", "sage")}
                      </Button>
                    </div>
                  ) : (
                    <Button onClick={open} variant="secondary">
                      {__("Select Background Image", "sage")}
                    </Button>
                  )
                }
              />
            </MediaUploadCheck>
          </PanelBody>

          <PanelBody title={__("Call To Action", "sage")} initialOpen={false}>
            <TextControl
              label={__("Button URL", "sage")}
              value={buttonUrl}
              onChange={(value) => setAttributes({ buttonUrl: value })}
              __nextHasNoMarginBottom
            />
          </PanelBody>
        </InspectorControls>

        <section {...blockProps}>
          <div className="absolute inset-0">
            {imageUrl ? (
              <img className="size-full object-cover" src={imageUrl} alt={imageAlt} />
            ) : (
              <div className="size-full bg-linear-to-br from-slate-900 via-slate-800 to-slate-950" />
            )}
            <div className="absolute inset-0 bg-slate-950/50" />
          </div>

          <div className="relative z-10 flex min-h-80 flex-col justify-center gap-6 p-10 md:min-h-105 md:p-16">
            <RichText
              tagName="h2"
              className="text-4xl font-semibold tracking-tight md:text-5xl"
              value={heading}
              onChange={(value) => setAttributes({ heading: value })}
              placeholder={__("Hero headline...", "sage")}
            />

            <RichText
              tagName="p"
              className="max-w-2xl text-lg text-slate-200 md:text-xl"
              value={subheading}
              onChange={(value) => setAttributes({ subheading: value })}
              placeholder={__("Hero subheading...", "sage")}
            />

            <div>
              {buttonUrl ? (
                <a
                  className="inline-flex items-center rounded-full bg-amber-500 px-6 py-3 text-base font-semibold text-amber-950 no-underline!"
                  href={buttonUrl}
                >
                  <RichText
                    tagName="span"
                    value={buttonText}
                    onChange={(value) => setAttributes({ buttonText: value })}
                    placeholder={__("Button text...", "sage")}
                  />
                </a>
              ) : (
                <span className="inline-flex items-center rounded-full bg-amber-500 px-6 py-3 text-base font-semibold text-amber-950">
                  <RichText
                    tagName="span"
                    value={buttonText}
                    onChange={(value) => setAttributes({ buttonText: value })}
                    placeholder={__("Button text...", "sage")}
                  />
                </span>
              )}
            </div>
          </div>
        </section>
      </>
    );
  },

  save() {
    return null;
  },
});
