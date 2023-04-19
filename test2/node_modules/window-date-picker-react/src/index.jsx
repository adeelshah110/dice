import React from 'react';
import PropTypes from 'prop-types';
import WDP from 'window-date-picker';

export default class WindowDatePicker extends React.Component {
    componentDidMount() {
        this.wdp = new WDP({
            el: this.el,
            value: this.props.value,
            inputEl: this.props.inputEl,
            toggleEl: this.props.toggleEl,
            type: this.props.type,
            dateType: this.props.dateType,
            hourType: this.props.hourType,
            allowEmpty: this.props.allowEmpty,
            showButtons: this.props.showButtons,
            inputToggle: this.props.inputToggle,
            lang: this.props.lang
        });

        if(typeof this.props.onChange !== 'undefined') {
            this.el.addEventListener('wdp.change', this.props.onChange);
        }
        if(typeof this.props.onOpen !== 'undefined') {
            this.el.addEventListener('wdp.open', this.props.onOpen);
        }
        if(typeof this.props.onClose !== 'undefined') {
            this.el.addEventListener('wdp.close', this.props.onClose);
        }
        if(typeof this.props.onSave !== 'undefined') {
            this.el.addEventListener('wdp.save', this.props.onSave);
        }
        if(typeof this.props.onCancel !== 'undefined') {
            this.el.addEventListener('wdp.cancel', this.props.onCancel);
        }
        if(typeof this.props.onDestroy !== 'undefined') {
            this.el.addEventListener('wdp.destroy', this.props.onDestroy);
        }
    }

    get() {
        return this.wdp.get();
    }

    set(value) {
        this.wdp.set(value);
    }

    open() {
        this.wdp.open();
    }

    close() {
        this.wdp.close();
    }

    toggle() {
        this.wdp.toggle();
    }

    save() {
        this.wdp.save();
    }

    cancel() {
        this.wdp.cancel();
    }

    destroy() {
        this.wdp.destroy();
    }
    
    render() {
        return(
            <div className={this.props.className} ref={e => this.el = e} />
        );
    }

    static createLanguage(name, lang) {
        WDP.createLanguage(name, lang);
    }
}

WindowDatePicker.propTypes = {
    value: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number,
        PropTypes.instanceOf(Date)
    ]),
    inputEl: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.instanceOf(HTMLInputElement)
    ]),
    toggleEl: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.instanceOf(HTMLElement)
    ]),
    type: PropTypes.string,
    dateType: PropTypes.string,
    hourType: PropTypes.string,
    allowEmpty: PropTypes.bool,
    showButtons: PropTypes.bool,
    inputToggle: PropTypes.bool,
    lang: PropTypes.string,
    className: PropTypes.string
};