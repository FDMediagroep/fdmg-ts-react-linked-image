"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var fdmg_ts_react_anchor_1 = require("fdmg-ts-react-anchor");
var fdmg_ts_react_image_1 = require("fdmg-ts-react-image");
/**
 * Renders an image wrapped in an anchor.
 */
var LinkedImage = /** @class */ (function (_super) {
    __extends(LinkedImage, _super);
    function LinkedImage(props) {
        var _this = _super.call(this, props) || this;
        _this.props = props;
        console.info('LinkedImage composition', props);
        return _this;
    }
    LinkedImage.prototype.render = function () {
        return (React.createElement(fdmg_ts_react_anchor_1.default, { href: this.props.href, target: this.props.target, className: this.props.className, "aria-label": this.props.ariaLabel ? this.props.ariaLabel : this.props.alt, onClick: this.props.onClick },
            React.createElement(fdmg_ts_react_image_1.default, { src: this.props.src, alt: this.props.alt })));
    };
    return LinkedImage;
}(React.Component));
exports.default = LinkedImage;
