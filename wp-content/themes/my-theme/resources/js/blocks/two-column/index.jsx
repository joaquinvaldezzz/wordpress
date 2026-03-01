import { registerBlockType } from "@wordpress/blocks";
import { InnerBlocks, useBlockProps } from "@wordpress/block-editor";

import metadata from "../../../blocks/two-column/block.json";

const TEMPLATE = [
  [
    "core/columns",
    { className: "two-column-block__columns" },
    [
      ["core/column", { className: "two-column-block__column" }, []],
      ["core/column", { className: "two-column-block__column" }, []],
    ],
  ],
];

registerBlockType(metadata.name, {
  ...metadata,

  edit() {
    const blockProps = useBlockProps({
      className: "grid grid-cols-2 gap-4 rounded-3xl border border-slate-200 bg-white p-8",
    });

    return (
      <section {...blockProps}>
        <InnerBlocks template={TEMPLATE} />
      </section>
    );
  },

  save() {
    const blockProps = useBlockProps.save({
      className: "grid grid-cols-2 gap-4 rounded-3xl border border-slate-200 bg-white p-8",
    });

    return (
      <section {...blockProps}>
        <InnerBlocks.Content />
      </section>
    );
  },
});
