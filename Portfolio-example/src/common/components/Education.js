import React, { Component, PropTypes } from 'react';
import Banner from './layout/Banner';


class Education extends Component {

  render () {
    return (
      <div>
	      	{/* <Banner /> */}

	      <div className="services">
        <p>Temabuilding</p>
        <p>Branchkunskap för Webbutvecklare</p>
        <p>Gränssnitt & Grafik</p>
        <p>HTML & CSS</p>
        <p>Javascript & Programeringsmetodik</p>
        <p>PHP Backend & Databaser</p>
        <p>LIA 1</p>
	      </div>

	      <div className="services">
        <p>Utvecklingsmetodik & Agila metoder</p>
        <p>CMS & Integration</p>
        <p>User experience UX Design</p>
        <p>Frontend Web Design</p>
        <p>Hybridapplikationer</p>
        <p>LIA 2</p>
        <p>Examensarbete</p>
	      </div>

      </div>
    );
  }
}

export default Education;