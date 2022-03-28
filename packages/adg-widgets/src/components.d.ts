/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
export namespace Components {
    interface AccessibleDropdown {
        "ariaLiveAssertive": boolean;
        "filterLabel": string;
        "options": string[];
        "roleAlert": boolean;
        "showInstructions": boolean;
    }
}
declare global {
    interface HTMLAccessibleDropdownElement extends Components.AccessibleDropdown, HTMLStencilElement {
    }
    var HTMLAccessibleDropdownElement: {
        prototype: HTMLAccessibleDropdownElement;
        new (): HTMLAccessibleDropdownElement;
    };
    interface HTMLElementTagNameMap {
        "accessible-dropdown": HTMLAccessibleDropdownElement;
    }
}
declare namespace LocalJSX {
    interface AccessibleDropdown {
        "ariaLiveAssertive"?: boolean;
        "filterLabel"?: string;
        "options"?: string[];
        "roleAlert"?: boolean;
        "showInstructions"?: boolean;
    }
    interface IntrinsicElements {
        "accessible-dropdown": AccessibleDropdown;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "accessible-dropdown": LocalJSX.AccessibleDropdown & JSXBase.HTMLAttributes<HTMLAccessibleDropdownElement>;
        }
    }
}
