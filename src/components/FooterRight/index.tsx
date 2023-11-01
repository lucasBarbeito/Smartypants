import React, {useState} from 'react';
import {cva, VariantProps} from "class-variance-authority";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faBookOpen, faTrophy} from '@fortawesome/free-solid-svg-icons';
import './FooterRight.css';

const footerRightVariant = cva([])

export interface FooterRightProps extends VariantProps<typeof footerRightVariant> {

}

function FooterRight() {

    return (
        <div className="footer-right">
            <div className="sidebar-icon">
                <FontAwesomeIcon
                    icon={faTrophy}
                    style={{width: '35px', height: '35px', color: 'white'}}
                />
            </div>
            <div className="sidebar-icon">
                <FontAwesomeIcon icon={faBookOpen} style={{width: '35px', height: '35px', color: 'white'}}/>
            </div>
        </div>
    );
}

export default FooterRight;