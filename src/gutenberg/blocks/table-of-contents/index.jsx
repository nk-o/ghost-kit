/**
 * Import CSS
 */
import './editor.scss';
import './style.scss';

/**
 * WordPress dependencies
 */
const { __ } = wp.i18n;

/**
 * Internal dependencies
 */
import getIcon from '../../utils/get-icon';
import metadata from './block.json';
import edit from './edit';
import save from './save';

const { name } = metadata;

export { metadata, name };

export const settings = {
    ...metadata,
    title: __( 'Table of Contents', '@@text_domain' ),
    description: __( 'Automatically generate a table of contents by parsing page headers in content.', '@@text_domain' ),
    icon: getIcon( 'block-table-of-contents', true ),
    keywords: [
        __( 'table of contents', '@@text_domain' ),
        __( 'toc', '@@text_domain' ),
    ],
    ghostkit: {
        previewUrl: 'https://ghostkit.io/blocks/table-of-contents/',
        supports: {
            styles: true,
            spacings: true,
            display: true,
            customCSS: true,
        },
    },
    supports: {
        html: false,
        className: false,
        align: [ 'wide', 'full' ],
    },
    edit,
    save,
};
