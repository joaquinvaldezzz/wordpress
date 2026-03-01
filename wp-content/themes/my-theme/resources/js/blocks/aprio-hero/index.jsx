import { registerBlockType } from "@wordpress/blocks";
import { useBlockProps, InspectorControls, RichText } from "@wordpress/block-editor";
import { PanelBody, TextControl } from "@wordpress/components";
import { __ } from "@wordpress/i18n";

import metadata from "../../../blocks/aprio-hero/block.json";

registerBlockType(metadata.name, {
  ...metadata,

  edit({ attributes, setAttributes }) {
    const blockProps = useBlockProps({
      className: "aprio-hero-block bg-linear-to-br from-orange-600 via-orange-500 to-amber-500",
    });

    const {
      headline,
      description,
      primaryButtonText,
      primaryButtonUrl,
      secondaryButtonText,
      secondaryButtonUrl,
    } = attributes;

    return (
      <>
        <InspectorControls>
          <PanelBody title={__("Primary Button", "sage")}>
            <TextControl
              label={__("Button URL", "sage")}
              value={primaryButtonUrl}
              onChange={(value) => setAttributes({ primaryButtonUrl: value })}
              __nextHasNoMarginBottom
            />
          </PanelBody>

          <PanelBody title={__("Secondary Button", "sage")} initialOpen={false}>
            <TextControl
              label={__("Button URL", "sage")}
              value={secondaryButtonUrl}
              onChange={(value) => setAttributes({ secondaryButtonUrl: value })}
              __nextHasNoMarginBottom
            />
          </PanelBody>
        </InspectorControls>

        <section {...blockProps}>
          <div className="mx-auto flex min-h-96 max-w-4xl flex-col items-center justify-center gap-8 px-8 py-24 text-center text-white md:min-h-112">
            <RichText
              tagName="h1"
              className="text-5xl font-bold tracking-tight md:text-6xl lg:text-7xl"
              value={headline}
              onChange={(value) => setAttributes({ headline: value })}
              placeholder={__("Enter your headline...", "sage")}
            />

            <RichText
              tagName="p"
              className="max-w-3xl text-lg leading-relaxed md:text-xl"
              value={description}
              onChange={(value) => setAttributes({ description: value })}
              placeholder={__("Enter your description...", "sage")}
            />

            <div className="flex flex-wrap items-center justify-center gap-4">
              {primaryButtonUrl ? (
                <a
                  className="rounded-full bg-white px-8 py-4 text-base font-bold tracking-wide text-orange-600 uppercase no-underline! transition hover:bg-orange-50"
                  href={primaryButtonUrl}
                  onClick={(e) => e.preventDefault()}
                >
                  <RichText
                    tagName="span"
                    value={primaryButtonText}
                    onChange={(value) => setAttributes({ primaryButtonText: value })}
                    placeholder={__("Primary button...", "sage")}
                  />
                </a>
              ) : (
                <span className="rounded-full bg-white px-8 py-4 text-base font-bold tracking-wide text-orange-600 uppercase">
                  <RichText
                    tagName="span"
                    value={primaryButtonText}
                    onChange={(value) => setAttributes({ primaryButtonText: value })}
                    placeholder={__("Primary button...", "sage")}
                  />
                </span>
              )}

              {secondaryButtonUrl ? (
                <a
                  className="rounded-full border-2 border-white bg-transparent px-8 py-4 text-base font-bold tracking-wide text-white uppercase no-underline! transition hover:bg-white/10"
                  href={secondaryButtonUrl}
                  onClick={(e) => e.preventDefault()}
                >
                  <RichText
                    tagName="span"
                    value={secondaryButtonText}
                    onChange={(value) => setAttributes({ secondaryButtonText: value })}
                    placeholder={__("Secondary button...", "sage")}
                  />
                </a>
              ) : (
                <span className="rounded-full border-2 border-white bg-transparent px-8 py-4 text-base font-bold tracking-wide text-white uppercase">
                  <RichText
                    tagName="span"
                    value={secondaryButtonText}
                    onChange={(value) => setAttributes({ secondaryButtonText: value })}
                    placeholder={__("Secondary button...", "sage")}
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
