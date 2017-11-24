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
var fdmg_ts_react_image_button_1 = require("fdmg-ts-react-image-button");
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
    LinkedImage.prototype.componentDidMount = function () {
        console.info('LinkedImage mounted');
    };
    LinkedImage.prototype.componentWillUnmount = function () {
        console.info('LinkedImage will unmount');
    };
    LinkedImage.prototype.componentWillReceiveProps = function (nextProps) {
        console.info('LinkedImage next props', nextProps);
    };
    LinkedImage.prototype.render = function () {
        return (React.createElement("a", { href: this.props.href, target: this.props.target ? this.props.target : '_blank', className: this.props.className, "aria-label": this.props.ariaLabel ? this.props.ariaLabel : this.props.alt },
            React.createElement(fdmg_ts_react_image_button_1.default, { src: this.props.src, alt: this.props.alt })));
    };
    return LinkedImage;
}(React.Component));
exports.default = LinkedImage;
