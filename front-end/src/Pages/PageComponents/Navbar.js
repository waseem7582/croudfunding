import React from 'react';
import {Link} from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faGithub } from '@fortawesome/free-brands-svg-icons';


const Navbar = () => {
    return (
            <div className="d-flex flex-lg-nowrap justify-content-between blue p-1">
                <div className="p-0 m-1">
                    <img src={'./static/img/page/spacer.gif'} height={1} width={30}/>
                    <Link to={'/'}>
                        <button className="btn blue text-white btn-lg" type="button">Crowd Funding</button>
                    </Link>
                </div>
                <div className="p-0 m-0"> </div>
                <div className="p-0 m-0 d-inline-block text-white">
                    <img src={'./static/img/page/spacer.gif'} height={55} width={1}/>
                    
                    <img src={'./static/img/page/spacer.gif'} height={1} width={20}/>
                    <a className={"text-white"} href={"http://www.twitter.com"}>
                    <FontAwesomeIcon icon={faTwitter} />
                    </a>
                    <img src={'./static/img/page/spacer.gif'} height={1} width={20}/>
                    <a className={"text-white"} href={"https://github.com/simone-smith/donate-period"}>
                    <FontAwesomeIcon icon={faGithub} />
                    </a>
                    <img src={'./static/img/page/spacer.gif'} height={1} width={50}/>
                </div>
            </div>
    );
};

export default Navbar;
