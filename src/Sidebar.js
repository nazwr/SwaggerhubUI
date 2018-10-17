import React from 'react';
// import dir from 'node-dir';
// import './Sidebar.css';
import APILink from './APILink.js'
import TutorialLink from './TutorialLink.js'

const Sidebar = props => {
  let orgData = props.orgData;
  let orgAPIData = props.orgAPIData;
  let orgName = orgData.orgName
  let displayImage = orgData.displayImage
  let tutorialList = ['How It Works', 'link 2']
  
  let APILinks = [];
  let tutorialLinks = [];

  if (orgAPIData === null) {
    props.getOrganizationData(orgData.orgName)
  } else {
    for (let i=0; i < orgAPIData.length; i++) {
      APILinks.push(
        <APILink 
          key={i}
          orgAPIData={props.orgAPIData[i]}
          getAPIData={props.getAPIData}
        />
      )
    }
  }

  for (let n=0; n < tutorialList.length; n++) {
    tutorialLinks.push(
      <TutorialLink 
        key={n}
        linkName={tutorialList[n]}
        getStaticFile={props.getStaticFile}
      />
    )
  }

  return (
    <div className="side-bar">
      <header className="side-bar-header">
          <img src={displayImage} className="side-bar-logo" alt="logo" />
          <h1 className="org-title">{orgName}</h1>
      </header>
      <div className="side-bar-body">
        <h3 className="side-bar-title">TUTORIALS</h3>
        {tutorialLinks}
        <h3 className="side-bar-title">API DOCS</h3>
        {APILinks}
        <h3 className="side-bar-title">SANDBOX</h3>
        <h4 className="api-link">Authenticating</h4>
        <h4 className="api-link">Getting User Data</h4>
      </div>
      <div className="side-bar-footer">
        <h4><a href="http://app.swaggerhub.com">POWERED BY SWAGGERHUB</a></h4>
      </div>
    </div>
  )
}

export default Sidebar;